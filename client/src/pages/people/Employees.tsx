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
      name: "나사장",
      position: "공동대표",
      department: "경영팀",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "15년 이상의 통신 업계 경력을 갖춘 브이원정보통신의 창립자입니다. 고객 중심의 서비스 철학을 바탕으로 회사를 이끌고 있습니다.",
      expertise: ["전략 기획", "사업 개발", "네트워크 솔루션"],
    },
    {
      id: 2,
      name: "박영희",
      position: "기술이사",
      department: "기술연구소",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "유선 통신 시스템 전문가로, 브이원정보통신의 핵심 기술을 개발하고 있습니다. 끊임없는 연구와 혁신을 추구합니다.",
      expertise: ["유선 네트워크", "시스템 설계", "R&D 관리"],
    },
    {
      id: 3,
      name: "에릭",
      position: "차장",
      department: "유무선 통합영업부",
      image: "/images/eric.png",
      bio: "유무선 전체 시스템을 안정적이고 효율적인 통신환경으로 구축하여 고객의 업무 생산성을 높이고 있습니다. 실패안에서 배우고 성장하고 있습니다. 협업과 팀웍을 중시하며 소통과 배려로 긍정적인 힘을 만들어냅니다.",
      expertise: ["통신회선구성", "케이블링", "설치 및 점검"],
    },
    {
      id: 4,
      name: "제이슨",
      position: "과장",
      department: "로봇사업부",
      image: "/images/jason.png",
      bio: "LG유플러스 로봇사업팀의 김민상 과장입니다. LG클로이 로봇을 운영하고 있으며, 로봇의 쉬운 사용법과 최신 동향, 최저가 정보를 안내해 드립니다. 로봇을 사용해 보고 싶으시면, 언제든지 연락주세요 가장 친절하게 안내해 드리겠습니다.",
      expertise: ["로봇적용", "인식기반", "현장영업개선"],
    },
    {
      id: 5,
      name: "소피아",
      position: "무선 고객지원 과장",
      department: "무선사업부 고객지원",
      image: "/images/sophie.png",
      bio: "모바일 및 M2M 라우터의 인바운드 업무를 비롯해, 재고 및 서류 관리, 전산 개통 등 다양한 실무를 맡고 있습니다. 정신없이 바쁜 하루하루 속에서도 늘 긍정적인 마인드로 임하며, 영업부서와의 원활한 커뮤니케이션을 통해 업무에 차질이 없도록 최선을 다하고 있습니다. 작은 실수 하나도 놓치지 않기 위해 이중 체크를 생활화하며, 꼼꼼하고 책임감 있게 업무를 처리하고 있습니다.",
      expertise: ["유큐브전산", "개통 CS", "인바운드"],
    },
    {
      id: 6,
      name: "클로이",
      position: "유선 고객지원 과장",
      department: "유선사업부 고객지원",
      image: "/images/chloe.png",
      bio: "다양한 업무를 경험하며 문서 정리부터 상황 대응까지 꼼꼼하게 처리하는 습관을 길렀습니다. 맡은 일은 책임감을 갖고 끝까지 해내는 것을 중요하게 생각하며, 고객과 동료들과도 편안하고 원활한 소통을 위해 항상 노력하고 있습니다. 변화에도 빠르게 적응하는 편이라 어느 상황에서나 원활하게 진행할 수 있도록 노력하고 있습니다.",
      expertise: ["고객 지원", "서비스 관리", "기술 지원"],
    },
    {
      id: 7,
      name: "리나",
      position: "유선 고객지원 대리",
      department: "유선사업부 고객지원",
      image: "/images/lina.png",
      bio: "청약과 cs을 담당. 누구보다 부지런하여 미리 점검 및 하루일을 시작합니다. 성실함과 끝까지 파고드는 끈기가 장점입니다. 최장수 근무자가 목표입니다.",
      expertise: ["유무선 경력 30년", "Voc처리", "업무개선"],
    },
    {
      id: 8,
      name: "레오",
      position: "마케팅 총괄",
      department: "마케팅부",
      image: "/images/leo.png",
      bio: "브이원정보통신의 브랜드 가치를 높이고, 고객과의 소통을 강화하기 위한 다양한 마케팅 활동을 이끌고 있습니다. 창의적인 아이디어로 회사의 성장에 기여합니다.",
      expertise: ["디지털 마케팅", "브랜드 전략", "콘텐츠 기획"],
    },
    {
      id: 9,
      name: "찰리",
      position: "네트워크 엔지니어",
      department: "기술지원팀",
      image: "/images/challi.png",
      bio: "복잡한 네트워크 문제를 해결하는 데 탁월한 능력을 가진 베테랑 엔지니어입니다. 고객의 네트워크가 항상 최상의 상태로 운영될 수 있도록 지원합니다.",
      expertise: ["네트워크 트러블슈팅", "시스템 유지보수", "보안 솔루션"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>직원 소개 | 브이원정보통신</title>
        <meta
          name="description"
          content="브이원정보통신을 이끌어가는 전문가들을 소개합니다. 각자의 분야에서 전문성과 열정으로 최상의 서비스를 제공하기 위해 노력하는 브이원정보통신의 구성원들을 만나보세요."
        />
      </Helmet>

      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            대표 임직원 소개
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신을 이끌어가는 전문가들을 소개합니다. 각자의 분야에서
            전문성과 열정으로 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <Card
                key={employee.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {employee.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {employee.position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {employee.department}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-4">{employee.bio}</p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      전문 분야:
                    </h4>
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
              브이원정보통신의 모든 구성원은 고객에게 최상의 서비스를 제공하기
              위해
              <br />
              끊임없이 학습하고 발전하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
