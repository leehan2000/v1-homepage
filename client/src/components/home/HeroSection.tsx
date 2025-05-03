import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";
import networkSolutionImage from "../../assets/logo.png"; // 임시로 로고 이미지를 사용합니다

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative bg-black min-h-[600px] flex items-center border-b-4 border-lgred overflow-hidden"
    >
      {/* 배경 이미지 - 햇살에 빛나는 효과 */}
      <div className="absolute inset-0 z-0">
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent z-10"></div>
        
        {/* 햇살 빛 효과 - 중앙 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_60%)] z-20"></div>
        
        {/* 햇살 빛 효과 - 오른쪽 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_40%,rgba(255,220,150,0.3),transparent_50%)] z-20"></div>
        
        {/* 전체 색조 효과 */}
        <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-b from-yellow-400/20 via-transparent to-blue-500/10 z-15"></div>
        
        {/* 빛 반사 효과 */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:100px_100px] mix-blend-overlay opacity-40 z-10"></div>
        <img 
          src="/images/v1_office.jpg" 
          alt="V1 사무실 전경" 
          className="w-full h-full object-cover contrast-[1.35] saturate-[1.4] brightness-[1.35] hue-rotate-[0deg]"
        />
      </div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="animate-fadeIn w-full md:max-w-lg lg:max-w-xl md:mt-10 md:ml-8 lg:ml-16">
            <div className="bg-gradient-to-br from-gray-900/70 to-black/60 backdrop-blur-sm p-8 rounded-lg border-l-4 border-lgred shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-lgred">신뢰</span>와 <span className="text-lgred">전문성</span>을 <br />바탕으로 하는<br />
                통신 솔루션 전문기업
                <div className="h-1 w-1/2 bg-lgred mt-3"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                브이원정보통신은 고객의 환경에 최적화된 맞춤형 통신 인프라 구축을 통해
                업무 효율성과 안정성을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-lgred hover:bg-lgred_dark text-white font-bold rounded-md px-6 py-3 transition-all duration-300 shadow-lg shadow-lgred/30"
                  onClick={() => scrollToElement("services")}
                >
                  서비스 알아보기
                </Button>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-lgred text-white bg-black/50 hover:bg-lgred/20 font-bold rounded-md px-6 py-3 transition-all duration-300 shadow-lg"
                  >
                    상담 문의하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 콘텐츠 영역 - 삭제됨 */}
        </div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-lgred/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
      
      {/* 물결형 하단 처리 */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-20" style={{ overflow: 'hidden' }}>
        <svg
          className="absolute bottom-0 w-full h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animationDuration: '15s', animationIterationCount: 'infinite' }}
        >
          <path 
            fill="#1A1A1A" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 물결형 보조 레이어 */}
      <div className="absolute bottom-0 left-0 w-full h-10 z-20" style={{ overflow: 'hidden' }}>
        <svg
          className="absolute bottom-0 w-full h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animationDuration: '10s', animationIterationCount: 'infinite', animationDirection: 'reverse' }}
        >
          <path 
            fill="rgba(226, 35, 26, 0.15)" 
            d="M0,160L34.3,181.3C68.6,203,137,245,206,261.3C274.3,277,343,267,411,234.7C480,203,549,149,617,149.3C685.7,149,754,203,823,208C891.4,213,960,171,1029,138.7C1097.1,107,1166,85,1234,106.7C1302.9,128,1371,192,1406,224L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 추가 물결 레이어 */}
      <div className="absolute bottom-0 left-0 w-full h-16 z-20" style={{ overflow: 'hidden' }}>
        <svg
          className="absolute bottom-0 w-full h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animationDuration: '20s', animationIterationCount: 'infinite' }}
        >
          <path 
            fill="rgba(33, 150, 243, 0.1)" 
            d="M0,288L30,266.7C60,245,120,203,180,197.3C240,192,300,224,360,218.7C420,213,480,171,540,170.7C600,171,660,213,720,229.3C780,245,840,235,900,202.7C960,171,1020,117,1080,122.7C1140,128,1200,192,1260,197.3C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 장식 선 요소 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lgred/50 to-transparent z-10"></div>
      
      {/* 문자 장식 */}
      <div className="absolute bottom-20 left-0 w-full text-center text-white/90 text-sm font-light z-30">
        <span className="tracking-widest px-6 py-1.5 rounded-full bg-gradient-to-r from-blue-800/40 to-lgred/30 backdrop-blur-sm border border-white/10 shadow-lg">신뢰 위에서, 연결 너머로</span>
      </div>
      
      {/* 이동하는 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
    </section>
  );
};

export default HeroSection;
