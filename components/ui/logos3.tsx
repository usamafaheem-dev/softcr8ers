"use client";

import React from "react";
import { motion } from "framer-motion";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    id: "logo-1",
    description: "Astro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-2",
    description: "Figma",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-4",
    description: "React",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-5",
    description: "Shadcn UI",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-6 w-auto",
  },
  {
    id: "logo-7",
    description: "Tailwind",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-6 w-auto",
  },
];

const Logos3 = ({
  heading = "Trusted by world-class teams",
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  // Triple the logos for a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-50 border border-slate-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Industry Partners</span>
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          {heading}
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Glass Track */}
        <div className="flex w-max py-4">
          <motion.div 
            className="flex shrink-0 items-center justify-around gap-12 px-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="group relative flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative z-10 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-purple-200/50 transition-all">
                   <img
                    src={logo.image}
                    alt={logo.description}
                    className={`${logo.className} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-50/30 blur-[100px] -z-10 rounded-full" />
    </section>
  );
};

export { Logos3 };
