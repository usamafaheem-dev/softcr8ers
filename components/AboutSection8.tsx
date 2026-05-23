"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
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

// Custom VIP Abstract Icons for Cards (Blue Theme)
const VIPDesign1 = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-3 h-3 rounded-full border-[2px] border-blue-500 absolute -translate-x-0.5 -translate-y-0.5" />
    <div className="w-3 h-3 rounded-full border-[2px] border-cyan-400 absolute translate-x-0.5 translate-y-0.5" />
  </div>
);

const VIPDesign2 = () => (
  <div className="relative w-full h-full flex items-center justify-center rotate-45">
    <div className="w-2.5 h-2.5 border-[2px] border-indigo-500 absolute -translate-x-0.5 -translate-y-0.5" />
    <div className="w-2.5 h-2.5 border-[2px] border-blue-400 absolute translate-x-0.5 translate-y-0.5" />
  </div>
);

const VIPDesign3 = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-0.5">
    <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
    <div className="w-1 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
    <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
  </div>
);

const VIPDesign4 = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-3.5 h-3.5 rounded-full border-t-2 border-r-2 border-blue-500 animate-spin" style={{ animationDuration: '3s' }} />
    <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
  </div>
);

export function AboutSection8() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <section id="about" className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-t border-slate-100" ref={containerRef}>
      {/* Subtle Grid Pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3a3a304_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a304_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* Top Center Pill Badge */}
      <div className="w-full flex justify-center mb-8 md:mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-150 shadow-xs"
        >
          <span className="text-blue-500 animate-spin font-bold text-[10px] md:text-xs" style={{ willChange: "transform" }}>✱</span>
          <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-slate-600 ml-0.5">
            {t("about.badge")}
          </span>
          <span className="text-blue-700 animate-spin font-bold text-[10px] md:text-xs ml-0.5" style={{ willChange: "transform" }}>✱</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Story Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Side (7 Cols): Elegant Left-Aligned Narrative Title & Text */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 items-center lg:items-start text-center lg:text-left relative z-20">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-medium text-slate-950 tracking-tight leading-[1.15]"
            >
              {t("about.headline.p1")}<span className="text-blue-600">{t("about.headline.highlight")}</span>{t("about.headline.p2")}
            </motion.h2>

            {/* Paragraph Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-xs md:text-base leading-relaxed max-w-xl"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>

          {/* Right Side (5 Cols): Two Smaller Floating Mobile Mockups */}
          <div className="lg:col-span-5 flex justify-center items-center w-full min-h-[380px] relative z-20">
            {/* Ambient Glow */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            {/* Mockups Container */}
            <div className="relative w-full max-w-[300px] h-[380px] flex items-center justify-center">
              
              {/* Smartphone Mockup 2: BACKGROUND (Tilted right, behind) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 100, rotate: 6 }}
                whileInView={{ opacity: 1, x: 30, y: -20, rotate: 10 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 45, damping: 15 }}
                className="absolute w-[160px] sm:w-[170px] h-[310px] sm:h-[330px] md:w-[190px] md:h-[360px] bg-[#1e1e24] rounded-[36px] border-[5px] border-[#2A2A2E] shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden z-10 flex flex-col ring-1 ring-white/10"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[50px] md:w-[60px] h-3.5 md:h-4 bg-black rounded-full z-50 flex items-center justify-end px-2">
                   <div className="w-1 h-1 rounded-full bg-[#111]" />
                </div>

                <div className="flex-1 bg-neutral-900 flex flex-col relative rounded-[32px] overflow-hidden">
                  <div className="flex-1 w-full relative overflow-hidden bg-neutral-950">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" 
                      alt="Specialist" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-3 bg-gradient-to-t from-black/80 to-transparent flex flex-col z-10">
                      <span className="text-white text-[9px] md:text-[10px] font-medium">Elena Rostova</span>
                      <span className="text-[7px] md:text-[8px] text-slate-400 mt-0.5 font-normal">softcr8ors Technical Lead</span>
                    </div>
                  </div>
                  <div className="h-14 md:h-16 bg-slate-950 border-t border-neutral-900 p-2.5 md:p-3 flex flex-col justify-between pb-2 md:pb-3">
                    <div className="flex flex-col gap-0.5 md:gap-1">
                      <span className="text-[7px] md:text-[8px] uppercase text-slate-400 font-normal">Estimated Delivery</span>
                      <span className="text-[10px] md:text-xs font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                        <span>14 Working Days</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smartphone Mockup 1: FOREGROUND (Tilted left, rises on scroll) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 180, rotate: -8 }}
                whileInView={{ opacity: 1, x: -30, y: 10, rotate: -6 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 40, damping: 13, delay: 0.1 }}
                className="absolute w-[170px] sm:w-[180px] h-[330px] sm:h-[350px] md:w-[200px] md:h-[380px] bg-[#1e1e24] rounded-[36px] border-[5px] border-[#2A2A2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-20 flex flex-col ring-1 ring-white/10"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[50px] md:w-[60px] h-3.5 md:h-4 bg-black rounded-full z-50 flex items-center justify-end px-2">
                   <div className="w-1 h-1 rounded-full bg-[#111]" />
                </div>

                {/* Auto-Scrolling Homepage (Contact Us to Footer) */}
                <div className="flex-1 bg-white relative rounded-[32px] overflow-hidden">
                  {/* Using standard Tailwind scale utilities to make the iframe responsive without breaking out of the container. 
                      width of phone is 170px (mobile), 180px (sm), 200px (md).
                      170/390 = 0.435 (scale-[0.435])
                      180/390 = 0.461 (scale-[0.46])
                      200/390 = 0.512 (scale-[0.51])
                  */}
                  <div className="absolute top-0 left-0 origin-top-left w-[390px] h-[800px] scale-[0.435] sm:scale-[0.46] md:scale-[0.51]">
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-10 rounded-[32px] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* ── Section Heading for Metrics ── */}
        <div className="w-full flex flex-col items-center text-center mt-12 md:mt-16 mb-12 md:mb-16 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-medium text-slate-900 tracking-tight"
          >
            Years of <span className="text-blue-600">Experience</span> in Digital <span className="text-blue-600">Solutions</span>
          </motion.h3>
        </div>

        {/* ── High-Contrast Alternating Staggered Metrics Cards (Blue Theme, Compact) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto relative z-10">
          {[
            {
              icon: <VIPDesign1 />,
              val: "250+",
              desc: "Innovative digital solutions delivered worldwide.",
              offsetClass: "md:translate-y-6"
            },
            {
              icon: <VIPDesign2 />,
              val: "777k",
              desc: "Active users engaging with our crafted experiences.",
              offsetClass: "md:-translate-y-6"
            },
            {
              icon: <VIPDesign3 />,
              val: "99%",
              desc: "Client satisfaction and retention rate globally.",
              offsetClass: "md:translate-y-6"
            },
            {
              icon: <VIPDesign4 />,
              val: "120+",
              desc: "Enterprise projects scaled with absolute precision.",
              offsetClass: "md:-translate-y-6"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={cn(
                "group flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50/90 to-blue-100/40 border border-blue-200/60 rounded-3xl shadow-[0_4px_20px_rgba(59,130,246,0.05)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] p-5 hover:border-blue-400/50 transition-all duration-300 w-full min-h-[140px] md:min-h-[160px]",
                card.offsetClass
              )}
            >
              {/* Custom VIP Icon Container (Blue Tone) */}
              <div className="w-8 h-8 rounded-xl bg-white border border-blue-200/60 flex items-center justify-center mb-3 shadow-sm group-hover:shadow transition-shadow duration-300">
                {card.icon}
              </div>

              {/* Compact Counter Number */}
              <span className="text-2xl md:text-3xl font-medium tracking-tight text-blue-700 leading-none mb-2">
                <Counter value={card.val} />
              </span>

              {/* VIP About Us Text (Compact) */}
              <p className="text-[10px] md:text-[11px] text-blue-900/60 leading-relaxed font-normal max-w-[140px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection8;
