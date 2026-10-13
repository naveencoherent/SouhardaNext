'use client';

import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadCardsSection() {
  const documents = [
    {
      title: 'ಅರ್ಹ ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಪಟ್ಟಿ',
      date: '31-03-2026',
      size: '29.5 MB',
      pdfUrl: '#',
    },
    {
      title: 'ಸುಸ್ತಿಯಾದರ ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಪಟ್ಟಿ',
      date: '31-03-2026',
      size: '4.41 MB',
      pdfUrl: '#',
    },
    {
      title: 'ಕಾರ್ಯ ಸ್ಥಗಿತ ಸುಸ್ತಿಯಾದರ ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಪಟ್ಟಿ',
      date: '31-03-2026',
      size: '5.72 MB',
      pdfUrl: '#',
    },
    {
      title: 'ಸಮಾಪನೆಗೆ ಶಿಫಾರಸ್ಸಾದ ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಪಟ್ಟಿ',
      date: '31-03-2026',
      size: '2.57 MB',
      pdfUrl: '#',
    },
    {
      title: 'ಸಮಾಪನೆಗೆ ಆದೇಶವಾದ ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ಪಟ್ಟಿ',
      date: '31-03-2026',
      size: '3.13 MB',
      pdfUrl: '#',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
      {/* Title Header */}
      <h3 className="text-xl md:text-2xl font-bold text-[#002b5b] text-center mb-8">
        ಸದಸ್ಯ ಸಹಕಾರಿಗಳ ವಿವರ
      </h3>

      {/* List Container */}
      <div className="divide-y divide-slate-100">
        {documents.map((doc, idx) => (
          <div 
            key={idx} 
            className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group"
          >
            {/* Left side: Icon + Text */}
            <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4">
              {/* Red PDF Icon Circle */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e00000] text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5 sm:mt-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>

              {/* Document Details */}
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug group-hover:text-[#2563eb] transition-colors">
                  {doc.title} <span className="font-extrabold text-slate-900 ml-1">{doc.date}</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold mt-0.5 tracking-wider">
                  PDF • {doc.size}
                </p>
              </div>
            </div>

            {/* Right side: Download Button */}
            <a
              href={doc.pdfUrl}
              className="text-xs sm:text-sm font-bold text-[#0066cc] hover:text-[#004499] transition-colors flex-shrink-0 px-2 py-1"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}