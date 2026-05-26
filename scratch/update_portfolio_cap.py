import json
import codecs
import re

en = {
    "portfolio.cap.badge": "PORTFOLIO & CAPABILITIES",
    "portfolio.cap.title.p1": "Key",
    "portfolio.cap.title.p2": "Specialty",
    "portfolio.cap.title.p3": "Domains",
    "portfolio.cap.desc": "Six core disciplines — each a deep well of expertise — working together to deliver complete digital solutions for ambitious brands.",
    "portfolio.cap.btn.start": "Start a Project",
    "portfolio.cap.btn.view": "View All Services",
    "portfolio.cap.domain.1.cat": "Web & Mobile",
    "portfolio.cap.domain.1.title": "Full-Stack Web & Mobile Engineering",
    "portfolio.cap.domain.1.desc": "From blazing-fast Next.js frontends to robust Node/Python backends — we architect end-to-end digital products that scale.",
    "portfolio.cap.domain.2.cat": "AI & Automation",
    "portfolio.cap.domain.2.title": "AI Agents & Intelligent Automation",
    "portfolio.cap.domain.2.desc": "Custom LLM-powered agents, workflow automation, and machine-learning pipelines that turn data into competitive advantage.",
    "portfolio.cap.domain.3.cat": "Design & Brand",
    "portfolio.cap.domain.3.title": "UI/UX Design & Brand Identity",
    "portfolio.cap.domain.3.desc": "Pixel-perfect interfaces and strategic brand identities that communicate your vision and create lasting impressions.",
    "portfolio.cap.domain.4.cat": "Creative Media",
    "portfolio.cap.domain.4.title": "Video Production & Creative Content",
    "portfolio.cap.domain.4.desc": "Cinematic brand films, social reels, motion graphics, and 3D animation that captivate audiences across every platform.",
    "portfolio.cap.domain.5.cat": "Cloud & DevOps",
    "portfolio.cap.domain.5.title": "Cloud Architecture & IT Consulting",
    "portfolio.cap.domain.5.desc": "Scalable cloud infrastructure, DevOps pipelines, and strategic IT consulting to align technology with your business goals.",
    "portfolio.cap.domain.6.cat": "E-Commerce",
    "portfolio.cap.domain.6.title": "E-Commerce & SaaS Platforms",
    "portfolio.cap.domain.6.desc": "High-converting storefronts and enterprise SaaS platforms engineered for performance, reliability, and rapid growth."
}

