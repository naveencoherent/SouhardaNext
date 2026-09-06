'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Images, 
  Camera, 
  Video, 
  Sparkles, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';

interface GalleryHeroProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export default function GalleryHero({ activeFilter = 'all', onFilterChange }: GalleryHeroProps) {
  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'events', label: 'Cooperative Events' },
    { id: 'awards', label: 'Excellence Awards' },
    { id: 'workshops', label: 'Trainings & Seminars' },
    { id: 'media', label: 'Press & Coverage' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white border-b border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-900 to-slate-950 opacity-90" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-bold">Media Gallery</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs font-semibold shadow-inner">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>KSSFCL Visual Archive</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Capturing Our <span className="text-amber-400">Cooperative</span> Journey
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Explore photo highlights, event archives, annual conventions, and milestone celebrations across the Karnataka Souharda Federal Cooperative network.
            </p>

            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Filter Archives:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onFilterChange && onFilterChange(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      activeFilter === cat.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 space-y-5 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                  <Images className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Media Repository</h3>
                  <p className="text-xs text-slate-400">Official KSSFCL Documentation</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>500+</span>
                  </div>
                  <span className="text-slate-400 text-xs block">Event Photos</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                    <Video className="w-4 h-4" />
                    <span>50+</span>
                  </div>
                  <span className="text-slate-400 text-xs block">Video Records</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Updated through 2026
                </span>
                <span className="text-emerald-400 font-bold">Public Archive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}