'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  FileText, 
  Landmark, 
  Gavel, 
  Download, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';

export default function InfoToMembersPage() {
  const { locale } = useLanguage();

  const CIRCULAR_CARDS = [
    {
      title: locale === 'kn' ? 'ಆಡಿಟ್ ಮಾರ್ಗದರ್ಶಿಗಳು' : 'Audit Guidelines',
      description: locale === 'kn'
        ? 'ವಾರ್ಷಿಕ ಸಹಕಾರ ಆಡಿಟ್‌ಗಳ ಶಾಸನಬದ್ಧ ಅವಶ್ಯಕತೆಗಳು ಮತ್ತು ಪ್ರಮಾಣಿತ ವಿಧಾನಗಳು.'
        : 'Statutory requirements and standard procedures for annual co-operative audits.',
      href: '/education/publications?cat=audit',
      icon: Calculator,
      accentColor: 'border-t-slate-900 text-slate-900',
    },
    {
      title: locale === 'kn' ? 'ಇಲಾಖಾ ಸುತ್ತೋಲೆಗಳು' : 'Departmental Circulars',
      description: locale === 'kn'
        ? 'ಕರ್ನಾಟಕ ಸಹಕಾರ ಇಲಾಖೆಯ ಅಧಿಕೃತ ಮಾಹಿತಿಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳು.'
        : 'Official updates from the Co-operative Department of Karnataka.',
      href: '/education/publications?cat=circulars',
      icon: FileText,
      accentColor: 'border-t-emerald-600 text-emerald-600',
    },
    {
      title: locale === 'kn' ? 'ಮಹಾಮಂಡಳದ ಸುತ್ತೋಲೆಗಳು' : 'Federal Circulars',
      description: locale === 'kn'
        ? 'KSSFCL ಸಂಸ್ಥೆಯಿಂದ ನೇರವಾಗಿ ಹೊರಡಿಸಲಾದ ಕಾರ್ಯಾಚರಣೆಯ ಸೂಚನೆಗಳು.'
        : 'Operational directives and notices issued directly by KSSFCL.',
      href: '/education/publications?cat=circulars',
      icon: Landmark,
      accentColor: 'border-t-amber-500 text-amber-600',
    },
    {
      title: locale === 'kn' ? 'ಆರ್‌ಬಿಐ ಮತ್ತು ಗೆಜೆಟ್' : 'RBI & Gazette',
      description: locale === 'kn'
        ? 'ಬ್ಯಾಂಕಿಂಗ್ ನಿಯಮಗಳು ಮತ್ತು ರಾಜ್ಯ ಗೆಜೆಟ್ ತಿದ್ದುಪಡಿಗಳ ಅಧಿಸೂಚನೆಗಳು.'
        : 'Notifications regarding banking regulations and state gazette updates.',
      href: '/education/publications?cat=circulars',
      icon: Gavel,
      accentColor: 'border-t-rose-600 text-rose-600',
    },
  ];

  const FORMATION_STEPS = [
    locale === 'kn' ? 'ಪ್ರವರ್ತಕರ ಸಭೆ' : 'Promoters Meeting',
    locale === 'kn' ? 'ಆರಂಭಿಕ ಶೇರು ಬಂಡವಾಳ ಸಂಗ್ರಹ' : 'Collecting Initial Share Capital',
    locale === 'kn' ? 'ನಿಬಂಧಕರಲ್ಲಿ ನೋಂದಣಿ' : 'Registration with Registrar',
    locale === 'kn' ? 'ಮೊದಲ ಆಡಳಿತ ಮಂಡಳಿ ಚುನಾವಣೆ' : 'Election to First Board',
    locale === 'kn' ? 'ಚಟುವಟಿಕೆಗಳ ಪ್ರಾರಂಭ' : 'Commencement of Activities',
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Standardized Services Hero Header */}
      <ServicesHero
        theme="emerald"
        badgeText={locale === 'kn' ? 'ಸದಸ್ಯ ಸೇವೆಗಳು' : 'Member Services'}
        title={locale === 'kn' ? 'ಸದಸ್ಯರಿಗೆ ಮಾಹಿತಿ' : 'Information for Members'}
        subtitle={
          locale === 'kn'
            ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಅತ್ಯಗತ್ಯ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು, ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಸಂಪನ್ಮೂಲಗಳು.'
            : 'Essential Guidelines, Circulars, and Statutory Resources for Souharda Co-operatives.'
        }
      />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column (Left) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Circulars Grid */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  {locale === 'kn' ? 'ಅಧಿಕೃತ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳು' : 'Official Circulars & Guidelines'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {locale === 'kn'
                    ? 'ಸಹಕಾರ ಇಲಾಖೆ ಮತ್ತು KSSFCL ಸಂಸ್ಥೆಯ ಇತ್ತೀಚಿನ ನಿಯಮಾವಳಿಗಳು ಹಾಗೂ ನಿರ್ದೇಶನಗಳೊಂದಿಗೆ ನವೀಕೃತರಾಗಿರಿ.'
                    : 'Stay updated with the latest regulatory changes and operational mandates from the Co-operative Department and KSSFCL.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {CIRCULAR_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={idx}
                      href={card.href}
                      className={`group bg-white rounded-2xl border border-slate-200 border-t-4 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 ${card.accentColor}`}
                    >
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 group-hover:text-emerald-700 transition-colors">
                          <Icon className="w-5 h-5 shrink-0" />
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors pt-2">
                        <span>{locale === 'kn' ? 'ಸಂಪನ್ಮೂಲ ವೀಕ್ಷಿಸಿ' : 'Access Resources'}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Byelaw Amendments Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                {locale === 'kn' ? 'ಉಪನಿಯಮಗಳ ತಿದ್ದುಪಡಿಗಳು' : 'Byelaw Amendments'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'kn' ? (
                  <>
                    ತಮ್ಮ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳನ್ನು ನವೀಕರಿಸಲು ಬಯಸುವ ಸಹಕಾರ ಸಂಘಗಳು{' '}
                    <strong className="text-slate-900">ಉಪನಿಯಮ ತಿದ್ದುಪಡಿ ಅರ್ಜಿ ನಮೂನೆಗಳನ್ನು</strong>{' '}
                    ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.
                  </>
                ) : (
                  <>
                    Societies looking to update their operations can download the{' '}
                    <strong className="text-slate-900">Application Formats for Byelaw Amendment</strong>.
                  </>
                )}
              </p>
              <div>
                <a
                  href="/assets/docs/publications/formats/bylaw-amendment-formats.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  {locale === 'kn' ? 'ತಿದ್ದುಪಡಿ ನಮೂನೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download Amendment Formats'}
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Formation Steps Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {locale === 'kn' ? 'ಸಹಕಾರ ಸಂಘ ರಚನೆಯ ಹಂತಗಳು' : 'Co-operative Formation Steps'}
              </h3>
              
              <ol className="space-y-3">
                {FORMATION_STEPS.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-amber-400 text-[11px] font-extrabold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <Link
                href="/regulatory/formation"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold transition-colors shadow-xs"
              >
                <span>{locale === 'kn' ? 'ಸಂಪೂರ್ಣ ರಚನಾ ಮಾರ್ಗದರ್ಶಿ' : 'Full Formation Guide'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Support Callout Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center space-y-2 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900">
                {locale === 'kn' ? 'ನೇರ ಸಹಾಯ ಬೇಕೇ?' : 'Need Direct Assistance?'}
              </h4>
              <p className="text-xs text-slate-500">
                {locale === 'kn'
                  ? 'ಸದಸ್ಯತ್ವ ಅಥವಾ ಪ್ರಕ್ರಿಯಾತ್ಮಕ ಮಾಹಿತಿಗಾಗಿ ನಿಮ್ಮ ವಿಭಾಗೀಯ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.'
                  : 'For membership queries or procedural help, contact your divisional office.'}
              </p>
              <div className="pt-2">
                <a
                  href="tel:08023378375"
                  className="inline-flex items-center justify-center gap-2 text-sm font-extrabold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  ೦೮೦ - ೨೩೩೭೮೩೭೫
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}