ur = {
    "portfolio.cap.badge": "پورٹ فولیو اور صلاحیتیں",
    "portfolio.cap.title.p1": "اہم",
    "portfolio.cap.title.p2": "مہارت",
    "portfolio.cap.title.p3": "کے شعبے",
    "portfolio.cap.desc": "چھ بنیادی مضامین — ہر ایک مہارت کا ایک گہرا کنواں — پرجوش برانڈز کے لیے مکمل ڈیجیٹل حل فراہم کرنے کے لیے مل کر کام کر رہے ہیں۔",
    "portfolio.cap.btn.start": "پروجیکٹ شروع کریں",
    "portfolio.cap.btn.view": "تمام خدمات دیکھیں",
    "portfolio.cap.domain.1.cat": "ویب اور موبائل",
    "portfolio.cap.domain.1.title": "فل اسٹیک ویب اور موبائل انجینئرنگ",
    "portfolio.cap.domain.1.desc": "انتہائی تیز Next.js فرنٹ اینڈز سے لے کر مضبوط Node/Python بیک اینڈز تک — ہم اینڈ ٹو اینڈ ڈیجیٹل پروڈکٹس تیار کرتے ہیں جو اسکیل ہوتے ہیں۔",
    "portfolio.cap.domain.2.cat": "AI اور آٹومیشن",
    "portfolio.cap.domain.2.title": "AI ایجنٹس اور ذہین آٹومیشن",
    "portfolio.cap.domain.2.desc": "حسب ضرورت LLM سے چلنے والے ایجنٹ، ورک فلو آٹومیشن، اور مشین لرننگ پائپ لائنز جو ڈیٹا کو مسابقتی فائدے میں بدلتی ہیں۔",
    "portfolio.cap.domain.3.cat": "ڈیزائن اور برانڈ",
    "portfolio.cap.domain.3.title": "UI/UX ڈیزائن اور برانڈ کی شناخت",
    "portfolio.cap.domain.3.desc": "پکسل پرفیکٹ انٹرفیس اور اسٹریٹجک برانڈ شناختیں جو آپ کے وژن کو بیان کرتی ہیں اور دیرپا تاثرات پیدا کرتی ہیں۔",
    "portfolio.cap.domain.4.cat": "تخلیقی میڈیا",
    "portfolio.cap.domain.4.title": "ویڈیو پروڈکشن اور تخلیقی مواد",
    "portfolio.cap.domain.4.desc": "سنیمیٹک برانڈ فلمیں، سوشل ریلز، موشن گرافکس، اور 3D اینی میشن جو ہر پلیٹ فارم پر سامعین کو مسحور کرتی ہیں۔",
    "portfolio.cap.domain.5.cat": "کلاؤڈ اور ڈیواوپس",
    "portfolio.cap.domain.5.title": "کلاؤڈ آرکیٹیکچر اور آئی ٹی کنسلٹنگ",
    "portfolio.cap.domain.5.desc": "قابل توسیع کلاؤڈ انفراسٹرکچر، DevOps پائپ لائنز، اور آپ کے کاروباری اہداف کے ساتھ ٹیکنالوجی کو ہم آہنگ کرنے کے لیے اسٹریٹجک IT مشاورت۔",
    "portfolio.cap.domain.6.cat": "ای کامرس",
    "portfolio.cap.domain.6.title": "ای کامرس اور ساس پلیٹ فارمز",
    "portfolio.cap.domain.6.desc": "اعلیٰ تبدیلی والے اسٹور فرنٹ اور انٹرپرائز SaaS پلیٹ فارمز جو کارکردگی، وشوسنییتا، اور تیزی سے ترقی کے لیے انجنیئر کیے گئے ہیں۔"
}

ar = {
    "portfolio.cap.badge": "المحفظة والقدرات",
    "portfolio.cap.title.p1": "مجالات",
    "portfolio.cap.title.p2": "التخصص",
    "portfolio.cap.title.p3": "الرئيسية",
    "portfolio.cap.desc": "ستة تخصصات أساسية — كل منها بئر عميق من الخبرة — تعمل معاً لتقديم حلول رقمية كاملة للعلامات التجارية الطموحة.",
    "portfolio.cap.btn.start": "ابدأ مشروعاً",
    "portfolio.cap.btn.view": "عرض جميع الخدمات",
    "portfolio.cap.domain.1.cat": "الويب والجوال",
    "portfolio.cap.domain.1.title": "هندسة الويب والجوال المتكاملة",
    "portfolio.cap.domain.1.desc": "من واجهات Next.js فائقة السرعة إلى خلفيات Node/Python القوية — نحن نصمم منتجات رقمية شاملة قابلة للتطوير.",
    "portfolio.cap.domain.2.cat": "الذكاء الاصطناعي والأتمتة",
    "portfolio.cap.domain.2.title": "وكلاء الذكاء الاصطناعي والأتمتة الذكية",
    "portfolio.cap.domain.2.desc": "وكلاء مخصصون مدعومون بنماذج اللغات الكبيرة، أتمتة سير العمل، ومسارات التعلم الآلي التي تحول البيانات إلى ميزة تنافسية.",
    "portfolio.cap.domain.3.cat": "التصميم والعلامة التجارية",
    "portfolio.cap.domain.3.title": "تصميم UI/UX وهوية العلامة التجارية",
    "portfolio.cap.domain.3.desc": "واجهات مثالية البكسل وهويات استراتيجية للعلامة التجارية تنقل رؤيتك وتترك انطباعات دائمة.",
    "portfolio.cap.domain.4.cat": "الإعلام الإبداعي",
    "portfolio.cap.domain.4.title": "إنتاج الفيديو والمحتوى الإبداعي",
    "portfolio.cap.domain.4.desc": "أفلام سينمائية للعلامات التجارية، مقاطع فيديو اجتماعية، رسوم متحركة، ورسوم ثلاثية الأبعاد تأسر الجماهير عبر كل منصة.",
    "portfolio.cap.domain.5.cat": "السحابة و DevOps",
    "portfolio.cap.domain.5.title": "البنية السحابية واستشارات تكنولوجيا المعلومات",
    "portfolio.cap.domain.5.desc": "بنية تحتية سحابية قابلة للتطوير، مسارات DevOps، واستشارات تكنولوجيا المعلومات الاستراتيجية لمواءمة التكنولوجيا مع أهداف عملك.",
    "portfolio.cap.domain.6.cat": "التجارة الإلكترونية",
    "portfolio.cap.domain.6.title": "منصات التجارة الإلكترونية و SaaS",
    "portfolio.cap.domain.6.desc": "واجهات متاجر عالية التحويل ومنصات SaaS مؤسسية مصممة للأداء والموثوقية والنمو السريع."
}

