import Link from 'next/link';
import RegulatoryHero from '@/components/common/RegulatoryHero';
import { FileText, Download, ShieldCheck } from 'lucide-react';

export default function StatutoryOrdersPage() {
  const orders = [
    {
      date: '01-Apr-2024',
      refNo: 'KSSFCL/ORD/2024/01',
      subject: 'Guidelines for Annual General Body Meetings',
      pdfUrl: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Shared Hero Component */}
      <RegulatoryHero 
        title="Statutory Orders"
        subtitle="Official Regulatory Directives & Compliance Notifications"
        tag="GOVERNANCE & COMPLIANCE"
      />

      {/* Main Content Section */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Latest Notifications (2026-27)
              </h2>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Reference No.</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4 text-center">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-600">
                        {order.date}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-semibold text-slate-900">
                        {order.refNo}
                      </td>
                      <td className="py-4 px-4 text-slate-700">
                        {order.subject}
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <Link
                          href={order.pdfUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-600 text-red-600 font-medium text-xs rounded-md hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF</span>
                          <Download className="w-3 h-3 ml-0.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}