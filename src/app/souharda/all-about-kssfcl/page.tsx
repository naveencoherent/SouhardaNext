'use client';

import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { UserCheck, Shield, Phone, Mail, Award } from 'lucide-react';

export default function DirectorsPage() {
  const leadership = [
    {
      name: 'Sri. G. H. Nayanar',
      designation: 'President',
      region: 'Bangalore Region',
      image: '/images/directors/president.jpg'
    },
    {
      name: 'Sri. A. R. Prasanna',
      designation: 'Vice President',
      region: 'Mysore Region',
      image: '/images/directors/vice_president.jpg'
    }
  ];

  const directors = [
    { name: 'Sri. B. S. Patil', region: 'Belagavi Region' },
    { name: 'Smt. Latha M. Rao', region: 'Mangalore Region' },
    { name: 'Sri. Ramesh K. Pujari', region: 'Kalaburagi Region' },
    { name: 'Sri. Venkatesh R. Hegde', region: 'Uttara Kannada' },
    { name: 'Sri. K. N. Somasekhar', region: 'Hassan Region' },
    { name: 'Smt. Sunitha V. Gowda', region: 'Mandya Region' },
    { name: 'Sri. M. C. Veerabhadrappa', region: 'Davanagere Region' },
    { name: 'Sri. Jagadish C. Shettar', region: 'Hubballi Region' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Centered Hero Header */}
      <PageHero 
        title="BOARD OF DIRECTORS" 
        subtitle="Elected leadership guiding Karnataka's Souharda Federal Co-operative." 
      />

      <main className="w-full px-2 lg:px-6 py-10 space-y-12">
        
        {/* Executive Leadership Grid */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#001D38]">Executive Leadership</h2>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">President and Vice President of KSSFCL</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6 hover:shadow-md transition">
                <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#001D38] border-4 border-amber-400 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <UserCheck className="w-12 h-12 text-slate-300" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {leader.designation}
                  </span>
                  <h3 className="text-lg font-bold text-[#001D38]">{leader.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{leader.region}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#001D38]">Board Members</h2>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">Regional representatives across Karnataka districts</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {directors.map((dir, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-400 transition space-y-2 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0A2E52] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#001D38] text-sm">{dir.name}</h4>
                  <p className="text-xs text-slate-500">{dir.region}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}