import { IntentItem } from './types';

export const regulatoryIntents: IntentItem[] = [
  {
    keywords: ['regulatory', 'act', 'souharda act', '1997 act', 'bye law', 'byelaw', 'rules', 'compliance', 'audit'],
    response: "⚖️ KSSFCL operates under the Karnataka Souharda Sahakari Act, 1997. You can access regulatory guidelines, act details, and compliance frameworks at /regulatory/souharda-act/.",
  },
  {
    keywords: ['circular', 'circulars', 'official order', 'notification', 'notifications'],
    response: "📄 View all official statutory circulars, operational guidelines, and government notifications issued by KSSFCL at /regulatory/circulars/.",
  },
];