es = {
    "portfolio.cap.badge": "PORTAFOLIO Y CAPACIDADES",
    "portfolio.cap.title.p1": "Dominios",
    "portfolio.cap.title.p2": "Especiales",
    "portfolio.cap.title.p3": "Clave",
    "portfolio.cap.desc": "Seis disciplinas básicas — cada una de ellas un profundo pozo de experiencia — que trabajan juntas para ofrecer soluciones digitales completas para marcas ambiciosas.",
    "portfolio.cap.btn.start": "Iniciar un Proyecto",
    "portfolio.cap.btn.view": "Ver Todos los Servicios",
    "portfolio.cap.domain.1.cat": "Web y Móvil",
    "portfolio.cap.domain.1.title": "Ingeniería Web y Móvil Full-Stack",
    "portfolio.cap.domain.1.desc": "Desde interfaces de Next.js ultrarrápidas hasta robustos backends de Node/Python — diseñamos productos digitales de extremo a extremo que escalan.",
    "portfolio.cap.domain.2.cat": "IA y Automatización",
    "portfolio.cap.domain.2.title": "Agentes de IA y Automatización Inteligente",
    "portfolio.cap.domain.2.desc": "Agentes personalizados con tecnología LLM, automatización del flujo de trabajo y canalizaciones de aprendizaje automático que convierten los datos en una ventaja competitiva.",
    "portfolio.cap.domain.3.cat": "Diseño y Marca",
    "portfolio.cap.domain.3.title": "Diseño UI/UX e Identidad de Marca",
    "portfolio.cap.domain.3.desc": "Interfaces con píxeles perfectos e identidades de marca estratégicas que comunican su visión y crean impresiones duraderas.",
    "portfolio.cap.domain.4.cat": "Medios Creativos",
    "portfolio.cap.domain.4.title": "Producción de Video y Contenido Creativo",
    "portfolio.cap.domain.4.desc": "Películas cinematográficas de marca, reels sociales, gráficos en movimiento y animación 3D que cautivan al público en todas las plataformas.",
    "portfolio.cap.domain.5.cat": "Nube y DevOps",
    "portfolio.cap.domain.5.title": "Arquitectura en la Nube y Consultoría de TI",
    "portfolio.cap.domain.5.desc": "Infraestructura en la nube escalable, canalizaciones de DevOps y consultoría estratégica de TI para alinear la tecnología con sus objetivos comerciales.",
    "portfolio.cap.domain.6.cat": "Comercio Electrónico",
    "portfolio.cap.domain.6.title": "Plataformas de Comercio Electrónico y SaaS",
    "portfolio.cap.domain.6.desc": "Escaparates de alta conversión y plataformas SaaS empresariales diseñadas para el rendimiento, la confiabilidad y el crecimiento rápido."
}

