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
} from "recharts";
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
  Users,
  TrendingDown,
} from "lucide-react";

const BusinessPhone = () => {
  // 이미지 로드 상태
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  // 이미지 미리보기 모달 상태
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // 타사 대비 비교 차트 데이터
  const comparisonChartData = [
    {
      name: "가입비",
      타사: 275000,
      "LG U+": 0,
    },
    {
      name: "초기설치비",
      타사: 5000000,
      "LG U+": 0,
    },
    {
      name: "통화요금(연간)",
      타사: 1630000,
      "LG U+": 890000,
    },
    {
      name: "유지보수(연간)",
      타사: 240000,
      "LG U+": 0,
    },
  ];

  const chartConfig = {
    타사: {
      label: "타사 기업전화",
      color: "#94a3b8",
    },
    "LG U+": {
      label: "LG U+ 기업전화",
      color: "#3b82f6",
    },
  };

  // LG U+ 기업전화 주요 특징
  const mainFeatures = [
    {
      title: "통화 요금 최대 50% 절감!",
      description: "일반 전화 대비, 최대 50% 저렴한 통화요금",
      icon: TrendingDown,
    },
    {
      title: "초기 비용 부담없이 0원!",
      description: "가입비, 설치비 초기비용 0원!",
      icon: Gift,
    },
    {
      title: "최신 키폰 무료!",
      description: "내선통화, 당겨받기 등 키폰 기능 무료!",
      icon: Phone,
    },
    {
      title: "사용하던 번호 그대로 사용!",
      description: "자리 변경시에도 세팅없이 사용 가능!",
      icon: CheckCircle2,
    },
    {
      title: "일반 시내번호 사용 가능!",
      description: "070번호도, 02, 031 등 일반 번호도 가능",
      icon: Building2,
    },
    {
      title: "다양한 부가서비스가 무료!",
      description: "ARS, 통화연결음, 착신 전환 등",
      icon: Zap,
    },
    {
      title: "24시간 기업전담 장애센터",
      description: "365일 24시간 신속한 장애 지원",
      icon: Shield,
    }
  ];

  // 타사 대비 비교 항목
  const comparisonItems = [
    { item: "가입비", competitor: "275,000원", uplus: "0원" },
    { item: "초기설치비", competitor: "500만원 (교환기, 전화기, 랜공사, 설치비)", uplus: "0원" },
    { item: "통화요금 (연간)", competitor: "163만원", uplus: "89만원" },
    { item: "부가서비스", competitor: "유료 (발신번호표시, 착신전환, 컬러링, 콜 매니저)", uplus: "무료 (발신번호표시, 착신전환, 통화연결음, ARS)" },
    { item: "이동/확장", competitor: "이동시 공사비 발생", uplus: "편리한 이동/ 무한 확장" },
    { item: "유지보수 (연간)", competitor: "24만원", uplus: "0원" }
  ];

  // 필요한 기업 타겟팅
  const targetCustomers = [
    {
      name: "통신비 절감이 필요한 기업",
      description: "신규 오픈, 사무실 이전하는 기업에 최적화된 솔루션"
    },
    {
      name: "맞춤 설계가 필요한 기업",
      description: "우리 회사에 맞는 전화, 인터넷 시공이 필요한 기업"
    },
    {
      name: "해외 통화가 많은 기업",
      description: "해외 통화도 한국과 동일한 요금을 원하는 국내외 통화량이 많은 기업"
    }
  ];

  // 가입 혜택
  const benefits = [
    {
      number: "혜택01",
      title: "고품질 최신 키폰 단말기 무료 제공!",
      description: "최신형 기가 모델, 임원용 키폰, 휴대용 단말기까지 0원!",
      icon: Phone,
    },
    {
      number: "혜택02",
      title: "고객사 맞춤 혜택 무료 지원!",
      description: "기업전화 신청시, 고객사 맞춤 혜택 제공!",
      icon: Gift,
    },
    {
      number: "혜택03",
      title: "초기 비용 부담없이 0원!",
      description: "가입비, 설치비 무료!",
      icon: Zap,
    },
    {
      number: "혜택04",
      title: "기가 와이파이 무료 제공!",
      description: "기업전화 가입시, 기가 와이파이 무료!",
      icon: Wifi,
    },
    {
      number: "혜택05",
      title: "기업전담장애센터 24시간 운영!",
      description: "LG U+ 365일 24시간 신속한 장애 지원",
      icon: Shield,
    }
  ];

  // 주요 기능 및 제공 서비스
  const serviceItems = [
    "내선 번호 체계 구축 및 관리",
    "통화 전환, 대기, 녹음 기능",
    "통화 내역 조회 및 분석",
    "자동 응답 시스템(ARS) 구성",
    "통화 품질 모니터링",
    "24시간 기술 지원",
    "발신번호표시, 착신전환 무료",
    "통화연결음, ARS 등 부가서비스 무료"
  ];

  // 도입 흐름
  const processSteps = [
    {
      step: 1,
      title: "상담 및 요구사항 파악",
      description: "고객의 통신 환경과 요구사항을 분석하여 최적의 솔루션을 제안합니다."
    },
    {
      step: 2,
      title: "맞춤 설계 및 제안",
      description: "기업 규모와 구조에 맞는 내선 번호 체계 및 통화 시스템을 설계합니다."
    },
    {
      step: 3,
      title: "설치 및 구축",
      description: "전문 엔지니어가 현장에서 장비 설치 및 시스템 구축을 진행합니다."
    },
    {
      step: 4,
      title: "테스트 및 최적화",
      description: "통화 품질 테스트 및 시스템 최적화를 통해 안정적인 서비스를 보장합니다."
    },
    {
      step: 5,
      title: "교육 및 지원",
      description: "시스템 사용법 교육 및 지속적인 기술 지원을 제공합니다."
    }
  ];

  return (
    <>
      <Helmet>
        <title>기업전화 | 브이원정보통신</title>
        <meta name="description" content="LG U+ 기업전화 서비스를 통해 효율적인 기업 통신 환경을 구축하세요. 고품질 통화와 체계적인 통화 관리로 업무 효율성을 높입니다." />
      </Helmet>
      
      {/* 히어로 섹션 - 좌우 분할 구조 */}
      <section className="relative w-full bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 텍스트 콘텐츠 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  LG U+ 기업전화
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  통신비 절감, 초기비용 0원, 최신 키폰 무료
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  사무실 전화, 통신 관련 고민을 한번에 해결하세요.
                  <br />
                  내선통화 되는 키폰 전화기 무료 지원부터 통신 요금 절감, 맞춤 혜택 제공, 신속한 장애 처리까지!
                </p>
              </div>
              
              {/* 주요 혜택 요약 */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900">초기비용 0원</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900">키폰 무료</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <TrendingDown className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900">요금 50% 절감</span>
                </div>
              </div>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/ConsultationForm">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                    무료 상담 신청하기
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/cases/clients">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                    도입 사례 보기
                  </Button>
                </Link>
              </div>
            </div>

            {/* 오른쪽: 이미지/비주얼 */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/business-phone-hero.png"
                  alt="LG U+ 기업전화 프로모션"
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
                {/* 이미지 로드 실패시 대체 UI */}
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <PhoneCall className="w-24 h-24 mx-auto mb-6 opacity-80" />
                      <h2 className="text-3xl font-bold mb-4">기업전화</h2>
                      <p className="text-lg opacity-90">통신비 절감 솔루션</p>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">LG U+ 기업전화 주요 특징</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              사무실 전화, 통신 관련 고민을 한번에 해결하는 솔루션
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 타사 대비 비교 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">타사 기업전화 10대 VS LG U+ 기업전화 10대</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              비용과 서비스를 직접 비교해보세요
            </p>
          </header>
          
          {/* 비교 테이블 */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">구분</th>
                      <th className="border border-gray-300 p-4 text-center font-bold text-gray-900">타사 기업전화</th>
                      <th className="border border-gray-300 p-4 text-center font-bold bg-primary/10 text-primary">LG U+ 기업전화</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="border border-gray-300 p-4 font-semibold text-gray-900">{item.item}</td>
                        <td className="border border-gray-300 p-4 text-center text-gray-600">{item.competitor}</td>
                        <td className="border border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">{item.uplus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 비교 차트 */}
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl font-semibold text-gray-900">비용 비교 그래프</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={comparisonChartData}
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
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                      tickLine={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                      tickFormatter={(value) => {
                        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                        if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                        return value.toString();
                      }}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent 
                        className="bg-white border border-gray-200 shadow-lg rounded-lg"
                        indicator="dot"
                        formatter={(value: any) => `${value.toLocaleString()}원`}
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

      {/* 타겟 고객 섹션 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">LG U+ 기업전화가 필요한 기업</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              다양한 기업 환경에 최적화된 솔루션을 제공합니다
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {targetCustomers.map((customer, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{customer.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{customer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 가입 혜택 섹션 */}
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기업전화 가입 혜택</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              지금 가입하시면 다양한 혜택을 받으실 수 있습니다
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-primary mb-2">{benefit.number}</div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 주요 기능 및 제공 서비스 섹션 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 기능 및 제공 서비스</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              기업 통신에 필요한 모든 기능을 제공합니다
            </p>
          </header>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 요금/상품 구성 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">요금/상품 구성</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              키폰 단말기 0원! 가입비, 설치비, 초기비용 0원!
              <br />
              기업 규모와 통화 사용량에 따라 최적화된 요금제를 제공합니다.
            </p>
          </header>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">기본 요금제</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">고급형 센트릭스</h4>
                      <p className="text-sm text-gray-600 mb-4">별도 교환기 설치 불필요</p>
                      <p className="text-3xl font-bold text-primary mb-2">월 3,000원</p>
                      <p className="text-xs text-gray-500">구축 비용 및 유지 비용 0원</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary hover:shadow-xl transition-all relative">
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                      인기
                    </div>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">DCS : IP-PBX</h4>
                      <p className="text-sm text-gray-600 mb-4">구축형 안정적 서비스</p>
                      <p className="text-3xl font-bold text-primary mb-2">월 3,000원</p>
                      <p className="text-xs text-gray-500">U+ 인터넷 이용시 월 2,000원</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">일반형 인터넷전화</h4>
                      <p className="text-sm text-gray-600 mb-4">가장 저렴한 요금</p>
                      <p className="text-3xl font-bold text-primary mb-2">월 2,000원</p>
                      <p className="text-xs text-gray-500">U+ 인터넷 이용시 월 1,000원</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  * VAT별도 / 3년 약정 기준
                  <br />
                  * 자유통화요금제(정액 요금)도 제공됩니다. 상담을 통해 최적의 요금제를 안내해 드립니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 도입 및 설치 흐름 섹션 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">도입 및 설치 흐름</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              간단하고 체계적인 프로세스로 빠르게 도입하실 수 있습니다
            </p>
          </header>
          
          <div className="relative max-w-5xl mx-auto">
            {/* 중앙 선 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            {/* 프로세스 단계 */}
            {processSteps.map((process, index) => (
              <div key={index} className="mb-8 md:mb-12 relative">
                <div className="md:flex items-center">
                  <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-1'}`}>
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{process.step}. {process.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      </>
                    ) : (
                      <p className="text-gray-600 md:hidden leading-relaxed">{process.description}</p>
                    )}
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-10 w-10 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className={`md:w-1/2 flex md:block ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right order-0 md:order-2'}`}>
                    <div className="mr-4 md:hidden flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    <div>
                      {index % 2 === 0 ? (
                        <p className="text-gray-600 md:hidden leading-relaxed">{process.description}</p>
                      ) : (
                        <>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{process.step}. {process.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{process.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              기업전화 서비스에 대한 궁금한 점을 확인하세요
            </p>
          </header>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Q. 기업 인터넷전화는 어떤 서비스인가요? 일반 전화나 가정용 070전화와 다른가요?</h3>
                <p className="text-gray-600 leading-relaxed">기업용 인터넷전화는 회사에서 필요한 편리한 부가 기능이 있습니다. 3자 회의 통화, 발신번호표시, 당겨받기, 돌려주기, 내선통화 등 다양한 부가 기능이 있고, 타사에서 사용하던 번호 그대로 이동이 가능한 장점이 있습니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Q. 070번호를 사용하지 않고, 일반 번호로 사용할 수 있나요?</h3>
                <p className="text-gray-600 leading-relaxed">070번호 아닌 일반 번호(시내 전화번호)를 신규로 발급받아 사용 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Q. 기존 사업장에서 사용하던 번호를 바꾸지 않고 계속 사용하고 싶은데 가능한가요?</h3>
                <p className="text-gray-600 leading-relaxed">번호는 쓰던 번호 그대로, 전화기는 새 것으로 교체해드립니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Q. 24시간 사업장을 운영하고 있는데, 전화 장애시 AS 접수와 처리는 잘 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">LG U+에서는 기업 전용 장애 센터를 365일, 24시간 운영하고 있습니다. 여러 장애 상황 발생시 연중 무휴 AS 접수와 처리가 가능합니다.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Q. 기업전화 설치에 소요되는 기간은 얼마나 되나요?</h3>
                <p className="text-gray-600 leading-relaxed">기업 규모와 요구사항에 따라 다르지만, 일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정을 안내해 드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">기업통신 맞춤 설계 제안</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 기업전화 솔루션을 제안해 드립니다.
              <br />
              상담을 통해 맞춤형 요금제와 서비스를 안내해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  무료 상담 신청하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/cases/clients">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
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
