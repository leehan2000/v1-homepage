import axios from 'axios';
import xml2js from 'xml2js';
import * as cheerio from 'cheerio';

// Vercel 서버리스 함수 타입 (없으면 any로 처리)
type VercelRequest = any;
type VercelResponse = any;

interface NaverBlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  thumbnail: string;
  originalDescription?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
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
    const posts: NaverBlogPost[] = await Promise.all(
      items.slice(0, limit).map(async (item: any, index: number) => {
        // 원본 HTML 설명 저장
        const originalDescription = item.description || "";
        
        // HTML 태그 제거하고 설명에서 텍스트만 추출
        const description = originalDescription.replace(/<\/?[^>]+(>|$)/g, "") || "";
        
        // 1) RSS description 내 첫 이미지 우선
        let thumbnail = "";
        const descImgMatch = originalDescription.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (descImgMatch && descImgMatch[1]) {
          thumbnail = descImgMatch[1];
        }
        
        // 2) og:image 추출 (RSS에 이미지가 없을 경우)
        if (!thumbnail) {
          const linkMatch = item.link.match(/blog\.naver\.com\/([^/]+)\/(\d+)/);
          if (linkMatch) {
            const [, blogId, logNo] = linkMatch;
            try {
              // 네이버 블로그 모바일 페이지 URL
              const mobileUrl = `https://m.blog.naver.com/PostView.naver?blogId=${blogId}&logNo=${logNo}`;
              
              const metaResponse = await axios.get(mobileUrl, {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                },
                timeout: 10000
              });
              
              const $ = cheerio.load(metaResponse.data);
              const ogImage = $('meta[property="og:image"]').attr('content') || '';
              
              if (ogImage) {
                thumbnail = ogImage;
              }
            } catch (err) {
              console.error(`og:image 추출 실패 (${item.link}):`, err);
            }
          }
        }
        
        // URL 정규화
        const normalizeUrl = (url: string): string => {
          if (!url) return "";
          if (url.startsWith("//")) return "https:" + url;
          if (url.startsWith("/")) return "https://blog.naver.com" + url;
          if (!url.startsWith("http")) return "https://" + url;
          return url;
        };

        let servedThumbnail = "";
        if (thumbnail) {
          const absUrl = normalizeUrl(thumbnail);
          // Vercel에서는 직접 이미지 URL 사용 (프록시 없이)
          servedThumbnail = absUrl;
        } else {
          servedThumbnail = "/images/car.jpg";
        }
        
        return {
          id: index.toString(),
          title: item.title,
          link: item.link,
          description: description.slice(0, 150) + (description.length > 150 ? "..." : ""),
          pubDate: new Date(item.pubDate).toLocaleDateString('ko-KR'),
          author: item.author,
          thumbnail: servedThumbnail,
          originalDescription
        };
      })
    );
    
    res.status(200).json(posts);
  } catch (error: any) {
    console.error('네이버 블로그 RSS 가져오기 오류:', error);
    res.status(500).json({ 
      error: '블로그 데이터를 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
    });
  }
}
