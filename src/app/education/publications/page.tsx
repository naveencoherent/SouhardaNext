'use client';

import { useState, useMemo } from 'react';
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
import EducationHero from '@/components/common/EducationHero';

type CategoryType = 'all' | 'gbm' | 'circulars' | 'act-books' | 'audit' | 'yashasvini' | 'formats';

interface PublicationItem {
  id: string;
  category: CategoryType;
  badge: string;
  title: string;
  fileUrl: string;
  fileType?: 'pdf' | 'doc';
  isLatest?: boolean;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'gbm', label: 'GBM' },
  { id: 'circulars', label: 'Circulars' },
  { id: 'act-books', label: 'Act Books' },
  { id: 'audit', label: 'Audit Reports' },
  { id: 'yashasvini', label: 'Yashasvini' },
  { id: 'formats', label: 'Formats' },
];

const PUBLICATIONS_DATA: PublicationItem[] = [
  // --- GBM ---
  {
    id: 'gbm-2024',
    category: 'gbm',
    badge: '2024 - LATEST',
    title: '24th Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2024.pdf',
    isLatest: true,
  },
  {
    id: 'gbm-2023',
    category: 'gbm',
    badge: '2023 - ARCHIVE',
    title: '23rd Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2023.pdf',
  },
  {
    id: 'gbm-2022',
    category: 'gbm',
    badge: '2022 - ARCHIVE',
    title: '22nd Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2022.pdf',
  },
  {
    id: 'gbm-2021',
    category: 'gbm',
    badge: '2021 - ARCHIVE',
    title: '21st Annual General Body Meeting Proceedings',
    fileUrl: '/downloads/publications/gbm-2021.pdf',
  },

  // --- Yashasvini ---
  {
    id: 'yashasvini-relaunch',
    category: 'yashasvini',
    badge: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆ',
    title: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆಯನ್ನು ಮರುಜಾರಿಗೊಳಿಸಿರುವ ಬಗ್ಗೆ ಸರ್ಕಾರದ ಆದೇಶ',
    fileUrl: '/downloads/publications/yashasvini-relaunch.pdf',
  },
  {
    id: 'yashasvini-new-members-govt-order',
    category: 'yashasvini',
    badge: 'ಯಶಸ್ವಿನಿ - ಸರ್ಕಾರದ ಆದೇಶ',
    title: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆಗೆ ಹೊಸ ಸದಸ್ಯರನ್ನು ನೋಂದಾಯಿಸುವ ಬಗ್ಗೆ ಸರ್ಕಾರದ ಆದೇಶ',
    fileUrl: '/downloads/publications/yashasvini-new-members-govt-order.pdf',
  },
  {
    id: 'yashasvini-registration-form-2022-23',
    category: 'yashasvini',
    badge: 'ಯಶಸ್ವಿನಿ ನೋಂದಣಿ ನಮೂನೆ',
    title: '2022-23 ನೇ ಸಾಲಿಗೆ ಹೊಸ ಸದಸ್ಯರ ನೋಂದಣಿ ನಮೂನೆ.',
    fileUrl: '/downloads/publications/yashasvini-registration-form-2022-23.pdf',
  },
  {
    id: 'yashasvini-circular',
    category: 'yashasvini',
    badge: 'ಯಶಸ್ವಿನಿ ಸುತ್ತೋಲೆ',
    title: 'ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಯಶಸ್ವಿನಿ ಯೋಜನೆ ಸುತ್ತೋಲೆ.',
    fileUrl: '/downloads/publications/yashasvini-circular.pdf',
  },
  {
    id: 'yashasvini-article',
    category: 'yashasvini',
    badge: 'ಯಶಸ್ವಿನಿ ಲೇಖನ',
    title: 'ಯಶಸ್ವಿನಿ ಯೋಜನೆ ಲೇಖನ',
    fileUrl: '/downloads/publications/yashasvini-article.pdf',
  },

  // --- Audit Reports ---
  {
    id: 'audit-urban-bank-2018',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Urban Bank Audit Report Format 2018',
    fileUrl: '/downloads/publications/audit-urban-bank-2018.pdf',
  },
  {
    id: 'audit-2008-09',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit report : 2008 - 2009.',
    fileUrl: '/downloads/publications/audit-2008-09.pdf',
  },
  {
    id: 'audit-2009-10',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit report : 2009 - 2010.',
    fileUrl: '/downloads/publications/audit-2009-10.pdf',
  },
  {
    id: 'audit-2010-11',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit Report : 2010 - 2011.',
    fileUrl: '/downloads/publications/audit-2010-11.pdf',
  },
  {
    id: 'audit-2011-12',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit Report : 2011 - 2012.',
    fileUrl: '/downloads/publications/audit-2011-12.pdf',
  },
  {
    id: 'audit-2012-13',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit Report : 2012 - 2013.',
    fileUrl: '/downloads/publications/audit-2012-13.pdf',
  },
  {
    id: 'audit-2013-14-en',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit Report (English) : 2013 - 2014.',
    fileUrl: '/downloads/publications/audit-2013-14-en.pdf',
  },
  {
    id: 'audit-2014-15',
    category: 'audit',
    badge: 'Audit Reports',
    title: 'Audit report : 2014 - 2015.',
    fileUrl: '/downloads/publications/audit-2014-15.pdf',
  },

  // --- Circulars ---
  {
    id: 'circ-audit-guidelines-2018',
    category: 'circulars',
    badge: 'Audit guidelines',
    title: 'Urban Bank Audit Report Format 2018',
    fileUrl: '/downloads/publications/urban-bank-audit-format-2018.pdf',
  },
  {
    id: 'circ-coop-dept-2008-09',
    category: 'circulars',
    badge: 'Circular from Co-Operative Department',
    title: 'Audit report : 2008 - 2009.',
    fileUrl: '/downloads/publications/coop-dept-circular-2008-09.pdf',
  },
  {
    id: 'circ-federal-coop-2009-10',
    category: 'circulars',
    badge: 'Federal Co-Operative Circular',
    title: 'Audit report : 2009 - 2010.',
    fileUrl: '/downloads/publications/federal-circular-2009-10.pdf',
  },
  {
    id: 'circ-other-2010-11',
    category: 'circulars',
    badge: 'Other Circulars',
    title: 'Audit Report : 2010 - 2011.',
    fileUrl: '/downloads/publications/other-circular-2010-11.pdf',
  },
  {
    id: 'circ-rbi-gazette-2011-12',
    category: 'circulars',
    badge: 'RBI Circular & Gazette Notification',
    title: 'Audit Report : 2011 - 2012.',
    fileUrl: '/downloads/publications/rbi-gazette-2011-12.pdf',
  },
  {
    id: 'circ-bylaw-amendment-2012-13',
    category: 'circulars',
    badge: 'Application Formats For Bylaw Amendment',
    title: 'Audit Report : 2012 - 2013.',
    fileUrl: '/downloads/publications/bylaw-amendment-2012-13.pdf',
  },
  {
    id: 'circ-dcc-bank-membership-2013-14',
    category: 'circulars',
    badge: 'Clarification Register regarding Membership in D.C.C.Bank for Souharda Cooperative Banks',
    title: 'Audit Report (English) : 2013 - 2014.',
    fileUrl: '/downloads/publications/dcc-bank-clarification.pdf',
  },
  {
    id: 'circ-delegation-of-power-2014-15',
    category: 'circulars',
    badge: 'Delegation of Power to Subordinate Officers of Cooperative Department',
    title: 'Audit report : 2014 - 2015.',
    fileUrl: '/downloads/publications/delegation-of-power.pdf',
  },
  {
    id: 'circ-commercial-banks-preferential',
    category: 'circulars',
    badge: 'Commercial Banks to give preferential advance to souharda cooperatives',
    title: 'Audit report : 2014 - 2015.',
    fileUrl: '/downloads/publications/commercial-banks-preferential.pdf',
  },
  {
    id: 'circ-sale-officers-govt-order',
    category: 'circulars',
    badge: 'Souharda Co-operatives may have this one sale officers : orders government',
    title: 'Audit report : 2014 - 2015.',
    fileUrl: '/downloads/publications/sale-officers-govt-order.pdf',
  },

  // --- Formats ---
  {
    id: 'fmt-credit-souharda-pdf',
    category: 'formats',
    badge: 'Audit Report',
    title: 'Credit Souharda',
    fileUrl: '/downloads/publications/formats/credit-souharda-audit.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-credit-souharda-doc',
    category: 'formats',
    badge: 'Audit Report',
    title: 'Credit Souharda',
    fileUrl: '/downloads/publications/formats/credit-souharda-audit.docx',
    fileType: 'doc',
  },
  {
    id: 'fmt-multipurpose-pdf',
    category: 'formats',
    badge: 'Audit Report',
    title: 'Multipurpose Souharda',
    fileUrl: '/downloads/publications/formats/multipurpose-audit.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-multipurpose-doc',
    category: 'formats',
    badge: 'Audit Report',
    title: 'Multipurpose Souharda',
    fileUrl: '/downloads/publications/formats/multipurpose-audit.docx',
    fileType: 'doc',
  },
  {
    id: 'fmt-new-branch-opening',
    category: 'formats',
    badge: 'Branch Opening',
    title: 'New Branch Opening Request Format.',
    fileUrl: '/downloads/publications/formats/new-branch-opening.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-board-details',
    category: 'formats',
    badge: 'Application Formats For Bylaw Amendment',
    title: 'Board Details',
    fileUrl: '/downloads/publications/formats/board-details.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-branch-details',
    category: 'formats',
    badge: 'Clarification Register regarding Membership in D.C.C.Bank for Souharda Cooperative Banks',
    title: 'Branch details',
    fileUrl: '/downloads/publications/formats/branch-details.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-financial-details',
    category: 'formats',
    badge: 'Delegation of Power to Subordinate Officers of Cooperative Department',
    title: 'Financial details',
    fileUrl: '/downloads/publications/formats/financial-details.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-half-year-info',
    category: 'formats',
    badge: 'Commercial Banks to give preferential advance to souharda cooperatives',
    title: 'Half year information.',
    fileUrl: '/downloads/publications/formats/half-year-info.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-form-2',
    category: 'formats',
    badge: 'Souharda Co-operatives may have this one sale officers : orders government',
    title: 'Form 2',
    fileUrl: '/downloads/publications/formats/form-2.pdf',
    fileType: 'pdf',
  },
  {
    id: 'fmt-form-3',
    category: 'formats',
    badge: 'Souharda Co-operatives may have this one sale officers : orders government',
    title: 'Form 3',
    fileUrl: '/downloads/publications/formats/form-3.pdf',
    fileType: 'pdf',
  },

  // --- Act Books ---
  {
    id: 'act-kannada-book',
    category: 'act-books',
    badge: 'Kannada Act Book',
    title: 'kannada Act Book',
    fileUrl: '/downloads/publications/act-books/kannada-act-book.pdf',
  },
  {
    id: 'act-english-book',
    category: 'act-books',
    badge: 'English Act Book',
    title: 'English Act Book',
    fileUrl: '/downloads/publications/act-books/english-act-book.pdf',
  },
  {
    id: 'act-sahakara-avalokana',
    category: 'act-books',
    badge: 'ಸಹಕಾರ ಅವಲೋಕನ',
    title: 'ಸಹಕಾರ ಅವಲೋಕನ',
    fileUrl: '/downloads/publications/act-books/sahakara-avalokana.pdf',
  },
  {
    id: 'act-souharda-kaiyade-new',
    category: 'act-books',
    badge: 'Souharda kaiyade book New',
    title: 'Souharda kaiyade book New',
    fileUrl: '/downloads/publications/act-books/souharda-kaiyade-book-new.pdf',
  },
  {
    id: 'act-model-bye-law',
    category: 'act-books',
    badge: 'Model Bye Law',
    title: 'Model Bye Law',
    fileUrl: '/downloads/publications/act-books/model-bye-law.pdf',
  },
  {
    id: 'act-model-service-rules',
    category: 'act-books',
    badge: 'Souharda Cooprative Model Service Rules',
    title: 'Model Service Rules',
    fileUrl: '/downloads/publications/act-books/model-service-rules.pdf',
  },
  {
    id: 'act-high-court-judgement',
    category: 'act-books',
    badge: 'High Court Judgement Book',
    title: 'High Court Judgement Book',
    fileUrl: '/downloads/publications/act-books/high-court-judgement-book.pdf',
  },
  {
    id: 'act-income-tax-judgement',
    category: 'act-books',
    badge: 'Income tax Judgement',
    title: 'Income tax Judgement',
    fileUrl: '/downloads/publications/act-books/income-tax-judgement.pdf',
  },
  {
    id: 'act-sdg',
    category: 'act-books',
    badge: 'Sustainable Development Goals',
    title: 'Sustainable Development Goals',
    fileUrl: '/downloads/publications/act-books/sdg-goals.pdf',
  },
  {
    id: 'act-mahiti-kaipidi-1',
    category: 'act-books',
    badge: 'Mahiti Kaipidi',
    title: 'Mahiti Kaipidi / Mahiti Kaipidi',
    fileUrl: '/downloads/publications/act-books/mahiti-kaipidi-1.pdf',
  },
  {
    id: 'act-court-judgements-summary-kn',
    category: 'act-books',
    badge: 'ಸಹಕಾರ ಕ್ಷೇತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ನ್ಯಾಯಾಲಯದ ತೀರ್ಪುಗಳ ಸಾರಾಂಶ',
    title: 'ನ್ಯಾಯಾಲಯದ ತೀರ್ಪುಗಳ ಸಾರಾಂಶ',
    fileUrl: '/downloads/publications/act-books/court-judgements-summary-kn.pdf',
  },
  {
    id: 'act-model-loan-rules-kn',
    category: 'act-books',
    badge: 'ಮಾದರಿ ಸಾಲದ ನಿಯಮಗಳು',
    title: 'ಮಾದರಿ ಸಾಲದ ನಿಯಮಗಳು',
    fileUrl: '/downloads/publications/act-books/model-loan-rules-kn.pdf',
  },
  {
    id: 'act-high-court-judgement-kn',
    category: 'act-books',
    badge: 'High Court Judgement - Kannada',
    title: 'High Court Judgement - Kannada',
    fileUrl: '/downloads/publications/act-books/high-court-judgement-kn.pdf',
  },
  {
    id: 'act-coop-principal-shashidar-yele',
    category: 'act-books',
    badge: 'Cooperative Principal By Shashidar yele',
    title: 'Cooperative Principal By Shashidar yele',
    fileUrl: '/downloads/publications/act-books/coop-principal-shashidar-yele.pdf',
  },
  {
    id: 'act-mahiti-kaipidi-2',
    category: 'act-books',
    badge: 'Mahiti Kaipidi',
    title: 'Mahiti Kaipidi / Mahiti Kaipidi',
    fileUrl: '/downloads/publications/act-books/mahiti-kaipidi-2.pdf',
  },
];

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredPublications = useMemo(() => {
    if (activeCategory === 'all') return PUBLICATIONS_DATA;
    return PUBLICATIONS_DATA.filter((pub) => pub.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Shared Education Header */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="Publications & Resources"
        subtitle="Empowering the Roots through Digital Innovation"
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
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
              {cat.label}
            </button>
          ))}
        </div>

        {/* Nudi Software Notice */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3 text-amber-950 text-xs sm:text-sm shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            To view Kannada Documents seamlessly, please{' '}
            <a
              href="https://kanndakasturi.karnataka.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-emerald-900 hover:text-amber-700"
            >
              Download Nudi Software
            </a>
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
                      {pub.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                      {pub.title}
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
                    {pub.fileType === 'doc' ? 'Download DOC' : 'Download PDF'}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-slate-400 space-y-2 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-sm font-semibold">No publications found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}