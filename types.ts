export interface Course {
  id: string;
  name: string;
  duration: string;
  description?: string;
}

export interface Faculty {
  id: string;
  name: string;
  qualification: string;
  subject: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TuitionCenter {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  exams: string[];
  imageUrl: string;
  mode: 'Offline' | 'Offline + Home Access';
  isVerified?: boolean;
  // Detailed fields
  description?: string;
  address?: string;
  highlights?: string[];
  courses?: Course[];
  faculty?: Faculty[];
  reviews?: Review[];
  gallery?: string[];
  contactPhone?: string;
  contactEmail?: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // We'll map this to Lucide icons
  count?: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  tuitionId?: string;
  buttonText?: string;
}