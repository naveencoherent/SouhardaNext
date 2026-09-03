'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Director {
  name: string;
  role: string;
  location?: string;
  image: string;
  href?: string;
}

const directors: Director[] = [
  { name: 'Sri G Nanajangouda', role: 'President', location: 'Vijayanagar', image: '/souharda/Director/2022/1nanjangouda.jpg' },
  { name: 'Sri A R Prasannakumar', role: 'Vice President', location: 'Shivamogga', image: '/souharda/Director/2022/2prasanna.jpg' },
  { name: 'Sri B H Krishna Reddy', role: 'Director', location: 'Kolar', image: '/souharda/Director/2022/3krishna_Reddy.jpg' },
  { name: 'Sri Gurunath Janthikar', role: 'Director', location: 'Bidar', image: '/souharda/Director/2022/4Gurunath_Janthikar.jpg' },
  { name: 'Sri Jagadish Kavatagimat', role: 'Director', location: 'Belagavi', image: '/souharda/Director/2022/5SriJagadish_Kavatagimat.jpg' },
  { name: 'Sri Guranagowda Patil', role: 'Director', location: 'Bagalkot', image: '/souharda/Director/2022/6Sri_Guranagowda_Patil.jpg' },
  { name: 'Sri Thimmayya Shetty', role: 'Director', location: 'Raichur', image: '/souharda/Director/2022/7Si_Thimmayya_Shetty.jpg' },
  { name: 'Sri B S Gundurao', role: 'Director', location: 'Bengaluru', image: '/souharda/Director/2022/8Sri_Gundurao.jpg' },
  { name: 'Sri Manjunath', role: 'Director', location: 'Udupi', image: '/souharda/Director/2022/9Sri_Manjunath.jpg' },
  { name: 'Sri Sridhar', role: 'Director', location: 'Koppal', image: '/souharda/Director/2022/10Sri_Sridhar.jpg' },
  { name: 'Sri Nagaraj R Deshapande', role: 'Director', location: 'Gadag', image: '/souharda/Director/2022/11Sri_Nagaraj_Deshapande.jpg' },
  { name: 'Sri K Shivalingappa', role: 'Director', location: 'Haveri', image: '/souharda/Director/2022/12Sri_K_Shivalingappa.jpg' },
  { name: 'Smt. Bharathi G Bhat', role: 'Director', location: 'Dakshina Kannada', image: '/souharda/Director/2022/13Smt_Bharathi_G_Bhat.jpg' },
  { name: 'Smt. Shailaja Tapali', role: 'Director', location: 'Kalaburagi', image: '/souharda/Director/2022/14Smt_Shailaja_Tapali.jpg' },
  { name: 'Sri Mallikarjuna A. Horakere', role: 'Director', location: 'Kalaburagi', image: '/souharda/Director/2022/15Sri_Mallikarjuna_Ajjappa_Horakere.jpg' },
  { name: 'Sri M R Prabhudev', role: 'Director', location: 'Davangere', image: '/souharda/Director/2022/16Sri_Prabhudev.jpg' },
  { name: 'Sri H J Hanumantha Shetty', role: 'Director', location: 'Bellary', image: '/souharda/Director/2022/17ri_H_J_Hanumanthaiah.jpg' },
  { name: 'Sri Raghurama Reddy', role: 'Director', location: 'Chitradurga', image: '/souharda/Director/2022/18Sri_Raghurama_Reddy.jpg' },
  { name: 'Sri C P Vijay', role: 'Director', location: 'Tumakuru', image: '/souharda/Director/2022/19Sri_C_P_Vijay.jpg' },
  { name: 'Sri Mohandas J Naik', role: 'Director', location: 'Uttara Kannada', image: '/souharda/Director/2022/20Sri_Mohandas_J_Naik.jpg' },
  { name: 'Sri Ramanagouda B Patil', role: 'Director', location: 'Vijayapura', image: '/souharda/Director/2022/21Sri_Sanjay_B_Patil.jpg' },
  { name: 'Sri Narayana Babu', role: 'Professional Director', image: '/souharda/Director/2022/22Sri_Sanjeev_Mahajan.jpg' },
  { name: 'Sri Subhash Inndi', role: 'Professional Director', image: '/souharda/Director/2022/23Sri_Mahadevaswamy.jpg' },
  { name: 'Sri Sharangowda G. Patil', role: 'Managing Director', image: '/souharda/Director/2022/24Sri_sharan_patil.jpg' },
];

export default function LeadershipSection() {
  const duplicatedDirectors = [...directors, ...directors];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12 text-center space-y-3">
        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
          Board of Directors
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Our Leadership Team
        </h2>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Guided by experienced leaders committed to democratic values and cooperative growth across Karnataka.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 45,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedDirectors.map((director, idx) => {
            const isExecutive = director.role === 'President' || director.role === 'Vice President' || director.role === 'Managing Director';

            return (
              <Link
                key={`${director.name}-${idx}`}
                href={director.href || '/director'}
                className="w-60 sm:w-64 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group/card flex-shrink-0 hover:-translate-y-1.5"
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-blue-50 border border-slate-100">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 640px) 240px, 256px"
                    className="object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1.5 w-full flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover/card:text-blue-600 transition-colors line-clamp-1">
                      {director.name}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 ${isExecutive ? 'text-blue-600' : 'text-slate-500'}`}>
                      {director.role}
                    </p>
                  </div>

                  {director.location ? (
                    <div className="pt-2 flex items-center justify-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="line-clamp-1">{director.location}</span>
                    </div>
                  ) : (
                    <div className="h-6" />
                  )}
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}