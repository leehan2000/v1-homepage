import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import * as xml2js from "xml2js";
import path from "path";
import fs from "fs";
import { promises as fsPromises } from "fs";

interface NaverBlogPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  thumbnail?: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // 이미지 캐시 디렉토리 생성
  const cacheDir = path.join(process.cwd(), 'public', 'image-cache');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }

  // 이미지 프록시 기능 (네이버 블로그 이미지 가져오기)
  app.get('/api/proxy-image', async (req: Request, res: Response) => {
    const imageUrl = req.query.url as string;
    
    if (!imageUrl) {
      return res.status(400).send('Image URL is required');
    }
    
    try {
      // 이미지 URL에서 파일 이름 생성
      const filename = Buffer.from(imageUrl).toString('base64').replace(/\//g, '_') + '.jpg';
      const cachePath = path.join(cacheDir, filename);
      
      // 캐시된 이미지가 있는지 확인
      if (fs.existsSync(cachePath)) {
        // 캐시된 이미지 반환
        res.sendFile(cachePath);
        return;
      }
      
      // 이미지 다운로드 (네이버 블로그 이미지는 Referer 헤더가 필요)
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Referer': 'https://blog.naver.com/',
        }
      });
      
      // 이미지 파일로 저장
      await fsPromises.writeFile(cachePath, response.data);
      
      // 이미지 타입 설정
      res.set('Content-Type', response.headers['content-type'] || 'image/jpeg');
      
      // 캐시 설정 (1주일)
      res.set('Cache-Control', 'public, max-age=604800');
      
      // 이미지 반환
      res.send(response.data);
      
    } catch (error) {
      console.error('이미지 프록시 오류:', error);
      res.status(500).send('이미지를 가져오는 중 오류가 발생했습니다.');
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
        // HTML 태그 제거하고 설명에서 텍스트만 추출
        const description = item.description?.replace(/<\/?[^>]+(>|$)/g, "") || "";
        
        // 썸네일 추출 시도 (HTML에서 첫 번째 이미지 URL 찾기)
        let thumbnail = "";
        let originalThumbnail = "";
        
        // 네이버 블로그에서는 보통 postlist에 썸네일 이미지가 있음
        const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
        
        if (imgMatch && imgMatch.length > 1) {
          // 썸네일 이미지 URL이 있으면 사용
          originalThumbnail = imgMatch[1];
          
          // 이미지 프록시 URL로 변환
          thumbnail = `/api/proxy-image?url=${encodeURIComponent(originalThumbnail)}`;
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
          originalThumbnail // 디버깅용
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
