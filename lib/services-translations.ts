import { Language } from "./translations";

export interface TranslatedServiceData {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  cta: string;
}

export const servicesTranslations: Partial<Record<Language, Record<string, TranslatedServiceData>>> = {
  en: {
    "web-engineering": {
      title: "Web Engineering",
      tagline: "Architecting high-performance digital ecosystems with cutting-edge tech stacks.",
      description: "We build blazing-fast, scalable web applications that don't just look great — they perform under pressure. From complex SPA architectures to server-rendered platforms, our engineers craft every layer of the stack with precision, security, and long-term maintainability in mind.",
      features: [
        "Next.js & React architecture",
        "Node.js / Go / Python backends",
        "REST & GraphQL API design",
        "PostgreSQL, MongoDB, Redis",
        "CI/CD pipelines & DevOps",
        "Performance optimization & Core Web Vitals"
      ],
      benefits: [
        { title: "Speed Without Compromise", desc: "We optimize every millisecond — from server response times to client-side rendering, your users get instant experiences." },
        { title: "Built to Scale", desc: "Architecture decisions made today won't bottleneck you tomorrow. We design for 10x growth from day one." },
        { title: "Security First", desc: "OWASP best practices, secure auth flows, and regular audits baked into every project." },
        { title: "Full Ownership", desc: "Clean, documented code that your team can own and maintain without vendor lock-in." }
      ],
      process: [
        { step: "01", title: "Discovery & Architecture", desc: "We map your requirements, define the tech stack, and design the system architecture." },
        { step: "02", title: "Design System Setup", desc: "Component libraries and responsive layouts established for consistent UI." },
        { step: "03", title: "Iterative Development", desc: "Two-week sprints with working demos. You see progress and we adapt fast." },
        { step: "04", title: "QA & Performance Audit", desc: "Automated testing, load testing, and Lighthouse audits before release." },
        { step: "05", title: "Launch & Monitoring", desc: "Zero-downtime deployments with real-time error tracking post-launch." }
      ],
      cta: "Ready to build your next web product?"
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      tagline: "Psychology-driven visual interfaces designed for maximum engagement.",
      description: "Great design isn't decoration — it's strategy. We combine behavioral psychology, conversion principles, and visual craft to create interfaces that guide users effortlessly toward their goals. Every pixel is intentional, every interaction is tested, and every design decision is backed by data.",
      features: [
        "User research & persona mapping",
        "Interactive wireframes & prototypes",
        "High-fidelity visual design",
        "Design systems & component libraries",
        "Usability testing & behavioral audits",
        "Conversion rate optimization (CRO)"
      ],
      benefits: [
        { title: "Higher Conversion Rates", desc: "By reducing friction and mapping intuitive user journeys, we systematically boost your sign-ups and sales." },
        { title: "Stronger User Retention", desc: "Interfaces that are intuitive and delightful to use keep customers coming back day after day." },
        { title: "Reduced Development Cost", desc: "Fixing design issues before writing code saves up to 10x in expensive engineering rework." },
        { title: "Consistent Brand Experience", desc: "A unified design system ensures your brand looks cohesive and professional across all touchpoints." }
      ],
      process: [
        { step: "01", title: "User Research", desc: "We analyze your audience, audit existing interfaces, and map out the target user personas." },
        { step: "02", title: "Wireframing", desc: "Low-fidelity structural layouts built to align on information architecture and user flow." },
        { step: "03", title: "High-Fidelity UI", desc: "Stunning visual mockups applying typography, custom colors, and pixel-perfect design." },
        { step: "04", title: "Interactive Prototyping", desc: "Clickable prototypes that mimic the real product experience for testing and developer handoff." },
        { step: "05", title: "Developer Handoff", desc: "Full design specs, design system tokens, and detailed asset assets for clean coding." }
      ],
      cta: "Let's create an interface your users will love."
    },
    "mobile-innovation": {
      title: "Mobile Innovation",
      tagline: "High-fidelity native experiences across iOS and Android.",
      description: "Mobile is where your users live. We build apps that feel native, perform flawlessly, and keep users coming back. Whether it's a consumer app targeting millions or an enterprise tool for your field team, we deliver polished mobile experiences that stand out in a crowded market.",
      features: [
        "React Native & Flutter cross-platform",
        "Native iOS (Swift) & Android (Kotlin)",
        "Offline-first architecture",
        "Biometric authentication & secure storage",
        "App Store & Play Store optimization (ASO)",
        "OTA updates & cloud synchronization"
      ],
      benefits: [
        { title: "One Codebase, Two Platforms", desc: "Deploy to iOS and Android simultaneously — cutting development time and cost without sacrificing quality." },
        { title: "Sensory & Native Speeds", desc: "We optimize graphics, animations, and hardware access so the app feels incredibly fluid." },
        { title: "Store Launch Simplified", desc: "We handle the complete app store submission, privacy compliance, and listing setup." },
        { title: "Active Engagement", desc: "Custom push notification strategies designed to keep users active and engaged." }
      ],
      process: [
        { step: "01", title: "Strategy & Scope", desc: "Define target platforms, hardware requirements, and the perfect mobile tech stack." },
        { step: "02", title: "UX Prototyping", desc: "Mobile-specific interactive layouts tested for thumb-reachability and natural swipe flows." },
        { step: "03", title: "Sprint Development", desc: "Agile, feature-by-feature coding with direct builds sent to your device via TestFlight." },
        { step: "04", title: "Device Matrix Testing", desc: "Rigorous testing across multiple screen sizes, OS versions, and network speeds." },
        { step: "05", title: "Store Submission", desc: "Full handling of App Store and Google Play reviews until your app is live." }
      ],
      cta: "Your app idea deserves a world-class build."
    },
    "custom-software": {
      title: "Custom Software",
      tagline: "Tailored enterprise solutions engineered for scalability and growth.",
      description: "Off-the-shelf software forces your business to adapt to the tool. We flip that equation — building software that adapts to your exact workflows, integrations, and scale requirements. From internal tools to full enterprise platforms, we engineer solutions that become your competitive advantage.",
      features: [
        "Enterprise resource planning (ERP)",
        "Custom CRM & workflow automation",
        "Internal tooling & admin dashboards",
        "Third-party API & legacy integration",
        "Multi-tenant SaaS architecture",
        "Role-based access control (RBAC)"
      ],
      benefits: [
        { title: "Fits Your Workflow Exactly", desc: "No workarounds, no unused features. Every screen is designed around how your team actually works." },
        { title: "Integrates With Everything", desc: "We connect your new software to your existing stack — CRMs, ERPs, and legacy databases." },
        { title: "Grows With You", desc: "Modular architecture means you can add features and data volume without rebuilding." },
        { title: "Reduces Operational Cost", desc: "Automating manual processes typically saves our clients 15–40% in overhead in year one." }
      ],
      process: [
        { step: "01", title: "Process Mapping", desc: "We document your current workflows and bottlenecks to define what needs to be built." },
        { step: "02", title: "Technical Spec", desc: "Detailed specs covering data models, user roles, and security protocols." },
        { step: "03", title: "Agile Coding", desc: "Modular sprint development with regular working demos for continuous validation." },
        { step: "04", title: "User Acceptance (UAT)", desc: "Your team tests the software against real workflows before final launch." },
        { step: "05", title: "Training & Handoff", desc: "Full documentation, administrator training, and hands-on onboarding sessions." }
      ],
      cta: "Time to replace that spreadsheet with something real."
    },
    "video-production": {
      title: "Video & Audio Production",
      tagline: "Cinematic brand stories, dynamic social reels, and high-fidelity media.",
      description: "In a visual world, static messages get ignored. We produce high-impact, cinematic visual content and crystal-clear audio that tell your brand's unique story. From promotional videos that convert, to highly polished corporate reels, we handle everything from script to screen to elevate your marketing presence.",
      features: [
        "Cinematic brand promos & commercials",
        "Social media reels & short-form video",
        "Corporate culture & team highlights",
        "Product feature showcase videos",
        "Scriptwriting & storyboard design",
        "Professional sound design & voiceovers"
      ],
      benefits: [
        { title: "Massive Brand Recall", desc: "Cinematic, high-production-value video helps your brand stand out and stick in your audience's mind." },
        { title: "Higher Ad Conversions", desc: "Video ads convert up to 3x better than static banners. We build hooks that keep viewers watching." },
        { title: "Engaging Visual Stories", desc: "We turn complex software or service concepts into simple, visually entertaining video explanations." },
        { title: "Multi-Platform Formats", desc: "We deliver content optimized for LinkedIn, Instagram, YouTube, and website embeds." }
      ],
      process: [
        { step: "01", title: "Script & Concept", desc: "We define the hook, outline the narrative arc, and write professional scripts for approval." },
        { step: "02", title: "Pre-Production", desc: "Storyboarding, location scouting, talent casting, and detailed shoot scheduling." },
        { step: "03", title: "The Shoot", desc: "High-end 4K filming with professional lighting, camera rigs, and crystal-clear audio recording." },
        { step: "04", title: "Post-Production", desc: "Editing, color grading, custom sound design, motion graphics, and audio mastering." },
        { step: "05", title: "Delivery & Optimization", desc: "Format optimization for multiple social channels and website integration." }
      ],
      cta: "Let's capture your brand's story on camera."
    },
    "creative-solutions": {
      title: "Creative Digital Solutions",
      tagline: "High-impact campaigns, graphic design, and custom digital media.",
      description: "Break through the noise with bold, creative assets. We design custom digital solutions — including high-fidelity graphic design, modern typography, custom illustrations, and interactive graphics — that establish your brand as a modern industry leader. We turn standard marketing into an interactive visual experience.",
      features: [
        "Custom vector illustration & graphics",
        "Interactive web & app media assets",
        "High-fidelity pitch decks & collateral",
        "Motion graphics & animated elements",
        "Social media kit & templates",
        "Packaging & physical brand design"
      ],
      benefits: [
        { title: "Distinct Market Presence", desc: "Bespoke creative design establishes a unique visual authority that template-based designs can't match." },
        { title: "Interactive Engagement", desc: "Custom animations and interactive graphics make your site or app feel alive and premium." },
        { title: "Unified Brand Assets", desc: "Every illustration, slide, and graphic conforms perfectly to your corporate design system." },
        { title: "Persuasive Presentation", desc: "Pitch decks and sales collaterals designed to tell a clear, compelling story that closes deals." }
      ],
      process: [
        { step: "01", title: "Creative Brief", desc: "We align on your visual goals, target audience sentiment, and brand design guidelines." },
        { step: "02", title: "Visual Direction", desc: "Mood boards and concept sketches to establish the creative style before final production." },
        { step: "03", title: "Asset Creation", desc: "Designing high-resolution vector assets, custom illustrations, and digital media." },
        { step: "04", title: "Motion & Animation", desc: "Adding fluid CSS or video animations to bring static design assets to life." },
        { step: "05", title: "Export & Handoff", desc: "All files provided in raw, vector, web-ready formats for immediate deployment." }
      ],
      cta: "Ready to elevate your digital visual assets?"
    },
    "branding-identity": {
      title: "Branding & Identity",
      tagline: "Strategic brand systems designed to establish authority and trust.",
      description: "Your brand is your handshake, your reputation, and your promise. We engineer complete corporate brand identities from the ground up. We don't just sketch logos; we build strategic visual and conceptual frameworks — including typography, voice guidelines, and logo assets — that project ultimate professionalism.",
      features: [
        "Corporate logo suite & typography",
        "Brand voice, tone & copy guidelines",
        "Complete color systems & brand tokens",
        "Brand style guide documentation",
        "Stationery & corporate collateral design",
        "Brand relaunch strategy"
      ],
      benefits: [
        { title: "Instant Customer Trust", desc: "A polished, consistent brand immediately projects established authority and reliability." },
        { title: "Premium Pricing Power", desc: "Strong, well-designed brands can charge premium rates because they look and feel premium." },
        { title: "Employee Alignment", desc: "Clear brand guidelines ensure your entire organization communicates cohesively." },
        { title: "Future-Proof Foundation", desc: "A scalable brand identity that stays relevant as your service catalog and audience grow." }
      ],
      process: [
        { step: "01", title: "Brand Discovery", desc: "We audit your market positioning, research competitors, and define your core brand values." },
        { step: "02", title: "Logo & Style Concepts", desc: "Multiple unique visual directions, logo marks, and color pairings presented for review." },
        { step: "03", title: "Identity Refinement", desc: "Polishing the chosen concept into a complete visual system with typography and tokens." },
        { step: "04", title: "Style Guide Creation", desc: "Compiling the official Brand Book documenting logo placement, colors, and typography." },
        { step: "05", title: "Asset Packaging", desc: "Organizing all digital and print files into a clean, searchable brand kit." }
      ],
      cta: "Let's build a brand that stands the test of time."
    },
    "it-consulting": {
      title: "IT & Tech Consulting",
      tagline: "Aligning your technological infrastructure with global business goals.",
      description: "Technology should accelerate your growth, not hold you back. We provide comprehensive IT and technology consulting to audit your current stack, architect cloud infrastructure, plan digital transformations, and establish secure frameworks. We ensure your systems are scalable, secure, and cost-efficient.",
      features: [
        "Infrastructure & software audit",
        "Cloud migration strategy (AWS/GCP)",
        "IT security & compliance framework",
        "Tech stack modernization roadmap",
        "Cost optimization & resource planning",
        "Disaster recovery & backup strategy"
      ],
      benefits: [
        { title: "Eliminate Tech Debt", desc: "We identify legacy bottlenecks and replace outdated codebases with modern, maintainable frameworks." },
        { title: "Massive Infrastructure Savings", desc: "Optimizing cloud resource allocation typically reduces server and service bills by 20–50%." },
        { title: "Enterprise-Grade Security", desc: "Bulletproof data protection schemes, compliance architectures, and vulnerability planning." },
        { title: "Future-Ready Architecture", desc: "Scale systems naturally without crashing during high-traffic enterprise events." }
      ],
      process: [
        { step: "01", title: "System Audit", desc: "We analyze your current codebases, hosting environments, and IT workflows to find gaps." },
        { step: "02", title: "Strategy Formulation", desc: "Developing a tailored digital transformation plan with clear timelines and budgets." },
        { step: "03", title: "Architecture Design", desc: "Designing secure, cost-optimized cloud layouts and software communication pipelines." },
        { step: "04", title: "Implementation Support", desc: "Guiding your internal engineering team or executing the migration with zero downtime." },
        { step: "05", title: "Monitoring & Review", desc: "Establishing server monitoring dashboards and regular review checkpoints." }
      ],
      cta: "Let's build a technology roadmap for your future."
    }
  },
  ur: {
    "web-engineering": {
      title: "ویب انجینئرنگ",
      tagline: "جدید ترین ٹیک اسٹیکس کے ساتھ اعلیٰ کارکردگی کے ڈیجیٹل ایکو سسٹم کی تعمیر۔",
      description: "ہم انتہائی تیز رفتار اور اسکیل ایبل ویب ایپلیکیشنز بناتے ہیں جو نہ صرف خوبصورت دکھتی ہیں بلکہ دباؤ میں بھی بہترین کارکردگی کا مظاہرہ کرتی ہیں۔ سرفر رینڈرڈ پلیٹ فارمز سے لے کر پیچیدہ سنگل پیج ایپلیکیشنز تک، ہمارے انجینئرز ہر کوڈ کو باریکی، سیکیورٹی اور طویل مدتی استحکام کے ساتھ لکھتے ہیں۔",
      features: [
        "Next.js اور React آرکیٹیکچر",
        "Node.js / Go / Python بیک اینڈز",
        "REST اور GraphQL API ڈیزائن",
        "PostgreSQL، MongoDB، Redis ڈیٹا بیسز",
        "CI/CD پائپ لائنز اور DevOps",
        "کارکردگی کی اصلاح اور Core Web Vitals"
      ],
      benefits: [
        { title: "بغیر کسی سمجھوتے کے رفتار", desc: "ہم سرور کے رسپانس ٹائم سے لے کر کلائنٹ سائیڈ رینڈرنگ تک ہر سیکنڈ کو بہتر بناتے ہیں، تاکہ صارف کو فوری تجربہ ملے۔" },
        { title: "ترقی کے لیے تیار", desc: "آج لیے گئے آرکیٹیکچر کے فیصلے کل آپ کے لیے رکاوٹ نہیں بنیں گے۔ ہم پہلے دن سے ہی 10 گنا زیادہ ٹریفک کے لیے ڈیزائن کرتے ہیں۔" },
        { title: "سب سے پہلے سیکیورٹی", desc: "ہر پروجیکٹ میں OWASP کے بہترین طریقے، محفوظ لاگ ان سسٹم اور باقاعدہ سیکیورٹی آڈٹ شامل ہوتے ہیں۔" },
        { title: "مکمل مالکانہ حقوق", desc: "صاف، دستاویزی کوڈ جس کے مالک اور نگہبان آپ خود ہوں گے بغیر کسی کمپنی پر انحصار کیے۔" }
      ],
      process: [
        { step: "01", title: "پروجیکٹ کی ریسرچ", desc: "ہم آپ کی ضروریات کا نقشہ بناتے ہیں، بہترین ٹیکنالوجی کا انتخاب کرتے ہیں اور پورے سسٹم کا ڈیزائن تیار کرتے ہیں۔" },
        { step: "02", title: "ڈیزائن سسٹم کی ترتیب", desc: "مسلسل اور یکساں انٹرفیس کے لیے ہم ایک مکمل ڈیزائن سسٹم اور ریسپونسیو لے آؤٹ بناتے ہیں۔" },
        { step: "03", title: "مرحلہ وار کوڈنگ", desc: "دو ہفتوں کے اسپرنٹ جس میں ورکنگ ڈیمو شامل ہوتے ہیں۔ آپ کام کی پیشرفت خود دیکھ سکتے ہیں۔" },
        { step: "04", title: "کوالٹی چیک اور ٹیسٹنگ", desc: "لانچ سے پہلے خودکار ٹیسٹنگ، لوڈ ٹیسٹنگ اور گوگل لائٹ ہاؤس کے ذریعے کارکردگی کا آڈٹ۔" },
        { step: "05", title: "لانچ اور لائیو مانیٹرنگ", desc: "بغیر کسی سرور ڈاؤن ٹائم کے لانچ اور لائیو سرورز پر لائیو ٹریکنگ کا قیام۔" }
      ],
      cta: "اپنا اگلا ویب پروجیکٹ شروع کرنے کے لیے تیار ہیں؟"
    },
    "ui-ux-design": {
      title: "UI/UX ڈیزائن",
      tagline: "زیادہ سے زیادہ انگیجمنٹ کے لیے انسانی نفسیات کے مطابق بنائے گئے انٹرفیس۔",
      description: "عمدہ ڈیزائن صرف سجاوٹ نہیں ہوتا، یہ ایک حکمت عملی ہے۔ ہم صارفین کو ان کے مطلوبہ اہداف تک آسانی سے پہنچانے کے لیے رویے کی نفسیات اور ڈیزائن کے اصولوں کو یکجا کرتے ہیں۔ ہر پکسل بامقصد ہوتا ہے اور ہر فیصلے کے پیچھے ڈیٹا موجود ہوتا ہے۔",
      features: [
        "صارف کی ریسرچ اور رول میپنگ",
        "انٹرایکٹو وائر فریمز اور پروٹوٹائپس",
        "ہائی فائی ویژول ڈیزائننگ",
        "ڈیزائن سسٹمز اور کمپوننٹ لائبریریز",
        "یوز ایبلٹی ٹیسٹنگ اور آڈٹس",
        "کنورژن ریٹ بڑھانے کی تکنیک (CRO)"
      ],
      benefits: [
        { title: "بہتر کنورژن ریٹ", desc: "آسان اور ہموار راستے بنا کر ہم منظم طریقے سے آپ کی فروخت اور سائن اپس کو بڑھاتے ہیں۔" },
        { title: "صارفین کی مستقل واپسی", desc: "جب انٹرفیس استعمال کرنے میں انتہائی آسان اور خوبصورت ہوتا ہے، تو صارفین بار بار واپس آتے ہیں۔" },
        { title: "ترقیاتی اخراجات میں بچت", desc: "کوڈنگ شروع کرنے سے پہلے ڈیزائن کی غلطیوں کو ٹھیک کرنا بعد کے مہنگے کاموں کو 10 گنا تک بچاتا ہے۔" },
        { title: "برانڈ کا یکساں تجربہ", desc: "ایک متحد ڈیزائن سسٹم یہ یقینی بناتا ہے کہ آپ کا برانڈ ہر جگہ انتہائی پیشہ ورانہ اور خوبصورت لگے۔" }
      ],
      process: [
        { step: "01", title: "صارف کی ریسرچ", desc: "ہم آپ کے سامعین کا تجزیہ کرتے ہیں، موجودہ انٹرفیس کا جائزہ لیتے ہیں اور صارفین کی ضروریات کو سمجھتے ہیں۔" },
        { step: "02", title: "وائر فریم کی تیاری", desc: "معلومات کی ترتیب اور صارف کے فلو کو درست کرنے کے لیے بنیادی خاکہ تیار کرنا۔" },
        { step: "03", title: "ہائی فائی UI ڈیزائن", desc: "ٹائپوگرافی، کسٹم کلرز اور پکسل پرفیکٹ ڈیزائن کے ساتھ خوبصورت ویژول ماک اپس۔" },
        { step: "04", title: "پروٹوٹائپ کی تیاری", desc: "ٹیسٹنگ اور ڈیولپرز کو کام سونپنے کے لیے کلک کے قابل لائیو پروٹوٹائپ۔" },
        { step: "05", title: "ڈیولپر ہینڈ اوور", desc: "مکمل ڈیزائن کی تفصیلات، اثاثے اور ڈیزائن ٹوکنز ڈیولپرز کے حوالے کرنا۔" }
      ],
      cta: "آئیے ایک ایسا انٹرفیس بنائیں جو صارفین کو پسند آئے۔"
    },
    "mobile-innovation": {
      title: "موبائل ایپ انوویشن",
      tagline: "iOS اور Android پر شاندار اور تیز رفتار نیٹیو تجربات کا حصول۔",
      description: "موبائل وہ جگہ ہے جہاں آپ کے صارفین وقت گزارتے ہیں۔ ہم ایسی ایپس بناتے ہیں جو چلنے میں تیز، پرفارمنس میں بے عیب اور صارفین کو جوڑے رکھیں۔ چاہے لاکھوں صارفین کے لیے ایپ ہو یا آپ کی فیلڈ ٹیم کے لیے، ہم بہترین موبائل تجربات فراہم کرتے ہیں۔",
      features: [
        "React Native اور Flutter ایپس",
        "نیٹیو iOS (Swift) اور Android (Kotlin)",
        "آف لائن فرسٹ آرکیٹیکچر",
        "بایومیٹرک لاگ ان اور محفوظ ڈیٹا",
        "ایپ اسٹور اور پلے اسٹور کی اصلاح (ASO)",
        "بغیر اسٹور اپڈیٹ کے فوری کلاؤڈ اپڈیٹس"
      ],
      benefits: [
        { title: "ایک کوڈ، دو پلیٹ فارمز", desc: "کوالٹی پر سمجھوتہ کیے بغیر ایک ہی وقت میں iOS اور Android دونوں پر لانچ کریں — وقت اور بجٹ دونوں بچائیں۔" },
        { title: "نیٹیو کارکردگی", desc: "ہم گرافکس، اینیمیشنز اور ہارڈ ویئر رسائی کو بہترین بناتے ہیں تاکہ ایپ انتہائی ہموار چلے۔" },
        { title: "اسٹور پر آسان لانچ", desc: "ہم ایپ اسٹور پر منظوری، پرائیویسی قوانین کی تعمیل اور مکمل لسٹنگ کا کام خود سنبھالتے ہیں۔" },
        { title: "صارفین کی مستقل مصروفیت", desc: "صارفین کو فعال رکھنے کے لیے کسٹم پش نوٹیفکیشن کی حکمت عملی۔" }
      ],
      process: [
        { step: "01", title: "پلیٹ فارم کی حکمت عملی", desc: "نشان زدہ پلیٹ فارمز، ہارڈ ویئر کی ضروریات اور موبائل ٹیک اسٹیک کا تعین کرنا۔" },
        { step: "02", title: "موبائل UX پروٹو ٹائپ", desc: "موبائل کے لیے خاص انٹرایکٹو خاکہ جات جو انگوٹھے کی پہنچ اور آسان سوائپ کے مطابق ہوں۔" },
        { step: "03", title: "سپرنٹ ڈیولپمنٹ", desc: "مرحلہ وار کوڈنگ جس کے دوران آپ اپنے موبائل پر TestFlight کے ذریعے ایپ چیک کر سکتے ہیں۔" },
        { step: "04", title: "مختلف موبائلز پر ٹیسٹنگ", desc: "مختلف اسکرین سائزز، آپریٹنگ سسٹمز اور انٹرنیٹ کی رفتار پر مکمل اور سخت ٹیسٹنگ۔" },
        { step: "05", title: "اسٹور پر پیش کرنا", desc: "ایپ اسٹور اور گوگل پلے پر ایپ کے لائیو ہونے تک مکمل منظوری کا عمل سنبھالنا۔" }
      ],
      cta: "آپ کے ایپ کا آئیڈیا ایک شاندار ایپ کا حقدار ہے۔"
    },
    "custom-software": {
      title: "کسٹم سافٹ ویئر",
      tagline: "کاروبار کی اسکیل ایبلٹی اور ترقی کے لیے کسٹم تیار کردہ حل۔",
      description: "پہلے سے بنے ہوئے عام سافٹ ویئرز آپ کے کاروبار کو اپنے مطابق چلنے پر مجبور کرتے ہیں۔ ہم اس کے برعکس کام کرتے ہیں — ہم ایسا سافٹ ویئر بناتے ہیں جو آپ کے کام کے طریقے، سسٹم انضمام اور کاروباری ضروریات کے عین مطابق ہو۔ ہم وہ حل تیار کرتے ہیں جو آپ کو سب سے آگے لے جائے۔",
      features: [
        "انٹرپرائز ریسورس پلاننگ (ERP) سسٹمز",
        "کسٹم CRM اور کام کے بہاؤ کی آٹومیشن",
        "اندرونی ٹولز اور ایڈمن ڈیش بورڈز",
        "بیرونی APIs اور پرانے سسٹمز کا انضمام",
        "ملٹی ٹیننٹ SaaS آرکیٹیکچر",
        "رول پر مبنی رسائی کنٹرول (RBAC)"
      ],
      benefits: [
        { title: "آپ کے ورک فلو کے عین مطابق", desc: "کوئی فالتو فیچر نہیں، کوئی الجھن نہیں۔ ہر اسکرین آپ کی ٹیم کے اصل کام کے طریقے پر ڈیزائن ہوتی ہے۔" },
        { title: "ہر سسٹم کے ساتھ منسلک", desc: "ہم آپ کے نئے سافٹ ویئر کو آپ کے موجودہ سسٹمز — CRMs، ای میلز اور ڈیٹا بیسز سے جوڑتے ہیں۔" },
        { title: "کاروبار کے ساتھ بڑھتا ہے", desc: "ماڈیولر آرکیٹیکچر کا مطلب ہے کہ آپ دوبارہ نیا سافٹ ویئر بنائے بغیر مزید فیچرز شامل کر سکتے ہیں۔" },
        { title: "اخراجات میں کمی", desc: "دستی کاموں کو خودکار کر کے ہمارے کلائنٹس پہلے ہی سال 15 سے 40 فیصد تک اخراجات بچاتے ہیں۔" }
      ],
      process: [
        { step: "01", title: "ورک فلو کی میپنگ", desc: "ہم آپ کے موجودہ کام کرنے کے طریقے اور رکاوٹوں کو سمجھتے ہیں تاکہ معلوم ہو کہ کیا بنانا ہے۔" },
        { step: "02", title: "تکنیکی تفصیلات", desc: "ڈیٹا ماڈلز، صارف کے کردار اور سیکیورٹی قوانین پر مشتمل تفصیلی خاکہ۔" },
        { step: "03", title: "سپرنٹ کوڈنگ", desc: "ٹکڑوں میں ڈیولپمنٹ جس میں باقاعدگی سے آپ کو سافٹ ویئر کا کام کرتا ہوا حصہ دکھایا جاتا ہے۔" },
        { step: "04", title: "ٹیم کی جانب سے ٹیسٹنگ", desc: "آپ کی ٹیم حتمی لانچ سے پہلے سافٹ ویئر کو اپنے اصل کام پر ٹیسٹ کرتی ہے۔" },
        { step: "05", title: "تربیت اور ہینڈ اوور", desc: "مکمل دستاویزات، ایڈمنسٹریٹر کی تربیت اور ٹیم کے لیے آسان آن بورڈنگ سیشنز۔" }
      ],
      cta: "اب وقت ہے پرانی ایکسل شیٹس کو ایک شاندار سافٹ ویئر سے تبدیل کرنے کا۔"
    },
    "video-production": {
      title: "ویڈیو اور آڈیو پروڈکشن",
      tagline: "سینیمیٹک برانڈ ویڈیوز، سوشل میڈیا ریلز اور ہائی فائی میڈیا پروڈکشن۔",
      description: "آج کی بصری دنیا میں، سادہ پیغامات نظر انداز ہو جاتے ہیں۔ ہم بہترین سینیمیٹک ویڈیوز اور صاف آڈیو تیار کرتے ہیں جو آپ کے برانڈ کی کہانی بیان کریں۔ پرومو ویڈیوز سے لے کر کمپنی کے معلوماتی ریلز تک، ہم اسکرپٹ سے لے کر حتمی ایڈٹنگ تک سب کچھ خود سنبھالتے ہیں۔",
      features: [
        "سینیمیٹک برانڈ پروموز اور اشتہارات",
        "سوشل میڈیا ریلز اور مختصر ویڈیوز",
        "کارپوریٹ کلچر اور ٹیم ہائی لائٹس",
        "پروڈکٹ فیچرز کی معلوماتی ویڈیوز",
        "اسکرپٹ رائٹنگ اور اسٹوری بورڈ ڈیزائن",
        "پیشہ ورانہ ساؤنڈ ڈیزائننگ اور وائس اوورز"
      ],
      benefits: [
        { title: "برانڈ کی شاندار یاد دہانی", desc: "بہترین سینیمیٹک ویڈیو آپ کے برانڈ کو حریفوں سے الگ کرتی ہے اور لوگوں کے ذہنوں میں نقش کر دیتی ہے۔" },
        { title: "اشتہارات پر زیادہ فائدہ", desc: "ویڈیو اشتہارات عام بینرز سے 3 گنا زیادہ کسٹمر لاتے ہیں۔ ہم ایسے ہوکس بناتے ہیں جو لوگوں کو متوجہ رکھیں۔" },
        { title: "دلچسپ بصری کہانیاں", desc: "ہم پیچیدہ سوفٹ ویئر یا سروس کو آسان اور بصری طور پر دلکش ویڈیو کے ذریعے سمجھاتے ہیں۔" },
        { title: "ہر پلیٹ فارم کے مطابق", desc: "ہم لنکڈ ان، انسٹاگرام، یوٹیوب اور ویب سائٹ کے لیے موزوں ترین سائز میں ویڈیوز تیار کرتے ہیں۔" }
      ],
      process: [
        { step: "01", title: "اسکرپٹ اور آئیڈیا", desc: "ہم کہانی کی ترتیب بناتے ہیں اور منظوری کے لیے پیشہ ورانہ اسکرپٹ لکھتے ہیں۔" },
        { step: "02", title: "پری پروڈکشن", desc: "اسٹوری بورڈ بنانا، شوٹنگ کی جگہوں کا تعین کرنا اور اداکاروں کا انتخاب۔" },
        { step: "03", title: "شوٹنگ کا دن", desc: "پیشہ ورانہ کیمرہ لائٹس اور بہترین وائس ریکارڈنگ کے ساتھ ہائی اینڈ 4K شوٹنگ۔" },
        { step: "04", title: "ایڈیٹنگ اور پوسٹ", desc: "ایڈیٹنگ، کلر گریڈنگ، کسٹم ساؤنڈ ڈیزائن، موشن گرافکس اور فائنل ماسٹرنگ۔" },
        { step: "05", title: "ڈیلیوری اور پبلشنگ", desc: "سوشل میڈیا چینلز اور ویب سائٹس پر لگانے کے لیے حتمی فائلز کی فراہمی۔" }
      ],
      cta: "آئیے آپ کے برانڈ کی کہانی کو کیمرے کی آنکھ سے محفوظ کریں۔"
    },
    "creative-solutions": {
      title: "تخلیقی ڈیجیٹل سلوشنز",
      tagline: "اعلیٰ معیار کی مہمات، گرافک ڈیزائن اور کسٹم ڈیجیٹل میڈیا اثاثے۔",
      description: "شاندار اور دلکش تخلیقی اثاثوں کے ساتھ مارکیٹ میں نمایاں ہوں۔ ہم کسٹم ڈیجیٹل میڈیا ڈیزائن کرتے ہیں — بشمول ہائی فائی گرافک ڈیزائن، جدید ٹائپوگرافی، کسٹم تصاویر اور اینیمیشنز — جو آپ کے برانڈ کو ایک جدید لیڈر کے طور پر قائم کرتے ہیں۔",
      features: [
        "کسٹم ویکٹر ڈیزائن اور برانڈ گرافکس",
        "ویب اور ایپس کے انٹرایکٹو میڈیا اثاثے",
        "اعلیٰ معیار کی پریزنٹیشنز اور پچ ڈیکس",
        "موشن گرافکس اور متحرک اینیمیشنز",
        "سوشل میڈیا برانڈ کٹس اور ٹیمپلیٹس",
        "پیکجنگ اور فزیکل برانڈ ڈیزائننگ"
      ],
      benefits: [
        { title: "مارکیٹ میں منفرد شناخت", desc: "خاص طور پر تیار کردہ ڈیزائن آپ کے برانڈ کو وہ بصری اہمیت دیتے ہیں جو عام ٹیمپلیٹس کبھی نہیں دے سکتے۔" },
        { title: "متحرک اور جاندار ویب سائٹ", desc: "کسٹم اینیمیشنز اور انٹرایکٹو گرافکس آپ کی ویب سائٹ یا ایپ کو جاندار اور پریمیم بناتے ہیں۔" },
        { title: "یکساں برانڈ اثاثے", desc: "ہر تصویر، سلائیڈ اور گرافک آپ کے برانڈ کے کلر تھیم اور گائیڈ لائنز کے عین مطابق ہوتا ہے۔" },
        { title: "کاروباری پچز کا اثر", desc: "پچ ڈیکس اور سیلز میڈیا جو ایک واضح اور پرکشش کہانی بیان کرتے ہیں تاکہ ڈیلز فائنل ہوں۔" }
      ],
      process: [
        { step: "01", title: "تخلیقی بریفنگ", desc: "ہم آپ کے بصری اہداف، ہدف والے صارفین کی پسند اور ڈیزائن کی ہدایات پر تبادلہ خیال کرتے ہیں۔" },
        { step: "02", title: "بصری سمت کا تعین", desc: "حتمی کام شروع کرنے سے پہلے اسٹائل اور تھیم کو سمجھنے کے لیے موڈ بورڈز بنانا۔" },
        { step: "03", title: "ڈیزائننگ کا عمل", desc: "ہائی ریزولیوشن ویکٹر اثاثے، کسٹم الیسٹریشنز اور ڈیجیٹل میڈیا تیار کرنا۔" },
        { step: "04", title: "موشن اور اینیمیشن", desc: "ساکت ڈیزائنز کو جاندار بنانے کے لیے خوبصورت اور نرم اینیمیشنز شامل کرنا۔" },
        { step: "05", title: "حتمی فائلز کا ہینڈ اوور", desc: "فوری استعمال کے لیے تمام فائلز کو بہترین اور ہائی ریزولوشن فارمیٹس میں فراہم کرنا۔" }
      ],
      cta: "اپنے ڈیجیٹل بصری اثاثوں کو پریمیم بنانے کے لیے تیار ہیں؟"
    },
    "branding-identity": {
      title: "برانڈنگ اور آئیڈنٹٹی",
      tagline: "مارکیٹ میں اعتماد اور ساکھ قائم کرنے کے لیے اسٹریٹجک برانڈ سسٹمز۔",
      description: "آپ کا برانڈ آپ کا وعدہ اور آپ کی پہچان ہے۔ ہم شروع سے مکمل کارپوریٹ برانڈ آئیڈنٹٹیز ڈیزائن کرتے ہیں۔ ہم صرف لوگو نہیں بناتے، بلکہ ہم اسٹریٹجک فریم ورک تیار کرتے ہیں — بشمول ٹائپوگرافی، برانڈ وائس اور مکمل اسٹائل گائیڈ — جو پیشہ ورانہ صلاحیت کو ظاہر کرے۔",
      features: [
        "کارپوریٹ لوگو سوٹ اور ٹائپوگرافی",
        "برانڈ وائس، لہجہ اور گائیڈ لائنز",
        "مکمل کلر تھیمز اور برانڈ ٹوکنز",
        "برانڈ اسٹائل بک کی مکمل دستاویزی شکل",
        "کارپوریٹ اسٹیشنری اور وزٹنگ کارڈز",
        "برانڈ کو دوبارہ لانچ کرنے کی حکمت عملی"
      ],
      benefits: [
        { title: "گاہک کا فوری اعتماد", desc: "ایک بہترین اور مربوط برانڈ شناخت دیکھتے ہی گاہک کے دل میں سیکیورٹی اور بھروسہ پیدا ہوتا ہے۔" },
        { title: "بہتر منافع کی صلاحیت", desc: "مضبوط برانڈز اپنے کام کی زیادہ قیمت وصول کر سکتے ہیں کیونکہ وہ گاہک کو پریمیم محسوس کرواتے ہیں۔" },
        { title: "ٹیم کی ایک سمت پر یکسوئی", desc: "جب برانڈ کے اصول واضح ہوں تو آپ کا پورا ادارہ یکساں لہجے میں بات کرتا ہے۔" },
        { title: "طویل مدتی مضبوط بنیاد", desc: "ایک ایسا برانڈ جو آنے والے سالوں میں بھی جدید اور متعلقہ رہے جیسے جیسے آپ کا کاروبار بڑھے۔" }
      ],
      process: [
        { step: "01", title: "برانڈ کی کھوج", desc: "ہم آپ کی مارکیٹ کی پوزیشن کو سمجھتے ہیں، حریفوں کا تجزیہ کرتے ہیں اور برانڈ کی اقدار طے کرتے ہیں۔" },
        { step: "02", title: "لوگو اور اسٹائل آئیڈیاز", desc: "مختلف منفرد بصری سمتیں، لوگو ڈیزائنز اور کلر اسکیمز منظوری کے لیے پیش کرنا۔" },
        { step: "03", title: "شناخت کی اصلاح", desc: "منتخب کردہ لوگو کو بہتر بنا کر اس کے ساتھ ٹائپوگرافی اور کلرز کا مکمل سسٹم بنانا۔" },
        { step: "04", title: "برانڈ بک کی تیاری", desc: "ایک باضابطہ برانڈ گائیڈ بک بنانا جو لوگو لگانے کے طریقے اور فونٹس کو واضح کرے۔" },
        { step: "05", title: "برانڈ کٹ کی پیکجنگ", desc: "پرنٹ اور ڈیجیٹل استعمال کے لیے تمام فائلز کو ایک صاف اور منظم فولڈر میں فراہم کرنا۔" }
      ],
      cta: "آئیے ایک ایسا برانڈ بنائیں جو ہمیشہ یاد رکھا جائے۔"
    },
    "it-consulting": {
      title: "IT اور ٹیک کنسلٹنگ",
      tagline: "آپ کے کاروباری اہداف کو جدید ترین تکنیکی انفراسٹرکچر سے ہم آہنگ کرنا۔",
      description: "ٹیکنالوجی کو آپ کے کاروبار کو تیز کرنا چاہیے، نہ کہ اسے روکنا۔ ہم آپ کے سسٹم کا جائزہ لینے، کلاؤڈ انفراسٹرکچر ڈیزائن کرنے اور محفوظ فریم ورک قائم کرنے کے لیے مکمل ٹیکنالوجی کنسلٹنگ فراہم کرتے ہیں۔ ہم یقینی بناتے ہیں کہ آپ کا سسٹم سستا، محفوظ اور تیز ہو۔",
      features: [
        "سافٹ ویئر اور انفراسٹرکچر کا تفصیلی آڈٹ",
        "کلاؤڈ مائیگریشن کی حکمت عملی (AWS/GCP)",
        "آئی ٹی سیکیورٹی اور تعمیل کے اصول",
        "ٹیکنالوجی کی جدید ترین شکل دینے کا روڈ میپ",
        "سرور کے اخراجات میں کمی اور منصوبہ بندی",
        "بیک اپ سسٹمز اور ڈیزاسٹر ریکوری پلان"
      ],
      benefits: [
        { title: "پرانے کوڈ کے بوجھ سے نجات", desc: "ہم آپ کے سسٹم میں موجود رکاوٹوں کو تلاش کرتے ہیں اور پرانے کوڈ کو جدید اور صاف کوڈ سے تبدیل کرتے ہیں۔" },
        { title: "سرور بلز میں بڑی بچت", desc: "کلاؤڈ سرورز کو بہتر بنا کر ہم عام طور پر سرور اور سروسز کے بلوں میں 20 سے 50 فیصد تک کمی لاتے ہیں۔" },
        { title: "بہترین کارپوریٹ سیکیورٹی", desc: "ڈیٹا کی حفاظت کے فول پروف طریقے، ہیکنگ سے بچاؤ کے منصوبے اور سیکیورٹی تعمیل۔" },
        { title: "مستقبل کے لیے تیار سسٹمز", desc: "بغیر سرور کریش ہوئے لاکھوں نئے صارفین اور زیادہ ٹریفک کو سنبھالنے کی صلاحیت۔" }
      ],
      process: [
        { step: "01", title: "سسٹم کا آڈٹ", desc: "ہم آپ کے موجودہ کوڈ، ہوسٹنگ سرورز اور آئی ٹی ورک فلوز کا جائزہ لیتے ہیں۔" },
        { step: "02", title: "حکمت عملی کی تشکیل", desc: "واضح بجٹ اور ٹائم لائن کے ساتھ ٹیکنالوجی کو تبدیل کرنے کا مکمل منصوبہ بنانا۔" },
        { step: "03", title: "آرکیٹیکچر کا ڈیزائن", desc: "محفوظ، سستے اور تیز رفتار کلاؤڈ سرورز کا نقشہ اور پائپ لائنز ڈیزائن کرنا۔" },
        { step: "04", title: "انفراسٹرکچر مائیگریشن", desc: "بغیر سرور بند کیے آپ کے سسٹم کو نئے کلاؤڈ سرور پر بحفاظت منتقل کرنا۔" },
        { step: "05", title: "مانیٹرنگ کا قیام", desc: "سرور کی صحت اور کارکردگی پر نظر رکھنے کے لیے خودکار ڈیش بورڈز بنانا۔" }
      ],
      cta: "آئیے آپ کے کاروبار کے مستقبل کے لیے ٹیکنالوجی کا روڈ میپ تیار کریں۔"
    }
  },
  ar: {
    "web-engineering": {
      title: "هندسة الويب",
      tagline: "بناء أنظمة بيئية رقمية عالية الأداء باستخدام أحدث التقنيات.",
      description: "نحن نبني تطبيقات ويب سريعة للغاية وقابلة للتوسع ولا تبدو رائعة فحسب، بل تؤدي بشكل ممتاز تحت الضغط. من معماریات الصفحة الواحدة المعقدة إلى المنصات التي يتم تقديمها من جانب الخادم، يقوم مهندسونا بصياغة كل سطر بدقة وأمان وسهولة صيانة طويلة الأجل.",
      features: [
        "معمارية Next.js و React",
        "خوادم Node.js / Go / Python",
        "تصميم واجهة برمجة التطبيقات REST و GraphQL",
        "قواعد البيانات PostgreSQL ، MongoDB ، Redis",
        "خطوط أنابيب CI/CD وعمليات DevOps",
        "تحسين الأداء و Core Web Vitals"
      ],
      benefits: [
        { title: "سرعة دون مساومة", desc: "نحن نعمل على تحسين كل جزء من الثانية - من أوقات استجابة الخادم إلى عرض جانب العميل ، يحصل المستخدمون على تجارب فورية." },
        { title: "بنيت للتوسع", desc: "قرارات المعمارية المتخذة اليوم لن تعيقك غداً. نحن نصمم لنمو يعادل 10 أضعاف من اليوم الأول." },
        { title: "الأمان أولاً", desc: "أفضل ممارسات OWASP ، تدفقات المصادقة الآمنة ، وعمليات التدقيق المنتظمة المدمجة في كل مشروع." },
        { title: "الملكية الكاملة", desc: "كود نظيف وموثق يمكن لفريقك امتلاكه وصيانته دون التقيد بمورد معين." }
      ],
      process: [
        { step: "01", title: "الاكتشاف والمعمارية", desc: "نقوم برسم خرائط لمتطلباتك وتحديد التقنيات وتصميم معمارية النظام." },
        { step: "02", title: "إعداد نظام التصميم", desc: "إنشاء مكتبات المكونات والتخطيطات المستجيبة للحصول على واجهة مستخدم متناسقة." },
        { step: "03", title: "التطوير التكراري", desc: "دورات تطوير مدتها أسبوعان مع عروض توضيحية عملية. ترى التقدم ونتكيف بسرعة." },
        { step: "04", title: "ضمان الجودة وتدقيق الأداء", desc: "الاختبار الآلي واختبار الحمل وتدقيق Lighthouse قبل الإصدار." },
        { step: "05", title: "الإطلاق والمراقبة", desc: "عمليات نشر دون وقت تعطل مع تتبع الأخطاء في الوقت الفعلي بعد الإطلاق." }
      ],
      cta: "هل أنت مستعد لبناء منتج الويب التالي الخاص بك؟"
    },
    "ui-ux-design": {
      title: "تصميم واجهة وتجربة المستخدم UI/UX",
      tagline: "واجهات مرئية مدفوعة بالوعي النفسي ومصممة لتحقيق أقصى قدر من التفاعل.",
      description: "التصميم الرائع ليس مجرد ديكور - إنه استراتيجية. نحن نجمع بين علم النفس السلوكي ومبادئ التحويل والبراعة البصرية لإنشاء واجهات توجه المستخدمين دون عناء نحو أهدافهم. كل بكسل مقصود ، ويتم اختبار كل تفاعل ، ويتم دعم كل قرار تصميم بالبيانات.",
      features: [
        "أبحاث المستخدم ورسم خرائط الشخصية",
        "الإطارات السلكية والنماذج الأولية التفاعلية",
        "تصميم مرئي عالي الدقة",
        "نظم التصميم ومكتبات المكونات",
        "اختبار سهولة الاستخدام والتدقيق السلوكي",
        "تحسين معدل التحويل (CRO)"
      ],
      benefits: [
        { title: "معدلات تحويل أعلى", desc: "من خلال تقليل الاحتكاك ورسم رحلات مستخدم بديهية ، نعزز عمليات التسجيل والمبيعات بشكل منهجي." },
        { title: "احتفاظ أقوى بالمستخدمين", desc: "الواجهات البديهية والممتعة في الاستخدام تجعل العملاء يعودون يوماً بعد يوم." },
        { title: "تقليل تكلفة التطوير", desc: "إصلاح مشكلات التصميم قبل كتابة الكود يوفر ما يصل إلى 10 أضعاف من إعادة صياغة الهندسة المكلفة." },
        { title: "تجربة علامة تجارية متناسقة", desc: "يضمن نظام التصميم الموحد أن تبدو علامتك التجارية متماسكة واحترافية عبر جميع نقاط الاتصال." }
      ],
      process: [
        { step: "01", title: "أبحاث المستخدم", desc: "نحلل جمهورك ، وندقق الواجهات الحالية ، ونحدد شخصيات المستخدم المستهدفة." },
        { step: "02", title: "تخطيط الإطارات السلكية", desc: "تخطيطات هيكلية منخفضة الدقة مصممة للتوافق مع بنية المعلومات وتدفق المستخدم." },
        { step: "03", title: "واجهة مستخدم عالية الدقة", desc: "نماذج مرئية مذهلة تطبق الخطوط والألوان المخصصة والتصميم المثالي." },
        { step: "04", title: "النمذجة الأولية التفاعلية", desc: "نماذج أولية قابلة للنقر تحاكي تجربة المنتج الحقيقي للاختبار والتسليم للمطورين." },
        { step: "05", title: "التسليم للمطورين", desc: "مواصفات التصميم الكاملة ورموز نظام التصميم والأصول المفصلة لكود نظيف." }
      ],
      cta: "لنقم بإنشاء واجهة سيحبها مستخدموك."
    },
    "mobile-innovation": {
      title: "ابتكار الهواتف المحمولة",
      tagline: "تجارب أصلية عالية الجودة عبر نظامي iOS وأندرويد.",
      description: "الهاتف المحمول هو المكان الذي يعيش فيه مستخدموك. نحن نبني تطبيقات تبدو أصلية وتعمل بشكل لا تشوبه شائبة وتجعل المستخدمين يعودون. سواء كان تطبيقاً للمستهلكين يستهدف الملايين أو أداة مؤسسية لفريقك الميداني ، فإننا نقدم تجارب هاتف محمول مصقولة تبرز في سوق مزدحم.",
      features: [
        "تطوير متعدد المنصات باستخدام React Native و Flutter",
        "تطوير أصيل لنظام iOS (Swift) وأندرويد (Kotlin)",
        "معمارية تركز على العمل دون اتصال أولاً",
        "المصادقة البيومترية والتخزين الآمن",
        "تحسين متجر التطبيقات وجوجل بلاي (ASO)",
        "تحديثات فورية ومزامنة سحابية"
      ],
      benefits: [
        { title: "قاعدة كود واحدة لثلاث منصات", desc: "انشر على نظامي iOS وأندرويد في وقت واحد - مما يقلل وقت وتكلفة التطوير دون التضحية بالجودة." },
        { title: "أداء أصيل وسلس", desc: "نحن نعمل على تحسين الرسومات والرسوم المتحركة والوصول إلى الأجهزة بحيث يبدو التطبيق سلساً للغاية." },
        { title: "تبسيط إطلاق المتجر", desc: "نحن نتعامل مع تقديم التطبيق بالكامل ، والامتثال للخصوصية ، وإعداد القائمة." },
        { title: "تفاعل نشط ومستمر", desc: "استراتيجيات إشعارات مخصصة مصممة لإبقاء المستخدمين نشطين ومتفاعلين." }
      ],
      process: [
        { step: "01", title: "الاستراتيجية والنطاق", desc: "تحديد المنصات المستهدفة ومتطلبات الأجهزة ومجموعة تقنيات الهاتف المحمول المثالية." },
        { step: "02", title: "النمذجة الأولية لتجربة المستخدم", desc: "تخطيطات تفاعلية خاصة بالهاتف المحمول تم اختبارها لسهولة الوصول وحركات التمرير الطبيعية." },
        { step: "03", title: "تطوير سريع متدرج", desc: "ترميز رشيق ومرحلي مع إرسال إصدارات مباشرة إلى جهازك عبر TestFlight." },
        { step: "04", title: "اختبار مصفوفة الأجهزة", desc: "اختبار صارم عبر العديد من أحجام الشاشات وإصدارات أنظمة التشغيل وسرعات الشبكة." },
        { step: "05", title: "تقديم المتجر", desc: "التعامل الكامل مع مراجعات App Store و Google Play حتى يصبح تطبيقك لافتاً ونشطاً." }
      ],
      cta: "فكرة تطبيقك تستحق بناءً بمستوى عالمي."
    },
    "custom-software": {
      title: "برمجيات مخصصة",
      tagline: "حلول مؤسسية مخصصة ومصممة للتوسع والنمو المستمر.",
      description: "البرامج الجاهزة تجبر عملك على التكيف مع الأداة. نحن نعكس هذه المعادلة - نبني برامج تتكيف مع سير عملك الدقيق وتكاملاتك ومتطلبات التوسع الخاصة بك. من الأدوات الداخلية إلى المنصات المؤسسية الكاملة ، نصمم حلولاً تصبح ميزتك التنافسية.",
      features: [
        "نظام تخطيط موارد المؤسسات (ERP)",
        "برنامج CRM مخصص وأتمتة سير العمل",
        "أدوات داخلية ولوحات تحكم للمشرفين",
        "واجهة برمجة تطبيقات خارجية وتكامل مع الأنظمة القديمة",
        "معمارية SaaS متعددة المستأجرين",
        "التحكم في الوصول المستند إلى الأدوار (RBAC)"
      ],
      benefits: [
        { title: "يناسب سير عملك تماماً", desc: "لا حلول بديلة معقدة ، ولا ميزات غير مستخدمة. تم تصميم كل شاشة وتدفق حول كيفية عمل فريقك بالفعل." },
        { title: "يتكامل مع كل شيء", desc: "نحن نربط برنامجك الجديد بمجموعتك الحالية - أنظمة إدارة علاقات العملاء وتخطيط موارد المؤسسات وقواعد البيانات القديمة." },
        { title: "ينمو مع نمو عملك", desc: "المعمارية القابلة للتطوير تعني أنه يمكنك إضافة ميزات وحجم بيانات إضافي دون إعادة البناء." },
        { title: "يقلل من تكلفة العمليات", desc: "تؤدي أتمتة العمليات اليدوية عادةً إلى توفير 15-40٪ في التكاليف التشغيلية لعملائنا في العام الأول." }
      ],
      process: [
        { step: "01", title: "رسم خرائط العمليات", desc: "نوثق سير عملك الحالي ونقاط الألم لتحديد ما يجب بناؤه بالضبط." },
        { step: "02", title: "المواصفات الفنية", desc: "مواصفات تفصيلية تغطي نماذج البيانات وأدوار المستخدم وبروتوكولات الأمان المتفق عليها." },
        { step: "03", title: "ترميز مرن وسريع", desc: "تطوير مرحلي مع عروض توضيحية منتظمة حتى تتمكن من التحقق من كل جزء بشكل مستمر." },
        { step: "04", title: "اختبار قبول المستخدم", desc: "يختبر فريقك البرنامج مقابل سير العمل الحقيقي قبل الإطلاق النهائي." },
        { step: "05", title: "التدريب والتسليم", desc: "توثيق كامل ، وتدريب للمشرفين ، وجلسات تهيئة عملية لمساعدة فريقك." }
      ],
      cta: "حان الوقت لاستبدال جداول البيانات بشيء حقيقي واحترافي."
    },
    "video-production": {
      title: "إنتاج الفيديو والصوت",
      tagline: "قصص علامة تجارية سينمائية، بكرات اجتماعية ديناميكية، ومحتوى وسائط رائد.",
      description: "في عالم بصري، يتم تجاهل الرسائل الثابتة. نحن ننتج محتوى مرئياً سينمائياً عالي التأثير وصوتاً واضحاً للغاية يروي قصة علامتك التجارية الفريدة. من مقاطع الفيديو الترويجية التي تزيد المبيعات إلى مقاطع الفيديو المؤسسية المصقولة للغاية، نتعامل مع كل شيء من السيناريو إلى الشاشة.",
      features: [
        "إعلانات ترويجية وتجارية سينمائية للعلامة التجارية",
        "بكرات وسائل التواصل الاجتماعي ومقاطع فيديو قصيرة",
        "ثقافة الشركة وأبرز لقطات الفريق",
        "مقاطع فيديو لعرض ميزات المنتج",
        "كتابة السيناريو وتصميم لوحة العمل",
        "تصميم صوتي احترافي وتعليقات صوتية"
      ],
      benefits: [
        { title: "تأثير قوي لعلامتك التجارية", desc: "يساعد الفيديو السينمائي عالي الجودة علامتك التجارية على التميز والبقاء في أذهان جمهورك لفترة طويلة." },
        { title: "تحويلات إعلانية أعلى", desc: "تحول إعلانات الفيديو بشكل أفضل بـ 3 مرات من البانرات الثابتة. نصنع هوكس تجعل المشاهدين يواصلون المشاهدة." },
        { title: "قصص مرئية جذابة", desc: "نحول البرمجيات المعقدة أو مفاهيم الخدمة إلى شروحات فيديو بسيطة ومسلية بصرياً." },
        { title: "تنسيقات متعددة المنصات", desc: "نقدم محتوى محسناً لـ LinkedIn و Instagram و YouTube ومواقع الويب." }
      ],
      process: [
        { step: "01", title: "السيناريو والمفهوم", desc: "نحدد الفكرة ونرسم الخط الروائي ونكتب نصوصاً احترافية للموافقة عليها." },
        { step: "02", title: "ما قبل الإنتاج", desc: "تخطيط لوحة العمل واستكشاف مواقع التصوير واختيار الممثلين وتحديد مواعيد التصوير." },
        { step: "03", title: "يوم التصوير", desc: "تصوير عالي الدقة 4K بإضاءة احترافية ومعدات كاميرا وتسجيل صوتي نقي." },
        { step: "04", title: "ما بعد الإنتاج", desc: "التحرير وتصحيح الألوان والتصميم الصوتي المخصص والموشن جرافيكس والماسترنج النهائي." },
        { step: "05", title: "التسليم والنشر", desc: "توفير الملفات النهائية بالتنسيقات المثلى لقنوات التواصل الاجتماعي والمواقع الإلكترونية." }
      ],
      cta: "لنلتقط قصة علامتك التجارية بكاميرا سينمائية."
    },
    "creative-solutions": {
      title: "حلول رقمية إبداعية",
      tagline: "حملات ذات تأثير عالٍ، تصميم جرافيكي، ووسائط رقمية مخصصة.",
      description: "اخترق الضجيج بأصول مرئية قوية وجريئة. نحن نصمم حلولاً رقمية مخصصة - بما في ذلك التصميم الجرافيكي عالي الدقة ، والخطوط الحديثة ، والرسوم التوضيحية المخصصة ، والرسوم المتحركة - التي تؤسس لعلامتك التجارية كقائد حديث في الصناعة.",
      features: [
        "رسوم توضيحية وجرافيكس ویکٹر مخصصة",
        "أصول وسائط تفاعلية لمواقع الويب والتطبيقات",
        "ملفات عرض تقديمية عالية الدقة وعروض مبيعات",
        "موشن جرافيكس وعناصر متحركة",
        "مجموعات وقوالب وسائل التواصل الاجتماعي",
        "تصميم التغليف والعلامة التجارية المادية"
      ],
      benefits: [
        { title: "حضور فريد في السوق", desc: "يؤسس التصميم الإبداعي المخصص سلطة بصرية فريدة لا يمكن للتصاميم القائمة على القوالب الجاهزة مضاهاتها." },
        { title: "تفاعل تفاعلي مرن", desc: "الرسوم المتحركة المخصصة والجرافيكس تجعل موقعك أو تطبيقك يبدو حياً ومتميزاً للغاية." },
        { title: "أصول علامة تجارية موحدة", desc: "كل رسم توضيحي وعرض وجرافيك يتماشى تماماً مع نظام التصميم الخاص بالشركة." },
        { title: "عرض تقديمي مقنع", desc: "ملفات عرض مصممة لتروي قصة واضحة ومقنعة تساعد في إتمام الصفقات وتوسيع المبيعات." }
      ],
      process: [
        { step: "01", title: "الملخص الإبداعي", desc: "نتوافق على أهدافك المرئية ، وشعور الجمهور المستهدف ، وإرشادات تصميم العلامة التجارية." },
        { step: "02", title: "الاتجاه المرئي", desc: "لوحات المزاج ومسودات المفاهيم لتحديد الأسلوب الإبداعي قبل الإنتاج النهائي." },
        { step: "03", title: "إنشاء الأصول", desc: "تصميم أصول ویکٹر عالية الدقة ورسوم توضيحية مخصصة ووسائط رقمية." },
        { step: "04", title: "الحركة والرسوم المتحركة", desc: "إضافة رسوم متحركة مرنة CSS أو فيديو لبث الحياة في أصول التصميم الثابتة." },
        { step: "05", title: "التصدير والتسليم", desc: "توفير جميع الملفات بتنسيقات خام وجاهزة للويب للنشر الفوري والاستفادة منها." }
      ],
      cta: "هل أنت مستعد للارتقاء بأصولك المرئية الرقمية؟"
    },
    "branding-identity": {
      title: "العلامة التجارية والهوية",
      tagline: "أنظمة علامات تجارية استراتيجية مصممة لبناء الثقة والسيادة في السوق.",
      description: "علامتك التجارية هي مصافحتك للعميل وسمعتك ووعدك. نحن نهندس هويات علامات تجارية مؤسسية كاملة من الصفر. لا نرسم شعارات فقط؛ بل نبني أطراً بصرية ومفاهيمية استراتيجية - بما في ذلك الخطوط وإرشادات الصوت - التي تعكس قمة الاحترافية.",
      features: [
        "مجموعة شعارات مؤسسية وخطوط مخصصة",
        "صوت العلامة التجارية ونبرة إرشاد الكتابة",
        "أنظمة ألوان كاملة ورموز العلامة التجارية",
        "توثيق دليل أسلوب العلامة التجارية الكامل",
        "تصميم القرطاسية والمستندات المؤسسية",
        "استراتيجية إعادة إطلاق العلامة التجارية"
      ],
      benefits: [
        { title: "ثقة فورية من العملاء", desc: "تعكس هوية العلامة التجارية المصقولة والمتناسقة على الفور سلطة وموثوقية راسخة." },
        { title: "قدرة على التسعير المتميز", desc: "يمكن للعلامات التجارية القوية والجميلة فرض أسعار أعلى لأنها تبدو وتشعر بالتميز والفخامة." },
        { title: "توافق وتناغم الموظفين", desc: "تضمن الإرشادات الواضحة للعلامة التجارية تواصل مؤسستك بالكامل بصوت واحد ونبرة متسقة." },
        { title: "مستقبل قوي ومضمون", desc: "هوية علامة تجارية قابلة للتطوير تظل ذات صلة مع نمو كتالوج خدماتك وجمهورك المستهدف." }
      ],
      process: [
        { step: "01", title: "اكتشاف العلامة التجارية", desc: "ندقق في موقعك في السوق ونبحث عن المنافسين ونحدد قيم علامتك التجارية الأساسية." },
        { step: "02", title: "مفاهيم الشعار والأسلوب", desc: "تقديم اتجاهات مرئية متعددة وفريدة وعلامات شعار واقتران ألوان للمراجعة والتقييم." },
        { step: "03", title: "صقل وتحسين الهوية", desc: "تلميع المفهوم المختار وتحويله إلى نظام مرئي كامل متوافق مع الخطوط والرموز." },
        { step: "04", title: "إنشاء دليل الأسلوب", desc: "تجميع كتاب العلامة التجارية الرسمي الذي يوثق وضع الشعار والألوان والخطوط بدقة." },
        { step: "05", title: "تعبئة وحفظ الأصول", desc: "تنظيم جميع ملفات التصميم الرقمي والمطبوع في مجموعة علامة تجارية نظيفة وقابلة للبحث." }
      ],
      cta: "لنقم ببناء علامة تجارية تصمد أمام اختبار الزمن وتلفت الأنظار."
    },
    "it-consulting": {
      title: "استشارات تقنية المعلومات",
      tagline: "مواءمة بنيتك التحتية التكنولوجية مع أهداف عملك العالمية الكبرى.",
      description: "يجب أن تسرع التكنولوجيا من نمو عملك، لا أن تعيقه. نحن نقدم استشارات شاملة في مجال تكنولوجيا المعلومات لمراجعة مجموعتك الحالية، وتصميم البنية التحتية السحابية، والتخطيط للتحول الرقمي، وتأسيس أطر عمل آمنة وموفرة للتكاليف وسريعة.",
      features: [
        "تدقيق كامل للبنية التحتية والبرمجيات",
        "استراتيجية الهجرة السحابية (AWS / GCP)",
        "إطار عمل أمن تكنولوجيا المعلومات والامتثال",
        "خارطة طريق لتحديث مجموعة التقنيات",
        "تحسين التكاليف وتخطيط الموارد السحابية",
        "استراتيجية النسخ الاحتياطي والتعافي من الكوارث"
      ],
      benefits: [
        { title: "القضاء على الديون التقنية", desc: "نحدد الاختناقات في الأنظمة القديمة ونستبدلها بأطر عمل حديثة وسهلة الصيانة." },
        { title: "توفير هائل في البنية التحتية", desc: "يقلل تحسين تخصيص الموارد السحابية عادةً من فواتير الخادم والخدمات بنسبة 20-50٪." },
        { title: "أمان بمستوى المؤسسات الكبرى", desc: "مخططات حماية بيانات مضادة للاختراق، ومعمارية امتثال، وتخطيط للثغرات الأمنية." },
        { title: "معمارية جاهزة للمستقبل", desc: "توسيع الأنظمة بشكل طبيعي وتلقائي دون حدوث أي تعطل خلال أوقات النشاط والزيارات المكثفة." }
      ],
      process: [
        { step: "01", title: "تدقيق النظام", desc: "نحلل قواعد التعليمات البرمجية الحالية وبيئات الاستضافة وسير عمل تقنية المعلومات." },
        { step: "02", title: "صياغة الاستراتيجية", desc: "تطوير خطة تحول رقمي مخصصة بجدول زمني وميزانية واضحة ومحددة." },
        { step: "03", title: "تصميم المعمارية", desc: "تصميم مخططات سحابية آمنة ومحسنة التكلفة وخطوط أنابيب اتصالات برمجية مرنة." },
        { step: "04", title: "دعم التنفيذ والهجرة", desc: "توجيه فريقك الهندسي الداخلي أو تنفيذ الهجرة دون أي وقت تعطل أو انقطاع للخدمة." },
        { step: "05", title: "المراقبة والمراجعة", desc: "إنشاء لوحات مراقبة صحة الخادم ونقاط فحص المراجعة المنتظمة." }
      ],
      cta: "لنقم ببناء خارطة طريق تكنولوجية واضحة لمستقبلك الرقمي."
    }
  }
};
