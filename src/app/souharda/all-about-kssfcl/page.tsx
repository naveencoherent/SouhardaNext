'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { 
  GraduationCap, 
  ShieldCheck, 
  Network, 
  Gavel, 
  Users, 
  BookOpen, 
  BarChart3, 
  Handshake, 
  UserCheck, 
  TrendingUp, 
  Rocket, 
  Wallet, 
  FileCheck, 
  RefreshCw, 
  Building2, 
  Info,
  FileText,
  Download,
  ExternalLink,
  AlertCircle,
  Search,
  Eye,
  X,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  FolderOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'training' | 'supervision' | 'contact' | 'law';

interface DivisionalOffice {
  name: string;
  slug: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

interface SubDocument {
  label: string;
  url: string;
}

interface GBMGroup {
  id: string;
  title: string;
  year: string;
  subDocs: SubDocument[];
}

// Set to 'true' once PDFs are stored locally under public/documents/gbm/
const USE_LOCAL_PDFS = false;

const PDF_HOST_BASE = USE_LOCAL_PDFS 
  ? '/documents/gbm' 
  : 'https://www.souharda.coop/GBM';

const getPdfUrl = (meetingFolder: string, fileName: string) => {
  return `${PDF_HOST_BASE}/${meetingFolder}/${fileName}`;
};

// Complete official document repository (25th down to 12th)
const GBM_GROUPS: GBMGroup[] = [
  {
    id: '25th',
    title: '25th General Body Meeting (25ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2025',
    subDocs: [
      { label: '1. 25ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆಯ ವರದಿ (25th GB Book)', url: getPdfUrl('25thGB/pdf', '25th_GB_Book.pdf') },
      { label: '2. Paper Notification', url: getPdfUrl('25thGB/pdf', 'Paper_Notification.pdf') },
      { label: '3. Eligible Member List', url: getPdfUrl('25thGB/pdf', 'Eligible_Member_list.pdf') }
    ]
  },
  {
    id: '24th',
    title: '24th General Body Meeting (24ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2024',
    subDocs: [
      { label: '1. 24ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆಯ ವರದಿ (24th GB Minutes)', url: getPdfUrl('24thGB/pdf', 'KSSFCL_24th_GB_Minutes.pdf') },
      { label: '2. Paper Notification', url: getPdfUrl('24thGB/pdf', 'Paper_Notification.pdf') },
      { label: '3. Eligible Member List', url: getPdfUrl('24thGB/pdf', '3.%20Eligible%20Member%20list.pdf') }
    ]
  },
  {
    id: '23rd',
    title: '23rd General Body Meeting (23ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2023',
    subDocs: [
      { label: '1. 23rd General Body Meeting Book', url: getPdfUrl('23rdGBM/pdf', '23rd_GB_Book.pdf') },
      { label: '2. Eligible Souharda List For GB', url: getPdfUrl('23rdGBM/pdf', 'Eligible_List.pdf') }
    ]
  },
  {
    id: '22nd',
    title: '22nd General Body Meeting (22ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2022',
    subDocs: [
      { label: '1. 22nd GB Book', url: getPdfUrl('22ndGBM/pdf', '22nd_GB_BOOK.pdf') },
      { label: '2. Eligible Souharda List For GB', url: getPdfUrl('22ndGBM/pdf', 'Eligible_Souharda_List.pdf') },
      { label: '3. Eligible Souharda List 2 For GB', url: getPdfUrl('22ndGBM/pdf', 'Eligible_Souharda_List_2.pdf') }
    ]
  },
  {
    id: '21st',
    title: '21st General Body Meeting (21ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2021',
    subDocs: [
      { label: '1. 21st GB Book & Report', url: getPdfUrl('21stGBM/pdf', '21st_GB_Book.pdf') },
      { label: '2. Eligible Member List', url: getPdfUrl('21stGBM/pdf', 'Eligible_Members.pdf') }
    ]
  },
  {
    id: '20th',
    title: '20th General Body Meeting (20ನೇ ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆ)',
    year: '2020',
    subDocs: [
      { label: '1. 20th GB Proceedings & Book', url: getPdfUrl('20thGBM/PDF', '20th_GB_Book.pdf') },
      { label: '2. Eligible Members For GB', url: getPdfUrl('20thGBM/PDF', 'Eligible_Members_For_GB.pdf') },
      { label: '3. Delegate Form', url: getPdfUrl('20thGBM/PDF', 'Delegate_form.pdf') }
    ]
  },
  {
    id: '19th',
    title: '19th General Body Meeting',
    year: '2019',
    subDocs: [
      { label: '1. 19th General Body Meeting Book', url: getPdfUrl('19thGBM/PDF', '19th_GB_Book.pdf') }
    ]
  },
  {
    id: '18th',
    title: '18th General Body Meeting',
    year: '2018',
    subDocs: [
      { label: '1. 18th General Body Meeting Book', url: getPdfUrl('18thGBM/PDF', '18th_GB_Book.pdf') }
    ]
  },
  {
    id: '17th',
    title: '17th General Body Meeting',
    year: '2017',
    subDocs: [
      { label: '1. 17th General Body Meeting Book', url: getPdfUrl('17thGBM/PDF', '17th_GB_Book.pdf') }
    ]
  },
  {
    id: '16th',
    title: '16th General Body Meeting',
    year: '2016',
    subDocs: [
      { label: '1. 16th General Body Meeting Book', url: getPdfUrl('16thGBM/PDF', '16th_GB_Book.pdf') }
    ]
  },
  {
    id: '15th',
    title: '15th General Body Meeting',
    year: '2015',
    subDocs: [
      { label: '1. 15th General Body Meeting Book', url: getPdfUrl('15thGBM/PDF', '15th_GB_Book.pdf') }
    ]
  },
  {
    id: '14th',
    title: '14th General Body Meeting',
    year: '2014',
    subDocs: [
      { label: '1. 14th General Body Meeting Book', url: getPdfUrl('14thGBM/PDF', '14th_GB_Book.pdf') }
    ]
  },
  {
    id: '13th-proc',
    title: '13th GB Proceedings',
    year: '2013',
    subDocs: [
      { label: '1. 13th GB Proceedings Document', url: getPdfUrl('13thGBM/PDF', '13th_GB_Proceedings.pdf') }
    ]
  },
  {
    id: '13th-agm',
    title: '13th Annual General Body Meeting',
    year: '2013',
    subDocs: [
      { label: '1. 13th Annual General Body Meeting Book', url: getPdfUrl('13thGBM/PDF', '13th_AGM_Book.pdf') }
    ]
  },
  {
    id: '12th-proc',
    title: '12th GB Proceedings',
    year: '2012',
    subDocs: [
      { label: '1. 12th GB Proceedings Document', url: getPdfUrl('12thGBM/PDF', '12th_GB_Proceedings.pdf') }
    ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

export default function AllAboutKSSFCLPage() {
  const [activeTab, setActiveTab] = useState<TabType>('training');

  // Document Hub States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroupModal, setActiveGroupModal] = useState<GBMGroup | null>(null);
  const [activePdfModal, setActivePdfModal] = useState<{ title: string; url: string } | null>(null);

  const divisionalOffices: DivisionalOffice[] = [
    {
      name: 'Bengaluru',
      slug: 'bengaluru',
      image: '/images/divOffice/bangaluru.webp',
      address: '“Souharda Sahakari Soudha”, No.68, Ground Floor, Between 17th & 18th Cross, Margosa Road, Malleswaram, Bengaluru - 560 055',
      phone: '080-23525546',
      email: 'bgudo@souharda.coop'
    },
    {
      name: 'Belagavi',
      slug: 'belagavi',
      image: '/images/divOffice/belagaavi.webp',
      address: '#1119/B, Industrial Area, Autonagar, Belagavi - 590016',
      phone: '0831-2401551',
      email: 'dobgm@souharda.coop'
    },
    {
      name: 'Mysuru',
      slug: 'mysuru',
      image: '/images/divOffice/mysuru.webp',
      address: 'F-13, Shankara Matha Road, Khille Mohalla, Mysuru - 570004',
      phone: '0821-2332299',
      email: 'domysuru@souharda.coop'
    },
    {
      name: 'Kalaburagi',
      slug: 'kalaburagi',
      image: '/images/divOffice/Kalburgi.webp',
      address: 'Site No: 2284, Near CADA, Dhariyapur Kotanur, Kalaburagi - 585102',
      phone: '08472-270222',
      email: 'doklb@souharda.coop'
    }
  ];

  // Filtered Groups
  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return GBM_GROUPS.filter((group) => {
      return !q || group.title.toLowerCase().includes(q) || group.year.includes(q);
    });
  }, [searchQuery]);

  return (
    <div 
      className="min-h-screen text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 bg-white relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0'
      }}
    >
      
      {/* ---------------- 1. HERO HEADER ---------------- */}
      <PageHero 
        themeColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About KSSFCL', href: '/about' },
          { label: 'Overview' }
        ]}
        title="ALL ABOUT KSSFCL" 
        subtitle="Empowering Karnataka's New Generation of Autonomous Cooperatives." 
      />

      {/* ---------------- 2. WELCOME / INTRO SECTION ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 md:py-24 border-b border-slate-200/80 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group bg-white">
                <Image 
                  src="/images/home/AllAboutKSSFCL_Intro.webp"
                  alt="KSSFCL Introduction" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#2B3E6B] tracking-widest uppercase bg-white/90 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                Empowering Karnataka’s New Generation of Cooperatives
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C68A16] uppercase tracking-tight leading-tight">
                Souharda: Harmony in Cooperation
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Based in Bengaluru, the capital city of Karnataka, KSSFCL is the regulatory and apex body for cooperatives registered under the <strong>Karnataka Souharda Sahakari Act, 1997</strong>. Unlike traditional cooperatives, &quot;Souharda&quot; cooperatives are designed to be more autonomous, self-reliant, and self-regulated.
              </p>

              <div className="p-4 bg-amber-50/90 border-l-4 border-[#C68A16] rounded-r-xl border border-amber-200/60 shadow-sm backdrop-blur-sm">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Purpose:</strong> It acts as a statutory body to oversee, promote, and protect the interests of Souharda cooperatives in Karnataka. Membership is mandatory for any cooperative registered under the 1997 Act.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg sm:text-2xl font-black text-[#2B3E6B]">6,100+</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase">Cooperatives</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg sm:text-2xl font-black text-[#2B3E6B]">₹77k Cr+</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase">Turnover</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 text-center shadow-sm">
                  <span className="block text-lg sm:text-2xl font-black text-[#2B3E6B]">₹43.7k Cr</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase">Deposits</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ---------------- 3. KEY RESPONSIBILITIES (TABBED SECTION) ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#7A8692] via-[#2C353D] to-[#1A2026] text-white shadow-inner"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          
          <motion.div variants={fadeInUp} className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
              ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಪ್ರಮುಖ ಜವಾಬ್ದಾರಿಗಳು
            </h2>
            <div className="w-20 h-1 bg-[#E5A93C] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Key Responsibilities & Functions of the Federal Cooperative
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div variants={fadeInUp} role="tablist" className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'training' as const, label: 'ತರಬೇತಿ', icon: GraduationCap },
              { id: 'supervision' as const, label: 'ಮೇಲ್ವಿಚಾರಣೆ', icon: ShieldCheck },
              { id: 'contact' as const, label: 'ಸಂಪರ್ಕ & ನಿಧಿ', icon: Network },
              { id: 'law' as const, label: 'ಕಾನೂನು', icon: Gavel },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#E5A93C] text-slate-900 border-[#E5A93C] shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Tab Panes */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/20 min-h-[280px]">
            <AnimatePresence mode="wait">
              {activeTab === 'training' && (
                <motion.div
                  key="training"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-[#C68A16] border-b border-slate-200 pb-3">
                    ತರಬೇತಿ ಮತ್ತು ಪ್ರಚಾರ (Training & Promotion)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಪ್ರವರ್ತನೆ ಮತ್ತು ಸಂಘಟನೆ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸಹಕಾರಿಗಳನ್ನು ಪ್ರವರ್ತಿಸುವುದು, ಸಂಘಟಿಸುವುದು ಹಾಗೂ ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾದರಿ ಉಪವಿಧಿಗಳನ್ನು ರಚಿಸುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಶಿಕ್ಷಣ ಮತ್ತು ತಿಳುವಳಿಕೆ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸಹಕಾರ ತರಬೇತಿ, ಶಿಕ್ಷಣ ಹಾಗೂ ತಿಳುವಳಿಕೆ ನೀಡುವುದು ಮತ್ತು ಸಹಕಾರ ತತ್ವಗಳನ್ನು ಪ್ರಚಾರ ಮಾಡುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಸಂಶೋಧನೆ ಮತ್ತು ಯೋಜನೆ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸಂಶೋಧನೆ ಹಾಗೂ ಮೌಲ್ಯಮಾಪನವನ್ನು ಕೈಗೊಳ್ಳುವುದು ಮತ್ತು ಸದಸ್ಯ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'supervision' && (
                <motion.div
                  key="supervision"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-[#C68A16] border-b border-slate-200 pb-3">
                    ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ನಿಯಂತ್ರಣ (Supervision & Governance)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <Handshake className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಸೌಹಾರ್ದ ಸಂಬಂಧ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ನಡುವೆ ಸೌಹಾರ್ದ ಸಂಬಂಧವನ್ನು ಕಲ್ಪಿಸುವುದು ಮತ್ತು ಸಮನ್ವಯತೆ ಸಾಧಿಸುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ನಿರ್ದೇಶಕರ ನಿಯಂತ್ರಣ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಅರ್ಹತೆ ಕಳೆದುಕೊಂಡ ಅಥವಾ ನಿಯಮ ಉಲ್ಲಂಘಿಸಿದ ಸಹಕಾರಿಯ ನಿರ್ದೇಶಕರನ್ನು ಕಾನೂನುಬದ್ಧವಾಗಿ ತೆಗೆದುಹಾಕುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ವ್ಯವಸ್ಥಾಪನಾ ಅಭಿವೃದ್ಧಿ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸದಸ್ಯ ಸಹಕಾರಿಗಳಿಗೆ ಆಧುನಿಕ ವ್ಯವಸ್ಥಾಪನಾ ಅಭಿವೃದ್ಧಿ ಸೇವೆಗಳನ್ನು ಮತ್ತು ತಾಂತ್ರಿಕ ನೆರವು ಕಲ್ಪಿಸುವುದು.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-[#C68A16] border-b border-slate-200 pb-3">
                    ಸಂಪರ್ಕ ಮತ್ತು ನಿಧಿ ನಿರ್ವಹಣೆ (Liaison & Fund Management)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಹೊಸ ಉದ್ದಿಮೆಗಳು</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಹೊಸ ರೂಪದ ಸಹಕಾರಿ ಉದ್ದಿಮೆಗಳನ್ನು ಉತ್ತೇಜಿಸುವುದು ಮತ್ತು ಯುವ ಪೀಳಿಗೆಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಶಿಕ್ಷಣ ನಿಧಿ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸಹಕಾರಿ ಶಿಕ್ಷಣ ನಿಧಿಯನ್ನು ಸಂಗ್ರಹಿಸಿ, ಅದನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ಅಭಿವೃದ್ಧಿ ಕೆಲಸಗಳಿಗೆ ಬಳಸಿಕೊಳ್ಳುವುದು.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'law' && (
                <motion.div
                  key="law"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-[#C68A16] border-b border-slate-200 pb-3">
                    ಕಾನೂನು ಮತ್ತು ಸಲಹೆ (Legal Advisory & Auditing)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <Gavel className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ವಿಶೇಷ ಸಭೆಗಳು</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ಕಲಂ 30.2 ರಡಿಯಲ್ಲಿ ಸದಸ್ಯರ ಹಿತರಕ್ಷಣೆಗಾಗಿ ವಿಶೇಷ ಸಾಮಾನ್ಯ ಸಭೆಯನ್ನು ನಡೆಸುವುದು.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2.5 rounded-lg bg-[#2B3E6B] text-white shrink-0 h-fit">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900 block mb-1">ಲೆಕ್ಕ ಪರಿಶೋಧನೆ</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">ಅನುಭವಿ ಲೆಕ್ಕ ಪರಿಶೋಧಕರ ಹಾಗೂ ಚಾರ್ಟೆರ್ಡ್ ಅಕೌಂಟೆಂಟರ ಅಧಿಕೃತ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      {/* ---------------- 4. TYPES OF MEMBERSHIP ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-20 border-t border-slate-200/80 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div variants={fadeInUp} className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C68A16] uppercase tracking-tight">
              ಸದಸ್ಯತ್ವದ ವಿಧಗಳು
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Types of membership available under the Karnataka Souharda Sahakari Act, 1997
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Converted */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md border-2 border-[#C68A16] relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#C68A16] flex items-center justify-center">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">ಪರಿವರ್ತಿತ ಸಹಕಾರಿಗಳು</h3>
                  <p className="text-xs font-bold text-[#2B3E6B] tracking-wider uppercase">Converted Cooperatives</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  1959ರ ಕರ್ನಾಟಕ ಸಹಕಾರ ಸಂಘಗಳ ಕಾಯ್ದೆಯಡಿ ಮೊದಲು ನೊಂದಾಯಿತವಾಗಿದ್ದು, ನಂತರ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ 1997ಕ್ಕೆ ಪರಿವರ್ತನೆಯಾದ ಸಹಕಾರಿಗಳು.
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A16]" />
                    <span>ಸರ್ಕಾರದ ಪಾಲು ಬಂಡವಾಳ ಹೊಂದಿರಬಾರದು</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A16]" />
                    <span>ಸ್ವಯಂ ಆಡಳಿತಕ್ಕೆ ಆದ್ಯತೆ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68A16]" />
                    <span>ಸದಸ್ಯರ ಪೂರ್ಣ ನಿಯಂತ್ರಣ</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Newly Registered */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 hover:border-[#2B3E6B] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#2B3E6B] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">ನೇರ ನೊಂದಾಯಿತ ಸಹಕಾರಿಗಳು</h3>
                  <p className="text-xs font-bold text-[#2B3E6B] tracking-wider uppercase">Newly Registered</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ನೇರವಾಗಿ ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ 1997ರ ಅಡಿಯಲ್ಲಿ ಹೊಸದಾಗಿ ನೊಂದಾಯಿಸಲ್ಪಟ್ಟ ನೂತನ ಪೀಳಿಗೆಯ ಸಹಕಾರಿಗಳು.
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B3E6B]" />
                    <span>ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದ ಬಳಕೆ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B3E6B]" />
                    <span>ಸಮಗ್ರ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B3E6B]" />
                    <span>ಸ್ವತಂತ್ರ ಲೆಕ್ಕ ಪರಿಶೋಧನೆ</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </motion.div>

          {/* Info Banner */}
          <motion.div variants={fadeInUp} className="bg-amber-500/10 border border-amber-300/80 rounded-2xl p-5 flex items-start sm:items-center gap-4 backdrop-blur-sm">
            <Info className="w-8 h-8 text-[#C68A16] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong>ಗಮನಿಸಿ (Note):</strong> ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ 1997ರ ಅಡಿಯಲ್ಲಿ ನೊಂದಾಯಿತವಾಗುವ ಎಲ್ಲಾ ಸಹಕಾರಿಗಳು ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ (Federal Cooperative) ಸದಸ್ಯತ್ವ ಪಡೆಯುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.
            </p>
          </motion.div>

        </div>
      </motion.section>
{/* ---------------- 5. GENERAL BODY MEETING (GBM) REPOSITORY ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-20 border-t border-slate-200/80 bg-white relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[11px] font-extrabold text-[#2B3E6B] uppercase tracking-widest bg-blue-50/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-sm inline-block">
              STATUTORY REPOSITORY & RECENT PROCEEDINGS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C68A16] uppercase tracking-tight">
              ಸಾಮಾನ್ಯ ಸಭೆಯ ವರದಿಗಳ ಸಂಗ್ರಹ <span className="text-[#1D61FF]">(GBM Hub)</span>
            </h2>
            <div className="w-16 h-1 bg-[#C68A16] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
              Select any General Body Meeting below to view its complete list of reports, proceedings, notifications, and voter lists.
            </p>
          </motion.div>

          {/* Nudi Engine Helper Banner */}
          <motion.div variants={fadeInUp} className="bg-amber-50/90 border border-amber-300/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-800 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#C68A16] flex-shrink-0" />
              <span>
                <strong>ಕನ್ನಡ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಲು:</strong> ನುಡಿ (Nudi) ತಂತ್ರಾಂಶದ ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ಇಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.
              </span>
            </div>
            <a
              href="https://souharda.coop/nudi.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#C68A16] hover:bg-amber-600 text-white font-bold px-3.5 py-1.5 rounded-lg transition text-xs whitespace-nowrap flex-shrink-0"
            >
              <span>Download Nudi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search meeting by name or year (e.g. 25th, 2024)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white/90 backdrop-blur-md border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D61FF] text-slate-800 transition shadow-sm"
            />
          </motion.div>

          {/* Meeting Cards Grid - Dark Blue Folder Icon on Hover */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div
                  key={group.id}
                  onClick={() => setActiveGroupModal(group)}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-5 hover:border-[#C68A16] hover:shadow-lg transition cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Folder Icon Container - Dark Blue (#001D38) on Hover */}
                    <div className="p-3 rounded-xl bg-amber-50 text-[#C68A16] group-hover:bg-[#001D38] group-hover:text-white transition shrink-0">
                      <FolderOpen className="w-6 h-6" />
                    </div>

                    <div className="space-y-0.5">
                      {/* Year Badge */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#C68A16] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 mb-1">
                        <Calendar className="w-3 h-3 text-[#C68A16]" /> {group.year}
                      </span>

                      {/* Card Title - Electric Blue */}
                      <h3 className="text-sm sm:text-base font-bold text-[#1D61FF] group-hover:text-blue-700 transition leading-snug">
                        {group.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {group.subDocs.length} Related Statutory Documents
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow - Gold Hover Box */}
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-amber-100 text-slate-400 group-hover:text-[#C68A16] transition shrink-0 ml-2">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white/80 rounded-2xl border border-slate-200">
                <p className="text-slate-500 text-sm font-semibold">
                  No matching General Body Meeting found for &quot;{searchQuery}&quot;.
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- 6. DIVISIONAL OFFICES ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-20 border-t border-slate-200/80 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div variants={fadeInUp} className="text-center space-y-2">
            <span className="text-[11px] font-bold text-[#2B3E6B] uppercase tracking-widest block">
              STATEWIDE REGIONAL NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C68A16] uppercase tracking-tight">
              Our Divisional Offices
            </h2>
            <div className="w-16 h-1 bg-[#C68A16] mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisionalOffices.map((office) => (
              <motion.div 
                key={office.slug}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.name} Divisional Office`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 space-y-4">
                    <h3 className="text-xl font-extrabold text-[#001D38] group-hover:text-[#C68A16] transition-colors border-b border-slate-100 pb-2">
                      {office.name}
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-800">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#C68A16] shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800 leading-snug">
                          {office.address}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#2B3E6B] shrink-0" />
                        <span className="font-bold text-[#001D38]">
                          {office.phone}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#2B3E6B] shrink-0" />
                        <a 
                          href={`mailto:${office.email}`} 
                          className="font-semibold text-[#2B3E6B] hover:text-[#C68A16] transition-colors truncate"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

{/* ---------------- SUB-DOCUMENT SELECTION MODAL ---------------- */}
      <AnimatePresence>
        {activeGroupModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden"
            >
              <div className="bg-[#001D38] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-amber-400">
                    {activeGroupModal.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Select a document or paper notification scan to view
                  </p>
                </div>
                <button
                  onClick={() => setActiveGroupModal(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
                {activeGroupModal.subDocs.map((doc, idx) => {
                  const isImage = /\.(jpg|jpeg|png|webp)$/i.test(doc.url);
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-50/50 hover:border-amber-300 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className={`w-5 h-5 shrink-0 ${isImage ? 'text-amber-600' : 'text-red-600'}`} />
                        <span className="text-xs sm:text-sm font-bold text-slate-800">
                          {doc.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          onClick={() => {
                            setActivePdfModal({ title: doc.label, url: doc.url });
                            setActiveGroupModal(null);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2B3E6B] text-white hover:bg-blue-900 transition text-xs font-bold shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{isImage ? 'View Scan' : 'Read Online'}</span>
                        </button>

                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-[#C68A16] hover:bg-amber-500/20 transition text-xs font-bold border border-amber-300/60"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open File</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- HYBRID IN-PAGE VIEWER MODAL (PDF + IMAGE SUPPORT) ---------------- */}
      <AnimatePresence>
        {activePdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#001D38] text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-400">
                      {activePdfModal.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activePdfModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#C68A16] hover:bg-amber-600 text-slate-950 px-3.5 py-1.5 rounded-lg transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open File Direct</span>
                  </a>

                  <button
                    onClick={() => setActivePdfModal(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Frame: Render Image Scan or PDF Frame */}
              <div className="flex-1 bg-slate-900 overflow-auto p-4 flex items-center justify-center relative">
                {/\.(jpg|jpeg|png|webp)$/i.test(activePdfModal.url) ? (
                  /* Image Scan Render */
                  <div className="max-w-full max-h-full flex flex-col items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activePdfModal.url}
                      alt={activePdfModal.title}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg border border-slate-700"
                      onError={(e) => {
                        // Fallback UI if live URL is missing on remote server
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="text-center p-8 bg-slate-800 rounded-xl border border-slate-700 text-slate-300 max-w-md">
                              <p class="text-amber-400 font-bold mb-2">Notice Scan Pending Upload</p>
                              <p class="text-xs text-slate-400">The remote image path is not available on souharda.coop. This file will render automatically once placed in your local <code>public/documents/gbm/</code> directory.</p>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                ) : (
                  /* PDF Document Frame */
                  <iframe
                    src={
                      activePdfModal.url.startsWith('http')
                        ? `https://docs.google.com/gview?url=${encodeURIComponent(activePdfModal.url)}&embedded=true`
                        : activePdfModal.url
                    }
                    className="w-full h-full border-none bg-white"
                    title={activePdfModal.title}
                  />
                )}
              </div>

              {/* Footer */}
              <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
                <span>Karnataka State Souharda Federal Co-operative Ltd.</span>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="font-bold text-slate-700 hover:text-slate-900"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ---------------- IN-PAGE PDF VIEWER MODAL ---------------- */}
      <AnimatePresence>
        {activePdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            >
              <div className="bg-[#001D38] text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-400">
                      {activePdfModal.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activePdfModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#C68A16] hover:bg-amber-600 text-slate-950 px-3.5 py-1.5 rounded-lg transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open in New Tab</span>
                  </a>

                  <button
                    onClick={() => setActivePdfModal(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Frame */}
              <div className="flex-1 bg-slate-100 relative">
                <iframe
                  src={
                    activePdfModal.url.startsWith('http')
                      ? `https://docs.google.com/gview?url=${encodeURIComponent(activePdfModal.url)}&embedded=true`
                      : activePdfModal.url
                  }
                  className="w-full h-full border-none"
                  title={activePdfModal.title}
                />
              </div>

              <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
                <span>Karnataka State Souharda Federal Co-operative Ltd.</span>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="font-bold text-slate-700 hover:text-slate-900"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- IN-PAGE PDF VIEWER MODAL ---------------- */}
      <AnimatePresence>
        {activePdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            >
              <div className="bg-[#001D38] text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-amber-400">
                      {activePdfModal.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activePdfModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#C68A16] hover:bg-amber-600 text-slate-950 px-3.5 py-1.5 rounded-lg transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open in New Tab</span>
                  </a>

                  <button
                    onClick={() => setActivePdfModal(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hybrid Embed Frame */}
              <div className="flex-1 bg-slate-100 relative">
                <iframe
                  src={
                    activePdfModal.url.startsWith('http')
                      ? `https://docs.google.com/gview?url=${encodeURIComponent(activePdfModal.url)}&embedded=true`
                      : activePdfModal.url
                  }
                  className="w-full h-full border-none"
                  title={activePdfModal.title}
                />
              </div>

              <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
                <span>Karnataka State Souharda Federal Co-operative Ltd.</span>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="font-bold text-slate-700 hover:text-slate-900"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}