"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. OPTIMIZED THEME-ADAPTIVE INLINE STYLES — Softcreater brand
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'General Sans', 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: rgba(255,255,255,0.06);
  --pill-bg-2: rgba(255,255,255,0.02);
  --pill-shadow: rgba(0,0,0,0.4);
  --pill-highlight: rgba(255,255,255,0.12);
  --pill-inset-shadow: rgba(0,0,0,0.6);
  --pill-border: rgba(255,255,255,0.10);
  --pill-bg-1-hover: rgba(255,255,255,0.12);
  --pill-bg-2-hover: rgba(255,255,255,0.04);
  --pill-border-hover: rgba(168,85,247,0.5);
  --pill-shadow-hover: rgba(168,85,247,0.15);
  --pill-highlight-hover: rgba(255,255,255,0.20);
}

@keyframes footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}
@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 5px rgba(239,68,68,0.4)); }
  15%, 45% { transform: scale(1.2);  filter: drop-shadow(0 0 10px rgba(239,68,68,0.7)); }
  30%      { transform: scale(1); }
}

.animate-footer-breathe        { animation: footer-breathe 10s ease-in-out infinite alternate; will-change: transform, opacity; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 50s linear infinite; will-change: transform; }
.animate-footer-heartbeat      { animation: footer-heartbeat 2s cubic-bezier(0.25,1,0.5,1) infinite; }

.footer-bg-grid {
  background-size: 80px 80px;
  background-image:
    linear-gradient(to right,  rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 40%, black 60%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 40%, black 60%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(168,85,247,0.15)  0%,
    rgba(99,102,241,0.10) 40%,
    transparent 75%
  );
  filter: blur(60px);
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, background, border-color, box-shadow;
}
.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px var(--pill-shadow-hover), inset 0 1px 1px var(--pill-highlight-hover);
  color: #fff;
}

.footer-giant-bg-text {
  font-size: 13vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.05);
  background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
  will-change: transform, opacity;
}

.footer-8-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #f43f5e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(168,85,247,0.2));
}

