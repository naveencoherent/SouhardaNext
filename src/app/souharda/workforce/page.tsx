'use client';

import React, { useState, useEffect, useMemo } from 'react';
import PageHero from '@/components/common/PageHero';
import { Search, Phone, Mail, Loader2, XCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const getVal = (emp: any, keys: string[]): string => {
  if (!emp) return '';
  for (const key of keys) {
    if (emp[key] !== undefined && emp[key] !== null) {
      const val = String(emp[key])
        .replace(/[\r\n]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (val !== '') return val;
    }
  }
  return '';
};

// Fixed Advisors Data
const ADVISORS_DATA = [
  {
    'ಸಿಬ್ಬಂದಿಯ ಹೆಸರು': 'ವಿ.ಜಿ. ಕಾರ್‌ಕೂನ್',
    'ಹುದ್ದೆ': 'ಕನ್ಸಲ್ಟೆಂಟ್',
    'ವಿಭಾಗ': 'ಶಿಕ್ಷಣ ವಿಭಾಗ',
    'ಸಿಯುಜಿ ಮೊಬೈಲ್': '88844 66710',
    'ಕಛೇರಿ ಇ-ಮೇಲ್': 'vjkarkoon@souharda.coop',
  },
  {
    'ಸಿಬ್ಬಂದಿಯ ಹೆಸರು': 'ಕೆ.ವಿ ಹರ್ಷಿತ್‌ರಾಜ್',
    'ಹುದ್ದೆ': 'ಕನ್ಸಲ್ಟೆಂಟ್',
    'ವಿಭಾಗ': 'ಕಾನೂನು ಹಾಗೂ ಟಾಸ್ಕ್ ಫೋರ್ಸ್',
    'ಸಿಯುಜಿ ಮೊಬೈಲ್': '-',
    'ಕಛೇರಿ ಇ-ಮೇಲ್': 'harshitaraj@souharda.coop',
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
  const [employeesList, setEmployeesList] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/souharda/workforce.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        let list: any[] = [];
        if (Array.isArray(data)) {
          list = data;
        } else if (typeof data === 'object' && data !== null) {
          const possibleArray = Object.values(data).find((val) => Array.isArray(val));
          if (possibleArray) list = possibleArray as any[];
        }

        setEmployeesList(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load workforce JSON:', err);
        setLoading(false);
      });
  }, []);

  const sections = useMemo(() => {
    // Filter out heading text rows
    const cleanList = employeesList.filter((emp) => {
      const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
      return (
        name &&
        name !== 'ಸಿಬ್ಬಂದಿಯ ಹೆಸರು' &&
        name !== 'Staff Member' &&
        !name.includes('ಬೆಂಗಳೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ') &&
        !name.includes('ಬೆಳಗಾವಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ') &&
        !name.includes('ಕಲಬುರಗಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ') &&
        !name.includes('ಮೈಸೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ')
      );
    });

    const headOffice = cleanList.slice(0, 38);
    const taskforce = cleanList.slice(38, 38 + 17);
    const remaining = cleanList.slice(38 + 17);

    // Regional Offices
    const bengaluruOffice = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        dept.includes('ಬೆಂಗಳೂರು') ||
        dept.includes('Bengaluru') ||
        email.includes('bgudo') ||
        name.includes('ಬೆಂಗಳೂರು')
      );
    });

    const courtOffice = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        (dept.includes('ನ್ಯಾಯಾಲಯ') || dept.toLowerCase().includes('court') || email.includes('court') || name.includes('ನ್ಯಾಯಾಲಯ')) &&
        !dept.includes('ಬೆಳಗಾವಿ') &&
        !name.includes('ಬೆಳಗಾವಿ')
      );
    });

    const belagaviOffice = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        (dept.includes('ಬೆಳಗಾವಿ') || dept.toLowerCase().includes('belagavi') || email.includes('dobgm')) &&
        !dept.includes('ದಾವಾ') &&
        !dept.includes('ನ್ಯಾಯಾಲಯ')
      );
    });

    const belagaviCourt = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        (dept.includes('ಬೆಳಗಾವಿ') && (dept.includes('ದಾವಾ') || dept.includes('ನ್ಯಾಯಾಲಯ') || dept.includes('ಪಂಚಾಯಿತಿ'))) ||
        (name.includes('ಬೆಳಗಾವಿ') && (name.includes('ದಾವಾ') || name.includes('ನ್ಯಾಯಾಲಯ'))) ||
        email.includes('belagavi.court')
      );
    });

    const kalaburagiOffice = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        dept.includes('ಕಲಬುರಗಿ') ||
        dept.includes('ಗುಲ್ಬರ್ಗಾ') ||
        dept.toLowerCase().includes('kalaburagi') ||
        dept.toLowerCase().includes('gulbarga') ||
        email.includes('glbdo')
      );
    });

    const mysuruOffice = remaining.filter((emp) => {
      const dept = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
      const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']);

      return (
        dept.includes('ಮೈಸೂರು') ||
        dept.toLowerCase().includes('mysuru') ||
        dept.toLowerCase().includes('mysore') ||
        email.includes('mysdo')
      );
    });

    const finalBengaluru = bengaluruOffice.length > 0 ? bengaluruOffice : cleanList.slice(55, 60);
    const finalCourt = courtOffice.length > 0 ? courtOffice : cleanList.slice(60, 64);
    const finalBelagavi = belagaviOffice.length > 0 ? belagaviOffice : cleanList.slice(64, 68);
    const finalBelagaviCourt = belagaviCourt.length > 0 ? belagaviCourt : cleanList.slice(68, 71);
    const finalKalaburagi = kalaburagiOffice.length >= 18 ? kalaburagiOffice : cleanList.slice(71, 71 + 18);
    const finalMysuru = mysuruOffice.length >= 13 ? mysuruOffice : cleanList.slice(71 + 18, 71 + 18 + 13);

    return [
      {
        title: locale === 'kn' ? 'ಮುಖ್ಯ ಕಛೇರಿ' : 'HEAD OFFICE',
        subtitle: null,
        members: headOffice,
      },
      {
        title: locale === 'kn' ? 'ಟಾಸ್ಕ್ ಫೋರ್ಸ್ ವಿಭಾಗ' : 'TASK FORCE DIVISION',
        subtitle: null,
        members: taskforce,
      },
      {
        title: locale === 'kn' ? 'ಬೆಂಗಳೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ' : 'BENGALURU REGIONAL OFFICE',
        subtitle: '080-23525546 | bgudo@souharda.coop',
        members: finalBengaluru,
      },
      {
        title: locale === 'kn' ? 'ನ್ಯಾಯಾಲಯ ವಿಭಾಗ' : 'COURT DIVISION',
        subtitle: '080-23449933-34 | court@souharda.coop',
        members: finalCourt,
      },
      {
        title: locale === 'kn' ? 'ಬೆಳಗಾವಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ' : 'BELAGAVI REGIONAL OFFICE',
        subtitle: '08312401551 | dobgm@souharda.coop',
        members: finalBelagavi,
      },
      {
        title: locale === 'kn' ? 'ಬೆಳಗಾವಿ ದಾವಾ ಪಂಚಾಯಿತಿ ನ್ಯಾಯಾಲಯ' : 'BELAGAVI DISPUTE ARBITRATION COURT',
        subtitle: null,
        members: finalBelagaviCourt,
      },
      {
        title: locale === 'kn' ? 'ಕಲಬುರಗಿ ಪ್ರಾಂತೀಯ ಕಛೇರಿ' : 'KALABURAGI REGIONAL OFFICE',
        subtitle: '08472-270222 | glbdo@souharda.coop',
        members: finalKalaburagi,
      },
      {
        title: locale === 'kn' ? 'ಮೈಸೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ' : 'MYSURU REGIONAL OFFICE',
        subtitle: '0821-2332299 | mysdo@souharda.coop',
        members: finalMysuru,
      },
      {
        title: locale === 'kn' ? 'ಸಲಹೆಗಾರರು' : 'ADVISORS',
        subtitle: null,
        members: ADVISORS_DATA,
      },
    ];
  }, [employeesList, locale]);

  // Apply search query across all sections
  const filteredSections = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return sections;

    return sections
      .map((sec) => {
        const filtered = sec.members.filter((emp) => {
          const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']).toLowerCase();
          const designation = getVal(emp, ['ಹುದ್ದೆ', 'designation']).toLowerCase();
          const dept = getVal(emp, ['ವಿಭಾಗ', 'department']).toLowerCase();
          const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'email']).toLowerCase();

          return (
            name.includes(term) ||
            designation.includes(term) ||
            dept.includes(term) ||
            email.includes(term)
          );
        });

        if (filtered.length === 0) return null;

        return {
          title: sec.title,
          subtitle: sec.subtitle,
          members: filtered,
        };
      })
      .filter(Boolean) as { title: string; subtitle: string | null; members: any[] }[];
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
                            const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
                            const designation = getVal(emp, ['ಹುದ್ದೆ', 'designation']);
                            const department = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
                            const cugNumber = getVal(emp, ['ಸಿಯುಜಿ ಮೊಬೈಲ್', 'ಮೊಬೈಲ್', 'cug', 'mobile', 'phone']);
                            const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'ಕಛೇರಿ ಇ ಮೇಲ್', 'ಇ-ಮೇಲ್', 'email', 'mail']);

                            const rowTheme = ROW_COLORS[index % ROW_COLORS.length];

                            return (
                              <tr
                                key={index}
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
                        const name = getVal(emp, ['ಸಿಬ್ಬಂದಿಯ ಹೆಸರು', 'ಹೆಸರು', 'name']);
                        const designation = getVal(emp, ['ಹುದ್ದೆ', 'designation']);
                        const department = getVal(emp, ['ವಿಭಾಗ', 'department', 'section']);
                        const cugNumber = getVal(emp, ['ಸಿಯುಜಿ ಮೊಬೈಲ್', 'ಮೊಬೈಲ್', 'cug', 'mobile', 'phone']);
                        const email = getVal(emp, ['ಕಛೇರಿ ಇ-ಮೇಲ್', 'ಕಛೇರಿ ಇ ಮೇಲ್', 'ಇ-ಮೇಲ್', 'email', 'mail']);

                        const rowTheme = ROW_COLORS[index % ROW_COLORS.length];

                        return (
                          <div
                            key={index}
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