"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { MapPin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

import { CinematicFooter } from "@/components/ui/motion-footer";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-['General_Sans',sans-serif] relative overflow-x-hidden selection:bg-[#a906c9] selection:text-white">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white z-0 perspective-1000">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="relative w-full min-h-[100vh] md:min-h-[110vh] rounded-[2.5rem] overflow-hidden bg-slate-50 flex flex-col items-center justify-center pt-24 pb-32 md:pb-40"
        >
          {/* Background image & brand overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Softcr8ors team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#080B4E]/75 via-[#250230]/65 to-[#750A61]/55 backdrop-blur-[0.5px]" />
          </div>

          {/* Centered Text Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[72px] font-medium tracking-tight leading-[1.1] text-white px-2 relative z-10 [text-shadow:0_4px_24px_rgba(0,0,0,0.5)] font-['General_Sans',sans-serif]"
            >
              {t("contact.page.hero.p1")}<span className="text-[#f016da]">{t("contact.page.hero.build")}</span>{t("contact.page.hero.p2")}<span className="text-[#a906c9]">{t("contact.page.hero.extraordinary")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-200 text-sm md:text-xl font-normal leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto relative z-10 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] font-['General_Sans',sans-serif]"
              style={{ color: '#e2e8f0' }}
            >
              {t("contact.page.hero.desc")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── FORM SECTION ── */}
      <div className="relative z-20 w-full pt-0 pb-16 px-2 md:px-4">
        <ContactSection variant="contactPage" />
      </div>

      {/* ── READY TO GET POPULAR SERVICES ── */}
      <section className="w-full bg-slate-50 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden font-['General_Sans',sans-serif]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Contact List */}
          <div className="flex-1 w-full flex flex-col space-y-12">
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827] tracking-tight leading-tight">
              {t("contact.page.info.title.p1")}<br />{t("contact.page.info.title.p2")}
            </h2>

            <div className="flex flex-col space-y-10">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1620f0] via-[#a906c9] to-[#f016da] flex items-center justify-center text-white shadow-lg shadow-purple-500/30 shrink-0">
                  <MapPin className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-medium text-[#111827]">{t("contact.page.info.address")}</h4>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm md:text-base">
                    {t("contact.page.info.address.val")}
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1620f0] via-[#a906c9] to-[#f016da] flex items-center justify-center text-white shadow-lg shadow-purple-500/30 shrink-0">
                  <Mail className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-medium text-[#111827]">{t("contact.page.info.email")}</h4>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm md:text-base">
                    {t("contact.page.info.email.val")}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="mt-1 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1620f0] via-[#a906c9] to-[#f016da] flex items-center justify-center text-white shadow-lg shadow-purple-500/30 shrink-0">
                  <Phone className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-medium text-[#111827]">Phone</h4>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm md:text-base">
                    +923344447957
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Featured Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <img 
              src="https://ik.imagekit.io/o5vhmyokl/Change_green_b_with_purple_202605260854.jpeg" 
              alt="Professional Developer" 
              className="w-full max-w-[500px] h-auto object-contain relative z-10 mix-blend-multiply"
            />
          </div>
          
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="w-full h-[400px] md:h-[500px] relative bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.728072481358!2d74.33644835!3d31.505436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a28532f6b%3A0xc3c94d07817eb660!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716738910000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.3] contrast-105"
        />
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <section className="w-full max-w-7xl mx-auto bg-[#050101] py-16 px-6 relative font-['General_Sans',sans-serif] rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0]/10 via-[#a906c9]/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Ready to Elevate Your<br />Business with Expert<br className="hidden md:block"/> Developers?
            </h2>
            <p className="text-[#f016da] font-medium text-sm md:text-base tracking-wide">
              10+ Years Delivering Exceptional Web, Mobile, AI, and SaaS Solutions
            </p>
          </div>
          <div className="shrink-0 mt-6 md:mt-0 relative group">
            <button className="relative px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden shadow-lg border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">Get a Free Consultation <span>&rarr;</span></span>
            </button>
          </div>
        </div>
        </section>
      </div>

      {/* ── FOOTER SECTION ── */}
      <CinematicFooter />
    </main>
  );
}
