'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUpDown, Filter } from 'lucide-react';

interface DistrictRow {
  slNo: number;
  division: string;
  district: string;
  credit: number;
  thrift: number;
  bank: number;
  consumer: number;
  employees: number;
  dairy: number;
  housing: number;
  education: number;
  multipurpose: number;
  industry: number;
  agriculture: number;
  labour: number;
  okkuta: number;
  others: number;
  total: number;
  newCount: number;
  converted: number;
}

const RAW_DATA: DistrictRow[] = [
  // BENGALURU DIVISION
  { slNo: 1, division: '1. BENGALURU DIVISION', district: 'Bengaluru Urban', credit: 401, thrift: 8, bank: 4, consumer: 1, employees: 8, dairy: 0, housing: 0, education: 1, multipurpose: 80, industry: 1, agriculture: 4, labour: 1, okkuta: 2, others: 1, total: 512, newCount: 459, converted: 53 },
  { slNo: 2, division: '1. BENGALURU DIVISION', district: 'Bengaluru Rural', credit: 31, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 6, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 37, newCount: 36, converted: 1 },
  { slNo: 3, division: '1. BENGALURU DIVISION', district: 'Bengaluru South', credit: 11, thrift: 7, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 3, industry: 0, agriculture: 3, labour: 0, okkuta: 0, others: 0, total: 25, newCount: 22, converted: 3 },
  { slNo: 4, division: '1. BENGALURU DIVISION', district: 'Chikkaballapur', credit: 42, thrift: 2, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 7, industry: 0, agriculture: 1, labour: 0, okkuta: 1, others: 0, total: 53, newCount: 53, converted: 0 },
  { slNo: 5, division: '1. BENGALURU DIVISION', district: 'Kolar', credit: 29, thrift: 3, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 9, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 41, newCount: 41, converted: 0 },
  { slNo: 6, division: '1. BENGALURU DIVISION', district: 'Tumakuru', credit: 207, thrift: 13, bank: 1, consumer: 2, employees: 4, dairy: 0, housing: 0, education: 0, multipurpose: 24, industry: 0, agriculture: 3, labour: 0, okkuta: 1, others: 0, total: 255, newCount: 238, converted: 17 },
  { slNo: 7, division: '1. BENGALURU DIVISION', district: 'Shivamogga', credit: 115, thrift: 0, bank: 0, consumer: 1, employees: 2, dairy: 0, housing: 1, education: 0, multipurpose: 65, industry: 0, agriculture: 5, labour: 0, okkuta: 1, others: 4, total: 194, newCount: 186, converted: 8 },
  { slNo: 8, division: '1. BENGALURU DIVISION', district: 'Chitradurga', credit: 75, thrift: 23, bank: 2, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 7, industry: 0, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 108, newCount: 97, converted: 11 },
  { slNo: 9, division: '1. BENGALURU DIVISION', district: 'Davanagere', credit: 65, thrift: 4, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 24, industry: 0, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 94, newCount: 89, converted: 5 },

  // MYSURU DIVISION
  { slNo: 10, division: '2. MYSURU DIVISION', district: 'Mysuru', credit: 66, thrift: 0, bank: 0, consumer: 1, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 23, industry: 1, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 92, newCount: 85, converted: 7 },
  { slNo: 11, division: '2. MYSURU DIVISION', district: 'Mandya', credit: 33, thrift: 1, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 2, industry: 0, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 38, newCount: 38, converted: 0 },
  { slNo: 12, division: '2. MYSURU DIVISION', district: 'Hassan', credit: 55, thrift: 2, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 19, industry: 0, agriculture: 1, labour: 0, okkuta: 0, others: 0, total: 77, newCount: 76, converted: 1 },
  { slNo: 13, division: '2. MYSURU DIVISION', district: 'Chamarajanagar', credit: 27, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 9, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 36, newCount: 36, converted: 0 },
  { slNo: 14, division: '2. MYSURU DIVISION', district: 'South Canara', credit: 103, thrift: 2, bank: 0, consumer: 0, employees: 2, dairy: 0, housing: 0, education: 0, multipurpose: 34, industry: 0, agriculture: 1, labour: 0, okkuta: 1, others: 2, total: 145, newCount: 141, converted: 4 },
  { slNo: 15, division: '2. MYSURU DIVISION', district: 'Kodagu', credit: 14, thrift: 0, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 0, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 17, newCount: 16, converted: 1 },
  { slNo: 16, division: '2. MYSURU DIVISION', district: 'Chikkamagaluru', credit: 41, thrift: 0, bank: 0, consumer: 0, employees: 2, dairy: 0, housing: 0, education: 0, multipurpose: 14, industry: 0, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 58, newCount: 55, converted: 3 },
  { slNo: 17, division: '2. MYSURU DIVISION', district: 'Udupi', credit: 120, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 36, industry: 1, agriculture: 0, labour: 0, okkuta: 1, others: 0, total: 158, newCount: 154, converted: 4 },

  // BELAGAVI DIVISION
  { slNo: 18, division: '3. BELAGAVI DIVISION', district: 'Belagavi', credit: 745, thrift: 0, bank: 2, consumer: 0, employees: 2, dairy: 1, housing: 0, education: 0, multipurpose: 479, industry: 2, agriculture: 6, labour: 0, okkuta: 0, others: 2, total: 1239, newCount: 1021, converted: 218 },
  { slNo: 19, division: '3. BELAGAVI DIVISION', district: 'Vijayapura', credit: 142, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 66, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 210, newCount: 172, converted: 38 },
  { slNo: 20, division: '3. BELAGAVI DIVISION', district: 'Bagalkote', credit: 110, thrift: 0, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 48, industry: 0, agriculture: 1, labour: 0, okkuta: 0, others: 0, total: 160, newCount: 139, converted: 21 },
  { slNo: 21, division: '3. BELAGAVI DIVISION', district: 'Dharwad', credit: 128, thrift: 0, bank: 1, consumer: 0, employees: 2, dairy: 0, housing: 0, education: 0, multipurpose: 82, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 215, newCount: 178, converted: 37 },
  { slNo: 22, division: '3. BELAGAVI DIVISION', district: 'Gadag', credit: 96, thrift: 0, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 45, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 142, newCount: 122, converted: 20 },
  { slNo: 23, division: '3. BELAGAVI DIVISION', district: 'Haveri', credit: 84, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 34, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 118, newCount: 104, converted: 14 },
  { slNo: 24, division: '3. BELAGAVI DIVISION', district: 'Uttara Kannada', credit: 92, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 51, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 145, newCount: 132, converted: 13 },

  // KALABURAGI DIVISION
  { slNo: 25, division: '4. KALABURAGI DIVISION', district: 'Kalaburagi', credit: 210, thrift: 0, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 128, industry: 0, agriculture: 1, labour: 0, okkuta: 0, others: 0, total: 340, newCount: 298, converted: 42 },
  { slNo: 26, division: '4. KALABURAGI DIVISION', district: 'Bidar', credit: 245, thrift: 0, bank: 0, consumer: 0, employees: 2, dairy: 0, housing: 0, education: 0, multipurpose: 140, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 389, newCount: 342, converted: 47 },
  { slNo: 27, division: '4. KALABURAGI DIVISION', district: 'Raichur', credit: 260, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 156, industry: 0, agriculture: 2, labour: 0, okkuta: 0, others: 0, total: 418, newCount: 365, converted: 53 },
  { slNo: 28, division: '4. KALABURAGI DIVISION', district: 'Koppala', credit: 280, thrift: 0, bank: 0, consumer: 0, employees: 1, dairy: 0, housing: 0, education: 0, multipurpose: 159, industry: 0, agriculture: 1, labour: 0, okkuta: 0, others: 0, total: 441, newCount: 388, converted: 53 },
  { slNo: 29, division: '4. KALABURAGI DIVISION', district: 'Ballari', credit: 72, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 40, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 112, newCount: 98, converted: 14 },
  { slNo: 30, division: '4. KALABURAGI DIVISION', district: 'Yadagiri', credit: 48, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 30, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 78, newCount: 68, converted: 10 },
  { slNo: 31, division: '4. KALABURAGI DIVISION', district: 'Vijayanagara', credit: 42, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0, housing: 0, education: 0, multipurpose: 27, industry: 0, agriculture: 0, labour: 0, okkuta: 0, others: 0, total: 69, newCount: 60, converted: 9 },
];

