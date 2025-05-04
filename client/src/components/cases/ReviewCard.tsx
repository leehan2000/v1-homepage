import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ReviewCardProps {
  image: string;
  customerName: string;
  location: string;
  date: string;
  comment: string;
  rating: number; // 1-5 범위의 별점
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  customerName,
  location,
  date,
  comment,
  rating
}) => {
  // 별점 렌더링 함수
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    
    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }
    
    // 반 별
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    // 빈 별
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    
    return (
      <div className="flex items-center text-lg">
        {stars}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}/5</span>
      </div>
    );
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${customerName} 설치 사진`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardContent className="flex-1 flex flex-col p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{customerName}</h3>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        
        {renderStars(rating)}
        
        <div className="mt-4 text-gray-700 italic">"{comment}"</div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
