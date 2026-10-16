import { IntentItem } from './types';

export interface StaffMember {
  name: string;
  name_kn?: string;
  aliases?: string[];
  designation: string;
  department?: string;
  email?: string;
  mobile?: string;
  cug_mobile?: string;
}

const clean = (s: string = '') => s.toLowerCase().replace(/a/g, '').replace(/\s+/g, '');

export const WORKFORCE_DATA: StaffMember[] = [
  {
    name: 'Sri Narayana Hegde',
    name_kn: 'ನಾರಾಯಣ ಹೆಗಡೆ',
    aliases: [
      'narayana hegde',
      'narayan hegde',
      'narayan hegade',
      'narayana hegade',
      'hegde',
      'hegade',
      'narayana',
      'narayan',
      'ನಾರಾಯಣ',
      'ಹೆಗಡೆ',
      'ನಾರಾಯಣ ಹೆಗಡೆ',
    ],
    designation: 'Senior Officer',
    department: 'Secretariat',
    email: 'meetings@souharda.coop',
    mobile: '9448000000',
  },
];

export function findStaffMember(query: string, workforceList: StaffMember[] = WORKFORCE_DATA): StaffMember | undefined {
  if (!query || query.trim().length < 3) return undefined;

  const q = query.toLowerCase().trim();
  const cleanedQuery = clean(q);

  return workforceList.find((staff) => {
    const aliases = staff.aliases || [];

    // 1. Direct match on full name or Kannada name
    if (staff.name && staff.name.toLowerCase().includes(q)) return true;
    if (staff.name_kn && staff.name_kn.includes(q)) return true;

    // 2. Direct match on explicit aliases
    if (aliases.some((alias) => alias.toLowerCase() === q || q.includes(alias.toLowerCase()))) {
      return true;
    }

    // 3. Cleaned phonetic match on names only (ignoring raw emails for loose matches)
    const combinedNames = `${staff.name || ''} ${staff.name_kn || ''} ${aliases.join(' ')}`;
    if (clean(combinedNames).includes(cleanedQuery)) return true;

    return false;
  });
}

export const workforceIntents: IntentItem[] = [
  {
    keywords: [
      'staff',
      'workforce',
      'employee',
      'employees',
      'officer',
      'officers',
      'team',
      'department',
      'departments',
      'who works at kssfcl',
    ],
    response:
      "👔 KSSFCL operates with dedicated officers and staff across key wings including Administration, Accounts, IT, Legal, Education, and Regional Divisions across Karnataka.",
  },
];