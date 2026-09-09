'use client';

import React, { useState, useEffect } from 'react';
import PageHero from '@/components/common/PageHero';
import { Search, Phone, Mail, UserCheck, Loader2 } from 'lucide-react';

export default function WorkforcePage() {
  const [employeesList, setEmployeesList] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/souharda/WorkForce/workforce.json')
      .then((res) => res.json())
      .then((data) => {
        const list = data.employees || (Array.isArray(data) ? data : []);
        setEmployeesList(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load workforce JSON:', err);
        setLoading(false);
      });
  }, []);

  const regions = [
    'All',
    ...Array.from(new Set(employeesList.map((emp) => emp.region || 'General').filter(Boolean)))
  ];

  const filteredEmployees = employeesList.filter((employee) => {
    const term = searchTerm.toLowerCase();
    const name = (employee.name || '').toLowerCase();
    const designation = (employee.designation || '').toLowerCase();
    const region = (employee.region || '').toLowerCase();

    const matchesSearch = name.includes(term) || designation.includes(term) || region.includes(term);
    const matchesRegion = selectedRegion === 'All' || employee.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Standardized Hero Section */}
      <PageHero 
        title="WORKFORCE DIRECTORY" 
        subtitle="Dedicated administrative and operational staff serving Karnataka State Souharda Federal Cooperative Ltd." 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
          <div className="relative w-full flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, designation, or division..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-500 transition"
            />
          </div>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-semibold focus:outline-none focus:border-amber-500 transition cursor-pointer"
          >
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region === 'All' ? 'All Divisions / Regions' : region}
              </option>
            ))}
          </select>
        </div>

        {/* Directory Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <p className="text-sm font-semibold">Loading staff directory...</p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#003865] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-16 text-center">Sl No.</th>
                    <th className="py-3.5 px-4">Staff Member</th>
                    <th className="py-3.5 px-4">Designation</th>
                    <th className="py-3.5 px-4">Division / Section</th>
                    <th className="py-3.5 px-4">CUG Phone</th>
                    <th className="py-3.5 px-4">Email Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((emp, index) => (
                      <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                          {index + 1}
                        </td>
                        <td className="py-3.5 px-4 font-extrabold text-slate-900">
                          {emp.name}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-amber-700">
                          {emp.designation}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-600">
                          <span className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md text-xs inline-block">
                            {emp.region || 'General'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-800">
                          {emp.cug ? (
                            <a href={`tel:${emp.cug}`} className="flex items-center gap-1.5 hover:text-amber-600 transition">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              <span>{emp.cug}</span>
                            </a>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-medium">
                          {emp.email ? (
                            <a href={`mailto:${emp.email}`} className="flex items-center gap-1.5 text-blue-700 hover:text-amber-600 transition">
                              <Mail className="w-3.5 h-3.5 text-blue-500" />
                              <span>{emp.email}</span>
                            </a>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-500 text-xs font-semibold">
                        No matching staff members found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded inline-block">
                          {emp.region || 'General'}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900 mt-1">{emp.name}</h3>
                        <p className="text-xs font-semibold text-slate-500">{emp.designation}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                      {emp.cug && (
                        <a href={`tel:${emp.cug}`} className="flex items-center gap-2 text-slate-700 hover:text-amber-600">
                          <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{emp.cug}</span>
                        </a>
                      )}
                      {emp.email && (
                        <a href={`mailto:${emp.email}`} className="flex items-center gap-2 text-blue-700 hover:text-amber-600 truncate">
                          <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{emp.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs font-semibold">
                  No matching staff members found.
                </div>
              )}
            </div>

          </div>
        )}

      </main>
    </div>
  );
}