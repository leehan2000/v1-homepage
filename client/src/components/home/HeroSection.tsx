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
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-10"></div>
        <img 
          src="/images/v1_office.jpg" 
          alt="V1 사무실 전경" 
          className="w-full h-full object-cover blur-[2px] opacity-60"
        />
      </div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border-l-4 border-lgred shadow-2xl">
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
                  className="bg-lgred hover:bg-lgred_dark text-white font-medium rounded-md px-6 py-3 transition-all duration-300 shadow-lg shadow-lgred/30"
                  onClick={() => scrollToElement("services")}
                >
                  서비스 알아보기
                </Button>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-lgred text-white hover:bg-lgred/20 font-medium rounded-md px-6 py-3 transition-all duration-300 shadow-lg"
                  >
                    상담 문의하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative animate-float">
              {/* V1 로고 패널 */}
              <div className="absolute -bottom-20 -right-10 w-56 h-56 bg-black rounded-lg overflow-hidden shadow-2xl shadow-lgred/30 border-2 border-lgred/50 transform rotate-12 z-10">
                <img 
                  src="/images/v1_logo.png" 
                  alt="V1 로고" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              
              {/* LGU+ 인증 패널 */}
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-2xl transform -rotate-6 border-t-4 border-lgred">
                <div className="text-xl font-bold text-lgtext mb-4">
                  LG U<sup>+</sup> 공식 파트너사
                </div>
                <div className="h-0.5 w-16 bg-lgred mb-4"></div>
                <p className="text-lgtext_light">
                  기업고객 공식 인증 파트너로서<br/>
                  최고의 서비스를 제공합니다.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <img 
                    src="/images/v1_office.jpg" 
                    alt="사무실 전경" 
                    className="w-24 h-24 object-cover rounded-md border border-gray-200"
                  />
                  <div className="text-3xl font-bold text-lgred">V1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-lgred/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
      
      {/* 장식 선 요소 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lgred/50 to-transparent z-10"></div>
      
      {/* 문자 장식 */}
      <div className="absolute bottom-6 left-0 w-full text-center text-white/40 text-sm font-light z-10">
        <span className="tracking-widest">신뢰 위에서, 연결 너머로</span>
      </div>
      
      {/* 이동하는 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
    </section>
  );
};

export default HeroSection;
