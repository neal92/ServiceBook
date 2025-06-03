export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Business Consultation',
    description: 'One-on-one business strategy and growth consultation',
    duration: 60,
    price: 150,
    category: 'Consulting'
  },
  {
    id: '2',
    name: 'Marketing Strategy',
    description: 'Comprehensive marketing plan development',
    duration: 90,
    price: 200,
    category: 'Marketing'
  },
  {
    id: '3',
    name: 'Financial Planning',
    description: 'Personal or business financial planning session',
    duration: 60,
    price: 175,
    category: 'Finance'
  },
  {
    id: '4',
    name: 'SEO Audit',
    description: 'Complete website SEO analysis and recommendations',
    duration: 120,
    price: 250,
    category: 'Marketing'
  }
];