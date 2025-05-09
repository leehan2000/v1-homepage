import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import BlogFeed from "./BlogFeed";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => (
  <Card className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-lgred transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-48 bg-lggray flex items-center justify-center">
      <div className="text-6xl text-lgred">
        <i className={`fas fa-${icon}`}></i>
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-lgtext mb-2">{title}</h3>
      <p className="text-lgtext_light mb-4">{description}</p>
      <Link href={link}>
        <div className="text-lgred hover:text-lgred_dark font-medium flex items-center cursor-pointer">
          자세히 보기
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </CardContent>
  </Card>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: "wifi",
      title: "무선통신",
      description:
        "안정적인 무선 네트워크 구축을 통해 시간과 장소에 구애받지 않는 업무 환경을 조성합니다.",
      link: "/services/wireless",
    },
    {
      icon: "network-wired",
      title: "유선통신",
      description:
        "고속의 안정적인 유선 네트워크 구축을 통해 기업의 핵심 인프라를 지원합니다.",
      link: "/services/wired",
    },
    {
      icon: "car",
      title: "차량관제 / IoT",
      description:
        "실시간 차량관제 및 IoT 기술을 활용하여 효율적인 운영 환경을 구축합니다.",
      link: "/services/vehicle-iot",
    },
    {
      icon: "building",
      title: "업종별 제안",
      description:
        "각 산업별 특성에 맞춘 최적화된 통신 솔루션을 제안합니다.",
      link: "/services/solutions",
    },
  ];

  return (
    <>
      {/* 핵심 서비스 섹션 */}
      <section id="services" className="py-16 bg-white border-b border-lgborder">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lgtext mb-6 relative inline-block">
              핵심 서비스
              <div className="h-1 w-1/2 bg-lgred mt-3 mx-auto"></div>
            </h2>
            <p className="text-lg text-lgtext_light max-w-3xl mx-auto leading-relaxed">
              브이원정보통신은 다양한 통신 인프라 구축 및 유지보수 서비스를 제공합니다.
              고객의 니즈에 맞춘 최적의 솔루션을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 제품소개 카테고리 최신 6개 블로그 글 */}
      <BlogFeed category="제품소개" limit={6} />
    </>
  );
};

export default ServicesSection;