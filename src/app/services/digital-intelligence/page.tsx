'use client';

import React from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Cpu, 
  HelpCircle, 
  Video, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';

export default function DigitalIntelligencePage() {
  const { locale } = useLanguage();

  const NAV_ITEMS = [
    { 
      label: locale === 'kn' ? 'ಅಧ್ಯಯನ ಸಾಮಗ್ರಿಗಳು' : 'Study Materials', 
      href: '#study-material' 
    },
    { 
      label: locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಕೈಪಿಡಿಗಳು' : 'Software & Manuals', 
      href: '#software' 
    },
    { 
      label: locale === 'kn' ? 'ವೀಡಿಯೊ ತರಬೇತಿಗಳು' : 'Video Tutorials', 
      href: '#videos' 
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 scroll-smooth">
      
      {/* Compact Reusable Services Hero Header */}
      <ServicesHero
        theme="blue"
        badgeText={locale === 'kn' ? 'ಡಿಜಿಟಲ್ ಸೇವೆಗಳು' : 'Digital Services'}
        title={
          locale === 'kn' 
            ? 'ಡಿಜಿಟಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಮತ್ತು ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್' 
            : 'Digital Intelligence & E-Stamping'
        }
        subtitle={
          locale === 'kn'
            ? 'ಸುರಕ್ಷಿತ ಡಿಜಿಟಲ್ ವಹಿವಾಟು ಉಪಕರಣಗಳು, ಮಾರ್ಗದರ್ಶಿಗಳು, ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ವೀಡಿಯೊ ತರಬೇತಿಗಳ ಮೂಲಕ ಸಹಕಾರ ಸಂಘಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.'
            : 'Empowering Cooperatives with secure digital transaction tools, guides, software, and training video tutorials.'
        }
        imageSrc="/images/souharda/AllAboutKSSFCL_Intro.webp"
      />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Sidebar Nav */}
          <aside className="lg:col-span-3 sticky top-24 z-10">
            <nav className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-900 hover:text-amber-400 transition-colors group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:col-span-9 space-y-10">
            
            {/* Section 1: Study Material */}
            <section id="study-material" className="scroll-mt-28 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-slate-900" />
                  {locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಅಧ್ಯಯನ ಸಾಮಗ್ರಿ' : 'E-Stamping Study Material'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Book Card */}
                <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-slate-900 p-6 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-slate-900 shrink-0" />
                      {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಪುಸ್ತಕ' : 'Souharda E-Stamping Book'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {locale === 'kn'
                        ? 'ಸೌಹಾರ್ದ ಸಹಕಾರ ಸಂಘಗಳಿಗೆ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ ಪುಸ್ತಕ (೨೦೧೭ ರ ಆವೃತ್ತಿ).'
                        : 'Complete guide for Souharda Cooperatives (2017 Edition).'}
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://souharda.coop/pdf/estamping_book_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-bold transition-all border border-slate-200"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-500" />
                      {locale === 'kn' ? 'ಪುಸ್ತಕ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download Book'}
                    </a>
                  </div>
                </div>

                {/* Consolidated Info Card */}
                <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-slate-900 p-6 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-slate-900 shrink-0" />
                      {locale === 'kn' ? 'ಸಮಗ್ರ ಮಾಹಿತಿ' : 'Consolidated Information'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {locale === 'kn'
                        ? 'ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು ಮತ್ತು ಆಡಳಿತಾತ್ಮಕ ಸೂಚನೆಗಳು.'
                        : 'Guidelines and administrative instructions for all Districts.'}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-bold transition-all border border-slate-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                      {locale === 'kn' ? 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'View Details'}
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: Software & Technical Support */}
            <section id="software" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-slate-900" />
                  {locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲ' : 'Software & Technical Support'}
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {/* PCP Software Download */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-900">
                      Print Control Proxy (PCP)
                    </span>
                    <p className="text-xs text-slate-500">
                      {locale === 'kn'
                        ? 'ಇ-ಸ್ಟ್ಯಾಂಪ್ ಮುದ್ರಣಕ್ಕೆ ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣಿತ ಸಾಫ್ಟ್‌ವೇರ್.'
                        : 'Standard software required for e-stamp printing.'}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    {locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಡೌನ್‌ಲೋಡ್' : 'Download Software'}
                  </a>
                </div>

                {/* PCP FAQ */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-900">
                      {locale === 'kn' ? 'PCP ಅನುಸ್ಥಾಪನ ಪಶ್ನೋತ್ತರಗಳು' : 'PCP Installation FAQ'}
                    </span>
                    <p className="text-xs text-slate-500">
                      {locale === 'kn'
                        ? 'ಸಾಮಾನ್ಯ ಅನುಸ್ಥಾಪನ ದೋಷಗಳು ಮತ್ತು ಪರಿಹಾರಗಳ ವಿವರಣೆ.'
                        : 'Troubleshooting common installation errors and solutions.'}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors border border-slate-200 shrink-0"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-slate-900" />
                    {locale === 'kn' ? 'ಪ್ರಶ್ನೋತ್ತರಗಳನ್ನು ನೋಡಿ' : 'View FAQ'}
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Video Tutorials */}
            <section id="videos" className="scroll-mt-28 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Video className="w-6 h-6 text-slate-900" />
                  {locale === 'kn' ? 'ವೀಡಿಯೊ ತರಬೇತಿಗಳು' : 'Video Tutorials'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* YouTube Video Embed */}
                <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-3">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                    <iframe
                      src="https://www.youtube.com/embed/ugI-LAA4wOM"
                      title="Easy Pay Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-center text-slate-900 py-1">
                    {locale === 'kn' ? 'ಈಸಿ ಪೇ ಡೆಮೊ ವೀಡಿಯೊ' : 'Easy Pay Demo'}
                  </p>
                </div>

                {/* Local MP4 Video Placeholder */}
                <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-3">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center text-slate-400 text-xs font-semibold">
                    <span>{locale === 'kn' ? 'ವೀಡಿಯೊ ಲಭ್ಯವಿಲ್ಲ' : 'Video Offline'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-center text-slate-900 py-1">
                    {locale === 'kn' ? 'ವರ್ಚುವಲ್ ಖಾತೆಗೆ ಸಂಬಂಧಿಸಿದ ವೀಡಿಯೊ' : 'Virtual Account Related Video'}
                  </p>
                </div>

              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}