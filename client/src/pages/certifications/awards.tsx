import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// 상장 및 인증서 데이터 
// 파일이 존재하는 실제 이미지만 사용
const awardData = [
  {
    id: 1,
    imageSrc: "/images/office_entrance.jpg",
    description: "LG유플러스 공식 인증 대리점 등록증"
  },
  {
    id: 2,
    imageSrc: "/images/v1_logo_new.jpg",
    description: "브이원정보통신 공식 인증"
  },
  {
    id: 3,
    imageSrc: "/images/v1_airplane.jpg",
    description: "우수 통신사업자 선정"
  },
  {
    id: 4,
    imageSrc: "/images/v1_mission.jpg", 
    description: "디지털 혁신 우수 기업"
  },
  {
    id: 5,
    imageSrc: "/images/v1_vision.jpg",
    description: "고객만족 서비스 대상"
  },
  {
    id: 6,
    imageSrc: "/images/daily1.jpg",
    description: "정보통신 품질 우수상"
  }
];

const AwardsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>계약서 / 상장 / 감사패 | V1 Information Communications</title>
        <meta
          name="description"
          content="V1 정보통신의 수상 내역 및 인증서를 확인하세요. 우수한 통신 서비스를 제공하는 회사로서 인정받은 다양한 증서와 상패를 소개합니다."
        />
        <meta
          name="keywords"
          content="V1정보통신, 상장, 감사패, 인증서, LG유플러스 대리점, 기업부설연구소, 통신서비스 인증"
        />
      </Helmet>

      <div className="bg-gradient-to-b from-blue-50 to-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              계약서 / 상장 / 감사패
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              V1 정보통신이 그동안 쌓아온 신뢰와 성과를 증명하는 다양한 상장과 인증서입니다.
              최고의 통신 서비스를 제공하기 위한 우리의 노력을 확인하세요.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4 md:py-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awardData.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full aspect-square relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <img
                  src={award.imageSrc}
                  alt={award.description}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/office_entrance.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60"></div>
              </div>
              <div className="p-5 w-full text-center border-t-2 border-primary/20">
                <h3 className="text-lg font-bold text-gray-800 hover:text-primary transition-colors">{award.description}</h3>
                <p className="text-sm text-gray-500 mt-2">V1 정보통신</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block py-4 px-8 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-gray-700 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              더 많은 인증서와 상장들은 지속적으로 업데이트됩니다.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="py-3 px-8 bg-white border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors duration-300 font-medium flex items-center">
            자세히 알아보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default AwardsPage;