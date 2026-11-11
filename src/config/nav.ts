export interface NavDropdownItem {
  title: string;
  href: string;
}

export interface NavItem {
  nameKey: string;
  fallbackName: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    nameKey: 'home',
    fallbackName: 'Home',
    href: '/',
  },
  {
    nameKey: 'souharda',
    fallbackName: 'Souharda',
    dropdown: [
      { title: 'Cooperative Movement', href: '/souharda/cooperative-movement/' },
      { title: 'About Us', href: '/souharda/about-us/' },
      { title: 'All About KSSFCL', href: '/souharda/all-about-kssfcl/' },
      { title: 'Our Voice', href: '/souharda/our-voice/' },
      { title: 'KSSFCL Directors', href: '/souharda/directors/' },
      { title: 'Members', href: '/souharda/members/' },
      { title: "Souharda's Workforce", href: '/souharda/workforce/' },
    ],
  },
  {
    nameKey: 'regulatory',
    fallbackName: 'Regulatory',
    dropdown: [
      { title: 'Souharda Act', href: '/regulatory/souharda-act/' },
      { title: 'Circulars', href: '/regulatory/circulars/' },
      { title: 'Liquidation', href: '/regulatory/liquidation/' },
      { title: 'Orders', href: '/regulatory/orders/' },
      { title: 'Task Force', href: '/regulatory/task-force/' },
      { title: 'Tenders', href: '/regulatory/tenders/' },
    ],
  },
  {
    nameKey: 'education',
    fallbackName: 'Education',
    dropdown: [
      { title: 'Cooperative Education', href: '/education/cooperative-education/' },
    ],
  },
  {
    nameKey: 'services',
    fallbackName: 'Services',
    dropdown: [
      { title: 'Audit & Inspection', href: '/services/audit-inspection/' },
    ],
  },
  {
    nameKey: 'court',
    fallbackName: 'Court',
    href: '/court/',
  },
  {
    nameKey: 'gallery',
    fallbackName: 'Gallery',
    href: '/gallery/',
  },
  {
    nameKey: 'connect',
    fallbackName: 'Connect',
    href: '/connect/',
  },
];