'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Download, FileText, FileX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import RegulatoryHero, { Breadcrumb } from '@/components/common/RegulatoryHero';

// --- Types & Data Definitions ---

interface Tender {
  id: string;
  ref: string;
  descriptionEn: string;
  descriptionKn: string;
  lastDate: string;
  status: 'Active' | 'Closed' | 'Under Review';
  documentUrl: string;
}

const TENDERS_DATA: Tender[] = [
  {
    id: '1',
    ref: 'KSSF/TND/2026/01',
    descriptionEn: 'Implementation of Integrated Co-operative ERP Software System',
    descriptionKn: 'ಸಮೀಕೃತ ಸಹಕಾರಿ ಇಆರ್‌ಪಿ ಸಾಫ್ಟ್‌ವೇರ್ ವ್ಯವಸ್ಥೆಯ ಅನುಷ್ಠಾನ',
    lastDate: '15-Apr-2026',
    status: 'Active',
    documentUrl: '/assets/docs/Tender_ERP_System_2026.pdf',
  },
  {
    id: '2',
    ref: 'KSSF/TND/2026/02',
    descriptionEn: 'Empanelment of Financial Auditors & Tax Consultants for FY 2026-27',
    descriptionKn: '೨೦೨೬-೨೨೭ ಸಾಲಿಗೆ ಆರ್ಥಿಕ ಲೆಕ್ಕ ಪರಿಶೋಧಕರು ಮತ್ತು ತೆರಿಗೆ ಸಲಹೆಗಾರರ ನೋಂದಣಿ',
    lastDate: '05-Apr-2026',
    status: 'Under Review',
    documentUrl: '/assets/docs/RFP_Financial_Auditors_2026.pdf',
  },
  {
    id: '3',
    ref: 'KSSF/TND/2026/03',
    descriptionEn: 'Supply and Installation of IT Infrastructure Across Regional Offices',
    descriptionKn: 'ಪ್ರಾದೇಶಿಕ ಕಚೇರಿಗಳಲ್ಲಿ ಐಟಿ ಮೂಲಸೌಕರ್ಯ ಪೂರೈಕೆ ಮತ್ತು ಅಳವಡಿಕೆ',
    lastDate: '10-Jan-2026',
    status: 'Closed',
    documentUrl: '/assets/docs/Tender_Hardware_2025.pdf',
  },
];

export default function TendersPage() {
  const langContext = useLanguage();
  const locale = langContext?.locale || 'en';

  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Regulatory', href: '/regulatory' },
    { label: locale === 'kn' ? 'ಟೆಂಡರ್‌ಗಳು' : 'Tenders' },
  ];

  const pageTitle =
    locale === 'kn'
      ? 'ಟೆಂಡರ್‌ಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪ್ರಕಟಣೆಗಳು'
      : 'Tenders & Public Notices';

  const pageSubtitle =
    locale === 'kn'
      ? 'ಕರ್ನಾಟಕದ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಸಂಗ್ರಹಣೆ ಅವಕಾಶಗಳು, ವಿನಂತಿಗಳು (RFP) ಮತ್ತು ಮಾರಾಟಗಾರರ ಒಪ್ಪಂದಗಳು.'
      : 'Procurement Opportunities, Requests for Proposals (RFPs), and Vendor Contracts for Souharda Cooperatives across Karnataka.';

  const filteredTenders = TENDERS_DATA.filter((tender) => {
    const query = searchTerm.toLowerCase();
    return (
      tender.descriptionEn.toLowerCase().includes(query) ||
      tender.descriptionKn.toLowerCase().includes(query) ||
      tender.ref.toLowerCase().includes(query) ||
      tender.status.toLowerCase().includes(query) ||
      tender.lastDate.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standardized Regulatory Hero */}
      <RegulatoryHero
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumbs={breadcrumbs}
        highlightTerm={locale === 'kn' ? 'ಟೆಂಡರ್‌ಗಳು' : 'Tenders'}
      />

      {/* Main Section */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Live Search Bar & Summary */}
          <div className="p-4 sm:p-6 bg-white border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  locale === 'kn'
                    ? 'ವಿವರಣೆ, ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ ಅಥವಾ ಸ್ಥಿತಿಯ ಮೂಲಕ ಹುಡುಕಿ...'
                    : 'Search tenders by description, ref or status...'
                }
                aria-label="Search tenders"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              {locale === 'kn'
                ? `ಒಟ್ಟು ${TENDERS_DATA.length} ಟೆಂಡರ್‌ಗಳಲ್ಲಿ ${filteredTenders.length} ತೋರಿಸಲಾಗುತ್ತಿದೆ`
                : `Showing ${filteredTenders.length} of ${TENDERS_DATA.length} Tenders`}
            </span>
          </div>

          {/* Tenders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-6">{locale === 'kn' ? 'ಕ್ರ.ಸಂ' : 'Sl No'}</th>
                  <th className="py-3.5 px-6">{locale === 'kn' ? 'ವಿವರಣೆ / ಟೆಂಡರ್ ಸೂಚನೆ' : 'Description / Tender Notice'}</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">{locale === 'kn' ? 'ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ' : 'Ref. Number'}</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">{locale === 'kn' ? 'ಕೊನೆಯ ದಿನಾಂಕ' : 'Last Date'}</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">{locale === 'kn' ? 'ಸ್ಥಿತಿ' : 'Status'}</th>
                  <th className="py-3.5 px-6 text-center whitespace-nowrap">{locale === 'kn' ? 'ಕ್ರಮ' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((tender, index) => {
                    const description = locale === 'kn' ? tender.descriptionKn : tender.descriptionEn;

                    return (
                      <tr key={tender.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 text-slate-500 font-bold text-xs select-none">
                          {String(index + 1).padStart(2, '0')}
                        </td>
                        <td className="py-4 px-6 font-semibold text-slate-900 leading-relaxed">
                          <Link
                            href={tender.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                          >
                            {description}
                          </Link>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-slate-600 font-medium text-xs">
                          {tender.ref}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-slate-600 font-medium text-xs">
                          {tender.lastDate}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                              tender.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-800'
                                : tender.status === 'Under Review'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tender.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center whitespace-nowrap">
                          <a
                            href={tender.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            aria-label={`Download PDF: ${description}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white rounded-lg text-xs font-semibold transition-all shadow-xs"
                            title={locale === 'kn' ? 'PDF ದಾಖಲೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download PDF Document'}
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>PDF</span>
                            <Download className="w-3 h-3 ml-0.5" />
                          </a>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center gap-2">
                        <FileX className="w-8 h-8 text-slate-400" />
                        <p className="text-sm font-medium">
                          {locale === 'kn'
                            ? 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಾಣಿಕೆಯಾಗುವ ಯಾವುದೇ ಟೆಂಡರ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
                            : 'No tenders found matching your search.'}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSearchTerm('')}
                          className="text-xs text-blue-600 hover:underline font-semibold"
                        >
                          {locale === 'kn' ? 'ಹುಡುಕಾಟ ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ' : 'Clear Search Filter'}
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}