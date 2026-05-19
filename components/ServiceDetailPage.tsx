"use client";
 
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown, LayoutGrid, Globe, Zap, Bot, Shield, TrendingUp, Gauge, Activity } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { InteractiveCanvas } from "@/components/ui/hero-designali";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";
import GlassmorphismProfileCard from "@/components/ui/glassmorphism-profile-card";
import { DestinationCard } from "@/components/ui/card-21";


function RollingTextButton({
  label,
  href = "#",
  variant = "gradient",
  className
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 font-semibold font-sans overflow-hidden transition-all duration-500 cursor-pointer",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-xl hover:shadow-blue-500/10"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-sm shadow-slate-100/50 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

import { servicesTranslations } from "@/lib/services-translations";

export interface ServiceData {
  title: string;
  titleKey?: string;
  tagline: string;
  descKey?: string;
  description: string;
  image: string;
  color: string; // gradient class e.g. "from-blue-500 to-cyan-400"
  iconColor: string; // solid color for icons e.g. "#3b82f6"
  features: string[] | { title: string; description: string }[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  cta: string;
  slug?: string;
}

function hexToHslString(hex: string): string {
  if (!hex) return "220 70% 30%";
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
  }
  if (cleanHex.length !== 6) return "220 70% 30%";

  let r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  let g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  let b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  let balancedL = Math.max(25, Math.min(40, l));

  return `${h} ${s}% ${balancedL}%`;
}
 
interface Specialist {
  name: string;
  role: string;
  email: string;
  avatarSrc: string;
  statusText: string;
  statusColor: string;
  glowText: string;
}

const specialistsMap: Record<string, Specialist[]> = {
  "branding-identity": [
    {
      name: "Riche Makso",
      role: "CTO - PRODUCT DESIGNER",
      email: "riche@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
      statusText: "Active in Design Studio",
      statusColor: "bg-emerald-500",
      glowText: "Crafting iconic brands"
    },
    {
      name: "Jacques",
      role: "PRODUCT OWNER",
      email: "jacques@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
      statusText: "Available for kickoff",
      statusColor: "bg-amber-500",
      glowText: "Structuring brand strategy"
    }
  ],
  "custom-software": [
    {
      name: "Osiris Balonga",
      role: "LEAD FRONT-END",
      email: "osiris@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
      statusText: "Deploying next-gen systems",
      statusColor: "bg-lime-500",
      glowText: "High on React & Systems"
    },
    {
      name: "Riche Makso",
      role: "CTO - PRODUCT DESIGNER",
      email: "riche@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
      statusText: "Architecting software core",
      statusColor: "bg-emerald-500",
      glowText: "Designing robust UX/UI"
    }
  ],
  "web-engineering": [
    {
      name: "Osiris Balonga",
      role: "LEAD FRONT-END",
      email: "osiris@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
      statusText: "Refining Next.js 16 layouts",
      statusColor: "bg-indigo-500",
      glowText: "Optimizing Core Web Vitals"
    },
    {
      name: "Mak VieSAinte",
      role: "FOUNDER",
      email: "mak@softcr8ers.com",
      avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vnSxNNVGZV2MXRjlGELl-NgLl5kXdpDR6A&s",
      statusText: "Ready to scale your stack",
      statusColor: "bg-emerald-500",
      glowText: "Securing edge infrastructure"
    }
  ],
  "mobile-innovation": [
    {
      name: "Osiris Balonga",
      role: "LEAD FRONT-END",
      email: "osiris@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
      statusText: "Polishing animation engine",
      statusColor: "bg-sky-500",
      glowText: "Smooth React Native frames"
    },
    {
      name: "Riche Makso",
      role: "CTO - PRODUCT DESIGNER",
      email: "riche@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
      statusText: "Active in sandbox testing",
      statusColor: "bg-lime-500",
      glowText: "Designing touch-native journeys"
    }
  ],
  "ui-ux-design": [
    {
      name: "Riche Makso",
      role: "CTO - PRODUCT DESIGNER",
      email: "riche@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
      statusText: "Polishing interactive wireframes",
      statusColor: "bg-pink-500",
      glowText: "Pixel-perfect visual designer"
    },
    {
      name: "Jacques",
      role: "PRODUCT OWNER",
      email: "jacques@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
      statusText: "Conducting user testing",
      statusColor: "bg-amber-500",
      glowText: "Aligning user psychology"
    }
  ],
  "video-production": [
    {
      name: "Chadrack",
      role: "DIRECTOR OF PHOTOGRAPHY",
      email: "chadrack@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQFnmLdpZW78yA/profile-displayphoto-scale_200_200/B4DZvM8NB2JMAY-/0/1768669895649?e=2147483647&v=beta&t=5VGAB-2gYupLNaHvJHECollR25THd-3oR5wngGlQiY4",
      statusText: "Grading raw 8K footage",
      statusColor: "bg-rose-500",
      glowText: "Cinematography mastermind"
    },
    {
      name: "Jemima",
      role: "MAKE-UP ARTISTE",
      email: "jemima@softcr8ers.com",
      avatarSrc: "https://i.pravatar.cc/400?img=16",
      statusText: "On-set production ready",
      statusColor: "bg-purple-500",
      glowText: "Adding visual depth & tone"
    }
  ],
  "it-consulting": [
    {
      name: "Mak VieSAinte",
      role: "FOUNDER",
      email: "mak@softcr8ers.com",
      avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vnSxNNVGZV2MXRjlGELl-NgLl5kXdpDR6A&s",
      statusText: "Consulting on enterprise systems",
      statusColor: "bg-emerald-500",
      glowText: "Pioneering technical growth"
    },
    {
      name: "Jacques",
      role: "PRODUCT OWNER",
      email: "jacques@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
      statusText: "Ready for discovery call",
      statusColor: "bg-indigo-500",
      glowText: "Streamlining product workflows"
    }
  ],
  "creative-solutions": [
    {
      name: "Chadrack",
      role: "DIRECTOR OF PHOTOGRAPHY",
      email: "chadrack@softcr8ers.com",
      avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQFnmLdpZW78yA/profile-displayphoto-scale_200_200/B4DZvM8NB2JMAY-/0/1768669895649?e=2147483647&v=beta&t=5VGAB-2gYupLNaHvJHECollR25THd-3oR5wngGlQiY4",
      statusText: "Drafting creative scripts",
      statusColor: "bg-yellow-500",
      glowText: "Visual storytelling veteran"
    },
    {
      name: "Jemima",
      role: "MAKE-UP ARTISTE",
      email: "jemima@softcr8ers.com",
      avatarSrc: "https://i.pravatar.cc/400?img=16",
      statusText: "Ideating multi-channel assets",
      statusColor: "bg-pink-500",
      glowText: "Reimagining modern content"
    }
  ]
};

const defaultSpecialists: Specialist[] = [
  {
    name: "Osiris Balonga",
    role: "LEAD FRONT-END",
    email: "osiris@softcr8ers.com",
    avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
    statusText: "Deploying next-gen systems",
    statusColor: "bg-lime-500",
    glowText: "High on React & Systems"
  },
  {
    name: "Riche Makso",
    role: "CTO - PRODUCT DESIGNER",
    email: "riche@softcr8ers.com",
    avatarSrc: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
    statusText: "Active in Design Studio",
    statusColor: "bg-emerald-500",
    glowText: "Designing robust UX/UI"
  }
];

interface ShowcaseItem {
  location: string;
  stats: string;
  imageUrl: string;
  themeColor: string;
  href: string;
}

const serviceShowcaseMap: Record<string, ShowcaseItem[]> = {
  "web-engineering": [
    {
      location: "E-Commerce Engines",
      stats: "Next.js • Shopify Sync • 99% Lighthouse",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
      themeColor: "210 70% 30%",
      href: "/contact"
    },
    {
      location: "Real-time SaaS",
      stats: "WebSocket • Dashboard Core • Analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      themeColor: "260 65% 25%",
      href: "/contact"
    },
    {
      location: "Enterprise Portals",
      stats: "Secure Cloud • SSO Access • RBAC Logs",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
      themeColor: "145 60% 22%",
      href: "/contact"
    },
    {
      location: "Stateless APIs",
      stats: "Serverless CDN • Redis • Microservices",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
      themeColor: "185 60% 25%",
      href: "/contact"
    },
    {
      location: "Bespoke Portfolios",
      stats: "Framer Motion • Fluid Canvas • Art Direct",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
      themeColor: "330 65% 30%",
      href: "/contact"
    }
  ],
  "custom-software": [
    {
      location: "ERP Automations",
      stats: "Workflow Sync • Stock Engines • Zero Friction",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      themeColor: "210 75% 28%",
      href: "/contact"
    },
    {
      location: "CRM Suite Core",
      stats: "Client Pipeline • Granular RBAC • SOC-2",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
      themeColor: "140 55% 24%",
      href: "/contact"
    },
    {
      location: "Fintech Engines",
      stats: "Stripe API • Ledger Logs • Auto Invoicing",
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60",
      themeColor: "280 60% 26%",
      href: "/contact"
    },
    {
      location: "Logistic Trackers",
      stats: "GPS Mapping • Route Optima • Fleet Metrics",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
      themeColor: "30 75% 25%",
      href: "/contact"
    },
    {
      location: "API Hub Gateway",
      stats: "Developer SDKs • OAuth Secure • Rate Limits",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
      themeColor: "190 65% 24%",
      href: "/contact"
    }
  ],
  "ui-ux-design": [
    {
      location: "Design Tokens",
      stats: "Figma Core System • Dynamic Variables",
      imageUrl: "https://images.unsplash.com/photo-1561070791-26c113006238?w=800&auto=format&fit=crop&q=60",
      themeColor: "320 65% 28%",
      href: "/contact"
    },
    {
      location: "E-Commerce Journeys",
      stats: "High-conversion UX • Fluid Checkout Flows",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60",
      themeColor: "220 70% 30%",
      href: "/contact"
    },
    {
      location: "SaaS Dashboards",
      stats: "Clean Layouts • Dynamic Micro-Interactions",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      themeColor: "260 65% 25%",
      href: "/contact"
    },
    {
      location: "Design Auditing",
      stats: "Accessibility WCAG • Strict Visual Guidelines",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
      themeColor: "150 50% 25%",
      href: "/contact"
    },
    {
      location: "Interactive Wireframes",
      stats: "High-fidelity prototypes • UX sandbox tests",
      imageUrl: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=800&auto=format&fit=crop&q=60",
      themeColor: "195 60% 25%",
      href: "/contact"
    }
  ],
  "video-production": [
    {
      location: "Brand Commercials",
      stats: "Cinematic Grade • Dynamic Visual Framing",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
      themeColor: "340 70% 28%",
      href: "/contact"
    },
    {
      location: "Corporate Shoots",
      stats: "Polished Lighting • Pro Audio Capture",
      imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60",
      themeColor: "215 65% 28%",
      href: "/contact"
    },
    {
      location: "Social Reels Core",
      stats: "High-retention edits • Color Grade 8K",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
      themeColor: "270 60% 26%",
      href: "/contact"
    },
    {
      location: "Dynamic Scripts",
      stats: "Storyboards • Compelling Audio Narratives",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60",
      themeColor: "40 75% 25%",
      href: "/contact"
    },
    {
      location: "Audio Mastering",
      stats: "Pro Foley SFX • Perfect Sound Balance",
      imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60",
      themeColor: "160 55% 24%",
      href: "/contact"
    }
  ]
};

const defaultShowcaseList: ShowcaseItem[] = [
  {
    location: "Sleek Enterprise Systems",
    stats: "Next-gen code integrations",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
    themeColor: "210 70% 30%",
    href: "/contact"
  },
  {
    location: "Brand Ecosystem Setup",
    stats: "Perfect visual alignments",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    themeColor: "260 65% 25%",
    href: "/contact"
  },
  {
    location: "Global API Gateways",
    stats: "High speed edge nodes",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    themeColor: "145 60% 22%",
    href: "/contact"
  },
  {
    location: "Bespoke Portfolios",
    stats: "Visual layout grids",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    themeColor: "330 65% 30%",
    href: "/contact"
  },
  {
    location: "Cloud Architecture",
    stats: "Highly scalable edge caching",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    themeColor: "185 60% 25%",
    href: "/contact"
  }
];


function renderMicroWidget(slug: string, index: number, color: string) {
  if (slug === "web-engineering" || slug === "custom-software" || slug === "mobile-innovation") {
    if (index === 0) {
      return (
        <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] border border-slate-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <span className="text-[10px] text-slate-400">⚡ PERF BUDGET</span>
            <span className="text-emerald-400 font-bold uppercase">Optimized</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span>Largest Paint (LCP):</span>
            <span className="text-emerald-400 font-bold">0.18s</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span>Cumulative Layout (CLS):</span>
            <span className="text-emerald-400 font-bold">0.00</span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-3">
            <motion.div 
              className="h-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] border border-slate-800 select-none">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">GET</span>
            <span className="text-slate-400 text-[10px]">/api/v1/services/health</span>
          </div>
          <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap leading-tight text-[10px]">
{`{
  "status": "healthy",
  "ssl": "active",
  "ping": "14ms",
  "cache": "HIT"
}`}
          </pre>
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="mt-4 p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-[11px] border border-slate-850 select-none">
          <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold">Edge Latency Ping</div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span>🇺🇸 Dallas Node</span>
              <span className="text-emerald-400 font-bold">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>🇪🇺 Frankfurt Node</span>
              <span className="text-emerald-400 font-bold">22ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>🇯🇵 Tokyo Node</span>
              <span className="text-amber-400 font-bold">48ms</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (slug === "ui-ux-design" || slug === "branding-identity" || slug === "creative-solutions") {
    if (index === 0) {
      return (
        <div className="mt-4 p-3 rounded-xl bg-slate-55 border border-slate-200/80 flex flex-col gap-2 select-none">
          <div className="flex justify-between text-[10px] font-semibold text-slate-400">
            <span>GRID PREVIEW</span>
            <span>12-COL GRID</span>
          </div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-6 rounded bg-slate-200 border border-slate-300/40 flex items-center justify-center text-[7px] font-bold text-slate-500">
                col
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="mt-4 flex gap-2 select-none animate-fade-in">
          {["#0f172a", color, "#64748b", "#f8fafc"].map((hex) => (
            <div key={hex} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full h-8 rounded-lg shadow-sm border border-slate-200" style={{ backgroundColor: hex }} />
              <span className="text-[9px] font-bold text-slate-500 font-mono">{hex}</span>
            </div>
          ))}
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 select-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Font Scale</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold tracking-tight text-slate-900" style={{ color: color }}>Outfit Bold (Heading)</span>
            <span className="text-xs text-slate-500 leading-none">Inter Regular (Paragraph)</span>
          </div>
        </div>
      );
    }
  }

  // Fallback visual widget: A sleek metric card
  return (
    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between select-none">
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Quality Score</span>
        <span className="text-xl font-bold text-slate-800">100/100</span>
      </div>
      <div 
        className="w-2.5 h-2.5 rounded-full animate-ping shrink-0"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function ServiceDetailPage({ data }: { data: ServiceData }) {
  const { language, t } = useTranslation();
  
  let slug = data.slug || "";
  if (!slug && data.titleKey) {
    if (data.titleKey.includes("web")) slug = "web-engineering";
    else if (data.titleKey.includes("software")) slug = "custom-software";
    else if (data.titleKey.includes("uiux")) slug = "ui-ux-design";
    else if (data.titleKey.includes("video")) slug = "video-production";
    else if (data.titleKey.includes("creative")) slug = "creative-solutions";
    else if (data.titleKey.includes("branding")) slug = "branding-identity";
    else if (data.titleKey.includes("mobile")) slug = "mobile-innovation";
    else if (data.titleKey.includes("it")) slug = "it-consulting";
  }

  const transDict = servicesTranslations[language] || {};
  const fallbackDict = servicesTranslations["en"] || {};
  const currentTrans = transDict[slug] || fallbackDict[slug] || {};

  const localizedTitle = currentTrans.title || (data.titleKey ? t(data.titleKey) : data.title);
  const localizedTagline = currentTrans.tagline || (data.descKey ? t(data.descKey) : data.tagline);
  const localizedDescription = currentTrans.description || data.description;
  const localizedFeatures = (currentTrans.features || data.features) as (string | { title: string; description: string })[];
  const localizedBenefits = currentTrans.benefits || data.benefits;
  const localizedProcess = currentTrans.process || data.process;
  const localizedCta = currentTrans.cta || data.cta;

  // Dynamic Service-specific core pillars
  const pillarsMap: Record<string, {
    icon: React.ReactNode;
    title: string;
    description: string;
    badges: string[];
  }[]> = {
    "web-engineering": [
      {
        icon: <Zap className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Next-Gen Velocity",
        description: "Blazing performance optimized for ultimate browser speed, instant feedback loops, and premium responsiveness.",
        badges: ["Lighthouse 100", "0.2s LCP", "Edge Caching"]
      },
      {
        icon: <Shield className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Bulletproof Guard",
        description: "OWASP top-10 protected architecture keeping database systems, APIs, and client-side data securely locked down.",
        badges: ["SSL Encrypted", "SQLi Defended", "XSS Protected"]
      },
      {
        icon: <Globe className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Global Scalability",
        description: "Stateless API server design allowing natural scale to handle million-user traffic bursts with ease.",
        badges: ["Multi-Region", "Serverless CDN", "Redis Cached"]
      }
    ],
    "custom-software": [
      {
        icon: <Activity className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Custom Automation",
        description: "Tailored process synchronization that completely eliminates manual spreadsheet administration.",
        badges: ["Zero Friction", "API Integrated", "Custom Flows"]
      },
      {
        icon: <Shield className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Granular Control",
        description: "Enterprise level Role-Based Access Control (RBAC) with detailed immutable audit logs and security.",
        badges: ["RBAC Guarded", "Immutable Logs", "SOC-2 Ready"]
      },
      {
        icon: <Gauge className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Analytical Insight",
        description: "Custom automated data aggregation pipelines powering clean analytics dashboards and PDF reports.",
        badges: ["Real-Time Sync", "PDF Exportable", "D3 Visualized"]
      }
    ],
    "ui-ux-design": [
      {
        icon: <TrendingUp className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Conversion Craft",
        description: "Visual hierarchies mapped precisely to cognitive psychology guidelines to maximize product activation rates.",
        badges: ["UX Psychology", "A/B Formatted", "CTA Optimized"]
      },
      {
        icon: <Sparkles className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Figma Standards",
        description: "Pixel-perfect modular UI styles mapped with responsive atomic tokens for fast developer code transition.",
        badges: ["Atomic Tokenized", "Figma Native", "Developer Ready"]
      },
      {
        icon: <Globe className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Responsive Grids",
        description: "Fluid design frameworks ensuring breathtaking rendering beauty across smartphones, tablets, and 4K displays.",
        badges: ["Adaptive Grid", "Fluid Layouts", "Retina Ready"]
      }
    ],
    "branding-identity": [
      {
        icon: <Sparkles className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Aesthetic Dominance",
        description: "Bespoke corporate identity guidelines crafted from the ground up to guarantee established market authority.",
        badges: ["Custom Mark", "Exclusive Type", "Unified Token"]
      },
      {
        icon: <Shield className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Universal Cohesion",
        description: "Comprehensive print, digital, and media style books enabling your teams to communicate unified brand trust.",
        badges: ["Brand Book", "Vector Packed", "Multi-Format"]
      },
      {
        icon: <TrendingUp className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Premium Power",
        description: "Strategic positioning structures that naturally give your sales departments immense premium pricing capability.",
        badges: ["Trust Boosted", "Market Leader", "Investor Ready"]
      }
    ],
    "it-consulting": [
      {
        icon: <Gauge className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Tech-Debt Removal",
        description: "Heuristic auditing of outdated legacy repositories to formulate clean, painless modernization pathways.",
        badges: ["Refactored Code", "Zero Downtime", "NextJS Stack"]
      },
      {
        icon: <Shield className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "AWS & GCP Security",
        description: "Optimal secure infrastructure routing with least-privilege identity access management profiles.",
        badges: ["IAM Hardened", "Cloudflare DNS", "SSL Locked"]
      },
      {
        icon: <Zap className="w-8 h-8" style={{ color: data.iconColor }} />,
        title: "Cost Optimization",
        description: "Algorithmic audit of system resource consumption saving massive monthly server expenses.",
        badges: ["35%+ Saved", "Dockerized Nodes", "Auto-Scaled"]
      }
    ]
  };

  const fallbackPillars = [
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: data.iconColor }} />,
      title: "Premium Engineering",
      description: "Handcrafted features engineered with modern performance benchmarks and gorgeous UI details.",
      badges: ["High Quality", "Robust Build", "Softcr8ers Built"]
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: data.iconColor }} />,
      title: "Optimized Workflow",
      description: "Frictionless operational delivery minimizing lag, increasing speed, and providing high efficiency.",
      badges: ["Swift Delivery", "Interactive UI", "Optimized Flow"]
    },
    {
      icon: <Globe className="w-8 h-8" style={{ color: data.iconColor }} />,
      title: "Global Ready",
      description: "State-of-the-art localization and scaling compliance ready to connect millions worldwide.",
      badges: ["Multi-Lingual", "Scalable Dev", "Clean Architecture"]
    }
  ];

  const currentPillars = pillarsMap[slug] || fallbackPillars;
  const currentSpecialists = specialistsMap[slug] || defaultSpecialists;
  const currentShowcase = serviceShowcaseMap[slug] || defaultShowcaseList;

  const localizedShowcase = currentShowcase.slice(0, 4).map((item, idx) => {
    let loc = item.location;
    let st = item.stats;

    const urShowcase: Record<string, { location: string; stats: string }[]> = {
      "web-engineering": [
        { location: "ای کامرس انجنز", stats: "Next.js • شاپائفائی سنک • 99٪ لائٹ ہاؤس" },
        { location: "ریئل ٹائم ساس", stats: "ویب ساکٹ • ڈیش بورڈ کور • اینالیٹکس" },
        { location: "انٹرپرائز پورٹلز", stats: "محفوظ کلاؤڈ • SSO لاگ ان • سیکیورٹی لاگز" },
        { location: "اسٹیٹ لیس APIs", stats: "سرور لیس CDN • ریڈیس • مائیکرو سروسز" }
      ],
      "ui-ux-design": [
        { location: "ڈیزائن ٹوکنز", stats: "فگما کور سسٹم • متحرک متغیرات" },
        { location: "ای کامرس سفر", stats: "بہترین کنورژن • ہموار چیک آؤٹ" },
        { location: "ساس ڈیش بورڈز", stats: "صاف لے آؤٹ • انٹرایکٹو اینیمیشنز" },
        { location: "ڈیزائن آڈٹنگ", stats: "ایکسیسبیلٹی • سخت بصری اصول" }
      ],
      "mobile-innovation": [
        { location: "کراس پلیٹ فارم", stats: "ری ایکٹ نیٹیو • فلٹر کور • تیز لانچ" },
        { location: "آف لائن ایپس", stats: "لوکل ڈیٹا بیس • کلاؤڈ سنک • نیٹیو رفتار" },
        { location: "بائیو میٹرک لاک", stats: "فیس آئی ڈی • محفوظ کی چین • انکرپشن" },
        { location: "نیٹیو ایپس", stats: "سوئفٹ کور • کوٹلن سسٹمز • گرافکس" }
      ],
      "custom-software": [
        { location: "ERP آٹومیشنز", stats: "ورک فلو سنک • اسٹاک انجن • زیرو فریکشن" },
        { location: "CRM سسٹمز", stats: "کلائنٹ پائپ لائن • تفصیلی رسائی • SOC-2" },
        { location: "فن ٹیک انجنز", stats: "اسٹرائپ انٹیگریشن • لیجر لاگز • بلنگ سسٹمز" },
        { location: "لاجسٹک ٹریکرز", stats: "جی پی ایس میپنگ • بہترین روٹ • فلیٹ میٹرکس" }
      ],
      "video-production": [
        { location: "برانڈ اشتہارات", stats: "سینیمیٹک گریڈ • بہترین ویژول فریمنگ" },
        { location: "کارپوریٹ شوٹس", stats: "شاندار لائٹنگ • پروفیشنل آڈیو ریکارڈنگ" },
        { location: "سوشل میڈیا ریلز", stats: "ہائی ریٹینشن ایڈٹس • کلر گریڈ 8K" },
        { location: "متحرک اسکرپٹس", stats: "بہترین اسٹوری بورڈز • بہترین آواز کی کہانیاں" }
      ],
      "creative-solutions": [
        { location: "ویکٹر اثاثے", stats: "ہائی ریزولوشن • برانڈ کے خاص ڈیزائن" },
        { location: "انٹرایکٹو میڈیا", stats: "CSS اینیمیشنز • شاندار ڈیزائنز" },
        { location: "پچ پریزنٹیشنز", stats: "پچ ڈیکس • بہترین لے آؤٹس" },
        { location: "سوشل میڈیا کٹس", stats: "کسٹم ٹیمپلیٹس • یکساں فونٹ" }
      ],
      "branding-identity": [
        { location: "برانڈ لوگوز", stats: "پکسل پرفیکٹ • تمام فارمیٹس" },
        { location: "برانڈ لہجہ", stats: "کاپی رائٹنگ کے اصول • بولنے کی گائیڈ لائنز" },
        { location: "کلر سسٹمز", stats: "خوبصورت رنگ • برانڈ کلر ٹوکنز" },
        { location: "اسٹائل گائیڈز", stats: "کارپوریٹ اسٹیشنری • آفیشل برانڈ بک" }
      ],
      "it-consulting": [
        { location: "ٹیک ڈیٹ آڈٹس", stats: "کوڈ ری فیکٹرنگ • سسٹم اپ گریڈ" },
        { location: "کلاؤڈ سسٹمز", stats: "کلاؤڈ فلیر DNS • سرور سیکیورٹی" },
        { location: "اخراجات کی بچت", stats: "آٹو اسکیلنگ سرور • 35٪ سے زیادہ بچت" },
        { location: "ڈیٹا ریکوری", stats: "روزانہ بیک اپ • متبادل ڈیٹا بیسز" }
      ]
    };

    const arShowcase: Record<string, { location: string; stats: string }[]> = {
      "web-engineering": [
        { location: "محركات التجارة الإلكترونية", stats: "Next.js • مزامنة شوبيفاي • 99% لايتهاوس" },
        { location: "برمجيات SaaS في الوقت الفعلي", stats: "ويب سوكيت • لوحة التحكم • تحليلات" },
        { location: "بوابات المؤسسات الكبرى", stats: "سحابة آمنة • مصادقة موحدة • سجلات أمان" },
        { location: "واجهات تطبيقات Stateless", stats: "شبكات CDN • خوادم ريديس • خدمات مصغرة" }
      ],
      "ui-ux-design": [
        { location: "رموز التصميم", stats: "نظام فيغما الأساسي • متغيرات ديناميكية" },
        { location: "رحلات التجارة الإلكترونية", stats: "تجربة مستخدم عالية التحويل • دفع سهل" },
        { location: "لوحات تحكم SaaS", stats: "تخطيطات نظيفة • تفاعلات حركة دقيقة" },
        { location: "تدقيق التصميم", stats: "إمكانية الوصول • إرشادات بصرية صارمة" }
      ],
      "mobile-innovation": [
        { location: "تطبيقات عابرة للمنصات", stats: "ريأكت نيتف • فلاتر • نشر سريع" },
        { location: "العمل دون اتصال", stats: "قواعد بيانات محلية • مزامنة سحابية • سرعة أصلية" },
        { location: "الأمان البيومتري", stats: "بصمة الوجه واليد • تشفير كامل • حماية البيانات" },
        { location: "التطبيقات الأصلية", stats: "لغة سويفت • لغة كوتلن • رسومات GPU" }
      ],
      "custom-software": [
        { location: "أتمتة نظام ERP", stats: "مزامنة العمل • محركات المخزون • مرونة كاملة" },
        { location: "أنظمة إدارة CRM", stats: "خط مبيعات العملاء • صلاحيات دقيقة • SOC-2" },
        { location: "محركات التكنولوجيا المالية", stats: "تكامل سترايب • سجلات مالية • فواتير تلقائية" },
        { location: "متتبعات الخدمات اللوجستية", stats: "خرائط GPS • مسارات محسنة • قياسات الأسطول" }
      ],
      "video-production": [
        { location: "الإعلانات التجارية", stats: "جودة سينمائية • تأطير بصري رائع" },
        { location: "تصوير الشركات", stats: "إضاءة مصقولة • تسجيل صوتي احترافي" },
        { location: "بكرات التواصل الاجتماعي", stats: "تحرير عالي الجاذبية • تدريج ألوان 8K" },
        { location: "نصوص ديناميكية", stats: "تخطيط لوحة العمل • روايات صوتية مقنعة" }
      ],
      "creative-solutions": [
        { location: "أصول مرئية Vector", stats: "دقة عالية • أشكال مخصصة للعلامة التجارية" },
        { location: "وسائط تفاعلية", stats: "رسوم متحركة CSS • واجهات تفاعلية رائعة" },
        { location: "عروض تقديمية مقنعة", stats: "ملفات عرض احترافية • تخطيطات متميزة" },
        { location: "مجموعات التواصل الاجتماعي", stats: "قوالب مخصصة • خطوط متناسقة" }
      ],
      "branding-identity": [
        { location: "شعارات احترافية", stats: "دقة متناهية • جميع التنسيقات" },
        { location: "دليل النبرة والصوت", stats: "قواعد كتابة المحتوى • صوت متناسق" },
        { location: "أنظمة الألوان", stats: "لوحات ألوان متناغمة • رموز ألوان موحدة" },
        { location: "أدلة الأسلوب", stats: "قرطاسية الشركات • كتاب العلامة التجارية الأساسي" }
      ],
      "it-consulting": [
        { location: "تدقيق الديون التقنية", stats: "إعادة صياغة الكود • تحديث الأنظمة القديمة" },
        { location: "أنظمة الحوسبة السحابية", stats: "خوادم سحابية آمنة • أمان معزز" },
        { location: "تحسين التكاليف", stats: "خوادم ذاتية التوسع • توفير أكثر من 35%" },
        { location: "استعادة البيانات", stats: "نسخ احتياطي يومي • قواعد بيانات بديلة" }
      ]
    };

    if (language === "ur" && urShowcase[slug] && urShowcase[slug][idx]) {
      loc = urShowcase[slug][idx].location;
      st = urShowcase[slug][idx].stats;
    } else if (language === "ar" && arShowcase[slug] && arShowcase[slug][idx]) {
      loc = arShowcase[slug][idx].location;
      st = arShowcase[slug][idx].stats;
    }

    return {
      ...item,
      location: loc,
      stats: st
    };
  });



  const marqueeKeywords = [
    localizedTitle.toUpperCase(),
    "ENTERPRISE GRADE",
    "DESIGN FOR SCALE",
    "ZERO LAG ARCHITECTURE",
    "PSYCHOLOGY-DRIVEN",
    "SECURE BY DESIGN",
    "GLOBAL DEPLOYMENT READY",
    "SOFTCR8ORS EXCELLENCE"
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
 
      {/* Redesigned Premium Full-Bleed Light Hero Section (Matching Home Page Theme) */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center pt-32 pb-16 overflow-hidden bg-white">
        
        {/* Dynamic Background Image with Strong White/Pastel Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt={localizedTitle} 
            className="w-full h-full object-cover scale-105"
          />
          {/* Strong White Frosted Overlay: Makes the image a soft, light pastel background like the home page */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white/95" />
        </div>
 
        {/* Dynamic Colored Ambient Glows based on the Service's primary color */}
        {/* This gives the background a beautiful, unique soft wash of color for each service */}
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] blur-[150px] rounded-full z-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
          style={{ backgroundColor: data.iconColor }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] blur-[150px] rounded-full z-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
          style={{ backgroundColor: data.iconColor }}
        />
 
        {/* Interactive Flowing Canvas Layer */}
        <InteractiveCanvas className="absolute inset-0 w-full h-full opacity-40 z-0 pointer-events-none mix-blend-multiply" />
        
        {/* 3D Decor Blocks (Matching Home Page) */}
        <motion.div
          className="absolute top-[15%] left-[5%] w-20 h-20 md:w-32 md:h-32 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[5%] w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
        </motion.div>
 
        {/* Centered Content Wrapper (Title, Button, Badges aligned together) */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-12 mt-4 md:mt-10">
          
          {/* Top: Headline & Tagline */}
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[36px] sm:text-[40px] md:text-[72px] font-medium leading-[1.1] tracking-tight text-[#000000] mb-6 font-sans max-w-4xl"
            >
              {localizedTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: data.iconColor }}>
                {localizedTitle.split(" ").slice(-1)}
              </span>
            </motion.h1>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#1C0C26CC] text-sm sm:text-base md:text-[18px] max-w-2xl leading-relaxed mb-10 font-medium font-sans px-2"
            >
              {localizedTagline}
            </motion.p>
 
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <RollingTextButton label={t("services.start") || "Start Project"} href="/contact" variant="gradient" className="px-10 text-[15px] md:text-base h-12" />
            </motion.div>
          </div>
 
          {/* Bottom: Badges (Features) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center mt-4"
          >
            <p className="text-slate-500 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              {t("services.badge") || "OUR SERVICES"}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl">
              {localizedFeatures.slice(0, 6).map((feature, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-1.5 rounded-full border text-[12px] md:text-[13px] font-medium transition-colors shadow-sm backdrop-blur-md cursor-default"
                  style={{ 
                    backgroundColor: `${data.iconColor}1a`, // 10% opacity light background
                    borderColor: `${data.iconColor}99`, // Strong 60% opacity border
                    color: '#1e293b' // Deep slate text for readability
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${data.iconColor}33`; // 20% on hover
                    e.currentTarget.style.borderColor = data.iconColor; // Solid on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${data.iconColor}1a`;
                    e.currentTarget.style.borderColor = `${data.iconColor}99`;
                  }}
                >
                  {typeof feature === 'string' ? feature : feature.title}
                </span>
              ))}
            </div>
          </motion.div>
 
        </div>
      </section>

      {/* Dynamic Specialty Domains Showcase Grid (Using Card-21) */}
      <section className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10 bg-slate-50/20 border-y border-slate-200/50">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: data.iconColor }}>
            {t("services.showcaseBadge") || "PORTFOLIO & CAPABILITIES"}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mt-2 mb-4">
            {t("services.showcaseTitle") || "Key Specialty Domains"}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: data.iconColor }} />
        </div>

        {/* 4-Card Premium Grid layout (Smaller height and responsive 4-column grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
          {localizedShowcase.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-[340px] w-full"
            >
              <DestinationCard
                imageUrl={item.imageUrl}
                location={item.location}
                stats={item.stats}
                href={item.href}
                themeColor={hexToHslString(data.iconColor)}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* Dynamic Overview Section (Vision & Strategy Card) */}
      <section id="details" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-14 bg-gradient-to-br from-slate-50/70 to-white/40 border border-slate-200/50 backdrop-blur-lg overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Accent Circle inside the card */}
          <div 
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20"
            style={{ backgroundColor: data.iconColor }}
          />
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            {/* Strategy Glowing Capsule */}
            <div 
              className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200/60 shadow-md group-hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: `0 10px 20px -10px ${data.iconColor}33` }}
            >
              <Sparkles className="w-8 h-8" style={{ color: data.iconColor }} />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: data.iconColor }}>
                {t("services.overview") || "SERVICE MISSION & OVERVIEW"}
              </span>
              <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium font-sans">
                {localizedDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Premium Bento Deliverables Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Soft Background Orbs */}
        <div 
          className="absolute -top-24 -left-24 w-[300px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-[0.08]"
          style={{ backgroundColor: data.iconColor }}
        />

        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: data.iconColor }}
          >
            {t("services.capabilities") || "WHAT WE DELIVER"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4"
          >
            {t("services.deliver") || "Exceptional Capabilities"}
          </motion.h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: data.iconColor }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localizedFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-8 rounded-3xl bg-white/60 border border-slate-200/50 backdrop-blur-md transition-all duration-500 overflow-hidden group shadow-sm hover:shadow-xl animate-fade-in"
              whileHover={{ 
                y: -6,
                borderColor: data.iconColor,
                boxShadow: `0 20px 40px -15px ${data.iconColor}15`
              }}
            >
              {/* Subtle hover background accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${data.iconColor}08, transparent 65%)`
                }}
              />

              {/* Number indicator styled as huge back-heading */}
              <div 
                className="absolute right-6 top-6 text-7xl font-black select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500"
                style={{ color: data.iconColor }}
              >
                0{i + 1}
              </div>

              {/* Deliverable Content */}
              <div className="flex flex-col justify-between h-full relative z-10 gap-6">
                <div className="flex gap-4 items-start">
                  <div 
                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 group-hover:scale-110 group-hover:border-transparent transition-all duration-300"
                    style={{ backgroundColor: `${data.iconColor}08` }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: data.iconColor }} />
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-1.5">
                    <span className="text-slate-800 text-base font-semibold leading-snug group-hover:text-black transition-colors duration-300">
                      {typeof feature === "string" ? (
                        feature
                      ) : (
                        <span>
                          <strong>{feature.title}</strong>
                        </span>
                      )}
                    </span>
                    {typeof feature !== "string" && (
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Custom Interactive realistic widget showcase */}
                <div className="w-full mt-auto">
                  {renderMicroWidget(slug, i, data.iconColor)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Asymmetric Split Benefits Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Left Sidebar panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: data.iconColor }}>
              {t("services.why") || "WHY SOFTCR8ORS"}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              {t("services.advantages") || "The Softcr8ors Advantage"}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {t("services.whyDesc") || "We don't just deliver generic features. We build scalable value designed specifically to scale with your company's growth."}
            </p>

            {/* Micro Dashboard widget inside sticky panel */}
            <div 
              className="mt-4 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative overflow-hidden"
              style={{ boxShadow: `0 10px 30px -15px ${data.iconColor}15` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-10" style={{ backgroundColor: data.iconColor }} />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Metrics</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: data.iconColor }}>Live</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-2xl font-bold text-slate-800">100% Precise</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Bespoke Design standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side Benefit Stack cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {localizedBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-3xl bg-white border border-slate-200/70 transition-all duration-500 overflow-hidden group shadow-sm hover:shadow-xl"
                whileHover={{ 
                  x: 8,
                  borderColor: data.iconColor,
                  boxShadow: `0 20px 40px -20px ${data.iconColor}20`
                }}
              >
                {/* Accent line on left */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: data.iconColor }}
                />

                {/* Big Translucent Number Backdrop */}
                <div 
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl font-black bg-gradient-to-br from-slate-200/10 to-slate-200/40 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500"
                >
                  0{i + 1}
                </div>

                <div className="relative z-10 flex gap-6 items-start">
                  <div 
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 text-lg font-black group-hover:scale-110 group-hover:border-transparent transition-all duration-300"
                    style={{ 
                      backgroundColor: `${data.iconColor}0a`,
                      color: data.iconColor
                    }}
                  >
                    {i + 1}
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-slate-900 font-semibold text-xl group-hover:text-black transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* High-End Futuristic Creative Process Timeline */}
      <section className="py-24 px-4 max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: data.iconColor }}>
            {t("services.process") || "OUR PROCESS"}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mt-3 mb-4">
            {t("services.processDesc") || "How We Engineer Success"}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: data.iconColor }} />
        </div>

        <div className="relative flex flex-col gap-12">
          {/* Vertical Glowing timeline line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-slate-100 hidden md:block" />
          
          {localizedProcess.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex gap-6 md:gap-10 items-start group"
            >
              {/* Outer Step Circle */}
              <div 
                className="shrink-0 w-[80px] h-[80px] rounded-full bg-white border-2 border-slate-200/70 flex items-center justify-center relative z-10 transition-all duration-500 shadow-md"
                style={{ 
                  borderColor: `${data.iconColor}22`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = data.iconColor;
                  e.currentTarget.style.boxShadow = `0 10px 20px -5px ${data.iconColor}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${data.iconColor}22`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm font-sans"
                  style={{
                    background: `linear-gradient(135deg, ${data.iconColor}, ${data.iconColor}cc)`
                  }}
                >
                  {p.step}
                </div>
              </div>

              {/* Step Card Content */}
              <div 
                className="flex-1 p-6 md:p-8 rounded-3xl bg-white/70 border border-slate-200/60 backdrop-blur-md shadow-sm transition-all duration-500 flex flex-col gap-2 hover:shadow-xl"
                style={{
                  borderColor: "rgba(226, 232, 240, 0.8)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = data.iconColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
                }}
              >
                <span className="text-xs font-bold tracking-widest uppercase opacity-40 font-sans">
                  Step {p.step}
                </span>
                <h3 className="text-slate-900 font-semibold text-xl group-hover:text-black transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* Dynamic Infinite Scrolling Marquee */}
      <section className="w-full overflow-hidden py-10 bg-slate-50/50 border-y border-slate-200/60 relative z-10">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-[scroll-marquee_30s_linear_infinite] gap-12 text-slate-400 font-sans tracking-[0.25em] text-xs font-bold uppercase items-center">
            {Array.from({ length: 4 }).flatMap(() => marqueeKeywords).map((keyword, idx) => (
              <span key={idx} className="flex items-center gap-12">
                <span style={{ color: data.iconColor }}>{keyword}</span>
                <span className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: data.iconColor }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Interactive Showcase Section (Core Pillars with Overlay & Hover Badges) */}
      <section className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Soft Background Decorative Radial Glows (Matching Home Page) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-[0.12] z-0"
          style={{ backgroundColor: data.iconColor }}
        />

        <div className="text-center mb-16 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: data.iconColor }}
          >
            {t("services.showcaseBadge") || "PERFORMANCE BENCHMARKS"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4"
          >
            {t("services.showcaseTitle") || "Engineered for Excellence"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            {t("services.showcaseDesc") || "Every solution we deploy is built around these non-negotiable architectural pillars."}
          </motion.p>
        </div>

        {/* 3 highly interactive hover cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {currentPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group p-8 rounded-3xl bg-white/70 border border-slate-200/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-default"
              style={{
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.03)"
              }}
              whileHover={{ 
                y: -10,
                borderColor: data.iconColor,
                boxShadow: `0 20px 40px -15px ${data.iconColor}22`
              }}
            >
              {/* Dynamic Interactive Overlay (Changes opacity on hover) */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(circle at top left, ${data.iconColor}0a, transparent 70%)`
                }}
              />

              {/* Icon Container */}
              <div className="relative z-10 mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/60 group-hover:scale-110 group-hover:border-transparent transition-all duration-500"
                style={{
                  backgroundColor: `${data.iconColor}08`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${data.iconColor}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${data.iconColor}08`;
                }}
              >
                {pillar.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="relative z-10 text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#000000] transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-slate-500 text-sm leading-relaxed mb-8 transition-colors duration-300">
                {pillar.description}
              </p>

              {/* Animated Badges Overlay Layer (Rising on Hover) */}
              <div className="relative z-10 flex flex-wrap gap-2 transition-all duration-500 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100">
                {pillar.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 shadow-sm border"
                    style={{
                      backgroundColor: `${data.iconColor}10`,
                      borderColor: `${data.iconColor}44`,
                      color: data.iconColor
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${data.iconColor}1a`;
                      e.currentTarget.style.borderColor = data.iconColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${data.iconColor}10`;
                      e.currentTarget.style.borderColor = `${data.iconColor}44`;
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Immersive Dark Bento Grid CTA Card (State of the Art) */}
      <section className="py-28 px-4 w-full relative z-10">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-slate-950 border border-slate-800 text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Stunning Background Pulsating Glowing Lights styled in data.iconColor */}
          <div 
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20 animate-pulse"
            style={{ backgroundColor: data.iconColor }}
          />
          <div 
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20 animate-pulse"
            style={{ backgroundColor: data.iconColor }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/50">
              {t("services.ctaPrefix") || "INITIATE DIGITAL ACCELERATION"}
            </span>
            <h2 className="text-3xl md:text-6xl font-semibold leading-tight text-white max-w-3xl">
              {localizedCta}
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl">
              {t("services.ctaDesc") || "Let's assemble the perfect technical architecture to turn your complex ideas into scalable reality."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-2xl text-white font-semibold text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group w-full sm:w-auto"
                style={{ 
                  background: `linear-gradient(135deg, ${data.iconColor}, ${data.iconColor}dd)`
                }}
              >
                {t("services.start") || "Start a Project"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      <CinematicFooter />
    </main>
  );
}
