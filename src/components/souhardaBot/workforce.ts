import { IntentItem } from './types';

export interface StaffMember {
  name: string;
  aliases: string[];
  designation: string;
  department?: string;
  email?: string;
  mobile?: string;
}

export const WORKFORCE_DATA: StaffMember[] = [
  {
    name: 'Sri Narayana Hegde',
    aliases: ['narayana hegde', 'narayan hegde', 'hegde'],
    designation: 'Senior Officer',
    department: 'Secretariat',
    email: 'meetings@souharda.coop',
    mobile: '9448000000',
  },
  // Do NOT add generic aliases like "souharda", "kssfcl", or "admin" here!
];

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