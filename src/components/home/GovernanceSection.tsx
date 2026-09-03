'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GovernanceSection() {
  return (
    <section className="relative bg-white text-slate-900 pt-16 pb-20 px-6 lg:px-16 border-b border-slate-100">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80" 
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
            Apex Body of New Generation Cooperatives
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
    </section>
  );
}