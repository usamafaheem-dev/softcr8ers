"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children?: ReactNode;
  className?: string;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: any;
  as?: ElementType;
  style?: React.CSSProperties;
}

export const TimelineContent = ({
  children,
  className,
  animationNum = 0,
  customVariants,
  timelineRef,
  as: Component = "div",
  style,
}: TimelineContentProps) => {
  const localRef = useRef(null);
  const isInView = useInView(timelineRef || localRef, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: animationNum * 0.1 } 
    },
  };

  return (
    <Component
      ref={localRef}
      style={style}
      className={cn(className, "relative")}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={customVariants || defaultVariants}
        custom={animationNum}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </Component>
  );
};
