'use client';

import React from 'react';
import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface ConnectHeroProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  highlightTerm?: string;
}

export default function ConnectHero({
  title = 'CONNECT WITH US',
  subtitle = 'Have questions, feedback, or need assistance? Reach out to our team.',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Connect' }
  ],
  highlightTerm = 'CONNECT',
}: ConnectHeroProps) {
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
        backgroundColor: '#050c14', // Deep Teal-Slate Base
        backgroundImage: `
          radial-gradient(circle at center, rgba(13, 29, 45, 0.95) 0%, rgba(5, 12, 20, 0.98) 85%)
        `,
      }}
    >
      {/* Communication & Network Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 40H60M40 20V60M25 25L55 55M25 55L55 25' stroke='%23F59E0B' stroke-width='1.2' stroke-dasharray='3 3'/%3E%3Ccircle cx='40' cy='40' r='6' stroke='%23F59E0B' stroke-width='1.5' fill='%23050c14'/%3E%3Ccircle cx='20' cy='40' r='3.5' fill='%23F59E0B'/%3E%3Ccircle cx='60' cy='40' r='3.5' fill='%23F59E0B'/%3E%3Ccircle cx='40' cy='20' r='3.5' fill='%23F59E0B'/%3E%3Ccircle cx='40' cy='60' r='3.5' fill='%23F59E0B'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '45px 45px',
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">

        {/* Dark Breadcrumb Pill Navigation */}
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
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-white uppercase mb-1.5 leading-none overflow-hidden text-ellipsis w-full text-center">
          {renderTitle()}
        </h1>

        {/* Gold Accent Line */}
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mb-2 shrink-0" />

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-xl text-slate-300 text-xs font-normal leading-normal line-clamp-1 text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}