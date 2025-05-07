import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// 인증서 및 상장 데이터
const awardData = [
  {
    id: 1,
    imageSrc: "/images/office_entrance.jpg", // 실제 사무실 입구 이미지 사용
    description: "LG유플러스 공식 인증 대리점 등록증"
  },
  {
    id: 2,
    imageSrc: "/images/v1_logo_new.jpg", // 회사 로고 이미지 사용
    description: "브이원정보통신 공식 로고"
  },
  {
    id: 3,
    imageSrc: "/images/conv.jpeg", // 기존 이미지 사용
    description: "기업부설연구소 인정서"
  },
  {
    id: 4,
    imageSrc: "/images/daily1.jpg", // 일상 이미지 활용
    description: "통신품질 우수업체 선정"
  },
  {
    id: 5,
    imageSrc: "/images/daily2.jpg", // 일상 이미지 활용
    description: "고객만족 최우수 파트너"
  },
  {
    id: 6,
    imageSrc: "/images/daily3.jpg", // 일상 이미지 활용
    description: "기술혁신 우수 기업"
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

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            계약서 / 상장 / 감사패
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            V1 정보통신이 그동안 쌓아온 신뢰와 성과를 증명하는 다양한 상장과 인증서입니다.
            최고의 통신 서비스를 제공하기 위한 우리의 노력을 확인하세요.
          </p>
        </div>

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
              <div className="w-full aspect-[3/4] relative overflow-hidden">
                <img
                  src={award.imageSrc}
                  alt={award.description}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-5 w-full text-center">
                <h3 className="text-lg font-semibold text-gray-800">{award.description}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            * 더 많은 인증서와 상장들은 지속적으로 업데이트됩니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default AwardsPage;