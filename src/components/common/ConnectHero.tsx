'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, LifeBuoy, Sparkles } from 'lucide-react';

export interface ConnectHeroProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  title?: string;
  subtitle?: string;
}

export default function ConnectHero({
  activeTab = 'general',
  onTabChange,
  title,
  subtitle,
}: ConnectHeroProps) {
  const tabs = [
    { id: 'general', label: 'General Enquiry', icon: PhoneCall },
    { id: 'offices', label: 'Regional Offices', icon: MapPin },
    { id: 'support', label: 'Support & Help', icon: LifeBuoy },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#001D38] via-[#0A2E52] to-[#1C3E68] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-kannada"
        >
          {title || 'ಸಂಪರ್ಕಿಸಿ / Connect With Us'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 leading-relaxed font-medium"
        >
          {subtitle ||
            'Have questions about Souharda Federation, registered co-operatives, or services? We are here to help.'}
        </motion.p>

        {/* Tab Navigation */}
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange?.(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}