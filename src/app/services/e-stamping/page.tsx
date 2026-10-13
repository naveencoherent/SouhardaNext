'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  XCircle, 
  Search, 
  Phone, 
  ExternalLink, 
  Printer, 
  ShieldAlert, 
  BookOpen,
  Zap
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
    { article: '04', categoryEn: 'Affidavit', categoryKn: 'ಪ್ರಮಾಣ ಪತ್ರ (Affidavit)', rateEn: 'Fixed ₹100', rateKn: 'ನಿಗದಿತ ₹೧೦೦', group: 'Agreements' },
    { article: '05(a)', categoryEn: 'Sale of Bill of Exchange', categoryKn: 'ವಿನಿಮಯ ಪತ್ರದ ಮಾರಾಟ', rateEn: 'Re.1 for every ₹10,000', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೧', group: 'Agreements' },
    { article: '05(b)', categoryEn: 'Purchase/Sale of Govt Security', categoryKn: 'ಸರ್ಕಾರಿ ಭದ್ರತೆಗಳ ಖರೀದಿ/ಮಾರಾಟ', rateEn: 'Re.1 for every ₹10,000', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೧', group: 'Agreements' },
    { article: '05(e)(ii)', categoryEn: 'Immovable Property Sale (No Possession)', categoryKn: 'ಸ್ಥಾವರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನವಿಲ್ಲದೆ)', rateEn: '0.5% (Min ₹500)', rateKn: '೦.೫% (ಕನಿಷ್ಠ ₹೫೦೦)', group: 'Agreements' },
    { article: '05(g)(i)', categoryEn: 'Movable Property Sale (With Possession)', categoryKn: 'ಚರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನದೊಂದಿಗೆ)', rateEn: '3% of market value', rateKn: '೩% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ', group: 'Agreements' },
    { article: '05(g)(ii)', categoryEn: 'Movable Property Sale (No Possession)', categoryKn: 'ಚರ ಆಸ್ತಿ ಒಪ್ಪಂದ (ಸ್ವಾಧೀನವಿಲ್ಲದೆ)', rateEn: '0.1% (Min ₹500; Max ₹20,000)', rateKn: '೦.೧% (₹೫೦೦ - ₹೨೦,೦೦೦)', group: 'Agreements' },
    { article: '05(i-b)', categoryEn: 'Advertisement / Broadcasting Agreement', categoryKn: 'ಜಾಹೀರಾತು ಒಪ್ಪಂದ', rateEn: '0.1% (Min ₹200)', rateKn: '೦.೧% (ಕನಿಷ್ಠ ₹೨೦೦)', group: 'Agreements' },
    { article: '05(i-c)', categoryEn: 'Intellectual Property Transfer', categoryKn: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಹಕ್ಕುಗಳ ವರ್ಗಾವಣೆ', rateEn: '0.1% (Min ₹200)', rateKn: '೦.೧% (ಕನಿಷ್ಠ ₹೨೦೦)', group: 'Agreements' },
    { article: '05(i-d)(i)', categoryEn: 'Service Agreement (Up to ₹10 Lakhs)', categoryKn: 'ಸೇವಾ ಒಪ್ಪಂದ (₹೧೦ ಲಕ್ಷದವರೆಗೆ)', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements' },
    { article: '05(i-d)(ii)', categoryEn: 'Service Agreement (Above ₹10 Lakhs)', categoryKn: 'ಸೇವಾ ಒಪ್ಪಂದ (₹೧೦ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹500 + ₹500/10L (Max ₹10L)', rateKn: '₹೫೦೦ + ₹೫೦೦/೧೦L (ಗರಿಷ್ಠ ₹೧೦L)', group: 'Agreements' },
    { article: '05(i-e)(i)', categoryEn: 'Chit Agreement (Up to ₹1 Lakh)', categoryKn: 'ಚಿಟ್ ಒಪ್ಪಂದ (₹೧ ಲಕ್ಷದವರೆಗೆ)', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements' },
    { article: '05(i-e)(ii)', categoryEn: 'Chit Agreement (Above ₹1 Lakh)', categoryKn: 'ಚಿಟ್ ಒಪ್ಪಂದ (₹೧ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹500 + ₹100 per additional ₹1L', rateKn: '₹೫೦೦ + ಪ್ರತಿ ₹೧L ಗೆ ₹೧೦೦', group: 'Agreements' },
    { article: '05(j)', categoryEn: 'Agreement (General / Any other)', categoryKn: 'ಸಾಮಾನ್ಯ ಒಪ್ಪಂದಗಳು', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Agreements' },

    // Banking
    { article: '06(1)', categoryEn: 'Deposit of Title Deeds (DTD Loan)', categoryKn: 'ಟೈಟಲ್ ಡೀಡ್ ಠೇವಣಿ ಸಾಲ', rateEn: '0.5% on loan (Min ₹500)', rateKn: 'ಸಾಲದ ೦.೫% (ಕನಿಷ್ಠ ₹೫೦೦)', group: 'Banking' },
    { article: '06(2)', categoryEn: 'Pledge of Movable Property (> ₹1L)', categoryKn: 'ಚರ ಆಸ್ತಿ ಅಡಮಾನ (ಸಾಲ > ₹೧L)', rateEn: '0.5% on loan amount', rateKn: 'ಸಾಲದ ೦.೫%', group: 'Banking' },
    { article: '12', categoryEn: 'Bond (Secured Amount > ₹1,000)', categoryKn: 'ಬಾಂಡ್ (₹೧,೦೦೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹2 per ₹100 (Min ₹100)', rateKn: 'ಪ್ರತಿ ₹೧೦೦ ಕ್ಕೆ ₹೨ (ಕನಿಷ್ಠ ₹೧೦೦)', group: 'Banking' },
    { article: '34(d)', categoryEn: 'Mortgage / Hypothecation of Movables', categoryKn: 'ಚರ ಆಸ್ತಿ ಹೈಪೋಥಿಕೇಶನ್', rateEn: '₹50 per ₹10,000 (Max ₹10L)', rateKn: 'ಪ್ರತಿ ₹೧೦,೦೦೦ ಕ್ಕೆ ₹೫೦ (ಗರಿಷ್ಠ ₹೧೦L)', group: 'Banking' },
    { article: '56(i)', categoryEn: 'Paper Bank Guarantee', categoryKn: 'ಭೌತಿಕ ಬ್ಯಾಂಕ್ ಗ್ಯಾರಂಟಿ', rateEn: 'Fixed ₹300', rateKn: 'ನಿಗದಿತ ₹೩೦೦', group: 'Banking' },
    { article: '56(ii)', categoryEn: 'e-Bank Guarantee', categoryKn: 'ಇ-ಬ್ಯಾಂಕ್ ಗ್ಯಾರಂಟಿ', rateEn: 'Fixed ₹200', rateKn: 'ನಿಗದಿತ ₹೨೦೦', group: 'Banking' },

    // Corporate
    { article: '10', categoryEn: 'Articles of Association (Company)', categoryKn: 'ಆರ್ಟಿಕಲ್ಸ್ ಆಫ್ ಅಸೋಸಿಯೇಷನ್', rateEn: '₹5,000 per ₹10L Capital (Max ₹1 Cr)', rateKn: 'ಪ್ರತಿ ₹೧೦L ಗೆ ₹೫,೦೦೦ (ಗರಿಷ್ಠ ₹೧ Cr)', group: 'Corporate' },
    { article: '17', categoryEn: 'Advocate Enrolment Certificate', categoryKn: 'ವಕೀಲರ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ', rateEn: 'Fixed ₹2,000', rateKn: 'ನಿಗದಿತ ₹೨,೦೦೦', group: 'Corporate' },
    { article: '20(4)', categoryEn: 'Company Amalgamation Order', categoryKn: 'ಕಂಪನಿ ವಿಲೀನ ಆದೇಶ', rateEn: '5% on market value (Max ₹25 Cr)', rateKn: '೫% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ (ಗರಿಷ್ಠ ₹೨೫ Cr)', group: 'Corporate' },
    { article: '22', categoryEn: 'Counterpart / Duplicate Document', categoryKn: 'ನಕಲು ದಾಖಲೆ', rateEn: 'Fixed ₹1,000', rateKn: 'ನಿಗದಿತ ₹೧,೦೦೦', group: 'Corporate' },
    { article: '25', categoryEn: 'Divorce Writing', categoryKn: 'ವಿಚ್ಛೇದನ ಪತ್ರ', rateEn: 'Fixed ₹500', rateKn: 'ನಿಗದಿತ ₹೫೦೦', group: 'Corporate' },
    { article: '33', categoryEn: 'Memorandum of Association', categoryKn: 'ಮೆಮೊರಾಂಡಮ್ ಆಫ್ ಅಸೋಸಿಯೇಷನ್', rateEn: 'Fixed ₹5,000', rateKn: 'ನಿಗದಿತ ₹೫,೦೦೦', group: 'Corporate' },
    { article: '40(A)', categoryEn: 'Partnership Firm Formation', categoryKn: 'ಪಾಲುದಾರಿಕೆ ಸಂಸ್ಥೆ ರಚನೆ', rateEn: 'Fixed ₹2,000', rateKn: 'ನಿಗದಿತ ₹೨,೦೦೦', group: 'Corporate' },
    { article: '40A(a)', categoryEn: 'LLP Agreement (Capital up to ₹10L)', categoryKn: 'ಎಲ್‌ಎಲ್‌ಪಿ ಒಪ್ಪಂದ (₹೧೦L ವರೆಗೆ)', rateEn: 'Fixed ₹5,000', rateKn: 'ನಿಗದಿತ ₹೫,೦೦೦', group: 'Corporate' },
    { article: '40A(b)', categoryEn: 'LLP Agreement (Capital > ₹10L)', categoryKn: 'ಎಲ್‌ಎಲ್‌ಪಿ ಒಪ್ಪಂದ (₹೧೦L ಕ್ಕಿಂತ ಹೆಚ್ಚು)', rateEn: '₹5,000 + ₹1,000/5L (Max ₹25L)', rateKn: '₹೫,೦೦೦ + ₹೧,೦೦೦/೫L (ಗರಿಷ್ಠ ₹೧೦L)', group: 'Corporate' },
    { article: '41(d)', categoryEn: 'Power of Attorney (5 to 10 persons)', categoryKn: 'ಪವರ್ ಆಫ್ ಅಟಾರ್ನಿ (೫ - ೧೦ ಜನರಿಗೆ)', rateEn: 'Fixed ₹1,000', rateKn: 'ನಿಗದಿತ ₹೧,೦೦೦', group: 'Corporate' },
    { article: '41(e/eb)', categoryEn: 'Power of Attorney (Sale of Property)', categoryKn: 'ಪವರ್ ಆಫ್ ಅಟಾರ್ನಿ (ಆಸ್ತಿ ಮಾರಾಟ)', rateEn: '5% on market value', rateKn: '೫% ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ', group: 'Corporate' },
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

  // Group background colors for table rows
  const getGroupBgColor = (group: 'Agreements' | 'Banking' | 'Corporate') => {
    switch (group) {
      case 'Agreements':
        return 'bg-amber-50/50 hover:bg-amber-100/60';
      case 'Banking':
        return 'bg-sky-50/60 hover:bg-sky-100/60';
      case 'Corporate':
        return 'bg-emerald-50/60 hover:bg-emerald-100/60';
      default:
        return 'bg-white';
    }
  };

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

      {/* TOP INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-8 sm:pt-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-2">
          
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-xs">
            <Image
              src="/images/Estamping/Estamping.webp"
              alt="E-Stamping ACC Operations"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-3 py-1 bg-[#edf2f7] text-[#1e3a8a] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.06em] rounded-full">
              {locale === 'kn' ? 'ಎಸಿಸಿ ಕಾರ್ಯನಿರ್ವಹಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'AUTHORIZED COLLECTION CENTERS (ACC)'}
            </div>

            <h1 className="text-2xl sm:text-[32px] font-[900] text-[#d97706] tracking-tight leading-[1.15] uppercase">
              {locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಕಾರ್ಯಾಚರಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'E-STAMPING OPERATOR PORTAL'}
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
      </div>

      {/* SECTION 1: DARK COOPERATIVE-STYLE FULL-WIDTH WRAPPER */}
      <section className="bg-gradient-to-b from-[#3d4d5e] to-[#2b3744] text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {locale === 'kn' ? 'ಎಸಿಸಿ ಕಾರ್ಯಾಚರಣೆಯ ಪ್ರಮುಖ ಮಾರ್ಗಸೂಚಿಗಳು' : 'ACC Operational SOP Guidelines'}
            </h2>
            <div className="w-20 h-1 bg-[#d97706] mx-auto rounded-full" />
            <p className="text-slate-300 text-xs sm:text-sm pt-1 max-w-xl mx-auto">
              {locale === 'kn'
                ? 'SHCIL ಮತ್ತು ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ನಿಗದಿಪಡಿಸಿದ ದೈನಂದಿನ ಕಾರ್ಯಾಚರಣೆ ನಿಯಮಗಳು'
                : 'Key Operating Standards & Protocols Mandated for Authorized Collection Centers'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('routine')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'routine'
                  ? 'bg-[#d97706] text-slate-950 border-[#f59e0b] shadow-lg'
                  : 'bg-slate-700/60 text-slate-200 border-slate-600/60 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              {locale === 'kn' ? 'ದೈನಂದಿನ ದಿನಚರಿ' : 'Daily Routine'}
            </button>

            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'hardware'
                  ? 'bg-[#d97706] text-slate-950 border-[#f59e0b] shadow-lg'
                  : 'bg-slate-700/60 text-slate-200 border-slate-600/60 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Printer className="w-4 h-4" />
              {locale === 'kn' ? 'ಕಾಗದ ಮತ್ತು ಹಾರ್ಡ್ವೇರ್' : 'Paper & Hardware'}
            </button>

            <button
              onClick={() => setActiveTab('verification')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'verification'
                  ? 'bg-[#d97706] text-slate-950 border-[#f59e0b] shadow-lg'
                  : 'bg-slate-700/60 text-slate-200 border-slate-600/60 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              {locale === 'kn' ? 'ಉನ್ನತ ಮೌಲ್ಯದ ಪ್ರೋಟೋಕಾಲ್' : 'High-Value Protocol'}
            </button>

            <button
              onClick={() => setActiveTab('donots')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'donots'
                  ? 'bg-[#d97706] text-slate-950 border-[#f59e0b] shadow-lg'
                  : 'bg-slate-700/60 text-slate-200 border-slate-600/60 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <XCircle className="w-4 h-4" />
              {locale === 'kn' ? 'ಕಟ್ಟುನಿಟ್ಟಾದ ನಿಷೇಧಗಳು' : 'Strict Don’ts'}
            </button>
          </div>

          <div className="bg-[#f8fafc] text-slate-900 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-[#b45309] tracking-wide border-b border-slate-200 pb-3">
              {activeTab === 'routine' && (locale === 'kn' ? 'ದೈನಂದಿನ ಕಾರ್ಯವಿಧಾನಗಳು' : 'Daily Operational Procedures')}
              {activeTab === 'hardware' && (locale === 'kn' ? 'ಕಾಗದ ಮತ್ತು ಯಂತ್ರಾಂಶ ನಿಯಮಗಳು' : 'Hardware & Paper Specifications')}
              {activeTab === 'verification' && (locale === 'kn' ? 'ಉನ್ನತ ಮೌಲ್ಯದ ಪರಿಶೀಲನೆ' : 'High-Value Stamp Verification Protocol')}
              {activeTab === 'donots' && (locale === 'kn' ? 'ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಷೇಧಗಳು' : 'Prohibited Operational Actions')}
            </h3>

            {activeTab === 'routine' && (
              <div className="divide-y divide-slate-200/80">
                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">01.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Morning Alignment Test</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Always run a test print every morning before commencing customer e-Stamping transactions.
                    </p>
                  </div>
                </div>

                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">02.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Mandatory Public Displays</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Prominently display Center Name, Address, Phone, Timings, Article List, & Charges on Notice Boards.
                    </p>
                  </div>
                </div>

                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">03.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Customer Receipt & Counter Logout</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Mandatorily issue customer receipts for service charges and log out immediately when stepping away from the counter.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hardware' && (
              <div className="divide-y divide-slate-200/80">
                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">01.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">80 GSM Quality Bond Paper</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Strictly use 80 GSM Quality Bond Paper for e-Stamp certificates. Shuffle paper bundles before loading into printer trays.
                    </p>
                  </div>
                </div>

                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">02.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Dedicated Hardware Setup</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Replace toner cartridges as soon as capacity drops to 80%. Maintain a standalone PC and Printer used exclusively for e-Stamping.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'verification' && (
              <div className="divide-y divide-slate-200/80">
                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">01.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">High Value On-Screen Preview</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Always preview high-value certificates before issuing. Cross-verify client signatures against physical requisition forms.
                    </p>
                  </div>
                </div>

                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-[#d97706] text-base sm:text-lg font-mono">02.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Dual Operator Endorsement</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Both User and Supervisor must endorse high-value stamp request numbers directly on the client physical requisition document.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'donots' && (
              <div className="divide-y divide-slate-200/80">
                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-rose-600 text-base sm:text-lg font-mono">01.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Zero Manual Corrections</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Never make any manual corrections, pen marks, or erasures on a printed e-Stamp certificate.
                    </p>
                  </div>
                </div>

                <div className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="font-extrabold text-rose-600 text-base sm:text-lg font-mono">02.</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Strict Credential Secrecy</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Never share user passwords, OTPs, or printer connections with external parties or refilled cartridges.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: KARNATAKA STAMP DUTY FEE MATRIX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
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

          {/* List Rows */}
          <div className="divide-y divide-slate-200/70 border-y border-slate-200/70">
            {filteredRates.length > 0 ? (
              filteredRates.map((item, idx) => (
                <div
                  key={idx}
                  className={`py-3 px-3 transition-colors flex items-center justify-between gap-4 ${getGroupBgColor(item.group)}`}
                >
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1">
                    <span className="font-mono font-extrabold text-xs sm:text-sm text-[#d97706] shrink-0 w-8 text-left">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>

                    <span className="px-2 py-0.5 bg-white border border-slate-200 text-slate-800 font-mono font-bold text-[10px] rounded shrink-0 w-20 text-center shadow-2xs">
                      Art. {item.article}
                    </span>

                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {locale === 'kn' ? item.categoryKn : item.categoryEn}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 hidden md:inline-block w-24 text-right">
                      {item.group}
                    </span>
                    
                    <div className="w-52 sm:w-64 bg-white border border-slate-200/90 py-1.5 px-3.5 rounded-lg text-right shadow-2xs shrink-0">
                      <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm block truncate">
                        {locale === 'kn' ? item.rateKn : item.rateEn}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-slate-500 text-xs">
                No articles found matching "{searchTerm}".
              </div>
            )}
          </div>
        </section>
      </div>

      {/* SECTION 3: PLAIN WHITE BACKGROUND WITH CLEAN BLUE GRID PATTERN */}
  <section
      className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200/80 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(29, 98, 240, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(29, 98, 240, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Grid Split (50 / 50) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Badge, Title & Description */}
          <div className="space-y-6">
            {/* Top Blue Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#dbe8fe] border border-[#bfd7fe] text-[#1e3a8a] text-xs sm:text-sm font-semibold tracking-wide">
              SHCIL Regional Office & Helpdesk
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#0f172a] tracking-tight leading-[1.12]">
              Empowering Operations with <span className="text-[#1d62f0] block sm:inline">Official Support</span>
            </h2>

            {/* Body Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              Stock Holding Corporation of India Limited, Stock Exchange Towers, No. 51, 1st Cross, J.C. Road, Bangalore – 560 027. Driving seamless technical assistance and official e-Stamping helpline services across Karnataka.
            </p>
          </div>

          {/* Right Side: Contact Cards & Buttons */}
          <div className="space-y-6">
            
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
                <span className="font-bold text-slate-900 block text-sm">
                  SHCIL Regional Office
                </span>
                <span className="text-slate-600 leading-relaxed block">
                  Stock Exchange Towers, No. 51, 1st Cross, J.C. Road, Bangalore – 560 027
                </span>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
                <span className="font-bold text-slate-900 block text-sm">
                  Helpdesk Contact
                </span>
                <div className="text-slate-600 font-mono text-xs leading-relaxed">
                  <span className="block">Phone: 080-2299 5236 / 2299 5246</span>
                  <span className="block">Fax: 080-2299 5211 / 2299 5249</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://www.online.stockholding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1d62f0] text-white font-bold text-sm shadow-md hover:bg-blue-700 transition-colors"
              >
                Visit Web Portal
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="tel:08022995236"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f1f5f9] text-slate-800 border border-slate-300/80 font-medium text-sm hover:bg-slate-200/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                Contact Helpdesk
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
    </main>
  );
}