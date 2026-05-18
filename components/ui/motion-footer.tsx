"use client";

import React from "react";

const SERVICES = [
  { label: "Web Engineering", href: "/services/web-engineering" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Mobile Innovation", href: "/services/mobile-innovation" },
  { label: "SaaS Platforms", href: "/services/saas-platforms" },
  { label: "Gen AI Content", href: "/services/gen-ai-content" },
  { label: "Intelligence AI", href: "/services/intelligence-ai" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Technical SEO", href: "/services/technical-seo" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const CONTACT = [
  { label: "Start a Project", href: "#contact" },
  { label: "Book a Demo", href: "#contact" },
  { label: "hello@Softcr8ors.com", href: "mailto:hello@Softcr8ors.com" },
];


function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-zinc-400 transition-all duration-300 font-sans font-medium text-sm leading-relaxed inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9]"
      >
        {children}
      </a>
    </li>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white text-[11px] font-extrabold uppercase tracking-[0.2em] mb-5 pb-3 border-b border-white/10">
      {children}
    </p>
  );
}

export function CinematicFooter() {
  return (
    <footer
      className="w-full bg-white py-8 px-3 sm:py-12 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-6 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >


      {/* ══ CARD 2: THE DARK GLASS-STYLE FOOTER WITH VIDEO BG ══ */}
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

        {/* Massive Background Watermark Text "SOFTCR8ORS" - Absolute bottom aligned, larger size */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-[1] pointer-events-none select-none overflow-hidden h-[30%] px-2 sm:px-6 md:px-10">
          <div
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
              Softcr8ors empowers fast-growing companies with state-of-the-art web engineering, custom software solutions, and production-ready AI platforms that scale.
            </p>
          </div>

          {/* Product/Services */}
          <div className="col-span-1 md:col-span-1">
            <ColHeading>Services</ColHeading>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </ul>
          </div>

          {/* Resources / Company Navigation */}
          <div className="col-span-1 md:col-span-1">
            <ColHeading>Navigation</ColHeading>
            <ul className="space-y-3">
              {NAV_LINKS.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left justify-center md:justify-start mx-auto md:mx-0 w-full md:w-auto">
            <p className="text-white text-[11px] font-extrabold uppercase tracking-[0.2em] mb-5 pb-3 border-b border-white/10 w-full text-center md:text-left">
              Contact
            </p>
            <ul className="space-y-3 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left w-full">
              {CONTACT.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </ul>
          </div>

        </div>

        {/* Sleek Gradient Divider Line (Logo Gradient) */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1620f0]/40 via-[#a906c9]/40 via-[#f016da]/40 to-transparent z-10 relative my-2" />

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 z-10 relative text-center md:text-left">

          <span className="text-zinc-400 text-xs tracking-wider">
            © 2026 Softcr8ors. All rights reserved.
          </span>

          {/* Pill Badges for Policy links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[11px] text-zinc-400 font-semibold">
            <a href="#privacy" className="px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-300">
              Terms of Service
            </a>
            <a href="#cookies" className="px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-300">
              Cookies Settings
            </a>
          </div>

          {/* Animated Social Icons */}
          <div className="flex items-center justify-center gap-2">
            <a href="#" className="w-9 h-9 rounded-full border border-[#1620f0]/20 bg-[#1620f0]/5 flex items-center justify-center text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9] hover:border-transparent shadow-[0_0_12px_rgba(168,85,247,0.06)] hover:shadow-[0_0_20px_rgba(22,32,240,0.35)] transition-all duration-300 hover:scale-110 active:scale-95">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#1620f0]/20 bg-[#1620f0]/5 flex items-center justify-center text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9] hover:border-transparent shadow-[0_0_12px_rgba(168,85,247,0.06)] hover:shadow-[0_0_20px_rgba(22,32,240,0.35)] transition-all duration-300 hover:scale-110 active:scale-95">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#1620f0]/20 bg-[#1620f0]/5 flex items-center justify-center text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9] hover:border-transparent shadow-[0_0_12px_rgba(168,85,247,0.06)] hover:shadow-[0_0_20px_rgba(22,32,240,0.35)] transition-all duration-300 hover:scale-110 active:scale-95">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#1620f0]/20 bg-[#1620f0]/5 flex items-center justify-center text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1620f0] hover:to-[#a906c9] hover:border-transparent shadow-[0_0_12px_rgba(168,85,247,0.06)] hover:shadow-[0_0_20px_rgba(22,32,240,0.35)] transition-all duration-300 hover:scale-110 active:scale-95">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.478-10-10-10z" />
              </svg>
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}
