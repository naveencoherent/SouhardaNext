import { IntentItem } from './types';

export const magazineIntents: IntentItem[] = [
  {
    keywords: [
      'magazine',
      'swabhimani',
      'swabhimani sahakari',
      'sahakari magazine',
      'latest edition',
      'monthly magazine',
      'pdf',
      'archive',
      'archives',
      'past editions',
      'old issues',
    ],
    response:
      "📖 'Swabhimani Sahakari' is the official monthly magazine of KSSFCL. You can read the latest editions or access complete archives at /education/swabhimani-sahakari/.",
  },
  {
    keywords: [
      'subscribe',
      'subscription',
      'get magazine',
      'receive magazine',
      'buy magazine',
      'copies',
    ],
    response:
      "📰 To subscribe or inquire about physical/digital copies of Swabhimani Sahakari, please visit our Education wing under /education/swabhimani-sahakari/.",
  },
  {
    keywords: [
      'editor',
      'publisher',
      'editorial',
      'article',
      'publish article',
    ],
    response:
      "✍️ For editorial contributions, article submissions, or press inquiries regarding Swabhimani Sahakari, please get in touch with our Education & Publications team at /education/swabhimani-sahakari/.",
  },
];