.footer-cta-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #a855f7 100%);
  background-size: 200% auto;
  animation: footer-cta-shimmer 4s ease infinite;
  will-change: background-position;
}
@keyframes footer-cta-shimmer {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.footer-link-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #f43f5e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE — Performance Tuned
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.03,
            ease: "power2.out",
            duration: 0.5,
          });
        };
        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1,
            ease: "elastic.out(1, 0.4)",
            duration: 1,
          });
        };
        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MARQUEE ITEM
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>AI Agents Built for Scale</span>
    <span className="text-purple-400/50">✦</span>
    <span>Workflow Automation</span>
    <span className="text-indigo-400/50">✦</span>
    <span>Custom Software</span>
    <span className="text-purple-400/50">✦</span>
    <span>UI/UX Excellence</span>
    <span className="text-indigo-400/50">✦</span>
    <span>Expert IT Solutions</span>
    <span className="text-purple-400/50">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// 4. MAIN CINEMATIC FOOTER — Performance Optimized
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef    = useRef<HTMLDivElement>(null);
  const giantTextRef  = useRef<HTMLDivElement>(null);
  const headingRef    = useRef<HTMLHeadingElement>(null);
  const contentRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "15vh", opacity: 0 },
        {
          y: "0vh", opacity: 1, ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );

      // Staggered content reveal
      gsap.fromTo(
        [headingRef.current, contentRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1.5,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = ["About", "Services", "Testimonials", "Contact"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* ── MOBILE: optimized animated footer ── */}
        <div className="md:hidden relative w-full text-white cinematic-footer-wrapper py-14 px-5 flex flex-col items-center gap-8 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 40%, #0f0a1f 70%, #0a0a0f 100%)" }}
        >
          {/* Aurora */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none opacity-60" />

          {/* Marquee */}
          <div className="absolute top-6 left-0 w-full overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-3 z-10 -rotate-2 scale-110">
            <div className="flex w-max animate-footer-scroll-marquee text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
              <MarqueeItem /><MarqueeItem />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center relative z-10 mt-10">
            <h2 className="text-[2rem] font-black footer-text-glow tracking-tighter leading-tight mb-3">
              Let&apos;s <span className="footer-link-gradient">Build</span><br />Together.
            </h2>
            <p className="text-white/40 text-sm max-w-[240px] mx-auto leading-relaxed font-medium">
              From AI agents to full-stack products — Softcr<span className="footer-link-gradient font-black">8</span>ers engineers the future.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col w-full gap-3 relative z-10">
            <a href="#contact"
              className="footer-cta-gradient w-full py-4 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started Free
            </a>
            <a href="#contact"
              className="footer-glass-pill w-full py-4 rounded-full text-white/80 font-bold text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Demo
            </a>
          </div>

          {/* Nav pills */}
          <div className="flex flex-wrap justify-center gap-2 relative z-10">
            {navLinks.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}
                className="footer-glass-pill px-5 py-2.5 rounded-full text-white/50 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 relative z-10" />

          {/* Bottom bar */}
          <div className="w-full flex flex-col items-center gap-4 relative z-10">
            <div className="footer-glass-pill px-5 py-2 rounded-full flex items-center gap-2">
              <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Crafted with ❤ by</span>
              <span className="text-white font-black text-sm tracking-normal ml-1">
                Softcr<span className="footer-link-gradient font-black">8</span>ers
              </span>
            </div>
            <div className="flex items-center justify-between w-full opacity-40">
              <span className="text-white text-[9px] font-semibold tracking-widest uppercase">
                © 2026 Softcr8ers.
              </span>
              <button onClick={scrollToTop}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: original cinematic fixed footer ── */}
        <div className="hidden md:block relative h-screen w-full">
          <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden text-white cinematic-footer-wrapper"
            style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 25%, #0f0a1f 50%, #1a0520 75%, #0a0a0f 100%)" }}
          >
            {/* Background layers */}
            <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] pointer-events-none z-0" />
            <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none opacity-50" />
            
            <div ref={giantTextRef}
              className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none flex items-end">
              <span>SOFTCR</span>
              <span className="footer-8-gradient">8</span>
              <span>ERS</span>
            </div>

            <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-white/5 bg-black/30 backdrop-blur-sm py-4 z-10 -rotate-2 scale-110 shadow-2xl">
              <div className="flex w-max animate-footer-scroll-marquee text-sm font-bold tracking-[0.3em] text-white/20 uppercase">
                <MarqueeItem /><MarqueeItem />
              </div>
            </div>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
              <h2 ref={headingRef}
                className="text-7xl lg:text-8xl font-black footer-text-glow tracking-tighter mb-4 text-center leading-tight">
                Let&apos;s <span className="footer-link-gradient">Build</span> Together.
              </h2>
              <p className="text-white/40 text-base font-medium mb-12 text-center max-w-md">
                From AI agents to full-stack products — Softcr<span className="footer-link-gradient font-black">8</span>ers engineers the future.
              </p>
              <div ref={contentRef} className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-row justify-center gap-4 w-full">
                  <MagneticButton as="a" href="#contact"
                    className="footer-cta-gradient px-10 py-5 rounded-full text-white font-bold text-base flex items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Started Free
                  </MagneticButton>
                  <MagneticButton as="a" href="#contact"
                    className="footer-glass-pill px-10 py-5 rounded-full text-white/80 font-bold text-base flex items-center justify-center gap-3 group">
                    <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Demo
                  </MagneticButton>
                </div>
                <div className="flex flex-wrap justify-center gap-3 w-full mt-2">
                  {navLinks.map((label) => (
                    <MagneticButton key={label} as="a" href={`#${label.toLowerCase()}`}
                      className="footer-glass-pill px-7 py-3 rounded-full text-white/50 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                      {label}
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-20 w-full pb-8 px-12 flex flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-white/20 text-[10px] font-semibold tracking-widest uppercase">
                  © 2026 Softcr8ers. All rights reserved.
                </span>
              </div>
              <div className="footer-glass-pill px-7 py-3 rounded-full flex items-center gap-2 cursor-default">
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Crafted with</span>
                <span className="animate-footer-heartbeat text-base text-red-500/80">❤</span>
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">by</span>
                <span className="text-white font-black text-sm tracking-normal ml-1">
                  Softcr<span className="footer-link-gradient font-black">8</span>ers
                </span>
              </div>
              <MagneticButton as="button" onClick={scrollToTop}
                className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-white/40 hover:text-white group">
                <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </MagneticButton>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
