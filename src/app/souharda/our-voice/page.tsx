'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

interface SahakariMagazineData {
  imageUrl: string;
  monthYear: string;
  linkUrl?: string;
}

export default function OurVoicePage() {
  const [sahakariMagazine, setSahakariMagazine] = useState<SahakariMagazineData>({
    imageUrl: '/souharda/President_Message.webp',
    monthYear: 'Latest Edition',
    linkUrl: '/education/swabhimani-sahakari'
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchSahakariMagazine() {
      try {
        const response = await fetch('/api/sahakari-magazine');
        if (!response.ok) throw new Error('Failed to fetch magazine endpoint');

        const data = await response.json();
        if (isMounted && data.imageUrl) {
          setSahakariMagazine({
            imageUrl: data.imageUrl,
            monthYear: data.monthYear || 'Latest Edition',
            linkUrl: data.linkUrl || '/education/swabhimani-sahakari'
          });
        }
      } catch (err) {
        console.warn('Falling back to default cover image:', err);
      }
    }

    fetchSahakariMagazine();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-slate-50/50 text-slate-800 font-sans"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(226, 232, 240, 0.8) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      
      {/* Hero Header */}
      <PageHero 
        themeColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media & Voice' }
        ]}
        title="OUR VOICE" 
        subtitle="Official leadership messages, monthly publications, and administrative updates." 
      />

      {/* 1. PRESIDENT'S MESSAGE - Dark Gradient Background */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gradient-to-r from-[#0b1e38] via-[#0f284a] to-[#0b1e38] text-white py-16 md:py-20 shadow-xl relative z-10 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image Frame */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-slate-900">
                <Image 
                  src="/souharda/President_Message.webp" 
                  alt="Sri G. Nanjangouda" 
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
            </motion.div>

            {/* Message Text */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-5 border-l-4 border-amber-400 pl-6 lg:pl-8">
              <div>
                <h3 className="text-amber-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  PRESIDENT&apos;S MESSAGE
                </h3>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Sri G. Nanjangouda <span className="text-amber-400 font-normal">| KSSFCL</span>
                </h2>
              </div>

              <p className="text-amber-300 font-semibold text-base sm:text-lg leading-relaxed">
                &ldquo;ಆಡಳಿತ ಮಂಡಳಿಯವರ ಜವಾಬ್ದಾರಿಯುತ ಕಾರ್ಯನಿರ್ವಹಣೆ- ಸಿಬ್ಬಂದಿಯವರ ಶಿಸ್ತು ಬದ್ಧತೆ, ಲಾಭ-ಸೇವೆ ಬಲಿಷ್ಠ ಸಹಕಾರ ಕ್ಷೇತ್ರದ ನಿರ್ಮಾಣ..&rdquo;
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed text-justify">
                <p>
                  ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳು ಲಾಭಗಳಿಸುವ ಜೊತೆಗೆ ಸದಸ್ಯರಿಗೆ ಹೆಚ್ಚಿನ ಸೇವಾ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಗುರಿ ಹೊಂದುವುದು ಹಾಗೂ ಬಲಿಷ್ಠ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದು ಇಂದಿನ ಅಗತ್ಯತೆ.
                </p>
                <p>
                  ಸದಸ್ಯರಿಗೆ ಹಲವು ವಿಧವಾದ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಬಗ್ಗೆ ಚಿಂತಿಸುವಾಗ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಆಡಳಿತ ಮಂಡಳಿಯವರು ತಮ್ಮ ಸಂಸ್ಥೆಯ ಉದ್ದೇಶಗಳನ್ನು, ಸದಸ್ಯರು ಆಶಯಗಳನ್ನು, ಸಹಕಾರಿಯ ಸವಾಲುಗಳನ್ನು, ಸಹಕಾರಿಗೆ ಲಭ್ಯವಿರುವ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸದುಪಯೋಗಪಡಿಸಿಕೊಂಡು, ಸಹಕಾರಿಯ ಅವಕಾಶಗಳನ್ನು ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ವೇಗವನ್ನು ಅರಿತು ಸಂಪೂರ್ಣ ವೃತ್ತಿಪರತೆಯಿಂದ ಹಾಗೂ ಪಾರದರ್ಶಕತೆಯಿಂದ ಕೆಲಸಮಾಡುವುದನ್ನು ರೂಢಿಸಿಕೊಳ್ಳಬೇಕಾಗಿದೆ. ನಮ್ಮ ಸಹಕಾರಿಯ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳ ಬಗ್ಗೆ ಸದಸ್ಯರನ್ನು ನಿರಂತರ ಜಾಗೃತಿಗೊಳಿಸುತ್ತಿರುವ ಕಾರ್ಯ ನಡೆಯಬೇಕು. ಅವರು ನಮ್ಮ ಮಾಲಿಕರು. ಸದಸ್ಯರಿಂದ ಸದಸ್ಯರಿಗಾಗಿ ಸದಸ್ಯರೇ ನಿರ್ವಹಿಸುವ (ಸದಸ್ಯರ ಪರವಾಗಿ ಆಡಳಿತ ಮಂಡಳಿಯವರು ನಿರ್ವಹಿಸುವ) ವ್ಯವಸ್ಥೆಯಿದು ಎಂಬುದು ಆಡಳಿತ ಮಂಡಳಿಯವರ ಗಮನದಲ್ಲಿರಬೇಕು. ಅವರು ವಹಿಸಿಕೊಡುವ ಜವಾಬ್ದಾರಿಯನ್ನು ನಿರ್ವಹಿಸುವುದು ಆಡಳಿತ ಮಂಡಳಿಯವರ ಕರ್ತವ್ಯ. ಆಡಳಿತ ಮಂಡಳಿಯವರು ನೀಡುವ ಜವಾಬ್ದಾರಿಯನ್ನು ನಿರ್ವಹಿಸುವುದು ಸಿಬ್ಬಂದಿಯವರ ಕರ್ತವ್ಯವಾಗಿದೆ.
                </p>
                <p>
                  ಈ ರೀತಿಯ ಯಶಸ್ವಿ ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ನಿರಂತರ ಶಿಕ್ಷಣ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಹಮ್ಮಿಕೊಂಡು ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳು ತಮ್ಮ ಸದಸ್ಯರಿಗೆ ಅಗತ್ಯವೆನಿಸುವ ಎಲ್ಲ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ನಿಟ್ಟಿನಲ್ಲಿ ಪ್ರಯತ್ನಮಾಡುವಿರಾಗಿ ಆಶಿಸುತ್ತೇನೆ. ರಾಜ್ಯದ ಎಲ್ಲ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳು ಕಾನೂನಿನ ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಶಿಸ್ತು ಹಾಗೂ ಬದ್ಧತೆಯಿಂದ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕ್ಷೇತ್ರದ ಬೆಳವಣಿಗೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವಿರಾಗಿ ಆಶಿಸುತ್ತೇನೆ. ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕ್ಷೇತ್ರ ಅತ್ಯಂತ ಉತ್ತಮ ಗುಣಮಟ್ಟವನ್ನು ಹೊಂದಿ ಬೆಳೆಯಬೇಕು. ಅದಕ್ಕಾಗಿ ನೀವು ಬೆಳೆಯಬೇಕು. ನಿಮ್ಮ ಹಾಗೂ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕ್ಷೇತ್ರದ ಬೆಳವಣಿಗೆ ನಮ್ಮ ಆಶಯ. ಬನ್ನಿ ನಾವು ನೀವು ಎಲ್ಲರೂ ಸೇರಿ ಈ ರಥವನ್ನು ಅಭಿವೃದ್ಧಿ ಪಥದಲ್ಲಿ ಸಾಗಿಸೋಣ.
                </p>
              </div>

              <div className="pt-2">
                <p className="font-bold text-amber-400 text-sm sm:text-base">(ಜಿ. ನಂಜನಗೌಡ)</p>
                <p className="text-xs sm:text-sm text-slate-300">ಅಧ್ಯಕ್ಷರು</p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* 2. MANAGING DIRECTOR'S MESSAGE - Pure White Background */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-white py-16 md:py-20 relative z-10 border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-5 border-l-4 border-[#1e4e8c] pl-6 lg:pl-8 order-2 lg:order-1">
              <div>
                <h3 className="text-[#1e4e8c] font-bold uppercase tracking-widest text-xs sm:text-sm">
                  MANAGING DIRECTOR&apos;S MESSAGE
                </h3>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0284c7] mt-1">
                  Sri Sharanagouda G. Patil <span className="text-[#1e4e8c] font-normal">| KSSFCL</span>
                </h2>
              </div>

              {/* Crimson Red Quote */}
              <p className="text-[#dc2626] font-bold text-base sm:text-lg leading-relaxed">
                &ldquo;ಆರ್ಥಿಕ ಶಿಸ್ತು ಹಾಗೂ ವೃತ್ತಿ ನೈಪುಣ್ಯ ಕೌಶಲ್ಯಗಳಿಂದ ವೈವಿಧ್ಯಮಯ ಕಾರ್ಯನಿರ್ವಹಣೆಯೇ ನಮ್ಮ ಅಸ್ತಿತ್ವ ಮತ್ತು ಪ್ರಗತಿಯ ಸಂಕೇತ.&rdquo;
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                <p>
                  ಸದಸ್ಯರಿಗೆ/ಸಾರ್ವಜನಿಕರಿಗೆ ಆರ್ಥಿಕ ಹಾಗೂ ಸಾಮಾಜಿಕ ಅಭಿವೃದ್ಧಿಗೆ ಪೂರಕವಾಗಿ ಸಹಕಾರ ಕ್ಷೇತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾ ಬಂದಿದೆ. ಸರಕಾರದ ಅನೇಕ ಕಾರ್ಯಕ್ರಮಗಳ ನಿರ್ವಹಣೆಯನ್ನು ಸಹಕಾರ ಕ್ಷೇತ್ರ ಸಮರ್ಪಕವಾಗಿ ನಿರ್ವಹಿಸುತಾ ಬಂದಿದೆ ಇದಕ್ಕೆ ಪರ್ಯಾಯವಾದ ವ್ಯವಸ್ಥೆ ಇನ್ನೊಂದಿಲ್ಲ. ಹತ್ತು ಹಲವು ವಿಧವಾದ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳು ಹಲವಾರು ವಿಧವಾದ ಚಟುವಟಿಕೆಗಳು ಈ ಕ್ಷೇತ್ರದಲ್ಲಿದ್ದು, ಸಹಕಾರಿ ಚಳುವಳಿ ಜನರ ಜೀವನ ಪದ್ಧತಿಯಾಗಿದೆ.
                </p>
                
                <p>
                  ಯಾವುದೇ ದೇಶದ ಯಾವುದೇ ಸಂಘ ಸಂಸ್ಥೆಗಳ ಸಂಘಟನೆಗಳ ಸಾಧನೆ, ಪ್ರಗತಿ ಅಭಿವೃದ್ಧಿಗಳಲ್ಲಿ ಮೂರು ವಿಷಯಗಳಿಗೆ ಪ್ರಾಧಾನ್ಯತೆ ನೀಡುವುದು ಅವಶ್ಯಕ.
                </p>

                {/* 3 Key Points - Bold on Separate Lines */}
                <div className="space-y-1.5 my-3 font-bold text-slate-800">
                  <p>ಪ್ರಜೆಗಳ/ ಸಾರ್ವಜನಿಕರ/ ಸದಸ್ಯರ/ ಸಕ್ರಿಯ ಪಾಲುಗಾರಿಕೆ</p>
                  <p>ದಕ್ಷ/ ನಿಷ್ಠಾವಂತ/ ಕ್ರಿಯಾಶೀಲ ಹಾಗೂ ಪ್ರಾಮಾಣಿಕ ಸಿಬ್ಬಂದಿ</p>
                  <p>ಉತ್ತಮ ಪಾರದರ್ಶಕ/ ವೃತ್ತಿಪರ ಹಾಗೂ ದೂರದೃಷ್ಟಿಯುಳ್ಳ ಅನುಭವಿ ಆಡಳಿತ ಮಂಡಳಿ.</p>
                </div>

                <p>
                  ಈ ಎಲ್ಲವನ್ನು ಅರಿತಿರುವ ಹಾಗೂ ಸಮೂಹವನ್ನು ತನ್ನ ಜೊತೆಗೆ ನಡೆಸಿಕೊಂಡು ಹೋಗುವ ಅನುಭವಿ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ನಾಯಕತ್ವದಿಂದ ಮಾತ್ರ ಸಾಧನೆ ಸಾಧ್ಯ ಎಂಬುದು ಎಲ್ಲ ಸಾಧಕರ ಅನುಭವದ ಮಾತು. ಸಹಕಾರಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಇದಕ್ಕೆ ಹೆಚ್ಚಿನ ಮಹತ್ವ ಮತ್ತು ಮನ್ನಣೆ ಇದೆ.
                </p>
                <p>
                  ಸದಸ್ಯರಿಗೆ/ಸಾರ್ವಜನಿಕರಿಗೆ ಆರ್ಥಿಕ ಹಾಗೂ ಸಾಮಾಜಿಕ ಅಭಿವೃದ್ಧಿಗೆ ಪೂರಕವಾಗಿ ಸಹಕಾರ ಕ್ಷೇತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾ ಬಂದಿದೆ. ಸರಕಾರದ ಅನೇಕ ಕಾರ್ಯಕ್ರಮಗಳ ನಿರ್ವಹಣೆಯನ್ನು ಸಹಕಾರ ಕ್ಷೇತ್ರ ಸಮರ್ಪಕವಾಗಿ ನಿರ್ವಹಿಸುತಾ ಬಂದಿದೆ ಇದಕ್ಕೆ ಪರ್ಯಾಯವಾದ ವ್ಯವಸ್ಥೆ ಇನ್ನೊಂದಿಲ್ಲ.
                </p>
              </div>

              <div className="pt-2">
                <p className="font-bold text-[#1e4e8c] text-sm sm:text-base">(ಶ್ರೀ ಶರಣಗೌಡ ಜಿ. ಪಾಟೀಲ)</p>
                <p className="text-xs sm:text-sm text-slate-500">ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image 
                    src="/souharda/MD_Message.webp" 
                    alt="Sri Sharanagouda G. Patil" 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* 3. OUR VOICE - Split Layout */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-12 md:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-6">
              
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-[#1e4e8c] text-xs font-semibold tracking-wide shadow-sm">
                Karnataka State Souharda Federal Co-operative Ltd.
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Empowering{' '}
                <span className="text-[#0284c7]">our community through</span>
              </h2>

              {/* Body Text */}
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p className="font-bold text-[#dc2626] text-sm sm:text-base">
                  transparent communication, official publications, and real-time movement updates.
                </p>
                <p className="text-xs sm:text-sm">
                  Our voice serves as the central bridge between the federation, member cooperatives, and the wider community. We ensure clear, transparent, and timely communication through multiple structured channels.
                </p>
              </div>

            </motion.div>

            {/* Right Column: Dark Ecosystem Box */}
            <motion.div variants={fadeInUp} className="lg:col-span-6">
              <div className="bg-[#0b1727] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    Live Communication Ecosystem
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>

                {/* List Items */}
                <div className="space-y-4">
                  
                  {/* Item 1 */}
                  <div className="bg-[#132338] hover:bg-[#182d47] border border-slate-700/50 rounded-2xl p-4 sm:p-5 transition-all">
                    <div className="flex items-start gap-3.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            Print &amp; Digital Magazines
                          </h4>
                          <Link 
                            href={sahakariMagazine.linkUrl || "/education/swabhimani-sahakari"}
                            target="_blank"
                            className="text-[11px] font-bold text-amber-400 hover:underline shrink-0"
                          >
                            Read →
                          </Link>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Direct distribution to member cooperative societies alongside online PDF reader support.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-[#132338] hover:bg-[#182d47] border border-slate-700/50 rounded-2xl p-4 sm:p-5 transition-all">
                    <div className="flex items-start gap-3.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            Official Bulletins &amp; Circulars
                          </h4>
                          <Link 
                            href="/circulars"
                            className="text-[11px] font-bold text-amber-400 hover:underline shrink-0"
                          >
                            View →
                          </Link>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Transmitting verified administrative notices, legal compliance updates, and statutory notifications instantly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-[#132338] hover:bg-[#182d47] border border-slate-700/50 rounded-2xl p-4 sm:p-5 transition-all">
                    <div className="flex items-start gap-3.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            Financial Accountability
                          </h4>
                          <Link 
                            href="/reports"
                            className="text-[11px] font-bold text-amber-400 hover:underline shrink-0"
                          >
                            Reports →
                          </Link>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Publishing audited annual reports to maintain complete governance transparency across the entire network.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

    </div>
  );
}