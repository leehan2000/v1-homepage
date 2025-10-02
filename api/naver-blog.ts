import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import * as xml2js from 'xml2js';

interface NaverBlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  thumbnail: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
      };
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error('네이버 블로그 RSS 가져오기 오류:', error);
    res.status(500).json({ 
      error: '블로그 데이터를 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
    });
  }
}

