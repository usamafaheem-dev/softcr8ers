"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const VIDEO_SRC = "https://ik.imagekit.io/o5vhmyokl/i_need_animted_video_for_202605161054.mp4";

const ITEMS = ["SOFTCR8ERS", "WEB DEVELOPMENT", "UI/UX DESIGN", "VIDEO PRODUCTION", "SOFTWARE DEV", "BRAND IDENTITY", "CREATIVE STUDIO"];
const SEP = "  ✦  ";

/**
 * MarqueeCTA - Premium Glassmorphism Implementation
 */
export function MarqueeCTA() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const marqueeText = (ITEMS.join(SEP) + SEP).repeat(2);

  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ height: 'clamp(100px, 18vw, 220px)' }}>

      {/* ── Layer 1: The Video (Base) ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Layer 2: The Mask (Ultra-Subtle 2% Glass Overlay + Black Text) ── */}
      <div className="absolute inset-0 z-10 bg-white/98 backdrop-blur-[2px] mix-blend-screen pointer-events-none flex items-center border-y border-white/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 120, // Elegant, slow crawl
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap flex items-center w-max"
        >
          <div className="flex items-center gap-12 px-6">
            {[...ITEMS, ...ITEMS].map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[70px] md:text-[160px] font-medium  leading-none text-black font-sans uppercase">
                  {item}
                </span>
                <OrbitalIcon className="scale-75 md:scale-150 opacity-80" />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Minimalist Edge Highlights ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100/50 z-20" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-50/30 z-20" />
    </section>
  );
}

/**
 * OrbitalIcon - The colorful atom/orbital icon requested by the user.
 */
export function OrbitalIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16", className)}>
      <div className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50" />
      <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 relative z-10">
        <defs>
          <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <path
          d="M50 20 C65 20, 80 35, 80 50 C80 65, 65 80, 50 80 C35 80, 20 65, 20 50 C20 35, 35 20, 50 20"
          fill="none"
          stroke="url(#orbitalGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-20"
        />
        <motion.path
          d="M50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 50 Q20 20 50 20"
          fill="none"
          stroke="url(#orbitalGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            pathLength: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.circle
          cx="50" cy="50" r="4"
          fill="url(#orbitalGradient)"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M30 30 L70 70 M70 30 L30 70"
          stroke="url(#orbitalGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

// Simple helper for CN if not imported
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
