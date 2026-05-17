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
            <span className="text-[#a906c9] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
              WHO WE ARE
            </span>
            <span className="text-[#2f89f7] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
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
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a906c9] to-[#2f89f7]">Creativity</span> Meets Code. Where Vision Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a906c9] to-[#2f89f7]">Execution.</span>
            </h2>

            <div className="mt-4">
              <TextAnimate 
                animation="blurIn" 
                by="word" 
                className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 whitespace-pre-wrap"
                segmentClassName="mr-[0.05em]"
              >
                Softcr8ers is a full-service digital agency delivering world-class web development, software engineering, UI/UX design, video production, and brand strategy — all under one roof.
              </TextAnimate>
            </div>
          </motion.div>

          {/* Right Column: Corporate Workspace Collaborative Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-[#a906c9] via-[#2f89f7] to-[#1620f0] shadow-[0_0_50px_-12px_rgba(169,6,201,0.2)] overflow-hidden">
              <div className="relative w-full aspect-[1.3/1] md:aspect-[2.1/1] rounded-[2.4rem] overflow-hidden flex flex-col">
                {/* Executive Corporate Office Collaborative Workspace Photo */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                  alt="Softcr8ers Team Workspace"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Refined Glass Overlay for Readability (1-2%) */}
                <div className="absolute inset-0 bg-white/5 pointer-events-none backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Mission Statement Content */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <TextAnimate 
                      animation="blurIn" 
                      by="word" 
                      className="text-white text-lg md:text-xl font-medium leading-relaxed tracking-tight italic font-sans max-w-2xl whitespace-pre-wrap"
                      segmentClassName="mr-[0.05em]"
                    >
                      "We don't just build digital products — we craft experiences that inspire, connect, and drive real business growth for our clients worldwide."
                    </TextAnimate>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <img src="https://randomuser.me/api/portraits/women/18.jpg" alt="Reeba Yaseen - Founder" className="w-full h-full object-cover" />
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

        {/* ── Four Metrics Cards Section (Redesigned - Ultra-Premium Glassmorphism) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-16">
          {[
            { val: "250+", label: "Automations", icon: <Zap className="w-5 h-5 text-amber-500" />, color: "from-amber-500/10 to-transparent" },
            { val: "777k", label: "Views", icon: <Sparkles className="w-5 h-5 text-[#f016da]" />, color: "from-[#f016da]/10 to-transparent" },
            { val: "99%", label: "Success Rate", icon: <Shield className="w-5 h-5 text-emerald-500" />, color: "from-emerald-500/10 to-transparent" },
            { val: "120+", label: "Projects", icon: <Brain className="w-5 h-5 text-[#1620f0]" />, color: "from-[#1620f0]/10 to-transparent" }
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-100/80 bg-white p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-slate-200 transition-all duration-500 min-h-[145px]"
            >
              {/* Background accent glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-bl ${m.color} opacity-40 z-0 pointer-events-none transition-all duration-500 group-hover:scale-110`} />

              {/* Icon */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                {m.icon}
              </div>

              {/* Text */}
              <div className="relative z-10 flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 block mb-0.5 leading-none">
                  <Counter value={m.val} />
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
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
