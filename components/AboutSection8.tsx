"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Brain, Zap, Shield, ArrowRight, MousePointer2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { TextAnimate } from "@/registry/magicui/text-animate";

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

  return (
    <section id="about" className="relative bg-white pt-8 pb-24 md:pt-20 md:pb-40 overflow-hidden border-t border-slate-100" ref={containerRef}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3a3a308_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a308_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-[#a855f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
              WHO WE ARE
            </span>
            <span className="text-[#f43f5e] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
          </div>
        </motion.div>

        {/* Story Narrative Section (Compact Balanced Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start w-full"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.2] font-sans">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#f43f5e]">Future of AI</span> Through Human Intuition.
            </h2>

            <div className="mt-4">
              <TextAnimate 
                animation="blurIn" 
                by="word" 
                className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 whitespace-pre-wrap"
                segmentClassName="mr-[0.05em]"
              >
                Softcr8ers bridges the gap between human intuition and autonomous intelligence, engineering ecosystems for global innovators.
              </TextAnimate>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Glass Video Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-[#a855f7] via-[#6366f1] to-[#f43f5e] shadow-[0_0_50px_-12px_rgba(168,85,247,0.25)] overflow-hidden">
              <div className="relative w-full aspect-[1.3/1] md:aspect-[2.1/1] rounded-[2.4rem] overflow-hidden flex flex-col">
                {/* Cinematic Background Video */}
                <video
                  key="mission-video-final"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://ik.imagekit.io/o5vhmyokl/i_need_animted_video_for_202605161054.mp4"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Refined Glass Overlay for Readability (1-2%) */}
                <div className="absolute inset-0 bg-white/5 pointer-events-none backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Mission Statement Content */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <TextAnimate 
                      animation="blurIn" 
                      by="word" 
                      className="text-white text-lg md:text-xl font-medium leading-relaxed tracking-tight italic font-sans max-w-2xl whitespace-pre-wrap"
                      segmentClassName="mr-[0.05em]"
                    >
                      "At Softcreater, our mission is to humanize AI by bridging the gap between human intuition and machine intelligence."
                    </TextAnimate>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <img src="https://i.pravatar.cc/100?u=24" alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-xs font-black text-white uppercase tracking-wider font-sans">REEBA YASEEN</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] font-sans">FOUNDER & CHIEF VISIONARY OFFICER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Four Metrics Cards Section (Below the Story) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-12">
          {[
            { val: "250+", label: "Automations", dot: true, animate: false },
            { val: "777k", label: "Views", dot: false, animate: true, giantCircles: true },
            { val: "99%", label: "Success Rate", dot: true, animate: false },
            { val: "120+", label: "Projects", dot: false, animate: false }
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Clip-Path Container */}
              <div 
                className={cn(
                  "relative p-[1.5px] transition-all duration-700",
                  m.animate ? "bg-gradient-to-br from-[#a855f7] via-[#6366f1] to-[#f43f5e] animate-gradient-xy" : "bg-slate-200/50 group-hover:bg-gradient-to-br group-hover:from-[#a855f7] group-hover:via-[#6366f1] group-hover:to-[#f43f5e]"
                )}
                style={{ 
                  clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                  backgroundSize: m.animate ? "200% 200%" : "auto"
                }}
              >
                <div 
                  className={cn(
                    "relative p-5 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden h-full min-h-[110px] md:min-h-[130px]",
                    m.animate ? "bg-white/80" : "bg-white/95"
                  )}
                  style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
                >
                  {/* Snake-like Giant Moving Circles for 2nd Card */}
                  {m.giantCircles && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ 
                          x: [-50, 50, -30, 50, -50],
                          y: [-30, 30, -10, 30, -30],
                          scale: [1.2, 1.5, 1.1, 1.4, 1.2],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#a855f7]/40 blur-2xl"
                      />
                      <motion.div
                        animate={{ 
                          x: [50, -50, 30, -50, 50],
                          y: [30, -30, 10, -30, 30],
                          scale: [1.4, 1.1, 1.5, 1.2, 1.4],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#6366f1]/30 blur-3xl"
                      />
                    </div>
                  )}

                  {/* Snake/Bouncing Balls Animation for other cards */}
                  {m.dot && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ 
                          x: [-40, 40, -20, 40, -40],
                          y: [-20, 20, -10, 20, -20],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#a855f7]/30 blur-xl"
                      />
                      <motion.div
                        animate={{ 
                          x: [40, -40, 20, -40, 40],
                          y: [20, -20, 10, -20, 20],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#6366f1]/25 blur-2xl"
                      />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col items-center">
                    <span className={cn(
                      "text-3xl md:text-4xl font-bold block mb-1",
                      m.animate ? "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#6366f1]" : "text-slate-950"
                    )}>
                      <Counter value={m.val} />
                    </span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
                      {m.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
