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
      {
        title: 'Cooperative Movement',
        href: '/souharda/cooperative-movement/',
      },
      {
        title: 'About Us',
        href: '/souharda/about-us/',
      },
    ],
  },
  {
    nameKey: 'regulatory',
    fallbackName: 'Regulatory',
    dropdown: [
      {
        title: 'Souharda Act',
        href: '/regulatory/souharda-act/',
      },
      {
        title: 'Rules & Bye-Laws',
        href: '/regulatory/rules-byelaws/',
      },
    ],
  },
  {
    nameKey: 'education',
    fallbackName: 'Education',
    dropdown: [
      {
        title: 'Cooperative Education',
        href: '/education/cooperative-education/',
      },
      {
        title: 'Training Programs',
        href: '/education/training-programs/',
      },
    ],
  },
  {
    nameKey: 'services',
    fallbackName: 'Services',
    dropdown: [
      {
        title: 'Audit & Inspection',
        href: '/services/audit-inspection/',
      },
      {
        title: 'Technical Support',
        href: '/services/technical-support/',
      },
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