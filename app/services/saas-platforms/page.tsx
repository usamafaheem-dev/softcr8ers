import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "SaaS Platforms",
  tagline: "End-to-end cloud infrastructure for subscription-based products.",
  description:
    "Building a SaaS product is more than writing features — it's architecting a business. We handle the full stack: multi-tenancy, billing, auth, usage metering, and the scalable infrastructure that lets you go from 10 to 10,000 customers without rewriting your codebase.",
  image: "https://ik.imagekit.io/o5vhmyokl/i_only_need_prouct_iamge_202605150828.png",
  color: "from-blue-400 to-indigo-600",
  iconColor: "#6366f1",
  features: [
    "Multi-tenant architecture design",
    "Stripe / Paddle billing integration",
    "Usage-based & seat-based pricing",
    "Customer onboarding flows",
    "Admin & super-admin dashboards",
    "Feature flags & plan gating",
    "Webhook infrastructure",
    "Usage analytics & metering",
    "SOC 2 / GDPR compliance foundations",
  ],
  benefits: [
    {
      title: "Launch Faster",
      desc: "Our SaaS boilerplate and proven architecture patterns cut your time-to-market by months, not weeks.",
    },
    {
      title: "Monetize Flexibly",
      desc: "We implement billing systems that support any pricing model — freemium, usage-based, tiered, or enterprise contracts.",
    },
    {
      title: "Tenant Isolation Done Right",
      desc: "Proper data isolation between customers from day one — no shortcuts that become security nightmares at scale.",
    },
    {
      title: "Investor-Ready Infrastructure",
      desc: "Architecture and compliance foundations that satisfy due diligence when you're ready to raise.",
    },
  ],
  process: [
    { step: "01", title: "Product & Pricing Architecture", desc: "Define your customer segments, pricing tiers, and the feature matrix before touching infrastructure." },
    { step: "02", title: "Infrastructure Setup", desc: "Cloud environment, CI/CD, monitoring, and security baseline established on AWS, GCP, or Vercel." },
    { step: "03", title: "Core Platform Development", desc: "Auth, billing, multi-tenancy, and onboarding built as the foundation before product features." },
    { step: "04", title: "Feature Development", desc: "Your product's unique value built on top of a solid, tested platform foundation." },
    { step: "05", title: "Growth Infrastructure", desc: "Analytics, A/B testing, referral systems, and the tooling you need to grow after launch." },
  ],
  cta: "Let's build your SaaS the right way.",
};

export default function SaaSPlatformsPage() {
  return <ServiceDetailPage data={data} />;
}
