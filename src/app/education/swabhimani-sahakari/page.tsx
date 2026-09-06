'use client';

import { BookOpen, Download, Newspaper, Award, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import EducationHero from '@/components/common/EducationHero';

export default function SwabhimaniSahakariPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Education Header Banner */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="Swabhimani Sahakari"
        subtitle="Official Monthly Journal of Karnataka State Souharda Federal Co-operative Ltd."
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* Main Content & Archives */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Overview & About Journal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Monthly Publication</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Spreading Cooperative Awareness Across Karnataka
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Swabhimani Sahakari</strong> is KSSFCL's flagship monthly magazine dedicated to educating, informing, and guiding cooperative leaders, board members, and employees. It features key legislative updates, success stories, legal rulings, and expert articles on cooperative management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-700" />
                  Legal Guidance
                </h4>
                <p className="text-[11px] text-slate-500">In-depth analyses of the Souharda Act, bylaws, and compliance updates.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  Best Practices
                </h4>
                <p className="text-[11px] text-slate-500">Case studies and operational guides from top-performing societies.</p>
              </div>
            </div>
          </div>

          {/* Latest Edition Highlight */}
          <div className="md:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-emerald-900">
            <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Latest Issue</span>
                <h3 className="text-lg font-bold">September 2026 Edition</h3>
              </div>
              <Calendar className="w-8 h-8 text-amber-400/80" />
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Featuring coverage on Digital Banking Adoption in Rural Cooperatives, Souharda Act amendments, and financial audit guidelines.
            </p>

            <div className="pt-2">
              <a
                href="/Assets/docs/education/Swabhimani_Sahakari_Latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Latest Edition (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Magazine Archives Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Previous Editions Archive</h3>
              <p className="text-xs text-slate-500">Browse and download past issues of Swabhimani Sahakari</p>
            </div>
          </div>

          {/* Archive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { month: 'August 2026', title: 'Governance & Ethics Special', file: '#' },
              { month: 'July 2026', title: 'Cybersecurity for Cooperatives', file: '#' },
              { month: 'June 2026', title: 'Annual Financial Audit Prep', file: '#' },
              { month: 'May 2026', title: 'Taxation & GST Compliance', file: '#' },
              { month: 'April 2026', title: 'Credit Management Guidelines', file: '#' },
              { month: 'March 2026', title: 'Cooperative Board Leadership', file: '#' },
              { month: 'February 2026', title: 'Risk & Portfolio Management', file: '#' },
              { month: 'January 2026', title: 'New Year Cooperative Outlook', file: '#' },
            ].map((issue, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-emerald-700/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">{issue.month}</span>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{issue.title}</h4>
                </div>

                <a
                  href={issue.file}
                  className="inline-flex items-center justify-between text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-2 border-t border-slate-100"
                >
                  <span>Download PDF</span>
                  <Download className="w-3.5 h-3.5 text-amber-600" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Subscribe to Printed Copies</h3>
            <p className="text-xs text-emerald-100/80">Get physical monthly issues delivered directly to your Cooperative Society office.</p>
          </div>
          <a
            href="/connect"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-all shrink-0"
          >
            <span>Contact Subscription Cell</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}