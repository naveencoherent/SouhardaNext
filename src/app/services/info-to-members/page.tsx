'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileSpreadsheet, 
  Download, 
  Phone, 
  Scale, 
  Calculator, 
  GraduationCap, 
  FileText, 
  Building2, 
  Gavel 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';

export default function InfoToMembersPage() {
  const { locale } = useLanguage();

  // 1. STATUTORY FORMS & COMPLIANCE
  const SECTION_1_FORMS = [
    {
      id: '01',
      title: locale === 'kn' ? 'ವಾರ್ಷಿಕ ವರದಿ ಸಲ್ಲಿಕೆ ನಮೂನೆಗಳು' : 'Annual Return Filing Forms',
      sub: locale === 'kn' ? 'ವಾರ್ಷಿಕ ವರದಿಗಳು, ಆಡಿಟ್ ವರದಿಗಳು ಮತ್ತು ಆಯವ್ಯಯ ಪಟ್ಟಿ ಸಲ್ಲಿಕೆ ಪ್ರಪತ್ರಗಳು' : 'Standard formats for submitting annual reports, audit reports, and balance sheets',
      type: 'PDF',
      size: '1.2 MB',
      url: '/assets/docs/annual-return-forms.pdf'
    },
    {
      id: '02',
      title: locale === 'kn' ? 'ಮಾದರಿ ಉಪನಿಯಮಗಳು (Model Bye-Laws)' : 'Model Bye-Laws',
      sub: locale === 'kn' ? 'ಪತ್ತಿನ, ಅನುಭೋಗಿಗಳ, ವಿವಿಧೋದ್ದೇಶ, ಗೃಹ ನಿರ್ಮಾಣ ಮತ್ತು ಕೃಷಿ ಸಂಘಗಳ ಉಪನಿಯಮಗಳು' : 'Approved model bye-laws for Credit, Consumer, Multi-Purpose, Housing, and Agricultural societies',
      type: 'PDF',
      size: '2.8 MB',
      url: '/assets/docs/model-byelaws.pdf'
    },
    {
      id: '03',
      title: locale === 'kn' ? 'ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ನಮೂನೆ' : 'Membership Application Form',
      sub: locale === 'kn' ? 'KSSFCL ನೊಂದಿಗೆ ಹೊಸ ಸಂಯೋಜನೆ/ಸದಸ್ಯತ್ವಕ್ಕಾಗಿ ಅರ್ಜಿ' : 'Form to apply for new affiliation or membership with KSSFCL',
      type: 'PDF',
      size: '650 KB',
      url: '/assets/docs/membership-application-form.pdf'
    },
    {
      id: '04',
      title: locale === 'kn' ? 'ಅನಾಪತ್ತಿ ಪ್ರಮಾಣಪತ್ರ (NOC) ಅರ್ಜಿ ನಮೂನೆ' : 'No Objection Certificate (NOC) Request Form',
      sub: locale === 'kn' ? 'ಶಾಖಾ ವಿಸ್ತರಣೆ, ಕಾರ್ಯಾಚರಣೆ ಪ್ರದೇಶದ ವಿಸ್ತರಣೆ ಅಥವಾ ನೋಂದಣಿ ನವೀಕರಣಕ್ಕಾಗಿ' : 'For branch expansion, area of operation extension, or registration updates',
      type: 'PDF',
      size: '520 KB',
      url: '/assets/docs/noc-request-form.pdf'
    }
  ];

  // 2. LEGAL & REGULATORY DOCUMENTS
  const SECTION_2_LEGAL = [
    {
      id: '01',
      title: locale === 'kn' ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭' : 'Karnataka Souharda Sahakari Act, 1997',
      sub: locale === 'kn' ? 'ಎಲ್ಲಾ ಇತ್ತೀಚಿನ ತಿದ್ದುಪಡಿಗಳೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಕಾಯ್ದೆಯ ಪಠ್ಯ' : 'Full text of the Act along with all relevant statutory amendments',
      type: 'PDF',
      size: '3.4 MB',
      url: '/assets/docs/souharda-act-1997.pdf'
    },
    {
      id: '02',
      title: locale === 'kn' ? 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿಯಮಗಳು & ಆದೇಶಗಳು' : 'Karnataka Souharda Sahakari Rules & Government Orders',
      sub: locale === 'kn' ? 'ನಿಯಮಗಳು, ಅಧಿಸೂಚನೆಗಳ ಪ್ರತಿಗಳು ಮತ್ತು ಸರ್ಕಾರದ ಆದೇಶಗಳ ಸಂಕಲನ' : 'Detailed rules, notification copies, and government orders regulating cooperatives',
      type: 'PDF',
      size: '2.1 MB',
      url: '/assets/docs/souharda-rules-orders.pdf'
    },
    {
      id: '03',
      title: locale === 'kn' ? 'ಮಧ್ಯಸ್ಥಿಕೆ ಮತ್ತು ವಿವಾದ ಪರಿಹಾರ ಮಾರ್ಗಸೂಚಿಗಳು' : 'Arbitration & Dispute Resolution Guidelines',
      sub: locale === 'kn' ? 'ವಿವಾದ ದೂರು ಸಲ್ಲಿಕೆ ಪ್ರಪತ್ರಗಳು ಮತ್ತು ನ್ಯಾಯಾಧಿಕಾರಿ ನೇಮಕಾತಿ ವಿಧಾನಗಳು' : 'Formats for filing dispute claims and referee appointment procedures',
      type: 'PDF',
      size: '1.1 MB',
      url: '/assets/docs/arbitration-dispute-guidelines.pdf'
    }
  ];

  // 3. FINANCIAL & AUDIT GUIDELINES
  const SECTION_3_FINANCIAL = [
    {
      id: '01',
      title: locale === 'kn' ? 'ಪ್ರಮಾಣೀಕೃತ ಆಡಿಟ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ನಮೂನೆಗಳು' : 'Standard Audit Checklist & Formats',
      sub: locale === 'kn' ? 'ಆಂತರಿಕ ಮತ್ತು ಬಾಹ್ಯ ಲೆಕ್ಕಪರಿಶೋಧಕರಿಗಾಗಿ ಪ್ರಮಾಣೀಕೃತ ಮಾದರಿಗಳು' : 'Standardized templates for internal and external auditors',
      type: 'PDF',
      size: '980 KB',
      url: '/assets/docs/standard-audit-checklist.pdf'
    },
    {
      id: '02',
      title: locale === 'kn' ? 'ವಿವೇಕಯುಕ್ತ ಮಾನದಂಡಗಳು ಮತ್ತು NPA ಮಾರ್ಗದರ್ಶಿಗಳು' : 'Prudential Norms & NPA Guidelines',
      sub: locale === 'kn' ? 'ನಿಷ್ಕ್ರಿಯ ಆಸ್ತಿಗಳು (NPA), ಕಾಯ್ದಿರಿಸುವಿಕೆ ಮತ್ತು ದ್ರವ್ಯತೆ ನಿರ್ವಹಣೆ ನಿಯಮಗಳು' : 'Official norms regarding Non-Performing Assets (NPAs), provisioning, and liquidity management',
      type: 'PDF',
      size: '1.5 MB',
      url: '/assets/docs/prudential-norms-npa.pdf'
    },
    {
      id: '03',
      title: locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಶುಲ್ಕ ರಚನೆ (Fee Structure)' : 'Statutory Fee Structure',
      sub: locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಮೇಲ್ವಿಚಾರಣಾ ಶುಲ್ಕ, ಶಿಕ್ಷಣ ನಿಧಿ ವಂತಿಕೆ ಮತ್ತು ವಾರ್ಷಿಕ ಚಂದಾದಾರಿಕೆ ಪಟ್ಟಿ' : 'Chart outlining statutory supervision fees, education fund contributions, and annual membership dues',
      type: 'PDF',
      size: '450 KB',
      url: '/assets/docs/statutory-fee-structure.pdf'
    }
  ];

  // 4. TRAINING, EDUCATION & MEDIA
  const SECTION_4_TRAINING = [
    {
      id: '01',
      title: locale === 'kn' ? 'ವಾರ್ಷಿಕ ತರಬೇತಿ ವೇಳಾಪಟ್ಟಿ (Training Calendar)' : 'Annual Training Calendar',
      sub: locale === 'kn' ? 'ನಿರ್ದೇಶಕರ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಿಬ್ಬಂದಿ ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ವಿಚಾರಸಂಕಿರಣಗಳ ಪಟ್ಟಿ' : 'Schedule of upcoming director training programs, staff development workshops, and seminars',
      type: 'PDF',
      size: '1.8 MB',
      url: '/assets/docs/annual-training-calendar.pdf'
    },
    {
      id: '02',
      title: locale === 'kn' ? 'ತರಬೇತಿ ನೋಂದಣಿ ಅರ್ಜಿ ನಮೂನೆ' : 'Training Registration Form',
      sub: locale === 'kn' ? 'ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನೌಕರರನ್ನು ತರಬೇತಿಗೆ ನಾಮನಿರ್ದೇಶನ ಮಾಡುವ ಅರ್ಜಿ' : 'Form to nominate office bearers and employees for training programs',
      type: 'PDF',
      size: '420 KB',
      url: '/assets/docs/training-registration-form.pdf'
    },
    {
      id: '03',
      title: locale === 'kn' ? 'KSSFCL ವಾರ್ಷಿಕ ವರದಿಗಳು ಮತ್ತು ನೆನಪಿನ ಸಂಚಿಕೆಗಳು' : 'KSSFCL Annual Reports & Souvenirs',
      sub: locale === 'kn' ? 'ಕಳೆದ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯ (AGM) ವರದಿಗಳು ಮತ್ತು ಹಣಕಾಸು ವಿವರಣೆಗಳ ಸಂಗ್ರಹ' : 'Downloadable archives of past annual general meeting (AGM) reports and financial statements',
      type: 'PDF',
      size: '5.2 MB',
      url: '/assets/docs/kssfcl-annual-reports.pdf'
    }
  ];

  // FORMATION STEPS FOR SIDEBAR
  const FORMATION_STEPS = [
    { num: 1, text: locale === 'kn' ? 'ಪ್ರವರ್ತಕರ ಸಭೆ' : 'Promoters Meeting' },
    { num: 2, text: locale === 'kn' ? 'ಆರಂಭಿಕ ಶೇರು ಬಂಡವಾಳ ಸಂಗ್ರಹಣೆ' : 'Collecting Initial Share Capital' },
    { num: 3, text: locale === 'kn' ? 'ನೋಂದಣಾಧಿಕಾರಿಗಳೊಂದಿಗೆ ನೋಂದಣಿ' : 'Registration with Registrar' },
    { num: 4, text: locale === 'kn' ? 'ಮೊದಲ ಆಡಳಿತ ಮಂಡಳಿಗೆ ಚುನಾವಣೆ' : 'Election to First Board' },
    { num: 5, text: locale === 'kn' ? 'ಚಟುವಟಿಕೆಗಳ ಪ್ರಾರಂಭ' : 'Commencement of Activities' },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      
      {/* Services Hero Header */}
      <ServicesHero
        theme="emerald"
        badgeText={locale === 'kn' ? 'ಸದಸ್ಯ ಸೇವೆಗಳು' : 'Member Services'}
        title={locale === 'kn' ? 'ಸದಸ್ಯ ಮಾಹಿತಿ ಮತ್ತು ಸೇವೆಗಳು' : 'Member Information & Services'}
        subtitle={
          locale === 'kn'
            ? 'ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳಿಗೆ ಅಗತ್ಯ ಶಾಸನಬದ್ಧ ಮಾರ್ಗದರ್ಶನ, ನಿಯಮಗಳು, ಆಡಿಟ್ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ತರಬೇತಿ ಮಾಹಿತಿ.'
            : 'Statutory compliance tools, regulatory guidelines, audit frameworks, and educational archives for primary Souharda cooperatives.'
        }
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 bg-white">
        
        {/* ========================================================= */}
        {/* PREAMBLE SECTION (KEPT & STYLED)                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Image Box */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs">
            <Image
              src="/images/Info_memeber.webp"
              alt="Info to Members"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text & Purpose Box */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-blue-700 border border-blue-200 shadow-xs">
                {locale === 'kn' ? 'ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಮಾಹಿತಿ' : 'MEMBER COOPERATIVES PORTAL'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight uppercase">
              {locale === 'kn' ? 'ಸದಸ್ಯ ಮಾಹಿತಿ ಮತ್ತು ಸೇವೆಗಳು' : 'MEMBER INFORMATION & SERVICES'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {locale === 'kn'
                ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತ (KSSFCL) ಸಂಸ್ಥೆಯು ಶಾಸನಬದ್ಧ ಮೇಲ್ವಿಚಾರಣೆ, ಶಿಕ್ಷಣ, ತರಬೇತಿ, ವಿವಾದ ಪರಿಹಾರ ಮತ್ತು ನಿಯಂತ್ರಣ ಸಹಾಯವನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಪ್ರಾಥಮಿಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳನ್ನು ಸಶಕ್ತಗೊಳಿಸುತ್ತದೆ. ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭ ರ ಅಡಿಯಲ್ಲಿ, ಸದಸ್ಯ ಸಹಕಾರಿಗಳು ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಹಣಕಾಸಿನ ಶಿಸ್ತನ್ನು ಪಾಲಿಸುತ್ತಾ ಕಾರ್ಯಾಚರಣೆಯ ಸ್ವಾಯತ್ತತೆಯನ್ನು ಅನುಭವಿಸುತ್ತವೆ.'
                : 'Karnataka State Souharda Federal Cooperative Ltd. empowers primary Souharda cooperatives by providing statutory supervision, education, training, dispute resolution, and regulatory assistance. Under the Karnataka Souharda Sahakari Act, 1997, member cooperatives enjoy operational autonomy while adhering to high standards of transparency, governance, and financial discipline.'}
            </p>

            <div className="bg-white border border-amber-300 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-800 shadow-xs">
              <span className="font-extrabold text-amber-900">
                {locale === 'kn' ? 'ಉದ್ದೇಶ: ' : 'Purpose: '}
              </span>
              {locale === 'kn'
                ? 'KSSFCL ಮತ್ತು ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳಿಂದ ನಿಯತಕಾಲಿಕವಾಗಿ ಪರಿಶೀಲಿಸಲ್ಪಡುವ ಮತ್ತು ಶಾಸನಬದ್ಧವಾಗಿ ಮಾರ್ಗದರ್ಶಿಸಲ್ಪಡುವ ಮಾಹಿತಿ ಸಂಪನ್ಮೂಲ.'
                : 'Periodically audited and statutory guidance portal governed under KSSFCL & Regulatory Officials.'}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* OFFICIAL CIRCULARS & GUIDELINES                           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">
                {locale === 'kn' ? 'ಅಧಿಕೃತ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳು' : 'Official Circulars & Guidelines'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಸಹಕಾರ ಇಲಾಖೆ ಮತ್ತು KSSFCL ನಿಂದ ಇತ್ತೀಚಿನ ನಿಯಂತ್ರಣ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಆದೇಶಗಳೊಂದಿಗೆ ನವೀಕೃತರಾಗಿರಿ.'
                  : 'Stay updated with the latest regulatory changes and operational mandates from the Co-operative Department and KSSFCL.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border-2 border-blue-500 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white border border-blue-100 text-blue-600 shadow-xs">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {locale === 'kn' ? 'ಆಡಿಟ್ ಮಾರ್ಗಸೂಚಿಗಳು' : 'Audit Guidelines'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {locale === 'kn'
                      ? 'ವಾರ್ಷಿಕ ಸಹಕಾರಿ ಲೆಕ್ಕಪರಿಶೋಧನೆಗಾಗಿ ಶಾಸನಬದ್ಧ ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಪ್ರಮಾಣಿತ ವಿಧಾನಗಳು.'
                      : 'Statutory requirements and standard procedures for annual co-operative audits.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-cyan-400 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white border border-cyan-100 text-cyan-600 shadow-xs">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {locale === 'kn' ? 'ಇಲಾಖೆಯ ಸುತ್ತೋಲೆಗಳು' : 'Departmental Circulars'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {locale === 'kn'
                      ? 'ಕರ್ನಾಟಕ ಸಹಕಾರ ಇಲಾಖೆಯಿಂದ ಅಧಿಕೃತ ನವೀಕರಣಗಳು.'
                      : 'Official updates from the Co-operative Department of Karnataka.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-400 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white border border-amber-100 text-amber-600 shadow-xs">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {locale === 'kn' ? 'ಸಂಯುಕ್ತ ಸುತ್ತೋಲೆಗಳು' : 'Federal Circulars'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {locale === 'kn'
                      ? 'KSSFCL ನಿಂದ ನೇರವಾಗಿ ಹೊರಡಿಸಲಾದ ಕಾರ್ಯಾಚರಣೆಯ ನಿರ್ದೇಶನಗಳು ಮತ್ತು ಸೂಚನೆಗಳು.'
                      : 'Operational directives and notices issued directly by KSSFCL.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-rose-500 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white border border-rose-100 text-rose-600 shadow-xs">
                      <Gavel className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {locale === 'kn' ? 'ಆರ್‌ಬಿಐ & ಗೇಜೆಟ್' : 'RBI & Gazette'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {locale === 'kn'
                      ? 'ಬ್ಯಾಂಕಿಂಗ್ ನಿಯಮಗಳು ಮತ್ತು ರಾಜ್ಯ ಗೇಜೆಟ್ ನವೀಕರಣಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಸೂಚನೆಗಳು.'
                      : 'Notifications regarding banking regulations and state gazette updates.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                {locale === 'kn' ? 'ಸಹಕಾರಿ ಸಂಸ್ಥೆ ಸ್ಥಾಪನೆಯ ಹಂತಗಳು' : 'Co-operative Formation Steps'}
              </h3>

              <div className="divide-y divide-slate-100">
                {FORMATION_STEPS.map((step) => (
                  <div key={step.num} className="py-2.5 first:pt-0 last:pb-0 flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                      {step.num}
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/resources/formation-guide"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-2xs"
              >
                <span>{locale === 'kn' ? 'ಸಂಪೂರ್ಣ ಸ್ಥಾಪನೆ ಮಾರ್ಗದರ್ಶಿ' : 'Full Formation Guide'}</span>
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-xs space-y-3">
              <h4 className="text-sm font-bold text-slate-900">
                {locale === 'kn' ? 'ನೆರವು ಬೇಕೇ?' : 'Need Direct Assistance?'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                {locale === 'kn'
                  ? 'ಸದಸ್ಯತ್ವ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಪ್ರಕ್ರಿಯಾತ್ಮಕ ನೆರವಿಗಾಗಿ ನಿಮ್ಮ ವಿಭಾಗೀಯ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.'
                  : 'For membership queries or procedural help, contact your divisional office.'}
              </p>
              <a
                href="tel:08023378375"
                className="inline-block text-sm font-extrabold text-blue-600 hover:text-blue-700 transition-colors pt-1"
              >
                080 - 23378375
              </a>
            </div>
          </div>

        </div>

        {/* ========================================== */}
        {/* CORE SUBJECT 1: STATUTORY FORMS & COMPLIANCE */}
        {/* ========================================== */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-blue-100 text-blue-700 shadow-xs">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {locale === 'kn' ? '೧. ಶಾಸನಬದ್ಧ ನಮೂನೆಗಳು ಮತ್ತು ಅನುಸರಣೆ' : '1. Statutory Forms & Statutory Compliance'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {locale === 'kn' ? 'ಅರ್ಜಿಗಳು, ಮಾದರಿ ಉಪನಿಯಮಗಳು ಮತ್ತು ವಾರ್ಷಿಕ ಸಲ್ಲಿಕೆ ನಮೂನೆಗಳು' : 'Annual filing formats, model bylaws, membership and NOC request applications'}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {SECTION_1_FORMS.map((doc) => (
              <div key={doc.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 p-3 rounded-2xl transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-black text-slate-400 mt-1">{doc.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{doc.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                    {doc.type} • {doc.size}
                  </span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>{locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* CORE SUBJECT 2: LEGAL & REGULATORY DOCUMENTS*/}
        {/* ========================================== */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-emerald-700 shadow-xs">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {locale === 'kn' ? '೨. ಕಾನೂನು ಮತ್ತು ನಿಯಂತ್ರಣ ದಾಖಲೆಗಳು' : '2. Legal & Regulatory Documents'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {locale === 'kn' ? 'ಕಾಯ್ದೆ, ಸರ್ಕಾರದ ನಿಯಮಾವಳಿಗಳು ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆ ಮಾರ್ಗದರ್ಶಿಗಳು' : 'Souharda Act text, rules, gazette orders, and arbitration dispute formats'}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {SECTION_2_LEGAL.map((doc) => (
              <div key={doc.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 p-3 rounded-2xl transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-black text-slate-400 mt-1">{doc.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{doc.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                    {doc.type} • {doc.size}
                  </span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>{locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* CORE SUBJECT 3: FINANCIAL & AUDIT GUIDELINES */}
        {/* ========================================== */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-amber-100 text-amber-700 shadow-xs">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {locale === 'kn' ? '೩. ಹಣಕಾಸು ಮತ್ತು ಆಡಿಟ್ ಮಾರ್ಗದರ್ಶಿಗಳು' : '3. Financial & Audit Guidelines'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {locale === 'kn' ? 'ಆಡಿಟ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ, NPA ನಿಯಮಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಶುಲ್ಕ ಪಟ್ಟಿ' : 'Standard audit templates, NPA provisioning norms, and statutory fee structure'}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {SECTION_3_FINANCIAL.map((doc) => (
              <div key={doc.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 p-3 rounded-2xl transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-black text-slate-400 mt-1">{doc.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{doc.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                    {doc.type} • {doc.size}
                  </span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>{locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* CORE SUBJECT 4: TRAINING, EDUCATION & MEDIA*/}
        {/* ========================================== */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white border border-rose-100 text-rose-700 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {locale === 'kn' ? '೪. ತರಬೇತಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಮಾಧ್ಯಮ' : '4. Training, Education & Media'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {locale === 'kn' ? 'ತರಬೇತಿ ವೇಳಾಪಟ್ಟಿ, ನೋಂದಣಿ ನಮೂನೆ ಮತ್ತು ವಾರ್ಷಿಕ ಮಹಾಸಭಾ ವರದಿಗಳು' : 'Annual training schedules, nomination forms, AGM reports, and souvenirs'}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {SECTION_4_TRAINING.map((doc) => (
              <div key={doc.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 p-3 rounded-2xl transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-black text-slate-400 mt-1">{doc.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{doc.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                    {doc.type} • {doc.size}
                  </span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>{locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* CONCLUSION & SUPPORT HELPLINE              */}
        {/* ========================================== */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              {locale === 'kn' ? 'ಉಪಸಂಹಾರ ಮತ್ತು ಸದಸ್ಯ ನೇರ ನೆರವು' : 'Conclusion & Member Support Desk'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {locale === 'kn'
                ? 'ಸದಸ್ಯ ಸಹಕಾರಿಗಳು ಶಾಸನಬದ್ಧ ಸಲ್ಲಿಕೆಗಳು, ಆಡಿಟ್ ನಿಯಮಗಳು ಮತ್ತು ಉಪನಿಯಮ ತಿದ್ದುಪಡಿಗಳ ಕುರಿತು ಯಾವುದೇ ತಾಂತ್ರಿಕ ಅಥವಾ ಕಾರ್ಯಾಚರಣೆಯ ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ KSSFCL ನ ನಿಕಟ ವಿಭಾಗೀಯ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.'
                : 'For any technical, procedural, or statutory guidance regarding filing annual returns, training nominations, or byelaw amendments, please reach out to your regional KSSFCL office.'}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="tel:08023378375"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl text-xs sm:text-sm transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>೦೮೦ - ೨೩೩೭೮೩೭೫</span>
            </a>
          </div>
        </div>

      </section>

    </main>
  );
}