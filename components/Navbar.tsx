"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Smartphone, Cpu, Palette, Video, Sparkles, Briefcase, Zap, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { INTRO_EVENT } from "@/components/HomeIntro";

// Rolling Text Button component
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
        "group relative inline-flex items-center justify-center rounded-full px-6 py-2.5 font-semibold font-sans overflow-hidden transition-all duration-500 whitespace-nowrap shrink-0",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-xl shadow-purple-500/10"
          : "bg-white/10 backdrop-blur-md border border-white/20 text-slate-700 hover:bg-white/20",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden whitespace-nowrap shrink-0">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6 whitespace-nowrap shrink-0">
          <span className="flex h-6 items-center justify-center relative z-10 whitespace-nowrap shrink-0">
            {label}
          </span>
          <span className="flex h-6 items-center justify-center relative z-10 whitespace-nowrap shrink-0">
            {label}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function ContactButton({ className, isDocked }: { className?: string; isDocked?: boolean }) {
  const { t } = useTranslation();
  return (
    <div className={cn("relative inline-flex items-center justify-center shrink-0", className)}>
      {/* Pulsating Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1620f0] to-[#f016da] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <RollingTextButton 
        label={t("nav.startproject")} 
        href="/#contact" 
        variant="gradient" 
        className={cn(
          "relative z-10 shrink-0",
          isDocked ? "px-4 py-1.5 text-[13px] xl:text-[13.5px]" : "px-6 py-2.5 text-[15px] xl:text-[16px]"
        )} 
      />
    </div>
  );
}

const navLinksData = [
  { key: "nav.services", href: "/#services" },
  { key: "nav.whoweare", href: "/about" },
  { key: "nav.industries", href: "/industries" },
  { key: "nav.work", href: "/work" },
  { key: "nav.contact", href: "/#contact" },
  { key: "nav.join", href: "/careers" },
];

const servicesData = [
  {
    titleKey: "srv.web.title",
    descKey: "srv.web.desc",
    href: "/services/web-engineering",
    icon: <Globe className="w-4 h-4 text-[#1620f0]" />,
  },
  {
    titleKey: "srv.mobile.title",
    descKey: "srv.mobile.desc",
    href: "/services/mobile-innovation",
    icon: <Smartphone className="w-4 h-4 text-[#f016da]" />,
  },
  {
    titleKey: "srv.software.title",
    descKey: "srv.software.desc",
    href: "/services/custom-software",
    icon: <Cpu className="w-4 h-4 text-[#a906c9]" />,
  },
  {
    titleKey: "srv.uiux.title",
    descKey: "srv.uiux.desc",
    href: "/services/ui-ux-design",
    icon: <Palette className="w-4 h-4 text-blue-500" />,
  },
  {
    titleKey: "srv.video.title",
    descKey: "srv.video.desc",
    href: "/services/video-production",
    icon: <Video className="w-4 h-4 text-red-500" />,
  },
  {
    titleKey: "srv.branding.title",
    descKey: "srv.branding.desc",
    href: "/services/branding-identity",
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
  },
  {
    titleKey: "srv.it.title",
    descKey: "srv.it.desc",
    href: "/services/it-consulting",
    icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
  },
  {
    titleKey: "srv.creative.title",
    descKey: "srv.creative.desc",
    href: "/services/creative-solutions",
    icon: <Zap className="w-4 h-4 text-[#a906c9]" />,
  },
];





const ourWorkData = [
  { title: "Fintech Dashboard", desc: "Real-time financial analytics platform.", href: "/work?project=apexpay", icon: <Briefcase className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50" },
  { title: "HealthCare App", desc: "Patient management & telemedicine.", href: "/work?project=neurocare", icon: <Smartphone className="w-5 h-5 text-pink-600" />, bg: "bg-pink-50" },
  { title: "E-Commerce Platform", desc: "High-conversion online retail store.", href: "/work?project=shopvibe", icon: <Globe className="w-5 h-5 text-purple-600" />, bg: "bg-purple-50" },
  { title: "AI SaaS Product", desc: "Machine learning powered generator.", href: "/work?project=cognitive-ai", icon: <Cpu className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
  { title: "Real Estate Portal", desc: "Property listing and management.", href: "/work?project=aetheria", icon: <Palette className="w-5 h-5 text-orange-600" />, bg: "bg-orange-50" },
  { title: "Logistics System", desc: "Supply chain tracking optimization.", href: "/work?project=quantflow", icon: <Zap className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-50" },
];

function OurWorkDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[880px] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-5 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-350px] mt-1" : "left-[-450px] mt-2"
      )}
    >
      <div className="flex gap-6">
        {/* Left Side: Image Banner */}
        <div className="w-[320px] rounded-[1.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0 group/banner">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
            alt="Our Work" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[#a906c9]/20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-sm">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-bold mb-2 tracking-tight text-white">Our Work</h4>
            <p className="text-[14px] text-slate-200 leading-relaxed font-medium">
              Explore our portfolio of cutting-edge digital transformations.
            </p>
          </div>
        </div>

        {/* Right Side: Grid of Projects */}
        <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 py-2 pr-2">
          {ourWorkData.map((work) => (
            <a
              key={work.title}
              href={work.href}
              className="group/item flex items-start gap-4 p-4 rounded-[1.25rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", work.bg)}>
                {work.icon}
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-900 group-hover/item:text-[#a906c9] transition-colors leading-tight mb-1.5">
                  {work.title}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {work.desc}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ServicesDropdown({ isDocked }: { isDocked: boolean }) {
  const { t } = useTranslation();
  const displayServices = servicesData.slice(0, 6);

  const bgColors = ["bg-blue-50", "bg-pink-50", "bg-purple-50", "bg-sky-50", "bg-red-50", "bg-amber-50"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute z-[100] w-[880px] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-5 top-full mt-2 font-sans transition-all duration-300 pointer-events-auto rounded-[2rem]",
        isDocked ? "left-[-150px] mt-1" : "left-[-250px] mt-2"
      )}
    >
      <div className="flex gap-6">
        {/* Left Side: Image Banner */}
        <div className="w-[320px] rounded-[1.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-inner shrink-0 group/banner">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Services" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-[#1620f0]/20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[22px] font-bold mb-2 tracking-tight text-white">Our Services</h4>
            <p className="text-[14px] text-slate-200 leading-relaxed font-medium">
              We architect, design, and engineer world-class digital products that scale.
            </p>
          </div>
        </div>

        {/* Right Side: Grid of Services */}
        <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 py-2 pr-2">
          {displayServices.map((srv, idx) => (
            <a
              key={srv.titleKey}
              href={srv.href}
              className="group/item flex items-start gap-4 p-4 rounded-[1.25rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className={cn("w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 duration-300 shadow-sm", bgColors[idx])}>
                <div className="[&>svg]:w-5 [&>svg]:h-5">
                  {srv.icon}
                </div>
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="text-[15px] font-bold text-slate-900 group-hover/item:text-[#1620f0] transition-colors leading-tight mb-1.5">
                  {t(srv.titleKey)}
                </span>
                <span className="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {t(srv.descKey)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}



export function Navbar() {
  const [isDocked, setIsDocked] = useState(false);
  const [isAtChat, setIsAtChat] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsDocked(scrollY > 50);

      const chatSection = document.getElementById("chat-section");
      if (chatSection) {
        setIsAtChat(scrollY > chatSection.offsetTop - 150);
      } else {
        setIsAtChat(scrollY > 400);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      ref={navRef}
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 px-4",
        isDocked
          ? "top-3 w-[980px] max-w-[92vw] md:max-w-[95vw]"
          : "top-6 md:top-8 w-full max-w-[1200px]"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav
        className={cn(
          "grid w-full items-center transition-all duration-700 grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto]",
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100",
          !isDocked
            ? "rounded-2xl px-4 md:px-6 py-0 border border-white/60 bg-white/85 backdrop-blur-xl shadow-lg"
            : isAtChat
              ? "rounded-xl px-4 py-0 border border-slate-300/50 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              : "rounded-xl px-4 py-0 border border-white/40 bg-white/30 shadow-lg backdrop-blur-xl"
        )}
      >
        {/* Logo Section */}
        <motion.a
          href="/"
          className="flex items-center justify-start shrink-0 relative w-[100px] h-[52px]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.dispatchEvent(new Event(INTRO_EVENT));
            }
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60"
            animate={{
              background: [
                "radial-gradient(circle, #1620f0 0%, transparent 70%)",
                "radial-gradient(circle, #a906c9 0%, transparent 70%)",
                "radial-gradient(circle, #f016da 0%, transparent 70%)",
                "radial-gradient(circle, #2f89f7 0%, transparent 70%)",
                "radial-gradient(circle, #1620f0 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <Image
            src="/logo.png"
            alt="Softcr8ors Logo"
            width={170}
            height={170}
            className="object-contain w-[170px] h-[170px] relative z-10"
          />
        </motion.a>

        {/* Nav Links - Desktop */}
        <div
          className={cn(
            "hidden lg:flex items-center transition-all duration-500",
            isDocked 
              ? "justify-self-center gap-0.5 xl:gap-1" 
              : "justify-self-center lg:ml-4 xl:ml-8 gap-0.5 xl:gap-1"
          )}
        >
        {navLinksData.map((link) => {
            const isServices = link.key === "nav.services";
            const isWork = link.key === "nav.work";
            const isActive = pathname === link.href;
            const dropdownKey = isServices ? "services" : isWork ? "work" : null;
            const isOpen = dropdownKey && openDropdown === dropdownKey;
            
            return (
              <div
                key={link.key}
                className="relative py-2.5 shrink-0"
                onMouseEnter={() => {
                  if (isServices) setOpenDropdown("services");
                  if (isWork) setOpenDropdown("work");
                }}
                onMouseLeave={() => {
                  if (isServices || isWork) setOpenDropdown(null);
                }}
              >
                <motion.a
                  href={link.href}
                  className={cn(
                    "cursor-pointer font-medium tracking-normal transition-all duration-300 font-sans whitespace-nowrap flex items-center gap-1",
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] to-[#a906c9] font-bold"
                      : "text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]",
                    isDocked
                      ? "px-2 py-1 text-[13.5px] xl:text-[14px]"
                      : "px-2.5 py-1.5 text-[14px] xl:text-[15px]"
                  )}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(link.key)}
                </motion.a>

                {isServices && (
                  <AnimatePresence>
                    {openDropdown === "services" && <ServicesDropdown isDocked={isDocked} />}
                  </AnimatePresence>
                )}
                {isWork && (
                  <AnimatePresence>
                    {openDropdown === "work" && <OurWorkDropdown isDocked={isDocked} />}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Button & Language - Desktop Controls */}
        <div className="hidden lg:flex items-center gap-3 justify-self-end shrink-0">
          <LanguageSwitcher onlyIcon={true} dropdownPosition="bottom" />
          <ContactButton isDocked={isDocked} />
        </div>

        {/* Mobile Controls (Language Switcher & Menu Toggle) */}
        <div className="flex items-center gap-2 lg:hidden justify-self-end">
          <LanguageSwitcher onlyIcon={true} dropdownPosition="bottom" />
          <button
            className={cn(
              "p-2 rounded-xl transition-colors",
              isDocked ? "text-slate-900 hover:bg-slate-50" : "text-slate-900 hover:bg-white/30"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-3 z-[60] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col md:hidden"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-[100px] h-[52px] flex items-center justify-start shrink-0">
                <Image
                  src="/logo.png"
                  alt="Softcr8ors Logo"
                  width={170}
                  height={170}
                  className="object-contain w-[170px] h-[170px]"
                  priority
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Language Switcher is permanently visible in header next to menu button */}

            {/* Gradient Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-4 origin-left"
            />

            {/* Nav Links */}
            <div className="flex flex-col max-h-[65vh] overflow-y-auto no-scrollbar pb-4">
              {navLinksData.map((link) => {
                const isActive = pathname === link.href;
                const isServices = link.key === "nav.services";
                const isWork = link.key === "nav.work";
                
                if (isServices || isWork) {
                  const isExpanded = mobileExpandedMenu === link.key;
                  const data = isServices ? servicesData.slice(0, 6) : ourWorkData;
                  const sectionTitle = isServices ? "OUR SERVICES" : "OUR WORK";
                  const sectionDesc = isServices 
                    ? "Transform your business ideas into reality with our tailored software development services."
                    : "Explore our portfolio of cutting-edge digital transformations.";
                    
                  return (
                    <div key={link.key} className="flex flex-col border-b border-slate-50 last:border-0">
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : link.key)}
                        className="flex items-center justify-between px-2 py-4 font-medium text-[17px] font-sans text-slate-700 hover:text-slate-900 w-full text-left transition-colors"
                      >
                        {t(link.key)}
                        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", isExpanded && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-5 py-4 px-2 mb-2 bg-slate-50/50 rounded-2xl border border-slate-100">
                              <div className="px-2">
                                <h5 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">{sectionTitle}</h5>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                  {sectionDesc}
                                </p>
                              </div>
                              
                              <div className="flex flex-col gap-1">
                                {data.map((item: any, idx: number) => {
                                  const title = isServices ? t(item.titleKey) : item.title;
                                  const desc = isServices ? t(item.descKey) : item.desc;
                                  
                                  return (
                                    <a
                                      key={title}
                                      href={item.href}
                                      onClick={() => setMenuOpen(false)}
                                      className="flex items-start gap-3 p-3 rounded-[16px] active:bg-white transition-colors"
                                    >
                                      <div className={cn("w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 shadow-sm bg-white border border-slate-100", item.bg || "bg-white")}>
                                        <div className="[&>svg]:w-5 [&>svg]:h-5">
                                          {item.icon}
                                        </div>
                                      </div>
                                      <div className="flex flex-col pt-0.5">
                                        <span className="text-[14px] font-bold text-slate-800 leading-tight mb-1">
                                          {title}
                                        </span>
                                        <span className="text-[12px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                                          {desc}
                                        </span>
                                      </div>
                                    </a>
                                  )
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className={cn(
                      "px-2 py-4 font-medium text-[17px] font-sans border-b border-slate-50 last:border-0 transition-colors",
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] to-[#a906c9] font-bold"
                        : "text-slate-700 hover:text-slate-900"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                );
              })}
            </div>

            {/* Contact Button */}
            <a
              href="/#contact"
              className="mt-4 w-full py-3 rounded-xl bg-black text-white font-medium text-base text-center font-sans shadow-lg shadow-black/10 active:scale-95 transition-transform"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.startproject")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
