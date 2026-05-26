import json
import codecs
import re

en = {
    "ind.hero.title.p1": "Architecting Digital Ecosystems for",
    "ind.hero.title.p2": "Global",
    "ind.hero.title.p3": "Industries",
    "ind.hero.desc": "We engineer custom software, scalable cloud networks, and highly polished user experiences built to solve the specific friction points of your industry.",
    "ind.hero.btn": "Explore Industries",
    "ind.sec.badge": "OUR INDUSTRIES",
    "ind.sec.title.p1": "Customized Engineering for",
    "ind.sec.title.p2": "Every Arena",
    "ind.sec.desc": "We don't believe in one-size-fits-all. We immerse ourselves in your sector's specific workflow, regulatory compliance, and operational nuances to build high-performance digital products.",
    "ind.sec.scroll": "Scroll to explore sectors",
    "ind.fin.title": "Fintech & Finance",
    "ind.fin.desc": "Architecting high-security, high-velocity financial systems and payment gateways.",
    "ind.fin.metric": "99.9% Uptime",
    "ind.fin.badge": "Fintech",
    "ind.fin.cap.1": "PCI-DSS compliant gateways",
    "ind.fin.cap.2": "Real-time transaction ledgers",
    "ind.fin.cap.3": "Automated billing & invoicing",
    "ind.health.title": "Healthcare & Healthtech",
    "ind.health.desc": "HIPAA-compliant telemedicine platforms and digital healthcare ecosystems.",
    "ind.health.metric": "HIPAA Secure",
    "ind.health.badge": "HealthTech",
    "ind.health.cap.1": "Secure telehealth rooms",
    "ind.health.cap.2": "Electronic health records",
    "ind.health.cap.3": "Patient & doctor portals",
    "ind.retail.title": "Retail & E-commerce",
    "ind.retail.desc": "Headless e-commerce storefronts designed to scale for high-traffic sales.",
    "ind.retail.metric": "+45% Conversions",
    "ind.retail.badge": "E-Commerce",
    "ind.retail.cap.1": "Headless PWA storefronts",
    "ind.retail.cap.2": "Multi-vendor architecture",
    "ind.retail.cap.3": "Omnichannel stock sync",
    "ind.real.title": "Real Estate & Proptech",
    "ind.real.desc": "Smart property portals, listing directories, and visual VR showcase systems.",
    "ind.real.metric": "10x Fast Search",
    "ind.real.badge": "PropTech",
    "ind.real.cap.1": "Map listing directories",
    "ind.real.cap.2": "Tenant & landlord portals",
    "ind.real.cap.3": "3D Virtual property tours",
    "ind.ed.title": "Edtech & Education",
    "ind.ed.desc": "Interactive learning management systems (LMS) and live class platforms.",
    "ind.ed.metric": "1M+ Learners",
    "ind.ed.badge": "EdTech",
    "ind.ed.cap.1": "Custom e-learning paths",
    "ind.ed.cap.2": "Live virtual classrooms",
    "ind.ed.cap.3": "Interactive quiz engines",
    "ind.log.title": "Logistics & Supply Chain",
    "ind.log.desc": "Fleet tracking, real-time routing engines, and automated inventory sync.",
    "ind.log.metric": "-30% Delays",
    "ind.log.badge": "Logistics",
    "ind.log.cap.1": "GPS fleet tracking APIs",
    "ind.log.cap.2": "Route optimization engines",
    "ind.log.cap.3": "Inventory sync alerts",
    "ind.adv.badge": "THE SOFTCR8ORS ADVANTAGE",
    "ind.adv.title.p1": "Why Leaders",
    "ind.adv.title.p2": "Trust Us",
    "ind.adv.title.p3": "With Their Core Systems",
    "ind.adv.desc": "We bring top-tier tech architecture together with premium visual interfaces, ensuring your custom system is stable, secure, and intuitive for users.",
    "ind.adv.1.title": "Direct Architect Communication",
    "ind.adv.1.desc": "Speak directly with engineers and product designers, not account managers.",
    "ind.adv.2.title": "Robust Security Compliance",
    "ind.adv.2.desc": "All systems built with HIPAA, GDPR, PCI-DSS, or custom security benchmarks.",
    "ind.adv.3.title": "Ultra-High Velocity Execution",
    "ind.adv.3.desc": "Leveraging custom modular frameworks to deploy high-fidelity systems in weeks.",
    "ind.cta.title.p1": "Ready to",
    "ind.cta.title.p2": "transform",
    "ind.cta.title.p3": "your industry?",
    "ind.cta.desc": "Start building your customized system with Softcr8ors. Let our elite engineering team bring your vision to life.",
    "ind.cta.btn": "Start a Project"
}

