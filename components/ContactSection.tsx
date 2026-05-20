"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, ChevronDown, CheckCircle2, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "@/context/LanguageContext";

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
export function ContactSection() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-12 md:py-16 bg-white font-['General_Sans',sans-serif] border-t border-slate-100">

      {/* Floating 3D Blocks */}
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

      {/* ── Header Section ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center mb-16 md:mb-20">
        <div className="flex justify-center w-full mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">{t("contact.badge")}</span>
            <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
          </div>
        </div>

        <h2 className={cn(
          "font-medium text-slate-950 tracking-tight leading-[1.1] mb-6 md:mb-8",
          isArabicOrUrdu ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"
        )}>
          {t("contact.title.p1")}
          <span className="relative inline-block">
            <span className="relative z-10">{t("contact.title.highlight1")}</span>
            <motion.span
              initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-1 left-0 h-[35%] bg-[#1620f0]/15 z-0"
            />
          </span>
          <br />{t("contact.title.p2")}
          <span className="text-[#1620f0]">
            {t("contact.title.highlight2")}
          </span>
        </h2>

        <p className="text-slate-500 text-sm md:text-base font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("contact.subtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <ContactButton label={t("contact.btn.call")} href="tel:#" variant="transparent" className="min-w-[180px] md:min-w-[200px]" />
          <ContactButton label={t("contact.btn.demo")} href="#" variant="gradient" className="min-w-[180px] md:min-w-[200px]" />
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
          background: conic-gradient(from 0deg, #1620f0, #a906c9, #f016da, #1620f0);
          animation: rotate-border 6s linear infinite;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .form-border-container:hover::before {
          opacity: 1;
        }
        .form-border-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
        }
      `}</style>

      {/* ── Main Form Section ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="form-border-container rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
          >
            <div className="form-border-inner rounded-[1.5rem] p-6 md:p-8">
              <h3 className="text-2xl font-medium text-slate-950 mb-8 text-center lg:text-left">
                {t("contact.form.title.p1")} <span className="text-[#1620f0]">{t("contact.form.title.highlight")}</span> {t("contact.form.title.p2") ?? ""}
              </h3>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-slate-950">{t("contact.form.success.title")}</h3>
                  <button onClick={() => setSubmitted(false)} className="text-[#6366f1] font-medium hover:underline">{t("contact.form.success.btn")}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 ml-1">{t("contact.form.name")}</label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder={t("contact.form.placeholder.name")} className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 transition-all font-normal text-sm" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 ml-1">{t("contact.form.email")}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t("contact.form.placeholder.email")} className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 transition-all font-normal text-sm" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 ml-1">{t("contact.form.phone")}</label>
                    {/* Desktop: One line | Mobile: Stacked */}
                    <div className="flex flex-col md:flex-row md:items-stretch gap-3">
                      <CountryPicker selected={selectedCountry} onChange={setSelectedCountry} className="md:w-[160px]" />
                      <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200 rounded-xl focus-within:border-purple-500 transition-all shadow-sm">
                        <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                        <span className="text-sm text-slate-400 font-medium shrink-0">{selectedCountry.dial}</span>
                        <div className="w-px h-3.5 bg-slate-200 mx-0.5" />
                        <input type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} placeholder={t("contact.form.placeholder.phone")} className="flex-1 bg-transparent text-slate-950 placeholder:text-slate-300 focus:outline-none text-sm font-normal" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 ml-1">{t("contact.form.services")}</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map(service => (
                        <label key={service} className="flex items-center gap-2.5 group cursor-pointer">
                          <div className="relative w-4 h-4 flex items-center justify-center">
                            <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                            <div className="w-full h-full border border-slate-300 rounded group-hover:border-[#a906c9] peer-checked:bg-[#050101] peer-checked:border-[#050101] transition-all" />
                            <CheckCircle2 size={10} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-sm text-slate-600 font-normal group-hover:text-slate-950 transition-colors">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 ml-1">{t("contact.form.project")}</label>
                    <textarea name="projectDetails" required rows={3} value={formData.projectDetails} onChange={handleChange} placeholder={t("contact.form.placeholder.project")} className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-purple-500 transition-all resize-none font-normal text-sm" />
                  </div>

                  <div className="pt-4 flex justify-center">
                    <ContactButton label={isSubmitting ? t("contact.form.btn.loading") : t("contact.form.btn.submit")} type="submit" variant="gradient" className="min-w-[260px]" />
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Info (Centered on Mobile) */}
          <div className="flex flex-col justify-center space-y-12 lg:pl-10 text-center lg:text-left">
            <div className="space-y-3">
              <h4 className="text-xl font-medium text-slate-950">{t("contact.info.sales.title")}</h4>
              <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.sales.desc")}</p>
              <a href="mailto:sales@Softcr8ors.com" className="inline-block font-medium text-lg hover:underline transition-all text-[#1620f0]">sales@Softcr8ors.com</a>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-medium text-slate-950">{t("contact.info.support.title")}</h4>
              <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.support.desc")}</p>
              <a href="mailto:support@Softcr8ors.com" className="inline-block font-medium text-lg hover:underline transition-all text-[#1620f0]">support@Softcr8ors.com</a>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-medium text-slate-950">{t("contact.info.chat.title")}</h4>
              <p className="text-slate-500 font-normal text-base leading-relaxed">{t("contact.info.chat.desc")}</p>
              <button className="font-medium text-lg hover:underline transition-all text-[#1620f0]">{t("contact.info.chat.btn")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
