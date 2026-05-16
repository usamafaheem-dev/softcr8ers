import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "Gen AI Content",
  tagline: "LLM-powered creative scaling for global digital campaigns.",
  description:
    "Content at scale used to mean sacrificing quality. Not anymore. We build custom AI content pipelines that produce on-brand, high-quality content across every channel — blog posts, social copy, product descriptions, email sequences, and more — at a fraction of the traditional cost and time.",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
  color: "from-violet-500 to-fuchsia-500",
  iconColor: "#8b5cf6",
  features: [
    "Custom AI content pipeline development",
    "Brand voice training & fine-tuning",
    "Multi-format content generation",
    "SEO-optimized article production",
    "Social media content automation",
    "Product description generation at scale",
    "Email sequence & newsletter automation",
    "Multilingual content localization",
    "Human-in-the-loop review workflows",
  ],
  benefits: [
    {
      title: "10x Content Output",
      desc: "Produce a month's worth of content in a day without expanding your team — while maintaining consistent quality and brand voice.",
    },
    {
      title: "Always On-Brand",
      desc: "We train the AI on your brand guidelines, tone of voice, and past content so every output sounds like you.",
    },
    {
      title: "SEO-Native",
      desc: "Content pipelines built with keyword targeting, semantic relevance, and E-E-A-T signals baked in from the start.",
    },
    {
      title: "Human Quality Control",
      desc: "AI generates, humans approve. Our workflows include review checkpoints so nothing goes live without a quality gate.",
    },
  ],
  process: [
    { step: "01", title: "Brand Voice Analysis", desc: "We analyze your existing content to extract tone, style, vocabulary, and messaging patterns for AI training." },
    { step: "02", title: "Pipeline Architecture", desc: "Design the content workflow — from brief input to final output — including review stages and publishing integrations." },
    { step: "03", title: "Model Configuration", desc: "Fine-tune or prompt-engineer the LLM with your brand data, style guides, and content examples." },
    { step: "04", title: "Integration & Automation", desc: "Connect the pipeline to your CMS, social scheduler, or email platform for seamless publishing." },
    { step: "05", title: "Quality Iteration", desc: "Continuous refinement based on performance data — what content drives engagement, what needs adjustment." },
  ],
  cta: "Scale your content without scaling your team.",
};

export default function GenAIContentPage() {
  return <ServiceDetailPage data={data} />;
}
