"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const services = [
  {
    id: 1, title: "Web Development", slug: "web-engineering",
    description: "Blazing-fast, pixel-perfect websites built for conversion, performance, and scale.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2, title: "Software Development", slug: "custom-software",
    description: "Scalable custom software solutions engineered to solve your unique business challenges.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3, title: "UI/UX Design", slug: "ui-ux-design",
    description: "User-first interfaces crafted with precision — beautiful, intuitive, and delightful to use.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4, title: "Video & Audio Production", slug: "gen-ai-content",
    description: "Cinematic brand videos, social reels, and audio production that captivate your audience.",
    image: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5, title: "Creative Digital Solutions", slug: "intelligence-ai",
    description: "Innovative campaigns, motion graphics, and interactive content that stand out in the noise.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6, title: "Branding & Identity", slug: "saas-platforms",
    description: "Strategic brand identities that communicate your vision and create lasting impressions.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7, title: "Mobile App Development", slug: "mobile-innovation",
    description: "High-performance iOS and Android apps that delight users and drive engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8, title: "IT & Tech Consulting", slug: "technical-seo",
    description: "End-to-end technology consulting to align your IT infrastructure with business goals.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
  },
];

const cardItems: CardStackItem[] = services.map((s) => ({
  id: s.id,
  title: s.title,
  description: s.description,
  imageSrc: s.image,
  href: `/services/${s.slug}`,
}));

export function ServicesSection() {
  const router = useRouter();

  return (
    <section
      id="services"
      className="relative bg-[#080810] py-16 md:py-28 px-4 overflow-hidden font-sans"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center w-full mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
              <span className="text-[#2f89f7] animate-spin font-bold" style={{ willChange: "transform" }}>✱</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-slate-300 ml-1">
                OUR SERVICES
              </span>
              <span className="text-[#f016da] animate-spin font-bold ml-1" style={{ willChange: "transform" }}>✱</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight font-['General_Sans',sans-serif]"
          >
            Everything Your{" "}
            <span className="text-[#a906c9]">
              Brand Needs
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto font-normal font-['General_Sans',sans-serif]"
          >
            From code to camera, strategy to screens — we deliver every service your business needs to dominate digitally.
          </motion.p>
        </div>

        {/* ── DESKTOP: 3D Carousel ── */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <CardStack
            items={cardItems}
            cardWidth={290}
            cardHeight={420}
            autoAdvance={true}
            intervalMs={2800}
          />
        </motion.div>

        {/* ── MOBILE: Simple Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() => router.push(`/services/${service.slug}`)}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/40 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-base mb-1.5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[#a906c9] text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: "inset 0 0 40px rgba(168,85,247,0.08)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
