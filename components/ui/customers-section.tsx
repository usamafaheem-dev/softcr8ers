"use client"

import React from "react"
import { 
  SiShopify, 
  SiWordpress, 
  SiWebflow, 
  SiVercel, 
  SiGithub, 
  SiFigma, 
  SiTailwindcss, 
  SiHubspot,
  SiNextdotjs
} from "react-icons/si"

export interface CustomerLogo {
  src?: string
  alt?: string
  height?: number
}

interface CustomersSectionProps {
  className?: string
}

// Row 1 Brands (Moving Left)
const row1 = [
  {
    name: "Shopify",
    render: () => (
      <div className="flex items-center gap-3.5 font-sans select-none shrink-0">
        <SiShopify className="w-7 h-7 md:w-9 md:h-9 text-[#96BF48]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">Shopify</span>
      </div>
    )
  },
  {
    name: "inDrive",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <div className="bg-[#B2F93C] text-black font-black px-2.5 py-1 rounded text-[11px] md:text-[13px] tracking-tighter shrink-0">iD</div>
        <span className="text-black font-bold text-[16px] md:text-[20px] tracking-tight">inDrive</span>
      </div>
    )
  },
  {
    name: "Webflow",
    render: () => (
      <div className="flex items-center gap-3.5 font-sans select-none shrink-0">
        <SiWebflow className="w-7 h-7 md:w-9 md:h-9 text-[#4353FF]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">webflow</span>
      </div>
    )
  },
  {
    name: "x.quic",
    render: () => (
      <div className="flex items-center gap-1 font-sans select-none shrink-0">
        <span className="text-[#F25A62] font-black text-[18px] md:text-[22px] tracking-tighter">x</span>
        <span className="text-[#F25A62] text-[18px] md:text-[22px] font-bold leading-none relative -top-0.5">•</span>
        <span className="text-[#F25A62] font-bold text-[18px] md:text-[22px] tracking-tight">quic</span>
      </div>
    )
  },
  {
    name: "Vercel",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiVercel className="w-6 h-6 md:w-8 md:h-8 text-black" />
        <span className="text-black font-black tracking-widest text-[14px] md:text-[18px] uppercase">Vercel</span>
      </div>
    )
  },
  {
    name: "Grocer App",
    render: () => (
      <div className="bg-[#EF8E49] text-white font-extrabold px-3.5 py-1.5 rounded-xl text-[13px] md:text-[16px] tracking-tight select-none leading-tight flex flex-col items-center shrink-0">
        <span>Grocer</span>
        <span className="text-[10px] md:text-[11.5px] font-medium leading-none -mt-0.5 text-orange-100">App</span>
      </div>
    )
  },
  {
    name: "GitHub",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiGithub className="w-7 h-7 md:w-9 md:h-9 text-black" />
        <span className="text-black font-bold text-[16px] md:text-[20px] tracking-tight">GitHub</span>
      </div>
    )
  },
  {
    name: "Zellbury",
    render: () => (
      <span className="text-slate-800 font-serif text-[18px] md:text-[22px] font-bold tracking-tight select-none shrink-0">
        Zellbury
      </span>
    )
  }
]

// Row 2 Brands (Moving Right)
const row2 = [
  {
    name: "WordPress",
    render: () => (
      <div className="flex items-center gap-3.5 font-sans select-none shrink-0">
        <SiWordpress className="w-7 h-7 md:w-9 md:h-9 text-[#21759B]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">WordPress</span>
      </div>
    )
  },
  {
    name: "Next.js",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiNextdotjs className="w-7 h-7 md:w-9 md:h-9 text-black" />
        <span className="text-black font-bold text-[16px] md:text-[20px] tracking-tight">Next.js</span>
      </div>
    )
  },
  {
    name: "Kallidus",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <div className="w-5 h-5 md:w-7 md:h-7 bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full shrink-0" />
        <span className="text-[#1E293B] font-bold text-[16px] md:text-[20px] tracking-tight">Kallidus</span>
      </div>
    )
  },
  {
    name: "HubSpot",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiHubspot className="w-7 h-7 md:w-9 md:h-9 text-[#FF7A59]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">HubSpot</span>
      </div>
    )
  },
  {
    name: "Xiaomi",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <div className="bg-[#FF6700] text-white font-bold w-5.5 h-5.5 md:w-7 md:h-7 flex items-center justify-center rounded-lg text-[10px] md:text-[12px] select-none font-sans shrink-0">mi</div>
        <span className="text-slate-800 font-bold text-[16px] md:text-[20px] tracking-tight">Xiaomi</span>
      </div>
    )
  },
  {
    name: "Metaplex",
    render: () => (
      <div className="flex items-center gap-2.5 font-sans select-none shrink-0">
        <span className="text-purple-600 font-black text-[15px] md:text-[18px] tracking-tight">▲</span>
        <span className="text-slate-800 font-extrabold text-[13px] md:text-[16px] tracking-wider uppercase">Metaplex</span>
      </div>
    )
  },
  {
    name: "Green Hill",
    render: () => (
      <div className="flex items-center gap-2.5 font-sans select-none shrink-0">
        <div className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[9px] md:text-[11px] font-bold font-sans shrink-0">GH</div>
        <span className="text-slate-800 font-black text-[13px] md:text-[16px] tracking-tight uppercase">Green Hill</span>
      </div>
    )
  },
  {
    name: "Figma",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiFigma className="w-5 h-5 md:w-7 md:h-7 text-[#F24E1E]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">Figma</span>
      </div>
    )
  },
  {
    name: "Tailwind CSS",
    render: () => (
      <div className="flex items-center gap-3 font-sans select-none shrink-0">
        <SiTailwindcss className="w-7 h-7 md:w-9 md:h-9 text-[#06B6D4]" />
        <span className="text-[#1A1A1A] font-bold text-[16px] md:text-[20px] tracking-tight">tailwindcss</span>
      </div>
    )
  }
]

export function CustomersSection({ className }: CustomersSectionProps) {
  // Duplicate arrays to make infinite loop smooth
  const marquee1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1]
  const marquee2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2]

  return (
    <section className={`relative w-full py-8 md:py-12 bg-white border-y border-slate-100/80 overflow-hidden ${className ?? ""}`}>
      {/* Side gradient masks - narrower and subtler so the logos are highly visible across the screen */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6 md:gap-10">
        {/* Line 1: Moving Left */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div 
            className="flex gap-12 md:gap-18 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-2.5 items-center w-max"
            style={{ animationDuration: "140s" }}
          >
            {marquee1.map((brand, index) => {
              const RenderLogo = brand.render
              return (
                <div 
                  key={`${brand.name}-row1-${index}`} 
                  className="flex items-center justify-center group cursor-pointer px-2.5 transform hover:scale-105 transition-transform duration-300 ease-out"
                >
                  <RenderLogo />
                </div>
              )
            })}
          </div>
        </div>

        {/* Line 2: Moving Right */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div 
            className="flex gap-12 md:gap-18 animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap py-2.5 items-center w-max"
            style={{ animationDuration: "140s" }}
          >
            {marquee2.map((brand, index) => {
              const RenderLogo = brand.render
              return (
                <div 
                  key={`${brand.name}-row2-${index}`} 
                  className="flex items-center justify-center group cursor-pointer px-2.5 transform hover:scale-105 transition-transform duration-300 ease-out"
                >
                  <RenderLogo />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
