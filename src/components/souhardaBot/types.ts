export interface IntentItem {
  keywords: string[];
  response: string;
  name?: string;
  region?: string;
  designation?: string;
  districts?: string[] | string;
  link?: string;
  category?: string;
  [key: string]: unknown;
}

export interface ChatMessage {
  id?: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp?: string | Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  loading: boolean;
  input: string;
}