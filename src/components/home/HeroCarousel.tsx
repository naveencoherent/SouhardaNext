'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroDignitaryCard from './HeroDignitaryCard';

export default function HeroCarousel() {
  const bannerImages = [
    '/images/homebanner/SahakaraSaptama2024.jpg',
    '/images/homebanner/SahakaraSaptama20241.jpg',
    '/images/homebanner/SahakaraSaptama20242.jpg',
    '/images/homebanner/SahakaraSaptama20243.jpg',
    '/images/homebanner/SahakaraSaptama20244.jpg',
    '/images/homebanner/SahakaraSaptama20245.jpg',
    '/images/homebanner/SahakaraSaptama20246.jpg',
  ];

  const categoryCards = [
    { title: 'REGULATORY', image: '/images/home/Regulatory.jpg' },
    { title: 'EDUCATION', image: '/images/home/Education.jpg' },
    { title: 'SERVICES', image: '/images/home/Services.jpg' },
    { title: 'KSSFCL COURT', image: '/images/home/SouhardaCourt.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <section className="relative w-full h-[580px] sm:h-[680px] bg-slate-900 -mt-20 pt-20 mb-24 sm:mb-32">
      {/* Dynamic Background Banner Images */}
      {bannerImages.map((imagePath, index) => (
        <div
          key={imagePath}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={imagePath}
            alt={`KSSFCL Event Banner ${index + 1}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/50" />
        </div>
      ))}

      {/* Dignitary Card: Visible only on Slide 0 */}
      {currentIndex === 0 && (
        <div className="relative z-10 pt-6 transition-opacity duration-500 ease-in-out opacity-100">
          <HeroDignitaryCard />
        </div>
      )}

      {/* Prominent High-Conversion Category Cards */}
      <div className="absolute bottom-0 right-4 sm:right-8 lg:right-12 z-20 translate-y-1/3 max-w-full">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-end">
          {categoryCards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-52 sm:h-60 lg:h-64 w-36 sm:w-48 lg:w-52 rounded-2xl overflow-hidden border-2 border-amber-500/40 hover:border-amber-400 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-amber-500/20 group cursor-pointer bg-slate-900"
            >
              {/* Image with Zoom Effect */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay for Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />

              {/* Clean Gold Category Heading Positioned at Top */}
              <div className="absolute top-4 inset-x-2 text-center">
                <h3 className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {card.title}
                </h3>
              </div>

              {/* Hover Prompt at Bottom */}
              <div className="absolute bottom-3 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] text-amber-300 font-semibold tracking-widest uppercase bg-slate-950/80 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}