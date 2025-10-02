import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

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
    res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
    
    // 캐시 설정 (1일)
    res.setHeader('Cache-Control', 'public, max-age=86400');
    
    // 이미지 전송
    res.send(response.data);
  } catch (error) {
    console.error('썸네일 이미지 가져오기 오류:', error);
    res.status(500).send('이미지를 가져오는데 실패했습니다.');
  }
}

