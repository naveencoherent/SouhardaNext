'use client';

import React, { useState, useMemo } from 'react';

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

export default function MembershipMatrixSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
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
  ];

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return RAW_DATA;
    return RAW_DATA.filter(
      (row) =>
        row.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.division.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedData = useMemo(() => {
    const groups: { [key: string]: DistrictRow[] } = {};
    filteredData.forEach((row) => {
      if (!groups[row.division]) groups[row.division] = [];
      groups[row.division].push(row);
    });
    return groups;
  }, [filteredData]);

  const grandTotal = useMemo(() => {
    const totalAcc: Record<string, number> = {
      credit: 0, thrift: 0, bank: 0, consumer: 0, employees: 0, dairy: 0,
      housing: 0, education: 0, multipurpose: 0, industry: 0, agriculture: 0,
      labour: 0, okkuta: 0, others: 0, total: 0, newCount: 0, converted: 0,
    };

    filteredData.forEach((row) => {
      columns.forEach((col) => {
        totalAcc[col.key] += (row as any)[col.key] || 0;
      });
    });

    return totalAcc;
  }, [filteredData]);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 font-sans text-slate-800">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold tracking-wide text-slate-900 uppercase">
          MEMBERSHIP MATRIX <span className="text-amber-500 font-medium">(AS ON 31.03.2023)</span>
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">
          TYPE OF SOUHARDA COOPERATIVES AND CATEGORIES
        </p>
      </div>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search district..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-600 w-60 bg-white shadow-2xs"
        />
      </div>

      <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-xs bg-white">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-emerald-50/80 text-slate-800 border-b border-slate-300">
              <th className="p-2 border-r border-slate-300 font-bold w-12 text-center">Sl. No.</th>
              <th className="p-2 border-r border-slate-300 font-bold text-left min-w-[140px]">Districts</th>

              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`border-r border-slate-300 font-bold p-1 text-center align-bottom h-32 w-9 ${
                    col.highlight ? 'bg-amber-100/60' : ''
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
            {Object.keys(groupedData).map((divisionName) => {
              const rows = groupedData[divisionName];

              const divisionTotals: Record<string, number> = {};
              columns.forEach((col) => {
                divisionTotals[col.key] = rows.reduce((sum, r) => sum + ((r as any)[col.key] || 0), 0);
              });

              return (
                <React.Fragment key={divisionName}>
                  <tr className="bg-[#b3d89c] text-slate-900 font-extrabold uppercase text-center border-y border-slate-300">
                    <td colSpan={columns.length + 2} className="py-2 tracking-widest text-xs">
                      {divisionName}
                    </td>
                  </tr>

                  {rows.map((row) => (
                    <tr
                      key={row.slNo}
                      className="hover:bg-amber-50/50 border-b border-slate-200 transition-colors text-slate-700"
                    >
                      <td className="p-2 text-center border-r border-slate-200 text-slate-500 font-medium">
                        {row.slNo}
                      </td>

                      <td className="p-2 border-r border-slate-200 font-semibold text-slate-800">
                        {row.district}
                      </td>

                      {columns.map((col) => {
                        const val = (row as any)[col.key];
                        return (
                          <td
                            key={col.key}
                            className={`p-2 text-center border-r border-slate-200 ${
                              col.highlight ? 'font-extrabold text-slate-900 bg-amber-50/70' : ''
                            }`}
                          >
                            {val !== undefined ? val : '0'}
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  <tr className="bg-amber-100/40 font-bold border-b border-slate-300 text-slate-900">
                    <td colSpan={2} className="p-2 text-left font-extrabold border-r border-slate-300 pl-4">
                      Total
                    </td>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`p-2 text-center border-r border-slate-300 font-extrabold ${
                          col.highlight ? 'bg-amber-200/60' : ''
                        }`}
                      >
                        {divisionTotals[col.key]}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              );
            })}

            <tr className="bg-slate-800 text-white font-black border-t-2 border-slate-400">
              <td colSpan={2} className="p-3 text-center border-r border-slate-600 uppercase tracking-wider">
                Grand Total
              </td>
              {columns.map((col) => (
                <td key={col.key} className="p-3 text-center border-r border-slate-600">
                  {grandTotal[col.key]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}