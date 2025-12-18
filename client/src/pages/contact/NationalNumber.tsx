import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const NationalNumber = () => {
  // 히어로 섹션 주요 메시지
  const heroMessages = [
    {
      title: "번호 하나로 기업 신뢰도 상승",
      subtitle: "전화번호만 대표번호로 바꿔도 기업신뢰도 UP!",
      description: "전국 어디서나 쉬운 4자리 번호로 전화걸면 자동 연결",
      highlight: "신뢰도 상승"
    },
    {
      title: "간결한 4자리 번호",
      subtitle: "1544, 1644, 1661, 1800, 1833, 1522",
      description: "일반 번호를 통합하여 사용, 고객에게 쉽게 기억",
      highlight: "4자리 번호"
    },
    {
      title: "평생 사용 가능",
      subtitle: "타지역 이전해도 대표번호는 그대로",
      description: "일반 번호가 바뀌어도 전국 어디서나 같은 번호 사용",
      highlight: "평생 사용"
    }
  ];

  // 전국대표번호 장점
  const advantages = [
    {
      number: "01",
      title: "기업신뢰도 상승",
      description: "회사 전화번호를 회사 이미지와 맞는 번호로 설정 가능하고, 고급스럽고 큰 규모의 기업으로 연출 가능"
    },
    {
      number: "02",
      title: "홍보효과 극대화",
      description: "간결한 4자리 번호로 일반 번호를 통합하여 사용. 고객에게 쉽게 기억되어 홍보효과 극대화"
    },
    {
      number: "03",
      title: "평생 사용가능",
      description: "타지역으로 이전하더라도, 일반 번호가 바뀌어도, 전국 어디서나 대표번호는 평생 그대로 같은 번호 사용 가능"
    },
    {
      number: "04",
      title: "업무효율 극대화",
      description: "전국 대리점을 하나의 번호로 통합관리 가능. 대표번호와 ARS 사용으로 각 부서로 편리하게 자동연결"
    }
  ];

  // 필요한 기업 타겟팅
  const targetCustomers = [
    {
      name: "기업 신뢰도 향상이 필요한 기업",
      description: "고급스럽고 큰 규모의 기업 이미지를 원하는 기업에 최적화된 솔루션"
    },
    {
      name: "홍보 효과를 극대화하고 싶은 기업",
      description: "간결한 번호로 고객에게 쉽게 기억되길 원하는 기업"
    },
    {
      name: "전국 대리점을 통합 관리하는 기업",
      description: "여러 지점을 하나의 번호로 통합 관리하고 싶은 기업"
    }
  ];

  // 요금제 정보
  const pricingPlans = [
    { grade: "5등급", monthlyFee: "20,000원", callRate: "전국단일 : 65원/3분" },
    { grade: "4등급", monthlyFee: "50,000원", callRate: "전국단일 : 65원/3분" },
    { grade: "3등급", monthlyFee: "100,000원", callRate: "전국단일 : 65원/3분" },
    { grade: "2등급", monthlyFee: "150,000원", callRate: "전국단일 : 65원/3분" },
    { grade: "1등급", monthlyFee: "300,000원", callRate: "전국단일 : 65원/3분" }
  ];

  return (
    <>
      <Helmet>
        <title>전국대표번호 | 브이원정보통신</title>
        <meta name="description" content="LG U+ 전국대표번호 서비스로 기업 신뢰도를 높이세요. 간결한 4자리 번호로 홍보 효과를 극대화하고 전국 어디서나 같은 번호를 평생 사용할 수 있습니다." />
      </Helmet>
      
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">LG U+ 전국대표번호</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
            1544, 1644, 1661, 1800, 1833, 1522와 같이
            <br />
            전국 어디서나 쉬운 4자리 번호로 전화걸면 자동 연결되는 서비스
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
          {/* 전국대표번호 왜 필요할까요? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">전국대표번호 왜 필요할까요?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 text-gray-700">기존 대표번호</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• 지역별로 다른 번호 사용</p>
                    <p>• 번호가 길고 복잡함</p>
                    <p>• 이전 시 번호 변경 필요</p>
                    <p>• 홍보 효과 제한적</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                    추천
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">전국대표번호</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• 전국 어디서나 같은 번호</p>
                    <p>• 간결한 4자리 번호</p>
                    <p>• 평생 같은 번호 사용</p>
                    <p>• 홍보 효과 극대화</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 전국대표번호 장점 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">전국대표번호 장점</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="text-2xl font-bold text-primary mr-4 flex-shrink-0">{advantage.number}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
                        <p className="text-gray-600">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 이런 고객에게 필요한 서비스입니다 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">전국대표번호가 필요한 기업</h2>
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

          {/* 요금/상품 구성 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">요금안내</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-4 text-left font-bold">등급</th>
                        <th className="border border-gray-300 p-4 text-center font-bold">요금(월)</th>
                        <th className="border border-gray-300 p-4 text-center font-bold bg-primary/10">통화료</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingPlans.map((plan, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 font-semibold">{plan.grade}</td>
                          <td className="border border-gray-300 p-4 text-center">{plan.monthlyFee}</td>
                          <td className="border border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">{plan.callRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ※ 이동전화 발신 통화료는 해당 이통사 요금제를 적용 받게 되며, 공중전화 발신 통화료는 이용자가 KT 공중전화 이용약관 시내통화료를 부담하고, 서비스 계약자가 부담액과의 차액분을 부담하게 됩니다.
                    <br />
                    ※ 휴대폰 착신호전환 서비스 이용 시 계약자가 전화된 호에 대해 "13원/10초"의 통화요금이 부과됩니다.
                  </p>
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
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 전국대표번호란 무엇인가요?</h3>
                  <p className="text-gray-600">1544, 1644, 1661, 1800, 1833, 1522와 같이 전국 어디서나 쉬운 4자리 번호로 전화걸면 자동 연결되는 서비스입니다. 일반 번호를 통합하여 사용할 수 있어 홍보 효과를 극대화할 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 기존 전화번호를 그대로 사용할 수 있나요?</h3>
                  <p className="text-gray-600">네, 기존 전화번호를 전국대표번호로 연결하여 사용할 수 있습니다. 기존 번호는 그대로 유지하면서 대표번호로 통합 관리할 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 사무실을 이전해도 번호를 계속 사용할 수 있나요?</h3>
                  <p className="text-gray-600">네, 전국대표번호는 타지역으로 이전하더라도, 일반 번호가 바뀌어도 전국 어디서나 평생 그대로 같은 번호를 사용할 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. ARS 기능을 사용할 수 있나요?</h3>
                  <p className="text-gray-600">네, 전국대표번호와 ARS를 함께 사용하면 각 부서로 편리하게 자동연결할 수 있어 업무 효율을 극대화할 수 있습니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Q. 전국대표번호 신청에 소요되는 기간은 얼마나 되나요?</h3>
                  <p className="text-gray-600">일반적으로 1~2주 정도 소요됩니다. 상담을 통해 정확한 일정과 필요한 등급을 안내해 드립니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA 섹션 */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">기업통신 맞춤 설계 제안</h2>
            <p className="text-lg text-gray-700 mb-6">
              브이원정보통신의 전문가가 고객의 환경에 맞는 최적의 전국대표번호 솔루션을 제안해 드립니다.
              <br />
              상담을 통해 맞춤형 등급과 서비스를 안내해 드립니다.
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

export default NationalNumber;

