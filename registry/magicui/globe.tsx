"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

export interface GlobeProps extends React.HTMLAttributes<HTMLCanvasElement> {
  config?: any;
}

export function Globe({ className, config, ...props }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionStart = useRef<number>(0);
  const phi = useRef<number>(0);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globeConfig = {
      devicePixelRatio: 2,
      width: width * 2 || 600 * 2,
      height: width * 2 || 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.04, 0.06, 0.12], // Deep high-end midnight blue land
      markerColor: [0.0, 0.9, 1.0],   // Radiant cyan glow markers
      glowColor: [0.05, 0.15, 0.35],  // Subtle glowing atmospheric aura
      markers: [
        // Markers matching the user's second image: LATAM, Africa, Thailand, Hong Kong, Japan, Philippines
        { location: [-14.235, -51.9253], size: 0.05 },  // LATAM (Brazil)
        { location: [9.082, 8.6753], size: 0.05 },     // AFRICA (Nigeria)
        { location: [15.87, 100.9925], size: 0.05 },   // THAILAND
        { location: [22.3193, 114.1694], size: 0.05 }, // HONG KONG
        { location: [36.2048, 138.2529], size: 0.05 }, // JAPAN
        { location: [12.8797, 121.774], size: 0.07 },  // PHILIPPINES (prominent user anchor!)
      ],
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          phi.current += 0.003; // Calm, premium automatic rotation
        }
        state.phi = phi.current;
        state.width = width * 2 || 600 * 2;
        state.height = width * 2 || 600 * 2;
      },
      ...config,
    };

    const globe = createGlobe(canvasRef.current!, globeConfig);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] transition-opacity duration-500",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - phi.current * 200;
          pointerInteractionStart.current = e.clientX;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            phi.current = delta / 200;
          }
        }}
        className="h-full w-full opacity-0 transition-opacity duration-500 cursor-grab"
        style={{
          width: "100%",
          height: "100%",
          containIntrinsicSize: "auto 100%",
        }}
        {...props}
      />
    </div>
  );
}
