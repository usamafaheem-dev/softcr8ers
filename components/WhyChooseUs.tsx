"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Award, RefreshCw, Rocket, ShieldCheck, Database, Zap, Headset, LineChart, Lock, Globe2 } from "lucide-react";

const CARDS_KEYS = [
  { id: 1, titleKey: "wcu.card1.title", descKey: "wcu.card1.desc", icon: Award },
  { id: 2, titleKey: "wcu.card2.title", descKey: "wcu.card2.desc", icon: RefreshCw },
  { id: 3, titleKey: "wcu.card3.title", descKey: "wcu.card3.desc", icon: Rocket },
  { id: 4, titleKey: "wcu.card4.title", descKey: "wcu.card4.desc", icon: ShieldCheck },
  { id: 5, titleKey: "wcu.card5.title", descKey: "wcu.card5.desc", icon: Database },
  { id: 6, titleKey: "wcu.card6.title", descKey: "wcu.card6.desc", icon: Zap },
  { id: 7, titleKey: "wcu.card7.title", descKey: "wcu.card7.desc", icon: Headset },
  { id: 8, titleKey: "wcu.card8.title", descKey: "wcu.card8.desc", icon: LineChart },
  { id: 9, titleKey: "wcu.card9.title", descKey: "wcu.card9.desc", icon: Lock },
  { id: 10, titleKey: "wcu.card10.title", descKey: "wcu.card10.desc", icon: Globe2 },
];



export function WhyChooseUs() {
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center", 
    skipSnaps: false,
    duration: 50 // Slightly faster transitions for a smoother feel
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 8000); 

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, onSelect]);

  return (
    <section id="why-choose-us" className="relative bg-[#f8fafc] py-20 md:py-32 overflow-hidden border-t border-slate-100">
      
      {/* Inline Styles for Animation */}
      <style>{`
        @keyframes flow-line {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>

      {/* Premium Decorative Dotted Wavy Background Line */}
      <div className="absolute inset-0 top-[50%] -translate-y-1/2 z-0 hidden md:block pointer-events-none w-full h-[400px] opacity-60">
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path 
            d="M -50,150 C 200,50 300,250 600,250 C 900,250 1000,50 1250,150" 
            stroke="url(#gradientLine)" 
            strokeWidth="4" 
            strokeDasharray="0 15" 
            strokeLinecap="round" 
            style={{ animation: 'flow-line 30s linear infinite' }}
          />
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#a906c9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Glow Behind the Carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#a906c9]/5 blur-[120px] pointer-events-none z-0 rounded-full" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Centered Heading with Premium Spacing */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="text-[#2f89f7] animate-spin font-bold">✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-slate-500 ml-1">{t("wcu.badge")}</span>
            <span className="text-[#f016da] animate-spin font-bold ml-1">✱</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
            {t("wcu.title.p1")} <span className="text-[#a906c9]">{t("wcu.title.p2")}</span> {t("wcu.title.p3")}
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            {t("wcu.subtitle")}
          </p>
        </div>

        {/* Breathtaking 3D Coverflow-Style Carousel */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" ref={emblaRef}>
          <div className="flex touch-pan-y py-10 px-4" style={{ alignItems: 'center' }}>
            {CARDS_KEYS.map((card, index) => {
              const isCenter = index === selectedIndex;
              const IconComponent = card.icon;
              
              return (
                <div 
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_55%] md:flex-[0_0_40%] lg:flex-[0_0_30%] xl:flex-[0_0_28%] px-4 py-4 cursor-pointer select-none transition-transform duration-700 ease-out"
                  onClick={() => emblaApi?.scrollTo(index)} 
                  style={{
                    // Creates a 3D pop effect for the center card
                    transform: isCenter ? 'scale(1)' : 'scale(0.85)',
                    opacity: isCenter ? 1 : 0.6,
                    zIndex: isCenter ? 30 : 10,
                  }}
                >
                  <div 
                    className={cn(
                      "relative w-full h-full rounded-[2rem] p-8 md:p-10 transition-all duration-700 ease-out flex flex-col group",
                      isCenter 
                        ? "bg-gradient-to-br from-[#a906c9] via-[#8d05a8] to-[#59016b] ring-1 ring-white/30 shadow-[0_30px_60px_-15px_rgba(169,6,201,0.6)]" 
                        : "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-200"
                    )}
                  >
                    {/* Glowing Accent Border inside Active Card */}
                    {isCenter && (
                      <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" />
                    )}

                    {/* Luxurious Icon Container */}
                    <div 
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-2 relative overflow-hidden",
                        isCenter ? "bg-white/15 border border-white/20 backdrop-blur-md" : "bg-gradient-to-br from-[#fdf4ff] to-[#f3e8ff] border border-[#f5d0fe]/60"
                      )}
                    >
                      {/* Optional Inner Glow for Active Icon */}
                      {isCenter && <div className="absolute inset-0 bg-white/20 blur-md rounded-full" />}
                      
                      <IconComponent 
                        className={cn(
                          "w-7 h-7 relative z-10 transition-colors duration-500",
                          isCenter ? "text-white" : "text-[#a906c9]"
                        )} 
                        strokeWidth={isCenter ? 2.5 : 2}
                      />
                    </div>

                    {/* Elegant Title */}
                    <h3 className={cn(
                      "text-xl lg:text-2xl font-semibold mb-4 tracking-tight leading-snug transition-colors duration-500",
                      isCenter ? "text-white" : "text-slate-900"
                    )}>
                      {t(card.titleKey)}
                    </h3>

                    {/* Highly Legible Description */}
                    <p className={cn(
                      "text-sm lg:text-base font-normal leading-relaxed transition-colors duration-500",
                      isCenter ? "text-white/80" : "text-slate-500 group-hover:text-slate-600"
                    )}>
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
