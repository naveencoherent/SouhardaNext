'use client';

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
import EducationHero from '@/components/common/EducationHero';

interface DownloadItem {
  id: string;
  title: string;
  icon: 'powerpoint' | 'pdf' | 'newspaper';
  fileUrl: string;
}

const TRAINING_MATERIALS: DownloadItem[] = [
  {
    id: '5-day-training',
    title: '5 ದಿನಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'powerpoint',
    fileUrl: '/downloads/study-material/5-day-training-material.pdf',
  },
  {
    id: '7-day-training',
    title: '7 ದಿನಗಳ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'pdf',
    fileUrl: '/downloads/study-material/7-day-training-material.pdf',
  },
  {
    id: 'directors-governance',
    title: 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿರ್ದೇಶಕರುಗಳಿಗಾಗಿ ಆಡಳಿತ ಪರಿಣಿತಿ ಮತ್ತು ವ್ಯವಹಾರ ಅಭಿವೃದ್ಧಿ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'newspaper',
    fileUrl: '/downloads/study-material/directors-governance-material.pdf',
  },
  {
    id: 'youth-dialogue',
    title: 'ಯುವಜನ ಹಾಗೂ ಸಂವಾದ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'newspaper',
    fileUrl: '/downloads/study-material/youth-dialogue-material.pdf',
  },
  {
    id: 'urban-bank-loan-mgmt',
    title: 'ರಾಜ್ಯ ಸೌಹಾರ್ದ ಪಟ್ಟಣ ಸಹಕಾರಿ ಬ್ಯಾಂಕುಗಳ ಅಧಿಕಾರಿಗಳಿಗಾಗಿ ಸಾಲ ನೀಡಿಕೆ ಹಾಗೂ ಸಾಲ ವಸೂಲಾತಿ ನಿರ್ವಹಣೆ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'newspaper',
    fileUrl: '/downloads/study-material/urban-bank-loan-mgmt.pdf',
  },
  {
    id: 'urban-bank-exec-workshop',
    title: 'ಪಟ್ಟಣ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಬ್ಯಾಂಕುಗಳ ಅಧ್ಯಕ್ಷರು, ಉಪಾಧ್ಯಕ್ಷರು ಹಾಗೂ ನಿರ್ದೇಶಕರಿಗಾಗಿ “ಆಡಳಿತ ಪರಿಣಿತಿ ಅಭಿವೃದ್ಧಿ ತರಬೇತಿ” ಹಾಗೂ ಮುಖ್ಯಕಾರ್ಯನಿರ್ವಾಹಕರ ಮತ್ತು ಹಿರಿಯ ಅಧಿಕಾರಿಗಳ “ಉನ್ನತ ಮಟ್ಟದ ಕಾರ್ಯಾಗಾರ”ದ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ',
    icon: 'newspaper',
    fileUrl: '/downloads/study-material/urban-bank-exec-workshop.pdf',
  },
];

export default function StudyMaterialPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Education Header Banner */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="General Study Materials"
        subtitle="Educational resources on the Co-operative Movement and Souharda Act."
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: The Co-operative Movement */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              The Co-operative Movement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Global Movement */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <Globe className="w-5 h-5 text-emerald-700" />
                  <h3>Global Movement</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  History of the movement starting from the Rochdale Pioneers (1844).
                </p>
              </div>
              <a 
                href="#global-history" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Indian Context */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <h3>Indian Context</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evolution from the 1904 Act to current national policies.
                </p>
              </div>
              <a 
                href="#indian-context" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Karnataka Movement */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <Flag className="w-5 h-5 text-emerald-700" />
                  <h3>Karnataka Movement</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specific milestones in the growth of Souharda Co-operatives in the state.
                </p>
              </div>
              <a 
                href="#karnataka-movement" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-amber-600 transition-colors pt-2"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Statutory & Act Resources */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              Statutory & Act Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Souharda Act Box */}
            <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-900 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">
                  Souharda Sahakari Act, 1997
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  The complete legal framework including all amendments up to 2026. This is essential for all board directors and employees.
                </p>
              </div>
              <div>
                <a
                  href="/downloads/souharda-act-full.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-slate-950" /> Download Act (Full)
                </a>
              </div>
            </div>

            {/* Model Byelaws Box */}
            <div className="bg-emerald-900/5 p-6 rounded-2xl border border-emerald-900/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Model Byelaws
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardized byelaws framed by KSSFCL to ensure professional management and functional autonomy.
                </p>
              </div>
              <div>
                <a
                  href="/downloads/model-byelaws.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <FileText className="w-4 h-4 text-amber-400" /> View Model Byelaws
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Digital Learning & Presentations */}
        <div>
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
              Digital Learning & Presentations
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
                    {item.title}
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