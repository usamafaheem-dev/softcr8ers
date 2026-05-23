import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection8 } from "@/components/AboutSection8";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CircularPortfolio } from "@/components/CircularPortfolio";
import { ProcessSection } from "@/components/ProcessSection";
import ModernIndustries from "@/components/ModernIndustries";
import { TechStack } from "@/components/TechStack";
import { MarqueeCTA } from "@/components/MarqueeCTA";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { CinematicFooter } from "@/components/ui/motion-footer";
import HomeIntro from "@/components/HomeIntro";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <HomeIntro />
      <Navbar />
      <HeroSection />
      <AboutSection8 />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <CircularPortfolio />
      <TechStack />
      <ModernIndustries />
      <TestimonialsSection />
      <MarqueeCTA />
      <ContactSection />
      <CinematicFooter />
    </main>
  );
}
