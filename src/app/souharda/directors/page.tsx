'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { Search } from 'lucide-react';
import { ALL_DIRECTORS } from '@/data/directors';

export default function DirectorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDirectors = useMemo(() => {
    return ALL_DIRECTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.region && d.region.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 pb-16">
      <PageHero 
        themeColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Souharda', href: '/souharda' },
          { label: 'Board of Directors' },
        ]}
        title="BOARD OF DIRECTORS" 
        subtitle="Meet the elected leadership body of Karnataka State Souharda Federal Cooperative Ltd." 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        {/* Search Input Bar */}
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3 max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            placeholder="Search director by name, title, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-1 bg-transparent text-sm text-slate-800 focus:outline-none"
          />
        </div>

        {/* Directors Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredDirectors.map((director) => (
            <Link
              key={director.id}
              href={`/souharda/directors/${director.slug}`}
              className="group cursor-pointer w-full max-w-[280px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden flex flex-col font-sans transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-sky-300"
            >
              <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#112A46] via-[#112A46]/80 to-transparent pt-8 pb-2 px-3 flex items-end justify-between">
                  {director.region && (
                    <span className="text-[#C5A028] font-extrabold text-[12px] uppercase tracking-wider">
                      {director.region}
                    </span>
                  )}
                </div>
              </div>

              <div className="h-[3px] bg-amber-400 w-full shrink-0" />

              <div className="p-4 text-center flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm leading-tight transition-colors duration-300 group-hover:text-sky-700">
                    {director.name}
                  </h3>
                  <p className="text-sky-600 text-xs font-semibold mt-1">
                    {director.designation}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-sky-600 uppercase tracking-wide">
                  View Full Profile
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}