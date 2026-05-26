"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

// ─── Domain Data ────────────────────────────────────────────────────────────
const domains = [
  {
    id: 1,
    category: "Web & Mobile",
    title: "Full-Stack Web & Mobile Engineering",
    description:
      "From blazing-fast Next.js frontends to robust Node/Python backends — we architect end-to-end digital products that scale.",
    tags: ["Next.js", "React Native", "Node.js", "TypeScript", "REST & GraphQL"],
    gradient: "from-[#1620f0] to-[#a906c9]",
    icon: "🌐",
  },
  {
    id: 2,
    category: "AI & Automation",
    title: "AI Agents & Intelligent Automation",
    description:
      "Custom LLM-powered agents, workflow automation, and machine-learning pipelines that turn data into competitive advantage.",
    tags: ["LLM Integration", "RAG Pipelines", "ML Models", "Python", "Automation"],
    gradient: "from-[#a906c9] to-[#f016da]",
    icon: "🤖",
  },
  {
    id: 3,
    category: "Design & Brand",
    title: "UI/UX Design & Brand Identity",
    description:
      "Pixel-perfect interfaces and strategic brand identities that communicate your vision and create lasting impressions.",
    tags: ["Figma", "Design Systems", "Brand Strategy", "Motion UI", "Prototyping"],
    gradient: "from-[#f016da] to-[#1620f0]",
    icon: "🎨",
  },
  {
    id: 4,
    category: "Creative Media",
    title: "Video Production & Creative Content",
    description:
      "Cinematic brand films, social reels, motion graphics, and 3D animation that captivate audiences across every platform.",
    tags: ["Video Production", "Motion Graphics", "3D Animation", "Social Reels", "Photography"],
    gradient: "from-[#1620f0] to-[#f016da]",
    icon: "🎬",
  },
  {
    id: 5,
    category: "Cloud & DevOps",
    title: "Cloud Architecture & IT Consulting",
    description:
      "Scalable cloud infrastructure, DevOps pipelines, and strategic IT consulting to align technology with your business goals.",
    tags: ["AWS / GCP / Azure", "DevOps & CI/CD", "Cybersecurity", "Microservices", "Tech Strategy"],
    gradient: "from-[#a906c9] to-[#1620f0]",
    icon: "☁️",
  },
  {
    id: 6,
    category: "E-Commerce",
    title: "E-Commerce & SaaS Platforms",
    description:
      "High-converting storefronts and enterprise SaaS platforms engineered for performance, reliability, and rapid growth.",
    tags: ["Shopify", "Custom SaaS", "Payment Integration", "Analytics", "Subscriptions"],
    gradient: "from-[#f016da] to-[#a906c9]",
    icon: "🛒",
  },
];

// ─── Single Domain Card ──────────────────────────────────────────────────────
function DomainCard({
  domain,
  index,
}: {
  domain: (typeof domains)[0];
  index: number;
}) {
  const { t } = useTranslation();
  const category = t(`portfolio.cap.domain.${domain.id}.cat`, domain.category);
  const title = t(`portfolio.cap.domain.${domain.id}.title`, domain.title);
  const description = t(`portfolio.cap.domain.${domain.id}.desc`, domain.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col gap-4 overflow-hidden"
    >
      {/* Subtle gradient accent top-right */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${domain.gradient} opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-500 blur-2xl pointer-events-none`}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
            {category}
          </span>
          <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
            {title}
          </h3>
        </div>
        {/* Icon bubble */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center text-lg shadow-sm`}
        >
          {domain.icon}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-1">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-50 border border-slate-200 text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Animated bottom border on hover */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${domain.gradient} transition-all duration-500 rounded-b-2xl`}
      />
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function PortfolioCapabilities() {
  const { t } = useTranslation();

  return (
    <section
      id="capabilities"
      className="relative bg-slate-50 py-20 md:py-32 px-4 overflow-hidden border-t border-slate-100"
    >
      {/* Faint background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1620f0 1px, transparent 1px), linear-gradient(90deg, #1620f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span
                className="text-[#2f89f7] animate-spin font-bold"
                style={{ willChange: "transform" }}
              >
                ✱
              </span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-500 ml-1">
                {t("portfolio.cap.badge", "PORTFOLIO & CAPABILITIES")}
              </span>
              <span
                className="text-[#f016da] animate-spin font-bold ml-1"
                style={{ willChange: "transform" }}
              >
                ✱
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-950 tracking-tight leading-[1.1]"
          >
            {t("portfolio.cap.title.p1", "Key")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]">
              {t("portfolio.cap.title.p2", "Specialty")}
            </span>{" "}
            {t("portfolio.cap.title.p3", "Domains")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("portfolio.cap.desc", "Six core disciplines — each a deep well of expertise — working together to deliver complete digital solutions for ambitious brands.")}
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {domains.map((domain, i) => (
            <DomainCard key={domain.id} domain={domain} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/20 bg-[#050101] min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-5 overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                <span className="flex h-5 items-center justify-center uppercase tracking-widest text-[10px] md:text-xs text-white">
                  {t("portfolio.cap.btn.start", "Start a Project")}
                </span>
                <span className="flex h-5 items-center justify-center uppercase tracking-widest text-[10px] md:text-xs text-white">
                  {t("portfolio.cap.btn.start", "Start a Project")}
                </span>
              </div>
            </div>
          </a>
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-bold overflow-hidden transition-all duration-500 cursor-pointer shadow-sm bg-white border border-slate-200 hover:bg-slate-50 min-w-[200px]"
          >
            <div className="relative h-5 overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
                <span className="flex h-5 items-center justify-center uppercase tracking-widest text-[10px] md:text-xs text-slate-800">
                  {t("portfolio.cap.btn.view", "View All Services")}
                </span>
                <span className="flex h-5 items-center justify-center uppercase tracking-widest text-[10px] md:text-xs text-slate-800">
                  {t("portfolio.cap.btn.view", "View All Services")}
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
