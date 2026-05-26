import codecs
import re

new_services = {
  "ai-content-writing": {
    "en": {
      "title": "AI Content Writing",
      "tagline": "High-quality, SEO-optimized content produced at scale with AI precision.",
      "description": "We combine AI efficiency with expert human editing to produce content that ranks, converts, and sounds authentically human. From blog posts and landing page copy to product descriptions and email sequences — we deliver content at scale without sacrificing quality.",
      "features": [
        "SEO blog posts & articles",
        "Landing page copywriting",
        "Product descriptions at scale",
        "Email marketing sequences",
        "Social media content",
        "AI-assisted research & outlines",
        "Brand voice consistency",
        "Multilingual content",
        "Content calendar planning"
      ],
      "benefits": [
        { "title": "10x Content Output", "desc": "AI-assisted workflows let us produce in days what would take a traditional agency weeks — without the bloated retainer fees." },
        { "title": "SEO-Optimized From Day One", "desc": "Every piece is built around target keywords, proper heading structure, and search intent — so content ranks, not just reads well." },
        { "title": "Consistent Brand Voice", "desc": "We build a brand voice guide upfront and apply it across every piece, so your content sounds like you — at any volume." },
        { "title": "Fraction of Agency Cost", "desc": "Get the output of a full content team at a fraction of the cost. AI handles the heavy lifting; our editors ensure the quality." }
      ],
      "process": [
        { "step": "01", "title": "Brand Voice & Tone Setup", "desc": "We document your brand voice, tone guidelines, and style preferences so every piece of content is unmistakably yours." },
        { "step": "02", "title": "Keyword & Topic Research", "desc": "We identify the topics and keywords your audience is searching for and build a content strategy around real search demand." },
        { "step": "03", "title": "AI-Assisted Draft Creation", "desc": "Our AI workflows generate structured, research-backed drafts at speed — covering your content calendar without bottlenecks." },
        { "step": "04", "title": "Expert Human Editing & QA", "desc": "Every draft is reviewed and refined by experienced editors who check for accuracy, tone, SEO alignment, and readability." },
        { "step": "05", "title": "Publishing & Performance Tracking", "desc": "We handle publishing, track rankings and engagement, and use performance data to continuously improve the content strategy." }
      ],
      "cta": "Scale your content without scaling your team."
    },
    "ur": {
      "title": "AI مواد کی تحریر",
      "tagline": "AI کی درستگی کے ساتھ اعلی معیار کا، SEO کے لیے موزوں مواد۔",
      "description": "ہم AI کی کارکردگی کو ماہر انسانی ایڈیٹنگ کے ساتھ ملاتے ہیں تاکہ ایسا مواد تیار کیا جا سکے جو رینک کرے، کنورٹ کرے اور مستند طور پر انسانی لگے۔ بلاگ پوسٹس اور لینڈنگ پیج کاپی سے لے کر پروڈکٹ کی تفصیلات اور ای میل کی ترتیب تک — ہم معیار کی قربانی کے بغیر بڑے پیمانے پر مواد فراہم کرتے ہیں۔",
      "features": [
        "SEO بلاگ پوسٹس اور مضامین",
        "لینڈنگ پیج کاپی رائٹنگ",
        "بڑے پیمانے پر پروڈکٹ کی تفصیلات",
        "ای میل مارکیٹنگ کی ترتیب",
        "سوشل میڈیا مواد",
        "AI کی مدد سے تحقیق اور خاکہ",
        "برانڈ کی آواز میں مستقل مزاجی",
        "کثیر لسانی مواد",
        "مواد کیلنڈر کی منصوبہ بندی"
      ],
      "benefits": [
        { "title": "10x مواد کی پیداوار", "desc": "AI کی مدد سے کام کرنے کے عمل ہمیں دنوں میں وہ کام کرنے دیتے ہیں جو روایتی ایجنسیوں کو ہفتوں میں لگتا ہے — بھاری فیس کے بغیر۔" },
        { "title": "پہلے دن سے SEO کے لیے موزوں", "desc": "ہر ٹکڑا ٹارگٹ کلیدی الفاظ، مناسب ہیڈنگ کی ساخت، اور تلاش کے ارادے کے ارد گرد بنایا گیا ہے — تاکہ مواد رینک کرے، نہ کہ صرف اچھی طرح سے پڑھا جائے۔" },
        { "title": "مستقل برانڈ کی آواز", "desc": "ہم شروع میں ہی ایک برانڈ وائس گائیڈ بناتے ہیں اور اسے ہر ٹکڑے پر لاگو کرتے ہیں، تاکہ آپ کا مواد آپ کی طرح لگے — کسی بھی حجم پر۔" },
        { "title": "ایجنسی کی لاگت کا ایک حصہ", "desc": "لاگت کے ایک حصے پر ایک مکمل مواد کی ٹیم کی پیداوار حاصل کریں۔ AI بھاری کام سنبھالتا ہے؛ ہمارے ایڈیٹرز معیار کو یقینی بناتے ہیں۔" }
      ],
      "process": [
        { "step": "01", "title": "برانڈ کی آواز اور لہجہ سیٹ اپ", "desc": "ہم آپ کے برانڈ کی آواز، لہجے کے رہنما خطوط، اور طرز کی ترجیحات کو دستاویز کرتے ہیں تاکہ ہر مواد غیر واضح طور پر آپ کا ہو۔" },
        { "step": "02", "title": "کلیدی لفظ اور موضوع کی تحقیق", "desc": "ہم ان موضوعات اور کلیدی الفاظ کی نشاندہی کرتے ہیں جن کی آپ کے سامعین تلاش کر رہے ہیں اور حقیقی تلاش کی مانگ کے ارد گرد مواد کی حکمت عملی بناتے ہیں۔" },
        { "step": "03", "title": "AI کی مدد سے مسودہ کی تخلیق", "desc": "ہمارا AI ورک فلو تیز رفتاری سے ساختی، تحقیق پر مبنی مسودے تیار کرتا ہے — رکاوٹوں کے بغیر آپ کے مواد کے کیلنڈر کا احاطہ کرتا ہے۔" },
        { "step": "04", "title": "ماہر انسانی ایڈیٹنگ اور QA", "desc": "تجربہ کار ایڈیٹرز کے ذریعے ہر مسودے کا جائزہ لیا جاتا ہے اور اسے بہتر بنایا جاتا ہے جو درستگی، لہجے، SEO کی صف بندی، اور پڑھنے کی اہلیت کی جانچ کرتے ہیں۔" },
        { "step": "05", "title": "اشاعت اور کارکردگی سے باخبر رہنا", "desc": "ہم اشاعت کو سنبھالتے ہیں، درجہ بندی اور مشغولیت کو ٹریک کرتے ہیں، اور مواد کی حکمت عملی کو مسلسل بہتر بنانے کے لیے کارکردگی کے ڈیٹا کا استعمال کرتے ہیں۔" }
      ],
      "cta": "اپنی ٹیم کو بڑھائے بغیر اپنے مواد کو بڑھائیں۔"
    },
    "ar": {
      "title": "كتابة المحتوى بالذكاء الاصطناعي",
      "tagline": "محتوى عالي الجودة ومحسن لمحركات البحث يتم إنتاجه على نطاق واسع بدقة الذكاء الاصطناعي.",
      "description": "نحن نجمع بين كفاءة الذكاء الاصطناعي والتحرير البشري الخبير لإنتاج محتوى يحتل مرتبة ويتحول ويبدو إنسانيًا أصليًا. من منشورات المدونة ونسخ الصفحة المقصودة إلى أوصاف المنتج وتسلسلات البريد الإلكتروني - نقدم محتوى على نطاق واسع دون التضحية بالجودة.",
      "features": [
        "منشورات ومقالات مدونة SEO",
        "كتابة نصوص الصفحة المقصودة",
        "أوصاف المنتج على نطاق واسع",
        "تسلسلات التسويق عبر البريد الإلكتروني",
        "محتوى وسائل التواصل الاجتماعي",
        "البحث والخطوط العريضة بمساعدة الذكاء الاصطناعي",
        "اتساق صوت العلامة التجارية",
        "محتوى متعدد اللغات",
        "تخطيط تقويم المحتوى"
      ],
      "benefits": [
        { "title": "إنتاج محتوى بمقدار 10 أضعاف", "desc": "تتيح لنا مهام سير العمل بمساعدة الذكاء الاصطناعي إنتاج ما تستغرقه الوكالة التقليدية أسابيع في أيام - دون رسوم التجنيب المتضخمة." },
        { "title": "محسّن لمحركات البحث من اليوم الأول", "desc": "تم بناء كل قطعة حول الكلمات الرئيسية المستهدفة، وهيكل العنوان المناسب، وهدف البحث - بحيث يحتل المحتوى مرتبة، ولا يقرأ جيدًا فقط." },
        { "title": "صوت العلامة التجارية المتسق", "desc": "نقوم بإنشاء دليل صوتي للعلامة التجارية مقدمًا ونطبقه عبر كل قطعة، لذلك يبدو المحتوى الخاص بك مثلك - في أي حجم." },
        { "title": "جزء بسيط من تكلفة الوكالة", "desc": "احصل على مخرجات فريق محتوى كامل بجزء بسيط من التكلفة. يتعامل الذكاء الاصطناعي مع الرفع الثقيل؛ يضمن محررونا الجودة." }
      ],
      "process": [
        { "step": "01", "title": "إعداد صوت ونبرة العلامة التجارية", "desc": "نوثق صوت علامتك التجارية وإرشادات النغمة وتفضيلات الأسلوب بحيث تكون كل قطعة محتوى خاصة بك بشكل لا لبس فيه." },
        { "step": "02", "title": "بحث الكلمات الرئيسية والموضوعات", "desc": "نحدد الموضوعات والكلمات الرئيسية التي يبحث عنها جمهورك ونبني استراتيجية محتوى حول طلب البحث الحقيقي." },
        { "step": "03", "title": "إنشاء مسودة بمساعدة الذكاء الاصطناعي", "desc": "تُنشئ مهام سير عمل الذكاء الاصطناعي لدينا مسودات منظمة ومدعومة بالأبحاث بسرعة - تغطي تقويم المحتوى الخاص بك دون اختناقات." },
        { "step": "04", "title": "تحرير بشري خبير وضمان جودة", "desc": "تتم مراجعة كل مسودة وتحسينها من قبل محررين ذوي خبرة يتحققون من الدقة والنغمة ومحاذاة تحسين محركات البحث وقابلية القراءة." },
        { "step": "05", "title": "النشر وتتبع الأداء", "desc": "نتعامل مع النشر، ونتتبع التصنيفات والمشاركة، ونستخدم بيانات الأداء لتحسين استراتيجية المحتوى بشكل مستمر." }
      ],
      "cta": "توسيع نطاق المحتوى الخاص بك دون توسيع نطاق فريقك."
    },
    "es": {
      "title": "Redacción de Contenidos con IA",
      "tagline": "Contenido de alta calidad optimizado para SEO producido a escala con precisión de IA.",
      "description": "Combinamos la eficiencia de la IA con la edición humana experta para producir contenido que se clasifica, se convierte y suena auténticamente humano. Desde publicaciones de blogs y textos de páginas de destino hasta descripciones de productos y secuencias de correo electrónico: entregamos contenido a escala sin sacrificar la calidad.",
      "features": [
        "Publicaciones de blog y artículos de SEO",
        "Redacción de páginas de destino",
        "Descripciones de productos a escala",
        "Secuencias de marketing por correo electrónico",
        "Contenido de redes sociales",
        "Investigación y esquemas asistidos por IA",
        "Coherencia de la voz de la marca",
        "Contenido multilingüe",
        "Planificación del calendario de contenido"
      ],
      "benefits": [
        { "title": "Producción de contenido 10 veces mayor", "desc": "Los flujos de trabajo asistidos por IA nos permiten producir en días lo que a una agencia tradicional le tomaría semanas, sin las elevadas tarifas de retención." },
        { "title": "Optimizado para SEO desde el primer día", "desc": "Cada pieza está construida en torno a palabras clave objetivo, estructura de encabezado adecuada e intención de búsqueda, para que el contenido se clasifique, no solo se lea bien." },
        { "title": "Voz de marca coherente", "desc": "Creamos una guía de voz de marca por adelantado y la aplicamos a cada pieza, para que su contenido suene como usted, en cualquier volumen." },
        { "title": "Fracción del costo de la agencia", "desc": "Obtenga el rendimiento de un equipo de contenido completo a una fracción del costo. La IA se encarga del trabajo pesado; nuestros editores garantizan la calidad." }
      ],
      "process": [
        { "step": "01", "title": "Configuración de la voz y el tono de la marca", "desc": "Documentamos la voz de su marca, las pautas de tono y las preferencias de estilo para que cada pieza de contenido sea inconfundiblemente suya." },
        { "step": "02", "title": "Investigación de palabras clave y temas", "desc": "Identificamos los temas y palabras clave que busca su audiencia y creamos una estrategia de contenido en torno a la demanda de búsqueda real." },
        { "step": "03", "title": "Creación de borradores asistida por IA", "desc": "Nuestros flujos de trabajo de IA generan borradores estructurados y respaldados por investigaciones a gran velocidad, cubriendo su calendario de contenido sin cuellos de botella." },
        { "step": "04", "title": "Edición humana experta y control de calidad", "desc": "Cada borrador es revisado y perfeccionado por editores experimentados que verifican la precisión, el tono, la alineación con SEO y la legibilidad." },
        { "step": "05", "title": "Publicación y seguimiento del rendimiento", "desc": "Manejamos la publicación, realizamos un seguimiento de las clasificaciones y la participación, y utilizamos datos de rendimiento para mejorar continuamente la estrategia de contenido." }
      ],
      "cta": "Escale su contenido sin escalar su equipo."
    },
    "fr": {
      "title": "Rédaction de Contenu par IA",
      "tagline": "Contenu de haute qualité optimisé pour le référencement, produit à grande échelle avec la précision de l'IA.",
      "description": "Nous combinons l'efficacité de l'IA avec l'édition humaine experte pour produire un contenu qui se classe, convertit et semble authentiquement humain. Des articles de blog et des textes de pages de destination aux descriptions de produits et aux séquences d'e-mails, nous fournissons du contenu à grande échelle sans sacrifier la qualité.",
      "features": [
        "Articles de blog et articles SEO",
        "Rédaction de pages de destination",
        "Descriptions de produits à grande échelle",
        "Séquences de marketing par e-mail",
        "Contenu des réseaux sociaux",
        "Recherche et plans assistés par l'IA",
        "Cohérence de la voix de la marque",
        "Contenu multilingue",
        "Planification du calendrier de contenu"
      ],
      "benefits": [
        { "title": "Production de contenu multipliée par 10", "desc": "Les flux de travail assistés par l'IA nous permettent de produire en quelques jours ce qui prendrait des semaines à une agence traditionnelle, sans les frais de mandat exorbitants." },
        { "title": "Optimisé pour le référencement dès le premier jour", "desc": "Chaque élément est construit autour de mots-clés cibles, d'une structure d'en-tête appropriée et d'une intention de recherche — de sorte que le contenu se classe, et pas seulement se lit bien." },
        { "title": "Voix de marque cohérente", "desc": "Nous créons un guide de la voix de la marque à l'avance et l'appliquons à chaque élément, de sorte que votre contenu vous ressemble — à n'importe quel volume." },
        { "title": "Une fraction du coût de l'agence", "desc": "Obtenez le rendement d'une équipe de contenu complète à une fraction du coût. L'IA se charge du gros du travail ; nos éditeurs garantissent la qualité." }
      ],
      "process": [
        { "step": "01", "title": "Configuration de la voix et du ton de la marque", "desc": "Nous documentons la voix de votre marque, vos directives de ton et vos préférences de style afin que chaque élément de contenu soit indubitablement le vôtre." },
        { "step": "02", "title": "Recherche de mots-clés et de sujets", "desc": "Nous identifions les sujets et les mots-clés recherchés par votre public et élaborons une stratégie de contenu autour de la demande de recherche réelle." },
        { "step": "03", "title": "Création de brouillons assistée par l'IA", "desc": "Nos flux de travail d'IA génèrent des brouillons structurés et étayés par des recherches à grande vitesse, couvrant votre calendrier de contenu sans goulots d'étranglement." },
        { "step": "04", "title": "Édition humaine experte et assurance qualité", "desc": "Chaque brouillon est examiné et affiné par des éditeurs expérimentés qui vérifient l'exactitude, le ton, l'alignement SEO et la lisibilité." },
        { "step": "05", "title": "Publication et suivi des performances", "desc": "Nous gérons la publication, suivons les classements et l'engagement, et utilisons les données de performances pour améliorer continuellement la stratégie de contenu." }
      ],
      "cta": "Faites évoluer votre contenu sans faire évoluer votre équipe."
    },
    "zh": {
      "title": "AI 内容创作",
      "tagline": "以 AI 的精度大规模制作高质量、SEO 优化的内容。",
      "description": "我们将 AI 的效率与专家的人工编辑相结合，制作出排名高、转化率好、听起来像真人创作的内容。从博客文章和登陆页面文案到产品描述和电子邮件序列——我们在不牺牲质量的情况下大规模提供内容。",
      "features": [
        "SEO 博客文章和文章",
        "登陆页面文案撰写",
        "大规模产品描述",
        "电子邮件营销序列",
        "社交媒体内容",
        "AI 辅助研究和提纲",
        "品牌基调的一致性",
        "多语言内容",
        "内容日历规划"
      ],
      "benefits": [
        { "title": "10 倍的内容产出", "desc": "AI 辅助的工作流程使我们能够在几天内完成传统机构需要几周才能完成的工作——并且没有高昂的预付费用。" },
        { "title": "从第一天起就进行 SEO 优化", "desc": "每篇文章都围绕目标关键词、适当的标题结构和搜索意图构建——因此内容不仅读起来流畅，还能获得好的排名。" },
        { "title": "一致的品牌基调", "desc": "我们预先建立品牌基调指南并将其应用于每篇文章，因此无论数量多少，您的内容听起来都像您一样。" },
        { "title": "仅为传统机构成本的一小部分", "desc": "只需极低的成本即可获得完整内容团队的产出。AI 处理繁重的工作；我们的编辑确保质量。" }
      ],
      "process": [
        { "step": "01", "title": "品牌基调和语气设置", "desc": "我们记录您的品牌基调、语气指南和风格偏好，因此每一篇内容都毫无疑问是您的风格。" },
        { "step": "02", "title": "关键词和主题研究", "desc": "我们确定受众正在搜索的主题和关键词，并围绕真实的搜索需求制定内容策略。" },
        { "step": "03", "title": "AI 辅助草稿创建", "desc": "我们的 AI 工作流程可快速生成结构化、以研究为后盾的草稿——覆盖您的内容日历而不会出现瓶颈。" },
        { "step": "04", "title": "专家人工编辑和 QA", "desc": "每份草稿都会由经验丰富的编辑进行审核和完善，他们会检查准确性、基调、SEO 一致性和可读性。" },
        { "step": "05", "title": "发布和性能跟踪", "desc": "我们负责发布、跟踪排名和参与度，并使用性能数据不断改进内容策略。" }
      ],
      "cta": "在不增加团队规模的情况下扩大您的内容创作。"
    },
    "hi": {
      "title": "AI कंटेंट राइटिंग",
      "tagline": "एआई सटीकता के साथ बड़े पैमाने पर उत्पादित उच्च-गुणवत्ता, एसईओ-अनुकूलित सामग्री।",
      "description": "हम एआई दक्षता को विशेषज्ञ मानव संपादन के साथ जोड़ते हैं ताकि ऐसी सामग्री तैयार की जा सके जो रैंक करे, परिवर्तित करे और प्रामाणिक रूप से मानवीय लगे। ब्लॉग पोस्ट और लैंडिंग पेज कॉपी से लेकर उत्पाद विवरण और ईमेल अनुक्रमों तक - हम गुणवत्ता से समझौता किए बिना बड़े पैमाने पर सामग्री वितरित करते हैं।",
      "features": [
        "एसईओ ब्लॉग पोस्ट और लेख",
        "लैंडिंग पेज कॉपी राइटिंग",
        "बड़े पैमाने पर उत्पाद विवरण",
        "ईमेल मार्केटिंग अनुक्रम",
        "सोशल मीडिया सामग्री",
        "एआई-सहायता प्राप्त अनुसंधान और रूपरेखा",
        "ब्रांड वॉयस निरंतरता",
        "बहुभाषी सामग्री",
        "सामग्री कैलेंडर योजना"
      ],
      "benefits": [
        { "title": "10 गुना सामग्री उत्पादन", "desc": "एआई-सहायता प्राप्त वर्कफ़्लो हमें दिनों में वह काम करने देते हैं जो एक पारंपरिक एजेंसी को हफ्तों में लगेगा - बिना भारी रिटेनर शुल्क के।" },
        { "title": "पहले दिन से एसईओ-अनुकूलित", "desc": "हर टुकड़ा लक्ष्य कीवर्ड, उचित हेडिंग संरचना और खोज आशय के इर्द-गिर्द बनाया गया है - ताकि सामग्री रैंक करे, न कि केवल अच्छी तरह से पढ़ी जाए।" },
        { "title": "लगातार ब्रांड वॉयस", "desc": "हम पहले से ही एक ब्रांड वॉयस गाइड बनाते हैं और इसे हर टुकड़े पर लागू करते हैं, इसलिए आपकी सामग्री आपकी तरह लगती है - किसी भी मात्रा में।" },
        { "title": "एजेंसी की लागत का एक अंश", "desc": "लागत के एक अंश पर एक पूरी सामग्री टीम का आउटपुट प्राप्त करें। एआई भारी काम संभालता है; हमारे संपादक गुणवत्ता सुनिश्चित करते हैं।" }
      ],
      "process": [
        { "step": "01", "title": "ब्रांड वॉयस और टोन सेटअप", "desc": "हम आपकी ब्रांड वॉयस, टोन दिशानिर्देशों और शैली प्राथमिकताओं का दस्तावेजीकरण करते हैं ताकि प्रत्येक सामग्री स्पष्ट रूप से आपकी हो।" },
        { "step": "02", "title": "कीवर्ड और विषय अनुसंधान", "desc": "हम उन विषयों और कीवर्ड की पहचान करते हैं जिन्हें आपके दर्शक खोज रहे हैं और वास्तविक खोज मांग के इर्द-गिर्द एक सामग्री रणनीति बनाते हैं।" },
        { "step": "03", "title": "एआई-सहायता प्राप्त ड्राफ्ट निर्माण", "desc": "हमारा एआई वर्कफ़्लो गति पर संरचित, शोध-समर्थित ड्राफ्ट उत्पन्न करता है - बिना किसी बाधा के आपके सामग्री कैलेंडर को कवर करता है।" },
        { "step": "04", "title": "विशेषज्ञ मानव संपादन और QA", "desc": "अनुभवी संपादकों द्वारा प्रत्येक ड्राफ्ट की समीक्षा और परिष्कृत किया जाता है जो सटीकता, टोन, एसईओ संरेखण और पठनीयता की जांच करते हैं।" },
        { "step": "05", "title": "प्रकाशन और प्रदर्शन ट्रैकिंग", "desc": "हम प्रकाशन को संभालते हैं, रैंकिंग और सगाई को ट्रैक करते हैं, और सामग्री रणनीति में लगातार सुधार करने के लिए प्रदर्शन डेटा का उपयोग करते हैं।" }
      ],
      "cta": "अपनी टीम को बढ़ाए बिना अपनी सामग्री को स्केल करें।"
    }
  },
  "saas-development": {
    "en": {
      "title": "SaaS Development",
      "tagline": "Multi-tenant cloud platforms engineered for scale and recurring revenue.",
      "description": "We architect and build production-ready SaaS platforms from the ground up. Multi-tenant architecture, subscription billing, role-based access, and the infrastructure to support thousands of concurrent users — all engineered for reliability and rapid feature iteration.",
      "features": [
        "Multi-tenant architecture",
        "Stripe subscription billing",
        "Role-based access control",
        "Admin dashboard & analytics",
        "API-first design",
        "White-label capabilities",
        "Usage metering & limits",
        "Onboarding & user management",
        "99.9% uptime SLA architecture"
      ],
      "benefits": [
        { "title": "Recurring Revenue Model", "desc": "We build the billing infrastructure — subscription tiers, trials, upgrades, and invoicing — so you can focus on growing MRR from day one." },
        { "title": "Scales With Your Growth", "desc": "Multi-tenant architecture and cloud-native infrastructure mean your platform handles 10 users or 10,000 without a rewrite." },
        { "title": "Fast Feature Iteration", "desc": "Clean, modular codebases and CI/CD pipelines let you ship new features weekly without breaking what's already working." },
        { "title": "Enterprise Ready", "desc": "SSO, audit logs, role-based permissions, and white-label options make your SaaS attractive to enterprise buyers from the start." }
      ],
      "process": [
        { "step": "01", "title": "Product Architecture", "desc": "We define your data model, tenant isolation strategy, and system architecture to ensure the foundation supports your long-term roadmap." },
        { "step": "02", "title": "Tenant & Auth System", "desc": "Multi-tenant data isolation, SSO integration, role-based access control, and secure session management built from the ground up." },
        { "step": "03", "title": "Core Feature Development", "desc": "Iterative sprints delivering your core product features with working demos, feedback loops, and production-quality code." },
        { "step": "04", "title": "Billing & Subscription Setup", "desc": "Stripe integration with subscription plans, trial periods, usage-based billing, and a self-serve upgrade/downgrade flow." },
        { "step": "05", "title": "Launch & Growth Infrastructure", "desc": "Zero-downtime deployments, monitoring, alerting, and the analytics dashboards you need to understand and grow your user base." }
      ],
      "cta": "Let's build your SaaS product the right way."
    },
    "ur": {
      "title": "SaaS ڈیولپمنٹ",
      "tagline": "اسکیل اور بار بار چلنے والی آمدنی کے لیے تیار کردہ ملٹی ٹیننٹ کلاؤڈ پلیٹ فارمز۔",
      "description": "ہم گراؤنڈ اپ سے پروڈکشن کے لیے تیار SaaS پلیٹ فارمز کو تیار اور تعمیر کرتے ہیں۔ ملٹی ٹیننٹ آرکیٹیکچر، سبسکرپشن بلنگ، رول پر مبنی رسائی، اور ہزاروں ہم وقت ساز صارفین کی حمایت کرنے کے لیے انفراسٹرکچر — سب وشوسنییتا اور تیز رفتار خصوصیت کی تکرار کے لیے تیار کیے گئے ہیں۔",
      "features": [
        "ملٹی ٹیننٹ آرکیٹیکچر",
        "Stripe سبسکرپشن بلنگ",
        "رول پر مبنی رسائی کنٹرول",
        "ایڈمن ڈیش بورڈ اور تجزیات",
        "API-پہلا ڈیزائن",
        "وائٹ لیبل کی صلاحیتیں",
        "استعمال کی پیمائش اور حدود",
        "آن بورڈنگ اور صارف کا انتظام",
        "99.9% اپ ٹائم SLA آرکیٹیکچر"
      ],
      "benefits": [
        { "title": "بار بار چلنے والا ریونیو ماڈل", "desc": "ہم بلنگ انفراسٹرکچر بناتے ہیں — سبسکرپشن کے درجات، ٹرائلز، اپ گریڈز، اور انوائسنگ — تاکہ آپ پہلے دن سے MRR کو بڑھانے پر توجہ مرکوز کر سکیں۔" },
        { "title": "آپ کی ترقی کے ساتھ ترازو", "desc": "ملٹی ٹیننٹ آرکیٹیکچر اور کلاؤڈ نیٹیو انفراسٹرکچر کا مطلب ہے کہ آپ کا پلیٹ فارم 10 صارفین یا 10,000 کو دوبارہ لکھے بغیر سنبھالتا ہے۔" },
        { "title": "تیز خصوصیت کی تکرار", "desc": "صاف، ماڈیولر کوڈ بیس اور CI/CD پائپ لائنز آپ کو ہفتہ وار نئی خصوصیات بھیجنے کی اجازت دیتی ہیں جو پہلے سے کام کر رہا ہے اسے توڑے بغیر۔" },
        { "title": "انٹرپرائز تیار", "desc": "SSO، آڈٹ لاگز، رول پر مبنی اجازتیں، اور وائٹ لیبل کے اختیارات شروع سے ہی آپ کے SaaS کو انٹرپرائز خریداروں کے لیے پرکشش بناتے ہیں۔" }
      ],
      "process": [
        { "step": "01", "title": "پروڈکٹ آرکیٹیکچر", "desc": "ہم آپ کے ڈیٹا ماڈل، کرایہ دار کی تنہائی کی حکمت عملی، اور سسٹم کے فن تعمیر کی وضاحت کرتے ہیں تاکہ اس بات کو یقینی بنایا جا سکے کہ فاؤنڈیشن آپ کے طویل مدتی روڈ میپ کی حمایت کرتا ہے۔" },
        { "step": "02", "title": "کرایہ دار اور تصدیقی نظام", "desc": "ملٹی ٹیننٹ ڈیٹا آئسولیشن، SSO انضمام، رول پر مبنی رسائی کنٹرول، اور گراؤنڈ اپ سے بنایا گیا محفوظ سیشن مینجمنٹ۔" },
        { "step": "03", "title": "بنیادی خصوصیت کی ترقی", "desc": "ورکنگ ڈیمو، فیڈ بیک لوپس، اور پروڈکشن کوالٹی کوڈ کے ساتھ آپ کی بنیادی مصنوعات کی خصوصیات فراہم کرنے والے تکراری اسپرنٹ۔" },
        { "step": "04", "title": "بلنگ اور سبسکرپشن سیٹ اپ", "desc": "سبسکرپشن پلانز، آزمائشی ادوار، استعمال پر مبنی بلنگ، اور سیلف سرو اپ گریڈ/ڈاؤن گریڈ فلو کے ساتھ پٹی کا انضمام۔" },
        { "step": "05", "title": "لانچ اور گروتھ انفراسٹرکچر", "desc": "زیرو ڈاون ٹائم ڈیپلوئمنٹ، مانیٹرنگ، الرٹ، اور تجزیاتی ڈیش بورڈز جن کی آپ کو سمجھنے اور اپنے یوزر بیس کو بڑھانے کی ضرورت ہے۔" }
      ],
      "cta": "آئیے آپ کا SaaS پروڈکٹ صحیح طریقے سے بنائیں۔"
    },
    "ar": {
      "title": "تطوير SaaS",
      "tagline": "منصات سحابية متعددة المستأجرين مصممة من أجل الحجم والإيرادات المتكررة.",
      "description": "نقوم بتصميم وبناء منصات SaaS الجاهزة للإنتاج من الألف إلى الياء. البنية متعددة المستأجرين، وفواتير الاشتراك، والوصول القائم على الأدوار، والبنية التحتية لدعم الآلاف من المستخدمين المتزامنين - تم تصميمها جميعًا من أجل الموثوقية والتكرار السريع للميزات.",
      "features": [
        "العمارة متعددة المستأجرين",
        "فواتير الاشتراك عبر Stripe",
        "التحكم في الوصول على أساس الدور",
        "لوحة تحكم المشرف والتحليلات",
        "تصميم يعتمد على واجهة برمجة التطبيقات (API) أولاً",
        "قدرات التسمية البيضاء",
        "قياس الاستخدام والحدود",
        "تأهيل المستخدمين وإدارتهم",
        "هيكل بنسبة 99.9% من اتفاقية مستوى الخدمة (SLA)"
      ],
      "benefits": [
        { "title": "نموذج الإيرادات المتكررة", "desc": "نقوم ببناء البنية التحتية للفوترة - مستويات الاشتراك والتجارب والترقيات وإعداد الفواتير - حتى تتمكن من التركيز على تنمية الإيرادات الشهرية المتكررة من اليوم الأول." },
        { "title": "تتوسع مع نموك", "desc": "تعني البنية متعددة المستأجرين والبنية التحتية السحابية الأصلية أن نظامك الأساسي يتعامل مع 10 مستخدمين أو 10000 بدون إعادة كتابة." },
        { "title": "تكرار سريع للميزات", "desc": "تتيح لك قواعد الأوامر البرمجية وخطوط أنابيب CI / CD النظيفة والمعيارية شحن ميزات جديدة أسبوعيًا دون كسر ما يعمل بالفعل." },
        { "title": "جاهز للمؤسسات", "desc": "إن الدخول الموحد، وسجلات التدقيق، والأذونات القائمة على الأدوار، وخيارات التسمية البيضاء تجعل SaaS الخاصة بك جذابة لمشتري المؤسسات منذ البداية." }
      ],
      "process": [
        { "step": "01", "title": "هندسة المنتج", "desc": "نحدد نموذج البيانات واستراتيجية عزل المستأجر وهيكل النظام لضمان دعم الأساس لخارطة الطريق طويلة المدى." },
        { "step": "02", "title": "نظام المستأجر والمصادقة", "desc": "عزل بيانات متعددة المستأجرين، وتكامل الدخول الموحد، والتحكم في الوصول القائم على الأدوار، وإدارة الجلسة الآمنة المبنية من الألف إلى الياء." },
        { "step": "03", "title": "تطوير الميزات الأساسية", "desc": "سباقات تكرارية تقدم ميزات منتجك الأساسية مع عروض تجريبية وحلقات ملاحظات وكود جودة الإنتاج." },
        { "step": "04", "title": "إعداد الفواتير والاشتراك", "desc": "تكامل Stripe مع خطط الاشتراك، والفترات التجريبية، والفوترة القائمة على الاستخدام، وتدفق الترقية / الرجوع الذاتي الخدمة." },
        { "step": "05", "title": "البنية التحتية للإطلاق والنمو", "desc": "عمليات النشر، والمراقبة، والتنبيه، ولوحات معلومات التحليلات التي لا تستدعي وقت توقف عن العمل، والتي تحتاجها لفهم وتنمية قاعدة المستخدمين." }
      ],
      "cta": "دعنا نبني منتج SaaS الخاص بك بالطريقة الصحيحة."
    },
    "es": {
      "title": "Desarrollo SaaS",
      "tagline": "Plataformas en la nube para múltiples inquilinos diseñadas para crecer y generar ingresos recurrentes.",
      "description": "Diseñamos y construimos plataformas SaaS listas para producción desde cero. Arquitectura multiinquilino, facturación de suscripciones, acceso basado en roles y la infraestructura para soportar miles de usuarios simultáneos, todo diseñado para brindar confiabilidad y una rápida iteración de funciones.",
      "features": [
        "Arquitectura multiinquilino",
        "Facturación de suscripciones de Stripe",
        "Control de acceso basado en roles",
        "Panel de administración y análisis",
        "Diseño que prioriza la API",
        "Capacidades de marca blanca",
        "Medición de uso y límites",
        "Incorporación y gestión de usuarios",
        "Arquitectura de SLA con un 99,9 % de tiempo de actividad"
      ],
      "benefits": [
        { "title": "Modelo de ingresos recurrentes", "desc": "Construimos la infraestructura de facturación (niveles de suscripción, pruebas, actualizaciones y facturación) para que pueda concentrarse en aumentar los MRR desde el primer día." },
        { "title": "Escala con tu crecimiento", "desc": "La arquitectura multiinquilino y la infraestructura nativa de la nube significan que su plataforma maneja 10 usuarios o 10,000 sin tener que reescribir." },
        { "title": "Iteración rápida de funciones", "desc": "Las bases de código modulares y limpias y las canalizaciones de CI/CD le permiten implementar nuevas funciones semanalmente sin romper lo que ya funciona." },
        { "title": "Preparado para la empresa", "desc": "SSO, registros de auditoría, permisos basados ​​en roles y opciones de marca blanca hacen que su SaaS sea atractivo para los compradores empresariales desde el principio." }
      ],
      "process": [
        { "step": "01", "title": "Arquitectura del producto", "desc": "Definimos su modelo de datos, la estrategia de aislamiento de inquilinos y la arquitectura del sistema para garantizar que la base respalde su hoja de ruta a largo plazo." },
        { "step": "02", "title": "Inquilino y sistema de autenticación", "desc": "Aislamiento de datos de múltiples inquilinos, integración de SSO, control de acceso basado en roles y gestión segura de sesiones creados desde cero." },
        { "step": "03", "title": "Desarrollo de características principales", "desc": "Sprints iterativos que ofrecen las características principales de su producto con demostraciones funcionales, circuitos de retroalimentación y código con calidad de producción." },
        { "step": "04", "title": "Configuración de facturación y suscripción", "desc": "Integración de Stripe con planes de suscripción, períodos de prueba, facturación basada en el uso y un flujo de actualización/baja de autoservicio." },
        { "step": "05", "title": "Infraestructura de lanzamiento y crecimiento", "desc": "Implementaciones sin tiempo de inactividad, monitoreo, alertas y los paneles de análisis que necesita para comprender y hacer crecer su base de usuarios." }
      ],
      "cta": "Construyamos su producto SaaS de la manera correcta."
    },
    "fr": {
      "title": "Développement SaaS",
      "tagline": "Plateformes cloud multi-locataires conçues pour l'échelle et les revenus récurrents.",
      "description": "Nous concevons et construisons des plateformes SaaS prêtes pour la production à partir de zéro. Architecture multi-locataire, facturation des abonnements, accès basé sur les rôles et infrastructure pour prendre en charge des milliers d'utilisateurs simultanés — le tout conçu pour la fiabilité et une itération rapide des fonctionnalités.",
      "features": [
        "Architecture multi-locataires",
        "Facturation des abonnements Stripe",
        "Contrôle d'accès basé sur les rôles",
        "Tableau de bord d'administration et analyses",
        "Conception centrée sur les API",
        "Capacités de marque blanche",
        "Mesure de l'utilisation et limites",
        "Intégration et gestion des utilisateurs",
        "Architecture SLA avec une disponibilité de 99,9 %"
      ],
      "benefits": [
        { "title": "Modèle de revenus récurrents", "desc": "Nous construisons l'infrastructure de facturation — niveaux d'abonnement, essais, mises à niveau et facturation — afin que vous puissiez vous concentrer sur la croissance du MRR dès le premier jour." },
        { "title": "Évolue avec votre croissance", "desc": "L'architecture multi-locataire et l'infrastructure cloud native signifient que votre plateforme gère 10 utilisateurs ou 10 000 sans réécriture." },
        { "title": "Itération rapide des fonctionnalités", "desc": "Des bases de code propres et modulaires et des pipelines CI/CD vous permettent de livrer de nouvelles fonctionnalités chaque semaine sans casser ce qui fonctionne déjà." },
        { "title": "Prêt pour l'entreprise", "desc": "SSO, journaux d'audit, autorisations basées sur les rôles et options de marque blanche rendent votre SaaS attrayant pour les acheteurs d'entreprise dès le départ." }
      ],
      "process": [
        { "step": "01", "title": "Architecture du produit", "desc": "Nous définissons votre modèle de données, votre stratégie d'isolement des locataires et l'architecture du système pour nous assurer que la fondation soutient votre feuille de route à long terme." },
        { "step": "02", "title": "Locataire et système d'authentification", "desc": "Isolation des données multi-locataires, intégration SSO, contrôle d'accès basé sur les rôles et gestion de session sécurisée construits à partir de zéro." },
        { "step": "03", "title": "Développement des fonctionnalités de base", "desc": "Des sprints itératifs livrant vos principales fonctionnalités de produit avec des démos fonctionnelles, des boucles de rétroaction et un code de qualité de production." },
        { "step": "04", "title": "Configuration de la facturation et de l'abonnement", "desc": "Intégration de Stripe avec des plans d'abonnement, des périodes d'essai, une facturation basée sur l'utilisation et un flux de mise à niveau / déclassement en libre-service." },
        { "step": "05", "title": "Infrastructure de lancement et de croissance", "desc": "Déploiements, surveillance, alertes sans temps d'arrêt et tableaux de bord d'analyse dont vous avez besoin pour comprendre et développer votre base d'utilisateurs." }
      ],
      "cta": "Construisons votre produit SaaS de la bonne manière."
    },
    "zh": {
      "title": "SaaS 开发",
      "tagline": "专为扩展和经常性收入而设计的多租户云平台。",
      "description": "我们从头开始架构和构建生产就绪的 SaaS 平台。多租户架构、订阅计费、基于角色的访问以及支持数千个并发用户的基础设施——所有这些都是为了可靠性和快速功能迭代而设计的。",
      "features": [
        "多租户架构",
        "Stripe 订阅计费",
        "基于角色的访问控制",
        "管理仪表板和分析",
        "API 优先设计",
        "白标功能",
        "使用计量和限制",
        "入职和用户管理",
        "99.9% 正常运行时间的 SLA 架构"
      ],
      "benefits": [
        { "title": "经常性收入模型", "desc": "我们构建计费基础设施——订阅层级、试用、升级和发票——这样您从第一天起就可以专注于增加 MRR。" },
        { "title": "伴随您的业务增长而扩展", "desc": "多租户架构和云原生基础设施意味着您的平台无需重写即可处理 10 个或 10,000 个用户。" },
        { "title": "快速功能迭代", "desc": "干净、模块化的代码库和 CI/CD 管道允许您每周发布新功能，而不会破坏已经运行的功能。" },
        { "title": "企业就绪", "desc": "SSO、审计日志、基于角色的权限和白标选项使您的 SaaS 从一开始就对企业买家具有吸引力。" }
      ],
      "process": [
        { "step": "01", "title": "产品架构", "desc": "我们定义您的数据模型、租户隔离策略和系统架构，以确保基础支持您的长期路线图。" },
        { "step": "02", "title": "租户和认证系统", "desc": "从头开始构建多租户数据隔离、SSO 集成、基于角色的访问控制和安全会话管理。" },
        { "step": "03", "title": "核心功能开发", "desc": "通过迭代冲刺交付您的核心产品功能，并提供工作演示、反馈循环和生产级代码。" },
        { "step": "04", "title": "计费和订阅设置", "desc": "Stripe 与订阅计划、试用期、基于使用的计费和自助升级/降级流程的集成。" },
        { "step": "05", "title": "启动和增长基础设施", "desc": "您了解和扩大用户群所需的零停机部署、监控、警报和分析仪表板。" }
      ],
      "cta": "让我们以正确的方式构建您的 SaaS 产品。"
    },
    "hi": {
      "title": "सास विकास",
      "tagline": "स्केल और आवर्ती राजस्व के लिए डिज़ाइन किए गए मल्टी-टेनेंट क्लाउड प्लेटफ़ॉर्म।",
      "description": "हम जमीन से उत्पादन के लिए तैयार सास प्लेटफॉर्म का आर्किटेक्चर और निर्माण करते हैं। मल्टी-टेनेंट आर्किटेक्चर, सब्सक्रिप्शन बिलिंग, रोल-आधारित एक्सेस, और हजारों समवर्ती उपयोगकर्ताओं का समर्थन करने के लिए बुनियादी ढांचा - सभी विश्वसनीयता और तेजी से फीचर पुनरावृत्ति के लिए इंजीनियर किए गए हैं।",
      "features": [
        "मल्टी-टेनेंट आर्किटेक्चर",
        "स्ट्राइप सब्सक्रिप्शन बिलिंग",
        "भूमिका-आधारित अभिगम नियंत्रण",
        "व्यवस्थापक डैशबोर्ड और विश्लेषण",
        "एपीआई-प्रथम डिज़ाइन",
        "व्हाइट-लेबल क्षमताएं",
        "उपयोग मीटरिंग और सीमाएं",
        "ऑनबोर्डिंग और उपयोगकर्ता प्रबंधन",
        "99.9% अपटाइम SLA वास्तुकला"
      ],
      "benefits": [
        { "title": "आवर्ती राजस्व मॉडल", "desc": "हम बिलिंग बुनियादी ढांचा बनाते हैं - सदस्यता स्तर, परीक्षण, अपग्रेड और चालान - ताकि आप पहले दिन से एमआरआर बढ़ाने पर ध्यान केंद्रित कर सकें।" },
        { "title": "आपके विकास के साथ तराजू", "desc": "मल्टी-टेनेंट आर्किटेक्चर और क्लाउड-नेटिव इंफ्रास्ट्रक्चर का मतलब है कि आपका प्लेटफ़ॉर्म बिना दोबारा लिखे 10 या 10,000 उपयोगकर्ताओं को संभालता है।" },
        { "title": "फास्ट फ़ीचर पुनरावृत्ति", "desc": "साफ, मॉड्यूलर कोडबेस और CI/CD पाइपलाइन आपको जो पहले से काम कर रहा है उसे तोड़े बिना साप्ताहिक रूप से नई सुविधाएँ शिप करने देते हैं।" },
        { "title": "एंटरप्राइज रेडी", "desc": "एसएसओ, ऑडिट लॉग, भूमिका-आधारित अनुमतियां और व्हाइट-लेबल विकल्प आपके सास को शुरू से ही एंटरप्राइज खरीदारों के लिए आकर्षक बनाते हैं।" }
      ],
      "process": [
        { "step": "01", "title": "उत्पाद वास्तुकला", "desc": "हम आपके डेटा मॉडल, टेनेंट आइसोलेशन रणनीति और सिस्टम आर्किटेक्चर को यह सुनिश्चित करने के लिए परिभाषित करते हैं कि नींव आपके दीर्घकालिक रोडमैप का समर्थन करती है।" },
        { "step": "02", "title": "किरायेदार और प्रामाणिक प्रणाली", "desc": "मल्टी-टेनेंट डेटा आइसोलेशन, एसएसओ इंटीग्रेशन, रोल-बेस्ड एक्सेस कंट्रोल, और सुरक्षित सत्र प्रबंधन को जमीन से ऊपर बनाया गया है।" },
        { "step": "03", "title": "कोर फ़ीचर डेवलपमेंट", "desc": "पुनरावृत्तीय स्प्रिंट काम करने वाले डेमो, फीडबैक लूप और उत्पादन-गुणवत्ता वाले कोड के साथ आपके मुख्य उत्पाद सुविधाएँ प्रदान करते हैं।" },
        { "step": "04", "title": "बिलिंग और सदस्यता सेटअप", "desc": "सदस्यता योजनाओं, परीक्षण अवधि, उपयोग-आधारित बिलिंग, और स्व-सेवा अपग्रेड / डाउनग्रेड प्रवाह के साथ स्ट्राइप एकीकरण।" },
        { "step": "05", "title": "लॉन्च और विकास इन्फ्रास्ट्रक्चर", "desc": "शून्य-डाउनटाइम परिनियोजन, निगरानी, ​​चेतावनी और एनालिटिक्स डैशबोर्ड जिन्हें आपको अपने उपयोगकर्ता आधार को समझने और विकसित करने की आवश्यकता है।" }
      ],
      "cta": "आइए आपके सास उत्पाद को सही तरीके से बनाएं।"
    }
  },
  "ai-powered-apps": {
    "en": {
      "title": "AI Powered Applications",
      "tagline": "Intelligent software that learns, adapts, and automates your business.",
      "description": "We build custom AI-powered applications that go beyond simple automation. From LLM-integrated tools and RAG pipelines to computer vision and predictive analytics, we engineer intelligent systems that give your business a real competitive edge.",
      "features": [
        "LLM & GPT-4 integration",
        "RAG pipeline development",
        "AI chatbots & virtual agents",
        "Computer vision systems",
        "Predictive analytics & ML models",
        "Workflow automation with AI",
        "Natural language processing",
        "AI-powered search & recommendations",
        "Custom model fine-tuning"
      ],
      "benefits": [
        { "title": "Real Competitive Advantage", "desc": "AI capabilities that are custom-built for your workflows give you an edge competitors can't easily replicate with off-the-shelf tools." },
        { "title": "Massive Automation Savings", "desc": "Automate repetitive, time-consuming tasks and redeploy your team's energy toward high-value work that actually moves the needle." },
        { "title": "24/7 Intelligent Operation", "desc": "AI systems don't sleep. Your business processes, customer interactions, and data pipelines run continuously without manual intervention." },
        { "title": "Data-Driven Decisions", "desc": "Turn raw data into actionable intelligence with predictive models and analytics that surface insights humans would miss." }
      ],
      "process": [
        { "step": "01", "title": "AI Strategy & Use Case Definition", "desc": "We identify the highest-impact AI opportunities in your business and define clear, measurable goals before any development begins." },
        { "step": "02", "title": "Data Audit & Preparation", "desc": "We assess your existing data assets, identify gaps, and build the pipelines needed to feed your AI systems clean, structured data." },
        { "step": "03", "title": "Model Selection & Architecture", "desc": "We choose the right models and frameworks — whether fine-tuned LLMs, custom ML models, or third-party APIs — for your specific use case." },
        { "step": "04", "title": "Development & Integration", "desc": "We build and integrate the AI system into your existing stack, with robust APIs, fallback handling, and full observability." },
        { "step": "05", "title": "Monitoring & Continuous Learning", "desc": "Post-launch, we monitor model performance, track drift, and iterate to keep your AI system accurate and improving over time." }
      ],
      "cta": "Ready to make your business AI-powered?"
    },
    "ur": {
      "title": "AI سے چلنے والی ایپلی کیشنز",
      "tagline": "ذہین سافٹ ویئر جو سیکھتا ہے، اپناتا ہے اور آپ کے کاروبار کو خودکار بناتا ہے۔",
      "description": "ہم اپنی مرضی کے مطابق AI سے چلنے والی ایپلی کیشنز بناتے ہیں جو سادہ آٹومیشن سے آگے بڑھ جاتی ہیں۔ LLM-مربوط ٹولز اور RAG پائپ لائنز سے لے کر کمپیوٹر وژن اور پیشن گوئی کے تجزیات تک، ہم ایسے ذہین نظاموں کو انجینئر کرتے ہیں جو آپ کے کاروبار کو حقیقی مسابقتی برتری دیتے ہیں۔",
      "features": [
        "LLM اور GPT-4 کا انضمام",
        "RAG پائپ لائن کی ترقی",
        "AI چیٹ بوٹس اور ورچوئل ایجنٹس",
        "کمپیوٹر وژن سسٹمز",
        "پیشن گوئی کے تجزیات اور ML ماڈلز",
        "AI کے ساتھ ورک فلو آٹومیشن",
        "نیچرل لینگویج پروسیسنگ",
        "AI سے چلنے والی تلاش اور سفارشات",
        "کسٹم ماڈل کی فائن ٹیوننگ"
      ],
      "benefits": [
        { "title": "حقیقی مسابقتی فائدہ", "desc": "آپ کے ورک فلو کے لیے حسب ضرورت بنائی گئی AI صلاحیتیں آپ کو ایک ایسا کنارہ دیتی ہیں جسے حریف آف دی شیلف ٹولز کے ساتھ آسانی سے نقل نہیں کر سکتے۔" },
        { "title": "بڑے پیمانے پر آٹومیشن کی بچت", "desc": "بار بار ہونے والے، وقت طلب کاموں کو خودکار بنائیں اور اپنی ٹیم کی توانائی کو اعلی قیمت والے کام کی طرف دوبارہ تعینات کریں جو حقیقت میں سوئی کو منتقل کرتا ہے۔" },
        { "title": "24/7 ذہین آپریشن", "desc": "AI سسٹم نہیں سوتے ہیں۔ آپ کے کاروباری عمل، گاہک کی بات چیت، اور ڈیٹا پائپ لائنز دستی مداخلت کے بغیر مسلسل چلتی رہتی ہیں۔" },
        { "title": "ڈیٹا سے چلنے والے فیصلے", "desc": "خام ڈیٹا کو قابل عمل انٹیلی جنس میں تبدیل کریں جس میں پیشن گوئی کرنے والے ماڈلز اور تجزیات ہیں جو بصیرت کو ظاہر کرتے ہیں جو انسانوں سے چھوٹ جائیں گے۔" }
      ],
      "process": [
        { "step": "01", "title": "AI حکمت عملی اور کیس کی تعریف کا استعمال کریں", "desc": "ہم آپ کے کاروبار میں سب سے زیادہ اثر انداز ہونے والے AI مواقع کی نشاندہی کرتے ہیں اور کسی بھی ترقی کے شروع ہونے سے پہلے واضح، قابل پیمائش اہداف کی وضاحت کرتے ہیں۔" },
        { "step": "02", "title": "ڈیٹا آڈٹ اور تیاری", "desc": "ہم آپ کے موجودہ ڈیٹا اثاثوں کا جائزہ لیتے ہیں، خلا کی نشاندہی کرتے ہیں، اور آپ کے AI سسٹمز کو صاف، ساختی ڈیٹا فراہم کرنے کے لیے درکار پائپ لائنز بناتے ہیں۔" },
        { "step": "03", "title": "ماڈل کا انتخاب اور فن تعمیر", "desc": "ہم آپ کے مخصوص استعمال کے معاملے کے لیے صحیح ماڈلز اور فریم ورک کا انتخاب کرتے ہیں — خواہ وہ ٹھیک ٹون شدہ LLMs ہوں، کسٹم ML ماڈلز ہوں، یا تھرڈ پارٹی APIs ہوں۔" },
        { "step": "04", "title": "ترقی اور انضمام", "desc": "ہم مضبوط APIs، فال بیک ہینڈلنگ، اور مکمل مشاہدے کے ساتھ، آپ کے موجودہ اسٹیک میں AI سسٹم کی تعمیر اور انضمام کرتے ہیں۔" },
        { "step": "05", "title": "نگرانی اور مسلسل سیکھنا", "desc": "پوسٹ لانچ، ہم ماڈل کی کارکردگی کی نگرانی کرتے ہیں، ڈرفٹ کو ٹریک کرتے ہیں، اور آپ کے AI سسٹم کو درست رکھنے اور وقت کے ساتھ ساتھ بہتر بنانے کے لیے اعادہ کرتے ہیں۔" }
      ],
      "cta": "اپنے کاروبار کو AI سے چلنے والا بنانے کے لیے تیار ہیں؟"
    },
    "ar": {
      "title": "تطبيقات مدعومة بالذكاء الاصطناعي",
      "tagline": "برنامج ذكي يتعلم ويتكيف ويؤتمت عملك.",
      "description": "نحن نبني تطبيقات مخصصة تعمل بالذكاء الاصطناعي تتجاوز مجرد الأتمتة البسيطة. من الأدوات المدمجة في LLM وخطوط أنابيب RAG إلى الرؤية الحاسوبية والتحليلات التنبؤية، نقوم بهندسة أنظمة ذكية تمنح عملك ميزة تنافسية حقيقية.",
      "features": [
        "تكامل LLM و GPT-4",
        "تطوير خط أنابيب RAG",
        "روبوتات محادثة ووكلاء افتراضيون بالذكاء الاصطناعي",
        "أنظمة الرؤية الحاسوبية",
        "التحليلات التنبؤية ونماذج التعلم الآلي",
        "أتمتة سير العمل باستخدام الذكاء الاصطناعي",
        "معالجة اللغة الطبيعية",
        "البحث والتوصيات المدعومة بالذكاء الاصطناعي",
        "الضبط الدقيق للنموذج المخصص"
      ],
      "benefits": [
        { "title": "ميزة تنافسية حقيقية", "desc": "تمنحك إمكانات الذكاء الاصطناعي المصممة خصيصًا لسير عملك ميزة لا يمكن للمنافسين تكرارها بسهولة باستخدام أدوات جاهزة." },
        { "title": "وفورات هائلة في الأتمتة", "desc": "أتمتة المهام المتكررة والمستهلكة للوقت وإعادة توظيف طاقة فريقك نحو عمل عالي القيمة يحرك الإبرة بالفعل." },
        { "title": "تشغيل ذكي على مدار الساعة طوال أيام الأسبوع", "desc": "أنظمة الذكاء الاصطناعي لا تنام. تعمل العمليات التجارية وتفاعلات العملاء وخطوط أنابيب البيانات باستمرار دون تدخل يدوي." },
        { "title": "قرارات مبنية على البيانات", "desc": "حول البيانات الأولية إلى ذكاء قابل للتنفيذ باستخدام النماذج والتحليلات التنبؤية التي تكشف عن الرؤى التي قد يفتقدها البشر." }
      ],
      "process": [
        { "step": "01", "title": "استراتيجية الذكاء الاصطناعي وتعريف حالة الاستخدام", "desc": "نحدد فرص الذكاء الاصطناعي الأكثر تأثيرًا في عملك ونحدد أهدافًا واضحة وقابلة للقياس قبل بدء أي تطوير." },
        { "step": "02", "title": "تدقيق البيانات وإعدادها", "desc": "نقوم بتقييم أصول البيانات الحالية الخاصة بك، وتحديد الفجوات، وبناء خطوط الأنابيب اللازمة لتغذية أنظمة الذكاء الاصطناعي ببيانات نظيفة ومنظمة." },
        { "step": "03", "title": "اختيار النموذج والهندسة المعمارية", "desc": "نختار النماذج والأطر المناسبة - سواء أكانت نماذج ماجستير دقيقة الضبط أو نماذج تعلم آلي مخصصة أو واجهات برمجة تطبيقات لجهات خارجية - لحالة الاستخدام الخاصة بك." },
        { "step": "04", "title": "التطوير والتكامل", "desc": "نقوم ببناء ودمج نظام الذكاء الاصطناعي في مجموعتك الحالية، مع واجهات برمجة تطبيقات قوية ومعالجة احتياطية وقابلية للملاحظة الكاملة." },
        { "step": "05", "title": "المراقبة والتعلم المستمر", "desc": "بعد الإطلاق، نقوم بمراقبة أداء النموذج، وتتبع الانجراف، والتكرار للحفاظ على دقة نظام الذكاء الاصطناعي الخاص بك وتحسينه بمرور الوقت." }
      ],
      "cta": "هل أنت مستعد لجعل عملك مدعومًا بالذكاء الاصطناعي؟"
    },
    "es": {
      "title": "Aplicaciones Impulsadas por IA",
      "tagline": "Software inteligente que aprende, se adapta y automatiza su negocio.",
      "description": "Creamos aplicaciones personalizadas impulsadas por IA que van más allá de la simple automatización. Desde herramientas integradas con LLM y canales de RAG hasta visión por computadora y análisis predictivo, diseñamos sistemas inteligentes que le brindan a su empresa una ventaja competitiva real.",
      "features": [
        "Integración LLM y GPT-4",
        "Desarrollo de canales RAG",
        "Chatbots de IA y agentes virtuales",
        "Sistemas de visión por computadora",
        "Análisis predictivo y modelos ML",
        "Automatización de flujo de trabajo con IA",
        "Procesamiento del lenguaje natural",
        "Búsqueda y recomendaciones impulsadas por IA",
        "Ajuste fino del modelo personalizado"
      ],
      "benefits": [
        { "title": "Ventaja competitiva real", "desc": "Las capacidades de IA personalizadas para sus flujos de trabajo le brindan una ventaja que los competidores no pueden replicar fácilmente con herramientas listas para usar." },
        { "title": "Ahorros masivos de automatización", "desc": "Automatice las tareas repetitivas y que consumen mucho tiempo y redistribuya la energía de su equipo hacia el trabajo de alto valor que realmente mueve la aguja." },
        { "title": "Operación inteligente 24/7", "desc": "Los sistemas de IA no duermen. Sus procesos comerciales, las interacciones con los clientes y las canalizaciones de datos se ejecutan de forma continua sin intervención manual." },
        { "title": "Decisiones basadas en datos", "desc": "Convierta los datos sin procesar en inteligencia procesable con modelos predictivos y análisis que revelan información que los humanos pasarían por alto." }
      ],
      "process": [
        { "step": "01", "title": "Estrategia de IA y definición de casos de uso", "desc": "Identificamos las oportunidades de IA de mayor impacto en su empresa y definimos objetivos claros y medibles antes de que comience cualquier desarrollo." },
        { "step": "02", "title": "Auditoría y preparación de datos", "desc": "Evaluamos sus activos de datos existentes, identificamos brechas y construimos los canales necesarios para alimentar sus sistemas de IA con datos limpios y estructurados." },
        { "step": "03", "title": "Selección de modelos y arquitectura", "desc": "Elegimos los modelos y marcos adecuados (ya sean LLM ajustados, modelos ML personalizados o API de terceros) para su caso de uso específico." },
        { "step": "04", "title": "Desarrollo e integración", "desc": "Construimos e integramos el sistema de IA en su pila existente, con API robustas, manejo de respaldo y observabilidad total." },
        { "step": "05", "title": "Monitoreo y aprendizaje continuo", "desc": "Después del lanzamiento, monitoreamos el rendimiento del modelo, realizamos un seguimiento de la deriva e iteramos para mantener la precisión de su sistema de inteligencia artificial y mejorarlo con el tiempo." }
      ],
      "cta": "¿Listo para hacer que su negocio esté impulsado por IA?"
    },
    "fr": {
      "title": "Applications Alimentées par l'IA",
      "tagline": "Logiciel intelligent qui apprend, s'adapte et automatise votre entreprise.",
      "description": "Nous construisons des applications personnalisées alimentées par l'IA qui vont au-delà de la simple automatisation. Des outils intégrés LLM et des pipelines RAG à la vision par ordinateur et à l'analyse prédictive, nous concevons des systèmes intelligents qui donnent à votre entreprise un véritable avantage concurrentiel.",
      "features": [
        "Intégration LLM et GPT-4",
        "Développement de pipeline RAG",
        "Chatbots et agents virtuels IA",
        "Systèmes de vision par ordinateur",
        "Analyse prédictive et modèles ML",
        "Automatisation des flux de travail avec l'IA",
        "Traitement du langage naturel",
        "Recherche et recommandations basées sur l'IA",
        "Affinage de modèle personnalisé"
      ],
      "benefits": [
        { "title": "Véritable avantage concurrentiel", "desc": "Les capacités d'IA conçues sur mesure pour vos flux de travail vous donnent un avantage que les concurrents ne peuvent pas facilement reproduire avec des outils prêts à l'emploi." },
        { "title": "Économies d'automatisation massives", "desc": "Automatisez les tâches répétitives et chronophages et redéployez l'énergie de votre équipe vers un travail à forte valeur ajoutée qui fait vraiment bouger les choses." },
        { "title": "Fonctionnement intelligent 24h/24 et 7j/7", "desc": "Les systèmes d'IA ne dorment pas. Vos processus commerciaux, vos interactions avec les clients et vos pipelines de données s'exécutent en continu sans intervention manuelle." },
        { "title": "Décisions basées sur les données", "desc": "Transformez les données brutes en renseignements exploitables avec des modèles prédictifs et des analyses qui mettent en évidence des informations qui échapperaient aux humains." }
      ],
      "process": [
        { "step": "01", "title": "Stratégie IA et définition de cas d'utilisation", "desc": "Nous identifions les opportunités d'IA à fort impact dans votre entreprise et définissons des objectifs clairs et mesurables avant le début de tout développement." },
        { "step": "02", "title": "Audit et préparation des données", "desc": "Nous évaluons vos ressources de données existantes, identifions les lacunes et construisons les pipelines nécessaires pour alimenter vos systèmes d'IA en données propres et structurées." },
        { "step": "03", "title": "Sélection et architecture du modèle", "desc": "Nous choisissons les bons modèles et frameworks — qu'il s'agisse de LLM affinés, de modèles ML personnalisés ou d'API tierces — pour votre cas d'utilisation spécifique." },
        { "step": "04", "title": "Développement et intégration", "desc": "Nous construisons et intégrons le système d'IA à votre pile existante, avec des API robustes, une gestion de secours et une observabilité totale." },
        { "step": "05", "title": "Surveillance et apprentissage continu", "desc": "Après le lancement, nous surveillons les performances du modèle, suivons la dérive et itérons pour maintenir la précision de votre système d'IA et l'améliorer au fil du temps." }
      ],
      "cta": "Prêt à rendre votre entreprise alimentée par l'IA ?"
    },
    "zh": {
      "title": "AI 驱动的应用程序",
      "tagline": "能够学习、适应并实现业务自动化的智能软件。",
      "description": "我们构建的定制 AI 应用程序超越了简单的自动化。从集成 LLM 的工具和 RAG 管道到计算机视觉和预测分析，我们设计的智能系统为您带来真正的竞争优势。",
      "features": [
        "LLM & GPT-4 集成",
        "RAG 管道开发",
        "AI 聊天机器人和虚拟代理",
        "计算机视觉系统",
        "预测分析和机器学习模型",
        "使用 AI 实现工作流自动化",
        "自然语言处理",
        "AI 驱动的搜索和推荐",
        "自定义模型微调"
      ],
      "benefits": [
        { "title": "真正的竞争优势", "desc": "为您的工作流程定制的 AI 功能为您带来竞争对手无法使用现成工具轻易复制的优势。" },
        { "title": "巨大的自动化节约", "desc": "自动执行重复、耗时的任务，并将团队的精力重新部署到真正能带来改变的高价值工作上。" },
        { "title": "24/7 全天候智能运营", "desc": "AI 系统从不休息。您的业务流程、客户互动和数据管道无需人工干预即可连续运行。" },
        { "title": "数据驱动的决策", "desc": "通过预测模型和分析将原始数据转化为可操作的情报，从而发现人类可能会忽略的见解。" }
      ],
      "process": [
        { "step": "01", "title": "AI 战略和用例定义", "desc": "我们在任何开发开始之前，会确定您企业中影响力最大的 AI 机会，并设定清晰、可衡量的目标。" },
        { "step": "02", "title": "数据审计和准备", "desc": "我们评估您现有的数据资产，找出差距，并建立向您的 AI 系统提供干净、结构化数据所需的管道。" },
        { "step": "03", "title": "模型选择和架构", "desc": "我们为您的特定用例选择合适的模型和框架——无论是经过微调的 LLM、自定义 ML 模型，还是第三方 API。" },
        { "step": "04", "title": "开发和集成", "desc": "我们将 AI 系统构建并集成到您现有的堆栈中，具有强大的 API、回退处理和完整的可观察性。" },
        { "step": "05", "title": "监控和持续学习", "desc": "发布后，我们会监控模型性能，跟踪漂移，并不断迭代以保持您的 AI 系统准确并随时间推移而改进。" }
      ],
      "cta": "准备好让您的企业由 AI 驱动了吗？"
    },
    "hi": {
      "title": "एआई संचालित अनुप्रयोग",
      "tagline": "बुद्धिमान सॉफ़्टवेयर जो सीखता है, अनुकूलन करता है और आपके व्यवसाय को स्वचालित करता है।",
      "description": "हम कस्टम एआई-संचालित एप्लिकेशन बनाते हैं जो साधारण स्वचालन से परे जाते हैं। एलएलएम-एकीकृत टूल और आरएजी पाइपलाइनों से लेकर कंप्यूटर विज़न और भविष्य कहनेवाला विश्लेषण तक, हम बुद्धिमान प्रणालियों का निर्माण करते हैं जो आपके व्यवसाय को एक वास्तविक प्रतिस्पर्धी बढ़त देते हैं।",
      "features": [
        "LLM और GPT-4 एकीकरण",
        "RAG पाइपलाइन विकास",
        "एआई चैटबॉट्स और वर्चुअल एजेंट",
        "कंप्यूटर विजन सिस्टम",
        "भविष्य कहनेवाला विश्लेषिकी और एमएल मॉडल",
        "एआई के साथ वर्कफ़्लो स्वचालन",
        "प्राकृतिक भाषा प्रसंस्करण",
        "एआई-संचालित खोज और सिफारिशें",
        "कस्टम मॉडल ठीक-ट्यूनिंग"
      ],
      "benefits": [
        { "title": "वास्तविक प्रतिस्पर्धात्मक लाभ", "desc": "आपके वर्कफ़्लो के लिए कस्टम-निर्मित AI क्षमताएं आपको एक ऐसी बढ़त देती हैं जिसे प्रतियोगी ऑफ-द-शेल्फ टूल के साथ आसानी से दोहरा नहीं सकते हैं।" },
        { "title": "बड़े पैमाने पर स्वचालन बचत", "desc": "दोहराए जाने वाले, समय लेने वाले कार्यों को स्वचालित करें और अपनी टीम की ऊर्जा को उच्च-मूल्य वाले काम की ओर फिर से तैनात करें जो वास्तव में सुई को स्थानांतरित करता है।" },
        { "title": "24/7 इंटेलिजेंट ऑपरेशन", "desc": "एआई सिस्टम सोते नहीं हैं। आपके व्यावसायिक संचालन, ग्राहक इंटरैक्शन और डेटा पाइपलाइन बिना मैन्युअल हस्तक्षेप के लगातार चलते हैं।" },
        { "title": "डेटा-संचालित निर्णय", "desc": "भविष्य कहनेवाला मॉडल और एनालिटिक्स के साथ कच्चे डेटा को कार्रवाई योग्य बुद्धि में बदलें जो सतह की अंतर्दृष्टि मानवों को याद आती है।" }
      ],
      "process": [
        { "step": "01", "title": "एआई रणनीति और उपयोग केस परिभाषा", "desc": "हम आपके व्यवसाय में सबसे अधिक प्रभाव वाले एआई अवसरों की पहचान करते हैं और कोई विकास शुरू होने से पहले स्पष्ट, औसत लक्ष्य निर्धारित करते हैं।" },
        { "step": "02", "title": "डेटा ऑडिट और तैयारी", "desc": "हम आपकी मौजूदा डेटा परिसंपत्तियों का आकलन करते हैं, अंतराल की पहचान करते हैं, और अपने AI सिस्टम को स्वच्छ, संरचित डेटा खिलाने के लिए आवश्यक पाइपलाइनों का निर्माण करते हैं।" },
        { "step": "03", "title": "मॉडल चयन और वास्तुकला", "desc": "हम आपके विशिष्ट उपयोग के मामले के लिए सही मॉडल और रूपरेखा चुनते हैं - चाहे ठीक-ठाक एलएलएम, कस्टम एमएल मॉडल, या तीसरे पक्ष के एपीआई हों।" },
        { "step": "04", "title": "विकास और एकीकरण", "desc": "हम मजबूत एपीआई, फॉलबैक हैंडलिंग, और पूर्ण अवलोकन के साथ, एआई सिस्टम को आपके मौजूदा स्टैक में एकीकृत और एकीकृत करते हैं।" },
        { "step": "05", "title": "निगरानी और सतत सीखना", "desc": "पोस्ट-लॉन्च, हम अपने एआई सिस्टम को सटीक रखने और समय के साथ सुधार करने के लिए मॉडल प्रदर्शन, ट्रैक ड्रिफ्ट और पुनरावृति की निगरानी करते हैं।" }
      ],
      "cta": "अपने व्यवसाय को एआई-संचालित बनाने के लिए तैयार हैं?"
    }
  },
  "seo": {
    "en": {
      "title": "SEO & Growth",
      "tagline": "Technical SEO and content strategy that drives compounding organic growth.",
      "description": "We combine deep technical SEO expertise with data-driven content strategy to build sustainable organic traffic. From Core Web Vitals optimization and structured data to keyword architecture and link building — we engineer search visibility that compounds over time.",
      "features": [
        "Technical SEO audit & fixes",
        "Core Web Vitals optimization",
        "Keyword research & architecture",
        "On-page SEO optimization",
        "Structured data & schema markup",
        "Link building strategy",
        "Content strategy & planning",
        "Local SEO optimization",
        "SEO performance reporting"
      ],
      "benefits": [
        { "title": "Compounding Organic Traffic", "desc": "Unlike paid ads that stop the moment you pause spend, SEO builds an asset that grows month over month and pays dividends long-term." },
        { "title": "Lower CAC Than Paid Ads", "desc": "Organic traffic has no per-click cost. As rankings improve, your customer acquisition cost drops while volume increases." },
        { "title": "Authority & Trust Building", "desc": "High rankings signal credibility to both search engines and users. We build the topical authority that makes your brand the go-to source." },
        { "title": "Measurable ROI", "desc": "Every action we take is tracked. You see exactly which keywords are ranking, how traffic is converting, and what the revenue impact is." }
      ],
      "process": [
        { "step": "01", "title": "SEO Audit & Baseline", "desc": "A full technical and content audit to identify what's holding your site back — crawl issues, indexation problems, and missed opportunities." },
        { "step": "02", "title": "Keyword & Competitor Research", "desc": "We map the keyword landscape, identify high-value targets, and analyze what your top competitors are doing to outrank them." },
        { "step": "03", "title": "Technical Fixes & On-Page", "desc": "We fix the technical foundation — site speed, Core Web Vitals, structured data, internal linking — and optimize every key page." },
        { "step": "04", "title": "Content & Link Strategy", "desc": "A content calendar targeting your priority keywords, paired with a link building strategy to build domain authority over time." },
        { "step": "05", "title": "Monthly Reporting & Iteration", "desc": "Clear monthly reports showing ranking movements, traffic growth, and conversion impact — with strategy adjustments based on real data." }
      ],
      "cta": "Start ranking where your customers are searching."
    },
    "ur": {
      "title": "SEO اور ترقی",
      "tagline": "تکنیکی SEO اور مواد کی حکمت عملی جو نامیاتی ترقی کو بڑھاتی ہے۔",
      "description": "ہم پائیدار نامیاتی ٹریفک کی تعمیر کے لیے گہری تکنیکی SEO مہارت کو ڈیٹا پر مبنی مواد کی حکمت عملی کے ساتھ جوڑتے ہیں۔ بنیادی ویب وائٹلز کی اصلاح اور سٹرکچرڈ ڈیٹا سے لے کر کلیدی الفاظ کے فن تعمیر اور لنک بلڈنگ تک — ہم تلاش کی مرئیت کو انجینئر کرتے ہیں جو وقت کے ساتھ بڑھتی ہے۔",
      "features": [
        "تکنیکی SEO آڈٹ اور اصلاحات",
        "بنیادی ویب وائٹلز کی اصلاح",
        "مطلوبہ الفاظ کی تحقیق اور فن تعمیر",
        "آن پیج SEO کی اصلاح",
        "سٹرکچرڈ ڈیٹا اور سکیما مارک اپ",
        "لنک بنانے کی حکمت عملی",
        "مواد کی حکمت عملی اور منصوبہ بندی",
        "مقامی SEO کی اصلاح",
        "SEO کی کارکردگی کی رپورٹنگ"
      ],
      "benefits": [
        { "title": "کمپاؤنڈنگ آرگینک ٹریفک", "desc": "بامعاوضہ اشتہارات کے برعکس جو آپ کے اخراجات کو روکتے ہی رک جاتے ہیں، SEO ایک ایسا اثاثہ بناتا ہے جو مہینہ در مہینہ بڑھتا ہے اور طویل مدتی منافع ادا کرتا ہے۔" },
        { "title": "بامعاوضہ اشتہارات سے کم CAC", "desc": "نامیاتی ٹریفک کی کوئی فی کلک قیمت نہیں ہے۔ جیسے جیسے درجہ بندی بہتر ہوتی ہے، حجم میں اضافے کے ساتھ آپ کے گاہک کے حصول کی لاگت گرتی ہے۔" },
        { "title": "اتھارٹی اور اعتماد سازی", "desc": "اعلی درجہ بندی سرچ انجنوں اور صارفین دونوں کو اعتبار کا اشارہ دیتی ہے۔ ہم موضوعی اختیار بناتے ہیں جو آپ کے برانڈ کو جانے کا ذریعہ بناتا ہے۔" },
        { "title": "قابل پیمائش ROI", "desc": "ہماری ہر کارروائی کو ٹریک کیا جاتا ہے۔ آپ بالکل دیکھتے ہیں کہ کون سے مطلوبہ الفاظ کی درجہ بندی کی جا رہی ہے، ٹریفک کیسے تبدیل ہو رہی ہے، اور آمدنی پر کیا اثرات مرتب ہو رہے ہیں۔" }
      ],
      "process": [
        { "step": "01", "title": "SEO آڈٹ اور بیس لائن", "desc": "یہ شناخت کرنے کے لیے ایک مکمل تکنیکی اور مواد کا آڈٹ کہ آپ کی سائٹ کو کیا چیز روک رہی ہے — رینگنے کے مسائل، اشاریہ سازی کے مسائل، اور کھوئے ہوئے مواقع۔" },
        { "step": "02", "title": "مطلوبہ الفاظ اور حریف کی تحقیق", "desc": "ہم مطلوبہ الفاظ کی زمین کی تزئین کا نقشہ بناتے ہیں، اعلی قیمت والے اہداف کی نشاندہی کرتے ہیں، اور تجزیہ کرتے ہیں کہ آپ کے سرکردہ حریف ان کو پیچھے چھوڑنے کے لیے کیا کر رہے ہیں۔" },
        { "step": "03", "title": "تکنیکی اصلاحات اور آن پیج", "desc": "ہم تکنیکی فاؤنڈیشن کو ٹھیک کرتے ہیں — سائٹ کی رفتار، بنیادی ویب وائٹلز، سٹرکچرڈ ڈیٹا، اندرونی لنکنگ — اور ہر کلیدی صفحہ کو بہتر بناتے ہیں۔" },
        { "step": "04", "title": "مواد اور لنک کی حکمت عملی", "desc": "وقت کے ساتھ ڈومین اتھارٹی بنانے کے لیے لنک بنانے کی حکمت عملی کے ساتھ آپ کے ترجیحی مطلوبہ الفاظ کو نشانہ بنانے والا مواد کیلنڈر۔" },
        { "step": "05", "title": "ماہانہ رپورٹنگ اور تکرار", "desc": "درجہ بندی کی نقل و حرکت، ٹریفک کی ترقی، اور تبادلوں کے اثرات کو ظاہر کرنے والی واضح ماہانہ رپورٹیں — حقیقی ڈیٹا کی بنیاد پر حکمت عملی ایڈجسٹمنٹ کے ساتھ۔" }
      ],
      "cta": "وہاں درجہ بندی شروع کریں جہاں آپ کے گاہک تلاش کر رہے ہیں۔"
    },
    "ar": {
      "title": "تحسين محركات البحث والنمو",
      "tagline": "تحسين محركات البحث التقني واستراتيجية المحتوى التي تقود النمو العضوي المضاعف.",
      "description": "نحن نجمع بين الخبرة التقنية العميقة لتحسين محركات البحث مع استراتيجية المحتوى القائمة على البيانات لبناء حركة مرور عضوية مستدامة. من تحسين Core Web Vitals والبيانات المهيكلة إلى بنية الكلمات الرئيسية وبناء الروابط - نقوم بهندسة رؤية البحث التي تتضاعف بمرور الوقت.",
      "features": [
        "تدقيق وإصلاحات تحسين محركات البحث الفنية",
        "تحسين مؤشرات الويب الأساسية",
        "البحث في الكلمات الرئيسية وهندستها",
        "تحسين محركات البحث على الصفحة",
        "البيانات المهيكلة وعلامات المخطط",
        "استراتيجية بناء الروابط",
        "استراتيجية المحتوى والتخطيط",
        "تحسين محركات البحث المحلية",
        "الإبلاغ عن أداء تحسين محركات البحث"
      ],
      "benefits": [
        { "title": "مضاعفة حركة المرور العضوية", "desc": "على عكس الإعلانات المدفوعة التي تتوقف في اللحظة التي توقف فيها الإنفاق، يبني تحسين محركات البحث أصلاً ينمو شهرًا بعد شهر ويدفع أرباحًا طويلة الأجل." },
        { "title": "تكلفة اكتساب عملاء أقل من الإعلانات المدفوعة", "desc": "لا توجد تكلفة لكل نقرة لحركة المرور العضوية. مع تحسن التصنيفات، تنخفض تكلفة اكتساب العملاء بينما يزداد الحجم." },
        { "title": "بناء السلطة والثقة", "desc": "تشير التصنيفات العالية إلى المصداقية لكل من محركات البحث والمستخدمين. نحن نبني السلطة الموضعية التي تجعل علامتك التجارية هي المصدر المفضل." },
        { "title": "عائد استثمار قابل للقياس", "desc": "يتم تتبع كل إجراء نتخذه. ترى بالضبط الكلمات الرئيسية التي يتم تصنيفها، وكيف يتم تحويل حركة المرور، وما هو تأثير الإيرادات." }
      ],
      "process": [
        { "step": "01", "title": "تدقيق تحسين محركات البحث والأساس", "desc": "تدقيق فني ومحتوى كامل لتحديد ما يعيق موقعك - مشكلات الزحف ومشاكل الفهرسة والفرص الضائعة." },
        { "step": "02", "title": "بحث الكلمات الرئيسية والمنافسين", "desc": "نحدد مشهد الكلمات الرئيسية، ونحدد الأهداف عالية القيمة، ونحلل ما يفعله كبار منافسيك للتفوق عليهم." },
        { "step": "03", "title": "الإصلاحات الفنية وعلى الصفحة", "desc": "نقوم بإصلاح الأساس التقني - سرعة الموقع، ومؤشرات الويب الأساسية، والبيانات المهيكلة، والربط الداخلي - ونحسن كل صفحة رئيسية." },
        { "step": "04", "title": "استراتيجية المحتوى والروابط", "desc": "تقويم محتوى يستهدف كلماتك الرئيسية ذات الأولوية، مقترنًا باستراتيجية بناء روابط لبناء سلطة المجال بمرور الوقت." },
        { "step": "05", "title": "الإبلاغ الشهري والتكرار", "desc": "تقارير شهرية واضحة توضح تحركات التصنيف ونمو حركة المرور وتأثير التحويل - مع تعديلات الإستراتيجية بناءً على بيانات حقيقية." }
      ],
      "cta": "ابدأ الترتيب حيث يبحث عملاؤك."
    },
    "es": {
      "title": "SEO y Crecimiento",
      "tagline": "SEO técnico y estrategia de contenido que impulsa el crecimiento orgánico compuesto.",
      "description": "Combinamos una profunda experiencia técnica en SEO con una estrategia de contenido basada en datos para generar tráfico orgánico sostenible. Desde la optimización de Core Web Vitals y datos estructurados hasta la arquitectura de palabras clave y la construcción de enlaces, diseñamos la visibilidad de búsqueda que se compone con el tiempo.",
      "features": [
        "Auditoría y correcciones técnicas de SEO",
        "Optimización de los Core Web Vitals",
        "Investigación y arquitectura de palabras clave",
        "Optimización de SEO en la página",
        "Datos estructurados y marcado de esquemas",
        "Estrategia de construcción de enlaces",
        "Estrategia y planificación de contenidos",
        "Optimización SEO local",
        "Informes de rendimiento de SEO"
      ],
      "benefits": [
        { "title": "Aumento del tráfico orgánico", "desc": "A diferencia de los anuncios pagos que se detienen en el momento en que se detiene la inversión, el SEO crea un activo que crece mes a mes y paga dividendos a largo plazo." },
        { "title": "CAC más bajo que los anuncios pagos", "desc": "El tráfico orgánico no tiene costo por clic. A medida que mejoran las clasificaciones, el costo de adquisición de clientes disminuye mientras que el volumen aumenta." },
        { "title": "Construcción de autoridad y confianza", "desc": "Las altas clasificaciones indican credibilidad tanto para los motores de búsqueda como para los usuarios. Construimos la autoridad temática que convierte a su marca en la fuente a la que acudir." },
        { "title": "ROI medible", "desc": "Se realiza un seguimiento de cada acción que realizamos. Puede ver exactamente qué palabras clave se clasifican, cómo se convierte el tráfico y cuál es el impacto en los ingresos." }
      ],
      "process": [
        { "step": "01", "title": "Auditoría de SEO y línea base", "desc": "Una auditoría técnica y de contenido completa para identificar qué está frenando su sitio: problemas de rastreo, problemas de indexación y oportunidades perdidas." },
        { "step": "02", "title": "Investigación de palabras clave y de la competencia", "desc": "Trazamos el panorama de las palabras clave, identificamos objetivos de alto valor y analizamos qué están haciendo sus principales competidores para superarlos." },
        { "step": "03", "title": "Correcciones técnicas y On-Page", "desc": "Arreglamos la base técnica (velocidad del sitio, Core Web Vitals, datos estructurados, enlaces internos) y optimizamos cada página clave." },
        { "step": "04", "title": "Estrategia de contenido y enlaces", "desc": "Un calendario de contenido dirigido a sus palabras clave prioritarias, combinado con una estrategia de construcción de enlaces para desarrollar la autoridad del dominio con el tiempo." },
        { "step": "05", "title": "Informes mensuales e iteración", "desc": "Informes mensuales claros que muestran los movimientos de clasificación, el crecimiento del tráfico y el impacto en las conversiones, con ajustes de estrategia basados ​​en datos reales." }
      ],
      "cta": "Empiece a clasificar donde sus clientes están buscando."
    },
    "fr": {
      "title": "SEO et Croissance",
      "tagline": "SEO technique et stratégie de contenu qui stimulent une croissance organique composée.",
      "description": "Nous combinons une expertise approfondie en SEO technique avec une stratégie de contenu basée sur les données pour créer un trafic organique durable. De l'optimisation Core Web Vitals et des données structurées à l'architecture des mots clés et à la création de liens, nous concevons une visibilité de recherche qui se compose au fil du temps.",
      "features": [
        "Audit SEO technique et correctifs",
        "Optimisation Core Web Vitals",
        "Recherche et architecture de mots clés",
        "Optimisation SEO sur la page",
        "Données structurées et balisage de schéma",
        "Stratégie de création de liens",
        "Stratégie et planification de contenu",
        "Optimisation SEO local",
        "Rapports de performance SEO"
      ],
      "benefits": [
        { "title": "Trafic organique composé", "desc": "Contrairement aux annonces payantes qui s'arrêtent dès que vous suspendez vos dépenses, le SEO crée un actif qui croît mois après mois et verse des dividendes à long terme." },
        { "title": "Coût d'acquisition inférieur aux annonces payantes", "desc": "Le trafic organique n'a pas de coût par clic. À mesure que les classements s'améliorent, votre coût d'acquisition de clients diminue tandis que le volume augmente." },
        { "title": "Renforcement de l'autorité et de la confiance", "desc": "Des classements élevés signalent la crédibilité aux moteurs de recherche et aux utilisateurs. Nous construisons l'autorité thématique qui fait de votre marque la source incontournable." },
        { "title": "ROI mesurable", "desc": "Chaque action que nous entreprenons est suivie. Vous voyez exactement quels mots-clés sont classés, comment le trafic se convertit et quel est l'impact sur les revenus." }
      ],
      "process": [
        { "step": "01", "title": "Audit SEO et base de référence", "desc": "Un audit technique et de contenu complet pour identifier ce qui freine votre site : problèmes d'exploration, problèmes d'indexation et opportunités manquées." },
        { "step": "02", "title": "Recherche de mots-clés et de concurrents", "desc": "Nous cartographions le paysage des mots-clés, identifions les cibles à forte valeur ajoutée et analysons ce que font vos principaux concurrents pour les surclasser." },
        { "step": "03", "title": "Correctifs techniques et sur la page", "desc": "Nous corrigeons la base technique — vitesse du site, Core Web Vitals, données structurées, maillage interne — et optimisons chaque page clé." },
        { "step": "04", "title": "Stratégie de contenu et de liens", "desc": "Un calendrier de contenu ciblant vos mots-clés prioritaires, associé à une stratégie de création de liens pour développer l'autorité de domaine au fil du temps." },
        { "step": "05", "title": "Rapports mensuels et itération", "desc": "Des rapports mensuels clairs montrant les mouvements de classement, la croissance du trafic et l'impact sur les conversions — avec des ajustements de stratégie basés sur des données réelles." }
      ],
      "cta": "Commencez à vous classer là où vos clients effectuent des recherches."
    },
    "zh": {
      "title": "SEO 与增长",
      "tagline": "推动复合自然增长的技术 SEO 和内容策略。",
      "description": "我们将深厚的技术 SEO 专业知识与数据驱动的内容策略相结合，以建立可持续的自然流量。从核心网页指标优化和结构化数据到关键词架构和链接建设——我们精心设计随着时间推移而复合搜索可见性。",
      "features": [
        "技术 SEO 审计和修复",
        "核心网页指标优化",
        "关键词研究和架构",
        "页面 SEO 优化",
        "结构化数据和架构标记",
        "链接建设策略",
        "内容策略和规划",
        "本地 SEO 优化",
        "SEO 性能报告"
      ],
      "benefits": [
        { "title": "复合自然流量", "desc": "与暂停支出就停止的付费广告不同，SEO 会建立一项逐月增长并产生长期红利的资产。" },
        { "title": "比付费广告更低的 CAC", "desc": "自然流量没有每次点击成本。随着排名的提高，您的客户获取成本会下降，而数量会增加。" },
        { "title": "权威和信任建立", "desc": "高排名向搜索引擎和用户表明了可信度。我们建立了使您的品牌成为首选来源的权威性。" },
        { "title": "可衡量的投资回报率", "desc": "我们采取的每一项行动都会被跟踪。您可以清楚地看到哪些关键词正在排名，流量如何转化以及收入影响是什么。" }
      ],
      "process": [
        { "step": "01", "title": "SEO 审计和基线", "desc": "全面的技术和内容审核，以找出阻碍您网站发展的因素——抓取问题、索引问题和错失的机会。" },
        { "step": "02", "title": "关键词和竞争对手研究", "desc": "我们绘制了关键词图谱，确定了高价值目标，并分析了您的顶级竞争对手为超越他们所做的事情。" },
        { "step": "03", "title": "技术修复和页面", "desc": "我们修复技术基础——网站速度、核心网页指标、结构化数据、内部链接——并优化每个关键页面。" },
        { "step": "04", "title": "内容和链接策略", "desc": "针对您优先关键词的内容日历，加上建立随着时间推移建立域名权威的链接建设策略。" },
        { "step": "05", "title": "月度报告和迭代", "desc": "清晰的月度报告显示了排名变动、流量增长和转化影响——并根据实际数据进行策略调整。" }
      ],
      "cta": "在您的客户搜索的地方开始排名。"
    },
    "hi": {
      "title": "एसईओ और विकास",
      "tagline": "तकनीकी एसईओ और सामग्री रणनीति जो यौगिक कार्बनिक विकास को प्रेरित करती है।",
      "description": "हम स्थायी कार्बनिक यातायात के निर्माण के लिए डेटा-संचालित सामग्री रणनीति के साथ गहरी तकनीकी एसईओ विशेषज्ञता को मिलाते हैं। कोर वेब विटल्स अनुकूलन और संरचित डेटा से लेकर कीवर्ड वास्तुकला और लिंक बिल्डिंग तक - हम खोज दृश्यता का निर्माण करते हैं जो समय के साथ मिश्रित होती है।",
      "features": [
        "तकनीकी एसईओ ऑडिट और फिक्स",
        "कोर वेब वाइटल अनुकूलन",
        "कीवर्ड रिसर्च और आर्किटेक्चर",
        "ऑन-पेज एसईओ अनुकूलन",
        "संरचित डेटा और स्कीमा मार्कअप",
        "लिंक बिल्डिंग रणनीति",
        "सामग्री रणनीति और योजना",
        "स्थानीय एसईओ अनुकूलन",
        "एसईओ प्रदर्शन रिपोर्टिंग"
      ],
      "benefits": [
        { "title": "कम्पाउंडिंग ऑर्गेनिक ट्रैफिक", "desc": "सशुल्क विज्ञापनों के विपरीत, जो आपके खर्च को रोकते ही बंद हो जाते हैं, एसईओ एक संपत्ति बनाता है जो महीने दर महीने बढ़ती है और लंबी अवधि के लाभांश का भुगतान करती है।" },
        { "title": "पेड विज्ञापनों की तुलना में कम सीएसी", "desc": "ऑर्गेनिक ट्रैफिक की प्रति-क्लिक कोई लागत नहीं है। जैसे-जैसे रैंकिंग में सुधार होता है, मात्रा बढ़ने पर आपके ग्राहक अधिग्रहण की लागत कम हो जाती है।" },
        { "title": "प्राधिकरण और ट्रस्ट बिल्डिंग", "desc": "उच्च रैंकिंग खोज इंजन और उपयोगकर्ताओं दोनों के लिए विश्वसनीयता का संकेत देती है। हम एक सामयिक प्राधिकरण का निर्माण करते हैं जो आपके ब्रांड को जाने-माने स्रोत बनाता है।" },
        { "title": "मापने योग्य आरओआई", "desc": "हम जो भी कार्रवाई करते हैं, उसे ट्रैक किया जाता है। आप ठीक-ठीक देखते हैं कि कौन से कीवर्ड रैंकिंग कर रहे हैं, ट्रैफ़िक कैसे परिवर्तित हो रहा है, और राजस्व पर क्या प्रभाव पड़ता है।" }
      ],
      "process": [
        { "step": "01", "title": "एसईओ ऑडिट और बेसलाइन", "desc": "एक पूर्ण तकनीकी और सामग्री ऑडिट जो यह पहचानने के लिए कि आपकी साइट को क्या रोक रहा है - क्रॉल मुद्दे, इंडेक्सेशन की समस्याएं और छूटे हुए अवसर।" },
        { "step": "02", "title": "कीवर्ड और प्रतियोगी अनुसंधान", "desc": "हम कीवर्ड परिदृश्य का नक्शा बनाते हैं, उच्च-मूल्य के लक्ष्यों की पहचान करते हैं, और विश्लेषण करते हैं कि आपके शीर्ष प्रतियोगी उन्हें पछाड़ने के लिए क्या कर रहे हैं।" },
        { "step": "03", "title": "तकनीकी सुधार और ऑन-पेज", "desc": "हम तकनीकी नींव को ठीक करते हैं - साइट की गति, कोर वेब विटल्स, संरचित डेटा, आंतरिक लिंकिंग - और हर मुख्य पृष्ठ को अनुकूलित करते हैं।" },
        { "step": "04", "title": "सामग्री और लिंक रणनीति", "desc": "समय के साथ डोमेन प्राधिकरण बनाने के लिए एक लिंक निर्माण रणनीति के साथ आपके प्राथमिकता वाले कीवर्ड को लक्षित करने वाला सामग्री कैलेंडर।" },
        { "step": "05", "title": "मासिक रिपोर्टिंग और पुनरावृत्ति", "desc": "रैंकिंग गति, ट्रैफ़िक वृद्धि और रूपांतरण प्रभाव दिखाने वाली स्पष्ट मासिक रिपोर्ट - वास्तविक डेटा के आधार पर रणनीति समायोजन के साथ।" }
      ],
      "cta": "वहां रैंकिंग शुरू करें जहां आपके ग्राहक खोज रहे हैं।"
    }
  }
}

