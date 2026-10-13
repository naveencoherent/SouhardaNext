'use client';

import React, { useState, useMemo } from 'react';
import { Search, Building2, Filter, Layers } from 'lucide-react';

interface DistrictItem {
  sl_no?: number;
  district?: string;
  not_working?: number;
  liquidation_pending?: number;
  liquidation_order?: number;
  closed_registration_cancelled?: number;
  total?: number;
}

interface DivisionItem {
  division_name?: string;
  districts?: DistrictItem[];
}

interface CooperativeDirectoryProps {
  locale?: 'en' | 'kn';
  data?: {
    divisions?: DivisionItem[];
  };
}

export default function CooperativeDirectory({ locale = 'en', data }: CooperativeDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('ALL');

  // Extract all division names safely
  const divisionNames = useMemo(() => {
    if (!data?.divisions || !Array.isArray(data.divisions)) return [];
    return data.divisions
      .map((div) => div.division_name)
      .filter((name): name is string => Boolean(name));
  }, [data]);

  // Flatten and filter districts safely based on division & search query
  const filteredDistricts = useMemo(() => {
    if (!data?.divisions || !Array.isArray(data.divisions)) return [];

    let result: (DistrictItem & { division: string })[] = [];

    data.divisions.forEach((div) => {
      const divName = div.division_name || 'Unknown';
      
      if (selectedDivision === 'ALL' || selectedDivision === divName) {
        if (Array.isArray(div.districts)) {
          div.districts.forEach((dist) => {
            result.push({
              ...dist,
              division: divName,
            });
          });
        }
      }
    });

    // Handle search input safely (null-safe string matching)
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase().trim();
      result = result.filter((item) => {
        const districtName = (item.district || '').toLowerCase();
        const divisionName = (item.division || '').toLowerCase();
        return districtName.includes(query) || divisionName.includes(query);
      });
    }

    return result;
  }, [data, selectedDivision, searchTerm]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <span className="text-[11px] font-black tracking-widest text-amber-600 uppercase">
            {locale === 'kn' ? 'ಸಹಕಾರ ಡೈರೆಕ್ಟರಿ' : 'COOPERATIVE DIRECTORY'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
            {locale === 'kn' ? 'ವಿಭಾಗವಾರು ಮತ್ತು ಜಿಲ್ಲಾವಾರು ಮಾಹಿತಿ' : 'Division & District Breakdown'}
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={locale === 'kn' ? 'ಜಿಲ್ಲೆ ಅಥವಾ ವಿಭಾಗ ಹುಡುಕಿ...' : 'Search district or division...'}
            className="w-full pl-9 pr-4 py-2 text-xs font-medium border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* Division Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedDivision('ALL')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            selectedDivision === 'ALL'
              ? 'bg-amber-500 text-slate-950 shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {locale === 'kn' ? 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' : 'All Divisions'}
        </button>

        {divisionNames.map((divName) => (
          <button
            key={divName}
            onClick={() => setSelectedDivision(divName)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedDivision === divName
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {divName}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-200/80 rounded-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">{locale === 'kn' ? 'ಜಿಲ್ಲೆ' : 'District'}</th>
              <th className="py-3 px-4">{locale === 'kn' ? 'ವಿಭಾಗ' : 'Division'}</th>
              <th className="py-3 px-4 text-slate-700">{locale === 'kn' ? 'ಕಾರ್ಯನಿರ್ವಹಿಸದ' : 'Not Working'}</th>
              <th className="py-3 px-4 text-amber-700">{locale === 'kn' ? 'ಲಿಕ್ವಿಡೇಷನ್ ಬಾಕಿ' : 'Liquidation Pending'}</th>
              <th className="py-3 px-4 text-rose-700">{locale === 'kn' ? 'ಆದೇಶ ಹೊರಡಿಸಲಾಗಿದೆ' : 'Liquidation Order'}</th>
              <th className="py-3 px-4 text-emerald-700">{locale === 'kn' ? 'ರದ್ದುಗೊಂಡಿದೆ' : 'Closed / Cancelled'}</th>
              <th className="py-3 px-4 text-slate-900 font-black">{locale === 'kn' ? 'ಒಟ್ಟು' : 'Total'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredDistricts.length > 0 ? (
              filteredDistricts.map((item, index) => (
                <tr key={`${item.district}-${index}`} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-mono text-slate-400">{item.sl_no ?? index + 1}</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{item.district || 'N/A'}</td>
                  <td className="py-3 px-4 text-slate-500">{item.division}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{item.not_working ?? 0}</td>
                  <td className="py-3 px-4 font-semibold text-amber-600">{item.liquidation_pending ?? 0}</td>
                  <td className="py-3 px-4 font-semibold text-rose-600">{item.liquidation_order ?? 0}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-600">{item.closed_registration_cancelled ?? 0}</td>
                  <td className="py-3 px-4 font-black text-slate-900">{item.total ?? 0}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-10 text-center text-slate-400 font-medium">
                  {locale === 'kn' ? 'ಯಾವುದೇ ಮಾಹಿತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No matching records found'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}