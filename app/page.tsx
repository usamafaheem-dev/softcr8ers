import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection8 } from "@/components/AboutSection8";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import ModernIndustries from "@/components/ModernIndustries";
import { TechStack } from "@/components/TechStack";
import { MarqueeCTA } from "@/components/MarqueeCTA";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection8 />
      <ServicesSection />
      <ProcessSection />
      <TechStack />
      <ModernIndustries />
      <TestimonialsSection />
      <MarqueeCTA />
      <ContactSection />
      <CinematicFooter />
    </main>
  );
}
