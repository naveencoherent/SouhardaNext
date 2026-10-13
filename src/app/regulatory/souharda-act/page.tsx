'use client';

import React from 'react';
import Image from 'next/image';
import RegulatoryHero from '@/components/common/RegulatoryHero';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Landmark, 
  ShieldCheck, 
  Network, 
  Award, 
  Lock, 
  Users, 
  TrendingUp, 
  PlusCircle, 
  ArrowLeftRight, 
  Building2, 
  FileCheck, 
  ClipboardCheck, 
  Shield, 
  CheckCheck, 
  FileText, 
  Download, 
  Info,
  ArrowRight,
  LucideIcon 
} from 'lucide-react';

// --- Reusable Component Types & Definitions ---

interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  imageSrc: string;
  variant: 'blue' | 'amber';
}

const variantStyles = {
  blue: {
    border: 'border-slate-200 hover:border-[#003366] hover:shadow-xl hover:shadow-blue-900/10',
    text: 'text-[#003366]',
    bg: 'bg-blue-50',
    tagBg: 'bg-blue-100',
    tagText: 'text-[#003366]',
  },
  amber: {
    border: 'border-amber-300 shadow-md hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10',
    text: 'text-[#d97706]',
    bg: 'bg-amber-50',
    tagBg: 'bg-amber-100',
    tagText: 'text-[#d97706]',
  },
};

