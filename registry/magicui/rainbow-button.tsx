import * as React from "react";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden px-8 py-2.5 rounded-lg font-bold text-white bg-black border border-black shadow-xl transition-all duration-300 group h-[48px] inline-flex items-center justify-center w-auto",
          className
        )}
        {...props}
      >
        <span className="relative block h-[28px] overflow-hidden w-full">
          <span className="absolute left-0 right-0 top-1/2 w-full -translate-y-1/2 transition-transform duration-300 group-hover:-translate-y-full text-center whitespace-nowrap">
            Contact
          </span>
          <span className="absolute left-0 right-0 top-1/2 w-full translate-y-full -translate-y-1/2 transition-transform duration-300 group-hover:translate-y-0 text-center whitespace-nowrap">
            Contact
          </span>
        </span>
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
