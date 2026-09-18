'use client';

import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  AlertCircle, 
  History, 
  BookOpen, 
  FileCheck, 
  ShieldCheck, 
  FolderArchive,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import EducationHero from '@/components/common/EducationHero';

type CategoryType = 'all' | 'gbm' | 'circulars' | 'act-books' | 'audit' | 'yashasvini' | 'formats';

interface PublicationItem {
  id: string;
  category: CategoryType;
  badgeKn: string;
  badgeEn: string;
  titleKn: string;
  titleEn: string;
  fileUrl: string;
  fileType?: 'pdf' | 'doc';
  isLatest?: boolean;
}

const CATEGORIES: { id: CategoryType; labelKn: string; labelEn: string }[] = [
  { id: 'all', labelKn: 'ಎಲ್ಲವೂ', labelEn: 'All' },
  { id: 'gbm', labelKn: 'ಮಹಾಸಭೆಯ ನಡಾವಳಿಗಳು', labelEn: 'GBM' },
  { id: 'circulars', labelKn: 'ಸುತ್ತೋಲೆಗಳು', labelEn: 'Circulars' },
  { id: 'act-books', labelKn: 'ಕಾಯ್ದೆ ಪುಸ್ತಕಗಳು', labelEn: 'Act Books' },
  { id: 'audit', labelKn: 'ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿಗಳು', labelEn: 'Audit Reports' },
  { id: 'yashasvini', labelKn: 'ಯಶಸ್ವಿನಿ', labelEn: 'Yashasvini' },
  { id: 'formats', labelKn: 'ನಮೂನೆಗಳು', labelEn: 'Formats' },
];

