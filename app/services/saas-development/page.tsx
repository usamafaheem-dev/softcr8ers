import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "saas-development",
  title: "SaaS Development",
  tagline: "Multi-tenant cloud platforms engineered for scale and recurring revenue.",
  description:
    "We architect and build production-ready SaaS platforms from the ground up. Multi-tenant architecture, subscription billing, role-based access, and the infrastructure to support thousands of concurrent users — all engineered for reliability and rapid feature iteration.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#1620f0] to-[#f016da]",
  iconColor: "#1620f0",
  features: [
    "Multi-tenant architecture",
    "Stripe subscription billing",
    "Role-based access control",
    "Admin dashboard & analytics",
    "API-first design",
    "White-label capabilities",
    "Usage metering & limits",
    "Onboarding & user management",
    "99.9% uptime SLA architecture",
  ],
  benefits: [
    {
      title: "Recurring Revenue Model",
      desc: "We build the billing infrastructure — subscription tiers, trials, upgrades, and invoicing — so you can focus on growing MRR from day one.",
    },
    {
      title: "Scales With Your Growth",
      desc: "Multi-tenant architecture and cloud-native infrastructure mean your platform handles 10 users or 10,000 without a rewrite.",
    },
    {
      title: "Fast Feature Iteration",
      desc: "Clean, modular codebases and CI/CD pipelines let you ship new features weekly without breaking what's already working.",
    },
    {
      title: "Enterprise Ready",
      desc: "SSO, audit logs, role-based permissions, and white-label options make your SaaS attractive to enterprise buyers from the start.",
    },
  ],
  process: [
    { step: "01", title: "Product Architecture", desc: "We define your data model, tenant isolation strategy, and system architecture to ensure the foundation supports your long-term roadmap." },
    { step: "02", title: "Tenant & Auth System", desc: "Multi-tenant data isolation, SSO integration, role-based access control, and secure session management built from the ground up." },
    { step: "03", title: "Core Feature Development", desc: "Iterative sprints delivering your core product features with working demos, feedback loops, and production-quality code." },
    { step: "04", title: "Billing & Subscription Setup", desc: "Stripe integration with subscription plans, trial periods, usage-based billing, and a self-serve upgrade/downgrade flow." },
    { step: "05", title: "Launch & Growth Infrastructure", desc: "Zero-downtime deployments, monitoring, alerting, and the analytics dashboards you need to understand and grow your user base." },
  ],
  cta: "Let's build your SaaS product the right way.",
};

export default function SaasDevelopmentPage() {
  return <ServiceDetailPage data={data} />;
}
