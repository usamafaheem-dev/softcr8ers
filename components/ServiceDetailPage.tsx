"use client";
 
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Link from "next/link";
 
export interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  image: string;
  color: string; // gradient class e.g. "from-blue-500 to-cyan-400"
  iconColor: string; // solid color for icons e.g. "#3b82f6"
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  cta: string;
}
 
export function ServiceDetailPage({ data }: { data: ServiceData }) {
  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
 
      {/* Redesigned Hero Section - 100vh Rounded Floating Card Aesthetic */}
      <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white">
        {/* Rounded Wrapper */}
        <div className="relative w-full h-[100vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-900/50 bg-slate-950 flex flex-col justify-center items-center">
          
          {/* Background Image with Cinematic Gradient Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover opacity-35 filter brightness-[0.7] contrast-[1.1] scale-105 transition-all duration-700"
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/70 to-slate-950 z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(2,2,5,0.85)_100%)] z-0" />
          </div>
 
          {/* 3D Decor Blocks (matching home page hero) */}
          <motion.div
            className="absolute top-[20%] left-[-5%] md:left-[5%] w-20 h-20 md:w-44 md:h-44 pointer-events-none opacity-20 md:opacity-30 z-10"
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] right-[-5%] md:right-[5%] w-24 h-24 md:w-48 md:h-48 pointer-events-none opacity-20 md:opacity-30 z-10"
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
          </motion.div>
 
          {/* Centered Content Layer */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white text-[11px] font-extrabold tracking-[0.25em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f016da] animate-pulse shrink-0" />
              <span>Our Services</span>
              <Sparkles className="w-3.5 h-3.5 text-[#1620f0] animate-pulse shrink-0" />
            </motion.div>
 
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight mb-6 bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-sans`}
            >
              {data.title}
            </motion.h1>
 
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-200 text-lg sm:text-xl md:text-2xl font-normal max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-sans"
            >
              {data.tagline}
            </motion.p>
 
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group relative flex items-center justify-center rounded-xl px-10 py-3.5 font-semibold text-white bg-slate-900 border border-white/10 overflow-hidden shadow-xl hover:shadow-[#1620f0]/20 transition-all duration-500 w-full sm:w-auto cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative flex items-center gap-2 z-10">
                  Start Project
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="#details"
                className="px-10 py-3.5 rounded-xl font-semibold bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
              >
                Explore Details
              </a>
            </motion.div>
          </div>
 
          {/* Scroll Down Hint */}
          <div className="absolute bottom-6 flex flex-col items-center gap-1 text-white/40 text-[10px] font-extrabold uppercase tracking-[0.2em] animate-bounce select-none pointer-events-none">
            <span>Scroll to Discover</span>
            <ChevronDown size={14} />
          </div>
 
        </div>
      </section>
 
      {/* Description */}
      <section id="details" className="py-24 px-4 max-w-4xl mx-auto scroll-mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed text-center"
        >
          {data.description}
        </motion.p>
      </section>
 
      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">What We Deliver</h2>
          <p className="text-slate-400 text-base">Core capabilities included in every engagement</p>
        </motion.div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all"
            >
              <CheckCircle2
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: data.iconColor }}
              />
              <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* Benefits */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Why Choose Us</h2>
          <p className="text-slate-400 text-base">The advantages that set our work apart</p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md hover:bg-white transition-all group"
            >
              <div
                className={`text-4xl font-black bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-3`}
              >
                0{i + 1}
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* Process */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Our Process</h2>
          <p className="text-slate-400 text-base">How we take your idea from concept to launch</p>
        </motion.div>
 
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
 
          <div className="flex flex-col gap-8">
            {data.process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${data.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {p.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-900 font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">{data.cta}</h2>
          <p className="text-slate-400 mb-10 text-base">Let's build something extraordinary together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-base shadow-lg transition-all hover:scale-105 active:scale-95 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899, #a855f7)" }}
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
 
      <CinematicFooter />
    </main>
  );
}
