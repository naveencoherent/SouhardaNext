'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  Download,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Wrench,
  PlayCircle,
  ExternalLink,
  HelpCircle,
  BookOpen,
  Settings,
  HelpCircle as FaqIcon,
  ShoppingBag,
  X,
  Video,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';


// Types
interface MaterialItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  link: string;
  fileSize: string;
  type: string;
}

export default function DigitalIntelligencePage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO BANNER */}
      <DarkHeroHeader />

      {/* 2. CATEGORY FILTER TABS */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. STUDY MATERIALS & REGULATORY GUIDES */}
      {(activeTab === 'all' || activeTab === 'study') && <StudyMaterialsSection />}

      {/* 4. SOFTWARE & TECHNICAL SUPPORT */}
      {(activeTab === 'all' || activeTab === 'software') && <SoftwareSupportSection />}

      {/* 5. GST & TAX GUIDANCE */}
      {(activeTab === 'all' || activeTab === 'tax') && <GstTaxGuidanceSection />}

      {/* 6. VIDEO INTELLIGENCE & DEMOS */}
      {(activeTab === 'all' || activeTab === 'videos') && <VideoDemosSection />}

     
    </main>
  );
}

// ==========================================
// 1. HERO BANNER
// ==========================================
function DarkHeroHeader() {
  const { locale } = useLanguage();

  return (
    <section className="bg-[#1e1435] text-white py-14 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-b border-purple-900/40">
      <div className="w-full text-center space-y-3 relative z-10 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold tracking-widest uppercase border border-amber-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          {locale === 'kn' ? 'ಡಿಜಿಟಲ್ ಸೇವೆಗಳು ಮತ್ತು ತರಬೇತಿ' : 'DIGITAL SERVICES & TRAINING'}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif">
          {locale === 'kn' ? 'ಡಿಜಿಟಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್' : 'DIGITAL INTELLIGENCE'}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {locale === 'kn'
            ? 'ಕರ್ನಾಟಕದ ಸೌಹಾರ್ದ ಸಹಕಾರ ಸಂಘಗಳಿಗೆ ಅಗತ್ಯವಿರುವ ತಾಂತ್ರಿಕ ಕೈಪಿಡಿಗಳು, ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಜಿಎಸ್‌‌ಟಿ ಮಾರ್ಗದರ್ಶಿ ಪೋರ್ಟಲ್.'
            : 'Official study publications, e-stamping operation handbooks, legal compliance manuals, and technical software for Souharda Cooperatives across Karnataka.'}
        </p>
      </div>
    </section>
  );
}

