'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Download,
  ExternalLink,
  FileX,
  Calendar,
  FileText,
  ShieldAlert,
  Gavel,
  CheckSquare,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import RegulatoryHero, { Breadcrumb } from '@/components/common/RegulatoryHero';

// --- Interfaces ---

interface LiquidationDocument {
  id: string;
  refNo: string;
  titleEn: string;
  titleKn: string;
  date: string;
  categoryEn: string;
  categoryKn: string;
  pdfUrl: string;
  size: string;
}

interface DistrictData {
  nameEn: string;
  nameKn: string;
  notWorking: number;
  liqPending: number;
  liqOrder: number;
  closed: number;
  total: number;
}

interface DivisionData {
  nameEn: string;
  nameKn: string;
  notWorking: number;
  liqPending: number;
  liqOrder: number;
  closed: number;
  total: number;
}

// --- Sample Liquidation PDF Documents ---

const LIQUIDATION_DATA: LiquidationDocument[] = [
  {
    id: '1',
    refNo: 'KSSFCL/LIQ/2024-25/01',
    titleEn: 'Order of Winding Up & Appointment of Liquidator for Defunct Cooperatives',
    titleKn: 'ನಿಷ್ಕ್ರಿಯ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಮುಕ್ತಾಯಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಪಡುವಣಾಧಿಕಾರಿಯ ನೇಮಕಾತಿ ಆದೇಶ',
    date: '20-May-2024',
    categoryEn: 'Winding Up',
    categoryKn: 'ಸಮಾಪ್ತಿ (Winding Up)',
    pdfUrl: '/documents/liquidation/winding-up-order-2024.pdf',
    size: '1.4 MB',
  },
  {
    id: '2',
    refNo: 'KSSFCL/LIQ/2024-25/02',
    titleEn: 'Public Notice: Claims Submission Guidelines for Depositors and Creditors',
    titleKn: 'ಸಾರ್ವಜನಿಕ ಸೂಚನೆ: ಠೇವಣಿದಾರರು ಮತ್ತು ಸಾಲಗಾರರಿಗೆ ಹಕ್ಕು ಸಲ್ಲಿಕೆ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು',
    date: '10-Apr-2024',
    categoryEn: 'Public Notice',
    categoryKn: 'ಸಾರ್ವಜನಿಕ ಸೂಚನೆ',
    pdfUrl: '/documents/liquidation/claims-guidelines-2024.pdf',
    size: '920 KB',
  },
  {
    id: '3',
    refNo: 'KSSFCL/LIQ/2023-24/15',
    titleEn: 'Statewide Master Dashboard & Division-wise Status of Liquidated Cooperatives',
    titleKn: 'ರಾಜ್ಯಾದ್ಯಂತ ಮಾಸ್ಟರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮತ್ತು ಸಂಲಿಪೀಕರಣ ಸಹಕಾರಿಗಳ ವಿಭಾಗವಾರು ಸ್ಥಿತಿ',
    date: '15-Jan-2024',
    categoryEn: 'Status Report',
    categoryKn: 'ಸ್ಥಿತಿ ವರದಿ',
    pdfUrl: '/documents/liquidation/statewide-status-report.pdf',
    size: '2.8 MB',
  },
];

// --- Division & District Datasets ---

