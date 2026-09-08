'use client';

import React, { useState, useMemo } from 'react';
import { Search, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import EducationHero from '@/components/common/EducationHero';

// 1. Dataset
const magazineData = {
  "issues": [
    { "year": "2026", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2026", "displayName": "August 2026" },
    { "year": "2026", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2026", "displayName": "July 2026" },
    { "year": "2026", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2026", "displayName": "April 2026" },
    { "year": "2026", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2026", "displayName": "March 2026" },
    { "year": "2026", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2026", "displayName": "February 2026" },
    { "year": "2026", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2026", "displayName": "January 2026" },
    { "year": "2025", "month": "Dec", "baseName": "Swabhimani_Sahakari_Dec_2025", "displayName": "Dec 2025" },
    { "year": "2025", "month": "Nov", "baseName": "Swabhimani_Sahakari_Nov_2025", "displayName": "Nov 2025" },
    { "year": "2025", "month": "Oct", "baseName": "Swabhimani_Sahakari_Oct_2025", "displayName": "Oct 2025" },
    { "year": "2025", "month": "Sep", "baseName": "Swabhimani_Sahakari_Sep_2025", "displayName": "Sep 2025" },
    { "year": "2025", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2025", "displayName": "Aug 2025" },
    { "year": "2025", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2025", "displayName": "Jul 2025" },
    { "year": "2025", "month": "Jun", "baseName": "Swabhimani_Sahakari_Jun_2025", "displayName": "Jun 2025" },
    { "year": "2025", "month": "May", "baseName": "Swabhimani_Sahakari_May_2025", "displayName": "May 2025" },
    { "year": "2025", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2025", "displayName": "Apr 2025" },
    { "year": "2025", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2025", "displayName": "Mar 2025" },
    { "year": "2025", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2025", "displayName": "Feb 2025" },
    { "year": "2025", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2025", "displayName": "Jan 2025" },
    { "year": "2024", "month": "Dec", "baseName": "Swabhimani_Sahakari_Dec_2024", "displayName": "Dec 2024" },
    { "year": "2024", "month": "Nov", "baseName": "Swabhimani_Sahakari_Nov_2024", "displayName": "Nov 2024" },
    { "year": "2024", "month": "Oct", "baseName": "Swabhimani_Sahakari_Oct_2024", "displayName": "Oct 2024" },
    { "year": "2024", "month": "Sep", "baseName": "Swabhimani_Sahakari_Sep_2024", "displayName": "Sep 2024" },
    { "year": "2024", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2024", "displayName": "Aug 2024" },
    { "year": "2024", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2024", "displayName": "Jul 2024" },
    { "year": "2024", "month": "Jun", "baseName": "Swabhimani_Sahakari_Jun_2024", "displayName": "Jun 2024" },
    { "year": "2024", "month": "May", "baseName": "Swabhimani_Sahakari_May_2024", "displayName": "May 2024" },
    { "year": "2024", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2024", "displayName": "Apr 2024" },
    { "year": "2024", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2024", "displayName": "Mar 2024" },
    { "year": "2024", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2024", "displayName": "Feb 2024" },
    { "year": "2024", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2024", "displayName": "Jan 2024" }
  ]
};

// 2. Asset Path Constructor
const getAssetPath = (year: string, month: string, baseName: string) => {
  if (parseInt(year) >= 2026) {
    return `/images/Swabhimani_Sahakari/2026_30/2026/${month}/${baseName}`;
  }
  return `/images/Swabhimani_Sahakari/2021_25/${year}/${month}/${baseName}`;
};

// 3. Fallback Image Loader
const AdaptiveImage = ({ basePath, alt, className }: { basePath: string; alt: string; className?: string }) => {
  const extensions = ['.webp', '.jpg', '.JPG', '.png'];

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    const target = e.currentTarget;
    if (index + 1 < extensions.length) {
      target.src = `${basePath}${extensions[index + 1]}`;
      target.onerror = (newEvt) => handleError(newEvt as any, index + 1);
    }
  };

  return (
    <img
      src={`${basePath}${extensions[0]}`}
      alt={alt}
      className={className}
      onError={(e) => handleError(e, 0)}
    />
  );
};

const ITEMS_PER_PAGE = 20;

export default function SwabhimaniSahakariPage() {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const processedIssues = useMemo(() => {
    return magazineData.issues.map((issue) => {
      const basePath = getAssetPath(issue.year, issue.month, issue.baseName);
      return {
        ...issue,
        basePath,
        pdf: `${basePath}.pdf`
      };
    });
  }, []);

  const latestIssue = processedIssues[0];

  const filteredIssues = useMemo(() => {
    return processedIssues.filter((item) => {
      const matchesYear = selectedYear === 'All' || item.year === selectedYear;
      const matchesSearch = item.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.year.includes(searchQuery);
      return matchesYear && matchesSearch;
    });
  }, [processedIssues, selectedYear, searchQuery]);

  const totalPages = Math.ceil(filteredIssues.length / ITEMS_PER_PAGE);
  const paginatedIssues = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredIssues.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredIssues, currentPage]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Standard Banner Component */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="Swabhimani Sahakari"
        subtitle="Official Monthly Journal of Karnataka State Souharda Federal Co-operative Ltd."
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* FULL-BLEED FEATURED BANNER SECTION */}
      <section className="relative w-full overflow-hidden bg-emerald-950 flex items-center justify-center py-12 sm:py-16">
        {/* Full-bleed Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('/images/Swabhimani_Sahakari/sahakari.jpg')` }}
        />

        {/* Gradient Overlay Matching EducationHero Aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/50 to-emerald-950/80 pointer-events-none" />

        {/* Centered Content Wrapper with Tight Internal Spacing */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            
            {/* Left Column (Left-Aligned Text Content) */}
            <div className="flex-1 space-y-4 text-left">
              <div>
                <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm">
                  LATEST EDITION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                ಸ್ವಾಭಿಮಾನಿ <span className="text-amber-400">ಸಹಕಾರಿ</span>
              </h2>

              <div className="space-y-1">
                <p className="text-base sm:text-lg text-emerald-100 font-medium leading-snug drop-shadow-sm">
                  ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಚಳುವಳಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಮೀಸಲಾಗಿರುವ ಏಕೈಕ ಮಾಸಪತ್ರಿಕೆ.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Loading the latest cooperative insights...
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={latestIssue?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs rounded-full shadow-lg transition-transform active:scale-95"
                >
                  Read Online
                </a>
              </div>
            </div>

            {/* Right Column (Magazine Preview Card) */}
            <div className="shrink-0 flex justify-center">
              <div className="w-48 h-64 sm:w-52 sm:h-72 bg-slate-200 rounded-lg shadow-2xl overflow-hidden border-2 border-white/20 relative transform hover:scale-105 transition-transform duration-300">
                {latestIssue ? (
                  <AdaptiveImage
                    basePath={latestIssue.basePath}
                    alt={`Swabhimani Sahakari ${latestIssue.displayName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-sm">
                    Latest Issue
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ARCHIVE NAVIGATION BAR */}
      <nav className="sticky top-0 z-20 bg-white border-y border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900 shrink-0">Archives</h3>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Year Controls */}
            <div className="flex items-center gap-1.5">
              {['All', '2026', '2025', '2024'].map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                    selectedYear === year
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md text-xs font-semibold">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="p-1 rounded hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 text-slate-600">
                  {currentPage} / {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="p-1 rounded hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>
      </nav>

      {/* ARCHIVE GRID SECTION (UNTOUCHED) */}
      <section className="bg-grid-pattern border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedIssues.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {paginatedIssues.map((issue) => (
                <div
                  key={issue.baseName}
                  className="bg-white rounded-lg border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden text-center group"
                >
                  <a
                    href={issue.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-3/4 bg-slate-100 relative overflow-hidden block"
                  >
                    <AdaptiveImage
                      basePath={issue.basePath}
                      alt={`Swabhimani Sahakari ${issue.displayName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  <div className="p-3 space-y-2 border-t border-slate-100 bg-white">
                    <h4 className="text-xs font-bold text-slate-800">{issue.displayName}</h4>
                    <div className="flex items-center justify-center gap-4 pt-1 border-t border-slate-100 text-slate-500">
                      <a
                        href={issue.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read PDF"
                        className="hover:text-emerald-600 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={issue.pdf}
                        download
                        title="Download PDF"
                        className="hover:text-emerald-600 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-500 text-sm">
              No publication issues found matching your query.
            </div>
          )}
        </div>
      </section>

      {/* Grid Pattern Styling */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-color: #f8fafc;
          background-image: 
            linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </main>
  );
}