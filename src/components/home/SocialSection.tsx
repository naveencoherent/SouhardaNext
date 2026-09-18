'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

export default function SocialSection() {
  const handleInstagramLoad = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  const handleTwitterLoad = () => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  };

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      {/* Social Embed External Scripts */}
      <Script
        id="instagram-embed-script"
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleInstagramLoad}
      />
      <Script
        id="twitter-embed-script"
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={handleTwitterLoad}
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-800 mb-10 tracking-tight">
          Be Part of the Community: Engage with Us Online!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Instagram Feed */}
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 min-h-[500px]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Instagram
            </span>
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
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Facebook
            </span>
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

          {/* X (Twitter) Feed */}
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 min-h-[500px]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              X (Twitter)
            </span>
            <div className="w-full flex justify-center">
              <a
                className="twitter-timeline"
                data-height="500"
                data-chrome="noheader nofooter transparent"
                href="https://twitter.com/StateSouharda"
              >
                Tweets by StateSouharda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}