fr = {
    "portfolio.cap.badge": "PORTFOLIO ET CAPACITÉS",
    "portfolio.cap.title.p1": "Domaines",
    "portfolio.cap.title.p2": "de Spécialité",
    "portfolio.cap.title.p3": "Clés",
    "portfolio.cap.desc": "Six disciplines fondamentales — chacune étant un puits profond d'expertise — travaillant ensemble pour fournir des solutions numériques complètes pour des marques ambitieuses.",
    "portfolio.cap.btn.start": "Démarrer un Projet",
    "portfolio.cap.btn.view": "Voir Tous les Services",
    "portfolio.cap.domain.1.cat": "Web et Mobile",
    "portfolio.cap.domain.1.title": "Ingénierie Web et Mobile Full-Stack",
    "portfolio.cap.domain.1.desc": "Des frontends Next.js ultra-rapides aux backends Node/Python robustes — nous concevons des produits numériques de bout en bout qui évoluent.",
    "portfolio.cap.domain.2.cat": "IA et Automatisation",
    "portfolio.cap.domain.2.title": "Agents IA et Automatisation Intelligente",
    "portfolio.cap.domain.2.desc": "Des agents personnalisés alimentés par LLM, l'automatisation des flux de travail et des pipelines d'apprentissage automatique qui transforment les données en un avantage concurrentiel.",
    "portfolio.cap.domain.3.cat": "Design et Marque",
    "portfolio.cap.domain.3.title": "Design UI/UX et Identité de Marque",
    "portfolio.cap.domain.3.desc": "Des interfaces au pixel près et des identités de marque stratégiques qui communiquent votre vision et créent des impressions durables.",
    "portfolio.cap.domain.4.cat": "Média Créatif",
    "portfolio.cap.domain.4.title": "Production Vidéo et Contenu Créatif",
    "portfolio.cap.domain.4.desc": "Films de marque cinématographiques, bobines sociales, graphiques animés et animation 3D qui captivent le public sur toutes les plateformes.",
    "portfolio.cap.domain.5.cat": "Cloud et DevOps",
    "portfolio.cap.domain.5.title": "Architecture Cloud et Conseil Informatique",
    "portfolio.cap.domain.5.desc": "Infrastructure cloud évolutive, pipelines DevOps et conseils informatiques stratégiques pour aligner la technologie sur vos objectifs commerciaux.",
    "portfolio.cap.domain.6.cat": "E-Commerce",
    "portfolio.cap.domain.6.title": "Plateformes E-Commerce et SaaS",
    "portfolio.cap.domain.6.desc": "Des vitrines à fort taux de conversion et des plateformes SaaS d'entreprise conçues pour la performance, la fiabilité et une croissance rapide."
}

