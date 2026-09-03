'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Award, TrendingUp } from 'lucide-react';

// --- Animated Counter Sub-Component ---
interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

function AnimatedCounter({ 
  value, 
  suffix = '', 
  label, 
  icon: Icon, 
  gradient, 
  iconBg, 
  iconColor, 
  borderColor 
}: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border ${borderColor} ${gradient} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
    >
      {/* Decorative top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon Badge */}
      <div className={`p-3.5 ${iconBg} ${iconColor} rounded-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Counter Value */}
      <span ref={ref} className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight drop-shadow-sm">
        0{suffix}
      </span>

      {/* Label */}
      <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1.5 text-center">
        {label}
      </p>
    </motion.div>
  );
}

// --- Main Governance & Stats Section Component ---
export default function GovernanceSection() {
  const stats = [
    { 
      value: 25, 
      suffix: '+', 
      label: 'Years of Trust', 
      icon: ShieldCheck,
      gradient: 'bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-100/60',
      iconBg: 'bg-blue-600',
      iconColor: 'text-white',
      borderColor: 'border-blue-200'
    },
    { 
      value: 6782, 
      suffix: '+', 
      label: 'Member Cooperatives', 
      icon: Users,
      gradient: 'bg-gradient-to-br from-emerald-50 via-teal-50/50 to-emerald-100/60',
      iconBg: 'bg-emerald-600',
      iconColor: 'text-white',
      borderColor: 'border-emerald-200'
    },
    { 
      value: 100, 
      suffix: '%', 
      label: 'Statewide Presence', 
      icon: Award,
      gradient: 'bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/60',
      iconBg: 'bg-amber-500',
      iconColor: 'text-white',
      borderColor: 'border-amber-200'
    },
    { 
      value: 98, 
      suffix: '%', 
      label: 'Growth Index', 
      icon: TrendingUp,
      gradient: 'bg-gradient-to-br from-purple-50 via-violet-50/50 to-purple-100/60',
      iconBg: 'bg-purple-600',
      iconColor: 'text-white',
      borderColor: 'border-purple-200'
    },
  ];

  return (
    <section className="relative bg-white text-slate-900 pt-24 lg:pt-28 pb-16 px-6 lg:px-16 border-b border-slate-100">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80" 
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              Karnataka State Souharda Federal Co-operative Ltd.
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Empowering Cooperatives with <span className="text-blue-600">Digital Governance</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-xl">
              Driving sustainable growth, self-regulation, and transparent services across Karnataka through modern technology and collective governance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-blue-600/20">
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl border border-slate-300 transition">
                Regulatory Circulars
              </button>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-slate-900 text-white backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-between">
              Live Governance Ecosystem
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </h3>
            
            <div className="space-y-4">
              {[
                { title: 'Self-Regulatory Framework', desc: 'Democratically elected governance', color: 'bg-blue-500' },
                { title: 'Digital E-Stamping', desc: 'Secure payment gateway integration', color: 'bg-indigo-500' },
                { title: 'Education & Training', desc: 'Continuous workforce development', color: 'bg-cyan-500' }
              ].map((item) => (
                <motion.div 
                  key={item.title}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                >
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${item.color}`} />
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Color-Coded Running Counter Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}