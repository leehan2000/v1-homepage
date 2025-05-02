import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const PeopleIndex = () => {
  const sections = [
    {
      title: "직원 소개",
      description: "브이원정보통신을 이끌어가는 전문가들을 소개합니다.",
      link: "/people/employees",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "일하는 철학",
      description: "브이원정보통신의 업무 방식과 핵심 가치를 소개합니다.",
      link: "/people/philosophy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "현장 이야기",
      description: "브이원정보통신 직원들의 생생한 현장 이야기를 들려드립니다.",
      link: "/people/stories",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>사람들 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신을 이끌어가는 사람들을 소개합니다. 전문성과 열정으로 가득한 브이원정보통신의 팀원들과 일하는 철학, 그리고 현장 이야기를 확인하세요." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">사람들</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신을 이끌어가는 전문가들과 우리의 일하는 방식을 소개합니다.
            함께 성장하고 발전하는 브이원정보통신의 문화를 느껴보세요.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-5">{section.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">함께 성장하는 문화</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              브이원정보통신은 개인의 성장이 곧 회사의 성장이라고 믿습니다.
              각자의 전문성을 존중하고, 지속적인 학습과 발전을 장려하는 문화 속에서
              우리는 함께 성장해 나갑니다.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                함께 일하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleIndex;
