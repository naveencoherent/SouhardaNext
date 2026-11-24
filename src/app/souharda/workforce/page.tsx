'use client';

import React, { useState, useEffect, useMemo } from 'react';
import PageHero from '@/components/common/PageHero';
import { Search, Phone, Mail, Loader2, XCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface StaffMember {
  'Sl No': string;
  Office: string;
  Office_en: string;
  Name: string;
  Name_en: string;
  Designation: string;
  Designation_en: string;
  Department: string;
  Department_en: string;
  Mobile: string;
  Email: string;
}

const SECTION_CONFIG = [
  {
    officeEn: 'Head Office',
    titleKn: 'ಮುಖ್ಯ ಕಛೇರಿ',
    titleEn: 'HEAD OFFICE',
    subtitle: null,
  },
  {
    officeEn: 'Task Force Division',
    titleKn: 'ಟಾಸ್ಕ್ ಫೋರ್ಸ್ ವಿಭಾಗ',
    titleEn: 'TASK FORCE DIVISION',
    subtitle: null,
  },
  {
    officeEn: 'Bengaluru Arbitration Court',
    titleKn: '441 ನ್ಯಾಯಾಲಯ (ಬೆಂಗಳೂರು ದಾವಾ ಪಂಚಾಯಿತಿ ನ್ಯಾಯಾಲಯ)',
    titleEn: 'COURT DIVISION (441 ARBITRATION COURT)',
    subtitle: '080-23449933-34 | 441court@souharda.coop',
  },
  {
    officeEn: 'Belagavi Regional Office',
    titleKn: 'ಬೆಳಗಾವಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ',
    titleEn: 'BELAGAVI REGIONAL OFFICE',
    subtitle: '0831-2401551 | dobgm@souharda.coop',
  },
  {
    officeEn: 'Belagavi Arbitration Court',
    titleKn: 'ಬೆಳಗಾವಿ ದಾವಾ ಪಂಚಾಯಿತಿ ನ್ಯಾಯಾಲಯ',
    titleEn: 'BELAGAVI DISPUTE ARBITRATION COURT',
    subtitle: null,
  },
  {
    officeEn: 'Kalaburagi Regional Office',
    titleKn: 'ಕಲಬುರಗಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ',
    titleEn: 'KALABURAGI REGIONAL OFFICE',
    subtitle: '08472-270222 | glbdo@souharda.coop',
  },
  {
    officeEn: 'Bengaluru Regional Office',
    titleKn: 'ಬೆಂಗಳೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ',
    titleEn: 'BENGALURU REGIONAL OFFICE',
    subtitle: '080-23525546 | bgudo@souharda.coop',
  },
  {
    officeEn: 'Mysuru Regional Office',
    titleKn: 'ಮೈಸೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ',
    titleEn: 'MYSURU REGIONAL OFFICE',
    subtitle: '0821-2332299 | mysdo@souharda.coop',
  },
  {
    officeEn: 'Consultants',
    titleKn: 'ಸಲಹೆಗಾರರು',
    titleEn: 'ADVISORS & CONSULTANTS',
    subtitle: null,
  },
];

// Alternating row background palette
const ROW_COLORS = [
  { bg: 'bg-[#e2f3ec]', hover: 'hover:bg-[#cbebd9]' }, // Soft Mint
  { bg: 'bg-[#fef3db]', hover: 'hover:bg-[#fde5b2]' }, // Soft Yellow
  { bg: 'bg-[#e3f0fb]', hover: 'hover:bg-[#c9e2f8]' }, // Soft Blue
  { bg: 'bg-[#f1f5f9]', hover: 'hover:bg-[#e2e8f0]' }, // Light Grey
  { bg: 'bg-[#ffffff]', hover: 'hover:bg-[#f8fafc]' }, // White
];

export default function WorkforcePage() {
  const { locale } = useLanguage();
  const [employeesList, setEmployeesList] = useState<StaffMember[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch('/souharda/workforce.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEmployeesList(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load staff.json:', err);
        setLoading(false);
      });
  }, []);

  const sections = useMemo(() => {
    return SECTION_CONFIG.map((cfg) => ({
      title: locale === 'kn' ? cfg.titleKn : cfg.titleEn,
      subtitle: cfg.subtitle,
      members: employeesList.filter((emp) => emp.Office_en === cfg.officeEn),
    })).filter((sec) => sec.members.length > 0);
  }, [employeesList, locale]);

  // Apply search query across both Kannada and English fields
  const filteredSections = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return sections;

    return sections
      .map((sec) => {
        const filtered = sec.members.filter((emp) => {
          return (
            emp.Name?.toLowerCase().includes(term) ||
            emp.Name_en?.toLowerCase().includes(term) ||
            emp.Designation?.toLowerCase().includes(term) ||
            emp.Designation_en?.toLowerCase().includes(term) ||
            emp.Department?.toLowerCase().includes(term) ||
            emp.Department_en?.toLowerCase().includes(term) ||
            emp.Office?.toLowerCase().includes(term) ||
            emp.Office_en?.toLowerCase().includes(term) ||
            emp.Mobile?.toLowerCase().includes(term) ||
            emp.Email?.toLowerCase().includes(term)
          );
        });

        if (filtered.length === 0) return null;

        return {
          title: sec.title,
          subtitle: sec.subtitle,
          members: filtered,
        };
      })
      .filter(Boolean) as { title: string; subtitle: string | null; members: StaffMember[] }[];
  }, [sections, searchTerm]);

  const totalCount = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.members.length, 0);
  }, [filteredSections]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <PageHero
        title={locale === 'kn' ? 'ಸಿಬ್ಬಂದಿ ವಿವರಣೆ' : 'WORKFORCE DIRECTORY'}
        subtitle={
          locale === 'kn'
            ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತದ ಆಡಳಿತ ಮತ್ತು ಕಾರ್ಯನಿರ್ವಾಹಕ ಸಿಬ್ಬಂದಿ ವರ್ಗ.'
            : 'Dedicated administrative and operational staff serving Karnataka State Souharda Federal Cooperative Ltd.'
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4 max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder={
                locale === 'kn'
                  ? 'ಸಿಬ್ಬಂದಿಯ ಹೆಸರು, ಹುದ್ದೆ ಅಥವಾ ವಿಭಾಗ ಹುಡುಕಿ...'
                  : 'Search staff member, designation, or department...'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Directory Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <p className="text-sm font-semibold">
              {locale === 'kn' ? 'ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...' : 'Loading staff directory...'}
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500 px-1">
              <span>
                {locale === 'kn'
                  ? `ಒಟ್ಟು ${totalCount} ಸಿಬ್ಬಂದಿ`
                  : `Showing ${totalCount} staff members`}
              </span>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((sec, secIdx) => (
                <div key={secIdx} className="space-y-4">
                  {/* HEADING BANNER */}
                  <div className="bg-[#101f42] border border-[#1b2d5a] rounded-2xl py-4 px-6 text-center shadow-md space-y-1">
                    <h2 className="font-black text-sm sm:text-base text-[#f5b82e] tracking-widest uppercase">
                      {sec.title}
                    </h2>
                    {sec.subtitle && (
                      <p className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wide">
                        {sec.subtitle}
                      </p>
                    )}
                  </div>

                  {/* TABLE FOR THIS SECTION */}
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-left border-collapse table-fixed">
                        <thead>
                          <tr className="bg-[#1e2c4f] text-slate-100 text-xs font-bold border-b border-slate-700">
                            <th className="py-3 px-3 w-[6%] text-center whitespace-nowrap">
                              {locale === 'kn' ? 'ಕ್ರ.ಸಂ' : 'Sl.No'}
                            </th>
                            <th className="py-3 px-3 w-[22%] text-left">
                              {locale === 'kn' ? 'ಸಿಬ್ಬಂದಿಯ ಹೆಸರು' : 'Staff Member'}
                            </th>
                            <th className="py-3 px-3 w-[20%] text-left">
                              {locale === 'kn' ? 'ಹುದ್ದೆ' : 'Designation'}
                            </th>
                            <th className="py-3 px-3 w-[22%] text-left">
                              {locale === 'kn' ? 'ವಿಭಾಗ' : 'Department'}
                            </th>
                            <th className="py-3 px-3 w-[15%] text-left whitespace-nowrap">
                              {locale === 'kn' ? 'ಸಿಯುಜಿ ಮೊಬೈಲ್' : 'CUG Mobile'}
                            </th>
                            <th className="py-3 px-3 w-[25%] text-left">
                              {locale === 'kn' ? 'ಕಛೇರಿ ಇ-ಮೇಲ್' : 'Office Email'}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-900">
                          {sec.members.map((emp, index) => {
                            const slNo = String(index + 1).padStart(2, '0');
                            const name = locale === 'kn' ? emp.Name : emp.Name_en;
                            const designation =
                              locale === 'kn' ? emp.Designation : emp.Designation_en;
                            const department =
                              locale === 'kn' ? emp.Department : emp.Department_en;
                            const cugNumber = emp.Mobile;
                            const email = emp.Email;

                            const rowTheme = ROW_COLORS[index % ROW_COLORS.length];

                            return (
                              <tr
                                key={`${emp['Sl No']}-${emp.Email}-${index}`}
                                className={`${rowTheme.bg} ${rowTheme.hover} transition-colors border-b border-slate-200/80 last:border-b-0`}
                              >
                                <td className="py-3 px-3 text-center font-bold text-slate-700 align-middle whitespace-nowrap">
                                  {slNo}
                                </td>
                                <td className="py-3 px-3 font-semibold text-slate-900 align-middle">
                                  {name || '-'}
                                </td>
                                <td className="py-3 px-3 text-slate-800 align-middle">
                                  {designation || '-'}
                                </td>
                                <td className="py-3 px-3 text-slate-700 align-middle">
                                  {department || '-'}
                                </td>
                                <td className="py-3 px-3 font-medium text-slate-900 align-middle whitespace-nowrap">
                                  {cugNumber && cugNumber !== '-' ? (
                                    <a
                                      href={`tel:${cugNumber}`}
                                      className="hover:text-amber-600 transition-colors inline-flex items-center gap-1.5"
                                    >
                                      {cugNumber}
                                    </a>
                                  ) : (
                                    '-'
                                  )}
                                </td>
                                <td className="py-3 px-3 text-slate-900 align-middle truncate">
                                  {email && email !== '-' ? (
                                    <a
                                      href={`mailto:${email}`}
                                      className="text-blue-700 hover:text-blue-900 hover:underline transition-colors font-medium"
                                    >
                                      {email}
                                    </a>
                                  ) : (
                                    '-'
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile View */}
                    <div className="grid grid-cols-1 gap-3 p-3 md:hidden">
                      {sec.members.map((emp, index) => {
                        const slNo = String(index + 1).padStart(2, '0');
                        const name = locale === 'kn' ? emp.Name : emp.Name_en;
                        const designation =
                          locale === 'kn' ? emp.Designation : emp.Designation_en;
                        const department =
                          locale === 'kn' ? emp.Department : emp.Department_en;
                        const cugNumber = emp.Mobile;
                        const email = emp.Email;

                        const rowTheme = ROW_COLORS[index % ROW_COLORS.length];

                        return (
                          <div
                            key={`${emp['Sl No']}-${emp.Email}-mobile-${index}`}
                            className={`${rowTheme.bg} rounded-xl border border-slate-200/80 p-3.5 space-y-2.5`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-sm font-extrabold text-slate-900">
                                  {name || '-'}
                                </h3>
                                <p className="text-xs font-bold text-slate-800">
                                  {designation || '-'}
                                </p>
                                <p className="text-[11px] text-slate-600 mt-0.5">
                                  {department || '-'}
                                </p>
                              </div>
                              <span className="text-xs font-bold text-slate-700 bg-white/80 border border-slate-300 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                                {slNo}
                              </span>
                            </div>

                            <div className="pt-2 border-t border-slate-300/60 space-y-1.5 text-xs">
                              {cugNumber && cugNumber !== '-' && (
                                <a
                                  href={`tel:${cugNumber}`}
                                  className="flex items-center gap-2 text-slate-800 font-medium"
                                >
                                  <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                                  <span>{cugNumber}</span>
                                </a>
                              )}
                              {email && email !== '-' && (
                                <a
                                  href={`mailto:${email}`}
                                  className="flex items-center gap-2 text-blue-900 font-medium truncate"
                                >
                                  <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                                  <span className="truncate">{email}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm font-semibold">
                {locale === 'kn' ? 'ಯಾವುದೇ ವಿವರಗಳು ಕಂಡುಬಂದಿಲ್ಲ.' : 'No staff members found.'}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}