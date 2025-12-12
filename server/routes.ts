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
      
      let referer = 'https://blog.naver.com/';
      try {
        const u = new URL(imageUrl);
        referer = u.origin;
      } catch {
        // ignore parse error, keep default referer
      }
      
      // 네이버 블로그 이미지 가져오기 (Referer 헤더 필수)
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Referer': referer,
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
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
      
      // 포스트 데이터 가공 (썸네일은 최대한 원본 첫 이미지를 사용)
      let posts: NaverBlogPost[] = await Promise.all(
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
          
          // 2) 메타 OG 이미지 우선 시도 (실제 블로그 페이지)
          const tryGetFirstImageFromPage = async () => {
            // PC 링크를 모바일 링크로 변환 (iframe 회피)
            let targetUrl = item.link;
            const mobileUrl = targetUrl.replace("blog.naver.com/", "m.blog.naver.com/");
            if (mobileUrl !== targetUrl) {
              targetUrl = mobileUrl;
            }
            
            const html = await axios.get<string>(targetUrl, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                "Referer": "https://blog.naver.com/",
                "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
              },
              timeout: 6000,
              maxRedirects: 3,
            }).then(res => res.data);
            
            // 2-1) OG:image
            const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
            if (ogMatch && ogMatch[1]) {
              return ogMatch[1];
            }
            
            // 2-2) data-src / src / data-lazy-src 순으로 img 찾기
            const imgMatch = html.match(/<img[^>]+(?:data-src|data-lazy-src|src)=["']([^"']+)["']/i);
            if (imgMatch && imgMatch[1]) {
              return imgMatch[1];
            }
            
            return "";
          };
          
          if (!thumbnail) {
            try {
              const firstImg = await tryGetFirstImageFromPage();
              if (firstImg) {
                thumbnail = firstImg;
              }
            } catch (err) {
              console.error(`블로그 페이지 이미지 추출 실패 (${item.link}):`, err);
            }
          }
          
          // 3) URL 정규화 및 프록시 적용 (직접 호스트 접근 시 403/HOTLINK 문제 방지)
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
            servedThumbnail = `/api/blog-thumbnail?url=${encodeURIComponent(absUrl)}`;
          } else {
            servedThumbnail = `/images/car.jpg`;
          }
          
          return {
            id: index.toString(),
            title: item.title,
            link: item.link,
            description: description.slice(0, 150) + "...",
            pubDate: new Date(item.pubDate).toLocaleDateString('ko-KR'),
            author: item.author,
            thumbnail: servedThumbnail,
            originalDescription
          };
        })
      );

      // 썸네일이 기본값(`/images/car.jpg`)인 항목이 있으면 배포 서버 API로 보완 시도
      const hasDefaultThumb = posts.some(p => p.thumbnail.includes('/images/car.jpg'));
      if (hasDefaultThumb) {
        try {
          const remoteRes = await axios.get<NaverBlogPost[]>('https://v1-homepage.vercel.app/api/naver-blog?limit=' + limit);
          const remote = remoteRes.data;
          const remoteByLink = new Map<string, NaverBlogPost>();
          remote.forEach(r => remoteByLink.set(r.link, r));

          posts = posts.map(local => {
            if (!local.thumbnail.includes('/images/car.jpg')) return local;
            const matched = remoteByLink.get(local.link);
            if (matched && matched.thumbnail && !matched.thumbnail.includes('/images/car.jpg')) {
              return { ...local, thumbnail: matched.thumbnail };
            }
            return local;
          });
        } catch (e) {
          console.error('원격 썸네일 보완 실패:', e);
        }
      }
      
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