const PUBLICATIONS_DATA: PublicationItem[] = [
  // --- GBM ---
  {
    id: 'gbm-2024',
    category: 'gbm',
    badgeKn: '೨೦೨೪ - ಇತ್ತೀಚಿನದು',
    badgeEn: '2024 - LATEST',
    titleKn: '೨೪ನೇ ವಾರ್ಷಿಕ ಸರ್ವಸಾಧಾರಣ ಸಭೆಯ ನಡಾವಳಿಗಳು',
    titleEn: '24th Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2024.pdf',
    isLatest: true,
  },
  {
    id: 'gbm-2023',
    category: 'gbm',
    badgeKn: '೨೦೨೩ - ಆರ್ಕೈವ್',
    badgeEn: '2023 - ARCHIVE',
    titleKn: '೨೩ನೇ ವಾರ್ಷಿಕ ಸರ್ವಸಾಧಾರಣ ಸಭೆಯ ನಡಾವಳಿಗಳು',
    titleEn: '23rd Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2023.pdf',
  },
  {
    id: 'gbm-2022',
    category: 'gbm',
    badgeKn: '೨೦೨೨ - ಆರ್ಕೈವ್',
    badgeEn: '2022 - ARCHIVE',
    titleKn: '೨೨ನೇ ವಾರ್ಷಿಕ ಸರ್ವಸಾಧಾರಣ ಸಭೆಯ ನಡಾವಳಿಗಳು',
    titleEn: '22nd Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2022.pdf',
  },
  {
    id: 'gbm-2021',
    category: 'gbm',
    badgeKn: '೨೦೨೧ - ಆರ್ಕೈವ್',
    badgeEn: '2021 - ARCHIVE',
    titleKn: '೨೧ನೇ ವಾರ್ಷಿಕ ಸರ್ವಸಾಧಾರಣ ಸಭೆಯ ನಡಾವಳಿಗಳು',
    titleEn: '21st Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2021.pdf',
  },

  // --- Yashasvini ---
  {
    id: 'yashasvini-relaunch',
    category: 'yashasvini',
    badgeKn: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆ',
    badgeEn: 'Yashasvini Scheme',
    titleKn: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆಯನ್ನು ಮರುಜಾರಿಗೊಳಿಸಿರುವ ಬಗ್ಗೆ ಸರ್ಕಾರದ ಆದೇಶ',
    titleEn: 'Govt Order regarding Relaunch of Yashasvini Scheme',
    fileUrl: '/downloads/publications/yashasvini-relaunch.pdf',
  },
  {
    id: 'yashasvini-new-members-govt-order',
    category: 'yashasvini',
    badgeKn: 'ಸರ್ಕಾರದ ಆದೇಶ',
    badgeEn: 'Govt Order',
    titleKn: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆಗೆ ಹೊಸ ಸದಸ್ಯರನ್ನು ನೋಂದಾಯಿಸುವ ಬಗ್ಗೆ ಸರ್ಕಾರದ ಆದೇಶ',
    titleEn: 'Govt Order regarding New Member Registration for Yashasvini',
    fileUrl: '/downloads/publications/yashasvini-new-members-govt-order.pdf',
  },
  {
    id: 'yashasvini-registration-form-2022-23',
    category: 'yashasvini',
    badgeKn: 'ನೋಂದಣಿ ನಮೂನೆ',
    badgeEn: 'Registration Form',
    titleKn: '2022-23 ನೇ ಸಾಲಿಗೆ ಹೊಸ ಸದಸ್ಯರ ನೋಂದಣಿ ನಮೂನೆ.',
    titleEn: 'New Member Registration Form for 2022-23.',
    fileUrl: '/downloads/publications/yashasvini-registration-form-2022-23.pdf',
  },
  {
    id: 'yashasvini-circular',
    category: 'yashasvini',
    badgeKn: 'ಸುತ್ತೋಲೆ',
    badgeEn: 'Circular',
    titleKn: 'ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಯಶಸ್ವಿನಿ ಯೋಜನೆ ಸುತ್ತೋಲೆ.',
    titleEn: 'Federation Circular on Yashasvini Scheme.',
    fileUrl: '/downloads/publications/yashasvini-circular.pdf',
  },

  // --- Audit Reports ---
  {
    id: 'audit-urban-bank-2018',
    category: 'audit',
    badgeKn: 'ಲೆಕ್ಕಪರಿಶೋಧನೆ ವರದಿ',
    badgeEn: 'Audit Report',
    titleKn: 'ಪಟ್ಟಣ ಬ್ಯಾಂಕ್ ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿ ನಮೂನೆ ೨೦೧೮',
    titleEn: 'Urban Bank Audit Report Format 2018',
    fileUrl: '/downloads/publications/audit-urban-bank-2018.pdf',
  },
  {
    id: 'audit-2014-15',
    category: 'audit',
    badgeKn: 'ಲೆಕ್ಕಪರಿಶೋಧನೆ ವರದಿ',
    badgeEn: 'Audit Report',
    titleKn: 'ಲೆಕ್ಕಪರಿಶೋಧನಾ ವರದಿ : ೨೦೧೪ - ೨೦೧೫',
    titleEn: 'Audit Report : 2014 - 2015',
    fileUrl: '/downloads/publications/audit-2014-15.pdf',
  },

  // --- Formats ---
  {
    id: 'fmt-credit-souharda-pdf',
    category: 'formats',
    badgeKn: 'ಲೆಕ್ಕಪರಿಶೋಧನೆ ನಮೂನೆ',
    badgeEn: 'Audit Format',
    titleKn: 'ಕ್ರೆಡಿಟ್ ಸೌಹಾರ್ದ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮಾದರಿ',
    titleEn: 'Credit Souharda Audit Format',
    fileUrl: '/downloads/publications/formats/credit-souharda-audit.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-credit-souharda-doc',
    category: 'formats',
    badgeKn: 'ವರ್ಡ್ ನಮೂನೆ',
    badgeEn: 'Word Format',
    titleKn: 'ಕ್ರೆಡಿಟ್ ಸೌಹಾರ್ದ ಲೆಕ್ಕಪರಿಶೋಧನೆ (Editable DOC)',
    titleEn: 'Credit Souharda Audit Format (Editable DOC)',
    fileUrl: '/downloads/publications/formats/credit-souharda-audit.docx',
    fileType: 'doc',
  },

  // --- Act Books ---
  {
    id: 'act-kannada-book',
    category: 'act-books',
    badgeKn: 'ಕನ್ನಡ ಕಾಯ್ದೆ ಪುಸ್ತಕ',
    badgeEn: 'Kannada Act Book',
    titleKn: 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ ಪುಸ್ತಕ (ಕನ್ನಡ)',
    titleEn: 'Karnataka Souharda Sahakari Act Book (Kannada)',
    fileUrl: '/downloads/publications/act-books/kannada-act-book.pdf',
  },
  {
    id: 'act-english-book',
    category: 'act-books',
    badgeKn: 'ಇಂಗ್ಲಿಷ್ ಕಾಯ್ದೆ ಪುಸ್ತಕ',
    badgeEn: 'English Act Book',
    titleKn: 'ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ ಪುಸ್ತಕ (ಇಂಗ್ಲಿಷ್)',
    titleEn: 'Karnataka Souharda Sahakari Act Book (English)',
    fileUrl: '/downloads/publications/act-books/english-act-book.pdf',
  },
];

