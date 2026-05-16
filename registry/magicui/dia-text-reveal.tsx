
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DiaTextRevealProps {
  text: string;
  colors?: string[];
  className?: string;
}

export const DiaTextReveal = ({
  text,
  colors = ["#a855f7", "#6366f1", "#f43f5e", "#a855f7"],
  className,
}: DiaTextRevealProps) => {
  const words = text.split(" ");

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-3 gap-y-1", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            color: colors[i % colors.length]
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative inline-block"
        >
          {word}
          <motion.span
            className="absolute inset-0 blur-sm opacity-50"
            animate={{
              color: colors[(i + 1) % colors.length],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
};
