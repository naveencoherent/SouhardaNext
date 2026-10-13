'use client';

import React from 'react';
import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface EducationHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  highlightTerm?: string;
  badgeText?: string;
  imageSrc?: string;
}

export default function EducationHero({
  title = '',
  subtitle = '',
  breadcrumbs = [],
  highlightTerm,
  badgeText,
  imageSrc,
}: EducationHeroProps) {
  const renderTitle = () => {
    if (!highlightTerm || !title.includes(highlightTerm)) {
      return title;
    }

    const escapedTerm = highlightTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlightTerm.toLowerCase() ? (
        <span key={index} className="text-amber-400">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section 
      className="relative w-full h-[180px] md:h-[220px] px-4 md:px-8 overflow-hidden border-b-2 border-amber-500 shadow-[0_15px_30px_rgba(0,0,0,0.35)] flex items-center justify-center text-white"
      style={{
        backgroundColor: '#032014', // Deep Academic Emerald Base
        backgroundImage: `
          radial-gradient(circle at center, rgba(6, 78, 59, 0.75) 0%, rgba(3, 32, 20, 0.98) 85%)
        `,
      }}
    >
      {/* Education Watermark Pattern - Reduced Icon Size */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 22L18 32L40 42L62 32L40 22Z' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 35V45C24 45 30 49 40 49C50 49 56 45 56 45V35' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M62 32V46' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M22 58C28 55 35 55 40 57C45 55 52 55 58 58V72C52 69 45 69 40 71C35 69 28 69 22 72V58Z' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M40 57V71' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '45px 45px', // Reduced tile size for smaller icons
        }}
      />

      {/* Main Container - Centered Alignment */}
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Optional Badge Display */}
        {badgeText && (
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-xs">
            {badgeText}
          </span>
        )}

        {/* Breadcrumb Navigation Pill */}
        {breadcrumbs.length > 0 && (
          <nav 
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-700/80 px-3 py-0.5 rounded-full text-[10px] font-semibold text-emerald-100 mb-2 shadow-xs"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-amber-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-bold" aria-current="page">
                    {crumb.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-emerald-500 font-bold" aria-hidden="true">&gt;</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Center-Aligned Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-white uppercase mb-1.5 leading-none overflow-hidden text-ellipsis w-full text-center">
          {renderTitle()}
        </h1>

        {/* Center Accent Line */}
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-2 shrink-0" />

        {/* Center-Aligned Subtitle */}
        {subtitle && (
          <p className="max-w-xl text-emerald-100/90 text-xs font-normal leading-normal line-clamp-2 text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}