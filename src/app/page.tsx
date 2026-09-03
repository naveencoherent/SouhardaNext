import HeroCarousel from '@/components/home/HeroCarousel';
import WelcomeSection from '@/components/home/WelcomeSection';
import ComplianceSection from '@/components/home/ComplianceSection';
import SocialSection from '@/components/home/SocialSection';
import MagazineSection from '@/components/home/MagazineSection';
import GovernanceSection from '@/components/home/GovernanceSection';
import LeadershipSection from '@/components/home/LeadershipSection';
import Footer from '@/components/home/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      <HeroCarousel />
      <WelcomeSection />
      <ComplianceSection />
      <SocialSection />
      <MagazineSection />
      <GovernanceSection />
      <LeadershipSection/>
      <Footer/>
    </main>
  );
}