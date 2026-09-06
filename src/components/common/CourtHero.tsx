'use client';

import Link from 'next/link';
import { Scale, ChevronRight } from 'lucide-react';

export default function CourtHero() {
  return (
    // Increased overall section vertical padding from py-4 to py-6
    <section className="relative bg-gradient-to-br from-red-950 via-rose-950 to-stone-950 text-white py-6 sm:py-8 px-4 text-center border-b-2 border-amber-500 shadow-md overflow-hidden">
      
      {/* Plus-Sign Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 11h2v4h4v2h-4v4h-2v-4h-4v-2h4v-4z' fill='%23ffffff' fill-opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Radial Glow Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Increased spacing between elements from space-y-2 to space-y-4 */}
      <div className="relative max-w-5xl mx-auto space-y-4">
        
        {/* Breadcrumb & Badge */}
        <div className="flex flex-col items-center gap-2.5">
          <nav className="flex items-center gap-1.5 text-[11px] font-medium text-rose-200/70">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-rose-400/50" />
            <span className="text-amber-400 font-semibold">Court</span>
          </nav>

          {/* Badge: Added extra vertical margin (my-1) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-[11px] font-bold tracking-wide shadow-inner my-1">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>KSSFCL Judicial & Legal Cell</span>
          </div>
        </div>

        {/* Compact Title Section with additional top/bottom padding */}
        <div className="relative py-2">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-black text-black/40 whitespace-nowrap select-none uppercase tracking-widest pointer-events-none blur-[1px]">
            COURT FRAMEWORK
          </span>
          
          <h1 className="relative text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Dispute Resolution & <span className="text-amber-400">Arbitration Court</span>
          </h1>
        </div>

        {/* Yellow Accent Line */}
        <div className="pt-1 flex justify-center">
          <div className="w-10 h-0.5 bg-amber-400 rounded-full shadow-sm" />
        </div>

      </div>
    </section>
  );
}