import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "branding-identity",
  titleKey: "srv.branding.title",
  descKey: "srv.branding.desc",
  title: "Branding & Identity",
  tagline: "Strategic brand systems designed to establish authority and trust.",
  description:
    "Your brand is your handshake, your reputation, and your promise. We engineer complete corporate brand identities from the ground up. We don't just sketch logos; we build strategic visual and conceptual frameworks — including typography, voice guidelines, and logo assets — that project ultimate professionalism.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#1620f0] to-[#f016da]",
  iconColor: "#1620f0",
  features: [
    "Corporate logo suite & typography",
    "Brand voice, tone & copy guidelines",
    "Complete color systems & brand tokens",
    "Brand style guide documentation",
    "Stationery & corporate collateral design",
    "Brand relaunch strategy"
  ],
  benefits: [
    {
      title: "Instant Customer Trust",
      desc: "A polished, consistent brand immediately projects established authority and reliability.",
    },
    {
      title: "Premium Pricing Power",
      desc: "Strong, well-designed brands can charge premium rates because they look and feel premium.",
    },
    {
      title: "Employee Alignment",
      desc: "Clear brand guidelines ensure your entire organization communicates cohesively.",
    },
    {
      title: "Future-Proof Foundation",
      desc: "A scalable brand identity that stays relevant as your service catalog and audience grow.",
    },
  ],
  process: [
    { step: "01", title: "Brand Discovery", desc: "We audit your market positioning, research competitors, and define your core brand values." },
    { step: "02", title: "Logo & Style Concepts", desc: "Multiple unique visual directions, logo marks, and color pairings presented for review." },
    { step: "03", title: "Identity Refinement", desc: "Polishing the chosen concept into a complete visual system with typography and tokens." },
    { step: "04", title: "Style Guide Creation", desc: "Compiling the official Brand Book documenting logo placement, colors, and typography." },
    { step: "05", title: "Asset Packaging", desc: "Organizing all digital and print files into a clean, searchable brand kit." },
  ],
  cta: "Let's build a brand that stands the test of time.",
};

export default function BrandingIdentityPage() {
  return <ServiceDetailPage data={data} />;
}

