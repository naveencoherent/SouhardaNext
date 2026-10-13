'use client';

import React from 'react';
import Image from 'next/image';
import { Megaphone, Download, BookOpen, Clock, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import EducationHero from '@/components/common/EducationHero';

export default function EducationPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. HERO BANNER */}
      <EducationHero
        badgeText={
          locale === 'kn' ? 'ಸಹಕಾರ ಶಿಕ್ಷಣ ವಿಭಾಗ' : 'Co-operative Education Wing'
        }
        title={locale === 'kn' ? 'ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳು' : 'Professional Courses'}
        subtitle={
          locale === 'kn'
            ? 'ಸಹಕಾರ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಡಿಪ್ಲೊಮಾ (DCBM)'
            : 'Diploma in Cooperation and Banking Management (DCBM)'
        }
        imageSrc="/images/Education/Education.webp"
      />

      {/* 2. OVERVIEW SECTION WITH FIXED IMAGE LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          
          {/* Left Column: Image Container (Matching standard aspect ratio) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-xs">
            <Image
              src="/images/Education/Education.webp"
              alt="DCBM Education Program"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shadow-2xs">
                  {locale === 'kn'
                    ? 'ಸಹಕಾರ ಶಿಕ್ಷಣ ವಿಭಾಗ'
                    : "EMPOWERING KARNATAKA'S NEW GENERATION OF COOPERATORS"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight uppercase">
                {locale === 'kn'
                  ? 'ಸಹಕಾರ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಡಿಪ್ಲೊಮಾ (DCBM)'
                  : 'DIPLOMA IN COOPERATION & BANKING MANAGEMENT'}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'DCBM ಕೋರ್ಸ್ ಅನ್ನು ನೌಕರರು ಮತ್ತು ಉದಯೋನ್ಮುಖ ವೃತ್ತಿಪರರಿಗೆ ಸಹಕಾರ ಕಾಯ್ದೆಗಳು, ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಪದ್ಧತಿಗಳು ಮತ್ತು ನಿರ್ವಹಣಾ ತಂತ್ರಗಳಲ್ಲಿ ವಿಶೇಷ ಜ್ಞಾನವನ್ನು ನೀಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.'
                  : 'The DCBM course is designed to equip employees and aspiring professionals with specialized knowledge in cooperative laws, modern banking practices, and management techniques.'}
              </p>

              <div className="border-l-4 border-amber-500 bg-amber-50/60 rounded-r-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-800 shadow-2xs">
                <span className="font-extrabold text-amber-900">
                  {locale === 'kn' ? 'ಉದ್ದೇಶ: ' : 'Purpose: '}
                </span>
                {locale === 'kn'
                  ? 'ಸಹಕಾರ ಸಂಘಗಳ ದೈನಂದಿನ ಕಾರ್ಯನಿರ್ವಹಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸಲು ಮತ್ತು ಉದ್ಯೋಗಿಗಳ ವೃತ್ತಿಪರ ಕೌಶಲ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲು ರೂಪಿಸಲಾದ ತರಬೇತಿ.'
                  : 'Structured weekend contact classes designed specifically for working professionals to upgrade operational and statutory capabilities.'}
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href="#notification"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all shadow-2xs"
                >
                  <Megaphone className="w-3.5 h-3.5" />
                  {locale === 'kn' ? 'ಅಧಿಸೂಚನೆ ನೋಡಿ' : 'View Notification'}
                </a>
                <a
                  href="#application"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-lg text-xs font-bold transition-all shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  {locale === 'kn' ? 'ಅರ್ಜಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download Application'}
                </a>
                <a
                  href="#syllabus"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 rounded-lg text-xs font-bold transition-all shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {locale === 'kn' ? 'ಪಠ್ಯಕ್ರಮ' : 'Course Syllabus'}
                </a>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">6 Months</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಕೋರ್ಸ್ ಅವಧಿ' : 'DURATION'}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">₹ 5,600</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಒಟ್ಟು ಶುಲ್ಕ' : 'TOTAL FEE'}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">4 Papers</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಪಠ್ಯಕ್ರಮ' : 'SYLLABUS'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SYLLABUS & SIDEBAR CONTENT */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Syllabus */}
          <div className="lg:col-span-8 space-y-6">
            <div id="syllabus" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {locale === 'kn' ? 'ಕೋರ್ಸ್ ಪಠ್ಯಕ್ರಮ' : 'Course Syllabus'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {locale === 'kn' ? 'ಪತ್ರಿಕೆ I: ಸಹಕಾರ ಪರಿಸರ' : 'Paper I: Co-operative Environment'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {locale === 'kn'
                      ? 'ಇತಿಹಾಸ, ತತ್ವಗಳು ಮತ್ತು ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭.'
                      : 'History, Principles, and the Karnataka Souharda Sahakari Act, 1997.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {locale === 'kn' ? 'ಪತ್ರಿಕೆ II: ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳು' : 'Paper II: Banking Operations'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {locale === 'kn'
                      ? 'ಕೋರ್ ಬ್ಯಾಂಕಿಂಗ್, ಡಿಜಿಟಲ್ ಪಾವತಿಗಳು ಮತ್ತು ಸಾಲ ನಿರ್ವಹಣೆ.'
                      : 'Core banking, digital payments, and credit management.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {locale === 'kn' ? 'ಪತ್ರಿಕೆ III: ಸಹಕಾರ ಲೆಕ್ಕಪತ್ರಗಳು' : 'Paper III: Co-operative Accounts'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {locale === 'kn'
                      ? 'ಲೆಕ್ಕಪತ್ರ ಮಾನದಂಡಗಳು, ಆಡಿಟ್ ವಿಧಾನಗಳು ಮತ್ತು ಆಸ್ತಿ-ಹೊಣೆಗಾರಿಕೆ ಪಟ್ಟಿ ಅಂತಿಮಗೊಳಿಸುವಿಕೆ.'
                      : 'Accounting standards, Audit procedures, and Balance Sheet finalization.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {locale === 'kn' ? 'ಪತ್ರಿಕೆ IV: ನಿರ್ವಹಣೆ ಮತ್ತು ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ' : 'Paper IV: Management & IT'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {locale === 'kn'
                      ? 'ಮಾನವ ಸಂಪನ್ಮೂಲ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಹಕಾರ ಸಂಘಗಳಲ್ಲಿ MIS ಬಳಕೆ.'
                      : 'HR management and use of MIS in co-operatives.'}
                  </p>
                </div>
              </div>

              <div className="p-4 border-l-4 border-amber-400 bg-amber-50/50 rounded-r-xl flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">
                    {locale === 'kn' ? 'ಸಂಪರ್ಕ ತರಗತಿಗಳು' : 'Contact Classes'}
                  </h5>
                  <p className="text-xs text-slate-600">
                    {locale === 'kn'
                      ? 'ಉದ್ಯೋಗಿಗಳಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ೬ ತಿಂಗಳ ಅವಧಿಯಲ್ಲಿ ವಾರಾಂತ್ಯದ ತರಗತಿಗಳು (ಶನಿವಾರ ಮತ್ತು ಭಾನುವಾರ).'
                      : 'Weekend sessions (Saturdays & Sundays) conducted over 6 months to support working professionals.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fees & Downloads */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="bg-amber-400 text-slate-950 font-bold px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider">
                {locale === 'kn' ? 'ಶುಲ್ಕದ ವಿವರಗಳು' : 'Fees Structure'}
              </div>
              <div className="p-6 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">{locale === 'kn' ? 'ಅರ್ಜಿ ಶುಲ್ಕ' : 'Application Fee'}</span>
                  <span className="font-bold text-slate-900">₹ 100</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">{locale === 'kn' ? 'ಕೋರ್ಸ್ ಶುಲ್ಕ' : 'Course Fee'}</span>
                  <span className="font-bold text-slate-900">₹ 5,000</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">{locale === 'kn' ? 'ಪರೀಕ್ಷಾ ಶುಲ್ಕ' : 'Exam Fee'}</span>
                  <span className="font-bold text-slate-900">₹ 500</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-extrabold text-slate-900">
                  <span>{locale === 'kn' ? 'ಒಟ್ಟು ಶುಲ್ಕ' : 'Total'}</span>
                  <span className="text-emerald-700">₹ 5,600</span>
                </div>
                <p className="text-[10px] text-slate-400 italic pt-2 border-t border-slate-100">
                  {locale === 'kn'
                    ? '* ಮಹಾಮಂಡಳದ ತೀರ್ಮಾನದಂತೆ ಶುಲ್ಕಗಳು ಬದಲಾವಣೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.'
                    : '* Fees are subject to change as per Federation board decisions.'}
                </p>
              </div>
            </div>

            <div id="notification" className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-900 border-b border-slate-100 pb-2">
                {locale === 'kn' ? 'ಇತ್ತೀಚಿನ ಅಧಿಸೂಚನೆಗಳು' : 'Latest Notifications'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <a
                      href="/assets/docs/education/DCBM_Admission_Notification_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                      {locale === 'kn' ? 'ಪ್ರವೇಶ ಅಧಿಸೂಚನೆ ೨೦೨೬' : 'Admission Notification 2026'}
                    </a>
                  </div>
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs shrink-0">
                    {locale === 'kn' ? 'ಹೊಸದು' : 'New'}
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <a
                    href="/assets/docs/education/DCBM_Exam_Timetable.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    {locale === 'kn' ? 'ಪರೀಕ್ಷಾ ವೇಳಾಪಟ್ಟಿ - ಅಕ್ಟೋಬರ್ ೨೦೨೬' : 'Examination Time Table - Oct 2026'}
                  </a>
                </li>
              </ul>

              <div id="application" className="pt-3 border-t border-slate-100 space-y-2">
                <h5 className="text-[11px] font-bold text-slate-800">
                  {locale === 'kn' ? 'ಅರ್ಜಿ ನಮೂನೆಗಳು' : 'Download Forms'}
                </h5>
                <a
                  href="/assets/docs/education/DCBM_Application_Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-red-50 text-red-600 border border-red-200 rounded-xl text-xs font-bold transition-all shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{locale === 'kn' ? 'ಅರ್ಜಿ ನಮೂನೆ ಡೌನ್‌ಲೋಡ್' : 'Application Form'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}