'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

import {
  Users,
  Award,
  Building2,
  FileText,
  Download,
  Search,
  GraduationCap,
  ShieldLock,
  Wallet,
  KeyRound,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import ServicesHero from '@/components/common/ServicesHero';
// Import JSON data
import districtOfficersData from '@/data/CSC_districtOfficer.json';

// Type definitions for data integrity
interface DistrictOfficer {
  sl_no?: number | string;
  name?: string;
  nameEn?: string;
  nameKn?: string;
  officer_name?: string;
  designation?: string;
  role?: string;
  district?: string;
  districtEn?: string;
  districtKn?: string;
  district_name?: string;
  department?: string;
  email?: string;
  email_id?: string;
  office_email?: string;
  phone?: string | number;
  phone_number?: string | number;
  mobile?: string | number;
  contact?: string | number;
  cug_mobile?: string | number;
}

function useLanguage() {
  const [locale, setLocale] = useState<'en' | 'kn'>('en');
  return { locale, setLocale };
}

export default function CSCPage() {
  const { locale } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'training' | 'supervision' | 'resource' | 'legal'>('training');

  // Filter officer data dynamically
  const filteredOfficers = useMemo(() => {
    if (!Array.isArray(districtOfficersData)) return [];

    const search = searchTerm.trim().toLowerCase();
    if (!search) return districtOfficersData as DistrictOfficer[];

    return (districtOfficersData as DistrictOfficer[]).filter((officer) => {
      const name = (officer.name || officer.nameEn || officer.nameKn || officer.officer_name || '').toLowerCase();
      const designation = (officer.designation || officer.role || '').toLowerCase();
      const district = (officer.district || officer.districtEn || officer.districtKn || officer.district_name || officer.department || '').toLowerCase();
      const email = (officer.email || officer.email_id || officer.office_email || '').toLowerCase();
      const phone = (officer.phone_number || officer.phone || officer.mobile || officer.contact || officer.cug_mobile || '').toString().toLowerCase();

      return (
        name.includes(search) ||
        designation.includes(search) ||
        district.includes(search) ||
        email.includes(search) ||
        phone.includes(search)
      );
    });
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* HERO BANNER */}
      <ServicesHero locale={locale} />

      {/* TOP CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* TWO-COLUMN FEATURE & OVERVIEW CARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* Left Column: Image Box */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
            <Image
              src="/images/Services/CSC_Services.webp" // Replace with your image asset path
              alt="CSC Operations"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Information & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Pill Badge */}
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shadow-xs">
                  {locale === 'kn' ? 'ಡಿಜಿಟಲ್ ಸೇವಾ ಕೇಂದ್ರಗಳು (CSC)' : 'COMMON SERVICES CENTRES (CSC)'}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight uppercase">
                {locale === 'kn' ? 'ಸಾಮಾನ್ಯ ಸೇವಾ ಕೇಂದ್ರಗಳ ಪೋರ್ಟಲ್' : 'COMMON SERVICES CENTRES PORTAL'}
              </h1>

              {/* Overview Text */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'kn'
                  ? 'ಸಾಮಾನ್ಯ ಸೇವಾ ಕೇಂದ್ರಗಳು (CSC) ಭಾರತ ಸರ್ಕಾರದ ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಕಾರ್ಯಕ್ರಮದ ಪ್ರಮುಖ ಭಾಗವಾಗಿದೆ. ಇವು ಗ್ರಾಮೀಣ ಮತ್ತು ದೂರದ ಪ್ರದೇಶಗಳಲ್ಲಿ ನಾಗರಿಕರಿಗೆ ಇ-ಸೇವೆಗಳನ್ನು ತಲುಪಿಸುವ ಪ್ರವೇಶ ಬಿಂದುಗಳಾಗಿವೆ.'
                  : 'Common Services Centres (CSCs) are front-end delivery points for digital services across rural India. As part of the Digital India initiative, CSCs enable citizens to access government, financial, and private services easily.'}
              </p>

              {/* Purpose Box */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-800 shadow-xs">
                <span className="font-extrabold text-amber-900">
                  {locale === 'kn' ? 'ಉದ್ದೇಶ: ' : 'Purpose: '}
                </span>
                {locale === 'kn'
                  ? 'ರಾಜ್ಯ ಸರ್ಕಾರ ಮತ್ತು KSSFCL ನಿಂದ ನಿಯತಕಾಲಿಕವಾಗಿ ಪರಿಶೀಲಿಸಲ್ಪಡುವ ಮತ್ತು ಶಾಸನಬದ್ಧವಾಗಿ ನಿರ್ವಹಿಸಲ್ಪಡುವ ಸೇವಾ ಕೇಂದ್ರಗಳು.'
                  : 'Periodically audited and monitored under KSSFCL & Government Officials.'}
              </div>
            </div>

            {/* 3-Column Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">37,500+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಸಕ್ರಿಯ VLEಗಳು' : 'ACTIVE VLES'}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">5,900+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಗ್ರಾಮ ಪಂಚಾಯತಿಗಳು' : 'GRAM PANCHAYATS'}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900">400+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {locale === 'kn' ? 'ಲಭ್ಯವಿರುವ ಸೇವೆಗಳು' : 'DIGITAL SERVICES'}
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* KEY RESPONSIBILITIES */}
      <section 
        id="responsibilities" 
        className="w-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 shadow-2xl space-y-10 text-white"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              {locale === 'kn' ? 'ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಪ್ರಮುಖ ಜವಾಬ್ದಾರಿಗಳು' : 'KEY RESPONSIBILITIES & FUNCTIONS'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full my-2"></div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
              Key Responsibilities & Functions of the Federal Cooperative
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'training', icon: GraduationCap, kn: 'ತರಬೇತಿ ಮತ್ತು ಪ್ರಚಾರ', en: 'Training & Promotion' },
              { id: 'supervision', icon: ShieldLock, kn: 'ಮೇಲ್ವಿಚಾರಣೆ', en: 'Supervision' },
              { id: 'resource', icon: Wallet, kn: 'ಸಂಪನ್ಮೂಲ & ನಿಧಿ', en: 'Resource & Fund' },
              { id: 'legal', icon: KeyRound, kn: 'ಕಾನೂನು', en: 'Legal & Statutory' },
            ].map(({ id, icon: Icon, kn, en }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as typeof activeTab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                  activeTab === id
                    ? 'bg-amber-500 text-slate-950 scale-105 ring-2 ring-amber-400'
                    : 'bg-slate-700/60 text-slate-300 border border-slate-600 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{locale === 'kn' ? kn : en}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="border-b border-slate-200/80 pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-amber-700 tracking-tight">
                {activeTab === 'training' && (locale === 'kn' ? 'ತರಬೇತಿ ಮತ್ತು ಪ್ರಚಾರ (Training & Promotion)' : 'Training & Promotion')}
                {activeTab === 'supervision' && (locale === 'kn' ? 'ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ನಿರ್ವಹಣೆ (Supervision & Monitoring)' : 'Supervision & Monitoring')}
                {activeTab === 'resource' && (locale === 'kn' ? 'ಸಂಪನ್ಮೂಲ ಮತ್ತು ನಿಧಿ ಸಜ್ಜುಗೊಳಿಸುವಿಕೆ (Resource & Fund Mobilization)' : 'Resource & Fund Mobilization')}
                {activeTab === 'legal' && (locale === 'kn' ? 'ಕಾನೂನು ಮತ್ತು ಶಾಸನಬದ್ಧ ಬೆಂಬಲ (Legal & Statutory Support)' : 'Legal & Statutory Support')}
              </h3>
            </div>

            {activeTab === 'training' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಪ್ರವರ್ತನೆ ಮತ್ತು ಸಂಘಟನೆ' : 'Promotion & Organization'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸಹಕಾರಿಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವುದು, ಸಂಘಟಿಸುವುದು ಹಾಗೂ ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ ಸೂಕ್ತ ರೂಪರೇಖೆಯನ್ನು ರಚಿಸುವುದು.'
                        : 'Promote and assist in organizing cooperatives while framing sustainable growth models.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಶಿಕ್ಷಣ ಮತ್ತು ತರಬೇತಿ' : 'Education & Training'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸಹಕಾರ ತರಬೇತಿ, ಶಿಕ್ಷಣ ಹಾಗೂ ತರಬೇತಿ ನಿಯಮಗಳು ಮತ್ತು ಸಹಕಾರ ತತ್ವಗಳನ್ನು ಪ್ರಚಾರ ಮಾಡುವುದು.'
                        : 'Conduct co-operative training, awareness programs, and propagate cooperative principles.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಸಂಶೋಧನೆ ಮತ್ತು ಯೋಜನೆ' : 'Research & Planning'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸಂಶೋಧನೆ ಹಾಗೂ ಮೌಲ್ಯಮಾಪನವನ್ನು ಕೈಗೊಳ್ಳುವುದು ಮತ್ತು ಸದಸ್ಯ ಸಹಕಾರಿಗಳಿಗಾಗಿ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು.'
                        : 'Conduct research, evaluation, and build strategic development plans for member units.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'supervision' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <ShieldLock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಆಡಿಟ್ & ಮೇಲ್ವಿಚಾರಣೆ' : 'Audit & Operations Monitoring'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸಹಕಾರಿ ಸಂಸ್ಥೆಗಳ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳ ನಿರಂತರ ಮೇಲ್ವಿಚಾರಣೆ.'
                        : 'Regular operational monitoring, standard compliance, and audit support for local units.'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ' : 'Service Quality Assurance'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸೇವೆಗಳ ಗುಣಮಟ್ಟವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುವುದು ಹಾಗೂ ನಾಗರಿಕರಿಗೆ ಸಮಯೋಚಿತ ಪರಿಹಾರ ಒದಗಿಸುವುದು.'
                        : 'Ensuring high service standards and seamless delivery of government-to-citizen services.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resource' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ನಿಧಿ ಸಜ್ಜುಗೊಳಿಸುವಿಕೆ' : 'Capital & Reserve Mobilization'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಸಂಸ್ಥೆಯ ಬೆಳವಣಿಗೆಗೆ ಅಗತ್ಯವಾದ ಆರ್ಥಿಕ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕ್ರೋಢೀಕರಿಸುವುದು.'
                        : 'Facilitating financial mobilization, grants, and infrastructure funding.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                    <KeyRound className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಬೆಂಬಲ' : 'Statutory & Legal Compliance'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'kn'
                        ? 'ಕಾನೂನು ನಿಯಮಾವಳಿಗಳ ಪಾಲನೆ ಮತ್ತು ಸಲಹೆಗಳನ್ನು ಒದಗಿಸುವುದು.'
                        : 'Legal guidance, dispute resolution, and regulatory compliance assistance.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* BOTTOM CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* SOFTWARE UTILITIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">
              {locale === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಕೈಪಿಡಿಗಳು' : 'Software Utilities & Handbooks'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {locale === 'kn' ? 'ಅಗತ್ಯ ಉಪಕರಣಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'Download necessary drivers and configuration setup guides'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 w-fit">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">e-Stamp Manual & Setup</h3>
                <p className="text-xs text-slate-500">Official step-by-step user guide for e-Stamping installation.</p>
              </div>
              <button className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                <span>Download PDF</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 w-fit">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Cartridge & Device Drivers</h3>
                <p className="text-xs text-slate-500">Biometric drivers and printer utility packages.</p>
              </div>
              <button className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                <span>Download ZIP</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 w-fit">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">PCP Proxy Config Utility</h3>
                <p className="text-xs text-slate-500">Proxy configuration tool for secure transaction processing.</p>
              </div>
              <button className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                <span>Download EXE</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / VLE EXPLANATION */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {locale === 'kn' ? 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?' : 'How It Works'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {locale === 'kn'
              ? 'ಸಿಎಸ್‌ಸಿ ಸೇವೆಗಳನ್ನು ಗ್ರಾಮ ಮಟ್ಟದ ಉದ್ಯಮಿಗಳು (Village Level Entrepreneurs - VLEs) ಎಂದು ಕರೆಯಲಾಗುವ ಸ್ಥಳೀಯ ಉದ್ಯಮಿಗಳ ಮೂಲಕ ತಲುಪಿಸಲಾಗುತ್ತದೆ. VLE ಗಳು ಕಂಪ್ಯೂಟರ್, ಇಂಟರ್ನೆಟ್, ಸ್ಕ್ಯಾನರ್ ಮತ್ತು ಬಯೋಮೆಟ್ರಿಕ್ ಸಾಧನಗಳನ್ನೊಳಗೊಂಡ ಸ್ಥಳೀಯ ಡಿಜಿಟಲ್ ಕೇಂದ್ರಗಳನ್ನು ನಡೆಸುತ್ತಾರೆ.'
              : 'CSC services are delivered through local operators known as Village Level Entrepreneurs (VLEs). VLEs operate micro-digital centers equipped with computer hardware, high-speed internet access, scanners, and biometric devices.'}
          </p>
        </section>

        {/* DYNAMIC DISTRICT OFFICERS DIRECTORY TABLE */}
        <section className="w-full bg-slate-100 py-4 px-2 sm:px-4">
          <div className="max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden bg-white border border-slate-300">
            
            {/* Header */}
            <div className="bg-[#0b1e36] text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-base sm:text-lg font-bold tracking-tight">
                  {locale === 'kn' 
                    ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತ' 
                    : 'Karnataka State Souharda Federal Co-operative Ltd.'}
                </h2>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={
                    locale === 'kn' ? 'ಶೋಧಿಸಿ...' : 'Search staff, designation, email...'
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1e2d42] text-white font-bold border-b border-slate-700">
                    <th className="py-3 px-4 w-14 text-center">Sl.No</th>
                    <th className="py-3 px-4">{locale === 'kn' ? 'ಸಿಬ್ಬಂದಿ ವಿವರ' : 'Staff Member'}</th>
                    <th className="py-3 px-4">{locale === 'kn' ? 'ಹುದ್ದೆ' : 'Designation'}</th>
                    <th className="py-3 px-4">{locale === 'kn' ? 'ವಿಭಾಗ / ಜಿಲ್ಲೆ' : 'Department'}</th>
                    <th className="py-3 px-4">{locale === 'kn' ? 'CUG ಮೊಬೈಲ್' : 'CUG Mobile'}</th>
                    <th className="py-3 px-4">{locale === 'kn' ? 'ಇಮೇಲ್' : 'Office Email'}</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200/60 font-medium">
                  {filteredOfficers.length > 0 ? (
                    filteredOfficers.map((item, idx) => {
                      const slNo = String(item.sl_no || idx + 1).padStart(2, '0');
                      const name = item.name || item.nameEn || item.officer_name || '-';
                      const designation = item.designation || item.role || 'District Manager';
                      const district = item.district || item.districtEn || item.department || '-';
                      const mobile = item.phone_number || item.phone || item.mobile || item.cug_mobile || '';
                      const email = item.email_id || item.email || item.office_email || '';

                      const isEven = idx % 2 === 0;
                      const rowBgClass = isEven ? 'bg-[#f3f8f5]' : 'bg-[#eaf1f8]';

                      return (
                        <tr key={idx} className={`${rowBgClass} hover:bg-amber-50/80 transition-colors text-slate-900`}>
                          <td className="py-3 px-4 text-center font-bold text-slate-800">{slNo}</td>
                          <td className="py-3 px-4 font-bold text-slate-900">{name}</td>
                          <td className="py-3 px-4 text-slate-800">{designation}</td>
                          <td className="py-3 px-4 text-slate-800">{district}</td>
                          
                          <td className="py-3 px-4 font-semibold text-slate-800 whitespace-nowrap">
                            {mobile ? (
                              <a href={`tel:${mobile}`} className="hover:text-emerald-600 hover:underline">
                                {mobile}
                              </a>
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>

                          <td className="py-3 px-4">
                            {email ? (
                              <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                                {email}
                              </a>
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-500 bg-white">
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Total Footer Bar */}
            <div className="bg-slate-100 border-t border-slate-200 px-6 py-2.5 text-xs text-slate-600 text-right font-bold">
              {locale === 'kn' ? 'ಒಟ್ಟು ದಾಖಲೆಗಳು:' : 'Total Records:'}{' '}
              <span className="text-amber-700">{filteredOfficers.length}</span>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}