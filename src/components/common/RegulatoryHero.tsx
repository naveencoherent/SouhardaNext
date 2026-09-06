'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RegulatoryHeroProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function RegulatoryHero({
  badgeText,
  title,
  subtitle,
  imageSrc = '/images/souharda/AllAboutKSSFCL.webp',
}: RegulatoryHeroProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Optional Background Image with Error Fallback */}
      {!hasImageError && imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
          onError={() => setHasImageError(true)}
        />
      ) : null}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
        <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
          {badgeText}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />
    </header>
  );
}