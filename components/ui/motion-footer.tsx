"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import SocialFlipButton from "@/components/ui/social-flip-button";

export function CinematicFooter() {
  const { t } = useTranslation();

  const SERVICES = [
    { labelKey: "ftr.srv.1", href: "/services/web-engineering" },
    { labelKey: "ftr.srv.2", href: "/services/custom-software" },
    { labelKey: "ftr.srv.3", href: "/services/mobile-innovation" },
    { labelKey: "ftr.srv.4", href: "/services/branding-identity" },
    { labelKey: "ftr.srv.5", href: "/services/video-production" },
    { labelKey: "ftr.srv.6", href: "/services/creative-solutions" },
    { labelKey: "ftr.srv.7", href: "/services/ui-ux-design" },
    { labelKey: "ftr.srv.8", href: "/services/it-consulting" },
  ];

  const NAV_LINKS = [
    { labelKey: "ftr.nav.1", href: "/about" },
    { labelKey: "ftr.nav.2", href: "/#services" },
    { labelKey: "ftr.nav.3", href: "/#testimonials" },
    { labelKey: "ftr.nav.4", href: "/#contact" },
  ];

  const CONTACT = [
    { labelKey: "ftr.cnt.1", href: "/#contact" },
    { label: "+92 322 0264662", href: "tel:+923220264662" },
    { label: "info@softcr8ors.com", href: "mailto:info@softcr8ors.com" },
    { label: "services@softcr8ors.com", href: "mailto:services@softcr8ors.com" },
  ];

  return (
    <footer
      className="w-full bg-white py-8 px-3 sm:py-12 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-6 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ══ CARD: THE DARK GLASS-STYLE FOOTER WITH VIDEO BG ══ */}
      <div className="relative w-full rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#020205]/45 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] px-5 py-10 sm:px-12 lg:px-16 pt-12 md:pt-16 pb-10 md:pb-12 overflow-hidden backdrop-blur-xl">

        {/* Animated Background Video */}
        <video
          src="/i_need_animated_video_202605170943.mp4"
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={(e) => {
            if (window.innerWidth < 768 && e.currentTarget.currentTime >= 4) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => { });
            }
          }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Dim Glass Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[10px] z-0 pointer-events-none" />

        {/* Massive Background Watermark */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-[1] pointer-events-none select-none overflow-hidden h-[30%] px-2 sm:px-6 md:px-10">
          <div
            dir="ltr"
            className="font-sans font-black uppercase text-[7.5vw] sm:text-[8.5vw] md:text-[9vw] lg:text-[9.5vw] tracking-normal leading-none select-none pointer-events-none flex items-center justify-center whitespace-nowrap translate-y-[18%]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="text-white/[0.04] dark:text-white/[0.03]">SOFTCR</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] opacity-70 drop-shadow-[0_0_15px_rgba(169,6,201,0.35)] px-1 scale-105 transform inline-block">8</span>
            <span className="text-white/[0.04] dark:text-white/[0.03]">ORS</span>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10 md:gap-8 pb-12 z-10 relative">

          {/* Logo & Tagline Column */}
          <div className="col-span-2 md:col-span-2 flex flex-col items-start gap-4 z-10 relative">
            <div className="relative w-[220px] h-[60px] md:w-[280px] md:h-[80px] overflow-hidden">
              <img
                src="/white_logo.png"
                alt="Softcr8ors Logo"
                className="absolute w-full h-[220px] md:h-[280px] top-1/2 left-0 -translate-y-1/2 object-contain opacity-95 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <p className="text-zinc-300 text-sm max-w-sm leading-relaxed mt-2">
              {t("ftr.desc")}
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-white text-[11px] font-extrabold uppercase tracking-[0.2em] mb-5 pb-3 border-b border-white/10">
              {t("ftr.nav.2")}
            </p>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map(l => (
                <li key={l.labelKey}>
                  <Link href={l.href} className="text-zinc-400 transition-all duration-300 font-sans font-medium text-sm leading-relaxed inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]">
                    {t(l.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-white text-[11px] font-extrabold uppercase tracking-[0.2em] mb-5 pb-3 border-b border-white/10">
              {t("ftr.nav.1")}
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(l => (
                <li key={l.labelKey}>
                  <Link href={l.href} className="text-zinc-400 transition-all duration-300 font-sans font-medium text-sm leading-relaxed inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]">
                    {t(l.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left justify-center md:justify-start mx-auto md:mx-0 w-full md:w-auto">
            <p className="text-white text-[11px] font-extrabold uppercase tracking-[0.2em] mb-5 pb-3 border-b border-white/10 w-full text-center md:text-left">
              {t("ftr.nav.4")}
            </p>
            <ul className="space-y-3 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left w-full">
              {CONTACT.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-zinc-400 transition-all duration-300 font-sans font-medium text-sm leading-relaxed inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]">
                    {l.labelKey ? t(l.labelKey) : l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Gradient Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1620f0]/40 via-[#a906c9]/40 via-[#f016da]/40 to-transparent z-10 relative my-2" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4 pt-8 z-10 relative md:flex-row md:justify-between">

          {/* Left — Copyright + Policy */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center">
            <span className="text-zinc-400 text-xs tracking-wider whitespace-nowrap">
              {t("ftr.copy")}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-semibold">
              <Link href="/privacy-policy" className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-300 whitespace-nowrap">
                {t("ftr.pol.1")}
              </Link>
              <Link href="/terms-of-service" className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-300 whitespace-nowrap">
                {t("ftr.pol.2")}
              </Link>
            </div>
          </div>

          {/* Right — CONTACT flip */}
          <div className="flex items-center justify-center">
            <SocialFlipButton />
          </div>

        </div>

      </div>

    </footer>
  );
}
