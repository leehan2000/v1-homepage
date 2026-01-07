import React from 'react';
import { Helmet } from 'react-helmet';

const clientsData = [
  {
    id: 1,
    logo: '/images/magacoff.jpg',
    companyName: '메가커피 프렌차이즈',
    industry: '커피 프렌차이즈',
    location: '전국',
    service: '유선통신(소호인터넷)',
    description: '프렌차이즈 전체 가맹점에 안정적인 인터넷 제공, 독점 제휴'
  },
  {
    id: 2,
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format',
    companyName: '신하동 상온가',
    industry: '소매상가',
    location: '경기 성남',
    service: '차량관제/IoT',
    description: '실시간 장비 모니터링과 운전 효율화를 위한 IoT 기반 차량관제 시스템 구축'
  },
  {
    id: 3,
    logo: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?w=500&auto=format',
    companyName: '하나로지스틱스',
    industry: '물류센터',
    location: '경기 광주',
    service: '유선통신',
    description: '대형 물류센터 내 모든 영역을 커버하는 고욕량 데이터 네트워크 구축 및 유지보수'
  },
  {
    id: 4,
    logo: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format',
    companyName: '바다뷰 리조트',
    industry: '호텔/리조트',
    location: '부산 해운대',
    service: '무선통신',
    description: '객실 350실 규모 리조트 전체 무선 인터넷 환경 구축 및 시스템 관리'
  },
  {
    id: 5,
    logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format',
    companyName: '메디에스 병원',
    industry: '의료',
    location: '서울 양천',
    service: '업종별 제안',
    description: '병원 내 캠퍼스 네트워크 전체 구축 및 의료장비 우선 통신망 분리 설계 제공'
  },
  {
    id: 6,
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format',
    companyName: '스마트팩토리',
    industry: '제조/공장',
    location: '충남 아산',
    service: 'IoT 솔루션',
    description: '공장 자동화 시스템을 위한 IoT 센서 네트워크 구축 및 실시간 데이터 모니터링 시스템 구축'
  },
  {
    id: 7,
    logo: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&auto=format',
    companyName: '그린라이프 아파트',
    industry: '아파트/주거단지',
    location: '인천 연수',
    service: '유선통신',
    description: '1200세대 규모 아파트 단지 FTTH 기반 고속 인터넷 인프라 구축'
  },
  {
    id: 8,
    logo: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&auto=format',
    companyName: '플레이리스 쇼핑몰',
    industry: '소매/상가',
    location: '서울 영등포',
    service: '무선통신',
    description: '대형 쇼핑몰 전체 영역 무선 인터넷 서비스 구축 및 유동인구 분석 시스템 연동'
  },
  {
    id: 9,
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format',
    companyName: '스타타워',
    industry: '오피스빌딩',
    location: '서울 종로',
    service: '무선/유선통신',
    description: '연면적 15,000평 30층 규모의 고층 상업빌딩 네트워크 인프라 전체 설계 및 구축'
  }
];

const ClientsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>고객사 / 도입사례 - 브이원정보통신</title>
        <meta name="description" content="브이원정보통신의 친절한 서비스를 선택한 다양한 고객사와 도입 사례를 소개합니다." />
      </Helmet>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">고객사 / 도입사례</h1>
            <p className="text-xl text-gray-600">
              브이원정보통신의 서비스를 통해 해결책을 찾은 다양한 고객사를 소개합니다.
              <br />
              미래지향적인 목표를 함께 이루어나가는 파트너로서 고객의 바로 옆에 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={client.logo}
                  alt={client.companyName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{client.companyName}</h3>
                  <p className="text-sm text-gray-600 mb-1">{client.industry} | {client.location}</p>
                  <p className="text-sm text-gray-500 mb-1">제공 서비스: {client.service}</p>
                  <p className="text-sm text-gray-700">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsPage;