import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-lggray border-b border-lgborder">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-lgtext mb-6 relative inline-block">
              브이원의 이야기
              <div className="h-1 w-1/2 bg-lgred mt-3"></div>
            </h2>
            <p className="text-lg text-lgtext_light mb-8 leading-relaxed">
              2006년 설립된 브이원정보통신은 고객의 신뢰를 바탕으로 끊임없는 혁신과 발전을 추구해오고 있습니다.
              저희는 단순한 통신 서비스 제공을 넘어 고객의 비즈니스 성장을 위한 파트너로서의 역할을 수행합니다.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-lgred mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lgtext_light">15년 이상의 통신 분야 전문성</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-lgred mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lgtext_light">500개 이상의 기업 고객 서비스 경험</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-lgred mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lgtext_light">국내 주요 통신사와의 공식 파트너십</span>
              </li>
            </ul>
            <Link href="/about">
              <Button className="bg-lgred hover:bg-lgred_dark text-white font-medium rounded-md px-6 py-3 transition-all duration-300">
                더 알아보기
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md border-t-4 border-lgred bg-white">
              <img 
                src="https://i.ibb.co/3vHKnPj/teamwork.jpg" 
                alt="브이원 팀워크" 
                className="w-full h-full object-cover aspect-4/3"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md border-t-4 border-lgred bg-white">
              <img 
                src="https://i.ibb.co/g9GWsxN/equipment-installation.jpg" 
                alt="통신 장비 설치" 
                className="w-full h-full object-cover aspect-4/3"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md border-t-4 border-lgred bg-white">
              <img 
                src="https://i.ibb.co/8XccXWH/network-management.jpg" 
                alt="네트워크 관리" 
                className="w-full h-full object-cover aspect-4/3"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md border-t-4 border-lgred bg-white">
              <img 
                src="https://i.ibb.co/FBL9HWF/communication-solution.jpg" 
                alt="통신 솔루션" 
                className="w-full h-full object-cover aspect-4/3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
