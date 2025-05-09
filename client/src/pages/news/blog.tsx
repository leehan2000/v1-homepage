import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  author?: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 썸네일 이미지 배열 - 네이버 블로그 이미지 대신 사용할 고정 이미지들
  const thumbnailImages = [
    '/images/daily1.jpg',
    '/images/daily2.jpg',
    '/images/daily3.jpg',
    '/images/daily4.jpg',
    '/images/daily5.jpg',
    '/images/daily6.jpg'
  ];

  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
    
    // 네이버 블로그 데이터 가져오기
    const fetchNaverBlogPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/naver-blog?limit=6');
        
        if (!response.ok) {
          throw new Error('블로그 데이터를 가져오는데 실패했습니다.');
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // 각 포스트에 썸네일 이미지 할당
          const postsWithImages = data.map((post, index) => ({
            ...post,
            thumbnail: thumbnailImages[index % thumbnailImages.length]
          }));
          setPosts(postsWithImages);
        } else if (data.error) {
          setError(data.error);
        } else {
          setError('데이터 형식이 올바르지 않습니다.');
        }
      } catch (err) {
        console.error('블로그 데이터 로딩 오류:', err);
        setError('블로그 데이터를 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };
    
    // 네이버 블로그 데이터 가져오기
    fetchNaverBlogPosts();
  }, []);

  // 스켈레톤 로딩 컴포넌트
  const BlogCardSkeleton = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Skeleton className="h-48 w-full" />
      <div className="p-5">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-3" />
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>브이원 블로그 | V1 Information Communications</title>
        <meta 
          name="description" 
          content="V1 정보통신의 공식 네이버 블로그입니다. 통신 기술 트렌드, 서비스 소식, 유용한 정보 등 다양한 콘텐츠를 확인하세요."
        />
        <meta 
          name="keywords" 
          content="V1정보통신, 네이버블로그, 통신블로그, LG유플러스, 통신기술, 네트워크, IoT, 기업통신"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            브이원 블로그
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            V1 정보통신의 네이버 블로그에서 통신 기술 트렌드, 서비스 소식, 
            그리고 유용한 정보를 만나보세요. 최신 포스팅을 바로 확인하실 수 있습니다.
          </p>
        </div>

        {error && (
          <div className="text-center py-8 px-4 mb-8 bg-red-50 text-red-600 rounded-lg">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              다시 시도
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // 로딩 중 스켈레톤 UI 표시
            Array(6).fill(0).map((_, index) => (
              <BlogCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // 블로그 포스트 표시
            posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/images/office_entrance.jpg";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 text-sm">
                    {post.pubDate}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors text-sm font-medium"
                    >
                      블로그에서 보기 →
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://blog.naver.com/5gtime" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
          >
            <span className="font-medium">네이버 블로그 방문하기</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;