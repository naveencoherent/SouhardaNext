'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Download, 
  ExternalLink, 
  FileX, 
  Calendar, 
  FileText, 
  ShieldAlert, 
  Gavel, 
  CheckSquare 
} from 'lucide-react';

// --- Types & Interfaces ---

interface LiquidationDocument {
  id: string;
  refNo: string;
  title: string;
  date: string;
  category: string;
  pdfUrl: string;
  size: string;
}

interface DistrictData {
  name: string;
  notWorking: number;
  liqPending: number;
  liqOrder: number;
  closed: number;
  total: number;
}

interface DivisionData {
  name: string;
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
    title: 'Order of Winding Up & Appointment of Liquidator for Defunct Cooperatives',
    date: '20-May-2024',
    category: 'Winding Up',
    pdfUrl: '/documents/liquidation/winding-up-order-2024.pdf',
    size: '1.4 MB',
  },
  {
    id: '2',
    refNo: 'KSSFCL/LIQ/2024-25/02',
    title: 'Public Notice: Claims Submission Guidelines for Depositors and Creditors',
    date: '10-Apr-2024',
    category: 'Public Notice',
    pdfUrl: '/documents/liquidation/claims-guidelines-2024.pdf',
    size: '920 KB',
  },
  {
    id: '3',
    refNo: 'KSSFCL/LIQ/2023-24/15',
    title: 'Statewide Master Dashboard & Division-wise Status of Liquidated Cooperatives',
    date: '15-Jan-2024',
    category: 'Status Report',
    pdfUrl: '/documents/liquidation/statewide-status-report.pdf',
    size: '2.8 MB',
  },
];

// --- Division & District Datasets ---

const BELAGAVI_DISTRICTS: DistrictData[] = [
  { name: 'BELAGAVI', notWorking: 100, liqPending: 124, liqOrder: 71, closed: 24, total: 319 },
  { name: 'VIJAYAPURA', notWorking: 92, liqPending: 37, liqOrder: 50, closed: 5, total: 184 },
  { name: 'BAGALKOT', notWorking: 35, liqPending: 15, liqOrder: 22, closed: 5, total: 77 },
  { name: 'DHARWAD', notWorking: 19, liqPending: 14, liqOrder: 15, closed: 6, total: 54 },
  { name: 'HAVERI', notWorking: 16, liqPending: 1, liqOrder: 12, closed: 1, total: 30 },
  { name: 'GADAG', notWorking: 10, liqPending: 1, liqOrder: 5, closed: 6, total: 22 },
  { name: 'UTTARA KANNADA', notWorking: 19, liqPending: 0, liqOrder: 19, closed: 3, total: 41 },
];

const BENGALURU_DISTRICTS: DistrictData[] = [
  { name: 'BENGALURU URBAN', notWorking: 95, liqPending: 89, liqOrder: 17, closed: 5, total: 206 },
  { name: 'BENGALURU RURAL', notWorking: 5, liqPending: 0, liqOrder: 3, closed: 3, total: 11 },
  { name: 'RAMANAGARA', notWorking: 3, liqPending: 11, liqOrder: 0, closed: 0, total: 14 },
  { name: 'CHIKKABALLAPURA', notWorking: 9, liqPending: 10, liqOrder: 0, closed: 0, total: 19 },
  { name: 'KOLAR', notWorking: 7, liqPending: 3, liqOrder: 8, closed: 0, total: 18 },
  { name: 'TUMAKURU', notWorking: 25, liqPending: 22, liqOrder: 23, closed: 12, total: 82 },
  { name: 'SHIVAMOGGA', notWorking: 14, liqPending: 18, liqOrder: 6, closed: 0, total: 38 },
  { name: 'CHITRADURGA', notWorking: 13, liqPending: 14, liqOrder: 26, closed: 0, total: 53 },
  { name: 'DAVANAGERE', notWorking: 14, liqPending: 2, liqOrder: 9, closed: 0, total: 25 },
];

