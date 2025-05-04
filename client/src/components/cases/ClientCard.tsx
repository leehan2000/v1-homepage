import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ClientCardProps {
  logo: string;
  companyName: string;
  industry: string;
  location: string;
  service: string;
  description: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  logo,
  companyName,
  industry,
  location,
  service,
  description
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-32 bg-white flex items-center justify-center p-4 border-b">
        <img 
          src={logo} 
          alt={`${companyName} 로고`} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <CardContent className="flex-1 flex flex-col p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{companyName}</h3>
        <div className="text-sm text-gray-500 mb-3">{industry} / {location}</div>
        <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm inline-block mb-3 font-medium">
          {service}
        </div>
        <p className="text-gray-700 text-sm mt-auto">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
