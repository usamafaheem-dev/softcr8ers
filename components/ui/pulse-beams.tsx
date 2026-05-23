"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BeamPath {
  path: string;
  gradientConfig: {
    initial: {
      x1: string;
      x2: string;
      y1: string;
      y2: string;
    };
    animate: {
      x1: string | string[];
      x2: string | string[];
      y1: string | string[];
      y2: string | string[];
    };
    transition?: {
      duration?: number;
      repeat?: number;
      repeatType?: "loop" | "reverse" | "mirror";
      ease?: string | number[];
      delay?: number;
    };
  };
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export interface PulseBeamsProps extends React.HTMLAttributes<HTMLDivElement> {
  beams: BeamPath[];
  children?: React.ReactNode;
  viewBox?: string;
}

export function PulseBeams({ beams, children, viewBox = "0 0 400 128", className, ...props }: PulseBeamsProps) {
  const baseId = useId();

  return (
    <div className={cn("relative w-full h-full", className)} {...props}>
      {/* Absolute SVG overlay containing the beams */}
      <svg
        className="absolute inset-0 pointer-events-none w-full h-full z-0 overflow-visible"
        viewBox={viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {beams.map((beam, idx) => {
            const gradId = `pulse-beam-grad-${baseId}-${idx}`;
            const { initial, animate, transition } = beam.gradientConfig;
            
            // Set beautiful defaults for the transition
            const defaultTransition = {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              ...transition,
            };

            return (
              <motion.linearGradient
                key={gradId}
                id={gradId}
                gradientUnits="userSpaceOnUse"
                initial={initial}
                animate={animate}
                // @ts-ignore - Framer motion handles standard SVG attributes beautifully
                transition={defaultTransition}
              >
                {/* 
                  A gradient for the beam: 
                  transparent at start, solid brand color (or default blue/purple) in center, transparent at end.
                */}
                <stop offset="0%" stopColor={beam.color || "#a906c9"} stopOpacity="0" />
                <stop offset="35%" stopColor={beam.color || "#a906c9"} stopOpacity="0.3" />
                <stop offset="50%" stopColor={beam.color || "#1620f0"} stopOpacity="1" />
                <stop offset="65%" stopColor={beam.color || "#a906c9"} stopOpacity="0.3" />
                <stop offset="100%" stopColor={beam.color || "#a906c9"} stopOpacity="0" />
              </motion.linearGradient>
            );
          })}
        </defs>

        {beams.map((beam, idx) => {
          const gradId = `pulse-beam-grad-${baseId}-${idx}`;
          return (
            <g key={idx}>
              {/* Background trace line */}
              <path
                d={beam.path}
                className="stroke-slate-200/20"
                strokeWidth={beam.strokeWidth || 1.5}
                fill="none"
                strokeLinecap="round"
              />
              {/* Animated pulse beam */}
              <path
                d={beam.path}
                stroke={`url(#${gradId})`}
                strokeWidth={(beam.strokeWidth || 1.5) + 0.5}
                fill="none"
                strokeLinecap="round"
                className={cn("opacity-90", beam.className)}
              />
            </g>
          );
        })}
      </svg>

      {/* Children rendered on top */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
