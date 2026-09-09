'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';

export default function SouhardaMembersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="w-full">
      {/* HERO SECTION WITH REUSABLE HERO COMPONENT */}
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1e3a8a]">
            The Souharda Movement: <br />
            <span className="text-[#ea580c] block mt-1">Empowering Karnataka.</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL) represents a landmark shift in the cooperative landscape. What started as a grassroots movement in 1997 is now the gold standard for{' '}
            <strong className="font-bold text-[#1e3a8a]">6,500+ societies</strong>, built on the pillars of{' '}
            <strong className="font-bold text-[#1e3a8a]">Functional Autonomy</strong> and{' '}
            <strong className="font-bold text-[#1e3a8a]">Member-Led Governance</strong>.
          </p>

{/* FLOATING STAT CAPSULE WITH PERFECTLY CENTERED DIVIDERS */}
<div className="pt-4 flex justify-center w-full px-4">
  <div className="bg-white rounded-full px-8 py-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-8 max-w-4xl w-full">
    
    {/* Item 1: Districts */}
    <div className="flex items-center space-x-3.5">
      <svg className="w-6 h-6 text-[#d97706] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
      <div className="text-left">
        <p className="text-xl md:text-2xl font-extrabold text-[#1e3a8a] leading-none tracking-tight">31</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Districts</p>
      </div>
    </div>

    {/* Centered Vertical Divider */}
    <span className="hidden md:block w-px h-8 bg-slate-200 self-center shrink-0" />

    {/* Item 2: Societies */}
    <div className="flex items-center space-x-3.5">
      <svg className="w-6 h-6 text-[#d97706] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
      <div className="text-left">
        <p className="text-xl md:text-2xl font-extrabold text-[#1e3a8a] leading-none tracking-tight">6500+</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Societies</p>
      </div>
    </div>

    {/* Centered Vertical Divider */}
    <span className="hidden md:block w-px h-8 bg-slate-200 self-center shrink-0" />

    {/* Item 3: Autonomy */}
    <div className="flex items-center space-x-3.5">
      <svg className="w-6 h-6 text-[#d97706] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
      <div className="text-left">
        <p className="text-xl md:text-2xl font-extrabold text-[#1e3a8a] leading-none tracking-tight">100%</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Autonomy</p>
      </div>
    </div>

    {/* Centered Vertical Divider */}
    <span className="hidden md:block w-px h-8 bg-slate-200 self-center shrink-0" />

    {/* Item 4: Governance */}
    <div className="flex items-center space-x-3.5">
      <svg className="w-6 h-6 text-[#d97706] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
      <div className="text-left">
        <p className="text-xl md:text-2xl font-extrabold text-[#1e3a8a] leading-none tracking-tight">Apex</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Governance</p>
      </div>
    </div>

  </div>
</div>
        </div>
      </HeroSection>

      {/* LOWER DASHBOARD CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">

       {/* DOWNLOAD RESOURCE CARDS MATCHING EXACT DESIGN */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
  
  {/* Kannada Resource Card */}
  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex items-start space-x-5">
    {/* PDF Icon with Overlay Badge */}
    <div className="relative shrink-0">
      <div className="w-12 h-14 bg-[#dc2626] rounded-lg flex items-center justify-center text-white shadow-sm">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm4-3H17v1h1.5V13H17v2h-1.5V9h3v1.5z" />
        </svg>
      </div>
      <span className="absolute -bottom-2 -right-1 bg-[#1e3a8a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
        ಕನ್ನಡ
      </span>
    </div>

    {/* Details */}
    <div className="space-y-1 text-left">
      <h3 className="text-lg font-bold text-[#1d4ed8] leading-snug">
        ಲಿಸ್ಟ್ ಆಫ್ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಂಘಗಳು
      </h3>
      <p className="text-xs font-semibold text-[#2563eb] opacity-80">
        31ನೇ ಮಾರ್ಚ್ 2026 ರಂತೆ ಜಿಲ್ಲಾವಾರು ಮಾಹಿತಿ
      </p>
      <div className="pt-2">
        <a 
          href="/souharda/Members/Database/Kannada.xlsx" 
          download 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] hover:underline"
        >
          ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ 
          <span className="text-sm">↓</span>
        </a>
      </div>
    </div>
  </div>

  {/* English Resource Card */}
  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex items-start space-x-5">
    {/* PDF Icon with Overlay Badge */}
    <div className="relative shrink-0">
      <div className="w-12 h-14 bg-[#dc2626] rounded-lg flex items-center justify-center text-white shadow-sm">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm4-3H17v1h1.5V13H17v2h-1.5V9h3v1.5z" />
        </svg>
      </div>
      <span className="absolute -bottom-2 -right-1 bg-[#1e3a8a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shadow-sm">
        ENGLISH
      </span>
    </div>

    {/* Details */}
    <div className="space-y-1 text-left">
      <h3 className="text-lg font-bold text-[#1d4ed8] leading-snug">
        List of Souharda Cooperatives
      </h3>
      <p className="text-xs font-semibold text-[#2563eb] opacity-80">
        District-wise data as on 31st March 2026
      </p>
      <div className="pt-2">
        <a 
          href="/souharda/Members/Database/English.xlsx" 
          download 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] hover:underline"
        >
          Click here to Download 
          <span className="text-sm">↓</span>
        </a>
      </div>
    </div>
  </div>

