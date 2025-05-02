import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <>
      <Helmet>
        <title>비전 & 미션 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신이 추구하는 비전과 미션을 소개합니다. 고객의 신뢰를 바탕으로 혁신적인 통신 솔루션을 제공하는 브이원정보통신의 가치와 목표를 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">비전 & 미션</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신이 추구하는 가치와 목표를 소개합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 비전 섹션 */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 inline-block pb-2 border-b-4 border-primary">우리의 비전</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=500&q=80" 
                  alt="브이원정보통신 비전" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-2xl text-primary font-bold mb-6">
                "모든 연결이 가치를 창출하는 세상을 만들어갑니다"
              </p>
              <p className="text-lg text-gray-700 mb-6">
                브이원정보통신은 사람, 기업, 기기 간의 모든 연결이 새로운 가치를 창출하고, 
                더 나은 세상을 만드는 데 기여한다고 믿습니다. 우리는 최고의 통신 인프라와 
                솔루션을 통해 이러한 연결을 가능하게 하고, 디지털 혁신을 선도하는 
                기업이 되고자 합니다.
              </p>
            </div>
            
            {/* 미션 섹션 */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 inline-block pb-2 border-b-4 border-primary">우리의 미션</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=500&q=80" 
                  alt="브이원정보통신 미션" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-2xl text-primary font-bold mb-6">
                "신뢰할 수 있는 통신 솔루션으로 고객의 성공을 지원합니다"
              </p>
              <p className="text-lg text-gray-700 mb-6">
                브이원정보통신은 고객의 비즈니스 환경에 최적화된 안정적이고 혁신적인 통신 솔루션을 
                제공함으로써, 고객의 업무 효율성을 높이고 성공적인 디지털 전환을 지원합니다. 
                우리는 단순한 서비스 제공자가 아닌, 고객의 성장을 함께 고민하고 지원하는 
                진정한 파트너가 되고자 합니다.
              </p>
            </div>
            
            {/* 핵심 가치 섹션 */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 inline-block pb-2 border-b-4 border-primary">핵심 가치</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">신뢰와 책임</h3>
                    <p className="text-gray-600">
                      우리는 고객과의 약속을 소중히 여기고, 책임감 있는 자세로 모든 업무에 임합니다. 
                      정직과 투명성을 바탕으로 신뢰할 수 있는 관계를 구축합니다.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">전문성과 혁신</h3>
                    <p className="text-gray-600">
                      우리는 끊임없는 학습과 연구를 통해 전문성을 높이고, 창의적 사고와 
                      도전 정신으로 혁신적인 솔루션을 개발합니다.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">협력과 존중</h3>
                    <p className="text-gray-600">
                      우리는 서로의 다양성을 존중하고, 열린 소통과 협력을 통해 
                      시너지를 창출합니다. 고객, 파트너, 직원 모두가 함께 성장하는 
                      환경을 만들어갑니다.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* 목표 섹션 */}
            <div>
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 inline-block pb-2 border-b-4 border-primary">장기 목표</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">국내 통신 솔루션 시장 선도기업으로 성장</h3>
                    <p className="text-gray-600">2030년까지 국내 통신 솔루션 시장에서 시장점유율 30% 달성</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">IoT 및 5G 기반 혁신 솔루션 개발</h3>
                    <p className="text-gray-600">다양한 산업 분야에 특화된 IoT 및 5G 기반 솔루션 개발 및 상용화</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">글로벌 시장 진출</h3>
                    <p className="text-gray-600">2035년까지 아시아 주요 국가를 시작으로 글로벌 시장 진출 및 확장</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">지속가능한 성장과 사회적 책임 실천</h3>
                    <p className="text-gray-600">환경친화적인 비즈니스 모델 구축 및 사회공헌 활동 확대</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
