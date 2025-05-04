import React from 'react';
import { Helmet } from 'react-helmet';
import ReviewCard from '@/components/cases/ReviewCard';

// 설치 후기 샘플 데이터
const reviewsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545168612-fce436b36497?w=500&auto=format',
    customerName: '신하동 민수시장',
    location: '경기 성남',
    date: '2025-03-15',
    comment: '하루 만에 깔끔하게 작업을 마무리해주셨고, 응대도 정말 친절했어요. 설치 후 무선 인터넷 속도도 빠르고 만족합니다.',
    rating: 5
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1492168732976-2676c584c675?w=500&auto=format',
    customerName: '인하 오피스텔',
    location: '인천 연수구',
    date: '2025-02-28',
    comment: '사무실이 7층인데도 신속하게 전체 움직임 없이 인터넷 통신을 연결해주셨어요. 전문적인 설명도 많은 도움이 되었습니다.',
    rating: 4.5
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?w=500&auto=format',
    customerName: '해안 아파트 102동',
    location: '부산 해운대구',
    date: '2025-04-02',
    comment: '전체 동 인터넷 문제가 오래 견뢌는데, 브이원정보통신으로 교체 후 안정적으로 아주 만족합니다.',
    rating: 5
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=500&auto=format',
    customerName: '삼성 자동차정비',
    location: '경기 오산',
    date: '2025-01-18',
    comment: '차량관제 시스템 설치가 강점인 회사로 추천받았는데, 정확한 상담과 설치가 만족스럽습니다.',
    rating: 4
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=500&auto=format',
    customerName: '신세계백화점 중앙점',
    location: '서울 응암구',
    date: '2025-03-05',
    comment: '매장 내 고객용 Wi-Fi와 직원용 네트워크를 분리해서 안정적인 통신 환경을 구축해주셨어요.',
    rating: 4.5
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=500&auto=format',
    customerName: '서울중앙병원',
    location: '서울 서초구',
    date: '2024-12-10',
    comment: '의료장비와 환자 정보 보안을 위한 네트워크 구축 시 전문지식을 갖춘 비전머료가 매우 도움이 되었습니다.',
    rating: 5
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=500&auto=format',
    customerName: '문화대학교 기숙사',
    location: '서울 노원구',
    date: '2025-02-15',
    comment: '학생들이 내내 느린 와이파이 속도를 해결해주셔서 학교 훈련시설 평가에서 좋은 점수를 받았습니다.',
    rating: 4.5
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1529636444744-adffc9135a5e?w=500&auto=format',
    customerName: '공간 커피워크',
    location: '경기 고양',
    date: '2025-04-10',
    comment: '카페 내 전체 공간에 무선 인터넷을 핵핵하게 제공해주셔서 고객만족도가 높아졌어요. 설치 후 지속적인 관리도 만족스럽습니다.',
    rating: 5
  }
];

const ReviewsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>설치 후기 - 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 서비스를 이용한 고객님들의 생생한 설치 후기를 확인해보세요." />
      </Helmet>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">설치 후기</h1>
            <p className="text-xl text-gray-600">
              브이원정보통신의 서비스를 이용하신 고객님들의 생생한 후기를 확인해보세요.
              <br />
              저희는 항상 고객의 목소리를 다시 들으며 더 나은 서비스를 제공하기 위해 노력합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {reviewsData.map((review) => (
              <ReviewCard
                key={review.id}
                image={review.image}
                customerName={review.customerName}
                location={review.location}
                date={review.date}
                comment={review.comment}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
