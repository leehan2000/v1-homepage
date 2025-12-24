import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Phone,
  PhoneCall,
  Gift,
  Wifi,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building2,
  TrendingDown,
  Globe,
  Users,
  Clock,
  Headphones,
  Star,
} from "lucide-react";

const BusinessPhone = () => {
  // 이미지 로드 상태
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  // 이미지 미리보기 모달 상태
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // LG유플러스 공식 페이지 기준 - 주요 특징
  const mainFeatures = [
    {
      title: "최신 키폰 시스템 무료 제공",
      description: "사무실 키폰 구축 비용 없이 최신 디지털 키폰 기능을 무료로 이용할 수 있습니다.",
      icon: Phone,
      highlight: "무료 제공",
    },
    {
      title: "초기 비용 0원",
      description: "가입비, 설치비 등 초기비용이 전혀 들지 않아 부담 없이 시작할 수 있습니다.",
      icon: Gift,
      highlight: "0원",
    },
    {
      title: "통화료 절감",
      description: "KT 전화 대비 평균 요금을 45% 절감할 수 있으며, 국제전화 요금도 국내 최저 수준인 1분당 50원으로 제공됩니다.",
      icon: TrendingDown,
      highlight: "45% 절감",
    },
    {
      title: "기존 번호 유지",
      description: "기존에 사용하던 번호를 그대로 유지할 수 있으며, 상대방 화면에 회사 이름이 표시되는 레터링 옵션도 제공합니다.",
      icon: CheckCircle2,
      highlight: "번호 유지",
    },
    {
      title: "무료 통화 혜택",
      description: "국내 최대 500만 가입자와의 무료 통화가 가능하며, 국내-해외, 본사-지사 간 내선 통화도 무료로 이용할 수 있습니다.",
      icon: Zap,
      highlight: "무료 통화",
    },
    {
      title: "대표번호 사용 가능",
      description: "일반 시내번호뿐만 아니라 대표번호도 사용할 수 있어 기업 이미지를 높일 수 있습니다.",
      icon: Building2,
      highlight: "대표번호",
    },
    {
      title: "24시간 기업전담 장애센터",
      description: "365일 24시간 신속한 장애 지원으로 안심하고 사용할 수 있습니다.",
      icon: Shield,
      highlight: "24시간",
    },
    {
      title: "국제전화 요금 최저가",
      description: "해외 통화도 국내 최저 수준의 요금으로 이용할 수 있습니다.",
      icon: Globe,
      highlight: "최저가",
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
      ]
    },
    {
      category: "무료 서비스",
      items: [
        "발신번호 보고",
        "발신 제한",
        "대표번호 그룹핑",
        "회의 통화",
        "클릭투콜"
      ]
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
      ]
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
      
      {/* 히어로 섹션 - LG유플러스 공식 페이지 스타일 */}
      <section className="relative w-full bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
                LG U+ 기업전화
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                최신 키폰 시스템 무료 제공<br />
                초기 비용 0원
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8 max-w-3xl mx-auto">
                사무실 키폰 구축 비용 없이 최신 디지털 키폰 기능을 무료로 이용할 수 있습니다.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/30">
                  <Gift className="w-5 h-5" />
                  <span className="font-semibold">초기비용 0원</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/30">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">키폰 무료 제공</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/30">
                  <TrendingDown className="w-5 h-5" />
                  <span className="font-semibold">통화료 45% 절감</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact/ConsultationForm">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg font-semibold shadow-xl">
                    무료 상담 신청하기
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/cases/clients">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold">
                    도입 사례 보기
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* 히어로 이미지 */}
            <div className="relative mt-12">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/business-phone-hero.png"
                  alt="LG U+ 기업전화 - 최신 키폰 시스템 무료 제공"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  style={{ 
                    display: imageError ? "none" : "block",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  loading="eager"
                  decoding="async"
                  onClick={() => setIsPreviewOpen(true)}
                  onLoad={(e) => {
                    setImageLoaded(true);
                    setImageError(false);
                  }}
                  onError={(e) => {
                    setImageError(true);
                  }}
                />
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <PhoneCall className="w-24 h-24 mx-auto mb-6 opacity-80" />
                      <h2 className="text-3xl font-bold mb-4">기업전화</h2>
                      <p className="text-lg opacity-90">최신 키폰 시스템 무료 제공</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 이미지 미리보기 모달 */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/images/business-phone-hero.png"
              alt="LG U+ 기업전화 프로모션 (확대)"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
      
      {/* 주요 특징 섹션 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              LG U+ 기업전화 주요 특징
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              사무실 전화, 통신 관련 고민을 한번에 해결하는 솔루션
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary group">
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 스마트 키폰 기능 섹션 */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              스마트 키폰 기능
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              업무 효율성을 높이는 다양한 기능을 제공합니다
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {smartPhoneFeatures.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 전화기 라인업 섹션 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              전화기 라인업
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 모델의 키폰을 제공합니다
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {phoneModels.map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-all text-center">
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
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              자유통화요금제
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              기업 규모와 통화 사용량에 맞는 최적의 요금제를 선택하세요
            </p>
          </header>
          
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white shadow-xl">
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
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              추가 혜택
            </h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all bg-gradient-to-br from-primary-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">무료 통화 혜택</h3>
                    <p className="text-gray-600 leading-relaxed">
                      국내 최대 500만 가입자와의 무료 통화가 가능하며, 국내-해외, 본사-지사 간 내선 통화도 무료로 이용할 수 있습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all bg-gradient-to-br from-primary-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">국제전화 요금 최저가</h3>
                    <p className="text-gray-600 leading-relaxed">
                      해외 통화도 국내 최저 수준인 1분당 50원으로 이용할 수 있습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              기업전화 서비스에 대한 궁금한 점을 확인하세요
            </p>
          </header>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기업 인터넷전화는 어떤 서비스인가요? 일반 전화나 가정용 070전화와 다른가요?</h3>
                <p className="text-gray-600 leading-relaxed">기업용 인터넷전화는 회사에서 필요한 편리한 부가 기능이 있습니다. 3자 회의 통화, 발신번호표시, 당겨받기, 돌려주기, 내선통화 등 다양한 부가 기능이 있고, 타사에서 사용하던 번호 그대로 이동이 가능한 장점이 있습니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 070번호를 사용하지 않고, 일반 번호로 사용할 수 있나요?</h3>
                <p className="text-gray-600 leading-relaxed">070번호 아닌 일반 번호(시내 전화번호)를 신규로 발급받아 사용 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기존 사업장에서 사용하던 번호를 바꾸지 않고 계속 사용하고 싶은데 가능한가요?</h3>
                <p className="text-gray-600 leading-relaxed">번호는 쓰던 번호 그대로, 전화기는 새 것으로 교체해드립니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 24시간 사업장을 운영하고 있는데, 전화 장애시 AS 접수와 처리는 잘 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">LG U+에서는 기업 전용 장애 센터를 365일, 24시간 운영하고 있습니다. 여러 장애 상황 발생시 연중 무휴 AS 접수와 처리가 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">Q. 기업전화 설치에 소요되는 기간은 얼마나 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">기업 규모와 요구사항에 따라 다르지만, 일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정을 안내해 드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white relative overflow-hidden">
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
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg font-semibold shadow-xl">
                  무료 상담 신청하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/cases/clients">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold">
                  도입 사례 보기
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
