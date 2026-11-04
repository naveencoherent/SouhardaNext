'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Download } from 'lucide-react';

export default function MagazineSection() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
  };

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Sahakari Belaku Magazine</h2>
            <p className="text-xs text-slate-500">Monthly publication of KSSFCL</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900">Latest Edition - November 2026</h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Read comprehensive reports, policy analysis, and legal updates concerning Karnataka Souharda Sahakari Act.
            </p>
          </div>

          <div className="relative w-32 h-44 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200">
            <Image
              src="/images/magazine-cover.jpg"
              alt="Sahakari Belaku Magazine"
              fill
              className="object-cover"
              onError={handleImageError}
            />
          </div>

          <a
            href="/downloads/magazine-latest.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs transition-all shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}