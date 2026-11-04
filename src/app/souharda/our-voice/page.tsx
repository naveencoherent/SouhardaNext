'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Megaphone, BookOpen, Radio, Newspaper, Award, Sparkles } from 'lucide-react';

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function OurVoicePage() {
  const initiatives = [
    {
      title: 'Sahakari Belaku Magazine',
      description: 'Monthly publication covering co-operative movement news, stories, and regulatory developments.',
      icon: BookOpen,
      badge: 'Monthly Print',
    },
    {
      title: 'Souharda Audio Bulletins',
      description: 'Weekly audio digests bringing major policy updates directly to members across Karnataka.',
      icon: Radio,
      badge: 'Audio Digest',
    },
    {
      title: 'Press & Media Statements',
      description: 'Official announcements and statements regarding the Souharda Act and co-operative rights.',
      icon: Newspaper,
      badge: 'Press Release',
    },
    {
      title: 'Excellence Awards & Recognition',
      description: 'Honoring outstanding performance among Souharda societies across all divisions.',
      icon: Award,
      badge: 'Annual Event',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-b from-[#001D38] via-[#0A2E52] to-[#1C3E68] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Souharda Media & Publications</span>
          </motion.div>

          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-kannada"
          >
            ನಮ್ಮ ಧ್ವನಿ / Our Voice
          </motion.h1>

          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 font-medium"
          >
            Amplifying the voice of Souharda Co-operatives through magazines, bulletins, media releases, and advocacy.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}