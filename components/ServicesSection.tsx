"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { useTransition } from "@/context/TransitionContext";

const sectionTranslations: Record<string, { badge: string; titlePart1: string; titleHighlight: string; subtitle: string }> = {
  en: { badge: "OUR SERVICES", titlePart1: "Everything Your ", titleHighlight: "Brand Needs", subtitle: "From code to camera, strategy to screens — we deliver every service your business needs to dominate digitally." },
  ur: { badge: "ہماری خدمات", titlePart1: "ہر وہ چیز جو آپ کے ", titleHighlight: "برانڈ کی ضرورت ہے", subtitle: "کوڈ سے لے کر کیمرے تک — ہم ہر وہ سروس فراہم کرتے ہیں۔" },
  ar: { badge: "خدماتنا الأساسية", titlePart1: "كل ما يحتاجه ", titleHighlight: "علامتك التجارية", subtitle: "من الكود إلى الكاميرا — نقدم كل خدمة يحتاجها عملك." },
  es: { badge: "NUESTROS SERVICIOS", titlePart1: "Todo lo que tu ", titleHighlight: "Marca Necesita", subtitle: "Brindamos soluciones de extremo a extremo para acelerar tu transformación digital." },
  fr: { badge: "NOS SERVICES", titlePart1: "Tout ce dont votre ", titleHighlight: "Marque a Besoin", subtitle: "Du code à la caméra — nous fournissons tous les services dont votre entreprise a besoin." },
  zh: { badge: "我们的服务", titlePart1: "您品牌需要的 ", titleHighlight: "一切解决方案", subtitle: "从代码到摄像——我们提供您的业务所需的一切服务。" },
  hi: { badge: "हमारी सेवाएं", titlePart1: "सब कुछ जो आपके ", titleHighlight: "ब्रांड की जरूरत है", subtitle: "कोड से लेकर कैमरे तक — हम हर वो सेवा प्रदान करते हैं।" },
};

interface Pillar { title: string; slug: string; image: string; subservices: string[]; subSlugs: string[] }

const pillars: Pillar[] = [
  { title: "Web Development",    slug: "web-engineering",    image: "https://tkxel.com/wp-content/uploads/2026/02/our-services1.webp", subservices: ["Custom Websites","E-Commerce","React & Next.js","Landing Pages","Web Apps","API Development"],          subSlugs: ["web-engineering","web-engineering","web-engineering","web-engineering","web-engineering","web-engineering"] },
  { title: "Custom Software",    slug: "custom-software",    image: "https://tkxel.com/wp-content/uploads/2026/02/our-services2.webp", subservices: ["ERP Systems","CRM Platforms","Admin Dashboards","Workflow Automation","SaaS Products","API Integration"],   subSlugs: ["custom-software","custom-software","custom-software","custom-software","saas-development","custom-software"] },
  { title: "AI Powered Apps",    slug: "ai-powered-apps",    image: "https://tkxel.com/wp-content/uploads/2026/02/our-services3.webp", subservices: ["AI Chatbots","LLM Integration","RAG Pipelines","Predictive Analytics","Computer Vision","AI Automation"],   subSlugs: ["ai-powered-apps","ai-powered-apps","ai-powered-apps","ai-powered-apps","ai-powered-apps","ai-powered-apps"] },
  { title: "Android / iOS Apps", slug: "mobile-innovation",  image: "https://tkxel.com/wp-content/uploads/2026/02/our-services4.webp", subservices: ["iOS Development","Android Development","React Native","App Store Launch","Push Notifications","Offline Apps"], subSlugs: ["mobile-innovation","mobile-innovation","mobile-innovation","mobile-innovation","mobile-innovation","mobile-innovation"] },
  { title: "SaaS Development",   slug: "saas-development",   image: "https://tkxel.com/wp-content/uploads/2026/02/our-services1.webp", subservices: ["Multi-Tenant SaaS","Subscription Billing","User Management","Admin Analytics","White-Label","API-First Design"], subSlugs: ["saas-development","saas-development","saas-development","saas-development","saas-development","saas-development"] },
  { title: "UI / UX Design",     slug: "ui-ux-design",       image: "https://tkxel.com/wp-content/uploads/2026/02/our-services2.webp", subservices: ["User Research","Wireframing","Figma Design","Design Systems","Prototyping","Usability Testing"],              subSlugs: ["ui-ux-design","ui-ux-design","ui-ux-design","ui-ux-design","ui-ux-design","ui-ux-design"] },
  { title: "SEO & Growth",       slug: "seo",                image: "https://tkxel.com/wp-content/uploads/2026/02/our-services3.webp", subservices: ["Technical SEO","Keyword Research","On-Page SEO","Link Building","Core Web Vitals","Local SEO"],               subSlugs: ["seo","seo","seo","seo","seo","seo"] },
  { title: "AI Content Writing", slug: "ai-content-writing", image: "https://tkxel.com/wp-content/uploads/2026/02/our-services4.webp", subservices: ["Blog Articles","Landing Page Copy","Email Sequences","Product Descriptions","Social Content","Brand Voice"],   subSlugs: ["ai-content-writing","ai-content-writing","ai-content-writing","ai-content-writing","ai-content-writing","ai-content-writing"] },
];

