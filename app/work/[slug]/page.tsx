"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Simple formatting of the slug
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-white selection:bg-[#a906c9]/30 selection:text-[#1620f0] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[140px] md:pt-[180px] pb-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1620f0] transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1620f0]/10 to-[#f016da]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#a906c9]" />
            </div>
            <span className="text-[#1620f0] font-semibold tracking-wide uppercase text-sm">
              Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12">
            Detailed case study for the {title} project is currently being compiled by our team. Check back soon for an in-depth look at our process, solution, and the impact delivered.
          </p>

          <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] bg-slate-100 border border-slate-200 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1620f0]/5 via-[#a906c9]/5 to-[#f016da]/5" />
            
            <div className="text-center relative z-10 px-6">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500">
                <Sparkles className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-slate-500">We're finalizing the details for this project.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <CinematicFooter />
    </div>
  );
}
