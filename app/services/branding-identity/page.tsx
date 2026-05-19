import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  titleKey: "srv.branding.title",
  descKey: "srv.branding.desc",
  title: "Branding & Identity",
  tagline: "Strategic brand identities that communicate your vision and create lasting impressions.",
  description:
    "Building a SaaS product is more than writing features — it's architecting a business. We handle the full stack: multi-tenancy, billing, auth, usage metering, and the scalable infrastructure that lets you go from 10 to 10,000 customers without rewriting your codebase.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#1620f0] to-[#f016da]",
  iconColor: "#1620f0",
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
