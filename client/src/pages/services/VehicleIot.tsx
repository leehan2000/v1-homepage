import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const VehicleIot = () => {
  const features = [
    {
      title: "실시간 차량 위치 추적",
      description: "GPS 기반의 실시간 차량 위치 추적 시스템으로 차량의 현재 위치와 이동 경로를 정확하게 파악합니다.",
      icon: "map-pin"
    },
    {
      title: "운행 데이터 분석",
      description: "운행 거리, 속도, 정차 시간 등 다양한 운행 데이터를 수집하고 분석하여 운영 효율성을 높입니다.",
      icon: "bar-chart"
    },
    {
      title: "차량 상태 모니터링",
      description: "연료 소모량, 엔진 상태, 배터리 등 차량의 주요 상태를 실시간으로 모니터링하여 예방 정비가 가능합니다.",
      icon: "activity"
    },
    {
      title: "최적 경로 제안",
      description: "교통 상황을 반영한 최적의 경로를 제안하여 운행 시간과 연료 비용을 절감합니다.",
      icon: "map"
    },
    {
      title: "운전 행동 분석",
      description: "급가속, 급정거, 과속 등 운전 행동을 분석하여 안전 운전을 유도하고 사고 위험을 줄입니다.",
      icon: "shield"
    },
    {
      title: "통합 관제 플랫폼",
      description: "다수의 차량을 한눈에 관리할 수 있는 통합 관제 플랫폼으로 효율적인 차량 관리가 가능합니다.",
      icon: "monitor"
    }
  ];

  const benefits = [
    "운영 비용 절감 (연료비, 유지보수 비용)",
    "업무 효율성 향상",
    "운전자 안전 증진",
    "차량 자산 수명 연장",
    "고객 서비스 품질 향상",
    "환경 영향 감소"
  ];

  const iotApplications = [
    {
      title: "스마트 팩토리",
      description: "공장 내 장비 및 설비의 실시간 모니터링 및 제어 시스템",
      icon: "tool",
      examples: ["생산 설비 모니터링", "품질 관리 시스템", "재고 관리 자동화"]
    },
    {
      title: "스마트 빌딩",
      description: "건물 내 에너지 사용량, 보안, 시설 관리를 위한 IoT 솔루션",
      icon: "home",
      examples: ["에너지 사용 최적화", "스마트 조명 시스템", "출입 통제 및 보안"]
    },
    {
      title: "물류 자동화",
      description: "물류 프로세스 자동화 및 추적을 위한 IoT 기반 솔루션",
      icon: "package",
      examples: ["자동 물류 이동 시스템", "재고 위치 추적", "온도/습도 모니터링"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>차량관제 / IoT | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 차량관제 및 IoT 솔루션을 소개합니다. 실시간 차량관제 및 IoT 기술을 활용하여 효율적인 운영 환경을 구축합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">차량관제 / IoT</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            실시간 차량관제 및 IoT 기술을 활용하여 효율적인 운영 환경을 구축합니다.
            최신 기술과 전문 노하우로 비즈니스의 디지털 전환을 지원합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* 차량관제 시스템 소개 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">차량관제 시스템</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1611224885990-ab7363d7f2a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="차량관제 시스템" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">실시간 차량관제 솔루션</h3>
                  <p className="text-gray-700 mb-6">
                    브이원정보통신의 차량관제 시스템은 GPS, IoT 센서, 통신 기술을 결합하여 차량의 실시간 위치 추적, 
                    운행 정보 수집, 분석 및 관리를 가능하게 하는 종합 솔루션입니다. 
                    물류, 운송, 서비스 등 다양한 산업 분야에서 효율적인 차량 관리와 운영 최적화를 지원합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">실시간 모니터링</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">경로 최적화</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">운행 분석</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">차량 진단</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">리포트 생성</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 차량관제 주요 특징 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {feature.icon === "map-pin" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          )}
                          {feature.icon === "bar-chart" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          )}
                          {feature.icon === "activity" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          )}
                          {feature.icon === "map" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          )}
                          {feature.icon === "shield" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          )}
                          {feature.icon === "monitor" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          
          {/* 차량관제 도입 효과 */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">도입 효과</h2>
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
          
          {/* IoT 솔루션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">IoT 솔루션</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="IoT 솔루션" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">산업용 IoT 시스템</h3>
                  <p className="text-gray-700 mb-6">
                    브이원정보통신의 IoT 솔루션은 다양한 센서와 통신 기술을 활용하여 
                    산업 현장의 설비, 환경, 자산 등을 실시간으로 모니터링하고 
                    제어할 수 있는 시스템입니다. 이를 통해 생산성 향상, 비용 절감, 
                    안전 관리 등 다양한 비즈니스 가치를 창출합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">센서 네트워크</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">데이터 수집</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">클라우드 연동</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">실시간 분석</span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded">원격 제어</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* IoT 활용 분야 */}
            <h3 className="text-2xl font-bold mb-6 text-center">주요 활용 분야</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {iotApplications.map((app, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {app.icon === "tool" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          )}
                          {app.icon === "home" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          )}
                          {app.icon === "package" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          )}
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <div className="space-y-2">
                      {app.examples.map((example, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                          <span className="text-gray-700 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* 시스템 구성도 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">시스템 구성도</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="시스템 구성도" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">1. 데이터 수집</h3>
                  <p className="text-gray-700 text-sm">다양한 센서와 장비에서 데이터 수집</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-xs text-gray-600">- GPS 위치 데이터</li>
                    <li className="text-xs text-gray-600">- 차량 운행 데이터</li>
                    <li className="text-xs text-gray-600">- 환경 센서 데이터</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">2. 데이터 전송</h3>
                  <p className="text-gray-700 text-sm">수집된 데이터를 안전하게 중앙 서버로 전송</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-xs text-gray-600">- 유/무선 네트워크</li>
                    <li className="text-xs text-gray-600">- 4G/5G 모바일 네트워크</li>
                    <li className="text-xs text-gray-600">- 보안 프로토콜</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">3. 데이터 처리</h3>
                  <p className="text-gray-700 text-sm">빅데이터 분석 및 처리</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-xs text-gray-600">- 실시간 데이터 처리</li>
                    <li className="text-xs text-gray-600">- 패턴 및 이상 감지</li>
                    <li className="text-xs text-gray-600">- 데이터 저장 및 관리</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">4. 사용자 인터페이스</h3>
                  <p className="text-gray-700 text-sm">직관적인 관리 대시보드 제공</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-xs text-gray-600">- 웹 기반 관제 시스템</li>
                    <li className="text-xs text-gray-600">- 모바일 앱</li>
                    <li className="text-xs text-gray-600">- 알림 및 리포트</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 구축 사례 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">구축 사례</h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              브이원정보통신의 차량관제 및 IoT 시스템은 다양한 산업 분야에서
              효율성 향상과 비용 절감 효과를 제공하고 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="물류 기업 사례" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">A 물류 기업</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">효율 30% 향상</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    전국 배송 차량 200대에 차량관제 시스템을 도입하여 실시간 위치 추적 및 경로 최적화 구현.
                    배송 시간 단축 및 연료비 절감으로 운영 효율성을 크게 개선했습니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504239512151-77031144c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="제조업체 사례" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">B 제조업체</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">고장율 60% 감소</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    생산 설비에 IoT 센서를 설치하여 실시간 상태 모니터링 시스템 구축.
                    설비 이상 징후를 조기에 감지하고 예방 정비를 통해 가동 중단 시간을 최소화했습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">차량관제/IoT 솔루션에 관심이 있으신가요?</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 귀사의 환경에 맞는 최적의 솔루션을 제안해 드립니다.
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

export default VehicleIot;
