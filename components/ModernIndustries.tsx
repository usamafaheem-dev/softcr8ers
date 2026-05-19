"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  HeartPulse, ShoppingCart, GraduationCap,
  Building2, LineChart, Truck, ChevronRight,
} from 'lucide-react';
import { useTranslation } from "@/context/LanguageContext";

export interface Industry {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  icon: React.ReactNode;
  color: string;
}

const INDUSTRIES: Industry[] = [
  { id: '1', nameKey: 'ind.1.name', descKey: 'ind.1.desc', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop', icon: <HeartPulse size={18} />, color: '#a855f7' },
  { id: '2', nameKey: 'ind.2.name', descKey: 'ind.2.desc', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop', icon: <ShoppingCart size={18} />, color: '#0ea5e9' },
  { id: '3', nameKey: 'ind.3.name', descKey: 'ind.3.desc', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop', icon: <GraduationCap size={18} />, color: '#ec4899' },
  { id: '4', nameKey: 'ind.4.name', descKey: 'ind.4.desc', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', icon: <Building2 size={18} />, color: '#6366f1' },
  { id: '5', nameKey: 'ind.5.name', descKey: 'ind.5.desc', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', icon: <LineChart size={18} />, color: '#10b981' },
  { id: '6', nameKey: 'ind.6.name', descKey: 'ind.6.desc', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', icon: <Truck size={18} />, color: '#f97316' },
];

const col1 = INDUSTRIES.filter((_, i) => i % 3 === 0);
const col2 = INDUSTRIES.filter((_, i) => i % 3 === 1);
const col3 = INDUSTRIES.filter((_, i) => i % 3 === 2);

const snakePath = [
  { x: '10%', y: '15%' }, { x: '80%', y: '10%' }, { x: '90%', y: '50%' },
  { x: '20%', y: '60%' }, { x: '10%', y: '85%' }, { x: '75%', y: '90%' }, { x: '10%', y: '15%' },
];

export default function ModernIndustries() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(INDUSTRIES[0].id);

  return (
    <section id="industries" className="relative w-full py-12 md:py-28 overflow-hidden bg-[#050508] font-sans border-t border-white/5">

      {/* ── Animated hero blocks ── */}
      <motion.img
        src="/hero-block-1.avif"
        alt=""
        className="absolute pointer-events-none z-0 w-48 md:w-72 opacity-20"
        style={{ top: '8%', left: '-4%' }}
        animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/hero-block-2.avif"
        alt=""
        className="absolute pointer-events-none z-0 w-44 md:w-64 opacity-20"
        style={{ bottom: '8%', right: '-3%' }}
        animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Snake gradient orb 1 ── */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(169,6,201,0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ left: snakePath.map(p => p.x), top: snakePath.map(p => p.y) }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1] }}
      />
      {/* ── Snake gradient orb 2 ── */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(169,6,201,0.15) 0%, transparent 70%)',
          filter: 'blur(55px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ left: [...snakePath].reverse().map(p => p.x), top: [...snakePath].reverse().map(p => p.y) }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1] }}
      />

      {/* ── Wavy lines ── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.1]">
        <svg width="100%" height="100%" viewBox="0 0 1600 1000" fill="none">
          <defs>
            <linearGradient id="sg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a906c9" />
              <stop offset="100%" stopColor="#a906c9" />
            </linearGradient>
          </defs>
          {[200, 500, 800].map((y, i) => (
            <motion.path key={i}
              animate={{
                d: [
                  `M-100 ${y} Q 400 ${y - 80} 800 ${y} T 1700 ${y}`,
                  `M-100 ${y} Q 400 ${y + 80} 800 ${y} T 1700 ${y}`,
                  `M-100 ${y} Q 400 ${y - 80} 800 ${y} T 1700 ${y}`,
                ]
              }}
              transition={{ duration: 14 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
              d={`M-100 ${y} Q 400 ${y - 80} 800 ${y} T 1700 ${y}`}
              stroke="url(#sg)" strokeWidth="1" fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center w-full mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
              <span className="text-[#a906c9] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-300 ml-1">{t("industries.badge")}</span>
              <span className="text-[#a906c9] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-['General_Sans',sans-serif]">
            {t("industries.title.p1")}
            <span className="text-[#a906c9]">{t("industries.title.highlight")}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-3 text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-normal font-['General_Sans',sans-serif]">
            {t("industries.subtitle")}
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

          {/* Left: photo grid */}
          <div className="flex gap-2 md:gap-3 flex-shrink-0 justify-center">
            <div className="flex flex-col gap-2 md:gap-3">
              {col1.map(ind => <IndustryPhotoCard key={ind.id} industry={ind} className="w-[95px] h-[115px] md:w-[125px] md:h-[150px]" hoveredId={hoveredId} onHover={setHoveredId} />)}
            </div>
            <div className="flex flex-col gap-2 md:gap-3 mt-10 md:mt-12">
              {col2.map(ind => <IndustryPhotoCard key={ind.id} industry={ind} className="w-[105px] h-[125px] md:w-[140px] md:h-[168px]" hoveredId={hoveredId} onHover={setHoveredId} />)}
            </div>
            <div className="flex flex-col gap-2 md:gap-3 mt-5 md:mt-6">
              {col3.map(ind => <IndustryPhotoCard key={ind.id} industry={ind} className="w-[100px] h-[120px] md:w-[132px] md:h-[158px]" hoveredId={hoveredId} onHover={setHoveredId} />)}
            </div>
          </div>

          {/* Right: industry list — fixed height rows, no layout shift */}
          <div className="flex flex-col w-full max-w-md">
            {INDUSTRIES.map(ind => (
              <IndustryRow key={ind.id} industry={ind} hoveredId={hoveredId} onHover={setHoveredId} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Photo Card ───────────────────────────────────────────────────────────────
function IndustryPhotoCard({ industry, className, hoveredId, onHover }: {
  industry: Industry; className: string; hoveredId: string | null; onHover: (id: string | null) => void;
}) {
  const { t } = useTranslation();
  const isActive = hoveredId === industry.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={cn(
        'relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-500 shadow-lg border border-white/10',
        className,
        isDimmed ? 'opacity-30 grayscale' : 'opacity-100 grayscale-0',
      )}
      onMouseEnter={() => onHover(industry.id)}
      onMouseLeave={() => onHover(industry.id)}
    >
      <img src={industry.image} alt={t(industry.nameKey)}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
      />
      <div className={cn('absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500', isActive ? 'opacity-100' : 'opacity-60')} />
      {isActive && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-3 text-white z-10">
          <div className="flex items-center gap-1.5">
            <span className="p-1 bg-white/20 backdrop-blur-md rounded-lg">{industry.icon}</span>
            <span className="font-semibold text-xs">{t(industry.nameKey)}</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// ── Industry Row — NO layout shift, fixed min-height ─────────────────────────
function IndustryRow({ industry, hoveredId, onHover, t }: {
  industry: Industry; hoveredId: string | null; onHover: (id: string | null) => void; t: any;
}) {
  const isActive = hoveredId === industry.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer border-l-2 pl-5 py-4 transition-colors duration-300',
        isActive ? 'border-[#a906c9]' : 'border-white/10 hover:border-white/30',
        isDimmed ? 'opacity-30' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(industry.id)}
    >
      {/* Title row — always visible, never moves */}
      <div className="flex items-center gap-3">
        <div className={cn(
          'p-2 rounded-xl transition-all duration-300 flex-shrink-0 flex items-center justify-center',
          isActive 
            ? 'bg-[#a906c9] text-white shadow-md shadow-[#a906c9]/10' 
            : 'bg-white/10 text-zinc-400',
        )}>
          {industry.icon}
        </div>
        <h3 className={cn(
          'text-base md:text-lg font-semibold tracking-tight transition-colors duration-300',
          isActive ? 'text-white' : 'text-zinc-300',
        )}>
          {t(industry.nameKey)}
        </h3>
      </div>

      {/* Description — slides in below, no height jump on title */}
      <motion.div
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-zinc-400 text-sm leading-relaxed max-w-md mt-2 font-normal font-['General_Sans',sans-serif]">
          {t(industry.descKey)}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[#a906c9] hover:text-[#a906c9]/80 transition-colors text-xs uppercase tracking-widest font-bold">
          {t("industries.explore")} <ChevronRight size={12} />
        </div>
      </motion.div>
    </div>
  );
}
