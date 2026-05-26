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
    "ai-content-writing": {
      title: "AI Content Writing",
      tagline: "High-quality, SEO-optimized content produced at scale with AI precision.",
      description: "We combine AI efficiency with expert human editing to produce content that ranks, converts, and sounds authentically human. From blog posts and landing page copy to product descriptions and email sequences — we deliver content at scale without sacrificing quality.",
      features: ["SEO blog posts & articles", "Landing page copywriting", "Product descriptions at scale", "Email marketing sequences", "Social media content", "AI-assisted research & outlines", "Brand voice consistency", "Multilingual content", "Content calendar planning"],
      benefits: [
        { title: "10x Content Output", desc: "AI-assisted workflows let us produce in days what would take a traditional agency weeks — without the bloated retainer fees." },
        { title: "SEO-Optimized From Day One", desc: "Every piece is built around target keywords, proper heading structure, and search intent — so content ranks, not just reads well." },
        { title: "Consistent Brand Voice", desc: "We build a brand voice guide upfront and apply it across every piece, so your content sounds like you — at any volume." },
        { title: "Fraction of Agency Cost", desc: "Get the output of a full content team at a fraction of the cost. AI handles the heavy lifting; our editors ensure the quality." }
      ],
      process: [
        { step: "01", title: "Brand Voice & Tone Setup", desc: "We document your brand voice, tone guidelines, and style preferences so every piece of content is unmistakably yours." },
        { step: "02", title: "Keyword & Topic Research", desc: "We identify the topics and keywords your audience is searching for and build a content strategy around real search demand." },
        { step: "03", title: "AI-Assisted Draft Creation", desc: "Our AI workflows generate structured, research-backed drafts at speed — covering your content calendar without bottlenecks." },
        { step: "04", title: "Expert Human Editing & QA", desc: "Every draft is reviewed and refined by experienced editors who check for accuracy, tone, SEO alignment, and readability." },
        { step: "05", title: "Publishing & Performance Tracking", desc: "We handle publishing, track rankings and engagement, and use performance data to continuously improve the content strategy." }
      ],
      cta: "Scale your content without scaling your team."
    },
    "saas-development": {
      title: "SaaS Development",
      tagline: "Multi-tenant cloud platforms engineered for scale and recurring revenue.",
      description: "We architect and build production-ready SaaS platforms from the ground up. Multi-tenant architecture, subscription billing, role-based access, and the infrastructure to support thousands of concurrent users — all engineered for reliability and rapid feature iteration.",
      features: ["Multi-tenant architecture", "Stripe subscription billing", "Role-based access control", "Admin dashboard & analytics", "API-first design", "White-label capabilities", "Usage metering & limits", "Onboarding & user management", "99.9% uptime SLA architecture"],
      benefits: [
        { title: "Recurring Revenue Model", desc: "We build the billing infrastructure — subscription tiers, trials, upgrades, and invoicing — so you can focus on growing MRR from day one." },
        { title: "Scales With Your Growth", desc: "Multi-tenant architecture and cloud-native infrastructure mean your platform handles 10 users or 10,000 without a rewrite." },
        { title: "Fast Feature Iteration", desc: "Clean, modular codebases and CI/CD pipelines let you ship new features weekly without breaking what's already working." },
        { title: "Enterprise Ready", desc: "SSO, audit logs, role-based permissions, and white-label options make your SaaS attractive to enterprise buyers from the start." }
      ],
      process: [
        { step: "01", title: "Product Architecture", desc: "We define your data model, tenant isolation strategy, and system architecture to ensure the foundation supports your long-term roadmap." },
        { step: "02", title: "Tenant & Auth System", desc: "Multi-tenant data isolation, SSO integration, role-based access control, and secure session management built from the ground up." },
        { step: "03", title: "Core Feature Development", desc: "Iterative sprints delivering your core product features with working demos, feedback loops, and production-quality code." },
        { step: "04", title: "Billing & Subscription Setup", desc: "Stripe integration with subscription plans, trial periods, usage-based billing, and a self-serve upgrade/downgrade flow." },
        { step: "05", title: "Launch & Growth Infrastructure", desc: "Zero-downtime deployments, monitoring, alerting, and the analytics dashboards you need to understand and grow your user base." }
      ],
      cta: "Let's build your SaaS product the right way."
    },
    "ai-powered-apps": {
      title: "AI Powered Applications",
      tagline: "Intelligent software that learns, adapts, and automates your business.",
      description: "We build custom AI-powered applications that go beyond simple automation. From LLM-integrated tools and RAG pipelines to computer vision and predictive analytics, we engineer intelligent systems that give your business a real competitive edge.",
      features: ["LLM & GPT-4 integration", "RAG pipeline development", "AI chatbots & virtual agents", "Computer vision systems", "Predictive analytics & ML models", "Workflow automation with AI", "Natural language processing", "AI-powered search & recommendations", "Custom model fine-tuning"],
      benefits: [
        { title: "Real Competitive Advantage", desc: "AI capabilities that are custom-built for your workflows give you an edge competitors can't easily replicate with off-the-shelf tools." },
        { title: "Massive Automation Savings", desc: "Automate repetitive, time-consuming tasks and redeploy your team's energy toward high-value work that actually moves the needle." },
        { title: "24/7 Intelligent Operation", desc: "AI systems don't sleep. Your business processes, customer interactions, and data pipelines run continuously without manual intervention." },
        { title: "Data-Driven Decisions", desc: "Turn raw data into actionable intelligence with predictive models and analytics that surface insights humans would miss." }
      ],
      process: [
        { step: "01", title: "AI Strategy & Use Case Definition", desc: "We identify the highest-impact AI opportunities in your business and define clear, measurable goals before any development begins." },
        { step: "02", title: "Data Audit & Preparation", desc: "We assess your existing data assets, identify gaps, and build the pipelines needed to feed your AI systems clean, structured data." },
        { step: "03", title: "Model Selection & Architecture", desc: "We choose the right models and frameworks — whether fine-tuned LLMs, custom ML models, or third-party APIs — for your specific use case." },
        { step: "04", title: "Development & Integration", desc: "We build and integrate the AI system into your existing stack, with robust APIs, fallback handling, and full observability." },
        { step: "05", title: "Monitoring & Continuous Learning", desc: "Post-launch, we monitor model performance, track drift, and iterate to keep your AI system accurate and improving over time." }
      ],
      cta: "Ready to make your business AI-powered?"
    },
    "seo": {
      title: "SEO & Growth",
      tagline: "Technical SEO and content strategy that drives compounding organic growth.",
      description: "We combine deep technical SEO expertise with data-driven content strategy to build sustainable organic traffic. From Core Web Vitals optimization and structured data to keyword architecture and link building — we engineer search visibility that compounds over time.",
      features: ["Technical SEO audit & fixes", "Core Web Vitals optimization", "Keyword research & architecture", "On-page SEO optimization", "Structured data & schema markup", "Link building strategy", "Content strategy & planning", "Local SEO optimization", "SEO performance reporting"],
      benefits: [
        { title: "Compounding Organic Traffic", desc: "Unlike paid ads that stop the moment you pause spend, SEO builds an asset that grows month over month and pays dividends long-term." },
        { title: "Lower CAC Than Paid Ads", desc: "Organic traffic has no per-click cost. As rankings improve, your customer acquisition cost drops while volume increases." },
        { title: "Authority & Trust Building", desc: "High rankings signal credibility to both search engines and users. We build the topical authority that makes your brand the go-to source." },
        { title: "Measurable ROI", desc: "Every action we take is tracked. You see exactly which keywords are ranking, how traffic is converting, and what the revenue impact is." }
      ],
      process: [
        { step: "01", title: "SEO Audit & Baseline", desc: "A full technical and content audit to identify what's holding your site back — crawl issues, indexation problems, and missed opportunities." },
        { step: "02", title: "Keyword & Competitor Research", desc: "We map the keyword landscape, identify high-value targets, and analyze what your top competitors are doing to outrank them." },
        { step: "03", title: "Technical Fixes & On-Page", desc: "We fix the technical foundation — site speed, Core Web Vitals, structured data, internal linking — and optimize every key page." },
        { step: "04", title: "Content & Link Strategy", desc: "A content calendar targeting your priority keywords, paired with a link building strategy to build domain authority over time." },
        { step: "05", title: "Monthly Reporting & Iteration", desc: "Clear monthly reports showing ranking movements, traffic growth, and conversion impact — with strategy adjustments based on real data." }
      ],
      cta: "Start ranking where your customers are searching."
    },
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
    "ai-content-writing": {
      title: "AI مواد کی تحریر",
      tagline: "AI کی درستگی کے ساتھ اعلی معیار کا، SEO کے لیے موزوں مواد۔",
      description: "ہم AI کی کارکردگی کو ماہر انسانی ایڈیٹنگ کے ساتھ ملاتے ہیں تاکہ ایسا مواد تیار کیا جا سکے جو رینک کرے، کنورٹ کرے اور مستند طور پر انسانی لگے۔ بلاگ پوسٹس اور لینڈنگ پیج کاپی سے لے کر پروڈکٹ کی تفصیلات اور ای میل کی ترتیب تک — ہم معیار کی قربانی کے بغیر بڑے پیمانے پر مواد فراہم کرتے ہیں۔",
      features: ["SEO بلاگ پوسٹس اور مضامین", "لینڈنگ پیج کاپی رائٹنگ", "بڑے پیمانے پر پروڈکٹ کی تفصیلات", "ای میل مارکیٹنگ کی ترتیب", "سوشل میڈیا مواد", "AI کی مدد سے تحقیق اور خاکہ", "برانڈ کی آواز میں مستقل مزاجی", "کثیر لسانی مواد", "مواد کیلنڈر کی منصوبہ بندی"],
      benefits: [
        { title: "10x مواد کی پیداوار", desc: "AI کی مدد سے کام کرنے کے عمل ہمیں دنوں میں وہ کام کرنے دیتے ہیں جو روایتی ایجنسیوں کو ہفتوں میں لگتا ہے — بھاری فیس کے بغیر۔" },
        { title: "پہلے دن سے SEO کے لیے موزوں", desc: "ہر ٹکڑا ٹارگٹ کلیدی الفاظ، مناسب ہیڈنگ کی ساخت، اور تلاش کے ارادے کے ارد گرد بنایا گیا ہے — تاکہ مواد رینک کرے، نہ کہ صرف اچھی طرح سے پڑھا جائے۔" },
        { title: "مستقل برانڈ کی آواز", desc: "ہم شروع میں ہی ایک برانڈ وائس گائیڈ بناتے ہیں اور اسے ہر ٹکڑے پر لاگو کرتے ہیں، تاکہ آپ کا مواد آپ کی طرح لگے — کسی بھی حجم پر۔" },
        { title: "ایجنسی کی لاگت کا ایک حصہ", desc: "لاگت کے ایک حصے پر ایک مکمل مواد کی ٹیم کی پیداوار حاصل کریں۔ AI بھاری کام سنبھالتا ہے؛ ہمارے ایڈیٹرز معیار کو یقینی بناتے ہیں۔" }
      ],
      process: [
        { step: "01", title: "برانڈ کی آواز اور لہجہ سیٹ اپ", desc: "ہم آپ کے برانڈ کی آواز، لہجے کے رہنما خطوط، اور طرز کی ترجیحات کو دستاویز کرتے ہیں تاکہ ہر مواد غیر واضح طور پر آپ کا ہو۔" },
        { step: "02", title: "کلیدی لفظ اور موضوع کی تحقیق", desc: "ہم ان موضوعات اور کلیدی الفاظ کی نشاندہی کرتے ہیں جن کی آپ کے سامعین تلاش کر رہے ہیں اور حقیقی تلاش کی مانگ کے ارد گرد مواد کی حکمت عملی بناتے ہیں۔" },
        { step: "03", title: "AI کی مدد سے مسودہ کی تخلیق", desc: "ہمارا AI ورک فلو تیز رفتاری سے ساختی، تحقیق پر مبنی مسودے تیار کرتا ہے — رکاوٹوں کے بغیر آپ کے مواد کے کیلنڈر کا احاطہ کرتا ہے۔" },
        { step: "04", title: "ماہر انسانی ایڈیٹنگ اور QA", desc: "تجربہ کار ایڈیٹرز کے ذریعے ہر مسودے کا جائزہ لیا جاتا ہے اور اسے بہتر بنایا جاتا ہے جو درستگی، لہجے، SEO کی صف بندی، اور پڑھنے کی اہلیت کی جانچ کرتے ہیں۔" },
        { step: "05", title: "اشاعت اور کارکردگی سے باخبر رہنا", desc: "ہم اشاعت کو سنبھالتے ہیں، درجہ بندی اور مشغولیت کو ٹریک کرتے ہیں، اور مواد کی حکمت عملی کو مسلسل بہتر بنانے کے لیے کارکردگی کے ڈیٹا کا استعمال کرتے ہیں۔" }
      ],
      cta: "اپنی ٹیم کو بڑھائے بغیر اپنے مواد کو بڑھائیں۔"
    },
    "saas-development": {
      title: "SaaS ڈیولپمنٹ",
      tagline: "اسکیل اور بار بار چلنے والی آمدنی کے لیے تیار کردہ ملٹی ٹیننٹ کلاؤڈ پلیٹ فارمز۔",
      description: "ہم گراؤنڈ اپ سے پروڈکشن کے لیے تیار SaaS پلیٹ فارمز کو تیار اور تعمیر کرتے ہیں۔ ملٹی ٹیننٹ آرکیٹیکچر، سبسکرپشن بلنگ، رول پر مبنی رسائی، اور ہزاروں ہم وقت ساز صارفین کی حمایت کرنے کے لیے انفراسٹرکچر — سب وشوسنییتا اور تیز رفتار خصوصیت کی تکرار کے لیے تیار کیے گئے ہیں۔",
      features: ["ملٹی ٹیننٹ آرکیٹیکچر", "Stripe سبسکرپشن بلنگ", "رول پر مبنی رسائی کنٹرول", "ایڈمن ڈیش بورڈ اور تجزیات", "API-پہلا ڈیزائن", "وائٹ لیبل کی صلاحیتیں", "استعمال کی پیمائش اور حدود", "آن بورڈنگ اور صارف کا انتظام", "99.9% اپ ٹائم SLA آرکیٹیکچر"],
      benefits: [
        { title: "بار بار چلنے والا ریونیو ماڈل", desc: "ہم بلنگ انفراسٹرکچر بناتے ہیں — سبسکرپشن کے درجات، ٹرائلز، اپ گریڈز، اور انوائسنگ — تاکہ آپ پہلے دن سے MRR کو بڑھانے پر توجہ مرکوز کر سکیں۔" },
        { title: "آپ کی ترقی کے ساتھ ترازو", desc: "ملٹی ٹیننٹ آرکیٹیکچر اور کلاؤڈ نیٹیو انفراسٹرکچر کا مطلب ہے کہ آپ کا پلیٹ فارم 10 صارفین یا 10,000 کو دوبارہ لکھے بغیر سنبھالتا ہے۔" },
        { title: "تیز خصوصیت کی تکرار", desc: "صاف، ماڈیولر کوڈ بیس اور CI/CD پائپ لائنز آپ کو ہفتہ وار نئی خصوصیات بھیجنے کی اجازت دیتی ہیں جو پہلے سے کام کر رہا ہے اسے توڑے بغیر۔" },
        { title: "انٹرپرائز تیار", desc: "SSO، آڈٹ لاگز، رول پر مبنی اجازتیں، اور وائٹ لیبل کے اختیارات شروع سے ہی آپ کے SaaS کو انٹرپرائز خریداروں کے لیے پرکشش بناتے ہیں۔" }
      ],
      process: [
        { step: "01", title: "پروڈکٹ آرکیٹیکچر", desc: "ہم آپ کے ڈیٹا ماڈل، کرایہ دار کی تنہائی کی حکمت عملی، اور سسٹم کے فن تعمیر کی وضاحت کرتے ہیں تاکہ اس بات کو یقینی بنایا جا سکے کہ فاؤنڈیشن آپ کے طویل مدتی روڈ میپ کی حمایت کرتا ہے۔" },
        { step: "02", title: "کرایہ دار اور تصدیقی نظام", desc: "ملٹی ٹیننٹ ڈیٹا آئسولیشن، SSO انضمام، رول پر مبنی رسائی کنٹرول، اور گراؤنڈ اپ سے بنایا گیا محفوظ سیشن مینجمنٹ۔" },
        { step: "03", title: "بنیادی خصوصیت کی ترقی", desc: "ورکنگ ڈیمو، فیڈ بیک لوپس، اور پروڈکشن کوالٹی کوڈ کے ساتھ آپ کی بنیادی مصنوعات کی خصوصیات فراہم کرنے والے تکراری اسپرنٹ۔" },
        { step: "04", title: "بلنگ اور سبسکرپشن سیٹ اپ", desc: "سبسکرپشن پلانز، آزمائشی ادوار، استعمال پر مبنی بلنگ، اور سیلف سرو اپ گریڈ/ڈاؤن گریڈ فلو کے ساتھ پٹی کا انضمام۔" },
        { step: "05", title: "لانچ اور گروتھ انفراسٹرکچر", desc: "زیرو ڈاون ٹائم ڈیپلوئمنٹ، مانیٹرنگ، الرٹ، اور تجزیاتی ڈیش بورڈز جن کی آپ کو سمجھنے اور اپنے یوزر بیس کو بڑھانے کی ضرورت ہے۔" }
      ],
      cta: "آئیے آپ کا SaaS پروڈکٹ صحیح طریقے سے بنائیں۔"
    },
    "ai-powered-apps": {
      title: "AI سے چلنے والی ایپلی کیشنز",
      tagline: "ذہین سافٹ ویئر جو سیکھتا ہے، اپناتا ہے اور آپ کے کاروبار کو خودکار بناتا ہے۔",
      description: "ہم اپنی مرضی کے مطابق AI سے چلنے والی ایپلی کیشنز بناتے ہیں جو سادہ آٹومیشن سے آگے بڑھ جاتی ہیں۔ LLM-مربوط ٹولز اور RAG پائپ لائنز سے لے کر کمپیوٹر وژن اور پیشن گوئی کے تجزیات تک، ہم ایسے ذہین نظاموں کو انجینئر کرتے ہیں جو آپ کے کاروبار کو حقیقی مسابقتی برتری دیتے ہیں۔",
      features: ["LLM اور GPT-4 کا انضمام", "RAG پائپ لائن کی ترقی", "AI چیٹ بوٹس اور ورچوئل ایجنٹس", "کمپیوٹر وژن سسٹمز", "پیشن گوئی کے تجزیات اور ML ماڈلز", "AI کے ساتھ ورک فلو آٹومیشن", "نیچرل لینگویج پروسیسنگ", "AI سے چلنے والی تلاش اور سفارشات", "کسٹم ماڈل کی فائن ٹیوننگ"],
      benefits: [
        { title: "حقیقی مسابقتی فائدہ", desc: "آپ کے ورک فلو کے لیے حسب ضرورت بنائی گئی AI صلاحیتیں آپ کو ایک ایسا کنارہ دیتی ہیں جسے حریف آف دی شیلف ٹولز کے ساتھ آسانی سے نقل نہیں کر سکتے۔" },
        { title: "بڑے پیمانے پر آٹومیشن کی بچت", desc: "بار بار ہونے والے، وقت طلب کاموں کو خودکار بنائیں اور اپنی ٹیم کی توانائی کو اعلی قیمت والے کام کی طرف دوبارہ تعینات کریں جو حقیقت میں سوئی کو منتقل کرتا ہے۔" },
        { title: "24/7 ذہین آپریشن", desc: "AI سسٹم نہیں سوتے ہیں۔ آپ کے کاروباری عمل، گاہک کی بات چیت، اور ڈیٹا پائپ لائنز دستی مداخلت کے بغیر مسلسل چلتی رہتی ہیں۔" },
        { title: "ڈیٹا سے چلنے والے فیصلے", desc: "خام ڈیٹا کو قابل عمل انٹیلی جنس میں تبدیل کریں جس میں پیشن گوئی کرنے والے ماڈلز اور تجزیات ہیں جو بصیرت کو ظاہر کرتے ہیں جو انسانوں سے چھوٹ جائیں گے۔" }
      ],
      process: [
        { step: "01", title: "AI حکمت عملی اور کیس کی تعریف کا استعمال کریں", desc: "ہم آپ کے کاروبار میں سب سے زیادہ اثر انداز ہونے والے AI مواقع کی نشاندہی کرتے ہیں اور کسی بھی ترقی کے شروع ہونے سے پہلے واضح، قابل پیمائش اہداف کی وضاحت کرتے ہیں۔" },
        { step: "02", title: "ڈیٹا آڈٹ اور تیاری", desc: "ہم آپ کے موجودہ ڈیٹا اثاثوں کا جائزہ لیتے ہیں، خلا کی نشاندہی کرتے ہیں، اور آپ کے AI سسٹمز کو صاف، ساختی ڈیٹا فراہم کرنے کے لیے درکار پائپ لائنز بناتے ہیں۔" },
        { step: "03", title: "ماڈل کا انتخاب اور فن تعمیر", desc: "ہم آپ کے مخصوص استعمال کے معاملے کے لیے صحیح ماڈلز اور فریم ورک کا انتخاب کرتے ہیں — خواہ وہ ٹھیک ٹون شدہ LLMs ہوں، کسٹم ML ماڈلز ہوں، یا تھرڈ پارٹی APIs ہوں۔" },
        { step: "04", title: "ترقی اور انضمام", desc: "ہم مضبوط APIs، فال بیک ہینڈلنگ، اور مکمل مشاہدے کے ساتھ، آپ کے موجودہ اسٹیک میں AI سسٹم کی تعمیر اور انضمام کرتے ہیں۔" },
        { step: "05", title: "نگرانی اور مسلسل سیکھنا", desc: "پوسٹ لانچ، ہم ماڈل کی کارکردگی کی نگرانی کرتے ہیں، ڈرفٹ کو ٹریک کرتے ہیں، اور آپ کے AI سسٹم کو درست رکھنے اور وقت کے ساتھ ساتھ بہتر بنانے کے لیے اعادہ کرتے ہیں۔" }
      ],
      cta: "اپنے کاروبار کو AI سے چلنے والا بنانے کے لیے تیار ہیں؟"
    },
    "seo": {
      title: "SEO اور ترقی",
      tagline: "تکنیکی SEO اور مواد کی حکمت عملی جو نامیاتی ترقی کو بڑھاتی ہے۔",
      description: "ہم پائیدار نامیاتی ٹریفک کی تعمیر کے لیے گہری تکنیکی SEO مہارت کو ڈیٹا پر مبنی مواد کی حکمت عملی کے ساتھ جوڑتے ہیں۔ بنیادی ویب وائٹلز کی اصلاح اور سٹرکچرڈ ڈیٹا سے لے کر کلیدی الفاظ کے فن تعمیر اور لنک بلڈنگ تک — ہم تلاش کی مرئیت کو انجینئر کرتے ہیں جو وقت کے ساتھ بڑھتی ہے۔",
      features: ["تکنیکی SEO آڈٹ اور اصلاحات", "بنیادی ویب وائٹلز کی اصلاح", "مطلوبہ الفاظ کی تحقیق اور فن تعمیر", "آن پیج SEO کی اصلاح", "سٹرکچرڈ ڈیٹا اور سکیما مارک اپ", "لنک بنانے کی حکمت عملی", "مواد کی حکمت عملی اور منصوبہ بندی", "مقامی SEO کی اصلاح", "SEO کی کارکردگی کی رپورٹنگ"],
      benefits: [
        { title: "کمپاؤنڈنگ آرگینک ٹریفک", desc: "بامعاوضہ اشتہارات کے برعکس جو آپ کے اخراجات کو روکتے ہی رک جاتے ہیں، SEO ایک ایسا اثاثہ بناتا ہے جو مہینہ در مہینہ بڑھتا ہے اور طویل مدتی منافع ادا کرتا ہے۔" },
        { title: "بامعاوضہ اشتہارات سے کم CAC", desc: "نامیاتی ٹریفک کی کوئی فی کلک قیمت نہیں ہے۔ جیسے جیسے درجہ بندی بہتر ہوتی ہے، حجم میں اضافے کے ساتھ آپ کے گاہک کے حصول کی لاگت گرتی ہے۔" },
        { title: "اتھارٹی اور اعتماد سازی", desc: "اعلی درجہ بندی سرچ انجنوں اور صارفین دونوں کو اعتبار کا اشارہ دیتی ہے۔ ہم موضوعی اختیار بناتے ہیں جو آپ کے برانڈ کو جانے کا ذریعہ بناتا ہے۔" },
        { title: "قابل پیمائش ROI", desc: "ہماری ہر کارروائی کو ٹریک کیا جاتا ہے۔ آپ بالکل دیکھتے ہیں کہ کون سے مطلوبہ الفاظ کی درجہ بندی کی جا رہی ہے، ٹریفک کیسے تبدیل ہو رہی ہے، اور آمدنی پر کیا اثرات مرتب ہو رہے ہیں۔" }
      ],
      process: [
        { step: "01", title: "SEO آڈٹ اور بیس لائن", desc: "یہ شناخت کرنے کے لیے ایک مکمل تکنیکی اور مواد کا آڈٹ کہ آپ کی سائٹ کو کیا چیز روک رہی ہے — رینگنے کے مسائل، اشاریہ سازی کے مسائل، اور کھوئے ہوئے مواقع۔" },
        { step: "02", title: "مطلوبہ الفاظ اور حریف کی تحقیق", desc: "ہم مطلوبہ الفاظ کی زمین کی تزئین کا نقشہ بناتے ہیں، اعلی قیمت والے اہداف کی نشاندہی کرتے ہیں، اور تجزیہ کرتے ہیں کہ آپ کے سرکردہ حریف ان کو پیچھے چھوڑنے کے لیے کیا کر رہے ہیں۔" },
        { step: "03", title: "تکنیکی اصلاحات اور آن پیج", desc: "ہم تکنیکی فاؤنڈیشن کو ٹھیک کرتے ہیں — سائٹ کی رفتار، بنیادی ویب وائٹلز، سٹرکچرڈ ڈیٹا، اندرونی لنکنگ — اور ہر کلیدی صفحہ کو بہتر بناتے ہیں۔" },
        { step: "04", title: "مواد اور لنک کی حکمت عملی", desc: "وقت کے ساتھ ڈومین اتھارٹی بنانے کے لیے لنک بنانے کی حکمت عملی کے ساتھ آپ کے ترجیحی مطلوبہ الفاظ کو نشانہ بنانے والا مواد کیلنڈر۔" },
        { step: "05", title: "ماہانہ رپورٹنگ اور تکرار", desc: "درجہ بندی کی نقل و حرکت، ٹریفک کی ترقی، اور تبادلوں کے اثرات کو ظاہر کرنے والی واضح ماہانہ رپورٹیں — حقیقی ڈیٹا کی بنیاد پر حکمت عملی ایڈجسٹمنٹ کے ساتھ۔" }
      ],
      cta: "وہاں درجہ بندی شروع کریں جہاں آپ کے گاہک تلاش کر رہے ہیں۔"
    },
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
    "ai-content-writing": {
      title: "كتابة المحتوى بالذكاء الاصطناعي",
      tagline: "محتوى عالي الجودة ومحسن لمحركات البحث يتم إنتاجه على نطاق واسع بدقة الذكاء الاصطناعي.",
      description: "نحن نجمع بين كفاءة الذكاء الاصطناعي والتحرير البشري الخبير لإنتاج محتوى يحتل مرتبة ويتحول ويبدو إنسانيًا أصليًا. من منشورات المدونة ونسخ الصفحة المقصودة إلى أوصاف المنتج وتسلسلات البريد الإلكتروني - نقدم محتوى على نطاق واسع دون التضحية بالجودة.",
      features: ["منشورات ومقالات مدونة SEO", "كتابة نصوص الصفحة المقصودة", "أوصاف المنتج على نطاق واسع", "تسلسلات التسويق عبر البريد الإلكتروني", "محتوى وسائل التواصل الاجتماعي", "البحث والخطوط العريضة بمساعدة الذكاء الاصطناعي", "اتساق صوت العلامة التجارية", "محتوى متعدد اللغات", "تخطيط تقويم المحتوى"],
      benefits: [
        { title: "إنتاج محتوى بمقدار 10 أضعاف", desc: "تتيح لنا مهام سير العمل بمساعدة الذكاء الاصطناعي إنتاج ما تستغرقه الوكالة التقليدية أسابيع في أيام - دون رسوم التجنيب المتضخمة." },
        { title: "محسّن لمحركات البحث من اليوم الأول", desc: "تم بناء كل قطعة حول الكلمات الرئيسية المستهدفة، وهيكل العنوان المناسب، وهدف البحث - بحيث يحتل المحتوى مرتبة، ولا يقرأ جيدًا فقط." },
        { title: "صوت العلامة التجارية المتسق", desc: "نقوم بإنشاء دليل صوتي للعلامة التجارية مقدمًا ونطبقه عبر كل قطعة، لذلك يبدو المحتوى الخاص بك مثلك - في أي حجم." },
        { title: "جزء بسيط من تكلفة الوكالة", desc: "احصل على مخرجات فريق محتوى كامل بجزء بسيط من التكلفة. يتعامل الذكاء الاصطناعي مع الرفع الثقيل؛ يضمن محررونا الجودة." }
      ],
      process: [
        { step: "01", title: "إعداد صوت ونبرة العلامة التجارية", desc: "نوثق صوت علامتك التجارية وإرشادات النغمة وتفضيلات الأسلوب بحيث تكون كل قطعة محتوى خاصة بك بشكل لا لبس فيه." },
        { step: "02", title: "بحث الكلمات الرئيسية والموضوعات", desc: "نحدد الموضوعات والكلمات الرئيسية التي يبحث عنها جمهورك ونبني استراتيجية محتوى حول طلب البحث الحقيقي." },
        { step: "03", title: "إنشاء مسودة بمساعدة الذكاء الاصطناعي", desc: "تُنشئ مهام سير عمل الذكاء الاصطناعي لدينا مسودات منظمة ومدعومة بالأبحاث بسرعة - تغطي تقويم المحتوى الخاص بك دون اختناقات." },
        { step: "04", title: "تحرير بشري خبير وضمان جودة", desc: "تتم مراجعة كل مسودة وتحسينها من قبل محررين ذوي خبرة يتحققون من الدقة والنغمة ومحاذاة تحسين محركات البحث وقابلية القراءة." },
        { step: "05", title: "النشر وتتبع الأداء", desc: "نتعامل مع النشر، ونتتبع التصنيفات والمشاركة، ونستخدم بيانات الأداء لتحسين استراتيجية المحتوى بشكل مستمر." }
      ],
      cta: "توسيع نطاق المحتوى الخاص بك دون توسيع نطاق فريقك."
    },
    "saas-development": {
      title: "تطوير SaaS",
      tagline: "منصات سحابية متعددة المستأجرين مصممة من أجل الحجم والإيرادات المتكررة.",
      description: "نقوم بتصميم وبناء منصات SaaS الجاهزة للإنتاج من الألف إلى الياء. البنية متعددة المستأجرين، وفواتير الاشتراك، والوصول القائم على الأدوار، والبنية التحتية لدعم الآلاف من المستخدمين المتزامنين - تم تصميمها جميعًا من أجل الموثوقية والتكرار السريع للميزات.",
      features: ["العمارة متعددة المستأجرين", "فواتير الاشتراك عبر Stripe", "التحكم في الوصول على أساس الدور", "لوحة تحكم المشرف والتحليلات", "تصميم يعتمد على واجهة برمجة التطبيقات (API) أولاً", "قدرات التسمية البيضاء", "قياس الاستخدام والحدود", "تأهيل المستخدمين وإدارتهم", "هيكل بنسبة 99.9% من اتفاقية مستوى الخدمة (SLA)"],
      benefits: [
        { title: "نموذج الإيرادات المتكررة", desc: "نقوم ببناء البنية التحتية للفوترة - مستويات الاشتراك والتجارب والترقيات وإعداد الفواتير - حتى تتمكن من التركيز على تنمية الإيرادات الشهرية المتكررة من اليوم الأول." },
        { title: "تتوسع مع نموك", desc: "تعني البنية متعددة المستأجرين والبنية التحتية السحابية الأصلية أن نظامك الأساسي يتعامل مع 10 مستخدمين أو 10000 بدون إعادة كتابة." },
        { title: "تكرار سريع للميزات", desc: "تتيح لك قواعد الأوامر البرمجية وخطوط أنابيب CI / CD النظيفة والمعيارية شحن ميزات جديدة أسبوعيًا دون كسر ما يعمل بالفعل." },
        { title: "جاهز للمؤسسات", desc: "إن الدخول الموحد، وسجلات التدقيق، والأذونات القائمة على الأدوار، وخيارات التسمية البيضاء تجعل SaaS الخاصة بك جذابة لمشتري المؤسسات منذ البداية." }
      ],
      process: [
        { step: "01", title: "هندسة المنتج", desc: "نحدد نموذج البيانات واستراتيجية عزل المستأجر وهيكل النظام لضمان دعم الأساس لخارطة الطريق طويلة المدى." },
        { step: "02", title: "نظام المستأجر والمصادقة", desc: "عزل بيانات متعددة المستأجرين، وتكامل الدخول الموحد، والتحكم في الوصول القائم على الأدوار، وإدارة الجلسة الآمنة المبنية من الألف إلى الياء." },
        { step: "03", title: "تطوير الميزات الأساسية", desc: "سباقات تكرارية تقدم ميزات منتجك الأساسية مع عروض تجريبية وحلقات ملاحظات وكود جودة الإنتاج." },
        { step: "04", title: "إعداد الفواتير والاشتراك", desc: "تكامل Stripe مع خطط الاشتراك، والفترات التجريبية، والفوترة القائمة على الاستخدام، وتدفق الترقية / الرجوع الذاتي الخدمة." },
        { step: "05", title: "البنية التحتية للإطلاق والنمو", desc: "عمليات النشر، والمراقبة، والتنبيه، ولوحات معلومات التحليلات التي لا تستدعي وقت توقف عن العمل، والتي تحتاجها لفهم وتنمية قاعدة المستخدمين." }
      ],
      cta: "دعنا نبني منتج SaaS الخاص بك بالطريقة الصحيحة."
    },
    "ai-powered-apps": {
      title: "تطبيقات مدعومة بالذكاء الاصطناعي",
      tagline: "برنامج ذكي يتعلم ويتكيف ويؤتمت عملك.",
      description: "نحن نبني تطبيقات مخصصة تعمل بالذكاء الاصطناعي تتجاوز مجرد الأتمتة البسيطة. من الأدوات المدمجة في LLM وخطوط أنابيب RAG إلى الرؤية الحاسوبية والتحليلات التنبؤية، نقوم بهندسة أنظمة ذكية تمنح عملك ميزة تنافسية حقيقية.",
      features: ["تكامل LLM و GPT-4", "تطوير خط أنابيب RAG", "روبوتات محادثة ووكلاء افتراضيون بالذكاء الاصطناعي", "أنظمة الرؤية الحاسوبية", "التحليلات التنبؤية ونماذج التعلم الآلي", "أتمتة سير العمل باستخدام الذكاء الاصطناعي", "معالجة اللغة الطبيعية", "البحث والتوصيات المدعومة بالذكاء الاصطناعي", "الضبط الدقيق للنموذج المخصص"],
      benefits: [
        { title: "ميزة تنافسية حقيقية", desc: "تمنحك إمكانات الذكاء الاصطناعي المصممة خصيصًا لسير عملك ميزة لا يمكن للمنافسين تكرارها بسهولة باستخدام أدوات جاهزة." },
        { title: "وفورات هائلة في الأتمتة", desc: "أتمتة المهام المتكررة والمستهلكة للوقت وإعادة توظيف طاقة فريقك نحو عمل عالي القيمة يحرك الإبرة بالفعل." },
        { title: "تشغيل ذكي على مدار الساعة طوال أيام الأسبوع", desc: "أنظمة الذكاء الاصطناعي لا تنام. تعمل العمليات التجارية وتفاعلات العملاء وخطوط أنابيب البيانات باستمرار دون تدخل يدوي." },
        { title: "قرارات مبنية على البيانات", desc: "حول البيانات الأولية إلى ذكاء قابل للتنفيذ باستخدام النماذج والتحليلات التنبؤية التي تكشف عن الرؤى التي قد يفتقدها البشر." }
      ],
      process: [
        { step: "01", title: "استراتيجية الذكاء الاصطناعي وتعريف حالة الاستخدام", desc: "نحدد فرص الذكاء الاصطناعي الأكثر تأثيرًا في عملك ونحدد أهدافًا واضحة وقابلة للقياس قبل بدء أي تطوير." },
        { step: "02", title: "تدقيق البيانات وإعدادها", desc: "نقوم بتقييم أصول البيانات الحالية الخاصة بك، وتحديد الفجوات، وبناء خطوط الأنابيب اللازمة لتغذية أنظمة الذكاء الاصطناعي ببيانات نظيفة ومنظمة." },
        { step: "03", title: "اختيار النموذج والهندسة المعمارية", desc: "نختار النماذج والأطر المناسبة - سواء أكانت نماذج ماجستير دقيقة الضبط أو نماذج تعلم آلي مخصصة أو واجهات برمجة تطبيقات لجهات خارجية - لحالة الاستخدام الخاصة بك." },
        { step: "04", title: "التطوير والتكامل", desc: "نقوم ببناء ودمج نظام الذكاء الاصطناعي في مجموعتك الحالية، مع واجهات برمجة تطبيقات قوية ومعالجة احتياطية وقابلية للملاحظة الكاملة." },
        { step: "05", title: "المراقبة والتعلم المستمر", desc: "بعد الإطلاق، نقوم بمراقبة أداء النموذج، وتتبع الانجراف، والتكرار للحفاظ على دقة نظام الذكاء الاصطناعي الخاص بك وتحسينه بمرور الوقت." }
      ],
      cta: "هل أنت مستعد لجعل عملك مدعومًا بالذكاء الاصطناعي؟"
    },
    "seo": {
      title: "تحسين محركات البحث والنمو",
      tagline: "تحسين محركات البحث التقني واستراتيجية المحتوى التي تقود النمو العضوي المضاعف.",
      description: "نحن نجمع بين الخبرة التقنية العميقة لتحسين محركات البحث مع استراتيجية المحتوى القائمة على البيانات لبناء حركة مرور عضوية مستدامة. من تحسين Core Web Vitals والبيانات المهيكلة إلى بنية الكلمات الرئيسية وبناء الروابط - نقوم بهندسة رؤية البحث التي تتضاعف بمرور الوقت.",
      features: ["تدقيق وإصلاحات تحسين محركات البحث الفنية", "تحسين مؤشرات الويب الأساسية", "البحث في الكلمات الرئيسية وهندستها", "تحسين محركات البحث على الصفحة", "البيانات المهيكلة وعلامات المخطط", "استراتيجية بناء الروابط", "استراتيجية المحتوى والتخطيط", "تحسين محركات البحث المحلية", "الإبلاغ عن أداء تحسين محركات البحث"],
      benefits: [
        { title: "مضاعفة حركة المرور العضوية", desc: "على عكس الإعلانات المدفوعة التي تتوقف في اللحظة التي توقف فيها الإنفاق، يبني تحسين محركات البحث أصلاً ينمو شهرًا بعد شهر ويدفع أرباحًا طويلة الأجل." },
        { title: "تكلفة اكتساب عملاء أقل من الإعلانات المدفوعة", desc: "لا توجد تكلفة لكل نقرة لحركة المرور العضوية. مع تحسن التصنيفات، تنخفض تكلفة اكتساب العملاء بينما يزداد الحجم." },
        { title: "بناء السلطة والثقة", desc: "تشير التصنيفات العالية إلى المصداقية لكل من محركات البحث والمستخدمين. نحن نبني السلطة الموضعية التي تجعل علامتك التجارية هي المصدر المفضل." },
        { title: "عائد استثمار قابل للقياس", desc: "يتم تتبع كل إجراء نتخذه. ترى بالضبط الكلمات الرئيسية التي يتم تصنيفها، وكيف يتم تحويل حركة المرور، وما هو تأثير الإيرادات." }
      ],
      process: [
        { step: "01", title: "تدقيق تحسين محركات البحث والأساس", desc: "تدقيق فني ومحتوى كامل لتحديد ما يعيق موقعك - مشكلات الزحف ومشاكل الفهرسة والفرص الضائعة." },
        { step: "02", title: "بحث الكلمات الرئيسية والمنافسين", desc: "نحدد مشهد الكلمات الرئيسية، ونحدد الأهداف عالية القيمة، ونحلل ما يفعله كبار منافسيك للتفوق عليهم." },
        { step: "03", title: "الإصلاحات الفنية وعلى الصفحة", desc: "نقوم بإصلاح الأساس التقني - سرعة الموقع، ومؤشرات الويب الأساسية، والبيانات المهيكلة، والربط الداخلي - ونحسن كل صفحة رئيسية." },
        { step: "04", title: "استراتيجية المحتوى والروابط", desc: "تقويم محتوى يستهدف كلماتك الرئيسية ذات الأولوية، مقترنًا باستراتيجية بناء روابط لبناء سلطة المجال بمرور الوقت." },
        { step: "05", title: "الإبلاغ الشهري والتكرار", desc: "تقارير شهرية واضحة توضح تحركات التصنيف ونمو حركة المرور وتأثير التحويل - مع تعديلات الإستراتيجية بناءً على بيانات حقيقية." }
      ],
      cta: "ابدأ الترتيب حيث يبحث عملاؤك."
    },
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
