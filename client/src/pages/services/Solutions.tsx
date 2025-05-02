import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const Solutions = () => {
  const industries = [
    {
      id: "manufacturing",
      name: "제조업",
      description: "제조 현장의 생산성과 효율성을 높이는 맞춤형 통신 솔루션",
      icon: "tool",
      solutions: [
        "공장 내 안정적인 유/무선 네트워크 구축",
        "스마트팩토리 IoT 시스템 구축",
        "생산 설비 모니터링 시스템",
        "지게차 및 작업 차량 관제 시스템",
        "작업자 안전 관리 솔루션"
      ],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "logistics",
      name: "물류업",
      description: "물류 운영 효율을 극대화하는 차량관제 및 창고 관리 솔루션",
      icon: "truck",
      solutions: [
        "차량 위치 추적 및 경로 최적화 시스템",
        "창고 내 무선 네트워크 구축",
        "자동 입출고 시스템 연동",
        "온도/습도 모니터링 솔루션",
        "물류 자산 관리 시스템"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "education",
      name: "교육기관",
      description: "학습 환경 개선을 위한 캠퍼스 네트워크 및 스마트 교육 시스템",
      icon: "book",
      solutions: [
        "캠퍼스 전역 고속 무선 네트워크 구축",
        "강의실 스마트 기기 연동 시스템",
        "도서관 및 학습공간 네트워크 최적화",
        "학사 관리 시스템 인프라 구축",
        "원격 교육 지원 솔루션"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "healthcare",
      name: "의료기관",
      description: "환자 케어 품질 향상을 위한 의료 특화 통신 시스템",
      icon: "activity",
      solutions: [
        "병원 내 안정적 네트워크 인프라 구축",
        "의료장비 통합 모니터링 시스템",
        "환자 모니터링 IoT 솔루션",
        "의료 데이터 안전한 전송 체계 구축",
        "스마트 의료 시스템 연동"
      ],
      image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "retail",
      name: "유통/소매업",
      description: "고객 경험 향상과 매장 운영을 위한 스마트 리테일 솔루션",
      icon: "shopping-bag",
      solutions: [
        "매장 내 고품질 Wi-Fi 환경 구축",
        "재고 관리 IoT 시스템 구축",
        "디지털 사이니지 네트워크 구성",
        "고객 동선 분석 솔루션",
        "매장 보안 시스템 통합"
      ],
      image: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "construction",
      name: "건설업",
      description: "건설 현장의 안전과 효율을 높이는 통신 및 관제 솔루션",
      icon: "hard-hat",
      solutions: [
        "건설 현장 임시 네트워크 구축",
        "중장비 및 자재 관리 시스템",
        "작업자 안전 모니터링 솔루션",
        "CCTV 및 보안 시스템 구축",
        "현장-본사 간 안정적 통신 환경 구성"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>업종별 제안 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 업종별 맞춤형 통신 솔루션을 소개합니다. 제조업, 물류업, 교육기관, 의료기관, 유통업, 건설업 등 각 산업별 특성에 맞는 최적화된 통신 솔루션을 제공합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">업종별 제안</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            각 산업별 특성에 맞춘 최적화된 통신 솔루션을 제안합니다.
            브이원정보통신의 다양한 경험과 전문성을 바탕으로 고객의 비즈니스에 
            가장 적합한 맞춤형 솔루션을 제공합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* 업종별 솔루션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">업종별 맞춤 솔루션</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Card key={industry.id} id={industry.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {industry.icon === "tool" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          )}
                          {industry.icon === "truck" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                          )}
                          {industry.icon === "book" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          )}
                          {industry.icon === "activity" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          )}
                          {industry.icon === "shopping-bag" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          )}
                          {industry.icon === "hard-hat" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          )}
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* 통합 솔루션 */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="통합 솔루션" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">통합 솔루션 제공</h2>
                <p className="text-gray-700 mb-6">
                  브이원정보통신은 개별 솔루션을 넘어 고객의 비즈니스 환경에 맞는 
                  통합 솔루션을 제공합니다. 무선통신, 유선통신, 차량관제, IoT 등 
                  다양한 기술을 유기적으로 연결하여 최적의 통신 환경을 구축합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">통합 네트워크 구축</h3>
                      <p className="text-gray-600 text-sm">유선 및 무선 네트워크를 통합 관리할 수 있는 인프라 구축</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">데이터 통합 및 분석</h3>
                      <p className="text-gray-600 text-sm">다양한 시스템에서 수집된 데이터를 통합하고 분석하여 인사이트 제공</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">보안 강화</h3>
                      <p className="text-gray-600 text-sm">통합 보안 시스템으로 네트워크 전반의 보안 수준 향상</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">확장성 및 유연성</h3>
                      <p className="text-gray-600 text-sm">비즈니스 성장에 따라 쉽게 확장할 수 있는 유연한 솔루션 제공</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 솔루션 도입 프로세스 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">솔루션 도입 프로세스</h2>
            <div className="relative">
              {/* 중앙 선 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {/* 프로세스 단계 */}
              <div className="mb-12 md:mb-24 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. 요구사항 분석</h3>
                    <p className="text-gray-600">고객의 비즈니스 특성 및 요구사항 분석을 통한 솔루션 방향성 설정</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">고객의 비즈니스 특성 및 요구사항 분석을 통한 솔루션 방향성 설정</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 md:mb-24 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                    <p className="text-gray-600 md:hidden">전문 컨설턴트의 현장 분석 및 환경 조사를 통한 맞춤형 솔루션 설계</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block order-0 md:order-2">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. 솔루션 설계</h3>
                      <p className="text-gray-600">전문 컨설턴트의 현장 분석 및 환경 조사를 통한 맞춤형 솔루션 설계</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 md:mb-24 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. 구축 및 테스트</h3>
                    <p className="text-gray-600">설계된 솔루션의 체계적인 구축 및 철저한 테스트</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">설계된 솔루션의 체계적인 구축 및 철저한 테스트</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 md:mb-24 relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                    <p className="text-gray-600 md:hidden">고객과 실무자를 위한 체계적인 교육 및 시스템 운영 가이드 제공</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block order-0 md:order-2">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. 교육 및 인계</h3>
                      <p className="text-gray-600">고객과 실무자를 위한 체계적인 교육 및 시스템 운영 가이드 제공</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5. 유지보수 및 지원</h3>
                    <p className="text-gray-600">지속적인 기술 지원 및 유지보수 서비스로 안정적인 시스템 운영 보장</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex md:block">
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">5</div>
                    </div>
                    <div>
                      <p className="text-gray-600 md:hidden">지속적인 기술 지원 및 유지보수 서비스로 안정적인 시스템 운영 보장</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 고객 성공 사례 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">고객 성공 사례</h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              브이원정보통신의 업종별 맞춤 솔루션은 다양한 산업 분야에서 
              고객의 비즈니스 성장과 혁신을 지원하고 있습니다.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <p className="text-gray-700">물류 배송 시간 단축</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <p className="text-gray-700">제조 현장 생산성 향상</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <p className="text-gray-700">IT 운영 비용 절감</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">맞춤형 솔루션이 필요하신가요?</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 귀사의 업종과 환경에 최적화된 맞춤형 솔루션을 제안해 드립니다.
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

export default Solutions;
