"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export type Testimonial = { text: string; name: string; role: string; image: string; isSpecial?: boolean };

const getTestimonials = (t: any): Testimonial[] => [
  { text: t("tst.1.text"), name: "Sandra Meyers", role: t("tst.1.role"), image: "https://i.pravatar.cc/100?u=sandra" },
  { text: t("tst.2.text"), name: "James Patel", role: t("tst.2.role"), image: "https://i.pravatar.cc/100?u=james" },
  { text: t("tst.3.text"), name: "Laura Greer", role: t("tst.3.role"), image: "https://i.pravatar.cc/100?u=laura" },
  { text: t("tst.4.text"), name: "David O'Connor", role: t("tst.4.role"), image: "https://i.pravatar.cc/100?u=david" },
  { text: t("tst.5.text"), name: "Sarah Mitchell", role: t("tst.5.role"), image: "https://i.pravatar.cc/100?u=sarah" },
  { text: t("tst.6.text"), name: "Michael Lee", role: t("tst.6.role"), image: "https://i.pravatar.cc/100?u=michael" },
  { text: t("tst.7.text"), name: "Julia Martinez", role: t("tst.7.role"), image: "https://i.pravatar.cc/100?u=julia" },
  { text: t("tst.8.text"), name: "Chris Nguyen", role: t("tst.8.role"), image: "https://i.pravatar.cc/100?u=chris" },
];

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

function TestimonialsColumn({ items, duration = 20, reverse = false, className }: { items: Testimonial[]; duration?: number; reverse?: boolean; className?: string }) {
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
  const { t } = useTranslation();
  const items = getTestimonials(t);
  const col1 = items.slice(0, 4);
  const col2 = items.slice(4, 8);
  return (
    <section id="testimonials" className="bg-slate-50 py-12 md:py-16 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 text-center lg:text-start"
          >
            <div className="flex items-center justify-center lg:justify-start w-full gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">{t("testi.badge")}</span>
                <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.1]">
              {t("testi.title.p1")}
              <span className="relative inline-block">
                <span className="relative z-10">{t("testi.title.highlight1")}</span>
                <motion.span
                  initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-1 left-0 h-[35%] bg-[#1620f0]/15 z-0"
                />
              </span>
              {t("testi.title.p2")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]">
                {t("testi.title.highlight2")}
              </span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
              {t("testi.subtitle")}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
              {[[t("testi.stat1.val"), t("testi.stat1.label")], [t("testi.stat2.val"), t("testi.stat2.label")], [t("testi.stat3.val"), t("testi.stat3.label")]].map(([val, label], i) => (
                <React.Fragment key={label}>
                  {i > 0 && <div className="w-px h-8 bg-slate-200" />}
                  <div className="text-center lg:text-start">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">{val}</div>
                    <div className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <a href="/#contact" className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/20 bg-[#050101] min-w-[180px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-5 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-white">{t("testi.btn.start")}</span>
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-white">{t("testi.btn.start")}</span>
                  </div>
                </div>
              </a>
              <a href="#" className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-sm bg-white border border-slate-200 hover:bg-slate-50 min-w-[180px]">
                <div className="relative h-5 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">{t("testi.btn.demo")}</span>
                    <span className="flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs text-slate-800">{t("testi.btn.demo")}</span>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Scrolling columns */}
          <motion.div
            dir="ltr"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-3 h-[300px] md:h-[520px] lg:h-[600px] relative w-full"
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