function MilestoneCard({ year, title, description, tag, icon: Icon, imageSrc, variant }: MilestoneCardProps) {
  const styles = variantStyles[variant];
  return (
    <div className={`group bg-white rounded-2xl shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden cursor-pointer ${styles.border}`}>
      {/* Top Banner Image with Zoom Effect */}
      <div className="relative w-full h-36 overflow-hidden bg-slate-100 border-b border-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon Badge with Subtle Tilt on Hover */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <div className={`p-2 rounded-xl backdrop-blur-md bg-white/90 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${styles.text}`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-2xl font-black ${styles.text}`}>{year}</span>
          </div>
          <h3 className="font-bold text-base mb-1.5 text-[#003366] leading-snug group-hover:text-[#d97706] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[11px] text-slate-600 leading-relaxed mb-4">{description}</p>
        </div>
        <span className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-full w-max transition-colors duration-200 ${styles.tagBg} ${styles.tagText}`}>
          {tag}
        </span>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorScheme: 'blue' | 'amber';
}

function ProcessStep({ icon: Icon, title, description, colorScheme }: ProcessStepProps) {
  const isBlue = colorScheme === 'blue';
  return (
    <div className="flex gap-4 items-start">
      <div className={`p-3 rounded-xl shrink-0 ${isBlue ? 'bg-blue-50 text-[#003366]' : 'bg-amber-50 text-[#d97706]'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-[#003366]">{title}</h4>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function SouhardaActPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* RegulatoryHero Component Call */}
      <RegulatoryHero 
        badgeText={locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಚೌಕಟ್ಟು' : 'Statutory Framework'}
        title={locale === 'kn' ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೨' : 'THE SOUHARDA ACT, 1997'}
        subtitle={
          locale === 'kn'
            ? 'ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಸ್ವಯಂ-ನಿಯಂತ್ರಣದ ಮೂಲಕ ಕರ್ನಾಟಕದ ಸಹಕಾರಿಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.'
            : 'Empowering Karnataka’s Cooperatives through Autonomy & Self-Regulation.'
        }
        breadcrumbs={[
          { label: locale === 'kn' ? 'ಮುಖಪುಟ' : 'Home', href: '/' },
          { label: locale === 'kn' ? 'ನಿಯಂತ್ರಣ ಚೌಕಟ್ಟು' : 'Regulatory Framework', href: '/regulatory' },
          { label: locale === 'kn' ? 'ಸೌಹಾರ್ದ ಕಾಯ್ದೆ' : 'Souharda Act' }
        ]}
      />

      {/* Hero-Style Header Showcase */}
      <section className="max-w-4xl mx-auto px-4 pt-12 pb-2 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-[#003366] tracking-tight mb-2">
          {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಚಳುವಳಿ:' : 'The Souharda Movement:'}
        </h1>
        <h2 className="text-3xl md:text-5xl font-black text-[#d97706] tracking-tight">
          {locale === 'kn' ? 'ನಮ್ಮ ಪಯಣದ ಮೈಲಿಗಲ್ಲುಗಳು.' : 'Milestones of Our Journey.'}
        </h2>
      </section>

      {/* Timeline / Milestones Section with Visual Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366]">
            {locale === 'kn' 
              ? 'ಸಹಕಾರ ಕಾನೂನಿನ ಶತಮಾನೋತ್ಸವ ಸಂಭ್ರಮ: ೧೯೦೪ - ೨೦೨೪' 
              : 'Centenary celebration of Cooperative Law: 1904 – 2024'}
          </h2>
        </div>

        {/* 4 Cards strictly arranged in a single horizontal row on md screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          <MilestoneCard
            year="1905"
            title={locale === 'kn' ? 'ಚಾರಿತ್ರಿಕ ಉಗಮ' : 'The Historical Origin'}
            description={
              locale === 'kn'
                ? 'ಶ್ರೀ ಸಿದ್ಧನಗೌಡ ಎಸ್. ಪಾಟೀಲರಿಂದ ಕಣಗಿನಹಾಳದಲ್ಲಿ ಬಿತ್ತಿದ ಸಹಕಾರದ ಬೀಜ.'
                : 'The seed sown in Kanaginahal by Shri Siddanagowda S. Patil.'
            }
            tag={locale === 'kn' ? 'ಭಾರತದಲ್ಲೇ ಮೊದಲು' : 'First in India'}
            icon={Landmark}
            imageSrc="/souharda/origin.jpg"
            variant="blue"
          />
          <MilestoneCard
            year="1959"
            title={locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಐಕ್ಯತೆ' : 'Legislative Unity'}
            description={
              locale === 'kn'
                ? '೧೯೫೯ ರ ಕೆಸಿಎಸ್ ಕಾಯ್ದೆಯು ನೂತನ ಕರ್ನಾಟಕ ರಾಜ್ಯದಾದ್ಯಂತ ವಿವಿಧ ಕಾನೂನುಗಳನ್ನು ಏಕೀಕರಿಸಿತು.'
                : 'The KCS Act 1959 unified diverse laws across the new Karnataka State.'
            }
            tag={locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಚೌಕಟ್ಟು' : 'Statutory Framework'}
            icon={Landmark}
            imageSrc="/souharda/kcs-act.webp"
            variant="blue"
          />
          <MilestoneCard
            year="1997"
            title={locale === 'kn' ? 'ಸೌಹಾರ್ದ ಕ್ರಾಂತಿ' : 'Souharda Revolution'}
            description={
              locale === 'kn'
                ? 'ಸಹಕಾರ ಸಂಸ್ಥೆಗಳಿಗೆ ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಸರ್ಕಾರಿ ಹಸ್ತಕ್ಷೇಪದಿಂದ ಮುಕ್ತಿ ನೀಡಿದ ಮೈಲಿಗಲ್ಲು ಕಾಯ್ದೆ.'
                : 'Landmark Act granting autonomy and freedom from interference.'
            }
            tag={locale === 'kn' ? 'ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಸ್ವಾತಂತ್ರ್ಯ' : 'Democratic Freedom'}
            icon={ShieldCheck}
            imageSrc="/souharda/revolution.webp"
            variant="amber"
          />
          <MilestoneCard
            year="2001"
            title={locale === 'kn' ? 'ಫೆಡರಲ್ ತಳಹದಿ' : 'Federal Foundation'}
            description={
              locale === 'kn'
                ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ಬೆಂಬಲಿಸಲು ಸ್ಥಾಪಿತವಾದ ಸ್ವಯಂ-ನಿಯಂತ್ರಣ ಸಂಸ್ಥೆ.'
                : 'The self-regulatory body established to protect Souharda Cooperatives.'
            }
            tag={locale === 'kn' ? 'ಛತ್ರಿ ಸಂಸ್ಥೆ' : 'The Umbrella Body'}
            icon={Network}
            imageSrc="/souharda/federation.webp"
            variant="blue"
          />
        </div>
      </section>
{/* A Century of Legal Evolution - 4 Distinct Differentiated Timeline Cards */}
      <section className="ACentury py-12 border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1d4ed8]">
              {locale === 'kn' ? 'ಕಾನೂನು ವಿಕಸನದ ಒಂದು ಶತಮಾನ' : 'A Century of Legal Evolution'}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              {locale === 'kn' 
                ? 'ಸಹಕಾರ ಚಳುವಳಿ ಮತ್ತು ನಿಯಂತ್ರಣ ಚೌಕಟ್ಟನ್ನು ರೂಪಿಸಿದ ಪ್ರಮುಖ ಹಂತಗಳು'
                : 'Milestones shaping the cooperative movement and regulatory framework'}
            </p>
          </div>

          {/* Centered Timeline Wrapper */}
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1d4ed8]/20 -translate-x-1/2" />
            <div className="block md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-[#1d4ed8]/20" />

            <div className="space-y-6 md:space-y-0">

              {/* Item 1: 1904 (Left Side - National Pioneer) */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-6 md:text-right">
                  <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-slate-200 shadow-xs hover:border-[#1d4ed8] transition-colors inline-block text-left w-full">
                    <div className="flex items-start gap-3">
                      {/* Icon Container: Pioneer / Book */}
                      <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex-shrink-0 flex items-center justify-center p-2 shadow-xs">
                        <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>

                      <div>
                        <span className="inline-block px-3 py-0.5 bg-[#1d4ed8] text-white text-xs font-bold rounded-full mb-1">
                          1904
                        </span>
                        <h4 className="font-bold text-[#1d4ed8] text-base md:text-lg mb-1">
                          {locale === 'kn' ? 'ರಾಷ್ಟ್ರೀಯ ಶಾಸನಬದ್ಧ ಮುನ್ನುಡಿ' : 'National Statutory Pioneer'}
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {locale === 'kn' 
                            ? 'ಭಾರತೀಯ ಸಹಕಾರ ರಂಗಕ್ಕೆ ಶಾಸನಬದ್ಧ ಮಾನ್ಯತೆ ನೀಡಿದ ಪ್ರಥಮ ಬ್ರಿಟಿಷ್ ಭಾರತೀಯ ಸಹಕಾರ ಸಂಘಗಳ ಕಾಯ್ದೆಯ ಜಾರಿ.'
                            : 'Enactment of India\'s first Cooperative Credit Societies Act, granting legal recognition to grassroots credit societies across British India.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d97706] border-2 border-white shadow-xs z-10" />
                <div className="hidden md:block md:w-1/2" />
              </div>

              {/* Item 2: 1959 (Right Side - Karnataka State Unification) */}
              <div className="relative flex flex-col md:flex-row items-center md:-mt-14">
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d97706] border-2 border-white shadow-xs z-10" />

                <div className="w-full md:w-1/2 pl-10 md:pl-6">
                  <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-slate-200 shadow-xs hover:border-[#1d4ed8] transition-colors inline-block text-left w-full">
                    <div className="flex items-start gap-3">
                      {/* Icon Container: State / Building */}
                      <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex-shrink-0 flex items-center justify-center p-2 shadow-xs">
                        <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 v5m-4 0h4" />
                        </svg>
                      </div>

                      <div>
                        <span className="inline-block px-3 py-0.5 bg-[#1d4ed8] text-white text-xs font-bold rounded-full mb-1">
                          1959
                        </span>
                        <h4 className="font-bold text-[#1d4ed8] text-base md:text-lg mb-1">
                          {locale === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಏಕೀಕೃತ ಕಾಯ್ದೆ (KCS)' : 'Karnataka State Unification (KCS Act)'}
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {locale === 'kn'
                            ? 'ಮೈಸೂರು (ಕರ್ನಾಟಕ) ರಾಜ್ಯದಲ್ಲಿ ಎಲ್ಲಾ ಸಹಕಾರ ಸಂಸ್ಥೆಗಳನ್ನು ಒಂದೇ ಸರ್ಕಾರಿ ನಿಯಂತ್ರಣಕ್ಕೆ ತಂದ ಏಕೀಕೃತ KCS ಕಾಯ್ದೆಯ ಜಾರಿ.'
                            : 'Consolidation of regional laws into the Karnataka Cooperative Societies Act, standardizing state-regulated administration and credit distribution.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3: 1997 (Left Side - Highlighted Benchmark / Souharda Autonomy) */}
              <div className="relative flex flex-col md:flex-row items-center md:-mt-14">
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-6 md:text-right">
                  <div className="bg-amber-50/80 backdrop-blur-xs p-5 rounded-xl border-2 border-[#d97706]/80 shadow-xs inline-block text-left w-full">
                    <div className="flex items-start gap-3">
                      {/* Icon Container: Shield / Autonomy */}
                      <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 flex-shrink-0 flex items-center justify-center p-2 shadow-xs">
                        <svg className="w-6 h-6 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-0.5 bg-[#d97706] text-white text-xs font-bold rounded-full">
                            1997
                          </span>
                          <span className="text-[10px] font-bold text-[#d97706] uppercase tracking-wider">
                            {locale === 'kn' ? 'ಸ್ವಾಯತ್ತತೆಯ ಮೈಲಿಗಲ್ಲು' : 'Autonomy Benchmark'}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#1d4ed8] text-base md:text-lg mb-1">
                          {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಕಾಯ್ದೆ (ಸರ್ಕಾರದಿಂದ ಸ್ವತಂತ್ರ)' : 'The Souharda Act (Self-Regulation)'}
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {locale === 'kn'
                            ? 'ಸರ್ಕಾರಿ ಹಸ್ತಕ್ಷೇಪವನ್ನು ತೆಗೆದುಹಾಕಿ ಸಹಕಾರಿಗಳಿಗೆ ಪೂರ್ಣ ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಸ್ವಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಹಕ್ಕು ನೀಡಿದ ಕ್ರಾಂತಿಕಾರಿ ಶಾಸನ.'
                            : 'Revolutionary milestone creating a parallel regime that granted cooperatives full functional independence from state interference.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1d4ed8] border-2 border-white shadow-xs z-10" />
                <div className="hidden md:block md:w-1/2" />
              </div>

              {/* Item 4: 2001 (Right Side - Apex Federal Oversight) */}
              <div className="relative flex flex-col md:flex-row items-center md:-mt-14">
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d97706] border-2 border-white shadow-xs z-10" />

                <div className="w-full md:w-1/2 pl-10 md:pl-6">
                  <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-slate-200 shadow-xs hover:border-[#1d4ed8] transition-colors inline-block text-left w-full">
                    <div className="flex items-start gap-3">
                      {/* Icon Container: Federal / Network */}
                      <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex-shrink-0 flex items-center justify-center p-2 shadow-xs">
                        <svg className="w-6 h-6 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>

                      <div>
                        <span className="inline-block px-3 py-0.5 bg-[#1d4ed8] text-white text-xs font-bold rounded-full mb-1">
                          2001
                        </span>
                        <h4 className="font-bold text-[#1d4ed8] text-base md:text-lg mb-1">
                          {locale === 'kn' ? 'ಫೆಡರಲ್ ಮಹಾಮಂಡಲ ಸ್ಥಾಪನೆ' : 'Federal Apex Governance Body'}
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {locale === 'kn'
                            ? 'ಸೌಹಾರ್ದ ಸಂಸ್ಥೆಗಳ ಮೇಲ್ವಿಚಾರಣೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ರಕ್ಷಣೆಗಾಗಿ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಫೆಡರಲ್ ಸಹಕಾರಿಯ ಕಾರ್ಯಾಚರಣೆ.'
                            : 'Establishment of KSSFC Ltd. as the apex statutory body to supervise, audit, and safeguard all registered Souharda cooperatives.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      
{/* Salient Features of the Karnataka Souharda Sahakari Act, 1997 - Color-Matched Vertical Timeline */}
      <section 
        id="souharda-act-features" 
        className="SouhardaActFeatures py-16 bg-white relative overflow-hidden border-t border-slate-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ವೈಶಿಷ್ಟ್ಯಗಳು' : 'Statutory Highlights'}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1d4ed8] tracking-tight">
              {locale === 'kn' 
                ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ ೧೯೯೭ ರ ಪ್ರಮುಖ ಮುಖ್ಯಾಂಶಗಳು' 
                : 'Salient Features of the Karnataka Souharda Sahakari Act, 1997'}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              {locale === 'kn'
                ? 'ಸರ್ಕಾರದ ಹಸ್ತಕ್ಷೇಪವಿಲ್ಲದೆ ಸಹಕಾರ ಸಂಸ್ಥೆಗಳಿಗೆ ಸಂಪೂರ್ಣ ಸ್ವಾಯತ್ತತೆ, ಸ್ವಯಂ ಆಡಳಿತ ಮತ್ತು ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆಯನ್ನು ಒದಗಿಸುವ ಮೂಲತತ್ವಗಳು.'
                : 'Key legal provisions ensuring functional autonomy, member ownership, self-regulation, and professional governance without state interference.'}
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">

            {/* Feature 01 - Blue */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#1d4ed8] flex items-center justify-center text-[#1d4ed8] font-bold text-xs shadow-xs">
                01
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-[#1d4ed8] transition-colors">
                  {locale === 'kn' ? 'ಸಂಪೂರ್ಣ ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಸ್ವಾವಲಂಬನೆ' : 'Zero State Interference & Full Autonomy'}
                </h3>
                <span className="text-xs font-bold text-[#1d4ed8]/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ಸಂಸ್ಥೆಯ ಸ್ವಾಯತ್ತತೆ' : 'FINANCIAL AUTONOMY'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಸರ್ಕಾರದ ಧನಸಹಾಯವಿಲ್ಲದೆ ಸದಸ್ಯರ ಸ್ವಂತ ಬಂಡವಾಳದಿಂದ ನಡೆಯುವ ಕಾರಣ, ಸರ್ಕಾರದ ನೇರ ನಿಯಂತ್ರಣ ಮತ್ತು ಹಸ್ತಕ್ಷೇಪ ಮುಕ್ತವಾಗಿವೆ.'
                  : 'Cooperatives operate entirely on member contributions without government financial aid, freeing them from state control and interference.'}
              </p>
            </div>

            {/* Feature 02 - Amber/Orange */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center text-amber-600 font-bold text-xs shadow-xs">
                02
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-amber-600 transition-colors">
                  {locale === 'kn' ? 'ಮಹಾಜನ ಸಭೆಯ ಸರ್ವೋಚ್ಚ ಅಧಿಕಾರ' : 'Democratic & Member Control'}
                </h3>
                <span className="text-xs font-bold text-amber-600/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಆಡಳಿತ' : 'DEMOCRATIC AUTHORITY'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಸಿಬ್ಬಂದಿ ನೇಮಕಾತಿ, ವೇತನ ಶ್ರೇಣಿ ನಿಗದಿ ಮತ್ತು ಪ್ರಚಾರದ ನಿರ್ಧಾರಗಳಿಗೆ ಸರ್ವಸದಸ್ಯರ ಸಾಮಾನ್ಯ ಸಭೆಯ ತೀರ್ಮಾನವೇ ಅಂತಿಮ.'
                  : 'The General Body of members holds ultimate authority regarding staffing, wage structures, policy amendments, and executive appointments.'}
              </p>
            </div>

            {/* Feature 03 - Blue/Indigo */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-indigo-600 font-bold text-xs shadow-xs">
                03
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-indigo-600 transition-colors">
                  {locale === 'kn' ? 'ವೃತ್ತಿಪರ ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್ ಲೆಕ್ಕಪರಿಶೋಧನೆ' : 'Chartered Accountant Audit'}
                </h3>
                <span className="text-xs font-bold text-indigo-600/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ಪಾರದರ್ಶಕತೆ' : 'FINANCIAL INTEGRITY'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಲೆಕ್ಕಪರಿಶೋಧನೆಯನ್ನು ಮಾನ್ಯತೆ ಪಡೆದ ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್‌ಗಳು ನಡೆಸಿ, ಮಹಾಸಭೆಯಲ್ಲಿ ಸದಸ್ಯರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತಾರೆ.'
                  : 'Mandatory audits are conducted by certified Chartered Accountants (CAs) who present reports directly to members at AGM meetings.'}
              </p>
            </div>

            {/* Feature 04 - Emerald Green */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center text-emerald-600 font-bold text-xs shadow-xs">
                04
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-emerald-600 transition-colors">
                  {locale === 'kn' ? 'ಸಂಯುಕ್ತ ಮಹಾಮಂಡಲದಿಂದ ಮೇಲ್ವಿಚಾರಣೆ' : 'Statutory Apex Federal Oversight'}
                </h3>
                <span className="text-xs font-bold text-emerald-600/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಚೌಕಟ್ಟು' : 'APEX FEDERAL STRUCTURE'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಸಂಸ್ಥೆಗಳ ಮೇಲ್ವಿಚಾರಣೆ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ರಕ್ಷಣೆಯನ್ನು ಶಾಸನಬದ್ಧವಾಗಿ ಸ್ಥಾಪಿತವಾದ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಫೆಡರಲ್ ನಿರ್ವಹಿಸುತ್ತದೆ.'
                  : 'Stewardship, regulatory guidance, and conflict resolution are managed by the statutory Federal Cooperative (KSSFC Ltd.).'}
              </p>
            </div>

            {/* Feature 05 - Purple */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-purple-600 flex items-center justify-center text-purple-600 font-bold text-xs shadow-xs">
                05
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-purple-600 transition-colors">
                  {locale === 'kn' ? 'ಸಕ್ರಿಯ ಸದಸ್ಯತ್ವ ಮತ್ತು ಜವಾಬ್ದಾರಿ' : 'Active Member Participation'}
                </h3>
                <span className="text-xs font-bold text-purple-600/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ಸದಸ್ಯರ ಕರ್ತವ್ಯ' : 'ACTIVE MEMBERSHIP'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಸದಸ್ಯರು ಕನಿಷ್ಠ ವ್ಯವಹಾರದಲ್ಲಿ ಭಾಗವಹಿಸುವುದು ಮತ್ತು ವಾರ್ಷಿಕ ಸಾಮಾನ್ಯ ಸಭೆಗಳಿಗೆ ಕಡ್ಡಾಯವಾಗಿ ಹಾಜರಾಗುವುದು ಅಗತ್ಯವಾಗಿದೆ.'
                  : 'Ensures genuine user participation by requiring members to utilize core services and attend General Body Meetings.'}
              </p>
            </div>

            {/* Feature 06 - Teal */}
            <div className="relative group">
              <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center text-teal-600 font-bold text-xs shadow-xs">
                06
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-teal-600 transition-colors">
                  {locale === 'kn' ? 'ಸ್ವತಂತ್ರ ವಿವಾದ ಪರಿಹಾರ ವ್ಯವಸ್ಥೆ' : 'Dedicated Dispute Redressal'}
                </h3>
                <span className="text-xs font-bold text-teal-600/70 uppercase tracking-wider">
                  {locale === 'kn' ? 'ನ್ಯಾಯಾಂಗ ಚೌಕಟ್ಟು' : 'LEGAL ARBITRATION'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ವಿವಾದಗಳ ಶೀಘ್ರ ಪರಿಹಾರ, ಉಪನಿಯಮಗಳ ತಿದ್ದುಪಡಿ ಮತ್ತು ಕಾನೂನು ನೆರವಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ನ್ಯಾಯಾಲಯ ಮತ್ತು ಫೆಡರಲ್ ಚೌಕಟ್ಟು ಲಭ್ಯವಿದೆ.'
                  : 'Streamlined legal arbitration, dispute settlement courts, and model byelaws provided under the Souharda framework.'}
              </p>
            </div>

          </div>

    

        </div>
      </section>
{/* ---------------- SOUHARDA ACT & RULES DOWNLOADS SECTION ---------------- */}
      <section 
        id="souharda-act-downloads" 
        aria-label="Souharda Act and Rules Downloads"
        className="py-16 bg-slate-50 text-slate-800 border-t border-b border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ದಾಖಲೆಗಳು' : 'Statutory Repository'}
              </span>
              <h2 id="act-repository-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ಮತ್ತು ತಿದ್ದುಪಡಿ ದಾಖಲೆಗಳು' : 'Souharda Act, Rules & Gazette Downloads'}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {locale === 'kn' ? '೧೧ ಪ್ರಕಟಿತ ದಾಖಲೆಗಳು' : '11 Available Downloads'}
            </span>
          </div>

          {/* Clean Document List (Opens in new tab to avoid 'Insecure download blocked') */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
            {[
              {
                id: 1,
                titleEn: "Samyuktha Sahakariya Byelaw Amendment",
                titleKn: "ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಉಪವಿಧಿ ತಿದ್ದುಪಡಿ ಪ್ರತಿ",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Upavidhi_Thiddupadi_Souharda.pdf",
              },
              {
                id: 2,
                titleEn: "Souharda Act Amendment - 2012",
                titleKn: "ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ತಿದ್ದುಪಡಿ - ೨೦೧೨",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Souharda_Act_Amendment_2012.pdf",
              },
              {
                id: 3,
                titleEn: "Karnataka Souharda Sahakari Amendment Act 2016",
                titleKn: "ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ತಿದ್ದುಪಡಿ ಕಾಯ್ದೆ ೨೦೧೬",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Souharda_Amendment_Act_2016.pdf",
              },
              {
                id: 4,
                titleEn: "Byelaw Amendments Points",
                titleKn: "ಉಪವಿಧಿ ತಿದ್ದುಪಡಿಗಳ ಮುಖ್ಯ ಮುಖ್ಯಾಂಶಗಳು",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Byelaw_Amendments_Points.pdf",
              },
              {
                id: 5,
                titleEn: "Gazette Notification of Souharda Rules 2015",
                titleKn: "ಸೌಹಾರ್ದ ನಿಯಮಗಳು ೨೦೧೫ - ರಾಜ್ಯಪತ್ರದ ಪ್ರಕಟಣೆ",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Gazette_Notification_Souharda_Rules_2015.pdf",
              },
              {
                id: 6,
                titleEn: "Souharda Rules Final Notification",
                titleKn: "ಸೌಹಾರ್ದ ನಿಯಮಗಳ ಅಂತಿಮ ಅಧಿಸೂಚನೆ",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Souharda_Rules_Final_Notification.pdf",
              },
              {
                id: 7,
                titleEn: "Karnataka Souharda Sahakari Rules 2015",
                titleKn: "ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿಯಮಗಳು ೨೦೧೫",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Karnataka_Souharda_Sahakari_Rules_2015.pdf",
              },
              {
                id: 8,
                titleEn: "Karnataka Souharda Sahakari Act Gazette",
                titleKn: "ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆಯ ಮೂಲ ರಾಜ್ಯಪತ್ರ",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Karnataka_Souharda_Act_Gazette.pdf",
              },
              {
                id: 9,
                titleEn: "State Souharda (Amendment) Act 2014 Main Points",
                titleKn: "ಸೌಹಾರ್ದ ತಿದ್ದುಪಡಿ ಕಾಯ್ದೆ ೨೦೧೪ - ಮುಖ್ಯ ವಿಷಯಗಳು",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Souharda_Amendment_Act_2014_Main_Points.pdf",
              },
              {
                id: 10,
                titleEn: "State Souharda Amendment Act 2014 (PDF)",
                titleKn: "ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ತಿದ್ದುಪಡಿ ಕಾಯ್ದೆ ೨೦೧೪ (ಅಧಿಕೃತ PDF)",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Souharda_Amendment_Act_2014.pdf",
              },
              {
                id: 11,
                titleEn: "Act Amendment Key Points",
                titleKn: "ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ತಿದ್ದುಪಡಿಗಳ ಪ್ರಮುಖ ಮುಖ್ಯಾಂಶಗಳು",
                fileSize: "PDF",
                fileUrl: "/documents/souharda/act/Act_Amendment_Points.pdf",
              },
            ].map((doc, idx) => (
              <a
                key={doc.id}
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/60 transition-all duration-200 cursor-pointer"
              >
                {/* PDF Icon + Clickable Document Title */}
                <div className="flex items-center gap-3.5">
                  <span className="text-xs font-bold text-slate-400 font-mono shrink-0 group-hover:text-blue-600 transition-colors">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>

                  {/* Custom PDF GIF Icon */}
                  <div className="relative w-7 h-7 shrink-0 transition-transform group-hover:scale-110">
                    <Image
                      src="/images/pdf.gif"
                      alt="PDF Icon"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 group-hover:underline underline-offset-2 transition-colors">
                      {locale === 'kn' ? doc.titleKn : doc.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {locale === 'kn' ? doc.titleEn : doc.titleKn}
                    </p>
                  </div>
                </div>

                {/* View / Download Action */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                  <span className="text-xs text-slate-500 font-mono bg-slate-100 group-hover:bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                    {doc.fileSize}
                  </span>
                  
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 group-hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs group-hover:shadow-md">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>{locale === 'kn' ? 'ನೋಡಿ / ಡೌನ್‌ಲೋಡ್' : 'View PDF'}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}