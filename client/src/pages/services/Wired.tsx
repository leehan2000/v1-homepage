import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const Wired = () => {
  const features = [
    {
      title: "고속 인터넷 연결",
      description: "최대 10Gbps 속도를 지원하는 고속 유선 네트워크 구축으로 대용량 데이터 처리가 가능합니다.",
      icon: "zap"
    },
    {
      title: "안정적인 네트워크",
      description: "물리적 연결을 통한 안정적인 네트워크 환경으로 중요 업무 시스템의 신뢰성을 보장합니다.",
      icon: "shield"
    },
    {
      title: "보안 강화",
      description: "물리적 분리와 고급 보안 프로토콜을 통해 외부 위협으로부터 내부 네트워크를 보호합니다.",
      icon: "lock"
    },
    {
      title: "중앙 집중식 관리",
      description: "네트워크 스위치와 라우터를 통한 중앙 집중식 네트워크 관리로 효율적인 운영이 가능합니다.",
      icon: "server"
    },
    {
      title: "확장성",
      description: "비즈니스 성장에 따라 쉽게 확장할 수 있는 구조화된 케이블링 시스템을 제공합니다.",
      icon: "layers"
    },
    {
      title: "장애 대응",
      description: "네트워크 이중화 및 백업 시스템 구축을 통해 장애 발생 시에도 업무 연속성을 보장합니다.",
      icon: "refresh-cw"
    }
  ];

  const benefits = [
    "대용량 데이터의 빠르고 안정적인 전송",
    "중요 시스템의 신뢰성 있는 네트워크 환경 제공",
    "외부 간섭 및 보안 위협으로부터 보호",
    "네트워크 리소스의 효율적인 관리",
    "네트워크 성능 및 안정성 향상",
    "유/무선 네트워크의 통합 관리 가능"
  ];

  const industries = [
    {
      name: "금융 기관",
      description: "보안이 중요한 금융 기관을 위한 안정적이고 보안이 강화된 유선 네트워크 솔루션",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      name: "제조 공장",
      description: "공장 자동화 및 생산 시스템을 위한 고신뢰성 산업용 유선 네트워크",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      name: "데이터 센터",
      description: "대용량 데이터 처리를 위한 고속, 고효율 네트워크 인프라 구축",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>유선통신 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 유선통신 솔루션을 소개합니다. 고속의 안정적인 유선 네트워크 구축을 통해 기업의 핵심 인프라를 지원합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">유선통신</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            고속의 안정적인 유선 네트워크 구축을 통해 기업의 핵심 인프라를 지원합니다.
            구조화된 케이블링부터 네트워크 장비 구성까지 최적의 유선 네트워크 환경을 제공합니다.
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
                          {feature.icon === "zap" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          )}
                          {feature.icon === "shield" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          )}
                          {feature.icon === "lock" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          )}
                          {feature.icon === "server" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          )}
                          {feature.icon === "layers" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          )}
                          {feature.icon === "refresh-cw" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
          
          {/* 유선통신 구성요소 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">유선통신 구성요소</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="구조화된 케이블링" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">구조화된 케이블링</h3>
                  <p className="text-gray-700 mb-6">
                    구조화된 케이블링은 건물 내 모든 네트워크 연결을 위한 체계적인 배선 시스템입니다.
                    효율적인 네트워크 확장과 관리를 위해 표준화된 방식으로 설계되며, 다음과 같은 구성요소를 포함합니다:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>백본 케이블링 (건물 간 또는 층간 연결)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>수평 케이블링 (통신실에서 각 작업 영역까지 연결)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>장비실/통신실 (MDF, IDF)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>패치 패널 및 작업 영역 연결</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="네트워크 장비" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">네트워크 장비</h3>
                  <p className="text-gray-700 mb-6">
                    고성능 네트워크 장비는 안정적이고 효율적인 유선 네트워크의 핵심입니다.
                    브이원정보통신은 고객의 요구사항에 맞는 최적의 네트워크 장비를 제안하고 구축합니다:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>고성능 스위치 (L2, L3)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>라우터 및 방화벽</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>서버 및 스토리지 네트워크</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span>네트워크 모니터링 시스템</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 유선통신 도입 효과 */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">유선통신 도입 효과</h2>
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
          
          {/* 기술 인증 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">기술 인증 및 파트너십</h2>
            <div className="bg-white rounded-lg shadow p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  브이원정보통신은 주요 네트워크 장비 제조사의 공인 파트너로서
                  최신 기술과 고품질 서비스를 제공합니다.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Cisco_logo.svg/1200px-Cisco_logo.svg.png" 
                    alt="Cisco" 
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/HPE_logo_alta.png" 
                    alt="HPE" 
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Juniper_Networks_logo.svg/2560px-Juniper_Networks_logo.svg.png" 
                    alt="Juniper" 
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://www.pngmart.com/files/22/Huawei-Logo-PNG-Transparent.png" 
                    alt="Huawei" 
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_440.png" 
                    alt="Fortinet" 
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Ubiquiti_Networks_2016.svg" 
                    alt="Ubiquiti" 
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">유선통신 솔루션에 관심이 있으신가요?</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 유선 네트워크 솔루션을 제안해 드립니다.
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

export default Wired;
