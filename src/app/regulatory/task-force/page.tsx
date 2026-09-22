'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, 
  Eye, 
  HelpingHand, 
  FileText, 
  Download, 
  Info 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TaskforcePage() {
  // Safe language context resolution with fallback
  const langContext = useLanguage();
  const locale = langContext?.locale || 'en';

  const [hasBannerError, setHasBannerError] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero / Header Section */}
      <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
        {!hasBannerError && (
          <Image
            src="/souharda/AllAboutKSSFCL_Intro.webp"
            alt="KSSFCL Taskforce Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
            onError={() => setHasBannerError(true)}
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
            {locale === 'kn' ? 'ಪುನಶ್ಚೇತನ ಮತ್ತು ಸಲಹಾ ಸೇವೆಗಳು' : 'REVITALIZATION & CONSULTANCY'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {locale === 'kn' ? 'ಕಾರ್ಯಪಡೆ (ಟಾಸ್ಕ್ ಫೋರ್ಸ್)' : 'Taskforce'}
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            {locale === 'kn'
              ? 'ಸಹಕಾರಿಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು ಮತ್ತು ಪುನಶ್ಚೇತನಗೊಳಿಸುವುದು'
              : 'Empowering Cooperatives from Vulnerability to Strength'}
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />
      </header>

      {/* Objective & Transformation Path Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              {locale === 'kn' ? 'ನಮ್ಮ ಉದ್ದೇಶ' : 'Our Objective'}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {locale === 'kn'
                ? 'ಟಾಸ್ಕ್ ಫೋರ್ಸ್ ಸಂಸ್ಥೆಯು ನಮ್ಮ ಸದಸ್ಯ ಸಹಕಾರ ಸಂಘಗಳಿಗೆ ಆಂತರಿಕ ಸಲಹೆಗಾರರಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಸಹಕಾರ ಸಂಘಗಳು ನಷ್ಟ ಅಥವಾ ವಿಸರ್ಜನೆಗೆ ಒಳಗಾಗದಂತೆ ತಡೆಯಲು ಅವುಗಳ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಮರುಸಂಘಟಿಸುವುದು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಕಾಲಕಾಲಕ್ಕೆ ಪರಿಶೀಲಿಸುವುದು ನಮ್ಮ ಮುಖ್ಯ ಗುರಿಯಾಗಿದೆ.'
                : 'The Taskforce is designed to be the "Internal Consultant" for our member cooperatives. Our goal is to restructure entire financial statuses and monitor performance time-to-time to prevent cooperatives from slipping into liquidation or loss.'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-black text-blue-600 mb-2">
                {locale === 'kn' ? 'ದುರ್ಬಲ → ಸಾಮಾನ್ಯ → ಸಕ್ರಿಯ' : 'Weak → Normal → Vibrant'}
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                {locale === 'kn' ? 'ರೂಪಾಂತರದ ಹಾದಿ' : 'The Path of Transformation'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Financial Stabilizing */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {locale === 'kn' ? 'ಆರ್ಥಿಕ ಸ್ಥಿರೀಕರಣ' : 'Financial Stabilizing'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ದ್ರವ್ಯತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ಮತ್ತು ಆರ್ಥಿಕ ಸ್ವತ್ತುಗಳ ಮರುಸಂಘಟನೆ.'
                  : 'Deep audit and restructuring of financial assets to restore liquidity.'}
              </p>
            </div>

            {/* Periodic Monitoring */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {locale === 'kn' ? 'ಕಾಲಕಾಲಕ್ಕೆ ಮೇಲ್ವಿಚಾರಣೆ' : 'Periodic Monitoring'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಪ್ರಗತಿಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಸ್ಥಳದಲ್ಲೇ ತಪಾಸಣೆ ಮತ್ತು ದತ್ತಾಂಶ ಮೇಲ್ವಿಚಾರಣೆ.'
                  : 'On-ground inspections and data tracking to ensure progress is maintained.'}
              </p>
            </div>

            {/* Handholding Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <HelpingHand className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {locale === 'kn' ? 'ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲ' : 'Handholding Support'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಆಧುನಿಕ ಸಹಕಾರಿ ವಿಧಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ನಿರ್ದೇಶಕರ ಮಂಡಳಿಗೆ ಸೂಕ್ತ ತರಬೇತಿ.'
                  : 'Mentoring the board of directors to adopt modern cooperative practices.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statutory Resources Section */}
      <section id="downloads" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಸಂಪನ್ಮೂಲಗಳು' : 'Statutory Resources'}
              </h2>
              <p className="text-slate-600">
                {locale === 'kn'
                  ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭ ಮತ್ತು ಅದರ ತಿದ್ದುಪಡಿಗಳ ನಿಯಮಾವಳಿಗಳನ್ನು ಪಡೆಯಿರಿ.'
                  : 'Access the complete legal framework of the Karnataka Souharda Sahakari Act, 1997 and its subsequent amendments.'}
              </p>
              <div className="flex items-start gap-3 pt-2">
                <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'kn'
                    ? 'ಈ ದಾಖಲೆಗಳನ್ನು ಅಧಿಕೃತ ಉಲ್ಲೇಖ ಮತ್ತು ಶಾಸನಬದ್ಧ ಅನುಸರಣೆಗಾಗಿ PDF ಮಾದರಿಯಲ್ಲಿ ನೀಡಲಾಗಿದೆ.'
                    : 'These documents are provided in PDF format for official reference and compliance purposes.'}
                </p>
              </div>
            </div>

            {/* Downloads Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* English Version */}
                <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">Souharda Act 1997</h3>
                      <span className="text-[10px] uppercase font-semibold text-slate-500">
                        English Version
                      </span>
                    </div>
                  </div>
                  <a
                    href="/assets/docs/souharda_act_english.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 border border-slate-900 text-slate-900 font-medium text-xs rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>

                {/* Kannada Version */}
                <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ೧೯೯೭</h3>
                      <span className="text-[10px] uppercase font-semibold text-slate-500">
                        Kannada Version
                      </span>
                    </div>
                  </div>
                  <a
                    href="/assets/docs/souharda_act_kannada.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 border border-slate-900 text-slate-900 font-medium text-xs rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" /> ಡೌನ್‌ಲೋಡ್ PDF
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}