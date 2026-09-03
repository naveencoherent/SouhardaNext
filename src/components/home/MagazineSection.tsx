'use client';

import React from 'react';

export default function MagazineSection() {
  const magazineIssues = [
    { month: 'Nov 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Nov/Swabhimani_Sahakari_Nav2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Nov/Swabhimani_Sahakari_Nav2025.webp' },
    { month: 'Oct 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Oct/Oct_2025_Swabhimani_Sahakari.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Oct/Oct_2025_Swabhimani_Sahakari.webp' },
    { month: 'Sept 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Sept/swabhimani_Sahakari_Sep2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Sept/Sahakari_Swabhimani_Sept2025.webp' },
    { month: 'Aug 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Aug/swabhimani_Sahakari_Aug2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Aug/swabhimani_Sahakari_Aug2025.JPG' },
    { month: 'July 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/July/Swabhimani_Sahakari_July2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/July/Swabhimani_Sahakari_July2025.JPG' },
    { month: 'June 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/June/Swabhimani_June_2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/June/Swabhimani_Sahakari_June2025.JPG' },
    { month: 'April 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/April/Swabhimani_Sahakari_April2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/April/Swabhimani_Sahakari_April2025.JPG' },
    { month: 'Feb 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Feb/Swabhimani_Sahakari_Feb2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Feb/Swabhimani_Sahakari_Feb2025.JPG' },
    { month: 'Jan 2025', pdf: 'Swabhimani_Sahakari/2021_25/2025/Jan/swabhimani_Sahakari_Jan_2025.pdf', img: 'Swabhimani_Sahakari/2021_25/2025/Jan/Swabhimani_Sahakari_Jan_2025.JPG' },
    { month: 'Dec 2024', pdf: 'Swabhimani_Sahakari/2021_25/2024/Dec/Souharda_Sahakari_Dec2024.JPG', img: 'Swabhimani_Sahakari/2021_25/2024/Dec/Souharda_Sahakari_Dec2024.JPG' },
    { month: 'Nov 2024', pdf: 'Swabhimani_Sahakari/2021_25/2024/Nov/swabhimani_Nov_2024.pdf', img: 'Swabhimani_Sahakari/2021_25/2024/Nov/Swabhimani_Sahakari_Nov_2024.JPG' },
    { month: 'Oct 2024', pdf: 'Swabhimani_Sahakari/2021_25/2024/Oct/Swabhimani_Sahakari_Oct2024.pdf', img: 'Swabhimani_Sahakari/2021_25/2024/Oct/Swabhimani_Sahakari_Oct2024.JPG' },
    { month: 'Sept 2024', pdf: 'Swabhimani_Sahakari/2021_25/2024/Sept/Swabhimani_Sahakari_Sept2024.pdf', img: 'Swabhimani_Sahakari/2021_25/2024/Sept/Swabhimani_Sahakari_Sept2024.JPG' },
  ];

  return (
    <section id="sahakari" className="relative bg-[#254336] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-10">
        
        {/* Intro Banner Message */}
        <p className="text-center text-sm sm:text-base text-emerald-100 max-w-4xl mx-auto font-medium leading-relaxed">
          Welcome to the official offline magazine of KSSFCL — your go-to source for everything happening within our organization. Our magazine aims to keep you informed and engaged, showcasing the exceptional work of our employees, sharing important updates, and fostering a sense of community among our members.
        </p>

        {/* Main 2-Column Banner Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Featured Covers & Archives Button */}
          <div className="md:col-span-6 flex flex-col items-center space-y-6">
            <div className="grid grid-cols-2 gap-4 max-w-xs sm:max-w-sm w-full">
              
              <a href={magazineIssues[0].pdf} target="_blank" rel="noopener noreferrer" className="block rounded shadow-lg overflow-hidden border border-white/20 hover:scale-105 transition-transform">
                <img src={magazineIssues[0].img} alt="Swabhimani Sahakari Nov 2025" className="w-full h-auto object-cover" />
              </a>

              <a href={magazineIssues[1].pdf} target="_blank" rel="noopener noreferrer" className="block rounded shadow-lg overflow-hidden border border-white/20 hover:scale-105 transition-transform">
                <img src={magazineIssues[1].img} alt="Swabhimani Sahakari Oct 2025" className="w-full h-auto object-cover" />
              </a>

            </div>

            <a
              href="Swabhimani_Sahakari/2021_25/2025/swabhimani25.html"
              className="inline-block border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 font-bold px-6 py-2.5 rounded transition-all duration-200 shadow-md text-sm"
            >
              Click here for Archives
            </a>
          </div>

          {/* Right Column: Title, Description & Action Button */}
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-white">ಸ್ವಾಭಿಮಾನಿ </span>
              <span className="text-amber-400">ಸಹಕಾರಿ</span>
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
              ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಚಳುವಳಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಮೀಸಲಾಗಿರುವ ಏಕೈಕ ಮಾಸಪತ್ರಿಕೆ.
            </p>

            <div className="pt-2">
              <a
                href="Swabhimani_Sahakari/2021_25/2025/swabhimani25.html"
                className="inline-block border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 font-bold px-6 py-2.5 rounded transition-all duration-200 shadow-md text-sm"
              >
                Read more
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Magazine Carousel */}
        <div className="pt-6 border-t border-emerald-800/80">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-emerald-900">
            {magazineIssues.map((item, index) => (
              <a
                key={index}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-28 text-center group space-y-2"
              >
                <div className="rounded overflow-hidden shadow-md border border-white/20 group-hover:border-amber-400 group-hover:scale-105 transition-all">
                  <img src={item.img} alt={`Swabhimani Sahakari ${item.month}`} className="w-full h-36 object-cover" />
                </div>
                <p className="text-xs font-semibold text-emerald-100 group-hover:text-amber-300 transition-colors">
                  {item.month}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}