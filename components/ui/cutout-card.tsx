import Image, { type ImageProps } from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

export const cutoutCardSurfaceClassName =
  "group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl";

export const CutoutCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(cutoutCardSurfaceClassName, className)} {...props} />
));
CutoutCard.displayName = "CutoutCard";

export const CutoutCardMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  />
));
CutoutCardMedia.displayName = "CutoutCardMedia";

export const CutoutCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative z-10 p-6 md:p-7", className)}
    {...props}
  />
));
CutoutCardContent.displayName = "CutoutCardContent";

export const CutoutCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative z-10 p-6 pt-0 md:p-7 md:pt-0", className)}
    {...props}
  />
));
CutoutCardFooter.displayName = "CutoutCardFooter";

export const CutoutCardOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent",
      className
    )}
    {...props}
  />
));
CutoutCardOverlay.displayName = "CutoutCardOverlay";

export const CutoutCardInsetLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("absolute z-10", className)} {...props} />
));
CutoutCardInsetLabel.displayName = "CutoutCardInsetLabel";

export const CutoutCardPin = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute z-10 flex items-center", className)}
    {...props}
  />
));
CutoutCardPin.displayName = "CutoutCardPin";

export const CutoutCardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
      className
    )}
    {...props}
  />
));
CutoutCardAction.displayName = "CutoutCardAction";

type CutoutCardImageProps = Omit<ImageProps, "fill"> & {
  className?: string;
};

export function CutoutCardImage({ className, sizes, ...props }: CutoutCardImageProps) {
  // Use explicit width/height (responsive) to ensure Next/Image renders reliably on mobile
  // and keeps aspect ratio. "fill" requires precise parent sizing which can sometimes
  // be problematic inside certain layout flows on small screens.
  const fallbackWidth = 1200;
  const fallbackHeight = 720;

  return (
    <Image
      {...props}
      width={props.width ?? fallbackWidth}
      height={props.height ?? fallbackHeight}
      sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
      className={cn("object-cover w-full h-full", className)}
    />
  );
}

export function CutoutCorner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none block h-8 w-8", className)}
      style={{
        background: "currentColor",
        clipPath: "polygon(0 0, 100% 0, 0 100%)",
      }}
    />
  );
}
