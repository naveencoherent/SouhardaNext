'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type EditionConfig = {
  year: string;
  month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
  fullTitle: string;
};

// ============================================================================
// MONTHLY UPDATE: Only update these two entries each month!
// 1. LATEST_EDITION   -> Appears on the LEFT & opens on "Read more"
// 2. PREVIOUS_EDITION -> Appears on the RIGHT (one month older)
// ============================================================================
const LATEST_EDITION: EditionConfig = {
  year: '2026',
  month: 'Nov',
  fullTitle: 'November 2026',
};

const PREVIOUS_EDITION: EditionConfig = {
  year: '2026',
  month: 'Oct',
  fullTitle: 'October 2026',
};

function getEditionPaths({ year, month, fullTitle }: EditionConfig) {
  const basePath = `/images/Swabhimani_Sahakari/2026_30/${year}/${month}/Swabhimani_Sahakari_${month}_${year}`;
  return {
    id: `${month}-${year}`,
    label: fullTitle,
    coverImage: `${basePath}.webp`,
    pdfUrl: `${basePath}.pdf`,
  };
}

const MAGAZINE_DATA = {
  topTagline:
    'Welcome to the official magazine of KSSFCL — your go-to source for everything happening within our organization.',
  bgImage: '/images/Swabhimani_Sahakari/sahakari.jpg',
  fallbackCover: '/images/Swabhimani_Sahakari/sahakari.jpg',
  kannadaTitleFirst: 'ಸ್ವಾಭಿಮಾನಿ',
  kannadaTitleSecond: 'ಸಹಕಾರಿ',
  kannadaSubtitle:
    'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಚಳುವಳಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಮೀಸಲಾಗಿರುವ ಏಕೈಕ ಮಾಸಪತ್ರಿಕೆ.',
  archiveUrl: '/education/swabhimani-sahakari/',
};

function MagazineCoverCard({
  label,
  coverImage,
  pdfUrl,
  fallbackCover,
}: {
  label: string;
  coverImage: string;
  pdfUrl: string;
  fallbackCover: string;
}) {
  const [imgSrc, setImgSrc] = useState(coverImage);

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`Read Swabhimani Sahakari - ${label}`}
      className="group relative w-36 sm:w-44 md:w-48 aspect-[3/4] rounded-md overflow-hidden shadow-xl border border-white/20 bg-[#1f290e] transition-transform duration-300 hover:scale-[1.03]"
    >
      <Image
        src={imgSrc}
        alt={`Swabhimani Sahakari ${label}`}
        fill
        unoptimized
        className="object-cover"
        onError={() => {
          if (imgSrc !== fallbackCover) {
            setImgSrc(fallbackCover);
          }
        }}
      />
    </a>
  );
}

export default function MagazineSection() {
  const latest = getEditionPaths(LATEST_EDITION);
  const previous = getEditionPaths(PREVIOUS_EDITION);
  const displayedEditions = [latest, previous];

  return (
    <section
      className="relative overflow-hidden bg-[#2b3814] bg-cover bg-center my-8"
      style={{ backgroundImage: `url('${MAGAZINE_DATA.bgImage}')` }}
    >
      {/* Olive-green translucent overlay matching original banner */}
      <div
        className="absolute inset-0 bg-[#283612]/80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Centered Tagline */}
        <p className="text-center text-white text-sm sm:text-base md:text-lg font-normal tracking-wide mb-10">
          {MAGAZINE_DATA.topTagline}
        </p>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Column: Latest Edition (Left) + Previous Edition (Right) + Archives Button */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              {displayedEditions.map((edition) => (
                <MagazineCoverCard
                  key={edition.id}
                  label={edition.label}
                  coverImage={edition.coverImage}
                  pdfUrl={edition.pdfUrl}
                  fallbackCover={MAGAZINE_DATA.fallbackCover}
                />
              ))}
            </div>

            <Link
              href={MAGAZINE_DATA.archiveUrl}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-[#b59d3c] bg-black/15 hover:bg-[#b59d3c]/20 text-[#e8d56b] hover:text-white text-sm font-medium transition-colors"
            >
              Click here for Archives
            </Link>
          </div>

          {/* Right Column: Kannada Heading, Caption & Read More Button */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#1a2b3c] drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)]">
                {MAGAZINE_DATA.kannadaTitleFirst}{' '}
              </span>
              <span className="text-[#f4c430]">
                {MAGAZINE_DATA.kannadaTitleSecond}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-100/90 leading-relaxed max-w-md lg:pl-3">
              {MAGAZINE_DATA.kannadaSubtitle}
            </p>

            <div className="pt-2 lg:pl-3">
              <a
                href={latest.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-[#b59d3c] bg-black/15 hover:bg-[#b59d3c]/20 text-[#e8d56b] hover:text-white text-sm font-medium transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}