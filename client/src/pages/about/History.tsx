import { Helmet } from "react-helmet";

const History = () => {
  return (
    <>
      <Helmet>
        <title>연혁 (History) | 브이원정보통신</title>
        <meta name="description" content="2003년부터 현재까지 브이원정보통신의 성장과 발전 과정을 확인하세요. 끊임없는 혁신과 도전으로 통신 솔루션 분야를 선도해 온 브이원정보통신의 발자취입니다." />
      </Helmet>
      
      <div className="bg-[#F7F7F7] border-b-4 border-[#E2231A] py-16 relative">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="text-[#E2231A]">회사</span> 연혁
              <div className="h-1 w-full bg-[#E2231A] mt-2"></div>
            </h1>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto mt-5 leading-relaxed">
              2018년부터 이어온 브이원정보통신의 발자취와 성장 과정을 소개합니다.<br/>
              <span className="text-[#E2231A] font-semibold">계속해서 새로운 도전과 혁신</span>을 이어가고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 이미지로 표시 */}
            <div className="relative">
              <div className="w-full p-5 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#E2231A] mb-6 text-center">브이원정보통신 회사 연혁 (2002~2025)</h3>
                <div className="space-y-8">
                  {[
                    {
                      id: "01",
                      year: "2002~2018",
                      title: "통신업계 현장 실무 및 경영 경험 축적",
                      details: ["이학열 대표: 무선통신 · 유통 분야 20년", "정지훈 대표: 유선통신 · 기술 영업 분야 15년"]
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
                    <div key={item.id} className="flex items-start border-b border-gray-200 pb-8">
                      <div className="w-16 h-16 rounded-full bg-[#E2231A] flex-shrink-0 flex items-center justify-center text-white font-bold mr-6">
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col">
                          <div className="text-xl font-bold text-[#1A1A1A] mb-1">{item.title}</div>
                          <div className="text-lg font-bold text-[#E2231A] mb-3">{item.year}</div>
                        </div>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-[#555555]">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block px-12 py-8 border-t-4 border-[#E2231A] bg-[#F7F7F7] shadow-md">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">브이원정보통신은 계속해서 여러분과 함께 발전해 나가겠습니다</h3>
                <p className="text-xl font-semibold text-[#E2231A]">신뢰 위에서, 연결 너머로</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
