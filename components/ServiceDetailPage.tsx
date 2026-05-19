"use client";
 
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown, LayoutGrid, Globe, Zap, Bot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { InteractiveCanvas } from "@/components/ui/hero-designali";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

// Rolling Text Button component
function RollingTextButton({
  label,
  href = "#",
  variant = "gradient",
  className
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 font-semibold font-sans overflow-hidden transition-all duration-500 cursor-pointer",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-xl hover:shadow-blue-500/10"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-sm shadow-slate-100/50 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
 
export interface ServiceData {
  title: string;
  titleKey?: string;
  tagline: string;
  descKey?: string;
  description: string;
  image: string;
  color: string; // gradient class e.g. "from-blue-500 to-cyan-400"
  iconColor: string; // solid color for icons e.g. "#3b82f6"
  features: string[] | { title: string; description: string }[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  cta: string;
}
 
export function ServiceDetailPage({ data }: { data: ServiceData }) {
  const { t } = useTranslation();
  
  const localizedTitle = data.titleKey ? t(data.titleKey) : data.title;
  const localizedTagline = data.descKey ? t(data.descKey) : data.tagline;

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
 
      {/* Redesigned Premium Full-Bleed Light Hero Section (Matching Home Page Theme) */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center pt-32 pb-16 overflow-hidden bg-white">
        
        {/* Dynamic Background Image with Strong White/Pastel Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt={localizedTitle} 
            className="w-full h-full object-cover scale-105"
          />
          {/* Strong White Frosted Overlay: Makes the image a soft, light pastel background like the home page */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white/95" />
        </div>

        {/* Dynamic Colored Ambient Glows based on the Service's primary color */}
        {/* This gives the background a beautiful, unique soft wash of color for each service */}
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] blur-[150px] rounded-full z-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
          style={{ backgroundColor: data.iconColor }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] blur-[150px] rounded-full z-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
          style={{ backgroundColor: data.iconColor }}
        />

        {/* Interactive Flowing Canvas Layer */}
        <InteractiveCanvas className="absolute inset-0 w-full h-full opacity-40 z-0 pointer-events-none mix-blend-multiply" />
        
        {/* 3D Decor Blocks (Matching Home Page) */}
        <motion.div
          className="absolute top-[15%] left-[5%] w-20 h-20 md:w-32 md:h-32 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[5%] w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
        </motion.div>
 
        {/* Centered Content Wrapper (Title, Button, Badges aligned together) */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-12 mt-4 md:mt-10">
          
          {/* Top: Headline & Tagline */}
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[36px] sm:text-[40px] md:text-[72px] font-medium leading-[1.1] tracking-tight text-[#000000] mb-6 font-sans max-w-4xl"
            >
              {localizedTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: data.iconColor }}>
                {localizedTitle.split(" ").slice(-1)}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#1C0C26CC] text-sm sm:text-base md:text-[18px] max-w-2xl leading-relaxed mb-10 font-medium font-sans px-2"
            >
              {localizedTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <RollingTextButton label="Start Project" href="/contact" variant="gradient" className="px-10 text-[15px] md:text-base h-12" />
            </motion.div>
          </div>

          {/* Bottom: Badges (Features) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center mt-4"
          >
            <p className="text-slate-500 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              {t("services.badge") || "OUR SERVICES"}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl">
              {data.features.slice(0, 6).map((feature, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-1.5 rounded-full border text-[12px] md:text-[13px] font-medium transition-colors shadow-sm backdrop-blur-md cursor-default"
                  style={{ 
                    backgroundColor: `${data.iconColor}1a`, // 10% opacity light background
                    borderColor: `${data.iconColor}99`, // Strong 60% opacity border
                    color: '#1e293b' // Deep slate text for readability
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${data.iconColor}33`; // 20% on hover
                    e.currentTarget.style.borderColor = data.iconColor; // Solid on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${data.iconColor}1a`;
                    e.currentTarget.style.borderColor = `${data.iconColor}99`;
                  }}
                >
                  {typeof feature === 'string' ? feature : feature.title}
                </span>
              ))}
            </div>
          </motion.div>

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
              <span className="text-slate-700 text-sm font-medium leading-relaxed">
                {typeof feature === "string" ? (
                  feature
                ) : (
                  <span>
                    <strong>{feature.title}</strong>: {feature.description}
                  </span>
                )}
              </span>
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
