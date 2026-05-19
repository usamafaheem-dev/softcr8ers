import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "creative-solutions",
  titleKey: "srv.creative.title",
  descKey: "srv.creative.desc",
  title: "Creative Digital Solutions",
  tagline: "High-impact campaigns, graphic design, and custom digital media.",
  description:
    "Break through the noise with bold, creative assets. We design custom digital solutions — including high-fidelity graphic design, modern typography, custom illustrations, and interactive graphics — that establish your brand as a modern industry leader. We turn standard marketing into an interactive visual experience.",
  image: "https://images.unsplash.com/photo-1531297172867-bb40211726ee?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#a906c9] to-[#f016da]",
  iconColor: "#a906c9",
  features: [
    "Custom vector illustration & graphics",
    "Interactive web & app media assets",
    "High-fidelity pitch decks & collateral",
    "Motion graphics & animated elements",
    "Social media kit & templates",
    "Packaging & physical brand design"
  ],
  benefits: [
    {
      title: "Distinct Market Presence",
      desc: "Bespoke creative design establishes a unique visual authority that template-based designs can't match.",
    },
    {
      title: "Interactive Engagement",
      desc: "Custom animations and interactive graphics make your site or app feel alive and premium.",
    },
    {
      title: "Unified Brand Assets",
      desc: "Every illustration, slide, and graphic conforms perfectly to your corporate design system.",
    },
    {
      title: "Persuasive Presentation",
      desc: "Pitch decks and sales collaterals designed to tell a clear, compelling story that closes deals.",
    },
  ],
  process: [
    { step: "01", title: "Creative Brief", desc: "We align on your visual goals, target audience sentiment, and brand design guidelines." },
    { step: "02", title: "Visual Direction", desc: "Mood boards and concept sketches to establish the creative style before final production." },
    { step: "03", title: "Asset Creation", desc: "Designing high-resolution vector assets, custom illustrations, and digital media." },
    { step: "04", title: "Motion & Animation", desc: "Adding fluid CSS or video animations to bring static design assets to life." },
    { step: "05", title: "Export & Handoff", desc: "All files provided in raw, vector, web-ready formats for immediate deployment." },
  ],
  cta: "Ready to elevate your digital visual assets?",
};

export default function CreativeSolutionsPage() {
  return <ServiceDetailPage data={data} />;
}

