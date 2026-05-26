"use client";
 
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown, LayoutGrid, Globe, Zap, Bot, Shield, TrendingUp, Gauge, Activity, Send, Loader } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PopoverForm } from "@/components/ui/popover-form";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { InteractiveCanvas } from "@/components/ui/hero-designali";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";
import GlassmorphismProfileCard from "@/components/ui/glassmorphism-profile-card";
import { DestinationCard } from "@/components/ui/card-21";
import {
  CutoutCard,
  CutoutCardContent,
  CutoutCardImage,
  CutoutCardInsetLabel,
  CutoutCardMedia,
  CutoutCardOverlay,
  CutoutCardPin,
  CutoutCorner,
  cutoutCardSurfaceClassName,
} from "@/components/ui/cutout-card";
import { FeatureCarouselSection } from "./FeatureCarouselSection";
import { DevelopmentProcessSection } from "./DevelopmentProcessSection";

import ReactCountryFlag from "react-country-flag";

const countries = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "AE", name: "UAE", dial: "+971" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "SG", name: "Singapore", dial: "+65" },
];

function PopoverContactForm({ 
  iconColor, 
  onSuccess 
}: { 
  iconColor: string; 
  onSuccess: () => void 
}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[2]); // Default Pakistan
  const [submitting, setSubmitting] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const serviceOptions = [
    t("srv.1") || "Web Engineering",
    t("srv.2") || "Custom Software",
    t("srv.3") || "UI/UX Design",
    t("srv.4") || "Mobile Apps",
    t("srv.5") || "IT Consulting",
    t("srv.6") || "Video Production",
    t("srv.7") || "Creative Solutions",
    t("srv.8") || "Digital Branding",
  ];

  const handleServiceToggle = (srv: string) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate high-fidelity network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 p-4 md:p-5 bg-gradient-to-tr from-[#1620f0]/8 via-white to-[#f016da]/8 text-slate-800 font-sans text-left h-full overflow-y-auto max-h-[85vh] relative scrollbar-none rounded-xl">
      
      {/* Dynamic Glow Line */}
      <div 
        className="absolute top-0 inset-x-0 h-[3px] blur-[1px] rounded-t-xl"
        style={{ background: `linear-gradient(90deg, ${iconColor}, #a906c9, ${iconColor})` }}
      />

      <div className="flex flex-col gap-0.5 mb-1">
        <h4 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          Let's <span style={{ color: iconColor }} className="animate-pulse">Assemble</span> Your Project
        </h4>
        <p className="text-[11px] text-slate-500 font-medium">
          Complete this request and our engineering specialists will get in touch with you shortly.
        </p>
      </div>

      <div className="space-y-2.5">
        {/* Name & Email Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-0.5">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans font-normal"
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans font-normal"
            />
          </div>
        </div>

        {/* Phone Group */}
        <div className="flex flex-col gap-1 relative">
          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Custom Country Dropdown */}
            <div className="relative sm:w-[130px] shrink-0">
              <button
                type="button"
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="w-full flex items-center justify-between gap-1.5 px-3 py-1.5 bg-white/80 border border-slate-200 rounded-xl text-xs text-slate-800 hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                  <span>{selectedCountry.dial}</span>
                </div>
                <ChevronDown className={cn("w-3 h-3 text-slate-400 transition-transform", countryDropdownOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {countryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-40 overflow-y-auto scrollbar-none"
                  >
                    {countries.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(c);
                          setCountryDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left"
                      >
                        <div className="flex items-center gap-1.5">
                          <ReactCountryFlag countryCode={c.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                          <span>{c.name}</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[9px]">{c.dial}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Input */}
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-slate-200 rounded-xl focus-within:border-purple-500 transition-all">
              <span className="text-xs text-slate-400 font-mono">{selectedCountry.dial}</span>
              <div className="w-px h-3.5 bg-slate-200 mx-0.5" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="555-0199"
                className="flex-1 bg-transparent text-xs text-slate-800 placeholder:text-slate-300 focus:outline-none font-sans font-normal"
              />
            </div>
          </div>
        </div>

        {/* Services Group */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 ml-1">Which services are you interested in?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {serviceOptions.map((srv) => {
              const isChecked = selectedServices.includes(srv);
              return (
                <label
                  key={srv}
                  onClick={() => handleServiceToggle(srv)}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-1.5 border rounded-xl cursor-pointer select-none transition-all duration-200",
                    isChecked
                      ? "bg-slate-900 text-white font-medium border-transparent"
                      : "bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800"
                  )}
                >
                  <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div
                      className={cn(
                        "w-3.5 h-3.5 rounded border transition-all flex items-center justify-center",
                        isChecked ? "border-transparent" : "border-slate-300"
                      )}
                      style={isChecked ? { backgroundColor: iconColor } : {}}
                    >
                      {isChecked && <CheckCircle2 size={8} className="text-white" />}
                    </div>
                  </div>
                  <span className="text-[11px] font-sans font-normal">{srv}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Project Details Group */}
        <div className="flex flex-col gap-0.5">
          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500 ml-1">Project Details</label>
          <textarea
            required
            rows={2}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us about your target goals, timeline, and vision..."
            className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none font-sans font-normal"
          />
        </div>
      </div>

      {/* Action CTA Button */}
      <button
        type="submit"
        disabled={submitting}
        className="px-8 h-10 rounded-xl font-bold text-xs uppercase tracking-widest text-white relative overflow-hidden transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2 mx-auto"
        style={{
          background: `linear-gradient(135deg, ${iconColor}, #a906c9)`,
          boxShadow: `0 6px 20px -6px ${iconColor}`
        }}
      >
        {submitting ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <span>Submit</span>
            <Send className="w-3 h-3" />
          </>
        )}
      </button>
    </form>
  );
}

function PopoverSuccessState({ iconColor, onClose }: { iconColor: string; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center gap-4 bg-gradient-to-tr from-[#1620f0]/8 via-white to-[#f016da]/8 text-slate-800 h-full w-full rounded-xl">
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-lg animate-bounce"
        style={{ borderColor: iconColor, backgroundColor: `${iconColor}1a` }}
      >
        <CheckCircle2 className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">Proposal Submitted!</h3>
        <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
          Thank you for reaching out. A Softcreater technology specialist will contact you in under 2 hours with a complete architecture design proposal.
        </p>
      </div>
      <button 
        onClick={onClose}
        className="px-6 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer text-slate-700"
      >
        Close Window
      </button>
    </div>
  );
}

function RollingTextButton({
  label,
  href = "#",
  variant = "gradient",
  className,
  onClick,
  style
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}) {
  const isButton = onClick !== undefined || href === "#" || href === "";
  const Tag = isButton ? motion.button : motion.a;

  return (
    <Tag
      href={isButton ? undefined : href}
      onClick={(e: React.MouseEvent) => {
        if (isButton) {
          e.preventDefault();
        }
        if (onClick) {
          onClick(e);
        }
      }}
      style={style}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 font-semibold font-sans overflow-hidden transition-all duration-500 cursor-pointer border-none outline-none",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-xl hover:shadow-blue-500/10"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-sm shadow-slate-100/50 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-linear-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-size-[200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
    </Tag>
  );
}

import { servicesTranslations } from "@/lib/services-translations";
import { PortfolioCapabilities } from "@/components/PortfolioCapabilities";

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

// ── HoverBentoGrid ──────────────────────────────────────────
type BentoCellProps = { image: string; title: string; desc?: string; badges?: string[]; col: string; row: string; height: number; };

function HoverBentoCell({ image, title, desc, badges = [], col, row, iconColor }: BentoCellProps & { iconColor: string; delay: number }) {
  const [hovered, setHovered] = React.useState(false);
  const isAuto = col === "auto";

  const words = title.split(" ");

  return (
    <div
      className="relative overflow-hidden cursor-pointer select-none"
      style={isAuto ? { height: "100%" } : { gridColumn: col, gridRow: row }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — always visible, zooms on hover */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 550ms cubic-bezier(0.4,0,0.2,1)",
        }}
        draggable={false}
      />

      {/* Dark overlay — fades out on hover to reveal white panel */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 350ms ease",
        }}
      />

      {/* White frosted overlay on hover */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255,255,255,0.88)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 350ms ease",
        }}
      />

      {/* Normal state: white title at bottom-left */}
      <div
        className="absolute inset-x-0 bottom-0 p-5 z-10 pointer-events-none"
        style={{ opacity: hovered ? 0 : 1, transition: "opacity 200ms ease" }}
      >
        <h3
          className="text-white font-medium text-base leading-snug drop-shadow-md"
          style={{ fontFamily: "'General Sans', sans-serif" }}
        >
          {title}
        </h3>
      </div>

      {/* Hover state: dark title + desc + badges centered */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 z-10"
        style={{ pointerEvents: hovered ? "auto" : "none" }}
      >
        {/* Title — last word in iconColor, rest dark */}
        <h3
          className="font-medium tracking-tight text-xl text-center leading-snug"
          style={{
            fontFamily: "'General Sans', sans-serif",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 300ms 60ms ease, transform 300ms 60ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {words.map((word, i) => (
            <span key={i}>
              {i === words.length - 1 ? (
                <span style={{ color: iconColor }}>{word}</span>
              ) : (
                <span className="text-slate-900">{word}</span>
              )}
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h3>

        {/* Description */}
        {desc && (
          <p
            className="text-slate-500 text-[12px] text-center leading-relaxed max-w-60"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 280ms 130ms ease, transform 280ms 130ms cubic-bezier(0.16,1,0.3,1)",
              fontFamily: "'General Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            {desc}
          </p>
        )}

        {/* Badges — service detail page hero style with iconColor */}
        <div className="flex flex-wrap gap-2 justify-center mt-1">
          {badges.map((badge, bIdx) => (
            <span
              key={bIdx}
              className="px-3.5 py-1.5 text-[11px] font-medium rounded-full"
              style={{
                border: `1px solid ${iconColor}40`,
                backgroundColor: `${iconColor}0d`,
                color: iconColor,
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 250ms ${160 + bIdx * 50}ms ease, transform 250ms ${160 + bIdx * 50}ms cubic-bezier(0.16,1,0.3,1)`,
                fontFamily: "'General Sans', sans-serif",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HoverBentoGrid({ cells, cols, rows, iconColor }: { cells: (BentoCellProps & { height: number })[]; cols: number; rows: string; iconColor: string }) {
  return (
    <div
      className="w-full"
      style={{ display: "grid", gap: "8px", gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: rows }}
    >
      {cells.map((cell, i) => (
        <HoverBentoCell key={i} {...cell} iconColor={iconColor} delay={i * 0.08} />
      ))}
    </div>
  );
}

export function ServiceDetailPage({ data }: { data: ServiceData }) {
  const { language, t } = useTranslation();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);


  
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

  const localizedTitle = language === "en" ? data.title : (currentTrans.title || (data.titleKey ? t(data.titleKey) : data.title));
  const localizedTagline = language === "en" ? data.tagline : (currentTrans.tagline || (data.descKey ? t(data.descKey) : data.tagline));
  const localizedDescription = language === "en" ? data.description : (currentTrans.description || data.description);
  const localizedFeatures = (language === "en" ? data.features : (currentTrans.features || data.features)) as (string | { title: string; description: string })[];
  const localizedBenefits = language === "en" ? data.benefits : (currentTrans.benefits || data.benefits);
  const localizedProcess = language === "en" ? data.process : (currentTrans.process || data.process);
  const localizedCta = language === "en" ? data.cta : (currentTrans.cta || data.cta);
  const showcaseBadge = t("services.showcaseBadge") || "BENEFITS";
  const showcaseTitle = t("services.showcaseTitle") || "Core Benefits";
  const showcaseDesc =
    t("services.showcaseDesc") ||
    "These are the primary benefits you'll receive from this engagement.";
  const showcaseWords = showcaseTitle.split(" ");
  const showcaseAccent = showcaseWords.pop() || "";
  const showcaseLead = showcaseWords.join(" ");
  const pillarImages = [
    "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  ];

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

  const customHeroImage = 
    (slug === "web-engineering" || slug === "web") ? "https://ik.imagekit.io/o5vhmyokl/remove_the_text_from_the_202605221949.jpeg" :
    (slug === "custom-software" || slug === "saas-development") ? "https://ik.imagekit.io/o5vhmyokl/C_u_s_t_o_202605221942.jpeg" :
    (slug === "ai-powered-apps" || slug === "ai-powered-app" || slug === "ai") ? "https://ik.imagekit.io/o5vhmyokl/remove_text_from_this_image_202605221945.jpeg" :
    (slug === "mobile-innovation" || slug === "android-app" || slug === "mobile") ? "https://ik.imagekit.io/o5vhmyokl/remove_the_text_form_this_202605221946.jpeg" :
    null;

  const beams = [
    {
      path: "M 0 64 L 400 64",
      color: data.iconColor,
      strokeWidth: 2,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: "0%", y2: "0%" },
        transition: { duration: 3.5, repeat: Infinity, ease: "linear" }
      }
    },
    {
      path: "M 20 64 Q 200 -20 380 64",
      color: data.iconColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "100%"], y2: ["0%", "100%"] },
        transition: { duration: 4.5, repeat: Infinity, ease: "linear", delay: 1 }
      }
    },
    {
      path: "M 20 64 Q 200 148 380 64",
      color: data.iconColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["100%", "0%"], y2: ["100%", "0%"] },
        transition: { duration: 4, repeat: Infinity, ease: "linear", delay: 2 }
      }
    },
    {
      path: "M 50 10 L 350 118",
      color: data.iconColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "100%"], y2: ["0%", "100%"] },
        transition: { duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }
      }
    },
    {
      path: "M 350 10 L 50 118",
      color: data.iconColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "100%", x2: "100%", y1: "0%", y2: "0%" },
        animate: { x1: ["100%", "0%"], x2: ["100%", "0%"], y1: ["0%", "100%"], y2: ["0%", "100%"] },
        transition: { duration: 5.5, repeat: Infinity, ease: "linear", delay: 1.5 }
      }
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
 
      {/* Redesigned Premium Center-Aligned Hero Section */}
      <section className="relative w-full min-h-[95vh] md:min-h-[100vh] flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden">
        
        {/* Soft Pink and Purple Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-fuchsia-100 to-purple-200 z-0" />
        
        {/* Dynamic Colored Ambient Glows */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full z-0 opacity-[0.4] mix-blend-multiply"
          style={{ backgroundColor: "#ff9a9e" }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[150px] rounded-full z-0 opacity-[0.3] mix-blend-multiply"
          style={{ backgroundColor: "#a18cd1" }}
        />
 
        {/* Interactive Flowing Canvas Layer */}
        <InteractiveCanvas className="absolute inset-0 w-full h-full opacity-40 z-0 pointer-events-none mix-blend-multiply" />
        
        {/* 3D Decor Blocks (Matching Home Page) */}
        <motion.div
          className="absolute top-[20%] left-[8%] w-16 h-16 md:w-24 md:h-24 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px] drop-shadow-xl" />
        </motion.div>
        <motion.div
          className="absolute top-[65%] right-[8%] w-20 h-20 md:w-28 md:h-28 pointer-events-none opacity-60 z-10"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px] drop-shadow-xl" />
        </motion.div>
 
        {/* Centered Content Wrapper */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8 md:gap-12 mt-4 md:mt-10">
          
          {/* Top: Headline & Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl w-full z-20 relative"
          >
            {/* Main Hero Headline Style */}
            <h1
              className="text-[36px] sm:text-[40px] md:text-[72px] font-medium leading-[1.1] tracking-tight text-[#000000] mb-6 font-sans max-w-4xl flex flex-wrap justify-center gap-y-2"
              style={{ perspective: "1000px" }}
            >
              {(() => {
                const words = localizedTitle.split(" ");
                const totalWords = words.length;
                let globalCharIdx = 0;

                return words.map((word, wordIdx) => {
                  const isLastWord = wordIdx === totalWords - 1;
                  const chars = word.split("");
                  
                  return (
                    <span
                      key={wordIdx}
                      className="inline-flex flex-nowrap"
                      style={isLastWord ? { color: data.iconColor } : undefined}
                    >
                      {chars.map((char, charIdx) => {
                        const currentIdx = globalCharIdx++;
                        return (
                          <motion.span
                            key={charIdx}
                            variants={{
                              initial: {
                                rotateX: 90,
                                y: 20,
                                opacity: 0,
                                filter: "blur(8px)",
                              },
                              animate: {
                                rotateX: 0,
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                                transition: {
                                  duration: 0.6,
                                  ease: [0.2, 0.65, 0.3, 0.9],
                                  delay: currentIdx * 0.03,
                                },
                              },
                            }}
                            initial="initial"
                            animate="animate"
                            style={{ transformStyle: "preserve-3d", display: "inline-block" }}
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                      {wordIdx < totalWords - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                  );
                });
              })()}
            </h1>
 
            {/* Main Hero Subtitle Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#1C0C26CC] text-base md:text-[16px] max-w-2xl leading-relaxed mb-10 font-medium font-sans px-2"
            >
              {localizedTagline}
            </motion.p>
 
            {/* Main Hero Button Style (Electricity Effect) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative group cursor-pointer w-full md:w-auto flex flex-1 md:flex-none justify-center">
                {/* Electricity Effect Wrapper */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] opacity-0 group-hover:opacity-100 blur-[8px] transition-all duration-300 animate-pulse" />
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] mix-blend-overlay animate-[ping_1.5s_infinite]" />
                </div>
                
                <div className="relative z-10 w-full pointer-events-none">
                  <RollingTextButton label={t("services.start") || "Start Project"} href="/contact" variant="gradient" className="w-full md:w-auto px-6 md:px-10 text-[13px] md:text-base h-12 md:h-14 border-none shadow-[0_0_20px_rgba(22,32,240,0.3)] pointer-events-auto" />
                </div>
              </div>
            </motion.div>
          </motion.div>
 
          {/* Bottom: Badges (Main Hero Style) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center mt-6"
          >

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl relative z-10">
              {localizedFeatures.slice(0, 6).map((feature, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/50 border border-white backdrop-blur-md text-slate-800 text-[10px] md:text-[13px] font-bold shadow-sm whitespace-nowrap cursor-default hover:bg-white/80 transition-colors"
                >
                  {typeof feature === 'string' ? feature : feature.title}
                </span>
              ))}
            </div>
          </motion.div>
 
        </div>
      </section>

      {/* ── Overview Section ── */}
      {(() => {
        // Dynamic content based on service category
        const overviewContent: Record<string, { descriptionP1: string; highlight: string; descriptionP2: string; points: { title: string; desc: string }[] }> = {
          "ai-powered-apps": {
            descriptionP1: "Softcr8ors delivers ",
            highlight: "expert generative AI solutions",
            descriptionP2: " designed to accelerate your digital transformation. Using advanced technologies like TensorFlow, PyTorch, and GPT architectures, we create tailored AI solutions that enable businesses to innovate with precision and creativity.",
            points: [
              { title: "Generative AI Development", desc: "Building customized AI models to generate unique text, images, and multimedia." },
              { title: "AI Tools & Frameworks", desc: "Expertise in using cutting-edge tools such as TensorFlow, PyTorch, and GPT." },
              { title: "Data-Driven Innovation", desc: "Leveraging diverse datasets to craft AI solutions that enhance digital experiences." }
            ]
          },
          "web-engineering": {
            descriptionP1: "Softcr8ors delivers ",
            highlight: "high-performance web engineering",
            descriptionP2: " designed to scale your digital presence. Using modern frameworks like Next.js, React, and Node.js, we create responsive, lightning-fast web applications tailored to your exact business needs.",
            points: [
              { title: "Custom Web Applications", desc: "Building complex, scalable web apps with seamless user experiences." },
              { title: "Modern Tech Stack", desc: "Expertise in Next.js, React, TypeScript, and modern backend architectures." },
              { title: "Performance Optimization", desc: "Delivering Core Web Vitals optimization and sub-second load times." }
            ]
          },
          "custom-software": {
            descriptionP1: "Softcr8ors builds ",
            highlight: "bespoke software solutions",
            descriptionP2: " engineered for scalability and long-term growth. We replace manual processes and off-the-shelf limitations with powerful, custom-tailored platforms that adapt to your business workflows.",
            points: [
              { title: "Enterprise Software", desc: "Developing robust internal tools and platforms tailored to your business logic." },
              { title: "System Integration", desc: "Seamlessly connecting diverse third-party APIs and legacy systems into one unified workflow." },
              { title: "Secure Architecture", desc: "Implementing role-based access control and secure, scalable cloud infrastructure." }
            ]
          },
          "mobile-innovation": {
            descriptionP1: "Softcr8ors transforms ideas into ",
            highlight: "premium native mobile experiences.",
            descriptionP2: " We build high-retention iOS and Android applications that perform beautifully and engage users from the very first tap.",
            points: [
              { title: "Cross-Platform Development", desc: "Using React Native to ship flawless apps to both stores simultaneously." },
              { title: "Native Performance", desc: "Ensuring 60fps animations and seamless interactions that feel completely native." },
              { title: "User-Centric Design", desc: "Crafting intuitive onboarding flows and features that drive long-term retention." }
            ]
          },
          "ui-ux-design": {
            descriptionP1: "Softcr8ors creates ",
            highlight: "psychology-driven interfaces",
            descriptionP2: " that maximize user engagement and conversion rates. We blend stunning visual aesthetics with frictionless user journeys to build products people love.",
            points: [
              { title: "User Research & Strategy", desc: "Conducting deep audience analysis to ensure every design decision is data-backed." },
              { title: "Wireframing & Prototyping", desc: "Building interactive prototypes to validate concepts before writing a single line of code." },
              { title: "Design Systems", desc: "Creating scalable, reusable component libraries for perfect visual consistency." }
            ]
          },
          "digital-marketing": {
            descriptionP1: "Softcr8ors drives growth through ",
            highlight: "data-backed marketing strategies.",
            descriptionP2: " We leverage analytics, targeted campaigns, and conversion optimization to turn your digital presence into a predictable revenue engine.",
            points: [
              { title: "Performance Marketing", desc: "Executing high-ROI campaigns across search, social, and display networks." },
              { title: "Conversion Optimization", desc: "A/B testing and refining user flows to maximize your lead generation." },
              { title: "Brand Storytelling", desc: "Crafting compelling narratives that resonate with your target audience." }
            ]
          },
          "default": {
            descriptionP1: "Softcr8ors delivers ",
            highlight: "expert digital solutions",
            descriptionP2: " designed to accelerate your business growth. We create tailored technological platforms that enable businesses to innovate with precision, scalability, and creativity.",
            points: [
              { title: "Custom Development", desc: "Building scalable and secure solutions tailored to your unique workflows." },
              { title: "Digital Transformation", desc: "Modernizing legacy systems to keep your business ahead of the curve." },
              { title: "Data-Driven Strategy", desc: "Leveraging analytics and modern tools to craft enhanced digital experiences." }
            ]
          }
        };

        const currentOverviewKey = ["ai-powered-apps", "ai", "ai-powered-app"].includes(slug) ? "ai-powered-apps" : 
                                  ["web-engineering", "web"].includes(slug) ? "web-engineering" : 
                                  ["custom-software", "saas-development"].includes(slug) ? "custom-software" :
                                  ["mobile-innovation", "android-app", "mobile"].includes(slug) ? "mobile-innovation" : 
                                  ["ui-ux-design", "design"].includes(slug) ? "ui-ux-design" :
                                  ["digital-marketing", "marketing"].includes(slug) ? "digital-marketing" : "default";
        
        const overview = overviewContent[currentOverviewKey];

        return (
          <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background 3D Soft Blurred Balls Decoration */}
            <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none" />
            <div className="absolute top-[20%] left-[25%] w-[300px] h-[300px] rounded-full bg-pink-300/20 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Content (Text & List) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-fit self-center md:self-start">
                  <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                  <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1 text-center">
                    {t("overview.title") || "OVERVIEW"}
                  </span>
                  <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
                </div>
                
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[1.4] text-[#1f2937] mb-10 font-sans">
                  {overview.descriptionP1}
                  <span style={{ color: data.iconColor || "#a906c9" }}>{overview.highlight}</span>
                  {overview.descriptionP2}
                </h2>
                
                <h3 className="text-[18px] md:text-[20px] font-medium text-slate-900 mb-6 font-sans">
                  What we are <span style={{ color: data.iconColor || "#a906c9" }}>excellent</span> at:
                </h3>
                
                <ul className="space-y-5">
                  {overview.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 md:gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: data.iconColor || "#a906c9" }} />
                      <p className="text-slate-700 leading-relaxed text-[15px] md:text-[16px] font-normal font-sans">
                        <strong className="text-slate-900 font-medium font-sans">{pt.title}:</strong> {pt.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Content (Image) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-center justify-center group">
                  <img 
                    src="https://ik.imagekit.io/o5vhmyokl/aah_is_may_yar_ya_202605232329.jpeg" 
                    alt="Service Overview" 
                    className="w-full h-full object-contain mix-blend-darken contrast-[1.05] brightness-[1.02] transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
                    }}
                  />
                </div>
              </motion.div>

            </div>
          </section>
        );
      })()}

      {/* ── Problem & Solution Section ── */}
      {(() => {
        const psContent: Record<string, { heading: string; sub: string; problems: { title: string; desc: string }[]; solutions: { title: string; desc: string }[] }> = {
          "web-engineering": {
            heading: "Slow Sites & Broken Stacks,\nFixed With Precision Engineering.",
            sub: "Most web projects fail due to poor architecture decisions made early. We fix the root cause.",
            problems: [
              { title: "Slow Load Times", desc: "Unoptimized assets and poor server config tank your Core Web Vitals and SEO ranking." },
              { title: "Outdated Tech Stack", desc: "Legacy frameworks create security holes, slow dev cycles, and frustrated engineers." },
              { title: "Poor Mobile Experience", desc: "Non-responsive layouts lose 70%+ of your traffic before they read a single word." },
              { title: "No Scalability Plan", desc: "Sites built without scale in mind crash under traffic spikes and cost a fortune to fix." },
            ],
            solutions: [
              { title: "Lighthouse 100 Performance", desc: "Edge caching, image optimization, and lazy loading — your site loads in under a second." },
              { title: "Modern Next.js Architecture", desc: "Server components, ISR, and clean API design built for speed and long-term maintainability." },
              { title: "Mobile-First Responsive Design", desc: "Every breakpoint pixel-perfect — flawless on phones, tablets, and 4K displays." },
              { title: "Scalable Cloud Infrastructure", desc: "Stateless APIs, CDN distribution, and auto-scaling — built to handle 10x growth." },
            ],
          },
          "custom-software": {
            heading: "Manual Processes & Off-Shelf Limits,\nReplaced With Tailored Software.",
            sub: "Generic tools force your team to adapt to the software. We build software that adapts to you.",
            problems: [
              { title: "Spreadsheet Overload", desc: "Manual data entry, version conflicts, and human error drain productivity every single day." },
              { title: "Disconnected Systems", desc: "Tools that don't talk to each other create data silos and costly double-entry workflows." },
              { title: "No Access Control", desc: "Everyone sees everything — no role-based permissions, no audit trail, no compliance." },
              { title: "Vendor Lock-In", desc: "Off-the-shelf SaaS tools charge you forever and can't be customized to your exact needs." },
            ],
            solutions: [
              { title: "Custom Workflow Automation", desc: "We eliminate manual steps with automated pipelines tailored to your exact business logic." },
              { title: "Unified System Integration", desc: "All your tools connected — CRMs, ERPs, payment gateways, and legacy systems in one flow." },
              { title: "Granular RBAC & Audit Logs", desc: "Role-based access control with immutable audit trails — SOC-2 ready from day one." },
              { title: "Full Code Ownership", desc: "Clean, documented code you own forever — no subscriptions, no lock-in, no limits." },
            ],
          },
          "mobile-innovation": {
            heading: "Clunky Apps & Poor Retention,\nTransformed Into Native Experiences.",
            sub: "Most apps lose 80% of users in the first week. We build apps people actually keep using.",
            problems: [
              { title: "Poor App Performance", desc: "Janky animations and slow screens make users uninstall within minutes of downloading." },
              { title: "Single Platform Only", desc: "Building separate iOS and Android apps doubles cost and creates inconsistent experiences." },
              { title: "Weak Onboarding Flow", desc: "Confusing first-run experiences are the #1 reason users abandon apps permanently." },
              { title: "No Offline Support", desc: "Apps that break without internet lose users in low-connectivity environments instantly." },
            ],
            solutions: [
              { title: "60fps Native-Feel Performance", desc: "Native modules for animations and sensors — indistinguishable from a fully native build." },
              { title: "React Native Cross-Platform", desc: "One codebase, two stores — iOS and Android shipped simultaneously at half the cost." },
              { title: "Retention-Focused Onboarding", desc: "Psychology-driven first-run flows that activate users and build lasting daily habits." },
              { title: "Offline-First Architecture", desc: "Local data sync and background updates — your app works perfectly with zero signal." },
            ],
          },
          "ui-ux-design": {
            heading: "Confusing Interfaces & Lost Conversions,\nFixed With Psychology-Driven Design.",
            sub: "Bad UX silently kills your revenue. Every friction point costs you real customers.",
            problems: [
              { title: "High Bounce Rates", desc: "Users land on your page, get confused, and leave — without ever seeing your core offer." },
              { title: "Low Form Completion", desc: "Poorly designed forms with too many fields lose 67% of users before they submit." },
              { title: "Inconsistent Visual Language", desc: "Mismatched fonts, colors, and spacing make your product look unfinished and untrustworthy." },
              { title: "No Design System", desc: "Every new screen takes forever because there are no reusable components or standards." },
            ],
            solutions: [
              { title: "Conversion-Optimized Layouts", desc: "Strategic CTA placement, visual hierarchy, and UX psychology that guides users to act." },
              { title: "Frictionless Form Design", desc: "Minimal fields, smart defaults, and inline validation — completion rates jump dramatically." },
              { title: "Pixel-Perfect Design System", desc: "Atomic tokens, component libraries, and style guides for total visual consistency at scale." },
              { title: "User-Validated Prototypes", desc: "Interactive Figma prototypes tested with real users before a single line of code is written." },
            ],
          },
          "branding-identity": {
            heading: "Forgettable Brands & Weak Authority,\nReplaced With Strategic Identity.",
            sub: "Your brand is your first impression. A weak one costs you clients before you even speak.",
            problems: [
              { title: "No Brand Recognition", desc: "Generic logos and inconsistent visuals make you invisible in a crowded market." },
              { title: "Looks Unprofessional", desc: "DIY branding signals low quality — prospects judge your capability by how you look." },
              { title: "Inconsistent Across Channels", desc: "Different colors, fonts, and tones on every platform destroy brand trust and recall." },
              { title: "Can't Charge Premium Prices", desc: "Weak branding forces you to compete on price instead of value and expertise." },
            ],
            solutions: [
              { title: "Distinctive Logo & Mark System", desc: "Custom logo suite with primary, secondary, and icon variants for every use case." },
              { title: "Premium Visual Identity", desc: "Typography, color systems, and brand tokens that project authority and professionalism." },
              { title: "Complete Brand Style Guide", desc: "A comprehensive brand book ensuring total consistency across every touchpoint." },
              { title: "Premium Pricing Power", desc: "A polished brand lets you charge what you're worth — clients pay for perceived quality." },
            ],
          },
          "video-production": {
            heading: "Boring Content & Low Engagement,\nTransformed Into Cinematic Stories.",
            sub: "Static content gets scrolled past. Video stops thumbs and builds emotional connection.",
            problems: [
              { title: "Low Social Media Engagement", desc: "Text and image posts get buried. Without video, your reach and engagement collapse." },
              { title: "Poor Audio Quality", desc: "Muffled voiceovers and background noise make your brand look amateur and untrustworthy." },
              { title: "No Emotional Connection", desc: "Generic stock footage fails to communicate your brand's personality and unique story." },
              { title: "Wrong Format for Platform", desc: "One-size-fits-all videos perform poorly — each platform needs its own optimized format." },
            ],
            solutions: [
              { title: "Cinematic Brand Films", desc: "Story-driven videos with professional color grading that capture emotion and build trust." },
              { title: "Crystal-Clear Audio Mastering", desc: "Pro voiceovers, noise cancellation, and custom soundscapes — every word heard perfectly." },
              { title: "Platform-Optimized Reels", desc: "Vertical, square, and widescreen cuts — each version optimized for its target platform." },
              { title: "Full Post-Production Polish", desc: "Motion graphics, transitions, and visual effects that make your content stand out." },
            ],
          },
          "it-consulting": {
            heading: "Outdated Infrastructure & Rising Costs,\nOptimized With Expert Strategy.",
            sub: "Technology debt compounds silently. Every month you wait, it gets more expensive to fix.",
            problems: [
              { title: "Massive Cloud Overspend", desc: "Unoptimized cloud resources silently drain budgets — most companies overpay by 30-50%." },
              { title: "Security Vulnerabilities", desc: "Unpatched systems and weak access controls are open invitations for costly breaches." },
              { title: "No Disaster Recovery Plan", desc: "One server failure or ransomware attack can take your entire business offline for days." },
              { title: "Legacy Tech Bottlenecks", desc: "Old codebases and outdated tools slow your team down and block every new initiative." },
            ],
            solutions: [
              { title: "Cloud Cost Optimization", desc: "Right-sizing resources and eliminating waste typically cuts cloud bills by 20-50%." },
              { title: "Enterprise Security Framework", desc: "Zero-trust architecture, compliance audits, and vulnerability patching — fully protected." },
              { title: "Disaster Recovery Architecture", desc: "Automated backups, failover systems, and recovery playbooks — zero single points of failure." },
              { title: "Tech Stack Modernization", desc: "Replacing legacy bottlenecks with modern, maintainable frameworks your team can move fast on." },
            ],
          },
          "creative-solutions": {
            heading: "Generic Assets & Invisible Brands,\nElevated With Bold Creative Design.",
            sub: "Template-based design blends in. Custom creative work makes you impossible to ignore.",
            problems: [
              { title: "Template-Based Visual Identity", desc: "Canva templates and stock graphics make your brand look identical to your competitors." },
              { title: "Weak Pitch Decks", desc: "Poorly designed presentations lose deals before you finish your first slide." },
              { title: "No Motion or Animation", desc: "Static assets feel dated — modern audiences expect interactive, animated experiences." },
              { title: "Inconsistent Brand Assets", desc: "Mismatched graphics across channels confuse your audience and dilute brand equity." },
            ],
            solutions: [
              { title: "Custom Vector Illustrations", desc: "Bespoke artwork that's uniquely yours — no stock, no templates, no compromises." },
              { title: "High-Impact Pitch Decks", desc: "Story-driven presentations designed to close deals and impress investors on slide one." },
              { title: "Motion Graphics & Animation", desc: "Fluid CSS and video animations that make your digital presence feel alive and premium." },
              { title: "Unified Creative System", desc: "Every asset — social, web, print — perfectly aligned to your brand design system." },
            ],
          },
        };

        const ps = psContent[slug] || psContent["web-engineering"];
        const headingLines = ps.heading.split("\n");

        return (
          <section className="relative w-full py-16 md:py-20 px-4 overflow-hidden bg-[#fafbfc] border-t border-slate-100">
            <div className="absolute top-0 left-1/4 w-150 h-100 rounded-full blur-[120px] pointer-events-none opacity-[0.06]" style={{ backgroundColor: data.iconColor }} />
            <div className="absolute bottom-0 right-1/4 w-100 h-75 rounded-full blur-[100px] pointer-events-none opacity-[0.04]" style={{ backgroundColor: data.iconColor }} />

            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Top heading row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-16">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center lg:items-start gap-6">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                    <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                    <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1 text-center">
                      Problems & Solutions
                    </span>
                    <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
                  </div>
                  <div className="relative w-36 h-36 md:w-44 md:h-44">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-spin" style={{ animationDuration: "18s" }} />
                    <div className="absolute inset-3 rounded-full bg-white border border-slate-200 shadow-lg flex flex-col items-center justify-center gap-1 p-4">
                      <span className="text-[11px] font-bold text-slate-500 text-center leading-tight">Client Need &</span>
                      <span className="text-[13px] font-black text-slate-900 text-center leading-tight">Our Fix</span>
                      <div className="flex gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.iconColor }} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
                  <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium tracking-tight leading-[1.2]">
                    <span className="text-slate-900">{headingLines[0]}</span>
                    {headingLines[1] && (() => {
                      const words = headingLines[1].trim().split(" ");
                      const lastWord = words[words.length - 1];
                      const rest = words.slice(0, -1).join(" ");
                      return (
                        <><br />
                          <span className="text-slate-900">{rest}{rest ? " " : ""}</span>
                          <span style={{ color: data.iconColor }}>{lastWord}</span>
                        </>
                      );
                    })()}
                  </h2>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">{ps.sub}</p>
                </motion.div>
              </div>

              {/* Two cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Problems */}
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-8 overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-rose-100 blur-[60px] opacity-60 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-7 relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-rose-500 flex items-center justify-center shadow-md shadow-rose-200">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v4M12 16h.01"/></svg>
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-xs font-bold tracking-widest uppercase">Problems</span>
                  </div>
                  <div className="flex flex-col gap-4 relative z-10">
                    {ps.problems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2L2 6" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 leading-snug">{item.title}</p>
                          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-3xl bg-white border border-slate-200 shadow-sm p-7 md:p-8 overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-[60px] opacity-40 pointer-events-none" style={{ backgroundColor: data.iconColor }} />
                  <div className="flex items-center gap-3 mb-7 relative z-10">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md" style={{ backgroundColor: data.iconColor, boxShadow: `0 6px 20px -4px ${data.iconColor}55` }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg>
                    </div>
                    <span className="px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase" style={{ borderColor: `${data.iconColor}40`, backgroundColor: `${data.iconColor}0d`, color: data.iconColor }}>Solutions</span>
                  </div>
                  <div className="flex flex-col gap-4 relative z-10">
                    {ps.solutions.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border" style={{ backgroundColor: `${data.iconColor}15`, borderColor: `${data.iconColor}40` }}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke={data.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 leading-snug">{item.title}</p>
                          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── Dynamic Animated Feature Carousel ── */}
      {(() => {
        const carouselTitleMapping: Record<string, string> = {
          "web-engineering": "Enterprise Web Services",
          "mobile-innovation": "Enterprise Mobile Development",
          "custom-software": "Enterprise Software Development",
          "ai-powered-apps": "Enterprise AI Solutions",
          "ui-ux-design": "Enterprise UI/UX Design",
          "digital-marketing": "Enterprise Digital Marketing"
        };
        const dynamicTitle = carouselTitleMapping[slug] || "Enterprise Digital Solutions";

        return (
          <FeatureCarouselSection 
            title={t("services.features.title") || dynamicTitle}
            description={t("services.features.desc") || "Explore the comprehensive categories and specialized solutions we provide under this service, engineered to deliver maximum performance and scalability."}
            features={localizedFeatures ? localizedFeatures.map(f => typeof f === 'string' ? f : f.title) : []}
            iconColor={data.iconColor || "#a906c9"}
            image={customHeroImage || data.image}
          />
        );
      })()}

      {/* ── What's Included — Edge-to-Edge Bento Grid ── */}
      {(() => {
        type BentoCard = { type: "image" | "text" | "stat"; span?: "wide" | "tall" | "normal"; image?: string; title: string; desc?: string; stat?: string; statLabel?: string; };
        const bentoMap: Record<string, BentoCard[]> = {
          "web-engineering": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=80", title: "Custom Website Design", desc: "Pixel-perfect, brand-aligned UI built from scratch — no templates, no compromises." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=80", title: "Fully Responsive Layout", desc: "Flawless on every device — mobile, tablet, and 4K displays." },
            { type: "stat",  span: "normal", title: "Performance Score", stat: "100", statLabel: "Lighthouse Score", desc: "Edge caching, lazy loading & image optimization." },
            { type: "text",  span: "normal", title: "SEO-Friendly Development", desc: "Semantic HTML, meta tags, structured data, and Core Web Vitals compliance built in." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80", title: "Admin Panel / CMS", desc: "Manage content without a developer — headless CMS or custom admin." },
            { type: "text",  span: "normal", title: "API Integrations", desc: "Payment gateways, CRMs, and analytics — all connected seamlessly." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80", title: "Security & Deployment", desc: "OWASP hardening + production-ready CI/CD on Vercel or AWS." },
          ],
          "custom-software": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80", title: "Custom Workflow Automation", desc: "Tailored business logic that eliminates manual steps and repetitive data entry." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80", title: "Intuitive Dashboard UI", desc: "Clean, data-rich interfaces your team will actually enjoy using every day." },
            { type: "stat",  span: "normal", title: "Efficiency Gain", stat: "10×", statLabel: "Faster Workflows", desc: "Automated pipelines replace manual spreadsheet work." },
            { type: "text",  span: "normal", title: "Role-Based Access Control", desc: "Granular RBAC with immutable audit logs — SOC-2 ready from day one." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80", title: "Third-Party Integrations", desc: "CRMs, ERPs, payment gateways, and legacy systems in one unified flow." },
            { type: "text",  span: "normal", title: "Automated Reporting", desc: "Scheduled PDF exports, email digests, and custom analytics built in." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80", title: "Scalable Architecture & Full Ownership", desc: "Built to handle 10× growth — clean, documented code you own forever." },
          ],
          "mobile-innovation": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80", title: "60fps Native-Feel Performance", desc: "Native modules for animations — indistinguishable from a fully native build." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80", title: "Cross-Platform iOS & Android", desc: "One codebase, two stores — shipped simultaneously at half the cost." },
            { type: "stat",  span: "normal", title: "Retention Rate", stat: "80%", statLabel: "Week-1 Retention", desc: "Psychology-driven onboarding that builds lasting daily habits." },
            { type: "text",  span: "normal", title: "Offline-First Architecture", desc: "Local data sync and background updates — works perfectly with zero signal." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80", title: "Push Notifications", desc: "Smart, segmented campaigns that re-engage users at exactly the right moment." },
            { type: "text",  span: "normal", title: "App Store Submission", desc: "Full submission to Apple App Store and Google Play — we handle everything." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&auto=format&fit=crop&q=80", title: "Analytics, OTA Updates & Crash Reporting", desc: "Firebase or custom analytics + instant OTA updates without app store delays." },
          ],
          "ui-ux-design": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80", title: "User Research & Wireframes", desc: "Deep user interviews and high-fidelity Figma prototypes tested before any code." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=800&auto=format&fit=crop&q=80", title: "Responsive Design System", desc: "Atomic tokens, component libraries, and style guides for total visual consistency." },
            { type: "stat",  span: "normal", title: "Conversion Lift", stat: "3×", statLabel: "Avg. CTA Uplift", desc: "Strategic UX psychology that guides users to take action." },
            { type: "text",  span: "normal", title: "Micro-Interaction Design", desc: "Subtle animations and feedback states that make your product feel alive and premium." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "Accessibility (WCAG 2.1)", desc: "Color contrast, keyboard nav, and screen reader support on every screen." },
            { type: "text",  span: "normal", title: "Usability Testing", desc: "Structured sessions with real users to validate flows before launch." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80", title: "Developer Handoff", desc: "Annotated Figma files with specs, assets, and component docs ready for dev." },
          ],
          "branding-identity": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&auto=format&fit=crop&q=80", title: "Logo & Mark System", desc: "Custom logo suite with primary, secondary, and icon variants for every use case." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80", title: "Color Palette & Typography", desc: "Brand color systems and type scales that project authority and professionalism." },
            { type: "stat",  span: "normal", title: "Brand Recall", stat: "7×", statLabel: "Higher Recognition", desc: "Consistent identity across every touchpoint builds instant trust." },
            { type: "text",  span: "normal", title: "Brand Style Guide", desc: "A comprehensive brand book ensuring total consistency across every channel." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80", title: "Social Media Kit", desc: "Profile images, cover photos, and post templates sized for every platform." },
            { type: "text",  span: "normal", title: "Brand Voice & Messaging", desc: "Tone of voice guidelines and key messaging frameworks for consistent communication." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&auto=format&fit=crop&q=80", title: "Print, Stationery & File Delivery", desc: "Business cards, letterheads, and all formats — SVG, PNG, PDF, source files." },
          ],
          "video-production": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop&q=80", title: "Concept & Storyboarding", desc: "Story-driven scripts and visual storyboards crafted before a single frame is shot." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80", title: "Professional 4K/8K Filming", desc: "Cinematic lighting, professional audio, and on-set direction." },
            { type: "stat",  span: "normal", title: "Engagement Boost", stat: "5×", statLabel: "vs. Static Content", desc: "Video stops thumbs and builds emotional connection." },
            { type: "text",  span: "normal", title: "Color Grading & Motion Graphics", desc: "Cinematic color grading + animated lower thirds and branded motion elements." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80", title: "Platform-Optimized Cuts", desc: "Vertical, square, and widescreen — each version optimized for its platform." },
            { type: "text",  span: "normal", title: "Audio Mastering & Subtitles", desc: "Pro voiceovers, noise cancellation, and accurate captions in multiple languages." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=80", title: "Final Delivery Package", desc: "All formats and resolutions — ready for web, broadcast, and social media." },
          ],
          "it-consulting": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80", title: "Infrastructure Audit", desc: "Deep-dive assessment of your current stack — identifying risks, waste, and bottlenecks." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80", title: "Cloud Cost Optimization", desc: "Right-sizing resources and eliminating waste — typically cuts cloud bills by 20-50%." },
            { type: "stat",  span: "normal", title: "Cost Reduction", stat: "40%", statLabel: "Avg. Cloud Savings", desc: "Unoptimized cloud resources silently drain budgets every month." },
            { type: "text",  span: "normal", title: "Zero-Trust Security Framework", desc: "Compliance audits and vulnerability patching — fully protected from day one." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80", title: "Disaster Recovery Plan", desc: "Automated backups, failover systems, and recovery playbooks — zero single points of failure." },
            { type: "text",  span: "normal", title: "DevOps & CI/CD Setup", desc: "Automated pipelines, containerization, and deployment workflows that ship faster." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80", title: "Tech Modernization & Team Training", desc: "Replace legacy bottlenecks + comprehensive docs and hands-on training." },
          ],
          "creative-solutions": [
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1561070791-26c113006238?w=1200&auto=format&fit=crop&q=80", title: "Custom Illustrations", desc: "Bespoke vector artwork that's uniquely yours — no stock, no templates, no compromises." },
            { type: "image", span: "tall",   image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80", title: "High-Impact Pitch Decks", desc: "Story-driven presentations designed to close deals and impress investors on slide one." },
            { type: "stat",  span: "normal", title: "Deal Close Rate", stat: "2×", statLabel: "With Premium Decks", desc: "Poorly designed presentations lose deals before you finish your first slide." },
            { type: "text",  span: "normal", title: "Motion Graphics & Animation", desc: "Fluid CSS and video animations that make your digital presence feel alive and premium." },
            { type: "image", span: "normal", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80", title: "Social Media Content", desc: "Scroll-stopping posts, stories, and reels designed for maximum engagement." },
            { type: "text",  span: "normal", title: "Email Templates & Print Design", desc: "Branded HTML emails + premium brochures, packaging, and signage." },
            { type: "image", span: "wide",   image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop&q=80", title: "Unified Creative System", desc: "Every asset — social, web, print — perfectly aligned to your brand design system." },
          ],
        };
        const cards = bentoMap[slug] || bentoMap["web-engineering"];

        return (
          <section className="relative w-full overflow-hidden bg-white">

            {/* Header — pill badge + heading + text */}
            <div className="flex flex-col items-center text-center gap-5 py-16 md:py-20 px-6">
              {/* Pill badge — same as ServicesSection */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center w-full">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                  <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                  <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] uppercase text-slate-500 ml-1 text-center">Everything You Get</span>
                  <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl text-slate-950 tracking-tight leading-[1.1]"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 500 }}
              >
                What&apos;s{" "}
                <span style={{ color: data.iconColor }}>
                  Included
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-500 text-sm md:text-lg max-w-2xl leading-relaxed"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 400 }}
              >
                Every engagement comes fully loaded — no hidden extras, no surprise invoices. Here&apos;s exactly what you get.
              </motion.p>
            </div>

            {/* Responsive Bento Grid */}
            {(() => {
              const imagePicks = cards.filter(c => c.type === "image" && c.image);
              const textCards = cards.filter(c => c.type !== "image");
              const getBadges = (idx: number) => textCards.slice(idx % textCards.length, (idx % textCards.length) + 3).map(c => c.title);

              return (
                <div className="w-full flex flex-col" style={{ gap: "8px" }}>
                  {/* Row 1+2: desktop = wide+tall layout */}
                  <div
                    className="w-full hidden md:grid"
                    style={{
                      gap: "8px",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gridTemplateRows: "380px 280px",
                    }}
                  >
                    {/* Wide card — col 1-2, row 1 */}
                    <div style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }} className="hidden md:block">
                      <HoverBentoCell image={imagePicks[0]?.image!} title={imagePicks[0]?.title!} desc={imagePicks[0]?.desc} badges={getBadges(0)} col="auto" row="auto" height={380} iconColor={data.iconColor} delay={0} />
                    </div>
                    {/* Tall card — col 3, row 1+2 */}
                    <div style={{ gridColumn: "3 / 4", gridRow: "1 / 3" }} className="hidden md:block">
                      <HoverBentoCell image={imagePicks[1]?.image!} title={imagePicks[1]?.title!} desc={imagePicks[1]?.desc} badges={getBadges(1)} col="auto" row="auto" height={0} iconColor={data.iconColor} delay={0.08} />
                    </div>
                    {/* Small card — col 1, row 2 */}
                    <div style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }} className="hidden md:block">
                      <HoverBentoCell image={imagePicks[2]?.image!} title={imagePicks[2]?.title!} desc={imagePicks[2]?.desc} badges={getBadges(2)} col="auto" row="auto" height={280} iconColor={data.iconColor} delay={0.12} />
                    </div>
                    {/* Small card — col 2, row 2 */}
                    <div style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }} className="hidden md:block">
                      <HoverBentoCell image={imagePicks[3]?.image!} title={imagePicks[3]?.title!} desc={imagePicks[3]?.desc} badges={getBadges(3)} col="auto" row="auto" height={280} iconColor={data.iconColor} delay={0.16} />
                    </div>
                  </div>

                  {/* Row 3: 4 equal — desktop */}
                  <div
                    className="w-full hidden md:grid"
                    style={{ gap: "8px", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "260px" }}
                  >
                    {[0, 1, 2, 3].map(i => (
                      <HoverBentoCell key={i} image={imagePicks[i % imagePicks.length]?.image!} title={imagePicks[i % imagePicks.length]?.title!} desc={imagePicks[i % imagePicks.length]?.desc} badges={getBadges(i + 4)} col="auto" row="auto" height={260} iconColor={data.iconColor} delay={i * 0.07} />
                    ))}
                  </div>

                  {/* Mobile: 1-col or 2-col stack, all images */}
                  <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:hidden"
                    style={{ gap: "8px", gridAutoRows: "260px" }}
                  >
                    {imagePicks.slice(0, 4).map((card, i) => (
                      <HoverBentoCell key={i} image={card.image!} title={card.title} desc={card.desc} badges={getBadges(i)} col="auto" row="auto" height={260} iconColor={data.iconColor} delay={i * 0.06} />
                    ))}
                  </div>
                </div>
              );
            })()}

          </section>
        );
      })()}

      {/* ── Development Process Section ── */}
      <DevelopmentProcessSection iconColor={data.iconColor || "#a906c9"} />

      {/* ── High-End Mockups CTA Section (Everything Your Product Needs) ── */}
      <section className="py-28 px-6 md:px-12 w-full relative z-10 overflow-hidden bg-linear-to-b from-white via-neutral-50/50 to-white">
        
        {/* Soft Background Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] bg-amber-100/40" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px]" style={{ backgroundColor: `${data.iconColor}15` }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Text and Action Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm self-center lg:self-start">
                <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
                <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-500 ml-1 text-center">
                  softcr8ors ecosystem
                </span>
                <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-[4.2rem] font-medium tracking-tight text-neutral-900 leading-[1.08]" style={{ fontFamily: "'General Sans', sans-serif" }}>
                Everything your <br className="hidden md:block"/>
                <span className="relative inline-block">
                  product
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                    <path d="M0,7 C30,2 70,2 100,7" stroke={data.iconColor} strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span> needs
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg mt-2 font-normal" style={{ fontFamily: "'General Sans', sans-serif" }}>
                {t("services.ctaDesc") || "Bring your ideas to life with high-performance mobile apps, custom SaaS automation, psychology-driven design, and scalable code built to grow."}
              </p>
            </motion.div>

            {/* Premium Dark Capsule CTA Button Triggering the Popover Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative z-20"
            >
              <PopoverForm
                open={popoverOpen}
                setOpen={setPopoverOpen}
                showSuccess={formSuccess}
                width="480px"
                height="550px"
                title="Start Project"
                showCloseButton={true}
                showTitle={false}
                successChild={<PopoverSuccessState iconColor={data.iconColor} onClose={() => { setPopoverOpen(false); setFormSuccess(false); }} />}
                openChild={<PopoverContactForm iconColor={data.iconColor} onSuccess={() => setFormSuccess(true)} />}
                customTrigger={
                  <div className="relative inline-flex items-center justify-center">
                    {/* Pulsating Ring Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1620f0] to-[#f016da] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <RollingTextButton 
                      label={t("services.start") || "Start Project"} 
                      href="#" 
                      variant="gradient" 
                      className="px-10 py-5 text-base md:text-lg relative z-10 shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20" 
                      style={{ borderRadius: "9999px" }}
                    />
                  </div>
                }
              />
            </motion.div>
          </div>

          {/* Right: Highly Aesthetic Floating Shapes & Overlapping Phone Mockups */}
          <div className="w-full flex items-center justify-center relative min-h-[500px] select-none">
            
            {/* Playful Floating Vector Illustrations behind mockups */}
            {/* 1. Purple crescent / cloud shape */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 w-32 h-32 opacity-85 z-0 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M20,60 Q40,30 80,45 Q90,70 60,80 Q30,90 20,60" fill="#a78bfa" className="opacity-45" />
                <circle cx="70" cy="30" r="8" fill="#c084fc" />
              </svg>
            </motion.div>

            {/* 2. Floating Orange/Amber circle shape on the right */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 top-12 w-28 h-28 opacity-75 z-0 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#fb923c" className="opacity-35" />
                <path d="M40,35 Q50,45 60,35" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* 3. Curved hand-drawn looping arrow above the devices */}
            <motion.div
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="absolute -top-10 left-12 w-48 h-20 opacity-80 z-10 pointer-events-none hidden md:block"
            >
              <svg viewBox="0 0 150 60" fill="none" className="w-full h-full">
                <path d="M10,45 Q50,10 90,30 T140,20" stroke="#f472b6" strokeWidth="2.5" strokeDasharray="5,5" strokeLinecap="round" />
                <polygon points="140,20 132,16 136,25" fill="#f472b6" />
                <circle cx="10" cy="45" r="4" fill="#f472b6" />
              </svg>
            </motion.div>

            {/* 4. Soft pink flower shape at the bottom right */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 bottom-12 w-16 h-16 opacity-75 z-10 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M50,15 C55,35 75,35 70,50 C65,65 55,65 50,85 C45,65 35,65 30,50 C25,35 45,35 50,15 Z" fill="#f472b6" className="opacity-45" />
                <circle cx="50" cy="50" r="10" fill="#fb7185" />
              </svg>
            </motion.div>

            {/* 5. Speech Bubble typing bubble at the bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 bottom-24 bg-blue-500 text-white rounded-2xl px-4 py-3 shadow-lg z-30 flex items-center gap-1.5 border border-blue-400 pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2.5 h-2.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
              <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-blue-500 rotate-45 border-r border-b border-blue-400" />
            </motion.div>

            {/* Overlapping Phone Mockups Wrapper */}
            <div className="relative w-full max-w-[420px] h-[400px] md:h-[520px] flex items-center justify-center scale-[0.65] sm:scale-[0.8] md:scale-100 origin-center">
              
              {/* Smartphone Mockup 2: BACKGROUND (Tilted right, behind) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 150, rotate: 6 }}
                whileInView={{ opacity: 1, x: 50, y: -20, rotate: 12 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 45, damping: 15 }}
                className="absolute w-[240px] h-[460px] bg-[#1e1e24] rounded-[48px] border-[6px] border-[#2A2A2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 flex flex-col ring-1 ring-white/10"
              >
                {/* iPhone Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[72px] h-5 bg-black rounded-full z-50 flex items-center justify-end px-2 shadow-[inset_0px_0px_2px_rgba(255,255,255,0.2)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] shadow-[inset_0_0_1px_rgba(255,255,255,0.3)]" />
                </div>

                {/* Simulated Premium UI: Team Call / Speaker screen */}
                <div className="flex-1 bg-neutral-900 flex flex-col relative rounded-[42px] overflow-hidden">
                  
                  {/* Participant Video Image */}
                  <div className="flex-1 w-full relative overflow-hidden bg-neutral-950">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" 
                      alt="Product Specialist" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col z-10">
                      <span className="text-white text-xs font-medium" style={{ fontFamily: "'General Sans', sans-serif" }}>Elena Rostova</span>
                      <span className="text-[9px] text-slate-400 mt-0.5 font-normal" style={{ fontFamily: "'General Sans', sans-serif" }}>softcr8ors Technical Lead</span>
                    </div>
                  </div>

                  {/* Dynamic Themed Accent Block */}
                  <div className="h-28 bg-slate-950 border-t border-neutral-900 p-4 flex flex-col justify-between pb-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-normal text-slate-400 tracking-wider" style={{ fontFamily: "'General Sans', sans-serif" }}>Estimated Delivery</span>
                      <span className="text-sm font-medium text-white flex items-center gap-1.5" style={{ fontFamily: "'General Sans', sans-serif" }}>
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: data.iconColor }} />
                        <span>14 Working Days</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-500 font-normal" style={{ fontFamily: "'General Sans', sans-serif" }}>Workspace connected.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smartphone Mockup 1: FOREGROUND (Tilted left, in front) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 220, rotate: -8 }}
                whileInView={{ opacity: 1, x: -40, y: 10, rotate: -6 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 40, damping: 13, delay: 0.15 }}
                className="absolute w-[245px] h-[470px] bg-[#1e1e24] rounded-[48px] border-[6px] border-[#2A2A2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-20 flex flex-col ring-1 ring-white/10"
              >
                {/* iPhone Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[72px] h-5 bg-black rounded-full z-50 flex items-center justify-end px-2 shadow-[inset_0px_0px_2px_rgba(255,255,255,0.2)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] shadow-[inset_0_0_1px_rgba(255,255,255,0.3)]" />
                </div>

                {/* Simulated UI: Live Auto-Scrolling Homepage (Skipping Hero/Marquee) */}
                <div className="flex-1 bg-white relative rounded-[42px] overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 origin-top-left"
                    style={{ width: "390px", height: "800px", transform: "scale(0.62)" }}
                  >
                    <motion.div
                      animate={{ y: [-450, -2500, -450] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-[4000px]"
                    >
                      <iframe 
                        src="/" 
                        className="w-full h-[4000px] border-none pointer-events-none scale-[1.01]"
                        scrolling="no"
                        tabIndex={-1}
                      />
                    </motion.div>
                  </div>
                  {/* Subtle glare overlay to make it look like a real glass screen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-10 rounded-[42px] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>


      {/* Premium Interactive Showcase Section (Core Pillars with Overlay & Hover Badges) */}
      <section className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Soft Background Decorative Radial Glows (Matching Home Page) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 blur-[150px] rounded-full pointer-events-none opacity-[0.12] z-0"
          style={{ backgroundColor: data.iconColor }}
        />

        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center w-full gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[8.5px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] uppercase text-slate-500 ml-1 text-center">
                {showcaseBadge}
              </span>
              <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.1]"
          >
            {showcaseLead}
            {showcaseLead && " "}
            <span className="relative inline-block">
              <span className="relative z-10">{showcaseAccent}</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-1 left-0 h-[35%] z-0"
                style={{ backgroundColor: `${data.iconColor}22` }}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto"
          >
            {showcaseDesc}
          </motion.p>
        </div>

        {/* Premium Benefits Grid (Modern Glass/Minimal Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {((localizedBenefits as { title: string; desc: string }[]).slice(0, 3)).map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <div 
                className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:border-slate-200 transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.05)" }}
              >
                {/* Top Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-100" />
                  <img
                    src={pillarImages[idx % pillarImages.length]}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dynamic color overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-multiply"
                    style={{ backgroundColor: data.iconColor }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute bottom-5 left-5 z-10">
                     <span className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.iconColor }}></span>
                       <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase drop-shadow-sm">Benefit 0{idx + 1}</span>
                     </span>
                  </div>
                  
                  {/* Top Right Tag */}
                  <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 backdrop-blur-md z-10 transition-colors duration-500 group-hover:bg-black/40">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      Benchmarked
                    </span>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="p-8 flex flex-col flex-1 relative bg-white z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight font-sans transition-colors group-hover:text-slate-800">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[14px] font-medium font-sans">
                    {benefit.desc}
                  </p>
                  
                  {/* Call to action arrow that slides out */}
                  <div className="mt-auto pt-8 flex items-center justify-between">
                     <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2"
                        style={{ backgroundColor: `${data.iconColor}15` }}
                     >
                        <ArrowRight size={18} style={{ color: data.iconColor }} />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
