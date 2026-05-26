"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { 
  HeartPulse, ShoppingCart, GraduationCap, Building2, LineChart, Truck, 
  Sparkles, ArrowRight, ShieldCheck, Zap, Star, LayoutGrid, CheckCircle2, ChevronRight 
} from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

import { cn } from "@/lib/utils";

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-fit mx-auto lg:mx-0">
      <span className="text-[#a906c9] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
      <span className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1">
        {text}
      </span>
      <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
    </div>
  );
}

// Rolling Text Button component matching main page design
function RollingTextButton({
  label,
  href,
  variant = "gradient",
  className,
  onClick
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const Tag = href && href !== "#" ? motion.a : motion.button;
  
  return (
    <Tag
      href={href && href !== "#" ? href : undefined}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 font-semibold font-sans overflow-hidden transition-all duration-500 cursor-pointer",
        variant === "gradient"
          ? "bg-[#050101] text-white"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          <span className="flex h-6 items-center justify-center relative z-10 gap-2">
            {label} <ArrowRight className="w-4 h-4 inline-block align-middle" />
          </span>
          <span className="flex h-6 items-center justify-center relative z-10 gap-2">
            {label} <ArrowRight className="w-4 h-4 inline-block align-middle" />
          </span>
        </div>
      </div>
    </Tag>
  );
}

export default function IndustriesPage() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Parallax effects for the hero section
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);

  const industriesData = [
    {
      title: t("ind.fin.title"),
      icon: <LineChart className="w-5 h-5 text-purple-500" />,
      desc: t("ind.fin.desc"),
      metric: t("ind.fin.metric"),
      badge: t("ind.fin.badge"),
      bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop",
      capabilities: [
        t("ind.fin.cap.1"),
        t("ind.fin.cap.2"),
        t("ind.fin.cap.3")
      ]
    },
    {
      title: t("ind.health.title"),
      icon: <HeartPulse className="w-5 h-5 text-pink-500" />,
      desc: t("ind.health.desc"),
      metric: t("ind.health.metric"),
      badge: t("ind.health.badge"),
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      capabilities: [
        t("ind.health.cap.1"),
        t("ind.health.cap.2"),
        t("ind.health.cap.3")
      ]
    },
    {
      title: t("ind.retail.title"),
      icon: <ShoppingCart className="w-5 h-5 text-blue-500" />,
      desc: t("ind.retail.desc"),
      metric: t("ind.retail.metric"),
      badge: t("ind.retail.badge"),
      bgImage: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop",
      capabilities: [
        t("ind.retail.cap.1"),
        t("ind.retail.cap.2"),
        t("ind.retail.cap.3")
      ]
    },
    {
      title: t("ind.real.title"),
      icon: <Building2 className="w-5 h-5 text-emerald-500" />,
      desc: t("ind.real.desc"),
      metric: t("ind.real.metric"),
      badge: t("ind.real.badge"),
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      capabilities: [
        t("ind.real.cap.1"),
        t("ind.real.cap.2"),
        t("ind.real.cap.3")
      ]
    },
    {
      title: t("ind.ed.title"),
      icon: <GraduationCap className="w-5 h-5 text-orange-500" />,
      desc: t("ind.ed.desc"),
      metric: t("ind.ed.metric"),
      badge: t("ind.ed.badge"),
      bgImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
      capabilities: [
        t("ind.ed.cap.1"),
        t("ind.ed.cap.2"),
        t("ind.ed.cap.3")
      ]
    },
    {
      title: t("ind.log.title"),
      icon: <Truck className="w-5 h-5 text-indigo-500" />,
      desc: t("ind.log.desc"),
      metric: t("ind.log.metric"),
      badge: t("ind.log.badge"),
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      capabilities: [
        t("ind.log.cap.1"),
        t("ind.log.cap.2"),
        t("ind.log.cap.3")
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-800 font-sans relative">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white z-0 perspective-1000">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="relative w-full min-h-[100vh] md:min-h-[115vh] rounded-[2.5rem] overflow-hidden bg-slate-50 flex flex-col items-center justify-center pt-24 pb-32 md:pb-40"
        >
          
          {/* Background image & subtle purple/pink overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1727692112857-5113e32a6159?q=80&w=1170&auto=format&fit=crop" 
              alt="Corporate architectural skyscraper reflection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#080B4E]/85 via-[#250230]/88 to-[#750A61]/82 backdrop-blur-[0.5px]" />
          </div>

          {/* Centered Text Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[72px] font-medium tracking-tight leading-[1.1] text-white font-sans px-2 relative z-10 [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]"
            >
              {t("ind.hero.title.p1")} <span className="text-[#a906c9]">{t("ind.hero.title.p2")}</span> <span className="text-[#f016da]">{t("ind.hero.title.p3")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-200 text-sm md:text-xl font-medium leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto relative z-10 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]"
              style={{ color: '#e2e8f0' }}
            >
              {t("ind.hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 md:mt-10 flex justify-center relative z-10"
            >
              <RollingTextButton 
                label={t("ind.hero.btn")} 
                href="#sectors" 
                variant="gradient" 
              />
            </motion.div>

          </div>
        </motion.div>
      </section>

      <section id="sectors" className="relative w-full px-4 pt-20 pb-20 bg-slate-50 z-30 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left: Sticky Description Block */}
            <div className="left-0 top-24 md:sticky md:h-[70vh] flex flex-col justify-center py-6 md:py-12 items-center text-center md:items-start md:text-left">
              <SectionBadge text={t("ind.sec.badge")} />
              <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mt-2 leading-tight">
                {t("ind.sec.title.p1")} <span className="text-purple-600">{t("ind.sec.title.p2")}</span>
              </h2>
              <p className="text-slate-500 font-normal leading-relaxed text-sm md:text-lg mt-6 max-w-md">
                {t("ind.sec.desc")}
              </p>
              <div className="mt-8 flex items-center gap-2 text-purple-600 font-bold text-sm">
                <span>{t("ind.sec.scroll")}</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </div>
            </div>

            {/* Right: Sticky Card Stack */}
            <ContainerScroll className="md:min-h-[260vh] space-y-8 md:space-y-0 py-6 md:py-12 relative">
              {industriesData.map((ind, idx) => (
                <CardSticky
                  key={idx}
                  index={idx}
                  incrementY={50}
                  incrementZ={5}
                  className="w-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-start transition-all duration-300 md:min-h-[440px] md:mb-[80px] last:mb-0 group hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)]"
                >
                  {/* Top Banner with Background Image */}
                  <div className="w-full h-36 relative overflow-hidden shrink-0">
                    <img 
                      src={ind.bgImage} 
                      alt={ind.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#a906c9] text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-sm">
                      {ind.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 text-white text-[10px] font-bold bg-black/50 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-xl shadow-sm">
                      {ind.metric}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 md:p-6 flex flex-col justify-between flex-1 w-full bg-white">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 transition-transform group-hover:scale-105 shrink-0">
                          {ind.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight group-hover:text-purple-600 transition-colors">
                          {ind.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 font-normal text-xs md:text-sm leading-relaxed mb-4">
                        {ind.desc}
                      </p>

                      <div className="h-[1px] w-full bg-slate-100 mb-4" />

                      {/* Capabilities List */}
                      <div className="space-y-2">
                        <span className="text-slate-400 text-[9px] font-black uppercase tracking-wider block">Core Offerings</span>
                        {ind.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-slate-700 text-xs font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 w-full">
                      <a
                        href="/#contact"
                        className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-gradient-to-r from-[#8c2b7a] to-[#a906c9] hover:from-[#a906c9] hover:to-[#f016da] text-white hover:shadow-md transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                      >
                        Build for {ind.title.split(" ")[0]} <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </CardSticky>
              ))}
            </ContainerScroll>

          </div>
        </div>
      </section>

      {/* ── ADVANTAGE SECTION ── */}
      <section className="py-20 md:py-28 bg-white relative px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionBadge text={t("ind.adv.badge")} />
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mt-2 leading-tight">{t("ind.adv.title.p1")} <span className="text-purple-600">{t("ind.adv.title.p2")}</span> {t("ind.adv.title.p3")}</h2>
            <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-lg mt-6 max-w-xl">
              {t("ind.adv.desc")}
            </p>

            <div className="space-y-6 mt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              {[
                { title: t("ind.adv.1.title"), desc: t("ind.adv.1.desc") },
                { title: t("ind.adv.2.title"), desc: t("ind.adv.2.desc") },
                { title: t("ind.adv.3.title"), desc: t("ind.adv.3.desc") }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 font-normal text-xs md:text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative min-h-0 lg:min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[500px] flex items-center justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering teamwork illustration" 
                className="w-full h-auto rounded-[32px] shadow-lg border border-slate-100"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative w-full px-4 pt-10 md:pt-16 pb-16 md:pb-24 bg-white z-0 flex justify-center mt-6 border-t border-slate-100 overflow-hidden">
        
        <div className="relative w-full max-w-6xl min-h-[550px] md:min-h-[500px] rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#35155D] to-[#611b47] border border-purple-400/30 shadow-2xl flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-0 overflow-hidden md:overflow-visible">
          
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 relative z-20 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 md:pl-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-4 md:mb-6">
              {t("ind.cta.title.p1")} <span className="text-purple-300">{t("ind.cta.title.p2")}</span> {t("ind.cta.title.p3")}
            </h2>
            <p className="text-purple-200/90 text-sm md:text-lg font-normal mb-8 max-w-[280px] md:max-w-md mx-auto md:mx-0">
              {t("ind.cta.desc")}
            </p>
            
            <div className="relative group cursor-pointer inline-block">
              <motion.a
                href="/#contact"
                className="relative z-10 inline-flex items-center justify-center rounded-xl px-8 py-3 md:px-10 md:py-4 font-bold font-sans overflow-hidden transition-all duration-500 bg-[#050101] text-white shadow-xl text-sm md:text-base border border-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  {t("ind.cta.btn")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Left: Mobile Mockup */}
          <div className="w-full md:w-1/2 flex justify-center relative z-10 h-[280px] md:h-full mt-10 md:mt-0 order-2 md:order-1">
             <motion.div 
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 1, type: "spring", bounce: 0.2 }}
               className="absolute top-4 md:top-1/2 md:-translate-y-1/2 w-[220px] md:w-[300px] h-[450px] md:h-[550px] bg-[#1e1e24] rounded-[36px] md:rounded-[44px] border-[8px] md:border-[10px] border-[#2A2A2E] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform rotate-[6deg] hover:rotate-[3deg] transition-transform duration-500 z-30 overflow-hidden ring-1 ring-white/10"
             >
               {/* iPhone Dynamic Island */}
               <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-black rounded-full z-50 flex justify-between items-center px-1.5">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-800 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-50" />
               </div>
               
               <div className="flex-1 bg-white relative rounded-[28px] md:rounded-[32px] overflow-hidden h-full w-full">
                  <div className="absolute top-0 left-0 origin-top-left w-[390px] h-[800px] scale-[0.56] md:scale-[0.71]">
                    <motion.div
                      animate={{ y: [-3200, -4200, -3200] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-[5000px]"
                    >
                      <iframe 
                        src="/" 
                        className="w-full h-[5000px] border-none pointer-events-none scale-[1.01]" 
                        scrolling="no" 
                        tabIndex={-1} 
                      />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-pink-500/10 pointer-events-none z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
