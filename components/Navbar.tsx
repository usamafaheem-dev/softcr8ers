"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
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
        "group relative inline-flex items-center justify-center rounded-full px-6 py-2.5 font-semibold font-sans overflow-hidden transition-all duration-500",
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

function ContactButton({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {/* Pulsating Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1620f0] to-[#f016da] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <RollingTextButton label={t("nav.contact")} href="#contact" variant="gradient" className="relative z-10" />
    </div>
  );
}

const navLinksData = [
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const [isDocked, setIsDocked] = useState(false);
  const [isAtChat, setIsAtChat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <motion.div
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 px-4",
        isDocked
          ? "top-3 w-[850px] max-w-[92vw] md:max-w-[95vw]"
          : "top-6 md:top-8 w-full max-w-[1200px]"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav
        className={cn(
          "grid w-full items-center transition-all duration-700",
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100",
          !isDocked
            ? "grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] rounded-2xl px-4 md:px-6 py-0 border border-white/40 bg-white/40 backdrop-blur-md shadow-lg"
            : isAtChat
              ? "grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] rounded-xl px-4 py-0 border border-slate-300/50 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              : "grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] rounded-xl px-4 py-0 border border-white/40 bg-white/30 shadow-lg backdrop-blur-xl"
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
            "hidden lg:flex items-center gap-2",
            isDocked ? "justify-self-center" : "justify-self-end"
          )}
        >
          {navLinksData.map((link) => (
            <motion.a
              key={link.key}
              href={link.href}
              className="px-3 py-1.5 text-[16px] font-medium tracking-normal transition-all duration-300 font-sans text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(link.key)}
            </motion.a>
          ))}
          {!isDocked && (
            <div className="ml-4 flex items-center gap-3">
              <LanguageSwitcher />
              <ContactButton />
            </div>
          )}
        </div>

        {/* Contact Button & Language - Compact docked */}
        {isDocked && (
          <div className="hidden lg:flex items-center gap-3 justify-self-end">
            <LanguageSwitcher />
            <ContactButton />
          </div>
        )}

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
            <div className="flex flex-col">
              {navLinksData.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="px-2 py-2 text-slate-500 font-medium text-[16px] hover:text-slate-900 transition-colors font-sans border-b border-slate-50 last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="mt-4 w-full py-3 rounded-xl bg-black text-white font-medium text-base text-center font-sans shadow-lg shadow-black/10 active:scale-95 transition-transform"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
