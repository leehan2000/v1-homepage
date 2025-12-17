import { Helmet } from "react-helmet";

const CEO = () => {
  return (
    <>
      <Helmet>
        <title>대표 인사말 | 브이원정보통신</title>
        <meta
          name="description"
          content="브이원정보통신 대표 인사말입니다. 고객의 신뢰와 함께 성장해 온 브이원정보통신의 비전과 약속을 전합니다."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">대표 인사말</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* 왼쪽 텍스트 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6">
                “함께 듣고, 함께 도약하는 통신 회사가 되겠습니다.”
              </h2>

              <p className="mb-6">
                안녕하세요.  
                브이원정보통신 공동대표 이학열 · 정지훈입니다.
              </p>

              <p className="mb-6">
                브이원정보통신은 오랜 현장 경험과 고객의 신뢰를 바탕으로,  
                사람과 사람 사이를 잇는 연결을 만들어 왔습니다.
              </p>

              <p className="mb-6">
                브이원은 <strong>“잘 듣자”</strong>는 약속에서 시작되었습니다.  
                말보다 귀를 먼저 기울이고, 상대의 진심을 놓치지 않는 문화.  
                저희는 그런 회사를 만들고 싶었습니다.
              </p>

              <p className="mb-6">
                또한 각자의 전문성을 살려 무선·유선 분야를 분담해 운영하고 있습니다.  
                결정에는 책임을, 방향에는 고민을 함께 담습니다.
              </p>

              <p className="mb-6">
                그리고 지금, <strong>‘브이원(V1)’</strong>이라는 이름처럼  
                우리는 다시 한 번 도약의 순간에 서 있습니다.  
                더는 멈출 수 없는 이륙의 시점입니다. 이제 반드시 앞으로 나아가겠습니다.
              </p>

              <p className="mb-6">
                앞으로도 고객의 곁에서  
                신뢰를 바탕으로 연결을 이어 가는 브이원이 되겠습니다.
              </p>

              <div className="text-right mt-8">
                <p className="font-bold text-lg">브이원정보통신 공동대표</p>
                <p className="text-2xl font-bold mt-2">이학열 · 정지훈 드림</p>
              </div>
            </div>

            {/* 오른쪽 이미지 */}
            <div className="w-full">
              <img
                src="/images/ceo.jpg" // 실제 이미지 경로로 교체 필요
                alt="브이원 대표 이미지"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CEO;