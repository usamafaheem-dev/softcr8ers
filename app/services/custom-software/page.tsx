import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "Custom Software",
  tagline: "Tailored enterprise solutions engineered for scalability and growth.",
  description:
    "Off-the-shelf software forces your business to adapt to the tool. We flip that equation — building software that adapts to your exact workflows, integrations, and scale requirements. From internal tools to full enterprise platforms, we engineer solutions that become your competitive advantage.",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  color: "from-emerald-500 to-teal-400",
  iconColor: "#10b981",
  features: [
    "Enterprise resource planning (ERP) systems",
    "Custom CRM & workflow automation",
    "Internal tooling & admin dashboards",
    "Third-party API & legacy system integration",
    "Multi-tenant SaaS architecture",
    "Role-based access control (RBAC)",
    "Audit logs & compliance features",
    "Automated reporting & analytics",
    "White-label product development",
  ],
  benefits: [
    {
      title: "Fits Your Workflow Exactly",
      desc: "No workarounds, no unused features. Every screen and flow is designed around how your team actually works.",
    },
    {
      title: "Integrates With Everything",
      desc: "We connect your new software to your existing stack — CRMs, ERPs, payment gateways, and legacy systems.",
    },
    {
      title: "Grows With You",
      desc: "Modular architecture means you can add features, users, and data volume without rebuilding from scratch.",
    },
    {
      title: "Reduces Operational Cost",
      desc: "Automating manual processes typically saves our clients 15–40% in operational overhead within the first year.",
    },
  ],
  process: [
    { step: "01", title: "Business Process Mapping", desc: "We document your current workflows, pain points, and goals to define exactly what needs to be built." },
    { step: "02", title: "Technical Specification", desc: "Detailed specs covering data models, integrations, user roles, and edge cases — agreed before development starts." },
    { step: "03", title: "Agile Development", desc: "Modular development with regular demos so you can validate each piece before we build the next." },
    { step: "04", title: "User Acceptance Testing", desc: "Your team tests the software against real workflows before we sign off on any milestone." },
    { step: "05", title: "Training & Handover", desc: "Full documentation, admin training, and a smooth handover so your team is self-sufficient from day one." },
  ],
  cta: "Time to replace that spreadsheet with something real.",
};

export default function CustomSoftwarePage() {
  return <ServiceDetailPage data={data} />;
}
