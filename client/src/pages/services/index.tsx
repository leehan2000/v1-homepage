import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const ServicesIndex = () => {
  const services = [
    {
      id: "wireless",
      title: "무선통신",
      description: "안정적인 무선 네트워크 구축을 통해 시간과 장소에 구애받지 않는 업무 환경을 조성합니다.",
      icon: "wifi",
      link: "/services/wireless",
      image: "https://images.unsplash.com/photo-1551818176-60579e574b91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "wired",
      title: "유선통신",
      description: "고속의 안정적인 유선 네트워크 구축을 통해 기업의 핵심 인프라를 지원합니다.",
      icon: "network-wired",
      link: "/services/wired",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "vehicle-iot",
      title: "차량관제 / IoT",
      description: "실시간 차량관제 및 IoT 기술을 활용하여 효율적인 운영 환경을 구축합니다.",
      icon: "car",
      link: "/services/vehicle-iot",
      image: "https://images.unsplash.com/photo-1581092160607-ee23e93773ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "solutions",
      title: "업종별 제안",
      description: "각 산업별 특성에 맞춘 최적화된 통신 솔루션을 제안합니다.",
      icon: "building",
      link: "/services/solutions",
      image: "https://images.unsplash.com/photo-1573164713988-8665321e3e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>사업분야 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 다양한 사업 분야를 소개합니다. 무선통신, 유선통신, 차량관제/IoT, 업종별 맞춤 솔루션 등 고객의 니즈에 맞는 최적의 통신 솔루션을 제공합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">사업분야</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신은 다양한 통신 솔루션을 통해 고객의 비즈니스 성장을 지원합니다.
            고객의 환경과 필요에 맞는 최적의 솔루션을 제공합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {service.icon === "wifi" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        )}
                        {service.icon === "network-wired" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        )}
                        {service.icon === "car" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16v-4m0 0v-4m0 4h8m-8 0H4m8 4h4M9 20H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1h-5m-6 0h6" />
                        )}
                        {service.icon === "building" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      자세히 보기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">왜 브이원정보통신인가요?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">전문성</h3>
                  <p className="text-gray-600">
                    15년 이상의 업계 경험과<br />전문 인력을 갖추고 있습니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">신뢰성</h3>
                  <p className="text-gray-600">
                    500개 이상의 기업 고객과<br />함께한 검증된 서비스를 제공합니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">효율성</h3>
                  <p className="text-gray-600">
                    최적화된 솔루션으로<br />고객의 비즈니스 효율을 높입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              브이원정보통신의 솔루션에 관심이 있으신가요?
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

export default ServicesIndex;
