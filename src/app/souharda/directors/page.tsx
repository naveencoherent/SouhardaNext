'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { Search, Phone, MessageCircle, Mail, ArrowLeft, Briefcase, Building, MapPin, X } from 'lucide-react';

interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
  region?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  bio?: string;
}

const ALL_DIRECTORS: Director[] = [
  { 
    id: 1, 
    name: "Sri. G. Nanjangouda", 
    designation: "President", 
    image: "/souharda/Director/2022/1nanjangouda.jpg", 
    region: "Vijayanagar", 
    phone: "9448112345", 
    whatsapp: "9448112345", 
    email: "president@souharda.coop",
    bio: "Sri G. Nanjangouda has been serving as the President of Karnataka State Souharda Federal Cooperative Ltd. He has decades of experience in empowering local cooperatives and strengthening rural development frameworks across Karnataka."
  },
  { 
    id: 2, 
    name: "Sri A R Prasannakumar", 
    designation: "Vice - President", 
    image: "/souharda/Director/2022/2prasanna.jpg", 
    region: "Shivamogga", 
    phone: "9448223456", 
    whatsapp: "9448223456", 
    email: "vp@souharda.coop",
    bio: "Sri A R Prasannakumar hails from Tirthahalli, born on 19-06-1963. After completing his Engineering education, he started his professional journey in 1985 as a technical consultant in Tirthahalli and Shivamogga. Alongside his technical expertise, he has been actively involved in agriculture and public service, contributing to the cooperative sector since 1994."
  },
  { id: 3, name: "Sri. B. H. Krishna Reddy", designation: "Director", image: "/souharda/Director/2022/3krishna_Reddy.jpg", region: "Kolar", bio: "Prominent agricultural leader and cooperative strategist dedicated to enhancing credit facility accessibility in Kolar district." },
  { id: 4, name: "Sri. Gurunath Janthikar", designation: "Director", image: "/souharda/Director/2022/4Gurunath_Janthikar.jpg", region: "Bidar", bio: "Active contributor to cooperative movement in Bidar, bringing strategic growth and organizational leadership to the board." },
  { id: 5, name: "Sri Jagadish Kavatagimat", designation: "Director", image: "/souharda/Director/2022/5SriJagadish_Kavatagimat.jpg", region: "Belagavi", bio: "Leading social reformer and cooperative advocate based out of Belagavi." },
  { id: 6, name: "Sri Guranagowda Patil", designation: "Director", image: "/souharda/Director/2022/6Sri_Guranagowda_Patil.jpg", region: "Belagavi", bio: "Respected cooperative activist with vast experience in administrative leadership." },
  { id: 7, name: "Sri Thimmayya Shetty", designation: "Director", image: "/souharda/Director/2022/7Si_Thimmayya_Shetty.jpg", region: "Mysuru", bio: "Focused on modernizing cooperative banking infrastructure across the Mysuru division." },
  { id: 8, name: "Sri Gundurao", designation: "Director", image: "/souharda/Director/2022/8Sri_Gundurao.jpg", region: "Kalaburagi", bio: "Dedicated to socio-economic upliftment in Kalaburagi through cooperative self-reliance models." },
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

  const filteredDirectors = useMemo(() => {
    return ALL_DIRECTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.region && d.region.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const handleSelectDirector = (director: Director) => {
    setSelectedDirector(director);
  };

  const handleCloseDetail = () => {
    setSelectedDirector(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 pb-16">
      
      {/* FULL-SCREEN MODAL LAYER WHEN DIRECTOR IS CLICKED */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Dark Grey Overlay Backdrop */}
          <div 
            onClick={handleCloseDetail}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          />

          {/* Clean Light Card Modal */}
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 my-auto">
            
            {/* Top Close Bar */}
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
              <button
                onClick={handleCloseDetail}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-700 transition"
              >
                <ArrowLeft size={15} /> ← Back to Directors
              </button>
              <button 
                onClick={handleCloseDetail}
                className="text-slate-400 hover:text-slate-700 transition p-1.5 rounded-full hover:bg-slate-200"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dark Blue Header Banner with Natural Vertical Flow */}
            <div className="bg-[#102A45] text-white pt-8 pb-6 px-6 text-center flex flex-col items-center">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                {selectedDirector.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 mb-6">
                {selectedDirector.designation} {selectedDirector.region ? `| ${selectedDirector.region}` : ''}
              </p>

              {/* Profile Image (Sits directly underneath designation with proper relative bounds) */}
              <div className="relative w-36 h-40 sm:w-44 sm:h-48 rounded-2xl border-4 border-white bg-slate-200 shadow-xl overflow-hidden shrink-0">
                <Image
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Modal Body */}
            <div className="pt-8 pb-10 px-6 sm:px-12 max-w-3xl mx-auto space-y-6">
              
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
                {selectedDirector.region && (
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                    <MapPin size={14} className="text-amber-600" />
                    <span>{selectedDirector.region} Region</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                  <Briefcase size={14} className="text-amber-600" />
                  <span>Board Member (KSSFCL)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                  <Building size={14} className="text-amber-600" />
                  <span>Karnataka State Souharda Federal Cooperative Ltd.</span>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
                <h3 className="font-extrabold text-slate-900 text-base">Professional Journey:</h3>
                <p className="text-slate-600 font-normal">
                  {selectedDirector.bio || 
                    `${selectedDirector.name} serves as a key member of the Board of Directors for Karnataka State Souharda Federal Cooperative Ltd., providing strategic guidance and active leadership for cooperative developments across Karnataka.`
                  }
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-100">
                {selectedDirector.phone && (
                  <a
                    href={`tel:${selectedDirector.phone}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition shadow-sm"
                  >
                    <Phone size={14} /> Call Director
                  </a>
                )}
                {selectedDirector.whatsapp && (
                  <a
                    href={`https://wa.me/${selectedDirector.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition shadow-sm"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                )}
                {selectedDirector.email && (
                  <a
                    href={`mailto:${selectedDirector.email}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-900 transition shadow-sm"
                  >
                    <Mail size={14} /> Send Email
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* BASE PAGE CONTENT */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40h40M40 0v40' fill='none' stroke='%23e2e8f0' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10">
        <PageHero 
          themeColor="blue"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Souharda', href: '/souharda' },
            { label: 'Board of Directors' },
          ]}
          title="BOARD OF DIRECTORS" 
          subtitle="Meet the elected leadership body of Karnataka State Souharda Federal Cooperative Ltd." 
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
          
          {/* Search Input Bar */}
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3 max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 ml-2" />
            <input
              type="text"
              placeholder="Search director by name, title, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-1 bg-transparent text-sm text-slate-800 focus:outline-none"
            />
          </div>

          {/* Directors Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {filteredDirectors.map((director) => {
              return (
                <div
                  key={director.id}
                  onClick={() => handleSelectDirector(director)}
                  className="group cursor-pointer w-full max-w-[280px] bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden flex flex-col font-sans transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-sky-300"
                >
                  <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      unoptimized
                      className="object-cover object-top transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-115"
                      sizes="280px"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#112A46] via-[#112A46]/80 to-transparent pt-8 pb-2 px-3 flex items-end justify-between transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-2 group-hover:translate-y-0 z-10">
                      {director.region && (
                        <span className="text-[#C5A028] font-extrabold text-[12px] uppercase tracking-wider">
                          {director.region}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="h-[3px] bg-amber-400 w-full shrink-0 z-10" />

                  <div className="p-4 text-center flex-1 flex flex-col justify-between bg-white relative z-10">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm leading-tight transition-colors duration-300 group-hover:text-sky-700">
                        {director.name}
                      </h3>
                      <p className="text-sky-600 text-xs font-semibold mt-1">
                        {director.designation}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-sky-600 uppercase tracking-wide">
                      View Full Profile
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
}