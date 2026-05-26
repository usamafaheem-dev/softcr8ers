"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

interface DevelopmentProcessSectionProps {
  iconColor: string;
}

const steps = [
  {
    id: "01",
    title: "Discovery & Plan",
    desc: "We analyze your requirements and formulate a winning strategic roadmap.",
    icon: Search,
    color: "#2dd4bf", // Teal/Green
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "Crafting intuitive user journeys and stunning pixel-perfect interfaces.",
    icon: PenTool,
    color: "#3b82f6", // Blue
  },
  {
    id: "03",
    title: "Development",
    desc: "Writing clean, scalable code with agile sprints and continuous updates.",
    icon: Code2,
    color: "#a855f7", // Purple
  },
  {
    id: "04",
    title: "QA & Launch",
    desc: "Rigorous testing followed by seamless deployment to production.",
    icon: Rocket,
    color: "#64748b", // Slate
  }
];

export function DevelopmentProcessSection({ iconColor }: DevelopmentProcessSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-slate-50/50 relative overflow-hidden font-sans border-t border-slate-100">
       <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1 text-center">
                  {t("process.dev.badge")}
                </span>
                <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-4 tracking-tight">
               {t("process.dev.title")} <span style={{ color: iconColor }}>Process</span>
             </h2>
             <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">{t("process.dev.subtitle")}</p>
          </div>

          {/* Stepped Timeline */}
          <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 pb-12">
             {/* Background Glowing Dotted Line (Desktop) */}
             <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" style={{ filter: `drop-shadow(0 0 6px ${iconColor}60)` }}>
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                   {/* A flowing wavy mountain curve perfectly hitting the peaks and valleys */}
                   <motion.path 
                      d="M -5,90 C 15,90 25,30 37.5,30 C 50,30 50,75 62.5,75 C 75,75 85,10 105,10"
                      fill="none" 
                      stroke={iconColor} 
                      strokeWidth="1.5" 
                      strokeDasharray="1 6" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.35 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                   />
                </svg>
             </div>
             
             {/* Background Dashed Connecting Line (Mobile) */}
             <div className="block md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-[3px] border-l-[3px] border-dashed border-slate-300 -translate-x-1/2 z-0 pointer-events-none" />

             {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`relative z-10 flex flex-col items-center text-center w-full md:w-1/4 group
                      ${idx === 0 ? "md:translate-y-[60px]" : ""}
                      ${idx === 1 ? "md:translate-y-[20px]" : ""}
                      ${idx === 2 ? "md:translate-y-[-20px]" : ""}
                      ${idx === 3 ? "md:translate-y-[-60px]" : ""}
                    `}
                  >
                     {/* Circular Ring/Arrow Simulator */}
                     <div className="relative w-[90px] h-[90px] mb-5 flex items-center justify-center">
                        
                        {/* Outer rotating arrow ring */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90 group-hover:rotate-[270deg] transition-transform duration-[1.5s] ease-in-out" viewBox="0 0 100 100">
                           <circle 
                             cx="50" cy="50" r="42" 
                             fill="none" 
                             stroke={step.color} 
                             strokeWidth="8" 
                             strokeDasharray="200 64" 
                             strokeLinecap="round" 
                             className="opacity-80"
                           />
                           {/* Arrow Head effect via a small circle at the end of the dash */}
                           <circle cx="50" cy="8" r="4" fill={step.color} className="drop-shadow-md" />
                        </svg>

                        {/* Inner Solid Circle */}
                        <div className="relative z-10 w-[60px] h-[60px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-50">
                           <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mb-0.5">Phase</span>
                           <span className="text-xl font-black text-slate-800 leading-none tracking-tighter">{step.id}</span>
                        </div>
                     </div>

                     {/* Content Card (Smaller size as requested) */}
                     <div 
                        className="bg-white p-4 rounded-[1.25rem] shadow-sm border relative z-20 w-[95%] sm:w-[85%] md:w-[90%] lg:w-[85%] group-hover:shadow-md transition-shadow"
                        style={{ borderColor: `${iconColor}20` }}
                     >
                        {/* Dynamic Tint Overlay */}
                        <div className="absolute inset-0 rounded-[1.25rem] pointer-events-none" style={{ backgroundColor: `${iconColor}08` }} />
                        
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-sm z-10" style={{ backgroundColor: step.color }}>
                           <Icon size={12} />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 mb-1.5 mt-1">{t(`process.dev.step${idx + 1}.title`)}</h3>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{t(`process.dev.step${idx + 1}.desc`)}</p>
                     </div>

                  </motion.div>
                )
             })}
          </div>

       </div>
    </section>
  );
}