const VISIBLE = 4;
const IMG_FILTER = "sepia(1) saturate(6) hue-rotate(220deg) brightness(0.9) contrast(1.1)";
const IMG_ROTATIONS = [0, 0, 0, 0, -18, 14, -16, 20];
const badgeClass = "bg-gradient-to-r from-[#1620f0]/10 via-[#a906c9]/10 to-[#f016da]/10 border border-[#a906c9]/30 text-slate-800 hover:from-[#1620f0] hover:via-[#a906c9] hover:to-[#f016da] hover:border-transparent hover:text-white";

export function ServicesSection() {
  const { language } = useTranslation();
  const content = sectionTranslations[language] ?? sectionTranslations.en;
  const maxIndex = pillars.length - VISIBLE;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  const { startTransition } = useTransition();

  const handleSubserviceClick = (subSlug: string, subName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    startTransition(`/services/${subSlug}`, subName.toUpperCase());
  };

  return (
    <section id="services" className="relative bg-[#fbfcfd] py-12 md:py-16 px-4 overflow-hidden border-t border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center w-full mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">{content.badge}</span>
              <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.1]">
            {content.titlePart1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] font-medium">{content.titleHighlight}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 mt-4 text-sm md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {content.subtitle}
          </motion.p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} onMouseLeave={() => setHoveredIndex(null)}>

            {/* Arrow buttons — above card, right aligned */}
            <div className="flex items-center justify-end gap-2 mb-4">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #a906c9, #f016da)",
                  opacity: currentIndex === 0 ? 0.35 : 1,
                  color: "white",
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((i) => Math.min(maxIndex, i + 1))}
                disabled={currentIndex >= maxIndex}
                aria-label="Next"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #a906c9, #f016da)",
                  opacity: currentIndex >= maxIndex ? 0.35 : 1,
                  color: "white",
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative overflow-hidden border border-slate-200 bg-white">

              {/* Sliding track */}
              <div
                className="flex h-[400px]"
                style={{
                  width: `${(pillars.length / VISIBLE) * 100}%`,
                  transform: `translateX(-${currentIndex * (100 / pillars.length)}%)`,
                  transition: "transform 480ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {pillars.map((pillar, index) => {
                  const isHovered = hoveredIndex === index;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className="relative border-r last:border-r-0 border-slate-200 overflow-hidden cursor-pointer select-none bg-white"
                      style={{ flex: `0 0 ${100 / pillars.length}%` }}
                    >
                      {/* Image */}
                      <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{
                          opacity: isHovered ? 0 : 1,
                          transform: isHovered ? "scale(0)" : "scale(1)",
                          transition: "opacity 420ms ease, transform 480ms cubic-bezier(0.4,0,0.2,1)",
                          transformOrigin: "center center",
                        }}
                      >
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-44 h-44 xl:w-52 xl:h-52 object-contain select-none"
                          style={{
                            filter: IMG_FILTER,
                            transform: `rotate(${IMG_ROTATIONS[index]}deg)`,
                          }}
                        />
                      </div>

                      {/* Hover: title + badges centered */}
                      <div
                        className="absolute inset-0 p-6 flex flex-col items-center justify-center"
                        style={{ pointerEvents: isHovered ? "auto" : "none" }}
                      >
                        <h3
                          className="text-[20px] font-medium tracking-tight text-slate-900 leading-tight text-center mb-4"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? "translateY(0)" : "translateY(-12px)",
                            transition: "opacity 350ms 150ms ease, transform 350ms 150ms cubic-bezier(0.16,1,0.3,1)",
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {pillar.subservices.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={(e) => handleSubserviceClick(pillar.subSlugs[sIdx], sub, e)}
                              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${badgeClass} active:scale-95`}
                              style={{
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? "translateY(0)" : "translateY(16px)",
                                transition: `opacity 300ms ${200 + sIdx * 50}ms ease, transform 300ms ${200 + sIdx * 50}ms cubic-bezier(0.16,1,0.3,1)`,
                              }}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Normal: title at bottom */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none"
                        style={{ opacity: isHovered ? 0 : 1, transition: "opacity 250ms ease" }}
                      >
                        <h3 className="text-[18px] font-medium tracking-tight text-slate-900 leading-tight text-center">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Accordion */}
        <div className="flex flex-col gap-4 md:hidden">
          {pillars.map((pillar, index) => {
            const isExpanded = mobileExpandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative border border-slate-200 bg-white overflow-hidden transition-all duration-500 ${isExpanded ? "border-slate-300" : "hover:border-slate-300"}`}
                onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
              >
                <div className="relative z-10 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                        <img src={pillar.image} alt={pillar.title} className="w-full h-full object-contain" style={{ filter: IMG_FILTER }} />
                      </div>
                      <h3 className="text-sm font-medium text-slate-900 tracking-tight">{pillar.title}</h3>
                    </div>
                    <div className={`p-1.5 bg-slate-100 border border-slate-200/80 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="pt-4 flex flex-wrap gap-2">
                          {pillar.subservices.map((sub, sIdx) => (
                            <button key={sIdx} onClick={(e) => handleSubserviceClick(pillar.subSlugs[sIdx], sub, e)} className={`px-3 py-1.5 text-xs font-normal rounded-full transition-all active:scale-95 flex items-center gap-1.5 ${badgeClass}`}>
                              <span>{sub}</span>
                              <ArrowRight className="w-3 h-3 opacity-70" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
