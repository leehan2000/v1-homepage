import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";
import networkSolutionImage from "../../assets/logo.png"; // 임시로 로고 이미지를 사용합니다

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative bg-black min-h-[600px] flex items-center border-b-4 border-lgred overflow-hidden"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-black/30 to-lgred/40 z-10"></div>
        <div className="absolute inset-0 mix-blend-color-dodge bg-gradient-to-b from-blue-500/10 to-transparent z-5"></div>
        <img 
          src="/images/v1_office.jpg" 
          alt="V1 사무실 전경" 
          className="w-full h-full object-cover contrast-125 saturate-[1.2] brightness-110"
        />
      </div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="animate-fadeIn w-full md:max-w-lg lg:max-w-xl md:mt-10 md:ml-8 lg:ml-16">
            <div className="bg-gradient-to-br from-gray-900/70 to-black/60 backdrop-blur-sm p-8 rounded-lg border-l-4 border-lgred shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-lgred">신뢰</span>와 <span className="text-lgred">전문성</span>을 <br />바탕으로 하는<br />
                통신 솔루션 전문기업
                <div className="h-1 w-1/2 bg-lgred mt-3"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                브이원정보통신은 고객의 환경에 최적화된 맞춤형 통신 인프라 구축을 통해
                업무 효율성과 안정성을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-lgred hover:bg-lgred_dark text-white font-bold rounded-md px-6 py-3 transition-all duration-300 shadow-lg shadow-lgred/30"
                  onClick={() => scrollToElement("services")}
                >
                  서비스 알아보기
                </Button>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-lgred text-white bg-black/50 hover:bg-lgred/20 font-bold rounded-md px-6 py-3 transition-all duration-300 shadow-lg"
                  >
                    상담 문의하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 콘텐츠 영역 - 삭제됨 */}
        </div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-lgred/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
      
      {/* 물결형 하단 처리 - 기본 검은색 */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-20" style={{ overflow: 'hidden', transform: 'translateY(1px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animationDuration: '12s', animationIterationCount: 'infinite', transform: 'scale(1.2)', width: '300%', animation: 'wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite' }}
        >
          <path 
            fill="#1A1A1A" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 물결 레이어 1 - 열정적인 빨간색 */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-20" style={{ overflow: 'hidden', transform: 'translateY(2px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate', transform: 'scale(1.1)' }}
        >
          <path 
            fill="rgba(226, 35, 26, 0.2)" 
            d="M0,160L20,180C40,200,80,240,120,260C160,280,200,280,240,250C280,220,320,160,360,140C400,120,440,140,480,160C520,180,560,200,600,190C640,180,680,140,720,120C760,100,800,100,840,120C880,140,920,180,960,200C1000,220,1040,220,1080,200C1120,180,1160,140,1200,130C1240,120,1280,140,1320,150C1360,160,1400,160,1420,160L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 물결 레이어 2 - 파란색 */}
      <div className="absolute bottom-0 left-0 w-full h-28 z-20" style={{ overflow: 'hidden', transform: 'translateY(3px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite', transform: 'scale(1.3)' }}
        >
          <path 
            fill="rgba(33, 150, 243, 0.15)" 
            d="M0,240L15,250C30,260,60,280,90,270C120,260,150,220,180,200C210,180,240,180,270,200C300,220,330,260,360,260C390,260,420,220,450,210C480,200,510,220,540,230C570,240,600,240,630,220C660,200,690,160,720,160C750,160,780,200,810,220C840,240,870,240,900,220C930,200,960,160,990,170C1020,180,1050,240,1080,250C1110,260,1140,220,1170,200C1200,180,1230,180,1260,200C1290,220,1320,260,1350,270C1380,280,1410,260,1425,250L1440,240L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 물결 레이어 3 - 반짝임 효과 */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-20" style={{ overflow: 'hidden', transform: 'translateY(4px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite reverse' }}
        >
          <path 
            fill="rgba(255, 255, 255, 0.1)" 
            d="M0,180L12,175C24,170,48,160,72,150C96,140,120,130,144,125C168,120,192,120,216,130C240,140,264,160,288,155C312,150,336,120,360,115C384,110,408,130,432,140C456,150,480,150,504,160C528,170,552,190,576,185C600,180,624,150,648,145C672,140,696,160,720,155C744,150,768,120,792,120C816,120,840,150,864,175C888,200,912,220,936,210C960,200,984,160,1008,145C1032,130,1056,140,1080,145C1104,150,1128,150,1152,155C1176,160,1200,170,1224,160C1248,150,1272,120,1296,125C1320,130,1344,170,1368,180C1392,190,1416,170,1428,160L1440,150L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* 물결 레이어 4 - 초록색 */}
      <div className="absolute bottom-0 left-0 w-full h-22 z-20" style={{ overflow: 'hidden', transform: 'translateY(5px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 17s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite', transform: 'scale(1.15)' }}
        >
          <path 
            fill="rgba(5, 150, 105, 0.1)" 
            d="M0,220L18,215C36,210,72,200,108,185C144,170,180,150,216,140C252,130,288,130,324,145C360,160,396,190,432,200C468,210,504,200,540,180C576,160,612,130,648,115C684,100,720,100,756,115C792,130,828,160,864,170C900,180,936,170,972,150C1008,130,1044,100,1080,95C1116,90,1152,110,1188,130C1224,150,1260,170,1296,175C1332,180,1368,170,1404,165L1440,160L1440,320L1422,320C1404,320,1368,320,1332,320C1296,320,1260,320,1224,320C1188,320,1152,320,1116,320C1080,320,1044,320,1008,320C972,320,936,320,900,320C864,320,828,320,792,320C756,320,720,320,684,320C648,320,612,320,576,320C540,320,504,320,468,320C432,320,396,320,360,320C324,320,288,320,252,320C216,320,180,320,144,320C108,320,72,320,36,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* 물결 레이어 5 - 보라색 */}
      <div className="absolute bottom-0 left-0 w-full h-18 z-20" style={{ overflow: 'hidden', transform: 'translateY(6px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 22s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite reverse', transform: 'scale(1.25)' }}
        >
          <path 
            fill="rgba(124, 58, 237, 0.08)" 
            d="M0,100L15,110C30,120,60,140,90,150C120,160,150,160,180,145C210,130,240,100,270,95C300,90,330,110,360,120C390,130,420,130,450,120C480,110,510,90,540,85C570,80,600,90,630,105C660,120,690,140,720,135C750,130,780,100,810,85C840,70,870,70,900,85C930,100,960,130,990,145C1020,160,1050,160,1080,145C1110,130,1140,100,1170,95C1200,90,1230,110,1260,120C1290,130,1320,130,1350,120C1380,110,1410,90,1425,80L1440,70L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* 물결 레이어 6 - 타퀘이즈 */}
      <div className="absolute bottom-0 left-0 w-full h-16 z-20" style={{ overflow: 'hidden', transform: 'translateY(7px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '300%', animation: 'wave 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite', transform: 'scale(1.2)' }}
        >
          <path 
            fill="rgba(14, 165, 233, 0.07)" 
            d="M0,230L10,220C20,210,40,190,60,180C80,170,100,170,120,180C140,190,160,210,180,220C200,230,220,230,240,215C260,200,280,170,300,160C320,150,340,160,360,180C380,200,400,230,420,235C440,240,460,220,480,200C500,180,520,160,540,155C560,150,580,160,600,175C620,190,640,210,660,215C680,220,700,210,720,190C740,170,760,140,780,130C800,120,820,130,840,150C860,170,880,200,900,210C920,220,940,210,960,190C980,170,1000,140,1020,130C1040,120,1060,130,1080,150C1100,170,1120,200,1140,210C1160,220,1180,210,1200,190C1220,170,1240,140,1260,130C1280,120,1300,130,1320,145C1340,160,1360,180,1380,185C1400,190,1420,180,1430,175L1440,170L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* 장식 선 요소 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lgred/50 to-transparent z-10"></div>
      
      {/* 마스코트 슬로건 */}
      <div className="absolute bottom-24 left-0 w-full text-center text-white/90 text-sm font-light z-30">
        <span className="tracking-widest px-6 py-2 rounded-full bg-gradient-to-r from-blue-800/60 to-lgred/40 backdrop-blur-md border border-white/20 shadow-lg animate-pulse">신뢰 위에서, 연결 너머로</span>
      </div>
      
      {/* 이동하는 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
    </section>
  );
};

export default HeroSection;
