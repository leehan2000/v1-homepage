import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { preferWebp, WebpPreloader } from "@/lib/image-utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Network,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

/**
 * 기업인터넷 랜딩페이지 컴포넌트
 * 
 * Hero는 깔끔하게 유지하고, 아래 섹션은 이미지 중심 카드로 역동적으로 구성
 */
const BusinessInternet = () => {
  // 이미지 URL 상수 (Unsplash 무료 이미지 사용)
  const IMG = {
    hero: "/images/internet.png",
    // 기업인터넷 장점 이미지
    advantage1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // PC/모니터
    advantage2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 속도/네트워크
    advantage3: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 서버/인프라
    advantage4: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 네트워크 설치
    // 광랜 독점 비교 이미지
    network1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 독점 회선
    network2: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 공유 회선
    // 고객후기 이미지
    review1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 학원
    review2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 건설
  };

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  // 요금 시뮬레이션 상태
  const [pcCount, setPcCount] = useState<number>(10);
  const [currentMonthlyFee, setCurrentMonthlyFee] = useState<number>(115000);
  // WebP 우선 로딩 + fallback
  const [heroBgSrc, setHeroBgSrc] = useState(preferWebp(IMG.hero));

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

  // 섹션으로 스크롤 이동 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 네비게이션 항목 정의
  const navItems = [
    { id: "overview", label: "기업인터넷이란" },
    { id: "advantages", label: "기업인터넷 장점" },
    { id: "network-comparison", label: "광랜 독점 비교" },
    { id: "terminal-fee", label: "추가단말요금 비교" },
    { id: "fee-simulation", label: "요금시뮬레이션" },
  ];

  // 요금 시뮬레이션 계산
  const calculateSavings = () => {
    // 타사: 기본요금 25,000원 + 추가단말요금 (PC당 5,500원, 2대 제외)
    const competitorBaseFee = 25000;
    const competitorAdditionalFee = Math.max(0, (pcCount - 2) * 5500);
    const competitorTotal = competitorBaseFee + competitorAdditionalFee;

    // LG U+: 기본요금 25,000원 (추가단말요금 0원)
    // 사용자가 입력한 현재 요금과 계산된 타사 요금 중 큰 값을 사용
    const competitorFee = Math.max(competitorTotal, currentMonthlyFee);
    const uplusTotal = 25000;

    const monthlySavings = competitorFee - uplusTotal;
    const yearlySavings = monthlySavings * 12;

    return {
      competitorTotal: competitorFee,
      uplusTotal,
      monthlySavings,
      yearlySavings,
    };
  };

  const savings = calculateSavings();

  // 추가단말요금 비교 차트 데이터
  const terminalFeeComparisonData = [
    {
      name: "기본요금",
      타사: 25000,
      "LG U+": 25000,
    },
    {
      name: "추가단말요금",
      타사: 90000,
      "LG U+": 0,
    },
    {
      name: "합계",
      타사: 115000,
      "LG U+": 25000,
    },
  ];

  const chartConfig = {
    타사: {
      label: "타사 인터넷",
      color: "#94a3b8",
    },
    "LG U+": {
      label: "LG U+ 인터넷",
      color: "#3b82f6",
    },
  };

  // 기업인터넷 장점
  const advantages = [
    {
      number: "01",
      title: "PC수 무제한 확장",
      description: "KT, SK 추가 단말서비스 및 인증수제한문제 완전해결! PC가 아무리 많아도 추가요금 0원",
      image: IMG.advantage1,
      imageKey: "advantage1",
    },
    {
      number: "02",
      title: "PC방급 속도에 집보다 싼 요금",
      description: "기업전용 광랜 100M ~ 1G 까지 (PC방급 안정성) 100M 기업광랜 2.5만/월, 1G 기업광랜 4만/월",
      image: IMG.advantage2,
      imageKey: "advantage2",
    },
    {
      number: "03",
      title: "고정 IP",
      description: "필요에 따라 고정IP 신청가능 유동+고정 혼합가능",
      image: IMG.advantage3,
      imageKey: "advantage3",
    },
    {
      number: "04",
      title: "사무실 랜공사 지원",
      description: "기업인터넷 + 기업키폰 + 사무실 랜공사를 한번에! (현장 상황에 따라 지원)",
      image: IMG.advantage4,
      imageKey: "advantage4",
    },
  ];

  // 광랜 독점 비교
  const networkComparison = [
    {
      type: "1:1 광랜 독점",
      provider: "LG U+",
      features: ["트래픽 제로", "안정적인 속도", "전용 회선"],
      image: IMG.network1,
      imageKey: "network1",
      color: "text-primary",
    },
    {
      type: "N:1 나눠 쓰는 인터넷",
      provider: "타사",
      features: ["트래픽 발생", "속도 저하 가능", "공유 회선"],
      image: IMG.network2,
      imageKey: "network2",
      color: "text-muted-foreground",
    },
  ];

  // 요금제 데이터
  const pricingPlans = [
    {
      category: "오피스넷",
      device: "광모델(유동1, 고정1)",
      speed: "100M",
      dynamicIp: "25,000원",
      fixedIp: "35,000원",
    },
    {
      category: "오피스넷",
      device: "광모델(유동1, 고정1)",
      speed: "1G",
      dynamicIp: "40,000원",
      fixedIp: "50,000원",
    },
    {
      category: "오피스넷",
      device: "L2스위치(유동2, 고정1)",
      speed: "100M",
      dynamicIp: "50,000원",
      fixedIp: "35,000원",
    },
    {
      category: "오피스넷",
      device: "L2스위치(유동2, 고정1)",
      speed: "1G",
      dynamicIp: "80,000원",
      fixedIp: "50,000원",
    },
  ];

  // 고객후기
  const reviews = [
    {
      title: "인터넷 속도가 빛처럼 빠르다!",
      company: "대치동 S독서학원",
      content:
        "아이들을 가르칠 때 미디어를 많이 활용하는데 인터넷이 느리고 자꾸 끊김 현상이 나타나 불편했어요. 아이들의 집중력은 계속 흐려지고 선생님들의 불만도 이만저만이 아니었어요. bizLGU 오피스넷을 사용한 후에는 수업 속도가 빨라졌어요! 인터넷 속도가 빨라져서 미디어가 잘 틀어지고 덕분에 더 좋은 수업을 하게 됐어요!",
      image: IMG.review1,
      imageKey: "review1",
    },
    {
      title: "PC인증수제한에서 해방!",
      company: "선학동 J건설",
      content:
        "사무실이 점점 커지면서 PC수도 늘어났어요. 기존 업체에서는 컴퓨터 3대만 넘으면 인터넷이 안되고, 1대 추가당 5,500원이나 받았어요. bizLGU로 바꾸고, 지긋지긋했던 PC인증수제한에서 해방됐어요! PC를 무제한으로 사용할 수 있어서 너무 좋아요. 요금도 저렴하고 추가금액으로 돈낭비하지 않아도 되니 부담감도 사라졌어요!",
      image: IMG.review2,
      imageKey: "review2",
    },
  ];

  return (
    <>
      <Helmet>
        <title>기업인터넷 | 브이원정보통신</title>
        <meta
          name="description"
          content="LG U+ 기업인터넷(U+ 오피스넷) 서비스를 통해 안정적이고 빠른 기업 인터넷 환경을 구축하세요. PC 수 무제한 연결, 초기 비용 0원으로 업무 효율성을 높입니다."
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
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 히어로 섹션 */}
      <section 
        className="relative w-full min-h-[420px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
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
        {/* 어두운 그라데이션 오버레이 */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15))'
          }}
        ></div>
        
        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 w-full py-12 md:py-16">
          <div className="max-w-2xl text-center md:text-left">
            {/* 상단 라벨 */}
            <div className={`inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 text-white transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`}>
              기업 인터넷
            </div>
            
            {/* 메인 헤드라인 */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`}>
              업무를 멈추지 않는 인터넷
            </h1>
            
            {/* 서브 카피 */}
            <p className={`text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "120ms" }}>
              기업 전용 회선으로 안정적인 속도와 연결을 제공합니다.
            </p>
            
            {/* 핵심 포인트 3개 */}
            <div className={`mb-8 md:mb-10 space-y-3 md:space-y-4 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroVisible 
                ? "opacity-100 translate-y-0 motion-reduce:opacity-100" 
                : "opacity-0 translate-y-3"
            }`} style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/20">
                <Network className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">기업 전용 회선</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">안정적인 네트워크</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">24시간 장애 대응</span>
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
                  무료 상담 신청
                </Button>
              </Link>
              <Link href="/services/business-internet">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  상품 자세히 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 기업인터넷이란? */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ease-out ${
            visibleSections.has("overview")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">LG U+ 기업인터넷이란?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              PC방급 기업전용 광케이블을, 고객사 사무실까지 직접 구성하여
              <br />
              업계 최고의 속도와 안정적인 품질을 제공하는 기업전용 인터넷서비스
            </p>
          </div>
        </div>
      </section>

      {/* 기업인터넷 장점 */}
      <section id="advantages" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">기업인터넷 장점</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  visibleSections.has("advantages")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    {!imageErrors[advantage.imageKey] ? (
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                        onError={() => handleImageError(advantage.imageKey)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-8">
                    <div className="text-sm font-bold text-primary mb-2">{advantage.number}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 광랜 독점 비교 */}
      <section id="network-comparison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">LG U+ 기업인터넷 광랜 독점</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkComparison.map((item, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  visibleSections.has("network-comparison")
                    ? index % 2 === 0
                      ? "opacity-100 translate-x-0"
                      : "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    {!imageErrors[item.imageKey] ? (
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                        onError={() => handleImageError(item.imageKey)}
                      />
                    ) : (
                      <div className={`w-full h-full ${index === 0 ? 'bg-gradient-to-br from-primary/20 to-primary/10' : 'bg-gradient-to-br from-gray-200 to-gray-100'}`} />
                    )}
                  </div>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold mb-2 ${item.color}`}>{item.type}</h3>
                      <p className="text-sm text-gray-600 mb-4">{item.provider}</p>
                    </div>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`} />
                          <span className="text-gray-700">{feature}</span>
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

      {/* 추가단말요금 비교 */}
      <section id="terminal-fee" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("terminal-fee")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">추가단말요금 0원</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              추가 단말요금제란? SK/KT 인터넷공유기 제한정책 (인증수 제한 정책)
              <br />
              PC 2대를 제외한 나머지 모든 PC당 5,500원의 추가요금지불
            </p>
          </div>

          {/* 비교 테이블 */}
          <Card className={`mb-8 transition-all duration-700 ease-out ${
            visibleSections.has("terminal-fee")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "150ms" }}>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold">구분</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">타사인터넷</th>
                      <th className="border border-gray-300 p-4 text-center font-bold bg-primary/10">LG U+ 인터넷</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">기본요금</td>
                      <td className="border border-gray-300 p-4 text-center">25,000원</td>
                      <td className="border border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">25,000원</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">추가단말요금</td>
                      <td className="border border-gray-300 p-4 text-center">90,000원</td>
                      <td className="border border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">0원</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-primary/5">
                      <td className="border border-gray-300 p-4 font-semibold">합계</td>
                      <td className="border border-gray-300 p-4 text-center font-bold">월 115,000원</td>
                      <td className="border border-gray-300 p-4 text-center font-bold text-primary">월 25,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-primary">
                  타 통신사보다 <span className="text-4xl">78%</span> 할인효과!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 비교 차트 */}
          <Card className={`bg-white border border-gray-200 shadow-sm transition-all duration-700 ease-out ${
            visibleSections.has("terminal-fee")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "300ms" }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-lg font-semibold text-gray-800">요금 비교 그래프</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer config={chartConfig} className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={terminalFeeComparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="#e2e8f0" 
                      strokeWidth={0.5}
                      vertical={false}
                    />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                      tickLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                    />
                    <YAxis 
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                      tickLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent 
                        className="bg-white border border-gray-200 shadow-lg rounded-lg"
                        indicator="dot"
                      />} 
                      cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                    />
                    <ChartLegend 
                      content={<ChartLegendContent className="mt-4" />}
                      wrapperStyle={{ paddingTop: '20px' }}
                    />
                    <Bar 
                      dataKey="타사" 
                      fill="#94a3b8" 
                      radius={[2, 2, 0, 0]}
                      stroke="#64748b"
                      strokeWidth={1}
                    />
                    <Bar 
                      dataKey="LG U+" 
                      fill="#3b82f6" 
                      radius={[2, 2, 0, 0]}
                      stroke="#2563eb"
                      strokeWidth={1}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 요금시뮬레이션 */}
      <section id="fee-simulation" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("fee-simulation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">기업인터넷 요금시뮬레이션</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              현재 회사 인터넷요금을 입력해보세요! 예상절감액을 확인하실 수 있습니다.
            </p>
          </div>

          <Card className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            visibleSections.has("fee-simulation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "150ms" }}>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 입력 섹션 */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="pcCount" className="text-lg font-semibold mb-2 block">
                      PC수
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="pcCount"
                        type="number"
                        min="1"
                        value={pcCount}
                        onChange={(e) => setPcCount(Number(e.target.value) || 1)}
                        className="text-lg"
                      />
                      <span className="text-lg font-semibold">대</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="currentFee" className="text-lg font-semibold mb-2 block">
                      총 요금
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="currentFee"
                        type="number"
                        min="0"
                        value={currentMonthlyFee}
                        onChange={(e) => setCurrentMonthlyFee(Number(e.target.value) || 0)}
                        className="text-lg"
                      />
                      <span className="text-lg font-semibold">원</span>
                    </div>
                  </div>
                </div>

                {/* 결과 섹션 */}
                <div className="space-y-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">LG U+ 도입 예상 발생 요금</p>
                          <p className="text-2xl font-bold text-primary">{savings.uplusTotal.toLocaleString()}원</p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="text-sm text-gray-600 mb-1">매 월 절감예상</p>
                          <p className="text-2xl font-bold text-green-600">
                            {savings.monthlySavings.toLocaleString()}원
                          </p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="text-sm text-gray-600 mb-1">매 년 절감예상</p>
                          <p className="text-2xl font-bold text-green-600">
                            {savings.yearlySavings.toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 절감률 차트 */}
                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <ChartContainer
                        config={{
                          타사: { label: "타사", color: "#94a3b8" },
                          "LG U+": { label: "LG U+", color: "#3b82f6" },
                        }}
                        className="h-[240px] w-full"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={[
                              {
                                name: "월 요금",
                                타사: savings.competitorTotal,
                                "LG U+": savings.uplusTotal,
                              },
                            ]}
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                          >
                            <CartesianGrid 
                              strokeDasharray="3 3" 
                              stroke="#e2e8f0" 
                              strokeWidth={0.5}
                              vertical={false}
                            />
                            <XAxis 
                              dataKey="name" 
                              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                              axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                              tickLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                            />
                            <YAxis 
                              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                              axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                              tickLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                            />
                            <ChartTooltip 
                              content={<ChartTooltipContent 
                                className="bg-white border border-gray-200 shadow-lg rounded-lg"
                                indicator="dot"
                              />} 
                              cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                            />
                            <ChartLegend 
                              content={<ChartLegendContent className="mt-4" />}
                              wrapperStyle={{ paddingTop: '20px' }}
                            />
                            <Bar 
                              dataKey="타사" 
                              fill="#94a3b8" 
                              radius={[2, 2, 0, 0]}
                              stroke="#64748b"
                              strokeWidth={1}
                            />
                            <Bar 
                              dataKey="LG U+" 
                              fill="#3b82f6" 
                              radius={[2, 2, 0, 0]}
                              stroke="#2563eb"
                              strokeWidth={1}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 요금제 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has("fee-simulation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">LG U+ 기업인터넷 요금제</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              번들, 3년 약정 서비스 이용시 (VAT 별도)
            </p>
          </div>

          <Card className={`transition-all duration-700 ease-out ${
            visibleSections.has("fee-simulation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`} style={{ transitionDelay: "200ms" }}>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 p-4 text-center font-bold">구분</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">장비</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">속도</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">유동 IP</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">고정 IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingPlans.map((plan, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 text-center">{plan.category}</td>
                        <td className="border border-gray-300 p-4 text-center">{plan.device}</td>
                        <td className="border border-gray-300 p-4 text-center font-semibold">{plan.speed}</td>
                        <td className="border border-gray-300 p-4 text-center">{plan.dynamicIp}</td>
                        <td className="border border-gray-300 p-4 text-center font-bold text-primary">
                          {plan.fixedIp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 고객후기 */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">고객후기</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className={`rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  visibleSections.has("fee-simulation")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    {!imageErrors[review.imageKey] ? (
                      <img
                        src={review.image}
                        alt={review.title}
                        className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                        onError={() => handleImageError(review.imageKey)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{review.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-4">{review.company}</p>
                    <p className="text-gray-600 leading-relaxed">{review.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 중간 CTA 섹션 */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ease-out ${
            visibleSections.has("fee-simulation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">기업인터넷 상담 신청</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              전문 컨설턴트가 고객의 환경에 맞는 최적의 기업인터넷 솔루션을 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => window.location.href = "tel:0269511156"}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="전화 상담: 02-6951-1156"
              >
                <Phone className="mr-2 w-5 h-5" />
                전화 상담
              </Button>
              <Link href="/contact/ConsultationForm">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  상담 신청
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 최종 CTA 섹션 */}
      <section className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              11,000 기업의 선택, 전국1등 기업통신 전문센터
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80 mb-2">기업 통신 서비스 부문</p>
                  <p className="text-2xl font-bold text-white">고객만족도 2년연속 1위</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80 mb-2">LG U+만의 전문 컨설팅을 받는</p>
                  <p className="text-2xl font-bold text-white">11,000개의 기업 고객</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80 mb-2">LG U+기업통신 전문 컨설팅</p>
                  <p className="text-2xl font-bold text-white">50,000건 돌파</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-bold">070.5023.0000</p>
              <p className="text-lg opacity-90">
                지금 바로 기업전문 컨설턴트와 상담하세요.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
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
          </header>
        </div>
      </section>
    </>
  );
};

export default BusinessInternet;
