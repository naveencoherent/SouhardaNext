import HeroCarousel from '@/components/home/HeroCarousel';
import WelcomeSection from '@/components/home/WelcomeSection';
import GovernanceSection from '@/components/home/GovernanceSection';
import StatsSection from '@/components/home/StatsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      <HeroCarousel />
      <WelcomeSection />
      <GovernanceSection />
      <StatsSection />
    </main>
  );
}