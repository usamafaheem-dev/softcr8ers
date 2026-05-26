"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (hoveredId === null) return;
    const timer = setTimeout(() => setHoveredId(null), 2000);
    return () => clearTimeout(timer);
  }, [hoveredId]);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), animationDelay * 1000);
    const animationTimer = setTimeout(() => setIsLoaded(true), (animationDelay + 0.4) * 1000);
    return () => { clearTimeout(visibilityTimer); clearTimeout(animationTimer); };
  }, [animationDelay]);

  const photos = [
    {
      id: 1, order: 0, x: "-320px", y: "15px", mobX: "-30px", mobY: "-8px", mobRot: -6, zIndex: 50,
      direction: "left" as Direction,
      titleKey: "portfolio.card1.title", tagKey: "portfolio.card1.tag",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2, order: 1, x: "-160px", y: "32px", mobX: "-15px", mobY: "-4px", mobRot: -3, zIndex: 40,
      direction: "left" as Direction,
      titleKey: "portfolio.card2.title", tagKey: "portfolio.card2.tag",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3, order: 2, x: "0px", y: "8px", mobX: "0px", mobY: "0px", mobRot: 0, zIndex: 30,
      direction: "right" as Direction,
      titleKey: "portfolio.card3.title", tagKey: "portfolio.card3.tag",
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4, order: 3, x: "160px", y: "22px", mobX: "15px", mobY: "4px", mobRot: 3, zIndex: 20,
      direction: "right" as Direction,
      titleKey: "portfolio.card4.title", tagKey: "portfolio.card4.tag",
      src: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5, order: 4, x: "320px", y: "44px", mobX: "30px", mobY: "8px", mobRot: 6, zIndex: 10,
      direction: "left" as Direction,
      titleKey: "portfolio.card5.title", tagKey: "portfolio.card5.tag",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="mt-2 relative w-full select-none" onMouseLeave={() => setHoveredId(null)}>
      <div className="absolute inset-0 max-md:hidden top-[20px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="relative mb-4 h-[300px] md:h-[380px] w-full flex items-center justify-center overflow-visible">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center overflow-visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative flex w-full justify-center h-[240px] md:h-[280px] overflow-visible">

            {/* Hover triggers */}
            {isLoaded && photos.map((photo) => {
              const currentX = isMobile ? photo.mobX : photo.x;
              const currentY = isMobile ? photo.mobY : photo.y;
              return (
                <div
                  key={`trigger-${photo.id}`}
                  className={cn("absolute cursor-pointer z-50 bg-transparent", isMobile ? "w-[120px] h-[160px]" : "w-[180px] h-[240px]")}
                  style={{ left: "50%", top: "50%", transform: `translate(-50%, -50%) translate(${currentX}, ${currentY})` }}
                  onMouseEnter={() => setHoveredId(photo.id)}
                />
              );
            })}

            {/* Visual cards */}
            <div className={cn("relative overflow-visible", isMobile ? "h-[160px] w-[120px]" : "h-[240px] w-[240px]")}>
              {[...photos].reverse().map((photo) => {
                const isHovered = hoveredId === photo.id;
                const isAnyHovered = hoveredId !== null;
                const currentX = isMobile ? photo.mobX : photo.x;
                const currentY = isMobile ? photo.mobY : photo.y;
                const defaultRotation = isMobile ? photo.mobRot : (photo.id % 2 === 0 ? 3.5 : -3.5);
                const hoverScale = isMobile ? 1.18 : 1.35;
                const cardSize = isMobile ? 160 : 240;

                return (
                  <motion.div
                    key={photo.id}
                    className="absolute left-0 top-0 pointer-events-none"
                    style={{ willChange: "transform" }}
                    animate={{
                      x: isHovered ? 0 : isLoaded ? currentX : "0px",
                      y: isHovered ? 0 : isLoaded ? currentY : "0px",
                      scale: isHovered ? hoverScale : 1,
                      rotate: isHovered ? 0 : isLoaded ? defaultRotation : 0,
                      zIndex: isHovered ? 9999 : photo.zIndex,
                      opacity: isAnyHovered && !isHovered ? 0.35 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 15, mass: 1 }}
                  >
                    <Photo
                      width={cardSize}
                      height={cardSize}
                      src={photo.src}
                      alt={t(photo.titleKey)}
                      title={t(photo.titleKey)}
                      tag={t(photo.tagKey)}
                      isFocused={isHovered}
                      isMobile={isMobile}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full justify-center mt-6">
        <a href="/work" className="rounded-full bg-[#a906c9] hover:bg-[#a906c9]/95 text-white font-medium px-8 py-3 text-sm shadow-[0_10px_25px_rgba(169,6,201,0.15)] inline-flex items-center justify-center transition-all duration-200 hover:scale-105">
          {t("portfolio.explore.btn")}
        </a>
      </div>
    </div>
  );
};

type Direction = "left" | "right";

export const Photo = ({
  src, alt, title, tag, className, width, height, isFocused, isMobile,
}: {
  src: string; alt: string; title: string; tag: string; className?: string;
  width: number; height: number; isFocused?: boolean; isMobile?: boolean;
}) => {
  return (
    <div
      style={{ width, height, perspective: 400, WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none", touchAction: "none" }}
      className={cn(className, "relative mx-auto shrink-0 select-none pointer-events-none")}
      draggable={false}
    >
      <div className={cn(
        "relative h-full w-full overflow-hidden transition-all duration-500",
        isMobile ? "rounded-[1.2rem]" : "rounded-[2rem]",
        isFocused ? "border border-pink-300 bg-slate-900 shadow-[0_18px_45px_rgba(169,6,201,0.22)]" : "border border-slate-200/50 shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-950"
      )}>
        <img
          className={cn("object-cover h-full w-full pointer-events-none select-none transition-all duration-500", isMobile ? "rounded-[1.2rem]" : "rounded-[2rem]", isFocused ? "brightness-100 scale-102" : "brightness-75 scale-100")}
          src={src} alt={alt} draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
        <div className={cn("absolute inset-x-0 bottom-0 flex flex-col justify-end text-white select-none pointer-events-none", isMobile ? "p-3" : "p-5")}>
          <span className={cn("font-bold text-[#f016da] bg-[#f016da]/10 border border-[#f016da]/25 rounded-full w-fit mb-1 uppercase tracking-wider", isMobile ? "text-[6.5px] px-1.5 py-0.5" : "text-[9px] px-2 py-0.5")}>
            {tag}
          </span>
          <h4 className={cn("font-bold leading-tight tracking-tight text-white select-none", isMobile ? "text-[11px]" : "text-base")}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};