ur = {
    "ind.hero.title.p1": "عالمی صنعتوں کے لیے ڈیجیٹل ایکو سسٹم",
    "ind.hero.title.p2": "کی",
    "ind.hero.title.p3": "تعمیر",
    "ind.hero.desc": "ہم آپ کی صنعت کے مخصوص مسائل کو حل کرنے کے لیے حسب ضرورت سافٹ ویئر، اسکیل ایبل کلاؤڈ نیٹ ورکس، اور انتہائی پالش شدہ صارف کے تجربات کو انجنیئر کرتے ہیں۔",
    "ind.hero.btn": "صنعتیں دریافت کریں",
    "ind.sec.badge": "ہماری صنعتیں",
    "ind.sec.title.p1": "ہر میدان کے لیے",
    "ind.sec.title.p2": "حسب ضرورت انجینئرنگ",
    "ind.sec.desc": "ہم ون سائز فٹ آل پر یقین نہیں رکھتے۔ ہم آپ کے شعبے کے مخصوص ورک فلو، ریگولیٹری تعمیل، اور اعلی کارکردگی والے ڈیجیٹل پروڈکٹس بنانے کے لیے آپریشنل باریکیوں میں خود کو غرق کر دیتے ہیں۔",
    "ind.sec.scroll": "سیکٹر دریافت کرنے کے لیے اسکرول کریں",
    "ind.fin.title": "فنٹیک اور فنانس",
    "ind.fin.desc": "انتہائی محفوظ، تیز رفتار مالیاتی نظام اور ادائیگی کے گیٹ ویز کی تعمیر۔",
    "ind.fin.metric": "99.9% اپ ٹائم",
    "ind.fin.badge": "فنٹیک",
    "ind.fin.cap.1": "PCI-DSS کے مطابق گیٹ وے",
    "ind.fin.cap.2": "ریئل ٹائم ٹرانزیکشن لیجرز",
    "ind.fin.cap.3": "خودکار بلنگ اور رسید",
    "ind.health.title": "ہیلتھ کیئر اور ہیلتھ ٹیک",
    "ind.health.desc": "HIPAA کے مطابق ٹیلی میڈیسن پلیٹ فارمز اور ڈیجیٹل ہیلتھ کیئر ایکو سسٹم۔",
    "ind.health.metric": "HIPAA محفوظ",
    "ind.health.badge": "ہیلتھ ٹیک",
    "ind.health.cap.1": "محفوظ ٹیلی ہیلتھ کمرے",
    "ind.health.cap.2": "الیکٹرانک صحت کے ریکارڈ",
    "ind.health.cap.3": "مریض اور ڈاکٹر کے پورٹل",
    "ind.retail.title": "ریٹیل اور ای کامرس",
    "ind.retail.desc": "ہائی ٹریفک سیلز کے لیے اسکیل کرنے کے لیے ڈیزائن کیے گئے ہیڈ لیس ای کامرس اسٹور فرنٹ۔",
    "ind.retail.metric": "+45% تبادلوں",
    "ind.retail.badge": "ای کامرس",
    "ind.retail.cap.1": "ہیڈ لیس PWA اسٹور فرنٹس",
    "ind.retail.cap.2": "ملٹی وینڈر فن تعمیر",
    "ind.retail.cap.3": "اومنی چینل اسٹاک کی ہم آہنگی",
    "ind.real.title": "رئیل اسٹیٹ اور پراپٹیک",
    "ind.real.desc": "اسمارٹ پراپرٹی پورٹلز، لسٹنگ ڈائریکٹریز، اور بصری VR شوکیس سسٹمز۔",
    "ind.real.metric": "10 گنا تیز تلاش",
    "ind.real.badge": "پراپٹیک",
    "ind.real.cap.1": "نقشہ کی فہرست کی ڈائریکٹریز",
    "ind.real.cap.2": "کرایہ دار اور مالک مکان کے پورٹل",
    "ind.real.cap.3": "3D ورچوئل پراپرٹی ٹورز",
    "ind.ed.title": "ایڈٹیک اور تعلیم",
    "ind.ed.desc": "انٹرایکٹو لرننگ مینجمنٹ سسٹمز (LMS) اور لائیو کلاس پلیٹ فارمز۔",
    "ind.ed.metric": "1M+ سیکھنے والے",
    "ind.ed.badge": "ایڈٹیک",
    "ind.ed.cap.1": "اپنی مرضی کے مطابق ای لرننگ کے راستے",
    "ind.ed.cap.2": "لائیو ورچوئل کلاس رومز",
    "ind.ed.cap.3": "انٹرایکٹو کوئز انجن",
    "ind.log.title": "لاجسٹکس اور سپلائی چین",
    "ind.log.desc": "فلیٹ ٹریکنگ، ریئل ٹائم روٹنگ انجن، اور خودکار انوینٹری سنک۔",
    "ind.log.metric": "-30% تاخیر",
    "ind.log.badge": "لاجسٹکس",
    "ind.log.cap.1": "GPS فلیٹ ٹریکنگ APIs",
    "ind.log.cap.2": "روٹ آپٹیمائزیشن انجن",
    "ind.log.cap.3": "انوینٹری مطابقت پذیری الرٹس",
    "ind.adv.badge": "Softcr8ors کا فائدہ",
    "ind.adv.title.p1": "لیڈرز ہم پر کیوں",
    "ind.adv.title.p2": "اعتماد کرتے ہیں",
    "ind.adv.title.p3": "اپنے کور سسٹمز کے ساتھ",
    "ind.adv.desc": "ہم ٹاپ ٹائر ٹیک فن تعمیر کو پریمیم بصری انٹرفیس کے ساتھ لاتے ہیں، اس بات کو یقینی بناتے ہوئے کہ آپ کا حسب ضرورت نظام صارفین کے لیے مستحکم، محفوظ اور بدیہی ہو۔",
    "ind.adv.1.title": "براہ راست آرکیٹیکٹ مواصلات",
    "ind.adv.1.desc": "اکاؤنٹ مینیجرز سے نہیں، انجینئرز اور پروڈکٹ ڈیزائنرز سے براہ راست بات کریں۔",
    "ind.adv.2.title": "مضبوط سیکورٹی تعمیل",
    "ind.adv.2.desc": "تمام سسٹمز HIPAA، GDPR، PCI-DSS، یا کسٹم سیکیورٹی بینچ مارکس کے ساتھ بنائے گئے ہیں۔",
    "ind.adv.3.title": "الٹرا ہائی ویلوسٹی ایگزیکیوشن",
    "ind.adv.3.desc": "ہفتوں میں ہائی فیڈیلیٹی سسٹمز کو تعینات کرنے کے لیے اپنی مرضی کے ماڈیولر فریم ورکس کا فائدہ اٹھانا۔",
    "ind.cta.title.p1": "کیا آپ اپنی صنعت کو",
    "ind.cta.title.p2": "تبدیل",
    "ind.cta.title.p3": "کرنے کے لیے تیار ہیں؟",
    "ind.cta.desc": "Softcr8ors کے ساتھ اپنا حسب ضرورت نظام بنانا شروع کریں۔ ہماری ایلیٹ انجینئرنگ ٹیم کو آپ کے وژن کو زندہ کرنے دیں۔",
    "ind.cta.btn": "پروجیکٹ شروع کریں"
}

