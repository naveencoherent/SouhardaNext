'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ShieldCheck, Search, FileX } from 'lucide-react';

// --- Types & Data Definitions ---

interface CircularItem {
  id: string;
  title: string;
  ref: string;
  pdfUrl: string;
}

const CIRCULARS_2026: CircularItem[] = [
  {
    id: '01.',
    title: 'ಶಾಖಾ ಅನುಮತಿ ನೀಡುವಾಗ ಪರಿಗಣಿಸಬೇಕಾದ ಮಾನದಂಡಗಳು ಮತ್ತು ಸಲ್ಲಿಸಬೇಕಾದ ದಾಖಲೆಗಳ ಕುರಿತ ಸುತ್ತೋಲೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/1KSSFCL_2026_Branch.pdf',
  },
  {
    id: '02.',
    title: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳಲ್ಲಿ ಸಿಬ್ಬಂದಿ ನೇಮಕಾತಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾರ್ಗದರ್ಶಿಗಳು ಪ್ರಸ್ತಾವನೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/2Employee_Recruitment.pdf',
  },
  {
    id: '03.',
    title: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ನಿರ್ದೇಶಕರ ಅನರ್ಹತೆ ಮತ್ತು /ಅಥವಾ ಸಹ ಆಯ್ಕೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾರ್ಗದರ್ಶಿಗಳು.',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/3KSSFCL_Director_Disable.pdf',
  },
  {
    id: '04.',
    title: 'ಆರ್ಥಿಕ ಸಬಲತೆಯ ಮಾನದಂಡಗಳ ಸುತ್ತೋಲೆ',
    ref: 'Ref: KSSF/CIR/2026/88 | Date: 24-Mar-2026',
    pdfUrl: '/Assets/docs/Circulars/4FKSSFCL_Financial_mease.pdf',
  },
];

// --- Sub-component for Circular List Item ---

function CircularCard({ item }: { item: CircularItem }) {
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
            {item.title}
          </Link>
          <p className="text-xs font-semibold text-slate-500">{item.ref}</p>
        </div>
      </div>

      {/* Download Action Button */}
      <div className="shrink-0 self-end sm:self-center flex items-center gap-2">
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label={`Download PDF: ${item.title}`}
          className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-xs"
          title="Download PDF Circular"
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
  const [hasBannerError, setHasBannerError] = useState(false);

  // Filter circulars based on title or reference query
  const filteredCirculars = CIRCULARS_2026.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ref.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Standardized Hero Banner Section */}
      <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
        {/* Background Banner Image */}
        {!hasBannerError ? (
          <Image
            src="/images/souharda/AllAboutKSSFCL.webp"
            alt="KSSFCL Official Circulars Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
            onError={() => setHasBannerError(true)}
          />
        ) : null}

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
            KSSFCL Regulatory Portal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Official Circulars &amp; Directives
          </h1>
        </div>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />
      </header>

      {/* Description Section */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            KSSFCL Official: <span className="text-blue-600">Circular Archive</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to the official regulatory archive. This portal provides member societies 
            with immediate access to administrative mandates and operational guidelines 
            issued by the Federal Body.
          </p>
        </div>
      </section>

      {/* Circulars Portal & Search Section */}
      <section className="py-10 max-w-5xl mx-auto px-4 space-y-6">
        {/* Interactive Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search circulars by title or reference..."
            aria-label="Search circulars"
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Circular List Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Section Header Label */}
          <div className="bg-slate-900 text-amber-400 py-3 px-6 text-center font-bold text-sm tracking-widest uppercase border-b border-slate-800 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>✦ 2026 SERIES CIRCULARS ✦</span>
          </div>

          {/* List of Circular Entries */}
          <div className="divide-y divide-slate-100">
            {filteredCirculars.length > 0 ? (
              filteredCirculars.map((item) => (
                <CircularCard key={item.id} item={item} />
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <FileX className="w-8 h-8 mx-auto text-slate-400" />
                <p className="text-sm font-medium">No circulars matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}