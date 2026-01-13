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
  Wifi,
  Copy,
  CheckCircle2,
  ArrowRight,
  Download,
  FileText,
  Network,
  Smartphone,
  Laptop,
  Building2,
  Truck,
  Zap,
  Shield,
  Users,
  Globe,
  Router,
  Radio,
  Monitor,
  Camera,
  CreditCard,
  Factory,
  Sun,
  Home,
  Car,
  GraduationCap,
  AlertCircle,
} from "lucide-react";

const UplusMobileInternet = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSticky, setIsSticky] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const [faqPage, setFaqPage] = useState(1);

  // 이미지 URL 상수
  const IMG = {
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    pain: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    solution: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    why: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    industry: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    diagram: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
    devices: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    reviews: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
    cases: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    etc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 2000);
    } catch (err) {
      alert("URL 복사에 실패했습니다. 브라우저를 확인해주세요.");
    }
  };

  // Sticky 네비게이션 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ 데이터 배열
  const faqItems = [
    {
      id: "q1",
      question: "[U+모바일인터넷] 유동 IP를 쓰고 있는데, 고정IP로 바꿀 수 있나요?",
      answer: "아니요. 기존 유동 IP를 사용하신다면 고정 IP로 변경할 수 없습니다. 반대로 고정 IP를 쓰다가 유동 IP로 변경할 수 없어요. 고정IP를 쓸 수 있는 라우터를 새로 개통해야 해요.",
    },
    {
      id: "q2",
      question: "[U+모바일인터넷] 기본 제공 데이터를 다 쓰면 추가 요금이 발생하나요?",
      answer: "네. 데이터 안심 옵션 부가서비스에 가입하지 않았다면 0.5KB당 0.00825원 추가 요금이 발생해요.",
    },
    {
      id: "q3",
      question: "[U+모바일인터넷] 기본 제공 데이터를 다 쓰면 100Kbps, 500Kbps, 1Mbps 등으로 속도가 제한된다는데, 어느 정도의 속도인가요?",
      answer: (
        <>
          동시 접속하는 기기 수, 이용 환경에 따라 달라질 수 있지만 속도별로 아래와 같은 업무를 할 수 있어요.
          <div className="mt-4 space-y-3">
            <div>
              <p className="font-semibold mb-2">▶ 100Kbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>텍스트 중심 웹서핑, 이메일/메신저 사용</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 500kbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>인터넷 웹서핑, 128Kbps 음악 재생, 240p 저화질 영상 시청</li>
                <li>파일 올리기/내려받기, 블로그/인스타그램/페이스북 등 SNS</li>
                <li>240p~360p 저화질 화상통화, 문서 작업</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 1Mbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>유튜브 SD 360p 저화질 영상 시청</li>
                <li>파일 올리기/내려받기</li>
                <li>480p 화질의 화상통화</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 2Mbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>이미지가 많은 웹사이트 끊김 없이 접속</li>
                <li>이메일/메신저 대용량 파일 첨부 가능</li>
                <li>160kbps 고음질 음악 재생</li>
                <li>480p 화질의 영상 시청</li>
                <li>100MB 이하 파일 올리기/내리기</li>
                <li>720p 화질의 실시간 영상 재생</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 4Mbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>320Kbps 고음질 음악 재생</li>
                <li>720p 화질의 고화질 영상 시청</li>
                <li>500MB 이하 파일 올리기/내려받기</li>
                <li>1080p 고화질의 실시간 영상 재생</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 5Mbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>모든 웹사이트 끊김 없이 접속</li>
                <li>320kbps 이상 고음질 음악 재생</li>
                <li>720p~1080p 고화질 영상 시청</li>
                <li>500MB~1GB 파일 올리기/내려받기</li>
                <li>1080p 고화질의 실시간 영상 재생/올리기</li>
                <li>문서 작업/대용량 문서 파일 올리기</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">▶ 10Mbps</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>1080p 고화질 영상 시청</li>
                <li>1GB 파일 올리기/내리기</li>
                <li>문서 작업/공동 문서 작업</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "q4",
      question: "[U+모바일인터넷] 서비스 신청시 설치는 어떻게 되나요?",
      answer: (
        <>
          일반 라우터는 유플러스 매장에서 개통한 다음 고객님께 택배로 보내드려요. 받은 라우터를 전원과 랜선을 연결해서 사용해 주세요.
          <br /><br />
          다만, VPN신청시 설치에 대한 방법은 서비스를 신청하신 대리점이나 고객센터에 문의해 주세요.
        </>
      ),
    },
    {
      id: "q5",
      question: "[U+모바일인터넷] 5G 라우터를 가지고 다닐 수 있나요?",
      answer: "내용 추가 예정",
    },
    {
      id: "q6",
      question: "[U+모바일인터넷] 기기가 고장나면 어디로 문의해야 하나요?",
      answer: "기기 제조사 또는 가입한 대리점으로 문의해 주세요.",
    },
    {
      id: "q7",
      question: "[U+모바일인터넷] 인터넷 접속이 안되면 어떻게 해야하나요?",
      answer: (
        <>
          먼저 라우터 뒤쪽 전원선을 뽑았다가 다시 꽂아주세요. 이때 기기 앞쪽 LED 불빛을 확인해 주세요.
          <br /><br />
          전원이 연결되면 전원 램프에 빨간색 불빛이, 랜선이 연결되면 LAN 램프에 파란색 불빛이, 인터넷에 연결되면 LTE 램프에 초록색이나 파란색 불빛이 나타나요.
          <br /><br />
          만약 LTE 램프 불빛이 계속 빨간색이면 유플러스 장애접수 센터 1644-7003(유료)로 A/S 신청해 주세요.
        </>
      ),
    },
    {
      id: "q8",
      question: "[U+모바일인터넷] 요금제를 변경하고 싶어요.",
      answer: "가입한 LG유플러스 매장이나 고객센터 1544-2500(유료)로 문의해 주세요.",
    },
    {
      id: "q9",
      question: "[U+모바일인터넷] 070 전화와 결합할인 받을 수 있나요?",
      answer: "아니요. 모바일오피스넷과 070 인터넷 전화 결합은 전기통신번호관리세칙에 따라 제공 불가하고 결합할인도 받을 수 없어요.",
    },
    {
      id: "q10",
      question: "[U+모바일인터넷] VPN 기능을 이용할 수 있나요?",
      answer: "네. VPN(기업전용 사설망) 기능이 장착된 전용 라우터를 이용하면 돼요. 모바일오피스넷 월정액에 부가세 포함 월 11,000원 요금이 추가돼요.",
    },
    {
      id: "q11",
      question: "[U+모바일인터넷] 5G 네트워크에 연결할 수 없는 지역에서도 서비스를 이용할 수 있나요?",
      answer: "네. 5G 네트워크를 연결할 수 없는 지역에서는 자동으로 LTE-CA 또는 LTE 네트워크로 연결돼요.",
    },
    {
      id: "q12",
      question: "[U+모바일인터넷] 서비스 신청시 라우터를 구매해야 하나요?",
      answer: (
        <>
          네, 라우터를 구매해야 해요.
          <br /><br />
          다만, 2년 이상 약정하면 무료로 사용할 수 있으며, 약정기간 안에 해지하면 할인반환금을 내야 해요.
        </>
      ),
    },
    {
      id: "q13",
      question: "[U+모바일인터넷] 5G 네트워크의 특징은 무엇인가요?",
      answer: "5G 네트워크는 LTE 대비 사용할 수 있는 주파수 대역이 넓고, 주파수 사용 효율을 높여 대용량 파일도 빠르게 주고받을 수 있어요.",
    },
    {
      id: "q14",
      question: "[U+모바일인터넷] PC, 휴대폰 등 기기는 몇 대까지 연결할 수 있나요?",
      answer: (
        <>
          가입한 요금제의 기본 제공 데이터에 따라 달라져요.
          <br /><br />
          자세한 내용은 U+고객센터 1544-2500(유료)로 문의해 주세요.
        </>
      ),
    },
    {
      id: "q15",
      question: "[U+모바일인터넷] 인터넷은 정상적으로 되는데, 결제가 안 돼요.",
      answer: "가입시 계약한 결제대행사에 문의해 주세요.",
    },
    {
      id: "q16",
      question: "[U+모바일인터넷] 데이터를 무제한으로 사용할 수 있나요?",
      answer: "네. 데이터 안심 옵션 부가서비스에 가입하면 기본 제공 데이터를 다 써도 제한된 속도로 데이터를 무제한으로 사용할 수 있어요.",
    },
    {
      id: "q17",
      question: "[U+모바일인터넷] 고정 IP를 이용할 수 있나요?",
      answer: "네. 부가세 포함 11,000원의 부가서비스로, 5G 요금제 이용 고객만 가입할 수 있어요.",
    },
    {
      id: "q18",
      question: "[U+모바일인터넷] 5G 요금제는 어떤 용도로 주로 사용하나요?",
      answer: "선 공사가 어려운 건설 현장 사무실, 인테리어 공사가 자주 필요한 매장 또는 임시 사무실, 실시간 이동형 방송 중계차, 서빙/배송 로봇 이용 매장, 유선 인터넷 장애에 빠르게 대처하고 싶은 고객이 사용하고 있어요.",
    },
    {
      id: "q19",
      question: "[U+모바일인터넷] VPN은 어떤 방식으로 데이터 보안을 유지하나요?",
      answer: "VPN(기업전용 사설망)은 본사와 지점에 전용 라우터를 설치하여 암호화된 보안 터널을 통해 데이터를 안전하게 주고 받는 방식이에요. 본사에 유선 VPN센터 장비를 설치하고, 지점에는 VPN 라우터를 개통해요.",
    },
    {
      id: "q20",
      question: "[U+모바일인터넷] 가입이 제한될 수도 있나요?",
      answer: (
        <>
          네. CCTV 등 실시간으로 영상을 전송하기 위한 용도라면 가입이 어려울 수 있어요.
          <br /><br />
          많은 데이터가 한꺼번에 몰리면서 다른 고객이 인터넷을 사용하는데 영향을 줄 수 있기 때문이에요.
          <br /><br />
          다만, 이벤트가 발생할 때 확인하거나 CCTV에 저장장치를 연결해서 나중에 확인하는 용도로는 가입할 수 있어요.
        </>
      ),
    },
    {
      id: "q21",
      question: "[U+모바일인터넷] VPN 라우터는 어떨 때 사용하나요?",
      answer: (
        <>
          VPN(기업전용 사설망)은 본사와 지점에 전용 라우터를 설치하여 암호화된 보안 터널을 통해 데이터를 안전하게 주고 받는 방식이에요. 데이터 보안을 유지해야 하는 고객이 주로 사용해요.
          <br /><br />
          <span className="font-semibold">- 주요 사용 업종</span>
          <br />
          지자체/공공기관, 태양광발전, 광고/키오스크, 정보서비스, 영상/방송통신 등
        </>
      ),
    },
    {
      id: "q22",
      question: "[U+모바일인터넷] 고정IP는 언제 사용하나요?",
      answer: (
        <>
          PC/키오스크/디지털 광고판 등의 기기, 비닐하우스 같은 시설물을 원격으로 관리할 때 사용해요.
          <br /><br />
          단, 보안 문제가 있거나 네트워크에 과부하가 걸리면 서비스를 이용하지 못할 수 있어요.
          <br /><br />
          이용 요금은 부가세 포함 11,000원으로 5G 요금제 이용 고객만 가입할 수 있어요.
        </>
      ),
    },
  ];

  // 페이지네이션 설정
  const itemsPerPage = 7;
  const totalPages = Math.ceil(faqItems.length / itemsPerPage);
  const startIndex = (faqPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaqItems = faqItems.slice(startIndex, endIndex);

  const navItems = [
    { id: "product-overview", label: "상품개요" },
    { id: "advantages", label: "특장점" },
    { id: "recommended-customers", label: "추천 고객" },
    { id: "features", label: "주요기능" },
    { id: "service-diagram", label: "서비스구성도" },
    { id: "customer-cases", label: "고객사례" },
    { id: "pricing", label: "이용요금" },
    { id: "recommended-products", label: "추천상품" },
    { id: "faq", label: "자주하는 질문" },
  ];

  // 업종/사용처 데이터
  const industryItems = [
    { icon: Building2, title: "건설업", desc: "공사현장, 임시 컨테이너 근무" },
    { icon: Monitor, title: "광고·미디어", desc: "디지털 광고판, 키오스크 원격 관리" },
    { icon: CreditCard, title: "유통업", desc: "자판기, 포스, 키오스크 결제" },
    { icon: Factory, title: "제조업", desc: "장치, 배터리 원격 관리, 데이터 수집" },
    { icon: Users, title: "서비스·금융", desc: "외근, 출장, 이동 중 업무" },
    { icon: Laptop, title: "IT", desc: "임시 사무실 등 단기간 업무" },
    { icon: Sun, title: "태양광", desc: "발전량 원격 모니터링" },
    { icon: Camera, title: "농막", desc: "CCTV 운영, 관리" },
    { icon: Home, title: "캠핑", desc: "캠핑장, 캠핑카 내 영화, 유튜브" },
    { icon: Car, title: "차량", desc: "네비게이션 연결, 패드/노트북 작업" },
    { icon: GraduationCap, title: "기숙사", desc: "노트북 강의 시청, 태블릿 작업" },
    { icon: Home, title: "주택/가정집", desc: "부모님댁 CCTV, 휴대폰 와이파이 연결" },
  ];

  return (
    <>
      <Helmet>
        <title>U+모바일인터넷(무선인터넷) | 브이원정보통신</title>
        <meta
          name="description"
          content="유선 인터넷 설치가 어려운 곳에서도 라우터 전원만 켜면 무선으로 인터넷을 이용할 수 있는 U+모바일인터넷."
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
        id="product-overview"
        className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${IMG.hero}')`,
        }}
      >
        {/* 어두운 블루 그라디언트 오버레이 */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(30, 58, 138, 0.65), rgba(30, 58, 138, 0.45))",
          }}
        ></div>

        {/* 텍스트 컨텐츠 */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full py-12 md:py-16">
          <div className="max-w-3xl text-left">
            {/* 상단 라벨 */}
            <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 text-white">
              U+모바일인터넷
            </div>

            {/* 서브 설명 */}
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-white/90 leading-relaxed">
              유선 인터넷 설치가 어려운 곳에서 라우터 전원만 켜면 무선으로 인터넷을 이용할 수 있는 서비스
            </p>

            {/* 메인 헤드라인 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
              U+모바일인터넷, 개인도 기업도 누구나 가입할 수 있어요.
            </h1>

            {/* 보조문구 */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                LTE/5G 라우터 단말기 하나로 언제 어디서나 무선인터넷을 연결할 수 있어요.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                공사 현장부터 사무실, 차량, 매장 등 다양한 곳에서 무선 인터넷을 이용하고, 키오스크, 자판기 등을 편리하게 원격으로 관리할 수 있어요.
              </p>
            </div>

            {/* CTA 버튼 2개 */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("consultation")}
                className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                전문가 상담 신청
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCopyUrl}
                className="border-2 border-white/40 text-white hover:bg-white/10 px-6 md:px-8 py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                {urlCopied ? (
                  <>
                    <CheckCircle2 className="mr-2 w-5 h-5" />
                    복사 완료
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 w-5 h-5" />
                    URL 복사하기
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain -> Solution 섹션 */}
      <section id="advantages" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            U+모바일인터넷이 정답입니다.
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            이런 점이 불편했어요.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* 왼쪽: 불편 */}
            <Card className="rounded-2xl shadow-lg border-2 border-red-100 bg-red-50/30">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  불편했던 점
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">
                      유선 인터넷 설치가 불가능한 지역, 장소 (농촌·도서·산간, 공사 현장, 야외 행사장 등)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">
                      이동하면서 인터넷 사용이 필요할 때 (출장, 외근 등 이동 중 업무 필요)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">
                      모바일 핫스팟 이용이 불편할 때 (휴대폰 발열, 배터리 소진, 끊김, 데이터 사용량 제한)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">
                      데이터 용량 제한이 걱정돼서 무선라우터 사용이 꺼려질 때
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 오른쪽: 해결 */}
            <Card className="rounded-2xl shadow-lg border-2 border-green-100 bg-green-50/30">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  해결 방법
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      별도 설치 공사 없이 라우터 전원만 켜면 무선 인터넷 연결
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      공간 제약 없이 언제 어디서나 편리하게 무선 인터넷 사용
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      휴대폰 발열, 끊김 없는 안정적인 무선 인터넷 (기본데이터 소진 시 제한 속도로 이용 가능)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      매달 제공되는 기본 데이터를 다 써도 제한된 속도로 무제한 사용 가능 (무제한 요금제 유료 구매)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why U+ 섹션 */}
      <section id="recommended-customers" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            왜 U+일까요?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  전문가가 끝까지 함께합니다. 800만 고객이 선택한 1위 사업자
                </h3>
                <p className="text-gray-600 text-center">
                  업계에서 가장 많은 가입자를 보유한 검증된 서비스입니다. (과학기술정보통신부 자료 기준)
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  전문 상담사가 제안하는 맞춤형 요금제
                </h3>
                <p className="text-gray-600 text-center">
                  무선 인터넷 상품 전문 상담사가 고객 맞춤형 요금제를 추천해 드려요.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  가입부터 장애 대응 원스톱 관리
                </h3>
                <p className="text-gray-600 text-center">
                  가입 단계부터 문제 해결까지 전담 고객 센터가 늘 함께해요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Grid 섹션 */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            다양한 사용처/업종
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            U+ 모바일인터넷, 복잡한 설치 없이 이동 중에 이용하고 원격 관리해 보세요.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {industryItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card key={idx} className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 서비스 구성도 섹션 */}
      <section id="service-diagram" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            서비스 구성도를 살펴보세요.
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            U+모바일인터넷은 이렇게 구성되어 있어요. LTE/5G망으로 다양한 기기에 연결됩니다.
          </p>

          <Card className="rounded-2xl shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-8">
              {!imageErrors.diagram ? (
                <img
                  src={IMG.diagram}
                  alt="서비스 구성도"
                  className="w-full h-auto rounded-lg mb-4"
                  onError={() => handleImageError("diagram")}
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-4 flex flex-col items-center justify-center">
                  <Network className="w-16 h-16 text-primary/50 mb-4" />
                  <p className="text-gray-600">서비스 구성도</p>
                </div>
              )}
              <div className="text-center space-y-2">
                <p className="text-gray-700 font-medium">LTE/5G 네트워크</p>
                <ArrowRight className="w-6 h-6 mx-auto text-primary" />
                <p className="text-gray-700 font-medium">라우터 단말기</p>
                <ArrowRight className="w-6 h-6 mx-auto text-primary" />
                <p className="text-gray-700 font-medium">다양한 기기 연결 (PC, 노트북, 태블릿, 스마트폰 등)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 기기 소개 섹션 */}
      <section id="devices" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            용도에 맞는 기기를 선택하세요.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            {/* LTE 라우터 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                {!imageErrors.devices ? (
                  <img
                    src={IMG.devices}
                    alt="LTE 라우터"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("devices")}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <Router className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  기본 인터넷/영상/업무용
                </div>
                <h3 className="text-xl font-bold mb-2">LTE라우터 (전원공급형)</h3>
                <p className="text-sm text-gray-500 mb-2">일반형</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>모델명: IPR-402W</p>
                  <p>사이즈: 110 x 78 x 20</p>
                  <p>특징: 랜포트 2 ports, 와이파이 지원</p>
                </div>
              </CardContent>
            </Card>

            {/* 5G 라우터 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                {!imageErrors.devices ? (
                  <img
                    src={IMG.devices}
                    alt="5G 라우터"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("devices")}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <Router className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  고용량 트래픽, 실시간 데이터 전송
                </div>
                <h3 className="text-xl font-bold mb-2">5G 라우터</h3>
                <p className="text-sm text-gray-500 mb-2">공사현장추천 속도빠른 5G라우터</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>모델명: CNR-5G500</p>
                  <p>사이즈: 110 x 78 x 20</p>
                  <p>특징: 랜포트 2 ports, WiFi 6 지원</p>
                </div>
              </CardContent>
            </Card>

            {/* 휴대용 와이파이 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                {!imageErrors.devices ? (
                  <img
                    src={IMG.devices}
                    alt="휴대용 와이파이"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("devices")}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  외근, 출장 등 이동 시 와이파이 사용
                </div>
                <h3 className="text-xl font-bold mb-2">휴대용 와이파이</h3>
                <p className="text-sm text-gray-500 mb-2">58g 가벼운 무게 사용 공간 제약 없음</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>모델명: TR-700</p>
                  <p>사이즈: 61 x 106 x 19.7</p>
                  <p>특징: 배터리 탈착형(충전식)</p>
                </div>
              </CardContent>
            </Card>

            {/* USB 라우터 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                {!imageErrors.devices ? (
                  <img
                    src={IMG.devices}
                    alt="USB 라우터"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("devices")}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <Radio className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  1인사용적합 USB타입
                </div>
                <h3 className="text-xl font-bold mb-2">USB 라우터</h3>
                <p className="text-sm text-gray-500 mb-2">노트북에 바로 꽂아쓰는 USB 라우터</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>모델명: LML-U200</p>
                  <p>사이즈: 37 x 73.5 x 11</p>
                  <p>특징: 충전 없이 USB로 인터넷 바로 연결, 디바이스 1대 연결 가능(와이파이 불가)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => {}}>
              전체 단말기 상세 스팩 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 테크 인플루언서 후기 섹션 */}
      <section id="customer-cases" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            테크 전문 인플루언서의 생생한 후기를 만나보세요.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* 후기 1 */}
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                {!imageErrors.reviews ? (
                  <img
                    src={IMG.reviews}
                    alt="리뷰"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("reviews")}
                  />
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/50" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">노트북용 휴대용 단말기(LML-U200)</h3>
                <p className="text-gray-600 mb-4">
                  USB로 노트북에 연결해서 별도 충전 없이도 즉시 인터넷을 사용할 수 있어요.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">이퓨</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">1인 사용</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">USB타입</span>
                </div>
              </CardContent>
            </Card>

            {/* 후기 2 */}
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                {!imageErrors.reviews ? (
                  <img
                    src={IMG.reviews}
                    alt="리뷰"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("reviews")}
                  />
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/50" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">휴대용 와이파이(TR-700)</h3>
                <p className="text-gray-600 mb-4">
                  언제 어디서나 한 손에 쏙 들어오는 휴대용 와이파이로 외근, 출장 갈 때 자주 활용해요.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">자유분방</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">간편한</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">사용 공간 제약 없음</span>
                </div>
              </CardContent>
            </Card>

            {/* 후기 3 */}
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                {!imageErrors.reviews ? (
                  <img
                    src={IMG.reviews}
                    alt="리뷰"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("reviews")}
                  />
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/50" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">5G 라우터(CNR-5G500)</h3>
                <p className="text-gray-600 mb-4">
                  전원만 꽂으면 즉시 사용! 대용량 데이터전송에도 안정적이에요.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">아이작</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">고용량</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">속도 빠른 5G 라우터</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 고객사례 섹션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            LG U⁺의 기업상품과 함께한 비즈니스 성공 사례를 살펴보세요.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                {!imageErrors.cases ? (
                  <img
                    src={IMG.cases}
                    alt="고객사례"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("cases")}
                  />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">사천시시설관리공단 홍관표팀장님의 U+무선인터넷 찐 후기</h3>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                {!imageErrors.cases ? (
                  <img
                    src={IMG.cases}
                    alt="고객사례"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("cases")}
                  />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">[U+무선인터넷] 눈, 비, 바람이 와도 안정적인 서비스망은?</h3>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                {!imageErrors.cases ? (
                  <img
                    src={IMG.cases}
                    alt="고객사례"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={() => handleImageError("cases")}
                  />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">[U+우리가게 무선인터넷] 인터넷 장애를 해결해 고객 재방문율을 높였어요</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 이용요금 섹션 */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            맞춤 요금제를 추천해 드려요.
          </h2>

          {/* 추천 요금제 3개 */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* 요금제 A */}
            <Card className="rounded-2xl shadow-lg border-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">LTE 11GB</h3>
                  <div className="text-3xl font-bold text-primary mb-1">15,840원</div>
                  <div className="text-sm text-gray-500">다쓰면 100kbps</div>
                  <div className="text-sm text-gray-500 mt-2">*3년 약정, 부가세 포함</div>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-sm text-gray-600">• 이메일/웹서핑 간단한 업무용</p>
                  <p className="text-sm text-gray-600">• PC/노트북 등 1~2대 연결</p>
                  <p className="text-sm text-gray-600">• 금융, 보험업, 외근직</p>
                </div>
                <Button className="w-full" onClick={() => alert("장바구니에 담겼습니다.")}>
                  장바구니 담기
                </Button>
              </CardContent>
            </Card>

            {/* 요금제 B */}
            <Card className="rounded-2xl shadow-lg border-2 border-primary">
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  인기
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">LTE 60GB</h3>
                  <div className="text-3xl font-bold text-primary mb-1">43,120원</div>
                  <div className="text-sm text-gray-500">다쓰면 4Mbps</div>
                  <div className="text-sm text-gray-500 mt-2">*3년 약정, 부가세 포함</div>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-sm text-gray-600">• 도면전송 등 임시 사무실 업무용</p>
                  <p className="text-sm text-gray-600">• PC/노트북 등 2~3대 연결</p>
                  <p className="text-sm text-gray-600">• 건설업, 제조업</p>
                </div>
                <Button className="w-full bg-primary" onClick={() => alert("장바구니에 담겼습니다.")}>
                  장바구니 담기
                </Button>
              </CardContent>
            </Card>

            {/* 요금제 C */}
            <Card className="rounded-2xl shadow-lg border-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">LTE 100GB</h3>
                  <div className="text-3xl font-bold text-primary mb-1">61,600원</div>
                  <div className="text-sm text-gray-500">다쓰면 5Mbps</div>
                  <div className="text-sm text-gray-500 mt-2">*3년 약정, 부가세 포함</div>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-sm text-gray-600">• 대용량 자료, 영상 전송용</p>
                  <p className="text-sm text-gray-600">• PC/노트북 등 3대 이상 연결</p>
                  <p className="text-sm text-gray-600">• 건설업, 일반기업</p>
                </div>
                <Button className="w-full" onClick={() => alert("장바구니에 담겼습니다.")}>
                  장바구니 담기
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 전체 요금표 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              데이터 용량별 요금 한 눈에 보기.
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-center">
              <p className="text-sm font-semibold text-yellow-800">
                요금 10% 할인+단말기 무료 제공 3개월 동안 신규가입시 평생 7% 할인 이벤트!
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg min-w-[800px]">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">요금제명</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">월 제공 데이터</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">무약정</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">3년약정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">LTE 60MB</td>
                    <td className="border border-gray-300 px-4 py-3">60MB</td>
                    <td className="border border-gray-300 px-4 py-3">4,950원</td>
                    <td className="border border-gray-300 px-4 py-3">5,500원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">LTE 1GB</td>
                    <td className="border border-gray-300 px-4 py-3">1GB</td>
                    <td className="border border-gray-300 px-4 py-3">9,900원</td>
                    <td className="border border-gray-300 px-4 py-3">11,000원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">LTE 11GB</td>
                    <td className="border border-gray-300 px-4 py-3">11GB+다쓰면 100kbps</td>
                    <td className="border border-gray-300 px-4 py-3">15,840원</td>
                    <td className="border border-gray-300 px-4 py-3">17,600원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">LTE 22GB</td>
                    <td className="border border-gray-300 px-4 py-3">22GB+다쓰면 500kbps</td>
                    <td className="border border-gray-300 px-4 py-3">26,230원</td>
                    <td className="border border-gray-300 px-4 py-3">29,150원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">5G/LTE 30GB</td>
                    <td className="border border-gray-300 px-4 py-3">30GB+다쓰면 1Mbps</td>
                    <td className="border border-gray-300 px-4 py-3">34,650원</td>
                    <td className="border border-gray-300 px-4 py-3">38,500원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">5G/LTE 60GB</td>
                    <td className="border border-gray-300 px-4 py-3">60GB+다쓰면 4Mbps</td>
                    <td className="border border-gray-300 px-4 py-3">43,120원</td>
                    <td className="border border-gray-300 px-4 py-3">53,900원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">5G/LTE 100GB</td>
                    <td className="border border-gray-300 px-4 py-3">100GB+다쓰면 5Mbps</td>
                    <td className="border border-gray-300 px-4 py-3">61,600원</td>
                    <td className="border border-gray-300 px-4 py-3">77,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 안내 문구 */}
          <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 space-y-2">
            <p>7% 할인 이벤트는 25년 12월 1일(월)~26년 2월 28일(토) 기간 내 신규가입완료한 고객 대상 적용됩니다.</p>
            <p>부가세가 포함된 월 금액이에요.</p>
            <p>데이터 속도제한 부가서비스가 포함된 금액이에요.</p>
            <p>내장형/외장형 모뎀을 이용한 M2M 전용 기기만 사용할 수 있어요.</p>
            <p>음성통화는 초당 1.98원, 영상통화는 초당 3.3원, 문자메시지는 건당 22원의 추가 요금이 발생해요.</p>
            <p>제공데이터 소진후 최대속도 요금제를 이용하지 않으면, 기본 제공 데이터를 다 쓴 후 0.5KB당 0.00825원의 추가 요금이 발생해요.</p>
            <p>실시간으로 대용량 데이터를 전송하거나 많은 대수의 라우터를 이용하면 속도가 제한되거나 차단될 수 있어요.</p>
            <p>5G 요금제로 한 장소에서 라우터를 3대 이상 이용하면 네트워크 과부하 우려가 있어 네트워크 성능 검사를 진행해요.</p>
            <p>단말 의무약정 계약에 따라 2/3년 약정 시 기기를 지원해 드려요.</p>
            <p>무약정은 별도로 기기 구매가 필요해요.</p>
            <p>제공데이터 소진후 최대속도 월정액의 경우 의무약정 계약에 따라 금액이 할인돼요.</p>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => {}}>
              더 많은 요금제 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 가입/개통 안내 섹션 */}
      <section id="signup-guide" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            가입/개통 절차를 알아보세요.
          </h2>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                step: "STEP 1",
                title: "요금제, 기기 선택",
                desc: "필요한 기기와 요금제를 선택해요.",
              },
              {
                step: "STEP 2",
                title: "신청서류 제출",
                desc: "개인, 개인사업자, 법인 고객별로 필요한 서류를 준비하고 다음 이메일 주소로 보내주세요. (bizcsm2m@lguplus.co.kr)",
              },
              {
                step: "STEP 3",
                title: "신청서류 검토",
                desc: "제출된 신청서류를 고객센터에서 검토해요.",
              },
              {
                step: "STEP 4",
                title: "기기 배송",
                desc: "기기를 개통해서 택배로 보내드려요. 평일 기준 2~3일이 소요돼요.",
              },
              {
                step: "STEP 5",
                title: "서비스 이용",
                desc: "기기 전원만 켜면 U+모바일인터넷을 바로 이용할 수 있어요.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인사이트 섹션 */}
      <section id="insights" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            U+의 최신 기술과 비즈니스 인사이트를 확인하세요.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "설치 사례부터 요금제까지 모바일인터넷 누구나 쉽게 설명서2",
              "매장 결제용, 차량 이동 중에도 무선 인터넷이 필요하다면?",
              "USB에 꽂으면 인터넷 연결! U+모바일인터넷 USB라우터",
              "차량 이동, 외근 중 빠르고 안정적으로 무선인터넷을 연결하는 방법",
              "노트북 작업에 추천하는 휴대용 무선 와이파이 U+모바일인터넷",
              "노트북 컴퓨터 작업에 추천하는 휴대용 무선 와이파이, U+모바일인터넷",
            ].map((title, idx) => (
              <Card key={idx} className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  {!imageErrors.etc ? (
                    <img
                      src={IMG.etc}
                      alt={title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      onError={() => handleImageError("etc")}
                    />
                  ) : (
                    <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <h3 className="font-bold text-lg">{title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 추천상품 섹션 */}
      <section id="recommended-products" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            다른 고객님들이 같이 선택하신 상품들입니다.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">기업 인터넷전화 센트릭스</h3>
                <p className="text-gray-600 mb-4">
                  교환기 설치 없이 기업용 통화 기능을 이용할 수 있는 인터넷전화 서비스
                </p>
                <Button variant="outline" className="w-full" onClick={() => {}}>
                  자세히 보기
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">U+커넥트</h3>
                <p className="text-gray-600 mb-4">
                  차량 위치 확인/ 비용 관리 등을 쉽고 편하게 도와주는 스마트한 차량 운행 관리 서비스
                </p>
                <Button variant="outline" className="w-full" onClick={() => {}}>
                  자세히 보기
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">U+웍스</h3>
                <p className="text-gray-600 mb-4">
                  이메일, 전자 결재 등 회사 업무에 필요한 기능을 하나로 모은 그룹웨어 서비스
                </p>
                <Button variant="outline" className="w-full" onClick={() => {}}>
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            궁금한 내용은 FAQ에서 찾아보세요.
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {currentFaqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-4">
                <AccordionTrigger className="font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {typeof item.answer === 'string' ? item.answer : item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 페이지네이션 컨트롤 */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setFaqPage((prev) => Math.max(1, prev - 1))}
                disabled={faqPage === 1}
                className="px-4 py-2"
              >
                이전
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={faqPage === page ? "default" : "outline"}
                    onClick={() => setFaqPage(page)}
                    className="px-3 py-2 min-w-[40px]"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setFaqPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={faqPage === totalPages}
                className="px-4 py-2"
              >
                다음
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 자료 다운로드 섹션 */}
      <section id="downloads" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            자료 다운로드
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">상품 소개서 다운로드</h3>
                <Button variant="outline" className="w-full mt-4" onClick={() => {}}>
                  다운로드
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">요금제 안내서 다운로드</h3>
                <Button variant="outline" className="w-full mt-4" onClick={() => {}}>
                  다운로드
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">가입 서류 안내 다운로드</h3>
                <Button variant="outline" className="w-full mt-4" onClick={() => {}}>
                  다운로드
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 최종 CTA 섹션 */}
      <section id="consultation" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전문가 상담 신청
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            전문 상담사가 고객님의 업종과 용도에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
          <Link href="/contact/consultation">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              상담 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UplusMobileInternet;
