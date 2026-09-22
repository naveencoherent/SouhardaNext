'use client';

import React from 'react';

// Props Interface definition to fix TS2322 error
export interface EducationHeroProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function EducationHero({
  badgeText,
  title,
  subtitle,
  imageSrc,
}: EducationHeroProps) {
  return (
    <section className="relative bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text Content */}
        <div className="space-y-3 max-w-2xl">
          {badgeText && (
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full shadow-xs">
              {badgeText}
            </span>
          )}

          {title && (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Image/Graphic Preview */}
        {imageSrc && (
          <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
            <img
              src={imageSrc}
              alt={title || 'Education Hero'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}