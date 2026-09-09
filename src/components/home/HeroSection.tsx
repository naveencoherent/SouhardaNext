// src/components/home/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  title: string;
  highlightTitle?: string;
  description: React.ReactNode;
  children?: React.ReactNode; // For stats pills, buttons, or custom cards
}

export default function HeroSection({
  title,
  highlightTitle,
  description,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 bg-white overflow-hidden border-b border-slate-200">
      {/* Standardized 24px Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1e40af]">
          {title}
          {highlightTitle && (
            <span className="text-[#ea580c] block mt-1">{highlightTitle}</span>
          )}
        </h1>

        <div className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {description}
        </div>

        {children && <div className="pt-2 flex justify-center">{children}</div>}
      </div>
    </section>
  );
}