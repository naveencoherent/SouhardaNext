'use client';

import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NewsItem {
  textEn: string;
  textKn: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    textEn: 'Sahakara Saptaha Celebrations - View Gallery & Details',
    textKn: 'ಸಹಕಾರ ಸಪ್ತಾಹ ಆಚರಣೆಗಳು - ಗ್ಯಾಲರಿ ಮತ್ತು ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    href: '/news',
  },
  {
    textEn: 'Important Compliance Circulars Updated for Souharda Cooperatives',
    textKn: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಪ್ರಮುಖ ಅನುಸರಣೆ ಸುತ್ತೋಲೆಗಳನ್ನು ಅಪ್‌ಡೇಟ್ ಮಾಡಲಾಗಿದೆ',
    href: '/regulatory/circulars',
  },
  {
    textEn: 'Upcoming Cooperative Training Programs & Workshops Registration Open',
    textKn: 'ಮುಂಬರುವ ಸಹಕಾರಿ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳ ನೋಂದಣಿ ಪ್ರಾರಂಭವಾಗಿದೆ',
    href: '/education/training',
  },
];

export default function NewsTicker() {
  const { locale } = useLanguage();

  return (
    <div className="w-full bg-[#00284d] text-white border-y border-amber-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* Static Badge Label */}
        <div className="flex items-center gap-2 bg-amber-500 text-slate-950 font-bold text-xs uppercase px-4 py-2.5 z-10 shrink-0">
          <Bell className="w-4 h-4 animate-bounce" />
          <span>{locale === 'kn' ? 'ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು' : 'Latest Updates'}</span>
        </div>

        {/* Continuous Scrolling Text Container */}
        <div className="overflow-hidden relative w-full py-2 bg-[#001f3f]/80">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-xs sm:text-sm">
            {newsItems.concat(newsItems).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                {locale === 'kn' ? item.textKn : item.textEn}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}