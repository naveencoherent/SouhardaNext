'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ShieldCheck, Search, FileX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import RegulatoryHero, { Breadcrumb } from '@/components/common/RegulatoryHero';

// --- Interfaces ---

export interface CircularItem {
  id: string;
  titleEn: string;
  titleKn: string;
  ref: string;
  pdfUrl: string;
}

const CIRCULARS_2026: CircularItem[] = [
  {
    id: '01.',
    titleEn: 'Circular regarding criteria to be considered and documents to be submitted when granting branch permission',
    titleKn: 'ಶಾಖಾ ಅನುಮತಿ ನೀಡುವಾಗ ಪರಿಗಣಿಸಬೇಕಾದ ಮಾನದಂಡಗಳು ಮತ್ತು ಸಲ್ಲಿಸಬೇಕಾದ ದಾಖಲೆಗಳ ಕುರಿತ ಸುತ್ತೋಲೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/1KSSFCL_2026_Branch.pdf',
  },
  {
    id: '02.',
    titleEn: 'Proposed guidelines regarding staff recruitment in Souharda Cooperatives',
    titleKn: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳಲ್ಲಿ ಸಿಬ್ಬಂದಿ ನೇಮಕಾತಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾರ್ಗದರ್ಶಿಗಳು ಪ್ರಸ್ತಾವನೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/2Employee_Recruitment.pdf',
  },
  {
    id: '03.',
    titleEn: 'Guidelines regarding disqualification and/or co-option of Directors of Souharda Cooperatives',
    titleKn: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ನಿರ್ದೇಶಕರ ಅನರ್ಹತೆ ಮತ್ತು /ಅಥವಾ ಸಹ ಆಯ್ಕೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾರ್ಗದರ್ಶಿಗಳು.',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/3KSSFCL_Director_Disable.pdf',
  },
  {
    id: '04.',
    titleEn: 'Circular on Financial Soundness Criteria & Standards',
    titleKn: 'ಆರ್ಥಿಕ ಸಬಲತೆಯ ಮಾನದಂಡಗಳ ಸುತ್ತೋಲೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/4FKSSFCL_Financial_mease.pdf',
  },
];

// --- Circular Entry Row Component ---

