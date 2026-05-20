import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "ai-content-writing",
  title: "AI Content Writing",
  tagline: "High-quality, SEO-optimized content produced at scale with AI precision.",
  description:
    "We combine AI efficiency with expert human editing to produce content that ranks, converts, and sounds authentically human. From blog posts and landing page copy to product descriptions and email sequences — we deliver content at scale without sacrificing quality.",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#a906c9] to-[#f016da]",
  iconColor: "#a906c9",
  features: [
    "SEO blog posts & articles",
    "Landing page copywriting",
    "Product descriptions at scale",
    "Email marketing sequences",
    "Social media content",
    "AI-assisted research & outlines",
    "Brand voice consistency",
    "Multilingual content",
    "Content calendar planning",
  ],
  benefits: [
    {
      title: "10x Content Output",
      desc: "AI-assisted workflows let us produce in days what would take a traditional agency weeks — without the bloated retainer fees.",
    },
    {
      title: "SEO-Optimized From Day One",
      desc: "Every piece is built around target keywords, proper heading structure, and search intent — so content ranks, not just reads well.",
    },
    {
      title: "Consistent Brand Voice",
      desc: "We build a brand voice guide upfront and apply it across every piece, so your content sounds like you — at any volume.",
    },
    {
      title: "Fraction of Agency Cost",
      desc: "Get the output of a full content team at a fraction of the cost. AI handles the heavy lifting; our editors ensure the quality.",
    },
  ],
  process: [
    { step: "01", title: "Brand Voice & Tone Setup", desc: "We document your brand voice, tone guidelines, and style preferences so every piece of content is unmistakably yours." },
    { step: "02", title: "Keyword & Topic Research", desc: "We identify the topics and keywords your audience is searching for and build a content strategy around real search demand." },
    { step: "03", title: "AI-Assisted Draft Creation", desc: "Our AI workflows generate structured, research-backed drafts at speed — covering your content calendar without bottlenecks." },
    { step: "04", title: "Expert Human Editing & QA", desc: "Every draft is reviewed and refined by experienced editors who check for accuracy, tone, SEO alignment, and readability." },
    { step: "05", title: "Publishing & Performance Tracking", desc: "We handle publishing, track rankings and engagement, and use performance data to continuously improve the content strategy." },
  ],
  cta: "Scale your content without scaling your team.",
};

export default function AiContentWritingPage() {
  return <ServiceDetailPage data={data} />;
}
