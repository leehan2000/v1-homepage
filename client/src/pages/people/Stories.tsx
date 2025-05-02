import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

interface Story {
  id: number;
  title: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
  date: string;
  content: string;
  image: string;
}

const Stories = () => {
  const stories: Story[] = [
    {
      id: 1,
      title: "물류 회사의 차량관제 시스템 구축 프로젝트",
      author: {
        name: "최미라",
        position: "차량관제솔루션 팀장",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      },
      date: "2024년 2월",
      content: "지난 달, 우리 팀은 국내 대형 물류 회사를 위한 차량관제 시스템을 성공적으로 구축했습니다. 이 프로젝트는 100대 이상의 배송 차량을 실시간으로 모니터링하고 최적의 경로를 제안하는 시스템을 구축하는 것이 목표였습니다.\n\n프로젝트 초기에는 고객사의 기존 시스템과의 연동 문제로 어려움을 겪었습니다. 레거시 시스템과 새로운 IoT 기기들을 연결하는 과정에서 데이터 호환성 문제가 발생했죠. 하지만 우리 팀은 포기하지 않고 다양한 방법을 시도했습니다. 결국 미들웨어를 개발하여 두 시스템 간의 원활한 통신을 가능하게 했습니다.\n\n가장 보람찼던 순간은 시스템 도입 후 한 달 만에 고객사의 배송 효율이 30% 이상 향상되었다는 피드백을 받았을 때였습니다. 특히 실시간 교통 상황을 반영한 경로 최적화 기능이 큰 도움이 되었다고 합니다. 이런 성공 사례를 통해 우리의 솔루션이 실제로 고객의 비즈니스에 가치를 더한다는 것을 확인할 수 있어 매우 뿌듯했습니다.",
      image: "https://images.unsplash.com/photo-1631624215749-0d635acfca2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: 2,
      title: "대학 캠퍼스 무선 네트워크 구축 도전기",
      author: {
        name: "정대현",
        position: "무선통신 팀장",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      },
      date: "2023년 11월",
      content: "지난 학기, 서울 소재 한 대학교의 캠퍼스 전체에 고성능 무선 네트워크를 구축하는 프로젝트를 맡게 되었습니다. 20개 이상의 건물과 넓은 야외 공간을 포함한 대규모 캠퍼스에서, 수천 명의 학생과 교직원이 동시에 접속해도 안정적인 성능을 보장해야 하는 도전적인 과제였습니다.\n\n가장 큰 어려움은 다양한 건물 구조와 재질에 따른 신호 간섭 문제였습니다. 특히 오래된 건물의 두꺼운 콘크리트 벽과 현대적인 유리 건물이 혼재되어 있어, 균일한 커버리지를 확보하기 어려웠습니다. 우리 팀은 건물별 특성을 고려한 맞춤형 설계를 진행했고, 정밀한 현장 측정과 시뮬레이션을 반복했습니다.\n\n3개월간의 구축 작업 끝에, 마침내 캠퍼스 전역에서 안정적인 Wi-Fi 서비스가 가능해졌습니다. 학기가 시작되고 학생들이 동시에 접속했을 때도 시스템이 안정적으로 작동하는 것을 확인했을 때의 성취감은 정말 컸습니다. 특히 프로젝트 완료 후 학교 측에서 학생들의 만족도가 크게 향상되었다는 피드백을 전해왔을 때 모든 노력이 보람차게 느껴졌습니다.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: 3,
      title: "제조 공장의 스마트팩토리 전환 프로젝트",
      author: {
        name: "이진수",
        position: "IoT솔루션 팀장",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      },
      date: "2023년 7월",
      content: "경기도의 한 중소 제조업체가 스마트팩토리로의 전환을 결정하면서 우리 IoT 팀에 솔루션 개발을 의뢰했습니다. 30년 이상 된 공장으로, 아날로그 설비와 디지털 기술의 융합이라는 큰 도전이 기다리고 있었습니다.\n\n초기에는 오래된 제조 설비에 IoT 센서를 부착하고 데이터를 수집하는 것부터가 쉽지 않았습니다. 진동, 온도, 습도 등 다양한 환경 요인이 센서 작동에 영향을 미쳤고, 공장 내 전파 간섭도 문제였습니다. 여러 차례 현장 테스트와 센서 재배치를 통해 안정적인 데이터 수집 시스템을 구축했습니다.\n\n특히 인상적이었던 부분은 데이터 분석을 통한 설비 이상 감지 시스템이었습니다. 기계 작동 소리를 분석하여 이상 징후를 조기에 감지하는 알고리즘을 개발했는데, 실제로 시스템 도입 두 달 만에 주요 설비의 고장을 사전에 감지해 대규모 생산 중단을 예방할 수 있었습니다.\n\n고객사는 스마트팩토리 전환 후 생산성이 20% 향상되고, 에너지 사용량은 15% 감소했다고 합니다. 오래된 공장에 새로운 생명을 불어넣는 과정에 참여할 수 있어 기술자로서 큰 보람을 느꼈습니다. 이 경험은 아날로그와 디지털의 융합이 가져올 수 있는 가능성을 다시 한번 확인하는 소중한 기회였습니다.",
      image: "https://images.unsplash.com/photo-1563770557593-978789da83dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>현장 이야기 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신 직원들의 생생한 현장 이야기를 소개합니다. 다양한 프로젝트 경험과 도전, 그리고 성공 사례를 통해 브이원정보통신의 전문성과 열정을 느껴보세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">현장 이야기</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신 직원들이 들려주는 생생한 현장 이야기입니다.
            다양한 프로젝트 경험과 도전, 그리고 성공 사례를 통해
            브이원정보통신의 전문성과 열정을 느껴보세요.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {stories.map((story) => (
              <Card key={story.id} className="mb-12 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{story.title}</h2>
                  
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={story.author.image} 
                        alt={story.author.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{story.author.name}</p>
                      <p className="text-sm text-gray-500">{story.author.position} | {story.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  <div className="text-gray-700 prose max-w-none">
                    {story.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
