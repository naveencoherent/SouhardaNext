'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ShieldCheck, Search, FileX } from 'lucide-react';

// --- Interface Definitions ---

export interface TenderItem {
  id: string;
  date: string;
  refNo: string;
  subject: string;
  closingDate: string;
  pdfUrl: string;
}

// Sample fallback tender data
const STATUTORY_TENDERS: TenderItem[] = [
  {
    id: '01.',
    date: '15-Mar-2026',
    refNo: 'KSSFCL/TND/2026/01',
    subject: 'Procurement of Enterprise Cloud Server Infrastructure & Maintenance Services',
    closingDate: '15-Apr-2026',
    pdfUrl: '/assets/docs/tenders/KSSFCL_TND_2026_01.pdf',
  },
  {
    id: '02.',
    date: '02-Feb-2026',
    refNo: 'KSSFCL/TND/2026/02',
    subject: 'Annual Maintenance Contract for Banking Software & Hardware Security',
    closingDate: '28-Feb-2026',
    pdfUrl: '/assets/docs/tenders/KSSFCL_TND_2026_02.pdf',
  },
];

// --- Sub-component for Individual Tender Card ---

function TenderCard({ item }: { item: TenderItem }) {
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
            {item.subject}
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs font-semibold text-slate-500">
            <span>Ref: {item.refNo}</span>
            <span>•</span>
            <span>Published: {item.date}</span>
            <span>•</span>
            <span className="text-amber-600 font-bold">Closing: {item.closingDate}</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 self-end sm:self-center flex items-center gap-2">
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label={`Download Tender Document: ${item.subject}`}
          className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-xs"
          title="Download Tender PDF"
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
  const [hasBannerError, setHasBannerError] = useState(false);

  // Safe search filtering
  const filteredTenders = STATUTORY_TENDERS.filter(
    (item) =>
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.refNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner Section */}
      <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
        {!hasBannerError && (
          <Image
            src="/souharda/AllAboutKSSFCL_Intro.webp"
            alt="KSSFCL Official Tenders Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
            onError={() => setHasBannerError(true)}
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
            Procurement &amp; Notifications
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Official Tenders &amp; EOI
          </h1>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />
      </header>

      {/* Description Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            KSSFCL Official: <span className="text-blue-600">Active Tenders</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Public procurement notices, expressions of interest (EOI), and official tender specifications issued by the Federal Cooperative.
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
            placeholder="Search tenders by subject or reference..."
            aria-label="Search tenders"
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-amber-400 py-3 px-6 text-center font-bold text-sm tracking-widest uppercase border-b border-slate-800 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>✦ LATEST TENDER NOTICES (2026-27) ✦</span>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredTenders.length > 0 ? (
              filteredTenders.map((item) => (
                <TenderCard key={item.refNo} item={item} />
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <FileX className="w-8 h-8 mx-auto text-slate-400" />
                <p className="text-sm font-medium">No tender notices matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}