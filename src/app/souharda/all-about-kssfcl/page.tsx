'use client';

import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'training' | 'supervision' | 'contact' | 'law';

interface DivisionalOffice {
  name: string;
  image: string;
  description: string;
}

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

  // Divisional Offices Data
  const divisionalOffices: DivisionalOffice[] = [
    {
      name: 'Bengaluru',
      image: '/Divisional_Offices/Bengaluru_office.webp',
      description: 'Leading the digital cooperative wave in the capital region with expert regulatory oversight.'
    },
    {
      name: 'Belagavi',
      image: '/Divisional_Offices/Belagavi_office.webp',
      description: "Nurturing the strong rural cooperative movement across North Karnataka's heartland."
    },
    {
      name: 'Mysuru',
      image: '/Divisional_Offices/Mysuru_office.webp',
      description: 'Preserving cooperative integrity while promoting education in the Southern & Coastal belts.'
    },
    {
      name: 'Kalaburagi',
      image: '/Divisional_Offices/Kalburgi_office.webp',
      description: 'Driving inclusive growth and social harmony through the Souharda model in East Karnataka.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      
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
        className="py-16 md:py-24 bg-white border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image 
                  src="/images/home/AllAboutKSSFCL_Intro.webp"
                  alt="KSSFCL Intro" 
                  width={600} 
                  height={450} 
                  unoptimized
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#2B3E6B] tracking-widest uppercase bg-slate-100 px-3 py-1 rounded-full">
                Empowering Karnataka’s New Generation of Cooperatives
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C68A16] uppercase tracking-tight leading-tight">
                Souharda: Harmony in Cooperation
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Based in Bengaluru, the capital city of Karnataka, KSSFCL is the regulatory and apex body for cooperatives registered under the <strong>Karnataka Souharda Sahakari Act, 1997</strong>. Unlike traditional cooperatives, &quot;Souharda&quot; cooperatives are designed to be more autonomous, self-reliant, and self-regulated.
              </p>

              <div className="p-4 bg-amber-50/60 border-l-4 border-[#C68A16] rounded-r-xl">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Purpose:</strong> It acts as a statutory body to oversee, promote, and protect the interests of Souharda cooperatives in Karnataka. Membership is mandatory for any cooperative registered under the 1997 Act.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-center">
                  <span className="block text-lg sm:text-2xl font-black text-[#2B3E6B]">6,100+</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase">Cooperatives</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-center">
                  <span className="block text-lg sm:text-2xl font-black text-[#2B3E6B]">₹77k Cr+</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase">Turnover</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-center">
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
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
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
                    ಸಂಪರ್ಕ ಮತ್ತು ನಿಧಿ ನಿರ್ವಹಣೆ (Liason & Fund Management)
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
        className="py-20 bg-slate-50 border-t border-slate-200"
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
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-[#C68A16] relative flex flex-col justify-between"
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
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 hover:border-[#2B3E6B] transition-all flex flex-col justify-between"
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
          <motion.div variants={fadeInUp} className="bg-amber-500/10 border border-amber-300 rounded-2xl p-5 flex items-start sm:items-center gap-4">
            <Info className="w-8 h-8 text-[#C68A16] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong>ಗಮನಿಸಿ (Note):</strong> ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ 1997ರ ಅಡಿಯಲ್ಲಿ ನೊಂದಾಯಿತವಾಗುವ ಎಲ್ಲಾ ಸಹಕಾರಿಗಳು ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ (Federal Cooperative) ಸದಸ್ಯತ್ವ ಪಡೆಯುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- 5. DIVISIONAL OFFICES ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-20 bg-white border-t border-slate-200"
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
            {divisionalOffices.map((office, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={office.image}
                      alt={office.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#C68A16] transition-colors">
                      {office.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {office.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#2B3E6B] hover:text-[#C68A16] transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}