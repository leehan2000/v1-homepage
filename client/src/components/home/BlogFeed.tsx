import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

function BlogCard({ title, link, pubDate }) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-lgred transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold text-lgtext mb-2">{title}</h3>
        </a>
        <p className="text-sm text-lgtext_light">
          {new Date(pubDate).toLocaleDateString('ko-KR')}
        </p>
      </CardContent>
    </Card>
  );
}

export default function BlogFeed({ category, limit = 6 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const qs = new URLSearchParams({ category, limit }).toString();
    fetch(`/blog-feed?${qs}`)
      .then(res => {
        if (!res.ok) throw new Error('API 오류');
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [category, limit]);

  if (loading) return <p>블로그 글 로딩 중…</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!posts.length) return <p>글이 없습니다.</p>;

  return (
    <section id="blog-feed" className="py-16 bg-white border-b border-lgborder">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lgtext mb-6 relative inline-block">
            최신 블로그 글
            <div className="h-1 w-1/2 bg-lgred mt-3 mx-auto"></div>
          </h2>
          <p className="text-lg text-lgtext_light max-w-3xl mx-auto leading-relaxed">
            {category ? `${category} 카테고리 최신 글을 확인하세요.` : '최근 블로그 글을 확인하세요.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}