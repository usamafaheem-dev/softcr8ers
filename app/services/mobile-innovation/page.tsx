import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  title: "Mobile Innovation",
  tagline: "High-fidelity native experiences across iOS and Android.",
  description:
    "Mobile is where your users live. We build apps that feel native, perform flawlessly, and keep users coming back. Whether it's a consumer app targeting millions or an enterprise tool for your field team, we deliver polished mobile experiences that stand out in a crowded market.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
  color: "from-orange-500 to-rose-500",
  iconColor: "#f97316",
  features: [
    "React Native cross-platform development",
    "Native iOS (Swift) development",
    "Native Android (Kotlin) development",
    "Offline-first architecture",
    "Push notifications & deep linking",
    "In-app purchases & subscriptions",
    "Biometric authentication",
    "App Store & Play Store optimization",
    "OTA updates with Expo EAS",
  ],
  benefits: [
    {
      title: "One Codebase, Two Platforms",
      desc: "React Native lets us ship to iOS and Android simultaneously — cutting development time and cost without sacrificing quality.",
    },
    {
      title: "Native Performance",
      desc: "We use native modules where it matters — animations, camera, sensors — so your app feels indistinguishable from a fully native build.",
    },
    {
      title: "App Store Ready",
      desc: "We handle the full submission process, metadata optimization, and compliance requirements for both stores.",
    },
    {
      title: "Retention-Focused Design",
      desc: "Every interaction is designed to reduce friction and increase engagement — from onboarding to daily active use.",
    },
  ],
  process: [
    { step: "01", title: "Platform Strategy", desc: "Define target platforms, minimum OS versions, and the right tech stack based on your user base and feature requirements." },
    { step: "02", title: "UX Prototyping", desc: "Interactive prototypes tested with real users before any code is written — saving costly rework later." },
    { step: "03", title: "Sprint-Based Development", desc: "Feature-by-feature delivery with TestFlight / internal track builds so you can test on real devices throughout." },
    { step: "04", title: "Performance & Device Testing", desc: "Testing across 20+ device/OS combinations to catch edge cases before your users do." },
    { step: "05", title: "Launch & Growth", desc: "App store submission, ASO optimization, and post-launch analytics setup to track what matters." },
  ],
  cta: "Your app idea deserves a world-class build.",
};

export default function MobileInnovationPage() {
  return <ServiceDetailPage data={data} />;
}
