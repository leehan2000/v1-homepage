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
  thumbnail?: string;
  originalDescription?: string; // 원본 HTML 설명
}

export async function registerRoutes(app: Express): Promise<Server> {
  // 네이버 블로그 썸네일 이미지 직접 제공
  app.get('/api/blog-thumbnail', async (req: Request, res: Response) => {
    try {
      const imageUrl = req.query.url as string;
      
      if (!imageUrl) {
        return res.status(400).send('Image URL is required');
      }
      
      // 네이버 블로그 이미지 가져오기 (Referer 헤더 필수)
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Referer': 'https://blog.naver.com/',
        }
      });
      
      // 이미지 타입 설정
      res.set('Content-Type', response.headers['content-type'] || 'image/jpeg');
      
      // 캐시 설정 (1일)
      res.set('Cache-Control', 'public, max-age=86400');
      
      // 이미지 전송
      res.send(response.data);
    } catch (error) {
      console.error('썸네일 이미지 가져오기 오류:', error);
      res.status(500).send('이미지를 가져오는데 실패했습니다.');
    }
  });

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
        // 원본 HTML 설명 저장
        const originalDescription = item.description || "";
        
        // HTML 태그 제거하고 설명에서 텍스트만 추출
        const description = originalDescription.replace(/<\/?[^>]+(>|$)/g, "") || "";
        
        // 이미지 URL 추출
        let thumbnail = "";
        const imgMatch = originalDescription.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch.length > 1) {
          // 썸네일 이미지 URL을 프록시 API를 통해 제공
          const originalImageUrl = imgMatch[1];
          thumbnail = `/api/blog-thumbnail?url=${encodeURIComponent(originalImageUrl)}`;
        } else {
          // 기본 이미지 사용
          thumbnail = `/images/daily${(index % 6) + 1}.jpg`;
        }
        
        return {
          id: index.toString(),
          title: item.title,
          link: item.link,
          description: description.slice(0, 150) + "...",
          pubDate: new Date(item.pubDate).toLocaleDateString('ko-KR'),
          author: item.author,
          thumbnail,
          originalDescription
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
