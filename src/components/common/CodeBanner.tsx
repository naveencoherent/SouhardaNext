'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface SectionConfig {
  gradient: string;
}

// Map top-level route segments to specific LIGHTER gradient themes
const SECTION_THEMES: Record<string, SectionConfig> = {
  souharda: {
    // New, Lighter slate blue matching right reference image
    gradient: 'from-[#3A5B8F] to-[#2B477A]', 
  },
  regulatory: {
    gradient: 'from-[#8c4a20] to-[#5a2e12]', // (Remains dark for section separation)
  },
  education: {
    gradient: 'from-[#1b5e3a] to-[#113e25]', // (Remains dark for section separation)
  },
  services: {
    gradient: 'from-[#3b336a] to-[#231d47]', // (Remains dark for section separation)
  },
};

const DEFAULT_THEME: SectionConfig = {
  // Lighter blue for default pages
  gradient: 'from-[#3A5B8F] to-[#2B477A]', 
};

interface AutoSectionBannerProps {
  pageTitle: string;
  subtitle?: string;
}

export const AutoSectionBanner: React.FC<AutoSectionBannerProps> = ({
  pageTitle,
  subtitle,
}) => {
  const pathname = usePathname();
  const sectionKey = pathname?.split('/')[1]?.toLowerCase() || '';
  const theme = SECTION_THEMES[sectionKey] || DEFAULT_THEME;

  return (
    <div className={`w-full py-12 md:py-16 bg-gradient-to-r ${theme.gradient} text-white text-center shadow-inner`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest uppercase text-white drop-shadow-sm font-sans">
          {pageTitle}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-xl font-light tracking-wide text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};