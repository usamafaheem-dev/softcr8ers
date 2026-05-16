"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({
  text,
  className,
}: TextRevealProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-4xl font-medium text-slate-900/20 md:p-8 md:text-6xl lg:p-10 lg:text-7xl xl:text-8xl tracking-tight leading-[0.95]"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  // Create a more complex color/gradient effect
  // We'll use a wrapper with a background gradient that reveals itself
  const gradientOpacity = useTransform(
    progress, 
    [range[0], (range[0] + range[1]) / 2, range[1]], 
    [0, 1, 0]
  );
  const blackOpacity = useTransform(
    progress, 
    [range[0], (range[0] + range[1]) / 2, range[1]], 
    [0, 0, 1]
  );

  return (
    <span className="relative mx-1 lg:mx-2.5 py-1">
      {/* Base dimmed text */}
      <span className="absolute opacity-20 text-slate-900">{children}</span>
      
      {/* Gradient focused text */}
      <motion.span
        style={{ opacity: gradientOpacity }}
        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#f43f5e] z-10"
      >
        {children}
      </motion.span>

      {/* Final black text */}
      <motion.span
        style={{ opacity: blackOpacity }}
        className="text-slate-900"
      >
        {children}
      </motion.span>
    </span>
  );
};
