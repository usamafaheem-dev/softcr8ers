"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Fingerprint, Zap, Globe, Cpu, Code2, Database, Activity, ArrowRight, ShieldCheck } from "lucide-react";

interface FeatureCarouselSectionProps {
  title: string;
  description: string;
  features: string[];
  iconColor: string;
  image?: string; // Kept for type compatibility
}

const ICONS = [Sparkles, Layers, Fingerprint, Zap, Globe, Cpu, Code2, Database];

// Bright, clean agency images
const PANEL_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1620825937374-87fc2d6def3c?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
];

export function FeatureCarouselSection({ title, description, features, iconColor }: FeatureCarouselSectionProps) {
  if (!features || features.length === 0) return null;

  // Duplicate to ensure infinite scroll
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <section className="w-full py-24 md:py-32 relative bg-slate-50 font-sans overflow-hidden">
      
      {/* Decorative Blob */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"
        style={{ backgroundColor: iconColor }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1 text-center">
              Turn Idea Into Reality
            </span>
            <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-6">
            {(() => {
              const words = title.split(" ");
              if (words.length <= 1) return <span style={{ color: iconColor }}>{title}</span>;
              const lastWord = words.pop();
              return (
                <>
                  {words.join(" ")} <span style={{ color: iconColor }}>{lastWord}</span>
                </>
              );
            })()}
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Infinite Mobile Marquee */}
      <div className="relative w-full flex overflow-hidden py-10 -mt-10">
        
        {/* Gradients on the edges to fade out the phones smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-10 md:gap-16 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 150, // Significantly slower, premium speed
            repeat: Infinity 
          }}
        >
          {marqueeItems.map((feature, idx) => {
             const Icon = ICONS[idx % ICONS.length];
             const image = PANEL_IMAGES[idx % PANEL_IMAGES.length];
             
             return (
               // Outer Phone Hardware Wrapper - iPhone 17 Pro Titanium Style
               <div 
                 key={idx} 
                 className="relative w-[300px] h-[620px] md:w-[320px] md:h-[660px] shrink-0 hover:-translate-y-4 transition-transform duration-500 group perspective-[1000px] scale-[0.8] sm:scale-[0.9] md:scale-100 origin-center mx-[-30px] md:mx-0"
               >
                 {/* Hardware Buttons - Titanium finish */}
                 <div className="absolute left-[-3px] top-[120px] w-[3px] h-10 bg-slate-600 rounded-l-sm shadow-inner" />
                 <div className="absolute left-[-3px] top-[180px] w-[3px] h-14 bg-slate-600 rounded-l-sm shadow-inner" />
                 <div className="absolute left-[-3px] top-[250px] w-[3px] h-14 bg-slate-600 rounded-l-sm shadow-inner" />
                 <div className="absolute right-[-3px] top-[190px] w-[3px] h-20 bg-slate-600 rounded-r-sm shadow-inner" />

                 {/* Main Phone Body (Titanium Bezel) */}
                 <div className="w-full h-full rounded-[3.5rem] p-[8px] bg-black border-[2px] border-slate-700 shadow-[inset_0_0_2px_rgba(255,255,255,0.4),0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden relative">
                   
                   {/* ── Clean, Simple Service Layout ── */}
                   <div className="relative w-full h-full rounded-[3rem] bg-white overflow-hidden flex flex-col font-sans">
                     
                     {/* Dynamic Island */}
                     <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[110px] h-[34px] bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)] mr-1" />
                     </div>
                     
                     {/* iOS Status Bar - Dark text */}
                     <div className="absolute top-3.5 left-7 right-6 flex justify-between items-center z-30 pointer-events-none">
                       <span className="text-[13px] font-bold text-slate-900 tracking-tight drop-shadow-sm">9:41</span>
                       <div className="flex items-center gap-1.5 opacity-100">
                          {/* Signal Bars */}
                          <div className="flex gap-[2px] items-end h-[10px]">
                            <div className="w-[3px] h-[4px] bg-slate-900 rounded-sm" />
                            <div className="w-[3px] h-[6px] bg-slate-900 rounded-sm" />
                            <div className="w-[3px] h-[8px] bg-slate-900 rounded-sm" />
                            <div className="w-[3px] h-[10px] bg-slate-900 rounded-sm" />
                          </div>
                          {/* Battery */}
                          <div className="w-[22px] h-[11px] rounded-[4px] border-[1.5px] border-slate-900 flex items-center p-[1px] relative ml-1">
                             <div className="h-full w-[85%] bg-slate-900 rounded-[1px]" />
                             <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-slate-900 rounded-r-sm" />
                          </div>
                       </div>
                     </div>

                     {/* Top Content: Heading & Text */}
                     <div className="px-5 pt-[5.5rem] pb-2 text-center z-10 flex flex-col items-center">
                         {/* Simple Heading - font-medium (500), larger, black with one colored word */}
                         <h3 className="text-[26px] md:text-[28px] font-medium leading-[1.2] tracking-tight font-sans text-slate-900">
                           {(() => {
                             const words = feature.split(" ");
                             if (words.length <= 1) return <span style={{ color: iconColor }}>{feature}</span>;
                             const lastWord = words.pop();
                             return (
                               <>
                                 {words.join(" ")} <span style={{ color: iconColor }}>{lastWord}</span>
                               </>
                             );
                           })()}
                         </h3>
                         
                         {/* Simple Detail - font-normal (400) */}
                         <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal mt-2.5 max-w-[240px] font-sans">
                           Experience how our highly specialized capabilities can transform your workflow and elevate your digital presence.
                         </p>
                     </div>

                     {/* Middle Image Area */}
                     <div className="flex-1 w-full relative flex items-start justify-center pt-2 overflow-hidden px-3">
                         <img 
                            src="https://ik.imagekit.io/o5vhmyokl/aah_is_may_yar_ya_202605232329.jpeg" 
                            className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-700" 
                            alt="Dashboard Preview" 
                         />
                         {/* A subtle fade at bottom so it transitions smoothly into the marquee */}
                         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                     </div>
                     
                     {/* ── Inner Mobile Marquee ── */}
                     <div className="w-full bg-white py-2.5 mb-2 flex overflow-hidden relative z-20 border-t border-slate-50">
                         <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                         <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                         <motion.div 
                            className="flex gap-6 whitespace-nowrap px-2 items-center w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                         >
                            {[...Array(2)].map((_, i) => (
                              <div key={i} className="flex gap-6 items-center">
                                 <span className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <Cpu size={10} style={{ color: iconColor }} /> HIGH PERFORMANCE
                                 </span>
                                 <span className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <ShieldCheck size={10} style={{ color: iconColor }} /> SECURE
                                 </span>
                                 <span className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <Zap size={10} style={{ color: iconColor }} /> SCALABLE
                                 </span>
                                 <span className="text-[9px] font-bold text-slate-800 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <Globe size={10} style={{ color: iconColor }} /> GLOBAL
                                 </span>
                              </div>
                            ))}
                         </motion.div>
                     </div>
                     
                     {/* iOS Bottom Home Bar */}
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-slate-300 rounded-full z-40 pointer-events-none" />
                   </div>
                 </div>
               </div>
             )
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
