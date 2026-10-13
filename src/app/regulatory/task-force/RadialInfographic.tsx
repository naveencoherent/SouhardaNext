'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Printer, 
  ShieldAlert, 
  FileCheck, 
  BookOpen,
  Building2,
  Zap,
  Layers,
  Award,
  Scale
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';

interface StampFeeItem {
  article: string;
  categoryEn: string;
  categoryKn: string;
  rateEn: string;
  rateKn: string;
  group: 'Agreements' | 'Banking' | 'Corporate';
  highlight?: boolean;
}

export default function EStampingACCPage() {
  const { locale } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGroup, setActiveGroup] = useState<'All' | 'Agreements' | 'Banking' | 'Corporate'>('All');
  const [activeTab, setActiveTab] = useState<'routine' | 'hardware' | 'verification' | 'donots'>('routine');

  // Karnataka Stamp Duty Schedule
  const FEE_SCHEDULE: StampFeeItem[] = [
    // Agreements
    { article: '03', categoryEn: 'Adoption Deed', categoryKn: 'ದತ್ತು ಸ್ವೀಕಾರ ಪತ್ರ', rateEn: 'Fixed ₹1,000', rateKn: 'ನಿಗದಿತ ₹೧,೦೦೦', group: 'Agreements' },
    { article: '04', categoryEn: 'Affidavit', categoryKn: 'ಪ್ರಮಾಣ ಪತ್ರ (Affidavit)', rateEn: 'Fixed ₹100', rateKn: 'ನಿಗದಿತ ₹೧೦೦', group: 'Agreements', highlight: true },
    { article: '05(a)', categoryEn: 'Sale of Bill of Exchange', categoryKn: 'ವಿನಿಮಯ ಪತ್ರದ ಮಾರಾಟ', rateEn: 'Re.1 for every ₹10,000', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೧', group: 'Agreements' },
    { article: '05(b)', categoryEn: 'Purchase/Sale of Govt Security', categoryKn: 'ಸರ್ಕಾರಿ ಭದ್ರತೆಗಳ ಖರೀದಿ/ಮಾರಾಟ', rateEn: 'Re.1 for every ₹10,000', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೧', group: 'Agreements' },
    { article: '05(e)(ii)', categoryEn: 'Immovable Property Sale (No Possession)', categoryKn: 'ಸ್ಥಾವರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನವಿಲ್ಲದೆ)', rateEn: '0.5% (Min ₹500)', rateKn: '೦.೫% (ಕನಿಷ್ಠ ₹೫೦೦)', group: 'Agreements', highlight: true },
    { article: '05(g)(i)', categoryEn: 'Movable Property Sale (With Possession)', categoryKn: 'ಚರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನದೊಂದಿಗೆ)', rateEn: '3% of market value', rateKn: '೩% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ', group: 'Agreements' },
    { article: '05(g)(ii)', categoryEn: 'Movable Property Sale (No Possession)', categoryKn: 'ಚರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನವಿಲ್ಲದೆ)', rateEn: '0.1% (Min ₹500; Max ₹20,000)', rateKn: '೦.೧% (₹೫೦೦ - ₹೨೦,೦೦೦)', group: 'Agreements' },
    { article: '05(i-b)', categoryEn: 'Advertisement / Broadcasting Agreement', categoryKn: 'ಜಾಹೀರಾತು ಒಪ್ಪಂದ', rateEn: '0.1% (Min ₹200)', rateKn: '೦.೧% (ಕನಿಷ್ಠ ₹೨೦೦)', group: 'Agreements' },
    { article: '05(i-c)', categoryEn: 'Intellectual Property Transfer', categoryKn: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಹಕ್ಕುಗಳ ವರ್ಗಾವಣೆ', rateEn: '0.1% (Min ₹200)', rateKn: '೦.೧% (ಕನಿಷ್ಠ ₹೨೦೦)', group: 'Agreements' },
    { article: '05(i-d)(i)', categoryEn: 'Service Agreement (Up to ₹10 Lakhs)', categoryKn: 'ಸೇವಾ ಒಪ್ಪಂದ (₹೧೦ ಲಕ್ಷದವರೆಗೆ)', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements' },
    { article: '05(i-d)(ii)', categoryEn: 'Service Agreement (Above ₹10 Lakhs)', categoryKn: 'ಸೇವಾ ಒಪ್ಪಂದ (₹೧೦ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹500 + ₹500/10L (Max ₹10L)', rateKn: '₹೫೦೦ + ₹೫೦೦/೧೦L (ಗರಿಷ್ಠ ₹೧೦L)', group: 'Agreements' },
    { article: '05(i-e)(i)', categoryEn: 'Chit Agreement (Up to ₹1 Lakh)', categoryKn: 'ಚಿಟ್ ಒಪ್ಪಂದ (₹೧ ಲಕ್ಷದವರೆಗೆ)', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements' },
    { article: '05(i-e)(ii)', categoryEn: 'Chit Agreement (Above ₹1 Lakh)', categoryKn: 'ಚಿಟ್ ಒಪ್ಪಂದ (₹೧ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹500 + ₹100 per additional ₹1L', rateKn: '₹೫೦೦ + ಪ್ರತಿ ₹೧L ಗೆ ₹೧೦೦', group: 'Agreements' },
    { article: '05(j)', categoryEn: 'Agreement (General / Any other)', categoryKn: 'ಸಾಮಾನ್ಯ ಒಪ್ಪಂದಗಳು', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements', highlight: true },

    // Banking
    { article: '06(1)', categoryEn: 'Deposit of Title Deeds (DTD Loan)', categoryKn: 'ಟೈಟಲ್ ಡೀಡ್ ಠೇವಣಿ ಸಾಲ', rateEn: '0.5% on loan (Min ₹500)', rateKn: 'ಸಾಲದ ೦.೫% (ಕನಿಷ್ಠ ₹೫೦೦)', group: 'Banking', highlight: true },
    { article: '06(2)', categoryEn: 'Pledge of Movable Property (> ₹1L)', categoryKn: 'ಚರ ಆಸ್ತಿ ಅಡಮಾನ (ಸಾಲ > ₹೧L)', rateEn: '0.5% on loan amount', rateKn: 'ಸಾಲದ ೦.೫%', group: 'Banking' },
    { article: '12', categoryEn: 'Bond (Secured Amount > ₹1,000)', categoryKn: 'ಬಾಂಡ್ (₹೧,೦೦೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹2 per ₹100 (Min ₹100)', rateKn: 'ಪ್ರತಿ ₹೧೦೦ ಕ್ಕೆ ₹೨ (ಕನಿಷ್ಠ ₹೧೦೦)', group: 'Banking' },
    { article: '34(d)', categoryEn: 'Mortgage / Hypothecation of Movables', categoryKn: 'ಚರ ಆಸ್ತಿ ಹೈಪೋಥಿಕೇಶನ್', rateEn: '₹50 per ₹10,000 (Max ₹10L)', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೫೦ (ಗರಿಷ್ಠ ₹೧೦L)', group: 'Banking' },
    { article: '56(i)', categoryEn: 'Paper Bank Guarantee', categoryKn: 'ಭೌತಿಕ ಬ್ಯಾಂಕ್ ಗ್ಯಾರಂಟಿ', rateEn: 'Fixed ₹300', rateKn: 'ನಿಗದಿತ ₹೩೦೦', group: 'Banking' },
    { article: '56(ii)', categoryEn: 'e-Bank Guarantee', categoryKn: 'ಇ-ಬ್ಯಾಂಕ್ ಗ್ಯಾರಂಟಿ', rateEn: 'Fixed ₹200', rateKn: 'ನಿಗದಿತ ₹೨೦೦', group: 'Banking', highlight: true },

    // Corporate
    { article: '10', categoryEn: 'Articles of Association (Company)', categoryKn: 'ಆರ್ಟಿಕಲ್ಸ್ ಆಫ್ ಅಸೋಸಿಯೇಷನ್', rateEn: '₹5,000 per ₹10L Capital (Max ₹1 Cr)', rateKn: 'ಪ್ರತಿ ₹೧೦L ಗೆ ₹೫,೦೦೦ (ಗರಿಷ್ಠ ₹೧ Cr)', group: 'Corporate' },
    { article: '17', categoryEn: 'Advocate Enrolment Certificate', categoryKn: 'ವಕೀಲರ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ', rateEn: 'Fixed ₹2,000', rateKn: 'ನಿಗದಿತ ₹೨,೦೦೦', group: 'Corporate' },
    { article: '20(4)', categoryEn: 'Company Amalgamation Order', categoryKn: 'ಕಂಪನಿ ವಿಲೀನ ಆದೇಶ', rateEn: '5% on market value (Max ₹25 Cr)', rateKn: '೫% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ (ಗರಿಷ್ಠ ₹೨೫ Cr)', group: 'Corporate' },
    { article: '22', categoryEn: 'Counterpart / Duplicate Document', categoryKn: 'ನಕಲು ದಾಖಲೆ', rateEn: 'Fixed ₹1,000', rateKn: 'ನಿಗದಿತ ₹೧,೦೦೦', group: 'Corporate' },
    { article: '25', categoryEn: 'Divorce Writing', categoryKn: 'ವಿಚ್ಛೇದನ ಪತ್ರ', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Corporate' },
    { article: '33', categoryEn: 'Memorandum of Association', categoryKn: 'ಮೆಮೊರಾಂಡಮ್ ಆಫ್ ಅಸೋಸಿಯೇಷನ್', rateEn: 'Fixed ₹5,000', rateKn: 'ನಿಗದಿತ ₹೫,೦೦೦', group: 'Corporate' },
    { article: '40(A)', categoryEn: 'Partnership Firm Formation', categoryKn: 'ಪಾಲುದಾರಿಕೆ ಸಂಸ್ಥೆ ರಚನೆ', rateEn: 'Fixed ₹2,000', rateKn: 'ನಿಗದಿತ ₹೨,೦೦೦', group: 'Corporate' },
    { article: '40A(a)', categoryEn: 'LLP Agreement (Capital up to ₹10L)', categoryKn: 'ಎಲ್‌ಎಲ್‌ಪಿ ಒಪ್ಪಂದ (₹೧೦L ವರೆಗೆ)', rateEn: 'Fixed ₹5,000', rateKn: 'ನಿಗದಿತ ₹೫,೦೦೦', group: 'Corporate' },
    { article: '40A(b)', categoryEn: 'LLP Agreement (Capital > ₹10L)', categoryKn: 'ಎಲ್‌ಎಲ್‌ಪಿ ಒಪ್ಪಂದ (₹೧೦L ಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹5,000 + ₹1,000/5L (Max ₹25L)', rateKn: '₹೫,೦೦೦ + ₹೧,೦೦೦/೫L (ಗರಿಷ್ಠ ₹೨೫L)', group: 'Corporate' },
    { article: '41(d)', categoryEn: 'Power of Attorney (5 to 10 persons)', categoryKn: 'ಪವರ್ ಆಫ್ ಅಟಾರ್ನಿ (೫ - ೧೦ ಜನರಿಗೆ)', rateEn: 'Fixed ₹1,000', rateKn: 'ನಿಗದಿತ ₹೧,೦೦೦', group: 'Corporate' },
    { article: '41(e/eb)', categoryEn: 'Power of Attorney (Sale of Property)', categoryKn: 'ಪವರ್ ಆಫ್ ಅಟಾರ್ನಿ (ಆಸ್ತಿ ಮಾರಾಟ)', rateEn: '5% on market value', rateKn: '೫% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ', group: 'Corporate', highlight: true },
    { article: '41(h)', categoryEn: 'Power of Attorney (General / Other)', categoryKn: 'ಇತರ ಪವರ್ ಆಫ್ ಅಟಾರ್ನಿ', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Corporate' },
    { article: '54', categoryEn: 'Trust Creation & Management', categoryKn: 'ಟ್ರಸ್ಟ್ ರಚನೆ ಮತ್ತು ನಿರ್ವಹಣೆ', rateEn: 'Fixed ₹2,000', rateKn: 'ನಿಗದಿತ ₹೨,೦೦೦', group: 'Corporate' },
  ];

  const filteredRates = useMemo(() => {
    return FEE_SCHEDULE.filter(item => {
      const matchesSearch = 
        item.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryKn.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup = activeGroup === 'All' || item.group === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, activeGroup]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pb-12">
      
      {/* Top Banner Component */}
      <ServicesHero
        badgeText={locale === 'kn' ? 'ಎಸಿಸಿ ಕಾರ್ಯನಿರ್ವಹಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'ACC PORTAL KARNATAKA'}
        title={locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್' : 'E-STAMPING'}
        subtitle={
          locale === 'kn'
            ? 'ಕರ್ನಾಟಕದಾದ್ಯಂತ SHCIL ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಅಧಿಕೃತ ಸಂಗ್ರಹಣೆ ಕೇಂದ್ರಗಳಿಗೆ (ACC) ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಪರಿಷ್ಕೃತ ಮುದ್ರಾಂಕ ಶುಲ್ಕ ಪಟ್ಟಿ.'
            : 'Official operational manual & fast rate lookup matrix for Authorized Collection Centers (ACCs) under StockHolding.'
        }
        imageSrc="/images/Estamping/Estamping.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-8 sm:pt-12">
        
        {/* TOP INTRO SECTION: Unboxed Clean Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-2">
          
          {/* Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-xs">
            <Image
              src="/images/Estamping/Estamping.webp"
              alt="E-Stamping ACC Operations"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-3 py-1 bg-[#edf2f7] text-[#1e3a8a] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.06em] rounded-full">
              {locale === 'kn' ? 'ಎಸಿಸಿ ಕಾರ್ಯನಿರ್ವಹಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'AUTHORIZED COLLECTION CENTERS (ACC)'}
            </div>

            <h1 className="text-2xl sm:text-[32px] font-[900] text-[#d97706] tracking-tight leading-[1.15] uppercase">
              {locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್' : 'E-STAMPING'}
            </h1>

            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.6] font-normal pt-1">
              {locale === 'kn'
                ? 'ಕರ್ನಾಟಕ ಸರ್ಕಾರ ಮತ್ತು ಸ್ಟಾಕ್ ಹೋಲ್ಡಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ಆಫ್ ಇಂಡಿಯಾ ಲಿಮಿಟೆಡ್ (SHCIL) ಸಹಯೋಗದೊಂದಿಗೆ ಅಧಿಕೃತ ಸಂಗ್ರಹಣೆ ಕೇಂದ್ರಗಳಿಗೆ (ACC) ಸಮಗ್ರ ಕಾರ್ಯಾಚರಣೆ ನಿಯಮಾವಳಿಗಳು.'
                : 'Welcome to the official information portal for Authorized Collection Centers (ACCs) carrying out e-Stamping activities under StockHolding Corporation of India Limited (SHCIL) for the State of Karnataka.'
              }
            </p>

            <div className="border-l-[4px] border-[#d97706] bg-[#fffdf5] p-3.5 sm:p-4 rounded-r-xl border-y border-r border-amber-200/50">
              <p className="text-[13px] sm:text-[14px] text-slate-800 leading-relaxed">
                <strong className="text-slate-900 font-bold">Purpose:</strong> Periodically audited by StockHolding & Government Officials.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3.5 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-xl sm:text-[26px] font-[900] text-[#1e3a8a] leading-none">100%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">COMPLIANCE</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-xl sm:text-[26px] font-[900] text-[#1e3a8a] leading-none">25+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">ARTICLES</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-xl sm:text-[26px] font-[900] text-[#1e3a8a] leading-none">SHCIL</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">AUDITED</div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: Exact Banner Dark Header & Embedded White Cards matching image_16f285 */}
        <section className="bg-[#475569] rounded-3xl overflow-hidden shadow-xl text-white pt-10 pb-8 px-4 sm:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              {locale === 'kn' ? 'ಎಸಿಸಿ ಕಾರ್ಯಾಚರಣೆಯ ಮುಖ್ಯ ಜವಾಬ್ದಾರಿಗಳು' : 'ACC OPERATIONAL STANDARD OPERATING PROCEDURES (SOP)'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-300 text-xs sm:text-sm pt-1">
              {locale === 'kn'
                ? 'SHCIL ಮತ್ತು ಸರ್ಕಾರಿ ನಿಯಮಾವಳಿಗಳ ಪ್ರಕಾರ ದೈನಂದಿನ ಕಾರ್ಯಾಚರಣೆಯ ಕಾರ್ಯವಿಧಾನಗಳು.'
                : 'Select a section to review daily protocols mandated by SHCIL.'}
            </p>
          </div>

          {/* Dark Header Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <button
              onClick={() => setActiveTab('routine')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'routine'
                  ? 'bg-[#d97706] text-slate-950 border-amber-400 shadow-lg scale-105'
                  : 'bg-slate-700/80 text-slate-200 border-slate-600 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              {locale === 'kn' ? 'ದೈನಂದಿನ ದಿನಚರಿ' : 'Daily Routine'}
            </button>

            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'hardware'
                  ? 'bg-[#d97706] text-slate-950 border-amber-400 shadow-lg scale-105'
                  : 'bg-slate-700/80 text-slate-200 border-slate-600 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Printer className="w-4 h-4" />
              {locale === 'kn' ? 'ಕಾಗದ ಮತ್ತು ಹಾರ್ಡ್‌‌ವೇರ್' : 'Paper & Hardware'}
            </button>

            <button
              onClick={() => setActiveTab('verification')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'verification'
                  ? 'bg-[#d97706] text-slate-950 border-amber-400 shadow-lg scale-105'
                  : 'bg-slate-700/80 text-slate-200 border-slate-600 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              {locale === 'kn' ? 'ಉನ್ನತ ಮೌಲ್ಯದ ಪ್ರೋಟೋಕಾಲ್' : 'High-Value Protocol'}
            </button>

            <button
              onClick={() => setActiveTab('donots')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'donots'
                  ? 'bg-[#d97706] text-slate-950 border-amber-400 shadow-lg scale-105'
                  : 'bg-slate-700/80 text-slate-200 border-slate-600 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <XCircle className="w-4 h-4" />
              {locale === 'kn' ? 'ಕಟ್ಟುನಿಟ್ಟಾದ ನಿಷೇಧಗಳು' : 'Strict Don’ts'}
            </button>
          </div>

          {/* White Inner Card Container matching image_16f285 */}
          <div className="bg-[#f8fafc] text-slate-900 rounded-2xl p-6 sm:p-8 space-y-6 shadow-inner">
            <h3 className="text-base sm:text-lg font-bold text-[#b45309] tracking-wide uppercase border-b border-slate-200 pb-3">
              {activeTab === 'routine' && (locale === 'kn' ? 'ದೈನಂದಿನ ಕಾರ್ಯವಿಧಾನಗಳು' : 'Daily Operational Procedures')}
              {activeTab === 'hardware' && (locale === 'kn' ? 'ಕಾಗದ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ನಿಯಮಗಳು' : 'Hardware & Paper Guidelines')}
              {activeTab === 'verification' && (locale === 'kn' ? 'ಉನ್ನತ ಮೌಲ್ಯದ ಪರಿಶೀಲನೆ ಪ್ರೋಟೋಕಾಲ್' : 'High-Value Stamp Verification')}
              {activeTab === 'donots' && (locale === 'kn' ? 'ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಷೇಧಗಳು' : 'Prohibited Actions & Mandates')}
            </h3>

            {/* Routine Tab */}
            {activeTab === 'routine' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Morning Test Print</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Always run a test print every morning before commencing customer e-Stamping transactions.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Mandatory Displays</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Prominently display Center Name, Address, Phone, Timings, Article List, & Charges on Notice Boards.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Receipt & Log Out</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatorily issue customer receipts for service charges and log out immediately when stepping away.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Hardware Tab */}
            {activeTab === 'hardware' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">80 GSM Bond Paper Standard</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Strictly use 80 GSM Quality Bond Paper for all printed e-Stamp certificates.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Hardware & Maintenance</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Replace toner cartridges as soon as capacity drops to 80%. Dedicated PC & Printer required.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Verification Tab */}
            {activeTab === 'verification' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">High Value Certificate Preview</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Always preview high-value certificates before issuing and verify client signatures.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-[#1e3a8a] text-white rounded-xl shrink-0 mt-0.5">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Supervisor Endorsement</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Both User & Supervisor must endorse request numbers directly on the requisition form.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Don'ts Tab */}
            {activeTab === 'donots' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-rose-600 text-white rounded-xl shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Zero Manual Alterations</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never make any manual corrections, pen marks, or erasures on a printed certificate.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-2xs flex items-start gap-4">
                  <div className="p-3 bg-rose-600 text-white rounded-xl shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Strict Credential Secrecy</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never share user passwords, OTPs, or printer connections with external parties.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Clean Rate Matrix List */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                2. Karnataka Stamp Duty Fee Matrix
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Revised rates per Karnataka Stamp Act Amendment. Search or filter by category.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                {(['All', 'Agreements', 'Banking', 'Corporate'] as const).map((group) => (
                  <button
                    key={group}
                    onClick={() => setActiveGroup(group)}
                    className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                      activeGroup === group ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredRates.length > 0 ? (
              filteredRates.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-colors flex flex-col justify-between space-y-3 ${
                    item.highlight 
                      ? 'bg-amber-50/30 border-amber-200' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 font-mono font-bold text-[10px] rounded">
                        Art. {item.article}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-slate-400">
                        {item.group}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-xs leading-snug">
                      {locale === 'kn' ? item.categoryKn : item.categoryEn}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 text-[11px]">Revised Rate:</span>
                    <span className="font-mono font-bold text-slate-900">
                      {locale === 'kn' ? item.rateKn : item.rateEn}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-slate-500 text-xs bg-white rounded-xl border border-slate-200">
                No articles found matching "{searchTerm}".
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Official Contact Information */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              3. SHCIL Regional Office & Helpdesk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-amber-500" /> Regional Office
              </div>
              <p className="text-slate-600 leading-relaxed">
                Stock Holding Corporation of India Limited<br />
                Stock Exchange Towers, No. 51, 1st Cross,<br />
                J.C. Road, Bangalore – 560 027
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <Phone className="w-4 h-4 text-amber-500" /> Phone & Fax
              </div>
              <p className="text-slate-600 font-mono space-y-0.5">
                <span className="block">080-2299 5236 / 2299 5246</span>
                <span className="block">080-2299 5249</span>
                <span className="block text-slate-400">Fax: 080-2299 5211</span>
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <ExternalLink className="w-4 h-4 text-amber-500" /> Web Portal
              </div>
              <p className="text-slate-600">
                Official online collection & verification system:
              </p>
              <a
                href="https://www.online.stockholding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono font-bold text-amber-600 hover:underline"
              >
                www.online.stockholding.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}