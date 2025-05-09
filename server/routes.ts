import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import * as xml2js from "xml2js";

interface NaverBlogPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // 네이버 블로그 RSS 피드 가져오기
  app.get('/api/naver-blog', async (req: Request, res: Response) => {
    try {
      // 네이버 블로그 RSS 주소
      const rssUrl = 'https://rss.blog.naver.com/5gtime.xml';
      
      // 최대 게시물 수 (기본값: 6)
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 6;
      
      const response = await axios.get(rssUrl);
      const parser = new xml2js.Parser({ explicitArray: false });
      const result = await parser.parseStringPromise(response.data);
      
      // RSS 피드 파싱
      const channel = result.rss.channel;
      const items = Array.isArray(channel.item) ? channel.item : [channel.item];
      
      // 포스트 데이터 가공
      const posts: NaverBlogPost[] = items.slice(0, limit).map((item: any, index: number) => {
        // HTML 태그 제거하고 설명에서 텍스트만 추출
        const description = item.description?.replace(/<\/?[^>]+(>|$)/g, "") || "";
        
        return {
          id: index.toString(),
          title: item.title,
          link: item.link,
          description: description.slice(0, 150) + "...",
          pubDate: new Date(item.pubDate).toLocaleDateString('ko-KR'),
          author: item.author
        };
      });
      
      res.json(posts);
    } catch (error) {
      console.error('네이버 블로그 RSS 가져오기 오류:', error);
      res.status(500).json({ 
        error: '블로그 데이터를 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
