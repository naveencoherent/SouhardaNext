"use client";

import React from "react";
import Link from "next/link";
import { FileText, Users, Megaphone, ArrowRight } from "lucide-react";

interface NoticeItem {
  text: string;
  href?: string;
  highlight?: "blue" | "red" | "default";
}

interface NoticeBoard {
  id: string;
  title: string;
  accentColor: "red" | "blue" | "emerald";
  buttonLabel: string;
  buttonHref: string;
  speedSeconds: number;
  items: NoticeItem[];
}

// ============================================================================
// EASY CONFIGURATION: Edit or add Circulars, Recruitment & Tenders here
// ============================================================================
const COMPLIANCE_BOARDS: NoticeBoard[] = [
  {
    id: "circulars",
    title: "Circulars",
    accentColor: "red",
    buttonLabel: "Know More",
    buttonHref: "/regulatory/circulars",
    speedSeconds: 22,
    items: [
      {
        text: "ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಕೇಂದ್ರ ಕಛೇರಿ, ಬೆಂಗಳೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ, ದಾವಾ ಪಂಚಾಯ್ತಿ ನ್ಯಾಯಾಲಯ ಬೆಂಗಳೂರು ಕಛೇರಿಯ ವಿಳಾಸ ಬದಲಾವಣೆ ಕುರಿತು ಸುತ್ತೋಲೆ. ಆರ್ಥಿಕ ಸಬಲತೆಯ ಮಾನದಂಡಗಳ ಕುರಿತು ಸುತ್ತೋಲೆ.",
        href: "/regulatory/circulars",
        highlight: "blue",
      },
      {
        text: "ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಆಡಳಿತ ಮಂಡಳಿ/ ಪದಾಧಿಕಾರಿಗಳ ಚುನಾವಣೆಗಾಗಿ 2023ರ ಚುನಾವಣಾಧಿಕಾರಿಗಳ ನೇಮಕಾತಿ ಆದೇಶ.",
        href: "/regulatory/circulars",
        highlight: "default",
      },
      {
        text: "ಶಾಖಾ ಅನುಮತಿ ನೀಡುವ ಮಾನದಂಡಗಳ ಕುರಿತು ಸುತ್ತೋಲೆ.",
        href: "/regulatory/circulars",
        highlight: "red",
      },
      {
        text: "ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಆಡಳಿತ ಮಂಡಳಿ/ ಪದಾಧಿಕಾರಿಗಳ ಚುನಾವಣೆಗಾಗಿ 2023ರ ಚುನಾವಣಾಧಿಕಾರಿಗಳ ನೇಮಕಾತಿ ಆದೇಶ.",
        href: "/regulatory/circulars",
        highlight: "default",
      },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    accentColor: "blue",
    buttonLabel: "View Updates",
    buttonHref: "/regulatory/orders",
    speedSeconds: 20,
    items: [
      {
        text: "Application Formats For Bylaw Amendment.",
        href: "/regulatory/orders",
        highlight: "red",
      },
      {
        text: "Clarification of Register regarding Membership in D.C.C. Bank for Souharda Cooperative Banks.",
        href: "/regulatory/orders",
        highlight: "default",
      },
      {
        text: "Delegation of Power to Subordinate Officers of Cooperative Department.",
        href: "/regulatory/orders",
        highlight: "blue",
      },
      {
        text: "Application Formats For Bylaw Amendment.",
        href: "/regulatory/orders",
        highlight: "default",
      },
      {
        text: "Clarification of Register regarding Membership in D.C.C. Bank for Souharda Cooperative Banks.",
        href: "/regulatory/orders",
        highlight: "red",
      },
    ],
  },
  {
    id: "tenders",
    title: "Tenders",
    accentColor: "emerald",
    buttonLabel: "Apply Now",
    buttonHref: "/regulatory/tenders",
    speedSeconds: 18,
    items: [
      {
        text: "24ನೇ ಸಾಮಾನ್ಯ ಸಭೆಯ ನೋಟೀಸು ಪುಸ್ತಕ ಮುದ್ರಣಕ್ಕೆ ಟೆಂಡರ್‌",
        href: "/regulatory/tenders",
        highlight: "blue",
      },
      {
        text: "ಸಂಯುಕ್ತ ಸಹಕಾರಿಯ ಕೇಂದ್ರ ಕಛೇರಿ, ಬೆಂಗಳೂರು ಪ್ರಾಂತೀಯ ಕಛೇರಿ, ದಾವಾ ಪಂಚಾಯ್ತಿ ನ್ಯಾಯಾಲಯ ಬೆಂಗಳೂರು ಕಛೇರಿಯ ವಿಳಾಸ ಬದಲಾವಣೆ ಕುರಿತು ಸುತ್ತೋಲೆ. ಆರ್ಥಿಕ ಸಬಲತೆಯ ಮಾನದಂಡಗಳ ಕುರಿತು ಸುತ್ತೋಲೆ.",
        href: "/regulatory/tenders",
        highlight: "default",
      },
      {
        text: "ಸೌಹಾರ್ದ ಸಹಕಾರಿಗಳ ಆಡಳಿತ ಮಂಡಳಿ/ ಪದಾಧಿಕಾರಿಗಳ ಚುನಾವಣೆಗಾಗಿ 2023ರ ಚುನಾವಣಾಧಿಕಾರಿಗಳ ನೇಮಕಾತಿ ಆದೇಶ.",
        href: "/regulatory/tenders",
        highlight: "red",
      },
      {
        text: "ಶಾಖಾ ಅನುಮತಿ ನೀಡುವ ಮಾನದಂಡಗಳ ಕುರಿತು ಸುತ್ತೋಲೆ.",
        href: "/regulatory/tenders",
        highlight: "default",
      },
    ],
  },
];

const ACCENT_STYLES = {
  red: {
    headerBg: "bg-red-50/80 border-red-100",
    titleText: "text-red-600",
    iconBg: "bg-red-100 text-red-600",
    btnBorder:
      "border-amber-300 text-blue-700 hover:bg-amber-50 hover:border-amber-400",
  },
  blue: {
    headerBg: "bg-blue-50/80 border-blue-100",
    titleText: "text-blue-600",
    iconBg: "bg-blue-100 text-blue-600",
    btnBorder:
      "border-amber-300 text-blue-700 hover:bg-amber-50 hover:border-amber-400",
  },
  emerald: {
    headerBg: "bg-emerald-50/80 border-emerald-100",
    titleText: "text-emerald-700",
    iconBg: "bg-emerald-100 text-emerald-700",
    btnBorder:
      "border-amber-300 text-blue-700 hover:bg-amber-50 hover:border-amber-400",
  },
};

function getItemTextColor(highlight?: NoticeItem["highlight"]) {
  if (highlight === "blue") return "text-blue-700 font-medium";
  if (highlight === "red") return "text-red-600 font-medium";
  return "text-slate-700";
}

function getBoardIcon(id: string) {
  if (id === "circulars") return <FileText className="w-5 h-5" />;
  if (id === "recruitment") return <Users className="w-5 h-5" />;
  return <Megaphone className="w-5 h-5" />;
}

export default function ComplianceSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-500 border-t border-slate-300">
      {/* Smooth vertical marquee keyframes (pauses on hover) */}
      <style jsx>{`
        @keyframes verticalMarquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .marquee-track {
          animation: verticalMarquee var(--scroll-duration, 20s) linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-xs">
            Compliance Matters: Stay Informed on Organisation Policies
          </h2>
          <p className="text-sm text-slate-200 mt-2">
            Official Circulars, Recruitment Notices &amp; Tender Announcements under the Karnataka Souharda Sahakari Act, 1997
          </p>
        </div>

        {/* 3-Column Notice Boards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPLIANCE_BOARDS.map((board) => {
            const style = ACCENT_STYLES[board.accentColor];
            // Duplicate items seamlessly for continuous loop
            const loopItems = [...board.items, ...board.items];

            return (
              <div
                key={board.id}
                className="bg-amber-50/95 rounded-2xl shadow-lg border border-white/40 overflow-hidden flex flex-col justify-between"
              >
                {/* Card Header */}
                <div
                  className={`px-5 py-4 border-b flex items-center justify-center gap-2.5 ${style.headerBg}`}
                >
                  <span className={`p-1.5 rounded-lg ${style.iconBg}`}>
                    {getBoardIcon(board.id)}
                  </span>
                  <h3 className={`text-lg font-bold ${style.titleText}`}>
                    {board.title}
                  </h3>
                </div>

                {/* Scrolling Notice Feed (pauses on hover) */}
                <div className="marquee-container relative h-[270px] overflow-hidden px-5 py-3 bg-white/90">
                  {/* Top & Bottom subtle fade masks */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-white to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-white to-transparent z-10" />

                  <div
                    className="marquee-track divide-y divide-slate-200"
                    style={
                      {
                        "--scroll-duration": `${board.speedSeconds}s`,
                      } as React.CSSProperties
                    }
                  >
                    {loopItems.map((item, idx) => (
                      <div key={idx} className="py-3.5 text-sm leading-relaxed">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className={`block hover:underline transition-colors ${getItemTextColor(
                              item.highlight
                            )}`}
                          >
                            {item.text}
                          </Link>
                        ) : (
                          <p className={getItemTextColor(item.highlight)}>
                            {item.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="px-5 py-3.5 bg-white border-t border-slate-100 flex justify-end">
                  <Link
                    href={board.buttonHref}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 text-xs font-bold transition-all ${style.btnBorder}`}
                  >
                    <span>{board.buttonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}