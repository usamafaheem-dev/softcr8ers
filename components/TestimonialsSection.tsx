"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

const testimonials = [
  { text: "Softcr8ers built our entire e-commerce platform from scratch. The design is stunning and conversions are up 40% since launch.", name: "Sandra Meyers", role: "CEO, LuxeCart", image: "https://i.pravatar.cc/100?u=sandra" },
  { text: "Their UI/UX team transformed our app's experience. User retention doubled within the first month after the redesign.", name: "James Patel", role: "Product Lead, Evergreen", image: "https://i.pravatar.cc/100?u=james" },
  { text: "The brand identity they created for us is incredible. We've received so many compliments from clients and partners.", name: "Laura Greer", role: "Founder, Atlas Studios", image: "https://i.pravatar.cc/100?u=laura" },
  { text: "The video production quality is truly cinematic. Our brand reel generated over 500K views in the first week.", name: "David O'Connor", role: "CMO, NovaBrands", image: "https://i.pravatar.cc/100?u=david" },
  { text: "They delivered our custom CRM software ahead of schedule and it works flawlessly. Highly recommend the team.", name: "Sarah Mitchell", role: "COO, TechFlow", image: "https://i.pravatar.cc/100?u=sarah" },
  { text: "Softcr8ers redesigned our entire digital presence. The website is fast, beautiful, and converts like nothing before.", name: "Michael Lee", role: "Director, Q Global", image: "https://i.pravatar.cc/100?u=michael" },
  { text: "Professional, creative, and technically brilliant. They turned our rough ideas into a polished mobile app in 8 weeks.", name: "Julia Martinez", role: "Co-Founder, Appify", image: "https://i.pravatar.cc/100?u=julia" },
  { text: "Best agency we've worked with. Their audio and video editing elevated our content to a whole new professional level.", name: "Chris Nguyen", role: "Head of Marketing, CreatorHub", image: "https://i.pravatar.cc/100?u=chris" },
];

const col1 = testimonials.slice(0, 4);
const col2 = testimonials.slice(4, 8);

const TestimonialCard = React.memo(({ text, name, role, image, isSpecial }: { text: string; name: string; role: string; image: string; isSpecial?: boolean }) => {
  if (isSpecial) {
    return (
      <div 
        className="testimonial-border-container rounded-[1.2rem] shadow-[0_12px_35px_rgba(0,0,0,0.05)] w-full"
        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      >
        <div className="testimonial-border-inner rounded-[1.15rem] p-4 md:p-5">
          <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold mb-4">{text}</p>
          <div className="flex items-center gap-2.5">
            <img src={image} alt={name} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover ring-2 ring-white/80 flex-shrink-0" />
            <div>
              <div className="text-slate-950 font-bold text-xs md:text-sm leading-tight">{name}</div>
              <div className="text-[#a906c9] font-semibold text-[10px] md:text-xs mt-0.5">{role}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="p-4 md:p-5 rounded-[1.2rem] border border-slate-100 bg-white shadow-sm w-full"
      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    >
      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-4">{text}</p>
      <div className="flex items-center gap-2.5">
        <img src={image} alt={name} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0" />
        <div>
          <div className="text-slate-900 font-semibold text-xs md:text-sm leading-tight">{name}</div>
          <div className="text-slate-400 text-[10px] md:text-xs mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

function TestimonialsColumn({ items, duration = 20, reverse = false, className }: { items: typeof testimonials; duration?: number; reverse?: boolean; className?: string }) {
  return (
    <div className={cn("overflow-hidden relative h-full", className)}>
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
      <div
        className={cn(
          "flex flex-col gap-3 pt-3",
          reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"
        )}
        style={{ 
          "--duration": `${duration}s`,
          willChange: "transform",
        } as React.CSSProperties}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <TestimonialCard key={i} isSpecial={i % 2 === 1} {...t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-12 md:py-28 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start w-full gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">TESTIMONIALS</span>
                <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.1]">
              Trusted by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Businesses</span>
                <motion.span
                  initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-1 left-0 h-[35%] bg-[#1620f0]/15 z-0"
                />
              </span>
              {" "}That Mean{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]">
                Business.
              </span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
              Join 500+ growing businesses who have trusted Softcr8ers to build their digital future.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
              {[["10K+", "Organisations"], ["99%", "Satisfaction"], ["45+", "Countries"]].map(([val, label], i) => (
                <React.Fragment key={label}>
                  {i > 0 && <div className="w-px h-8 bg-slate-200" />}
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">{val}</div>
                    <div className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <a href="#contact" className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/20 bg-[#050101] min-w-[180px]">
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
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">Watch a Demo</span>
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">Watch a Demo</span>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Scrolling columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-3 h-[300px] md:h-[520px] lg:h-[600px] relative"
          >
            <TestimonialsColumn items={col1} duration={45} reverse={false} />
            <TestimonialsColumn items={col2} duration={50} reverse={true} />
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes marquee-vertical-reverse {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse var(--duration) linear infinite;
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .testimonial-border-container {
          position: relative;
          padding: 1.8px;
          overflow: hidden;
          background: transparent;
        }
        .testimonial-border-container::before {
          content: "";
          position: absolute;
          inset: -150%;
          background: conic-gradient(from 0deg, #1620f0, #a906c9, #f016da, #1620f0);
          animation: rotate-border 8s linear infinite;
          opacity: 1;
          z-index: 0;
        }
        .testimonial-border-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          background: rgba(255, 255, 255, 0.97);
        }
      `}</style>
    </section>
  );
}
