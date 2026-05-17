"use client";

import React from "react";
import { motion } from "framer-motion";

const ITEMS = ["Softcr8ors", "WEB DEVELOPMENT", "UI/UX DESIGN", "VIDEO PRODUCTION", "SOFTWARE DEV", "BRAND IDENTITY", "CREATIVE STUDIO"];

/**
 * MarqueeCTA - Premium Masked Typographic Implementation using Logo Blue & Purple Brand Gradient
 */
export function MarqueeCTA() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white flex items-center border-y border-slate-100/80"
      style={{ height: 'clamp(100px, 18vw, 220px)' }}
    >
      {/* ── CSS Animations ── */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% auto;
          animation: gradient-move 8s ease infinite;
        }
      `}</style>

      {/* ── Layer: Moving Typographic Text Mask with Blue-Purple Brand Gradient ── */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 95, // Smooth, elegant crawl speed
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap flex items-center w-max"
        >
          <div className="flex items-center gap-12 px-6">
            {[...ITEMS, ...ITEMS].map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[45px] md:text-[160px] font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#1620f0] animate-gradient-move font-sans uppercase tracking-tighter">
                  {item}
                </span>
                <SparkleIcon className="scale-75 md:scale-120 opacity-95" />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Premium Edge Highlights ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100/50 z-20" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-50/30 z-20" />
    </section>
  );
}

/**
 * SparkleIcon - High-end geometric 4-point star separator matching Logo brand gradient
 */
export function SparkleIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center mx-4 md:mx-6", className)}>
      <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-14 md:h-14 relative z-10">
        <defs>
          <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1620f0" />
            <stop offset="100%" stopColor="#a906c9" />
          </linearGradient>
        </defs>
        <motion.path
          d="M50 0 C50 35, 35 50, 0 50 C35 50, 50 65, 50 100 C50 65, 65 50, 100 50 C65 50, 50 35, 50 0 Z"
          fill="url(#sparkleGradient)"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [0.9, 1.15, 0.9]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </svg>
    </div>
  );
}

// Simple helper for CN if not imported
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
