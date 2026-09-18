'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroDignitaryCard from './HeroDignitaryCard';
import { HERO_CONFIG, CategoryCard } from '@/config/hero';

export default function HeroCarousel() {
  const { bannerImages = [], categoryCards = [] } = HERO_CONFIG;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!bannerImages.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <section className="relative w-full h-[580px] sm:h-[680px] bg-slate-900 mb-24 sm:mb-32 overflow-hidden">
      
      {/* 1. BACKGROUND BANNER IMAGES */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt={`KSSFCL Event Banner ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={idx === 0} // Highest priority for initial active slide
              loading={idx === 0 ? 'eager' : 'lazy'} // Resolves LCP warning
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
          </div>
        ))}
      </div>

      {/* 2. DIGNITARY CARD */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pointer-events-none">
        <div className="pointer-events-auto inline-block">
          <HeroDignitaryCard />
        </div>
      </div>

      {/* 3. CATEGORY CARDS */}
      <div className="absolute bottom-0 right-4 sm:right-8 lg:right-12 z-30 translate-y-1/3 max-w-full">
        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 justify-end">
          {categoryCards.map((card: CategoryCard, idx: number) => (
            <Link
              key={card.title}
              href={card.href}
              className="relative h-48 sm:h-56 lg:h-64 w-32 sm:w-44 lg:w-48 rounded-2xl overflow-hidden border-2 border-amber-500/40 hover:border-amber-400 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-amber-500/20 group bg-slate-900 block"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 192px"
                priority={idx < 2}
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60" />

              <div className="absolute top-3 sm:top-4 inset-x-2 text-center z-10">
                <h3 className="text-amber-400 font-extrabold text-[11px] sm:text-xs lg:text-sm tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {card.title}
                </h3>
              </div>

              <div className="absolute bottom-3 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="text-[10px] text-amber-300 font-semibold tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}