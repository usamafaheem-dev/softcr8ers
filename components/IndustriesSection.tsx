"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  LineChart,
  Truck,
  ChevronRight,
} from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
}

const INDUSTRIES: Industry[] = [
  { id: '1', name: 'Healthcare',  description: 'Advanced digital health ecosystems and AI-driven diagnostics for modern patient care.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop', icon: <HeartPulse size={18} />, color: '#a855f7' },
  { id: '2', name: 'E-Commerce',  description: 'Next-generation retail solutions with autonomous intelligence and personalized shopping.', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop', icon: <ShoppingCart size={18} />, color: '#0ea5e9' },
  { id: '3', name: 'Education',   description: 'Scalable platforms for global learning, powered by interactive and immersive technologies.', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop', icon: <GraduationCap size={18} />, color: '#ec4899' },
  { id: '4', name: 'Real Estate', description: 'Immersive property solutions and architectural visualizations for future-ready developments.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', icon: <Building2 size={18} />, color: '#6366f1' },
  { id: '5', name: 'Finance',     description: 'Secure, data-driven economic frameworks and fintech innovations for global markets.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop', icon: <LineChart size={18} />, color: '#10b981' },
  { id: '6', name: 'Logistics',   description: 'Optimized supply chains and autonomous delivery systems through neural network integration.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', icon: <Truck size={18} />, color: '#f97316' },
];

// Split into 3 staggered columns
const col1 = INDUSTRIES.filter((_, i) => i % 3 === 0); // Healthcare, Real Estate
const col2 = INDUSTRIES.filter((_, i) => i % 3 === 1); // E-Commerce, Finance
const col3 = INDUSTRIES.filter((_, i) => i % 3 === 2); // Education, Logistics

export function IndustriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(INDUSTRIES[0].id);

  return (
    <section
      id="industries"
      className="relative w-full py-14 md:py-24 font-sans border-t border-white/5 overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/ya_jo_iamge_bni_ha_202605131629.jpeg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          animate={{ x: [-100, 100, -100], y: [-50, 150, -50] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[5%] top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-purple-500/30 blur-[80px]"
        />
        <motion.div
          animate={{ x: [100, -100, 100], y: [100, -50, 100] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[5%] bottom-[10%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-blue-500/25 blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[#a855f7] animate-spin font-bold">✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-zinc-400">
              INDUSTRIES WE SERVE
            </span>
            <span className="text-[#f43f5e] animate-spin font-bold">✱</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
          >
            Sectors We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Empower.
            </span>
          </motion.h2>
        </div>

        {/* Desktop: 3-col photo grid + list */}
        <div className="hidden md:flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left: Staggered 3-column photo grid */}
          <div className="flex gap-3 md:gap-4 flex-shrink-0">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              {col1.map((industry) => (
                <IndustryPhotoCard
                  key={industry.id}
                  industry={industry}
                  className="w-[130px] h-[155px] md:w-[170px] md:h-[200px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
            {/* Column 2 — offset down */}
            <div className="flex flex-col gap-3 md:gap-4 mt-12 md:mt-16">
              {col2.map((industry) => (
                <IndustryPhotoCard
                  key={industry.id}
                  industry={industry}
                  className="w-[140px] h-[170px] md:w-[185px] md:h-[220px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
            {/* Column 3 — slight offset */}
            <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8">
              {col3.map((industry) => (
                <IndustryPhotoCard
                  key={industry.id}
                  industry={industry}
                  className="w-[135px] h-[160px] md:w-[175px] md:h-[210px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* Right: Industry list */}
          <div className="flex flex-col gap-6 md:gap-8 flex-1 w-full max-w-xl">
            {INDUSTRIES.map((industry) => (
              <IndustryRow
                key={industry.id}
                industry={industry}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Accordion cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {INDUSTRIES.map((industry, i) => {
            const isOpen = hoveredId === industry.id;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'rounded-2xl border overflow-hidden transition-all duration-300',
                  isOpen ? 'border-purple-500/50 bg-white/5' : 'border-white/10 bg-white/[0.03]'
                )}
              >
                <button
                  className="w-full flex items-center gap-3 px-4 py-4 text-left"
                  onClick={() => setHoveredId(isOpen ? null : industry.id)}
                >
                  <div className={cn(
                    'p-2 rounded-xl border flex-shrink-0 transition-all duration-300',
                    isOpen ? 'bg-purple-600 border-purple-400 text-white' : 'bg-white/10 border-white/10 text-zinc-300'
                  )}>
                    {industry.icon}
                  </div>
                  <span className={cn('flex-1 font-semibold text-base', isOpen ? 'text-white' : 'text-zinc-300')}>
                    {industry.name}
                  </span>
                  <ChevronRight className={cn('w-4 h-4 text-zinc-400 transition-transform duration-300', isOpen && 'rotate-90')} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <div className="rounded-xl overflow-hidden mb-3 h-40">
                          <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{industry.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Photo Card ──────────────────────────────────────────────────────────────
function IndustryPhotoCard({
  industry,
  className,
  hoveredId,
  onHover,
}: {
  industry: Industry;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === industry.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={cn(
        'relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-500 shadow-xl border border-white/10',
        className,
        isDimmed ? 'opacity-40 scale-[0.98] grayscale' : 'opacity-100 grayscale-0'
      )}
      onMouseEnter={() => onHover(industry.id)}
      onMouseLeave={() => onHover(industry.id)}
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
      />
      <div className={cn(
        'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500',
        isActive ? 'opacity-100' : 'opacity-50'
      )} />
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-3 text-white z-10"
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg">{industry.icon}</span>
            <span className="font-medium text-xs">{industry.name}</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// ── Industry Row ─────────────────────────────────────────────────────────────
function IndustryRow({
  industry,
  hoveredId,
  onHover,
}: {
  industry: Industry;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === industry.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-300 border-l-2 pl-6 relative',
        isActive ? 'border-purple-500' : 'border-white/10 hover:border-white/30',
        isDimmed ? 'opacity-30' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(industry.id)}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className={cn(
          'p-2 rounded-xl transition-all duration-500',
          isActive
            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
            : 'bg-white/10 text-zinc-400 group-hover:bg-white/20'
        )}>
          {industry.icon}
        </div>
        <h3 className={cn(
          'text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300',
          isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
        )}>
          {industry.name}
        </h3>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              {industry.description}
            </p>
            <div className="mt-3 flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider group/btn">
              Explore Solution
              <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
