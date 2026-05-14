"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export function PulsatingButton({
  className,
  children,
  pulseColor = "#a906c9",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-full px-8 py-3 text-center text-white font-semibold",
        "bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]",
        "transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div
        className="absolute -inset-px animate-ping rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, ${pulseColor}, transparent)`,
          animationDuration: duration,
        }}
      />
    </button>
  );
}
