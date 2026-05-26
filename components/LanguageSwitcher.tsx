"use client";
 
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { IoLanguage } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import { cn } from "@/lib/utils";
import { Language } from "@/lib/translations";
 
export function LanguageSwitcher({
  onlyIcon = false,
  dropdownPosition = "bottom",
  className,
}: {
  onlyIcon?: boolean;
  dropdownPosition?: "top" | "bottom";
  className?: string;
}) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  const toggleDropdown = () => setIsOpen(!isOpen);
 
  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };
 
  const getLangName = (lang: Language) => {
    switch (lang) {
      case "en": return "English";
      case "ur": return "اردو";
      case "ar": return "العربية";
      case "es": return "Español";
      case "fr": return "Français";
      case "zh": return "中文";
      case "hi": return "हिन्दी";
      default: return "EN";
    }
  };
 
  const LANGUAGES: { code: Language; name: string; flag: string; isRtl?: boolean }[] = [
    { code: "en", name: "English", flag: "US" },
    { code: "ur", name: "اردو", flag: "PK", isRtl: true },
    { code: "ar", name: "العربية", flag: "SA", isRtl: true },
    { code: "es", name: "Español", flag: "ES" },
    { code: "fr", name: "Français", flag: "FR" },
    { code: "zh", name: "中文", flag: "CN" },
    { code: "hi", name: "हिन्दी", flag: "IN" },
  ];
 
  const isRtl = ['ur', 'ar'].includes(language);
 
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1620f0]/30 shrink-0 cursor-pointer relative overflow-hidden group/lang",
          onlyIcon
            ? "w-[38px] h-[38px] bg-gradient-to-br from-[#1620f0] via-[#a906c9] to-[#f016da] shadow-md shadow-[#a906c9]/20 hover:shadow-lg hover:shadow-[#a906c9]/40 text-white"
            : "gap-2 px-3 py-1.5 bg-gradient-to-br from-[#1620f0] via-[#a906c9] to-[#f016da] shadow-md shadow-[#a906c9]/20 hover:shadow-lg hover:shadow-[#a906c9]/40 text-white text-sm font-bold",
          className
        )}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/lang:opacity-100 transition-opacity"></div>
        <IoLanguage
          size={onlyIcon ? 20 : 16}
          className="text-white relative z-10 transition-transform duration-300 group-hover/lang:scale-115"
        />
        {!onlyIcon && (
          <div className="flex items-center gap-1.5 relative z-10">
            <ReactCountryFlag
              countryCode={LANGUAGES.find(l => l.code === language)?.flag || "US"}
              svg
              style={{ width: "1.2em", height: "1.2em", borderRadius: "2px" }}
            />
            <span className="text-white">{getLangName(language as Language)}</span>
          </div>
        )}
      </button>
 
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: dropdownPosition === "top" ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: dropdownPosition === "top" ? -10 : 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute w-40 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100] max-h-[300px] overflow-y-auto",
              dropdownPosition === "top" ? "bottom-full mb-2" : "top-full mt-2",
              isRtl ? "left-0" : "right-0"
            )}
          >
            <div className="p-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={cn(
                    "w-full px-3 py-2 rounded-xl text-sm font-medium transition-colors font-sans mt-0.5 cursor-pointer flex items-center gap-2",
                    lang.isRtl ? "flex-row-reverse text-right" : "flex-row text-left",
                    language === lang.code
                      ? lang.isRtl ? "bg-[#a906c9]/10 text-[#a906c9]" : "bg-[#1620f0]/10 text-[#1620f0]"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <ReactCountryFlag
                    countryCode={lang.flag}
                    svg
                    style={{ width: "1.2em", height: "1.2em", borderRadius: "2px", flexShrink: 0 }}
                  />
                  <span className="flex-1">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
