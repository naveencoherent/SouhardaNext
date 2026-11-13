"use client";

import React, { useEffect } from "react";

// ============================================================================
// EASY CONFIGURATION: Update your social links & featured embed URLs here
// ============================================================================
const SOCIAL_CONFIG = {
  facebookPageUrl:
    "https://www.facebook.com/profile.php?id=100070379508086",
  facebookIframeSrc:
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100070379508086&tabs=timeline&width=360&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
  instagramPostUrl: "https://www.instagram.com/p/CjRp3KfvKJp/",
  instagramProfileUrl: "https://www.instagram.com/",
  youtubeChannelUrl: "https://www.youtube.com/",
  xProfileUrl: "https://x.com/",
};

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function SocialSection() {
  useEffect(() => {
    // Load Instagram embed script cleanly in React/Next.js
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, []);

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Social Media &amp; News Feed
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-1">
              Be Part of the Community: Engage with Us Online!
            </p>
          </div>

          <a
            href={SOCIAL_CONFIG.facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            <span>Follow Us</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* 3-Column Social Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Column 1: Instagram Post Embed */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                Instagram Highlights
              </span>
              <a
                href={SOCIAL_CONFIG.instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-pink-600 hover:underline"
              >
                View Profile →
              </a>
            </div>

            <div className="w-full flex justify-center overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={SOCIAL_CONFIG.instagramPostUrl}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "8px",
                  boxShadow: "none",
                  margin: "0 auto",
                  maxWidth: "360px",
                  width: "100%",
                }}
              />
            </div>
          </div>

          {/* Column 2: Live Facebook Page Feed */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Facebook Updates
              </span>
              <a
                href={SOCIAL_CONFIG.facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                KSSFCL Bengaluru →
              </a>
            </div>

            <div className="w-full flex justify-center overflow-hidden rounded-lg">
              <iframe
                src={SOCIAL_CONFIG.facebookIframeSrc}
                width="360"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="KSSFCL Bengaluru Facebook Feed"
              />
            </div>
          </div>

          {/* Column 3: Official Social Channels Directory (X, YouTube, Instagram, Facebook) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between h-full">
            <div>
              <div className="pb-3 mb-4 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  Official Social Channels
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Connect with Karnataka State Souharda Federal Cooperative Ltd.
                </p>
              </div>

              <div className="space-y-3">
                {/* Facebook Card */}
                <a
                  href={SOCIAL_CONFIG.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      f
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                        Facebook
                      </div>
                      <div className="text-xs text-slate-500">
                        Kssfcl Bengaluru • Events &amp; Circulars
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600">
                    Follow →
                  </span>
                </a>

                {/* Instagram Card */}
                <a
                  href={SOCIAL_CONFIG.instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-pink-400 hover:bg-pink-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                      IG
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-pink-700">
                        Instagram
                      </div>
                      <div className="text-xs text-slate-500">
                        Photos, Reels &amp; Cooperative Stories
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-pink-600">
                    Follow →
                  </span>
                </a>

                {/* YouTube Card */}
                <a
                  href={SOCIAL_CONFIG.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-red-400 hover:bg-red-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                      ▶
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-red-700">
                        YouTube
                      </div>
                      <div className="text-xs text-slate-500">
                        Training Webinars &amp; Conferences
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-red-600">
                    Subscribe →
                  </span>
                </a>

                {/* X (Twitter) Card */}
                <a
                  href={SOCIAL_CONFIG.xProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-500 hover:bg-slate-100/70 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-base">
                      𝕏
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        X (Twitter)
                      </div>
                      <div className="text-xs text-slate-500">
                        Official Announcements &amp; Press
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Follow →
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 text-center">
              Stay connected for state-level cooperative news, training schedules, and announcements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}