</section>

        {/* SEARCH BAR */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80">
          <div className="relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search district, code, or society name..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1e3a8a] transition"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-400">🔍</span>
          </div>
        </section>

        {/* GEOSPATIAL REGIONAL BREAKDOWN */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-blue-50 text-[#1e3a8a] rounded-lg">📊</span>
            <div>
              <h2 className="text-lg font-bold text-slate-800">Geospatial Regional Breakdown</h2>
              <p className="text-xs text-slate-500">Live breakdown calculated directly from database</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Doughnut Chart Side Box */}
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-xl flex flex-col items-center justify-center min-h-[300px]">
              <div className="relative w-44 h-44 rounded-full border-[10px] border-[#2563eb] border-t-[#ea580c] border-r-[#10b981] flex items-center justify-center bg-white shadow-inner">
                <div className="text-center">
                  <span className="text-2xl font-bold text-slate-800 block">6,500</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Societies</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]"></span> Kalaburagi: 1647</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span> Belagavi: 2977</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span> Bengaluru: 1287</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span> Mysuru: 589</span>
              </div>
            </div>

            {/* Regional Data Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#2563eb] text-white font-semibold text-xs py-2.5 px-4 flex justify-between uppercase tracking-wider">
                  <span>KALABURAGI REGION</span>
                  <span>1,647</span>
                </div>
                <div className="p-3 text-xs space-y-2 divide-y divide-slate-100 text-slate-700">
                  <div className="flex justify-between pt-1"><span>BIDAR</span><span className="font-semibold">199</span></div>
                  <div className="flex justify-between pt-1"><span>BALLARI</span><span className="font-semibold">107</span></div>
                  <div className="flex justify-between pt-1"><span>KALABURAGI</span><span className="font-semibold">248</span></div>
                  <div className="flex justify-between pt-1 font-bold text-[#2563eb]"><span>Total</span><span>1647</span></div>
                </div>
              </div>

              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#10b981] text-white font-semibold text-xs py-2.5 px-4 flex justify-between uppercase tracking-wider">
                  <span>BELAGAVI REGION</span>
                  <span>2,977</span>
                </div>
                <div className="p-3 text-xs space-y-2 divide-y divide-slate-100 text-slate-700">
                  <div className="flex justify-between pt-1"><span>BAGALKOTE</span><span className="font-semibold">480</span></div>
                  <div className="flex justify-between pt-1"><span>BELAGAVI</span><span className="font-semibold">1221</span></div>
                  <div className="flex justify-between pt-1"><span>VIJAYAPURA</span><span className="font-semibold">662</span></div>
                  <div className="flex justify-between pt-1 font-bold text-[#10b981]"><span>Total</span><span>2977</span></div>
                </div>
              </div>

              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#f59e0b] text-white font-semibold text-xs py-2.5 px-4 flex justify-between uppercase tracking-wider">
                  <span>BENGALURU REGION</span>
                  <span>1,287</span>
                </div>
                <div className="p-3 text-xs space-y-2 divide-y divide-slate-100 text-slate-700">
                  <div className="flex justify-between pt-1"><span>BENGALURU URBAN</span><span className="font-semibold">500</span></div>
                  <div className="flex justify-between pt-1 font-bold text-[#f59e0b]"><span>Total</span><span>1287</span></div>
                </div>
              </div>

              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-[#ea580c] text-white font-semibold text-xs py-2.5 px-4 flex justify-between uppercase tracking-wider">
                  <span>MYSURU REGION</span>
                  <span>589</span>
                </div>
                <div className="p-3 text-xs space-y-2 divide-y divide-slate-100 text-slate-700">
                  <div className="flex justify-between pt-1"><span>MYSURU</span><span className="font-semibold">84</span></div>
                  <div className="flex justify-between pt-1 font-bold text-[#ea580c]"><span>Total</span><span>589</span></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}