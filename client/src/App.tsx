// BlogFeed 컴포넌트는 별도로 구현 예정
import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { scrollToTop } from "@/lib/utils";
import HomePage from "@/pages/HomePage";
import AboutIndex from "@/pages/about/index";
import AboutStory from "@/pages/about/Story";
import AboutPartnership from "@/pages/about/Partnership";
import AboutVision from "@/pages/about/Vision";
import AboutCEO from "@/pages/about/CEO";
import AboutHistory from "@/pages/about/History";
import PeopleIndex from "@/pages/people/index";
import PeopleEmployees from "@/pages/people/Employees";
import PeoplePhilosophy from "@/pages/people/Philosophy";
import PeopleStories from "@/pages/people/Stories";
import ServicesIndex from "@/pages/services/index";
import ServicesWireless from "@/pages/services/Wireless";
import ServicesWired from "@/pages/services/Wired";
import ServicesVehicleIot from "@/pages/services/VehicleIot";
import ServicesSolutions from "@/pages/services/Solutions";
import CasesIndex from "@/pages/cases/index";
import CasesClients from "@/pages/cases/clients";
import CasesReviews from "@/pages/cases/reviews";
// import CasesFieldStories from "@/pages/cases/FieldStories";
// import CertificationsIndex from "@/pages/certifications/index";
// import CertificationsPartners from "@/pages/certifications/Partners";
import CertificationsAwards from "@/pages/certifications/awards";
// import NewsIndex from "@/pages/news/index";
// import NewsContent from "@/pages/news/Content";
// import NewsCustomerReviews from "@/pages/news/CustomerReviews";
import NewsDaily from "@/pages/news/daily";
import NewsBlog from "@/pages/news/blog";
// import ContactIndex from "@/pages/contact/index";
import ContactConsultationForm from "@/pages/contact/ConsultationForm";
import BusinessPhone from "@/pages/contact/BusinessPhone";
import BusinessInternet from "@/pages/contact/BusinessInternet";
import NationalNumber from "@/pages/contact/NationalNumber";
import UplusVehicle from "@/pages/contact/UplusVehicle";
import UplusMobileInternet from "@/pages/contact/UplusMobileInternet";
// import ContactFAQ from "@/pages/contact/FAQ";
// import ContactDirections from "@/pages/contact/Directions";
import ThankYouAlert from "@/components/common/ThankYouAlert";
import { ThankYouProvider } from "@/components/common/ThankYouAlert";

// CTA 상수
const CTA = {
  phoneDisplay: "02-6951-1156",
  phoneTel: "0269511156",
  consultId: "consult",
};

// 플로팅 CTA 컴포넌트
function ContactFloatingCTA() {
  const handleConsultClick = () => {
    // 현재 페이지에서 consult 섹션 찾기
    const consultElement = document.getElementById(CTA.consultId);
    if (consultElement) {
      consultElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // consult 섹션이 없으면 /contact로 이동
      window.location.href = "/contact";
    }
  };

  return (
    <>
      {/* Desktop: 우측 하단 플로팅 버튼 */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* 전화문의 버튼 */}
        <a
          href={`tel:${CTA.phoneTel}`}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-2xl shadow-lg border border-primary/20 transition-all duration-300 hover:opacity-90 hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold text-base min-w-[140px]"
        >
          <span>☎</span>
          <span>전화문의</span>
        </a>
        {/* 상담요청 버튼 */}
        <button
          onClick={handleConsultClick}
          className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold text-base min-w-[140px]"
        >
          <span>💬</span>
          <span>상담요청</span>
        </button>
      </div>

      {/* Mobile: 하단 고정 바 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-0">
          {/* 전화문의 버튼 */}
          <a
            href={`tel:${CTA.phoneTel}`}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-4 flex items-center justify-center gap-2 font-semibold text-sm transition-opacity active:opacity-80"
          >
            <span>☎</span>
            <span>전화문의</span>
          </a>
          {/* 상담요청 버튼 */}
          <button
            onClick={handleConsultClick}
            className="bg-white hover:bg-gray-50 text-primary border-l border-gray-200 px-4 py-4 flex items-center justify-center gap-2 font-semibold text-sm transition-colors active:bg-gray-100"
          >
            <span>💬</span>
            <span>상담요청</span>
          </button>
        </div>
      </div>
    </>
  );
}

function Router() {
  const [location] = useLocation();
  const isContact = location.startsWith("/contact");
  
  // 페이지 이동 시 상단으로 스크롤
  useEffect(() => {
    scrollToTop(0);
  }, [location]);
  
  return (
    <>
      <Switch>
      {/* Home */}
      <Route path="/" component={HomePage} />

      {/* About */}
      <Route path="/about" component={AboutIndex} />
      <Route path="/about/story" component={AboutStory} />
      <Route path="/about/partnership" component={AboutPartnership} />
      <Route path="/about/vision" component={AboutVision} />
      <Route path="/about/ceo" component={AboutCEO} />
      <Route path="/about/history" component={AboutHistory} />

      {/* People */}
      <Route path="/people" component={PeopleIndex} />
      <Route path="/people/employees" component={PeopleEmployees} />
      <Route path="/people/philosophy" component={PeoplePhilosophy} />
      <Route path="/people/stories" component={PeopleStories} />

      {/* Services */}
      <Route path="/services" component={ServicesIndex} />
      <Route path="/services/wireless" component={ServicesWireless} />
      <Route path="/services/wired" component={ServicesWired} />
      <Route path="/services/vehicle-iot" component={ServicesVehicleIot} />
      <Route path="/services/solutions" component={ServicesSolutions} />

      {/* Cases */}
      <Route path="/cases" component={CasesIndex} />
      <Route path="/cases/clients" component={CasesClients} />
      <Route path="/cases/reviews" component={CasesReviews} />
      
      {/* Certifications */}
      <Route path="/certifications/awards" component={CertificationsAwards} />
      
      {/* News & Blog */}
      <Route path="/news/daily" component={NewsDaily} />
      <Route path="/news/blog" component={NewsBlog} />
      
      {/* Contact */}
      <Route path="/contact/consultation" component={ContactConsultationForm} />
      <Route path="/contact/business-phone" component={BusinessPhone} />
      <Route path="/contact/business-internet" component={BusinessInternet} />
      <Route path="/contact/national-number" component={NationalNumber} />
      <Route path="/contact/uplus-vehicle" component={UplusVehicle} />
      <Route path="/contact/uplus-mobile-internet" component={UplusMobileInternet} />
      <Route path="/contact" component={ContactConsultationForm} />

      {/* 서비스 섹션 - 추후 업데이트 예정 */}
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
      </Switch>
      
      {/* /contact 경로에서만 플로팅 CTA 표시 */}
      {isContact && <ContactFloatingCTA />}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThankYouProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <div className="pt-24 md:pt-32 lg:pt-36"> {/* Spacer for fixed header */}
              <Router />
            </div>
          </main>
          <Footer />
          <ThankYouAlert />
        </div>
        <Toaster />
      </ThankYouProvider>
    </QueryClientProvider>
  );
}

export default App;
