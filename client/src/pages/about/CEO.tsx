import { Helmet } from "react-helmet";

const CEO = () => {
  return (
    <>
      <Helmet>
        <title>대표 인사말 | 브이원정보통신</title>
        <meta
          name="description"
          content="브이원정보통신 대표의 인사말입니다. 고객의 신뢰와 함께 성장해온 브이원정보통신의 비전과 약속을 확인하세요."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">대표 인사말</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* 왼쪽 텍스트 */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6">
                “함께 듣고, 함께 도약하는 통신회사가 되겠습니다.”
              </h2>

              <p className="mb-6">
                안녕하세요.  
                브이원정보통신 공동대표 이학열, 정지훈입니다.
              </p>

              <p className="mb-6">
                저희는 오랜 현장 경험과 고객에 대한 신뢰를 바탕으로,  
                사람과 사람 사이의 연결을 만들어가는 회사를 운영하고 있습니다.
              </p>

              <p className="mb-6">
                브이원은 <strong>“잘 듣자”</strong>는 약속에서 시작되었습니다.  
                말을 조심하기보다는, 듣는 사람이 진심을 헤아리는 문화.  
                우리는 그런 회사를 만들고 싶었습니다.
              </p>

              <p className="mb-6">
                또한 각자의 전문성을 살려 무선과 유선 분야를 나누어 운영하고 있습니다.  
                최종 결정은 스스로 책임지고, 방향은 함께 고민합니다.
              </p>

              <p className="mb-6">
                그리고 지금, <strong>‘브이원(V1)’</strong>이라는 이름처럼  
                우리는 도약의 순간에 서 있습니다.  
                더는 멈출 수 없는 이륙의 시점, 이제는 반드시 날아올라야 할 때입니다.
              </p>

              <p className="mb-6">
                앞으로도 고객의 곁에서  
                신뢰를 기반으로 연결을 이어가는 브이원이 되겠습니다.
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