// ==========================================
// 2. CATEGORY FILTER TABS
// ==========================================
function CategoryTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const { locale } = useLanguage();

  const TABS = [
    { id: 'all', label: locale === 'kn' ? 'ಎಲ್ಲಾ ಸಂಪನ್ಮೂಲಗಳು' : 'All Resources' },
    { id: 'study', label: locale === 'kn' ? 'ಅಧ್ಯಯನ ಸಾಮಗ್ರಿಗಳು' : 'Study Materials' },
    { id: 'software', label: locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ' : 'Software & Tech' },
    { id: 'tax', label: locale === 'kn' ? 'ಜಿಎಸ್‌ಟಿ ಮತ್ತು ತೆರಿಗೆ ವಿವರ' : 'GST & Tax Info' },
    { id: 'videos', label: locale === 'kn' ? 'ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್' : 'Video Tutorials' },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200 sticky top-0 z-20 py-3 px-4 sm:px-6 lg:px-12 backdrop-blur-md bg-opacity-95">
      <div 
        role="tablist" 
        className="w-full flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-xs scale-[1.02]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ==========================================
// 3. STUDY MATERIALS SECTION
// ==========================================
function StudyMaterialsSection() {
  const { locale } = useLanguage();

  const MATERIALS: MaterialItem[] = [
    {
      id: 1,
      badge: locale === 'kn' ? 'ಕೈಪಿಡಿ' : 'HANDBOOK',
      title: locale === 'kn' ? 'ಸೌಹಾರ್ದ ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಪುಸ್ತಕ (2017)' : 'Souharda E-Stamping Handbook (2017)',
      description: locale === 'kn'
        ? 'ಸೌಹಾರ್ದ ಸಹಕಾರ ಸಂಘಗಳಿಗಾಗಿ ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಾರ್ಯಾಚರಣೆ, ಶಾಸನಬದ್ಧ ನಿಯಮಗಳು ಮತ್ತು ಹಂತ-ಹಂತದ ಕೈಪಿಡಿ.'
        : 'Official reference book covering operational protocols, legal framework, and certificate generation steps for Souharda societies.',
      link: 'https://souharda.coop/pdf/estamping_book_2017.pdf',
      fileSize: '4.2 MB',
      type: 'PDF Document',
    },
    {
      id: 2,
      badge: locale === 'kn' ? 'ವಾರ್ಷಿಕ ಸಭೆ' : 'ANNUAL MEETING',
      title: locale === 'kn' ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾರ್ಯನಿರ್ವಾಹಕರ ವಾರ್ಷಿಕ ಸಭೆಯ ಅಧ್ಯಯನ ಸಾಹಿತ್ಯ' : 'Executive Officers Annual Conference Study Material',
      description: locale === 'kn'
        ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾರ್ಯನಿರ್ವಾಹಕರ ವಾರ್ಷಿಕ ಸಮ್ಮೇಳನ ಹಾಗೂ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಕ್ಕಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಅಧಿಕೃತ ಅಧ್ಯಯನ ಗ್ರಂಥ.'
        : 'Comprehensive reference study publication compiled for the annual general assembly and leadership training of Souharda executive officers.',
      link: 'https://www.souharda.coop/study.html',
      fileSize: 'PDF Resource',
      type: 'Official Document',
    },
    {
      id: 3,
      badge: locale === 'kn' ? 'ಯುವ ಮಾರ್ಗದರ್ಶಿ' : 'YOUTH GUIDE',
      title: locale === 'kn' ? 'ಯುವ ಸಹಕಾರಿಗಳ ಮಾರ್ಗದರ್ಶಿ' : 'Guide for Young Cooperators',
      description: locale === 'kn'
        ? 'ಸಹಕಾರ ಕ್ಷೇತ್ರದಲ್ಲಿ ಯುವಜನರ ಭಾಗವಹಿಸುವಿಕೆ, ಸಹಕಾರ ತತ್ವಗಳು ಮತ್ತು ಹೊಸ ಸಂಘಗಳ ಸಂಸ್ಥಾಪನೆಗೆ ಉಪಯುಕ್ತ ಮಾರ್ಗದರ್ಶಿ.'
        : 'Essential handbook on cooperative principles, leadership, and startup pathways designed to empower the next generation of cooperators.',
      link: 'https://www.souharda.coop/study.html',
      fileSize: 'PDF Resource',
      type: 'Official Guide',
    },
    {
      id: 4,
      badge: locale === 'kn' ? 'ಸುತ್ತೋಲೆಗಳು' : 'CIRCULARS',
      title: locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ನಿರ್ದೇಶನಗಳು' : 'E-Stamping Circulars & Regulatory Guidelines',
      description: locale === 'kn'
        ? 'ಕರ್ನಾಟಕ ಸರ್ಕಾರ ಮತ್ತು ಸ್ಟಾಕ್ ಹೋಲ್ಡಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ (SHCIL) ಹೊರಡಿಸಿದ ಎಲ್ಲಾ ಅಧಿಕೃತ ಸುತ್ತೋಲೆಗಳು.'
        : 'Consolidated government orders, district-wise operational protocols, and stamp duty updates issued by SHCIL.',
      link: 'https://souharda.coop/download/Act%20English.pdf',
      fileSize: '1.8 MB',
      type: 'PDF Collection',
    },
  ];

  return (
    <section id="study-material" className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="w-full space-y-10">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden bg-slate-100 p-2 border border-slate-200">
              <Image
                src="/images/Services/Digital_Inteligence.webp"
                alt="Study Materials & Handbooks"
                width={500}
                height={375}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1d61ff] text-[11px] font-bold tracking-wider uppercase border border-blue-100">
                {locale === 'kn' ? 'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಮಾರ್ಗದರ್ಶಿ ಪುಸ್ತಕಗಳು' : 'OFFICIAL KNOWLEDGE & HANDBOOKS'}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight uppercase font-serif">
                {locale === 'kn' 
                  ? 'ಅಧ್ಯಯನ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಕೈಪಿಡಿಗಳು' 
                  : 'STUDY MATERIALS & REGULATORY GUIDES'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಸೌಹಾರ್ದ ಸಹಕಾರ ಸಂಘಗಳ ದೈನಂದಿನ ಕಾರ್ಯಾಚರಣೆ, ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಾಯ್ದೆ, ನಿಯಮಾವಳಿಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಕಾಯ್ದೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಅಧಿಕೃತ ಅಧ್ಯಯನ ಪುಸ್ತಕಗಳು.'
                  : 'Comprehensive repository of official handbooks, e-stamping operational guides, legal acts, and regulatory frameworks curated specifically for Souharda Cooperatives across Karnataka.'}
              </p>
            </div>

            {/* Purpose Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/60 p-3.5 rounded-r-xl">
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold">
                  {locale === 'kn' ? 'ಉದ್ದೇಶ:' : 'Purpose:'}
                </strong>{' '}
                {locale === 'kn'
                  ? 'ಸಹಕಾರ ಸಂಘಗಳ ದೈನಂದಿನ ನಿರ್ವಹಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸಲು ಪರಿಶೀಲಿಸಿದ ಉಲ್ಲೇಖ ಪುಸ್ತಕಗಳು, ಕಾರ್ಯಾಚರಣೆಯ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ಕಾನೂನು ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಒದಗಿಸುವುದು.'
                  : 'To provide verified reference handbooks, operational circulars, and legal compliance guides designed to streamline day-to-day cooperative management.'}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                <span className="block text-lg font-black text-[#0a192f]">100%</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                  {locale === 'kn' ? 'ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗದರ್ಶಿ' : 'Verified Guides'}
                </span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                <span className="block text-lg font-black text-[#0a192f]">4+</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                  {locale === 'kn' ? 'ಮುಖ್ಯ ದಾಖಲೆಗಳು' : 'Core Documents'}
                </span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                <span className="block text-lg font-black text-[#0a192f]">FREE</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                  {locale === 'kn' ? 'ಉಚಿತ ಪಿಡಿಎಫ್' : 'PDF Access'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="pt-6 space-y-3 w-full">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d61ff]">
            {locale === 'kn' ? 'ಲಭ್ಯವಿರುವ ಅಧ್ಯಯನ ಪುಸ್ತಕಗಳು' : 'AVAILABLE DOCUMENTS & PUBLICATIONS'}
          </h3>

          <div className="bg-white rounded-2xl space-y-2 w-full">
            {MATERIALS.map((item, index) => (
              <div 
                key={item.id} 
                className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white hover:bg-slate-50/80 transition-colors w-full rounded-xl border border-slate-100 hover:border-slate-200"
              >
                {/* Left: Serial Number + Icon + Details */}
                <div className="flex items-start sm:items-center gap-3.5 flex-1">
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-lg px-2.5 py-1 min-w-[32px] text-center shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="p-2 bg-red-50 text-red-600 rounded-xl shrink-0 flex items-center justify-center w-10 h-10 border border-red-100">
                    <Image
                      src="/images/pdf.png"
                      alt="PDF Document"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-[#1d61ff] hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>

                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/60 text-[10px] font-bold tracking-wider uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.description}
                    </p>

                  <div className="text-[10px] font-medium text-slate-400 pt-0.5">
  {item.type} • {item.fileSize}
</div>
                  </div>
                </div>

                {/* Right: Download CTA Button */}
                <div className="shrink-0 w-full sm:w-auto text-right">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-100/80 hover:bg-amber-200/90 text-amber-950 border border-amber-300/60 font-bold text-xs transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-900" />
                    <span>{locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್ / ವೀಕ್ಷಿಸಿ' : 'View / Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 4. SOFTWARE & TECHNICAL SUPPORT
// ==========================================
function SoftwareSupportSection() {
  const { locale } = useLanguage();
  const [techTab, setTechTab] = useState<'software' | 'hardware' | 'faq'>('software');

  const CARDS = [
    {
      id: 1,
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      titleKn: 'ಕ್ಯಾರ್ಟ್ರಿಡ್ಜ್ ದರ ಪಟ್ಟಿ',
      titleEn: 'Price of Cartridge Specification',
      descKn: 'ಸಹಕಾರ ಸಂಘಗಳ ಪ್ರಿಂಟರ್ ಕ್ಯಾರ್ಟ್ರಿಡ್ಜ್ ನಿಯಮಗಳು, ದರಗಳು ಹಾಗೂ ಕೊಡುಗಡೆ ಮಾರ್ಗದರ್ಶಿ.',
      descEn: 'Official price list, specs, and procurement guidelines for printer cartridges.',
      link: 'https://souharda.coop/pdf/price_of_cartridge.pdf',
      actionText: locale === 'kn' ? 'ದರ ಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ' : 'View Price List',
    },
    {
      id: 2,
      icon: <BookOpen className="w-5 h-5 text-white" />,
      titleKn: 'ಇ-ಸ್ಟ್ಯಾಂಪ್ ಕಾರ್ಯಾಚರಣೆ ಕೈಪಿಡಿ',
      titleEn: 'e-Stamp Operations Manual',
      descKn: 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಾರ್ಯಾಚರಣೆ, ಶಾಸನಬದ್ಧ ನಿಯಮಾವಳಿ ಮತ್ತು ನಿರ್ವಹಣಾ ಗ್ರಂಥ.',
      descEn: 'Comprehensive e-stamping operation handbook and statutory rules.',
      link: 'https://souharda.coop/pdf/e_stamp_kaipidi.pdf',
      actionText: locale === 'kn' ? 'ಕೈಪಿಡಿ ತೆರೆಯಿರಿ' : 'Open Handbook',
    },
    {
      id: 3,
      icon: <Settings className="w-5 h-5 text-white" />,
      titleKn: 'PCP ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಮಾರ್ಗದರ್ಶಿ',
      titleEn: 'PCP Setup & Installation Guide',
      descKn: 'ಪ್ರಿಂಟ್ ಕಂಟ್ರೋಲ್ ಪ್ರಾಕ್ಸಿ (PCP) ಸಾಫ್ಟ್‌ವೇರ್ ಅನುಸ್ಥಾಪನೆಗೆ ಹಂತ-ಹಂತದ ತಾಂತ್ರಿಕ ಕೈಪಿಡಿ.',
      descEn: 'Step-by-step technical documentation for configuring PCP proxy software.',
      link: 'https://souharda.coop/pdf/pcp_installation_process.pdf',
      actionText: locale === 'kn' ? 'ಮಾರ್ಗದರ್ಶಿ ವೀಕ್ಷಿಸಿ' : 'View Setup Guide',
    },
    {
      id: 4,
      icon: <Monitor className="w-5 h-5 text-white" />,
      titleKn: 'PCP ಇನ್‌‌ಸ್ಟಾಲೇಶನ್ ಸಾಫ್ಟ್‌ವೇರ್',
      titleEn: 'Download PCP Utility Software',
      descKn: 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಪ್ರಿಂಟರ್ ಸಂಪರ್ಕಕ್ಕಾಗಿ ಅಗತ್ಯವಿರುವ ಪ್ರಾಕ್ಸಿ ಸಿಸ್ಟಮ್ ಅನುಸ್ಥಾಪನಾ ಫೈಲ್.',
      descEn: 'Essential setup executable package required for Print Control Proxy connection.',
      link: 'https://souharda.coop/download/PCP_Setup.exe',
      actionText: locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಡೌನ್‌ಲೋಡ್' : 'Download Executable',
    },
    {
      id: 5,
      icon: <FaqIcon className="w-5 h-5 text-white" />,
      titleKn: 'PCP ಸಾಮಾನ್ಯ ದೋಷ ನಿವಾರಣೆ (FAQ)',
      titleEn: 'PCP Troubleshooting & FAQ Guide',
      descKn: 'PCP ತಂತ್ರಾಂಶ ಚಾಲನೆಯಲ್ಲಿ ಬರುವ ಸಾಮಾನ್ಯ ತಾಂತ್ರಿಕ ದೋಷಗಳು ಹಾಗೂ ಕ್ಷಿಪ್ರ ಪರಿಹಾರಗಳು.',
      descEn: 'Frequently asked questions, system requirements, error codes, and quick fixes.',
      link: 'https://souharda.coop/pdf/pcp_faq.pdf',
      actionText: locale === 'kn' ? 'ದೋಷ ನಿವಾರಣೆ ವೀಕ್ಷಿಸಿ' : 'View FAQ Solutions',
    },
  ];

  return (
    <section id="software-support" className="bg-[#334155] pt-12 pb-6 px-3 sm:px-6 lg:px-12 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-3 mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif text-white flex flex-col items-center justify-center">
          <span>
            {locale === 'kn' ? 'ಪ್ರಿಂಟರ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲ' : 'Printer Software & Technical Support'}
          </span>
          <span className="h-1 w-20 bg-amber-400 rounded-full mt-2 inline-block"></span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-sans tracking-wide">
          {locale === 'kn'
            ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಪ್ರಿಂಟರ್ ಸಾಫ್ಟ್‌ವೇರ್, ಅನುಸ್ಥಾಪನ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಕ್ಯಾರ್ಟ್ರಿಡ್ಜ್ ಬೆಲೆಗಳ ವಿವರಣೆ'
            : 'Technical Utilities, PCP Software Setup Manuals, and Hardware Support Resources'}
        </p>

        <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
          <button
            onClick={() => setTechTab('software')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              techTab === 'software'
                ? 'bg-[#f59e0b] text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border border-slate-600'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>{locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ & ಯುಟಿಲಿಟಿ' : 'Software & Utilities'}</span>
          </button>

          <button
            onClick={() => setTechTab('hardware')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              techTab === 'hardware'
                ? 'bg-[#f59e0b] text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border border-slate-600'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>{locale === 'kn' ? 'ಹಾರ್ಡ್‌‌ವೇರ್ & ಪ್ರಿಂಟರ್' : 'Hardware & Cartridges'}</span>
          </button>

          <button
            onClick={() => setTechTab('faq')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              techTab === 'faq'
                ? 'bg-[#f59e0b] text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border border-slate-600'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{locale === 'kn' ? 'ದೋಷ ನಿವಾರಣೆ (FAQ)' : 'Troubleshooting / FAQ'}</span>
          </button>
        </div>
      </div>

      <div className="bg-[#f8fafc] text-slate-900 rounded-t-3xl p-6 sm:p-8 max-w-7xl mx-auto border-t border-slate-100 shadow-2xl">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h3 className="text-base sm:text-lg font-bold text-[#d97706] tracking-tight">
            {locale === 'kn'
              ? 'ತಾಂತ್ರಿಕ ಮೂಲಸೌಕರ್ಯ ಹಾಗೂ ಮಾರ್ಗದರ್ಶಿಗಳು (Software & Infrastructure)'
              : 'Software Utilities & Technical Handbooks (Software & Infrastructure)'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1e293b] text-white shrink-0 shadow-sm">
                    {card.icon}
                  </div>

                  <div className="space-y-0.5 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#1d61ff] transition-colors">
                      {locale === 'kn' ? card.titleKn : card.titleEn}
                    </h4>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      {locale === 'kn' ? card.titleEn : card.titleKn}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {locale === 'kn' ? card.descKn : card.descEn}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d61ff] hover:text-blue-800 transition-colors"
                >
                  <span>{card.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. GST & TAX GUIDANCE
// ==========================================
function GstTaxGuidanceSection() {
  const { locale } = useLanguage();

  const GST_TAX_DOCUMENTS = [
    {
      dotColor: 'bg-blue-500',
      titleKn: 'ಸಹಕಾರ ಸಂಘಗಳಿಗೆ ಜಿಎಸ್‌ಟಿ ಕಾಯ್ದೆ ಪ್ರಮುಖ ವಿವರಣೆ',
      titleEn: 'GST Act Guidelines & Implications for Cooperatives',
      descKn:
        'ಸಹಕಾರ ಸಂಘಗಳ ಸೇವೆಗಳು, ಸದಸ್ಯತ್ವ ಶುಲ್ಕ ಮತ್ತು ವಹಿವಾಟುಗಳ ಮೇಲಿನ ಜಿಎಸ್‌ಟಿ ಅನ್ವಯಿಸುವಿಕೆ ಕುರಿತ ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶಿ.',
      descEn:
        'Comprehensive overview of GST rules, taxable transactions, and membership fee classifications for cooperatives.',
      actionKn: 'ಡೌನ್‌ಲೋಡ್ →',
      actionEn: 'Download PDF →',
      link: 'https://souharda.coop/pdf/gst_guidelines.pdf',
    },
    {
      dotColor: 'bg-purple-400',
      titleKn: 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಮಿಷನ್ ಮೇಲಿನ ಜಿಎಸ್‌ಟಿ ಸುತ್ತೋಲೆ',
      titleEn: 'GST Circular on e-Stamping Commission',
      descKn:
        'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕೌಂಟರ್‌ಗಳಿಂದ ಗಳಿಸುವ ಕಮಿಷನ್ ಆದಾಯದ ಮೇಲಿನ ಜಿಎಸ್‌ಟಿ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ರಿವರ್ಸ್ ಚಾರ್ಜ್ ಮಾರ್ಗಸೂಚಿ.',
      descEn:
        'Official regulatory circular detailing GST treatment and accounting rules on e-stamping commission income.',
      actionKn: 'ಡೌನ್‌ಲೋಡ್ →',
      actionEn: 'Download PDF →',
      link: 'https://souharda.coop/pdf/estamping_gst_circular.pdf',
    },
    {
      dotColor: 'bg-teal-400',
      titleKn: 'ಆರ್‌ಸಿಎಂ (Reverse Charge Mechanism) ಉಲ್ಲೇಖಿತ ಗೈಡ್',
      titleEn: 'Reverse Charge Mechanism (RCM) Reference Guide',
      descKn:
        'ಸಹಕಾರ ಸಂಘಗಳು ಆರ್‌ಸಿಎಂ ಅಡಿಯಲ್ಲಿ ತೆರಿಗೆ ಪಾವತಿಸಬೇಕಾದ ಸೇವೆಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ನಿಯಮಗಳ ಸಂಗ್ರಹ.',
      descEn:
        'Detailed statutory reference on applicable services, thresholds, and compliance workflows under RCM.',
      actionKn: 'ಡೌನ್‌ಲೋಡ್ →',
      actionEn: 'Download PDF →',
      link: 'https://souharda.coop/pdf/rcm_guide.pdf',
    },
    {
      dotColor: 'bg-amber-400',
      titleKn: 'ಜಿಎಸ್‌ಟಿ ವಾರ್ಷಿಕ ರಿಟರ್ನ್ಸ್ ಮತ್ತು ಆಡಿಟ್ ಪರಿಶೀಲನಾಪಟ್ಟಿ',
      titleEn: 'GST Annual Return & Audit Compliance Checklist',
      descKn:
        'ವಾರ್ಷಿಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಹಾಗೂ ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ ಸಲ್ಲಿಕೆಗೆ ಅಗತ್ಯವಿರುವ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ದಾಖಲೆ ಮಾರ್ಗದರ್ಶಿ.',
      descEn:
        'Essential checklist and document preparation guide for filing annual GST returns and completing statutory audits.',
      actionKn: 'ಡೌನ್‌ಲೋಡ್ →',
      actionEn: 'Download PDF →',
      link: 'https://souharda.coop/pdf/gst_audit_checklist.pdf',
    },
  ];

  return (
    <section
      id="tax-guidance"
      className="py-16 px-4 sm:px-6 lg:px-12 relative border-b border-slate-200 overflow-hidden bg-[#f8fafc]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#1d61ff] border border-blue-200/80 text-xs font-bold tracking-wide shadow-2xs">
              {locale === 'kn'
                ? 'ಶಾಸನಬದ್ಧ ತೆರಿಗೆ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ಮಾಹಿತಿ'
                : 'Statutory GST & Tax Downloads'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
            {locale === 'kn' ? (
              <>
                ಸಂಘಗಳಿಗೆ <span className="text-[#0284c7]">ಜಿಎಸ್‌ಟಿ ಮಾರ್ಗದರ್ಶಿ</span> ಹಾಗೂ ಸುತ್ತೋಲೆಗಳು
              </>
            ) : (
              <>
                GST Directives & <span className="text-[#0284c7]">Tax Circulars</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#dc2626] leading-snug">
            {locale === 'kn'
              ? 'ಅಧಿಕೃತ ಜಿಎಸ್‌ಟಿ ಮಾರ್ಗಸೂಚಿಗಳು, ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಮಿಷನ್ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಆಡಿಟ್ ದಾಖಲೆಗಳು.'
              : 'Official GST circulars, e-stamping commission directives, RCM rules, and audit compliance handbooks.'}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            {locale === 'kn'
              ? 'ಸೌಹಾರ್ದ ಸಹಕಾರ ಸಂಘಗಳ ದೈನಂದಿನ ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆ, ಕಮಿಷನ್ ಜಿಎಸ್‌ಟಿ ಸಲ್ಲಿಕೆ ಮತ್ತು ವಾರ್ಷಿಕ ಆಡಿಟ್‌ಗಾಗಿ ಅಗತ್ಯವಿರುವ ನಾಲ್ಕು ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ಇಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ.'
              : 'Download verified GST compliance guidelines, e-stamping tax circulars, RCM reference manuals, and audit filing checklists directly to ensure full regulatory compliance.'}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7">
          <div className="bg-[#0f172a] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-5 relative">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>
                  {locale === 'kn'
                    ? 'ಜಿಎಸ್‌ಟಿ ಮತ್ತು ತೆರಿಗೆ ಪ್ರಕಟಣೆಗಳು (4)'
                    : 'GST Official Downloads (4)'}
                </span>
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            </div>

            <div className="space-y-3.5">
              {GST_TAX_DOCUMENTS.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-[#1e293b]/90 hover:bg-[#1e293b] rounded-2xl p-4 sm:p-4.5 border border-slate-700/60 transition-all duration-200 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <span className={`w-2.5 h-2.5 rounded-full ${doc.dotColor} shrink-0`}></span>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate group-hover:text-amber-400 transition-colors">
                          {locale === 'kn' ? doc.titleKn : doc.titleEn}
                        </h4>
                      </div>

                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0 flex items-center gap-1 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1 rounded-lg border border-amber-400/30"
                      >
                        <span>{locale === 'kn' ? doc.actionKn : doc.actionEn}</span>
                      </a>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pl-5">
                      {locale === 'kn' ? doc.descKn : doc.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 6. VIDEO DEMOS & TUTORIALS
// ==========================================
function VideoDemosSection() {
  const { locale } = useLanguage();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

// Helper to extract YouTube Video ID and return thumbnail URL
const getYouTubeThumbnail = (embedUrl: string) => {
  const videoId = embedUrl.split('/embed/')[1]?.split('?')[0];
  return videoId 
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` 
    : '/images/Services/Digital_Inteligence.webp'; // Fallback image
};

const VIDEOS = [
  {
    id: 1,
    title: locale === 'kn' ? 'HP PS ಡ್ರೈವರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಮಾರ್ಗದರ್ಶಿ' : 'HP PS Driver Installation',
    duration: '05:30',
    badge: locale === 'kn' ? 'ತಾಂತ್ರಿಕ' : 'DRIVER',
    description: locale === 'kn' ? 'HP ಪೋಸ್ಟ್‌ಸ್ಕ್ರಿಪ್ಟ್ ಪ್ರಿಂಟರ್ ಡ್ರೈವರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಹಂತಗಳು.' : 'Step-by-step guide for HP PostScript driver setup.',
    embedUrl: 'https://www.youtube.com/embed/bYYr7zTDzR4?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/bYYr7zTDzR4/hqdefault.jpg',
  },
  {
    id: 2,
    title: locale === 'kn' ? 'ಸ್ಯಾಮ್‌ಸಂಗ್ PS ಡ್ರೈವರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್' : 'Samsung PS Driver Installation',
    duration: '06:15',
    badge: locale === 'kn' ? 'ತಾಂತ್ರಿಕ' : 'DRIVER',
    description: locale === 'kn' ? 'ಸ್ಯಾಮ್‌ಸಂಗ್ ಪ್ರಿಂಟರ್ ಡ್ರೈವರ್ ಕಾನ್ಫಿಗರೇಶನ್ ಮಾರ್ಗದರ್ಶಿ.' : 'Configuration and installation steps for Samsung printers.',
    embedUrl: 'https://www.youtube.com/embed/1KfUE04lxeY?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/1KfUE04lxeY/hqdefault.jpg',
  },
  {
    id: 3,
    title: locale === 'kn' ? 'ಗೂಗಲ್ ಕ್ರೋಮ್ ಆವೃತ್ತಿ ಪರಿಶೀಲಿಸುವುದು ಹೇಗೆ' : 'How to Find Google Chrome Version',
    duration: '02:45',
    badge: locale === 'kn' ? 'ಬ್ರೌಸರ್' : 'BROWSER',
    description: locale === 'kn' ? 'ನಿಮ್ಮ ಬ್ರೌಸರ್ ಆವೃತ್ತಿಯನ್ನು ಸುಲಭವಾಗಿ ಪರಿಶೀಲಿಸಿ.' : 'How to check and verify your current browser build.',
    embedUrl: 'https://www.youtube.com/embed/QfLrYlTeQcU?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/QfLrYlTeQcU/hqdefault.jpg',
  },
  {
    id: 4,
    title: locale === 'kn' ? 'ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ ಆವೃತ್ತಿ ಪರಿಶೀಲಿಸುವುದು' : 'How to Check Operating System Version',
    duration: '03:20',
    badge: locale === 'kn' ? 'ಸಿಸ್ಟಮ್' : 'SYSTEM',
    description: locale === 'kn' ? 'ವಿಂಡೋಸ್ OS ವಿವರಗಳು ಮತ್ತು ಬಿಲ್ಡ್ ಸಂಖ್ಯೆ ವೀಕ್ಷಣೆ.' : 'Locating Windows specifications and system type.',
    embedUrl: 'https://www.youtube.com/embed/1KfUE04lxeY?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/1KfUE04lxeY/hqdefault.jpg',
  },
  {
    id: 5,
    title: locale === 'kn' ? 'PCP ಇನ್‌ಸ್ಟಾಲೇಶನ್ ವಿಧಾನ' : 'PCP Installation Procedure',
    duration: '08:10',
    badge: locale === 'kn' ? 'ಅನುಸ್ಥಾಪನೆ' : 'SETUP',
    description: locale === 'kn' ? 'PCP ಪ್ರಿಂಟಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್ ಸಂಪೂರ್ಣ ಇನ್‌ಸ್ಟಾಲೇಶನ್.' : 'Complete installation walkthrough for PCP software.',
    embedUrl: 'https://www.youtube.com/embed/0iDFHSHv0mk?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/0iDFHSHv0mk/hqdefault.jpg',
  },
  {
    id: 6,
    title: locale === 'kn' ? 'ಪೋಸ್ಟ್‌ ಸ್ಕ್ರಿಪ್ಟ್ ಲೆವೆಲ್ 3 ಸಟಪ್' : 'Post Script Level 3',
    duration: '04:50',
    badge: locale === 'kn' ? 'ಕಾನ್ಫಿಗರೇಶನ್' : 'CONFIG',
    description: locale === 'kn' ? 'ಪ್ರಿಂಟರ್ ಪ್ರೊಟೊಕಾಲ್ ಮತ್ತು ಲೆವೆಲ್ 3 ಸೆಟ್ಟಿಂಗ್ಸ್.' : 'Setting up PostScript Level 3 printer protocols.',
    embedUrl: 'https://www.youtube.com/embed/gvMjdfJUo1A?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/gvMjdfJUo1A/hqdefault.jpg',
  },
  {
    id: 7,
    title: locale === 'kn' ? 'PCP ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು' : 'Uninstall PCP',
    duration: '03:15',
    badge: locale === 'kn' ? 'ತೆಗೆದುಹಾಕು' : 'UNINSTALL',
    description: locale === 'kn' ? 'PCP ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆದುಹಾಕುವುದು.' : 'Safe removal and uninstallation of PCP application.',
    embedUrl: 'https://www.youtube.com/embed/a89J9F_HpOE?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/a89J9F_HpOE/hqdefault.jpg',
  },
];
  return (
    <section id="video-demos" className="py-16 px-4 sm:px-6 lg:px-12 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
            <Video className="w-3.5 h-3.5" />
            {locale === 'kn' ? 'ವೀಡಿಯೊ ತರಬೇತಿ ಮಾರ್ಗದರ್ಶಿ' : 'VIDEO TRAINING & DEMOS'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-serif tracking-tight">
            {locale === 'kn' ? 'ತಾಂತ್ರಿಕ ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು' : 'Technical Video Tutorials'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {locale === 'kn'
              ? 'ಪ್ರಿಂಟರ್ ಸೆಟಪ್, ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಲಾಗಿನ್ ಮತ್ತು ತಾಂತ್ರಿಕ ಪ್ರಕ್ರಿಯೆಗಳ ಪ್ರತ್ಯಕ್ಷ ಮಾರ್ಗದರ್ಶನ.'
              : 'Step-by-step visual walk-throughs for system setup, printing workflows, and token setups.'}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.map((vid) => (
            <div
              key={vid.id}
              className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/60 hover:border-amber-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideoUrl(vid.embedUrl)}
                      className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Play video"
                    >
                      <PlayCircle className="w-7 h-7 fill-slate-950 text-amber-500" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-slate-900/90 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-slate-700 text-amber-400 uppercase">
                    {vid.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveVideoUrl(vid.embedUrl)}
                  className="w-full py-2 bg-slate-700/50 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>{locale === 'kn' ? 'ವೀಡಿಯೊ ವೀಕ್ಷಿಸಿ' : 'Watch Video'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src={activeVideoUrl}
                title="Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

