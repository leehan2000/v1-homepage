import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative h-[90vh] overflow-hidden border-b-4 border-lgred"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full hero-bg-image">
        {/* 배경 이미지는 CSS로 설정 */}
        {/* 오버레이 그라데이션 - 최소한의 투명도만 유지 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,35,26,0.1),transparent_70%)]">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 h-full absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b border-white/5 w-full"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="inline-block mb-6 px-4 py-1 bg-lgred/10 backdrop-blur-sm rounded-lg border border-lgred/20">
              <p className="text-white text-sm md:text-base font-medium">LG U+ 키움존 공식 인증 파트너</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              <span className="text-lgred font-extrabold drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">신뢰</span>와 <span className="text-lgred font-extrabold drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">전문성</span>을 <br />바탕으로 하는<br />
              통신 솔루션 전문기업
              <div className="h-1 w-1/2 bg-lgred mt-3 shadow-lg"></div>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              브이원정보통신은 고객의 환경에 최적화된 맞춤형 통신 인프라 구축을 통해
              업무 효율성과 안정성을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-lgred hover:bg-lgred_dark text-white font-medium rounded-md px-6 py-3 transition-all duration-300 shadow-lg shadow-lgred/20"
                onClick={() => scrollToElement("services")}
              >
                서비스 알아보기
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-medium rounded-md px-6 py-3 transition-all duration-300"
                >
                  상담 문의하기
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              {/* 로고 이미지 사이드에 표시 */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 hero-pulse z-20">
                <div className="flex flex-col items-center justify-center w-24 h-24">
                  <div className="text-lgred font-bold text-3xl">V1</div>
                  <div className="text-gray-700 text-xs text-center leading-tight">INFORMATION &<br/>COMMUNICATION</div>
                </div>
              </div>
              {/* 메인 카드 */}
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-lgred/20 border-t-4 border-lgred bg-white/5 backdrop-blur-sm p-4 hero-float">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-lgred"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">유선통신</h3>
                    <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">안정적인 네트워크 인프라 구축</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">무선통신</h3>
                    <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">유연한 비즈니스 환경 제공</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">IoT 솔루션</h3>
                    <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">스마트 비즈니스 환경 구축</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">차량관제</h3>
                    <p className="text-white text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">효율적인 운영 시스템</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 물결 효과 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,133.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
