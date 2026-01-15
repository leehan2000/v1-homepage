import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Phone,
} from "lucide-react";
import { preferWebp, WebpPreloader } from "@/lib/image-utils";

/**
 * 우리가게패키지(소호인터넷) 랜딩페이지 컴포넌트
 * 
 * 보자마자 이해되고, 끝까지 스크롤하게 만드는 랜딩페이지
 * 이미지 중심의 시각적 리듬으로 구성
 */
const UplusSohoInternet = () => {
  // 이미지 URL 상수 (Unsplash 무료 이미지 사용)
  const IMG = {
    hero: "/images/soho_hero.png",
    // 문제 인식 이미지
    problem1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // 결제/포스
    problem2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // 가게 구조
    problem3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // 장애 대응
    problem4: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 비용
    // 운영 기준 이미지
    standard1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // 결제 안정
    standard2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // 맞춤 설계
    standard3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // 전담 대응
    // 혜택 이미지
    benefit1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 설치
    benefit2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // 요금
    benefit3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // 장비
    benefit4: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 추천
    // 사장님광장 이미지 (B2B 대시보드 느낌)
    plaza1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // 인사이트
    plaza2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 제휴
    plaza3: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // 전용 서비스
    plaza4: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // 가이드
  };

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // WebP 우선 로딩 + fallback
  const [heroBgSrc, setHeroBgSrc] = useState(preferWebp(IMG.hero));

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

  // 서브내비 메뉴 항목
  const navItems = [
    { id: "intro", label: "소개" },
    { id: "context", label: "운영 기준" },
    { id: "standard", label: "운영 기준" },
    { id: "benefit", label: "혜택" },
    { id: "plaza", label: "사장님광장" },
    { id: "who", label: "추천 대상" },
    { id: "guide", label: "이용 안내" },
    { id: "faq", label: "FAQ" },
    { id: "consult", label: "상담" },
  ];

  // FAQ 데이터
  const faqItems = [
    {
      id: "faq1",
      question: "설치 기간은 얼마나 걸리나요?",
      answer:
        "가게 상황과 구성에 따라 다르지만, 일반적으로 상담 후 1~2주 내 설치가 완료됩니다. 현장 확인이 필요한 경우 추가 시간이 소요될 수 있습니다.",
    },
    {
      id: "faq2",
      question: "기존 인터넷과 병행 사용할 수 있나요?",
      answer:
        "네, 가능합니다. 기존 인터넷과 병행하여 사용하실 수 있으며, 필요에 따라 점진적으로 전환하실 수 있습니다.",
    },
    {
      id: "faq3",
      question: "조건과 혜택은 어떻게 적용되나요?",
      answer:
        "가게 규모, 결제 환경, 운영 형태 등을 종합적으로 고려하여 맞춤 조건을 제안해드립니다. 상담을 통해 구체적인 조건을 확인하실 수 있습니다.",
    },
    {
      id: "faq4",
      question: "장애 발생 시 대응은 어떻게 되나요?",
      answer:
        "전담 상담팀이 24시간 모니터링하며, 장애 발생 시 신속하게 대응합니다. 긴급 상황은 즉시 현장 지원이 가능합니다.",
    },
    {
      id: "faq5",
      question: "결제 안정성은 어떻게 보장되나요?",
      answer:
        "결제 시스템과의 연동을 고려한 안정적인 네트워크 구성을 제공합니다. 포스, 키오스크 등 결제 환경에 최적화된 설계를 진행합니다.",
    },
    {
      id: "faq6",
      question: "CCTV는 필수인가요?",
      answer:
        "아니요, CCTV는 필수가 아닙니다. 가게 운영에 필요한 구성만 선택하실 수 있으며, CCTV는 상담 후 필요에 따라 추가하실 수 있습니다.",
    },
    {
      id: "faq7",
      question: "요금 구조는 어떻게 되나요?",
      answer:
        "가게 규모와 사용 환경에 따라 맞춤 요금제를 제안해드립니다. 기본 요금 외 추가 구성에 따른 요금은 상담을 통해 안내받으실 수 있습니다.",
    },
    {
      id: "faq8",
      question: "사장님광장은 어떻게 이용하나요?",
      answer:
        "우리가게패키지 가입 시 자동으로 사장님광장 이용 권한이 부여됩니다. 운영 인사이트, 제휴 서비스, 전용 혜택 등을 이용하실 수 있습니다.",
    },
  ];

  // 추천 대상 데이터
  const targetItems = [
    { label: "카페·음식점", desc: "포스, 키오스크, 와이파이 운영" },
    { label: "일반매장", desc: "결제 시스템, 재고 관리" },
    { label: "학원·병원", desc: "안정적인 네트워크 환경" },
    { label: "무인·키오스크", desc: "원격 관리, 결제 연동" },
    { label: "소규모 사무실", desc: "업무 환경 최적화" },
  ];

  return (
    <>
      <Helmet>
        <title>우리가게패키지(소호인터넷) | 브이원정보통신</title>
        <meta
          name="description"
          content="카페·식당·매장·학원까지. 안정적인 인터넷, 그 다음은 사장님께 돌아오는 가치입니다. LG U+ 우리가게패키지."
        />
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

      {/* Hero 섹션 - business-phone과 동일한 구조 */}
      <section 
        id="intro"
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
              안정적인 인터넷,
              <br />
              그 다음은 사장님께 돌아오는 가치입니다
            </h1>
            
            {/* 서브 헤드라인 */}
            <p className={`text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "100ms" }}>
              인터넷은 이제 '잘 되는지'보다 '어떻게 운영되는지'가 더 중요해졌습니다.
              <br />
              카페·식당·매장·학원까지 … LG U+ 우리가게패키지(소호인터넷)
            </p>
            
            {/* CTA 버튼 */}
            <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 scale-100 motion-reduce:opacity-100 motion-reduce:scale-100" 
                : "opacity-0 translate-y-3 scale-[0.98]"
            }`} style={{ transitionDelay: "150ms" }}>
              <Button
                size="lg"
                onClick={() => window.location.href = "tel:0269511156"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
                aria-label="전화 상담: 02-6951-1156"
              >
                <Phone className="mr-2 w-5 h-5" />
                전화 상담
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("consult")}
                className="border-2 border-white text-white bg-black/30 backdrop-blur-sm hover:bg-black/50 shadow-lg px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
                aria-label="상담 신청"
              >
                상담 신청
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 기존 사업장 공감(문제 인식) 섹션 - 이미지 중심 */}
      <section id="context" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              많은 사장님들이 이런 상황에 있습니다
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 대표 문제 카드 - 강조 (더 크게) */}
            <Card
              className={`rounded-2xl border-2 shadow-lg hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-500 bg-red-50/50 border-red-300 ${
                visibleSections.has("context")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.98]"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                  {!imageErrors.problem1 ? (
                    <img
                      src={IMG.problem1}
                      alt="결제 중단"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("problem1")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-50" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">인터넷 장애로 결제가 중단되는 경우</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    포스, 키오스크 등 결제 시스템이 멈추면 매출에 직접적인 영향을 줍니다. 결제 끊기면 바로 매출 중단입니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("context")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {!imageErrors.problem2 ? (
                    <img
                      src={IMG.problem2}
                      alt="가게 구조"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("problem2")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">가게 구조에 맞지 않는 인터넷 구성</h3>
                  <p className="text-gray-600">공간 구조나 운영 환경을 고려하지 않은 설계로 불편함이 발생합니다.</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("context")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {!imageErrors.problem3 ? (
                    <img
                      src={IMG.problem3}
                      alt="장애 대응"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("problem3")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">장애 발생 시 대응이 느린 경우</h3>
                  <p className="text-gray-600">문제 발생 시 빠른 해결이 어려워 운영에 차질이 생깁니다.</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("context")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {!imageErrors.problem4 ? (
                    <img
                      src={IMG.problem4}
                      alt="비용"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("problem4")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">불필요한 비용과 조건이 많음</h3>
                  <p className="text-gray-600">실제로 필요하지 않은 구성이나 조건으로 인해 비용이 증가합니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 연결 문장 */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              우리가게패키지는 '바꾸라고 설득하는 상품'이 아니라
              <br />
              '다시 고를 수 있는 기준'을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 운영 기준(가치 제안) 섹션 - 전문 서비스 카드처럼 */}
      <section id="standard" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              우리가게패키지가 보는 기준은 다릅니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("standard")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  {!imageErrors.standard1 ? (
                    <img
                      src={IMG.standard1}
                      alt="결제 안정"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("standard1")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">결제/포스/키오스크 고려</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    결제 시스템의 안정성을 최우선으로 고려하여 설계합니다. 포스, 키오스크 등 결제 환경에 최적화된 네트워크 구성을 제공합니다.
                  </p>
                  <p className="text-base font-semibold text-primary">결제 끊기면 바로 매출 중단</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("standard")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  {!imageErrors.standard2 ? (
                    <img
                      src={IMG.standard2}
                      alt="맞춤 설계"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("standard2")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">가게 구조 맞춤 설계</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    공간 구조, 층수, 벽체 등을 종합적으로 분석하여 최적의 네트워크 설계를 진행합니다. 가게 환경에 맞는 구성으로 안정성을 확보합니다.
                  </p>
                  <p className="text-base font-semibold text-primary">가게 구조가 바뀌면 네트워크도 달라져야 합니다</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("standard")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  {!imageErrors.standard3 ? (
                    <img
                      src={IMG.standard3}
                      alt="전담 대응"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("standard3")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">장애/문의 전담 대응</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    전담 상담팀이 24시간 모니터링하며, 문제 발생 시 신속하게 대응합니다. 운영 중단 없이 안정적인 서비스를 제공합니다.
                  </p>
                  <p className="text-base font-semibold text-primary">문제 발생 시 즉시 대응</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 운영 설명 마무리 문단 */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              운영 환경을 기준으로 설계하다 보면, 자연스럽게 불필요한 비용과 조건도 정리됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 혜택(가치로 표현) 섹션 - 이미지 중심 */}
      <section id="benefit" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              선택의 기준이 달라지면, 자연스럽게 조건도 달라집니다
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              우리가게패키지는 가게 상황을 기준으로 설계되기 때문에 적용 가능한 조건 또한 달라질 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Z자 흐름으로 등장 */}
            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("benefit")
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit1 ? (
                    <img
                      src={IMG.benefit1}
                      alt="설치 부담 완화"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit1")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">설치 부담 완화</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    가게 상황에 맞는 최적의 설치 방식을 제안하여 설치 비용과 시간을 최소화합니다.
                  </p>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    조건 안내
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("benefit")
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-8 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit2 ? (
                    <img
                      src={IMG.benefit2}
                      alt="요금 구조 재정비"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit2")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">요금 구조 재정비</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    실제 사용 환경에 맞는 요금제를 제안하여 불필요한 비용을 줄입니다.
                  </p>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    맞춤 요금
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("benefit")
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit3 ? (
                    <img
                      src={IMG.benefit3}
                      alt="장비 구성 조건"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit3")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">장비/구성 조건</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    필요한 장비만 선택하여 구성하므로 초기 비용을 절감할 수 있습니다.
                  </p>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    필수 구성만
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500 ${
                visibleSections.has("benefit")
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-8 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  {!imageErrors.benefit4 ? (
                    <img
                      src={IMG.benefit4}
                      alt="추천 고객 조건"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
                      onError={() => handleImageError("benefit4")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">추천/기존고객 조건</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    기존 고객이나 추천 고객에게는 추가 혜택을 제공합니다.
                  </p>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    전용 혜택
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 섹션 하단 브리지 문장 */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              이렇게 설계된 선택은 요금이나 조건에만 그치지 않습니다.
              <br />
              운영을 돕는 서비스로까지 확장됩니다.
            </p>
          </div>

          {/* 중간 CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = "tel:0269511156"}
              className="px-6 py-3"
              aria-label="전화로 조건 확인: 02-6951-1156"
            >
              <Phone className="mr-2 w-4 h-4" />
              전화로 조건 확인
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("consult")}
              className="px-6 py-3"
              aria-label="상담 신청"
            >
              상담 신청
            </Button>
          </div>
        </div>
      </section>

      {/* 사장님광장 섹션 - 서브 히어로급 */}
      <section id="plaza" className="py-36 bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 프리헤더 */}
          <div className="text-center mb-6">
            <p className="text-sm md:text-base text-gray-600 font-medium">
              우리가게패키지를 선택한 사장님께 함께 제공되는 전용 서비스입니다.
            </p>
          </div>

          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              사장님을 위한 운영 공간, LG U+ 사장님광장
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* 사장님광장: Hero급 대우 - 카드 크기와 이미지 비중 압도적 */}
            <Card className="rounded-3xl border-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {!imageErrors.plaza1 ? (
                    <img
                      src={IMG.plaza1}
                      alt="운영 인사이트"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      onError={() => handleImageError("plaza1")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100" />
                  )}
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-5 text-gray-900">운영 인사이트 큐레이션</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    가게 운영에 도움이 되는 정보와 트렌드를 큐레이션하여 제공합니다. 업종별 맞춤 인사이트로 운영 효율을 높일 수 있습니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {!imageErrors.plaza2 ? (
                    <img
                      src={IMG.plaza2}
                      alt="제휴 서비스"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      onError={() => handleImageError("plaza2")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100" />
                  )}
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-5 text-gray-900">사장님 전용 제휴 서비스</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    사장님광장 회원만을 위한 특별 제휴 서비스를 제공합니다. 다양한 업종의 파트너사와 협업하여 실질적인 혜택을 드립니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {!imageErrors.plaza3 ? (
                    <img
                      src={IMG.plaza3}
                      alt="전용 서비스"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      onError={() => handleImageError("plaza3")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100" />
                  )}
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-5 text-gray-900">통신 이용 고객 전용 서비스</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    LG U+ 통신 서비스를 이용하는 고객만을 위한 자격 기반 서비스를 제공합니다. 운영에 필요한 다양한 도구와 정보에 접근할 수 있습니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {!imageErrors.plaza4 ? (
                    <img
                      src={IMG.plaza4}
                      alt="운영 확장 가이드"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                      onError={() => handleImageError("plaza4")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100" />
                  )}
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-5 text-gray-900">운영 확장 가이드</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    가게 운영을 확장하거나 개선할 때 필요한 가이드와 자료를 제공합니다. 체계적인 운영 계획 수립을 지원합니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 회수 문장 */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              이제, 사장님 가게에 어떤 구성이 맞는지 하나씩 살펴보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 추천 대상 섹션 */}
      <section id="who" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              이런 곳에 추천합니다
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {targetItems.map((item, idx) => (
              <Card
                key={idx}
                className="rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-base mb-2 text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 안내 섹션 */}
      <section id="guide" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">이용 안내</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">상담/현황확인</h3>
                <p className="text-gray-600">
                  가게 규모, 결제 환경, 운영 형태 등을 확인하여 최적의 구성을 제안합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">가게 맞춤 구성/조건 안내</h3>
                <p className="text-gray-600">
                  확인된 현황을 바탕으로 맞춤 구성과 조건을 상세히 안내해드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">설치/개통/운영</h3>
                <p className="text-gray-600">
                  설치 및 개통 후 안정적인 운영을 위한 지속적인 지원을 제공합니다.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 선택 옵션 박스 */}
          <div className="max-w-3xl mx-auto">
            <Card className="rounded-2xl border shadow-sm bg-blue-50/50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1">ℹ️</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">추가 구성 안내</h3>
                    <p className="text-blue-800">
                      CCTV, 와이파이 확장 등은 필수가 아닙니다. 상담을 통해 가게 운영에 필요한 구성만 선택하실 수 있습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.id}
                className="group border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
                open={openFaq === item.id}
                onToggle={(e) => {
                  setOpenFaq(e.currentTarget.open ? item.id : null);
                }}
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none flex items-center justify-between">
                  <span>{item.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openFaq === item.id ? "rotate-90" : ""
                    }`}
                  />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 상담 CTA 섹션 */}
      <section id="consult" className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            사장님 가게 상황부터 들어보겠습니다
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-95">
            가게 규모·결제 환경만 알려주셔도 가장 안정적인 구성부터 차분히 안내해드립니다.
          </p>

          {/* 전화번호 */}
          <div className="mb-8">
            <a
              href="tel:0269511156"
              className="text-3xl md:text-4xl font-bold hover:underline inline-block"
              aria-label="전화 상담: 02-6951-1156"
            >
              02-6951-1156
            </a>
          </div>

          {/* CTA 버튼 2개 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.location.href = "tel:0269511156"}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="전화 상담: 02-6951-1156"
            >
              <Phone className="mr-2 w-5 h-5" />
              전화 상담
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "#"}
              className="border-2 border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold transition-all duration-300"
              aria-label="상담 신청"
            >
              상담 신청
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UplusSohoInternet;
