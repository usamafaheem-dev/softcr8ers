"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Per-service image pools (12 images each) ──────────────────────────────
const categoryImages: Record<string, { src: string; title: string }[]> = {
  "web-engineering": [
    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80", title: "Custom Web Design" },
    { src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=80", title: "Responsive Layout" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80", title: "Admin Dashboard" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", title: "Analytics & Data" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80", title: "Secure Deployment" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", title: "Clean Code" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "UI Engineering" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80", title: "API Integration" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80", title: "Full Stack Build" },
    { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=80", title: "Version Control" },
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80", title: "Security" },
    { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80", title: "Performance" },
  ],
  "custom-software": [
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", title: "Workflow Automation" },
    { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80", title: "Dashboard UI" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80", title: "Data Analytics" },
    { src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80", title: "Integrations" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", title: "Clean Architecture" },
    { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80", title: "Cloud Solutions" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", title: "Team Collaboration" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80", title: "Infrastructure" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "User Panels" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80", title: "Digital Reports" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80", title: "Role-Based Access" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80", title: "Deployment" },
  ],
  "mobile-innovation": [
    { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80", title: "Mobile App" },
    { src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80", title: "Cross-Platform" },
    { src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=80", title: "Push Notifications" },
    { src: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=800&auto=format&fit=crop&q=80", title: "UX Design" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80", title: "Native Animation" },
    { src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&auto=format&fit=crop&q=80", title: "Offline Mode" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80", title: "OTA Updates" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", title: "Performance" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "User Engagement" },
    { src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=80", title: "Testing" },
    { src: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=800&auto=format&fit=crop&q=80", title: "App Store" },
    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80", title: "Responsive" },
  ],
  "ui-ux-design": [
    { src: "https://images.unsplash.com/photo-1561070791-26c113006238?w=800&auto=format&fit=crop&q=80", title: "User Research" },
    { src: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=800&auto=format&fit=crop&q=80", title: "Wireframing" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "Design System" },
    { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80", title: "Component Library" },
    { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80", title: "Prototyping" },
    { src: "https://images.unsplash.com/photo-1541462608141-2ffb16df343b?w=800&auto=format&fit=crop&q=80", title: "Brand Identity" },
    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80", title: "Micro Interactions" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", title: "Analytics" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80", title: "Accessibility" },
    { src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80", title: "Dark Mode" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80", title: "Data Viz" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", title: "Handoff" },
  ],
  "branding-identity": [
    { src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=80", title: "Logo Design" },
    { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80", title: "Color Palette" },
    { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80", title: "Typography" },
    { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80", title: "Brand Guide" },
    { src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80", title: "Packaging Design" },
    { src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80", title: "Social Kit" },
    { src: "https://images.unsplash.com/photo-1561070791-26c113006238?w=800&auto=format&fit=crop&q=80", title: "Illustration" },
    { src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80", title: "Stationery" },
    { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80", title: "Print Design" },
    { src: "https://images.unsplash.com/photo-1541462608141-2ffb16df343b?w=800&auto=format&fit=crop&q=80", title: "Visual Identity" },
    { src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80", title: "Dark Branding" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "UI Kit" },
  ],
  "video-production": [
    { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80", title: "Concept Shoot" },
    { src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80", title: "Studio Setup" },
    { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80", title: "Cinematic Edit" },
    { src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80", title: "Color Grade" },
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80", title: "Drone Shots" },
    { src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80", title: "Audio Mastering" },
    { src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80", title: "Motion Graphics" },
    { src: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=800&auto=format&fit=crop&q=80", title: "4K Filming" },
    { src: "https://images.unsplash.com/photo-1542204172-e7052809a850?w=800&auto=format&fit=crop&q=80", title: "Reel Editing" },
    { src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop&q=80", title: "Post Production" },
    { src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&auto=format&fit=crop&q=80", title: "Broadcast Ready" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80", title: "Delivery" },
  ],
  "it-consulting": [
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80", title: "Cloud Strategy" },
    { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80", title: "Infrastructure Audit" },
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80", title: "Cybersecurity" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", title: "Team Enablement" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80", title: "DevOps Pipeline" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", title: "Cost Optimization" },
    { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80", title: "Tech Stack Review" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80", title: "Data Management" },
    { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80", title: "Dashboards" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", title: "Development" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80", title: "Automation" },
    { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80", title: "Disaster Recovery" },
  ],
  "creative-solutions": [
    { src: "https://images.unsplash.com/photo-1561070791-26c113006238?w=800&auto=format&fit=crop&q=80", title: "Illustrations" },
    { src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80", title: "Pitch Decks" },
    { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80", title: "Social Media" },
    { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80", title: "Content Design" },
    { src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80", title: "Print Materials" },
    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80", title: "Motion Design" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80", title: "UI Animations" },
    { src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80", title: "Brand Collateral" },
    { src: "https://images.unsplash.com/photo-1541462608141-2ffb16df343b?w=800&auto=format&fit=crop&q=80", title: "Visual Design" },
    { src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80", title: "Dark Aesthetics" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", title: "Campaign Assets" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", title: "Analytics" },
  ],
};

const fallback = categoryImages["web-engineering"];

// ─── Parallax Image Card ────────────────────────────────────────────────────
function GalleryCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-md group cursor-pointer">
      <div className="aspect-[3/4]">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
          onError={(e) => {
            // Fallback to a solid color if image fails
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 z-20">
          <p className="text-white text-xs font-semibold tracking-wide">{title}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Parallax Column ────────────────────────────────────────────────────────
function ParallaxColumn({
  items,
  y,
  className = "",
}: {
  items: { src: string; title: string }[];
  y: any;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y }}
      className={`flex flex-col gap-4 w-full ${className}`}
    >
      {items.map((item, i) => (
        <GalleryCard key={i} src={item.src} title={item.title} />
      ))}
    </motion.div>
  );
}

// ─── Main Skiper30 Export ───────────────────────────────────────────────────
interface Skiper30Props {
  category?: string;
  images?: { src: string; title: string }[];
}

export function Skiper30({ category, images }: Skiper30Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const pool = images ?? (category && categoryImages[category] ? categoryImages[category] : fallback);

  // Split 12 images into 4 columns of 3
  const col1 = pool.slice(0, 3);
  const col2 = pool.slice(3, 6);
  const col3 = pool.slice(6, 9);
  const col4 = pool.slice(9, 12);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speed for each column for the depth effect
  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[32px] bg-slate-50 border border-slate-200/60 shadow-xl"
      style={{ height: "680px" }}
    >
      {/* Top & Bottom frosted fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none" />

      {/* 4-Column parallax grid */}
      <div className="absolute inset-0 flex gap-3 md:gap-4 px-3 md:px-4 pt-8">
        {/* Column 1 */}
        <ParallaxColumn items={col1} y={y1} className="flex" />
        {/* Column 2 — hidden on mobile */}
        <ParallaxColumn items={col2} y={y2} className="hidden sm:flex" />
        {/* Column 3 */}
        <ParallaxColumn items={col3} y={y3} className="flex" />
        {/* Column 4 — hidden on small screens */}
        <ParallaxColumn items={col4} y={y4} className="hidden md:flex" />
      </div>
    </div>
  );
}