ar = {
    "ind.hero.title.p1": "تصميم أنظمة رقمية بيئية لـ",
    "ind.hero.title.p2": "الصناعات",
    "ind.hero.title.p3": "العالمية",
    "ind.hero.desc": "نقوم بتصميم برامج مخصصة وشبكات سحابية قابلة للتطوير وتجارب مستخدم مصقولة للغاية لحل نقاط الاحتكاك المحددة في مجالك.",
    "ind.hero.btn": "استكشف الصناعات",
    "ind.sec.badge": "صناعاتنا",
    "ind.sec.title.p1": "هندسة مخصصة لـ",
    "ind.sec.title.p2": "كل مجال",
    "ind.sec.desc": "نحن لا نؤمن بنهج 'مقاس واحد يناسب الجميع'. نحن ننغمس في سير العمل الخاص بقطاعك، والامتثال التنظيمي، والفروق التشغيلية الدقيقة لبناء منتجات رقمية عالية الأداء.",
    "ind.sec.scroll": "مرر لاستكشاف القطاعات",
    "ind.fin.title": "التكنولوجيا المالية والتمويل",
    "ind.fin.desc": "هندسة أنظمة مالية عالية الأمان وعالية السرعة وبوابات دفع.",
    "ind.fin.metric": "99.9% وقت تشغيل",
    "ind.fin.badge": "التكنولوجيا المالية",
    "ind.fin.cap.1": "بوابات متوافقة مع PCI-DSS",
    "ind.fin.cap.2": "دفاتر معاملات في الوقت الفعلي",
    "ind.fin.cap.3": "فواتير وتحصيل آلي",
    "ind.health.title": "الرعاية الصحية والتكنولوجيا الصحية",
    "ind.health.desc": "منصات الطب عن بعد المتوافقة مع HIPAA والأنظمة البيئية للرعاية الصحية الرقمية.",
    "ind.health.metric": "آمن HIPAA",
    "ind.health.badge": "التكنولوجيا الصحية",
    "ind.health.cap.1": "غرف رعاية صحية عن بعد آمنة",
    "ind.health.cap.2": "سجلات صحية إلكترونية",
    "ind.health.cap.3": "بوابات للمرضى والأطباء",
    "ind.retail.title": "التجزئة والتجارة الإلكترونية",
    "ind.retail.desc": "واجهات متاجر تجارة إلكترونية بدون رأس مصممة للتوسع في المبيعات عالية الحركة.",
    "ind.retail.metric": "+45% تحويلات",
    "ind.retail.badge": "التجارة الإلكترونية",
    "ind.retail.cap.1": "واجهات متاجر PWA بدون رأس",
    "ind.retail.cap.2": "هندسة متعددة البائعين",
    "ind.retail.cap.3": "مزامنة المخزون عبر القنوات",
    "ind.real.title": "العقارات وتكنولوجيا العقارات",
    "ind.real.desc": "بوابات عقارية ذكية، وأدلة قوائم، وأنظمة عرض مرئية للواقع الافتراضي.",
    "ind.real.metric": "بحث أسرع بـ 10 مرات",
    "ind.real.badge": "تكنولوجيا العقارات",
    "ind.real.cap.1": "أدلة قوائم الخرائط",
    "ind.real.cap.2": "بوابات للمستأجرين والملاك",
    "ind.real.cap.3": "جولات عقارية افتراضية ثلاثية الأبعاد",
    "ind.ed.title": "تكنولوجيا التعليم والتعليم",
    "ind.ed.desc": "أنظمة إدارة التعلم التفاعلية (LMS) ومنصات الفصول الحية.",
    "ind.ed.metric": "1 مليون+ متعلم",
    "ind.ed.badge": "تكنولوجيا التعليم",
    "ind.ed.cap.1": "مسارات تعليم إلكتروني مخصصة",
    "ind.ed.cap.2": "فصول دراسية افتراضية حية",
    "ind.ed.cap.3": "محركات اختبار تفاعلية",
    "ind.log.title": "الخدمات اللوجستية وسلسلة التوريد",
    "ind.log.desc": "تتبع الأسطول، محركات التوجيه في الوقت الفعلي، ومزامنة المخزون الآلية.",
    "ind.log.metric": "-30% تأخير",
    "ind.log.badge": "اللوجستيات",
    "ind.log.cap.1": "واجهات برمجة تطبيقات تتبع الأسطول بـ GPS",
    "ind.log.cap.2": "محركات تحسين المسار",
    "ind.log.cap.3": "تنبيهات مزامنة المخزون",
    "ind.adv.badge": "ميزة Softcr8ors",
    "ind.adv.title.p1": "لماذا القادة",
    "ind.adv.title.p2": "يثقون بنا",
    "ind.adv.title.p3": "في أنظمتهم الأساسية",
    "ind.adv.desc": "نجمع بين هندسة التكنولوجيا المتطورة والواجهات المرئية المتميزة، مما يضمن أن نظامك المخصص مستقر وآمن وبديهي للمستخدمين.",
    "ind.adv.1.title": "تواصل مباشر مع المهندس",
    "ind.adv.1.desc": "تحدث مباشرة مع المهندسين ومصممي المنتجات، وليس مديري الحسابات.",
    "ind.adv.2.title": "امتثال أمني قوي",
    "ind.adv.2.desc": "جميع الأنظمة مبنية بمعايير HIPAA، GDPR، PCI-DSS، أو معايير أمان مخصصة.",
    "ind.adv.3.title": "تنفيذ فائق السرعة",
    "ind.adv.3.desc": "الاستفادة من الأطر المعيارية المخصصة لنشر أنظمة عالية الدقة في أسابيع.",
    "ind.cta.title.p1": "هل أنت مستعد لـ",
    "ind.cta.title.p2": "تحويل",
    "ind.cta.title.p3": "مجال عملك؟",
    "ind.cta.desc": "ابدأ في بناء نظامك المخصص مع Softcr8ors. دع فريقنا الهندسي النخبوي يحول رؤيتك إلى حقيقة.",
    "ind.cta.btn": "ابدأ مشروعاً"
}

