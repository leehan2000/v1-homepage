import { Helmet } from "react-helmet";

const Partnership = () => {
  return (
    <>
      <Helmet>
        <title>동업 이야기 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 동업 이야기를 소개합니다. 함께 성장하고 발전하며 미래를 만들어가는 브이원정보통신의 파트너십 이야기를 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">동업 이야기</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            동업이란, 사람의 그릇에 대한 이야기입니다
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">– 브이원의 동업 철학 –</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 파트너십" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                동업은 기술의 문제가 아닙니다.<br/>
                사람의 그릇에 관한 문제라고 우리는 믿습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                누가 더 잘나고 못나고는 중요하지 않았습니다.<br/>
                중요한 건,<br/>
                같이 나누고, 함께 결정하고,<br/>
                끝까지 함께 책임질 수 있는 그릇이 되었는가였습니다.<br/>
                그 질문에 “그렇다”고 말할 수 있다면,<br/>
                동업은 충분히 가능합니다.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">명확한 역할 분담</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 역할 분담" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                또 하나,<br/>
                우리는 전문 분야를 명확히 나누는 구조를 만들었습니다.<br/>
                나는 무선을 책임지고,<br/>
                동료는 유선을 맼습니다.<br/>
                각자의 분야에서 최종 결정권을 존중하고,<br/>
                서로의 판단을 믿습니다.<br/>
                이 원칙은 책임과 권한의 균형,<br/>
                그리고 불필요한 충돌을 줄이는 힘이 되어주었습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                각 분야의 전문가들이 모여 만들어낸 시너지는 브이원정보통신이 빠르게 성장할 수 있었던 
                원동력이었습니다. 서로 다른 분야의 지식을 공유하고 융합하는 문화는 독창적인 
                통합 솔루션을 개발하는 데 큰 도움이 되었습니다.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">단순한 약속</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 파트너십 가치" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                브이원정보통신은 내부적인 파트너십뿐만 아니라 고객과의 관계에서도 파트너십의 가치를 
                중요하게 생각합니다. 일회성 서비스 제공자가 아닌, 고객의 비즈니스를 함께 고민하고 
                성장을 지원하는 진정한 파트너가 되기 위해 노력합니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                이러한 파트너십 문화는 국내 주요 통신사 및 IT 기업들과의 전략적 제휴로도 이어졌습니다. 
                브이원정보통신은 다양한 파트너들과 협력하여 더 혁신적인 솔루션을 개발하고, 
                함께 성장하는 생태계를 구축해 나가고 있습니다.
              </p>
              <p className="text-lg text-gray-700">
                "혼자 가면 빨리 갈 수 있지만, 함께 가면 더 멀리 갈 수 있다"는 말처럼, 
                브이원정보통신은 앞으로도 다양한 파트너들과 함께 더 멀리, 더 높이 성장해 나갈 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
