"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function JoinPage() {
  const { t } = useTranslation();
  const currentOpenings = [
    {
      id: 1,
      title: "Senior Next.js Developer",
      department: "Engineering",
      location: "Lahore, Pakistan (Hybrid)",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "Python AI & Machine Learning Engineer",
      department: "AI/Data",
      location: "Remote",
      type: "Full-Time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Lahore, Pakistan (On-site)",
      type: "Full-Time",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 font-['General_Sans',sans-serif]">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Softcr8ors Team"
            className="w-full h-full object-cover"
          />
          {/* Deep Purple/Blue Gradient Overlay matching Contact Page */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d2e]/95 via-[#1a0f3d]/90 to-[#250d3a]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 text-center space-y-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#f016da] animate-pulse" />
            {t("join.hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            {t("join.hero.title.p1")} <br className="hidden md:block" />
            {t("join.hero.title.p2")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da]">Softcr8ors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {t("join.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* ── OPEN ROLES SECTION ── */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("join.roles.title")}</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            {t("join.roles.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all group flex flex-col h-full"
            >
              <div className="mb-6 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium uppercase tracking-wider mb-4">
                  {job.department}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#a906c9] transition-colors">{job.title}</h3>
                
                <div className="space-y-2 text-slate-500 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-4">
                {t("join.roles.btn")} <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM SECTION ── */}
      <section className="w-full bg-[#080B4E] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1620f0]/20 to-[#a906c9]/10" />
        
        <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <Briefcase className="w-12 h-12 text-[#f016da] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("join.form.title")}</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            {t("join.form.desc")}
          </p>

          <form className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/70 ml-1">{t("join.form.name")}</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#a906c9] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/70 ml-1">{t("join.form.email")}</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#a906c9] transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/70 ml-1">{t("join.form.portfolio")}</label>
              <input type="url" placeholder="https://" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#a906c9] transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/70 ml-1">{t("join.form.resume")}</label>
              <div className="w-full px-4 py-6 border-2 border-dashed border-white/20 rounded-xl text-center hover:border-white/40 transition-colors cursor-pointer bg-white/5">
                <span className="text-white/50 text-sm">{t("join.form.upload")}</span>
              </div>
            </div>

            <button type="button" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1620f0] via-[#a906c9] to-[#f016da] text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all mt-4">
              {t("join.form.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#050101] text-white py-12 px-6 border-t border-white/10 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
          <span className="text-[#f016da]">Soft</span>cr<span className="text-[#a906c9]">8</span>ors
        </h3>
        <p className="text-white/40 text-xs text-center uppercase tracking-widest">
          © {new Date().getFullYear()} Softcr8ors. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
