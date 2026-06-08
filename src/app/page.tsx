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
    <>
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ForWhomSection />
      <JourneySection />
      <FAQSection />
      <FinalCTASection />
      <BrandSection />
    </>
  );
}
