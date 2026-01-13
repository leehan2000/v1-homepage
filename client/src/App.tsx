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

function Router() {
  const [location] = useLocation();
  
  // 페이지 이동 시 상단으로 스크롤
  useEffect(() => {
    scrollToTop(0);
  }, [location]);
  
  return (
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