const MYSURU_DISTRICTS: DistrictData[] = [
  { name: 'MYSURU', notWorking: 6, liqPending: 4, liqOrder: 7, closed: 5, total: 22 },
  { name: 'MANDYA', notWorking: 2, liqPending: 1, liqOrder: 1, closed: 0, total: 4 },
  { name: 'HASSAN', notWorking: 8, liqPending: 0, liqOrder: 7, closed: 3, total: 18 },
  { name: 'CHAMARAJANAGARA', notWorking: 1, liqPending: 0, liqOrder: 2, closed: 0, total: 3 },
  { name: 'SOUTH CANARA (D.K)', notWorking: 0, liqPending: 1, liqOrder: 4, closed: 2, total: 7 },
  { name: 'KODAGU', notWorking: 1, liqPending: 0, liqOrder: 0, closed: 0, total: 1 },
  { name: 'CHIKMAGALUR', notWorking: 4, liqPending: 0, liqOrder: 5, closed: 3, total: 12 },
  { name: 'UDUPI', notWorking: 0, liqPending: 0, liqOrder: 3, closed: 4, total: 7 },
];

const KALABURAGI_DISTRICTS: DistrictData[] = [
  { name: 'KALABURAGI', notWorking: 43, liqPending: 12, liqOrder: 51, closed: 1, total: 107 },
  { name: 'BIDAR', notWorking: 28, liqPending: 2, liqOrder: 35, closed: 14, total: 79 },
  { name: 'YADAGIRI', notWorking: 20, liqPending: 4, liqOrder: 5, closed: 0, total: 29 },
  { name: 'BALLARI', notWorking: 9, liqPending: 3, liqOrder: 7, closed: 2, total: 21 },
  { name: 'VIJAYANAGARA', notWorking: 25, liqPending: 0, liqOrder: 9, closed: 33, total: 67 },
  { name: 'RAICHUR', notWorking: 28, liqPending: 0, liqOrder: 32, closed: 5, total: 65 },
  { name: 'KOPPAL', notWorking: 29, liqPending: 8, liqOrder: 29, closed: 3, total: 69 },
];

const calculateDivisionTotal = (name: string, districts: DistrictData[]): DivisionData => {
  return districts.reduce(
    (acc, cur) => ({
      ...acc,
      notWorking: acc.notWorking + cur.notWorking,
      liqPending: acc.liqPending + cur.liqPending,
      liqOrder: acc.liqOrder + cur.liqOrder,
      closed: acc.closed + cur.closed,
      total: acc.total + cur.total,
    }),
    { name, notWorking: 0, liqPending: 0, liqOrder: 0, closed: 0, total: 0 }
  );
};

const DIVISION_TOTALS: DivisionData[] = [
  calculateDivisionTotal('Belagavi Division', BELAGAVI_DISTRICTS),
  calculateDivisionTotal('Bengaluru Division', BENGALURU_DISTRICTS),
  calculateDivisionTotal('Mysuru Division', MYSURU_DISTRICTS),
  calculateDivisionTotal('Kalaburagi Division', KALABURAGI_DISTRICTS),
];

// --- Helper Component: District Table ---