zh = {
    "portfolio.cap.badge": "作品集与能力",
    "portfolio.cap.title.p1": "关键",
    "portfolio.cap.title.p2": "专业",
    "portfolio.cap.title.p3": "领域",
    "portfolio.cap.desc": "六个核心学科——每个都是深厚的专业知识库——协同工作，为雄心勃勃的品牌提供完整的数字解决方案。",
    "portfolio.cap.btn.start": "启动项目",
    "portfolio.cap.btn.view": "查看所有服务",
    "portfolio.cap.domain.1.cat": "Web与移动端",
    "portfolio.cap.domain.1.title": "全栈Web与移动工程",
    "portfolio.cap.domain.1.desc": "从闪电般快速的Next.js前端到强大的Node/Python后端——我们构建可扩展的端到端数字产品。",
    "portfolio.cap.domain.2.cat": "AI与自动化",
    "portfolio.cap.domain.2.title": "AI代理与智能自动化",
    "portfolio.cap.domain.2.desc": "自定义LLM驱动的代理、工作流自动化和机器学习管道，将数据转化为竞争优势。",
    "portfolio.cap.domain.3.cat": "设计与品牌",
    "portfolio.cap.domain.3.title": "UI/UX设计与品牌标识",
    "portfolio.cap.domain.3.desc": "像素级完美的界面和战略品牌标识，传达您的愿景并创造持久的印象。",
    "portfolio.cap.domain.4.cat": "创意媒体",
    "portfolio.cap.domain.4.title": "视频制作与创意内容",
    "portfolio.cap.domain.4.desc": "具有电影质感的品牌宣传片、社交短片、动态图形和3D动画，吸引每个平台上的观众。",
    "portfolio.cap.domain.5.cat": "云计算与DevOps",
    "portfolio.cap.domain.5.title": "云架构与IT咨询",
    "portfolio.cap.domain.5.desc": "可扩展的云基础设施、DevOps管道和战略IT咨询，使技术与您的业务目标保持一致。",
    "portfolio.cap.domain.6.cat": "电子商务",
    "portfolio.cap.domain.6.title": "电子商务与SaaS平台",
    "portfolio.cap.domain.6.desc": "高转化率的店面和企业级SaaS平台，专为性能、可靠性和快速增长而设计。"
}

hi = {
    "portfolio.cap.badge": "पोर्टफोलियो और क्षमताएं",
    "portfolio.cap.title.p1": "प्रमुख",
    "portfolio.cap.title.p2": "विशिष्ट",
    "portfolio.cap.title.p3": "डोमेन",
    "portfolio.cap.desc": "छह प्रमुख विषय — प्रत्येक विशेषज्ञता का एक गहरा कुआं — महत्वाकांक्षी ब्रांडों के लिए संपूर्ण डिजिटल समाधान प्रदान करने के लिए एक साथ काम कर रहे हैं।",
    "portfolio.cap.btn.start": "एक परियोजना शुरू करें",
    "portfolio.cap.btn.view": "सभी सेवाएं देखें",
    "portfolio.cap.domain.1.cat": "वेब और मोबाइल",
    "portfolio.cap.domain.1.title": "फुल-स्टैक वेब और मोबाइल इंजीनियरिंग",
    "portfolio.cap.domain.1.desc": "तेजतर्रार Next.js फ्रंटएंड से लेकर मजबूत Node/Python बैकएंड तक — हम एंड-टू-एंड डिजिटल उत्पादों का निर्माण करते हैं जो स्केल करते हैं।",
    "portfolio.cap.domain.2.cat": "एआई और स्वचालन",
    "portfolio.cap.domain.2.title": "एआई एजेंट और बुद्धिमान स्वचालन",
    "portfolio.cap.domain.2.desc": "कस्टम एलएलएम-संचालित एजेंट, वर्कफ़्लो स्वचालन, और मशीन-लर्निंग पाइपलाइन जो डेटा को प्रतिस्पर्धी लाभ में बदलते हैं।",
    "portfolio.cap.domain.3.cat": "डिजाइन और ब्रांड",
    "portfolio.cap.domain.3.title": "UI/UX डिज़ाइन और ब्रांड पहचान",
    "portfolio.cap.domain.3.desc": "पिक्सेल-परफेक्ट इंटरफेस और रणनीतिक ब्रांड पहचान जो आपकी दृष्टि को संप्रेषित करती हैं और स्थायी प्रभाव पैदा करती हैं।",
    "portfolio.cap.domain.4.cat": "रचनात्मक मीडिया",
    "portfolio.cap.domain.4.title": "वीडियो उत्पादन और रचनात्मक सामग्री",
    "portfolio.cap.domain.4.desc": "सिनेमाई ब्रांड फिल्में, सामाजिक रीलों, मोशन ग्राफिक्स और 3D एनीमेशन जो हर मंच पर दर्शकों को मोहित करते हैं।",
    "portfolio.cap.domain.5.cat": "क्लाउड और डेवऑप्स",
    "portfolio.cap.domain.5.title": "क्लाउड आर्किटेक्चर और आईटी परामर्श",
    "portfolio.cap.domain.5.desc": "प्रौद्योगिकी को आपके व्यावसायिक लक्ष्यों के साथ संरेखित करने के लिए स्केलेबल क्लाउड इन्फ्रास्ट्रक्चर, DevOps पाइपलाइन और रणनीतिक IT परामर्श।",
    "portfolio.cap.domain.6.cat": "ई-कॉमर्स",
    "portfolio.cap.domain.6.title": "ई-कॉमर्स और सास प्लेटफॉर्म",
    "portfolio.cap.domain.6.desc": "उच्च-परिवर्तित स्टोरफ्रंट और एंटरप्राइज़ SaaS प्लेटफ़ॉर्म प्रदर्शन, विश्वसनीयता और तीव्र विकास के लिए इंजीनियर किए गए हैं।"
}


