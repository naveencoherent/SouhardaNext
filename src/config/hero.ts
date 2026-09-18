export interface CategoryCard {
  title: string;
  image: string;
  href: string;
}

export interface HeroConfig {
  bannerImages: string[];
  categoryCards: CategoryCard[];
}

export const HERO_CONFIG: HeroConfig = {
  bannerImages: [
    '/images/homebanner/SahakaraSaptama2024.jpg',
    '/images/homebanner/SahakaraSaptama20241.jpg',
    '/images/homebanner/SahakaraSaptama20242.jpg',
    '/images/homebanner/SahakaraSaptama20243.jpg',
    '/images/homebanner/SahakaraSaptama20244.jpg',
    '/images/homebanner/SahakaraSaptama20245.jpg',
    '/images/homebanner/SahakaraSaptama20246.jpg',
  ],
  categoryCards: [
    { title: 'REGULATORY', image: '/images/home/Regulatory.jpg', href: '/regulatory' },
    { title: 'EDUCATION', image: '/images/home/Education.jpg', href: '/education' },
    { title: 'SERVICES', image: '/images/home/Services.jpg', href: '/services' },
    { title: 'KSSFCL COURT', image: '/images/home/SouhardaCourt.jpg', href: '/court' },
  ],
};