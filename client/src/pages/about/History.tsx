import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  const timelineEvents = [
    {
      year: "2006",
      title: "브이원정보통신 설립",
      description: "김철수와 박영희에 의해 서울 강남구에 브이원정보통신 설립",
      highlights: ["설립 초기 5명의 직원으로 시작", "중소기업 대상 네트워크 구축 서비스 제공"]
    },
    {
      year: "2008",
      title: "사업 영역 확장",
      description: "유선 네트워크 솔루션 분야로 사업 영역 확장",
      highlights: ["유선 네트워크 전문 엔지니어 3명 추가 채용", "연매출 5억원 달성"]
    },
    {
      year: "2010",
      title: "무선통신 분야 진출",
      description: "스마트폰 대중화에 따른 무선통신 솔루션 개발 시작",
      highlights: ["IoT 전문가 이진수 영입", "성동구 성수동으로 사옥 이전", "연매출 10억원 돌파"]
    },
    {
      year: "2013",
      title: "차량관제 시스템 개발",
      description: "물류 및 운송업체를 위한 차량관제 시스템 개발 시작",
      highlights: ["차량관제 시스템 전문가 최미라 영입", "대형 물류기업 2곳과 계약 체결"]
    },
    {
      year: "2014",
      title: "주요 통신사 파트너십 체결",
      description: "KT, SK텔레콤, LG U+ 등 국내 주요 통신사와 공식 파트너십 체결",
      highlights: ["통신사 공식 솔루션 파트너 인증 획득", "전국 주요 지역 서비스 네트워크 구축"]
    },
    {
      year: "2016",
      title: "브이원 R&D 센터 설립",
      description: "미래 통신 기술 연구를 위한 R&D 센터 설립",
      highlights: ["연구인력 10명 확보", "5G 및 차세대 IoT 솔루션 연구 시작", "연매출 50억원 달성"]
    },
    {
      year: "2018",
      title: "업종별 맞춤형 솔루션 출시",
      description: "제조업, 물류업, 유통업 등 업종별 특화 통신 솔루션 개발 및 출시",
      highlights: ["제조업 특화 스마트팩토리 통신 솔루션 출시", "대기업 제조사 3곳과 계약 체결"]
    },
    {
      year: "2020",
      title: "클라우드 기반 통합 관리 플랫폼 출시",
      description: "모든 통신 솔루션을 통합 관리할 수 있는 클라우드 플랫폼 개발",
      highlights: ["V1 통합 관리 플랫폼 출시", "원격 관리 및 모니터링 시스템 고도화", "직원 50명 규모로 성장"]
    },
    {
      year: "2022",
      title: "스마트시티 프로젝트 참여",
      description: "국내 주요 스마트시티 프로젝트의 통신 인프라 구축 사업 참여",
      highlights: ["부산 스마트시티 프로젝트 통신 인프라 구축", "혁신 중소기업 인증 획득"]
    },
    {
      year: "2024",
      title: "AI 기반 네트워크 최적화 솔루션 개발",
      description: "인공지능을 활용한 네트워크 최적화 솔루션 개발 및 출시",
      highlights: ["AI 네트워크 최적화 기술 특허 출원", "연매출 100억원 돌파"]
    },
    {
      year: "2025",
      title: "글로벌 시장 진출 준비",
      description: "동남아시아를 시작으로 글로벌 시장 진출 계획 수립",
      highlights: ["베트남, 싱가포르 지사 설립 추진", "국제 표준 인증 획득", "지속가능 경영 비전 발표"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>연혁 (History) | 브이원정보통신</title>
        <meta name="description" content="2006년 설립부터 현재까지 브이원정보통신의 성장과 발전 과정을 확인하세요. 끊임없는 혁신과 도전으로 통신 솔루션 분야를 선도해 온 브이원정보통신의 발자취입니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">연혁 (History)</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            2006년 설립부터 현재까지, 브이원정보통신이 걸어온 발자취를 소개합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 타임라인 */}
            <div className="relative">
              {/* 중앙 선 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-12 md:mb-20 relative">
                  {/* 모바일 뷰 */}
                  <div className="md:hidden">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary text-white text-xl font-bold py-1 px-4 rounded-full">
                            {event.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        {event.highlights && (
                          <ul className="list-disc list-inside text-gray-600 pl-2">
                            {event.highlights.map((highlight, i) => (
                              <li key={i} className="mb-1">{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* 데스크톱 뷰 */}
                  <div className="hidden md:block">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${index % 2 === 1 && 'order-1'}`}>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <div className="bg-primary text-white text-xl font-bold py-1 px-4 rounded-full">
                                {event.year}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            {event.highlights && (
                              <ul className="list-disc list-inside text-gray-600 pl-2">
                                {event.highlights.map((highlight, i) => (
                                  <li key={i} className="mb-1">{highlight}</li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                        <div className="h-6 w-6 rounded-full bg-primary border-4 border-white shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl text-primary font-bold">
                브이원정보통신의 도전은 계속됩니다
              </p>
              <p className="text-lg text-gray-600 mt-4">
                앞으로도 브이원정보통신은 끊임없는 혁신과 도전으로<br />
                더 나은 통신 환경을 만들어 나가겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
