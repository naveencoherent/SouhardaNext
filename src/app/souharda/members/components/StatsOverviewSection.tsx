'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Users, ShieldCheck, Globe } from 'lucide-react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsOverviewSection() {
  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto pt-2">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
          The Souharda Movement:
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#d97706] tracking-tight">
          Empowering Karnataka.
        </h1>
      </div>

      <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-sm md:text-base">
        The Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL) represents a landmark shift 
        in the cooperative landscape. What started as a grassroots movement in 1997 is now the gold 
        standard for <span className="font-bold text-[#003366]">6,500+ societies</span>, built on the pillars of{' '}
        <span className="font-bold text-[#003366]">Functional Autonomy</span> and{' '}
        <span className="font-bold text-[#003366]">Member-Led Governance</span>.
      </p>

      {/* STATS BAR */}
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-300 rounded-full shadow-xl shadow-slate-200/60 py-5 px-6 md:px-10 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          <div className="flex items-center justify-center space-x-3.5 pt-2 md:pt-0 group">
            <div className="w-11 h-11 rounded-full bg-amber-500/10 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
              <MapPin className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-black text-[#003366] leading-none tracking-tight">
                <AnimatedNumber value={31} />
              </p>
              <p className="text-[11px] uppercase font-extrabold tracking-wider text-slate-600 mt-1">
                Districts
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3.5 pt-2 md:pt-0 group">
            <div className="w-11 h-11 rounded-full bg-amber-500/10 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
              <Users className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-black text-[#003366] leading-none tracking-tight">
                <AnimatedNumber value={6500} suffix="+" />
              </p>
              <p className="text-[11px] uppercase font-extrabold tracking-wider text-slate-600 mt-1">
                Societies
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3.5 pt-2 md:pt-0 group">
            <div className="w-11 h-11 rounded-full bg-amber-500/10 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-black text-[#003366] leading-none tracking-tight">
                <AnimatedNumber value={100} suffix="%" />
              </p>
              <p className="text-[11px] uppercase font-extrabold tracking-wider text-slate-600 mt-1">
                Autonomy
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3.5 pt-2 md:pt-0 group">
            <div className="w-11 h-11 rounded-full bg-amber-500/10 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
              <Globe className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-black text-[#003366] leading-none tracking-tight">
                Apex
              </p>
              <p className="text-[11px] uppercase font-extrabold tracking-wider text-slate-600 mt-1">
                Governance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}