import express from 'express';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/blog-feed', async (req, res) => {
  try {
    const { category, limit = 6 } = req.query;
    const xml = await fetch('https://rss.blog.naver.com/5gtime.xml').then(r => r.text());
    const json = await parseStringPromise(xml, { explicitArray: false });
    let items = json.rss.channel.item;
    if (!Array.isArray(items)) items = [items];
    if (category) {
      items = items.filter(item => {
        const cats = Array.isArray(item.category) ? item.category : [item.category];
        return cats.includes(category);
      });
    }
    const sliced = items.slice(0, Number(limit));
    const simplified = sliced.map(item => ({
      title:   item.title,
      link:    item.link,
      pubDate: item.pubDate,
    }));
    res.json(simplified);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: '블로그 피드 로드 실패' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API 서버 실행 중: http://localhost:${PORT}`));