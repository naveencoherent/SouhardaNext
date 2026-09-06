'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ChevronRight } from 'lucide-react';

interface ConnectHeroProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function ConnectHero({ activeTab = 'general', onTabChange }: ConnectHeroProps) {
  const tabs = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'support', label: 'Support & Help' },
    { id: 'offices', label: 'Office Locations' },
  ];

  return (
    <section className="bg-slate-900 text-white border-b border-slate-800 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar: Breadcrumb + Tag */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-amber-400 font-medium">Connect</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" /> Contact Portal
          </span>
        </div>

        {/* Main Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Connect <span className="text-amber-400">With Us</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Have questions, feedback, or need assistance? Reach out to our team or select a specific service division.
            </p>
          </div>

          {/* Action Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/10'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}