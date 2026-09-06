'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, ChevronRight } from 'lucide-react';

interface GalleryHeroProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export default function GalleryHero({ activeFilter = 'all', onFilterChange }: GalleryHeroProps) {
  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'events', label: 'Events' },
    { id: 'awards', label: 'Awards' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'media', label: 'Press' },
  ];

  return (
    <section className="bg-slate-900 text-white border-b border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Top Bar: Breadcrumb + Tag */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-semibold">Gallery</span>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-[11px] font-medium">
            <Camera className="w-3 h-3" /> KSSFCL Archive
          </span>
        </div>

        {/* Compact Main Row: Title + Category Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Media Gallery
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Photo archives and event highlights across the cooperative network.
            </p>
          </div>

          {/* Compact Filter Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onFilterChange && onFilterChange(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
                  activeFilter === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}