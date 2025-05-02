export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface Review {
  id: string;
  customerName: string;
  customerPosition: string;
  customerCompany: string;
  customerIndustry: string;
  rating: number;
  content: string;
  date: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: string;
  category: 'info' | 'review' | 'daily' | 'blog';
  url?: string;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  image?: string;
  bio?: string;
}

export interface FormSubmission {
  id: string;
  name: string;
  phone: string;
  address: string;
  service: string;
  message?: string;
  timestamp: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
  date: string;
}
