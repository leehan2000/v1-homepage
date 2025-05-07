import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// 예시 데이터 - 추후 실제 데이터로 업데이트 필요
const dailyImages = [
  {
    id: 1,
    imageSrc: "/images/daily1.jpg",
    description: "서울 본사 회의 현장",
    date: "2024.04.18"
  },
  {
    id: 2,
    imageSrc: "/images/daily2.jpg",
    description: "무선 네트워크 설치 작업 중",
    date: "2024.04.10"
  },
  {
    id: 3,
    imageSrc: "/images/daily3.jpg",
    description: "팀 빌딩 워크샵 현장",
    date: "2024.03.27"
  },
  {
    id: 4,
    imageSrc: "/images/daily4.jpg",
    description: "기술 세미나 진행 모습",
    date: "2024.03.15"
  },
  {
    id: 5,
    imageSrc: "/images/daily5.jpg",
    description: "사무실 내부 환경",
    date: "2024.02.22"
  },
  {
    id: 6,
    imageSrc: "/images/daily6.jpg",
    description: "신규 프로젝트 킥오프 미팅",
    date: "2024.02.08"
  }
];

const DailyPage = () => {
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>브이원 일상 | V1 Information Communications</title>
        <meta 
          name="description" 
          content="V1 정보통신의 일상을 담은 이미지와 스토리를 살펴보세요. 현장 작업부터 회사 내부 모습, 팀 활동까지 다양한 일상을 공유합니다."
        />
        <meta 
          name="keywords" 
          content="V1정보통신, 회사 일상, 현장 작업, 팀 활동, 사무실 환경, 통신회사 일상"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            브이원 일상
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            V1 정보통신의 생생한 일상을 만나보세요. 현장에서의 열정적인 모습부터 사무실에서의 협업까지, 
            우리의 다양한 일상을 통해 V1의 문화와 가치를 느껴보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dailyImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.imageSrc}
                  alt={item.description}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // 이미지 로드 실패 시 기본 이미지로 대체
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm">
                  {item.date}
                </div>
              </div>
              <div className="p-5">
                <p className="text-lg font-medium text-gray-800">{item.description}</p>
                <div className="mt-3 flex justify-end">
                  <span className="text-primary text-sm font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></span>
                    V1 Daily
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            className="py-3 px-8 bg-white border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors duration-300 font-medium flex items-center"
          >
            더 보기
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default DailyPage;