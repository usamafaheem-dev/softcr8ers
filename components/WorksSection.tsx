"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, Layout, MessageSquare, Phone, Rocket, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const works = [
  { id: 1, title: "Web Engineering", description: "Architecting high-performance digital ecosystems with cutting-edge tech stacks.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200", icon: <Globe /> },
  { id: 2, title: "Intelligence & AI", description: "Neural networks and autonomous systems for modern business workflows.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", icon: <Cpu /> },
  { id: 3, title: "Custom Software", description: "Tailored enterprise solutions engineered for scalability and growth.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200", icon: <Code2 /> },
  { id: 4, title: "Mobile Innovation", description: "High-fidelity native experiences across iOS and Android.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200", icon: <Phone /> },
  { id: 5, title: "SaaS Platforms", description: "End-to-end cloud infrastructure for subscription-based products.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", icon: <Rocket /> },
  { id: 6, title: "UI/UX Design", description: "Psychology-driven visual interfaces designed for maximum engagement.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200", icon: <Layout /> },
  { id: 7, title: "Technical SEO", description: "Dominating search rankings with data-driven content strategies.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200", icon: <Search /> },
  { id: 8, title: "Gen AI Content", description: "LLM-powered creative scaling for global digital campaigns.", image: "https://images.unsplash.com/photo-1676299081847-c0376a163242?auto=format&fit=crop&q=80&w=1200", icon: <MessageSquare /> },
];

export function WorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Perfected 'Stop & Go' cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#fcfcfd] py-16 md:py-24 flex flex-col items-center overflow-hidden font-sans border-t border-slate-100">
      
      {/* --- LIQUID ENERGY BACKGROUND (The 'Water' Animation) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-[300px] bg-gradient-to-r from-transparent via-purple-100/30 to-transparent blur-[120px]"
        />
        <motion.div 
          animate={{ x: ["100%", "-100%"], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-0 w-full h-[400px] bg-gradient-to-r from-transparent via-blue-100/25 to-transparent blur-[150px]"
        />
        <motion.div 
          animate={{ x: ["-50%", "150%"], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-full h-[250px] bg-gradient-to-r from-transparent via-rose-100/20 to-transparent blur-[100px]"
        />
      </div>

      <div className="container relative z-10 text-center mb-12 px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-[#a855f7] animate-spin font-bold">✱</span>
            <span className="text-xs md:text-sm font-black tracking-[0.5em] uppercase text-slate-400">
               SELECTED WORKS
            </span>
            <span className="text-[#f43f5e] animate-spin font-bold">✱</span>
          </motion.div>
        </div>
      </div>

      {/* --- 5-CARD SYMMETRICAL 3D ORBIT --- */}
      <div className="relative w-full h-[550px] flex items-center justify-center">
        <div className="relative w-full h-full perspective-[2500px] flex items-center justify-center">
           <AnimatePresence mode="popLayout">
              {works.map((work, idx) => {
                 let relativeIdx = (idx - activeIndex);
                 if (relativeIdx > works.length / 2) relativeIdx -= works.length;
                 if (relativeIdx < -works.length / 2) relativeIdx += works.length;

                 if (Math.abs(relativeIdx) > 2) return null;

                 const isCenter = idx === activeIndex;
                 const angle = relativeIdx * 35; 
                 const xPos = relativeIdx * 420; 
                 const zPos = isCenter ? 300 : Math.abs(relativeIdx) === 1 ? -100 : -500;
                 const blur = isCenter ? 0 : Math.abs(relativeIdx) === 1 ? 6 : 12;
                 const opacity = isCenter ? 1 : Math.abs(relativeIdx) === 1 ? 0.4 : 0.08;

                 return (
                    <WorkOrbitCard 
                      key={work.id}
                      work={work}
                      isCenter={isCenter}
                      angle={angle}
                      xPos={xPos}
                      zPos={zPos}
                      blur={blur}
                      opacity={opacity}
                      onClick={() => setActiveIndex(idx)}
                    />
                 );
              })}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function WorkOrbitCard({ work, isCenter, angle, xPos, zPos, blur, opacity, onClick }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 25 });
  const springY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), { stiffness: 100, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isCenter) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, scale: 0.5, x: xPos, rotateY: angle, z: zPos }}
      animate={{ 
        opacity: opacity, 
        scale: isCenter ? [1, 1.02, 1] : opacity * 1.5, 
        x: xPos,
        rotateY: angle,
        z: zPos,
        filter: `blur(${blur}px)`,
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        scale: isCenter ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.8 }
      }}
      style={{ 
        rotateX: isCenter ? springY : 0, 
        rotateY: isCenter ? springX : angle,
        transformStyle: "preserve-3d"
      }}
      className={cn(
        "absolute w-[240px] md:w-[320px] h-[360px] md:h-[460px] rounded-[40px] cursor-pointer overflow-hidden transition-all duration-700",
        isCenter ? "shadow-[0_100px_200px_-50px_rgba(168,85,247,0.15)]" : "shadow-none"
      )}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[120px] z-0" />
      <div className="absolute inset-0 p-[2px] rounded-[40px] z-0">
         <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-blue-400/30 to-rose-400/30 opacity-60" />
      </div>

      <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
         <div className="flex items-center justify-between">
            <motion.div 
              animate={isCenter ? { rotate: [0, 360] } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-slate-950 rounded-[20px] flex items-center justify-center text-white shadow-2xl"
            >
               {React.cloneElement(work.icon, { className: "w-6 h-6" })}
            </motion.div>
            <span className="text-[11px] font-black text-slate-400 transition-colors uppercase tracking-[0.4em]">
               PROJECT.0{work.id}
            </span>
         </div>

         <div className="relative w-full h-[45%] rounded-[30px] overflow-hidden border border-white/20 shadow-2xl mb-6 bg-white/5">
            <img src={work.image} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
         </div>

         <div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-2 tracking-tighter uppercase italic leading-[0.8]">
               {work.title}
            </h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed max-w-[240px] line-clamp-2">
               {work.description}
            </p>
         </div>

         <div className="mt-6 flex items-center justify-between">
            <button className="px-8 py-3 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
               Case Study
            </button>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-950">
               <ArrowRight className="w-5 h-5" />
            </div>
         </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
    </motion.div>
  );
}
