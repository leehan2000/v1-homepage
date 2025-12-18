import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const BusinessInternet = () => {
  // 히어로 섹션 주요 메시지
  const heroMessages = [
    {
      title: "PC 수 무제한 연결",
      subtitle: "U+ 오피스넷 신청시 추가 요금 없이 무제한!",
      description: "원하는 만큼의 PC를 연결할 수 있어 확장성이 뛰어납니다",
      highlight: "무제한 연결"
    },
    {
      title: "전용 광케이블 연결",
      subtitle: "U+ 오피스넷은 고객 사무실까지 직접 연결!",
      description: "안정적이고 빠른 인터넷 서비스 제공",
      highlight: "전용 광케이블"
    },
    {
      title: "초기 비용 부담없이 0원!",
      subtitle: "U+ 오피스넷 가입시 설치비, 인입 공사비 무료!",
      description: "광모뎀 설치비, 외부 광케이블 인입비 무상 지원",
      highlight: "초기비용 0원"
    }
  ];

  // U+ 오피스넷이란?
  const mainFeatures = [
    {
      title: "전용 광케이블 연결",
      description: "고객 사무실까지 광케이블을 직접 연결하여 안정적이고 빠른 인터넷 서비스를 제공합니다"
    },
    {
      title: "PC 수 무제한 연결",
      description: "추가 요금 없이 원하는 만큼의 PC를 연결할 수 있어 확장성이 뛰어납니다"
    },
    {
      title: "고정 IP 제공",
      description: "필요에 따라 고정 IP를 추가로 이용할 수 있어 NAS 서버 운영이나 기업 간 보안 통신 등에 활용 가능"
    },
    {
      title: "안정적인 네트워크 환경",
      description: "광모뎀 설치를 통해 안정적인 네트워크 환경을 구축하며, 하루 500GB의 트래픽을 제공"
    },
    {
      title: "기가 와이파이 무료 제공",
      description: "500Mbps 이상 요금제 가입 시 기가 와이파이를 무료로 제공하여 무선 인터넷 환경 강화"
    },
    {
      title: "네트워크 전문가 무료 상담",
      description: "8만 건 이상의 컨설팅 경험을 보유한 네트워크 전문 상담원이 1:1 무료 상담 제공"
    }
  ];

  // PC 단말기 요금 비교
  const pcTerminalComparison = [
    { item: "PC 수", competitor: "제한 있음 (추가 요금 발생)", uplus: "무제한 (추가 요금 없음)" },
    { item: "PC 단말기 요금", competitor: "PC당 월 3,000원~5,000원", uplus: "0원 (무료)" },
    { item: "연간 PC 요금 (10대 기준)", competitor: "36만원~60만원", uplus: "0원" }
  ];

  // 이런 고객에게 필요한 서비스입니다
  const targetCustomers = [
    {
      name: "PC가 많은 기업",
      description: "사무실에 PC가 많아 인터넷 요금이 부담스러운 기업"
    },
    {
      name: "안정적인 인터넷이 필요한 기업",
      description: "업무에 필수적인 안정적인 인터넷 환경이 필요한 기업"
    },
    {
      name: "고정 IP가 필요한 기업",
      description: "NAS 서버 운영이나 기업 간 보안 통신이 필요한 기업"
    }
  ];

  // U+ 오피스넷을 선택하는 이유
  const advantages = [
    {
      number: "01",
      title: "PC 수 무제한 연결",
      description: "추가 요금 없이 원하는 만큼의 PC를 연결할 수 있어 확장성이 뛰어납니다"
    },
    {
      number: "02",
      title: "PC 단말기 요금 0원",
      description: "타사 대비 PC당 월 3,000원~5,000원씩 절감 가능"
    },
    {
      number: "03",
      title: "전용 광케이블 연결",
      description: "고객 사무실까지 광케이블을 직접 연결하여 안정적이고 빠른 인터넷 서비스 제공"
    },
    {
      number: "04",
      title: "초기 비용 0원",
      description: "광모뎀 설치비, 외부 광케이블 인입비 무상 지원"
    },
    {
      number: "05",
      title: "기가 와이파이 무료 제공",
      description: "500Mbps 이상 요금제 가입 시 기가 와이파이를 무료로 제공"
    },
    {
      number: "06",
      title: "네트워크 전문가 무료 상담",
      description: "8만 건 이상의 컨설팅 경험을 보유한 네트워크 전문 상담원이 1:1 무료 상담 제공"
    }
  ];

  // 기본 요금제
  const basicPlans = [
    {
      speed: "100Mbps",
      dynamicIp: "25,000원",
      fixedIp: "35,000원"
    },
    {
      speed: "500Mbps",
      dynamicIp: "35,000원",
      fixedIp: "40,000원"
    },
    {
      speed: "1Gbps",
      dynamicIp: "40,000원",
      fixedIp: "50,000원"
    }
  ];

  // 고속 요금제
  const highSpeedPlans = [
    {
      speed: "2.5Gbps",
      dynamicIp: "60,000원",
      fixedIp: "70,000원"
    },
    {
      speed: "5Gbps",
      dynamicIp: "80,000원",
      fixedIp: "90,000원"
    },
    {
      speed: "10Gbps",
      dynamicIp: "120,000원",
      fixedIp: "130,000원"
    }
  ];

  return (
    <>
      <Helmet>
        <title>기업인터넷 | 브이원정보통신</title>
        <meta name="description" content="LG U+ 기업인터넷(U+ 오피스넷) 서비스를 통해 안정적이고 빠른 기업 인터넷 환경을 구축하세요. PC 수 무제한 연결, 초기 비용 0원으로 업무 효율성을 높입니다." />
      </Helmet>
      
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">U+ 오피스넷</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
            PC 수 무제한 연결, PC 단말기 요금 0원!
            <br />
            전용 광케이블 연결로 안정적이고 빠른 기업 인터넷 환경을 제공합니다.
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
          {/* U+ 오피스넷이란? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">U+ 오피스넷이란?</h2>
            <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              기업 고객을 위한 고품질 인터넷 솔루션
              <br />
              전용 광케이블 연결로 안정적이고 빠른 인터넷 서비스를 제공합니다.
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

          {/* U+ 오피스넷을 선택하는 이유 */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">U+ 오피스넷을 선택하는 이유</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-sm font-bold text-primary mb-2">{advantage.number}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PC 단말기 요금 비교 */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-white p-6">
              <h2 className="text-2xl font-bold text-center">PC 단말기 요금 비교</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold">구분</th>
                      <th className="border border-gray-300 p-4 text-center font-bold">타사 기업인터넷</th>
                      <th className="border border-gray-300 p-4 text-center font-bold bg-primary/10">U+ 오피스넷</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pcTerminalComparison.map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-4 text-center">U+ 오피스넷이 필요한 기업</h2>
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

          {/* 요금/상품 구성 - 기본 요금제 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">요금/상품 구성</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              PC 수 무제한 연결, PC 단말기 요금 0원!
              <br />
              속도와 IP 유형에 따라 최적화된 요금제를 제공합니다.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">기본 요금제</h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="border border-gray-300 p-4 text-center font-bold">속도</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">유동 IP</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">고정 IP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {basicPlans.map((plan, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-4 text-center font-semibold">{plan.speed}</td>
                            <td className="border border-gray-300 p-4 text-center">{plan.dynamicIp}</td>
                            <td className="border border-gray-300 p-4 text-center font-bold text-primary">{plan.fixedIp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 고속 요금제 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">고속 요금제</h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="border border-gray-300 p-4 text-center font-bold">속도</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">유동 IP</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">고정 IP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {highSpeedPlans.map((plan, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-4 text-center font-semibold">{plan.speed}</td>
                            <td className="border border-gray-300 p-4 text-center">{plan.dynamicIp}</td>
                            <td className="border border-gray-300 p-4 text-center font-bold text-primary">{plan.fixedIp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                * 위 요금은 부가세 별도이며, 번들 요금 기준입니다.
                <br />
                * 500Mbps 이상 요금제 가입 시 기가 와이파이 무료 제공
                <br />
                * 장비 설치 및 인입 공사비 무료 (광모뎀 설치비, 외부 광케이블 인입비 무상 지원)
              </p>
            </div>
          </div>

          {/* 유의사항 또는 FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">자주 묻는 질문</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. PC 수 무제한 연결이 정말 가능한가요?</h3>
                  <p className="text-gray-600">네, 추가 요금 없이 원하는 만큼의 PC를 연결할 수 있습니다. 타사와 달리 PC당 월 3,000원~5,000원의 단말기 요금이 발생하지 않습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 고정 IP는 어떻게 신청하나요?</h3>
                  <p className="text-gray-600">고정 IP는 기본 요금제에 추가로 신청할 수 있습니다. NAS 서버 운영이나 기업 간 보안 통신 등에 활용하실 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 초기 설치 비용이 정말 무료인가요?</h3>
                  <p className="text-gray-600">네, 광모뎀 설치비와 외부 광케이블 인입비를 무상으로 지원합니다. 초기 비용 부담 없이 가입하실 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기가 와이파이는 언제 무료로 제공되나요?</h3>
                  <p className="text-gray-600">500Mbps 이상 요금제 가입 시 기가 와이파이를 무료로 제공하여 무선 인터넷 환경을 강화할 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 설치에 소요되는 기간은 얼마나 되나요?</h3>
                  <p className="text-gray-600">일반적으로 1~2주 정도 소요됩니다. 현장 상황에 따라 다를 수 있으니 상담을 통해 정확한 일정을 안내해 드립니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA 섹션 */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">기업인터넷 맞춤 설계 제안</h2>
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
