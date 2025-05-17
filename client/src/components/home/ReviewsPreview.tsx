import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type CustomerReviewProps = {
  rating: number;
  review: string;
  customer: {
    initial: string;
    name: string;
    company: string;
  };
};

const CustomerReview: React.FC<CustomerReviewProps> = ({ rating, review, customer }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-lgred hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 flex">
            {Array(5).fill(0).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <p className="text-lgtext_light mb-6 leading-relaxed">
          "{review}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-lgred/10 flex items-center justify-center mr-4">
            <span className="font-bold text-lgred">{customer.initial}</span>
          </div>
          <div>
            <h4 className="font-bold text-lgtext">{customer.name}</h4>
            <p className="text-sm text-lgtext_light">{customer.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewsPreview = () => {
  const reviews = [
    {
      rating: 5,
      review: "브이원정보통신 덕분에 공장 내 통신 인프라를 안정적으로 구축할 수 있었습니다. 전문적인 상담부터 설치, 사후관리까지 모두 만족스러웠습니다.",
      customer: {
        initial: "K",
        name: "김OO 대표",
        company: "제조업 / 중소기업"
      }
    },
    {
      rating: 4.5,
      review: "프랜차이즈로 전국적으로 신규 매장 오픈 일정이 촘촘하게 잡혀 있고, 현장마다 통신 인프라 구축이나 인터넷 설치 일정이 굉장히 중요합니다. 각 지역별 일정에 맞춰 유연하게 대응해주고, 담당자 분들도 소통이 빠르고, 매장 오픈 일정에 차질이 없도록 사전 체크와 보고도 꼼꼼하게 해주셔서 믿고 맡기게 되었습니다.",                
      customer: {
        initial: "L",
        name: "이OO 팀장",
        company: "커피프랜차이즈 / 선도기업"
      }
    },
    {
      rating: 5,
      review: "차량관제 시스템 도입으로 배송 효율이 30% 이상 향상되었습니다. 초기 투자 비용이 부담스러웠지만 결과적으로 훨씬 더 큰 가치를 얻었습니다.",
      customer: {
        initial: "P",
        name: "박OO 이사",
        company: "물류업 / 대기업"
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lgtext mb-6 relative inline-block">
            고객 후기
            <div className="h-1 w-1/2 bg-lgred mt-3 mx-auto"></div>
          </h2>
          <p className="text-lg text-lgtext_light max-w-3xl mx-auto leading-relaxed">
            브이원정보통신과 함께한 고객들의 생생한 후기를 확인하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <CustomerReview 
              key={index}
              rating={review.rating}
              review={review.review}
              customer={review.customer}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/cases/reviews">
            <Button variant="outline" className="border-lgred text-lgred hover:bg-lgred/5 font-medium rounded-md px-6 py-3 transition-all duration-300">
              모든 후기 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreview;
