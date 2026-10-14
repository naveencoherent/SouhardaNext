import HeroCarousel from '@/components/home/HeroCarousel';
import WelcomeSection from '@/components/home/WelcomeSection';
import GovernanceSection from '@/components/home/GovernanceSection';
import LeadershipSection from '@/components/home/LeadershipSection';
import ComplianceSection from '@/components/home/ComplianceSection';
import SocialSection from '@/components/home/SocialSection';
import MagazineSection from '@/components/home/MagazineSection';

// Guarantees static HTML export compatibility and max performance
export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroCarousel />
      <WelcomeSection />
      <GovernanceSection />
      <LeadershipSection />
      <ComplianceSection />
      <SocialSection />
      <MagazineSection />
    </main>
  );
}