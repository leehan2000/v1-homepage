import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="bg-lggray border-b-4 border-lgred"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-lgtext leading-tight mb-6">
              <span className="text-lgred">신뢰</span>와 <span className="text-lgred">전문성</span>을 <br />바탕으로 하는<br />
              통신 솔루션 전문기업
              <div className="h-1 w-1/2 bg-lgred mt-3"></div>
            </h1>
            <p className="text-lg md:text-xl text-lgtext_light mb-8 leading-relaxed">
              브이원정보통신은 고객의 환경에 최적화된 맞춤형 통신 인프라 구축을 통해
              업무 효율성과 안정성을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-lgred hover:bg-lgred_dark text-white font-medium rounded-md px-6 py-3 transition-all duration-300"
                onClick={() => scrollToElement("services")}
              >
                서비스 알아보기
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-lgred text-lgred hover:bg-lgred/5 font-medium rounded-md px-6 py-3 transition-all duration-300"
                >
                  상담 문의하기
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border-t-4 border-lgred">
            <img 
              src="https://images.unsplash.com/photo-1563770660941-10a63397b4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="통신 솔루션 서비스" 
              className="hero-image w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
