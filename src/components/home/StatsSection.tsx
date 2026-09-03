'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, TrendingUp, LucideIcon } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function StatsSection() {
  const stats: StatItem[] = [
    { label: 'Years of Trust', value: '25+', icon: ShieldCheck },
    { label: 'Member Cooperatives', value: '5,000+', icon: Users },
    { label: 'Statewide Presence', value: '100%', icon: Award },
    { label: 'Growth Index', value: '98%', icon: TrendingUp },
  ];

  return (
    <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}