'use client';

import React, { createContext, useContext, useState } from 'react';
import en from '../app/dictionaries/en.json';
import kn from '../app/dictionaries/kn.json';

const dictionaries: Record<string, typeof en> = { en, kn };

interface LanguageContextType {
  locale: string;
  t: typeof en;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'kn'>('en');

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  const t = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}