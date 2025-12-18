import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const BusinessPhone = () => {
  // 히어로 섹션 주요 메시지
  const heroMessages = [
    {
      title: "최신 키폰 단말기, 고객사 맞춤 혜택",
      subtitle: "LG U+ 기업전화 신청시 무료 지원!",
      description: "고객사 환경 맞춤 최저가 설계",
      highlight: "무료 지원"
    },
    {
      title: "스트레스 받는 장애",
      subtitle: "LG U+ 기업전화 신청시 24시간 장애 지원!",
      description: "기업전담장애센터 365일 24시간 운영",
      highlight: "24시간 지원"
    },
    {
      title: "늘어나는 사무실 경비",
      subtitle: "LG U+ 기업전화로 통신비만큼은 가볍게!",
      description: "가입비, 설치비, 초기비용 0원! 최신 키폰 무료!",
      highlight: "초기비용 0원"
    }
  ];

  // LG U+ 기업전화 주요 특징
  const mainFeatures = [
    {
      title: "통화 요금 최대 50% 절감!",
      description: "일반 전화 대비, 최대 50% 저렴한 통화요금"
    },
    {
      title: "초기 비용 부담없이 0원!",
      description: "가입비, 설치비 초기비용 0원!"
    },
    {
      title: "최신 키폰 무료!",
      description: "내선통화, 당겨받기 등 키폰 기능 무료!"
    },
    {
      title: "사용하던 번호 그대로 사용!",
      description: "자리 변경시에도 세팅없이 사용 가능!"
    },
    {
      title: "일반 시내번호 사용 가능!",
      description: "070번호도, 02, 031 등 일반 번호도 가능"
    },
    {
      title: "다양한 부가서비스가 무료!",
      description: "ARS, 통화연결음, 착신 전환 등"
    },
    {
      title: "24시간 기업전담 장애센터",
      description: "365일 24시간 신속한 장애 지원"
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
      description: "최신형 기가 모델, 임원용 키폰, 휴대용 단말기까지 0원!"
    },
    {
      number: "혜택02",
      title: "고객사 맞춤 혜택 무료 지원!",
      description: "기업전화 신청시, 고객사 맞춤 혜택 제공!"
    },
    {
      number: "혜택03",
      title: "초기 비용 부담없이 0원!",
      description: "가입비, 설치비 무료!"
    },
    {
      number: "혜택04",
      title: "기가 와이파이 무료 제공!",
      description: "기업전화 가입시, 기가 와이파이 무료!"
    },
    {
      number: "혜택05",
      title: "기업전담장애센터 24시간 운영!",
      description: "LG U+ 365일 24시간 신속한 장애 지원"
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
      
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">LG U+ 기업전화</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
            국내 최다 가입자 수! 230만 기업의 선택!
            <br />
            통화 요금 최대 50% 절감, 초기 비용 0원, 최신 키폰 무료 제공!
          </p>
          
          {/* 주요 메시지 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {heroMessages.map((message, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-sm font-semibold text-primary mb-2">{message.highlight}</div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{message.title}</h2>
                  <p className="text-lg font-semibold text-primary mb-2">{message.subtitle}</p>
                  <p className="text-gray-600">{message.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* LG U+ 기업전화란? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">LG U+ 기업전화란?</h2>
            <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              사무실 전화, 통신 관련 고민, 한번에 해결!
              <br />
              내선통화 되는 키폰 전화기 무료 지원, 통신 요금 절감, 맞춤 혜택 제공, 신속한 장애 처리까지!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 타사 대비 비교 */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-white p-6">
              <h2 className="text-2xl font-bold text-center">타사 기업전화 10대 VS LG U+ 기업전화 10대</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold">구분</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">타사 기업전화</th>
                      <th className="border border-gray-300 p-4 text-center font-bold bg-primary/10">LG U+ 기업전화</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">{item.item}</td>
                        <td className="border border-gray-300 p-4 text-center text-gray-600">{item.competitor}</td>
                        <td className="border border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">{item.uplus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 이런 고객에게 필요한 서비스입니다 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">LG U+ 기업전화가 필요한 기업</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetCustomers.map((customer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{customer.name}</h3>
                    <p className="text-gray-600">{customer.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 가입 혜택 */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">기업전화 가입 혜택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-sm font-bold text-primary mb-2">{benefit.number}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 주요 기능 및 제공 서비스 항목 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">주요 기능 및 제공 서비스</h2>
            <div className="bg-white rounded-lg shadow p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 요금/상품 구성 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">요금/상품 구성</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              키폰 단말기 0원! 가입비, 설치비, 초기비용 0원!
              <br />
              기업 규모와 통화 사용량에 따라 최적화된 요금제를 제공합니다. 상세한 요금 정보는 상담을 통해 안내해 드립니다.
            </p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-center">기본 요금제</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-primary/20">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-bold mb-2 text-gray-900">고급형 센트릭스</h4>
                        <p className="text-sm text-gray-600 mb-3">별도 교환기 설치 불필요</p>
                        <p className="text-xl font-bold text-primary mb-1">월 3,000원</p>
                        <p className="text-xs text-gray-500">구축 비용 및 유지 비용 0원</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-primary">
                      <CardContent className="p-6 text-center">
                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                          인기
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-gray-900">DCS : IP-PBX</h4>
                        <p className="text-sm text-gray-600 mb-3">구축형 안정적 서비스</p>
                        <p className="text-xl font-bold text-primary mb-1">월 3,000원</p>
                        <p className="text-xs text-gray-500">U+ 인터넷 이용시 월 2,000원</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-primary/20">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-lg font-bold mb-2 text-gray-900">일반형 인터넷전화</h4>
                        <p className="text-sm text-gray-600 mb-3">가장 저렴한 요금</p>
                        <p className="text-xl font-bold text-primary mb-1">월 2,000원</p>
                        <p className="text-xs text-gray-500">U+ 인터넷 이용시 월 1,000원</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    * VAT별도 / 3년 약정 기준
                    <br />
                    * 자유통화요금제(정액 요금)도 제공됩니다. 상담을 통해 최적의 요금제를 안내해 드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 도입/설치/이용 흐름 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">도입 및 설치 흐름</h2>
            <div className="relative">
              {/* 중앙 선 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {/* 프로세스 단계 */}
              {processSteps.map((process, index) => (
                <div key={index} className={`mb-8 md:mb-12 relative ${index === processSteps.length - 1 ? '' : ''}`}>
                  <div className="md:flex items-center">
                    <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-1'}`}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{process.step}. {process.title}</h3>
                          <p className="text-gray-600">{process.description}</p>
                        </>
                      ) : (
                        <p className="text-gray-600 md:hidden">{process.description}</p>
                      )}
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="h-8 w-8 rounded-full bg-primary border-4 border-white shadow flex items-center justify-center text-white font-bold">{process.step}</div>
                    </div>
                    <div className={`md:w-1/2 flex md:block ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right order-0 md:order-2'}`}>
                      <div className="mr-4 md:hidden flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">{process.step}</div>
                      </div>
                      <div>
                        {index % 2 === 0 ? (
                          <p className="text-gray-600 md:hidden">{process.description}</p>
                        ) : (
                          <>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{process.step}. {process.title}</h3>
                            <p className="text-gray-600">{process.description}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 유의사항 또는 FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">자주 묻는 질문</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기업 인터넷전화는 어떤 서비스인가요? 일반 전화나 가정용 070전화와 다른가요?</h3>
                  <p className="text-gray-600">기업용 인터넷전화는 회사에서 필요한 편리한 부가 기능이 있습니다. 3자 회의 통화, 발신번호표시, 당겨받기, 돌려주기, 내선통화 등 다양한 부가 기능이 있고, 타사에서 사용하던 번호 그대로 이동이 가능한 장점이 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 070번호를 사용하지 않고, 일반 번호로 사용할 수 있나요?</h3>
                  <p className="text-gray-600">070번호 아닌 일반 번호(시내 전화번호)를 신규로 발급받아 사용 가능합니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기존 사업장에서 사용하던 번호를 바꾸지 않고 계속 사용하고 싶은데 가능한가요?</h3>
                  <p className="text-gray-600">번호는 쓰던 번호 그대로, 전화기는 새 것으로 교체해드립니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 24시간 사업장을 운영하고 있는데, 전화 장애시 AS 접수와 처리는 잘 되나요?</h3>
                  <p className="text-gray-600">LG U+에서는 기업 전용 장애 센터를 365일, 24시간 운영하고 있습니다. 여러 장애 상황 발생시 연중 무휴 AS 접수와 처리가 가능합니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기업전화 설치에 소요되는 기간은 얼마나 되나요?</h3>
                  <p className="text-gray-600">기업 규모와 요구사항에 따라 다르지만, 일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정을 안내해 드립니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA 섹션 */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">기업통신 맞춤 설계 제안</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 기업전화 솔루션을 제안해 드립니다.
              <br />
              상담을 통해 맞춤형 요금제와 서비스를 안내해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  무료 상담 신청하기
                </Button>
              </Link>
              <Link href="/cases/clients">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  도입 사례 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessPhone;
