import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "UI/UX Design",
  tagline: "Psychology-driven visual interfaces designed for maximum engagement.",
  description:
    "Great design isn't decoration — it's strategy. We combine behavioral psychology, conversion principles, and visual craft to create interfaces that guide users effortlessly toward their goals. Every pixel is intentional, every interaction is tested, and every design decision is backed by data.",
  image: "https://ik.imagekit.io/o5vhmyokl/ui.png",
  color: "from-pink-500 to-orange-400",
  iconColor: "#ec4899",
  features: [
    "User research & persona development",
    "Information architecture & user flows",
    "Wireframing & low-fidelity prototyping",
    "High-fidelity UI design in Figma",
    "Interactive prototypes & micro-animations",
    "Design system & component library",
    "Usability testing & iteration",
    "Accessibility (WCAG 2.1) compliance",
    "Handoff-ready developer specs",
  ],
  benefits: [
    {
      title: "Conversion-Optimized",
      desc: "Every design decision is made with your conversion goals in mind — from CTA placement to form friction reduction.",
    },
    {
      title: "Consistent at Scale",
      desc: "A proper design system means your product looks and feels cohesive whether you have 10 screens or 100.",
    },
    {
      title: "Reduced Development Cost",
      desc: "Pixel-perfect specs and interactive prototypes mean developers spend less time guessing and more time building.",
    },
    {
      title: "User-Validated",
      desc: "We test designs with real users before handoff — catching usability issues before they become expensive code changes.",
    },
  ],
  process: [
    { step: "01", title: "Research & Discovery", desc: "User interviews, competitor analysis, and heuristic evaluation to understand the problem space deeply." },
    { step: "02", title: "Information Architecture", desc: "Sitemap, user flows, and content hierarchy defined before any visual design begins." },
    { step: "03", title: "Wireframing", desc: "Low-fidelity wireframes validated with stakeholders to align on structure and functionality." },
    { step: "04", title: "Visual Design", desc: "High-fidelity designs with your brand identity, motion design, and responsive layouts across all breakpoints." },
    { step: "05", title: "Prototype & Test", desc: "Interactive Figma prototypes tested with real users, iterated until the experience is frictionless." },
  ],
  cta: "Your product deserves design that converts.",
};

export default function UIUXDesignPage() {
  return <ServiceDetailPage data={data} />;
}
