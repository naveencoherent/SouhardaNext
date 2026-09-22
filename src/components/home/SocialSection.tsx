'use client';

import React from 'react';
import Script from 'next/script';
import { ExternalLink } from 'lucide-react';

export default function SocialSection() {
  const handleInstagramLoad = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      {/* Social Embed External Script - Instagram Only */}
      <Script
        id="instagram-embed-script"
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleInstagramLoad}
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-800 mb-10 tracking-tight">
          Be Part of the Community: Engage with Us Online!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Instagram Feed */}
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 min-h-[500px]">
            <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-3">
              <svg className="w-4 h-4 fill-pink-600" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </div>
            <div className="w-full flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CjRp3KfvKJp/"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '8px',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: '380px',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>

          {/* Facebook Feed */}
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 min-h-[500px]">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
              <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
              <span>Facebook</span>
            </div>
            <div className="w-full flex justify-center overflow-hidden rounded-lg">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100070379508086&tabs=timeline&width=380&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Feed"
              />
            </div>
          </div>

          {/* X (Twitter) Feed - Optimized Non-Blocking Card */}
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 min-h-[500px] justify-between text-center">
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-6">
                <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X (Twitter)</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 my-8">
                <p className="text-slate-700 font-medium text-sm mb-2">
                  Karnataka State Souharda Federal Co-operative Ltd.
                </p>
                <p className="text-xs text-slate-500">
                  @StateSouharda
                </p>
              </div>
            </div>

            <a
              href="https://twitter.com/StateSouharda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-md"
            >
              <span>View Latest Posts on X</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}