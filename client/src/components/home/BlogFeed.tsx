import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
}

interface BlogCardProps {
  title: string;
  link: string;
  pubDate: string;
}

function BlogCard({ title, link, pubDate }: BlogCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        </a>
        <p className="text-sm text-gray-500">
          {new Date(pubDate).toLocaleDateString('ko-KR')}
        </p>
      </CardContent>
    </Card>
  );
}

interface BlogFeedProps {
  category: string;
  limit?: number;
}

export default function BlogFeed({ category, limit = 6 }: BlogFeedProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 샘플 데이터 - 실제 API 연동 대신 사용
    const samplePosts: BlogPost[] = [
      {
        title: '유무선 통신 솔루션의 최신 트렌드',
        link: 'https://blog.naver.com/5gtime',
        pubDate: '2025-04-15',
        description: '최근 5G 기술의 발전과 함께 기업용 통신 솔루션도 빠르게 변화하고 있습니다.'
      },
      {
        title: '스마트 오피스를 위한 네트워크 구축 가이드',
        link: 'https://blog.naver.com/5gtime',
        pubDate: '2025-04-03',
        description: '재택근무와 하이브리드 워크가 일반화되면서 스마트 오피스를 위한 네트워크 인프라 구축이 중요해졌습니다.'
      },
      {
        title: '차량 IoT 솔루션으로 물류 효율성 높이기',
        link: 'https://blog.naver.com/5gtime',
        pubDate: '2025-03-22',
        description: '물류 및 운송 산업에서 차량 IoT 도입으로 얻을 수 있는 효과와 실제 적용 사례를 소개합니다.'
      },
      {
        title: '중소기업을 위한 비용 효율적인 통신 인프라 구축 방법',
        link: 'https://blog.naver.com/5gtime',
        pubDate: '2025-03-10',
        description: '제한된 예산으로도 효과적인 비즈니스 통신 환경을 구축하는 방법을 알아봅니다.'
      }
    ];
    
    // 로딩 상태 표시를 위한 지연 추가
    setTimeout(() => {
      setPosts(samplePosts.slice(0, limit));
      setLoading(false);
    }, 1000);
  }, [category, limit]);

  if (loading) return <p className="text-center py-8">블로그 글 로딩 중...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;
  if (!posts.length) return <p className="text-center py-8">글이 없습니다.</p>;

  return (
    <section id="blog-feed" className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
            최신 블로그 글
            <div className="h-1 w-1/2 bg-primary mt-3 mx-auto"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {category ? `${category} 카테고리 최신 글을 확인하세요.` : '최근 블로그 글을 확인하세요.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <BlogCard 
              key={index} 
              title={post.title} 
              link={post.link} 
              pubDate={post.pubDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}