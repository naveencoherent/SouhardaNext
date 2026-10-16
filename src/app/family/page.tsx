'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Search, Building2, Shield, Landmark, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FamilyEntity {
  nameEn: string;
  nameKn: string;
  regNo?: string;
  districtEn: string;
  districtKn: string;
  category: 'bank' | 'credit' | 'employee' | 'multipurpose';
}

const FAMILY_MEMBERS: FamilyEntity[] = [
  {
    nameEn: 'Souharda Urban Co-operative Bank Ltd.',
    nameKn: 'ಸೌಹಾರ್ದ ಪಟ್ಟಣ ಸಹಕಾರಿ ಬ್ಯಾಂಕ್ ನಿಯಮಿತ',
    regNo: 'REG/UBC/001',
    districtEn: 'Bengaluru',
    districtKn: 'ಬೆಂಗಳೂರು',
    category: 'bank',
  },
  {
    nameEn: 'Vishwabharathi Souharda Credit Co-operative Ltd.',
    nameKn: 'ವಿಶ್ವಭಾರತಿ ಸೌಹಾರ್ದ ಕ್ರೆಡಿಟ್ ಸಹಕಾರಿ ನಿಯಮಿತ',
    regNo: 'REG/SCC/042',
    districtEn: 'Mysuru',
    districtKn: 'ಮೈಸೂರು',
    category: 'credit',
  },
  {
    nameEn: 'KSSFCL Employees Souharda Credit Co-operative Ltd.',
    nameKn: 'ಕೆ.ಎಸ್.ಎಸ್.ಎಫ್.ಸಿ.ಎಲ್ ನೌಕರರ ಸೌಹಾರ್ದ ಪತ್ತಿನ ಸಹಕಾರಿ ನಿಯಮಿತ',
    regNo: 'REG/EMP/108',
    districtEn: 'Bengaluru',
    districtKn: 'ಬೆಂಗಳೂರು',
    category: 'employee',
  },
  {
    nameEn: 'Sahyadri Souharda Farmers Multi-Purpose Co-operative Ltd.',
    nameKn: 'ಸಹ್ಯಾದ್ರಿ ಸೌಹಾರ್ದ ರೈತರ ಬಹುಮುಖಿ ಸಹಕಾರಿ ನಿಯಮಿತ',
    regNo: 'REG/MPC/215',
    districtEn: 'Shivamogga',
    districtKn: 'ಶಿವಮೊಗ್ಗ',
    category: 'multipurpose',
  },
  {
    nameEn: 'Nethravathi Souharda Credit Co-operative Ltd.',
    nameKn: 'ನೇತ್ರಾವತಿ ಸೌಹಾರ್ದ ಪತ್ತಿನ ಸಹಕಾರಿ ನಿಯಮಿತ',
    regNo: 'REG/SCC/311',
    districtEn: 'Dakshina Kannada',
    districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
    category: 'credit',
  },
  {
    nameEn: 'Kalpatharu Souharda Urban Co-operative Bank Ltd.',
    nameKn: 'ಕಲ್ಪತರು ಸೌಹಾರ್ದ ಪಟ್ಟಣ ಸಹಕಾರಿ ಬ್ಯಾಂಕ್ ನಿಯಮಿತ',
    regNo: 'REG/UBC/019',
    districtEn: 'Tumakuru',
    districtKn: 'ತುಮಕೂರು',
    category: 'bank',
  },
];

export default function SouhardaFamilyPage() {
  const { locale } = useLanguage();
  const isKn = locale === 'kn';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMembers = FAMILY_MEMBERS.filter((member) => {
    const matchesCategory = selectedCategory === 'all' || member.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      member.nameEn.toLowerCase().includes(q) ||
      member.nameKn.includes(q) ||
      member.districtEn.toLowerCase().includes(q) ||
      member.districtKn.includes(q) ||
      (member.regNo && member.regNo.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-[#001D38] via-[#0A2E52] to-[#1C3E68] text-white rounded-2xl p-6 sm:p-10 shadow-xl mb-8">
          <div className="flex items-center gap-3 text-amber-400 mb-2">
            <Users className="w-6 h-6" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {isKn ? 'ಸಹಕಾರಿ ಪರಿವಾರ' : 'Cooperative Directory'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            {isKn ? 'ಸೌಹಾರ್ದ ಪರಿವಾರ' : 'Souharda Family'}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {isKn
              ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿತಗೊಂಡಿರುವ ಎಲ್ಲಾ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳ ಪಟ್ಟಿ.'
              : 'Directory of affiliated Souharda Co-operatives, Urban Banks, Credit Societies, and Agricultural Cooperatives across Karnataka.'}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-4 sm:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isKn ? 'ಹೆಸರು, ಜಿಲ್ಲೆ ಅಥವಾ ನೋಂದಣಿ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ...' : 'Search by name, district, or Reg No...'}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-800 transition"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar">
              {[
                { id: 'all', en: 'All Members', kn: 'ಎಲ್ಲವೂ' },
                { id: 'bank', en: 'Urban Banks', kn: 'ಪಟ್ಟಣ ಬ್ಯಾಂಕ್' },
                { id: 'credit', en: 'Credit Co-ops', kn: 'ಪತ್ತಿನ ಸಹಕಾರಿ' },
                { id: 'employee', en: 'Employee Co-ops', kn: 'ನೌಕರರ ಸಹಕಾರಿ' },
                { id: 'multipurpose', en: 'Multi-Purpose', kn: 'ಬಹುಮುಖಿ' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {isKn ? cat.kn : cat.en}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-amber-400/80 hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-50 text-blue-900 border border-blue-200/60">
                      <Landmark className="w-3 h-3 text-blue-600" />
                      {member.regNo || 'AFFILIATED'}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      {isKn ? member.districtKn : member.districtEn}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug mb-2">
                    {isKn ? member.nameKn : member.nameEn}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
                  <span>{isKn ? 'ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸದಸ್ಯ ಸಂಸ್ಥೆ' : 'Affiliated Member'}</span>
                  <Shield className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm font-semibold">
                {isKn ? 'ಯಾವುದೇ ಸಂಸ್ಥೆ ಕಂಡುಬಂದಿಲ್ಲ.' : 'No matching Souharda family members found.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}