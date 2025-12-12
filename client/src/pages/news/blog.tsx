import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  originalDescription?: string;
}

/**
 * HTML 엔티티를 디코딩하는 유틸리티 함수
 */
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

/**
 * HTML 태그를 제거하는 유틸리티 함수
 */
const stripHtmlTags = (html: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

/**
 * 포스트의 첫 번째 썸네일을 반환 (API 제공 썸네일 우선, 없으면 description 내 첫 이미지)
 */
const getFirstImageSrc = (post: BlogPost): string => {
  if (post.thumbnail) return post.thumbnail;

  if (post.originalDescription) {
    const imgMatch = post.originalDescription.match(/<img[^>]+src="([^">]+)"/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }

  return '/images/car.jpg';
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNaverBlogPosts = async () => {
      // 배포 서버 API를 우선 사용해 Vercel과 동일한 방식으로 썸네일을 가져오고,
      // 실패 시 로컬 서버 API로 폴백합니다.
      const remoteApi = 'https://v1-homepage.vercel.app/api/naver-blog?limit=6';
      const localApi = '/api/naver-blog?limit=6';

      setLoading(true);
      setError(null);

      const tryFetch = async (url: string) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`블로그 데이터를 가져오는데 실패했습니다. (${res.status})`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error(data.error || '데이터 형식이 올바르지 않습니다.');
        return data;
      };

      try {
        // 1) 로컬 API 시도 (dev 서버에서 동작)
        const data = await tryFetch(localApi);
        setPosts(data);
      } catch (localErr) {
        console.error('로컬 블로그 데이터 로딩 실패, 원격 재시도:', localErr);
        try {
          // 2) 원격 배포 API로 폴백
          const data = await tryFetch(remoteApi);
          setPosts(data);
        } catch (remoteErr) {
          console.error('원격 블로그 데이터 로딩 실패:', remoteErr);
          setError('블로그 데이터를 가져오는 중 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNaverBlogPosts();
  }, []);

  const BlogCardSkeleton = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
      <Skeleton className="h-48 w-full" />
      <div className="p-5">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-3" />
        <div className="flex justify-end mt-4">
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>브이원 블로그 | V1 Information Communications</title>
        <meta name="description" content="V1 정보통신의 공식 네이버 블로그입니다. 다양한 정보 확인하세요." />
        <meta name="keywords" content="V1정보통신, 블로그, 통신기술, 네트워크" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            브이원 블로그
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            V1 정보통신의 네이버 블로그에서 최신 정보를 확인하세요.
          </motion.p>
        </div>

        {error && (
          <motion.div
            className="text-center py-6 px-4 mb-8 bg-red-50 text-red-600 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>{error}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill(0).map((_, idx) => <BlogCardSkeleton key={idx} />)
          ) : posts.length > 0 ? (
            posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: "easeOut" 
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={getFirstImageSrc(post)}
                    alt={stripHtmlTags(post.title)}
                    className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // 기본 이미지로 폴백 (ID 기반으로 다양한 이미지 사용)
                      const target = e.currentTarget;
                      if (target.src.includes('/images/car.jpg')) return; // 이미 폴백 이미지면 무한 루프 방지
                      target.src = '/images/car.jpg';
                    }}
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {decodeHtmlEntities(stripHtmlTags(post.title))}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {decodeHtmlEntities(stripHtmlTags(post.description))}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    블로그에서 보기 →
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">블로그 포스트가 없습니다.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="https://blog.naver.com/5gtime"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-4 px-10 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            네이버 블로그 방문하기
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;