const BELAGAVI_DISTRICTS: DistrictData[] = [
  { nameEn: 'BELAGAVI', nameKn: 'ಬೆಳಗಾವಿ', notWorking: 100, liqPending: 124, liqOrder: 71, closed: 24, total: 319 },
  { nameEn: 'VIJAYAPURA', nameKn: 'ವಿಜಯಪುರ', notWorking: 92, liqPending: 37, liqOrder: 50, closed: 5, total: 184 },
  { nameEn: 'BAGALKOT', nameKn: 'ಬಾಗಲಕೋಟೆ', notWorking: 35, liqPending: 15, liqOrder: 22, closed: 5, total: 77 },
  { nameEn: 'DHARWAD', nameKn: 'ಧಾರವಾಡ', notWorking: 19, liqPending: 14, liqOrder: 15, closed: 6, total: 54 },
  { nameEn: 'HAVERI', nameKn: 'ಹಾವೇರಿ', notWorking: 16, liqPending: 1, liqOrder: 12, closed: 1, total: 30 },
  { nameEn: 'GADAG', nameKn: 'ಗದಗ', notWorking: 10, liqPending: 1, liqOrder: 5, closed: 6, total: 22 },
  { nameEn: 'UTTARA KANNADA', nameKn: 'ಉತ್ತರ ಕನ್ನಡ', notWorking: 19, liqPending: 0, liqOrder: 19, closed: 3, total: 41 },
];

