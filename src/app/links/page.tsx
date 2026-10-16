'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Globe, Landmark, Building2, ShieldCheck, Sprout, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface UsefulLink {
  titleEn: string;
  titleKn: string;
  url: string;
  badge?: string;
}

interface LinkCategory {
  categoryEn: string;
  categoryKn: string;
  icon: React.ReactNode;
  links: UsefulLink[];
}

const USEFUL_LINKS_DATA: LinkCategory[] = [
  {
    categoryEn: 'Government & Departmental Portals',
    categoryKn: 'ಸರ್ಕಾರಿ ಮತ್ತು ಇಲಾಖಾ ಜಾಲತಾಣಗಳು',
    icon: <Landmark className="w-5 h-5 text-amber-500" />,
    links: [
      {
        titleEn: 'Sahakara Sindhu - Dept. of Co-operation, GoK',
        titleKn: 'ಸಹಕಾರ ಸಿಂಧು - ಸಹಕಾರ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ',
        url: 'https://www.sahakara.kar.gov.in',
        badge: 'Official',
      },
      {
        titleEn: 'Sahakara Darpana - Dept. of Cooperative Audit',
        titleKn: 'ಸಹಕಾರ ದರ್ಪಣ - ಸಹಕಾರ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಇಲಾಖೆ',
        url: 'http://sahakaradarpana.kar.nic.in',
      },
      {
        titleEn: 'Government of Karnataka Official Portal',
        titleKn: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಜಾಲತಾಣ',
        url: 'http://www.karnataka.gov.in',
      },
      {
        titleEn: 'Government of India National Portal',
        titleKn: 'ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಜಾಲತಾಣ',
        url: 'http://india.gov.in',
      },
      {
        titleEn: 'Dept. of Agriculture & Farmers Welfare, GoI',
        titleKn: 'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಭಾರತ ಸರ್ಕಾರ',
        url: 'http://agricoop.nic.in',
      },
      {
        titleEn: 'Government of India Directory',
        titleKn: 'ಭಾರತ ಸರ್ಕಾರದ ಡೈರೆಕ್ಟರಿ',
        url: 'http://www.goidirectory.nic.in',
      },
    ],
  },
  {
    categoryEn: 'Apex Banks & Cooperative Bodies',
    categoryKn: 'ಅಪೆಕ್ಸ್ ಬ್ಯಾಂಕ್ ಮತ್ತು ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳು',
    icon: <Building2 className="w-5 h-5 text-amber-500" />,
    links: [
      {
        titleEn: 'Karnataka State Cooperative Apex Bank Ltd.',
        titleKn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಹಕಾರ ಅಪೆಕ್ಸ್ ಬ್ಯಾಂಕ್ ನಿಯಮಿತ',
        url: 'https://www.karnatakaapex.com',
      },
      {
        titleEn: 'NABARD - National Bank for Agriculture and Rural Development',
        titleKn: 'ನಾಬಾರ್ಡ್ - ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮತ್ತು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಬ್ಯಾಂಕ್',
        url: 'https://www.nabard.org',
      },
      {
        titleEn: 'IFFCO - Indian Farmers Fertiliser Cooperative Ltd.',
        titleKn: 'ಇಫ್ಕೋ (IFFCO) - ಭಾರತೀಯ ರೈತರ ರಸಗೊಬ್ಬರ ಸಹಕಾರಿ ನಿಯಮಿತ',
        url: 'https://www.iffco.in',
      },
      {
        titleEn: 'Karnataka Milk Federation (KMF - Nandini)',
        titleKn: 'ಕರ್ನಾಟಕ ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಮಹಾಮಂಡಳ (KMF - ನಂದಿನಿ)',
        url: 'http://www.kmfnandini.coop',
      },
      {
        titleEn: 'CAMPCO Mangaluru',
        titleKn: 'ಕ್ಯಾಂಪ್ಕೋ ಮಂಗ್ಳೂರು (CAMPCO)',
        url: 'https://www.campco.org',
      },
      {
        titleEn: 'Yeshaswini Cooperative Farmers Healthcare Scheme',
        titleKn: 'ಯಶಸ್ವಿನಿ ಸಹಕಾರಿ ರೈತರ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಯೋಜನೆ',
        url: 'http://www.yeshaswini.org',
      },
    ],
  },
  {
    categoryEn: 'Agriculture, Marketing & Allied Departments',
    categoryKn: 'ಕೃಷಿ, ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಸಂಬಂಧಿತ ಇಲಾಖೆಗಳು',
    icon: <Sprout className="w-5 h-5 text-amber-500" />,
    links: [
      {
        titleEn: 'Raitha Mitra - Department of Agriculture, Karnataka',
        titleKn: 'ರೈತ ಮಿತ್ರ - ಕೃಷಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ',
        url: 'http://www.raitamitra.kar.nic.in',
      },
      {
        titleEn: 'Marata Vahini - Dept. of Agricultural Marketing',
        titleKn: 'ಮಾರುಕಟ್ಟೆ ವಾಹಿನಿ - ಕೃಷಿ ಮಾರಾಟ ಇಲಾಖೆ',
        url: 'http://maratavahini.kar.nic.in',
      },
      {
        titleEn: 'Department of Horticulture, Govt. of Karnataka',
        titleKn: 'ತೋಟಗಾರಿಕೆ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ',
        url: 'http://www.horticulture.kar.nic.in',
      },
      {
        titleEn: 'Karnataka State Warehousing Corporation (KSWC)',
        titleKn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಉಗ್ರಾಣ ನಿಗಮ',
        url: 'http://www.kswc.in',
      },
    ],
  },
];

