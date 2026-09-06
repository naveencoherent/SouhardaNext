'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface SectionConfig {
  image: string;
  gradient: string;
}

// Map top-level route segments to specific images and gradient themes
const SECTION_THEMES: Record<string, SectionConfig> = {
  souharda: {
    image: '/images/banners/souharda-bg.jpg',
    gradient: 'from-blue-900/80 to-slate-900/80',
  },
  regulatory: {
    image: '/images/banners/regulatory-bg.jpg',
    gradient: 'from-amber-900/80 to-slate-900/80',
  },
  education: {
    image: '/images/banners/education-bg.jpg',
    gradient: 'from-emerald-900/80 to-slate-900/80',
  },
  services: {
    image: '/images/banners/services-bg.jpg',
    gradient: 'from-indigo-900/80 to-slate-900/80',
  },
};

// Fallback theme for standalone pages (e.g., /contact, /news, or unmatched routes)
const DEFAULT_THEME: SectionConfig = {
  image: '/images/banners/default-bg.jpg',
  gradient: 'from-slate-900/80 to-blue-950/80',
};

interface AutoSectionBannerProps {
  pageTitle: string;
  subtitle?: string;
}

export const AutoSectionBanner: React.FC<AutoSectionBannerProps> = ({
  pageTitle,
  subtitle,
}) => {
  const pathname = usePathname(); // e.g., "/souharda/members"

  // Extract the first folder segment after the leading slash
  const sectionKey = pathname?.split('/')[1]?.toLowerCase() || '';

  // Select matching theme or fallback to default
  const theme = SECTION_THEMES[sectionKey] || DEFAULT_THEME;

  return (
    <div
      className="relative w-full h-48 md:h-60 flex items-center justify-center bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url('${theme.image}')` }}
    >
      {/* Overlay gradient to ensure text readability */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />

      {/* Title Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider drop-shadow-md">
          {pageTitle}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-gray-200 drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};