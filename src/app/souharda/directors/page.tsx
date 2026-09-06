'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { Briefcase, Building, Search } from 'lucide-react';

interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
  region?: string;
  phone?: string;
}

const ALL_DIRECTORS: Director[] = [
  { id: 1, name: "Sri Nanjangouda", designation: "President / Director", image: "/souharda/Director/2022/1nanjangouda.jpg", region: "Kalaburagi" },
  { id: 2, name: "Sri Prasanna", designation: "Vice President / Director", image: "/souharda/Director/2022/2prasanna.jpg", region: "Bengaluru" },
  { id: 3, name: "Sri Krishna Reddy", designation: "Director", image: "/souharda/Director/2022/3krishna_Reddy.jpg", region: "Bengaluru" },
  { id: 4, name: "Sri Gurunath Janthikar", designation: "Director", image: "/souharda/Director/2022/4Gurunath_Janthikar.jpg", region: "Kalaburagi" },
  { id: 5, name: "Sri Jagadish Kavatagimat", designation: "Director", image: "/souharda/Director/2022/5SriJagadish_Kavatagimat.jpg", region: "Belagavi" },
  { id: 6, name: "Sri Guranagowda Patil", designation: "Director", image: "/souharda/Director/2022/6Sri_Guranagowda_Patil.jpg", region: "Belagavi" },
  { id: 7, name: "Sri Thimmayya Shetty", designation: "Director", image: "/souharda/Director/2022/7Si_Thimmayya_Shetty.jpg", region: "Mysuru" },
  { id: 8, name: "Sri Gundurao", designation: "Director", image: "/souharda/Director/2022/8Sri_Gundurao.jpg", region: "Kalaburagi" },
  { id: 9, name: "Sri Manjunath", designation: "Director", image: "/souharda/Director/2022/9Sri_Manjunath.jpg", region: "Bengaluru" },
  { id: 10, name: "Sri Sridhar", designation: "Director", image: "/souharda/Director/2022/10Sri_Sridhar.jpg", region: "Mysuru" },
  { id: 11, name: "Sri Nagaraj Deshapande", designation: "Director", image: "/souharda/Director/2022/11Sri_Nagaraj_Deshapande.jpg", region: "Belagavi" },
  { id: 12, name: "Sri K. Shivalingappa", designation: "Director", image: "/souharda/Director/2022/12Sri_K_Shivalingappa.jpg", region: "Bengaluru" },
  { id: 13, name: "Smt. Bharathi G. Bhat", designation: "Director", image: "/souharda/Director/2022/13Smt_Bharathi_G_Bhat.jpg", region: "Belagavi" },
  { id: 14, name: "Smt. Shailaja Tapali", designation: "Director", image: "/souharda/Director/2022/14Smt_Shailaja_Tapali.jpg", region: "Kalaburagi" },
  { id: 15, name: "Sri Mallikarjuna Ajjappa Horakeri", designation: "Director", image: "/souharda/Director/2022/15Sri_Mallikarjuna_Ajjappa_Horakere.jpg", region: "Belagavi" },
  { id: 16, name: "Sri Prabhudev", designation: "Director", image: "/souharda/Director/2022/16Sri_Prabhudev.jpg", region: "Kalaburagi" },
  { id: 17, name: "Sri H. J. Hanumanthaiah", designation: "Director", image: "/souharda/Director/2022/17ri_H_J_Hanumanthaiah.jpg", region: "Bengaluru" },
  { id: 18, name: "Sri Raghurama Reddy", designation: "Director", image: "/souharda/Director/2022/18Sri_Raghurama_Reddy.jpg", region: "Bengaluru" },
  { id: 19, name: "Sri C. P. Vijay", designation: "Director", image: "/souharda/Director/2022/19Sri_C_P_Vijay.jpg", region: "Mysuru" },
  { id: 20, name: "Sri Mohandas J. Naik", designation: "Director", image: "/souharda/Director/2022/20Sri_Mohandas_J_Naik.jpg", region: "Belagavi" },
  { id: 21, name: "Sri Sanjay B. Patil", designation: "Director", image: "/souharda/Director/2022/21Sri_Sanjay_B_Patil.jpg", region: "Belagavi" },
  { id: 22, name: "Sri Sanjeev Mahajan", designation: "Director", image: "/souharda/Director/2022/22Sri_Sanjeev_Mahajan.jpg", region: "Kalaburagi" },
  { id: 23, name: "Sri Mahadevaswamy", designation: "Director", image: "/souharda/Director/2022/23Sri_Mahadevaswamy.jpg", region: "Mysuru" },
  { id: 24, name: "Sri Sharan Patil", designation: "Director", image: "/souharda/Director/2022/24Sri_sharan_patil.jpg", region: "Kalaburagi" },
];

export default function DirectorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const filteredDirectors = ALL_DIRECTORS.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.region && d.region.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Page Hero Header */}
      <PageHero 
        title="BOARD OF DIRECTORS" 
        subtitle="Meet the elected leadership body of Karnataka State Souharda Federal Cooperative Ltd." 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Search Bar */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            placeholder="Search director by name, title, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-1 bg-transparent text-sm text-slate-800 focus:outline-none"
          />
        </div>

        {/* Grid layout for 24 Directors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDirectors.map((director) => (
            <div
              key={director.id}
              onClick={() => setSelectedDirector(director)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col group"
            >
              <div className="relative w-full h-72 bg-slate-100 overflow-hidden">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {director.region} Region
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mt-1.5 group-hover:text-[#003865] transition-colors leading-snug">
                    {director.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{director.designation}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center text-xs text-[#003865] font-semibold">
                  <span>View Details</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Director Modal Popup */}
        {selectedDirector && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
              <div className="relative h-64 bg-slate-200">
                <Image
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <button
                  onClick={() => setSelectedDirector(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    {selectedDirector.region} Region
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-2">{selectedDirector.name}</h2>
                  <p className="text-xs text-slate-500 font-medium">{selectedDirector.designation}</p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Board Member (KSSFCL)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Karnataka State Souharda Federal Cooperative Ltd.</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDirector(null)}
                  className="w-full py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}