'use client';

import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { complianceData } from '@/config/compliance';

export default function ComplianceSection() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Statutory & Regulatory Compliance
              </h2>
              <p className="text-xs text-slate-500">
                Key compliance guidelines under the Karnataka Souharda Sahakari Act, 1997
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(complianceData) && complianceData.length > 0 ? (
            complianceData.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                      <FileText className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {item.frequency || 'Annual'}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {item.title || item.name || `Compliance Guideline #${index + 1}`}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.description || item.details || 'Adherence to Souharda statutory requirements and timely filings.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
                  <span className="inline-flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mandatory
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      className="hover:underline font-bold text-slate-900"
                    >
                      View Details &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 text-center text-xs text-slate-500 bg-white rounded-2xl border border-slate-200 flex flex-col items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-500" />
              <span>Compliance regulations dataset available in administration handbook.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}