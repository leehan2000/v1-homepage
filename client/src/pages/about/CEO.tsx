import { Helmet } from "react-helmet";

const CEO = () => {
  return (
    <>
      <Helmet>
        <title>대표 인사말 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신 대표의 인사말입니다. 고객의 신뢰와 함께 성장해온 브이원정보통신의 비전과 약속을 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">대표 인사말</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신이 걸어온 길과 나아갈 방향에 대한 대표이사의 메시지입니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="김철수 대표이사" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center md:text-left">김철수</h2>
                <p className="text-xl text-primary-600 mb-4 text-center md:text-left">브이원정보통신 대표이사</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 italic mb-4">
                    "연결의 가치를 창조하고, 신뢰로 함께 성장합니다."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                안녕하세요, 브이원정보통신 대표이사 김철수입니다.
              </p>
              
              <p className="mb-6">
                브이원정보통신 웹사이트를 방문해 주신 여러분께 진심으로 감사드립니다. 
                2006년 설립 이래, 브이원정보통신은 고객의 신뢰를 바탕으로 끊임없는 혁신과 
                도전을 통해 성장해 왔습니다. 변화하는 기술 환경 속에서도 "최고의 통신 솔루션 
                제공"이라는 변함없는 목표를 향해 나아가고 있습니다.
              </p>
              
              <p className="mb-6">
                현재 우리는 4차 산업혁명 시대를 맞아 더욱 빠르게 변화하는 환경 속에 살고 있습니다. 
                인공지능, 사물인터넷, 빅데이터, 클라우드 등 새로운 기술이 우리의 삶과 비즈니스를 
                혁신적으로 변화시키고 있습니다. 이러한 변화의 핵심에는 '연결'이 있습니다. 
                사람과 사람, 사람과 기기, 기기와 기기 간의 연결은 새로운 가치를 창출하고, 
                우리의 삶을 더욱 편리하고 풍요롭게 만들고 있습니다.
              </p>
              
              <p className="mb-6">
                브이원정보통신은 이러한 '연결'의 가치를 극대화하기 위해 끊임없이 노력하고 있습니다. 
                무선통신, 유선통신, 차량관제 및 IoT 분야에서 최고의 솔루션을 제공함으로써, 
                고객의 비즈니스가 디지털 시대에 성공적으로 적응하고 성장할 수 있도록 돕고 있습니다.
              </p>
              
              <p className="mb-6">
                우리는 단순한 통신 장비 공급업체가 아닌, 고객의 비즈니스 성장을 위한 
                진정한 파트너가 되고자 합니다. 고객의 니즈를 정확히 파악하고, 그에 맞는 
                최적의 솔루션을 제공하는 것이 우리의 사명입니다. 또한, 설치 후에도 지속적인 
                기술 지원과 유지보수 서비스를 통해 고객이 안심하고 비즈니스에 집중할 수 있도록 돕고 있습니다.
              </p>
              
              <p className="mb-6">
                브이원정보통신의 모든 구성원은 '전문성', '신뢰', '혁신'이라는 핵심 가치를 바탕으로, 
                고객에게 최상의 서비스를 제공하기 위해 최선을 다하고 있습니다. 끊임없는 학습과 
                연구를 통해 기술력을 향상시키고, 정직과 투명성을 기반으로 신뢰를 쌓아가며, 
                창의적 사고와 도전 정신으로 혁신적인 솔루션을 개발하고 있습니다.
              </p>
              
              <p className="mb-6">
                앞으로도 브이원정보통신은 고객의 신뢰에 보답하기 위해 더욱 노력할 것이며, 
                최고의 통신 솔루션 제공자로서 고객과 함께 성장해 나갈 것입니다. 
                여러분의 지속적인 관심과 성원을 부탁드립니다.
              </p>
              
              <p className="mb-6">
                감사합니다.
              </p>
              
              <div className="text-right mt-8">
                <p className="font-bold text-lg">브이원정보통신 대표이사</p>
                <p className="text-2xl font-bold mt-2">김 철 수</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CEO;
