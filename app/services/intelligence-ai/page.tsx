import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "Intelligence & AI",
  tagline: "Neural networks and autonomous systems for modern business workflows.",
  description:
    "We integrate cutting-edge AI into your products — from custom LLM pipelines and RAG systems to computer vision and predictive analytics. Our AI engineers don't just plug in APIs; they architect intelligent systems that learn, adapt, and deliver measurable business outcomes.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  color: "from-purple-500 to-pink-500",
  iconColor: "#a855f7",
  features: [
    "Custom LLM fine-tuning & deployment",
    "RAG (Retrieval-Augmented Generation) pipelines",
    "AI agent & multi-agent orchestration",
    "Computer vision & image recognition",
    "Predictive analytics & ML models",
    "Natural language processing (NLP)",
    "AI-powered search & recommendations",
    "OpenAI, Anthropic, Gemini integrations",
    "Vector databases (Pinecone, Weaviate)",
  ],
  benefits: [
    {
      title: "Production-Ready AI",
      desc: "We don't build demos. Every AI system we deliver is optimized for latency, cost, and reliability at production scale.",
    },
    {
      title: "Domain-Specific Training",
      desc: "Generic models give generic results. We fine-tune and prompt-engineer for your specific industry and use case.",
    },
    {
      title: "Explainable Outputs",
      desc: "We build AI systems with transparency — so you understand why the model made a decision, not just what it decided.",
    },
    {
      title: "Cost-Optimized Inference",
      desc: "Smart model routing, caching, and batching strategies that cut AI inference costs by up to 70%.",
    },
  ],
  process: [
    { step: "01", title: "Use Case Definition", desc: "We identify the highest-ROI AI opportunities in your workflow and define clear success metrics." },
    { step: "02", title: "Data Assessment", desc: "Audit your existing data, identify gaps, and design the data pipeline needed to train or fine-tune models." },
    { step: "03", title: "Model Selection & Prototyping", desc: "Rapid prototyping with multiple model approaches to find the best fit before full development." },
    { step: "04", title: "Integration & Testing", desc: "Seamless integration into your existing systems with rigorous accuracy and edge-case testing." },
    { step: "05", title: "Monitoring & Iteration", desc: "Continuous model performance monitoring with feedback loops to improve accuracy over time." },
  ],
  cta: "Let's make your product intelligent.",
};

export default function IntelligenceAIPage() {
  return <ServiceDetailPage data={data} />;
}
