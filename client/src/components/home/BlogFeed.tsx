import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

// 블로그 포스트 인터페이스
interface BlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  category: string;
}

// 컴포넌트 props 인터페이스
interface BlogFeedProps {
  category?: string;
  limit?: number;
  title?: string;
  showViewAllButton?: boolean;
}

const BlogFeed = ({
  category = "통신",
  limit = 6,
  title = "최신 블로그 포스트",
  showViewAllButton = true
}: BlogFeedProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 블로그 피드 가져오기
    const fetchBlogFeed = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/blog-feed?category=${encodeURIComponent(category)}&limit=${limit}`);
        setPosts(response.data);
        setError(null);
      } catch (err) {
        console.error("블로그 포스트를 가져오는 중 오류 발생:", err);
        setError("블로그 포스트를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogFeed();
  }, [category, limit]);

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-center max-w-3xl">
            V1 정보통신의 최신 소식과 통신 업계 동향을 확인하세요.
          </p>
        </div>

        {error && (
          <div className="text-center p-8 bg-red-50 rounded-lg mb-8">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(limit)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <Skeleton className="w-full h-full" />
                </div>
                <CardHeader>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-4 w-1/3" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/640x360?text=V1+정보통신";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-primary font-medium">V1 정보통신</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <a href={post.link} target="_blank" rel="noreferrer noopener">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{formatDate(post.pubDate)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 text-sm">{post.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    자세히 보기
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link href="/news/blog">
              <Button className="bg-white hover:bg-gray-50 text-primary border border-primary">
                모든 블로그 글 보기
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogFeed;