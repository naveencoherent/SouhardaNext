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
    '/images/homebanner/KSSFCL_banner1.webp',
    '/images/homebanner/KSSFCL_banner2.webp',
    '/images/homebanner/KSSFCL_banner3.webp',
    '/images/homebanner/KSSFCL_banner4.webp',
    '/images/homebanner/KSSFCL_banner5.webp',
    '/images/homebanner/KSSFCL_banner6.webp',
    '/images/homebanner/SahakaraSaptama2024.jpg',
    '/images/homebanner/SahakaraSaptama20241.jpg',
    '/images/homebanner/SahakaraSaptama20242.jpg',
    '/images/homebanner/SahakaraSaptama20243.jpg',
    '/images/homebanner/SahakaraSaptama20244.jpg',
    '/images/homebanner/SahakaraSaptama20245.jpg',
    '/images/homebanner/SahakaraSaptama20246.jpg',
  ],
  categoryCards: [
    { title: 'REGULATORY', image: '/images/home/Regulatory.jpg', href: '/regulatory/souharda-act/' },
    { title: 'EDUCATION', image: '/images/home/Education.jpg', href: '/education' },
    { title: 'SERVICES', image: '/images/home/Services.jpg', href: '/services/e-stamping/' },
    { title: 'KSSFCL COURT', image: '/images/home/SouhardaCourt.jpg', href: '/court' },
  ],
};