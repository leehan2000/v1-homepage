import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  // 연혁 데이터
  const timelineEvents = [
    {
      id: "01",
      year: "2003~2018",
      date: "",
      title: "통신업계 현장 실무 및 경영 경험 축적",
      details: ["이학열 대표: 무선통신 · 유통 분야 20년", "정지훈 대표: 유선통신 · 기술영업 분야 15년"]
    },
    {
      id: "02",
      year: "2018",
      date: "10",
      title: "(주)브이원정보통신 법인 설립",
      details: ["LG유플러스 유·무선 전문 대리점으로 시작"]
    },
    {
      id: "03",
      year: "2019",
      date: "03",
      title: "본격 사업 개시",
      details: ["LG유플러스 소호 실적 부문 전국 1위 달성", "LG유플러스 전국 기업 부문 신인상 수상", "연매출 27억 원 달성"]
    },
    {
      id: "04",
      year: "2020",
      date: "01",
      title: "사옥 확장 이전",
      details: ["월 관리매출 1억 원 달성 (유무선 통합 1.3억 원)", "월 관리매출 2억 원 달성", "LG유플러스 기업부문 성장 우수상", "LG유플러스 M2M 부문 우수상"]
    },
    {
      id: "05",
      year: "2022~2023",
      date: "",
      title: "월 관리매출 3.5억 원 달성 / 성수동 사무실 재정비",
      details: ["'잘 듣자' 동업 철학 확립", "무선/유선 분리 운영체계 도입"]
    },
    {
      id: "06",
      year: "2024",
      date: "",
      title: "폐쇄몰 기반 통신 단말 유통사업 개시",
      details: ["LG유플러스 차량관제 FMS 2.0 유통 시작", "온라인 마케팅 시스템 도입"]
    },
    {
      id: "07",
      year: "2025",
      date: "",
      title: "브랜드 콘텐츠 런칭 / 홈페이지 리뉴얼",
      details: ["'브이원의 이야기' 시리즈 런칭", "공식 홈페이지 리뉴얼", "브랜드 슬로건 '신뢰 위에서, 연결 너머로' 발표"]
    }
  ];

  // 스크롤 애니메이션 적용
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setVisibleItems(prev => [...prev, id]);
        }
      });
    }, { threshold: 0.2 });

    itemRefs.current.forEach((ref, index) => {
      if (ref) observer.current?.observe(ref);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>연혁 (History) | 브이원정보통신</title>
        <meta name="description" content="2003년부터 현재까지 브이원정보통신의 성장과 발전 과정을 확인하세요. 끊임없는 혁신과 도전으로 통신 솔루션 분야를 선도해 온 브이원정보통신의 발자취입니다." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-blue-50 via-blue-100/70 to-blue-50/30 py-16 relative">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="text-primary">브이원정보통신</span> 연혁
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              2003년부터 이어온 얼짬마나 많은 발자취들이 브이원의 이륙을 준비해왔는지,<br/>
              그 경험과 노하우를 함께 확인해보세요
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 relative bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            {/* 원형 타임라인 - 모바일과 데스크톱 모두 동일하게 적용 */}
            <div className="relative py-8">
              {/* 중앙 선 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`mb-20 relative timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                  ref={el => itemRefs.current[index] = el}
                  data-id={index}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    {/* 원형 아이콘 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 border-primary shadow-lg">
                        <span className="text-xl font-bold text-primary">{event.id}</span>
                      </div>
                    </div>
                    
                    {/* 왼쪽 텍스트 - 날짜 */}
                    <div className="w-1/2 pr-12 text-right self-center">
                      <div className="text-2xl font-bold text-primary mb-1">{event.year}</div>
                      {event.date && <div className="text-lg text-gray-600 font-medium">{event.date}</div>}
                    </div>
                    
                    {/* 오른쪽 텍스트 - 콘텐츠 */}
                    <div className="w-1/2 pl-12 self-center">
                      {index % 2 === 0 ? (
                        // 짝수 인덱스 - 오른쪽 색상 있는 박스
                        <Card className="overflow-hidden border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="bg-primary text-white p-3">
                            <h3 className="font-bold text-lg">{event.title}</h3>
                          </div>
                          <CardContent className="p-4 bg-white">
                            {event.details && event.details.length > 0 && (
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                {event.details.map((detail, i) => (
                                  <li key={i}>{detail}</li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ) : (
                        // 홀수 인덱스 - 노말색 테두리 박스
                        <div className="text-gray-800 -ml-1">
                          <h3 className="font-bold text-lg text-primary mb-2">{event.title}</h3>
                          {event.details && event.details.length > 0 && (
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {event.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
