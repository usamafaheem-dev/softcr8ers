"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { useTranslation } from "@/context/LanguageContext";
import { 
  ArrowRight, ShieldCheck, Cpu, Code, Smartphone, 
  Activity, Layers, TrendingUp, Sparkles, ChevronRight, ChevronDown,
  X, Calendar, User, Clock, ArrowUpRight, CheckCircle2,
  ChevronLeft, ChevronUp, Database, Box, Terminal, Network, ShoppingCart, Globe, Video, Zap, Palette
} from "lucide-react";
import { cn } from "@/lib/utils";

// Rolling Text Button component
function RollingTextButton({
  label,
  href,
  variant = "gradient",
  className,
  onClick
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const Tag = href && href !== "#" ? motion.a : motion.button;
  
  return (
    <Tag
      href={href && href !== "#" ? href : undefined}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 overflow-hidden transition-all duration-500 cursor-pointer whitespace-nowrap shrink-0 font-['General_Sans',sans-serif] font-medium",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-lg shadow-purple-500/10"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden whitespace-nowrap shrink-0">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6 whitespace-nowrap shrink-0">
          <span className="flex h-6 items-center justify-center relative z-10 gap-2 whitespace-nowrap shrink-0">
            {label} <ArrowRight className="w-4 h-4 inline-block align-middle" />
          </span>
          <span className="flex h-6 items-center justify-center relative z-10 gap-2 whitespace-nowrap shrink-0">
            {label} <ArrowRight className="w-4 h-4 inline-block align-middle" />
          </span>
        </div>
      </div>
    </Tag>
  );
}

function SectionBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-fit font-['General_Sans',sans-serif]", className)}>
      <span className="text-[#a906c9] animate-spin font-bold text-xs" style={{ willChange: "transform" }}>✱</span>
      <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-slate-900 ml-1">
        {text}
      </span>
      <span className="text-[#f016da] animate-spin font-bold text-xs ml-1" style={{ willChange: "transform" }}>✱</span>
    </div>
  );
}

interface CaseStudyMetric {
  label: string;
  value: string;
}

interface CaseStudy {
  id: string;
  title: string;
  category: "Fintech" | "Web Engineering" | "UI/UX" | "AI Solutions";
  description: string;
  client: string;
  duration: string;
  role: string;
  year: string;
  tags: string[];
  imageUrl: string;
  mockupImageUrl: string; // Dynamic mockup image on top
  bgColor: string; // Specific gradient class for each project banner card
  tagline: string; // Dynamic longer tagline (e.g. AI-Powered Lead Generation...)
  opportunity: string; // Opp narrative
  approach: string; // Approach narrative
  solutionPoints: string[]; // Solution list bullet points
  impactPoints: string[]; // Impact list bullet points
  metrics: CaseStudyMetric[];
}

