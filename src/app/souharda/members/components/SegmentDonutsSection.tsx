'use client';

import React, { useState } from 'react';

// Segment summary data based on Membership Matrix grand totals
const SEGMENT_DATA = [
  { name: 'Credit', total: 3959, color: '#3b82f6', description: 'Cooperative Credit Societies' },
  { name: 'Multipurpose', total: 1618, color: '#10b981', description: 'Multipurpose Societies' },
  { name: 'Thrift', total: 56, color: '#f59e0b', description: 'Thrift & Savings Cooperatives' },
  { name: 'Employees', total: 27, color: '#8b5cf6', description: 'Employee Welfare Cooperatives' },
  { name: 'Agriculture', total: 34, color: '#84cc16', description: 'Agricultural & Allied' },
  { name: 'Okkuta / Federal', total: 12, color: '#ec4899', description: 'Apex & District Unions' },
  { name: 'Bank', total: 10, color: '#06b6d4', description: 'Cooperative Banks' },
  { name: 'Labour', total: 1, color: '#ef4444', description: 'Labour Cooperatives' },
  { name: 'Consumer', total: 5, color: '#14b8a6', description: 'Consumer Stores' },
  { name: 'Others', total: 10, color: '#64748b', description: 'Other Categories' },
];

const GRAND_TOTAL = 5880;

export default function SegmentDonutsSection() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  return (
    <section className="w-full bg-white rounded-xl shadow-md border border-slate-200 p-6 font-sans my-8">
      {/* SECTION HEADER */}
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="text-xl md:text-2xl font-black uppercase text-slate-900 tracking-wide">
          Segment-Wise Category Distribution
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Visual breakdown of Souharda Cooperatives across major functional categories (As on 31.03.2023)
        </p>
      </div>

      {/* GRID OF SEGMENT CARDS WITH MINI DONUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {SEGMENT_DATA.map((item) => {
          const percentage = ((item.total / GRAND_TOTAL) * 100).toFixed(1);
          const isSelected = activeSegment === item.name;

          return (
            <div
              key={item.name}
              onClick={() => setActiveSegment(isSelected ? null : item.name)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center ${
                isSelected
                  ? 'border-amber-500 bg-amber-50/50 shadow-md scale-105'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-white hover:shadow'
              }`}
            >
              {/* SVG DONUT CHART */}
              <div className="relative w-24 h-24 my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <path
                    className="text-slate-200"
                    strokeWidth="3.8"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segment Donut Fill */}
                  <path
                    strokeWidth="3.8"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                    stroke={item.color}
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Center Label inside Donut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs font-black text-slate-800">{percentage}%</span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <h3 className="font-bold text-slate-900 text-sm mt-1">{item.name}</h3>
              <p className="text-[11px] font-medium text-slate-500 line-clamp-1">{item.description}</p>
              
              <div className="mt-3 pt-2 border-t border-slate-200/80 w-full flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Count:</span>
                <span className="font-black text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {item.total.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}