import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <>
      <Helmet>
        <title>비전 & 미션 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신이 추구하는 비전과 미션을 소개합니다. 신뢰를 연결하는 통신회사, 브이원의 가치와 목표를 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">우리는 왜 '브이원'이 되었는가</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            존재의 이유, 그리고 이름에 담긴 약속
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 존재 이유 섹션 */}
            <div className="mb-16">
              <div className="rounded-lg overflow-hidden shadow-xl mb-8 bg-white p-10 flex justify-center items-center">
                <img 
                  src="/images/vision/v1_logo.jpg" 
                  alt="브이원정보통신 로고" 
                  className="max-w-xs h-auto"
                />
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  통신이라는 말은 흔히 기술을 떠올리게 합니다.<br/>
                  하지만 우리가 이 일을 시작하며 느낀 건,<br/>
                  그 너머에 있는 본질이었습니다.<br/>
                  사람과 사람을 잇는 것.<br/>
                  이해와 신뢰를 전하는 일.
                </p>
                <p>
                  우리는 언제나 현장에서 답을 찾았습니다.<br/>
                  인터넷 하나, 전화선 하나를 연결하는 일조차<br/>
                  고객의 하루, 고객의 생업, 고객의 기대와 연결되어 있다는 사실을<br/>
                  우리는 수없이 마주했고,<br/>
                  그만큼 무겁게 받아들였습니다.
                </p>
                <p>
                  우리가 바라는 일은,<br/>
                  단순한 연결이 아닙니다.<br/>
                  신뢰를 매개로 한 지속적인 동행입니다.
                </p>
              </div>
            </div>
            
            {/* 브이원 이름 의미 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="text-4xl text-primary mr-3">✈️</span> 
                브이원(V1), 도약을 택한 이름
              </h2>
              <div className="rounded-lg overflow-hidden shadow-xl mb-8 bg-white p-10 flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/v1_airplane.jpg" 
                    alt="V1 로고 - 비행기 이륙 순간" 
                    className="max-w-xs h-auto mb-4"
                  />
                  <div className="text-2xl font-bold text-primary mt-4">
                    V1 - 비행기의 이륙 순간
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  우리가 '브이원'이라 불리는 이유는,<br/>
                  비행기의 이륙과 맞닿아 있습니다.
                </p>
                <p>
                  항공에서 V1은<br/>
                  비행기가 더 이상 멈출 수 없는 순간을 의미합니다.<br/>
                  속도를 붙여 달리던 활주로 위에서<br/>
                  "지금 이 순간, 반드시 떠야 한다"는 결심이 내려지는 시점.
                </p>
                <p>
                  비행기는 이제 더는 멈출 수 없습니다.<br/>
                  그대로, 반드시 날아야 합니다.
                </p>
                <p>
                  우리는 그 단어에 마음을 실었습니다.<br/>
                  망설임 없이 도약하겠다는 약속.<br/>
                  브이원이 누군가의 시작과 함께 이륙하는 존재가 되겠다는 다짐.
                </p>
              </div>
            </div>
            
            {/* 비전 섹션 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="text-4xl text-primary mr-3">🎯</span> 
                우리의 비전
              </h2>
              <div className="my-8 rounded-lg overflow-hidden shadow-xl bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 flex justify-center items-center bg-primary-50">
                    <img 
                      src="/images/v1_vision.jpg" 
                      alt="브이원정보통신 비전" 
                      className="max-w-[150px] h-auto"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 flex justify-center items-center">
                    <p className="text-3xl text-primary font-bold text-center">
                      "신뢰를 연결하는 통신회사, 브이원"
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  우리는 기술을 팔지 않습니다.<br/>
                  신뢰를 팔고, 연결을 돕습니다.<br/>
                  그 작은 연결이<br/>
                  누군가의 공간을 살리고,<br/>
                  누군가의 하루를 바꾸고,<br/>
                  어떤 이에게는 삶을 움직이게 한다는 걸<br/>
                  우리는 현장에서 매일 확인하고 있습니다.
                </p>
              </div>
            </div>
            
            {/* 미션 섹션 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="text-4xl text-primary mr-3">🛠</span> 
                우리의 미션
              </h2>
              <div className="my-8 rounded-lg overflow-hidden shadow-xl bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 flex justify-center items-center bg-primary-50">
                    <img 
                      src="/images/v1_mission.jpg" 
                      alt="브이원정보통신 미션" 
                      className="max-w-[150px] h-auto"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 flex justify-center items-center">
                    <p className="text-3xl text-primary font-bold text-center">
                      "작지만 강한, 현장 중심의 통신 파트너"
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">고객의 언어로 설명하고</h3>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">불편을 먼저 발견하며</h3>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">수익보다 신뢰를 먼저 선택하는 것</h3>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-gray-700">
                그것이 우리가 통신을 대하는 방식이고,<br/>
                브이원만의 약속입니다.
              </p>
            </div>
            
            {/* 태도 섹션 */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="text-4xl text-primary mr-3">🌱</span> 
                우리의 태도
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">묻기보다, 먼저 듣겠습니다</h3>
                  </div>
                </div>
                
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">빠르기보다, 정확하게 움직이겠습니다</h3>
                  </div>
                </div>
                
                <div className="flex items-center bg-primary-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">성과보다, 사람을 남기겠습니다</h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  브이원은 그렇게 오늘도<br/>
                  누군가의 출발선 옆에서,<br/>
                  작지만 단단한 신호가 되어 있습니다.
                </p>
                <p className="text-xl text-primary-700 font-semibold pt-6">
                  지금은 V1의 순간입니다.<br/>
                  이제 더는 멈출 수 없습니다.<br/>
                  함께 도약할 시간입니다.
                </p>
                <p className="text-2xl font-bold text-gray-900 pt-2">
                  브이원정보통신.<br/>
                  신뢰 위에서, 연결 너머로.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
