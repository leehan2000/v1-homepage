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
            우리의 시작이야기 입니다.
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">함께였기에, 시작할 수 있었습니다</h3>
              <p className="text-lg text-gray-700 mb-6">
                어느 날 문득,<br/>
                스스로 결정하고, 스스로 책임지는 회사를 만들고 싶다는 마음이 들었습니다.<br/>
                그 시작점엔 열망이 있었지만,<br/>
                곧 깨달았죠.<br/>
                사람이 전부라는 걸.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                20년 동안 통신업계에 몸담아 온 한사람,<br/>
                그리고 15년을 함께 걸어온 또 한 사람.<br/>
                우리는 오랜 시간 쌓은 경험보다<br/>
                서로에 대한 신뢰를 바탕으로<br/>
                동업이라는 길을 택했습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                사람들은 말했습니다.<br/>
                "너희라면 잘할 거야."<br/>
                그리고 덧붙였죠.<br/>
                "근데… 동업은 쉽지 않아."
              </p>
              <p className="text-lg text-gray-700 mb-6">
                맞습니다.<br/>
                쉬운 길은 아니었지만,<br/>
                그만큼 우리는 더 자주 대화했고,<br/>
                더 깊이 믿었습니다.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">성수동에서의 시작</h2>
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
                우리가 처음 자리를 잡은 곳은 성수동이었습니다.<br/>
                지금은 수많은 브랜드가 모이는 핫플레이스지만,<br/>
                그 시절엔 아직 덜 여문 가능성으로 가득한 동네였죠.<br/>
                조용하지만 강한 기운,<br/>
                무언가 시작되기 직전의 숨 고르기 같은 느낌.<br/>
                어쩌면, 그때의 우리와 닮아 있었는지도 모르겠습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                처음에는 무엇이든 맡았습니다.<br/>
                이익이 나지 않아도, 일이 작아도,<br/>
                우리에게 맡겨진 일이라면<br/>
                끝까지 해내는 것,<br/>
                그게 우리의 방식이었습니다.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">우리의 시작</h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="브이원정보통신 미래" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                브이원은 그렇게 시작됐습니다.<br/>
                거창하지 않았지만,<br/>
                진심이 있었고, 책임이 있었습니다.<br/>
                그리고 가장 중요한, 사람과 사람 사이의 신뢰가 있었습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                지금의 우리가,<br/>
                그때의 우리에게 한마디를 건넨다면 이렇게 말할 겁니다.<br/>
                <br/>
                <span className="font-semibold text-xl text-primary">"스스로를  믿고 힘차게 내딪자."</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
