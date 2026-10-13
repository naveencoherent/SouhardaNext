'use client';

import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

// Co-located sibling imports
import CoreFocusRoadmap from './CoreFocusRoadmap';
import RadialInfographic from './RadialInfographic';
import CooperativeDirectory from './CooperativeDirectory';

// 1. Direct relative import from the same task-force directory
import taskforceData from './taskforce.json';

export default function TaskforcePage() {
  const [locale, setLocale] = useState<'en' | 'kn'>('en');
  const [activeLiquidationStatus, setActiveLiquidationStatus] = useState<string | null>(null);

  // Liquidation Donut Stats
  const liquidationStats = [
    {
      id: 'appointed',
      label: locale === 'kn' ? 'ಲಿಕ್ವಿಡೇಟರ್‌ಗಳ ನೇಮಕ' : 'Liquidators Appointed',
      count: 463,
      hex: '#f59e0b',
      percentage: '29.0%',
      description: locale === 'kn' ? 'ಲಿಕ್ವಿಡೇಷನ್ ಪ್ರಕ್ರಿಯೆಗೆ ಸೂಚಿಸಲಾದ ಸಹಕಾರಿಗಳು' : 'Societies where liquidators have been officially appointed.',
    },
    {
      id: 'under_liquidation',
      label: locale === 'kn' ? 'ಲಿಕ್ವಿಡೇಷನ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ' : 'Under Liquidation',
      count: 396,
      hex: '#f43f5e',
      percentage: '24.8%',
      description: locale === 'kn' ? 'ಆಸ್ತಿಗಳ ವಿಲೇವಾರಿ ಹಂತದಲ್ಲಿರುವ ಸಂಘಗಳು' : 'Societies currently undergoing active asset liquidation.',
    },
    {
      id: 'rejuvenated',
      label: locale === 'kn' ? 'ಪುನರುಜ್ಜೀವನಗೊಂಡ ಸಂಘಗಳು' : 'Societies Rejuvenated',
      count: 16,
      hex: '#10b981',
      percentage: '1.0%',
      description: locale === 'kn' ? 'ಯಶಸ್ವಿಯಾಗಿ ಪುನಃಶ್ಚೇತನಗೊಳಿಸಲಾದ ಸಂಘಗಳು' : 'Societies successfully revitalized and restored to active operations.',
    },
    {
      id: 'closed',
      label: locale === 'kn' ? 'ಮುಚ್ಚಲ್ಪಟ್ಟ ಸಂಘಗಳು' : 'Closed Societies',
      count: 580,
      hex: '#475569',
      percentage: '36.4%',
      description: locale === 'kn' ? 'ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಂಡು ಮುಚ್ಚಲ್ಪಟ್ಟ ಸಹಕಾರಿಗಳು' : 'Societies whose liquidation proceedings have been fully concluded.',
    },
    {
      id: 'cancelled',
      label: locale === 'kn' ? 'ರದ್ದುಗೊಳಿಸಿದ ಸಂಘಗಳು' : 'Cancelled Societies',
      count: 145,
      hex: '#7c3aed',
      percentage: '9.1%',
      description: locale === 'kn' ? 'ನಂದಣಿ ರದ್ದುಗೊಂಡ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳು' : 'Souharda societies whose registration status has been cancelled.',
    },
  ];

  const totalLiquidationCases = liquidationStats.reduce((sum, item) => sum + item.count, 0);

  const renderLiquidationDonut = () => {
    let currentPercent = 0;
    const radius = 38;
    const circumference = 2 * Math.PI * radius;

    return liquidationStats.map((item) => {
      const fraction = item.count / totalLiquidationCases;
      const strokeDasharray = `${fraction * circumference} ${circumference * (1 - fraction)}`;
      const strokeDashoffset = -currentPercent * circumference;
      currentPercent += fraction;

      const isHovered = activeLiquidationStatus === item.id;

      return (
        <circle
          key={item.id}
          cx="50"
          cy="50"
          r={radius}
          stroke={item.hex}
          strokeWidth={isHovered ? '14' : '11'}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 cursor-pointer origin-center"
          onMouseEnter={() => setActiveLiquidationStatus(item.id)}
          onMouseLeave={() => setActiveLiquidationStatus(null)}
          style={{ opacity: activeLiquidationStatus && !isHovered ? 0.35 : 1 }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* HERO BANNER */}
      <div className="relative bg-[#0a192f] py-14 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
        <div className="absolute top-4 right-4 z-20 flex gap-2 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setLocale('en')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
              locale === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLocale('kn')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
              locale === 'kn' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase text-amber-400">
            TASKFORCE <span className="text-white">PORTAL</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto font-light leading-relaxed">
            {locale === 'kn' 
              ? 'ಸಹಕಾರ ಸಂಘಗಳ ಕಾರ್ಯಾಚರಣೆಯ ಅಪಾಯಗಳನ್ನು ತಡೆಗಟ್ಟಿ, ಆರ್ಥಿಕ ಸ್ಥಿರತೆ ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ಬೆಂಬಲ ನೀಡುವ ವಿಶೇಷ ಸಲಹಾ ಚೌಕಟ್ಟು.'
              : 'A dedicated advisory framework designed to audit, monitor, and empower cooperatives from operational vulnerability to financial strength.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* ROADMAP SECTION */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full uppercase tracking-wide">
              {locale === 'kn' ? 'ಟಾಸ್ಕ್‌ಫೋರ್ಸ್ ಕುರಿತು' : 'ABOUT TASKFORCE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {locale === 'kn' ? (
                <>ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ರಕ್ಷಣೆ: <br /><span className="text-amber-600">ಸ್ಥಿರತೆ ಮತ್ತು ಸಾಮರ್ಥ್ಯವರ್ಧನೆ.</span></>
              ) : (
                <>Safeguarding Member Cooperatives: <br /><span className="text-amber-600">Empowering Stability & Resilience.</span></>
              )}
            </h2>
          </div>
          <CoreFocusRoadmap locale={locale} />
        </section>

        {/* RADIAL INFOGRAPHIC SECTION */}
        <section className="space-y-6">
          <RadialInfographic />
        </section>

        {/* LIQUIDATION DONUT SECTION */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-5">
            <div>
              <span className="text-[11px] font-black tracking-widest text-amber-600 uppercase">
                {locale === 'kn' ? 'ಪ್ರಸ್ತುತ ಮಾಹಿತಿ' : 'LIVE DATA'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-0.5">
                {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ.' : 'Current Status of Souharda Cooperatives.'}
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-400">As on Q3 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex justify-center items-center relative py-4">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 drop-shadow-xs" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" stroke="#f8fafc" strokeWidth="11" fill="transparent" />
                  {renderLiquidationDonut()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {activeLiquidationStatus
                      ? liquidationStats.find((item) => item.id === activeLiquidationStatus)?.count.toLocaleString()
                      : totalLiquidationCases.toLocaleString()}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    {activeLiquidationStatus
                      ? liquidationStats.find((item) => item.id === activeLiquidationStatus)?.label
                      : (locale === 'kn' ? 'ಒಟ್ಟು ದಾಖಲಾದ ಪ್ರಕರಣಗಳು' : 'TOTAL CASES')}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {liquidationStats.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveLiquidationStatus(item.id)}
                  onMouseLeave={() => setActiveLiquidationStatus(null)}
                  className="p-5 rounded-2xl border border-slate-200/60 bg-slate-50/70 hover:bg-white flex items-center justify-between transition-all"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-800">{item.label}</span>
                    <div className="text-2xl font-black text-slate-900">{item.count.toLocaleString()}</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">
                    {item.percentage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. DIRECTORY COMPONENT RECEIVING taskforce.json DATA */}
        <CooperativeDirectory locale={locale} data={taskforceData} />

    

      </div>
    </div>
  );
}