es = {
    "ind.hero.title.p1": "Diseñando Ecosistemas Digitales para",
    "ind.hero.title.p2": "Industrias",
    "ind.hero.title.p3": "Globales",
    "ind.hero.desc": "Diseñamos software personalizado, redes en la nube escalables y experiencias de usuario muy pulidas creadas para resolver los puntos de fricción específicos de su industria.",
    "ind.hero.btn": "Explorar Industrias",
    "ind.sec.badge": "NUESTRAS INDUSTRIAS",
    "ind.sec.title.p1": "Ingeniería Personalizada para",
    "ind.sec.title.p2": "Cada Ámbito",
    "ind.sec.desc": "No creemos en un enfoque único para todos. Nos sumergimos en el flujo de trabajo específico de su sector, el cumplimiento normativo y los matices operativos para crear productos digitales de alto rendimiento.",
    "ind.sec.scroll": "Desplácese para explorar sectores",
    "ind.fin.title": "Fintech y Finanzas",
    "ind.fin.desc": "Arquitectura de sistemas financieros y pasarelas de pago de alta seguridad y alta velocidad.",
    "ind.fin.metric": "99.9% de Tiempo de Actividad",
    "ind.fin.badge": "Fintech",
    "ind.fin.cap.1": "Pasarelas compatibles con PCI-DSS",
    "ind.fin.cap.2": "Libros de transacciones en tiempo real",
    "ind.fin.cap.3": "Facturación y cobro automatizados",
    "ind.health.title": "Atención Médica y Healthtech",
    "ind.health.desc": "Plataformas de telemedicina compatibles con HIPAA y ecosistemas de atención médica digital.",
    "ind.health.metric": "Seguridad HIPAA",
    "ind.health.badge": "HealthTech",
    "ind.health.cap.1": "Salas de telesalud seguras",
    "ind.health.cap.2": "Registros de salud electrónicos",
    "ind.health.cap.3": "Portales para pacientes y médicos",
    "ind.retail.title": "Venta Minorista y E-commerce",
    "ind.retail.desc": "Escaparates de comercio electrónico sin cabeza diseñados para escalar a ventas de alto tráfico.",
    "ind.retail.metric": "+45% de Conversiones",
    "ind.retail.badge": "E-Commerce",
    "ind.retail.cap.1": "Escaparates PWA sin cabeza",
    "ind.retail.cap.2": "Arquitectura de múltiples proveedores",
    "ind.retail.cap.3": "Sincronización de stock omnicanal",
    "ind.real.title": "Bienes Raíces y Proptech",
    "ind.real.desc": "Portales inmobiliarios inteligentes, directorios de listados y sistemas de exhibición visual VR.",
    "ind.real.metric": "Búsqueda 10x Más Rápida",
    "ind.real.badge": "PropTech",
    "ind.real.cap.1": "Directorios de listados de mapas",
    "ind.real.cap.2": "Portales para inquilinos y propietarios",
    "ind.real.cap.3": "Recorridos virtuales en 3D de propiedades",
    "ind.ed.title": "Edtech y Educación",
    "ind.ed.desc": "Sistemas de gestión de aprendizaje interactivo (LMS) y plataformas de clases en vivo.",
    "ind.ed.metric": "Más de 1 Millón de Estudiantes",
    "ind.ed.badge": "EdTech",
    "ind.ed.cap.1": "Rutas de aprendizaje electrónico personalizadas",
    "ind.ed.cap.2": "Aulas virtuales en vivo",
    "ind.ed.cap.3": "Motores de cuestionarios interactivos",
    "ind.log.title": "Logística y Cadena de Suministro",
    "ind.log.desc": "Seguimiento de flotas, motores de enrutamiento en tiempo real y sincronización automatizada de inventario.",
    "ind.log.metric": "-30% de Retrasos",
    "ind.log.badge": "Logística",
    "ind.log.cap.1": "API de seguimiento de flotas por GPS",
    "ind.log.cap.2": "Motores de optimización de rutas",
    "ind.log.cap.3": "Alertas de sincronización de inventario",
    "ind.adv.badge": "LA VENTAJA DE SOFTCR8ORS",
    "ind.adv.title.p1": "Por qué los Líderes",
    "ind.adv.title.p2": "Confían en Nosotros",
    "ind.adv.title.p3": "Con Sus Sistemas Centrales",
    "ind.adv.desc": "Reunimos la arquitectura tecnológica de primer nivel con interfaces visuales premium, garantizando que su sistema personalizado sea estable, seguro e intuitivo para los usuarios.",
    "ind.adv.1.title": "Comunicación Directa con el Arquitecto",
    "ind.adv.1.desc": "Hable directamente con ingenieros y diseñadores de productos, no con administradores de cuentas.",
    "ind.adv.2.title": "Robusto Cumplimiento de Seguridad",
    "ind.adv.2.desc": "Todos los sistemas construidos con HIPAA, GDPR, PCI-DSS o puntos de referencia de seguridad personalizados.",
    "ind.adv.3.title": "Ejecución de Ultra Alta Velocidad",
    "ind.adv.3.desc": "Aprovechando marcos modulares personalizados para implementar sistemas de alta fidelidad en semanas.",
    "ind.cta.title.p1": "¿Listo para",
    "ind.cta.title.p2": "transformar",
    "ind.cta.title.p3": "su industria?",
    "ind.cta.desc": "Comience a construir su sistema personalizado con Softcr8ors. Deje que nuestro equipo de ingeniería de élite dé vida a su visión.",
    "ind.cta.btn": "Iniciar un Proyecto"
}

