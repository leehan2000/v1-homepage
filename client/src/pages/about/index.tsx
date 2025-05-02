import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const AboutIndex = () => {
  const sections = [
    {
      title: "시작 이야기",
      description: "브이원정보통신이 어떻게 시작되었는지 알아보세요.",
      link: "/about/story"
    },
    {
      title: "동업 이야기",
      description: "함께 만들어가는 브이원정보통신의 동업 이야기입니다.",
      link: "/about/partnership"
    },
    {
      title: "비전 & 미션",
      description: "브이원정보통신이 추구하는 가치와 미래 비전에 대해 소개합니다.",
      link: "/about/vision"
    },
    {
      title: "대표 인사말",
      description: "브이원정보통신 대표의 인사말입니다.",
      link: "/about/ceo"
    },
    {
      title: "연혁 (History)",
      description: "브이원정보통신의 발자취를 살펴보세요.",
      link: "/about/history"
    }
  ];

  return (
    <>
      <Helmet>
        <title>브이원의 이야기 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 시작 이야기, 동업 이야기, 비전과 미션, 대표 인사말, 그리고 연혁을 소개합니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">브이원의 이야기</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            2006년부터 시작된 브이원정보통신의 역사와 비전을 소개합니다.
            신뢰와 전문성을 바탕으로 고객과 함께 성장해온 브이원정보통신의 이야기를 만나보세요.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-5 h-16">{section.description}</p>
                  <Link href={section.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      자세히 보기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              브이원정보통신은 더 나은 통신환경을 위해 끊임없이 발전하고 있습니다.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                상담 문의하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIndex;
