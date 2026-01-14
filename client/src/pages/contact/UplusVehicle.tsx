import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Route,
  FileText,
  DollarSign,
  Shield,
  User,
  Send,
  Map,
  Key,
  ClipboardList,
  Bell,
  Wallet,
  ShieldCheck,
  Bus,
  Package,
  Users,
  Building2,
} from "lucide-react";

/**
 * U+커넥트 차량관제 랜딩페이지 컴포넌트
 * 
 * Hero는 깔끔하게 유지하고, 아래 섹션은 이미지 중심 카드로 역동적으로 구성
 */
const UplusVehicle = () => {
  const [activeTab, setActiveTab] = useState("field-service");
  const [serviceType, setServiceType] = useState("terminal");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);

  // 이미지 URL 상수 (Unsplash 무료 이미지 사용)
  const IMG = {
    hero: "/images/U+connect.png",
    // 주요 기능 이미지 - 차량관제/지도/관제 대시보드
    feature1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 실시간 위치 확인
    feature2: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 운행경로 분석
    feature3: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 운행일지 자동 생성
    feature4: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 통합 비용 관리
    feature5: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 안전운전 관리
    feature6: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 임원/VIP 차량 관리
    feature7: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 운행정보 자동 전송
    feature8: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 거점 관리 및 알림
    feature9: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 디지털키
    // 비용 절감 효과 이미지
    saving1: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 운영 비용/시간 절약
    saving2: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 세무 비용 절약
    saving3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 유류비 절약
    saving4: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80", // 관리 비용 절약
    // 특별 혜택 이미지
    benefit1: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // 기기 구입비 0원
    benefit2: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", // 설치비 0원
    benefit3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // A/S 무료
    // 업종별 기능 이미지
    industryFeature1: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    industryFeature2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    industryFeature3: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    industryFeature4: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    // 기기 소개 이미지
    device1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    device2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    device3: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    device4: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    device5: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
    device6: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    device7: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    // 고객후기 이미지
    review1: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
    review2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    review3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    review4: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
  };

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToConsultation = () => {
    scrollToSection("consultation");
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

  const navItems = [
    { id: "product-info", label: "상품안내" },
    { id: "features", label: "주요 기능" },
    { id: "pricing", label: "이용요금" },
    { id: "benefits", label: "특별혜택" },
    { id: "addon-services", label: "부가정보안내" },
    { id: "reviews", label: "고객후기" },
    { id: "faq", label: "자주하는 질문" },
    { id: "consultation", label: "가입상담" },
  ];

  // 업종/차종 탭 데이터 구조
  const industryTabs = [
    {
      key: "field-service",
      label: "현장 출동 서비스",
      headline: "기사님은 다녀왔지만, 고객은 안왔대요.",
      subheadline: "정확한 도착 시간을 실시간으로 안내하고, 상세한 운행경로로 분쟁을 해결하세요.",
      applyList: [
        "가전/렌탈서비스",
        "건물/시설 유지보수",
        "전문장비 유지보수",
        "통신/물리보안",
        "방역/에어컨/엘리베이터",
      ],
      features: [
        {
          title: "실시간 위치 공유",
          desc: "고객에게 정확한 도착시간을 안내하실 수 있어요.",
          detail: "관제 기능을 켜고 끌 수 있어 업무 시간 외에는 사생활 보호 가능",
          howto: "[운행 관제] → [실시간 차량 위치]",
          icon: MapPin,
        },
        {
          title: "운행 경로 추적",
          desc: "고객과 분쟁이 생기면 상세 운행경로를 증빙자료로 활용할 수 있어요.",
          howto: "[운행 관제] → [운행이력/경로]",
          icon: Route,
        },
        {
          title: "거점 관리 및 알림",
          desc: "자주 방문하는 장소를 등록하고, 도착하면 고객에게 알림을 보낼 수 있어요.",
          howto: "[거점 관리] → [출입 알림 지역 설정]",
          icon: Map,
        },
        {
          title: "출장비/유류비 관리",
          desc: "GPS 기반 정확한 거리, 출발/도착 시간으로 출장비를 투명하게 관리할 수 있어요.",
          detail: "2025년 9월부터 유류비 영수증 OCR 기술로 자동 입력 가능",
          howto: "[차량 관리] → [유류비]",
          icon: Wallet,
          hasOcrInfo: true,
        },
      ],
    },
    {
      key: "logistics",
      label: "물류·배송업",
      headline: "배송 지연, 상품 파손은 단 한 번도 있어선 안되니까.",
      subheadline: "문열림 · 온도센서로 물건을 안전하게 배송하고 최적 경로 설정으로 연료비는 줄이세요.",
      applyList: [
        "도소매/요식 관련 프랜차이즈",
        "택배, 퀵서비스, 보관/운송/배송 등 전문 업체",
        "업무용 렌터카/통근버스",
      ],
      features: [
        {
          title: "최적 경로 안내",
          desc: "여러 배송지를 최적의 순서로 배치하여 연료비와 시간을 절약할 수 있어요.",
          howto: "[운행 관리] → [배송/운송 현황]",
          icon: Route,
        },
        {
          title: "배송 완료 증빙",
          desc: "배송 완료 후 인수증을 올려 분실이나 잘못 배송되는 것을 방지할 수 있어요.",
          howto: "[운행관리] → [배송/운송 현황] → [인수증 확인]",
          icon: ClipboardList,
        },
        {
          title: "이상 감지 알림",
          desc: "문열림/온도 이상을 감지하면 알림을 보내 물품 손상을 예방할 수 있어요.",
          howto: "[운행 관리] → [이상 감지 알림]",
          icon: Bell,
        },
        {
          title: "통합 비용 관리",
          desc: "유류비, 하이패스, 과태료 등 모든 운송 비용을 한곳에서 관리할 수 있어요.",
          howto: "[차량 관리] → [차량비용 리포트]",
          icon: DollarSign,
        },
      ],
    },
    {
      key: "manufacturing",
      label: "제조·건설업",
      headline: "정확한 자재 배송과 납기일은 신뢰의 기본이죠.",
      subheadline: "자재 배송부터 납품까지 체계적으로 관리하고, 국세청 양식 운행일지로 세무 혜택 받으세요.",
      applyList: [
        "완제품 배송",
        "기업 간 자재 납품",
        "건설 자재 납품",
        "업무용 렌카/통근버스",
      ],
      features: [
        {
          title: "자재 배송 관리",
          desc: "기업 간 자재 납품이나 배송을 체계적으로 관리하고 추적할 수 있어요.",
          howto: "[운행 관리] → [배송/운송 현황]",
          icon: Package,
        },
        {
          title: "국세청 운행일지 자동 생성",
          desc: "국세청 양식 운행일지를 간편하게 세무사에게 전달하고, 법인세를 절약할 수 있어요.",
          howto: "[운행 관리] → [운행일지(국세청)]",
          icon: FileText,
        },
        {
          title: "통근버스 관리",
          desc: "직원 통근버스 운행을 안전하고 효율적으로 관리할 수 있어요.",
          howto: "[운행 관리] → [노선현황] 또는 [노선계획 등록]",
          icon: Bus,
        },
        {
          title: "안전운전 관리",
          desc: "운전 점수를 통해 사고를 미리 예방하여 보험료를 절약할 수 있어요.",
          howto: "[안전/경제운전] → [안전/경제운전 지수]",
          icon: Shield,
        },
      ],
    },
    {
      key: "government",
      label: "정부·공공기관",
      headline: "명확한 기록 관리로 공공차량 운영을 투명하게.",
      subheadline: "모든 공무차량을 통합 관리하고, 운행 기록을 명확히 남겨 공공 신뢰를 높이세요.",
      applyList: [
        "공공 물품 배송",
        "관공서/기관 공무차량",
        "학교 통학버스",
        "공공시설 관리",
        "복지시설 차량",
        "공공서비스 현장 출동",
      ],
      features: [
        {
          title: "공무차량 통합 관리",
          desc: "모든 공무차량 운행 기록을 한곳에서 관리할 수 있어요.",
          howto: "[차량 관리] → [차량 등록/조회/설정]",
          icon: Building2,
        },
        {
          title: "국세청 양식 운행일지 관리",
          desc: "국세청 양식 운행일지를 간편하게 세무사에게 전달하고, 법인세를 절약할 수 있어요.",
          howto: "[운행 관리] → [운행일지(국세청)]",
          icon: FileText,
        },
        {
          title: "공공서비스 차량 안전/경제운전 관리",
          desc: "운전자별 안전/경제운전 지수로 공공서비스 차량을 안전하게 관리할 수 있어요.",
          howto: "[안전/경제운전] → [운전자별 안전/경제운전 지수]",
          icon: ShieldCheck,
        },
        {
          title: "거점 관리 및 알림",
          desc: "정기 점검하는 장소를 등록하고 도착하면 담당자에게 알림을 보내 체계적으로 관리할 수 있어요.",
          howto: "[거점 관리] → [출입 알림 지역 설정]",
          icon: Map,
        },
      ],
    },
    {
      key: "corporate",
      label: "일반 법인차량",
      headline: "법인차량 운영 관리만 잘해도 회사 운영비가 줄어들어요.",
      subheadline: "임원 차량은 위치 노출 없이 운행일지만 관리하고 모든 법인차량은 한곳에서 체계적으로 관리하세요.",
      applyList: [
        "임원 차량 / VIP 차량",
        "영업 차량",
        "업무용 법인차량",
      ],
      features: [
        {
          title: "국세청 운행일지 자동 생성",
          desc: "운행만 하면 자동으로 국세청 양식 운행일지가 생성되며 엑셀 파일로 내려받을 수 있어요.",
          howto: "[운행 관리] → [운행일지(국세청)]",
          icon: FileText,
        },
        {
          title: "차량 등록 및 관제 설정",
          desc: "법인차량을 등록하고 VIP/임원 차량은 위치 노출 없이 운행일지만 생성되게 설정할 수 있어요.",
          howto: "[운행관제] → [운행이력/경로]",
          icon: MapPin,
        },
        {
          title: "법인차량 비용 관리",
          desc: "유류비, 보험료, 과태료 등 모든 법인차량 비용을 한곳에서 관리할 수 있어요.",
          howto: "[차량 관리] → [차량비용 리포트]",
          icon: DollarSign,
        },
        {
          title: "출장 운행경로 분석",
          desc: "출장 관련 운행경로로 개인 용도 사용 여부를 확인할 수 있어요.",
          howto: "[운행 관리] → [운행 이력/경로]",
          icon: Route,
        },
      ],
    },
    {
      key: "bus",
      label: "통학·통근 버스",
      headline: "누가 탔는지, 어디쯤 왔는지 한눈에 확인해요.",
      subheadline: "실시간 탑승 확인으로 학부모는 안심하고, 운행 기록으로 관리자는 손쉽게 관리할 수 있어요.",
      applyList: [
        "학원/학교 버스",
        "어린이집 차량",
        "회사 통근버스",
        "복지시설 차량",
      ],
      features: [
        {
          title: "실시간 위치 공유",
          desc: "버스 위치를 실시간으로 확인해 도착 시간에 맞춰 준비할 수 있어요.",
          howto: "[운행 관제] → [실시간 차량 위치]",
          icon: MapPin,
        },
        {
          title: "탑승자 관리",
          desc: "승/하차를 자동 확인해 보호자/관리자에게 문자메시지로 알려줘요.",
          howto: "[운행 관리] → [탑승자 관리]",
          icon: Users,
        },
        {
          title: "노선 관리",
          desc: "등록 노선 기준 이탈 여부를 확인해 정해진 경로대로 운행할 수 있게 도와줘요.",
          howto: "[운행 관리] → [노선현황]",
          icon: Route,
        },
        {
          title: "안전운전 관리",
          desc: "과속/급감속 등 위험 습관을 개선해 승객 안전을 지킬 수 있어요.",
          howto: "[안전/경제운전] → [안전/경제운전 지수]",
          icon: Shield,
        },
      ],
    },
    {
      key: "waste",
      label: "폐기물차",
      headline: "폐기물 수거 차량 운행 정보, 일일이 쓰지 않아도 돼요.",
      subheadline: "올바로 자동 전송으로 폐기물 법제화 의무화에 완벽히 대응할 수 있어요.",
      applyList: [
        "사업장 일반 폐기물",
        "건설 폐기물",
      ],
      features: [
        {
          title: "올바로 자동 전송",
          desc: "폐기물 수거 차량 운행 정보를 올바로에 자동 전송해 의무화에 대응할 수 있어요.",
          howto: "[운행 관리] → [올바로 전송이력]",
          icon: Send,
        },
        {
          title: "실시간 위치 확인",
          desc: "차량 위치와 진행 상황을 실시간으로 확인할 수 있어요.",
          howto: "[운행 관리] → [실시간 차량 위치]",
          icon: MapPin,
        },
        {
          title: "폐기물 수거 증빙",
          desc: "GPS 기반 수거 시간/위치가 자동 기록되어 증빙자료로 활용 가능해요.",
          howto: "[운행 관제] → [운행 이력/경로] → [기간별 운행경로]",
          icon: ClipboardList,
        },
        {
          title: "최적 경로 설정",
          desc: "여러 수거지를 최적 순서로 배치해 연료비를 줄일 수 있어요.",
          howto: "[운행 관리] → [배송/운송 현황]",
          icon: Route,
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>U+커넥트 차량관제 | 브이원정보통신</title>
        <meta
          name="description"
          content="차량 위치 확인, 운행일지 자동 생성, 통합 비용 관리까지 한 번에. U+커넥트 차량 운행 관리 서비스."
        />
      </Helmet>

      {/* Sticky 상단 서브내비 */}
      <div
        className={`sticky top-[88px] z-40 bg-white border-b border-gray-200 transition-all ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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

      {/* Hero 섹션 */}
      <section 
        id="product-info"
        className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat pb-24"
        style={{
          backgroundImage: `url('/images/U+connect.png')`
        }}
      >
        {/* 어두운 블루 그라디언트 오버레이 */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(30, 58, 138, 0.65), rgba(30, 58, 138, 0.45))'
          }}
        ></div>
        
        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full py-12 md:py-16">
          <div className="max-w-3xl text-left">
            {/* 상단 라벨 */}
            <div 
              className={`inline-block bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 text-white transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              U+커넥트 차량관제
            </div>
            
            {/* 메인 헤드라인 (2줄) */}
            <h1 
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              차량 관리비는 줄이고<br />
              업무는 더 빠르게
            </h1>
            
            {/* 서브 설명 */}
            <p 
              className={`text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              실시간 차량 관제와 자동 운행일지로<br />
              전국 어디서든 차량 운행을 한눈에 관리하세요.
            </p>
            
            {/* 유플러스 톤 히어로 문구 4종 (칩/배지) */}
            <div 
              className={`flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 md:px-5 md:py-3 rounded-lg">
                <span className="text-sm md:text-base font-medium text-white">실시간 위치 관제</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 md:px-5 md:py-3 rounded-lg">
                <span className="text-sm md:text-base font-medium text-white">운행일지 자동 생성</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 md:px-5 md:py-3 rounded-lg">
                <span className="text-sm md:text-base font-medium text-white">통합 비용 관리</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 md:px-5 md:py-3 rounded-lg">
                <span className="text-sm md:text-base font-medium text-white">안전 운전 분석</span>
              </div>
            </div>
            
            {/* CTA 버튼 2개 */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.98]"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button 
                size="lg" 
                onClick={scrollToConsultation}
                className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                전문가 상담받기
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("features")}
                className="border-2 border-white/40 text-white hover:bg-white/10 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                서비스 구성 살펴보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
              visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* A. 실시간 위치 확인 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature1 ? (
                  <img
                    src={IMG.feature1}
                    alt="실시간 위치 확인"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature1")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">실시간 위치 확인</h3>
                <p className="text-gray-600 mb-4">
                  30초 간격으로 위치를 업데이트해 차량 위치를 정확하게 확인할 수 있어요.
                </p>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  오직 LG U+ 에서만! 고급형 사용 시 1초 단위 업데이트
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  멀티스크린으로 4분할로 지도 화면을 보여줘 100대 이상의 차량도 관제실처럼 한 눈에 관리할 수 있어요.
                </p>
                <p className="text-sm text-gray-600">
                  관제 기능을 켜고 끌 수 있어 업무 시간 외에는 사생활을 보호할 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* B. 운행경로 분석 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature2 ? (
                  <img
                    src={IMG.feature2}
                    alt="운행경로 분석"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature2")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">운행경로 분석</h3>
                <p className="text-gray-600">
                  최대 2일 동안의 상세 운행경로와 급가속, 급제동 등이 발생한 위치를 시간순으로 확인해 고객 불만사항에 대해 정확히 대응할 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* C. 국세청 운행일지 자동 생성 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature3 ? (
                  <img
                    src={IMG.feature3}
                    alt="국세청 운행일지 자동 생성"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature3")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">국세청 운행일지 자동 생성</h3>
                <p className="text-gray-600">
                  차량을 운행하면 자동으로 국세청 양식의 운행일지가 자동으로 생성돼요. 엑셀 파일로 바로 내려받아 세무사에 전달하면 세금 정산을 간편하게 끝낼 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* D. 통합 비용 관리 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature4 ? (
                  <img
                    src={IMG.feature4}
                    alt="통합 비용 관리"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature4")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">통합 비용 관리</h3>
                <p className="text-gray-600">
                  유류비, 보험료, 과태료, 하이패스, 정비비 등 차량 운영에 드는 모든 비용을 한눈에 확인하고, 안전/경제운전 지수를 기반으로 보험료와 유류비까지 줄일 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* E. 안전운전 관리 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature5 ? (
                  <img
                    src={IMG.feature5}
                    alt="안전운전 관리"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature5")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">안전운전 관리</h3>
                <p className="text-gray-600">
                  급가속, 급출발, 공회전 등 위험한 운전 습관을 실시간으로 확인하고, 운전 점수를 통해 위험 운전자를 미리 확인해 사고를 예방할 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* F. 임원/VIP 차량 관리 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature6 ? (
                  <img
                    src={IMG.feature6}
                    alt="임원/VIP 차량 관리"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature6")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  오직 LG U+ 에서만!
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">임원/VIP 차량 관리</h3>
                <p className="text-gray-600">
                  임원 차량, 외부 노출이 꺼려지는 차량은 위치 노출 없이 운행일지만 생성되어 사생활을 지키면서 관리와 보고는 확실히 할 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* G. 운행정보 자동 전송 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature7 ? (
                  <img
                    src={IMG.feature7}
                    alt="운행정보 자동 전송"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature7")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">운행정보 자동 전송</h3>
                <p className="text-gray-600 mb-2">
                  디지털 운행 기록계(DTG)에 저장된 운행 정보는 eTAS에, 폐기물 수거 차량 운행 정보는 올바로로 자동 전송해요.
                </p>
                <div className="text-xs text-gray-500 mt-3 space-y-1">
                  <p>- eTAS : 교통안전공단 운행기록분석시스템</p>
                  <p>- 올바로 : 한국환경공단 폐기물적법처리시스템</p>
                </div>
              </CardContent>
            </Card>

            {/* H. 거점 관리 및 알림 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature8 ? (
                  <img
                    src={IMG.feature8}
                    alt="거점 관리 및 알림"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature8")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">거점 관리 및 알림</h3>
                <p className="text-gray-600 mb-2">
                  자주 방문하는 장소를 등록하면 도착했을 때 지정한 담당자에게 알림을 보내 시설 관리나 정기 점검, 건설 안전 관리 등 업무 효율을 높일 수 있어요.
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  - 관제 문자메시지 알림 부가서비스 가입 고객 대상
                </p>
                <p className="text-sm text-gray-600">
                  정시 도착 여부 및 입문/출문 시간도 확인할 수 있어요.
                </p>
              </CardContent>
            </Card>

            {/* I. 디지털키 */}
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("features") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.feature9 ? (
                  <img
                    src={IMG.feature9}
                    alt="디지털키"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("feature9")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">디지털키</h3>
                <p className="text-gray-600">
                  스마트폰 앱으로 차량 문을 열고 닫을 수 있어 실물 키 분실 걱정이 없고, 직원끼리 차량 공유도 간편하게 할 수 있어요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 비용 절감 효과 */}
      <section id="cost-saving" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
              visibleSections.has("cost-saving") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            U+ 커넥트 도입으로 얻을 수 있는 비용 절감 효과
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("cost-saving") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.saving1 ? (
                  <img
                    src={IMG.saving1}
                    alt="운영 비용/시간 절약"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("saving1")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">운영 비용/시간 절약</h3>
                <p className="text-gray-600 mb-2">
                  객관적인 운행 정보를 통해 최적의 차량 배치로 운영 비용을 줄일 수 있어요.
                </p>
                <p className="text-gray-600">
                  국세청 양식 운행일지 자동 생성으로 운행일지를 따로 작성하지 않아도 돼요.
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("cost-saving") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.saving2 ? (
                  <img
                    src={IMG.saving2}
                    alt="세무 비용 절약"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("saving2")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">세무 비용 절약</h3>
                <p className="text-gray-600 mb-2">
                  국세청 양식 운행일지 자동 생성으로 업무용 차량 비용을 간편하게 경비 처리 할 수 있어요.
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  - 유류비, 보험료, 수리비 등 연간 1,500만 원 한도 초과분도 인정
                </p>
                <p className="text-sm text-gray-500">
                  - 세무 조사 대비 증빙 자료로 이용 가능
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("cost-saving") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.saving3 ? (
                  <img
                    src={IMG.saving3}
                    alt="유류비 절약"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("saving3")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">유류비 절약</h3>
                <p className="text-gray-600 mb-2">
                  공회전 분석과 안전 운전 관리로 연료 효율을 개선하고 유류비를 통합 관리할 수 있어요.
                </p>
                <p className="text-sm text-gray-500 mb-1">- 급가속, 급정거, 급출발 방지</p>
                <p className="text-sm text-gray-500">- 공회전 시간 단축</p>
              </CardContent>
            </Card>

            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden ${
                visibleSections.has("cost-saving") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.saving4 ? (
                  <img
                    src={IMG.saving4}
                    alt="관리 비용 절약"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("saving4")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">관리 비용 절약</h3>
                <p className="text-gray-600">
                  정비비, 보험비, 과태료 등 차량 관리 비용을 통합 관리하여 업무 효율을 높일 수 있어요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 업종/차종 탭 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              업무마다 차종마다, 필요한 기능은 달라요.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              💡업종/차종 탭을 클릭해보세요. 가지고 계신 고민을 정확히 해결해 드립니다.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {industryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            {(() => {
              const currentTab = industryTabs.find((tab) => tab.key === activeTab);
              if (!currentTab) return null;

              return (
                <div>
                  {/* [A] 상단 카피 블록 */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {currentTab.headline}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    {currentTab.subheadline}
                  </p>

                  {/* [B] 적용 업종 및 용도 카드 */}
                  <Card className="mb-8 bg-white border-gray-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-gray-900">적용 업종 및 용도</h4>
                      <ul className="space-y-2">
                        {currentTab.applyList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* [C] 추천 기능 카드 */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-gray-900">추천 기능</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentTab.features.map((feature, idx) => {
                        const IconComponent = feature.icon;
                        return (
                          <Card
                            key={idx}
                            className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold mb-2 text-gray-900">{feature.title}</h4>
                                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                                    {feature.desc}
                                  </p>
                                  {feature.detail && (
                                    <p className="text-xs text-gray-500 mb-2">{feature.detail}</p>
                                  )}
                                  <p className="text-xs text-gray-400 mt-3">
                                    이용 방법 : {feature.howto}
                                  </p>
                                  {feature.hasOcrInfo && (
                                    <div className="bg-blue-50 p-3 rounded-lg text-xs text-gray-600 mt-3">
                                      <p className="font-semibold mb-1">OCR 기술이란?</p>
                                      <p>
                                        사진 속 글자를 인식해 텍스트로 바꿔주는 기술로 유류비 영수증을 휴대폰 카메라로 찍으면 자동으로 정보가 입력돼요.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA 버튼 */}
                  <div className="text-center">
                    <Button size="lg" onClick={scrollToConsultation}>
                      전문가에게 상담받기
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 서비스 구성 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            어떤 방식으로 이용하나요?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            U+커넥트가 어떻게 제공되는지 서비스 구성으로 확인해 보세요.
          </p>

          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setServiceType("terminal")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                serviceType === "terminal"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              차량 단말기를 설치할 때
            </button>
            <button
              onClick={() => setServiceType("dtg")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                serviceType === "dtg"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              디지털 운행 기록계(DTG)를 설치할 때
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">차량에 기기 설치</h3>
                <p className="text-gray-600">
                  {serviceType === "terminal"
                    ? "차량 단말기를 기본으로 각종 부가 기기를 차량에 설치해요."
                    : "디지털 운행 기록계(DTG)를 차량에 설치해요."}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">차량 운행 정보 수집</h3>
                <p className="text-gray-600">
                  LTE네트워크를 통해 차량 운행 정보를 관제 시스템에 전달해요.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">차량 운행 현황 확인</h3>
                <p className="text-gray-600">
                  차량 운행 현황을 PC와 휴대폰으로 확인할 수 있어요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 이용요금 */}
      <section id="pricing" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            이용요금
          </h2>
          <p className="text-center text-gray-600 mb-12">
            월 이용 요금보다 더 큰 비용 절감 효과를 경험하세요.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* 기본형 */}
            <Card className="rounded-2xl shadow-lg border-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">기본형</h3>
                  <div className="text-3xl font-bold text-primary mb-1">월 13,200원</div>
                  <div className="text-lg text-gray-500 line-through">월 11,880원</div>
                  <div className="text-sm text-gray-500 mt-2">(3년 약정 기준)</div>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">추천고객</p>
                  <p className="text-sm text-gray-600 mb-4">
                    차량 위치 확인과 운행일지 자동 생성이 필요한 고객
                  </p>
                  <p className="font-semibold mb-2">주요 기능</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 실시간 위치 확인 (30초 간격)</li>
                    <li>• 운행일지 자동 생성</li>
                    <li>• 운행경로 분석</li>
                    <li>• 안전운전 관리</li>
                  </ul>
                </div>
                <Button className="w-full" onClick={scrollToConsultation}>
                  전문가에게 상담받기
                </Button>
              </CardContent>
            </Card>

            {/* 고급형 */}
            <Card className="rounded-2xl shadow-lg border-2 border-primary">
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  인기
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">고급형</h3>
                  <div className="text-3xl font-bold text-primary mb-1">월 18,700원</div>
                  <div className="text-lg text-gray-500 line-through">월 16,830원</div>
                  <div className="text-sm text-gray-500 mt-2">(3년 약정 기준)</div>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">추천고객</p>
                  <p className="text-sm text-gray-600 mb-4">
                    실시간 위치 확인이 더 자주 필요한 고객
                  </p>
                  <p className="font-semibold mb-2">주요 기능</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 실시간 위치 확인 (1초 간격)</li>
                    <li>• 운행일지 자동 생성</li>
                    <li>• 운행경로 분석</li>
                    <li>• 안전운전 관리</li>
                    <li>• 통합 비용 관리</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary" onClick={scrollToConsultation}>
                  전문가에게 상담받기
                </Button>
              </CardContent>
            </Card>

            {/* DTG */}
            <Card className="rounded-2xl shadow-lg border-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">디지털 운행 기록계(DTG)</h3>
                  <div className="text-3xl font-bold text-primary mb-1">월 16,500원</div>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">추천고객</p>
                  <p className="text-sm text-gray-600 mb-4">
                    디지털 운행 기록계가 필요한 고객
                  </p>
                  <p className="font-semibold mb-2">주요 기능</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 디지털 운행 기록계 기능</li>
                    <li>• 운행일지 자동 생성</li>
                    <li>• eTAS 자동 전송</li>
                  </ul>
                </div>
                <Button className="w-full" onClick={scrollToConsultation}>
                  전문가에게 상담받기
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 space-y-2">
            <p>3년 약정 기준, 부가세가 포함된 금액이에요.</p>
            <p>기본 기기 설치비는 무료예요. 단, 외제차는 별도 규정에 따라 설치비가 발생할 수 있어요.</p>
            <p>기본 기기는 정비모드 기능을 포함해요.</p>
            <p>차량상태관리(OBD) 기능 안내 : 차량 상태 정보를 확인할 수 있는 기능이에요.</p>
            <p>차량 운행 정보를 eTAS(교통안전공단 운행기록분석시스템)에 자동 전송해요.</p>
            <p>위치 관제는 ITMT(국토교통부 운행기록관리시스템)와 연동해요.</p>
            <p>기기 설치를 위한 출장비는 별도로 발생할 수 있어요.</p>
            <p>- 대우차, 수입차 등 일부 차종은 출장비 5만 원이 발생할 수 있어요.</p>
          </div>
        </div>
      </section>

      {/* 특별 혜택 */}
      <section id="benefits" className="py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
              visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            특별 혜택
          </h2>
          <div 
            className={`bg-white rounded-2xl p-6 md:p-8 mb-8 text-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
              visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              기기 구입비, 설치비 없이 월 이용 요금만 내면 되니깐 도입 비용 완전 무료!
            </p>
            <p className="text-base md:text-lg text-gray-700">
              기업 전담 고객센터를 통해 3년 약정 기간 동안 A/S 무료로 받으세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden text-center ${
                visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.benefit1 ? (
                  <img
                    src={IMG.benefit1}
                    alt="기기 구입비 0원"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("benefit1")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">기기 구입비 0원</h3>
                <p className="text-gray-600">
                  차량관제 기기를 구입할 필요 없이 월 이용 요금만 내면 돼요.
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden text-center ${
                visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.benefit2 ? (
                  <img
                    src={IMG.benefit2}
                    alt="설치비 0원"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("benefit2")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">설치비 0원</h3>
                <p className="text-gray-600 mb-2">
                  기본 기기 설치비는 무료예요.
                </p>
                <p className="text-xs text-gray-500">
                  (외제차는 별도 규정에 따라 설치비가 발생할 수 있어요)
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`group rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden text-center ${
                visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                {!imageErrors.benefit3 ? (
                  <img
                    src={IMG.benefit3}
                    alt="3년 동안 A/S 무료"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                    onError={() => handleImageError("benefit3")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">3년 동안 A/S 무료</h3>
                <p className="text-gray-600">
                  3년 약정 기간 동안 기기 A/S를 무료로 받을 수 있어요.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  (DTG는 제휴사 정책에 따라 별도 규정이 적용될 수 있어요)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 부가 서비스 */}
      <section id="addon-services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            부가 서비스
          </h2>
          <p className="text-center text-gray-600 mb-12">
            우리 회사에 필요한 부가서비스를 골라 이용하세요.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: "초정밀측위", price: "5,500", exclusive: true },
              { name: "디지털 키", price: "2,200", exclusive: false },
              { name: "관제 문자메시지 알림", price: "1,100", exclusive: false },
              { name: "탑승자 승/하차 확인", price: "1,100", exclusive: false },
              { name: "화물칸 온도 감지", price: "1,100", exclusive: false },
              { name: "화물칸 문 열림 감지", price: "1,100", exclusive: false },
            ].map((service) => (
              <Card key={service.name} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                      {service.exclusive && (
                        <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold inline-block">
                          오직 LG U+ 에서만!
                        </div>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-primary">월 {service.price}원</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 space-y-2">
            <p>부가세가 포함된 금액 이에요.</p>
            <p>부가서비스를 이용하려면 제조사를 통해 기기를 별도 구입해야 해요.</p>
          </div>
        </div>
      </section>

      {/* 기기 소개 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            기기 소개
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: "기본 기기/차량 단말기",
                image: IMG.device1,
                imageKey: "device1",
                specs: "LTE 통신, GPS 위치 추적, 차량 상태 모니터링",
              },
              {
                name: "초정밀측위 기기",
                image: IMG.device2,
                imageKey: "device2",
                specs: "고정밀 위치 측위, 실내외 위치 추적",
              },
              {
                name: "전자태그 리더기",
                image: IMG.device1,
                imageKey: "device3",
                specs: "RFID 태그 인식, 탑승자 확인",
              },
              {
                name: "디지털 키 박스",
                image: IMG.device2,
                imageKey: "device4",
                specs: "스마트폰 연동, 원격 차량 제어",
              },
              {
                name: "도어센서",
                image: IMG.device1,
                imageKey: "device5",
                specs: "문 개폐 감지, 알림 기능",
              },
              {
                name: "온도센서",
                image: IMG.device2,
                imageKey: "device6",
                specs: "화물칸 온도 모니터링, 온도 알림",
              },
              {
                name: "DT-202 & WD-L420L",
                image: IMG.device1,
                imageKey: "device7",
                specs: "디지털 운행 기록계, 운행 데이터 기록",
              },
            ].map((device) => (
              <Card key={device.name} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  {!imageErrors[device.imageKey] ? (
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      onError={() => handleImageError(device.imageKey)}
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <Phone className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-2">{device.name}</h3>
                  <p className="text-sm text-gray-600">{device.specs}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 비용표 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">구분</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">기기명</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">비용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">기본 기기</td>
                  <td className="border border-gray-300 px-4 py-3">차량 단말기</td>
                  <td className="border border-gray-300 px-4 py-3">무료 (설치비 별도)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">부가 기기</td>
                  <td className="border border-gray-300 px-4 py-3">초정밀측위 기기</td>
                  <td className="border border-gray-300 px-4 py-3">별도 문의</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">부가 기기</td>
                  <td className="border border-gray-300 px-4 py-3">디지털 키 박스</td>
                  <td className="border border-gray-300 px-4 py-3">별도 문의</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 고객후기 */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            먼저 사용해 본 고객님의 생생한 후기
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                company: "LS전선",
                image: IMG.review1,
                imageKey: "review1",
                review:
                  "차량관제 시스템을 도입한 후 운행 효율이 크게 향상되었고, 운행일지 자동 생성으로 업무 시간도 절약되었어요.",
                points: ["운행 효율 향상", "업무 시간 절약", "비용 절감"],
              },
              {
                company: "현금 ATM 수리업체",
                image: IMG.review2,
                imageKey: "review2",
                review:
                  "고객에게 정확한 도착 시간을 안내할 수 있어 고객 만족도가 높아졌고, 분쟁도 줄어들었어요.",
                points: ["고객 만족도 향상", "분쟁 감소", "실시간 위치 공유"],
              },
              {
                company: "현대가스텍",
                image: IMG.review3,
                imageKey: "review3",
                review:
                  "통합 비용 관리 기능으로 차량 운영 비용을 한눈에 파악할 수 있어 예산 관리가 훨씬 쉬워졌어요.",
                points: ["비용 관리 용이", "예산 관리 개선", "운영 투명성"],
              },
              {
                company: "엘리베이터 설치업체",
                image: IMG.review4,
                imageKey: "review4",
                review:
                  "안전운전 관리 기능으로 사고율이 줄어들었고, 운전자 교육에도 도움이 되고 있어요.",
                points: ["사고율 감소", "안전운전 유도", "운전자 교육"],
              },
            ].map((review) => (
              <Card key={review.company} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {!imageErrors[review.imageKey] ? (
                      <img
                        src={review.image}
                        alt={review.company}
                        className="w-16 h-16 object-cover rounded-full"
                        onError={() => handleImageError(review.imageKey)}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-primary/50" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{review.company}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{review.review}</p>
                  <div className="flex flex-wrap gap-2">
                    {review.points.map((point, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 기기 설치 과정 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            기기 설치 과정
          </h2>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {[
              {
                step: "STEP 1",
                title: "상담 및 신청",
                description: "전문 상담을 통해 필요한 기능과 기기를 확인하고 신청해요.",
              },
              {
                step: "STEP 2",
                title: "기기 설치",
                description: "전문 기술자가 차량에 기기를 설치해요.",
              },
              {
                step: "STEP 3",
                title: "시스템 연동",
                description: "관제 시스템과 기기를 연동하고 테스트해요.",
              },
              {
                step: "STEP 4",
                title: "서비스 이용",
                description: "설치 완료 후 바로 서비스를 이용할 수 있어요.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-sm text-gray-700 space-y-2">
            <p>※ 설치 후 가입까지 평일 기준 4~5일 소요될 수 있어요.</p>
            <p>※ 직접 설치하면 3년 무료 A/S 혜택이 적용되지 않을 수 있어요.</p>
          </div>
        </div>
      </section>

      {/* 자주하는 질문 */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            자주하는 질문
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                가입은 어떻게 하나요? 최소 대수 제한이 있나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                전문 상담을 통해 신청하시면 됩니다. 최소 대수 제한은 없어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                PC와 스마트폰 앱 모두 사용할 수 있나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                네, PC 웹과 스마트폰 앱 모두에서 이용할 수 있어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                문의는 어디로 하나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                기업 전담 고객센터로 문의하시면 됩니다. 상담 신청을 통해 연락받으실 수 있어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                주요 기능은 무엇인가요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                실시간 위치 확인, 운행일지 자동 생성, 통합 비용 관리, 안전운전 관리 등 다양한 기능을 제공해요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                차량을 변경하면 설치비가 다시 발생하나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                기기를 이전 설치하는 경우 설치비가 발생할 수 있어요. 자세한 사항은 상담을 통해 확인해 주세요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                어떤 고객이 이용하나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                현장 출동 서비스, 물류·배송업, 제조·건설업, 정부·공공기관, 일반 법인차량 등 다양한 업종에서 이용하고 있어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                설치비는 얼마인가요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                기본 기기 설치비는 무료예요. 단, 외제차나 일부 차종의 경우 별도 설치비가 발생할 수 있어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                운행일지는 자동으로 생성되나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                네, 차량을 운행하면 자동으로 국세청 양식의 운행일지가 생성돼요. 엑셀 파일로 바로 내려받을 수 있어요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                이용요금은 어떻게 되나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                기본형은 월 13,200원(3년 약정 기준), 고급형은 월 18,700원(3년 약정 기준)이에요. 부가세 포함 금액이에요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">
                해지 시 할인반환금은 어떻게 계산되나요?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                약정 기간 중 해지 시 할인반환금이 발생할 수 있어요. 자세한 계산 방법은 상담을 통해 확인해 주세요.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 가입상담 */}
      <section id="consultation" className="py-32 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            U+커넥트 차량관제 서비스 상담
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            전문 상담사가 고객님의 업종과 차량에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
              onClick={() => window.location.href = "tel:0269511156"}
            >
              <Phone className="mr-2 w-5 h-5" />
              전화 상담
            </Button>
            <Link href="/contact/consultation">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                상담 신청하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UplusVehicle;
