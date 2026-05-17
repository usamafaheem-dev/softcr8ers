"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhotoGallery } from "@/components/ui/gallery";

export function CircularPortfolio() {
  return (
    <section id="work" className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#fff6fe] via-[#fdf2fc] to-white border-t border-slate-100 font-sans">
      {/* Subtle Grid Pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a3a3a304_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a306_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* Floating 3D Cubes matching Hero Section */}
      <motion.div
        className="absolute top-[8%] right-[-3%] md:right-[5%] w-20 h-20 md:w-36 md:h-36 pointer-events-none opacity-20 md:opacity-30 z-0"
        animate={{ y: [0, 25, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain blur-[0.5px]" />
      </motion.div>
      <motion.div
        className="absolute bottom-[8%] left-[-3%] md:left-[5%] w-20 h-20 md:w-36 md:h-36 pointer-events-none opacity-20 md:opacity-30 z-0"
        animate={{ y: [0, -25, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain blur-[0.5px]" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center w-full mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-pink-100 shadow-sm">
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
            Our <span className="text-[#1620f0]">Work</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 mt-3 text-sm md:text-base max-w-lg mx-auto font-normal leading-relaxed font-sans"
          >
            Explore a curated playground of our creative software engineering, native mobile apps, and design systems.
          </motion.p>
        </div>

        {/* Dynamic Drag-and-Drop Photo Showcase Sandbox */}
        <div className="w-full relative z-20">
          <PhotoGallery />
        </div>

      </div>
    </section>
  );
}

export default CircularPortfolio;
