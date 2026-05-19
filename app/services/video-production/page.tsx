import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  slug: "video-production",
  titleKey: "srv.video.title",
  descKey: "srv.video.desc",
  title: "Video & Audio Production",
  tagline: "Cinematic storytelling, professional video editing, and clear sound production.",
  description:
    "Visual media captures human emotion like nothing else. We engineer cinematic video assets and crystal-clear audio content. From storyboard creation and script development to digital editing, cinematic coloring, custom soundscapes, and post-production, we build multimedia files that communicate your product's values beautifully.",
  image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=1200",
  color: "from-[#f016da] to-[#a906c9]",
  iconColor: "#f016da",
  features: [
    "Corporate promotional videos",
    "Social media video reels & shorts",
    "Product demonstration & teaser videos",
    "Professional audio engineering & mixing",
    "Scriptwriting & storyboarding",
    "Color grading & sound design"
  ],
  benefits: [
    {
      title: "Unmatched Engagement",
      desc: "Video content holds user attention longer than any other medium, boosting conversions on landing pages.",
    },
    {
      title: "Emotional Human Connection",
      desc: "Story-driven cinematic videos put a human face and message to your corporate software offerings.",
    },
    {
      title: "Premium Sound Clarity",
      desc: "State-of-the-art voice mastering, noise cancellation, and high-fidelity background soundtracks.",
    },
    {
      title: "Universal Distribution Setup",
      desc: "Videos delivered in aspect ratios optimized for mobile, desktops, YouTube, and corporate presentations.",
    },
  ],
  process: [
    { step: "01", title: "Pre-Production Brief", desc: "Aligning on goals, core message, target platforms, and overall visual tone." },
    { step: "02", title: "Storyboard & Scripting", desc: "Crafting a compelling narrative structure, screen direction, and speech dialogues." },
    { step: "03", title: "Production & Asset Assembly", desc: "Gathering high-quality raw footage, high-fidelity mockups, and graphic assets." },
    { step: "04", title: "Post-Production Editing", desc: "Assembling clips with smooth transitions, modern pacing, and custom visual effects." },
    { step: "05", title: "Audio Design & Polish", desc: "Sound mixing, matching voiceovers with ambient music tracks, and color grading final exports." },
  ],
  cta: "Let's capture your product in cinematic motion.",
};

export default function VideoProductionPage() {
  return <ServiceDetailPage data={data} />;
}

