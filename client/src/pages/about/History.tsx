import { Helmet } from "react-helmet";

const History = () => {
  return (
    <>
      <Helmet>
        <title>연혁 (History) | 브이원정보통신</title>
        <meta name="description" content="2003년부터 현재까지 브이원정보통신의 성장과 발전 과정을 확인하세요. 끊임없는 혁신과 도전으로 통신 솔루션 분야를 선도해 온 브이원정보통신의 발자취입니다." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-blue-50 via-blue-100/70 to-blue-50/30 py-16 relative">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="text-primary">브이원정보통신</span> 연혁
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              2003년부터 이어온 브이원정보통신의 발자취와<br/>
              <span className="text-primary font-semibold relative inline-block">"이륙 직전의 순간"</span>을 향한 도전의 여정
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 이미지로 표시 */}
            <div className="relative">
              <img 
                src="/images/history-timeline.jpg" 
                alt="브이원정보통신 연혁 타임라인 (2003-2025)" 
                className="w-full rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block px-10 py-6 bg-primary/10 rounded-xl border border-primary/30">
                <h3 className="text-xl font-bold text-primary mb-2">브이원정보통신은 계속해서 여러분과 함께 발전해 나가겠습니다</h3>
                <p className="text-gray-700">신뢰 위에서, 연결 너머로</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
