import { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/**
 * 전국대표번호 랜딩페이지 컴포넌트
 * 
 * Hero는 깔끔하게 유지하고, 아래 섹션은 이미지 중심 카드로 역동적으로 구성
 */
const NationalNumber = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [firstSectionVisible, setFirstSectionVisible] = useState(false);
  // 주요 기능 탭 상태 관리
  const [activeTab, setActiveTab] = useState(0);

  // 이미지 URL 상수 (Unsplash 무료 이미지 사용)
  const IMG = {
    hero: "/images/대표번호_히어로.png",
    // 특장점 이미지 - 전국대표번호/콜센터/지점 연결
    feature1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 전화번호/네트워크
    feature2: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 대표번호
    feature3: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 부가서비스
    feature4: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 이중화 시스템
    feature5: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // ARS 설정
    // 기대효과 이미지
    effect1: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 인지도 향상
    effect2: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 비용 절감
    effect3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 고객만족도
    effect4: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 평생 번호
    // 주요 기능 이미지
    mainFeature1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&auto=format",
    mainFeature2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    mainFeature3: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&auto=format",
    mainFeature4: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&auto=format",
  };

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Sticky 네비게이션 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero 애니메이션 (마운트 후 1프레임 뒤에 실행)
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setHeroVisible(true);
      });
    });
  }, []);

  // 첫 번째 섹션(특장점) 진입 감지 - 큰 등장 액션용
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firstSectionVisible) {
            setFirstSectionVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    const firstSection = document.getElementById("features");
    if (firstSection) {
      observer.observe(firstSection);
    }

    return () => {
      if (firstSection) {
        observer.unobserve(firstSection);
      }
    };
  }, [firstSectionVisible]);

  // Intersection Observer로 섹션 진입 감지 (일반 모션용)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const sections = document.querySelectorAll("section[id]:not(#features)");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 섹션으로 스크롤 이동 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 하단 CTA로 스크롤 이동 함수
  const scrollToCTA = () => {
    const ctaElement = document.getElementById("bottom-cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 네비게이션 항목 정의
  const navItems = [
    { id: "features", label: "특장점" },
    { id: "expected-effects", label: "기대효과" },
    { id: "recommended-customers", label: "추천 고객" },
    { id: "main-features", label: "주요 기능" },
    { id: "service-diagram", label: "서비스 구성도" },
    { id: "pricing", label: "이용요금" },
  ];

  // 특장점 데이터
  const features = [
    {
      title: "보유 전화번호 수 1위",
      description: "업계에서 가장 많은 53,000개의 전화번호 중 자유롭게 선택",
      image: IMG.feature1,
      imageKey: "feature1",
    },
    {
      title: "대표번호 번호이동 가입자 수 1위",
      image: IMG.feature2,
      imageKey: "feature2",
    },
    {
      title: "다양한 맞춤 부가서비스",
      description: "인사말 설정, 착신전환 등 다양한 부가서비스를 기업에 맞게 선택",
      image: IMG.feature3,
      imageKey: "feature3",
    },
    {
      title: "완벽한 이중화 시스템",
      description: "모든 장비와 통신국사1) 를 이중화하여 장애가 발생해도 중단 없이 이용\n1) 국사 : 서비스 장비가 있는 장소",
      image: IMG.feature4,
      imageKey: "feature4",
    },
    {
      title: "간편한 ARS 설정 가능 (*ARS부가서비스 가입시)",
      description: "TTS(Text to speech)기능 제공으로 성우녹음 없이도 인사말 설정 가능",
      image: IMG.feature5,
      imageKey: "feature5",
    }
  ];

  // 기대효과 데이터
  const expectedEffects = [
    {
      title: "쉬운 전화번호로 고객 인지도 향상",
      description: "기업명이나 판매 상품을 연상하게 하는 전화번호를 써서 고객이 쉽게 기억",
      image: IMG.effect1,
      imageKey: "effect1",
    },
    {
      title: "구축, 홍보 등 비용 절감",
      description: "별도 구축 없이 고객 상담 솔루션 이용\n수많은 지점을 번호 하나로 홍보",
      image: IMG.effect2,
      imageKey: "effect2",
    },
    {
      title: "맞춤형 서비스로 고객만족도 향상",
      description: "ARS(자동응답시스템), 신용카드 안전결제, 채팅상담 등 편의 기능 이용",
      image: IMG.effect3,
      imageKey: "effect3",
    },
    {
      title: "평생 동일한 번호",
      description: "사업장 변경, 통신사 변경시에도 전화번호 변경없이 동일한 번호를 평생 사용 가능",
      image: IMG.effect4,
      imageKey: "effect4",
    }
  ];

  // 추천 고객 데이터
  const recommendedCustomers = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&auto=format",
      title: "금융/보험",
      description: "전국에 지점을 두고 있는 고객"
    },
    {
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=400&fit=crop&auto=format",
      title: "백화점/마트",
      description: "ARS(자동응답시스템)과 같은 다양한 부가서비스를 이용하고 싶은 고객"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&auto=format",
      title: "공공/협회/복지",
      description: "하나의 번호를 사용하여 홍보 비용을 줄이고 싶은 고객"
    }
  ];

  // 주요 기능 탭 데이터
  const mainFeatures = [
    {
      name: "상담사 연결 설정",
      image: IMG.mainFeature1,
      description: "전국대표번호의 상담사 연결 설정 화면\n지역별, 시간별, 비율별 등 걸려오는 전화 상황에 따라 상담사 연결 방법을 선택할 수 있습니다.\n\n발신지역별 설정: 걸려 온 전화의 지역번호를 구분하여 상담사를 연결\n시간별 설정: 걸려 온 시간에 따라 전화를 구분하여 상담사를 연결\n자동 분배: 걸려 온 전화를 미리 정한 비율에 따라 나눈 상담사를 연결\n자동 전환: 통화 중으로 전화를 받지 못할 때 전화를 받을 수 있는 상담사를 연결"
    },
    {
      name: "ARS(자동응답시스템)",
      image: IMG.mainFeature2,
      description: "고객이 원하는 업무, 영업시간/휴무일 등 상황에 맞춰 음성 안내를 하고, 상담사를 연결해 줍니다.\n\n심플형 ARS: 영업시간/휴무일 정보, 인사말 등을 통화연결음으로 안내\n표준형 ARS: 고객이 음성 안내에 따라 주제를 선택하면 상담사를 연결하고, 전화 통계를 확인하여 고객 관리 가능\n플러스형 ARS: 별도 구축 없이 우리 회사 맞춤 ARS 제작 가능"
    },
    {
      name: "위치기반 서비스",
      image: IMG.mainFeature3,
      description: "전국에 지점이 여러 개 있으면, 고객 위치와 가까운 지점으로 전화를 연결해 줍니다.\n\n전화를 건 고객의 위치 정보를 조회해 가장 가까운 지점으로 전화 연결\n휴대폰, 인터넷전화, 일반전화 등 기기 종류 상관없이 위치 파악 가능"
    },
    {
      name: "비주얼링 서비스",
      image: IMG.mainFeature4,
      description: "전화를 건 고객 휴대폰 화면에 기업 로고나 원하는 사진을 영상으로 보여줄 수 있습니다.\n\n비주얼링 서비스 홈페이지에서 원하는 문구만 입력하면 이미지 제작 가능"
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

      {/* Sticky 상단 서브내비 */}
      <div
        className={`sticky top-[88px] z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200 transition-all ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-1 md:space-x-2 py-3 min-w-max md:min-w-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 md:px-4 py-2 text-sm md:text-base whitespace-nowrap rounded-lg hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Section: Hero */}
      <section 
        className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMG.hero})`
        }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/35 z-0"></div>
        
        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 w-full">
          <div className="max-w-3xl text-center md:text-left">
            {/* 1️⃣ 메인 헤드라인 */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight whitespace-nowrap transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`}>
              하나의 번호로, 전국을 연결하다
            </h1>
            
            {/* 2️⃣ 서브 헤드라인 */}
            <h2 className={`text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/95 leading-relaxed transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "120ms" }}>
              <span className="block mb-2 tracking-wide font-semibold">
                1544 · 1644 · 1661 · 1800 · 1833 · 1522
              </span>
              <span className="block">
                고객이 가장 쉽게 기억하는 대표번호
              </span>
            </h2>
            
            {/* 3️⃣ 핵심 혜택 */}
            <div className={`mb-6 md:mb-8 space-y-2 md:space-y-3 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "200ms" }}>
              <div className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-purple-600/90 backdrop-blur-sm rounded-lg text-white text-sm md:text-base font-semibold mr-3 mb-2">
                가입 시 최대 30% 요금 할인
              </div>
              <div className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-purple-600/90 backdrop-blur-sm rounded-lg text-white text-sm md:text-base font-semibold">
                번호이동 시 기존 요금 그대로 이용
              </div>
            </div>
            
            {/* 4️⃣ 신뢰 포인트 */}
            <p className={`text-sm md:text-base text-white/80 font-medium transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "300ms" }}>
              대표번호 보유 최대 · 가장 빠른 개통 일정
            </p>
          </div>
        </div>
      </section>

      {/* Section: 특장점 - 첫 번째 섹션, 큰 등장 액션 */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            firstSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              특장점
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              전국대표번호가 특별한 이유를 확인해 보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  firstSectionVisible
                    ? "opacity-100 translate-y-0 scale-100 rotate-0"
                    : "opacity-0 translate-y-8 scale-[0.90] -rotate-1"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: "800ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <CardContent className="p-0">
                  <div className={`relative h-56 overflow-hidden rounded-t-2xl transition-all duration-800 ${
                    firstSectionVisible
                      ? "opacity-100 shadow-lg"
                      : "opacity-0 shadow-none"
                  }`} style={{
                    transitionDelay: `${index * 100 + 200}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}>
                    {!imageErrors[feature.imageKey] ? (
                      <>
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                          onError={() => handleImageError(feature.imageKey)}
                        />
                        {/* 은은한 highlight 레이어 */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent transition-opacity duration-800 ${
                          firstSectionVisible ? "opacity-100" : "opacity-0"
                        }`} style={{
                          transitionDelay: `${index * 100 + 300}ms`,
                        }} />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-sm md:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 기대효과 */}
      <section id="expected-effects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            visibleSections.has("expected-effects")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              기대효과
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              전국대표번호를 도입하면 이런 효과를 얻을 수 있어요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expectedEffects.map((effect, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  visibleSections.has("expected-effects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    {!imageErrors[effect.imageKey] ? (
                      <img
                        src={effect.image}
                        alt={effect.title}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                        onError={() => handleImageError(effect.imageKey)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                      {effect.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                      {effect.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 추천 고객 */}
      <section id="recommended-customers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            visibleSections.has("recommended-customers")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              추천 고객
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              이런 분들께 전국대표번호를 더욱 추천드려요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCustomers.map((customer, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center bg-white ${
                  visibleSections.has("recommended-customers")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* 원형 이미지 컨테이너 */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200 shadow-md">
                      <img 
                        src={customer.image} 
                        alt={customer.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("recommended-customers")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              대표 고객
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              전국대표번호를 이미 사용중인 고객들이에요.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {["우리은행", "우리카드", "신한은행", "쿠팡"].map((client, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("recommended-customers")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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

      {/* Section: 주요 기능 */}
      <section id="main-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("main-features")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              주요 기능
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              전국대표번호가 제공하는 주요 기능들을 알려드릴게요.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* 탭 버튼 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
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
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 bg-white ${
              visibleSections.has("main-features")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "200ms" }}>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img 
                      src={mainFeatures[activeTab].image}
                      alt={mainFeatures[activeTab].name}
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
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
      <section id="service-diagram" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("service-diagram")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              서비스 구성도
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              전국대표번호의 제공방식을 구성도로 확인해 보세요.
            </p>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              전국대표번호를 이용하면 가상번호로 고객에게 노출 됩니다. 고객이 업체에 전화를 할 때는 가상번호로 발신하게 되고, 업체의 번호가 노출 되지 않습니다.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className={`bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 ease-out ${
              visibleSections.has("service-diagram")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "150ms" }}>
              {/* 서비스 구성도 다이어그램 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                {/* 왼쪽: 고객이 전화를 거는 번호 */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                    고객이 전화를 거는 번호
                  </h3>
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm mb-4">
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    예시) 1588 - 1234
                  </p>
                </div>

                {/* 가운데: U+ 전국대표번호 서비스 */}
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-2 border-primary/20">
                    <p className="text-base md:text-lg font-bold text-primary mb-2">
                      U+ 전국대표번호 서비스
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      가상 전화번호 이용
                    </p>
                  </div>
                  {/* 화살표 */}
                  <div className="hidden md:flex justify-center items-center my-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* 오른쪽: 실제 전화를 받는 번호 */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                    실제 전화를 받는 번호
                  </h3>
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm mb-4">
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    예시) 02 - 123 - 4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 전국대표번호 이용요금 */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("pricing")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              이용요금
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              전국대표번호의 이용요금을 확인해 보세요.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              전국대표번호 이용요금
            </p>
          </div>
          
          <div className={`overflow-x-auto transition-all duration-700 ease-out ${
            visibleSections.has("pricing")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`} style={{ transitionDelay: "150ms" }}>
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
                    {[500, 30, 15, 10, 5, 2].map((count, index) => (
                      <td key={count} className={`border border-gray-300 p-2 md:p-3 text-center font-medium ${index === 5 ? 'border-r-2' : ''}`}>
                        {count}개
                      </td>
                    ))}
                    {[500, 30, 15, 10, 5, 2].map((count, index) => (
                      <td key={count} className={`border border-gray-300 p-2 md:p-3 text-center font-medium ${index === 5 ? 'border-r-2' : ''}`}>
                        {count}개
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 md:p-3 font-semibold align-middle">기본료</td>
                    <td colSpan={6} className="border border-gray-300 p-2 md:p-3 text-center">
                      전화 1개당 11,000원
                    </td>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("pricing")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              부가서비스 상세
            </h2>
          </div>
          
          <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            {/* ARS 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "200ms" }}>
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

            {/* 위치기반서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "300ms" }}>
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

            {/* 채팅상담 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "400ms" }}>
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

            {/* 비주얼링 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "500ms" }}>
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

            {/* 매니지드컨택 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "600ms" }}>
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

            {/* 신용카드 안전결제 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "700ms" }}>
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

            {/* 문자메시지 부가서비스 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "800ms" }}>
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

            {/* 수신자 부담 1433 통화료 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "900ms" }}>
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

            {/* 수신자 부담 1433 서비스 이용료 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "1000ms" }}>
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

            {/* 수신자 부담 1433 서비스 요금 할인 */}
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "1100ms" }}>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("pricing")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              다른 고객님들이 같이 선택하신 상품들
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  visibleSections.has("pricing")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="aspect-video overflow-hidden rounded-xl mb-4">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("pricing")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              자주 묻는 질문
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className={`rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("pricing")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`} style={{ transitionDelay: "150ms" }}>
              <CardContent className="p-6 md:p-8 text-center text-gray-500">
                FAQ 내용은 추후 제공 예정입니다.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section: 하단 CTA */}
      <section id="bottom-cta" className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              전국대표번호 상담을 도와드릴게요
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              우리 회사에 맞는 대표번호 구성/부가서비스/요금제까지 한 번에 안내드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => window.location.href = "tel:0269511156"}
                className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="전화 상담: 02-6951-1156"
              >
                <Phone className="mr-2 w-5 h-5" />
                전화 상담
              </Button>
              <Link href="/contact/ConsultationForm">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  상담 신청
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NationalNumber;
