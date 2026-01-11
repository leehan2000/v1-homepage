import { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const NationalNumber = () => {
  // 주요 기능 탭 상태 관리
  const [activeTab, setActiveTab] = useState(0);

  // 하단 CTA로 스크롤 이동 함수
  const scrollToCTA = () => {
    const ctaElement = document.getElementById("bottom-cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 특장점 데이터
  const features = [
    {
      iconPath: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
      label: "보유 전화번",
      title: "보유 전화번호 수 1위",
      description: "업계에서 가장 많은 53,000개의 전화번호 중 자유롭게 선택"
    },
    {
      iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
      label: "대표 번호 번",
      title: "대표번호 번호이동 가입자 수 1위"
    },
    {
      iconPaths: [
        "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
        "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ],
      label: "다양 한 맞춤",
      title: "다양한 맞춤 부가서비스",
      description: "인사말 설정, 착신전환 등 다양한 부가서비스를 기업에 맞게 선택"
    },
    {
      iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
      label: "완벽 한 이중",
      title: "완벽한 이중화 시스템",
      description: "모든 장비와 통신국사1) 를 이중화하여 장애가 발생해도 중단 없이 이용\n1) 국사 : 서비스 장비가 있는 장소"
    },
    {
      iconPath: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M6 15.75a3 3 0 01-3-3V4.5a3 3 0 013-3h12a3 3 0 013 3v8.25a3 3 0 01-3 3H6z",
      label: "간편 한 ARS",
      title: "간편한 ARS 설정 가능 (*ARS부가서비스 가입시)",
      description: "TTS(Text to speech)기능 제공으로 성우녹음 없이도 인사말 설정 가능"
    }
  ];

  // 기대효과 데이터
  const expectedEffects = [
    {
      title: "쉬운 전화번호로 고객 인지도 향상",
      description: "기업명이나 판매 상품을 연상하게 하는 전화번호를 써서 고객이 쉽게 기억"
    },
    {
      title: "구축, 홍보 등 비용 절감",
      description: "별도 구축 없이 고객 상담 솔루션 이용\n수많은 지점을 번호 하나로 홍보"
    },
    {
      title: "맞춤형 서비스로 고객만족도 향상",
      description: "ARS(자동응답시스템), 신용카드 안전결제, 채팅상담 등 편의 기능 이용"
    },
    {
      title: "평생 동일한 번호",
      description: "사업장 변경, 통신사 변경시에도 전화번호 변경없이 동일한 번호를 평생 사용 가능"
    }
  ];

  // 추천 고객 데이터
  const recommendedCustomers = [
    {
      title: "금융/보험",
      description: "전국에 지점을 두고 있는 고객"
    },
    {
      title: "백화점/마트",
      description: "ARS(자동응답시스템)과 같은 다양한 부가서비스를 이용하고 싶은 고객"
    },
    {
      title: "공공/협회/복지",
      description: "하나의 번호를 사용하여 홍보 비용을 줄이고 싶은 고객"
    }
  ];

  // 주요 기능 탭 데이터
  const mainFeatures = [
    {
      name: "상담사 연결 설정",
      image: "/images/placeholders/feature-01.jpg",
      description: "전국대표번호의 상담사 연결 설정 화면\n지역별, 시간별, 비율별 등 걸려오는 전화 상황에 따라 상담사 연결 방법을 선택할 수 있습니다.\n\n발신지역별 설정: 걸려 온 전화의 지역번호를 구분하여 상담사를 연결\n시간별 설정: 걸려 온 시간에 따라 전화를 구분하여 상담사를 연결\n자동 분배: 걸려 온 전화를 미리 정한 비율에 따라 나눈 상담사를 연결\n자동 전환: 통화 중으로 전화를 받지 못할 때 전화를 받을 수 있는 상담사를 연결"
    },
    {
      name: "ARS(자동응답시스템)",
      image: "/images/placeholders/feature-01.jpg",
      description: "ARS(자동응답시스템) 기능 설명"
    },
    {
      name: "위치기반 서비스",
      image: "/images/placeholders/feature-01.jpg",
      description: "위치기반 서비스 기능 설명"
    },
    {
      name: "비주얼링 서비스",
      image: "/images/placeholders/feature-01.jpg",
      description: "비주얼링 서비스 기능 설명"
    }
  ];

  // 같이 선택한 상품 데이터
  const relatedProducts = [
    {
      image: "/images/placeholders/related-01.jpg",
      title: "U+tv",
      description: "TV 뿐만 아니라 유튜브 등 다양한 콘텐츠를 감상할 수 있는 IPTV서비스"
    },
    {
      image: "/images/placeholders/related-02.jpg",
      title: "오피스넷",
      description: "저렴한 요금으로 사용할 수 있는 기업 전용 인터넷 서비스"
    },
    {
      image: "/images/placeholders/related-03.jpg",
      title: "기업 인터넷전화 일반형",
      description: "가장 저렴한 요금으로 이용할 수 있는 전화 서비스"
    }
  ];

  return (
    <>
      <Helmet>
        <title>전국대표번호 | 브이원정보통신</title>
        <meta name="description" content="고객이 기억하기 쉬운 단 하나의 대표번호로 전국에 위치한 지점과 고객센터 전화번호를 통합할 수 있습니다." />
      </Helmet>
      
      {/* Section: Hero */}
      {/* 이미지 비율: aspect-[4/3] (히어로 이미지, 오버레이 적용) */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                전국대표번호
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                고객이 기억하기 쉬운 단 하나의 대표번호로 전국에 위치한 지점과
                고객센터 전화번호를 통합할 수 있습니다.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 whitespace-pre-line leading-relaxed">
                기억하기 쉬운 대표번호로
                홍보까지 간편하게 하세요
                전국 어디서나 지역번호 없이 8자리 전화번호를 우리 회사 대표번호로 이용할 수 있는 서비스입니다.
                외우기가 쉬워 주로 고객센터에서 많이 이용하며,
                상황에 따라 전화를 알아서 분배해 줍니다.
                ARS(자동응답시스템), 채팅상담 등으로 고객 관리도 할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToCTA}>
                  상담 신청
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => {
                  const pricingElement = document.getElementById("pricing");
                  if (pricingElement) {
                    pricingElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  이용요금 보기
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img 
                src="/images/placeholders/nationalnumber-hero.jpg" 
                alt="전국대표번호 히어로 이미지" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: 특장점 */}
      {/* 이미지 비율: 아이콘 (object-contain, 고정 크기 w-12 h-12) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            특장점
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            전국대표번호가 특별한 이유를 확인해 보세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2" 
                      stroke="#6366f1"
                      className="flex-shrink-0"
                    >
                      {feature.iconPaths ? (
                        feature.iconPaths.map((path, idx) => (
                          <path 
                            key={idx}
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d={path}
                          />
                        ))
                      ) : (
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d={feature.iconPath}
                        />
                      )}
                    </svg>
                    <span className="text-xs text-gray-500 font-medium">
                      {feature.label}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 기대효과 */}
      {/* 이미지 비율: 이미지 없음 (텍스트 카드만) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            기대효과
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            전국대표번호를 도입하면 이런 효과를 얻을 수 있어요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {expectedEffects.map((effect, index) => (
              <Card key={index} className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">
                    {effect.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                    {effect.description}
                  </p>
                </CardContent>
              </Card>
            ))}
                  </div>
                  </div>
      </section>

      {/* Section: 추천 고객 */}
      {/* 이미지 비율: 이미지 없음 (텍스트 카드만) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            추천 고객
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            이런 분들께 전국대표번호를 더욱 추천드려요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {recommendedCustomers.map((customer, index) => (
              <Card key={index} className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">
                    {customer.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {customer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 대표 고객 */}
      {/* 이미지 비율: 로고 (object-contain, 고정 높이 h-12 md:h-16) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            대표 고객
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            전국대표번호를 이미 사용중인 고객들이에요.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {["우리은행", "우리카드", "신한은행", "쿠팡"].map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={`/images/placeholders/logo-0${index + 1}.png`}
                  alt={client}
                  className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 서비스 소개영상 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            서비스 소개영상
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            더 자세한 내용은 영상으로 확인해 보세요.
          </p>
          <div className="max-w-[900px] mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.lguplus.com/biz/support/archive/promotional-videos/detail?keyword=&pageNo=1&rowSize=12&rownum=7&titleTab=%EC%A0%84%EA%B5%AD%EB%8C%80%ED%91%9C%EB%B2%88%ED%98%B8&urcEntpProdVdoNo=6709&utm_source=chatgpt.com"
                title="전국대표번호 서비스 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              영상이 표시되지 않을 경우, <a href="https://www.lguplus.com/biz/support/archive/promotional-videos/detail?keyword=&pageNo=1&rowSize=12&rownum=7&titleTab=%EC%A0%84%EA%B5%AD%EB%8C%80%ED%91%9C%EB%B2%88%ED%98%B8&urcEntpProdVdoNo=6709&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LG U+ 공식 페이지</a>에서 직접 확인해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Section: 주요 기능 */}
      {/* 이미지 비율: aspect-[4/3] (기능 설명 이미지) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            주요 기능
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">
            전국대표번호가 제공하는 주요 기능들을 알려드릴게요.
          </p>
          <div className="max-w-6xl mx-auto">
            {/* 탭 버튼 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              {mainFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors ${
                    activeTab === index
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
            {/* 탭 내용 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img 
                      src={mainFeatures[activeTab].image}
                      alt={mainFeatures[activeTab].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                      <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                      {mainFeatures[activeTab].name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                      {mainFeatures[activeTab].description}
                    </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
          </div>
        </div>
      </section>

      {/* Section: 서비스 구성도 */}
      {/* 이미지 비율: aspect-[16/9] (구성도 이미지) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            서비스 구성도
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-6 md:mb-8">
            전국대표번호의 제공방식을 구성도로 확인해 보세요.
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed">
              전국대표번호를 이용하면 가상번호로 고객에게 노출 됩니다. 고객이 업체에 전화를 할 때는 가상번호로 발신하게 되고, 업체의 번호가 노출 되지 않습니다.
            </p>
            <div className="bg-gray-100 rounded-2xl p-4 md:p-8 shadow-sm">
              <div className="aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src="/images/placeholders/diagram.jpg"
                  alt="전국대표번호 서비스 구성도"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 전국대표번호 이용요금 */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            이용요금
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 mb-2 md:mb-4">
            전국대표번호의 이용요금을 확인해 보세요.
          </p>
          <p className="text-base md:text-lg text-center font-semibold mb-8 md:mb-12 text-gray-900">
            전국대표번호 이용요금
          </p>
          
          <div className="overflow-x-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-8 min-w-[1000px]">
              <table className="w-full border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th rowSpan={2} className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                    <th colSpan={6} className="border border-gray-300 p-2 md:p-3 text-center font-bold">기본형, 분리과금형</th>
                    <th colSpan={6} className="border border-gray-300 p-2 md:p-3 text-center font-bold border-r-2">정액형</th>
                  </tr>
                  <tr className="bg-gray-50">
                    {["0등급", "1등급", "2등급", "3등급", "4등급", "5등급"].map((grade, index) => (
                      <th key={grade} className={`border border-gray-300 p-2 md:p-3 text-center font-semibold ${index === 5 ? 'border-r-2' : ''}`}>
                        {grade}
                      </th>
                    ))}
                    {["0등급", "1등급", "2등급", "3등급", "4등급", "5등급"].map((grade, index) => (
                      <th key={grade} className={`border border-gray-300 p-2 md:p-3 text-center font-semibold ${index === 5 ? 'border-r-2' : ''}`}>
                        {grade}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-pink-50">
                    <td className="border border-gray-300 p-2 md:p-3 font-semibold bg-pink-600 text-white rounded-l-2xl">최소 가입 전화 개수</td>
                    {/* 기본형, 분리과금형: 0등급(500개), 1등급(30개), 2등급(15개), 3등급(10개), 4등급(5개), 5등급(2개) */}
                    {[500, 30, 15, 10, 5, 2].map((count, index) => (
                      <td key={count} className={`border border-gray-300 p-2 md:p-3 text-center font-medium ${index === 5 ? 'border-r-2' : ''}`}>
                        {count}개
                      </td>
                    ))}
                    {/* 정액형: 0등급(500개), 1등급(30개), 2등급(15개), 3등급(10개), 4등급(5개), 5등급(2개) */}
                    {[500, 30, 15, 10, 5, 2].map((count, index) => (
                      <td key={count} className={`border border-gray-300 p-2 md:p-3 text-center font-medium ${index === 5 ? 'border-r-2' : ''}`}>
                        {count}개
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 md:p-3 font-semibold align-middle">기본료</td>
                    {/* 기본형, 분리과금형 - 병합 셀 */}
                    <td colSpan={6} className="border border-gray-300 p-2 md:p-3 text-center">
                      전화 1개당 11,000원
                    </td>
                    {/* 정액형 - 유선전화 리스트 */}
                    <td colSpan={6} className="border border-gray-300 p-2 md:p-3 border-r-2">
                      <div className="space-y-1 text-left">
                        <div className="font-semibold mb-2">유선전화</div>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>~119개: 전화 1개당 28,600원</li>
                          <li>120~299개: 전화 1개당 27,500원</li>
                          <li>300~499개: 전화 1개당 26,400원</li>
                          <li>500~999개: 전화 1개당 25,300원</li>
                          <li>1,000~1,999개: 전화 1개당 24,200원</li>
                          <li>2,000~2,999개: 전화 1개당 23,100원</li>
                          <li>3,000개: 전화 1개당 22,000원</li>
                        </ul>
                        <div className="mt-2 font-semibold">인터넷 전화</div>
                        <div className="text-xs">1개당 11,000원</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 md:p-3 font-semibold">부가 이용료</td>
                    <td colSpan={6} className="border border-gray-300 p-2 md:p-3">
                      <div className="text-left">
                        <div className="font-semibold mb-1">유선, 070 착신</div>
                        <div className="text-xs">
                          표준형ARS(11,000원/회선), 심플ARS(1,650원/회선), 플러스형ARS(33,000원/회선),
                          비주얼링(3,300원/회선), SMS수신(27,500원/번호)
                        </div>
                      </div>
                    </td>
                    <td colSpan={6} className="border border-gray-300 p-2 md:p-3 border-r-2">
                      <div className="text-left">
                        <div className="font-semibold mb-1">유선, 070 착신</div>
                        <div className="text-xs">
                          표준형ARS(11,000원/회선), 심플ARS(1,650원/회선), 플러스형ARS(33,000원/회선),
                          비주얼링(3,300원/회선), SMS수신(27,500원/번호)
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-pink-50 rounded-lg border border-pink-200">
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <li>대표번호는 발신자에게 통화료가 부과되는 유료서비스입니다.</li>
                  <li>부가세 포함 금액입니다.</li>
                  <li>기본형은 시외전화요금을 고객이 부담하는 요금제입니다. 고객이 전화를 걸면 "시외로 연결됩니다"라는 안내가 나옵니다.</li>
                  <li>분리 과금형은 시외전화 요금을 기업이 부담하는 요금제 입니다.</li>
                  <li>정액형은 시외전화 요금이 발생해도 추가요금이 발생하지 않는 요금제입니다.</li>
                  <li>최소 가입 전화 개수보다 적게 가입하더라도 최소 가입 전화 개수만큼의 요금을 내야 합니다.</li>
                  <li>약정 가입 시, 1년은 10%, 2년은 20%, 3년은 30%, 4년은 40% 요금 할인을 받을 수 있습니다.</li>
                  <li>약정, 기간이 끝나기 전 해지하면 할인반환금이 발생합니다.</li>
                  <li>클라우드 고객센터, 스마트컨택, 채팅상담솔루션, 클라우드레코딩, 모바일컨택, 비주얼컨택 이용 고객은 전국 대표번호 기본료를 50%를 할인받을 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 부가서비스 상세 */}
      {/* 이미지 비율: 이미지 없음 (표만) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            부가서비스 상세
          </h2>
          
          <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            {/* 10-1: ARS 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">ARS(자동응답시스템) 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">표준형 ARS</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">심플 ARS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">기본료</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 11,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 1,650원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">멘트작성</td>
                        <td className="border border-gray-300 p-2 md:p-3">기계음(TTS) 횟수제한 없이 무료</td>
                        <td className="border border-gray-300 p-2 md:p-3">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">실제 성우 녹음</td>
                        <td className="border border-gray-300 p-2 md:p-3">별도 협의 필요</td>
                        <td className="border border-gray-300 p-2 md:p-3">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                  부가세가 포함된 금액입니다.
                  표준형 ARS는 분리과금형, 정액형 요금제 이용 고객만 가입할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-2: 위치기반서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">위치기반서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[400px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">이용요금</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">기본료</td>
                        <td className="border border-gray-300 p-2 md:p-3">무료</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">발신자 휴대폰 위치 정보 조회료</td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          <div className="space-y-1">
                            <div>LG U+ 1건당 55원</div>
                            <div>SKT 1건당 88원</div>
                            <div>KT 1건당 13.2원</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-3: 채팅상담 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">채팅상담 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">제공기능</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">월정액</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">채팅상담 스탠다드</td>
                        <td className="border border-gray-300 p-2 md:p-3">채팅상담</td>
                        <td className="border border-gray-300 p-2 md:p-3">55,000원/상담원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">채팅상담 프리미엄</td>
                        <td className="border border-gray-300 p-2 md:p-3">채팅상담 + 채팅 상담 관리 전용 페이지 제공</td>
                        <td className="border border-gray-300 p-2 md:p-3">88,000원/상담원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-4: 비주얼링 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">비주얼링 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[400px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">이용료(월/회선당)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">비주얼링 Basic</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 3,300원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">비주얼링 기업홍보서비스</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 27,500원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-5: 매니지드컨택 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">매니지드컨택 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[400px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">시내 및 시외 통화료</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">통화료</td>
                        <td className="border border-gray-300 p-2 md:p-3">3분당 22원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-6: 신용카드 안전결제 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">신용카드 안전결제 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">일반형</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">호 전환형</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">제공서비스</td>
                        <td className="border border-gray-300 p-2 md:p-3">ARS(자동응답시스템) 안내에 따라 신용카드 결제 가능</td>
                        <td className="border border-gray-300 p-2 md:p-3">먼저 상담원 연결 후 ARS(자동응답시스템) 안내에 따라 신용카드 결제 가능</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">이용요금</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 16,500원</td>
                        <td className="border border-gray-300 p-2 md:p-3">전화 1개당 27,500원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">전국대표번호 이용요금</td>
                        <td colSpan={2} className="border border-gray-300 p-2 md:p-3">19,800원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">신용카드 수수료</td>
                        <td colSpan={2} className="border border-gray-300 p-2 md:p-3">3.5%</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                  부가세가 포함된 금액입니다.
                  별도 시스템 구축 없이 이용할 수 있습니다.
                  전국대표번호 이용요금은 기본형, 분리과금형 요금제 가입 시 요금입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-7: 문자메시지 부가서비스 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">문자메시지 부가서비스</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">기본료</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">단문메세지</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">멀티메세지</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">수신(월/회선)</td>
                        <td className="border border-gray-300 p-2 md:p-3">월 27,500원</td>
                        <td className="border border-gray-300 p-2 md:p-3">월 550,000원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-8: 수신자 부담 1433 통화료 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">수신자 부담 1433 통화료</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">고객 발신 유형</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">이용요금</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">시내외 전화</td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          <div className="space-y-1">
                            <div>시내, 30Km 이내 거리의 시외 3분당 49.5원</div>
                            <div>30km 이상 거리의 시외 10초당 15.51원</div>
              </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">공중전화</td>
                        <td className="border border-gray-300 p-2 md:p-3">시내/외 기본 통화료 + 1분당 33원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">휴대폰</td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          <div className="space-y-1">
                            <div><strong>표준</strong> 10초당 17.193원</div>
                            <div><strong>할인 시간대</strong> 월요일~토요일 오전 6시 ~ 오전 8시 일요일, 공휴일 10초당 16.291원</div>
                            <div><strong>심야</strong> 평일 0시 ~ 오전 6시 10초당 15.389원</div>
            </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">위성전화를 포함한 주파수 공용 무선 통신(TRS)</td>
                        <td className="border border-gray-300 p-2 md:p-3">10초당 20.9원</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">인터넷 전화</td>
                        <td className="border border-gray-300 p-2 md:p-3">3분당 71.5원</td>
                      </tr>
                    </tbody>
                  </table>
          </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
              </CardContent>
            </Card>

            {/* 10-9: 수신자 부담 1433 서비스 이용료 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">수신자 부담 1433 서비스 이용료</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[400px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">기본료</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">요금</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3 font-semibold">전화 1개당</td>
                        <td className="border border-gray-300 p-2 md:p-3">5,500원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                  부가세가 포함된 금액입니다.
                </p>
                </CardContent>
              </Card>

            {/* 10-10: 수신자 부담 1433 서비스 요금 할인 */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">수신자 부담 1433 서비스 요금 할인</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">구분</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">실사용금액 (기본료 +수신 통화료)</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">할인율</th>
                        <th className="border border-gray-300 p-2 md:p-3 text-left font-bold">납부액</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">0~55,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">실사용액</td>
                        <td className="border border-gray-300 p-2 md:p-3">-</td>
                        <td className="border border-gray-300 p-2 md:p-3">실사용액</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">55,000 ~ 110,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">55,000원 초과액의 5%</td>
                        <td className="border border-gray-300 p-2 md:p-3">5%</td>
                        <td className="border border-gray-300 p-2 md:p-3">55,000원 + (초과액 × 0.95)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">110,000 ~ 330,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">107,250원 초과액의 10%</td>
                        <td className="border border-gray-300 p-2 md:p-3">10%</td>
                        <td className="border border-gray-300 p-2 md:p-3">107,250원 + (초과액 × 0.9)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">330,000 ~ 1,100,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">305,250원 초과액의 15%</td>
                        <td className="border border-gray-300 p-2 md:p-3">15%</td>
                        <td className="border border-gray-300 p-2 md:p-3">305,250원 + (초과액 × 0.85)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">1,100,000 ~ 5,500,000원</td>
                        <td className="border border-gray-300 p-2 md:p-3">959,750원 초과액의 20%</td>
                        <td className="border border-gray-300 p-2 md:p-3">20%</td>
                        <td className="border border-gray-300 p-2 md:p-3">959,750원 + (초과액 × 0.8)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 md:p-3">5,500,000원 초과</td>
                        <td className="border border-gray-300 p-2 md:p-3">4,479,750원 초과액의 25%</td>
                        <td className="border border-gray-300 p-2 md:p-3">25%</td>
                        <td className="border border-gray-300 p-2 md:p-3">4,479,750원 + (초과액 × 0.75)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  부가세가 포함된 금액입니다.
                  예시) 이용요금이 100,000원일 때 납부해야 할 금액 = 55,000원+(45,000원*0.95) = 97,750원
                  1433 번호는 홈페이지에서 가입할 수 없습니다. 가입하는 방법은 LG유플러스 고객센터 1544-0001로 문의해 주세요.
                </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Section: Simple ARS 안내 */}
      {/* 이미지 비율: 이미지 없음 (텍스트만) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Simple ARS 홈페이지</h2>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  우측의 홈페이지 버튼을 클릭하여 Simple ARS 홈페이지로 이동하실 수 있습니다.
                </p>
                <div className="mb-6 md:mb-8">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-lg">
                    홈페이지
                  </Button>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Simple ARS 도입 후 기대효과</h3>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 mt-6 md:mt-8 text-gray-900">Simple ARS 제공 기능</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  <li>멘트 등록 및 수정 무제한(글자로 쓰면 음성멘트가 생성되는 TTS 기능 제공)</li>
                  <li>업무 시간과 업무 외 시간을 구분하여 다른 멘트 송출 기능 제공(요일별/휴일 및 기간별)</li>
                  <li>5분단위, 일단위, 월단위로 인입 콜 수 통계 제공</li>
                </ol>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Section: 같이 선택한 상품들 */}
      {/* 이미지 비율: aspect-video (16:9) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            다른 고객님들이 같이 선택하신 상품들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6">
                  <div className="aspect-video overflow-hidden rounded-xl mb-4">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      {/* 이미지 비율: 이미지 없음 (텍스트만) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            자주 묻는 질문
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-2xl border border-gray-200 shadow-sm">
              <CardContent className="p-6 md:p-8 text-center text-gray-500">
                FAQ 내용은 추후 제공 예정입니다.
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

      {/* Section: 하단 CTA */}
      {/* 이미지 비율: 이미지 없음 (텍스트 + 버튼만) */}
      <section id="bottom-cta" className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              전국대표번호 상담을 도와드릴게요
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-primary-100">
              우리 회사에 맞는 대표번호 구성/부가서비스/요금제까지 한 번에 안내드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-lg">
                  상담 신청
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg">
                전화 문의
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NationalNumber;
