"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import RevealLoader from "@/components/RevealLoader";

interface TransitionContextType {
  startTransition: (href: string, text: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState("");
  const [text, setText] = useState("");

  const startTransition = (href: string, transitionText: string) => {
    setText(transitionText);
    setTargetHref(href);
    setIsTransitioning(true);
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      {isTransitioning && (
        <RevealLoader
          text={text}
          textSize="clamp(32px, 6vw, 80px)"
          targetHref={targetHref}
          onNavigate={(href) => {
            router.push(href);
          }}
          onComplete={() => setIsTransitioning(false)}
        />
      )}
    </TransitionContext.Provider>
  );
};