export default function UsefulLinksPage() {
  const { locale } = useLanguage();
  const isKn = locale === 'kn';

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#001D38] via-[#0A2E52] to-[#1C3E68] text-white rounded-2xl p-6 sm:p-10 shadow-xl mb-10">
          <div className="flex items-center gap-3 text-amber-400 mb-2">
            <Globe className="w-6 h-6" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {isKn ? 'ಸಂಪನ್ಮೂಲ ಡೈರೆಕ್ಟರಿ' : 'Resource Directory'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            {isKn ? 'ಉಪಯುಕ್ತ ಲಿಂಕ್‌ಗಳು' : 'Useful Links'}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {isKn
              ? 'ಸಹಕಾರ ಇಲಾಖೆಗಳು, ಅಪೆಕ್ಸ್ ಬ್ಯಾಂಕ್‌ಗಳು, ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು ಹಾಗೂ ಕೃಷಿ ಸಂಬಂಧಿತ ಸಂಸ್ಥೆಗಳ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ತ್ವರಿತ ಪ್ರವೇಶ.'
              : 'Direct links to official web portals for Cooperative Departments, Apex Financial Institutions, Agriculture Marketing, and State Government Bodies.'}
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-8">
          {USEFUL_LINKS_DATA.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
              {/* Category Title Header */}
              <div className="bg-slate-100/90 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
                {cat.icon}
                <h2 className="text-base sm:text-lg font-bold text-slate-800">
                  {isKn ? cat.categoryKn : cat.categoryEn}
                </h2>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {cat.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 sm:p-5 hover:bg-amber-50/60 transition duration-150 group border-b border-slate-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 pr-3">
                      <ShieldCheck className="w-4 h-4 text-amber-500 group-hover:scale-110 transition flex-shrink-0" />
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-amber-800 transition block leading-snug">
                          {isKn ? link.titleKn : link.titleEn}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono block mt-0.5 group-hover:text-amber-600/80">
                          {link.url.replace(/^https?:\/\//, '')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 group-hover:text-amber-700 bg-amber-100/60 group-hover:bg-amber-200/70 px-2.5 py-1.5 rounded-md transition flex-shrink-0">
                      <span className="hidden sm:inline">{isKn ? 'ಭೇಟಿ ನೀಡಿ' : 'Visit'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}