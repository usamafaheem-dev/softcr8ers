"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, Bot, ChevronDown, Send, Globe, LayoutGrid, Zap, X, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextarea";

// ─── Animated Chat Messages ─────────────────────────────────
type Message = {
  role: "user" | "ai";
  text: string;
};

const chatMessages: Message[] = [
  { role: "user", text: "Build us a new brand website." },
  { role: "ai", text: "On it — wireframes ready." },
  { role: "user", text: "Can we add a video reel?" },
  { role: "ai", text: "Done. Production starts Monday." },
];

function ChatBubble({ message, index, isTyping = false, className }: { message: Message; index: number; isTyping?: boolean; className?: string }) {
  if (!message) return null;
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex w-full mb-4 items-center gap-4",
        isUser ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      {isUser ? (
        <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-sm p-[2px] bg-gradient-to-tr from-[#1620f0] via-[#f016da] to-[#a906c9]">
          <img src={`https://i.pravatar.cc/100?u=user${index}`} alt="User" className="w-full h-full object-cover rounded-[6px]" />
        </div>
      ) : (
        <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-sm flex items-center justify-center bg-[#050101] border border-white/10">
          <div className="relative">
            <X size={18} className="text-[#a906c9] drop-shadow-[0_0_8px_rgba(169,6,201,1)] stroke-[3px]" />
          </div>
        </div>
      )}

      <div
        className={cn(
          "max-w-[85%] px-4 py-3 rounded-2xl text-[13.5px] leading-[1.5] shadow-sm border border-white font-[family-name:var(--font-inter)] font-medium bg-white",
          isUser
            ? "text-slate-800 rounded-br-none"
            : "text-slate-800 rounded-bl-none"
        )}
      >
        {message.text}
      </div>
    </motion.div>
  );
}

// Rolling Text Button component
function RollingTextButton({
  label,
  href = "#",
  variant = "gradient",
  className
}: {
  label: string;
  href?: string;
  variant?: "gradient" | "transparent";
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl px-9 py-3 font-semibold font-sans overflow-hidden transition-all duration-500 cursor-pointer",
        variant === "gradient"
          ? "bg-[#050101] text-white shadow-xl hover:shadow-blue-500/10"
          : "bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-sm shadow-slate-100/50 hover:bg-white/75 hover:border-slate-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#1620f0] bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative h-6 overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
          <span className="flex h-6 items-center justify-center relative z-10">
            {label}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ─── AI Prompt Component ────────────────────────────────────
function HeroAIPrompt() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 60, maxHeight: 150 });

  return (
    <motion.div
      className="w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]"
    >
      <div className="flex flex-col">
        {/* GPT selector + Search — small and compact on mobile */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-2">
          <div className="relative flex items-center h-8 md:h-10 bg-slate-50 border border-slate-200 rounded-full px-2 shadow-sm">
            <Zap size={14} className="text-[#a906c9] mr-1" />
            <select className="appearance-none bg-transparent pl-1 pr-7 py-1 text-[12px] md:text-[14px] font-bold text-slate-800 outline-none cursor-pointer">
              <option>GPT 4.5</option>
              <option>GPT 4.0</option>
              <option>Claude 3.5</option>
              <option>Gemini 1.5</option>
            </select>
            <ChevronDown size={12} className="text-slate-500 absolute right-3 pointer-events-none" />
          </div>
          <button className="flex items-center gap-1.5 h-8 md:h-9 px-3 rounded-full bg-white border border-slate-200 text-[11px] md:text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Globe size={12} /> Search
          </button>
        </div>

        <Textarea
          ref={textareaRef}
          value={value}
          placeholder="Ask anything ..."
          className="w-full px-4 md:px-5 py-4 bg-white border-none text-slate-900 placeholder:text-slate-500 font-medium resize-none focus-visible:ring-0 min-h-15 text-[15px] md:text-[16px] shadow-none"
          onChange={(e) => { setValue(e.target.value); adjustHeight(); }}
        />

        <div className="flex items-center justify-between bg-white px-3 pb-3 pt-1">
          {/* Suggestion tags: only 'Workflow' on mobile */}
          <div className="flex gap-2 items-center">
            <button disabled className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] md:text-[12px] font-medium text-slate-600 flex items-center gap-1.5 cursor-default hover:bg-slate-50 transition-colors">
              <Sparkles size={12} className="text-[#a906c9]" /> Design a Brand
            </button>
            <button disabled className="hidden md:flex px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[12px] font-medium text-slate-600 items-center gap-1.5 cursor-default hover:bg-slate-50 transition-colors">
              <Sparkles size={12} className="text-[#a906c9]" /> Build a Website
            </button>
            <button disabled className="hidden md:flex px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[12px] font-medium text-slate-600 items-center gap-1.5 cursor-default hover:bg-slate-50 transition-colors">
              <Sparkles size={12} className="text-[#a906c9]" /> Edit a Video
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <button disabled className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-slate-400 cursor-default hover:text-slate-600 transition-colors">
              <Paperclip className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </button>
            <button disabled className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f016da] to-[#1620f0] flex items-center justify-center text-white shadow-lg cursor-default">
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Hero Section ──────────────────────────────────────
export function HeroSection() {
  const [messages, setMessages] = useState<{ role: "user" | "ai", text: string, id: number }[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chatRef, { margin: "-30% 0px -30% 0px" });

  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInView) {
      let currentStep = 0;
      const playNext = () => {
        if (currentStep >= chatMessages.length) return;
        const nextMsg = chatMessages[currentStep];
        setMessages(prev => [...prev, { ...nextMsg, id: currentStep }]);
        currentStep++;
        timeout = setTimeout(playNext, nextMsg.role === "ai" ? 1800 : 1000);
      };
      timeout = setTimeout(playNext, 800);
    } else {
      setMessages([]);
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <section className="relative w-full px-2 md:px-4 pt-2 md:pt-4 bg-white">

      {/* Main Hero Wrapper with Rounded Background - Flex col to allow bottom anchoring */}
      <div className="relative w-full min-h-[120vh] md:min-h-[130vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 bg-white flex flex-col">

        {/* Background Video - Covers full height of this container */}
        <div className="absolute inset-0 z-0">
          <video
            key="hero-video-animated"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://ik.imagekit.io/o5vhmyokl/Untitled%20design%20(1).mp4?updatedAt=1778758796846" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-linear-to-b from-transparent to-white" />
        </div>

        {/* Floating Cubes around Hero Text - Relative to full hero wrapper */}
        <motion.div
          className="absolute top-[20%] left-[-5%] md:left-[5%] w-20 h-20 md:w-44 md:h-44 pointer-events-none opacity-20 md:opacity-30 z-0"
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
        </motion.div>
        <motion.div
          className="absolute top-[10%] right-[-5%] md:right-[5%] w-24 h-24 md:w-48 md:h-48 pointer-events-none opacity-20 md:opacity-30 z-0"
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain blur-[1px]" />
        </motion.div>

        {/* Content Layer - flex-1 stretches it to fill parent, flex-col allows mt-auto */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-24 md:pt-44 px-4 md:px-12 flex-1 flex flex-col items-center">

          {/* Text Content - Center on Mobile, Left on Desktop */}
          <div className="w-full flex flex-col items-center text-center mb-8 md:mb-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex items-center justify-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/50 border border-white backdrop-blur-md text-slate-800 text-[10px] md:text-[13px] font-bold shadow-sm whitespace-nowrap max-w-[95%] md:max-w-none"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#a906c9] shrink-0" />
              <span>DIGITAL AGENCY & CREATIVE STUDIO</span>
            </motion.div>

            {/* Headline */}
            <div className="max-w-4xl mb-6">
              <h1 className="text-[40px] md:text-[72px] font-medium leading-[1.1] tracking-tight text-[#000000] font-sans">
                We <span className="text-[#f016da]">Build</span>,{" "}
                <span className="text-[#1620f0]">Design</span> &amp;{" "}
                <span className="text-[#a906c9]">Deliver</span>{" "}
                Digital Excellence.
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#1C0C26CC] text-base md:text-[16px] max-w-xl mb-10 font-medium leading-relaxed"
            >
              From stunning websites and custom software to cinematic video production and bold brand identities — Softcr8ors turns your vision into a digital reality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-row flex-wrap justify-center gap-3 md:gap-4 w-full md:w-auto"
            >
              <RollingTextButton label="Get Started" variant="gradient" className="flex-1 md:flex-none px-3 md:px-10 text-[13px] md:text-base h-11 md:h-12" />
              <RollingTextButton label="Book a Demo" variant="transparent" className="flex-1 md:flex-none px-3 md:px-10 text-[13px] md:text-base h-11 md:h-12" />
            </motion.div>
          </div>

          {/* Chat Interface Container - mt-auto pushes it to the bottom */}
          <div id="chat-section" ref={chatRef} className="w-full relative flex justify-center mt-auto">

            {/* Main Glass Outer Card - Anchored to bottom, no bottom border/radius */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-[1400px] min-h-[780px] md:min-h-[604px] bg-white/20 backdrop-blur-xl border border-white/40 border-b-0 rounded-t-2xl md:rounded-t-[2.5rem] rounded-b-none pt-8 md:pt-[40px] px-0 md:px-[16px] pb-[30px] shadow-[0_-10px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden relative flex flex-col gap-6"
            >
              {/* 3D Decor Blocks */}
              <div className="absolute top-20 -left-10 w-32 h-32 bg-purple-200/10 blur-2xl rounded-full" />
              <div className="absolute bottom-20 -right-10 w-40 h-40 bg-pink-100/10 blur-2xl rounded-full" />
              <motion.div
                className="absolute top-[50%] left-[-4%] md:left-[2%] w-44 h-44 md:w-56 md:h-56 pointer-events-none opacity-80 z-0"
                animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/hero-block-1.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>
              <motion.div
                className="absolute top-[10%] right-[-5%] md:right-[-2%] w-48 h-48 md:w-60 md:h-60 pointer-events-none opacity-80 z-0"
                animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="/hero-block-2.avif" alt="3D Cube" className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>

              {/* Chat messages area */}
              <div className="relative z-10 w-[90%] md:w-full max-w-xl mx-auto">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-md px-4 md:px-6 pt-8 pb-4">
                  <div className="flex flex-col justify-end w-full h-[340px] md:h-[280px] transition-all duration-500">
                    <AnimatePresence mode="popLayout" initial={false}>
                      {messages.map((m, idx) => (
                        <ChatBubble
                          key={m.id}
                          message={m}
                          index={m.id}
                          className={cn(idx < messages.length - 4 ? "hidden md:flex" : "flex")}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Chat input area */}
              <div className="relative z-10 w-[90%] md:w-full max-w-xl mx-auto mt-2">
                <HeroAIPrompt />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Two-Line Continuous Marquee - Positioned separately below hero */}
      <div className="relative w-full overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 pointer-events-none z-20 select-none bg-white">
        <div className="flex flex-col gap-4 md:gap-8 -rotate-[2deg] scale-105">

          {/* Line 1 - Moving Left */}
          <div>
            <div className="animate-marquee hover:[animation-play-state:paused] flex whitespace-nowrap text-[6vw] md:text-[90px] font-bold uppercase tracking-tighter text-slate-950/20 leading-none font-sans pointer-events-auto cursor-default w-max" style={{ animationDuration: "60s" }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-row items-center">
                  {["Softcr8ors", "WEB DEVELOPMENT", "UI / UX DESIGN", "BRANDING"].map((word, idx) => (
                    <span key={idx} className="flex items-center group">
                      <span className={cn(
                        "transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1620f0] hover:via-[#f016da] hover:to-[#a906c9]",
                        idx % 2 === 1 && "text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#f016da] to-[#a906c9]"
                      )}>
                        {word}
                      </span>
                      <span className="px-6 md:px-10 text-slate-950/10">•</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Line 2 - Moving Right */}
          <div>
            <div className="animate-marquee-reverse hover:[animation-play-state:paused] flex whitespace-nowrap text-[6vw] md:text-[90px] font-bold uppercase tracking-tighter text-slate-950/10 leading-none font-sans pointer-events-auto cursor-default w-max" style={{ animationDuration: "60s" }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-row items-center">
                  {["VIDEO EDITING", "Softcr8ors", "SOFTWARE DEV", "CREATIVE STUDIO"].map((word, idx) => (
                    <span key={idx} className="flex items-center group">
                      <span className={cn(
                        "transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a906c9] hover:via-[#2f89f7] hover:to-[#1620f0]",
                        idx % 2 === 1 && "text-transparent bg-clip-text bg-gradient-to-r from-[#a906c9] via-[#2f89f7] to-[#1620f0]"
                      )}>
                        {word}
                      </span>
                      <span className="px-6 md:px-10 text-slate-950/10">•</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