const COLUMNS = [
  { key: 'credit', label: 'Credit' },
  { key: 'thrift', label: 'Thrift' },
  { key: 'bank', label: 'Bank' },
  { key: 'consumer', label: 'Consumer' },
  { key: 'employees', label: 'Employees' },
  { key: 'dairy', label: 'Dairy' },
  { key: 'housing', label: 'Housing' },
  { key: 'education', label: 'Education' },
  { key: 'multipurpose', label: 'Multipurpose' },
  { key: 'industry', label: 'Industry' },
  { key: 'agriculture', label: 'Agriculture' },
  { key: 'labour', label: 'Labour' },
  { key: 'okkuta', label: 'Okkuta' },
  { key: 'others', label: 'Others' },
  { key: 'total', label: 'Total', highlight: true },
  { key: 'newCount', label: 'New' },
  { key: 'converted', label: 'Converted' },
] as const;

export default function DetailedListSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const [sortKey, setSortKey] = useState<keyof DistrictRow | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [collapsedDivisions, setCollapsedDivisions] = useState<{ [key: string]: boolean }>({});

  const toggleDivision = (divName: string) => {
    setCollapsedDivisions((prev) => ({ ...prev, [divName]: !prev[divName] }));
  };

  const handleSort = (key: keyof DistrictRow) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const filteredData = useMemo(() => {
    return RAW_DATA.filter((row) => {
      const matchesSearch =
        row.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.division.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDivision =
        selectedDivision === 'ALL' || row.division.includes(selectedDivision);
      return matchesSearch && matchesDivision;
    });
  }, [searchTerm, selectedDivision]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }
      return sortOrder === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [filteredData, sortKey, sortOrder]);

  const groupedData = useMemo(() => {
    const groups: { [key: string]: DistrictRow[] } = {};
    sortedData.forEach((row) => {
      if (!groups[row.division]) groups[row.division] = [];
      groups[row.division].push(row);
    });
    return groups;
  }, [sortedData]);

  const grandTotals = useMemo(() => {
    const acc: Record<string, number> = {};
    COLUMNS.forEach((col) => (acc[col.key] = 0));
    filteredData.forEach((row) => {
      COLUMNS.forEach((col) => {
        acc[col.key] += (row[col.key as keyof DistrictRow] as number) || 0;
      });
    });
    return acc;
  }, [filteredData]);

  return (
    <section className="w-full bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden font-sans my-8">
      {/* HEADER SECTION WITH FILTERS AND SEARCH */}
      <div className="p-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide text-amber-400">
              MEMBERSHIP MATRIX <span className="text-white text-base font-medium">(AS ON 31.03.2023)</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-1 uppercase font-semibold">
              Type of Souharda Cooperatives and Categories Across Districts
            </p>
          </div>

          {/* INTERACTIVE SEARCH & DIVISION FILTER */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 w-48 sm:w-56"
              />
            </div>

            <div className="relative flex items-center">
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="ALL">All Divisions</option>
                <option value="BENGALURU">Bengaluru Division</option>
                <option value="MYSURU">Mysuru Division</option>
                <option value="BELAGAVI">Belagavi Division</option>
                <option value="KALABURAGI">Kalaburagi Division</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DATA TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-emerald-50 text-slate-800 border-b border-slate-300">
              <th className="p-2 border-r border-slate-300 font-bold w-10 text-center">Sl.</th>
              <th
                onClick={() => handleSort('district')}
                className="p-2 border-r border-slate-300 font-bold text-left min-w-[140px] cursor-pointer hover:bg-emerald-100/60 transition-colors"
              >
                <div className="flex items-center gap-1">
                  Districts <ArrowUpDown className="w-3 h-3 text-slate-500" />
                </div>
              </th>

              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key as keyof DistrictRow)}
                  className={`border-r border-slate-300 font-bold p-1 text-center align-bottom h-32 w-9 cursor-pointer hover:bg-emerald-100/80 transition-colors ${
                    col.highlight ? 'bg-amber-100/70' : ''
                  }`}
                >
                  <div className="flex items-center justify-center h-full w-full">
                    <span
                      className="whitespace-nowrap font-bold text-slate-700 uppercase"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {col.label}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.keys(groupedData).length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length + 2} className="text-center py-8 text-slate-500 font-medium">
                  No districts match your search term "{searchTerm}".
                </td>
              </tr>
            ) : (
              Object.keys(groupedData).map((divisionName) => {
                const rows = groupedData[divisionName];
                const isCollapsed = !!collapsedDivisions[divisionName];

                const divisionTotals: Record<string, number> = {};
                COLUMNS.forEach((col) => {
                  divisionTotals[col.key] = rows.reduce(
                    (sum, r) => sum + (r[col.key as keyof DistrictRow] as number || 0),
                    0
                  );
                });

                return (
                  <React.Fragment key={divisionName}>
                    {/* ACCORDION HEADER FOR DIVISION */}
                    <tr
                      onClick={() => toggleDivision(divisionName)}
                      className="bg-[#93c47d] hover:bg-[#85b570] text-slate-900 font-extrabold uppercase cursor-pointer border-y border-slate-400 select-none transition-colors"
                    >
                      <td colSpan={COLUMNS.length + 2} className="py-2 px-4 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="tracking-widest font-black">{divisionName}</span>
                          <span className="text-slate-800 text-[10px] font-medium flex items-center gap-1 bg-white/40 px-2 py-0.5 rounded-full">
                            {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                            {isCollapsed ? 'Expand' : 'Collapse'}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {!isCollapsed &&
                      rows.map((row) => (
                        <tr
                          key={row.slNo}
                          className="hover:bg-amber-100/40 border-b border-slate-200 transition-colors text-slate-700"
                        >
                          <td className="p-2 text-center border-r border-slate-200 text-slate-500 font-medium">
                            {row.slNo}
                          </td>
                          <td className="p-2 border-r border-slate-200 font-semibold text-slate-800">
                            {row.district}
                          </td>
                          {COLUMNS.map((col) => {
                            const val = row[col.key as keyof DistrictRow];
                            return (
                              <td
                                key={col.key}
                                className={`p-2 text-center border-r border-slate-200 ${
                                  col.highlight ? 'font-extrabold text-slate-900 bg-amber-50/80' : ''
                                }`}
                              >
                                {val !== undefined ? val : '0'}
                              </td>
                            );
                          })}
                        </tr>
                      ))}

                    {/* DIVISION TOTAL ROW */}
                    {!isCollapsed && (
                      <tr className="bg-amber-100/50 font-extrabold border-b border-slate-300 text-slate-900">
                        <td colSpan={2} className="p-2 text-left border-r border-slate-300 pl-4 uppercase">
                          Total ({divisionName.split('.')[1]?.trim() || divisionName})
                        </td>
                        {COLUMNS.map((col) => (
                          <td
                            key={col.key}
                            className={`p-2 text-center border-r border-slate-300 ${
                              col.highlight ? 'bg-amber-200/80' : ''
                            }`}
                          >
                            {divisionTotals[col.key]}
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}

            {/* GRAND TOTAL ROW */}
            <tr className="bg-slate-900 text-amber-400 font-black border-t-2 border-slate-400 text-sm">
              <td colSpan={2} className="p-3 text-center border-r border-slate-700 uppercase tracking-wider">
                Grand Total
              </td>
              {COLUMNS.map((col) => (
                <td key={col.key} className="p-3 text-center border-r border-slate-700">
                  {grandTotals[col.key]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}