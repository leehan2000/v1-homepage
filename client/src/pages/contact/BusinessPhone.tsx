import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/**
 * 기업 인터넷전화 랜딩페이지 컴포넌트
 * 
 * 소호인터넷 페이지와 동일한 UX/디자인 레벨의 브랜드 경험형 랜딩페이지
 * 이미지 중심의 시각적 리듬으로 구성
 */
const BusinessPhone = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // WebP 우선 로딩 + fallback
  const [heroBgSrc, setHeroBgSrc] = useState(preferWebp(IMG.hero));

  // 이미지 URL 상수 (Unsplash 무료 이미지 사용)
  const IMG = {
    hero: "/images/internetphon.png",
    // 주요 특징 이미지 - 기업 통화/업무 환경
    feature1: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // 헤드셋 통화
    feature2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", // 사무실 통화
    feature3: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 콜센터
    feature4: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 전화 + PC
    feature5: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80", // 여러 통화
    feature6: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 네트워크 연결
    feature7: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 모니터링
    feature8: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 안정성
    // 스마트 키폰 기능 이미지
    smart1: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // 기본 기능
    smart2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", // 무료 서비스
    smart3: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 부가 서비스
    // 추가 혜택 이미지
    benefit1: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 무료 통화
    benefit2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 국제전화
  };

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  /**
   * 스크롤 앵커 이동 함수
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Sticky 네비게이션 스크롤 감지 및 Hero zoom 효과용 스크롤 값
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      setScrollY(window.scrollY);
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

  // Intersection Observer로 섹션 진입 감지 (stagger 애니메이션용)
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

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 네비게이션 항목 정의
  const navItems = [
    { id: "main-features", label: "주요 특징" },
    { id: "smart-phone", label: "스마트 키폰 기능" },
    { id: "phone-lineup", label: "전화기 라인업" },
    { id: "free-call-plans", label: "자유통화요금제" },
    { id: "additional-benefits", label: "추가 혜택" },
    { id: "faq", label: "자주 묻는 질문" },
  ];

  // LG유플러스 공식 페이지 기준 - 주요 특징 (이미지 추가)
  const mainFeatures = [
    {
      title: "최신 키폰 시스템 무료 제공",
      description: "사무실 키폰 구축 비용 없이 최신 디지털 키폰 기능을 무료로 이용할 수 있습니다.",
      highlight: "무료 제공",
      image: IMG.feature1,
      imageKey: "feature1",
    },
    {
      title: "초기 비용 0원",
      description: "가입비, 설치비 등 초기비용이 전혀 들지 않아 부담 없이 시작할 수 있습니다.",
      highlight: "0원",
      image: IMG.feature2,
      imageKey: "feature2",
    },
    {
      title: "통화료 절감",
      description: "KT 전화 대비 평균 요금을 45% 절감할 수 있으며, 국제전화 요금도 국내 최저 수준인 1분당 50원으로 제공됩니다.",
      highlight: "45% 절감",
      image: IMG.feature3,
      imageKey: "feature3",
    },
    {
      title: "기존 번호 유지",
      description: "기존에 사용하던 번호를 그대로 유지할 수 있으며, 상대방 화면에 회사 이름이 표시되는 레터링 옵션도 제공합니다.",
      highlight: "번호 유지",
      image: IMG.feature4,
      imageKey: "feature4",
    },
    {
      title: "무료 통화 혜택",
      description: "국내 최대 500만 가입자와의 무료 통화가 가능하며, 국내-해외, 본사-지사 간 내선 통화도 무료로 이용할 수 있습니다.",
      highlight: "무료 통화",
      image: IMG.feature5,
      imageKey: "feature5",
    },
    {
      title: "대표번호 사용 가능",
      description: "일반 시내번호뿐만 아니라 대표번호도 사용할 수 있어 기업 이미지를 높일 수 있습니다.",
      highlight: "대표번호",
      image: IMG.feature6,
      imageKey: "feature6",
    },
    {
      title: "24시간 기업전담 장애센터",
      description: "365일 24시간 신속한 장애 지원으로 안심하고 사용할 수 있습니다.",
      highlight: "24시간",
      image: IMG.feature7,
      imageKey: "feature7",
    },
    {
      title: "국제전화 요금 최저가",
      description: "해외 통화도 국내 최저 수준의 요금으로 이용할 수 있습니다.",
      highlight: "최저가",
      image: IMG.feature8,
      imageKey: "feature8",
    },
  ];

  // 스마트 키폰 기능
  const smartPhoneFeatures = [
    {
      category: "기본 기능",
      items: [
        "돌려주기",
        "당겨받기",
        "내선 단축번호",
        "3자 통화",
        "착신 전환",
        "수신 거부"
      ],
      image: IMG.smart1,
      imageKey: "smart1",
    },
    {
      category: "무료 서비스",
      items: [
        "발신번호 보고",
        "발신 제한",
        "대표번호 그룹핑",
        "회의 통화",
        "클릭투콜"
      ],
      image: IMG.smart2,
      imageKey: "smart2",
    },
    {
      category: "부가 서비스",
      items: [
        "통화 연결음",
        "ARS",
        "자동 녹취",
        "레터링",
        "발신번호 표시",
        "알림 메시지"
      ],
      image: IMG.smart3,
      imageKey: "smart3",
    }
  ];

  // 전화기 라인업
  const phoneModels = [
    {
      name: "IP-520S",
      features: ["전화번호 200개 저장", "헤드셋 연결 가능"]
    },
    {
      name: "IP-450S",
      features: ["단축번호 8개 저장", "헤드셋 연결 가능"]
    },
    {
      name: "IP-700S+EK700S",
      features: ["60개 통화 상태 확인", "3.5인치 컬러 LCD"]
    },
    {
      name: "IP-520GA",
      features: ["기가 인터넷 지원", "2.8인치 컬러 LCD"]
    }
  ];

  // 자유통화요금제
  const freeCallPlans = [
    { name: "자유 3", monthly: "5,000원", freeMinutes: "25분", discount: "48%" },
    { name: "자유 4", monthly: "6,000원", freeMinutes: "50분", discount: "57%" },
    { name: "자유 6", monthly: "8,000원", freeMinutes: "100분", discount: "56%" },
    { name: "자유 8", monthly: "10,000원", freeMinutes: "150분", discount: "63%" },
    { name: "자유 10", monthly: "12,000원", freeMinutes: "250분", discount: "55%" },
    { name: "자유 20", monthly: "22,000원", freeMinutes: "550분", discount: "58%" },
    { name: "자유 30", monthly: "32,000원", freeMinutes: "850분", discount: "60%" }
  ];

  return (
    <>
      <Helmet>
        <title>기업전화 | 브이원정보통신</title>
        <meta name="description" content="LG U+ 기업전화 서비스를 통해 효율적인 기업 통신 환경을 구축하세요. 최신 키폰 무료 제공, 초기비용 0원, 통화료 절감으로 업무 효율성을 높입니다." />
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
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 히어로 섹션 - 기업 인터넷전화 전용 */}
      <section 
        className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgSrc})`
        }}
      >
        {/* WebP 우선 로딩 + fallback 감지 */}
        <WebpPreloader
          webpSrc={preferWebp(IMG.hero)}
          fallbackSrc={IMG.hero}
          onError={() => setHeroBgSrc(IMG.hero)}
        />
        <style>{`
          /* 배경 이미지 미세 줌 - 선택적, 매우 약하게 */
          @keyframes heroSubtleZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.03);
            }
          }
          .hero-bg-subtle {
            animation: heroSubtleZoom 10s ease-in-out infinite alternate;
          }
        `}</style>
        <div className="absolute inset-0 z-0 hero-bg-subtle" style={{
          backgroundImage: `url(${heroBgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>
        
        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">
            {/* 메인 헤드라인 */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`}>
              흔들리지 않는 기업 통신<br />
              업무의 중심에 서는 인터넷전화
            </h1>
            
            {/* 서브 헤드라인 */}
            <p className={`text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "100ms" }}>
              교체는 간단하게, 통화 품질은 더 선명하게<br />
              기업을 위한 안정적인 인터넷전화 솔루션
            </p>
            
            {/* 핵심 포인트 배지 3개 */}
            <div className={`mb-8 md:mb-10 space-y-3 md:space-y-4 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/30">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">최신 키폰 무료 제공</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/30">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">초기비용 부담 최소화</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/30">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">번호이동 가능</span>
              </div>
            </div>
            
            {/* CTA 버튼 */}
            <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 scale-100 motion-reduce:opacity-100 motion-reduce:scale-100" 
                : "opacity-0 translate-y-3 scale-[0.98]"
            }`} style={{ transitionDelay: "150ms" }}>
              <Link href="/contact/ConsultationForm">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  무료 상담 신청하기
                </Button>
              </Link>
              <Link href="/cases/clients">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  도입 사례 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특징 섹션 */}
      <section id="main-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              LG U+ 기업전화 주요 특징
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              사무실 전화, 통신 관련 고민을 한번에 해결하는 솔루션
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                  visibleSections.has("main-features")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    {!imageErrors[feature.imageKey] ? (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                        onError={() => handleImageError(feature.imageKey)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-6">
                    {feature.highlight && (
                      <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {feature.highlight}
                      </div>
                    )}
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 스마트 키폰 기능 섹션 */}
      <section id="smart-phone" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              스마트 키폰 기능
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              업무 효율성을 높이는 다양한 기능을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartPhoneFeatures.map((category, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 bg-white ${
                  visibleSections.has("smart-phone")
                    ? index % 2 === 0
                      ? "opacity-100 translate-x-0"
                      : "opacity-100 translate-y-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    {!imageErrors[category.imageKey] ? (
                      <img
                        src={category.image}
                        alt={category.category}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                        onError={() => handleImageError(category.imageKey)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 전화기 라인업 섹션 */}
      <section id="phone-lineup" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              전화기 라인업
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 모델의 키폰을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoneModels.map((model, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 text-center bg-white ${
                  visibleSections.has("phone-lineup")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{model.name}</h3>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 자유통화요금제 섹션 */}
      <section id="free-call-plans" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              자유통화요금제
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              기업 규모와 통화 사용량에 맞는 최적의 요금제를 선택하세요
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className={`bg-white shadow-xl rounded-2xl ${
              visibleSections.has("free-call-plans")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } transition-all duration-700`}>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="border border-gray-300 p-4 text-center font-bold">요금제</th>
                        <th className="border border-gray-300 p-4 text-center font-bold">월 요금</th>
                        <th className="border border-gray-300 p-4 text-center font-bold">무료 통화</th>
                        <th className="border border-gray-300 p-4 text-center font-bold">할인율</th>
                      </tr>
                    </thead>
                    <tbody>
                      {freeCallPlans.map((plan, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="border border-gray-300 p-4 text-center font-semibold text-gray-900">{plan.name}</td>
                          <td className="border border-gray-300 p-4 text-center text-gray-700">{plan.monthly}</td>
                          <td className="border border-gray-300 p-4 text-center text-gray-700">{plan.freeMinutes}</td>
                          <td className="border border-gray-300 p-4 text-center font-bold text-primary">{plan.discount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                * VAT별도 / 3년 약정 기준
                <br />
                * 상세한 요금 정보는 상담을 통해 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 혜택 섹션 */}
      <section id="additional-benefits" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              추가 혜택
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("additional-benefits")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit1 ? (
                    <img
                      src={IMG.benefit1}
                      alt="무료 통화 혜택"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit1")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">무료 통화 혜택</h3>
                  <p className="text-gray-600 leading-relaxed">
                    국내 최대 500만 가입자와의 무료 통화가 가능하며, 국내-해외, 본사-지사 간 내선 통화도 무료로 이용할 수 있습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("additional-benefits")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit2 ? (
                    <img
                      src={IMG.benefit2}
                      alt="국제전화 요금 최저가"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit2")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">국제전화 요금 최저가</h3>
                  <p className="text-gray-600 leading-relaxed">
                    해외 통화도 국내 최저 수준인 1분당 50원으로 이용할 수 있습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              기업전화 서비스에 대한 궁금한 점을 확인하세요
            </p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card className={`rounded-2xl border-l-4 border-l-primary shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("faq")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기업 인터넷전화는 어떤 서비스인가요? 일반 전화나 가정용 070전화와 다른가요?</h3>
                <p className="text-gray-600 leading-relaxed">기업용 인터넷전화는 회사에서 필요한 편리한 부가 기능이 있습니다. 3자 회의 통화, 발신번호표시, 당겨받기, 돌려주기, 내선통화 등 다양한 부가 기능이 있고, 타사에서 사용하던 번호 그대로 이동이 가능한 장점이 있습니다.</p>
              </CardContent>
            </Card>
            <Card className={`rounded-2xl border-l-4 border-l-primary shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("faq")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "100ms" }}>
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 070번호를 사용하지 않고, 일반 번호로 사용할 수 있나요?</h3>
                <p className="text-gray-600 leading-relaxed">070번호 아닌 일반 번호(시내 전화번호)를 신규로 발급받아 사용 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className={`rounded-2xl border-l-4 border-l-primary shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("faq")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "200ms" }}>
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기존 사업장에서 사용하던 번호를 바꾸지 않고 계속 사용하고 싶은데 가능한가요?</h3>
                <p className="text-gray-600 leading-relaxed">번호는 쓰던 번호 그대로, 전화기는 새 것으로 교체해드립니다.</p>
              </CardContent>
            </Card>
            <Card className={`rounded-2xl border-l-4 border-l-primary shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("faq")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "300ms" }}>
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 24시간 사업장을 운영하고 있는데, 전화 장애시 AS 접수와 처리는 잘 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">LG U+에서는 기업 전용 장애 센터를 365일, 24시간 운영하고 있습니다. 여러 장애 상황 발생시 연중 무휴 AS 접수와 처리가 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className={`rounded-2xl border-l-4 border-l-primary shadow-md hover:shadow-xl transition-all duration-300 ${
              visibleSections.has("faq")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "400ms" }}>
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기업전화 설치에 소요되는 기간은 얼마나 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">기업 규모와 요구사항에 따라 다르지만, 일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정을 안내해 드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section id="consult" className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              기업통신 맞춤 설계 제안
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 기업전화 솔루션을 제안해 드립니다.
              <br />
              상담을 통해 맞춤형 요금제와 서비스를 안내해 드립니다.
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
          </header>
        </div>
      </section>
    </>
  );
};

export default BusinessPhone;
