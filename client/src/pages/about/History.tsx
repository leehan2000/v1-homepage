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
              <div className="w-full p-4 bg-blue-50 rounded-lg shadow-lg border border-primary">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">브이원정보통신 연혁 (2003~2025)</h3>
                <div className="space-y-6">
                  {[
                    {
                      id: "01",
                      year: "2003~2018",
                      title: "통신업계 현장 실무 및 경영 경험 축적",
                      details: ["이학열 대표: 무선통신 · 유통 분야 20년", "정지훈 대표: 유선통신 · 기술영업 분야 15년"]
                    },
                    {
                      id: "02",
                      year: "2018.10",
                      title: "(주)브이원정보통신 법인 설립",
                      details: ["LG유플러스 유·무선 전문 대리점으로 시작"]
                    },
                    {
                      id: "03",
                      year: "2019.03",
                      title: "본격 사업 개시",
                      details: ["LG유플러스 소호 실적 부문 전국 1위 달성", "LG유플러스 전국 기업 부문 신인상 수상", "연매출 27억 원 달성"]
                    },
                    {
                      id: "04",
                      year: "2020.01",
                      title: "사옥 확장 이전",
                      details: ["월 관리매출 1억 원 달성 (유무선 통합 1.3억 원)", "월 관리매출 2억 원 달성", "LG유플러스 기업부문 성장 우수상", "LG유플러스 M2M 부문 우수상"]
                    },
                    {
                      id: "05",
                      year: "2022~2023",
                      title: "월 관리매출 3.5억 원 달성 / 성수동 사무실 재정비",
                      details: ["'잘 듣자' 동업 철학 확립", "무선/유선 분리 운영체계 도입"]
                    },
                    {
                      id: "06",
                      year: "2024",
                      title: "폐쇄몰 기반 통신 단말 유통사업 개시",
                      details: ["LG유플러스 차량관제 FMS 2.0 유통 시작", "온라인 마케팅 시스템 도입"]
                    },
                    {
                      id: "07",
                      year: "2025",
                      title: "브랜드 콘텐츠 런칭 / 홈페이지 리뉴얼",
                      details: ["'브이원의 이야기' 시리즈 런칭", "공식 홈페이지 리뉴얼", "브랜드 슬로건 '신뢰 위에서, 연결 너머로' 발표"]
                    }
                  ].map((item, index) => (
                    <div key={item.id} className="flex items-center border-l-4 border-primary bg-white p-4 rounded-md shadow-md">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="text-lg font-bold text-primary mr-3">{item.year}</div>
                          <div className="text-lg font-bold">{item.title}</div>
                        </div>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
