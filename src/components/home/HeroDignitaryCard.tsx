'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDignitaryCard() {
  const dignitaries = [
    {
      name: "Sri Amit Shah",
      role: "Hon'ble Union Coop Minister",
      image: "/images/home/SriAmithShah.png",
    },
    {
      name: "Sri Laxman Savadi",
      role: "Hon'ble Coop Minister, Karnataka",
      image: "/images/home/Sri_Lakshman_Savadi.png",
    },
  ];

  return (
    <div className="absolute top-8 left-6 sm:left-12 z-30 animate-fade-in-down">
      {/* Outer Glow Container */}
      <div className="relative group p-[2px] rounded-2xl bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Inner Card Grid */}
        <div className="bg-slate-950/85 backdrop-blur-md rounded-[14px] p-4 flex items-center gap-6 border border-white/10">
          {dignitaries.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              
              {/* Circular Image Frame */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-amber-300 via-orange-400 to-amber-500 shadow-md mb-2">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Text Info */}
              <h4 className="text-amber-400 font-bold text-xs sm:text-sm leading-tight">
                {person.name}
              </h4>
              <p className="text-slate-300 text-[10px] sm:text-xs mt-1 font-medium max-w-[110px]">
                {person.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}