export default function PublicationsPage() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredPublications = useMemo(() => {
    if (activeCategory === 'all') return PUBLICATIONS_DATA;
    return PUBLICATIONS_DATA.filter((pub) => pub.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Education Header Banner */}
      <EducationHero
        badgeText={
          locale === 'kn' ? 'ಸಹಕಾರ ಶಿಕ್ಷಣ ವಿಭಾಗ' : 'Co-operative Education Wing'
        }
        title={
          locale === 'kn' ? 'ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು' : 'Publications & Resources'
        }
        subtitle={
          locale === 'kn'
            ? 'ಡಿಜಿಟಲ್ ನಾವೀನ್ಯತೆಯ ಮೂಲಕ ಸಹಕಾರ ಕ್ಷೇತ್ರದ ಮೂಲಭೂತ ಸಬಲೀಕರಣ.'
            : 'Empowering the Roots through Digital Innovation'
        }
        imageSrc="/souharda/AllAboutKSSFCL_Intro.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2 border-b border-slate-200">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeCategory === cat.id
                  ? 'bg-emerald-950 text-amber-400 shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {locale === 'kn' ? cat.labelKn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Nudi Software Notice */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3 text-amber-950 text-xs sm:text-sm shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            {locale === 'kn' ? (
              <>
                ಕನ್ನಡ ದಾಖಲೆಗಳನ್ನು ಸುಲಭವಾಗಿ ವೀಕ್ಷಿಸಲು, ದಯವಿಟ್ಟು{' '}
                <a
                  href="https://kanndakasturi.karnataka.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-emerald-900 hover:text-amber-700"
                >
                  ನುಡಿ ತಂತ್ರಾಂಶವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ
                </a>
              </>
            ) : (
              <>
                To view Kannada Documents seamlessly, please{' '}
                <a
                  href="https://kanndakasturi.karnataka.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-emerald-900 hover:text-amber-700"
                >
                  Download Nudi Software
                </a>
              </>
            )}
          </span>
        </div>

        {/* Publications List Grid */}
        <div className="space-y-3" id="pubGrid">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                {/* Icon & Details */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl group-hover:bg-emerald-900 group-hover:text-amber-400 transition-colors shrink-0">
                    {pub.isLatest ? (
                      <FileText className="w-6 h-6" />
                    ) : pub.category === 'gbm' ? (
                      <History className="w-6 h-6" />
                    ) : pub.category === 'act-books' ? (
                      <BookOpen className="w-6 h-6" />
                    ) : pub.category === 'audit' ? (
                      <FileCheck className="w-6 h-6" />
                    ) : pub.category === 'yashasvini' ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : pub.fileType === 'doc' ? (
                      <FileSpreadsheet className="w-6 h-6" />
                    ) : (
                      <FolderArchive className="w-6 h-6" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {locale === 'kn' ? pub.badgeKn : pub.badgeEn}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                      {locale === 'kn' ? pub.titleKn : pub.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Download Button */}
                <div className="shrink-0 w-full sm:w-auto">
                  <a
                    href={pub.fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-emerald-900 text-slate-800 hover:text-white rounded-xl text-xs font-bold transition-all border border-slate-200 shadow-xs group/btn"
                  >
                    <Download className="w-4 h-4 text-amber-600 group-hover/btn:text-amber-400" />
                    {pub.fileType === 'doc'
                      ? locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್ DOC' : 'Download DOC'
                      : locale === 'kn' ? 'ಡೌನ್‌ಲೋಡ್ PDF' : 'Download PDF'}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-slate-400 space-y-2 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-sm font-semibold">
                {locale === 'kn' 
                  ? 'ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಪ್ರಕಟಣೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.' 
                  : 'No publications found in this category.'}
              </p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}