export default function WorkPage() {
  const { t } = useTranslation();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // Parallax effects for the hero section
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);

  // Auto-open project if query param is present
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");
      if (projectId) {
        // Find the case study
        const study = caseStudies.find(s => s.id === projectId);
        if (study) {
          setSelectedStudy(study);
        }
      }
    }
  }, []);

  // Dynamic helper for dot colors inside ImageKit-style tech stack pills (Brand purple, pink, blue matching guidelines)
  const getTechAccentColor = (tech: string) => {
    const colors: Record<string, string> = {
      "Next.js": "bg-[#111111]",
      "Go": "bg-[#00a7d0]",
      "PostgreSQL": "bg-[#336791]",
      "Redis": "bg-[#d82c20]",
      "PCI-DSS": "bg-[#1620f0]",
      "Docker": "bg-[#2496ed]",
      "React Three Fiber": "bg-[#f016da]",
      "Three.js": "bg-[#a906c9]",
      "WebGL": "bg-[#1620f0]",
      "Framer Motion": "bg-[#f016da]",
      "Tailwind CSS": "bg-[#38bdf8]",
      "Python": "bg-[#3776ab]",
      "FastAPI": "bg-[#059669]",
      "LangChain": "bg-[#1c3d5a]",
      "OpenAI": "bg-[#10a37f]",
      "Vector DB": "bg-[#a906c9]",
      "GraphQL": "bg-[#f016da]",
      "Shopify Engine": "bg-[#96bf48]",
      "Vercel Edge": "bg-[#000000]",
      "Figma Systems": "bg-[#f24e1e]",
      "Recharts": "bg-[#22c55e]",
      "TypeScript": "bg-[#1620f0]",
      "Rust WASM": "bg-[#dea584]",
      "TensorFlow": "bg-[#ff6f00]",
      "WebRTC": "bg-[#34d399]"
    };
    return colors[tech] || "bg-[#a906c9]";
  };

  // Helper function to return beautiful, official custom SVG brand logos for high-fidelity brand consistency
  const getTechIcon = (tech: string) => {
    const iconClass = "w-4 h-4 shrink-0 transition-transform group-hover:scale-110";
    
    switch (tech) {
      case "Next.js":
        return (
          <svg className={iconClass} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="90" fill="black"/>
            <path d="M149.508 157.52L69.142 54H54v72h13.5v-50.45l70.158 90.45c4.088-5.385 7.747-11.233 10.85-17.48zM117 54h13.5v72H117V54z" fill="white"/>
          </svg>
        );
      case "Go":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.07 4.09C11.95 4.07 9.8 4.71 8.27 6.02L5.8 4.14V8.89H10.55L8.98 7.7C10.22 6.64 12.11 6.13 13.88 6.47C16.33 6.93 18.06 9.17 17.81 11.66H20.21C20.55 7.55 17.91 4.13 14.07 4.09ZM5.8 10.37V15.12L8.27 13.24C9.8 14.55 11.95 15.19 14.07 15.17C17.91 15.13 20.55 11.71 20.21 7.6H17.81C18.06 10.09 16.33 12.33 13.88 12.79C12.11 13.13 10.22 12.62 8.98 11.56L10.55 10.37H5.8Z" fill="#00A7D0"/>
          </svg>
        );
      case "PostgreSQL":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4.5h-2V7h2v5z" fill="#336791"/>
          </svg>
        );
      case "Redis":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#D82C20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "PCI-DSS":
        return <ShieldCheck className={cn(iconClass, "text-[#1620f0]")} />;
      case "Docker":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm-2.822 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm-2.816 0h2.119c.102 0 .185-.084.185-.186V8.78c0-.102-.083-.186-.185-.186H8.345c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm-2.822 0h2.119c.102 0 .185-.084.185-.186V8.78c0-.102-.083-.186-.185-.186H5.523c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm-2.822 0h2.119c.102 0 .185-.084.185-.186V8.78c0-.102-.083-.186-.185-.186H2.7c-.102 0-.185.084-.185.186v2.112c0 .102.083.186.185.186zm5.644-2.822h2.119c.102 0 .186-.084.186-.186V5.958c0-.102-.084-.186-.186-.186H8.345c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm2.816 0h2.119c.102 0 .186-.084.186-.186V5.958c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm-5.638 0h2.119c.102 0 .185-.084.185-.186V5.958c0-.102-.083-.186-.185-.186H5.523c-.102 0-.186.084-.186.186v2.112c0 .102.084.186.186.186zm5.638-2.822h2.119c.102 0 .186-.084.186-.186V3.136c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186V5.25c0 .102.084.186.186.186zM23.953 11.53c-.365-.724-1.127-1.127-2.164-1.127h-.345V7.89c0-1.84-1.503-3.344-3.344-3.344h-.345V2.428C17.755.932 16.252-.572 14.412-.572h-.345v13.23h1.89c1.684 0 2.213-.807 2.658-2.106.335-.986 1.157-1.545 2.193-1.545.986 0 1.258.483 1.258.986v1.312c0 2.766-2.25 5.016-5.016 5.016H2.748C1.229 16.32-.008 17.557-.008 19.076v.345c0 1.52 1.237 2.756 2.756 2.756h18.966c4.136 0 7.487-3.351 7.487-7.487v-1.89c0-.465-.436-.93-.748-1.27z" fill="#2496ED"/>
          </svg>
        );
      case "React Three Fiber":
        return (
          <svg className={iconClass} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1.5" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        );
      case "Three.js":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" fill="#000000"/>
          </svg>
        );
      case "WebGL":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#a906c9" strokeWidth="2"/>
            <text x="12" y="15" fill="#a906c9" fontSize="8" fontWeight="bold" textAnchor="middle">3D</text>
          </svg>
        );
      case "Framer Motion":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v12H12L0 0zm0 12h12v12L0 12zm12 0h12v12H12V12z" fill="#F016DA"/>
          </svg>
        );
      case "Tailwind CSS":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6.036c-2.667 0-4.333 1.334-5 4 1-.667 2.167-.833 3.5-.5 1.053.263 1.807 1.028 2.64 1.87 1.36 1.373 2.93 2.95 6.36 2.95 2.667 0 4.333-1.334 5-4-1 .667-2.167.833-3.5.5-1.053-.263-1.807-1.028-2.64-1.87C16.505 7.613 14.935 6.036 12 6.036zm-8 6c-2.667 0-4.333 1.334-5 4 1-.667 2.167-.833 3.5-.5 1.053.264 1.807 1.03 2.64 1.87 1.36 1.373 2.93 2.951 6.36 2.951 2.667 0 4.333-1.334 5-4-1 .667-2.167.833-3.5.5-1.053-.263-1.807-1.028-2.64-1.87C8.505 13.65 6.935 12.036 4 12.036z" fill="#38BDF8"/>
          </svg>
        );
      case "Python":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.969 0C5.359 0 5.61 2.87 5.61 2.87v2.756h6.49v.919H3.14S0 6.136 0 12.3c0 6.166 2.766 5.897 2.766 5.897h1.65v-2.316s-.096-2.766 2.723-2.766h5.84v-5.84h6.49V3.123S19.5-.028 11.969 0zM12.03 24c6.61 0 6.36-2.87 6.36-2.87v-2.756h-6.49v-.919H20.86S24 17.864 24 11.7c0-6.166-2.766-5.897-2.766-5.897h-1.65v2.316s.096 2.766-2.723 2.766h-5.84v5.84h-6.49V20.877S4.5 24.028 12.03 24z" fill="#3776AB"/>
          </svg>
        );
      case "FastAPI":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12h9v10l10-10h-9V2z" fill="#059669"/>
          </svg>
        );
      case "LangChain":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z" fill="#1c3d5a"/>
          </svg>
        );
      case "OpenAI":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.36 9.8a6 6 0 00-3.32-4.94A6.16 6.16 0 0013.1 3a6 6 0 00-6.17 4.22 6.15 6.15 0 00-4 3.73 6 6 0 00.77 6.2 6.16 6.16 0 003.32 4.95 6.16 6.16 0 004.93 1.86A6 6 0 0018.17 19.8a6.15 6.15 0 004-3.73 6 6 0 00-.81-6.27zm-8.26 11.16a3.86 3.86 0 01-1.92-.51l4-2.31a1.27 1.27 0 00.63-1.1v-5.6l2.39 1.38a.08.08 0 01.04.06v6.23a3.89 3.89 0 01-5.14 1.85zM4.68 15.63a3.89 3.89 0 010-4.47l4 2.31c.2.11.33.32.33.55v5.6l-2.39-1.38a.08.08 0 01-.04-.06v-2.55zm-.51-5.14a3.89 3.89 0 011.83-1.34v4.61a1.27 1.27 0 00.63 1.1l4.85 2.8-2.39 1.38a.08.08 0 01-.07 0L5.3 16.71a3.89 3.89 0 01-1.13-6.22zM12 11.27l-2.4-1.39 2.4-1.38 2.4 1.38-2.4 1.39zm-3.66-2.12a3.86 3.86 0 011.92.51l-4 2.31a1.27 1.27 0 00-.63 1.1v5.6l-2.39-1.38a.08.08 0 01-.04-.06V11a3.89 3.89 0 015.14-1.85zM19.32 8.37a3.89 3.89 0 010 4.47l-4-2.31a1.27 1.27 0 00-.33-.55V5.38l2.39 1.38c.03.02.05.04.05.06v1.55zm.51 5.14a3.89 3.89 0 01-1.83 1.34V10.24a1.27 1.27 0 00-.63-1.1l-4.85-2.8 2.39-1.38a.08.08 0 01.07 0l4.85 2.8a3.89 3.89 0 011.13 6.22z" fill="#10A37F"/>
          </svg>
        );
      case "Vector DB":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z" fill="#a906c9"/>
          </svg>
        );
      case "GraphQL":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="#E10098" strokeWidth="2"/>
            <path d="M12 6l5.2 9H6.8L12 6z" fill="#E10098"/>
          </svg>
        );
      case "Shopify Engine":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 7.5l-6-2.5-6 2.5v7l6 2.5 6-2.5v-7z" stroke="#96bf48" strokeWidth="2"/>
          </svg>
        );
      case "Vercel Edge":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 20h20L12 2z" fill="#000000"/>
          </svg>
        );
      case "Figma Systems":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2h4v4H8V2z" fill="#F24E1E"/>
            <path d="M8 6h4v4H8V6z" fill="#A259FF"/>
            <path d="M4 6h4v4H4V6z" fill="#F24E1E"/>
            <path d="M4 10h4v4H4v-4z" fill="#1ABC9C"/>
            <path d="M8 10h4v4H8v-4z" fill="#60DF80"/>
            <path d="M12 10h4v4h-4v-4z" fill="#0ACF83"/>
            <path d="M12 6h4v4h-4V6z" fill="#1ABC9C"/>
            <path d="M12 2h4v4h-4V2z" fill="#FF7262"/>
          </svg>
        );
      case "Recharts":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3v18h18M3 17l6-6 4 4 8-8" stroke="#22c55e" strokeWidth="2" fill="none"/>
          </svg>
        );
      case "TypeScript":
        return (
          <svg className={iconClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#3178C6" rx="12" />
            <text x="82" y="85" fill="white" fontSize="42" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">TS</text>
          </svg>
        );
      case "Rust WASM":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#dea584"/>
          </svg>
        );
      case "TensorFlow":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" fill="#ff6f00"/>
          </svg>
        );
      case "WebRTC":
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#34d399"/>
          </svg>
        );
      default:
        return <Code className={cn(iconClass, "text-[#a906c9]")} />;
    }
  };

  // Helper to return beautiful, custom light gradient backgrounds tailored to each case study's brand identity
  const getDetailsSectionBgs = (id: string) => {
    const defaultBgs = {
      opportunity: "bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20",
      approach: "bg-gradient-to-b from-pink-50/30 via-purple-50/10 to-white",
      solution: "bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20"
    };

    const bgs: Record<string, typeof defaultBgs> = {
      apexpay: {
        opportunity: "bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30",
        approach: "bg-gradient-to-b from-indigo-50/30 via-blue-50/10 to-white",
        solution: "bg-gradient-to-b from-white via-blue-50/20 to-indigo-50/20"
      },
      aetheria: {
        opportunity: "bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30",
        approach: "bg-gradient-to-b from-pink-50/30 via-purple-50/10 to-white",
        solution: "bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20"
      },
      "cognitive-ai": {
        opportunity: "bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30",
        approach: "bg-gradient-to-b from-blue-50/30 via-purple-50/10 to-white",
        solution: "bg-gradient-to-b from-white via-purple-50/20 to-blue-50/20"
      },
      shopvibe: {
        opportunity: "bg-gradient-to-br from-white via-indigo-50/20 to-violet-50/30",
        approach: "bg-gradient-to-b from-violet-50/30 via-indigo-50/10 to-white",
        solution: "bg-gradient-to-b from-white via-indigo-50/20 to-violet-50/20"
      },
      helix: {
        opportunity: "bg-gradient-to-br from-white via-blue-50/20 to-pink-50/30",
        approach: "bg-gradient-to-b from-pink-50/30 via-blue-50/20 to-white",
        solution: "bg-gradient-to-b from-white via-blue-50/20 to-pink-50/20"
      },
      quantflow: {
        opportunity: "bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30",
        approach: "bg-gradient-to-b from-blue-50/30 via-indigo-50/20 to-white",
        solution: "bg-gradient-to-b from-white via-indigo-50/20 to-blue-50/20"
      },
      neurocare: {
        opportunity: "bg-gradient-to-br from-white via-purple-50/20 to-violet-50/30",
        approach: "bg-gradient-to-b from-violet-50/30 via-purple-50/10 to-white",
        solution: "bg-gradient-to-b from-white via-purple-50/20 to-violet-50/20"
      },
      aerofly: {
        opportunity: "bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30",
        approach: "bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-white",
        solution: "bg-gradient-to-b from-white via-pink-50/20 to-purple-50/20"
      }
    };

    return bgs[id] || defaultBgs;
  };

  // Helper to return beautiful, custom brand glow colors and stage card styles for section backgrounds
  const getBrandGlowColors = (id: string) => {
    const defaultGlows = {
      glow1: "bg-[#a906c9]/5",
      glow2: "bg-[#f016da]/4",
      glow3: "bg-[#1620f0]/4",
      accentLine: "bg-[#a906c9]",
      checkIcon: "text-[#f016da]",
      stage1: {
        text: "text-[#a906c9]",
        bg: "bg-purple-50",
        hoverBorder: "hover:border-purple-300/40",
        hoverText: "group-hover:text-purple-600"
      },
      stage2: {
        text: "text-[#f016da]",
        bg: "bg-pink-50",
        hoverBorder: "hover:border-pink-300/40",
        hoverText: "group-hover:text-pink-600"
      },
      stage3: {
        text: "text-[#1620f0]",
        bg: "bg-blue-50",
        hoverBorder: "hover:border-blue-300/40",
        hoverText: "group-hover:text-blue-600"
      }
    };

    const glows: Record<string, typeof defaultGlows> = {
      apexpay: {
        glow1: "bg-[#1620f0]/5",
        glow2: "bg-[#a906c9]/4",
        glow3: "bg-[#f016da]/4",
        accentLine: "bg-[#1620f0]",
        checkIcon: "text-[#1620f0]",
        stage1: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        },
        stage2: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage3: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        }
      },
      aetheria: {
        glow1: "bg-[#a906c9]/5",
        glow2: "bg-[#f016da]/4",
        glow3: "bg-[#1620f0]/4",
        accentLine: "bg-[#f016da]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage2: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        },
        stage3: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        }
      },
      "cognitive-ai": {
        glow1: "bg-[#a906c9]/5",
        glow2: "bg-[#f016da]/4",
        glow3: "bg-[#1620f0]/4",
        accentLine: "bg-[#a906c9]",
        checkIcon: "text-[#a906c9]",
        stage1: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage2: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        },
        stage3: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        }
      },
      shopvibe: {
        glow1: "bg-[#a906c9]/5",
        glow2: "bg-[#f016da]/4",
        glow3: "bg-[#1620f0]/4",
        accentLine: "bg-[#f016da]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage2: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        },
        stage3: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        }
      },
      helix: {
        glow1: "bg-[#1620f0]/5",
        glow2: "bg-[#a906c9]/4",
        glow3: "bg-[#f016da]/4",
        accentLine: "bg-[#1620f0]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        },
        stage2: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage3: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        }
      },
      quantflow: {
        glow1: "bg-[#1620f0]/5",
        glow2: "bg-[#a906c9]/4",
        glow3: "bg-[#f016da]/4",
        accentLine: "bg-[#1620f0]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        },
        stage2: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage3: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        }
      },
      neurocare: {
        glow1: "bg-[#a906c9]/5",
        glow2: "bg-[#f016da]/4",
        glow3: "bg-[#1620f0]/4",
        accentLine: "bg-[#a906c9]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage2: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        },
        stage3: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        }
      },
      aerofly: {
        glow1: "bg-[#a906c9]/5",
        glow2: "bg-[#f016da]/4",
        glow3: "bg-[#1620f0]/4",
        accentLine: "bg-[#f016da]",
        checkIcon: "text-[#f016da]",
        stage1: {
          text: "text-[#a906c9]",
          bg: "bg-purple-50",
          hoverBorder: "hover:border-purple-300/40",
          hoverText: "group-hover:text-purple-600"
        },
        stage2: {
          text: "text-[#f016da]",
          bg: "bg-pink-50",
          hoverBorder: "hover:border-pink-300/40",
          hoverText: "group-hover:text-pink-600"
        },
        stage3: {
          text: "text-[#1620f0]",
          bg: "bg-blue-50",
          hoverBorder: "hover:border-blue-300/40",
          hoverText: "group-hover:text-blue-600"
        }
      }
    };

    return glows[id] || defaultGlows;
  };

  // Helper to return beautiful, custom dark gradient overlays for the details hero section to match the brand identity perfectly with maximum contrast
  const getDetailsHeroBg = (id: string) => {
    const overlays: Record<string, string> = {
      apexpay: "from-[#0b0c2e] via-[#1620f0] to-[#a906c9]",
      aetheria: "from-[#080B4E] via-[#250230] to-[#d946ef]",
      "cognitive-ai": "from-[#10032b] via-[#a906c9] to-[#1620f0]",
      shopvibe: "from-[#0a0520] via-[#220430] to-[#7a1cac]",
      helix: "from-[#021020] via-[#1620f0] to-[#f016da]",
      quantflow: "from-[#020d1a] via-[#1620f0] to-[#a906c9]",
      neurocare: "from-[#090217] via-[#140526] to-[#a855f7]",
      aerofly: "from-[#0a0f1d] via-[#581c87] to-[#f016da]"
    };

    return overlays[id] || "from-[#080B4E] via-[#250230] to-[#750A61]";
  };

  // Helper to split title and dynamically render the last word in the project's brand color, matching the styled landing headers
  const renderHeroTitle = (title: string, id: string) => {
    const cleanTitle = title.split(": ")[1] || title;
    const words = cleanTitle.split(" ");
    if (words.length <= 1) return cleanTitle;
    
    const lastWord = words[words.length - 1];
    const remainingText = words.slice(0, words.length - 1).join(" ");
    
    // Map each project ID to its specific colorful text accent style
    const accentColors: Record<string, string> = {
      apexpay: "text-[#1620f0]",
      aetheria: "text-[#f016da]",
      "cognitive-ai": "text-[#a906c9]",
      shopvibe: "text-[#f016da]",
      helix: "text-[#1620f0]",
      quantflow: "text-[#3b82f6]",
      neurocare: "text-[#a906c9]",
      aerofly: "text-[#f016da]"
    };
    
    const accentClass = accentColors[id] || "text-[#f016da]";
    
    return (
      <>
        {remainingText}{" "}
        <span className={accentClass}>{lastWord}</span>
      </>
    );
  };

  // Helper to return beautiful, custom card overlay gradients that fade from solid color on the left to transparent on the right
  const getCardOverlayBg = (id: string) => {
    const overlays: Record<string, string> = {
      apexpay: "from-[#0b0c2e]/80 via-[#0b0c2e]/50 to-transparent",
      aetheria: "from-[#1e022b]/80 via-[#1e022b]/50 to-transparent",
      "cognitive-ai": "from-[#0a0520]/80 via-[#0a0520]/50 to-transparent",
      shopvibe: "from-[#10032b]/80 via-[#10032b]/50 to-transparent",
      helix: "from-[#021020]/80 via-[#021020]/50 to-transparent",
      quantflow: "from-[#020d1a]/80 via-[#020d1a]/50 to-transparent",
      neurocare: "from-[#0c041c]/80 via-[#0c041c]/50 to-transparent",
      aerofly: "from-[#0a0f1d]/80 via-[#0a0f1d]/50 to-transparent"
    };
    return overlays[id] || "from-[#1e022b]/80 via-[#1e022b]/50 to-transparent";
  };

  // Helper function to render the provided mockup image directly with a sleek hover effect
  const renderDeviceMockup = (id: string, imageUrl: string) => {
    return (
      <div className="relative w-full max-w-[500px] flex items-center justify-center py-6">
        <img 
          src={imageUrl} 
          alt="Case Study Mockup" 
          className="w-full h-auto max-h-[380px] object-contain transition-transform duration-700 group-hover:scale-[1.03] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]" 
        />
      </div>
    );
  };

  // Case Studies Dataset (Restructured alternating full-width project banners with complete metrics)
  const caseStudies: CaseStudy[] = [
    {
      id: "apexpay",
      title: "ApexPay: Global Cross-Border P2P Payments",
      category: "Fintech",
      description: "Engineered a secure, ultra-low latency peer-to-peer payment gateway processing millions in transactions daily with military-grade encryption.",
      client: "ApexPay Global Corp",
      duration: "6 Months",
      role: "Security & Cloud Architecture",
      year: "2025",
      tags: ["Next.js", "Go", "PostgreSQL", "Redis", "PCI-DSS", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      bgColor: "from-[#083344] via-[#0c4a6e] to-[#0284c7]",
      tagline: "Secure, Ultra-Low Latency Cross-Border P2P Gateway for Next-Gen Payments",
      opportunity: "ApexPay Global needed to replace legacy wire transfer protocols with a secure, real-time peer-to-peer transaction network capable of processing millions in daily volume across borders without verification delays.",
      approach: "We collaborated with global compliance officers to model high-performance encrypted ledgers. Prototyped a distributed ledger logic system, running transactional validation directly on edge servers before syncing with primary database clusters.",
      solutionPoints: [
        "Asynchronous messaging brokers based on Go for parallel processing.",
        "Edge server caching with Redis to maintain <180ms latency.",
        "Military-grade PCI-DSS compliance encryption keys.",
        "Real-time fraud detection pipelines using network topology logs."
      ],
      impactPoints: [
        "Enabled instant P2P cross-border payments across 30+ countries.",
        "Reduced average settlement cycles from 3 days to less than 180 milliseconds.",
        "Saved over $150k in transaction processing overheads in the first quarter."
      ],
      metrics: [
        { label: "Transaction Speed", value: "<180ms" },
        { label: "Daily Volume", value: "$4.2M+" },
        { label: "Compliance Score", value: "100%" }
      ]
    },
    {
      id: "aetheria",
      title: "Aetheria: Immersive Fashion Marketplace",
      category: "UI/UX",
      description: "Designed and engineered an ultra-premium, interactive 3D commerce workspace allowing customers to customize clothing in real-time.",
      client: "Aetheria Paris Ltd",
      duration: "4 Months",
      role: "Art Direction & WebGL UI",
      year: "2025",
      tags: ["React Three Fiber", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop",
      bgColor: "from-[#3b0764] via-[#581c87] to-[#d946ef]",
      tagline: "Tactile, Immersive 3D Commerce Engine and Apparel Customization Suite",
      opportunity: "Aetheria wanted to revolutionize traditional shopping catalogs by letting consumers tactilely customize and interact with fabrics in a virtual 3D showroom, bridging the gap between tactile feel and digital shopping.",
      approach: "Designed hardware-accelerated WebGL pipelines compiled through React Three Fiber, custom-mapping fabric meshes to optimize rendering and avoid loading delays on mobile viewports.",
      solutionPoints: [
        "Hardware-accelerated WebGL fabric rendering engine.",
        "Dynamic mesh-bending algorithms for realistic clothing drape.",
        "Real-time HSL color-mapping shaders to reflect exact lighting.",
        "Edge-optimized asset delivery for seamless loading."
      ],
      impactPoints: [
        "Boosted digital sales conversion rates by over 142%.",
        "Increased average online customer engagement duration by 4 minutes.",
        "Minimized returns and fabric dissatisfaction rate by 34%."
      ],
      metrics: [
        { label: "Conversion Rate", value: "+142%" },
        { label: "Session Duration", value: "4m 12s" },
        { label: "Load Time Reduction", value: "65%" }
      ]
    },
    {
      id: "cognitive-ai",
      title: "CognitiveAI: Enterprise LLM Reasoning Graph",
      category: "AI Solutions",
      description: "Constructed a secure semantic graph reasoning agent trained on corporate compliance databases for automated logistics operations.",
      client: "Cognitive Corp",
      duration: "5 Months",
      role: "AI Pipelines & Interface Architect",
      year: "2025",
      tags: ["Python", "FastAPI", "LangChain", "OpenAI", "Next.js", "Vector DB"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
      bgColor: "from-[#022c22] via-[#064e3b] to-[#059669]",
      tagline: "LLM Reasoning Graph and Semantic Search System for Corporate Compliance",
      opportunity: "Unstructured compliance documents and logistics logs were causing severe delays, with employees manually cross-referencing global shipping rules across disjointed legacy systems.",
      approach: "Prototyped a multi-agent RAG reasoning architecture with semantic graphs, parsing thousands of complex shipping manuals and converting relationships into queryable vector spaces.",
      solutionPoints: [
        "Multi-agent LLM reasoning pipeline engineered with LangChain.",
        "Interactive SVG node-graph visualizer to explore document pathways.",
        "FastAPI backend microservices streaming answers selectively.",
        "Vector database indexing mapping relationships in real-time."
      ],
      impactPoints: [
        "Reduced cargo compliance auditing time from 2 hours to 10 seconds.",
        "Achieved a 99.4% data extraction accuracy rating across test logs.",
        "Fully automated complex logistics routing with zero manual failures."
      ],
      metrics: [
        { label: "Compliance Auditing", value: "12x Faster" },
        { label: "Extraction Accuracy", value: "99.4%" },
        { label: "Manual Effort Cut", value: "85%" }
      ]
    },
    {
      id: "shopvibe",
      title: "ShopVibe: Headless E-commerce Suite",
      category: "Web Engineering",
      description: "Architected a lightning-fast modular headless commerce platform with custom edge caching and predictive image optimizations.",
      client: "ShopVibe Retail Inc",
      duration: "3 Months",
      role: "Headless Frontend Engineering",
      year: "2024",
      tags: ["Next.js", "GraphQL", "Shopify Engine", "Vercel Edge", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      bgColor: "from-[#17153b] via-[#2e073f] to-[#7a1cac]",
      tagline: "Ultra-Fast Headless E-Commerce Frontends for Seasonal High-Velocity Sales",
      opportunity: "Legacy monolith architectures were buckling during high-traffic flash sales, causing slow product discovery, checkout drops, and direct loss of marketing revenue.",
      approach: "Decoupled the e-commerce engine entirely, establishing Next.js App Router at the edge to serve static assets instantly and fetch dynamic cart data on demand.",
      solutionPoints: [
        "Edge-rendered Next.js storefront pages distributed globally.",
        "GraphQL queries streaming inventory and cart states instantly.",
        "Optimistic client-side UI states to make updates feel instantaneous.",
        "Dynamic media compression and image caching pipelines."
      ],
      impactPoints: [
        "Secured a perfect 99/100 Lighthouse performance rating.",
        "Reduced mobile bounce rates by 48% during Black Friday sales.",
        "Increased overall direct e-commerce checkout completion by 38%."
      ],
      metrics: [
        { label: "Page Speed Score", value: "99/100" },
        { label: "Bounce Rate reduction", value: "-48%" },
        { label: "Mobile Revenue boost", value: "+38%" }
      ]
    },
    {
      id: "helix",
      title: "Helix: Interactive Patient Telemetry Clinic",
      category: "UI/UX",
      description: "Transformed complex telemetry and patient vital data charts into a premium, customizable widget dashboard.",
      client: "Helix Labs Ltd",
      duration: "3 Months",
      role: "Dashboard Strategy & UI Designer",
      year: "2025",
      tags: ["Figma Systems", "Next.js", "Recharts", "Framer Motion", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      bgColor: "from-[#0f172a] via-[#1e293b] to-[#0891b2]",
      tagline: "Telemetry Dashboard mapping clinical vital charts into intuitive interfaces",
      opportunity: "Clinicians were overwhelmed by raw telemetry metrics, leading to critical health signals getting buried under visual noise and slow patient diagnosis times.",
      approach: "Softcr8ors conducted intensive UX research to map clinical workflows. We engineered a sleek glassmorphic widget system using Recharts, allowing surgeons to drag-and-drop key telemetry blocks easily.",
      solutionPoints: [
        "Highly interactive Recharts widgets rendering vital patient waveforms.",
        "Drag-and-drop clinical canvas using standard layout configurations.",
        "Sound-damped auditory telemetry alarms minimizing sensory overload.",
        "Secure portal gateways compliant with strict healthcare standards."
      ],
      impactPoints: [
        "Accelerated vital diagnosis speeds by over 30% during emergency drills.",
        "Achieved a 96% satisfaction score from active clinical personnel.",
        "Dramatically reduced critical alarm noise pollution inside clinical wards by 40%."
      ],
      metrics: [
        { label: "Diagnosis Speed", value: "+30%" },
        { label: "Clinician Rating", value: "96%" },
        { label: "Critical Alarm Noise", value: "-40%" }
      ]
    },
    {
      id: "quantflow",
      title: "QuantFlow: High-Frequency Trading Terminal",
      category: "Fintech",
      description: "Constructed a low-latency WebGL charting interface and state machine processing 100k+ real-time edge telemetry operations.",
      client: "QuantFlow Partners",
      duration: "5 Months",
      role: "High-Performance Engineering",
      year: "2024",
      tags: ["TypeScript", "Rust WASM", "Three.js", "Docker", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2070&q=80",
      mockupImageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2070&q=80",
      bgColor: "from-[#111827] via-[#1f2937] to-[#3b82f6]",
      tagline: "WASM-Compiled High-Performance Dashboard visualizing active edge grids",
      opportunity: "Visualizing massive node graphs of globally distributed servers in real-time caused heavy CPU spikes, making control dashboards sluggish and failing high-speed trades.",
      approach: "Softcr8ors compiled a custom Rust-based data parser into WebAssembly to parse server health statistics locally on the browser, rendering the results using hardware-accelerated WebGL charts.",
      solutionPoints: [
        "Rust WASM-compiled engines parsing live transactional network logs.",
        "Hardware-accelerated Three.js WebGL charting for real-time graphs.",
        "Strict WebSockets streaming protocol managing server health updates.",
        "Optimized Docker container architecture deploying to multiple edge regions."
      ],
      impactPoints: [
        "Dropped browser CPU usage by 85% during peak trading intervals.",
        "Ensured data stream rendering latencies remain strictly under 15ms.",
        "Successfully tracked over 25,000 active nodes concurrently without lag."
      ],
      metrics: [
        { label: "CPU Usage Drop", value: "85%" },
        { label: "Server Latency", value: "<15ms" },
        { label: "Edge Nodes Managed", value: "25k+" }
      ]
    },
    {
      id: "neurocare",
      title: "NeuroCare: AI-Powered Telehealth Portal",
      category: "AI Solutions",
      description: "Designed convolutional deep neural networks to accurately tag micro-anomalies in medical scans and stream high-quality video sessions.",
      client: "NeuroCare Group",
      duration: "5 Months",
      role: "Full-Stack Compliance & AI Engineer",
      year: "2025",
      tags: ["Next.js", "FastAPI", "TensorFlow", "WebRTC", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      mockupImageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      bgColor: "from-[#1a0b2e] via-[#3b115c] to-[#a855f7]",
      tagline: "Neural Net diagnostic scanner integrated with HIPAA-compliant WebRTC stream",
      opportunity: "Ensuring strict medical privacy guidelines (HIPAA) while deploying complex machine learning models that identify neural micro-anomalies in real-time during peer-to-peer physician consultations.",
      solutionPoints: [
        "Convolutional neural networks built on TensorFlow for anomaly tagging.",
        "HIPAA-compliant, end-to-end encrypted WebRTC video streaming.",
        "Isolated API microservices in FastAPI securing scan records.",
        "Dynamic, easy-to-use patient timeline visualizations in Next.js."
      ],
      approach: "We designed isolated, secure API wrappers built in Python to execute convolutional Neural Net operations locally on server nodes, streaming peer-to-peer physician consultations through end-to-end encrypted tunnels.",
      impactPoints: [
        "Achieved a 98.7% diagnostic scan accuracy rating across medical neural sets.",
        "Secured a flawless 100% HIPAA compliance score during validation audits.",
        "Successfully connected 8,000+ active doctors globally in secure consultations."
      ],
      metrics: [
        { label: "Scan Accuracy", value: "98.7%" },
        { label: "Compliance Score", value: "100%" },
        { label: "Active Doctors", value: "8,000+" }
      ]
    },
    {
      id: "aerofly",
      title: "AeroFly: Ultra-Luxury Jet Booking Dashboard",
      category: "UI/UX",
      description: "Reinvented high-net-worth mobile seat booking flows with luxury interactive visuals and elegant micro-interactions.",
      client: "AeroFly Luxury Jets",
      duration: "4 Months",
      role: "Creative Frontend & Interactions",
      year: "2025",
      tags: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2070&q=80",
      mockupImageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2070&q=80",
      bgColor: "from-[#1e293b] via-[#334155] to-[#d97706]",
      tagline: "Cinematic seat selector guidance system powered by interactive WebGL 3D models",
      opportunity: "AeroFly's elite clients were using a clunky, text-heavy charter booking form that detracted from their premium brand perception and lowered customer reservation rates.",
      approach: "We engineered an interactive 3D private jet cabin configuration dashboard using Three.js, integrated with seamless animations that guide the client smoothly from selection to takeoff reservation.",
      solutionPoints: [
        "Interactive 3D private jet cabin configuration selectors.",
        "Seamless guides using Framer Motion guiding seat configurations.",
        "WebGL-accelerated visual accents creating high-end lighting reflections.",
        "Fast Next.js edge API backend securing direct travel configurations."
      ],
      impactPoints: [
        "Increased direct booking completions by 170% in the first quarter.",
        "Achieved a stellar Net Promoter Score (NPS) of 88 from HNW clients.",
        "Boosted average private jet charter order values by 12%."
      ],
      metrics: [
        { label: "Booking Completion", value: "+170%" },
        { label: "Customer NPS Score", value: "88" },
        { label: "Average Order Value", value: "+12%" }
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-['General_Sans',sans-serif] relative overflow-x-hidden selection:bg-[#a906c9] selection:text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        {!selectedStudy ? (
          // ── PROJECTS LIST VIEW ──
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="font-['General_Sans',sans-serif] font-normal"
          >
            {/* ── HERO SECTION (Restored Centered Design) ── */}
            <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white z-0 perspective-1000">
              <motion.div 
                style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                className="relative w-full min-h-[100vh] md:min-h-[110vh] rounded-[2.5rem] overflow-hidden bg-slate-50 flex flex-col items-center justify-center pt-24 pb-32 md:pb-40"
              >
                {/* Background image & brand overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Softcr8ors team collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#080B4E]/75 via-[#250230]/65 to-[#750A61]/55 backdrop-blur-[0.5px]" />
                </div>

                {/* Centered Text Content */}
                <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-[72px] font-medium tracking-tight leading-[1.1] text-white px-2 relative z-10 [text-shadow:0_4px_24px_rgba(0,0,0,0.5)] font-['General_Sans',sans-serif]"
                  >
                    {t("work.hero.title.p1")} <span className="text-[#a906c9]">{t("work.hero.title.p2")}</span> <span className="text-[#f016da]">{t("work.hero.title.p3")}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-slate-200 text-sm md:text-xl font-normal leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto relative z-10 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] font-['General_Sans',sans-serif]"
                    style={{ color: '#e2e8f0' }}
                  >
                    {t("work.hero.desc")}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 md:mt-10 flex justify-center relative z-10 font-['General_Sans',sans-serif]"
                  >
                    <RollingTextButton 
                      label={t("work.hero.btn")} 
                      href="#portfolio-grid" 
                      variant="gradient" 
                    />
                  </motion.div>

                </div>
              </motion.div>
            </section>

            {/* ── PROJECTS LIST SECTION (BrainX Style Alternating Banners) ── */}
            <section id="portfolio-grid" className="relative w-full px-4 md:px-6 py-20 bg-slate-50 z-30 scroll-mt-24 font-['General_Sans',sans-serif] font-normal">
              <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
                
                {caseStudies.slice(0, visibleCount).map((study, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      key={study.id}
                      onClick={() => {
                        setSelectedStudy(study);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="relative w-full min-h-[440px] md:min-h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border border-white/10 group transition-all duration-500 bg-slate-950 cursor-pointer hover:border-purple-500/30"
                    >
                      {/* Background cover image & dynamic project brand overlay gradient */}
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={study.imageUrl} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />
                        <div className={cn("absolute inset-0 bg-gradient-to-r z-10", getCardOverlayBg(study.id))} />
                      </div>

                      {/* Subtle Grid overlay for high-tech premium feel */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-10 mix-blend-overlay">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`grid-pattern-${study.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-pattern-${study.id})`} />
                        </svg>
                      </div>

                      {/* Left/Right Text Content (perfectly consistent layout) */}
                      <div className="w-full md:w-[50%] relative z-20 flex flex-col items-center md:items-start text-center md:text-left p-8 md:p-16">
                        
                        {/* title */}
                        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-medium text-white leading-[1.1] mb-6 tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.2)] font-['General_Sans',sans-serif]">
                          {renderHeroTitle(study.title, study.id)}
                        </h2>
                        
                        {/* description */}
                        <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-md font-['General_Sans',sans-serif]">
                          {study.description}
                        </p>
                        
                        {/* Button */}
                        <div
                          className="group/btn relative inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-8 py-3.5 text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg font-['General_Sans',sans-serif] font-medium"
                        >
                          <span>{t("work.btn.read")}</span>
                          <ArrowRight className="w-4 h-4 ml-2 text-white group-hover/btn:text-slate-900 transition-colors" />
                        </div>
                      </div>

                      {/* Devices Showcase block (Right side) */}
                      <div className="w-full md:w-[50%] relative z-20 flex items-center justify-center p-8 md:p-12 mt-6 md:mt-0">
                        {renderDeviceMockup(study.id, study.mockupImageUrl)}
                      </div>

                    </motion.div>
                  );
                })}

                {visibleCount < caseStudies.length ? (
                  <div className="flex justify-center pt-12 md:pt-16">
                    <motion.button
                      onClick={() => setVisibleCount(prev => Math.min(prev + 4, caseStudies.length))}
                      className="group relative inline-flex items-center justify-center rounded-2xl px-12 py-4 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl text-white bg-[#050101] border border-white/10 hover:shadow-purple-500/10 min-w-[200px]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <span className="relative z-10 flex items-center gap-2 tracking-wider text-xs md:text-sm uppercase font-['General_Sans',sans-serif]">
                        {t("work.btn.load_more")} <ChevronDown className="w-4 h-4 animate-bounce shrink-0 ml-1" />
                      </span>
                    </motion.button>
                  </div>
                ) : (
                  <div className="flex justify-center pt-12 md:pt-16">
                    <motion.button
                      onClick={() => setVisibleCount(4)}
                      className="group relative inline-flex items-center justify-center rounded-2xl px-12 py-4 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl text-white bg-[#050101] border border-white/10 hover:shadow-purple-500/10 min-w-[200px]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <span className="relative z-10 flex items-center gap-2 tracking-wider text-xs md:text-sm uppercase font-['General_Sans',sans-serif]">
                        {t("work.btn.load_less")} <ChevronUp className="w-4 h-4 animate-bounce shrink-0 ml-1" />
                      </span>
                    </motion.button>
                  </div>
                )}

              </div>
            </section>

            {/* ── High-Fidelity Call-To-Action (CTA) Section ── */}
            <section className="relative w-full px-4 pt-10 md:pt-16 pb-16 md:pb-24 bg-slate-50 z-0 flex justify-center mt-6 overflow-hidden border-t border-slate-100">
              
              <div className="relative w-full max-w-6xl min-h-[550px] md:min-h-[500px] rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#35155D] to-[#611b47] border border-purple-400/30 shadow-2xl flex flex-col md:flex-row items-center px-6 md:px-16 py-12 md:py-0 overflow-hidden md:overflow-visible">
                
                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 relative z-20 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 md:pl-8">
                  <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-4 md:mb-6">
                    {t("work.cta.title.p1")} <span className="text-purple-300">{t("work.cta.title.p2")}</span>
                  </h2>
                  <p className="text-purple-200/90 text-sm md:text-lg font-normal mb-8 max-w-[280px] md:max-w-md mx-auto md:mx-0">
                    {t("work.cta.desc")}
                  </p>
                  
                  <div className="relative group cursor-pointer inline-block">
                    <motion.a
                      href="/#contact"
                      className="relative z-10 inline-flex items-center justify-center rounded-xl px-8 py-3 md:px-10 md:py-4 font-bold font-sans overflow-hidden transition-all duration-500 bg-[#050101] text-white shadow-xl text-sm md:text-base border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <span className="relative z-10 flex items-center gap-2">
                        {t("work.cta.btn")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.a>
                  </div>
                </div>

                {/* Left: Mobile Mockup */}
                <div className="w-full md:w-1/2 flex justify-center relative z-10 h-[280px] md:h-full mt-10 md:mt-0 order-2 md:order-1">
                   <motion.div 
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                     className="absolute top-4 md:top-1/2 md:-translate-y-1/2 w-[220px] md:w-[300px] h-[450px] md:h-[550px] bg-[#1e1e24] rounded-[36px] md:rounded-[44px] border-[8px] md:border-[10px] border-[#2A2A2E] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform rotate-[6deg] hover:rotate-[3deg] transition-transform duration-500 z-30 overflow-hidden ring-1 ring-white/10"
                   >
                     {/* iPhone Dynamic Island */}
                     <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-black rounded-full z-50 flex justify-between items-center px-1.5">
                       <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-800 rounded-full" />
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-50" />
                     </div>
                     
                     <div className="flex-1 bg-white relative rounded-[28px] md:rounded-[32px] overflow-hidden h-full w-full">
                        <div className="absolute top-0 left-0 origin-top-left w-[390px] h-[800px] scale-[0.56] md:scale-[0.71]">
                          <motion.div
                            animate={{ y: [-3200, -4200, -3200] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-[5000px]"
                          >
                            <iframe 
                              src="/" 
                              className="w-full h-[5000px] border-none pointer-events-none scale-[1.01]" 
                              scrolling="no" 
                              tabIndex={-1} 
                            />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-pink-500/10 pointer-events-none z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
                     </div>
                   </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          // ── DYNAMIC PROJECT DETAILS VIEW (Refined & Elevated with brand gradients) ──
          <motion.div
            key="details-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white relative z-20 font-['General_Sans',sans-serif] font-normal"
          >
            {/* ── SECTION 1: DETAILS HERO (Navbar Inside the Curved Card) ── */}
            <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white z-0 perspective-1000 font-['General_Sans',sans-serif]">
              <motion.div 
                style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                className="relative w-full h-[calc(100vh-2rem)] min-h-[600px] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 bg-slate-50"
              >
                
                {/* Background image & dynamic project brand overlay */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <img 
                    src={selectedStudy.imageUrl} 
                    alt={selectedStudy.title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-70 mix-blend-multiply", getDetailsHeroBg(selectedStudy.id))} />
                  <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-50", getDetailsHeroBg(selectedStudy.id))} />
                </div>

                {/* Back to Projects navigation button removed per user request for clean centering */}

                {/* Grid overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0 mix-blend-overlay">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="url(#grid-pattern-detail-hero)" />
                    <defs>
                      <pattern id="grid-pattern-detail-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                  </svg>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center">
                  
                  <SectionBadge text={t("work.detail.badge")} className="mx-auto mb-6 bg-white border border-slate-200 shadow-md" />
                  
                  <h1 className="text-3xl sm:text-5xl md:text-[72px] font-medium text-white leading-[1.1] tracking-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.5)] font-['General_Sans',sans-serif] px-2 max-w-4xl mx-auto">
                    {renderHeroTitle(selectedStudy.title, selectedStudy.id)}
                  </h1>

                  <p className="text-slate-200 text-sm md:text-xl font-normal leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto font-['General_Sans',sans-serif] [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
                    {selectedStudy.tagline}
                  </p>

                  {/* Brand Badges centered with white background and black text */}
                  <div className="flex flex-wrap gap-2.5 mt-8 justify-center font-['General_Sans',sans-serif] font-normal">
                    {selectedStudy.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-5 py-2 rounded-full border border-white text-slate-900 font-bold tracking-widest text-[10px] md:text-xs uppercase bg-white shadow-lg shadow-black/20 font-['General_Sans',sans-serif]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  </div>
                </motion.div>
              </section>

            {/* ── SECTION 2: OPPORTUNITY / CHALLENGE (Split 2-Column Flex-Row Grid) ── */}
            <section className={cn("py-20 md:py-28 px-6 md:px-12 border-b border-slate-100 relative overflow-hidden font-['General_Sans',sans-serif]", getDetailsSectionBgs(selectedStudy.id).opportunity)}>
              {/* Soft dynamic project brand back glows */}
              <div className={cn("absolute w-[350px] h-[350px] rounded-full blur-[85px] -top-12 -left-12 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow1)} />
              <div className={cn("absolute w-[350px] h-[350px] rounded-full blur-[80px] top-1/2 left-1/3 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow2)} />
              <div className={cn("absolute w-[350px] h-[350px] rounded-full blur-[90px] -bottom-12 -right-12 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow3)} />
 
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Perfectly Centered Text Content */}
                  <div className="flex flex-col items-center text-center space-y-5 lg:pr-6">
                    <SectionBadge text={t("work.detail.opp.badge")} className="mx-auto" />
                    <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-none uppercase font-['General_Sans',sans-serif]">
                      {t("work.detail.opp.title")}
                    </h2>
                    <div className={cn("w-16 h-[2px] my-2 mx-auto", getBrandGlowColors(selectedStudy.id).accentLine)} />
                    <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-lg pt-4 font-['General_Sans',sans-serif]">
                      {selectedStudy.opportunity}
                    </p>
                  </div>
                  
                  {/* Right Column: Beautiful Tablet Mockup inside glowing brand gradient border */}
                  <div className="flex justify-center relative w-full">
                    <div className="relative w-full max-w-[480px] aspect-[16/10] p-[3px] bg-gradient-to-tr from-[#1620f0] via-[#f016da] to-[#a906c9] rounded-[24px] shadow-[0_20px_50px_rgba(240,22,218,0.12)] hover:scale-[1.03] transition-all duration-500">
                      <div className="w-full h-full bg-slate-900 rounded-[21px] overflow-hidden">
                        <img src={selectedStudy.imageUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
 
                </div>
              </div>
            </section>
 
            {/* ── SECTION 3: APPROACH (High-End 3-Stage Tactical Roadmap Grid) ── */}
            <section className={cn("py-24 px-6 md:px-12 border-b border-slate-100 relative overflow-hidden font-['General_Sans',sans-serif]", getDetailsSectionBgs(selectedStudy.id).approach)}>
              {/* Subtle dynamic brand glows */}
              <div className={cn("absolute w-[400px] h-[400px] rounded-full blur-[95px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow2)} />
              
              <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
                <SectionBadge text={t("work.detail.sol.badge")} className="mx-auto" />
                
                <div className="text-center space-y-4 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-none uppercase font-['General_Sans',sans-serif]">
                    {t("work.detail.sol.title")}
                  </h2>
                  <div className={cn("w-16 h-[2px] mx-auto my-2", getBrandGlowColors(selectedStudy.id).accentLine)} />
                </div>

                {/* 3-Column Roadmap Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-14">
                  
                  {/* Stage 1 */}
                  <div className={cn("bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[280px] group", getBrandGlowColors(selectedStudy.id).stage1.hoverBorder)}>
                    <div>
                      <span className={cn("text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full w-fit block mb-6 uppercase", getBrandGlowColors(selectedStudy.id).stage1.text, getBrandGlowColors(selectedStudy.id).stage1.bg)}>
                        {t("work.detail.stage1.badge")}
                      </span>
                      <h4 className={cn("text-lg font-medium text-slate-900 mb-3 transition-colors", getBrandGlowColors(selectedStudy.id).stage1.hoverText)}>
                        {t("work.detail.stage1.title")}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
                        {t("work.detail.stage1.desc")}
                      </p>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className={cn("bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[280px] group", getBrandGlowColors(selectedStudy.id).stage2.hoverBorder)}>
                    <div>
                      <span className={cn("text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full w-fit block mb-6 uppercase", getBrandGlowColors(selectedStudy.id).stage2.text, getBrandGlowColors(selectedStudy.id).stage2.bg)}>
                        {t("work.detail.stage2.badge")}
                      </span>
                      <h4 className={cn("text-lg font-medium text-slate-900 mb-3 transition-colors", getBrandGlowColors(selectedStudy.id).stage2.hoverText)}>
                        {t("work.detail.stage2.title")}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
                        {selectedStudy.approach}
                      </p>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className={cn("bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[280px] group", getBrandGlowColors(selectedStudy.id).stage3.hoverBorder)}>
                    <div>
                      <span className={cn("text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full w-fit block mb-6 uppercase", getBrandGlowColors(selectedStudy.id).stage3.text, getBrandGlowColors(selectedStudy.id).stage3.bg)}>
                        {t("work.detail.stage3.badge")}
                      </span>
                      <h4 className={cn("text-lg font-medium text-slate-900 mb-3 transition-colors", getBrandGlowColors(selectedStudy.id).stage3.hoverText)}>
                        {t("work.detail.stage3.title")}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed">
                        {t("work.detail.stage3.desc")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>
 
            {/* ── SECTION 4: SOLUTION (Alternating Split 2-Column Flex-Row Grid) ── */}
            <section className={cn("py-20 md:py-28 px-6 md:px-12 border-b border-slate-100 relative overflow-hidden font-['General_Sans',sans-serif]", getDetailsSectionBgs(selectedStudy.id).solution)}>
              <div className={cn("absolute w-[350px] h-[350px] rounded-full blur-[80px] -top-12 -right-12 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow3)} />
 
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Beautiful Tablet Mockup inside glowing brand gradient border */}
                  <div className="flex justify-center relative w-full order-2 lg:order-1">
                    <div className="relative w-full max-w-[480px] aspect-[16/10] p-[3px] bg-gradient-to-tr from-[#1620f0] via-[#f016da] to-[#a906c9] rounded-[24px] shadow-[0_20px_50px_rgba(240,22,218,0.12)] hover:scale-[1.03] transition-all duration-500">
                      <div className="w-full h-full bg-slate-900 rounded-[21px] overflow-hidden">
                        <img src={selectedStudy.imageUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
 
                  {/* Right Column: Perfectly Centered Bullet Points */}
                  <div className="flex flex-col items-center text-center space-y-6 order-1 lg:order-2 lg:pl-6">
                    <div className="space-y-2 flex flex-col items-center">
                      <SectionBadge text={t("work.detail.feat.badge")} className="mx-auto" />
                      <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-none uppercase font-['General_Sans',sans-serif]">
                        {t("work.detail.feat.title")}
                      </h2>
                    </div>
                    
                    <div className={cn("w-16 h-[2px] my-1 mx-auto", getBrandGlowColors(selectedStudy.id).accentLine)} />
 
                    <div className="space-y-4 w-full flex flex-col items-center">
                      {selectedStudy.solutionPoints.map((point, i) => (
                        <div key={i} className={cn("flex gap-4 items-start text-left bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-0.5 transition-all duration-300 max-w-xl w-full", getBrandGlowColors(selectedStudy.id).stage1.hoverBorder)}>
                          <CheckCircle2 className={cn("w-5 h-5 mt-1 shrink-0 animate-pulse", getBrandGlowColors(selectedStudy.id).checkIcon)} />
                          <div>
                            <h4 className="text-sm font-semibold text-slate-800 leading-snug uppercase tracking-wider font-['General_Sans',sans-serif]">
                              {point.split(" engineered ")[0] || point.split(" based ")[0] || "Integrated Capabilities"}
                            </h4>
                            <p className="text-slate-500 font-normal text-xs md:text-sm mt-1 font-['General_Sans',sans-serif]">{point}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
 
                </div>
              </div>
            </section>
 

            {/* ── SECTION 6: TECHNOLOGY STACK (ImageKit-Style Dashboard Deck Panel) ── */}
            <section className={cn("py-28 px-6 md:px-12 border-t border-slate-100 font-['General_Sans',sans-serif] relative overflow-hidden", getDetailsSectionBgs(selectedStudy.id).approach)}>
              <div className={cn("absolute w-[300px] h-[300px] rounded-full blur-[80px] -bottom-10 -left-10 pointer-events-none", getBrandGlowColors(selectedStudy.id).glow3)} />
              
              <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
                <div className="space-y-2">
                  <span className={cn("text-xs font-black uppercase tracking-[0.25em] leading-none font-['General_Sans',sans-serif] font-normal", getBrandGlowColors(selectedStudy.id).stage1.text)}>
                    {t("work.detail.tech.badge")}
                  </span>
                  <h2 className="text-3xl md:text-[42px] font-medium text-slate-900 tracking-tight uppercase leading-none font-['General_Sans',sans-serif]">
                    {t("work.detail.tech.title")}
                  </h2>
                  <p className="text-slate-500 text-xs md:text-sm font-normal max-w-xl mx-auto mt-4 leading-relaxed font-['General_Sans',sans-serif]">
                    {t("work.detail.tech.desc")}
                  </p>
                </div>

                {/* Wide Glassmorphic Control Console Deck */}
                <div className="bg-gradient-to-br from-white via-purple-50/10 to-pink-50/10 backdrop-blur-xl p-5 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] max-w-4xl mx-auto mt-12 relative overflow-hidden">
                  <div className="flex flex-wrap gap-2.5 md:gap-4 justify-center">
                    {selectedStudy.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={cn("group px-4 py-2.5 md:px-6 md:py-3.5 text-xs md:text-sm font-normal text-slate-700 bg-white border border-slate-200/80 rounded-full flex items-center gap-2 md:gap-2.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer font-['General_Sans',sans-serif]", getBrandGlowColors(selectedStudy.id).stage1.hoverBorder)}
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      <CinematicFooter />
    </main>
  );
}
