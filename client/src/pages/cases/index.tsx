import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const CasesIndex = () => {
  const sections = [
    {
      title: "고객사 / 도입사례",
      description: "브이원정보통신의 솔루션을 도입한 다양한 기업 및 기관의 사례를 소개합니다.",
      link: "/cases/clients",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "설치 후기",
      description: "고객들이 직접 작성한 솔루션 도입 후 성과와 만족도에 대한 후기입니다.",
      link: "/cases/reviews",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>진행 사례 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 다양한 진행 사례를 소개합니다. 고객사 도입 사례와 설치 후기를 통해 브이원정보통신의 전문성과 신뢰성을 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">진행 사례</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신의 다양한 솔루션 도입 및 구축 사례를 소개합니다.
            고객의 신뢰와 만족을 바탕으로 쌓아온 브이원정보통신의 실적을 확인하세요.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-5">{section.description}</p>
                  <Link href={section.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      자세히 보기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">숫자로 보는 브이원정보통신</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-gray-700">업계 경력</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-gray-700">고객사</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                  <p className="text-gray-700">프로젝트 수행</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-gray-700">고객 만족도</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">신뢰할 수 있는 파트너</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              브이원정보통신은 단순한 서비스 제공자가 아닌, 고객의 비즈니스 성공을 
              함께 고민하고 지원하는 진정한 파트너가 되기 위해 노력합니다.
              오랜 경험과 전문성을 바탕으로 고객에게 최적의 솔루션을 제공합니다.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                상담 문의하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasesIndex;
