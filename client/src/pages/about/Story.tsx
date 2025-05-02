import { Helmet } from "react-helmet";

const Story = () => {
  return (
    <>
      <Helmet>
        <title>시작 이야기 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 시작 이야기를 소개합니다. 고객의 신뢰를 바탕으로 한 통신 솔루션 전문기업으로 성장한 과정을 알아보세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">시작 이야기</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신이 걸어온 길과 시작을 소개합니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">열정의 시작</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 시작" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                2006년, 통신 인프라의 중요성이 점차 높아지던 시기에 브이원정보통신은 설립되었습니다. 
                단순한 통신장비 판매를 넘어 고객의 실질적인 필요를 충족시키는 맞춤형 솔루션을 제공하겠다는 
                비전으로 창업자 김철수는 첫 발을 내딛었습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                초기에는 소규모 사무실에서 5명의 직원으로 시작했지만, 고객 중심의 서비스와 
                전문성을 바탕으로 빠르게 성장하였습니다. 특히 중소기업의 네트워크 인프라 구축에 
                특화된 서비스를 제공하며 시장에서 입지를 다졌습니다.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">도전과 성장</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="브이원정보통신 성장" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="브이원정보통신 도전" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                2010년, 스마트폰의 대중화와 함께 무선 네트워크 수요가 급증하면서 브이원정보통신은 
                무선통신 분야로 사업 영역을 확장했습니다. 이는 큰 도전이었지만, 기술적 전문성을 
                바탕으로 성공적으로 영역을 넓혀갔습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                2014년에는 국내 주요 통신사들과 파트너십을 체결하며 대형 프로젝트를 수행할 수 
                있는 역량을 갖추게 되었습니다. 이 시기부터 제조업, 물류업, 유통업 등 다양한 
                산업 분야의 고객들과 함께하게 되었습니다.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">현재와 미래</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 미래" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                현재 브이원정보통신은 50명 이상의 전문 인력과 함께 전국적인 서비스 네트워크를 
                구축하고 있습니다. 특히 IoT 및 차량관제 시스템과 같은 최신 기술을 접목한 
                솔루션을 개발하며 디지털 혁신을 선도하고 있습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                브이원정보통신은 앞으로도 고객의 성공을 위한 든든한 파트너로서, 끊임없는 
                기술 혁신과 서비스 품질 향상을 추구할 것입니다. 변화하는 기술 환경 속에서도 
                고객의 니즈를 정확히 파악하고 최적의 솔루션을 제공하는 것이 우리의 변함없는 약속입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
