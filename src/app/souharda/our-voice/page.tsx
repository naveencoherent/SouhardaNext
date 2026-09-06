'use client';

import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { 
  Newspaper, 
  BookOpen, 
  Download, 
  Megaphone, 
  Calendar, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function OurVoicePage() {
  const publications = [
    {
      title: 'Souharda Sahakari - Aug 2026 Edition',
      category: 'Monthly Magazine',
      date: 'August 2026',
      description: 'Insights into modern audit compliance, digital transformation in urban credit societies, and regulatory updates.'
    },
    {
      title: 'Souharda Sahakari - Jul 2026 Edition',
      category: 'Monthly Magazine',
      date: 'July 2026',
      description: 'Special feature on youth leadership in co-operatives and risk management practices for financial stability.'
    },
    {
      title: 'Annual Co-operative Sector Report 2025-26',
      category: 'Special Report',
      date: 'June 2026',
      description: 'Comprehensive financial analysis and growth trends across member societies in all 31 districts.'
    }
  ];

  const announcements = [
    {
      date: 'Sep 02, 2026',
      tag: 'Press Release',
      title: 'KSSFCL Submits Policy Recommendations for Digital Banking Framework',
      desc: 'Advocating for streamlined API integration and regulatory support for autonomous credit co-operatives.'
    },
    {
      date: 'Aug 24, 2026',
      tag: 'Circular',
      title: 'Guidance Note on Statutory Annual General Meetings (AGM)',
      desc: 'Key timeline requirements and compliance checklists for member co-operatives for the financial year.'
    },
    {
      date: 'Aug 10, 2026',
      tag: 'Editorial',
      title: 'Strengthening Grassroots Trust Through Autonomous Governance',
      desc: 'An in-depth perspective on how self-reliant co-operative models shield local communities during economic shifts.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Centered Hero Header */}
      <PageHero 
        title="OUR VOICE" 
        subtitle="Publications, Editorials, and Official Communications from KSSFCL." 
      />

      {/* Main Content */}
      <main className="w-full px-2 lg:px-6 py-10 space-y-12">
        
        {/* Featured Editorial Banner */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              <Megaphone className="w-3.5 h-3.5 text-amber-700" /> Keynote Editorial
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#001D38] tracking-tight">
              Empowering Karnataka's Co-operatives in the Digital Era
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
              Communication and knowledge-sharing are the cornerstones of a resilient co-operative ecosystem. Through our flagship publication, <em>Souharda Sahakari</em>, and regular policy whitepapers, KSSFCL ensures that member societies stay informed, compliant, and forward-looking.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#001D38] to-[#0A2E52] text-white p-6 rounded-xl border border-blue-900 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Monthly Journal</span>
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold">Souharda Sahakari</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Karnataka's premier co-operative magazine reaching over 4,500+ registered societies, policy makers, and sector leaders every month.
            </p>
            <button className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-[#001D38] font-bold text-xs rounded-lg transition flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Latest Issue (PDF)
            </button>
          </div>
        </section>

        {/* Latest Publications Grid */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-xl lg:text-2xl font-bold text-[#001D38]">Recent Publications</h3>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">Download reports, magazines, and governance guidelines</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-400 transition shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">{pub.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {pub.date}</span>
                  </div>
                  <h4 className="font-bold text-[#001D38] text-base leading-snug">{pub.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pub.description}</p>
                </div>
                <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-[#0A2E52] font-semibold text-xs rounded-lg border border-slate-200 transition flex items-center justify-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-amber-600" /> Download Edition
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases & Announcements */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-xl lg:text-2xl font-bold text-[#001D38]">Press & Press Statements</h3>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">Official updates and statutory notices from KSSFCL</p>
          </div>

          <div className="space-y-4">
            {announcements.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 md:max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">{item.tag}</span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-bold text-[#001D38] text-base">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <button className="self-start md:self-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#001D38] font-bold text-xs rounded-lg transition flex items-center gap-1 flex-shrink-0">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}