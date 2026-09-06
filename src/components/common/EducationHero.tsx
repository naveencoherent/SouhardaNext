'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';

interface EducationHeroProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function EducationHero({
  badgeText = 'Co-operative Education Wing',
  title,
  subtitle,
  imageSrc = '/images/souharda/AllAboutKSSFCL.webp',
}: EducationHeroProps) {
  const [hasBannerError, setHasBannerError] = useState(false);

  return (
    <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-emerald-950 overflow-hidden flex items-center justify-center">
      {/* Hero Background Image */}
      {!hasBannerError && imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-overlay"
          onError={() => setHasBannerError(true)}
        />
      ) : null}

      {/* Center Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
        {badgeText && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold rounded-full uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>{badgeText}</span>
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Vignette Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-emerald-950/80 pointer-events-none" />
    </header>
  );
}