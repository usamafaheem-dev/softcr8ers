import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "seo",
  title: "SEO & Growth",
  tagline: "Technical SEO and content strategy that drives compounding organic growth.",
  description:
    "We combine deep technical SEO expertise with data-driven content strategy to build sustainable organic traffic. From Core Web Vitals optimization and structured data to keyword architecture and link building — we engineer search visibility that compounds over time.",
  image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#f016da] to-[#a906c9]",
  iconColor: "#f016da",
  features: [
    "Technical SEO audit & fixes",
    "Core Web Vitals optimization",
    "Keyword research & architecture",
    "On-page SEO optimization",
    "Structured data & schema markup",
    "Link building strategy",
    "Content strategy & planning",
    "Local SEO optimization",
    "SEO performance reporting",
  ],
  benefits: [
    {
      title: "Compounding Organic Traffic",
      desc: "Unlike paid ads that stop the moment you pause spend, SEO builds an asset that grows month over month and pays dividends long-term.",
    },
    {
      title: "Lower CAC Than Paid Ads",
      desc: "Organic traffic has no per-click cost. As rankings improve, your customer acquisition cost drops while volume increases.",
    },
    {
      title: "Authority & Trust Building",
      desc: "High rankings signal credibility to both search engines and users. We build the topical authority that makes your brand the go-to source.",
    },
    {
      title: "Measurable ROI",
      desc: "Every action we take is tracked. You see exactly which keywords are ranking, how traffic is converting, and what the revenue impact is.",
    },
  ],
  process: [
    { step: "01", title: "SEO Audit & Baseline", desc: "A full technical and content audit to identify what's holding your site back — crawl issues, indexation problems, and missed opportunities." },
    { step: "02", title: "Keyword & Competitor Research", desc: "We map the keyword landscape, identify high-value targets, and analyze what your top competitors are doing to outrank them." },
    { step: "03", title: "Technical Fixes & On-Page", desc: "We fix the technical foundation — site speed, Core Web Vitals, structured data, internal linking — and optimize every key page." },
    { step: "04", title: "Content & Link Strategy", desc: "A content calendar targeting your priority keywords, paired with a link building strategy to build domain authority over time." },
    { step: "05", title: "Monthly Reporting & Iteration", desc: "Clear monthly reports showing ranking movements, traffic growth, and conversion impact — with strategy adjustments based on real data." },
  ],
  cta: "Start ranking where your customers are searching.",
};

export default function SeoPage() {
  return <ServiceDetailPage data={data} />;
}
