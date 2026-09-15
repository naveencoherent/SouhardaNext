'use client';

import React from 'react';
import Image from 'next/image';

interface Dignitary {
  name: string;
  role: string;
  imageSrc: string;
}

const DIGNITARIES: Dignitary[] = [
  {
    name: 'Sri Amit Shah',
    role: "Hon'ble Union Coop Minister",
    imageSrc: '/images/home/SriAmithShah.png',
  },
  {
    name: 'Sri Laxman Savadi',
    role: "Hon'ble Coop Minister, Karnataka",
    imageSrc: '/images/home/Sri_Lakshman_Savadi.png',
  },
];

export default function HeroDignitaryCard() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-12 max-w-sm rounded-2xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 p-4 sm:p-5 shadow-2xl">
      <div className="flex items-center justify-around gap-4">
        {DIGNITARIES.map((person, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Circular Avatar Container */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400 shadow-md bg-slate-800">
              <Image
                src={person.imageSrc}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover object-top"
              />
            </div>

            {/* Name & Role */}
            <h4 className="mt-2 text-xs sm:text-sm font-bold text-amber-400 drop-shadow-sm">
              {person.name}
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-300 font-medium max-w-[120px] leading-tight mt-0.5">
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}