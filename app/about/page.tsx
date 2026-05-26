"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Sparkles, Eye, Target, ShieldCheck, Star, ArrowRight, Award, Globe, Code, Layers, ZapIcon, Zap, HeartHandshake, Rocket, Users, ChevronRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

// Counter component for stats
function StatCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [hasRun, setHasRun] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          let start = 0;
          const end = value;
          if (start === end) return;
          const totalDuration = 1500;
          const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
          const timer = setInterval(() => {
            start += Math.ceil(end / 40);
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasRun]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-fit mx-auto">
      <span className="text-[#a906c9] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
      <span className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1">
        {text}
      </span>
      <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  // Parallax effects for the hero section
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);

  const timelineData = [
    {
      year: "2022",
      title: t("about.journey.1.title"),
      subtitle: t("about.journey.1.sub"),
      description: t("about.journey.1.desc"),
      stats: { value: 12, label: t("about.journey.1.stat") },
      color: "from-purple-500 to-indigo-600"
    },
    {
      year: "2023",
      title: t("about.journey.2.title"),
      subtitle: t("about.journey.2.sub"),
      description: t("about.journey.2.desc"),
      stats: { value: 65, label: t("about.journey.2.stat") },
      color: "from-pink-500 to-purple-600"
    },
    {
      year: "2024",
      title: t("about.journey.3.title"),
      subtitle: t("about.journey.3.sub"),
      description: t("about.journey.3.desc"),
      stats: { value: 180, label: t("about.journey.3.stat") },
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "2025-2026",
      title: t("about.journey.4.title"),
      subtitle: t("about.journey.4.sub"),
      description: t("about.journey.4.desc"),
      stats: { value: 99, label: t("about.journey.4.stat") },
      color: "from-purple-400 to-pink-500"
    },
  ];

  const methodologyCards = [
    { icon: <Code className="w-6 h-6" />, title: t("about.meth.1.title"), desc: t("about.meth.1.desc") },
    { icon: <Target className="w-6 h-6" />, title: t("about.meth.2.title"), desc: t("about.meth.2.desc") },
    { icon: <Rocket className="w-6 h-6" />, title: t("about.meth.3.title"), desc: t("about.meth.3.desc") },
    { icon: <HeartHandshake className="w-6 h-6" />, title: t("about.meth.4.title"), desc: t("about.meth.4.desc") },
    { icon: <ZapIcon className="w-6 h-6" />, title: t("about.meth.5.title"), desc: t("about.meth.5.desc") },
    { icon: <Layers className="w-6 h-6" />, title: t("about.meth.6.title"), desc: t("about.meth.6.desc") },
    { icon: <Users className="w-6 h-6" />, title: t("about.meth.7.title"), desc: t("about.meth.7.desc") },
    { icon: <Star className="w-6 h-6" />, title: t("about.meth.8.title"), desc: t("about.meth.8.desc") },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-800 font-sans relative">
      <Navbar />
      
      {/* CSS for infinite horizontal carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollCarousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * 8 - 1.5rem * 8)); }
        }
        .animate-scroll-carousel {
          display: flex;
          animation: scrollCarousel 40s linear infinite;
        }
      `}} />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white z-0 perspective-1000">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="relative w-full min-h-[100vh] md:min-h-[115vh] rounded-[2.5rem] overflow-hidden bg-slate-950 flex flex-col items-center justify-center pt-20"
        >
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              key="about-hero-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://ik.imagekit.io/o5vhmyokl/Untitled%20design%20(1).mp4?updatedAt=1778758796846" type="video/mp4" />
            </video>
            {/* Removed the black overlay so it's fully bright */}
          </div>

          {/* Centered Text Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-4 text-center -mt-32">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[76px] font-medium tracking-tight leading-tight md:leading-[1.1] text-slate-900 font-sans relative z-10 px-2"
            >
              {t("about.hero.title.p1")} <span className="text-purple-600">{t("about.hero.title.p2")}</span> {t("about.hero.title.p3")} <span className="text-pink-600">{t("about.hero.title.p4")}</span> {t("about.hero.title.p5")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-sm md:text-xl font-medium leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto relative z-10"
            >
              {t("about.hero.desc")}
            </motion.p>

            {/* Premium Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-8 md:mt-12 relative z-10"
            >
              <div className="flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-slate-900 border border-slate-800 text-white text-[11px] md:text-sm font-medium shadow-lg hover:bg-black transition-colors">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-pink-400" />
                {t("about.hero.badge.1")}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-slate-900 border border-slate-800 text-white text-[11px] md:text-sm font-medium shadow-lg hover:bg-black transition-colors">
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                {t("about.hero.badge.2")}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-slate-900 border border-slate-800 text-white text-[11px] md:text-sm font-medium shadow-lg hover:bg-black transition-colors">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-pink-400" />
                {t("about.hero.badge.3")}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ── WHO WE ARE SECTION ── */}
      <section className="relative w-full px-4 -mt-32 md:-mt-48 z-30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-[40px] rounded-[40px] shadow-[0_8px_32px_rgba(168,85,247,0.15)] p-8 sm:p-10 md:p-16 border border-white/50 text-center relative overflow-hidden mt-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-8 relative z-10">{t("about.who.title.p1")} <span className="text-purple-600">{t("about.who.title.p2")}</span> {t("about.who.title.p3")}</h2>
            <div className="space-y-6 relative z-10">
              <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-lg max-w-4xl mx-auto">
                {t("about.who.desc.1")}
              </p>
              <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-lg max-w-4xl mx-auto">
                {t("about.who.desc.2")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR CORE VALUES ── */}
      <section className="py-12 md:py-16 bg-white relative px-4 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10">
          <SectionBadge text={t("about.val.badge")} />

          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mt-2">{t("about.val.title.p1")} <span className="text-purple-600">{t("about.val.title.p2")}</span></h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: t("about.val.1.title"),
              desc: t("about.val.1.desc"),
              icon: <Eye className="w-6 h-6 text-white" />,
              bgClass: "bg-gradient-to-br from-[#5b2c8a] to-[#8c2b7a]"
            },
            {
              title: t("about.val.2.title"),
              desc: t("about.val.2.desc"),
              icon: <Target className="w-6 h-6 text-white" />,
              bgClass: "bg-gradient-to-br from-[#6b31a8] to-[#913280]"
            },
            {
              title: t("about.val.3.title"),
              desc: t("about.val.3.desc"),
              icon: <Star className="w-6 h-6 text-white" />,
              bgClass: "bg-gradient-to-br from-[#5b2c8a] to-[#8c2b7a]"
            },
            {
              title: t("about.val.4.title"),
              desc: t("about.val.4.desc"),
              icon: <ShieldCheck className="w-6 h-6 text-white" />,
              bgClass: "bg-gradient-to-br from-[#6b31a8] to-[#913280]"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${card.bgClass} rounded-[32px] p-8 shadow-xl border border-white/20 flex flex-col items-start group hover:-translate-y-1 transition-transform`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-md">
                {card.icon}
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">{card.title}</h3>
              <p className="text-white/80 font-normal text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      <section className="py-10 md:py-16 bg-slate-50 relative px-4 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-16 relative">
          
          {/* Left: 4 Stats in Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
            {[
              { num: "2007", label: t("about.stats.1") },
              { num: "260+", label: t("about.stats.2") },
              { num: "500+", label: t("about.stats.3") },
              { num: "5", label: t("about.stats.4") }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2 md:gap-3 bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-100/50 rounded-[20px] md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl md:text-[44px] font-medium text-[#8c2b7a] leading-none tracking-tight">{stat.num}</div>
                <p className="text-slate-600 font-normal text-[11px] md:text-[13px] leading-relaxed max-w-full">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right: Laptop/Mobile Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative min-h-0 lg:min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] flex items-center justify-center group"
            >
              <img 
                src="https://ik.imagekit.io/o5vhmyokl/aah_is_may_yar_ya_202605232329.jpeg" 
                alt="Laptop and Mobile" 
                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-12 md:py-16 relative px-4 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="text-center mb-10 max-w-6xl mx-auto">
          <SectionBadge text={t("about.meth.badge")} />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-4 text-slate-900">{t("about.meth.title.p1")} <span className="text-purple-600">{t("about.meth.title.p2")}</span></h2>
        </div>

        <div className="w-full overflow-hidden relative py-6">
           <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
           
           <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible px-4 md:px-8 pb-8 snap-x snap-mandatory md:animate-scroll-carousel md:w-max hide-scrollbar">
             {[...methodologyCards, ...methodologyCards].map((card, idx) => (
                <div 
                  key={idx} 
                  className="snap-center w-[260px] md:w-[280px] bg-purple-100 border border-purple-200 rounded-[32px] p-6 md:p-8 shadow-[0_10px_30px_rgba(168,85,247,0.08)] shrink-0 flex flex-col hover:shadow-[0_15px_40px_rgba(168,85,247,0.18)] hover:-translate-y-2 hover:bg-purple-200/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center mb-4 md:mb-6 text-purple-700 shadow-sm group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed flex-1">{card.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* ── INTERACTIVE COMPANY TIMELINE ── */}
      <section className="py-10 md:py-16 relative px-4 bg-white overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <SectionBadge text={t("about.journey.badge")} />
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-4 text-slate-900">{t("about.journey.title.p1")} <span className="text-purple-600">{t("about.journey.title.p2")}</span></h2>
          </div>

          {/* Horizontal Pills / Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {timelineData.map((item, index) => {
              const isActive = index === activeYearIndex;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYearIndex(index)}
                  className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                    isActive 
                      ? "bg-purple-600 text-white shadow-[0_8px_20px_rgba(168,85,247,0.3)] scale-105" 
                      : "bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-600 border border-slate-200"
                  }`}
                >
                  {item.year}
                </button>
              );
            })}
          </div>

          {/* Content Display Card */}
          <div className="w-full relative min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYearIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-14 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
              >
                {/* Subtle glowing corner */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${timelineData[activeYearIndex].color} opacity-[0.05] blur-[50px] rounded-full`} />

                <div className="flex-1 relative z-10 text-center md:text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100/50 text-purple-700 text-xs font-bold tracking-widest uppercase mb-6 border border-purple-200/50">
                    {timelineData[activeYearIndex].subtitle}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                    {timelineData[activeYearIndex].title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    {timelineData[activeYearIndex].description}
                  </p>
                </div>

                <div className="w-full md:w-1/3 flex justify-center md:justify-end relative z-10 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-10 mt-2 md:mt-0">
                   <div className="flex flex-col items-center md:items-start text-center md:text-left">
                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-4 md:mb-6">
                       <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                     </div>
                     <div className={`text-4xl md:text-6xl font-bold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-br ${timelineData[activeYearIndex].color}`}>
                       <StatCounter value={timelineData[activeYearIndex].stats.value} />
                       {activeYearIndex === 3 ? "%" : "+"}
                     </div>
                     <p className="text-slate-500 text-xs md:text-sm font-medium mt-2 uppercase tracking-wider">{timelineData[activeYearIndex].stats.label}</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative w-full px-4 pt-10 md:pt-16 pb-16 md:pb-24 bg-white z-0 flex justify-center mt-6 border-t border-slate-100">
        
        <div className="relative w-full max-w-6xl min-h-[550px] md:min-h-[500px] rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#35155D] to-[#611b47] border border-purple-400/30 shadow-2xl flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-0 overflow-visible">
          
          {/* Right: Text Content (Moves to Top on Mobile) */}
          <div className="w-full md:w-1/2 relative z-20 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 md:pl-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-4 md:mb-6">
              {t("about.cta.title.p1")} <span className="text-purple-300">{t("about.cta.title.p2")}</span> {t("about.cta.title.p3")}
            </h2>
            <p className="text-purple-200/90 text-sm md:text-lg font-normal mb-8 max-w-[280px] md:max-w-md mx-auto md:mx-0">
              {t("about.cta.desc")}
            </p>
            
            <div className="relative group cursor-pointer inline-block">
              <motion.a
                href="/contact"
                className="relative z-10 inline-flex items-center justify-center rounded-xl px-8 py-3 md:px-10 md:py-4 font-bold font-sans overflow-hidden transition-all duration-500 bg-[#050101] text-white shadow-xl text-sm md:text-base border border-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  {t("about.cta.btn")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
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
                 <div className="w-1 h-1 bg-green-500 rounded-full opacity-50" />
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
