import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import CertificationsSection from "@/components/home/CertificationsSection";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import BlogFeed from "@/components/home/BlogFeed";
import ContactForm from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>브이원정보통신 - 통신 솔루션 전문기업</title>
        <meta name="description" content="브이원정보통신은 무선통신, 유선통신, 차량관제 및 IoT 분야의 전문 통신 솔루션을 제공합니다. 전문성과 신뢰를 바탕으로 고객맞춤형 서비스를 제공합니다." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <CertificationsSection />
      <ReviewsPreview />
      <BlogFeed category="통신" limit={6} title="최신 블로그 소식" />
      <ContactForm />
    </>
  );
};

export default HomePage;
