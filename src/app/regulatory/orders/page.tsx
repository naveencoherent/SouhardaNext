'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, ShieldCheck, Search, FileX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import RegulatoryHero, { Breadcrumb } from '@/components/common/RegulatoryHero';

// --- Interface Definitions ---

export interface TenderItem {
  id: string;
  date: string;
  refNo: string;
  subjectEn: string;
  subjectKn: string;
  closingDate: string;
  pdfUrl: string;
}

// Sample fallback tender data
const STATUTORY_TENDERS: TenderItem[] = [
  {
    id: '01.',
    date: '15-Mar-2026',
    refNo: 'KSSFCL/TND/2026/01',
    subjectEn: 'Procurement of Enterprise Cloud Server Infrastructure & Maintenance Services',
    subjectKn: 'ಎಂಟರ್‌ಪ್ರೈಸ್ ಕ್ಲೌಡ್ ಸರ್ವರ್ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ನಿರ್ವಹಣೆ ಸೇವೆಗಳ ಸಂಗ್ರಹಣೆ',
    closingDate: '15-Apr-2026',
    pdfUrl: '/assets/docs/tenders/KSSFCL_TND_2026_01.pdf',
  },
  {
    id: '02.',
    date: '02-Feb-2026',
    refNo: 'KSSFCL/TND/2026/02',
    subjectEn: 'Annual Maintenance Contract for Banking Software & Hardware Security',
    subjectKn: 'ಬ್ಯಾಂಕಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ಭದ್ರತೆಗಾಗಿ ವಾರ್ಷಿಕ ನಿರ್ವಹಣೆ ಒಪ್ಪಂದ',
    closingDate: '28-Feb-2026',
    pdfUrl: '/assets/docs/tenders/KSSFCL_TND_2026_02.pdf',
  },
];

// --- Sub-component for Individual Tender Card ---

function TenderCard({ item, locale }: { item: TenderItem; locale: string }) {
  const subject = locale === 'kn' ? item.subjectKn : item.subjectEn;

  return (
    <div className="p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors">
      <div className="flex items-start gap-4">
        <span className="text-blue-600 font-extrabold text-base pt-0.5 select-none">
          {item.id}
        </span>
        <div className="space-y-1">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug block"
          >
            {subject}
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs font-semibold text-slate-500">
            <span>{locale === 'kn' ? 'ಸಂಖ್ಯೆ' : 'Ref'}: {item.refNo}</span>
            <span>•</span>
            <span>{locale === 'kn' ? 'ಪ್ರಕಟಿತ' : 'Published'}: {item.date}</span>
            <span>•</span>
            <span className="text-amber-600 font-bold">
              {locale === 'kn' ? 'ಕೊನೆಯ ದಿನಾಂಕ' : 'Closing'}: {item.closingDate}
            </span>
          </div>
        </div>
      </div>

      <div className="shrink-0 self-end sm:self-center flex items-center gap-2">
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label={`Download Tender Document: ${subject}`}
          className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-xs"
          title={locale === 'kn' ? 'ಟೆಂಡರ್ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download Tender PDF'}
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function StatutoryTendersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Safe language context resolution with fallback
  const langContext = useLanguage();
  const locale = langContext?.locale || 'en';

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Regulatory', href: '/regulatory' },
    { label: locale === 'kn' ? 'ಟೆಂಡರ್‌ಗಳು' : 'Tenders' },
  ];

  const pageTitle = locale === 'kn' ? 'ಅಧಿಕೃತ ಟೆಂಡರ್‌ಗಳು ಮತ್ತು ಇಒಐ' : 'Official Tenders & EOI';
  const pageSubtitle = locale === 'kn'
    ? 'ಸಾರ್ವಜನಿಕ ಸಂಗ್ರಹಣೆ ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಅಧಿಕೃತ ಟೆಂಡರ್ ವಿವರಣೆಗಳು'
    : 'Public procurement notices, expressions of interest (EOI), and official tender specifications';

  // Safe search filtering
  const filteredTenders = STATUTORY_TENDERS.filter((item) => {
    const subject = locale === 'kn' ? item.subjectKn : item.subjectEn;
    return (
      subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.refNo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standardized Hero Header matching site-wide height & gradient pattern */}
      <RegulatoryHero
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumbs={breadcrumbs}
        highlightTerm={locale === 'kn' ? 'ಟೆಂಡರ್‌ಗಳು' : 'Tenders'}
      />

      {/* Description Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            {locale === 'kn' ? (
              <>KSSFCL ಅಧಿಕೃತ: <span className="text-blue-600">ಸಕ್ರಿಯ ಟೆಂಡರ್‌ಗಳು</span></>
            ) : (
              <>KSSFCL Official: <span className="text-blue-600">Active Tenders</span></>
            )}
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {locale === 'kn'
              ? 'ಫೆಡರಲ್ ಸಹಕಾರಿಯಿಂದ ನೀಡಲಾದ ಸಾರ್ವಜನಿಕ ಸಂಗ್ರಹಣೆ ಪ್ರಕಟಣೆಗಳು, ಆಸಕ್ತಿಯ ವ್ಯಕ್ತಪಡಿಸುವಿಕೆ (EOI) ಮತ್ತು ಅಧಿಕೃತ ಟೆಂಡರ್ ವಿವರಣೆಗಳು.'
              : 'Public procurement notices, expressions of interest (EOI), and official tender specifications issued by the Federal Cooperative.'}
          </p>
        </div>
      </section>

      {/* Search & List Section */}
      <section className="py-10 max-w-5xl mx-auto px-4 space-y-6">
        <div className="relative max-w-md mx-auto">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              locale === 'kn'
                ? 'ವಿಷಯ ಅಥವಾ ಉಲ್ಲೇಖದ ಮೂಲಕ ಟೆಂಡರ್‌ಗಳನ್ನು ಹುಡುಕಿ...'
                : 'Search tenders by subject or reference...'
            }
            aria-label="Search tenders"
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-amber-400 py-3 px-6 text-center font-bold text-sm tracking-widest uppercase border-b border-slate-800 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              ✦ {locale === 'kn' ? 'ಇತ್ತೀಚಿನ ಟೆಂಡರ್ ಪ್ರಕಟಣೆಗಳು' : 'LATEST TENDER NOTICES'} (2026-27) ✦
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredTenders.length > 0 ? (
              filteredTenders.map((item) => (
                <TenderCard key={item.refNo} item={item} locale={locale} />
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <FileX className="w-8 h-8 mx-auto text-slate-400" />
                <p className="text-sm font-medium">
                  {locale === 'kn'
                    ? 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಟೆಂಡರ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
                    : 'No tender notices matching your search.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}