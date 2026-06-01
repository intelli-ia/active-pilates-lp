import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ForWhomSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ForWhomSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
