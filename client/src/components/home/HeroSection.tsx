import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 - Ken Burns 효과 적용 */}
      <div 
        className="absolute inset-0 w-full h-full kenburns-effect"
        style={{
          backgroundImage: 'url("/images/v1_office.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-lg"
        >
          브이원정보통신
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"
        ></motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md"
        >
          신뢰 위에서, 연결 너머로
        </motion.p>
      </div>
      
      {/* 스크롤 다운 인디케이터 */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.8, 
          repeat: Infinity, 
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">스크롤</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;