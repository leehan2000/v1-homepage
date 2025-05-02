import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
// Temporarily commenting out imports for missing files
// import CasesClients from "@/pages/cases/Clients";
// import CasesReviews from "@/pages/cases/Reviews";
// import CasesFieldStories from "@/pages/cases/FieldStories";
// import CertificationsIndex from "@/pages/certifications/index";
// import CertificationsPartners from "@/pages/certifications/Partners";
// import CertificationsAwards from "@/pages/certifications/Awards";
// import NewsIndex from "@/pages/news/index";
// import NewsContent from "@/pages/news/Content";
// import NewsCustomerReviews from "@/pages/news/CustomerReviews";
// import NewsDaily from "@/pages/news/Daily";
// import NewsBlog from "@/pages/news/Blog";
// import ContactIndex from "@/pages/contact/index";
import ContactConsultationForm from "@/pages/contact/ConsultationForm";
// import ContactFAQ from "@/pages/contact/FAQ";
// import ContactDirections from "@/pages/contact/Directions";
import ThankYouAlert from "@/components/common/ThankYouAlert";
import { ThankYouProvider } from "@/components/common/ThankYouAlert";

function Router() {
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

      {/* Cases - Only keeping index route */}
      <Route path="/cases" component={CasesIndex} />
      
      {/* Temporarily removed sections */}
      {/* 
      - Cases detail pages
      - Certifications section
      - News section
      - Contact index/FAQ/Directions
      */}
      
      {/* Contact - Only keeping consultation form */}
      <Route path="/contact/consultation" component={ContactConsultationForm} />

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
            <div className="pt-16 md:pt-20"> {/* Spacer for fixed header */}
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
