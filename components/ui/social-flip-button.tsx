"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";

export interface SocialItem {
  letter: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SocialFlipButtonProps {
  items?: SocialItem[];
  className?: string;
}

const defaultItems: SocialItem[] = [
  { letter: "C", icon: <FaGithub />,    label: "GitHub",     href: "#" },
  { letter: "O", icon: <FaTwitter />,   label: "Twitter / X", href: "#" },
  { letter: "N", icon: <FaLinkedin />,  label: "LinkedIn",   href: "#" },
  { letter: "T", icon: <FaInstagram />, label: "Instagram",  href: "#" },
  { letter: "A", icon: <FaFacebook />,  label: "Facebook",   href: "#" },
  { letter: "C", icon: <FaEnvelope />,  label: "Email",      href: "mailto:hello@Softcr8ors.com" },
  { letter: "T", icon: <FaDiscord />,   label: "Discord",    href: "#" },
];

const SocialFlipNode = ({
  item,
  index,
  isHovered,
  tooltipIndex,
  setTooltipIndex,
}: {
  item: SocialItem;
  index: number;
  isHovered: boolean;
  tooltipIndex: number | null;
  setTooltipIndex: (val: number | null) => void;
}) => {
  const commonProps = {
    className:
      "relative h-8 w-8 sm:h-10 sm:w-10 cursor-pointer flex-shrink-0",
    style: { perspective: "1000px" },
    onMouseEnter: () => setTooltipIndex(index),
    onMouseLeave: () => setTooltipIndex(null),
  };

  return item.href ? (
    <a
      {...commonProps}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {tooltipIndex === index && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85, x: "-50%" }}
            animate={{ opacity: 1, y: -44, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 6, scale: 0.85, x: "-50%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 z-50 whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] font-bold text-white shadow-xl tracking-wide"
            style={{
              background: "linear-gradient(135deg, #1620f0, #a906c9, #f016da)",
            }}
          >
            {item.label}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45"
              style={{ background: "#a906c9" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flip card */}
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 130,
          damping: 16,
          delay: index * 0.07,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT — Letter */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-black tracking-tight border border-white/10 bg-white/[0.06] text-white/80"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.letter}
        </div>

        {/* BACK — Icon with brand gradient */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-base text-white shadow-[0_0_18px_rgba(169,6,201,0.5)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #1620f0, #a906c9, #f016da)",
          }}
        >
          {item.icon}
        </div>
      </motion.div>
    </a>
  ) : (
    <div {...commonProps} onClick={item.onClick}>
      {/* Tooltip */}
      <AnimatePresence>
        {tooltipIndex === index && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85, x: "-50%" }}
            animate={{ opacity: 1, y: -44, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 6, scale: 0.85, x: "-50%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 z-50 whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] font-bold text-white shadow-xl tracking-wide"
            style={{
              background: "linear-gradient(135deg, #1620f0, #a906c9, #f016da)",
            }}
          >
            {item.label}
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45"
              style={{ background: "#a906c9" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flip card */}
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 130,
          damping: 16,
          delay: index * 0.07,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT — Letter */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-black tracking-tight border border-white/10 bg-white/[0.06] text-white/80"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.letter}
        </div>

        {/* BACK — Icon with brand gradient */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-base text-white shadow-[0_0_18px_rgba(169,6,201,0.5)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #1620f0, #a906c9, #f016da)",
          }}
        >
          {item.icon}
        </div>
      </motion.div>
    </div>
  );
};

export default function SocialFlipButton({
  items = defaultItems,
  className,
}: SocialFlipButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  // Debounce ref — prevents flicker when mouse crosses gaps between buttons
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setIsHovered(false);
      setTooltipIndex(null);
    }, 80);
  }, []);

  return (
    <div
      className={cn(
        "relative flex items-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl px-2 sm:px-3 py-1.5 sm:py-2",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Animated border sweep */}
      <div className="absolute -inset-[1px] overflow-hidden rounded-2xl pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 h-[1px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #1620f0, #a906c9, #f016da, transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f016da, #a906c9, #1620f0, transparent)",
          }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {items.map((item, index) => (
        <SocialFlipNode
          key={index}
          item={item}
          index={index}
          isHovered={isHovered}
          tooltipIndex={tooltipIndex}
          setTooltipIndex={setTooltipIndex}
        />
      ))}
    </div>
  );
}
