import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// 상장 및 인증서 데이터
const awardData = [
  { id: 1, imageSrc: "/images/plaque1.png", description: "19년 LG유플러스 기업부문 신인상" },
  { id: 2, imageSrc: "/images/plaque2.png", description: "20년 LG유플러스 성장 우수상" },
  { id: 3, imageSrc: "/images/plaque3.png", description: "20년 기업 M2M부문 우수상" },
  { id: 4, imageSrc: "/images/plaque4.png", description: "21년 월 매출 2억달성" },
  { id: 5, imageSrc: "/images/plaque5.jpg", description: "LG유플러스 공식 인증 대리점" },
  { id: 6, imageSrc: "/images/plaque6.png", description: "22년 월 매출 3억달성" }
];

const AwardsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>상장 / 감사패 | V1 Information Communications</title>
        <meta
          name="description"
          content="V1 정보통신의 수상 내역 및 인증서를 확인하세요. 더욱 노력하는 브이원이 되겠습니다."
        />
        <meta name="keywords" content="V1정보통신, 상장, 감사패, 인증서, 회색테두리, 깔끔한 디자인" />
      </Helmet>

      <div className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">상장 / 감사패</h1>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            V1 정보통신이 쌓아온 신뢰와 성과를 깔끔한 회색 테두리로 강조한 고해상도 상장들을 만나보세요.
          </p>
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
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center bg-white rounded-xl border-4 border-gray-300 shadow-lg overflow-hidden transition-transform duration-300"
            >
              <div className="w-full aspect-square bg-white p-4 flex items-center justify-center">
                <img
                  src={award.imageSrc}
                  alt={award.description}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = "/images/office_entrance.jpg"; }}
                />
              </div>

              <div className="p-5 w-full text-center bg-white border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-gray-800 transition-colors">
                  {award.description}
                </h3>
                <p className="text-sm text-gray-500 mt-2">V1 정보통신</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AwardsPage;

