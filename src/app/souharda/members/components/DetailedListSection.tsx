'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';

interface RawMemberRecord {
  'Sl No'?: string | number;
  Code?: string;
  Status?: string;
  Type?: string;
  Subscriber?: string;
  Dist?: string;
  Region?: string;
}

const ITEMS_PER_PAGE = 25;

// Soft pastel repeating row colors matching /souharda/workforce/
const ROW_COLOR_SEQUENCE = [
  'bg-[#e3f3e8]/80 hover:bg-[#d5ecd9]', // Soft Mint Green
  'bg-[#f8edd6]/85 hover:bg-[#f3e3c2]', // Warm Cream / Sand
  'bg-[#e8f1fb]/80 hover:bg-[#dbe8f8]', // Soft Sky Blue
  'bg-[#f8fafc] hover:bg-[#f1f5f9]',    // Crisp Off-White
  'bg-white hover:bg-[#f8fafc]',        // Pure White
];

function normalizeCategory(raw?: string) {
  const cleaned = (raw || '').trim();
  if (!cleaned) return '';
  if (cleaned.toLowerCase() === 'credit') return 'Credit';
  return cleaned;
}

function getStatusBadgeStyle(status?: string) {
  const s = (status || '').trim().toLowerCase();
  if (s === 'working') {
    return 'bg-emerald-600/10 text-emerald-800 border-emerald-600/30';
  }
  if (s === 'liquidation') {
    return 'bg-red-600/10 text-red-800 border-red-600/30';
  }
  if (s === 'not working') {
    return 'bg-amber-600/10 text-amber-900 border-amber-600/30';
  }
  return 'bg-slate-600/10 text-slate-800 border-slate-600/30';
}