fr = {
    "ind.hero.title.p1": "Architecturer des Écosystèmes Numériques pour des",
    "ind.hero.title.p2": "Industries",
    "ind.hero.title.p3": "Mondiales",
    "ind.hero.desc": "Nous concevons des logiciels personnalisés, des réseaux cloud évolutifs et des expériences utilisateur hautement raffinées pour résoudre les points de friction spécifiques de votre secteur.",
    "ind.hero.btn": "Explorer les Industries",
    "ind.sec.badge": "NOS INDUSTRIES",
    "ind.sec.title.p1": "Ingénierie Personnalisée pour",
    "ind.sec.title.p2": "Chaque Domaine",
    "ind.sec.desc": "Nous ne croyons pas à l'approche 'taille unique'. Nous nous immergeons dans le flux de travail, la conformité réglementaire et les nuances opérationnelles de votre secteur pour créer des produits numériques hautement performants.",
    "ind.sec.scroll": "Faites défiler pour explorer",
    "ind.fin.title": "Fintech et Finance",
    "ind.fin.desc": "Architecture de systèmes financiers et de passerelles de paiement de haute sécurité et à grande vitesse.",
    "ind.fin.metric": "99,9% de Disponibilité",
    "ind.fin.badge": "Fintech",
    "ind.fin.cap.1": "Passerelles conformes PCI-DSS",
    "ind.fin.cap.2": "Grands livres de transactions en temps réel",
    "ind.fin.cap.3": "Facturation et facturation automatisées",
    "ind.health.title": "Santé et Healthtech",
    "ind.health.desc": "Plateformes de télémédecine conformes HIPAA et écosystèmes de soins de santé numériques.",
    "ind.health.metric": "Sécurité HIPAA",
    "ind.health.badge": "HealthTech",
    "ind.health.cap.1": "Salles de télésanté sécurisées",
    "ind.health.cap.2": "Dossiers de santé électroniques",
    "ind.health.cap.3": "Portails patients et médecins",
    "ind.retail.title": "Vente au Détail et E-commerce",
    "ind.retail.desc": "Vitrines de commerce électronique sans tête conçues pour évoluer avec un trafic de vente élevé.",
    "ind.retail.metric": "+45% de Conversions",
    "ind.retail.badge": "E-Commerce",
    "ind.retail.cap.1": "Vitrines PWA sans tête",
    "ind.retail.cap.2": "Architecture multi-fournisseurs",
    "ind.retail.cap.3": "Synchronisation des stocks omnicanale",
    "ind.real.title": "Immobilier et Proptech",
    "ind.real.desc": "Portails immobiliers intelligents, annuaires de listes et systèmes de présentation visuelle VR.",
    "ind.real.metric": "Recherche 10x Plus Rapide",
    "ind.real.badge": "PropTech",
    "ind.real.cap.1": "Annuaires de listes sur cartes",
    "ind.real.cap.2": "Portails pour locataires et propriétaires",
    "ind.real.cap.3": "Visites virtuelles de propriétés en 3D",
    "ind.ed.title": "Edtech et Éducation",
    "ind.ed.desc": "Systèmes de gestion de l'apprentissage interactifs (LMS) et plateformes de cours en direct.",
    "ind.ed.metric": "Plus d'1 Million d'Apprenants",
    "ind.ed.badge": "EdTech",
    "ind.ed.cap.1": "Parcours d'apprentissage en ligne personnalisés",
    "ind.ed.cap.2": "Salles de classe virtuelles en direct",
    "ind.ed.cap.3": "Moteurs de quiz interactifs",
    "ind.log.title": "Logistique et Chaîne d'Approvisionnement",
    "ind.log.desc": "Suivi de flotte, moteurs de routage en temps réel et synchronisation automatisée des stocks.",
    "ind.log.metric": "-30% de Retards",
    "ind.log.badge": "Logistique",
    "ind.log.cap.1": "API de suivi de flotte GPS",
    "ind.log.cap.2": "Moteurs d'optimisation d'itinéraire",
    "ind.log.cap.3": "Alertes de synchronisation des stocks",
    "ind.adv.badge": "L'AVANTAGE SOFTCR8ORS",
    "ind.adv.title.p1": "Pourquoi les Leaders",
    "ind.adv.title.p2": "Nous Font Confiance",
    "ind.adv.title.p3": "Avec Leurs Systèmes Essentiels",
    "ind.adv.desc": "Nous réunissons une architecture technologique de premier plan et des interfaces visuelles haut de gamme, garantissant que votre système personnalisé est stable, sécurisé et intuitif pour les utilisateurs.",
    "ind.adv.1.title": "Communication Directe avec l'Architecte",
    "ind.adv.1.desc": "Parlez directement aux ingénieurs et aux concepteurs de produits, et non aux gestionnaires de comptes.",
    "ind.adv.2.title": "Conformité de Sécurité Robuste",
    "ind.adv.2.desc": "Tous les systèmes construits avec les normes HIPAA, GDPR, PCI-DSS ou des références de sécurité personnalisées.",
    "ind.adv.3.title": "Exécution à Vitesse Ultra-Rapide",
    "ind.adv.3.desc": "Exploitation de frameworks modulaires personnalisés pour déployer des systèmes haute fidélité en quelques semaines.",
    "ind.cta.title.p1": "Prêt à",
    "ind.cta.title.p2": "transformer",
    "ind.cta.title.p3": "votre industrie?",
    "ind.cta.desc": "Commencez à construire votre système personnalisé avec Softcr8ors. Laissez notre équipe d'ingénieurs d'élite donner vie à votre vision.",
    "ind.cta.btn": "Démarrer un Projet"
}

