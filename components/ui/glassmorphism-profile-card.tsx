"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Plus, Copy, Zap } from "lucide-react";

interface ComponentProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string; 
  glowText?: string; 
  themeColor?: string;
  className?: string;
}

export default function Component({
  name = "Berat Berkay",
  role = "Developer",
  email = "beratberkaygokdemir@gmail.com",
  avatarSrc = "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yc2pLdFl5STR0MkZMcUNKaVNMQVJXRmNBSXIifQ",
  statusText = "Available for work",
  statusColor = "bg-lime-500",
  glowText = "Currently High on Creativity",
  themeColor = "#84cc16", // default tailwind lime-500
  className,
}: ComponentProps) {
  const [copied, setCopied] = useState(false);

  // Derive a local clock text once per minute
  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m}${ampm}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("relative w-full max-w-[340px]", className)}
    >
      {/* Dynamic Glow Layer */}
      <div 
        className="pointer-events-none absolute inset-x-8 -bottom-6 top-[80%] rounded-[30px] blur-[35px] opacity-[0.25] z-0 transition-all duration-500" 
        style={{
          backgroundColor: themeColor,
          boxShadow: `0 35px 70px -10px ${themeColor}`
        }}
      />

      {/* Dynamic Floating Zap Capsule Pill */}
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-20">
        <div 
          className="flex items-center justify-center gap-2 bg-white/95 border backdrop-blur-md py-2.5 px-5 rounded-full text-center text-xs font-semibold shadow-md w-fit mx-auto transition-colors duration-300"
          style={{ 
            color: '#1e293b', 
            borderColor: `${themeColor}40`,
            boxShadow: `0 4px 20px -5px ${themeColor}25`
          }}
        >
          <Zap className="h-4 w-4 animate-pulse shrink-0" style={{ color: themeColor }} /> 
          <span className="font-sans font-medium tracking-tight text-slate-700">{glowText}</span>
        </div>
      </div>

      <Card className={cn(
        "relative z-10 mx-auto w-full overflow-visible rounded-[24px]",
        "bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-xl",
        "transition-all duration-500"
      )}>
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-sans">
            <div className="flex items-center gap-2.5">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse", statusColor)} />
              <span className="font-semibold tracking-tight text-slate-600">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-85">
              <Clock className="h-3.5 w-3.5" />
              <span className="tabular-nums font-medium">{timeText}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div 
              className="relative h-44 w-44 shrink-0 overflow-hidden rounded-[20px] shadow-md border-2"
              style={{ borderColor: `${themeColor}20` }}
            >
              <Image
                src={avatarSrc}
                alt={`${name} avatar`}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-xl font-bold tracking-tight text-slate-900 sm:text-2xl font-sans">
                {name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: themeColor }}>
                {role}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              variant="outline"
              className="h-11 justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all font-bold text-xs text-slate-800"
              asChild
            >
              <a href="/contact">
                <Plus className="h-3.5 w-3.5 shrink-0" style={{ color: themeColor }} /> Hire Expert
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={handleCopy}
              className="h-11 justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-all font-bold text-xs text-slate-800"
            >
              <Copy className="h-3.5 w-3.5 shrink-0" style={{ color: themeColor }} /> {copied ? "Copied" : "Copy Email"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
