"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
}

const defaultPost = {
  title: "Future of UI Design",
  excerpt: "Exploring glassmorphism, 3D visual structures, and next-gen micro-interactions.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author: {
    name: "Moumen Soliman",
    avatar: "https://github.com/shadcn.png",
  },
  date: "Dec 2, 2025",
  readTime: "5 min",
  tags: ["Design", "UI/UX"],
};

export function GlassBlogCard({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readTime = defaultPost.readTime,
  tags = defaultPost.tags,
  className,
}: GlassBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("w-full max-w-[360px]", className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-slate-200/60 bg-white/50 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5">
        
        {/* Subtle light purple top ambient glow */}
        <div className="absolute right-0 top-0 w-24 h-24 bg-purple-500/5 blur-xl rounded-full pointer-events-none" />

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-80" />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {tags?.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                className="bg-white/70 backdrop-blur-md border border-slate-200/50 text-slate-700 text-[10px] font-bold py-0.5 px-2 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Hover Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-black transition-colors border border-white/20"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Read Article
            </motion.button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-3.5 p-4.5">
          <div className="space-y-1">
            <h3 className="text-[17px] font-bold leading-snug text-slate-800 transition-colors group-hover:text-purple-600">
              {title}
            </h3>
            <p className="line-clamp-2 text-[12.5px] leading-relaxed text-slate-500 font-medium">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
            <div className="flex items-center gap-2">
              <Avatar className="h-7.5 w-7.5 border border-slate-200/60 shadow-xs">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="bg-slate-100 text-[10px] font-bold text-slate-600">{author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-[11px] leading-tight">
                <span className="font-bold text-slate-700">
                  {author.name}
                </span>
                <span className="text-slate-400 font-medium">{date}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-bold">
              <Clock className="h-3 w-3 text-purple-500" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
