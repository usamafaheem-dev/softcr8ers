"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Smartphone, Palette, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  label: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  videoSrc: string;
  poster: string;
  description: string;
  metrics: string;
}

const PROJECTS: Project[] = [
  {
    id: "web",
    label: "Website Engineering",
    icon: Laptop,
    videoSrc: "https://cdn.pixabay.com/video/2021/04/12/70868-537449553_tiny.mp4",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description: "Enterprise SaaS AI nodes & glassmorphic dashboards.",
    metrics: "40% Faster Workflows"
  },
  {
    id: "app",
    label: "Mobile Apps",
    icon: Smartphone,
    videoSrc: "https://cdn.pixabay.com/video/2020/09/25/51086-464303358_tiny.mp4",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "Native shopping companion with autonomous checkout.",
    metrics: "2.5M+ Downloads"
  },
  {
    id: "design",
    label: "UI/UX & Figma",
    icon: Palette,
    videoSrc: "https://cdn.pixabay.com/video/2021/08/17/85375-588725916_tiny.mp4",
    poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
    description: "Atomic style guide with 500+ scalable Figma components.",
    metrics: "12x Dev Efficiency"
  },
  {
    id: "video",
    label: "Video Production",
    icon: Video,
    videoSrc: "https://cdn.pixabay.com/video/2023/11/04/187682-881261309_tiny.mp4",
    poster: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?q=80&w=1200",
    description: "Immersive cinematic promo narratives and motion assets.",
    metrics: "+350% Conversions"
  }
];

const AUTO_PLAY_INTERVAL = 6000;
const ITEM_HEIGHT = 58;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function CircularPortfolio() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + PROJECTS.length) % PROJECTS.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = PROJECTS.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section id="work" className="relative w-full py-16 md:py-24 overflow-hidden bg-white border-t border-slate-100 font-sans">
      {/* Grid background behind viewport */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a3a3a304_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a306_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center w-full mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-[#a906c9] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
                OUR FEATURED WORK
              </span>
              <span className="text-[#1620f0] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-tight max-w-2xl mx-auto font-['General_Sans',sans-serif]"
          >
            Featured <span className="text-[#1620f0]">Projects</span>&nbsp;&nbsp;&amp;&nbsp;&nbsp;Digital Products.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 mt-3 text-sm md:text-base max-w-lg mx-auto font-normal leading-relaxed"
          >
            A curated showcase of our latest software engineering, mobile applications, and pixel-perfect design systems.
          </motion.p>
        </div>

        {/* Feature Carousel Main Container (Sleek Compact Size) */}
        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] flex flex-col lg:flex-row min-h-[460px] lg:h-[460px] border border-slate-200/60 shadow-[0_15px_40px_rgba(0,0,0,0.03)] bg-slate-50/50">
          
          {/* Left panel: Vertical Scrolling Active Chips (Brand Purple & Blue Gradient with Texture) */}
          <div className="w-full lg:w-[38%] min-h-[220px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-10 lg:pl-10 bg-gradient-to-br from-[#1620f0] to-[#a906c9]">
            
            {/* High-End Dotted Matrix Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none opacity-80" />
            
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#1620f0] to-transparent z-40 opacity-70 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#a906c9] to-transparent z-40 opacity-70 pointer-events-none" />
            
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {PROJECTS.map((project, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(PROJECTS.length / 2),
                  PROJECTS.length / 2,
                  distance
                );

                const Icon = project.icon;

                return (
                  <motion.div
                    key={project.id}
                    style={{
                      height: ITEM_HEIGHT,
                      width: "fit-content",
                    }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: isActive ? 1 : 0.65 - Math.abs(wrappedDistance) * 0.15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-3.5 px-5 lg:px-6 py-2.5 rounded-full transition-all duration-500 text-left group border text-xs md:text-sm tracking-tight font-medium font-sans uppercase",
                        isActive
                          ? "bg-white text-[#1620f0] border-white shadow-[0_4px_20px_rgba(255,255,255,0.15)] z-10"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 hover:text-white"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-colors duration-500",
                          isActive ? "text-[#1620f0]" : "text-white/80"
                        )}
                      >
                        <Icon size={16} />
                      </div>

                      <span className="whitespace-nowrap">
                        {project.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right panel: 3D Stack Mockup Display with Loop Video (Sleek Compact Size) */}
          <div className="flex-1 min-h-[380px] lg:h-full relative bg-white flex items-center justify-center py-10 px-6 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-100">
            <div className="relative w-full max-w-[280px] aspect-[4/5] flex items-center justify-center">
              {PROJECTS.map((project, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -75 : isNext ? 75 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-[1.8rem] overflow-hidden border-4 md:border-6 border-white bg-slate-900 origin-center shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
                  >
                    {/* Device Bar / Hardware Header Mockup */}
                    <div className="w-full h-7 bg-slate-50 border-b border-slate-200/80 flex items-center px-3 justify-between shrink-0 select-none z-10 relative">
                      <div className="flex gap-1 items-center">
                        <span className="w-2 h-2 rounded-full bg-red-400/90" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/90" />
                        <span className="w-2 h-2 rounded-full bg-green-400/90" />
                      </div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider font-sans">
                        {project.id} mockup
                      </div>
                      <div className="w-8 h-1" />
                    </div>

                    {/* Active looping stock video with direct DOM autoplay */}
                    <div className="relative w-full h-[calc(100%-1.75rem)] bg-slate-950 overflow-hidden">
                      <video
                        src={project.videoSrc}
                        poster={project.poster}
                        loop
                        muted
                        playsInline
                        ref={(el) => {
                          if (el) {
                            el.muted = true;
                            el.play().catch(() => {});
                          }
                        }}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-700",
                          isActive ? "grayscale-0 blur-0" : "grayscale blur-[1px] brightness-75"
                        )}
                      />

                      {/* Info overlay inside active card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent flex flex-col justify-end pointer-events-none"
                          >
                            <div className="bg-white/10 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] w-fit shadow-sm mb-2 border border-white/15">
                              {index + 1} • {project.metrics}
                            </div>
                            <p className="text-white font-medium text-xs leading-relaxed tracking-tight font-sans">
                              {project.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Header floating Live Tag */}
                      <div
                        className={cn(
                          "absolute top-4 left-4 flex items-center gap-1.5 transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                        <span className="text-white/80 text-[8px] font-bold uppercase tracking-[0.25em] font-mono">
                          Live Active
                        </span>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CircularPortfolio;
