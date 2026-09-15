'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, FileText, Download, AlertCircle } from 'lucide-react';

// Guarantees static HTML export compatibility
export const dynamic = 'force-static';

interface Tender {
  id: string;
  description: string;
  lastDate: string;
  status: 'Active' | 'Closed' | 'Under Review';
  documentUrl: string;
}

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasBannerError, setHasBannerError] = useState(false);

  const tenders: Tender[] = [
    {
      id: '1',
      description: 'Implementation of Integrated Co-operative ERP Software System',
      lastDate: '15-Apr-2026',
      status: 'Active',
      // Note: Use lowercase '/assets/...' to avoid case-sensitivity issues on Linux servers
      documentUrl: '/assets/docs/Tender_ERP_System_2026.pdf',
    },
    {
      id: '2',
      description: 'Empanelment of Financial Auditors & Tax Consultants for 2026-27',
      lastDate: '05-Apr-2026',
      status: 'Under Review',
      documentUrl: '/assets/docs/RFP_Financial_Auditors_2026.pdf',
    },
    {
      id: '3',
      description: 'Supply and Installation of IT Infrastructure Across Regional Offices',
      lastDate: '10-Jan-2026',
      status: 'Closed',
      documentUrl: '/assets/docs/Tender_Hardware_2025.pdf',
    },
  ];

  const filteredTenders = tenders.filter(
    (tender) =>
      tender.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.lastDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Banner Section */}
      <header className="w-full relative h-[240px] sm:h-[300px] md:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
        {!hasBannerError ? (
          <Image
            src="/images/souharda/AllAboutKSSFCL.webp"
            alt="KSSFCL Tenders Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
            onError={() => setHasBannerError(true)}
          />
        ) : null}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
            Procurement &amp; Contracts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Tenders &amp; Notifications
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            Procurement opportunities for Souharda Cooperatives
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/80 pointer-events-none" />
      </header>

      {/* Main Content Section */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Live Search */}
          <div className="p-4 sm:p-6 bg-white border-b border-slate-100">
            <div className="relative max-w-md">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="tenderSearch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tenders by description or status..."
                aria-label="Search tenders"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-6">Description</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">Last Date</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">Status</th>
                  <th className="py-3.5 px-6 text-center whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((tender) => (
                    <tr key={tender.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-medium text-slate-900 leading-snug">
                        {tender.description}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap text-slate-600 font-medium">
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
                          aria-label={`Download PDF: ${tender.description}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white rounded-lg text-xs font-semibold transition-all"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF</span>
                          <Download className="w-3 h-3 ml-0.5" />
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-slate-400" />
                        <p className="text-sm font-medium">No tenders found matching your search.</p>
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