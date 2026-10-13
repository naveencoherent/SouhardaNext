// src/components/souhardaBot/greetings.ts
import { IntentItem } from './types';

export const greetingsIntents: IntentItem[] = [
  {
    keywords: [
      'hi',
      'hello',
      'namaste',
      'namaskara',
      'namaskar',
      'vanakkam',       // <-- Added
      'hey',
      'good morning',
      'good afternoon',
      'good evening',
    ],
    response: "🙏 Namaste! Welcome to KSSFCL Souharda Assistant. How can I help you today?",
  },
  {
    keywords: [
      'how are you',
      'how r u',
      'how do you do',
      'hegidira',       // <-- Added
      'hegiddeera',
      'hegiddira',
    ],
    response: "I am doing well and ready to assist you! You can ask me about Swabhimani Sahakari magazine, Board Directors, Member Cooperatives, or Court services.",
  },
];