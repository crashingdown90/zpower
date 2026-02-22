import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import ProgramsSection from '@/components/ProgramsSection';
import AglomerasiSection from '@/components/AglomerasiSection';
import StatsSection from '@/components/StatsSection';
import StrukturSection from '@/components/StrukturSection';
import TimelineSection from '@/components/TimelineSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal />
        <HeroSection />
        <VisionSection />
        <ProgramsSection />
        <AglomerasiSection />
        <StatsSection />
        <StrukturSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
