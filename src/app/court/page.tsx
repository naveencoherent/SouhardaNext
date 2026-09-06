'use client';

import React, { useState, useMemo } from 'react';
import { Search, Calendar, Gavel, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CourtHero from '@/components/common/CourtHero';

interface CourtCase {
  slNo: number;
  caseNo: string;
  petitioner: string;
  respondent: string;
  stage: string;
  nextDate: string;
}

const CASES_DATA: CourtCase[] = [
  {
    slNo: 1,
    caseNo: 'DRD/KSS/1635/2025-26',
    petitioner: 'Chief Executive, Shri Bharathi S.S.N. , Mangaluru',
    respondent: 'Santhosh & Others',
    stage: 'Order',
    nextDate: '28.09.2026',
  },
  {
    slNo: 2,
    caseNo: 'DRD/KSS/1638/2025-26',
    petitioner: 'Chief Executive, Shri Bharathi S.S.N. , Mangaluru',
    respondent: 'Shanthi & Others',
    stage: 'Order',
    nextDate: '28.09.2026',
  },
  {
    slNo: 3,
    caseNo: 'DRD/KSS/1640/2025-26',
    petitioner: 'Chief Executive, Shri Bharathi S.S.N. , Mangaluru',
    respondent: 'Madhava Kulal & Others',
    stage: 'Order',
    nextDate: '28.09.2026',
  },
  {
    slNo: 4,
    caseNo: 'DRD/KSS/1821/2025-26',
    petitioner: 'Chief Executive, Shri Bharathi S.S.N. , Mangaluru',
    respondent: 'Durganath & Others',
    stage: 'Order',
    nextDate: '28.09.2026',
  },
  {
    slNo: 5,
    caseNo: 'DRD/KSS/1822/2025-26',
    petitioner: 'Chief Executive, Shri Bharathi S.S.N. , Mangaluru',
    respondent: 'Deeksha R. Shetty & Others',
    stage: 'Order',
    nextDate: '28.09.2026',
  },
  {
    slNo: 6,
    caseNo: 'DRD/KSS/1900/2025-26',
    petitioner: 'Chief Executive, KSSFCL, Bengaluru',
    respondent: 'Rajesh Kumar',
    stage: 'Hearing',
    nextDate: '07.09.2026',
  },
  {
    slNo: 7,
    caseNo: 'DRD/KSS/1905/2025-26',
    petitioner: 'Chief Executive, KSSFCL, Bengaluru',
    respondent: 'Suresh M. & Others',
    stage: 'Evidence',
    nextDate: '04.09.2026',
  },
  {
    slNo: 8,
    caseNo: 'DRD/KSS/1912/2025-26',
    petitioner: 'Chief Executive, Vijaya Souharda Co-op, Mysuru',
    respondent: 'Ramesh G. & Others',
    stage: 'Hearing',
    nextDate: '12.10.2026',
  },
  {
    slNo: 9,
    caseNo: 'DRD/KSS/1925/2025-26',
    petitioner: 'Chief Executive, Pragathi Souharda Credit Co-op, Hubballi',
    respondent: 'Anand Kumar C.',
    stage: 'Order',
    nextDate: '15.10.2026',
  },
  {
    slNo: 10,
    caseNo: 'DRD/KSS/1930/2025-26',
    petitioner: 'Chief Executive, Sahakara Souharda Bank, Belagavi',
    respondent: 'Prakash Patil & Others',
    stage: 'Evidence',
    nextDate: '20.10.2026',
  },
];

export default function CourtPage() {
  const { locale } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('all');

  const filteredCases = useMemo(() => {
    return CASES_DATA.filter((item) => {
      const caseNo = item.caseNo || '';
      const pet = item.petitioner || '';
      const res = item.respondent || '';
      const term = searchTerm.toLowerCase();

      return (
        caseNo.toLowerCase().includes(term) ||
        pet.toLowerCase().includes(term) ||
        res.toLowerCase().includes(term)
      );
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO BANNER */}
      <CourtHero />

      {/* 2. CASE TRACKER SECTION */}
      <div className="max-w-7xl mx-auto my-6 px-3 sm:px-5 lg:px-6">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          
          {/* Maroon Header Matching Banner Theme */}
          <div className="bg-gradient-to-r from-red-950 via-rose-950 to-stone-950 text-white p-5 flex items-center gap-3 border-b border-rose-900/40">
            <Gavel className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-wide">
                {locale === 'kn' ? 'ಲೈವ್ ಸಮಯದ ಪ್ರಕರಣಗಳ ಪಟ್ಟಿ ಮತ್ತು ಪ್ರಕರಣ ಟ್ರ್ಯಾಕರ್ (2026)' : 'Live Cause List & Case Tracker (2026)'}
              </h2>
              <p className="text-xs text-rose-200/80 mt-0.5">
                {locale === 'kn' ? 'ನ್ಯಾಯಾಲಯ ಸಂಖ್ಯೆ, ಅರ್ಜಿ, ಅಥವಾ ಪ್ರತಿವಾದಿ ಮೂಲಕ ಹುಡುಕಿ' : 'Search cases by Case Number, Petitioner, or Respondent'}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-white">
            {/* Search and Filter Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
              <div className="md:col-span-2 relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={locale === 'kn' ? 'ನ್ಯಾಯಾಲಯ ಸಂಖ್ಯೆ, ಅರ್ಜಿ, ಅಥವಾ ಪ್ರತಿವಾದಿ ಹುಡುಕಿ...' : 'Search Case No, Petitioner, or Respondent...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 appearance-none cursor-pointer"
                >
                  <option value="all">{locale === 'kn' ? 'ಎಲ್ಲಾ ವಿಚಾರಣೆ ದಿನಾಂಕಗಳು' : 'All Hearing Dates'}</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white shadow-xs">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-600">
                  <tr>
                    <th className="px-4 py-3 w-16">SL. NO.</th>
                    <th className="px-4 py-3">CASE NO.</th>
                    <th className="px-4 py-3">PETITIONER</th>
                    <th className="px-4 py-3">RESPONDENTS</th>
                    <th className="px-4 py-3">STAGE</th>
                    <th className="px-4 py-3 text-right">NEXT DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredCases.map((item) => (
                    <tr key={item.slNo} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-3 text-slate-400 font-semibold text-xs">{item.slNo}</td>
                      <td className="px-4 py-3 font-bold text-slate-900 text-sm">{item.caseNo}</td>
                      <td className="px-4 py-3 font-medium text-blue-600 text-sm">{item.petitioner}</td>
                      <td className="px-4 py-3 font-medium text-slate-900 text-sm">{item.respondent}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          item.stage === 'Order' ? 'bg-amber-100 text-amber-900' :
                          item.stage === 'Evidence' ? 'bg-orange-100 text-orange-900' : 'bg-yellow-100 text-yellow-900'
                        }`}>
                          {item.stage}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-rose-900 text-sm">{item.nextDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Showing {filteredCases.length} Records</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HERO CONTENT & RESOURCES */}
      <div 
        className="py-12 px-3 sm:px-5 lg:px-6 border-t border-slate-200 bg-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-[11px] font-semibold">
                {locale === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತ' : 'Karnataka State Souharda Federal Co-operative Ltd.'}
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.15] tracking-tight">
                Judicial Excellence <span className="text-amber-500 block">in Cooperatives</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {locale === 'kn'
                  ? 'ಕೆ.ಎಸ್.ಎಸ್.ಎಫ್.ಸಿ.ಎಲ್ ನ್ಯಾಯಾಲಯವು ಕರ್ನಾಟಕ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಕಾಯ್ದೆ, ೧೯೯೭ ರ ಅಡಿಯಲ್ಲಿ ವಿವಾದಗಳನ್ನು ಬಗೆಹರಿಸಲು ಕಾರ್ಯನಿರ್ವಹಿಸುವ ವಿಶೇಷ ನ್ಯಾಯಾಧಿಕರಣವಾಗಿದೆ.'
                  : 'The KSSFCL Court serves as a specialized tribunal for resolving disputes under the Karnataka Souharda Sahakari Act, 1997. It bridges the gap between legal complexity and cooperative harmony through streamlined arbitration.'}
              </p>

              {/* Updated Contact Details Box: Changed blue border & background to Maroon Red Theme */}
              <div className="bg-white rounded-xl border-2 border-rose-950/20 overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-red-950 via-rose-950 to-stone-950 text-white px-5 py-3 flex items-center gap-2.5 border-b border-rose-900/40">
                  <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="text-base sm:text-lg font-black tracking-wider uppercase">
                    441 Court Wing Contact Details
                  </h3>
                </div>

                <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-slate-700">
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-amber-600 text-base sm:text-lg block mb-0.5">
                        Court Location
                      </span>
                      <div className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed space-y-0.5">
                        <p>Souharda Sahakari Soudha,</p>
                        <p>No. 68, 1st Floor, Margosa Road,</p>
                        <p>Malleshwaram, Bengaluru - 560003</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-rose-900 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm sm:text-base block mb-0.5">
                        Official Court Email
                      </span>
                      <a href="mailto:441court@souharda.coop" className="text-rose-900 font-bold hover:underline text-sm sm:text-base">
                        441court@souharda.coop
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-rose-900 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm sm:text-base block mb-0.5">
                        Helpline Lines
                      </span>
                      <p className="text-slate-800 font-bold text-sm sm:text-base">
                        080 - 23378375 / 76 / 77 / 78
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0D1527] text-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {locale === 'kn' ? 'ಪ್ರಮುಖ ನ್ಯಾಯಾಂಗ ಡೌನ್‌ಲೋಡ್‌ಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು' : 'Key Judicial Downloads & Resources'}
                  </h3>
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></span>
                </div>

                <div className="space-y-3">
                  <a href="pdf/2022/Arbitration/ABN_list.pdf" target="_blank" rel="noopener noreferrer" className="block bg-[#162136] border border-slate-800/80 p-4 rounded-lg flex items-start gap-3 hover:border-amber-500/50 hover:bg-[#1b2942] transition-all group">
                    <span className="w-3 h-3 bg-amber-400 rounded-full shrink-0 mt-1"></span>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors leading-snug">
                        ಜಿಲ್ಲಾವಾರು ಮಧ್ಯಸ್ಥದಾರರ ಪಟ್ಟಿ (Arbitrator List)
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">Download PDF &bull; Updated Directory</p>
                    </div>
                  </a>

                  <a href="pdf/2018/EP_Court_Fee_Structure.pdf" target="_blank" rel="noopener noreferrer" className="block bg-[#162136] border border-slate-800/80 p-4 rounded-lg flex items-start gap-3 hover:border-indigo-500/50 hover:bg-[#1b2942] transition-all group">
                    <span className="w-3 h-3 bg-indigo-400 rounded-full shrink-0 mt-1"></span>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        EP Court Fee Structure
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">Execution Petition fee details & guidelines</p>
                    </div>
                  </a>

                  <a href="pdf/2016/2016-07-28_08-33-24.pdf" target="_blank" rel="noopener noreferrer" className="block bg-[#162136] border border-slate-800/80 p-4 rounded-lg flex items-start gap-3 hover:border-cyan-500/50 hover:bg-[#1b2942] transition-all group">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full shrink-0 mt-1"></span>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        Notification
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">Official Gazette Notification PDF</p>
                    </div>
                  </a>

                  <a href="Circulars/Doc/Circular_StampAct.pdf" target="_blank" rel="noopener noreferrer" className="block bg-[#162136] border border-slate-800/80 p-4 rounded-lg flex items-start gap-3 hover:border-emerald-500/50 hover:bg-[#1b2942] transition-all group">
                    <span className="w-3 h-3 bg-emerald-400 rounded-full shrink-0 mt-1"></span>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-white leading-relaxed group-hover:text-emerald-300 transition-colors">
                        ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ದಾವಾ ಪಂಚಾಯ್ತಿ ನ್ಯಾಯಾಲಯ, ನಿ., ೪೪೧ ಇಲ್ಲಿ ದಾಖಲಿಸುವ ದಾವೆಗಳ ಶೀಘ್ರ ಇತ್ಯರ್ಥಕ್ಕಾಗಿ ಸಹಕಾರಿಗಳ ಪಾತ್ರ
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-medium">Circular &bull; Stamp Act & Quick Settlement Guidelines</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}