function DistrictTable({ title, data }: { title: string; data: DistrictData[] }) {
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
        ✦ {title} ✦
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase">
              <th className="py-2.5 px-3">SL.</th>
              <th className="py-2.5 px-3 text-left">District</th>
              <th className="py-2.5 px-3">Not Working</th>
              <th className="py-2.5 px-3">Liq. Pending</th>
              <th className="py-2.5 px-3">Liq. Order</th>
              <th className="py-2.5 px-3">Closed</th>
              <th className="py-2.5 px-3 bg-amber-50 text-slate-900 font-bold">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {data.map((row, index) => (
              <tr key={row.name} className="hover:bg-slate-50 transition-colors">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3 text-left font-bold text-slate-900">{row.name}</td>
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
              <td colSpan={2} className="py-2.5 px-3 text-left">DIVISION TOTAL</td>
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

// --- Main Page Component (Default Export) ---

export default function LiquidationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasBannerError, setHasBannerError] = useState(false);

  const filteredDocuments = LIQUIDATION_DATA.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.refNo.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
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
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Banner Header */}
      <header className="relative bg-slate-900 text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
        {!hasBannerError ? (
          <Image
            src="/images/homebanner/SahakaraSaptama20241.jpg"
            alt="Liquidation Process & Status Background"
            fill
            priority
            loading="eager"
            onError={() => setHasBannerError(true)}
            className="object-cover opacity-20 filter blur-xs"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 opacity-90" />
        )}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold tracking-widest px-3 py-1 rounded-full uppercase">
            Compliance &amp; Dissolution
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Liquidation Process &amp; Status
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Access winding-up orders, asset realization notices, and statutory compliance status under the Karnataka Souharda Sahakari Act, 1997.
          </p>
        </div>
      </header>

      {/* 2. Documents Search & Download Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Official Liquidation Orders &amp; Documents</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search liquidation orders, ref number, or categories..."
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
                      {doc.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Ref: {doc.refNo}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                    {doc.title}
                  </h3>
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
                    title="View Document"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={doc.pdfUrl}
                    download
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
              <FileX className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-slate-800 font-bold text-base">No liquidation records found</h3>
              <p className="text-slate-500 text-xs max-w-md mx-auto">
                No matching records were found for "{searchQuery}". Try searching with different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Master Dashboard Tables */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
            KSSFCL STATE-WIDE COOPERATIVE MASTER DASHBOARD
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Updated Status as of April 30, 2026
          </p>
        </div>

        {/* Division Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="bg-slate-900 text-white px-6 py-4">
            <h3 className="text-lg font-bold">1. Liquidation Status (All Divisions)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="py-3 px-4 text-left">Division</th>
                  <th className="py-3 px-4">Not Working</th>
                  <th className="py-3 px-4">Liquidation Pending</th>
                  <th className="py-3 px-4">Liquidation Order</th>
                  <th className="py-3 px-4">Closed (Cancelled)</th>
                  <th className="py-3 px-4 bg-amber-400 text-slate-950 font-bold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                {DIVISION_TOTALS.map((item) => (
                  <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-left font-semibold text-slate-900">{item.name}</td>
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
                  <td className="py-4 px-4 text-left">STATE GRAND TOTAL</td>
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
            <h3 className="text-lg font-bold">2. Division-wise District Breakdowns</h3>
            <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
              Data Captured: 30-Apr-26
            </span>
          </div>
          <div className="divide-y divide-slate-200">
            <DistrictTable title="BELAGAVI DIVISION" data={BELAGAVI_DISTRICTS} />
            <DistrictTable title="BENGALURU DIVISION" data={BENGALURU_DISTRICTS} />
            <DistrictTable title="MYSURU DIVISION" data={MYSURU_DISTRICTS} />
            <DistrictTable title="KALABURAGI DIVISION" data={KALABURAGI_DISTRICTS} />
          </div>
        </div>
      </section>

      {/* 4. Regulatory Intervention Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Regulatory Intervention</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When a member cooperative fails to meet customer expectations or violates its registered Bylaws, the Apex Body initiates the liquidation process to protect the interests of members and creditors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <ShieldAlert className="w-10 h-10 text-red-600" />
              <h3 className="font-bold text-lg text-slate-900">1. Order of Winding Up</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The process begins with an official order from the Registrar or Apex Body based on audit reports or persistent violations of the Souharda Act.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Gavel className="w-10 h-10 text-blue-600" />
              <h3 className="font-bold text-lg text-slate-900">2. Asset Realization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Liquidator takes charge of all properties, records, and assets. These are professionally valued and sold to generate settlement funds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <CheckSquare className="w-10 h-10 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">3. Priority Settlement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dues are settled based on legal priority: starting with liquidation costs, followed by employee wages, secured creditors, and finally, depositors.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-200">
              Priority of Payments
            </h3>
            <ul className="divide-y divide-slate-100 text-sm">
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Cost of Liquidation Process</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                  Priority 1
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Statutory Dues &amp; Government Taxes</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                  Priority 2
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Employee Wages and Benefits</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  Priority 3
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Depositors and Members</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  Priority 4
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}