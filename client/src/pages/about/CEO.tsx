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

        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 flex flex-col items-center gap-8">
              <div className="w-full max-w-3xl mx-auto relative">
                <div className="absolute -right-4 -top-8 opacity-5 hidden md:block">
                  <span className="text-9xl font-black text-primary">V1</span>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6 text-primary-600 relative inline-block">
                    "함께 듣고, 함께 도약하는 통신회사가 되겠습니다."
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                안녕하세요.<br/>
                브이원정보통신 공동대표 이학열, 정지훈입니다.
              </p>
              
              <p className="mb-6">
                브이원은 사람과 신뢰를 중심에 두는 통신회사입니다.<br/>
                작은 시작이었지만, 현장을 누구보다 잘 알고,<br/>
                고객의 언어로 이야기하는 팀을 만들고 싶었습니다.
              </p>
              
              <p className="mb-6">
                우리는 동업의 어려움도 진지하게 고민했습니다.<br/>
                그 끝에서 발견한 단 하나의 원칙은<br/>
                바로 <span className="font-bold">"잘 듣자"</span>였습니다.<br/>
                말을 조심하기보다,<br/>
                듣는 사람이 진심을 헤아리는 회사.<br/>
                그런 문화를 우리는 선택했습니다.
              </p>
              
              <p className="mb-6">
                또한 각자의 전문 분야(무선/유선)를 존중하고,<br/>
                최종 결정은 스스로 책임지는 구조를 만들었습니다.<br/>
                서로를 믿고, 각자의 방식대로 최선을 다하는 것이<br/>
                브이원이 꾸준히 앞으로 나아갈 수 있는 이유입니다.
              </p>
              
              <p className="mb-6">
                '브이원(V1)'이라는 이름처럼,<br/>
                더는 멈출 수 없는 이륙의 순간,<br/>
                우리 고객의 도약 곁에 늘 함께하겠습니다.
              </p>
              
              <p className="mb-6">
                감사합니다.
              </p>
              
              <div className="text-right mt-8">
                <p className="font-bold text-lg">브이원정보통신 공동대표</p>
                <p className="text-2xl font-bold mt-2">이학열 · 정지훈 드림</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CEO;