function CircularEntry({ item, locale }: { item: CircularItem; locale: string }) {
  const title = locale === 'kn' ? item.titleKn : item.titleEn;

  return (
    <div className="circular-entry p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-0">
      <div className="flex items-start gap-4">
        <span className="entry-no text-blue-600 font-extrabold text-base pt-0.5 select-none shrink-0">
          {item.id}
        </span>
        <div className="entry-details space-y-1">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blue-subject-link text-base md:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug block"
          >
            {title}
          </Link>
          <span className="ref-text text-xs font-semibold text-slate-500 block">
            {item.ref}
          </span>
        </div>
      </div>

      <div className="entry-actions shrink-0 self-end sm:self-center flex items-center gap-2">
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label={`Download PDF: ${title}`}
          className="pdf-download p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-xs"
          title={locale === 'kn' ? 'PDF ಸುತ್ತೋಲೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download PDF Circular'}
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function CircularsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Context resolution with fallback
  const langContext = useLanguage();
  const locale = langContext?.locale || 'en';

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Regulatory', href: '/regulatory' },
    { label: locale === 'kn' ? 'ಸುತ್ತೋಲೆಗಳು' : 'Circulars' },
  ];

  const pageTitle =
    locale === 'kn'
      ? 'ಅಧಿಕೃತ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ನಿರ್ದೇಶನಗಳು'
      : 'OFFICIAL CIRCULARS & DIRECTIVES';

  const pageSubtitle =
    locale === 'kn'
      ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಮಹಾಮಂಡಳವು ಹೊರಡಿಸಿದ ಅಧಿಕೃತ ಆಡಳಿತಾತ್ಮಕ ಮ್ಯಾಂಡೇಟ್‌ಗಳು, ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು ಮತ್ತು ಸುತ್ತೋಲೆಗಳು.'
      : 'Official administrative mandates, regulatory guidelines, and statutory circulars issued by the Karnataka State Souharda Federal Cooperative Ltd.';

  // Search filtering
  const filteredCirculars = CIRCULARS_2026.filter((item) => {
    const titleEn = item.titleEn.toLowerCase();
    const titleKn = item.titleKn.toLowerCase();
    const ref = item.ref.toLowerCase();
    const query = searchQuery.toLowerCase().trim();

    return titleEn.includes(query) || titleKn.includes(query) || ref.includes(query);
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Hero Header */}
      <RegulatoryHero
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumbs={breadcrumbs}
        highlightTerm={locale === 'kn' ? 'ಸುತ್ತೋಲೆಗಳು' : 'Circulars'}
      />

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Simple Flat Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/Regulatory/Circular/Circular.webp"
                  alt="Souharda Regulatory Circulars"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-auto object-cover block"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Title, Content, Purpose Box & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-100">
                  {locale === 'kn' 
                    ? 'ಕರ್ನಾಟಕದ ನವ ಪೀಳಿಗೆಯ ಸಹಕಾರಿಗಳ ಸಬಲೀಕರಣ' 
                    : "EMPOWERING KARNATAKA'S NEW GENERATION OF COOPERATIVES"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-amber-600 leading-tight">
                {locale === 'kn' ? (
                  <>ಸೌಹಾರ್ದ: <span className="text-amber-500">ಸಹಕಾರದಲ್ಲಿ ಸಾಮರಸ್ಯ</span></>
                ) : (
                  <>SOUHARDA: <span className="text-amber-500">HARMONY IN COOPERATION</span></>
                )}
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {locale === 'kn' ? (
                  <>
                    ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿ ಹೊಂದಿರುವ <strong>KSSFCL</strong>, <strong>ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, 1997</strong> ರ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿತ ಸಹಕಾರಿಗಳ ಶಾಸನಬದ್ಧ ಮತ್ತು ಅತ್ಯುನ್ನತ ಆಡಳಿತ ಸಂಸ್ಥೆಯಾಗಿದೆ.
                  </>
                ) : (
                  <>
                    Based in Bengaluru, the capital city of Karnataka, KSSFCL is the regulatory and apex body for cooperatives registered under the <strong>Karnataka Souharda Sahakari Act, 1997</strong>. Unlike traditional cooperatives, &quot;Souharda&quot; cooperatives are designed to be more autonomous, self-reliant, and self-regulated.
                  </>
                )}
              </p>

              <div className="p-4 md:p-5 bg-amber-50/60 rounded-2xl border-l-4 border-amber-500 text-slate-700 text-sm leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-extrabold">
                    {locale === 'kn' ? 'ಉದ್ದೇಶ:' : 'Purpose:'}
                  </strong>{' '}
                  {locale === 'kn'
                    ? 'ಕರ್ನಾಟಕದಲ್ಲಿನ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಹಿತಾಸಕ್ತಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು, ಪ್ರೋತ್ಸಾಹಿಸಲು ಮತ್ತು ರಕ್ಷಿಸಲು ಇದು ಶಾಸನಬದ್ಧ ಸಂಸ್ಥೆಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. 1997 ರ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಯಾವುದೇ ಸಹಕಾರಿಗೆ ಸದಸ್ಯತ್ವವು ಕಡ್ಡಾಯವಾಗಿದೆ.'
                    : 'It acts as a statutory body to oversee, promote, and protect the interests of Souharda cooperatives in Karnataka. Membership is mandatory for any cooperative registered under the 1997 Act.'}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
                <div className="p-3 md:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="block text-xl md:text-2xl lg:text-3xl font-black text-slate-900">
                    6,100+
                  </span>
                  <span className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    {locale === 'kn' ? 'ಸಹಕಾರಿಗಳು' : 'COOPERATIVES'}
                  </span>
                </div>

                <div className="p-3 md:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="block text-xl md:text-2xl lg:text-3xl font-black text-slate-900">
                    ₹77k Cr+
                  </span>
                  <span className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    {locale === 'kn' ? 'ವಹಿವಾಟು' : 'TURNOVER'}
                  </span>
                </div>

                <div className="p-3 md:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="block text-xl md:text-2xl lg:text-3xl font-black text-slate-900">
                    100%
                  </span>
                  <span className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    {locale === 'kn' ? 'ನಿಯಂತ್ರಣ' : 'COMPLIANCE'}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- CIRCULARS PORTAL SECTION WITH GRAPH GRID BACKGROUND --- */}
      <section 
        className="circulars-portal-section py-12 px-4 relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          
          {/* Search Input Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                locale === 'kn'
                  ? 'ಶೀರ್ಷಿಕೆ ಅಥವಾ ಉಲ್ಲೇಖದ ಮೂಲಕ ಸುತ್ತೋಲೆಗಳನ್ನು ಹುಡುಕಿ...'
                  : 'Search circulars by title or reference...'
              }
              aria-label="Search circulars"
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs text-slate-800 placeholder:text-slate-400"
            />
          </div>

          {/* Matrix Container */}
          <div className="matrix-container bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="year-block">
              <div className="division-label-row bg-slate-900 text-amber-400 py-3.5 px-6 text-center font-bold text-sm tracking-widest uppercase border-b border-slate-800 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>
                  ✦ {locale === 'kn' ? '2026 ಸರಣಿಯ ಸುತ್ತೋಲೆಗಳು' : '2026 SERIES CIRCULARS'} ✦
                </span>
              </div>

              <div className="home-style-list divide-y divide-slate-100">
                {filteredCirculars.length > 0 ? (
                  filteredCirculars.map((item) => (
                    <CircularEntry key={item.id} item={item} locale={locale} />
                  ))
                ) : (
                  <div className="py-12 text-center text-slate-500 space-y-2">
                    <FileX className="w-8 h-8 mx-auto text-slate-400" />
                    <p className="text-sm font-medium">
                      {locale === 'kn'
                        ? 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಸುತ್ತೋಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
                        : 'No circulars matching your search.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}