import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="bg-gradient-to-br from-primary-50 to-primary-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-primary">신뢰</span>와 <span className="text-primary">전문성</span>을 <br />바탕으로 하는<br />
              통신 솔루션 전문기업
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              브이원정보통신은 고객의 환경에 최적화된 맞춤형 통신 인프라 구축을 통해
              업무 효율성과 안정성을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => scrollToElement("services")}
              >
                서비스 알아보기
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  상담 문의하기
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
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