zh = {
    "ind.hero.title.p1": "为全球",
    "ind.hero.title.p2": "行业",
    "ind.hero.title.p3": "架构数字生态系统",
    "ind.hero.desc": "我们定制软件开发、可扩展的云网络和高度精细的用户体验，旨在解决您行业特定的痛点。",
    "ind.hero.btn": "探索行业",
    "ind.sec.badge": "我们的行业",
    "ind.sec.title.p1": "为每个领域提供",
    "ind.sec.title.p2": "定制工程",
    "ind.sec.desc": "我们不相信一刀切。我们深入了解您行业的特定工作流程、合规性和操作细节，以构建高性能的数字产品。",
    "ind.sec.scroll": "滚动探索行业",
    "ind.fin.title": "金融科技与金融",
    "ind.fin.desc": "架构高安全性、高速度的金融系统和支付网关。",
    "ind.fin.metric": "99.9% 正常运行时间",
    "ind.fin.badge": "金融科技",
    "ind.fin.cap.1": "符合 PCI-DSS 的网关",
    "ind.fin.cap.2": "实时交易分类账",
    "ind.fin.cap.3": "自动计费和开发票",
    "ind.health.title": "医疗保健与健康科技",
    "ind.health.desc": "符合 HIPAA 的远程医疗平台和数字医疗生态系统。",
    "ind.health.metric": "HIPAA 安全",
    "ind.health.badge": "健康科技",
    "ind.health.cap.1": "安全的远程医疗室",
    "ind.health.cap.2": "电子健康记录",
    "ind.health.cap.3": "患者和医生门户",
    "ind.retail.title": "零售与电子商务",
    "ind.retail.desc": "专为高流量销售而设计的无头电子商务店面。",
    "ind.retail.metric": "+45% 转化率",
    "ind.retail.badge": "电子商务",
    "ind.retail.cap.1": "无头 PWA 店面",
    "ind.retail.cap.2": "多供应商架构",
    "ind.retail.cap.3": "全渠道库存同步",
    "ind.real.title": "房地产与房地产科技",
    "ind.real.desc": "智能房产门户、列表目录和视觉 VR 展示系统。",
    "ind.real.metric": "搜索速度提高 10 倍",
    "ind.real.badge": "房地产科技",
    "ind.real.cap.1": "地图列表目录",
    "ind.real.cap.2": "租户和房东门户",
    "ind.real.cap.3": "3D 虚拟看房",
    "ind.ed.title": "教育科技与教育",
    "ind.ed.desc": "交互式学习管理系统 (LMS) 和直播课堂平台。",
    "ind.ed.metric": "超过 100 万学习者",
    "ind.ed.badge": "教育科技",
    "ind.ed.cap.1": "定制电子学习路径",
    "ind.ed.cap.2": "实时虚拟教室",
    "ind.ed.cap.3": "交互式测验引擎",
    "ind.log.title": "物流与供应链",
    "ind.log.desc": "车队跟踪、实时路由引擎和自动库存同步。",
    "ind.log.metric": "-30% 延迟",
    "ind.log.badge": "物流",
    "ind.log.cap.1": "GPS 车队跟踪 API",
    "ind.log.cap.2": "路线优化引擎",
    "ind.log.cap.3": "库存同步警报",
    "ind.adv.badge": "SOFTCR8ORS 的优势",
    "ind.adv.title.p1": "为什么领导者",
    "ind.adv.title.p2": "信任我们",
    "ind.adv.title.p3": "处理他们的核心系统",
    "ind.adv.desc": "我们将顶级的技术架构与高级视觉界面相结合，确保您的定制系统稳定、安全且直观易用。",
    "ind.adv.1.title": "与架构师直接沟通",
    "ind.adv.1.desc": "直接与工程师和产品设计师交谈，而不是客户经理。",
    "ind.adv.2.title": "强大的安全合规性",
    "ind.adv.2.desc": "所有系统均符合 HIPAA、GDPR、PCI-DSS 或自定义安全基准。",
    "ind.adv.3.title": "超高速执行",
    "ind.adv.3.desc": "利用定制的模块化框架在几周内交付高保真系统。",
    "ind.cta.title.p1": "准备好",
    "ind.cta.title.p2": "转型",
    "ind.cta.title.p3": "您的行业了吗？",
    "ind.cta.desc": "开始与 Softcr8ors 一起构建您的定制系统。让我们精锐的工程团队将您的愿景变为现实。",
    "ind.cta.btn": "启动项目"
}

