"use client";

import React from "react";
import { motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiFramer,
  SiPostgresql, SiPython, SiDocker, SiPrisma, SiMongodb, SiFirebase,
  SiGraphql, SiVite, SiRedux, SiJavascript, SiCss, SiHtml5, SiVercel
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const row1 = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
];

const row2 = [
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Framer", icon: <SiFramer />, color: "#0055FF" },
  { name: "Vercel", icon: <SiVercel />, color: "#000000" },
];

export function TechStack() {
  return (
    <section className="relative w-full py-10 md:py-24 overflow-hidden bg-white font-sans border-t border-slate-50">
      <div className="container relative z-10 mx-auto px-4 mb-8 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center w-full mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-[#a855f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
              OUR TECH STACK
            </span>
            <span className="text-[#f43f5e] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-5xl font-medium text-slate-950 tracking-tight leading-tight"
        >
          Tools We Use to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Build.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        {/* Row 1 */}
        <div className="relative w-full">
          <Carousel
            opts={{ loop: true, dragFree: true, align: "start" }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.0, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
                <CarouselItem key={`r1-${i}`} className="pl-3 md:pl-6 basis-auto">
                  <TechCircle tech={tech} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Row 2 */}
        <div className="relative w-full">
          <Carousel
            opts={{ loop: true, dragFree: true, align: "start" }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.0, direction: "backward", stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
                <CarouselItem key={`r2-${i}`} className="pl-3 md:pl-6 basis-auto">
                  <TechCircle tech={tech} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function TechCircle({ tech }: { tech: typeof row1[0] }) {
  return (
    <div className="group relative flex flex-col items-center gap-1 py-2 px-1">
      <div className="w-10 h-10 md:w-[90px] md:h-[90px] rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-all duration-300 group-hover:border-purple-200 group-hover:shadow-md">
        <div className="text-base md:text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }}>
          {tech.icon}
        </div>
      </div>
      <span className="text-[8px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
