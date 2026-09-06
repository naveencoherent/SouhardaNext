'use client';

import { Megaphone, Download, BookOpen, Clock, FileText } from 'lucide-react';
import EducationHero from '@/components/common/EducationHero';

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Education Banner Component */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="Professional Courses"
        subtitle="Diploma in Cooperation and Banking Management (DCBM)"
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* Main Content Area */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Course Info & Syllabus */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* About DCBM */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-emerald-900">About DCBM Course</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The DCBM course is designed to equip employees and aspiring professionals with specialized knowledge in cooperative laws, modern banking practices, and management techniques. This diploma is recognized for professional advancement within the Souharda Co-operative sector.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a 
                  href="#notification" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all"
                >
                  <Megaphone className="w-3.5 h-3.5" />
                  View Notification
                </a>
                <a 
                  href="#application" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-lg text-xs font-bold transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Application
                </a>
                <a 
                  href="#syllabus" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 rounded-lg text-xs font-bold transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Course Syllabus
                </a>
              </div>
            </div>

            {/* Syllabus */}
            <div id="syllabus" className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Course Syllabus
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Paper I: Co-operative Environment</h4>
                  <p className="text-xs text-slate-500">History, Principles, and the Karnataka Souharda Sahakari Act, 1997.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Paper II: Banking Operations</h4>
                  <p className="text-xs text-slate-500">Core banking, digital payments, and credit management.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Paper III: Co-operative Accounts</h4>
                  <p className="text-xs text-slate-500">Accounting standards, Audit procedures, and Balance Sheet finalization.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Paper IV: Management &amp; IT</h4>
                  <p className="text-xs text-slate-500">HR management and use of MIS in co-operatives.</p>
                </div>
              </div>

              <div className="p-4 border-l-4 border-amber-400 bg-amber-50/50 rounded-r-lg flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Contact Classes</h5>
                  <p className="text-xs text-slate-600">Weekend sessions (Saturdays &amp; Sundays) conducted over 6 months to support working professionals.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Fees Box */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="bg-amber-400 text-slate-950 font-bold px-5 py-3 text-xs sm:text-sm uppercase tracking-wider">
                Fees Structure
              </div>
              <div className="p-5 space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Application Fee</span>
                  <span className="font-bold text-slate-900">₹ 100</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Course Fee</span>
                  <span className="font-bold text-slate-900">₹ 5,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Exam Fee</span>
                  <span className="font-bold text-slate-900">₹ 500</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-extrabold text-slate-900">
                  <span>Total</span>
                  <span className="text-emerald-700">₹ 5,600</span>
                </div>
                <p className="text-[10px] text-slate-400 italic pt-2 border-t border-slate-100">
                  * Fees are subject to change as per Federation board decisions.
                </p>
              </div>
            </div>

            {/* Notifications & Forms */}
            <div id="notification" className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-900 border-b border-slate-100 pb-2">
                Latest Notifications
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <a 
                      href="/Assets/docs/education/DCBM_Admission_Notification_2026.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      Admission Notification 2026
                    </a>
                  </div>
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm shrink-0">
                    New
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <a 
                    href="/Assets/docs/education/DCBM_Exam_Timetable.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    Examination Time Table - Oct 2026
                  </a>
                </li>
              </ul>

              <div id="application" className="pt-3 border-t border-slate-100 space-y-2">
                <h5 className="text-[11px] font-bold text-slate-800">Download Forms</h5>
                <a
                  href="/Assets/docs/education/DCBM_Application_Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Application Form</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}