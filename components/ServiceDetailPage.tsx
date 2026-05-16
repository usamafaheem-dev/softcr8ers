"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import Link from "next/link";

export interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  image: string;
  color: string; // gradient class e.g. "from-blue-500 to-cyan-400"
  iconColor: string; // solid color for icons e.g. "#3b82f6"
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  cta: string;
}

export function ServiceDetailPage({ data }: { data: ServiceData }) {
  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* Soft background tint */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b ${data.color} opacity-[0.07] blur-[120px] pointer-events-none`} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#a855f7] font-bold animate-spin">✱</span>
            <span className="text-xs font-black tracking-[0.5em] uppercase text-slate-400">
              Our Services
            </span>
            <span className="text-[#f43f5e] font-bold animate-spin">✱</span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            {data.tagline}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mt-14 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[300px] md:h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed text-center"
        >
          {data.description}
        </motion.p>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">What We Deliver</h2>
          <p className="text-slate-400 text-base">Core capabilities included in every engagement</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all"
            >
              <CheckCircle2
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: data.iconColor }}
              />
              <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Why Choose Us</h2>
          <p className="text-slate-400 text-base">The advantages that set our work apart</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md hover:bg-white transition-all group"
            >
              <div
                className={`text-4xl font-black bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-3`}
              >
                0{i + 1}
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Our Process</h2>
          <p className="text-slate-400 text-base">How we take your idea from concept to launch</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="flex flex-col gap-8">
            {data.process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${data.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {p.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-900 font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">{data.cta}</h2>
          <p className="text-slate-400 mb-10 text-base">Let's build something extraordinary together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-base shadow-lg transition-all hover:scale-105 active:scale-95 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899, #a855f7)" }}
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <CinematicFooter />
    </main>
  );
}
