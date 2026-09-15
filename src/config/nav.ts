export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavItem {
  nameKey: string;
  fallbackName: string;
  href: string;
  dropdown?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { nameKey: 'home', fallbackName: 'Home', href: '/' },
  {
    nameKey: 'souharda',
    fallbackName: 'Souharda',
    href: '/souharda',
    dropdown: [
      { title: 'Co-operative Movement', href: '/souharda/cooperative-movement' },
      { title: 'All About KSSFCL', href: '/souharda/all-about-kssfcl' },
      { title: 'Our Voice', href: '/souharda/our-voice' },
      { title: 'KSSFCL Directors', href: '/souharda/directors' },
      { title: 'Members', href: '/souharda/members' },
      { title: "Souharda's Workforce", href: '/souharda/workforce' },
    ],
  },
  {
    nameKey: 'regulatory',
    fallbackName: 'Regulatory',
    href: '/regulatory',
    dropdown: [
      { title: 'Souharda Act', href: '/regulatory/souharda-act' },
      { title: 'Task Force', href: '/regulatory/task-force' },
      { title: 'Orders', href: '/regulatory/orders' },
      { title: 'Liquidation', href: '/regulatory/liquidation' },
      { title: 'Circulars', href: '/regulatory/circulars' },
      { title: 'Tenders', href: '/regulatory/tenders' },
    ],
  },
  {
    nameKey: 'education',
    fallbackName: 'Education',
    href: '/education',
    dropdown: [
      { title: 'Education Home', href: '/education' },
      { title: 'Training', href: '/education/training' },
      { title: 'Swabhimani Sahakari', href: '/education/swabhimani-sahakari' },
      { title: 'Study Materials', href: '/education/study-materials' },
      { title: 'Publications', href: '/education/publications' },
    ],
  },
  {
    nameKey: 'services',
    fallbackName: 'Services',
    href: '/services',
    dropdown: [
      { title: 'E-Stamping', href: '/services/e-stamping' },
      { title: 'Digital Intelligence', href: '/services/digital-intelligence' },
      { title: 'Info to Members', href: '/services/info-to-members' },
      { title: 'CSC Services', href: '/services/csc' },
    ],
  },
  { nameKey: 'court', fallbackName: 'Court', href: '/court' },
  { nameKey: 'gallery', fallbackName: 'Gallery', href: '/gallery' },
  { nameKey: 'connect', fallbackName: 'Connect', href: '/connect' },
];