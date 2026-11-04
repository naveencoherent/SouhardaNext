'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export interface ServicesHeroProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  imageSrc?: string;
  theme?: string;
  locale?: 'en' | 'kn';
}

export default function ServicesHero({
  title = 'Our Services',
  subtitle = 'Empowering co-operatives across Karnataka with comprehensive support and regulatory services.',
  badgeText = 'KSSFCL Services',
  imageSrc,
  theme,
  locale = 'en',
}: ServicesHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#001D38] via-[#0A2E52] to-[#1C3E68] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badgeText}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-kannada"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl text-sm sm:text-base text-slate-200 leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
        </div>

        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}