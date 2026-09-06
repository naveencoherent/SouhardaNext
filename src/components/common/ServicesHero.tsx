'use client';

import { Sparkles } from 'lucide-react';

export type HeroTheme = 'emerald' | 'indigo' | 'blue' | 'amber' | 'slate';

interface ServicesHeroProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  theme?: HeroTheme;
}

const THEME_STYLES = {
  emerald: {
    bg: 'bg-emerald-950',
    border: 'border-emerald-900',
    badgeBg: 'bg-emerald-900/80',
    badgeBorder: 'border-emerald-700/50',
    badgeText: 'text-amber-400',
    subtitle: 'text-emerald-100/90',
  },
  indigo: {
    bg: 'bg-indigo-950',
    border: 'border-indigo-900',
    badgeBg: 'bg-indigo-900/80',
    badgeBorder: 'border-indigo-700/50',
    badgeText: 'text-amber-300',
    subtitle: 'text-indigo-100/90',
  },
  blue: {
    bg: 'bg-slate-950',
    border: 'border-blue-900',
    badgeBg: 'bg-blue-900/80',
    badgeBorder: 'border-blue-700/50',
    badgeText: 'text-sky-300',
    subtitle: 'text-blue-100/90',
  },
  amber: {
    bg: 'bg-amber-950',
    border: 'border-amber-900',
    badgeBg: 'bg-amber-900/80',
    badgeBorder: 'border-amber-700/50',
    badgeText: 'text-amber-300',
    subtitle: 'text-amber-100/90',
  },
  slate: {
    bg: 'bg-slate-900',
    border: 'border-slate-800',
    badgeBg: 'bg-slate-800',
    badgeBorder: 'border-slate-700',
    badgeText: 'text-amber-400',
    subtitle: 'text-slate-200',
  },
};

export default function ServicesHero({
  title = "Federation Support Services",
  subtitle = "Empowering Souharda Co-operatives across Karnataka through statutory and legal excellence.",
  badgeText = "KSSFCL Services Wing",
  theme = "emerald",
}: ServicesHeroProps) {
  const activeTheme = THEME_STYLES[theme] || THEME_STYLES.emerald;

  return (
    <section className={`relative ${activeTheme.bg} text-white py-8 sm:py-10 border-b ${activeTheme.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center md:text-left max-w-4xl">
          <div className="flex items-center justify-center md:justify-start">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${activeTheme.badgeBg} border ${activeTheme.badgeBorder} ${activeTheme.badgeText} text-[11px] font-bold tracking-wider uppercase`}>
              <Sparkles className="w-3.5 h-3.5" />
              {badgeText}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className={`text-xs sm:text-sm ${activeTheme.subtitle} font-medium leading-relaxed`}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}