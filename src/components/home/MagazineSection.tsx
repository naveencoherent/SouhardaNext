'use client';

import React from 'react';

// Imported or directly embedded JSON dataset
const magazineData = {
  "issues": [
    { "year": "2026", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2026", "displayName": "August 2026" },
    { "year": "2026", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2026", "displayName": "July 2026" },
    { "year": "2026", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2026", "displayName": "April 2026" },
    { "year": "2026", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2026", "displayName": "March 2026" },
    { "year": "2026", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2026", "displayName": "February 2026" },
    { "year": "2026", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2026", "displayName": "January 2026" },
    { "year": "2025", "month": "Dec", "baseName": "Swabhimani_Sahakari_Dec_2025", "displayName": "Dec 2025" },
    { "year": "2025", "month": "Nov", "baseName": "Swabhimani_Sahakari_Nov_2025", "displayName": "Nov 2025" },
    { "year": "2025", "month": "Oct", "baseName": "Swabhimani_Sahakari_Oct_2025", "displayName": "Oct 2025" },
    { "year": "2025", "month": "Sep", "baseName": "Swabhimani_Sahakari_Sep_2025", "displayName": "Sep 2025" },
    { "year": "2025", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2025", "displayName": "Aug 2025" },
    { "year": "2025", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2025", "displayName": "Jul 2025" },
    { "year": "2025", "month": "Jun", "baseName": "Swabhimani_Sahakari_Jun_2025", "displayName": "Jun 2025" },
    { "year": "2025", "month": "May", "baseName": "Swabhimani_Sahakari_May_2025", "displayName": "May 2025" },
    { "year": "2025", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2025", "displayName": "Apr 2025" },
    { "year": "2025", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2025", "displayName": "Mar 2025" },
    { "year": "2025", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2025", "displayName": "Feb 2025" },
    { "year": "2025", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2025", "displayName": "Jan 2025" },
    { "year": "2024", "month": "Dec", "baseName": "Swabhimani_Sahakari_Dec_2024", "displayName": "Dec 2024" },
    { "year": "2024", "month": "Nov", "baseName": "Swabhimani_Sahakari_Nov_2024", "displayName": "Nov 2024" },
    { "year": "2024", "month": "Oct", "baseName": "Swabhimani_Sahakari_Oct_2024", "displayName": "Oct 2024" },
    { "year": "2024", "month": "Sep", "baseName": "Swabhimani_Sahakari_Sep_2024", "displayName": "Sep 2024" },
    { "year": "2024", "month": "Aug", "baseName": "Swabhimani_Sahakari_Aug_2024", "displayName": "Aug 2024" },
    { "year": "2024", "month": "Jul", "baseName": "Swabhimani_Sahakari_Jul_2024", "displayName": "Jul 2024" },
    { "year": "2024", "month": "Jun", "baseName": "Swabhimani_Sahakari_Jun_2024", "displayName": "Jun 2024" },
    { "year": "2024", "month": "May", "baseName": "Swabhimani_Sahakari_May_2024", "displayName": "May 2024" },
    { "year": "2024", "month": "Apr", "baseName": "Swabhimani_Sahakari_Apr_2024", "displayName": "Apr 2024" },
    { "year": "2024", "month": "Mar", "baseName": "Swabhimani_Sahakari_Mar_2024", "displayName": "Mar 2024" },
    { "year": "2024", "month": "Feb", "baseName": "Swabhimani_Sahakari_Feb_2024", "displayName": "Feb 2024" },
    { "year": "2024", "month": "Jan", "baseName": "Swabhimani_Sahakari_Jan_2024", "displayName": "Jan 2024" }
  ]
};

// Corrected path constructor
const getAssetPath = (year: string, month: string, baseName: string) => {
  if (parseInt(year) >= 2026) {
    // 2026+ path: /images/Swabhimani_Sahakari/2026_30/2026/Aug/filename
    return `/images/Swabhimani_Sahakari/2026_30/2026/${month}/${baseName}`;
  }
  // Pre-2026 path: /images/Swabhimani_Sahakari/2021_25/2025/Dec/filename
  return `/images/Swabhimani_Sahakari/2021_25/${year}/${month}/${baseName}`;
};
// Auto-fallback image handling (.webp -> .jpg -> .JPG -> .png)
const AdaptiveImage = ({ basePath, alt, className }: { basePath: string; alt: string; className?: string }) => {
  const extensions = ['.webp', '.jpg', '.JPG', '.png'];

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    const target = e.currentTarget;
    if (index + 1 < extensions.length) {
      target.src = `${basePath}${extensions[index + 1]}`;
      target.onerror = (newEvt) => handleError(newEvt as any, index + 1);
    }
  };

  return (
    <img
      src={`${basePath}${extensions[0]}`}
      alt={alt}
      className={className}
      onError={(e) => handleError(e, 0)}
    />
  );
};

export default function MagazineSection() {
  const processedIssues = magazineData.issues.map((issue) => {
    const basePath = getAssetPath(issue.year, issue.month, issue.baseName);
    return {
      ...issue,
      basePath,
      pdf: `${basePath}.pdf`
    };
  });

  const latestTwoIssues = processedIssues.slice(0, 2);
  const infiniteIssues = [...processedIssues, ...processedIssues];

  return (
    <section 
      id="sahakari" 
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: `url('/images/Swabhimani_Sahakari/sahakari.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-10">
        
        <p className="text-center text-sm sm:text-base text-emerald-100 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow">
          Welcome to the official offline magazine of KSSFCL — your go-to source for everything happening within our organization. Our magazine aims to keep you informed and engaged, showcasing the exceptional work of our employees, sharing important updates, and fostering a sense of community among our members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Main Top 2 Latest Issues Container */}
          <div className="md:col-span-6 flex flex-col items-center space-y-6">
            <div className="grid grid-cols-2 gap-4 max-w-md sm:max-w-lg w-full">
              {latestTwoIssues.map((issue, idx) => (
                <div key={issue.baseName} className="flex flex-col items-center space-y-2">
                  <a 
                    href={issue.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-300 relative group"
                  >
                    <AdaptiveImage 
                      basePath={issue.basePath} 
                      alt={`Swabhimani Sahakari ${issue.displayName}`} 
                      className="w-full h-auto object-cover rounded-2xl" 
                    />
                    
                    {idx === 0 && (
                      <span className="absolute top-2 left-2 bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                        Latest
                      </span>
                    )}
                  </a>

                  {/* Dynamic Tag Line */}
                  <span className="text-xs sm:text-sm font-semibold text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-sm shadow-sm text-center">
                    {issue.displayName} Edition
                  </span>
                </div>
              ))}
            </div>

            <div className="p-2 rounded-2xl bg-black/25 backdrop-blur-md border border-white/10 shadow-lg">
              <a
                href="/images/Swabhimani_Sahakari/2021_25/2025/swabhimani25.html"
                className="inline-block border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                Click here for Archives
              </a>
            </div>
          </div>

          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
              <span className="text-white">ಸ್ವಾಭಿಮಾನಿ </span>
              <span className="text-amber-400">ಸಹಕಾರಿ</span>
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-lg font-medium drop-shadow">
              ಸೌಹಾರ್ದ ಸಹಕಾರಿ ಚಳುವಳಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಮೀಸಲಾಗಿರುವ ಏಕೈಕ ಮಾಸಪತ್ರಿಕೆ.
            </p>

            <div className="pt-2">
              <div className="inline-block p-2 rounded-2xl bg-black/25 backdrop-blur-md border border-white/10 shadow-lg">
                <a 
                  href="/images/Swabhimani_Sahakari/2021_25/2025/swabhimani25.html"
                  className="inline-block border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Marquee Slider driven by JSON */}
        <div className="pt-6 border-t border-white/20 overflow-hidden group">
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {infiniteIssues.map((item, index) => (
              <a
                key={`${item.baseName}-${index}`}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-36 text-center group/card space-y-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 group-hover/card:border-amber-400 group-hover/card:scale-105 transition-all duration-300 bg-black/20">
                  <AdaptiveImage 
                    basePath={item.basePath} 
                    alt={`Swabhimani Sahakari ${item.displayName}`} 
                    className="w-full h-44 object-cover rounded-2xl" 
                  />
                </div>
                <p className="text-xs font-semibold text-emerald-100 group-hover/card:text-amber-300 transition-colors drop-shadow">
                  {item.displayName}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
}