import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import CredibilitySection from '@/components/landing/credibility-section';
import CurriculumSection from '@/components/landing/curriculum-section';
import TransformationSection from '@/components/landing/transformation-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import DetailsSection from '@/components/landing/details-section';
import RegistrationSection from '@/components/landing/registration-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CredibilitySection />
        <CurriculumSection />
        <TransformationSection />
        <SocialProofSection />
        <DetailsSection />
        <RegistrationSection />
        <FinalCtaSection />
      </main>
      <Footer />

    </div>
  );
}
