'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, Users, ShieldCheck, Globe, 
  Search, Download, CheckCircle2 
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';

// --- Animated Counter Helper ---
function AnimatedNumber({ value, duration = 1500, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// --- Static Data Source ---
const REGIONAL_DATA = [
  {
    region: 'BENGALURU REGION',
    color: '#b91c1c',
    districts: [
      { name: 'RAMANAGARA', count: 24 },
      { name: 'BENGALURU RURAL', count: 39 },
      { name: 'BENGALURU', count: 509 },
      { name: 'CHIKKABALLAPURA', count: 48 },
      { name: 'CHITRADURGA', count: 104 },
      { name: 'DAVANAGERE', count: 92 },
      { name: 'KOLAR', count: 41 },
      { name: 'SHIVAMOGGA', count: 183 },
      { name: 'TUMAKURU', count: 247 },
    ]
  },
  {
    region: 'MYSURU REGION',
    color: '#eab308',
    districts: [
      { name: 'CHIKKAMAGALURU', count: 59 },
      { name: 'CHAMARAJANAGARA', count: 33 },
      { name: 'HASSAN', count: 72 },
      { name: 'KODAGU', count: 15 },
      { name: 'MANDYA', count: 32 },
      { name: 'DAKSHINA KANNADA', count: 139 },
      { name: 'MYSURU', count: 84 },
      { name: 'UDUPI', count: 155 },
    ]
  },
  {
    region: 'BELAGAVI REGION',
    color: '#15803d',
    districts: [
      { name: 'BAGALKOTE', count: 485 },
      { name: 'BELAGAVI', count: 1221 },
      { name: 'VIJAYAPURA', count: 602 },
      { name: 'DHARAWADA', count: 150 },
      { name: 'GADAG', count: 79 },
      { name: 'HAVERI', count: 168 },
      { name: 'UTTARA KANNADA', count: 272 },
    ]
  },
  {
    region: 'KALABURAGI REGION',
    color: '#0891b2',
    districts: [
      { name: 'BIDAR', count: 189 },
      { name: 'BALLARI', count: 112 },
      { name: 'KALABURAGI', count: 248 },
      { name: 'KOPPALA', count: 441 },
      { name: 'RAICHUR', count: 418 },
      { name: 'VIJAYANAGARA', count: 181 },
      { name: 'YADAGIRI', count: 78 },
    ]
  }
];

export default function SouhardaMembersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter regional data & calculate dynamic totals dynamically
  const filteredRegions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return REGIONAL_DATA;

    return REGIONAL_DATA.map(regionGroup => {
      const regionMatches = regionGroup.region.toLowerCase().includes(query);
      const matchingDistricts = regionGroup.districts.filter(d => 
        d.name.toLowerCase().includes(query)
      );

      // Return full region if region name matches, or subset of matching districts
      if (regionMatches) return regionGroup;
      return {
        ...regionGroup,
        districts: matchingDistricts
      };
    }).filter(regionGroup => regionGroup.districts.length > 0);
  }, [searchTerm]);

  return (
    <div className="relative w-full min-h-screen bg-[#fafafa] pb-12 font-sans text-slate-800 overflow-hidden">
      
      {/* 0. PAGE HERO BANNER WITH BREADCRUMBS */}
      <PageHero 
        title="Members" 
        subtitle="District Wise & Region Wise Summary" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Souharda', href: '/souharda' },
          { label: 'Members', href: '/souharda/members' }
        ]}
      />

      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-10 px-4 md:px-8 pt-8">

        {/* 1. HERO HEADER & FLOATING TOP BAR */}
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

          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-lg py-4 px-6 md:px-10 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center justify-center space-x-3 pt-2 md:pt-0">
                <MapPin className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl font-extrabold text-[#003366] leading-none">
                    <AnimatedNumber value={31} />
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Districts</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2 md:pt-0">
                <Users className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl font-extrabold text-[#003366] leading-none">
                    <AnimatedNumber value={6500} suffix="+" />
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Societies</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2 md:pt-0">
                <ShieldCheck className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl font-extrabold text-[#003366] leading-none">
                    <AnimatedNumber value={100} suffix="%" />
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Autonomy</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2 md:pt-0">
                <Globe className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xl font-extrabold text-[#003366] leading-none">Apex</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Governance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DUAL DOWNLOAD CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex items-start space-x-5 cursor-pointer">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-14 bg-red-600 rounded-lg relative flex items-center justify-center shadow-xs overflow-hidden">
                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-700 rounded-bl-sm" />
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -bottom-1.5 -left-1.5 -right-1.5 bg-[#003366] text-white text-[9px] font-bold text-center py-0.5 rounded-xs tracking-wider">
                ಕನ್ನಡ
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="text-base font-bold text-[#2563eb] leading-tight">
                ಲಿಸ್ಟ್ ಆಫ್ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಂಘಗಳು
              </h3>
              <p className="text-xs text-slate-500 font-medium">31ನೇ ಮಾರ್ಚ್ 2026 ರಂತೆ ಜಿಲ್ಲಾವಾರು ಮಾಹಿತಿ</p>
              <div className="pt-2 flex items-center space-x-1.5 text-xs font-bold text-[#d97706] hover:text-amber-700 transition-colors">
                <span>ಡೌನ್ಲೋಡ್ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                <Download className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex items-start space-x-5 cursor-pointer">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-14 bg-red-600 rounded-lg relative flex items-center justify-center shadow-xs overflow-hidden">
                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-700 rounded-bl-sm" />
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -bottom-1.5 -left-1.5 -right-1.5 bg-[#003366] text-white text-[9px] font-bold text-center py-0.5 rounded-xs tracking-wider uppercase">
                ENGLISH
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="text-base font-bold text-[#2563eb] leading-tight">
                List of Souharda Cooperatives
              </h3>
              <p className="text-xs text-slate-500 font-medium">District-wise data as on 31st March 2026</p>
              <div className="pt-2 flex items-center space-x-1.5 text-xs font-bold text-[#d97706] hover:text-amber-700 transition-colors">
                <span>Click here to Download</span>
                <Download className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEARCH BAR & SUMMARY CARD */}
        <section className="w-full max-w-2xl mx-auto space-y-6 pt-2">
          <div className="relative flex items-center bg-[#f8fafc] border border-[#3b82f6] rounded-xl p-1 shadow-xs">
            <div className="pl-3.5 pr-2 flex items-center justify-center text-[#2563eb]">
              <Search className="w-4 h-4 stroke-[2.5]" />
            </div>

            <input 
              type="text"
              placeholder="Search for Region or District..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-700 italic font-medium placeholder:text-slate-400 placeholder:not-italic focus:outline-none px-1"
            />

            <button className="bg-[#ff9800] hover:bg-[#f57c00] text-slate-900 font-extrabold text-[11px] tracking-wider uppercase px-6 py-2.5 rounded-lg transition-all shadow-xs flex-shrink-0 cursor-pointer">
              SEARCH
            </button>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs p-6 md:p-8">
            <div className="grid grid-cols-2 divide-x divide-slate-100">
              <div className="text-center px-4 space-y-1">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#003366]">TOTAL SOCIETIES</p>
                <p className="text-3xl md:text-4xl font-extrabold text-[#2a384b]">
                  <AnimatedNumber value={6500} />
                </p>
              </div>

              <div className="text-center px-4 space-y-1">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#003366]">ACTIVE (WORKING)</p>
                <p className="text-3xl md:text-4xl font-extrabold text-[#10b981]">
                  <AnimatedNumber value={5057} />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DONUT CHART & REGIONAL TABLES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Multi-Segment Donut Chart */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xs">
            <div 
              className="relative w-56 h-56 rounded-full flex items-center justify-center shadow-inner"
              style={{
                background: `conic-gradient(
                  #10b981 0deg 120deg,
                  #84cc16 120deg 140deg,
                  #a855f7 140deg 175deg,
                  #ef4444 175deg 195deg,
                  #f59e0b 195deg 215deg,
                  #06b6d4 215deg 235deg,
                  #1d4ed8 235deg 265deg,
                  #4338ca 265deg 285deg,
                  #6366f1 285deg 300deg,
                  #eab308 300deg 330deg,
                  #10b981 330deg 360deg
                )`
              }}
            >
              <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                <p className="text-3xl font-extrabold text-[#2a384b]">
                  <AnimatedNumber value={6500} />
                </p>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">TOTAL</p>
              </div>
            </div>
          </div>

          {/* Dynamic Regional Tables (Filtered) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {filteredRegions.length > 0 ? (
              filteredRegions.map((regionGroup) => {
                const totalInRegion = regionGroup.districts.reduce((acc, d) => acc + d.count, 0);

                return (
                  <div key={regionGroup.region} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs text-xs flex flex-col justify-between">
                    <div>
                      <div 
                        className="text-white font-extrabold text-center py-2.5 px-2 uppercase tracking-wider"
                        style={{ backgroundColor: regionGroup.color }}
                      >
                        {regionGroup.region}
                      </div>
                      <div className="p-3 divide-y divide-slate-100 font-medium text-slate-700 space-y-1.5">
                        {regionGroup.districts.map((district) => (
                          <div key={district.name} className="flex justify-between pt-1">
                            <span>{district.name}</span>
                            <span className="font-bold">{district.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 border-t border-slate-100 p-3 flex justify-between font-extrabold text-slate-800">
                      <span>Total</span>
                      <span>{totalInRegion}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
                No districts or regions found matching &quot;{searchTerm}&quot;
              </div>
            )}
          </div>

        </section>

        {/* 5. MEMBERSHIP DETAILS */}
        <section className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6 max-w-5xl mx-auto">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-[#003366]">ಸದಸ್ಯತ್ವದ ವಿವರಗಳು</h3>
            <p className="text-xs text-slate-400">Membership Rules and Application Guidelines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-amber-100 rounded-xl p-5 bg-amber-50/20 space-y-3">
              <h4 className="font-bold text-sm text-amber-800 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>ಅರ್ಹತೆಗಳು (Eligibility)</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>• 1997 ರ ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತವಾಗಿರಬೇಕು.</li>
                <li>• ನಿಯಮಿತವಾಗಿ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಗಳನ್ನು ನಡೆಸಿರಬೇಕು.</li>
              </ul>
            </div>

            <div className="border border-blue-100 rounded-xl p-5 bg-blue-50/20 space-y-3">
              <h4 className="font-bold text-sm text-[#003366] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>ಅಗತ್ಯ ದಾಖಲೆಗಳು (Documents Required)</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>• ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರದ ದೃಢೀಕೃತ ಪ್ರತಿ.</li>
                <li>• ಕೊನೆಯ 3 ವರ್ಷಗಳ ಆಡಿಟ್ ವರದಿ.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}