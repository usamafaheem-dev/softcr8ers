"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, ChevronDown, CheckCircle2, Search, Sparkles, MapPin, Phone, Clock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "@/context/LanguageContext";
import { PulseBeams } from "@/components/ui/pulse-beams";

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

const getServiceOptions = (t: any) => [
  t("srv.1"),
  t("srv.2"),
  t("srv.3"),
  t("srv.4"),
  t("srv.5"),
  t("srv.6"),
  t("srv.7"),
  t("srv.8"),
];

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  services: string[];
  projectDetails: string;
}

const getTeamMembers = (t: any) => [
  { id: 1, name: "Asim Raza", role: t("team.1.role"), image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 2, name: "Zainab Khan", role: t("team.2.role"), image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 3, name: "Usama Faheem", role: t("team.3.role"), image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 4, name: "Ayesha Siddiqui", role: t("team.4.role"), image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 5, name: "Bilal Ahmed", role: t("team.5.role"), image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 6, name: "Sarah Yousuf", role: t("team.6.role"), image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop" },
  { id: 7, name: "Hamza Malik", role: t("team.7.role"), image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=500&auto=format&fit=crop" },
];

// ── Rolling Text Button (Fixed variant-based text color) ────────────
function ContactButton({
  label,
  href = "#",
  variant = "gradient",
  className,
  type = "button"
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
  type?: "button" | "submit";
}) {
  const textCls = variant === "gradient" ? "text-white" : "text-slate-800";

  const content = (
    <div className="relative h-5 overflow-hidden">
      <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
        <span className={cn("flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs", textCls)}>
          {label}
        </span>
        <span className={cn("flex h-5 items-center justify-center relative z-10 px-1 uppercase tracking-widest text-[10px] md:text-xs", textCls)}>
          {label}
        </span>
      </div>
    </div>
  );

  const baseCls = cn(
    "group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-sm",
    variant === "gradient"
      ? "bg-[#050101] shadow-xl hover:shadow-blue-500/20"
      : "bg-white border border-slate-200 hover:bg-slate-50",
    className
  );

  if (type === "submit") {
    return (
      <motion.button type="submit" className={baseCls} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a href={href} className={baseCls} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      {content}
    </motion.a>
  );
}

// ── Country Picker ────────────────────────────────────────────
function CountryPicker({ selected, onChange, className }: {
  selected: typeof countries[0];
  onChange: (c: typeof countries[0]) => void;
  className?: string;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.dial.includes(search)
  );

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setSearch(""); }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <button type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-full flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-purple-400 transition-all duration-200 shadow-sm"
      >
        <ReactCountryFlag countryCode={selected.code} svg style={{ width: "1.2em", height: "1.2em", flexShrink: 0 }} />
        <span className="text-sm text-slate-800 font-medium truncate flex-1 text-left">{selected.name}</span>
        <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform shrink-0", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-[100] overflow-hidden min-w-[200px]"
          >
            <div className="p-2 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-lg shadow-sm">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <input autoFocus type="text" placeholder={t("contact.form.placeholder.search")}
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
              {filtered.map(c => (
                <button key={c.code} type="button"
                  onClick={() => { onChange(c); setOpen(false); setSearch(""); }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors text-left",
                    selected.code === c.code && "bg-purple-50 text-purple-600 font-semibold"
                  )}
                >
                  <ReactCountryFlag countryCode={c.code} svg style={{ width: "1.2em", height: "1.2em", flexShrink: 0 }} />
                  <span className="flex-1 truncate text-slate-700">{c.name}</span>
                  <span className="text-slate-400 text-xs shrink-0">{c.dial}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────
export function ContactSection({ 
  iconColor, 
  isModal = false,
  badgeText,
  titlePart1,
  titleHighlight1,
  titlePart2,
  titleHighlight2,
  subtitleText,
  formTitlePart1,
  formTitleHighlight,
  formTitlePart2,
  variant = "home"
}: { 
  iconColor?: string; 
  isModal?: boolean;
  badgeText?: string;
  titlePart1?: string;
  titleHighlight1?: string;
  titlePart2?: string;
  titleHighlight2?: string;
  subtitleText?: string;
  formTitlePart1?: string;
  formTitleHighlight?: string;
  formTitlePart2?: string;
  variant?: "home" | "contactPage";
}) {
  const { t, language } = useTranslation();
  const isArabicOrUrdu = language === "ur" || language === "ar";
  const serviceOptions = getServiceOptions(t);
  const teamMembers = getTeamMembers(t);
  const [formData, setFormData] = useState<FormData>({
    fullName: "", email: "", phoneNumber: "", services: [], projectDetails: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[2]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(p => {
      const next = p.services.includes(service)
        ? p.services.filter(s => s !== service)
        : [...p.services, service];
      return { ...p, services: next };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fullPhone = `${selectedCountry.dial} ${formData.phoneNumber}`;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: fullPhone,
          services: formData.services,
          details: formData.projectDetails,
        }),
      });
      const res = await response.json();
      if (res.success) {
        setSubmitted(true);
        setFormData({
          fullName: "", email: "", phoneNumber: "", services: [], projectDetails: "",
        });
      } else {
        alert(res.error || "Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const beamColor = iconColor || "#1620f0";
  const headerBeams = [
    {
      path: "M 0 56 L 240 56",
      color: beamColor,
      strokeWidth: 2,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: "0%", y2: "0%" },
        transition: { duration: 3.5, repeat: Infinity, ease: "linear" }
      }
    },
    {
      path: "M 15 56 Q 120 -10 225 56",
      color: beamColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "100%"], y2: ["0%", "100%"] },
        transition: { duration: 4.5, repeat: Infinity, ease: "linear", delay: 1 }
      }
    },
    {
      path: "M 15 56 Q 120 122 225 56",
      color: beamColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["100%", "0%"], y2: ["100%", "0%"] },
        transition: { duration: 4, repeat: Infinity, ease: "linear", delay: 2 }
      }
    }
  ];

  const submitBeams = [
    {
      path: "M 0 56 L 300 56",
      color: beamColor,
      strokeWidth: 2,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: "0%", y2: "0%" },
        transition: { duration: 3.5, repeat: Infinity, ease: "linear" }
      }
    },
    {
      path: "M 20 56 Q 150 -10 280 56",
      color: beamColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "100%"], y2: ["0%", "100%"] },
        transition: { duration: 4.5, repeat: Infinity, ease: "linear", delay: 1 }
      }
    },
    {
      path: "M 20 56 Q 150 122 280 56",
      color: beamColor,
      strokeWidth: 1.5,
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["100%", "0%"], y2: ["100%", "0%"] },
        transition: { duration: 4, repeat: Infinity, ease: "linear", delay: 2 }
      }
    }
  ];

  return (
    <section id="contact" className={cn(
      "font-['General_Sans',sans-serif]",
      isModal ? "relative w-full max-w-xl mx-auto" : cn("relative w-full overflow-hidden bg-white", variant === "home" ? "py-12 md:py-16 border-t border-slate-100" : "pt-0 pb-8")
    )}>

      {/* Floating 3D Blocks */}
      {!isModal && variant === "home" && (
        <>
          <motion.div
            className="absolute top-[10%] left-[2%] w-32 h-32 md:w-56 md:h-56 pointer-events-none opacity-20 md:opacity-40 z-0"
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
          </motion.div>
          <motion.div
            className="absolute bottom-[10%] right-[2%] w-32 h-32 md:w-56 md:h-56 pointer-events-none opacity-20 md:opacity-40 z-0"
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
          </motion.div>
        </>
      )}

      {/* ── Header Section ── */}
      {!isModal && variant === "home" && (
        <>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center mb-16 md:mb-20">
        <div className="flex justify-center w-full mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">{badgeText || t("contact.badge")}</span>
            <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
          </div>
        </div>

        <h2 className={cn(
          "font-medium text-slate-950 tracking-tight leading-[1.1] mb-6 md:mb-8",
          isArabicOrUrdu ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"
        )}>
          {titlePart1 || t("contact.title.p1")}
          <span className="relative inline-block">
            <span className="relative z-10">{titleHighlight1 || t("contact.title.highlight1")}</span>
            <motion.span
              initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-1 left-0 h-[35%] z-0"
              style={{ backgroundColor: iconColor ? `${iconColor}22` : "rgba(22, 32, 240, 0.15)" }}
            />
          </span>
          <br />{titlePart2 || t("contact.title.p2")}
          <span style={{ color: iconColor || "#1620f0" }}>
            {titleHighlight2 || t("contact.title.highlight2")}
          </span>
        </h2>

        <p className="text-slate-500 text-sm md:text-base font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitleText || t("contact.subtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <ContactButton label={t("contact.btn.call")} href="tel:+923220264662" variant="transparent" className="min-w-[180px] md:min-w-[200px] h-[52px]" />
          <div className="w-[240px] h-28 flex items-center justify-center relative overflow-visible">
            <PulseBeams beams={headerBeams} viewBox="0 0 240 112" className="absolute inset-0 w-full h-full">
              <ContactButton label={t("contact.btn.demo")} href="/#contact" variant="gradient" className="min-w-[180px] md:min-w-[200px] h-[52px] relative z-10" />
            </PulseBeams>
          </div>
        </div>
      </div>

      {/* ── Team Marquee Section ── */}
      <div dir="ltr" className="relative w-full mb-20 md:mb-24 overflow-hidden py-4">
        <div className="flex w-max animate-marquee-fast">
          {[...teamMembers, ...teamMembers, ...teamMembers].map((member, idx) => (
            <div key={`${member.id}-${idx}`} className="relative w-[160px] h-[220px] md:w-[200px] md:h-[260px] mx-3 rounded-[1.5rem] overflow-hidden group border border-slate-100 shadow-sm shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-[1.2rem] p-3 text-center border border-white/20 transform transition-all duration-500 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] shadow-xl">
                <h4 className="text-white font-medium text-xs md:text-sm leading-tight mb-0.5">{member.name}</h4>
                <p className="text-white/80 text-[7px] md:text-[8px] font-normal uppercase tracking-[0.2em]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
        </>
      )}

      {/* ── CSS Animations ── */}
      <style jsx global>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 100s linear infinite;
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .form-border-container {
          position: relative;
          padding: 1.5px;
          overflow: hidden;
          background: transparent;
        }
        .form-border-container::before {
          content: "";
          position: absolute;
          inset: -150%;
          background: conic-gradient(from 0deg, #1620f0, #a906c9, #1620f0, #a906c9, #1620f0);
          animation: rotate-border 6s linear infinite;
          opacity: 1;
          z-index: 0;
        }
        .form-border-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
        }
      `}</style>

      {/* ── Main Form Section ── */}
      <div className={cn("relative z-10 w-full mx-auto", isModal ? "max-w-xl px-0" : "max-w-5xl px-4 md:px-6")}>
        <div className={cn("grid items-center", isModal ? "grid-cols-1 gap-0" : "grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12")}>

          {/* Left: Form */}
          <motion.div
            initial={isModal ? false : { opacity: 0, y: 30 }}
            whileInView={isModal ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("form-border-container rounded-[1.5rem]", !isModal && "shadow-[0_20px_50px_rgba(0,0,0,0.03)]")}
          >
            <div className={cn("form-border-inner rounded-[1.5rem]", isModal ? "p-3 md:p-4 bg-[#161245]" : "p-4 lg:p-5 bg-gradient-to-br from-[#1620f0]/95 to-[#a906c9]/95 backdrop-blur-xl border border-white/20 shadow-2xl")}>
              <h3 className={cn("font-medium text-white text-center lg:text-left", isModal ? "text-xl mb-4" : "text-xl mb-5")}>
                {formTitlePart1 || t("contact.form.title.p1")} <span className="text-[#38bdf8]">{formTitleHighlight || t("contact.form.title.highlight")}</span> {formTitlePart2 || (t("contact.form.title.p2") ?? "")}
              </h3>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t("contact.form.success.title")}</h3>
                  <button onClick={() => setSubmitted(false)} className="text-white font-semibold hover:underline transition-colors">{t("contact.form.success.btn")}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={cn("space-y-2", isModal && "space-y-2")}>
                  <div className={cn("grid grid-cols-1 gap-2", isModal ? "md:grid-cols-2 gap-2" : "md:grid-cols-2")}>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 ml-1">{t("contact.form.name")}</label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder={t("contact.form.placeholder.name")} className="w-full px-0 py-2 bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all font-normal text-sm" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 ml-1">{t("contact.form.email")}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t("contact.form.placeholder.email")} className="w-full px-0 py-2 bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all font-normal text-sm" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 ml-1">{t("contact.form.phone")}</label>
                    {/* Desktop: One line | Mobile: Stacked */}
                    <div className="flex flex-col md:flex-row md:items-stretch gap-3">
                      <CountryPicker selected={selectedCountry} onChange={setSelectedCountry} className="md:w-[160px]" />
                      <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2 bg-white/10 border border-white/20 rounded-xl focus-within:border-white transition-all shadow-sm">
                        <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                        <span className="text-sm text-white/60 font-medium shrink-0">{selectedCountry.dial}</span>
                        <div className="w-px h-3.5 bg-white/20 mx-0.5" />
                        <input type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} placeholder={t("contact.form.placeholder.phone")} className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm font-normal" />
                      </div>
                    </div>
                  </div>

                  <div className={cn("space-y-2", isModal && "space-y-2")}>
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 ml-1">{t("contact.form.services")}</label>
                    <div className={cn("grid grid-cols-1 sm:grid-cols-2", isModal ? "gap-1.5" : "gap-2")}>
                      {serviceOptions.map(service => (
                        <label key={service} className="flex items-center gap-2.5 group cursor-pointer">
                          <div className="relative w-4 h-4 flex items-center justify-center">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="peer absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full border border-white/40 rounded group-hover:border-white peer-checked:bg-white peer-checked:border-white transition-all" />
                            <CheckCircle2 size={10} className="absolute text-[#a906c9] opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-sm text-white/80 font-normal group-hover:text-white transition-colors">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 ml-1">{t("contact.form.project")}</label>
                    <textarea name="projectDetails" required rows={3} value={formData.projectDetails} onChange={handleChange} placeholder={t("contact.form.placeholder.project")} className="w-full px-0 py-2 bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all resize-none font-normal text-sm" />
                  </div>

                  <div className="pt-2 flex justify-center">
                    <div className="w-[300px] h-16 flex items-center justify-center relative overflow-visible mt-2">
                      <PulseBeams beams={submitBeams} viewBox="0 0 300 112" className="absolute inset-0 w-full h-full">
                        <ContactButton label={isSubmitting ? t("contact.form.btn.loading") : t("contact.form.btn.submit")} type="submit" variant="gradient" className="min-w-[260px] h-[52px] relative z-10" />
                      </PulseBeams>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Info (Centered on Mobile) */}
          {!isModal && (
            variant === "contactPage" ? (
              <div className="flex flex-col justify-center lg:pl-10 text-center lg:text-left mt-10 lg:mt-0">
                <h4 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">CONTACT US</h4>
                <p className="text-slate-500 text-sm font-normal mb-10 leading-relaxed max-w-sm mx-auto lg:mx-0">
                  We look forward to hearing from you. Our team is eager to assist you with any inquiries or feedback you have.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 text-left max-w-md mx-auto lg:mx-0">
                  {/* Address */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-md bg-transparent flex items-center justify-start text-[#a906c9]">
                      <MapPin size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Al Hafeez Heights,<br/>
                      Block D1 Gulberg III,<br/>
                      Lahore, 54000
                    </p>
                  </div>
                  {/* Phone */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-md bg-transparent flex items-center justify-start text-[#a906c9]">
                      <Phone size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <a href="tel:+923220264662" className="hover:underline">+92 322 0264662</a>
                    </p>
                  </div>
                  {/* Clock / Email 1 */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-md bg-transparent flex items-center justify-start text-[#a906c9]">
                      <Clock size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <a href="mailto:info@softcr8ors.com" className="hover:underline">info@softcr8ors.com</a><br/>
                      <a href="mailto:services@softcr8ors.com" className="hover:underline">services@softcr8ors.com</a>
                    </p>
                  </div>
                  {/* Mail / Email 2 */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-md bg-transparent flex items-center justify-start text-[#a906c9]">
                      <Mail size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <a href="mailto:info@softcr8ors.com" className="hover:underline">info@softcr8ors.com</a><br/>
                      <a href="mailto:services@softcr8ors.com" className="hover:underline">services@softcr8ors.com</a>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center space-y-12 lg:pl-10 text-center lg:text-left">
                <div className="space-y-3">
                  <h4 className="text-xl font-medium text-slate-950">{t("contact.info.sales.title")}</h4>
                  <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.sales.desc")}</p>
                  <a href="mailto:info@softcr8ors.com" className="inline-block font-medium text-lg hover:underline transition-all" style={{ color: iconColor || "#1620f0" }}>info@softcr8ors.com</a>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-medium text-slate-950">{t("contact.info.support.title")}</h4>
                  <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.support.desc")}</p>
                  <a href="mailto:services@softcr8ors.com" className="inline-block font-medium text-lg hover:underline transition-all" style={{ color: iconColor || "#1620f0" }}>services@softcr8ors.com</a>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-medium text-slate-950">{t("contact.info.chat.title")}</h4>
                  <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.chat.desc")}</p>
                  <button className="font-medium text-lg hover:underline transition-all" style={{ color: iconColor || "#1620f0" }}>{t("contact.info.chat.btn")}</button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
