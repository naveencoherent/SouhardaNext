import { IntentItem } from './types';

export const membersIntents: IntentItem[] = [
  {
    keywords: [
      'member',
      'members',
      'member cooperatives',
      'registered societies',
      'society list',
      'cooperative list',
      'total members',
      'how many members',
      'how many societies',
    ],
    response:
      "🏛️ KSSFCL represents over 6,782+ Souharda Cooperatives across Karnataka. You can explore registered societies and regional directory listings in our Directory section.",
  },
  {
    keywords: [
      'registration',
      'how to register',
      'register society',
      'join souharda',
      'new cooperative',
      'form a cooperative',
      'souharda act',
    ],
    response:
      "✍️ To register a new Souharda Cooperative under the Karnataka Souharda Sahakari Act 1997, check our statutory guidelines and regulatory details at /regulatory/souharda-act/.",
  },
  {
    keywords: [
      'benefits',
      'why join',
      'member benefits',
      'cooperative advantages',
    ],
    response:
      "💡 Member cooperatives enjoy statutory support, education & training programs, legal dispute resolution, e-stamping integration, and representation across Karnataka.",
  },
];