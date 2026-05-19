"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
  icon?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  cardWidth?: number;
  cardHeight?: number;
  autoAdvance?: boolean;
  intervalMs?: number;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
};

function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  cardWidth = 280,
  cardHeight = 440,
  autoAdvance = true,
  intervalMs = 3000,
  className,
}: CardStackProps<T>) {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const len = items.length;
  const router = useRouter();

  React.useEffect(() => {
    if (!autoAdvance || paused || !len) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % len);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [autoAdvance, intervalMs, len, paused]);

  if (!len) return null;

  const xSpacing = cardWidth * 0.68;

  return (
    <div
      className={cn("relative w-full flex items-center justify-center", className)}
      style={{
        height: cardHeight + 80,
        perspective: "1400px",
        perspectiveOrigin: "50% 50%",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {items.map((item, i) => {
        const off = signedOffset(i, active, len);
        const abs = Math.abs(off);
        const isActive = off === 0;

        if (abs > 3) return null;

        const x = off * xSpacing;
        const rotateY = off * -35;
        const scale = isActive ? 1 : abs === 1 ? 0.84 : abs === 2 ? 0.70 : 0.58;
        const z = isActive ? 0 : abs === 1 ? -100 : abs === 2 ? -220 : -340;
        const opacity = isActive ? 1 : abs === 1 ? 0.55 : abs === 2 ? 0.30 : 0.15;
        const blur = isActive ? 0 : abs === 1 ? 2 : abs === 2 ? 5 : 8;
        const zIndex = 50 - abs * 10;
        const translateY = isActive ? 0 : abs * 14;

        return (
          <motion.div
            key={item.id}
            className="absolute cursor-pointer"
            style={{
              width: cardWidth,
              height: cardHeight,
              zIndex,
              transformStyle: "preserve-3d",
              filter: `blur(${blur}px)`,
            }}
            animate={{ x, y: translateY, scale, rotateY, z, opacity }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={() => {
              if (isActive && item.href) {
                router.push(item.href);
              } else {
                setActive(i);
              }
            }}
          >
            <CarouselCard item={item} active={isActive} />
          </motion.div>
        );
      })}

      {/* Dot indicators */}
      <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === active
                ? "w-6 h-2 bg-purple-500"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}

const icons: Record<string, string> = {
  "Web Engineering": "⚡",
  "Intelligence & AI": "🧠",
  "Custom Software": "🛠️",
  "Mobile Innovation": "📱",
  "SaaS Platforms": "☁️",
  "UI/UX Design": "🎨",
  "Technical SEO": "📈",
  "Gen AI Content": "✨",
};

function CarouselCard({ item, active }: { item: CardStackItem; active: boolean }) {
  const icon = item.icon ?? icons[item.title] ?? "✦";
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative h-full w-full flex flex-col rounded-2xl overflow-hidden group"
      style={{ fontFamily: "'General Sans', 'Inter', sans-serif" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Animated gradient border on hover ── */}
      {/* We use a conic-gradient pseudo layer that rotates */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          padding: "1.5px",
          opacity: hovered ? 1 : 0,
          background:
            "conic-gradient(from var(--border-angle, 0deg), #a855f7, #6366f1, #f43f5e, #a855f7)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: hovered ? "spin-border 2s linear infinite" : "none",
        }}
      />

      {/* ── Strong glass background ── */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: hovered
            ? "1px solid transparent"
            : active
            ? "1px solid rgba(255,255,255,0.18)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: active
            ? "0 8px 40px rgba(168,85,247,0.18), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)"
            : "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      />

      {/* ── Snake / wavy animated gradient blobs ── */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <motion.div
          animate={{ x: ["-30%", "60%", "-30%"], y: ["-20%", "30%", "-20%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
            top: "10%", left: "0%",
          }}
        />
        <motion.div
          animate={{ x: ["60%", "-20%", "60%"], y: ["40%", "-10%", "40%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute w-[160px] h-[160px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
            top: "0%", right: "0%",
          }}
        />
        <motion.div
          animate={{ x: ["-10%", "50%", "-10%"], y: ["60%", "20%", "60%"] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute w-[140px] h-[140px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)",
            bottom: "0%", left: "20%",
          }}
        />
      </div>

      {/* ── Decorative hero images ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <motion.img
          src="/hero-block-1.avif"
          alt=""
          animate={{ x: [0, 8, 0], y: [0, -6, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 w-28 h-28 object-cover rounded-xl"
          style={{ opacity: 0.09, filter: "saturate(1.4) hue-rotate(20deg)" }}
        />
        <motion.img
          src="/hero-block-2.avif"
          alt=""
          animate={{ x: [0, -6, 0], y: [0, 8, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-4 -left-4 w-20 h-20 object-cover rounded-xl"
          style={{ opacity: 0.07, filter: "saturate(1.2) hue-rotate(-10deg)" }}
        />
      </div>

      {/* ── Top gloss line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      />

      {/* ── Image with margin ── */}
      <div className="px-3 pt-3 relative z-10">
        <div className="relative w-full h-44 rounded-xl overflow-hidden">
          {item.imageSrc && (
            <img
              src={item.imageSrc}
              alt={item.title}
              className={cn(
                "w-full h-full object-cover transition-all duration-700",
                active ? "scale-105 opacity-90" : "scale-100 opacity-40"
              )}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 relative z-10">

        {/* Heading only — no icon */}
        <h3
          className={cn(
            "leading-snug mb-2.5 transition-colors duration-300",
            active ? "text-white" : "text-white/55"
          )}
          style={{ fontWeight: 500, fontSize: "1.05rem" }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-xs leading-relaxed line-clamp-3 transition-colors duration-300 flex-1",
            active ? "text-slate-300" : "text-slate-600"
          )}
          style={{ fontWeight: 400 }}
        >
          {item.description}
        </p>

        {/* ── Explore + Arrow — separate, justify-between ── */}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-4 flex items-center justify-between"
          >
            {/* Explore button */}
            <button
              className="group relative overflow-hidden rounded-lg px-4 py-2 bg-[#050101] text-white text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
              <div className="relative h-4 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                  <span className="flex h-4 items-center">{item.ctaLabel ?? "Explore"}</span>
                  <span className="flex h-4 items-center">{item.ctaLabel ?? "Explore"}</span>
                </div>
              </div>
            </button>

            {/* Arrow button */}
            <motion.button
              whileHover={{ scale: 1.12, rotate: 12 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/15 bg-white/8 text-white/70 hover:text-white hover:border-purple-500/60 hover:bg-purple-500/20 transition-all duration-300"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Active bottom glow */}
      {active && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      )}
    </div>
  );
}
