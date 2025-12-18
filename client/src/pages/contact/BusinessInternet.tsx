import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const BusinessInternet = () => {
  // 히어로 섹션 주요 메시지
  const heroMessages = [
    {
      title: "장비 랙 지원, 고객사 맞춤 혜택",
      subtitle: "LG U+ 기업인터넷 신청시 무료 지원!",
      description: "고객사 환경 맞춤 최저가 설계",
      highlight: "무료 지원"
    },
    {
      title: "PC 대수 무제한 연결",
      subtitle: "추가 비용 없이, 가입비, 설치비, 초기비용 0원 설계",
      description: "안정성, 보안성, 최저가 U+ 고정IP",
      highlight: "초기비용 0원"
    },
    {
      title: "장애 스트레스 없는 U+ 기업인터넷",
      subtitle: "24시간 장애 지원!",
      description: "기업전담장애센터 365일 24시간 운영",
      highlight: "24시간 지원"
    }
  ];

  // U+ 오피스넷을 선택하는 이유 (4가지)
  const selectionReasons = [
    {
      number: 1,
      title: "추가 단말요금 0원!",
      description: "인증수 제한이 없어, 추가 요금 없이 PC 대수 무제한 연결!"
    },
    {
      number: 2,
      title: "기업 전용 광랜 1:1 단독망",
      description: "사무실 내부로 광케이블을 연결하여 1:1 단독망 구성! 안정적이고 빠른 속도의 고품질 인터넷 제공"
    },
    {
      number: 3,
      title: "U+ 고정IP",
      description: "필요한 개수만큼 고정 IP 사용! 안정적이고 보안성 높은 기업인터넷 중 최저가 고정IP!"
    },
    {
      number: 4,
      title: "U+ 오피스넷 24시간 장애 지원!",
      description: "고객센터 오픈 시간까지 기다리는 스트레스 없는, 365일 24시간 U+ 기업전담 장애고객센터 신속한 장애 지원!"
    }
  ];

  // PC 대수별 비교 (20대 사례)
  const comparisonItems = [
    { item: "기본 요금", competitor: "25,000원", uplus: "25,000원" },
    { item: "추가 단말 요금", competitor: "90,000원 (PC 2대 제외, 나머지 18대 × 5,000원)", uplus: "0원" },
    { item: "합계 (월)", competitor: "115,000원", uplus: "25,000원" }
  ];

  // 필요한 기업 타겟팅
  const targetCustomers = [
    {
      name: "저렴한 월 요금이 필요한 기업",
      description: "빠르고 안정적인 인터넷이 필요한 기업에 최적화된 솔루션"
    },
    {
      name: "사무실 오픈/이전 기업",
      description: "새로운 인터넷 구축, 통신 설계가 필요한 기업"
    },
    {
      name: "고정IP가 필요한 기업",
      description: "웹서버, 입찰, POS 운영 등 최저가 고정IP가 필요한 기업"
    }
  ];

  // 가입 혜택
  const benefits = [
    {
      number: "혜택01",
      title: "가입비, 설치비, 초기 비용 부담없이 0원 설계!",
      description: "신규 고객 설치비 무료! 기업인터넷 중 최저가 고정 IP!"
    },
    {
      number: "혜택02",
      title: "고객사 맞춤 설계 및 혜택 지원!",
      description: "기업인터넷 신청시, 고객사 맞춤 설계 및 혜택 제공!"
    },
    {
      number: "혜택03",
      title: "기업인터넷 신청시 장비 랙 지원!",
      description: "기업인터넷 가입시, 장비 랙 무료 지원!"
    }
  ];

  // 요금제 정보
  const pricingPlans = [
    {
      speed: "100M 오피스넷",
      ipType: "유동IP",
      standalone: "28,000원",
      dps: "25,000원",
      tps: "-"
    },
    {
      speed: "100M 오피스넷",
      ipType: "고정IP",
      standalone: "38,000원",
      dps: "35,000원",
      tps: "-"
    },
    {
      speed: "500M 오피스넷",
      ipType: "유동IP",
      standalone: "40,000원",
      dps: "35,000원",
      tps: "34,000원"
    },
    {
      speed: "500M 오피스넷",
      ipType: "고정IP",
      standalone: "45,000원",
      dps: "40,000원",
      tps: "39,000원"
    },
    {
      speed: "최대1G 오피스넷",
      ipType: "유동IP",
      standalone: "45,000원",
      dps: "40,000원",
      tps: "37,000원"
    },
    {
      speed: "최대1G 오피스넷",
      ipType: "고정IP",
      standalone: "55,000원",
      dps: "50,000원",
      tps: "47,000원"
    }
  ];

  // 고속 요금제 (10G)
  const highSpeedPlans = [
    { speed: "2.5G 오피스넷", ipType: "유동IP", price: "50,000원" },
    { speed: "5G 오피스넷", ipType: "유동IP", price: "70,000원" },
    { speed: "최대10G 오피스넷", ipType: "유동IP", price: "100,000원" }
  ];


  return (
    <>
      <Helmet>
        <title>기업인터넷 | 브이원정보통신</title>
        <meta name="description" content="LG U+ 기업인터넷 서비스를 통해 빠르고 안정적인 기업 통신 환경을 구축하세요. PC 대수 무제한, 최저가 고정IP로 업무 효율성을 높입니다." />
      </Helmet>
      
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">LG U+ 기업인터넷</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
            최대 10G 속도, 안정적 품질의 기업전용 인터넷!
            <br />
            PC 대수 무제한 연결, 추가 단말요금 0원, 최저가 고정IP!
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
          {/* U+ 오피스넷 소개 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">U+ 오피스넷</h2>
            <p className="text-lg text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              사무실 인터넷 관련 고민, 한번에 해결!
            </p>
            <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>우리 회사에 맞는 <strong>통신 설계 해주고</strong> <strong>맞춤 혜택 제공해주는 업체</strong> 있을까?</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>장애, 유지보수로 스트레스 받고 싶지 않은데 <strong>U+ 장애 처리는</strong> <strong>신속하게</strong> 잘 될까?</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>사무실 확장 이전해서 PC 대수가 늘어나는데 <strong>추가 요금 없는</strong> <strong>통신사</strong> 있을까?</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>PC 대수가 많지 않은 <strong>1인 사무실인데</strong> 기업인터넷 가입할 수 있을까?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* U+ 오피스넷이란? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">U+ 오피스넷이란?</h2>
            <p className="text-xl text-center text-gray-700 mb-8">
              최대 10G 속도, 안정적 품질의 기업전용 인터넷
            </p>
          </div>

          {/* U+ 오피스넷을 선택하는 이유 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">U+ 오피스넷을 선택하는 이유!</h2>
            
            {/* 이유 1: 추가 단말요금 0원 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-4">
                  {selectionReasons[0].number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectionReasons[0].title}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6 ml-16">{selectionReasons[0].description}</p>
              
              {/* PC 20대 사례 비교표 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden ml-16">
                <div className="bg-primary text-white p-4">
                  <h4 className="text-lg font-bold text-center">PC 20대 사례</h4>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    타사 인증수 제한 정책으로 PC 2대 이상 사용시, 2대를 제외한 나머지 모든 PC 당 5,000원의 추가 요금 지불
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-bold">구분</th>
                          <th className="border border-gray-300 p-3 text-center font-bold">타사 인터넷</th>
                          <th className="border border-gray-300 p-3 text-center font-bold bg-primary/10">U+ 오피스넷</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonItems.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 font-semibold">{item.item}</td>
                            <td className="border border-gray-300 p-3 text-center text-gray-600">{item.competitor}</td>
                            <td className="border border-gray-300 p-3 text-center font-bold text-primary bg-primary/5">{item.uplus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 이유 2, 3, 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectionReasons.slice(1).map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mr-3">
                        {reason.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                    </div>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 이런 고객에게 필요한 서비스입니다 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">LG U+ 오피스넷이 필요한 기업</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">오피스넷 혜택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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


          {/* 요금/상품 구성 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">U+ 오피스넷 요금</h2>
            <p className="text-lg text-gray-700 text-center mb-2 max-w-3xl mx-auto">
              신규 고객 <strong>설치비 무료!</strong> 기업인터넷 중 <strong>최저가 고정 IP!</strong>
            </p>
            <p className="text-lg font-bold text-primary text-center mb-8">
              결합할수록 할인!
            </p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-center">기본 요금제</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-bold">속도</th>
                          <th className="border border-gray-300 p-3 text-center font-bold">IP 구분</th>
                          <th className="border border-gray-300 p-3 text-center font-bold">오피스넷 단독</th>
                          <th className="border border-gray-300 p-3 text-center font-bold bg-primary/10">2종 결합 할인 (DPS)</th>
                          <th className="border border-gray-300 p-3 text-center font-bold bg-primary/10">3종 결합 할인 (TPS)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pricingPlans.map((plan, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 font-semibold">{plan.speed}</td>
                            <td className="border border-gray-300 p-3 text-center">{plan.ipType}</td>
                            <td className="border border-gray-300 p-3 text-center">{plan.standalone}</td>
                            <td className="border border-gray-300 p-3 text-center font-bold text-primary bg-primary/5">{plan.dps}</td>
                            <td className="border border-gray-300 p-3 text-center font-bold text-primary bg-primary/5">{plan.tps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    * VAT별도 / 3년 약정 기준 / 회선 요금
                  </p>
                </div>
              </div>
            </div>

            {/* 고속 요금제 */}
            <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">최대 10G 속도의 빠른 인터넷, U+ 10기가 오피스넷!</h3>
                <p className="text-sm text-gray-600 text-center mb-6">개통 가능 여부 별도 전화 상담!</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">속도</th>
                        <th className="border border-gray-300 p-3 text-center font-bold">IP 구분</th>
                        <th className="border border-gray-300 p-3 text-center font-bold bg-primary/10">요금</th>
                      </tr>
                    </thead>
                    <tbody>
                      {highSpeedPlans.map((plan, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-3 font-semibold">{plan.speed}</td>
                          <td className="border border-gray-300 p-3 text-center">{plan.ipType}</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-primary bg-primary/5">{plan.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    * VAT별도 / 3년 약정 기준
                  </p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>


          {/* 유의사항 또는 FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">자주 묻는 질문</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기업 인터넷은 가정용 인터넷과 무엇이 다른 건가요?</h3>
                  <p className="text-gray-600">기업인터넷은 기업을 대상으로 서비스를 하고, 일반적인 가정회선과 달리 L2 스위치를 직접 사업장에 인입 설치하여 다수의 회선망을 이용해야 하는 사업장에서 보다 안정적인 속도로 사용이 가능합니다. 또한 가정에서 신청이 어려운 고정IP 가입이 가능하기 때문에 서버 운영, 네트워크 구성 등을 하실 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 고정IP를 몇 개까지 사용할 수 있나요?</h3>
                  <p className="text-gray-600">최대 20개의 고정IP를 가입할 수 있습니다. 유동 IP의 수량은 무제한입니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 엄청 오래된 PC, 공유기에서도 기가 오피스넷 서비스 이용이 가능한가요?</h3>
                  <p className="text-gray-600">네 기가 오피스넷 가입 가능합니다. 다만 PC, 공유기, UTP케이블 등의 모든 네트워크 구성이 기가 속도가 지원이 되어야만 정상적인 기가속도 제공이 가능합니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 24시간 사업장을 운영하고 있는데, 인터넷 장애시 AS 접수와 처리는 잘 되나요?</h3>
                  <p className="text-gray-600">LG U+에서는 기업 전용 장애 센터를 365일, 24시간 운영하고 있습니다. 여러 장애 상황 발생시 연중 무휴 AS 접수와 처리가 가능합니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기업인터넷 설치에 소요되는 기간은 얼마나 되나요?</h3>
                  <p className="text-gray-600">기업 규모와 요구사항에 따라 다르지만, 일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정을 안내해 드립니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA 섹션 */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">기업통신 맞춤 설계 제안</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 기업인터넷 솔루션을 제안해 드립니다.
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

export default BusinessInternet;
