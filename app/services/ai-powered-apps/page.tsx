import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "ai-powered-apps",
  title: "AI Powered Applications",
  tagline: "Intelligent software that learns, adapts, and automates your business.",
  description:
    "We build custom AI-powered applications that go beyond simple automation. From LLM-integrated tools and RAG pipelines to computer vision and predictive analytics, we engineer intelligent systems that give your business a real competitive edge.",
  image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#a906c9] to-[#1620f0]",
  iconColor: "#a906c9",
  features: [
    "LLM & GPT-4 integration",
    "RAG pipeline development",
    "AI chatbots & virtual agents",
    "Computer vision systems",
    "Predictive analytics & ML models",
    "Workflow automation with AI",
    "Natural language processing",
    "AI-powered search & recommendations",
    "Custom model fine-tuning",
  ],
  benefits: [
    {
      title: "Real Competitive Advantage",
      desc: "AI capabilities that are custom-built for your workflows give you an edge competitors can't easily replicate with off-the-shelf tools.",
    },
    {
      title: "Massive Automation Savings",
      desc: "Automate repetitive, time-consuming tasks and redeploy your team's energy toward high-value work that actually moves the needle.",
    },
    {
      title: "24/7 Intelligent Operation",
      desc: "AI systems don't sleep. Your business processes, customer interactions, and data pipelines run continuously without manual intervention.",
    },
    {
      title: "Data-Driven Decisions",
      desc: "Turn raw data into actionable intelligence with predictive models and analytics that surface insights humans would miss.",
    },
  ],
  process: [
    { step: "01", title: "AI Strategy & Use Case Definition", desc: "We identify the highest-impact AI opportunities in your business and define clear, measurable goals before any development begins." },
    { step: "02", title: "Data Audit & Preparation", desc: "We assess your existing data assets, identify gaps, and build the pipelines needed to feed your AI systems clean, structured data." },
    { step: "03", title: "Model Selection & Architecture", desc: "We choose the right models and frameworks — whether fine-tuned LLMs, custom ML models, or third-party APIs — for your specific use case." },
    { step: "04", title: "Development & Integration", desc: "We build and integrate the AI system into your existing stack, with robust APIs, fallback handling, and full observability." },
    { step: "05", title: "Monitoring & Continuous Learning", desc: "Post-launch, we monitor model performance, track drift, and iterate to keep your AI system accurate and improving over time." },
  ],
  cta: "Ready to make your business AI-powered?",
};

export default function AIPoweredAppsPage() {
  return <ServiceDetailPage data={data} />;
}
