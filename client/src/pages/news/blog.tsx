import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import * as xml2js from "xml2js";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
    
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // CORS 문제를 해결하기 위한 프록시 서버를 통해 요청
        // 참고: 실제 프로덕션에서는 서버 측에서 요청을 처리하는 것이 좋습니다
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const blogRssUrl = 'https://rss.blog.naver.com/5gtime.xml';
        
        const response = await axios.get(`${proxyUrl}${encodeURIComponent(blogRssUrl)}`);
        
        // XML을 JSON으로 변환
        const parser = new xml2js.Parser({ explicitArray: false });
        const result = await parser.parseStringPromise(response.data);
        
        // 블로그 포스트 데이터 추출 및 형식화
        const items = result.rss.channel.item;
        const formattedPosts = Array.isArray(items) ? items.slice(0, 6).map((item: any) => {
          // 썸네일 이미지 URL 추출 (description에서 첫 번째 이미지)
          let thumbnail = '';
          const imgMatch = item.description && item.description.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1];
          }
          
          return {
            id: item.guid || item.link,
            title: item.title,
            link: item.link,
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 120) + '...',
            pubDate: new Date(item.pubDate).toLocaleDateString('ko-KR'),
            thumbnail: thumbnail || '/images/blog-placeholder.jpg'
          };
        }) : [];
        
        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        console.error('블로그 포스트를 가져오는 중 오류 발생:', err);
        setError('블로그 데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        setLoading(false);
        
        // 에러 발생 시 실제 이미지로 대체한 샘플 데이터
        setPosts([
          {
            id: '1',
            title: '유무선 통신 솔루션의 최신 트렌드',
            link: 'https://blog.naver.com/5gtime',
            description: '최근 5G 기술의 발전과 함께 기업용 통신 솔루션도 빠르게 변화하고 있습니다. 이번 포스팅에서는 2025년 주목해야 할 유무선 통신의 최신 트렌드를 소개합니다...',
            pubDate: '2025.04.15',
            thumbnail: '/images/daily1.jpg'
          },
          {
            id: '2',
            title: '스마트 오피스를 위한 네트워크 구축 가이드',
            link: 'https://blog.naver.com/5gtime',
            description: '재택근무와 하이브리드 워크가 일반화되면서 스마트 오피스를 위한 네트워크 인프라 구축이 중요해졌습니다. 안정적이고 보안성 높은 네트워크 구축 방법을 알아봅니다...',
            pubDate: '2025.04.03',
            thumbnail: '/images/daily2.jpg'
          },
          {
            id: '3',
            title: '차량 IoT 솔루션으로 물류 효율성 높이기',
            link: 'https://blog.naver.com/5gtime',
            description: '물류 및 운송 산업에서 차량 IoT 도입으로 얻을 수 있는 효과와 실제 적용 사례를 소개합니다. 연료 비용 절감부터 실시간 모니터링까지, 다양한 이점을 확인해보세요...',
            pubDate: '2025.03.22',
            thumbnail: '/images/daily3.jpg'
          },
          {
            id: '4',
            title: '중소기업을 위한 비용 효율적인 통신 인프라 구축 방법',
            link: 'https://blog.naver.com/5gtime',
            description: '제한된 예산으로도 효과적인 비즈니스 통신 환경을 구축하는 방법을 알아봅니다. 클라우드 기반 솔루션부터 단계적 확장 전략까지, 중소기업에 최적화된 접근법을 제안합니다...',
            pubDate: '2025.03.10',
            thumbnail: '/images/daily4.jpg'
          },
          {
            id: '5',
            title: 'LG U+ 기업용 통신 서비스 활용 사례',
            link: 'https://blog.naver.com/5gtime',
            description: 'LG U+의 기업용 통신 서비스를 성공적으로 도입한 다양한 산업 분야의 실제 사례를 살펴봅니다. 제조, 의료, 교육 등 각 분야별 맞춤형 솔루션 적용 방법을 소개합니다...',
            pubDate: '2025.02.28',
            thumbnail: '/images/daily5.jpg'
          },
          {
            id: '6',
            title: '통신장비 유지보수의 중요성과 효율적인 관리 방법',
            link: 'https://blog.naver.com/5gtime',
            description: '기업용 통신 장비의 수명을 연장하고 성능을 최적화하기 위한 유지보수 전략을 소개합니다. 정기적인 점검부터 원격 모니터링까지, 효율적인 관리 방법을 알아봅니다...',
            pubDate: '2025.02.15',
            thumbnail: '/images/daily6.jpg'
          }
        ]);
      }
    };

    fetchBlogPosts();
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