export default function DetailedListSection() {
  const [members, setMembers] = useState<RawMemberRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let isMounted = true;
    fetch('/souharda/Members/Database/members.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load members database (${res.status})`);
        return res.json();
      })
      .then((data: RawMemberRecord[]) => {
        if (isMounted) {
          setMembers(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Unable to load member societies.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const regions = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => m.Region && set.add(m.Region.trim()));
    return ['All', ...Array.from(set).sort()];
  }, [members]);

  const districts = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => {
      if (selectedRegion === 'All' || (m.Region || '').trim() === selectedRegion) {
        if (m.Dist) set.add(m.Dist.trim());
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [members, selectedRegion]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => {
      const cat = normalizeCategory(m.Type);
      if (cat) set.add(cat);
    });
    return ['All', ...Array.from(set).sort()];
  }, [members]);

  const statuses = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => m.Status && set.add(m.Status.trim()));
    return ['All', ...Array.from(set).sort()];
  }, [members]);

  const filteredSocieties = useMemo(() => {
    const q = search.trim().toLowerCase();
    return members.filter((item) => {
      const itemCategory = normalizeCategory(item.Type);
      const matchesCategory =
        selectedCategory === 'All' || itemCategory === selectedCategory;
      const matchesRegion =
        selectedRegion === 'All' || (item.Region || '').trim() === selectedRegion;
      const matchesDistrict =
        selectedDistrict === 'All' || (item.Dist || '').trim() === selectedDistrict;
      const matchesStatus =
        selectedStatus === 'All' || (item.Status || '').trim() === selectedStatus;

      const matchesSearch =
        !q ||
        (item.Subscriber || '').toLowerCase().includes(q) ||
        (item.Code || '').toLowerCase().includes(q) ||
        (item.Dist || '').toLowerCase().includes(q) ||
        (item.Region || '').toLowerCase().includes(q);

      return (
        matchesCategory &&
        matchesRegion &&
        matchesDistrict &&
        matchesStatus &&
        matchesSearch
      );
    });
  }, [members, search, selectedCategory, selectedRegion, selectedDistrict, selectedStatus]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedRegion, selectedDistrict, selectedStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredSocieties.length / ITEMS_PER_PAGE));
  const paginatedSocieties = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSocieties.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSocieties, currentPage]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedRegion('All');
    setSelectedDistrict('All');
    setSelectedStatus('All');
    setCurrentPage(1);
  };

  return (
    <section className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header + Excel Database Downloads */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-xl font-bold text-[#003366]">
            Member Souharda Cooperatives Directory
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Official registry of Souharda cooperatives across Karnataka — filterable by region, district, category, and status
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="/souharda/Members/Database/English.xlsx"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-2xs transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>District-wise List (English Excel)</span>
          </a>
          <a
            href="/souharda/Members/Database/Kannada.xlsx"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold shadow-2xs transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>ಜಿಲ್ಲಾವಾರು ಪಟ್ಟಿ (Kannada Excel)</span>
          </a>
        </div>
      </div>

      {/* Search & Dropdown Filters */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="relative md:col-span-5">
            <Search className="w-4 h-4 absolute left-3.5 top-2.5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search society name, code (e.g. BDR-0001), or district..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="md:col-span-2">
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setSelectedDistrict('All');
              }}
              aria-label="Filter by Region"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r === 'All' ? 'All Regions' : `${r} Region`}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              aria-label="Filter by District"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d === 'All' ? 'All Districts' : d}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              aria-label="Filter by Status"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {statuses.map((st) => (
                <option key={st} value={st}>
                  {st === 'All' ? 'All Statuses' : st}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-2xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat}
                </button>
              );
            })}
          </div>

          {(search ||
            selectedCategory !== 'All' ||
            selectedRegion !== 'All' ||
            selectedDistrict !== 'All' ||
            selectedStatus !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count Bar */}
      {!loading && !error && (
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-1">
          <span>
            Showing{' '}
            <strong className="text-slate-900">
              {filteredSocieties.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}
            </strong>
            {' – '}
            <strong className="text-slate-900">
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredSocieties.length)}
            </strong>{' '}
            of <strong className="text-[#003366]">{filteredSocieties.length.toLocaleString()}</strong>{' '}
            matching cooperatives
          </span>
          <span>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
        </div>
      )}

      {/* Structured Data Table with Workforce Pastel Color Sequence */}
      {loading ? (
        <div className="h-72 rounded-2xl bg-slate-100 animate-pulse border border-slate-200/60" />
      ) : error ? (
        <div className="text-center py-12 text-red-600 text-xs font-semibold bg-red-50 rounded-2xl border border-red-200">
          {error}
        </div>
      ) : paginatedSocieties.length === 0 ? (
        <div className="text-center py-12 text-slate-500 text-xs bg-slate-50 rounded-2xl border border-slate-200">
          No matching societies found. Try adjusting your search or category filter.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-[#003366] text-white text-[11px] uppercase tracking-wider">
                <th className="py-3.5 px-4 font-bold w-16">Sl. No</th>
                <th className="py-3.5 px-4 font-bold w-28">Code</th>
                <th className="py-3.5 px-4 font-bold">Name of the Souharda Cooperative</th>
                <th className="py-3.5 px-4 font-bold w-32">Category</th>
                <th className="py-3.5 px-4 font-bold w-36">District</th>
                <th className="py-3.5 px-4 font-bold w-28">Region</th>
                <th className="py-3.5 px-4 font-bold w-28 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 text-xs">
              {paginatedSocieties.map((society, idx) => {
                const rawSl = society['Sl No'] || (currentPage - 1) * ITEMS_PER_PAGE + idx + 1;
                const paddedSl = String(rawSl).padStart(2, '0');
                const categoryLabel = normalizeCategory(society.Type);
                const rowColorClass = ROW_COLOR_SEQUENCE[idx % ROW_COLOR_SEQUENCE.length];

                return (
                  <tr
                    key={`${society.Code || rawSl}-${idx}`}
                    className={`${rowColorClass} transition-colors`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {paddedSl}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#003366] whitespace-nowrap">
                      {society.Code || '—'}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {society.Subscriber || 'Unnamed Cooperative'}
                    </td>
                    <td className="py-3.5 px-4">
                      {categoryLabel ? (
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/80 text-slate-800 font-bold border border-slate-300/70 whitespace-nowrap">
                          {categoryLabel}
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      {society.Dist || '—'}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-600 whitespace-nowrap">
                      {society.Region || '—'}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {society.Status ? (
                        <span
                          className={`inline-block text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${getStatusBadgeStyle(
                            society.Status
                          )}`}
                        >
                          {society.Status}
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            Showing 25 rows per page
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-2.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-extrabold text-[#003366]">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              Last
            </button>
          </div>
        </div>
      )}
    </section>
  );
}