'use client';

import React from 'react';
import { 
  Globe, 
  MapPin, 
  Flag, 
  Download, 
  FileText, 
  ArrowRight, 
  Presentation, 
  Newspaper 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import EducationHero from '@/components/common/EducationHero';

interface DownloadItem {
  id: string;
  titleKn: string;
  titleEn: string;
  icon: 'powerpoint' | 'pdf' | 'newspaper';
  fileUrl: string;
}

const TRAINING_MATERIALS: DownloadItem[] = [
  {
    id: '5-day-training',
    titleKn: '5 ದಿನಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Study Material for 5-Day Training Program',
    icon: 'powerpoint',
    fileUrl: '/assets/docs/education/5-day-training-material.pdf',
  },
  {
    id: '7-day-training',
    titleKn: '7 ದಿನಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Study Material for 7-Day Training Program',
    icon: 'pdf',
    fileUrl: '/assets/docs/education/7-day-training-material.pdf',
  },
  {
    id: 'directors-governance',
    titleKn: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿರ್ದೇಶಕರುಗಳಿಗಾಗಿ ಆಡಳಿತ ಪರಿಣಿತಿ ಮತ್ತು ವ್ಯವಹಾರ ಅಭಿವೃದ್ಧಿ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Governance & Business Development Material for Directors',
    icon: 'newspaper',
    fileUrl: '/assets/docs/education/directors-governance-material.pdf',
  },
  {
    id: 'youth-dialogue',
    titleKn: 'ಯುವಜನ ಹಾಗೂ ಸಂವಾದ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Youth & Dialogue Program Study Material',
    icon: 'newspaper',
    fileUrl: '/assets/docs/education/youth-dialogue-material.pdf',
  },
  {
    id: 'urban-bank-loan-mgmt',
    titleKn: 'ರಾಜ್ಯ ಸೌಹಾರ್ದ ಪಟ್ಟಣ ಸಹಕಾರಿ ಬ್ಯಾಂಕುಗಳ ಅಧಿಕಾರಿಗಳಿಗಾಗಿ ಸಾಲ ನೀಡಿಕೆ ಹಾಗೂ ಸಾಲ ವಸೂಲಾತಿ ನಿರ್ವಹಣೆ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Loan Disbursement & Recovery Management for Urban Banks',
    icon: 'newspaper',
    fileUrl: '/assets/docs/education/urban-bank-loan-mgmt.pdf',
  },
  {
    id: 'urban-bank-exec-workshop',
    titleKn: 'ಪಟ್ಟಣ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಬ್ಯಾಂಕುಗಳ ಅಧ್ಯಕ್ಷರು, ಉಪಾಧ್ಯಕ್ಷರು ಹಾಗೂ ನಿರ್ದೇಶಕರಿಗಾಗಿ “ಆಡಳಿತ ಪರಿಣಿತಿ ಅಭಿವೃದ್ಧಿ ತರಬೇತಿ” ಹಾಗೂ ಮುಖ್ಯಕಾರ್ಯನಿರ್ವಾಹಕರ ಮತ್ತು ಹಿರಿಯ ಅಧಿಕಾರಿಗಳ “ಉನ್ನತ ಮಟ್ಟದ ಕಾರ್ಯಾಗಾರ”ದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    titleEn: 'Executive Governance & Leadership Workshop Material for Urban Banks',
    icon: 'newspaper',
    fileUrl: '/assets/docs/education/urban-bank-exec-workshop.pdf',
  },
];

export default function StudyMaterialPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Education Header Banner */}
      <EducationHero
        badgeText={
          locale === 'kn' ? 'ಸಹಕಾರ ಶಿಕ್ಷಣ ವಿಭಾಗ' : 'Co-operative Education Wing'
        }
        title={
          locale === 'kn' ? 'ಸಾಮಾನ್ಯ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ' : 'General Study Materials'
        }
        subtitle={
          locale === 'kn'
            ? 'ಸಹಕಾರ ಚಳವಳಿ ಮತ್ತು ಸೌಹಾರ್ದ ಕಾಯ್ದೆಯ ಶೈಕ್ಷಣಿಕ ಸಂಪನ್ಮೂಲಗಳು.'
            : 'Educational resources on the Co-operative Movement and Souharda Act.'
        }
        imageSrc="/souharda/AllAboutKSSFCL_Intro.webp"
      />

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: The Co-operative Movement */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              {locale === 'kn' ? 'ಸಹಕಾರ ಚಳವಳಿ' : 'The Co-operative Movement'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Global Movement */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <Globe className="w-5 h-5 text-emerald-700" />
                  <h3>{locale === 'kn' ? 'ಜಾಗತಿಕ ಚಳವಳಿ' : 'Global Movement'}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === 'kn'
                    ? '೧೮೪೪ ರ ರಾಚ್‌ಡೇಲ್ ಪಯೋನೀರ್ಸ್‌ನಿಂದ ಪ್ರಾರಂಭವಾದ ಚಳವಳಿಯ ಇತಿಹಾಸ.'
                    : 'History of the movement starting from the Rochdale Pioneers (1844).'}
                </p>
              </div>
              <a 
                href="/education/swabhimani-sahakari#global" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                {locale === 'kn' ? 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ' : 'Read More'} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Indian Context */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <h3>{locale === 'kn' ? 'ಭಾರತೀಯ ಸನ್ನಿವೇಶ' : 'Indian Context'}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === 'kn'
                    ? '೧೯೦೪ ರ ಕಾಯ್ದೆಯಿಂದ ಇಂದಿನ ರಾಷ್ಟ್ರೀಯ ನೀತಿಗಳವರೆಗಿನ ವಿಕಸನ.'
                    : 'Evolution from the 1904 Act to current national policies.'}
                </p>
              </div>
              <a 
                href="/education/swabhimani-sahakari#india" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                {locale === 'kn' ? 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ' : 'Read More'} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Karnataka Movement */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <Flag className="w-5 h-5 text-emerald-700" />
                  <h3>{locale === 'kn' ? 'ಕರ್ನಾಟಕದ ಚಳವಳಿ' : 'Karnataka Movement'}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === 'kn'
                    ? 'ರಾಜ್ಯದಲ್ಲಿ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಬೆಳವಣಿಗೆಯ ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲುಗಳು.'
                    : 'Specific milestones in the growth of Souharda Co-operatives in the state.'}
                </p>
              </div>
              <a 
                href="/souharda/cooperative-movement" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                {locale === 'kn' ? 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ' : 'Read More'} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Statutory & Act Resources */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಮತ್ತು ಕಾಯ್ದೆ ಸಂಪನ್ಮೂಲಗಳು' : 'Statutory & Act Resources'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Souharda Act Box */}
            <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-900 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">
                  {locale === 'kn' ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭' : 'Souharda Sahakari Act, 1997'}
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {locale === 'kn'
                    ? 'ಸಂಪೂರ್ಣ ಕಾನೂನು ಚೌಕಟ್ಟು ಮತ್ತು ತಿದ್ದುಪಡಿಗಳು. ಎಲ್ಲಾ ನಿರ್ದೇಶಕರು ಮತ್ತು ಉದ್ಯೋಗಿಗಳಿಗೆ ಕಡ್ಡಾಯ ಮಾಹಿತಿ.'
                    : 'The complete legal framework including all amendments up to date. Essential for all directors and staff.'}
                </p>
              </div>
              <div>
                <a
                  href="/assets/docs/regulatory/Souharda_Act_1997_Full.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-slate-950" /> 
                  {locale === 'kn' ? 'ಕಾಯ್ದೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (ಸಂಪೂರ್ಣ)' : 'Download Act (Full)'}
                </a>
              </div>
            </div>

            {/* Model Byelaws Box */}
            <div className="bg-emerald-900/5 p-6 rounded-2xl border border-emerald-900/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {locale === 'kn' ? 'ಮಾದರಿ ಉಪನಿಯಮಗಳು (ಬೈಲಾ)' : 'Model Byelaws'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === 'kn'
                    ? 'ವೃತ್ತಿಪರ ಆಡಳಿತ ಮತ್ತು ಸ್ವಾಯತ್ತತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಕೆ.ಎಸ್.ಎಸ್.ಎಫ್.ಸಿ.ಎಲ್ ನಿಂದ ರಚಿಸಲಾದ ಮಾದರಿ ಉಪನಿಯಮಗಳು.'
                    : 'Standardized byelaws framed by KSSFCL to ensure professional management and functional autonomy.'}
                </p>
              </div>
              <div>
                <a
                  href="/assets/docs/regulatory/Model_Byelaws.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <FileText className="w-4 h-4 text-amber-400" /> 
                  {locale === 'kn' ? 'ಉಪನಿಯಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'View Model Byelaws'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Digital Learning & Presentations */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              {locale === 'kn' ? 'ಡಿಜಿಟಲ್ ಕಲಿಕೆ ಮತ್ತು ಪ್ರಸ್ತುತಿಗಳು' : 'Digital Learning & Presentations'}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
            {TRAINING_MATERIALS.map((item) => (
              <a
                key={item.id}
                href={item.fileUrl}
                download
                className="flex items-center justify-between p-4 sm:p-5 hover:bg-slate-50 transition-colors group gap-4"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  {item.icon === 'powerpoint' && (
                    <Presentation className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  {item.icon === 'pdf' && (
                    <Download className="w-5 h-5 text-red-500 shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  {item.icon === 'newspaper' && (
                    <Newspaper className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-900 transition-colors leading-relaxed">
                    {locale === 'kn' ? item.titleKn : item.titleEn}
                  </span>
                </div>
                
                <div className="shrink-0 text-slate-400 group-hover:text-emerald-800 transition-colors p-1.5 rounded-full bg-slate-100 group-hover:bg-emerald-50">
                  <Download className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}