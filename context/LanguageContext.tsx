"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extras";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check localStorage for saved language on mount
    try {
      const savedLang = localStorage.getItem("softcr8ors_lang") as Language | null;
      const validLangs: Language[] = ["en", "ur", "ar", "es", "fr", "zh", "hi"];
      if (savedLang && validLangs.includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  useEffect(() => {
    // Update HTML attributes for SEO and styling when language changes
    if (typeof document === "undefined") return;
    document.documentElement.lang = language;
    // Set document direction so :dir(rtl) CSS rules apply site-wide for RTL languages
    const rtlLangs: Language[] = ["ur", "ar"];
    document.documentElement.dir = rtlLangs.includes(language) ? "rtl" : "ltr";

    const langClasses = ["lang-en", "lang-ur", "lang-ar", "lang-es", "lang-fr", "lang-zh", "lang-hi"];
    document.documentElement.classList.remove(...langClasses);
    document.documentElement.classList.add(`lang-${language}`);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("softcr8ors_lang", lang);
  };

  const t = (key: string, defaultValue?: string): string => {
    const langDict = translations[language] as Record<string, string>;
    const extraDict = extraTranslations[language] as Record<string, string>;
    
    // Direct lookup since our dictionary keys are flat (e.g. "nav.about")
    const value = langDict?.[key] ?? extraDict?.[key];
    // Avoid rendering raw translation keys; prefer provided default or empty string
    return value !== undefined ? value : (defaultValue ?? "");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide fallback if used outside of provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string, defaultValue?: string) => defaultValue ?? "",
    };
  }
  return context;
}
