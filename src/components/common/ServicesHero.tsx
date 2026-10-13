'use client';

import React from 'react';
import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface ServicesHeroProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  highlightTerm?: string;
}

export default function ServicesHero({
  title = 'SERVICES & SUPPORT',
  subtitle = 'Empowering Souharda Co-operatives across Karnataka through statutory and legal excellence.',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ],
  highlightTerm = 'SERVICES',
}: ServicesHeroProps) {
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
      className="relative w-full h-[180px] md:h-[220px] px-4 overflow-hidden border-b-2 border-amber-500 shadow-[0_15px_30px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center text-white"
      style={{
        backgroundColor: '#1A0B2E',
        backgroundImage: `
          radial-gradient(circle at center, #3B1560 0%, #1A0B2E 85%)
        `,
      }}
    >
      {/* Services Watermark / Gear Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20V26M40 54V60M20 40H26M54 40H60M25.8 25.8L30 30M50 50L54.2 54.2M25.8 54.2L30 50M50 30L54.2 25.8' stroke='%23F59E0B' stroke-width='1.5' stroke-linecap='round'/%3E%3Ccircle cx='40' cy='40' r='10' stroke='%23F59E0B' stroke-width='1.5'/%3E%3Ccircle cx='40' cy='40' r='4' stroke='%23F59E0B' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '45px 45px',
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">

        {/* Original Dark Breadcrumb Pill Navigation */}
        {breadcrumbs.length > 0 && (
          <nav 
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 px-3 py-0.5 rounded-full text-[10px] font-semibold text-slate-300 mb-2 shadow-xs"
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
                  <span className="text-slate-500 font-bold" aria-hidden="true">&gt;</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Center Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-white uppercase mb-1.5 leading-none overflow-hidden text-ellipsis w-full text-center">
          {renderTitle()}
        </h1>

        {/* Gold Accent Line */}
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-2 shrink-0" />

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-xl text-purple-100/90 text-xs font-normal leading-normal line-clamp-1 text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}