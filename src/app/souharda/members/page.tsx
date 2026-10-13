'use client';

import dynamic from 'next/dynamic';
import StatsOverviewSection from './components/StatsOverviewSection';
import DownloadCardsSection from './components/DownloadCardsSection';
import RegionalDirectorySection from './components/RegionalDirectorySection';
import DetailedListSection from './components/DetailedListSection';

// Dynamically import SegmentDonutsSection to bypass SSR and prevent hydration mismatches
const SegmentDonutsSection = dynamic(
  () => import('./components/SegmentDonutsSection'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-white/80 border border-slate-200 rounded-2xl animate-pulse flex flex-col items-center justify-center space-y-3">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-[#003366] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-slate-400">Loading charts...</span>
      </div>
    ),
  }
);

export default function SouhardaMembersPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <StatsOverviewSection />
        <DownloadCardsSection />
        <RegionalDirectorySection />
        <DetailedListSection />
        <SegmentDonutsSection />
      </div>
    </div>
  );
}