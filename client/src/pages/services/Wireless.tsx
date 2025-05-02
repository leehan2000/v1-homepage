import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const Wireless = () => {
  const features = [
    {
      title: "고성능 무선 네트워크",
      description: "최신 Wi-Fi 6 표준을 지원하는 고성능 무선 네트워크 구축으로 빠르고 안정적인 무선 환경을 제공합니다.",
      icon: "signal"
    },
    {
      title: "넓은 커버리지",
      description: "최적의 AP 배치 및 설계를 통해 넓은 공간에서도 끊김 없는 무선 통신이 가능합니다.",
      icon: "wifi"
    },
    {
      title: "보안 강화",
      description: "최신 보안 프로토콜과 암호화 기술을 적용하여 무선 네트워크의 보안을 강화합니다.",
      icon: "lock"
    },
    {
      title: "중앙 관리 시스템",
      description: "클라우드 기반 중앙 관리 시스템으로 네트워크 상태 모니터링 및 관리가 용이합니다.",
      icon: "server"
    },
    {
      title: "트래픽 최적화",
      description: "네트워크 트래픽 분석 및 최적화를 통해 효율적인 데이터 처리가 가능합니다.",
      icon: "activity"
    },
    {
      title: "확장성",
      description: "비즈니스 성장에 따라 쉽게 확장할 수 있는 유연한 네트워크 설계를 제공합니다.",
      icon: "maximize"
    }
  ];

  const benefits = [
    "시간과 장소에 구애받지 않는 업무 환경 조성",
    "유선 케이블 설치 비용 절감",
    "신속한 네트워크 구축 및 변경 가능",
    "모바일 기기와의 원활한 연동",
    "스마트 기기 및 IoT 장비와의 연결성 확보",
    "회의실, 공용 공간 등 다양한 공간에서의 인터넷 접속 편의성 제공"
  ];

  const industries = [
    {
      name: "교육 기관",
      description: "대학, 학교 등 다수의 사용자가 동시에 접속하는 환경에 최적화된 무선 솔루션 제공",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      name: "물류 센터",
      description: "넓은 공간에서의 안정적인 무선 네트워크로 물류 관리 시스템 효율화",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      name: "사무 공간",
      description: "모던 오피스 환경에 최적화된 고성능 무선 네트워크 구축",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>무선통신 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 무선통신 솔루션을 소개합니다. 고성능 무선 네트워크 구축으로 시간과 장소에 구애받지 않는 업무 환경을 조성합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">무선통신</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            안정적인 무선 네트워크 구축을 통해 시간과 장소에 구애받지 않는 업무 환경을 조성합니다.
            최신 기술과 전문 노하우를 바탕으로 고객 환경에 최적화된 무선 솔루션을 제공합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* 주요 특징 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">주요 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {feature.icon === "signal" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                          )}
                          {feature.icon === "wifi" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" />
                          )}
                          {feature.icon === "lock" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          )}
                          {feature.icon === "server" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          )}
                          {feature.icon === "activity" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                          )}
                          {feature.icon === "maximize" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          )}
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* 무선통신 도입 효과 */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">무선통신 도입 효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* 적용 사례 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">적용 사례</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{industry.name}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* 서비스 프로세스 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">서비스 프로세스</h2>
            <div className="relative">
              {/* 중앙 선 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {/* 프로세스 단계 */}
              <div className="mb-8 md:mb-12 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. 현장 환경 분석</h3>
                    <p className="text-gray-600">현장 방문을 통한 환경 분석 및 요구사항 파악</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">현장 방문을 통한 환경 분석 및 요구사항 파악</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 md:mb-12 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                    <p className="text-gray-600 md:hidden">고객 환경에 최적화된 네트워크 설계 및 제안</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block order-0 md:order-2">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. 네트워크 설계</h3>
                      <p className="text-gray-600">고객 환경에 최적화된 네트워크 설계 및 제안</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 md:mb-12 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. 장비 설치 및 구축</h3>
                    <p className="text-gray-600">전문 엔지니어의 체계적인 장비 설치 및 네트워크 구축</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">전문 엔지니어의 체계적인 장비 설치 및 네트워크 구축</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 md:mb-12 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                    <p className="text-gray-600 md:hidden">네트워크 성능 테스트 및 최적화</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block order-0 md:order-2">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. 성능 테스트</h3>
                      <p className="text-gray-600">네트워크 성능 테스트 및 최적화</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5. 사후 관리</h3>
                    <p className="text-gray-600">지속적인 모니터링 및 유지보수 서비스 제공</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">5</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">지속적인 모니터링 및 유지보수 서비스 제공</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">무선통신 솔루션에 관심이 있으신가요?</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 무선 네트워크 솔루션을 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  상담 문의하기
                </Button>
              </Link>
              <Link href="/cases/clients">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  구축 사례 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wireless;
