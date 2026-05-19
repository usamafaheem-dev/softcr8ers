"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Brain, Zap, Shield, Check } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const countRef = useRef(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * target);

      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AboutSection8() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <section id="about" className="relative bg-white pt-8 pb-16 md:pt-24 md:pb-40 overflow-hidden border-t border-slate-100" ref={containerRef}>
      {/* Subtle Grid Pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3a3a304_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a304_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Story Narrative Section (Elite Diagonal Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-center">

          {/* Left Side (7 Cols): Elegant Narrative Title, Text & Brand Values Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 items-center text-center lg:items-start lg:text-left relative z-20">

            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex w-full justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-xs">
                <span className="text-[#a906c9] animate-spin font-bold text-[9px] md:text-xs" style={{ willChange: "transform" }}>✱</span>
                <span className="text-[9px] md:text-xs font-black tracking-[0.4em] uppercase text-slate-500 ml-0.5">
                  {t("about.badge")}
                </span>
                <span className="text-[#1620f0] animate-spin font-bold text-[9px] md:text-xs ml-0.5" style={{ willChange: "transform" }}>✱</span>
              </div>
            </motion.div>

            {/* General Sans Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-medium text-slate-950 tracking-tight leading-[1.15] font-['General_Sans',sans-serif] text-center lg:text-left"
            >
              {t("about.headline.p1")}<span className="text-[#1620f0] font-semibold">{t("about.headline.highlight")}</span>{t("about.headline.p2")}
            </motion.h2>

            {/* Paragraph Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-xs md:text-base leading-relaxed font-sans max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              {t("about.subtitle")}
            </motion.p>

            {/* Brand Core Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-1 justify-items-center"
            >
              <div className="flex flex-row items-center justify-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 w-full">
                <div className="w-7 h-7 rounded-lg bg-[#1620f0]/10 flex items-center justify-center text-[#1620f0] shrink-0 font-extrabold text-xs">
                  <Check size={14} className="stroke-[3px]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-[11px] md:text-xs font-bold text-slate-950 font-sans">{t("about.val1.title")}</h4>
                  <p className="text-[9px] text-slate-400 font-sans mt-0.5">{t("about.val1.desc")}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 w-full">
                <div className="w-7 h-7 rounded-lg bg-[#a906c9]/10 flex items-center justify-center text-[#a906c9] shrink-0 font-extrabold text-xs">
                  <Check size={14} className="stroke-[3px]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-[11px] md:text-xs font-bold text-slate-950 font-sans">{t("about.val2.title")}</h4>
                  <p className="text-[9px] text-slate-400 font-sans mt-0.5">{t("about.val2.desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side (5 Cols): Majestic Diagonal Triangle Split Collage (Matching User Sketch) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-h-[280px] md:min-h-[400px] relative z-20">
            {/* Ambient Glow */}
            <div className="absolute w-[240px] h-[240px] rounded-full bg-[#f016da]/10 blur-3xl pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#1620f0]/10 blur-3xl pointer-events-none" />

            {/* Unified Landscape Frame Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] aspect-[1.4/1] rounded-3xl overflow-hidden bg-transparent">

              {/* Top-Right Triangle Card */}
              <motion.div
                className="absolute top-0 right-0 w-[97%] h-[97%] group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ x: 6, y: -6 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div
                  className="w-full h-full bg-slate-900 border border-slate-200/20 shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden bg-cover bg-center transition-all duration-500 brightness-95 group-hover:brightness-100"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                    backgroundImage: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80')"
                  }}
                />
                {/* Visual Label overlay */}
                <div className="absolute top-4 right-4 z-20 text-right select-none pointer-events-none">
                  <span className="text-[6px] md:text-[7px] font-black tracking-widest text-[#f016da] bg-black/60 px-1.5 py-0.5 rounded-full uppercase">
                    01 / DESIGN SYSTEM
                  </span>
                </div>
              </motion.div>

              {/* Bottom-Left Triangle Card */}
              <motion.div
                className="absolute bottom-0 left-0 w-[97%] h-[97%] group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ x: -6, y: 6 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div
                  className="w-full h-full bg-slate-950 border border-slate-200/20 shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden bg-cover bg-center transition-all duration-500 brightness-90 group-hover:brightness-100"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
                    backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600')"
                  }}
                />
                {/* Visual Label overlay */}
                <div className="absolute bottom-4 left-4 z-20 text-left select-none pointer-events-none">
                  <span className="text-[6px] md:text-[7px] font-black tracking-widest text-[#1620f0] bg-black/60 px-1.5 py-0.5 rounded-full uppercase">
                    02 / ROBUST CODE
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* ── Four Metrics Cards Section (Compact Cute Size & Light Pink-Purple Tinted BG) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-16">
          {[
            { val: "250+", label: t("about.stat1"), icon: <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-pink-400 group-hover:text-[#a906c9] transition-colors duration-300" /> },
            { val: "777k", label: t("about.stat2"), icon: <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-pink-400 group-hover:text-[#a906c9] transition-colors duration-300" /> },
            { val: "99%", label: t("about.stat3"), icon: <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 text-pink-400 group-hover:text-[#a906c9] transition-colors duration-300" /> },
            { val: "120+", label: t("about.stat4"), icon: <Brain className="w-3 h-3 md:w-3.5 md:h-3.5 text-pink-400 group-hover:text-[#a906c9] transition-colors duration-300" /> }
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl border border-pink-100/20 bg-gradient-to-br from-[#fffdfd] via-[#fff4fc]/40 to-[#f6f2ff]/40 hover:from-white hover:via-[#fff1fb]/65 hover:to-[#f3eefe]/65 p-3 md:p-5 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(240,22,218,0.015)] hover:border-pink-200/50 hover:shadow-[0_12px_40px_rgba(240,22,218,0.03)] transition-all duration-300 min-h-[95px] md:min-h-[125px]"
            >
              {/* Cute Sized Icon Container with Soft Pink-Purple Tint */}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-pink-50/50 border border-pink-100/30 flex items-center justify-center mb-2 md:mb-2.5 group-hover:scale-105 transition-transform duration-300">
                {m.icon}
              </div>

              {/* Centered Counter & General Sans 500 text */}
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-3xl font-medium tracking-tight text-slate-900 block mb-0.5 md:mb-1 leading-none font-['General_Sans',sans-serif]">
                  <Counter value={m.val} />
                </span>
                <span className="text-[7.5px] md:text-[9px] text-slate-400 font-bold uppercase tracking-widest font-sans">
                  {m.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection8;
