"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   Card 1 illustration — "Connect Your Data"
   Floating workflow pill + soft gradient blob
───────────────────────────────────────────────────────────── */
function Card1Illustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#a906c9]/50 to-[#f016da]/50 blur-2xl"
      />

      {/* Floating pill */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center gap-2.5 bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-xl border border-white"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1620f0] to-[#f016da] flex items-center justify-center shadow-md">
          <Sparkles size={13} className="text-white" />
        </div>
        <span className="text-slate-800 font-bold text-sm">Learning your workflow</span>
      </motion.div>

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-400/60"
          animate={{
            x: [Math.cos((i * 120 * Math.PI) / 180) * 60, Math.cos(((i * 120 + 180) * Math.PI) / 180) * 60],
            y: [Math.sin((i * 120 * Math.PI) / 180) * 40, Math.sin(((i * 120 + 180) * Math.PI) / 180) * 40],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 2 illustration — "Analyze and Optimize"
   Pass Rate progress bar
───────────────────────────────────────────────────────────── */
function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 100, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setWidth(Math.round(v)),
      });
      return () => controls.stop();
    } else {
      setWidth(0);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-bold text-slate-500">{width}% completed</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#1620f0] to-[#f016da]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function Card2Illustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-violet-400/40 to-purple-400/40 blur-2xl"
      />

      {/* Stat card */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-white/85 backdrop-blur-md rounded-2xl px-7 py-5 shadow-xl border border-white w-52"
      >
        <p className="text-slate-900 font-bold text-lg mb-0.5">Pass Rate</p>
        <ProgressBar />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 3 illustration — "Let AI Work"
   Mini chat inbox UI
───────────────────────────────────────────────────────────── */
function Card3Illustration() {
  const messages = [
    { from: "ai", text: "I've processed the order for you", action: "Review order" },
    { from: "user", text: "Thanks for handling that!", avatar: "https://i.pravatar.cc/100?u=kenji", name: "Kenji" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-pink-300/40 to-purple-300/40 blur-2xl right-4 bottom-4"
      />

      {/* Chat card */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white w-64 overflow-hidden"
      >
        {/* Header */}
        <div className="px-4 pt-3 pb-2 border-b border-slate-100">
          <p className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">Inbox</p>
        </div>

        {/* AI message */}
        <div className="px-4 pt-3 pb-2 flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#050101] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
            <X size={13} className="text-[#a906c9] stroke-[3px]" />
          </div>
          <div>
            <p className="text-[11px] font-black text-slate-800">Co-Pilot</p>
            <p className="text-[11px] text-slate-500 leading-snug">I've processed the order for you</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="mt-2 flex items-center gap-1.5 bg-gradient-to-r from-[#1620f0] to-[#f016da] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
            >
              <Sparkles size={9} /> Review order
            </motion.button>
          </div>
        </div>

        {/* User message */}
        <div className="px-4 pt-1 pb-3 flex items-start gap-2.5">
          <img
            src="https://i.pravatar.cc/100?u=kenji"
            alt="Kenji"
            className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
          />
          <div>
            <p className="text-[11px] font-black text-slate-800">Kenji</p>
            <p className="text-[11px] text-slate-500 leading-snug">Thanks for handling that!</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Step card wrapper
───────────────────────────────────────────────────────────── */
const cards = [
  {
    illustration: <Card1Illustration />,
    title: (
      <>
        Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]">Vision</span>
      </>
    ),
    description: "Tell us what you need. We listen carefully to understand your goals, audience, and business context.",
  },
  {
    illustration: <Card2Illustration />,
    title: (
      <>
        We Design &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f89f7] via-[#1620f0] to-[#a906c9]">Build</span>
      </>
    ),
    description: "Our expert team crafts your solution with precision — from wireframes and design to full-scale development.",
  },
  {
    illustration: <Card3Illustration />,
    title: (
      <>
        Launch &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a906c9] via-[#f016da] to-[#1620f0]">Grow</span>
      </>
    ),
    description: "We go live, measure results, and continuously optimize to ensure your project keeps delivering value.",
  },
];

function ProcessCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 overflow-hidden"
    >
      {/* Illustration area */}
      <div className="relative h-52 md:h-56 w-full overflow-hidden">
        {card.illustration}
      </div>

      {/* Text area */}
      <div className="px-6 py-5 text-center">
        <h3 className="text-slate-900 font-medium text-lg md:text-xl mb-2 tracking-tight font-['General_Sans',sans-serif]">
          {card.title}
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────── */
export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-white py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a3a3a308_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a308_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-full mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
                HOW IT WORKS
              </span>
              <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-3 font-['General_Sans',sans-serif]"
          >
            How We{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#f016da]">Work</span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="absolute bottom-1 left-0 h-[35%] bg-[#1620f0]/15 z-0 rounded-sm"
              />
            </span>{" "}
            With You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal font-['General_Sans',sans-serif]"
          >
            Simple, transparent, and results-driven. From the first conversation to the final delivery — we make every step count.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a href="#" className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/20 bg-[#050101] min-w-[180px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-5 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                  <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-white">Get Started</span>
                  <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-white">Get Started</span>
                </div>
              </div>
            </a>
            <a href="#" className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-sm bg-white border border-slate-200 hover:bg-slate-50 min-w-[180px]">
              <div className="relative h-5 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                  <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">Book a Demo</span>
                  <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">Book a Demo</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ── 3 Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <ProcessCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
