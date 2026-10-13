import { IntentItem } from './types';

export interface DirectorMember {
  name: string;
  region: string;
  districts: string[];
  aliases: string[];
  designation: string;
  phone?: string;
}

export const DIRECTORS_DATA: DirectorMember[] = [
  {
    name: 'Sri. G. Nanjangouda',
    region: 'Vijayanagara',
    districts: ['vijayanagara', 'hospet'],
    aliases: ['president', 'nanjangouda'],
    designation: 'Hon. President',
    phone: 'Contact KSSFCL Office',
  },
  {
    name: 'Sri. A. R. Prasannakumar',
    region: 'Shivamogga',
    districts: ['shivamogga', 'shimoga'],
    aliases: ['vice president', 'prasannakumar'],
    designation: 'Hon. Vice President',
    phone: 'Contact KSSFCL Office',
  },
  {
    name: 'Sri. B. H. Krishna Reddy',
    region: 'Kolar',
    districts: ['kolar', 'chikkaballapur'],
    aliases: ['krishna reddy', 'kolar'],
    designation: 'Director (Kolar)',
    phone: 'Contact KSSFCL Office',
  },
  {
    name: 'Sri. Narayana Hegde',
    region: 'Uttara Kannada',
    districts: ['uttara kannada', 'karwar', 'sirsi'],
    aliases: ['narayana hegde', 'narayan hegde', 'hegde'],
    designation: 'Director (Uttara Kannada)',
    phone: 'Contact KSSFCL Office',
  },
  {
    name: 'Sri. Gurupadappa Nagamarapalli',
    region: 'Bidar',
    districts: ['bidar'],
    aliases: ['nagamarapalli', 'gurupadappa'],
    designation: 'Director (Bidar)',
    phone: 'Contact KSSFCL Office',
  },
  {
    name: 'Sri. M. R. Prabhudev',
    region: 'Davanagere',
    districts: ['davanagere', 'davangere'],
    aliases: ['prabhudev', 'm r prabhudev'],
    designation: 'Director (Davanagere)',
    phone: 'Contact KSSFCL Office',
  },
];

export const directorsIntents: IntentItem[] = [
  {
    keywords: [
      'board of directors',
      'all directors',
      'director list',
      'management team',
      'leadership',
    ],
    response:
      "👥 KSSFCL is guided by President Sri G. Nanjangouda, Vice President Sri A.R. Prasannakumar, MD Sri Sharangowda G. Patil, and Board Directors across Karnataka. View all directors at /souharda/directors/.",
  },

  {
  name: 'Sri Sharangowda G. Patil',
  region: 'Bengaluru Head Office',
  districts: ['bengaluru', 'head office'],
  aliases: ['md', 'managing director', 'chief executive', 'sharangowda'],
  designation: 'Managing Director',
  phone: 'Contact KSSFCL Office',
},
];