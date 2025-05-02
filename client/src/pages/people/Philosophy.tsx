import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const Philosophy = () => {
  const philosophyPoints = [
    {
      title: "고객 중심 사고",
      description: "모든 결정과 행동의 중심에는 항상 고객이 있습니다. 우리는 고객의 니즈를 정확히 파악하고, 그에 맞는 최적의 솔루션을 제공하기 위해 끊임없이 고민합니다.",
      icon: "user"
    },
    {
      title: "끊임없는 학습과 성장",
      description: "빠르게 변화하는 통신 기술 환경 속에서 지속적인 학습은 필수입니다. 우리는 새로운 기술과 트렌드를 적극적으로 습득하고, 이를 통해 개인과 조직의 성장을 추구합니다.",
      icon: "book-open"
    },
    {
      title: "협력과 팀워크",
      description: "복잡한 문제일수록 다양한 관점과 협력이 중요합니다. 우리는 서로의 전문성을 존중하고, 열린 소통과 협력을 통해 최상의 결과물을 만들어냅니다.",
      icon: "users"
    },
    {
      title: "품질과 신뢰성",
      description: "우리가 제공하는 모든 서비스와 솔루션은 최고의 품질과 신뢰성을 보장합니다. 철저한 테스트와 검증 과정을 통해 고객에게 안정적인 시스템을 제공합니다.",
      icon: "shield"
    },
    {
      title: "혁신적 사고",
      description: "현재에 안주하지 않고 항상 더 나은 방법을 모색합니다. 창의적 사고와 도전 정신으로 혁신적인 솔루션을 개발하고, 업계의 변화를 선도합니다.",
      icon: "lightbulb"
    },
    {
      title: "사회적 책임",
      description: "기업의 성장은 사회와 함께 이루어져야 합니다. 우리는 환경 보호, 디지털 격차 해소, 지역 사회 공헌 등을 통해 사회적 책임을 다하고자 노력합니다.",
      icon: "heart"
    }
  ];

  return (
    <>
      <Helmet>
        <title>일하는 철학 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 일하는 방식과 핵심 가치를 소개합니다. 고객 중심 사고, 끊임없는 학습과 성장, 협력과 팀워크를 바탕으로 최상의 서비스를 제공하기 위해 노력하는 브이원정보통신의 철학을 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">일하는 철학</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신이 지향하는 일하는 방식과 핵심 가치를 소개합니다.
            우리는 이러한 철학을 바탕으로 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">우리의 핵심 가치</h2>
              <p className="text-lg text-gray-700">
                브이원정보통신의 모든 구성원이 공유하는 핵심 가치입니다.
                이러한 가치는 우리의 의사결정과 행동의 기준이 됩니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophyPoints.map((point, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {point.icon === "user" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            )}
                            {point.icon === "book-open" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            )}
                            {point.icon === "users" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            )}
                            {point.icon === "shield" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            )}
                            {point.icon === "lightbulb" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            )}
                            {point.icon === "heart" && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            )}
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">우리의 업무 방식</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">1. 문제 해결 중심 접근</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="text-lg text-gray-700 mb-4">
                    브이원정보통신은 문제 해결에 집중합니다. 우리는 고객의 문제를 정확히 파악하고,
                    이를 해결하기 위한 최적의 방법을 찾기 위해 다양한 관점에서 접근합니다.
                  </p>
                  <p className="text-lg text-gray-700">
                    단순히 기술을 제공하는 것이 아니라, 고객의 비즈니스 목표 달성을 위한
                    전략적 파트너로서 함께 고민하고 해결책을 모색합니다.
                  </p>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">2. 애자일 방법론 적용</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="text-lg text-gray-700 mb-4">
                    빠르게 변화하는 환경에 대응하기 위해 애자일 방법론을 적용합니다.
                    짧은 주기의 반복 개발을 통해 지속적인 피드백을 수집하고, 이를 바탕으로
                    프로젝트를 유연하게 발전시켜 나갑니다.
                  </p>
                  <p className="text-lg text-gray-700">
                    이러한 접근 방식은 프로젝트의 위험을 줄이고, 고객의 요구사항 변화에
                    신속하게 대응할 수 있는 장점이 있습니다.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">3. 성과 중심 평가</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className="text-lg text-gray-700 mb-4">
                    브이원정보통신은 성과 중심의 평가 체계를 갖추고 있습니다. 업무 시간이 아닌
                    실질적인 성과와 가치 창출에 초점을 맞추어 평가하며, 이를 통해 구성원들의
                    자율성과 책임감을 강조합니다.
                  </p>
                  <p className="text-lg text-gray-700">
                    또한, 정기적인 피드백과 코칭을 통해 개인의 성장을 지원하고,
                    팀 전체의 역량을 높이는 데 집중합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