langs = {'en': en, 'ur': ur, 'ar': ar, 'es': es, 'fr': fr, 'zh': zh, 'hi': hi}

with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    content = f.read()

for lang_code, translations_dict in langs.items():
    pattern = r'(' + lang_code + r':\s*\{)'
    match = re.search(pattern, content)
    if match:
        insert_idx = match.end()
        new_strs = []
        for k, v in translations_dict.items():
            safe_v = v.replace('"', '\\"')
            new_strs.append(f'    "{k}": "{safe_v}",')
        
        insert_str = "\\n" + "\\n".join(new_strs)
        content = content[:insert_idx] + insert_str + content[insert_idx:]

with codecs.open('lib/translations.ts', 'w', 'utf-8') as f:
    f.write(content)

with open('components/PortfolioCapabilities.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace(
    'import { motion } from "framer-motion";',
    'import { motion } from "framer-motion";\\nimport { useTranslation } from "@/context/LanguageContext";'
)
page = page.replace(
    'export function PortfolioCapabilities() {',
    'export function PortfolioCapabilities() {\\n  const { t } = useTranslation();'
)

# For DomainCard, we also need useTranslation hook
page = page.replace(
    'function DomainCard({\\n  domain,\\n  index,\\n}: {\\n  domain: (typeof domains)[0];\\n  index: number;\\n}) {',
    'function DomainCard({\\n  domain,\\n  index,\\n}: {\\n  domain: (typeof domains)[0];\\n  index: number;\\n}) {\\n  const { t } = useTranslation();'
)

# Replace domain usages inside DomainCard with translated values
page = page.replace('{domain.category}', '{t(`portfolio.cap.domain.${domain.id}.cat`)}')
page = page.replace('{domain.title}', '{t(`portfolio.cap.domain.${domain.id}.title`)}')
page = page.replace('{domain.description}', '{t(`portfolio.cap.domain.${domain.id}.desc`)}')

# Main section
page = page.replace('PORTFOLIO &amp; CAPABILITIES', '{t("portfolio.cap.badge")}')
page = page.replace('Key{" "}', '{t("portfolio.cap.title.p1")}{" "}')
page = page.replace('Specialty', '{t("portfolio.cap.title.p2")}')
page = page.replace('{" "}Domains', '{" "}{t("portfolio.cap.title.p3")}')
page = page.replace('Six core disciplines — each a deep well of expertise — working together to\\n            deliver complete digital solutions for ambitious brands.', '{t("portfolio.cap.desc")}')
page = page.replace('Start a Project', '{t("portfolio.cap.btn.start")}')
page = page.replace('View All Services', '{t("portfolio.cap.btn.view")}')


with open('components/PortfolioCapabilities.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
