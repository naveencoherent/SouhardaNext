'use client';

import React, { useState, useEffect, useMemo } from 'react';
import PageHero from '@/components/common/PageHero';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Search, 
  Download, 
  FileSpreadsheet, 
  ShieldCheck, 
  Globe, 
  Building2, 
  MapPin,
  PieChart,
  Loader2
} from 'lucide-react';

interface MemberRecord {
  "Sl No"?: string;
  Code?: string;
  Status?: string;
  Type?: string;
  Subscriber?: string;
  Dist?: string;
  District?: string;
  Region?: string;
  [key: string]: any;
}

const REGION_STYLES: Record<string, { headerBg: string; stroke: string }> = {
  'BENGALURU REGION': { headerBg: 'bg-red-800 text-white', stroke: '#B91C1C' },
  'MYSURU REGION': { headerBg: 'bg-amber-500 text-white', stroke: '#F59E0B' },
  'BELAGAVI REGION': { headerBg: 'bg-emerald-700 text-white', stroke: '#059669' },
  'KALABURAGI REGION': { headerBg: 'bg-blue-700 text-white', stroke: '#2563EB' },
  'OTHER REGION': { headerBg: 'bg-slate-700 text-white', stroke: '#475569' },
};

export default function MembersPage() {
  const { locale } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [rawMembers, setRawMembers] = useState<MemberRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMembersData() {
      try {
        const response = await fetch('/souharda/Members/Database/members.json');
        if (response.ok) {
          const data = await response.json();
          setRawMembers(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Failed to load members.json:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMembersData();
  }, []);

  const normalizeRegion = (rawRegion?: string) => {
    if (!rawRegion) return 'OTHER REGION';
    const cleaned = rawRegion.trim().toUpperCase();
    return cleaned.endsWith('REGION') ? cleaned : `${cleaned} REGION`;
  };

  const dynamicRegionalData = useMemo(() => {
    if (!rawMembers.length) return [];

    const regionMap: Record<string, Record<string, number>> = {};

    rawMembers.forEach((item) => {
      const regName = normalizeRegion(item.Region);
      const distName = (item.Dist || item.District || 'UNKNOWN').trim().toUpperCase();

      if (!regionMap[regName]) regionMap[regName] = {};
      regionMap[regName][distName] = (regionMap[regName][distName] || 0) + 1;
    });

    return Object.entries(regionMap).map(([region, districtsObj]) => {
      const districts = Object.entries(districtsObj).map(([name, count]) => ({ name, count }));
      const total = districts.reduce((sum, d) => sum + d.count, 0);
      const style = REGION_STYLES[region] || REGION_STYLES['OTHER REGION'];

      return {
        region,
        headerBg: style.headerBg,
        stroke: style.stroke,
        districts,
        total,
      };
    });
  }, [rawMembers]);

  const grandTotal = useMemo(() => {
    return dynamicRegionalData.reduce((acc, curr) => acc + curr.total, 0);
  }, [dynamicRegionalData]);

  const filteredRegions = useMemo(() => {
    if (!searchTerm.trim()) return dynamicRegionalData;
    const term = searchTerm.toLowerCase();

    return dynamicRegionalData
      .map((reg) => ({
        ...reg,
        districts: reg.districts.filter(
          (d) => d.name.toLowerCase().includes(term) || reg.region.toLowerCase().includes(term)
        ),
      }))
      .filter((reg) => reg.districts.length > 0);
  }, [dynamicRegionalData, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Standardized Hero Section */}
      <PageHero 
        title="SOUHARDA MEMBERS" 
        subtitle="Explore the statewide reach and regional breakdown of Souharda Cooperatives across Karnataka." 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Movement Overview Card */}
        <div className="bg-[#003865] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-3">
            <span className="inline-block bg-amber-400/20 text-amber-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-amber-400/30">
              The Souharda Movement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Empowering <span className="text-amber-400">Karnataka.</span>
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              The Karnataka State Souharda Federal Cooperative Ltd. (KSSFCL) represents a landmark shift in the cooperative landscape, supporting thousands of autonomous societies statewide.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="w-7 h-7 text-amber-400 shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-black">31</div>
                <div className="text-xs text-slate-300 font-medium">Districts</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Building2 className="w-7 h-7 text-amber-400 shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-black">
                  {isLoading ? '...' : grandTotal.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 font-medium">Societies</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <ShieldCheck className="w-7 h-7 text-amber-400 shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-black">100%</div>
                <div className="text-xs text-slate-300 font-medium">Autonomy</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Globe className="w-7 h-7 text-amber-400 shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-black">Apex</div>
                <div className="text-xs text-slate-300 font-medium">Governance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Geospatial Breakdown */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 text-[#003865] rounded-xl">
                <PieChart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#003865]">Geospatial Regional Breakdown</h2>
                <p className="text-xs text-slate-500">Live breakdown calculated directly from database</p>
              </div>
            </div>

            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                <span>Processing Database...</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* SVG Donut Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center space-y-4 lg:col-span-1">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90 transform">
                  <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#E2E8F0" strokeWidth="3.8" />
                  {dynamicRegionalData.map((reg, idx) => {
                    const percentage = grandTotal > 0 ? (reg.total / grandTotal) * 100 : 0;
                    const prevSum = dynamicRegionalData.slice(0, idx).reduce((s, r) => s + r.total, 0);
                    const offset = grandTotal > 0 ? (prevSum / grandTotal) * 100 : 0;

                    return (
                      <circle
                        key={reg.region}
                        cx="18"
                        cy="18"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke={reg.stroke}
                        strokeWidth="3.8"
                        strokeDasharray={`${percentage} ${100 - percentage}`}
                        strokeDashoffset={`-${offset}`}
                      />
                    );
                  })}
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black text-slate-900">{grandTotal.toLocaleString()}</span>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">TOTAL SOCIETIES</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs w-full pt-2">
                {dynamicRegionalData.map((reg) => (
                  <div key={reg.region} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ backgroundColor: reg.stroke }}></span>
                    <span className="font-semibold text-slate-700 truncate">{reg.region.replace(' REGION', '')}: {reg.total}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Region Data Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
              {filteredRegions.map((reg, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className={`p-3 text-center font-bold text-sm tracking-wide ${reg.headerBg}`}>
                    {reg.region}
                  </div>
                  <div className="divide-y divide-slate-100 flex-1 max-h-60 overflow-y-auto">
                    {reg.districts.map((d, dIdx) => (
                      <div key={dIdx} className="px-4 py-2 flex justify-between items-center text-xs text-slate-700 hover:bg-slate-50">
                        <span className="font-semibold">{d.name}</span>
                        <span className="font-mono font-bold text-slate-900">{d.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-100 px-4 py-2.5 flex justify-between items-center font-bold text-xs text-slate-900 border-t border-slate-200">
                    <span>Total</span>
                    <span className="font-mono">{reg.total}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            placeholder="Search district or region..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 bg-transparent text-sm text-slate-800 focus:outline-none"
          />
        </div>

        {/* Excel Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/souharda/Members/Database/Kannada.xlsx"
            download
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex items-center gap-5 group"
          >
            <div className="p-4 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-400 group-hover:text-blue-950 transition">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="inline-block bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                ಕನ್ನಡ
              </span>
              <h4 className="font-bold text-slate-900 text-base">
                ಲಿಸ್ಟ್ ಆಫ್ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಂಘಗಳು
              </h4>
              <p className="text-xs text-slate-500">ಜಿಲ್ಲಾವಾರು ಮಾಹಿತಿ ದತ್ತಾಂಶ</p>
              <div className="text-xs font-bold text-[#003865] flex items-center gap-1 pt-1 group-hover:text-amber-600">
                <span>ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                <Download className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          <a
            href="/souharda/Members/Database/English.xlsx"
            download
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition flex items-center gap-5 group"
          >
            <div className="p-4 bg-blue-50 text-[#003865] rounded-xl group-hover:bg-[#003865] group-hover:text-white transition">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="inline-block bg-blue-100 text-[#003865] text-[10px] font-bold px-2 py-0.5 rounded">
                English
              </span>
              <h4 className="font-bold text-slate-900 text-base">
                List of Souharda Cooperatives
              </h4>
              <p className="text-xs text-slate-500">District-wise data sheet</p>
              <div className="text-xs font-bold text-[#003865] flex items-center gap-1 pt-1 group-hover:text-amber-600">
                <span>Click here to Download</span>
                <Download className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>

      </main>
    </div>
  );
}