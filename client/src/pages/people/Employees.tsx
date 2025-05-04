import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  expertise: string[];
}

const Employees = () => {
  const employees: Employee[] = [
    {
      id: 1,
      name: "이학열",
      position: "공동대표",
      department: "경영팀",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "15년 이상의 통신 업계 경력을 갖춘 브이원정보통신의 창립자입니다. 고객 중심의 서비스 철학을 바탕으로 회사를 이끌고 있습니다.",
      expertise: ["전략 기획", "사업 개발", "네트워크 솔루션"]
    },
    {
      id: 2,
      name: "박영희",
      position: "기술이사",
      department: "기술연구소",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "유선 통신 시스템 전문가로, 브이원정보통신의 핵심 기술을 개발하고 있습니다. 끊임없는 연구와 혁신을 추구합니다.",
      expertise: ["유선 네트워크", "시스템 설계", "R&D 관리"]
    },
    {
      id: 3,
      name: "이진수",
      position: "IoT솔루션 팀장",
      department: "IoT사업부",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "IoT 분야에서 10년 이상의 경력을 보유한 전문가입니다. 혁신적인 IoT 솔루션 개발을 통해 고객의 비즈니스 가치를 높이고 있습니다.",
      expertise: ["IoT 시스템", "임베디드 시스템", "센서 네트워크"]
    },
    {
      id: 4,
      name: "최미라",
      position: "차량관제솔루션 팀장",
      department: "차량관제사업부",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "차량관제 시스템 분야의 전문가로, 효율적인 물류 및 운송 관리 솔루션을 개발하고 있습니다. 실용적인 솔루션으로 고객의 만족을 이끌어냅니다.",
      expertise: ["GPS 시스템", "차량 텔레매틱스", "물류 최적화"]
    },
    {
      id: 5,
      name: "정대현",
      position: "무선통신 팀장",
      department: "무선사업부",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "무선 네트워크 구축 및 최적화 전문가입니다. 안정적이고 효율적인 무선 통신 환경을 구축하여 고객의 업무 생산성을 높이고 있습니다.",
      expertise: ["무선 네트워크", "Wi-Fi 최적화", "5G 솔루션"]
    },
    {
      id: 6,
      name: "한소영",
      position: "고객지원 팀장",
      department: "고객지원팀",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "고객의 목소리를 가장 가까이에서 듣고, 최상의 서비스를 제공하기 위해 노력합니다. 고객 만족을 최우선으로 생각하는 열정적인 리더입니다.",
      expertise: ["고객 지원", "서비스 관리", "기술 지원"]
    },
    {
      id: 7,
      name: "윤준호",
      position: "영업이사",
      department: "영업팀",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "다양한 산업 분야의 고객들과 소통하며, 고객의 니즈에 맞는 최적의 솔루션을 제안합니다. 고객의 성공이 곧 우리의 성공이라는 믿음으로 일합니다.",
      expertise: ["솔루션 컨설팅", "B2B 영업", "고객 관계 관리"]
    },
    {
      id: 8,
      name: "이현지",
      position: "마케팅 팀장",
      department: "마케팅팀",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "브이원정보통신의 브랜드 가치를 높이고, 고객과의 소통을 강화하기 위한 다양한 마케팅 활동을 이끌고 있습니다. 창의적인 아이디어로 회사의 성장에 기여합니다.",
      expertise: ["디지털 마케팅", "브랜드 전략", "콘텐츠 기획"]
    },
    {
      id: 9,
      name: "강태식",
      position: "네트워크 엔지니어",
      department: "기술지원팀",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "복잡한 네트워크 문제를 해결하는 데 탁월한 능력을 가진 베테랑 엔지니어입니다. 고객의 네트워크가 항상 최상의 상태로 운영될 수 있도록 지원합니다.",
      expertise: ["네트워크 트러블슈팅", "시스템 유지보수", "보안 솔루션"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>직원 소개 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신을 이끌어가는 전문가들을 소개합니다. 각자의 분야에서 전문성과 열정으로 최상의 서비스를 제공하기 위해 노력하는 브이원정보통신의 구성원들을 만나보세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">직원 소개</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신을 이끌어가는 전문가들을 소개합니다.
            각자의 분야에서 전문성과 열정으로 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src={employee.image} 
                        alt={employee.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                    <p className="text-primary font-medium">{employee.position}</p>
                    <p className="text-gray-500 text-sm">{employee.department}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{employee.bio}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">전문 분야:</h4>
                    <div className="flex flex-wrap gap-2">
                      {employee.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              브이원정보통신의 모든 구성원은 고객에게 최상의 서비스를 제공하기 위해<br />
              끊임없이 학습하고 발전하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