const BENGALURU_DISTRICTS: DistrictData[] = [
  { nameEn: 'BENGALURU URBAN', nameKn: 'ಬೆಂಗಳೂರು ನಗರ', notWorking: 95, liqPending: 89, liqOrder: 17, closed: 5, total: 206 },
  { nameEn: 'BENGALURU RURAL', nameKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', notWorking: 5, liqPending: 0, liqOrder: 3, closed: 3, total: 11 },
  { nameEn: 'RAMANAGARA', nameKn: 'ರಾಮನಗರ', notWorking: 3, liqPending: 11, liqOrder: 0, closed: 0, total: 14 },
  { nameEn: 'CHIKKABALLAPURA', nameKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', notWorking: 9, liqPending: 10, liqOrder: 0, closed: 0, total: 19 },
  { nameEn: 'KOLAR', nameKn: 'ಕೋಲಾರ', notWorking: 7, liqPending: 3, liqOrder: 8, closed: 0, total: 18 },
  { nameEn: 'TUMAKURU', nameKn: 'ತುಮಕೂರು', notWorking: 25, liqPending: 22, liqOrder: 23, closed: 12, total: 82 },
  { nameEn: 'SHIVAMOGGA', nameKn: 'ಶಿವಮೊಗ್ಗ', notWorking: 14, liqPending: 18, liqOrder: 6, closed: 0, total: 38 },
  { nameEn: 'CHITRADURGA', nameKn: 'ಚಿತ್ರದುರ್ಗ', notWorking: 13, liqPending: 14, liqOrder: 26, closed: 0, total: 53 },
  { nameEn: 'DAVANAGERE', nameKn: 'ದಾವಣಗೆರೆ', notWorking: 14, liqPending: 2, liqOrder: 9, closed: 0, total: 25 },
];

const MYSURU_DISTRICTS: DistrictData[] = [
  { nameEn: 'MYSURU', nameKn: 'ಮೈಸೂರು', notWorking: 6, liqPending: 4, liqOrder: 7, closed: 5, total: 22 },
  { nameEn: 'MANDYA', nameKn: 'ಮಂಡ್ಯ', notWorking: 2, liqPending: 1, liqOrder: 1, closed: 0, total: 4 },
  { nameEn: 'HASSAN', nameKn: 'ಹಾಸನ', notWorking: 8, liqPending: 0, liqOrder: 7, closed: 3, total: 18 },
  { nameEn: 'CHAMARAJANAGARA', nameKn: 'ಚಾಮರಾಜನಗರ', notWorking: 1, liqPending: 0, liqOrder: 2, closed: 0, total: 3 },
  { nameEn: 'SOUTH CANARA (D.K)', nameKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', notWorking: 0, liqPending: 1, liqOrder: 4, closed: 2, total: 7 },
  { nameEn: 'KODAGU', nameKn: 'ಕೊಡಗು', notWorking: 1, liqPending: 0, liqOrder: 0, closed: 0, total: 1 },
  { nameEn: 'CHIKMAGALUR', nameKn: 'ಚಿಕ್ಕಮಗಳೂರು', notWorking: 4, liqPending: 0, liqOrder: 5, closed: 3, total: 12 },
  { nameEn: 'UDUPI', nameKn: 'ಉಡುಪಿ', notWorking: 0, liqPending: 0, liqOrder: 3, closed: 4, total: 7 },
];

const KALABURAGI_DISTRICTS: DistrictData[] = [
  { nameEn: 'KALABURAGI', nameKn: 'ಕಲಬುರಗಿ', notWorking: 43, liqPending: 12, liqOrder: 51, closed: 1, total: 107 },
  { nameEn: 'BIDAR', nameKn: 'ಬೀದರ್', notWorking: 28, liqPending: 2, liqOrder: 35, closed: 14, total: 79 },
  { nameEn: 'YADAGIRI', nameKn: 'ಯಾದಗಿರಿ', notWorking: 20, liqPending: 4, liqOrder: 5, closed: 0, total: 29 },
  { nameEn: 'BALLARI', nameKn: 'ಬಳ್ಳಾರಿ', notWorking: 9, liqPending: 3, liqOrder: 7, closed: 2, total: 21 },
  { nameEn: 'VIJAYANAGARA', nameKn: 'ವಿಜಯನಗರ', notWorking: 25, liqPending: 0, liqOrder: 9, closed: 33, total: 67 },
  { nameEn: 'RAICHUR', nameKn: 'ರಾಯಚೂರು', notWorking: 28, liqPending: 0, liqOrder: 32, closed: 5, total: 65 },
  { nameEn: 'KOPPAL', nameKn: 'ಕೊಪ್ಪಳ', notWorking: 29, liqPending: 8, liqOrder: 29, closed: 3, total: 69 },
];

const calculateDivisionTotal = (
  nameEn: string,
  nameKn: string,
  districts: DistrictData[]
): DivisionData => {
  return districts.reduce(
    (acc, cur) => ({
      ...acc,
      notWorking: acc.notWorking + cur.notWorking,
      liqPending: acc.liqPending + cur.liqPending,
      liqOrder: acc.liqOrder + cur.liqOrder,
      closed: acc.closed + cur.closed,
      total: acc.total + cur.total,
    }),
    { nameEn, nameKn, notWorking: 0, liqPending: 0, liqOrder: 0, closed: 0, total: 0 }
  );
};

const DIVISION_TOTALS: DivisionData[] = [
  calculateDivisionTotal('Belagavi Division', 'ಬೆಳಗಾವಿ ವಿಭಾಗ', BELAGAVI_DISTRICTS),
  calculateDivisionTotal('Bengaluru Division', 'ಬೆಂಗಳೂರು ವಿಭಾಗ', BENGALURU_DISTRICTS),
  calculateDivisionTotal('Mysuru Division', 'ಮೈಸೂರು ವಿಭಾಗ', MYSURU_DISTRICTS),
  calculateDivisionTotal('Kalaburagi Division', 'ಕಲಬುರಗಿ ವಿಭಾಗ', KALABURAGI_DISTRICTS),
];

// --- Sub-component: District Table ---

function DistrictTable({
  titleEn,
  titleKn,
  data,
  locale,
}: {
  titleEn: string;
  titleKn: string;
  data: DistrictData[];
  locale: string;
}) {
  const divisionTotals = data.reduce(
    (acc, cur) => ({
      notWorking: acc.notWorking + cur.notWorking,
      liqPending: acc.liqPending + cur.liqPending,
      liqOrder: acc.liqOrder + cur.liqOrder,
      closed: acc.closed + cur.closed,
      total: acc.total + cur.total,
    }),
    { notWorking: 0, liqPending: 0, liqOrder: 0, closed: 0, total: 0 }
  );

  return (
    <div>
      <div className="bg-lime-100 text-blue-900 py-2.5 px-4 text-center font-bold text-sm tracking-wide border-y border-slate-200">
        ✦ {locale === 'kn' ? titleKn : titleEn} ✦
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase">
              <th className="py-2.5 px-3">{locale === 'kn' ? 'ಕ್ರ.ಸಂ.' : 'SL.'}</th>
              <th className="py-2.5 px-3 text-left">{locale === 'kn' ? 'ಜಿಲ್ಲೆ' : 'District'}</th>
              <th className="py-2.5 px-3">{locale === 'kn' ? 'ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲ' : 'Not Working'}</th>
              <th className="py-2.5 px-3">{locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಬಾಕಿ' : 'Liq. Pending'}</th>
              <th className="py-2.5 px-3">{locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಆದೇಶ' : 'Liq. Order'}</th>
              <th className="py-2.5 px-3">{locale === 'kn' ? 'ಮುಚ್ಚಲಾಗಿದೆ' : 'Closed'}</th>
              <th className="py-2.5 px-3 bg-amber-50 text-slate-900 font-bold">
                {locale === 'kn' ? 'ಒಟ್ಟು' : 'Total'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {data.map((row, index) => (
              <tr key={row.nameEn} className="hover:bg-slate-50 transition-colors">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3 text-left font-bold text-slate-900">
                  {locale === 'kn' ? row.nameKn : row.nameEn}
                </td>
                <td className="py-2 px-3">{row.notWorking}</td>
                <td className="py-2 px-3">{row.liqPending}</td>
                <td className="py-2 px-3">{row.liqOrder}</td>
                <td className="py-2 px-3">{row.closed}</td>
                <td className="py-2 px-3 font-bold text-slate-900 bg-amber-50">{row.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 font-bold text-slate-900 border-t border-slate-200">
              <td colSpan={2} className="py-2.5 px-3 text-left">
                {locale === 'kn' ? 'ವಿಭಾಗೀಯ ಒಟ್ಟು' : 'DIVISION TOTAL'}
              </td>
              <td className="py-2.5 px-3">{divisionTotals.notWorking}</td>
              <td className="py-2.5 px-3">{divisionTotals.liqPending}</td>
              <td className="py-2.5 px-3">{divisionTotals.liqOrder}</td>
              <td className="py-2.5 px-3">{divisionTotals.closed}</td>
              <td className="py-2.5 px-3 bg-amber-100">{divisionTotals.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function LiquidationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Safe context resolution with default language fallback
  const langContext = useLanguage();
  const locale = langContext?.locale || 'en';

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Regulatory', href: '/regulatory' },
    { label: locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಪ್ರಕ್ರಿಯೆ' : 'Liquidation Process' },
  ];

  const pageTitle =
    locale === 'kn'
      ? 'ಸಂಲಿಪೀಕರಣ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಸ್ಥಿತಿ'
      : 'Liquidation Process & Status';

  const pageSubtitle =
    locale === 'kn'
      ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ 1997 ರ ಅಡಿಯಲ್ಲಿ ಮುಕ್ತಾಯಗೊಳಿಸುವಿಕೆ ಆದೇಶಗಳು, ಆಸ್ತಿ ನಗದೀಕರಣ ಸೂಚನೆಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಅನುಸರಣೆ ಸ್ಥಿತಿ.'
      : 'Access winding-up orders, asset realization notices, and statutory compliance status under the Karnataka Souharda Sahakari Act, 1997.';

  const filteredDocuments = LIQUIDATION_DATA.filter((item) => {
    const query = searchQuery.toLowerCase();
    const title = locale === 'kn' ? item.titleKn : item.titleEn;
    const category = locale === 'kn' ? item.categoryKn : item.categoryEn;

    return (
      title.toLowerCase().includes(query) ||
      item.refNo.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query)
    );
  });

  const stateTotals = DIVISION_TOTALS.reduce(
    (acc, cur) => ({
      notWorking: acc.notWorking + cur.notWorking,
      liqPending: acc.liqPending + cur.liqPending,
      liqOrder: acc.liqOrder + cur.liqOrder,
      closed: acc.closed + cur.closed,
      total: acc.total + cur.total,
    }),
    { notWorking: 0, liqPending: 0, liqOrder: 0, closed: 0, total: 0 }
  );

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Standardized Regulatory Hero */}
      <RegulatoryHero
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumbs={breadcrumbs}
        highlightTerm={locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ' : 'Liquidation'}
      />

      {/* Documents Search & Download Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
          {locale === 'kn'
            ? 'ಅಧಿಕೃತ ಸಂಲಿಪೀಕರಣ ಆದೇಶಗಳು ಮತ್ತು ದಾಖಲೆಗಳು'
            : 'Official Liquidation Orders & Documents'}
        </h2>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={
                locale === 'kn'
                  ? 'ಸಂಲಿಪೀಕರಣ ಆದೇಶಗಳು, ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ ಅಥವಾ ವರ್ಗಗಳನ್ನು ಹುಡುಕಿ...'
                  : 'Search liquidation orders, ref number, or categories...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-red-50 text-red-700 text-xs font-bold rounded-md border border-red-100">
                      {locale === 'kn' ? doc.categoryKn : doc.categoryEn}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Ref: {doc.refNo}
                    </span>
                  </div>
                  <Link
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    {locale === 'kn' ? doc.titleKn : doc.titleEn}
                  </Link>
                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {doc.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {doc.size}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                  <a
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                    title={locale === 'kn' ? 'ದಾಖಲೆ ನೋಡಿ' : 'View Document'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={doc.pdfUrl}
                    download
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    {locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್' : 'Download'}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
              <FileX className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-slate-800 font-bold text-base">
                {locale === 'kn'
                  ? 'ಯಾವುದೇ ಸಂಲಿಪೀಕರಣ ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ'
                  : 'No liquidation records found'}
              </h3>
              <p className="text-slate-500 text-xs max-w-md mx-auto">
                {locale === 'kn'
                  ? `"${searchQuery}" ಗೆ ಯಾವುದೇ ದಾಖಲೆಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.`
                  : `No matching records were found for "${searchQuery}". Try searching with different keywords.`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Master Dashboard Tables */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight uppercase">
            {locale === 'kn'
              ? 'KSSFCL ರಾಜ್ಯಾದ್ಯಂತ ಸಹಕಾರಿ ಮಾಸ್ಟರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'
              : 'KSSFCL STATE-WIDE COOPERATIVE MASTER DASHBOARD'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {locale === 'kn' ? 'ಸೆಪ್ಟೆಂಬರ್ 2026 ಕ್ಕೆ ನವೀಕರಿಸಲಾದ ಸ್ಥಿತಿ' : 'Updated Status as of September 2026'}
          </p>
        </div>

        {/* Division Summary Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="bg-slate-900 text-white px-6 py-4">
            <h3 className="text-lg font-bold">
              {locale === 'kn'
                ? '೧. ಸಂಲಿಪೀಕರಣ ಸ್ಥಿತಿ (ಎಲ್ಲಾ ವಿಭಾಗಗಳು)'
                : '1. Liquidation Status (All Divisions)'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="py-3 px-4 text-left">{locale === 'kn' ? 'ವಿಭಾಗ' : 'Division'}</th>
                  <th className="py-3 px-4">{locale === 'kn' ? 'ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲ' : 'Not Working'}</th>
                  <th className="py-3 px-4">{locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಬಾಕಿ' : 'Liquidation Pending'}</th>
                  <th className="py-3 px-4">{locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಆದೇಶ' : 'Liquidation Order'}</th>
                  <th className="py-3 px-4">{locale === 'kn' ? 'ಮುಚ್ಚಲಾಗಿದೆ' : 'Closed (Cancelled)'}</th>
                  <th className="py-3 px-4 bg-amber-400 text-slate-950 font-bold">
                    {locale === 'kn' ? 'ಒಟ್ಟು' : 'Total'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                {DIVISION_TOTALS.map((item) => (
                  <tr key={item.nameEn} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-left font-semibold text-slate-900">
                      {locale === 'kn' ? item.nameKn : item.nameEn}
                    </td>
                    <td className="py-3.5 px-4">{item.notWorking}</td>
                    <td className="py-3.5 px-4">{item.liqPending}</td>
                    <td className="py-3.5 px-4">{item.liqOrder}</td>
                    <td className="py-3.5 px-4">{item.closed}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 bg-amber-50">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-900 text-white font-bold text-base">
                  <td className="py-4 px-4 text-left">
                    {locale === 'kn' ? 'ರಾಜ್ಯ ಒಟ್ಟು ಮೊತ್ತ' : 'STATE GRAND TOTAL'}
                  </td>
                  <td className="py-4 px-4">{stateTotals.notWorking}</td>
                  <td className="py-4 px-4">{stateTotals.liqPending}</td>
                  <td className="py-4 px-4">{stateTotals.liqOrder}</td>
                  <td className="py-4 px-4">{stateTotals.closed}</td>
                  <td className="py-4 px-4 text-amber-400">{stateTotals.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Detailed District Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap justify-between items-center gap-2">
            <h3 className="text-lg font-bold">
              {locale === 'kn'
                ? '೨. ವಿಭಾಗವಾರು ಜಿಲ್ಲಾ ವಿವರಗಳು'
                : '2. Division-wise District Breakdowns'}
            </h3>
            <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
              {locale === 'kn' ? 'ನವೀಕರಿಸಿದ ದಿನಾಂಕ: ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೬' : 'Data Captured: Sep 2026'}
            </span>
          </div>
          <div className="divide-y divide-slate-200">
            <DistrictTable
              titleEn="BELAGAVI DIVISION"
              titleKn="ಬೆಳಗಾವಿ ವಿಭಾಗ"
              data={BELAGAVI_DISTRICTS}
              locale={locale}
            />
            <DistrictTable
              titleEn="BENGALURU DIVISION"
              titleKn="ಬೆಂಗಳೂರು ವಿಭಾಗ"
              data={BENGALURU_DISTRICTS}
              locale={locale}
            />
            <DistrictTable
              titleEn="MYSURU DIVISION"
              titleKn="ಮೈಸೂರು ವಿಭಾಗ"
              data={MYSURU_DISTRICTS}
              locale={locale}
            />
            <DistrictTable
              titleEn="KALABURAGI DIVISION"
              titleKn="ಕಲಬುರಗಿ ವಿಭಾಗ"
              data={KALABURAGI_DISTRICTS}
              locale={locale}
            />
          </div>
        </div>
      </section>

      {/* Regulatory Intervention Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">
              {locale === 'kn' ? 'ನಿಯಂತ್ರಕ ಹಸ್ತಕ್ಷೇಪ' : 'Regulatory Intervention'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {locale === 'kn'
                ? 'ಸದಸ್ಯ ಸಹಕಾರಿಯು ಗ್ರಾಹಕರ ನಿರೀಕ್ಷೆಗಳನ್ನು ಪೂರೈಸಲು ವಿಫಲವಾದಾಗ ಅಥವಾ ಅದರ ನೋಂದಾಯಿತ ಉಪನಿಯಮಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿದಾಗ, ಸದಸ್ಯರು ಮತ್ತು ಸಾಲಗಾರರ ಹಿತಾಸಕ್ತಿಗಳನ್ನು ರಕ್ಷಿಸಲು ಅಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯು ಸಂಲಿಪೀಕರಣ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.'
                : 'When a member cooperative fails to meet customer expectations or violates its registered Bylaws, the Apex Body initiates the liquidation process to protect the interests of members and creditors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <ShieldAlert className="w-10 h-10 text-red-600" />
              <h3 className="font-bold text-lg text-slate-900">
                {locale === 'kn' ? '೧. ಮುಕ್ತಾಯಗೊಳಿಸುವಿಕೆಯ ಆದೇಶ' : '1. Order of Winding Up'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಲೆಕ್ಕಪರಿಶೋಧನೆ ವರದಿಗಳು ಅಥವಾ ಸೌಹಾರ್ದ ಕಾಯ್ದೆಯ ನಿರಂತರ ಉಲ್ಲಂಘನೆಗಳ ಆಧಾರದ ಮೇಲೆ ರಿಜಿಸ್ಟ್ರಾರ್ ಅಥವಾ ಅಪೆಕ್ಸ್ ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ಆದೇಶದೊಂದಿಗೆ ಪ್ರಕ್ರಿಯೆಯು ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.'
                  : 'The process begins with an official order from the Registrar or Apex Body based on audit reports or persistent violations of the Souharda Act.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Gavel className="w-10 h-10 text-blue-600" />
              <h3 className="font-bold text-lg text-slate-900">
                {locale === 'kn' ? '೨. ಆಸ್ತಿ ನಗದೀಕರಣ' : '2. Asset Realization'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಪಡುವಣಾಧಿಕಾರಿಯು ಎಲ್ಲಾ ಆಸ್ತಿಗಳು, ದಾಖಲೆಗಳು ಮತ್ತು ಸ್ವತ್ತುಗಳ ಉಸ್ತುವಾರಿ ವಹಿಸಿಕೊಳ್ಳುತ್ತಾರೆ. ಇವುಗಳನ್ನು ವೃತ್ತಿಪರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ಮಾರಾಟ ಮಾಡಲಾಗುತ್ತದೆ.'
                  : 'The Liquidator takes charge of all properties, records, and assets. These are professionally valued and sold to generate settlement funds.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <CheckSquare className="w-10 h-10 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">
                {locale === 'kn' ? '೩. ಆದ್ಯತೆಯ ಪಾವತಿ ಸತ್ಯಾಪನೆ' : '3. Priority Settlement'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಕಾನೂನು ಆದ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ ಬಾಕಿಗಳನ್ನು ಇತ್ಯರ್ಥಪಡಿಸಲಾಗುತ್ತದೆ: ಸಂಲಿಪೀಕರಣ ವೆಚ್ಚಗಳು, ನೌಕರರ ವೇತನ, ಭದ್ರತೆಯುಳ್ಳ ಸಾಲಗಾರರು ಮತ್ತು ಠೇವಣಿದಾರರು.'
                  : 'Dues are settled based on legal priority: starting with liquidation costs, followed by employee wages, secured creditors, and finally, depositors.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-200">
              {locale === 'kn' ? 'ಪಾವತಿಗಳ ಆದ್ಯತಾ ಶ್ರೇಣಿ' : 'Priority of Payments'}
            </h3>
            <ul className="divide-y divide-slate-100 text-sm">
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">
                  {locale === 'kn' ? 'ಸಂಲಿಪೀಕರಣ ಪ್ರಕ್ರಿಯೆಯ ವೆಚ್ಚ' : 'Cost of Liquidation Process'}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                  {locale === 'kn' ? 'ಆದ್ಯತೆ ೧' : 'Priority 1'}
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">
                  {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಬಾಕಿಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ತೆರಿಗೆಗಳು' : 'Statutory Dues & Government Taxes'}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                  {locale === 'kn' ? 'ಆದ್ಯತೆ ೨' : 'Priority 2'}
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">
                  {locale === 'kn' ? 'ಉದ್ಯೋಗಿಗಳ ವೇತನ ಮತ್ತು ಸೌಲಭ್ಯಗಳು' : 'Employee Wages and Benefits'}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  {locale === 'kn' ? 'ಆದ್ಯತೆ ೩' : 'Priority 3'}
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">
                  {locale === 'kn' ? 'ಠೇವಣಿದಾರರು ಮತ್ತು ಸದಸ್ಯರು' : 'Depositors and Members'}
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  {locale === 'kn' ? 'ಆದ್ಯತೆ ೪' : 'Priority 4'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}