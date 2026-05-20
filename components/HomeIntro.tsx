"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

// Global event name so Navbar can trigger it
export const INTRO_EVENT = "softcr8ors:play-intro";

export default function HomeIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(0); // remount to replay animation

  const playIntro = useCallback(() => {
    setKey(k => k + 1);
    setShow(true);
  }, []);

  useEffect(() => {
    // Show on every home page load
    playIntro();
  }, []);

  useEffect(() => {
    // Listen for logo-click trigger
    const handler = () => playIntro();
    window.addEventListener(INTRO_EVENT, handler);
    return () => window.removeEventListener(INTRO_EVENT, handler);
  }, [playIntro]);

  useGSAP(
    () => {
      if (!show || !ref.current) return;

      // Reset bars and letters before animating
      gsap.set(".intro-bar", { y: "0%" });
      gsap.set(".intro-letter", { y: "120%", autoAlpha: 1 });
      gsap.set(ref.current, { autoAlpha: 1, display: "flex" });

      const tl = gsap.timeline({
        onComplete: () => {
          if (ref.current) {
            ref.current.style.display = "none";
          }
          setShow(false);
        },
      });

      // Letters slide up
      tl.to(".intro-letter", {
        y: 0,
        stagger: 0.04,
        duration: 0.35,
        ease: "power3.out",
      });

      // Hold
      tl.to({}, { duration: 0.55 });

      // Bars slide down (center-out)
      tl.to(".intro-bar", {
        y: "100%",
        stagger: { each: 0.07, from: "center" },
        duration: 0.55,
        ease: "power2.inOut",
      });

      // Letters fade out
      tl.to(".intro-letter", { autoAlpha: 0, duration: 0.2 }, "<0.1");

      // Overlay fade out
      tl.to(ref.current, { autoAlpha: 0, duration: 0.15 }, "+=0.05");
    },
    { scope: ref, dependencies: [show, key] }
  );

  if (!show) return null;

  const text = "SOFTCR8ORS";

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="intro-bar h-full w-[10%]"
          style={{ background: "linear-gradient(160deg, #1620f0, #a906c9, #f016da)" }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="overflow-hidden">
          <p
            className={`${anton.className} flex leading-none tracking-tighter`}
            style={{ fontSize: "clamp(36px, 7vw, 90px)", color: "white", textTransform: "uppercase" }}
          >
            {text.split("").map((char, i) => (
              <span key={i} className="intro-letter inline-block" style={{ transform: "translateY(120%)" }}>
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
