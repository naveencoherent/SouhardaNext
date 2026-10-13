'use client';

import React from 'react';
import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface RegulatoryHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  highlightTerm?: string;
  badgeText?: string; // Kept as optional so pages passing badgeText don't throw errors
}

export default function RegulatoryHero({
  title = '',
  subtitle = '',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Regulatory Framework', href: '/regulatory' },
    { label: 'Souharda Act' }
  ],
  highlightTerm = '1997',
  badgeText,
}: RegulatoryHeroProps) {
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
        backgroundColor: '#091024',
        backgroundImage: `
          radial-gradient(circle at center, rgba(30, 58, 138, 0.55) 0%, rgba(9, 16, 36, 0.95) 85%)
        `,
      }}
    >
      {/* Scaled-Down Gold Booti Motif Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 12C28 17 22 22 22 27C22 31.4 25.6 35 30 35C34.4 35 38 31.4 38 27C38 22 32 17 30 12ZM30 32C27.2 32 25 29.8 25 27C25 24.5 28 20.5 30 17.8C32 20.5 35 24.5 35 27C35 29.8 32.8 32 30 32Z' fill='%23F59E0B'/%3E%3Ccircle cx='30' cy='38' r='1.5' fill='%23F59E0B'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '45px 45px',
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">

        {/* Breadcrumb Pill Navigation */}
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

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-white uppercase mb-1.5 leading-none whitespace-nowrap overflow-hidden text-ellipsis w-full">
          {renderTitle()}
        </h1>

        {/* Gold Accent Line */}
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-2 shrink-0" />

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-xl text-slate-300 text-xs font-normal leading-normal line-clamp-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}