'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  themeColor?: 'court' | 'blue' | 'emerald' | 'slate';
}

const themeGradients = {
  court: 'from-[#60121d] via-[#420a13] to-[#240409]',
  blue: 'from-[#1E3A8A] via-[#1E293B] to-[#0F172A]',
  emerald: 'from-[#065F46] via-[#044E3A] to-[#022C22]',
  slate: 'from-[#334155] via-[#1E293B] to-[#0F172A]',
};

export default function PageHero({
  breadcrumbs = [{ label: 'Home', href: '/' }],
  badgeText,
  badgeIcon,
  title,
  subtitle,
  themeColor = 'blue'
}: PageHeroProps) {
  // Split title to highlight the last word in gold
  const words = title.trim().split(' ');
  const lastWord = words.length > 1 ? words.pop() : '';
  const mainPart = words.join(' ');

  return (
    <section 
      className={`relative overflow-hidden bg-gradient-to-r ${themeGradients[themeColor]} text-white py-8 lg:py-10 px-4 border-b-2 border-b-amber-500 text-center shadow-xl shadow-slate-900/30 z-10`}
    >
      {/* Repeating Micro-Starburst Pattern (16px x 16px Grid) */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='none' stroke='%23ffffff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='8' r='1.2' fill='%23ffffff'/%3E%3Cpath d='M8 5V3M8 11v2M5 8H3M11 8h2M5.8 5.8L4.4 4.4M10.2 10.2l1.4 1.4M10.2 5.8l1.4-1.4M5.8 10.2l-1.4 1.4'/%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Smooth Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-3 z-10">
        
        {/* Multi-Level Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 bg-black/40 px-3.5 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />}
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-amber-400 font-bold uppercase" : ""}>
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Optional Badge */}
        {badgeText && (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold backdrop-blur-sm">
              {badgeIcon}
              <span>{badgeText}</span>
            </div>
          </div>
        )}

     {/* Main Heading */}
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white leading-tight drop-shadow-sm">
  {mainPart} {lastWord && <span className="text-amber-400">{lastWord}</span>}
</h1>
        {/* Gold Divider Bar */}
        <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}