langs = ['en', 'ur', 'ar', 'es', 'fr', 'zh', 'hi']
file_path = 'lib/services-translations.ts'

with codecs.open(file_path, 'r', 'utf-8') as f:
    content = f.read()

for lang in langs:
    # Find the dictionary for each language
    pattern = r'(' + lang + r':\s*\{)'
    match = re.search(pattern, content)
    if not match:
        continue
    
    # We want to insert just after the matched {
    insert_idx = match.end()
    
    insert_strs = []
    for srv_id, srv_data in new_services.items():
        if lang not in srv_data:
            continue
        lang_data = srv_data[lang]
        
        insert_strs.append(f'    "{srv_id}": {{')
        insert_strs.append(f'      title: "{lang_data["title"]}",')
        insert_strs.append(f'      tagline: "{lang_data["tagline"].replace('"', '\\"')}",')
        insert_strs.append(f'      description: "{lang_data["description"].replace('"', '\\"')}",')
        
        # features
        feats = []
        for feat in lang_data["features"]:
            feats.append(f'"{feat.replace('"', '\\"')}"')
        insert_strs.append(f'      features: [{", ".join(feats)}],')
        
        # benefits
        bens = []
        for ben in lang_data["benefits"]:
            bens.append(f'{{ title: "{ben["title"].replace('"', '\\"')}", desc: "{ben["desc"].replace('"', '\\"')}" }}')
        insert_strs.append(f'      benefits: [\n        {",\n        ".join(bens)}\n      ],')
        
        # process
        procs = []
        for proc in lang_data["process"]:
            procs.append(f'{{ step: "{proc["step"]}", title: "{proc["title"].replace('"', '\\"')}", desc: "{proc["desc"].replace('"', '\\"')}" }}')
        insert_strs.append(f'      process: [\n        {",\n        ".join(procs)}\n      ],')
        
        # cta
        insert_strs.append(f'      cta: "{lang_data["cta"].replace('"', '\\"')}"')
        insert_strs.append(f'    }},')
    
    insert_str = "\n" + "\n".join(insert_strs)
    content = content[:insert_idx] + insert_str + content[insert_idx:]

with codecs.open(file_path, 'w', 'utf-8') as f:
    f.write(content)
