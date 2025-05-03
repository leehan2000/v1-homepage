import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <>
      <Helmet>
        <title>비전 & 미션 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신이 추구하는 비전과 미션을 소개합니다. 신뢰를 연결하는 통신회사, 브이원의 가치와 목표를 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 transform -rotate-12">
            <span className="text-[200px] font-black text-primary">V1</span>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-1 bg-primary mb-4"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 relative">
            <span className="relative inline-block">
              우리는 왜 '브이원'이 되었는가
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-center max-w-3xl mx-auto text-gray-700 font-light">
            <span className="relative inline-block px-2">
              존재의 이유, 그리고 이름에 담긴 약속
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-200"></span>
            </span>
          </p>
          <div className="flex justify-center mt-10">
            <div className="w-2 h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 존재 이유 섹션 */}
            <div className="mb-16">
              <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                <div className="h-64 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 flex justify-center items-center">
                  <span className="text-3xl font-bold text-white px-6 py-3 rounded-lg bg-primary-900 bg-opacity-40">통신의 본질</span>
                </div>
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
              <div className="mb-8 relative">
                <div className="absolute -left-20 opacity-10 transform -rotate-12">
                  <span className="text-9xl font-black text-primary">V1</span>
                </div>
                <div className="text-right mb-2">
                  <div className="inline-block w-24 h-0.5 bg-primary mb-1"></div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <span className="text-4xl text-primary mr-3">✈️</span> 
                    <span className="relative">
                      브이원(V1), 도약을 택한 이름
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                    </span>
                  </div>
                </h2>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                <div className="h-64 bg-gradient-to-br from-sky-400 via-blue-500 to-primary-600 flex justify-center items-center">
                  <span className="text-3xl font-bold text-white px-6 py-3 rounded-lg bg-primary-900 bg-opacity-40">V1 - 비행기의 이륙 순간</span>
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
              <div className="mb-8 relative overflow-hidden">
                <div className="absolute -right-10 top-0 opacity-5">
                  <span className="text-9xl font-black text-primary">비전</span>
                </div>
                <div className="flex justify-start mb-2">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 flex items-center relative z-10">
                  <span className="text-4xl text-primary mr-3">🎯</span> 
                  <span className="relative inline-block pb-1">
                    우리의 비전
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-300"></span>
                  </span>
                </h2>
                <div className="ml-12 pl-2 border-l-2 border-primary-100 text-sm text-primary-600 italic">
                  신뢰를 연결하는 통신회사의 꾸준한 여정
                </div>
              </div>
              <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-700 flex justify-center items-center">
                  <p className="text-3xl text-white font-bold text-center px-6 py-3 rounded-lg bg-primary-900 bg-opacity-40">
                    "신뢰를 연결하는 통신회사, 브이원"
                  </p>
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
              <div className="mb-8 relative overflow-hidden">
                <div className="absolute -left-16 top-0 opacity-5">
                  <span className="text-9xl font-black text-primary">미션</span>
                </div>
                <div className="flex justify-end mb-2">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-primary to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <span className="text-4xl text-primary mr-3">🛠</span> 
                    <span className="relative inline-block pb-1">
                      우리의 미션
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-300"></span>
                    </span>
                  </div>
                </h2>
                <div className="ml-12 pl-2 border-l-2 border-primary-100 text-sm text-primary-600 italic">
                  작지만 강한 현장 중심의 통신 파트너
                </div>
              </div>
              <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 flex justify-center items-center">
                  <p className="text-3xl text-white font-bold text-center px-6 py-3 rounded-lg bg-primary-900 bg-opacity-40">
                    "작지만 강한, 현장 중심의 통신 파트너"
                  </p>
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
              <div className="mb-8 relative overflow-hidden">
                <div className="absolute -right-10 opacity-5">
                  <span className="text-9xl font-black text-primary">태도</span>
                </div>
                <div className="flex justify-start mb-2">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900 flex items-center relative z-10">
                  <span className="text-4xl text-primary mr-3">🌱</span> 
                  <span className="relative inline-block pb-1">
                    우리의 태도
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-300"></span>
                  </span>
                </h2>
                <div className="ml-12 pl-2 border-l-2 border-primary-100 text-sm text-primary-600 italic">
                  마음가짐을 새기는 세 가지 약속
                </div>
              </div>
              
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
                <div className="relative mt-10 mb-4">
                  <div className="absolute -right-4 -top-8 opacity-5">
                    <span className="text-9xl font-black text-primary">V1</span>
                  </div>
                  <p className="text-xl text-primary-700 font-semibold pt-6 relative z-10">
                    <span className="relative inline-block">
                      지금은 <span className="font-bold">V1</span>의 순간입니다.<br/>
                      이제 더는 멈출 수 없습니다.<br/>
                      함께 도약할 시간입니다.
                    </span>
                  </p>
                </div>
                <div className="flex justify-center my-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900 pt-2 text-center">
                  브이원정보통신.<br/>
                  <span className="text-primary-600">신뢰 위에서, 연결 너머로.</span>
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
