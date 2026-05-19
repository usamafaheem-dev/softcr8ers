"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Language } from "@/lib/translations";

export function LanguageSwitcher() {
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

  const LANGUAGES: { code: Language; name: string; isRtl?: boolean }[] = [
    { code: "en", name: "English" },
    { code: "ur", name: "اردو", isRtl: true },
    { code: "ar", name: "العربية", isRtl: true },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "zh", name: "中文" },
    { code: "hi", name: "हिन्दी" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1620f0]/30"
      >
        <Globe size={16} className={['ur', 'ar'].includes(language) ? "text-[#a906c9]" : "text-[#1620f0]"} />
        <span>{getLangName(language as Language)}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-full mt-2 w-40 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100] max-h-[300px] overflow-y-auto",
              ['ur', 'ar'].includes(language) ? 'right-0' : 'left-0'
            )}
          >
            <div className="p-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={cn(
                    "w-full px-3 py-2 rounded-xl text-sm font-medium transition-colors font-sans mt-0.5",
                    lang.isRtl ? "text-right" : "text-left",
                    language === lang.code
                      ? lang.isRtl ? "bg-[#a906c9]/10 text-[#a906c9]" : "bg-[#1620f0]/10 text-[#1620f0]"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
