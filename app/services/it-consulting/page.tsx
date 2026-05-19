import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "it-consulting",
  titleKey: "srv.it.title",
  descKey: "srv.it.desc",
  title: "IT & Tech Consulting",
  tagline: "Aligning your technological infrastructure with global business goals.",
  description:
    "Technology should accelerate your growth, not hold you back. We provide comprehensive IT and technology consulting to audit your current stack, architect cloud infrastructure, plan digital transformations, and establish secure frameworks. We ensure your systems are scalable, secure, and cost-efficient.",
  image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#a906c9] to-[#1620f0]",
  iconColor: "#a906c9",
  features: [
    "Infrastructure & software audit",
    "Cloud migration strategy (AWS/GCP)",
    "IT security & compliance framework",
    "Tech stack modernization roadmap",
    "Cost optimization & resource planning",
    "Disaster recovery & backup strategy"
  ],
  benefits: [
    {
      title: "Eliminate Tech Debt",
      desc: "We identify legacy bottlenecks and replace outdated codebases with modern, maintainable frameworks.",
    },
    {
      title: "Massive Infrastructure Savings",
      desc: "Optimizing cloud resource allocation typically reduces server and service bills by 20–50%.",
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Bulletproof data protection schemes, compliance architectures, and vulnerability planning.",
    },
    {
      title: "Future-Ready Architecture",
      desc: "Scale systems naturally without crashing during high-traffic enterprise events.",
    },
  ],
  process: [
    { step: "01", title: "System Audit", desc: "We analyze your current codebases, hosting environments, and IT workflows to find gaps." },
    { step: "02", title: "Strategy Formulation", desc: "Developing a tailored digital transformation plan with clear timelines and budgets." },
    { step: "03", title: "Architecture Design", desc: "Designing secure, cost-optimized cloud layouts and software communication pipelines." },
    { step: "04", title: "Implementation Support", desc: "Guiding your internal engineering team or executing the migration with zero downtime." },
    { step: "05", title: "Monitoring & Review", desc: "Establishing server monitoring dashboards and regular review checkpoints." },
  ],
  cta: "Let's build a technology roadmap for your future.",
};

export default function ITConsultingPage() {
  return <ServiceDetailPage data={data} />;
}