hi = {
    "ind.hero.title.p1": "वैश्विक",
    "ind.hero.title.p2": "उद्योगों",
    "ind.hero.title.p3": "के लिए डिजिटल पारिस्थितिक तंत्र की संरचना",
    "ind.hero.desc": "हम आपके उद्योग के विशिष्ट घर्षण बिंदुओं को हल करने के लिए कस्टम सॉफ्टवेयर, स्केलेबल क्लाउड नेटवर्क और अत्यधिक पॉलिश किए गए उपयोगकर्ता अनुभव इंजीनियर करते हैं।",
    "ind.hero.btn": "उद्योगों का अन्वेषण करें",
    "ind.sec.badge": "हमारे उद्योग",
    "ind.sec.title.p1": "प्रत्येक क्षेत्र के लिए",
    "ind.sec.title.p2": "अनुकूलित इंजीनियरिंग",
    "ind.sec.desc": "हम एक-आकार-सभी-के-लिए-फिट दृष्टिकोण में विश्वास नहीं करते हैं। हम उच्च-प्रदर्शन वाले डिजिटल उत्पादों के निर्माण के लिए आपके क्षेत्र के विशिष्ट वर्कफ़्लो, नियामक अनुपालन और परिचालन बारीकियों में खुद को विसर्जित करते हैं।",
    "ind.sec.scroll": "क्षेत्रों का पता लगाने के लिए स्क्रॉल करें",
    "ind.fin.title": "फिनटेक और वित्त",
    "ind.fin.desc": "उच्च-सुरक्षा, उच्च-वेग वित्तीय प्रणालियों और भुगतान गेटवे को आर्किटेक्ट करना।",
    "ind.fin.metric": "99.9% अपटाइम",
    "ind.fin.badge": "फिनटेक",
    "ind.fin.cap.1": "PCI-DSS अनुरूप गेटवे",
    "ind.fin.cap.2": "रीयल-टाइम लेनदेन बहीखाते",
    "ind.fin.cap.3": "स्वचालित बिलिंग और चालान",
    "ind.health.title": "हेल्थकेयर और हेल्थटेक",
    "ind.health.desc": "HIPAA-अनुरूप टेलीमेडिसिन प्लेटफ़ॉर्म और डिजिटल हेल्थकेयर इकोसिस्टम।",
    "ind.health.metric": "HIPAA सुरक्षित",
    "ind.health.badge": "हेल्थटेक",
    "ind.health.cap.1": "सुरक्षित टेलीहेल्थ कमरे",
    "ind.health.cap.2": "इलेक्ट्रॉनिक स्वास्थ्य रिकॉर्ड",
    "ind.health.cap.3": "रोगी और डॉक्टर पोर्टल",
    "ind.retail.title": "खुदरा और ई-कॉमर्स",
    "ind.retail.desc": "उच्च-यातायात बिक्री के लिए स्केल करने के लिए डिज़ाइन किए गए हेडलेस ई-कॉमर्स स्टोरफ्रंट।",
    "ind.retail.metric": "+45% रूपांतरण",
    "ind.retail.badge": "ई-कॉमर्स",
    "ind.retail.cap.1": "हेडलेस PWA स्टोरफ्रंट",
    "ind.retail.cap.2": "मल्टी-वेंडर आर्किटेक्चर",
    "ind.retail.cap.3": "ओमनीचैनल स्टॉक सिंक",
    "ind.real.title": "रियल एस्टेट और प्रॉपटेक",
    "ind.real.desc": "स्मार्ट प्रॉपर्टी पोर्टल, लिस्टिंग निर्देशिकाएं और विजुअल वीआर शोकेस सिस्टम।",
    "ind.real.metric": "10 गुना तेज खोज",
    "ind.real.badge": "प्रॉपटेक",
    "ind.real.cap.1": "मानचित्र सूचीकरण निर्देशिकाएं",
    "ind.real.cap.2": "किरायेदार और जमींदार पोर्टल",
    "ind.real.cap.3": "3D वर्चुअल प्रॉपर्टी टूर",
    "ind.ed.title": "एडटेक और शिक्षा",
    "ind.ed.desc": "इंटरएक्टिव लर्निंग मैनेजमेंट सिस्टम (LMS) और लाइव क्लास प्लेटफॉर्म।",
    "ind.ed.metric": "1M+ शिक्षार्थी",
    "ind.ed.badge": "एडटेक",
    "ind.ed.cap.1": "कस्टम ई-लर्निंग पथ",
    "ind.ed.cap.2": "लाइव वर्चुअल क्लासरूम",
    "ind.ed.cap.3": "इंटरएक्टिव क्विज़ इंजन",
    "ind.log.title": "लॉजिस्टिक्स और सप्लाई चेन",
    "ind.log.desc": "फ्लीट ट्रैकिंग, रीयल-टाइम रूटिंग इंजन और स्वचालित इन्वेंट्री सिंक।",
    "ind.log.metric": "-30% देरी",
    "ind.log.badge": "लॉजिस्टिक्स",
    "ind.log.cap.1": "जीपीएस फ्लीट ट्रैकिंग एपीआई",
    "ind.log.cap.2": "रूट ऑप्टिमाइजेशन इंजन",
    "ind.log.cap.3": "इन्वेंटरी सिंक अलर्ट",
    "ind.adv.badge": "सॉफ्टक्रीएटर्स का लाभ",
    "ind.adv.title.p1": "नेता हमारे ऊपर",
    "ind.adv.title.p2": "भरोसा क्यों करते हैं",
    "ind.adv.title.p3": "अपने मुख्य सिस्टम के साथ",
    "ind.adv.desc": "हम शीर्ष स्तरीय तकनीकी वास्तुकला को प्रीमियम विज़ुअल इंटरफेस के साथ लाते हैं, यह सुनिश्चित करते हुए कि आपका कस्टम सिस्टम उपयोगकर्ताओं के लिए स्थिर, सुरक्षित और सहज है।",
    "ind.adv.1.title": "डायरेक्ट आर्किटेक्ट संचार",
    "ind.adv.1.desc": "खाता प्रबंधकों से नहीं, सीधे इंजीनियरों और उत्पाद डिजाइनरों से बात करें।",
    "ind.adv.2.title": "मजबूत सुरक्षा अनुपालन",
    "ind.adv.2.desc": "HIPAA, GDPR, PCI-DSS, या कस्टम सुरक्षा बेंचमार्क के साथ बनाए गए सभी सिस्टम।",
    "ind.adv.3.title": "अल्ट्रा-हाई वेलोसिटी निष्पादन",
    "ind.adv.3.desc": "सप्ताहों में उच्च-निष्ठा प्रणाली को तैनात करने के लिए कस्टम मॉड्यूलर फ्रेमवर्क का लाभ उठाना।",
    "ind.cta.title.p1": "क्या आप अपने उद्योग को",
    "ind.cta.title.p2": "बदलने",
    "ind.cta.title.p3": "के लिए तैयार हैं?",
    "ind.cta.desc": "सॉफ्टक्रीएटर्स के साथ अपना अनुकूलित सिस्टम बनाना शुरू करें। हमारी संभ्रांत इंजीनियरिंग टीम को आपके दृष्टिकोण को जीवन में लाने दें।",
    "ind.cta.btn": "एक परियोजना शुरू करें"
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

with open('app/industries/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# Update array items
page = page.replace('title: "Fintech & Finance"', 'title: t("ind.fin.title")')
page = page.replace('desc: "Architecting high-security, high-velocity financial systems and payment gateways."', 'desc: t("ind.fin.desc")')
page = page.replace('metric: "99.9% Uptime"', 'metric: t("ind.fin.metric")')
page = page.replace('badge: "Fintech"', 'badge: t("ind.fin.badge")')
page = page.replace('"PCI-DSS compliant gateways"', 't("ind.fin.cap.1")')
page = page.replace('"Real-time transaction ledgers"', 't("ind.fin.cap.2")')
page = page.replace('"Automated billing & invoicing"', 't("ind.fin.cap.3")')

page = page.replace('title: "Healthcare & Healthtech"', 'title: t("ind.health.title")')
page = page.replace('desc: "HIPAA-compliant telemedicine platforms and digital healthcare ecosystems."', 'desc: t("ind.health.desc")')
page = page.replace('metric: "HIPAA Secure"', 'metric: t("ind.health.metric")')
page = page.replace('badge: "HealthTech"', 'badge: t("ind.health.badge")')
page = page.replace('"Secure telehealth rooms"', 't("ind.health.cap.1")')
page = page.replace('"Electronic health records"', 't("ind.health.cap.2")')
page = page.replace('"Patient & doctor portals"', 't("ind.health.cap.3")')

page = page.replace('title: "Retail & E-commerce"', 'title: t("ind.retail.title")')
page = page.replace('desc: "Headless e-commerce storefronts designed to scale for high-traffic sales."', 'desc: t("ind.retail.desc")')
page = page.replace('metric: "+45% Conversions"', 'metric: t("ind.retail.metric")')
page = page.replace('badge: "E-Commerce"', 'badge: t("ind.retail.badge")')
page = page.replace('"Headless PWA storefronts"', 't("ind.retail.cap.1")')
page = page.replace('"Multi-vendor architecture"', 't("ind.retail.cap.2")')
page = page.replace('"Omnichannel stock sync"', 't("ind.retail.cap.3")')

page = page.replace('title: "Real Estate & Proptech"', 'title: t("ind.real.title")')
page = page.replace('desc: "Smart property portals, listing directories, and visual VR showcase systems."', 'desc: t("ind.real.desc")')
page = page.replace('metric: "10x Fast Search"', 'metric: t("ind.real.metric")')
page = page.replace('badge: "PropTech"', 'badge: t("ind.real.badge")')
page = page.replace('"Map listing directories"', 't("ind.real.cap.1")')
page = page.replace('"Tenant & landlord portals"', 't("ind.real.cap.2")')
page = page.replace('"3D Virtual property tours"', 't("ind.real.cap.3")')

page = page.replace('title: "Edtech & Education"', 'title: t("ind.ed.title")')
page = page.replace('desc: "Interactive learning management systems (LMS) and live class platforms."', 'desc: t("ind.ed.desc")')
page = page.replace('metric: "1M+ Learners"', 'metric: t("ind.ed.metric")')
page = page.replace('badge: "EdTech"', 'badge: t("ind.ed.badge")')
page = page.replace('"Custom e-learning paths"', 't("ind.ed.cap.1")')
page = page.replace('"Live virtual classrooms"', 't("ind.ed.cap.2")')
page = page.replace('"Interactive quiz engines"', 't("ind.ed.cap.3")')

page = page.replace('title: "Logistics & Supply Chain"', 'title: t("ind.log.title")')
page = page.replace('desc: "Fleet tracking, real-time routing engines, and automated inventory sync."', 'desc: t("ind.log.desc")')
page = page.replace('metric: "-30% Delays"', 'metric: t("ind.log.metric")')
page = page.replace('badge: "Logistics"', 'badge: t("ind.log.badge")')
page = page.replace('"GPS fleet tracking APIs"', 't("ind.log.cap.1")')
page = page.replace('"Route optimization engines"', 't("ind.log.cap.2")')
page = page.replace('"Inventory sync alerts"', 't("ind.log.cap.3")')


page = page.replace('Architecting Digital Ecosystems for <span', '{t("ind.hero.title.p1")} <span')
page = page.replace('>Global</span> <span', '>{t("ind.hero.title.p2")}</span> <span')
page = page.replace('>Industries</span>', '>{t("ind.hero.title.p3")}</span>')
page = page.replace('We engineer custom software, scalable cloud networks, and highly polished user experiences built to solve the specific friction points of your industry.', '{t("ind.hero.desc")}')
page = page.replace('label="Explore Industries"', 'label={t("ind.hero.btn")}')


page = page.replace('text="OUR INDUSTRIES"', 'text={t("ind.sec.badge")}')
page = page.replace('Customized Engineering for <span', '{t("ind.sec.title.p1")} <span')
page = page.replace('>Every Arena</span>', '>{t("ind.sec.title.p2")}</span>')
page = page.replace('We don\'t believe in one-size-fits-all. We immerse ourselves in your sector\'s specific workflow, regulatory compliance, and operational nuances to build high-performance digital products.', '{t("ind.sec.desc")}')
page = page.replace('Scroll to explore sectors', '{t("ind.sec.scroll")}')


page = page.replace('text="THE SOFTCR8ORS ADVANTAGE"', 'text={t("ind.adv.badge")}')
page = page.replace('Why Leaders <span', '{t("ind.adv.title.p1")} <span')
page = page.replace('>Trust Us</span> With Their Core Systems', '>{t("ind.adv.title.p2")}</span> {t("ind.adv.title.p3")}')
page = page.replace('We bring top-tier tech architecture together with premium visual interfaces, ensuring your custom system is stable, secure, and intuitive for users.', '{t("ind.adv.desc")}')

page = page.replace('title: "Direct Architect Communication"', 'title: t("ind.adv.1.title")')
page = page.replace('desc: "Speak directly with engineers and product designers, not account managers."', 'desc: t("ind.adv.1.desc")')
page = page.replace('title: "Robust Security Compliance"', 'title: t("ind.adv.2.title")')
page = page.replace('desc: "All systems built with HIPAA, GDPR, PCI-DSS, or custom security benchmarks."', 'desc: t("ind.adv.2.desc")')
page = page.replace('title: "Ultra-High Velocity Execution"', 'title: t("ind.adv.3.title")')
page = page.replace('desc: "Leveraging custom modular frameworks to deploy high-fidelity systems in weeks."', 'desc: t("ind.adv.3.desc")')

page = page.replace('Ready to <span', '{t("ind.cta.title.p1")} <span')
page = page.replace('>transform</span> your industry?', '>{t("ind.cta.title.p2")}</span> {t("ind.cta.title.p3")}')
page = page.replace('Start building your customized system with Softcr8ors. Let our elite engineering team bring your vision to life.', '{t("ind.cta.desc")}')
page = page.replace('Start a Project <ArrowRight', '{t("ind.cta.btn")} <ArrowRight')


with open('app/industries/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
