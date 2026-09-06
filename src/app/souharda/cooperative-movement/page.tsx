'use client';

import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { 
  Building2, 
  Users, 
  Landmark, 
  ShieldCheck, 
  BookOpen, 
  TrendingUp, 
  Award,
  Globe
} from 'lucide-react';

export default function CooperativeMovementPage() {
  const pillars = [
    {
      icon: Users,
      title: 'Voluntary Membership',
      description: 'Open to all individuals willing to accept responsibilities of membership without discrimination.'
    },
    {
      icon: ShieldCheck,
      title: 'Democratic Control',
      description: 'Controlled by members who actively participate in setting policies and making decisions.'
    },
    {
      icon: Landmark,
      title: 'Economic Participation',
      description: 'Members contribute equitably to, and democratically control, the capital of their co-operative.'
    },
    {
      icon: BookOpen,
      title: 'Education & Training',
      description: 'Providing education and training for members, elected leaders, and employees.'
    }
  ];

  const milestones = [
    { year: '1904', title: 'First Co-op Act', desc: 'The enactment of the First Co-operative Credit Societies Act in India.' },
    { year: '1959', title: 'Karnataka Initiative', desc: 'Formation of structured co-operative frameworks across Karnataka.' },
    { year: '1997', title: 'Souharda Act', desc: 'Passage of the landmark Karnataka Souharda Sahakari Act.' },
    { year: 'Present', title: 'Digital Era', desc: 'Modernizing co-operatives through tech integration and e-services.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Dark Theme Page Hero Header */}
      <PageHero 
        title="THE COOPERATIVE MOVEMENT" 
        subtitle="A Global Vision, A National Mission, A Karnataka Success." 
      />

      {/* Main Container */}
      <main className="w-full px-2 lg:px-6 py-10 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200/80 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              <Globe className="w-3.5 h-3.5 text-amber-700" /> Global & Local Impact
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#001D38] tracking-tight">
              Empowering Communities Through Mutual Help
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
              The Co-operative Movement in Karnataka stands as a beacon of economic self-reliance and democratic governance. Built on the core values of self-help, self-responsibility, equality, and solidarity, co-operatives empower grassroots communities across agricultural, financial, and industrial sectors.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
              Under the Karnataka Souharda Sahakari Act, 1997, autonomous co-operatives function with financial independence, ensuring transparency, ethical practices, and sustainable development for millions of members.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 flex items-center justify-center">
            {/* Main image with fallback background icon if path misses */}
            <Image
              src="/images/souharda/cooperative-movement.jpg"
              alt="Cooperative Movement in Karnataka"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Hides image element if missing to prevent breaking UI
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white font-bold text-sm">Autonomous & Democratic Financial Institutions</p>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars Grid */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-xl lg:text-2xl font-bold text-[#001D38]">
              Principles of Souharda Co-operation
            </h3>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">Guiding values behind our operational framework</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0A2E52] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#001D38] text-base">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="bg-gradient-to-br from-[#001D38] to-[#0A2E52] text-white rounded-2xl p-6 lg:p-8 shadow-md space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl lg:text-2xl font-bold text-amber-400">Journey & Milestones</h3>
            <p className="text-xs lg:text-sm text-slate-300">Key historical phases of co-operatives in Karnataka</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 space-y-2">
                <span className="text-amber-400 font-extrabold text-lg lg:text-xl block">{m.year}</span>
                <h4 className="font-bold text-sm text-white">{m.title}</h4>
                <p className="text-xs text-slate-300 leading-normal">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}