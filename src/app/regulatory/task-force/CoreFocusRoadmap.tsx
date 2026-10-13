'use client';

import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Search,
  LucideIcon
} from 'lucide-react';

interface FocusItem {
  id: number;
  stepNumber: string;
  titleEn: string;
  titleKn: string;
  descEn: string;
  descKn: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  badgeBg: string;
  badgeTextColor: string;
}

const focusItems: FocusItem[] = [
  {
    id: 1,
    stepNumber: '1',
    titleEn: 'Financial Audit',
    titleKn: 'ಆರ್ಥಿಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ',
    descEn: 'Deep audit and restructuring of financial assets to restore liquidity.',
    descKn: 'ಲಿಕ್ವಿಡಿಟಿ ಮರುಸ್ಥಾಪಿಸಲು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ಮತ್ತು ಆರ್ಥಿಕ ಮರುಸಂಘಟನೆ.',
    icon: TrendingUp,
    bgColor: 'bg-amber-500/10',
    iconColor: 'text-amber-600',
    badgeBg: 'bg-amber-500',
    badgeTextColor: 'text-white',
  },
  {
    id: 2,
    stepNumber: '2',
    titleEn: 'Statutory Rules',
    titleKn: 'ಶಾಸನಬದ್ಧ ನಿಯಮಗಳು',
    descEn: 'Ensuring strict compliance with Souharda Sahakari statutory provisions.',
    descKn: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಶಾಸನಬದ್ಧ ನಿಯಮಗಳ ಕಟ್ಟುನಿಟ್ಟಿನ ಅನುಸರಣೆ.',
    icon: ShieldCheck,
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    badgeBg: 'bg-blue-600',
    badgeTextColor: 'text-white',
  },
  {
    id: 3,
    stepNumber: '3',
    titleEn: 'Board Handholding',
    titleKn: 'ಮಂಡಳಿಯ ಮಾರ್ಗದರ್ಶನ',
    descEn: 'Direct intervention for distress mitigation and long-term risk management.',
    descKn: 'ಆಡಳಿತ ಮಂಡಳಿ ಮತ್ತು ನಿರ್ವಹಣೆಗೆ ನಿರಂತರ ಬೆಂಬಲ ಹಾಗೂ ತರಬೇತಿ.',
    icon: Users,
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-600',
    badgeTextColor: 'text-white',
  },
  {
    id: 4,
    stepNumber: '4',
    titleEn: 'Periodic Inspection',
    titleKn: 'ನಿಯತಕಾಲಿಕ ತಪಾಸಣೆ',
    descEn: 'On-ground performance tracking and institutional monitoring.',
    descKn: 'ಸ್ಥಳದಲ್ಲೇ ಕಾರ್ಯಕ್ಷಮತೆ ಪರಿಶೀಲನೆ ಮತ್ತು ನಿಯತಕಾಲಿಕ ವರದಿ.',
    icon: Search,
    bgColor: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-600',
    badgeTextColor: 'text-white',
  },
];

export default function CoreFocusRoadmap({ locale = 'en' }: { locale?: string }) {
  return (
    <div className="w-full bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs relative overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <span className="w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-100"></span>
        <h3 className="text-base sm:text-lg font-black tracking-widest text-slate-900 uppercase">
          {locale === 'kn' ? 'ಮುಖ್ಯ ಗಮನ' : 'TASKFORCE CORE FOCUS ROADMAP'}
        </h3>
      </div>

      {/* Desktop Curved S-Wave Infographic */}
      <div className="hidden md:block relative w-full py-8">
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 320"
          preserveAspectRatio="none"
        >
          <path
            d="M 50,160 C 150,40 250,280 350,160 C 450,40 550,280 650,160 C 750,40 850,280 950,160"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <circle cx="100" cy="100" r="30" fill="#3b82f6" opacity="0.12" />
          <circle cx="370" cy="220" r="45" fill="#3b82f6" opacity="0.15" />
          <circle cx="630" cy="90" r="35" fill="#3b82f6" opacity="0.1" />
          <circle cx="900" cy="210" r="25" fill="#3b82f6" opacity="0.12" />
        </svg>

        <div className="grid grid-cols-4 gap-4 relative z-10">
          {focusItems.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${
                  isEven ? 'pt-20' : 'pb-20'
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow ${
                    isEven ? 'order-2 mt-6' : 'order-1 mb-6'
                  }`}
                >
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                    {locale === 'kn' ? item.titleKn : item.titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {locale === 'kn' ? item.descKn : item.descEn}
                  </p>
                </div>

                {/* Clock-Dial Badge */}
                <div className={`relative flex items-center justify-center ${isEven ? 'order-1' : 'order-2'}`}>
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-dashed border-slate-400/80 flex items-center justify-center p-1 bg-white shadow-xs">
                    <div className={`w-14 h-14 rounded-full ${item.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                  </div>
                  <div
                    className={`absolute -top-1 -right-1 w-7 h-7 rounded-full ${item.badgeBg} ${item.badgeTextColor} font-black text-xs flex items-center justify-center ring-2 ring-white shadow-xs`}
                  >
                    {item.stepNumber}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stack View */}
      <div className="block md:hidden space-y-4">
        {focusItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-4"
            >
              <div className="relative shrink-0">
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <span
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${item.badgeBg} ${item.badgeTextColor} font-extrabold text-xs flex items-center justify-center ring-2 ring-white`}
                >
                  {item.stepNumber}
                </span>
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">
                  {locale === 'kn' ? item.titleKn : item.titleEn}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {locale === 'kn' ? item.descKn : item.descEn}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtext */}
      <p className="mt-6 text-center text-xs font-medium text-slate-500">
        {locale === 'kn'
          ? 'ಸಹಕಾರಿ ವಲಯದ ದೀರ್ಘಕಾಲೀನ ಸುಸ್ಥಿರತೆ ಮತ್ತು ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ಸಮಗ್ರ ಬೆಂಬಲ.'
          : 'Direct intervention for distress mitigation and long-term risk management.'}
      </p>
    </div>
  );
}