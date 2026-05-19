import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "web-engineering",
  titleKey: "srv.web.title",
  descKey: "srv.web.desc",
  title: "Web Engineering",
  tagline: "Architecting high-performance digital ecosystems with cutting-edge tech stacks.",
  description:
    "We build blazing-fast, scalable web applications that don't just look great — they perform under pressure. From complex SPA architectures to server-rendered platforms, our engineers craft every layer of the stack with precision, security, and long-term maintainability in mind.",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#1620f0] to-[#a906c9]",
  iconColor: "#1620f0",
  features: [
    "Next.js & React architecture",
    "Node.js / Go / Python backends",
    "REST & GraphQL API design",
    "PostgreSQL, MongoDB, Redis",
    "CI/CD pipelines & DevOps",
    "Performance optimization & Core Web Vitals",
    "Authentication & authorization systems",
    "Real-time features with WebSockets",
    "Microservices & monorepo setups",
  ],
  benefits: [
    {
      title: "Speed Without Compromise",
      desc: "We optimize every millisecond — from server response times to client-side rendering, your users get instant experiences.",
    },
    {
      title: "Built to Scale",
      desc: "Architecture decisions made today won't bottleneck you tomorrow. We design for 10x growth from day one.",
    },
    {
      title: "Security First",
      desc: "OWASP best practices, input validation, secure auth flows, and regular audits baked into every project.",
    },
    {
      title: "Full Ownership",
      desc: "Clean, documented code that your team can own, extend, and maintain without vendor lock-in.",
    },
  ],
  process: [
    { step: "01", title: "Discovery & Architecture", desc: "We map your requirements, define the tech stack, and design the system architecture before writing a single line of code." },
    { step: "02", title: "Design System Setup", desc: "Component libraries, design tokens, and responsive layouts established for consistent UI across the entire product." },
    { step: "03", title: "Iterative Development", desc: "Two-week sprints with working demos. You see progress, give feedback, and we adapt fast." },
    { step: "04", title: "QA & Performance Audit", desc: "Automated testing, load testing, and Lighthouse audits before any release." },
    { step: "05", title: "Launch & Monitoring", desc: "Zero-downtime deployments with real-time error tracking and performance monitoring post-launch." },
  ],
  cta: "Ready to build your next web product?",
};

export default function WebEngineeringPage() {
  return <ServiceDetailPage data={data} />;
}
