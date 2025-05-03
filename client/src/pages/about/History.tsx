import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

const History = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  const timelineEvents = [
    {
      year: "2003~2018",
      date: null,
      title: "통신업계 현장 실무 및 경영 경험 축적",
      description: "이학열 대표: 무선통신 · 유통 분야 20년, 정지훈 대표: 유선통신 · 기술영업 분야 15년",
      theme: "Foundation",
      highlight: true
    },
    {
      year: "2018",
      date: "10",
      title: "(주)브이원정보통신 법인 설립",
      description: "LG유플러스 유·무선 전문 대리점으로 시작",
      theme: "Takeoff",
      highlight: true
    },
    {
      year: "2019",
      date: "03",
      title: "본격 사업 개시",
      description: null,
      theme: "Growth"
    },
    {
      year: "2019",
      date: "07",
      title: "LG유플러스 소호 실적 부문 전국 1위 달성",
      description: null,
      theme: "Achievement"
    },
    {
      year: "2019",
      date: "11",
      title: "LG유플러스 전국 기업 부문 신인상 수상",
      description: null,
      theme: "Recognition"
    },
    {
      year: "2019",
      date: "12",
      title: "연매출 27억 원 달성",
      description: null,
      theme: "Growth"
    },
    {
      year: "2020",
      date: "01",
      title: "사옥 확장 이전",
      description: null,
      theme: "Expansion",
      highlight: true
    },
    {
      year: "2020",
      date: "03",
      title: "월 관리매출 1억 원 달성",
      description: "유무선 통합 1.3억 원",
      theme: "Growth"
    },
    {
      year: "2020",
      date: "08",
      title: "월 관리매출 2억 원 달성",
      description: null,
      theme: "Growth"
    },
    {
      year: "2020",
      date: "11",
      title: "LG유플러스 기업부문 성장 우수상 수상",
      description: null,
      theme: "Recognition"
    },
    {
      year: "2020",
      date: "12",
      title: "LG유플러스 M2M 부문 우수상 수상",
      description: null,
      theme: "Recognition"
    },
    {
      year: "2022",
      date: "08",
      title: "월 관리매출 3.5억 원 달성",
      description: null,
      theme: "Growth",
      highlight: true
    },
    {
      year: "2023",
      date: "03",
      title: "성수동 사무실 재정비",
      description: "'잘 듣자' 동업 철학 확립, 무선/유선 분리 운영체계 도입",
      theme: "Philosophy",
      highlight: true
    },
    {
      year: "2024",
      date: "03",
      title: "폐쇄몰 기반 통신 단말 유통사업 개시",
      description: null,
      theme: "Innovation"
    },
    {
      year: "2024",
      date: "06",
      title: "LG유플러스 차량관제 FMS 2.0 유통 시작",
      description: null,
      theme: "Innovation"
    },
    {
      year: "2024",
      date: "11",
      title: "온라인 마케팅 시스템 도입",
      description: "Carrd, 블로그, 랜딩페이지 기반",
      theme: "Digital"
    },
    {
      year: "2025",
      date: "04",
      title: "브랜드 콘텐츠 '브이원의 이야기' 시리즈 런칭",
      description: null,
      theme: "Branding"
    },
    {
      year: "2025",
      date: "05",
      title: "공식 홈페이지 리뉴얼 및 브랜드 슬로건 발표",
      description: "신뢰 위에서, 연결 너머로",
      theme: "Future",
      highlight: true
    }
  ];

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

  // 테마에 따른 색상 결정
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'Foundation': return 'bg-blue-900';
      case 'Takeoff': return 'bg-blue-700';
      case 'Growth': return 'bg-blue-600';
      case 'Achievement': return 'bg-blue-500';
      case 'Recognition': return 'bg-blue-400';
      case 'Expansion': return 'bg-indigo-600';
      case 'Philosophy': return 'bg-indigo-500';
      case 'Innovation': return 'bg-cyan-600';
      case 'Digital': return 'bg-cyan-700';
      case 'Branding': return 'bg-purple-600';
      case 'Future': return 'bg-primary';
      default: return 'bg-blue-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>연혁 (History) | 브이원정보통신</title>
        <meta name="description" content="2003년부터 현재까지 브이원정보통신의 성장과 발전 과정을 확인하세요. 끊임없는 혁신과 도전으로 통신 솔루션 분야를 선도해 온 브이원정보통신의 발자취입니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">연혁 <span className="text-3xl md:text-4xl opacity-60">(History)</span></h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 tracking-wide">
            2003년부터 이어온 브이원정보통신의 발자취와<br/>
            <span className="text-primary font-semibold">"이륙 직전의 순간"</span>을 향한 도전의 여정
          </p>
        </div>
      </div>
      
      {/* 활주로 메타포 - 이륙 직전의 순간 */}
      <div className="py-8 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="relative h-14 timeline-runway flex items-center justify-center mb-16">
            <div className="absolute right-0 transform -translate-y-1/2 timeline-plane">
              <Plane className="h-12 w-12 text-primary rotate-45" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 수직 타임라인 */}
            <div className="relative">
              {/* 중앙 선 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-100 via-blue-400 to-primary"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`mb-12 md:mb-20 relative timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                  ref={el => itemRefs.current[index] = el}
                  data-id={index}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* 모바일 뷰 */}
                  <div className="md:hidden">
                    <Card className={`${event.highlight ? 'shadow-md hover:shadow-lg border-l-4 border-primary' : 'hover:shadow-md'} transition-all duration-500`}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`${getThemeColor(event.theme)} text-white font-medium py-1 px-3 rounded-r-md rounded-tl-md timeline-year ${visibleItems.includes(index) ? 'visible' : ''}`}>
                            {event.date ? `${event.year}.${event.date}` : event.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                        {event.description && (
                          <p className="text-gray-600">{event.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* 데스크톱 뷰 */}
                  <div className="hidden md:block">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${index % 2 === 1 && 'order-1'}`}>
                        <Card 
                          className={`
                            ${event.highlight ? 'shadow-md hover:shadow-lg border-l-4 border-primary' : 'hover:shadow-md'}
                            transition-all duration-500
                          `}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <div className={`${getThemeColor(event.theme)} text-white font-medium py-1 px-3 rounded-r-md rounded-tl-md timeline-year ${visibleItems.includes(index) ? 'visible' : ''}`}>
                                {event.date ? `${event.year}.${event.date}` : event.year}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                            {event.description && (
                              <p className="text-gray-600">{event.description}</p>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                        <div className={`h-5 w-5 rounded-full ${getThemeColor(event.theme)} border-4 border-white shadow-md timeline-dot ${visibleItems.includes(index) ? 'visible' : ''}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center px-4 py-10 bg-gradient-to-br from-blue-50 to-transparent rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                신뢰 위에서, 연결 너머로
              </h3>
              <p className="text-lg text-gray-700 mt-4 tracking-wide leading-relaxed">
                브이원정보통신은 <span className="font-semibold">신뢰</span>와 <span className="font-semibold">사람</span>, <span className="font-semibold">연결</span>을 바탕으로<br className="hidden md:block"/>
                더 높은 <span className="font-semibold">도약</span>을 향해 나아가겠습니다.
              </p>
              <div className="mt-8 inline-block">
                <div className="relative overflow-hidden group">
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent group-hover:animate-pulse"></div>
                  <Plane className="h-8 w-8 text-primary mx-auto mt-4 transform rotate-[35deg] group-hover:translate-y-[-4px] transition-transform duration-500"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
