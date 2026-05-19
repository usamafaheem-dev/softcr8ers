import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  titleKey: "srv.it.title",
  descKey: "srv.it.desc",
  title: "IT & Tech Consulting",
  tagline: "End-to-end technology consulting to align your IT infrastructure with business goals.",
  description:
    "Ranking on Google isn't luck — it's engineering. We combine deep technical SEO audits with content strategy and link building to systematically move your site up the rankings. From Core Web Vitals to structured data, we fix what's holding you back and build what pushes you forward.",
  image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#a906c9] to-[#1620f0]",
  iconColor: "#a906c9",
  features: [
    "Technical SEO audit & roadmap",
    "Core Web Vitals optimization",
    "Structured data & schema markup",
    "XML sitemap & robots.txt optimization",
    "Crawl budget management",
    "International SEO & hreflang",
    "Keyword research & content strategy",
    "Backlink analysis & link building",
    "SEO-optimized content production",
  ],
  benefits: [
    {
      title: "Sustainable Organic Growth",
      desc: "Unlike paid ads, SEO compounds over time. The rankings we build for you keep delivering traffic for years.",
    },
    {
      title: "Technical Foundation First",
      desc: "Content won't rank if the technical foundation is broken. We fix crawlability, speed, and indexation before anything else.",
    },
    {
      title: "Transparent Reporting",
      desc: "Monthly reports showing exactly which keywords moved, how much traffic increased, and what we're doing next.",
    },
    {
      title: "Algorithm-Proof Strategy",
      desc: "We focus on what Google has always rewarded — quality, relevance, and authority — not tricks that get penalized.",
    },
  ],
  process: [
    { step: "01", title: "Technical Audit", desc: "Comprehensive crawl analysis identifying every technical issue affecting your rankings and indexation." },
    { step: "02", title: "Keyword & Competitor Research", desc: "Map the keyword landscape, identify gaps, and find the opportunities your competitors are missing." },
    { step: "03", title: "On-Page Optimization", desc: "Title tags, meta descriptions, heading structure, internal linking, and content optimization across priority pages." },
    { step: "04", title: "Content Strategy Execution", desc: "Topic cluster content production targeting high-intent keywords with proper E-E-A-T signals." },
    { step: "05", title: "Authority Building", desc: "Strategic link acquisition through digital PR, guest content, and partnership outreach." },
  ],
  cta: "Ready to own your search rankings?",
};

export default function TechnicalSEOPage() {
  return <ServiceDetailPage data={data} />;
}
