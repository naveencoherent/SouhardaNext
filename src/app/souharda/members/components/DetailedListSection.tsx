'use client';

import React, { useState } from 'react';
import { Search, Filter, Building2, CheckCircle2 } from 'lucide-react';

interface MemberSociety {
  id: string | number;
  name: string;
  regNo?: string;
  district?: string;
  category?: string;
  highlight?: boolean;
  [key: string]: unknown;
}

interface DetailedListSectionProps {
  societies?: MemberSociety[];
  categories?: { key: string; label: string; highlight?: boolean }[];
}

export default function DetailedListSection({
  societies = [],
  categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'credit', label: 'Credit' },
    { key: 'thrift', label: 'Thrift' },
    { key: 'bank', label: 'Bank' },
    { key: 'consumer', label: 'Consumer' },
  ],
}: DetailedListSectionProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSocieties = societies.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.regNo && item.regNo.toLowerCase().includes(search.toLowerCase())) ||
      (item.district && item.district.toLowerCase().includes(search.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by society name, reg no, or district..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => {
              const isHighlight = Boolean((cat as { highlight?: boolean }).highlight);
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : isHighlight
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Societies Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSocieties.length === 0 ? (
            <div className="col-span-full text-center py-12 text-slate-500 text-xs">
              No matching societies found. Try adjusting your search or category filter.
            </div>
          ) : (
            filteredSocieties.map((society, idx) => {
              const isSocietyHighlight = Boolean((society as { highlight?: boolean }).highlight);
              return (
                <div
                  key={society.id || idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    isSocietyHighlight
                      ? 'bg-amber-50/50 border-amber-300 shadow-sm'
                      : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    {isSocietyHighlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-slate-900 line-clamp-2">
                    {society.name}
                  </h4>
                  <div className="mt-2 text-xs text-slate-500 space-y-1">
                    {society.regNo && <p>Reg No: {society.regNo}</p>}
                    {society.district && <p>District: {society.district}</p>}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}