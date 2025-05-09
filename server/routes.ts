import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import * as xml2js from "xml2js";

// 블로그 포스트 인터페이스
interface BlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  category: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // 블로그 피드 API 엔드포인트
  app.get("/blog-feed", async (req: Request, res: Response) => {
    try {
      const { category = "", limit = "6" } = req.query;
      const categoryFilter = category ? String(category) : "";
      const limitNumber = parseInt(String(limit), 10) || 6;
      
      // 네이버 블로그 RSS 피드 가져오기
      const response = await axios.get("https://rss.blog.naver.com/5gtime.xml");
      const parser = new xml2js.Parser({ explicitArray: false });
      const result = await parser.parseStringPromise(response.data);
      
      if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
        return res.status(404).json({ error: "블로그 포스트를 찾을 수 없습니다." });
      }
      
      // 단일 항목인 경우 배열로 변환
      const items = Array.isArray(result.rss.channel.item) 
        ? result.rss.channel.item 
        : [result.rss.channel.item];
      
      // 카테고리 필터링 및 결과 가공
      let filteredPosts = items;
      
      if (categoryFilter) {
        filteredPosts = items.filter((item: any) => {
          // 카테고리가 배열인 경우와 문자열인 경우 모두 처리
          if (Array.isArray(item.category)) {
            return item.category.includes(categoryFilter);
          }
          return item.category === categoryFilter;
        });
      }
      
      // 포스트 변환 및 정리
      const posts: BlogPost[] = filteredPosts.map((item: any) => {
        // 썸네일 이미지 추출 (description에서 첫 번째 이미지 URL 추출)
        let thumbnail = "";
        const imgMatch = item.description && item.description.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          thumbnail = imgMatch[1];
        }
        
        // HTML 태그 제거하여 설명 정리
        const plainDescription = item.description 
          ? item.description.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
          : "";
        
        return {
          id: item.guid || item.link,
          title: item.title,
          link: item.link,
          description: plainDescription,
          pubDate: item.pubDate,
          thumbnail,
          category: Array.isArray(item.category) ? item.category[0] : item.category || ""
        };
      });
      
      // 최신 순으로 정렬하고 제한된 수만큼 반환
      const sortedPosts = posts.sort((a, b) => 
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      ).slice(0, limitNumber);
      
      res.json(sortedPosts);
    } catch (error) {
      console.error("블로그 피드를 가져오는 중 오류 발생:", error);
      res.status(500).json({ error: "블로그 피드를 가져오는 중 오류가 발생했습니다." });
    }
  });

  // 데이터베이스 관련 작업은 여기에 추가

  const httpServer = createServer(app);

  return httpServer;
}
