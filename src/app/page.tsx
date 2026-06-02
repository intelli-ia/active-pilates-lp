import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ForWhomSection from "@/components/Services";
import JourneySection from "@/components/Journey";
import TestimonialsSection from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";
import BrandSection from "@/components/Brand";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ForWhomSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <BrandSection />
    </main>
  );
}
