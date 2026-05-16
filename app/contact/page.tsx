import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ContactSection />
    </main>
  );
}
