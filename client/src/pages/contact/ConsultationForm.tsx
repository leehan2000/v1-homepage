import { Helmet } from "react-helmet";
import ContactForm from "@/components/contact/ContactForm";

const ConsultationForm = () => {
  return (
    <>
      <Helmet>
        <title>상담 신청 | 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 통신 솔루션에 관심이 있으신가요? 상담 신청 양식을 작성해주시면 전문 상담원이 빠른 시일 내에 연락드리겠습니다." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">상담 신청</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
            브이원정보통신의 통신 솔루션에 관심이 있으신가요?<br />
            아래 양식을 작성해주시면 전문 상담원이 빠른 시일 내에 연락드리겠습니다.
          </p>
        </div>
      </div>
      
      <ContactForm />
    </>
  );
};

export default ConsultationForm;
