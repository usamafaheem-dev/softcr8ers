import json
import codecs
import re

en = {
    "work.hero.title.p1": "Engineering Digital Masterpieces for",
    "work.hero.title.p2": "Global",
    "work.hero.title.p3": "Brands",
    "work.hero.desc": "Explore our curated portfolio of ultra-secure fintech ecosystems, hyper-performance headless systems, and pioneering AI logic systems engineered by Softcr8ors.",
    "work.hero.btn": "Explore Case Studies",
    "work.btn.read": "Read Case Study",
    "work.btn.load_more": "Load More Projects",
    "work.btn.load_less": "Load Less Projects",
    "work.cta.title.p1": "Ready to engineer your own",
    "work.cta.title.p2": "masterpiece?",
    "work.cta.desc": "Partner with Softcr8ors to design and engineer secure, high-performance web ecosystems, headless storefronts, and pioneering AI logic. Let's create your success story.",
    "work.cta.btn": "Start a Project",
    "work.detail.badge": "BUSINESS CASE STUDY",
    "work.detail.opp.badge": "BUSINESS OPPORTUNITY",
    "work.detail.opp.title": "OPPORTUNITY",
    "work.detail.sol.badge": "BUSINESS SOLUTION",
    "work.detail.sol.title": "APPROACH",
    "work.detail.feat.badge": "PRODUCT FEATURES",
    "work.detail.feat.title": "SOLUTION",
    "work.detail.tech.badge": "ENGINEERING TOOLKITS",
    "work.detail.tech.title": "TECHNOLOGY STACK",
    "work.detail.tech.desc": "Built with DevEx at our core — clear APIs, rock-solid integrations, and highly secure microservices engineered so we can ship faster with confidence.",
    "work.detail.stage1.badge": "Stage 01 • Architecture",
    "work.detail.stage1.title": "Structural Blueprint",
    "work.detail.stage1.desc": "We model secure network transaction pipelines, custom compliance layers, and databases aligned perfectly with velocity and data regulatory metrics.",
    "work.detail.stage2.badge": "Stage 02 • Execution",
    "work.detail.stage2.title": "Tactical Engineering",
    "work.detail.stage3.badge": "Stage 03 • Acceleration",
    "work.detail.stage3.title": "Optimization & Launch",
    "work.detail.stage3.desc": "End-to-end load audits, hardware caching integrations, edge optimization arrays, and pixel-perfect design adaptations for pristine desktop and mobile rendering."
}

ur = {
    "work.hero.title.p1": "کے لیے ڈیجیٹل شاہکار تیار کرنا",
    "work.hero.title.p2": "عالمی",
    "work.hero.title.p3": "برانڈز",
    "work.hero.desc": "Softcr8ors کے تیار کردہ انتہائی محفوظ فنٹیک ایکو سسٹمز، ہائپر پرفارمنس ہیڈ لیس سسٹمز، اور پیشگام AI لاجک سسٹمز کے ہمارے منتخب پورٹ فولیو کو دریافت کریں۔",
    "work.hero.btn": "کیس اسٹڈیز دریافت کریں۔",
    "work.btn.read": "کیس اسٹڈی پڑھیں",
    "work.btn.load_more": "مزید پروجیکٹس لوڈ کریں",
    "work.btn.load_less": "کم پروجیکٹس لوڈ کریں",
    "work.cta.title.p1": "کیا آپ اپنا خود کا تیار کرنے کے لیے تیار ہیں؟",
    "work.cta.title.p2": "شاہکار؟",
    "work.cta.desc": "Softcr8ors کے ساتھ شراکت کریں تاکہ محفوظ، اعلیٰ کارکردگی والے ویب ایکو سسٹمز، ہیڈ لیس اسٹور فرنٹ، اور پیشگام AI لاجک کو ڈیزائن اور انجینئر کیا جا سکے۔ آئیے آپ کی کامیابی کی کہانی بنائیں۔",
    "work.cta.btn": "پروجیکٹ شروع کریں",
    "work.detail.badge": "کاروباری کیس اسٹڈی",
    "work.detail.opp.badge": "کاروباری موقع",
    "work.detail.opp.title": "موقع",
    "work.detail.sol.badge": "کاروباری حل",
    "work.detail.sol.title": "طریقہ کار",
    "work.detail.feat.badge": "مصنوعات کی خصوصیات",
    "work.detail.feat.title": "حل",
    "work.detail.tech.badge": "انجینئرنگ ٹول کٹس",
    "work.detail.tech.title": "ٹیکنالوجی اسٹیک",
    "work.detail.tech.desc": "ہمارے مرکز میں DevEx کے ساتھ بنایا گیا ہے — واضح APIs، چٹان کی طرح ٹھوس انضمام، اور انتہائی محفوظ مائیکرو سروسز تیار کی گئی ہیں تاکہ ہم اعتماد کے ساتھ تیزی سے ڈیلیور کر سکیں۔",
    "work.detail.stage1.badge": "مرحلہ 01 • فن تعمیر",
    "work.detail.stage1.title": "ساختی بلیو پرنٹ",
    "work.detail.stage1.desc": "ہم محفوظ نیٹ ورک ٹرانزیکشن پائپ لائنز، حسب ضرورت تعمیل کی تہیں، اور رفتار اور ڈیٹا ریگولیٹری میٹرکس کے ساتھ بالکل ہم آہنگ ڈیٹا بیسز کو ماڈل بناتے ہیں۔",
    "work.detail.stage2.badge": "مرحلہ 02 • عملدرآمد",
    "work.detail.stage2.title": "ٹیکٹیکل انجینئرنگ",
    "work.detail.stage3.badge": "مرحلہ 03 • ایکسلریشن",
    "work.detail.stage3.title": "بہتر بنانا اور آغاز",
    "work.detail.stage3.desc": "اینڈ ٹو اینڈ لوڈ آڈٹ، ہارڈویئر کیشنگ انٹیگریشنز، ایج آپٹیمائزیشن اری، اور قدیم ڈیسک ٹاپ اور موبائل رینڈرنگ کے لیے پکسل پرفیکٹ ڈیزائن موافقت۔"
}

ar = {
    "work.hero.title.p1": "هندسة روائع رقمية لـ",
    "work.hero.title.p2": "العلامات التجارية",
    "work.hero.title.p3": "العالمية",
    "work.hero.desc": "استكشف محفظتنا المنسقة للأنظمة البيئية للتكنولوجيا المالية فائقة الأمان، والأنظمة مقطوعة الرأس فائقة الأداء، وأنظمة المنطق الذكاء الاصطناعي الرائدة التي صممتها Softcr8ors.",
    "work.hero.btn": "استكشاف دراسات الحالة",
    "work.btn.read": "قراءة دراسة الحالة",
    "work.btn.load_more": "تحميل المزيد من المشاريع",
    "work.btn.load_less": "تحميل مشاريع أقل",
    "work.cta.title.p1": "هل أنت مستعد لهندسة",
    "work.cta.title.p2": "تحفتك الخاصة؟",
    "work.cta.desc": "عقد شراكة مع Softcr8ors لتصميم وهندسة أنظمة الويب البيئية الآمنة وعالية الأداء، وواجهات المتاجر مقطوعة الرأس، والمنطق الرائد للذكاء الاصطناعي. دعنا نصنع قصة نجاحك.",
    "work.cta.btn": "ابدأ مشروعاً",
    "work.detail.badge": "دراسة حالة تجارية",
    "work.detail.opp.badge": "فرصة عمل",
    "work.detail.opp.title": "الفرصة",
    "work.detail.sol.badge": "حلول الأعمال",
    "work.detail.sol.title": "النهج",
    "work.detail.feat.badge": "ميزات المنتج",
    "work.detail.feat.title": "الحل",
    "work.detail.tech.badge": "مجموعة أدوات الهندسة",
    "work.detail.tech.title": "تكنولوجيا متكاملة",
    "work.detail.tech.desc": "صُممت مع وضع DevEx في صميمنا — واجهات برمجة تطبيقات واضحة، وتكاملات قوية، وخدمات مصغرة آمنة للغاية مصممة بحيث يمكننا الشحن بشكل أسرع بثقة.",
    "work.detail.stage1.badge": "المرحلة 01 • الهندسة المعمارية",
    "work.detail.stage1.title": "المخطط الهيكلي",
    "work.detail.stage1.desc": "نقوم بنمذجة مسارات معاملات الشبكة الآمنة، وطبقات الامتثال المخصصة، وقواعد البيانات المتوافقة تمامًا مع مقاييس السرعة والبيانات التنظيمية.",
    "work.detail.stage2.badge": "المرحلة 02 • التنفيذ",
    "work.detail.stage2.title": "الهندسة التكتيكية",
    "work.detail.stage3.badge": "المرحلة 03 • التسريع",
    "work.detail.stage3.title": "التحسين والإطلاق",
    "work.detail.stage3.desc": "عمليات تدقيق الحمل من طرف إلى طرف، وتكاملات التخزين المؤقت للأجهزة، ومصفوفات تحسين الحافة، والتعديلات المثالية لتصميم البكسل لتقديم سطح مكتب وهاتف محمول أصلي."
}

es = {
    "work.hero.title.p1": "Ingeniería de Obras Maestras Digitales para",
    "work.hero.title.p2": "Marcas",
    "work.hero.title.p3": "Globales",
    "work.hero.desc": "Explore nuestra cartera curada de ecosistemas fintech ultraseguros, sistemas headless de hiperrendimiento y sistemas lógicos pioneros de inteligencia artificial diseñados por Softcr8ors.",
    "work.hero.btn": "Explorar Casos de Estudio",
    "work.btn.read": "Leer Caso de Estudio",
    "work.btn.load_more": "Cargar Más Proyectos",
    "work.btn.load_less": "Cargar Menos Proyectos",
    "work.cta.title.p1": "¿Listo para diseñar tu propia",
    "work.cta.title.p2": "obra maestra?",
    "work.cta.desc": "Asóciese con Softcr8ors para diseñar y crear ecosistemas web seguros y de alto rendimiento, escaparates sin cabeza y una lógica de inteligencia artificial pionera. Vamos a crear su historia de éxito.",
    "work.cta.btn": "Iniciar un Proyecto",
    "work.detail.badge": "CASO DE ESTUDIO EMPRESARIAL",
    "work.detail.opp.badge": "OPORTUNIDAD DE NEGOCIO",
    "work.detail.opp.title": "OPORTUNIDAD",
    "work.detail.sol.badge": "SOLUCIÓN EMPRESARIAL",
    "work.detail.sol.title": "ENFOQUE",
    "work.detail.feat.badge": "CARACTERÍSTICAS DEL PRODUCTO",
    "work.detail.feat.title": "SOLUCIÓN",
    "work.detail.tech.badge": "KITS DE HERRAMIENTAS DE INGENIERÍA",
    "work.detail.tech.title": "PILA TECNOLÓGICA",
    "work.detail.tech.desc": "Creado con DevEx en nuestro núcleo: API claras, integraciones sólidas y microservicios altamente seguros diseñados para que podamos enviar más rápido con confianza.",
    "work.detail.stage1.badge": "Etapa 01 • Arquitectura",
    "work.detail.stage1.title": "Plano Estructural",
    "work.detail.stage1.desc": "Modelamos canales de transacciones de red seguros, capas de cumplimiento personalizadas y bases de datos alineadas perfectamente con métricas regulatorias y de velocidad de datos.",
    "work.detail.stage2.badge": "Etapa 02 • Ejecución",
    "work.detail.stage2.title": "Ingeniería Táctica",
    "work.detail.stage3.badge": "Etapa 03 • Aceleración",
    "work.detail.stage3.title": "Optimización y Lanzamiento",
    "work.detail.stage3.desc": "Auditorías de carga de extremo a extremo, integraciones de almacenamiento en caché de hardware, matrices de optimización de bordes y adaptaciones de diseño con píxeles perfectos para un renderizado móvil y de escritorio impecable."
}

fr = {
    "work.hero.title.p1": "Ingénierie de Chefs-d'œuvre Numériques pour les",
    "work.hero.title.p2": "Marques",
    "work.hero.title.p3": "Mondiales",
    "work.hero.desc": "Explorez notre portefeuille organisé d'écosystèmes fintech ultra-sécurisés, de systèmes headless hyper-performants et de systèmes logiques d'IA pionniers conçus par Softcr8ors.",
    "work.hero.btn": "Explorer les Études de Cas",
    "work.btn.read": "Lire l'Étude de Cas",
    "work.btn.load_more": "Charger Plus de Projets",
    "work.btn.load_less": "Charger Moins de Projets",
    "work.cta.title.p1": "Prêt à concevoir votre propre",
    "work.cta.title.p2": "chef-d'œuvre?",
    "work.cta.desc": "Associez-vous à Softcr8ors pour concevoir et développer des écosystèmes web sécurisés et très performants, des vitrines headless et une logique d'IA pionnière. Créons votre réussite.",
    "work.cta.btn": "Démarrer un Projet",
    "work.detail.badge": "ÉTUDE DE CAS COMMERCIALE",
    "work.detail.opp.badge": "OPPORTUNITÉ COMMERCIALE",
    "work.detail.opp.title": "OPPORTUNITÉ",
    "work.detail.sol.badge": "SOLUTION COMMERCIALE",
    "work.detail.sol.title": "APPROCHE",
    "work.detail.feat.badge": "CARACTÉRISTIQUES DU PRODUIT",
    "work.detail.feat.title": "SOLUTION",
    "work.detail.tech.badge": "KITS D'OUTILS D'INGÉNIERIE",
    "work.detail.tech.title": "PILE TECHNOLOGIQUE",
    "work.detail.tech.desc": "Conçu avec DevEx au cœur de nos préoccupations : des API claires, des intégrations à toute épreuve et des microservices hautement sécurisés, conçus pour nous permettre d'expédier plus rapidement en toute confiance.",
    "work.detail.stage1.badge": "Étape 01 • Architecture",
    "work.detail.stage1.title": "Plan Structurel",
    "work.detail.stage1.desc": "Nous modélisons des pipelines de transactions réseau sécurisés, des couches de conformité personnalisées et des bases de données parfaitement alignées sur les mesures réglementaires et de vitesse des données.",
    "work.detail.stage2.badge": "Étape 02 • Exécution",
    "work.detail.stage2.title": "Ingénierie Tactique",
    "work.detail.stage3.badge": "Étape 03 • Accélération",
    "work.detail.stage3.title": "Optimisation & Lancement",
    "work.detail.stage3.desc": "Audits de charge de bout en bout, intégrations de la mise en cache matérielle, baies d'optimisation de périphérie et adaptations de conception au pixel près pour un rendu de bureau et mobile immaculé."
}

zh = {
    "work.hero.title.p1": "为",
    "work.hero.title.p2": "全球品牌",
    "work.hero.title.p3": "打造数字杰作",
    "work.hero.desc": "探索我们精心策划的产品组合，包括超安全的金融科技生态系统、高性能的无头系统，以及由 Softcr8ors 打造的开创性人工智能逻辑系统。",
    "work.hero.btn": "探索案例研究",
    "work.btn.read": "阅读案例研究",
    "work.btn.load_more": "加载更多项目",
    "work.btn.load_less": "加载更少项目",
    "work.cta.title.p1": "准备好打造你自己的",
    "work.cta.title.p2": "杰作了吗？",
    "work.cta.desc": "与 Softcr8ors 合作设计和构建安全、高性能的 web 生态系统、无头店面和开创性的 AI 逻辑。让我们一起创造您的成功故事。",
    "work.cta.btn": "启动项目",
    "work.detail.badge": "商业案例研究",
    "work.detail.opp.badge": "商业机会",
    "work.detail.opp.title": "机会",
    "work.detail.sol.badge": "商业解决方案",
    "work.detail.sol.title": "方法",
    "work.detail.feat.badge": "产品功能",
    "work.detail.feat.title": "解决方案",
    "work.detail.tech.badge": "工程工具包",
    "work.detail.tech.title": "技术栈",
    "work.detail.tech.desc": "以 DevEx 为核心而构建——清晰的 API、坚如磐石的集成，以及高度安全的微服务，旨在让我们能够充满信心地加快交付速度。",
    "work.detail.stage1.badge": "阶段 01 • 架构",
    "work.detail.stage1.title": "结构蓝图",
    "work.detail.stage1.desc": "我们对安全的网络交易管道、自定义合规层以及与速度和数据监管指标完美对齐的数据库进行建模。",
    "work.detail.stage2.badge": "阶段 02 • 执行",
    "work.detail.stage2.title": "战术工程",
    "work.detail.stage3.badge": "阶段 03 • 加速",
    "work.detail.stage3.title": "优化与发布",
    "work.detail.stage3.desc": "端到端负载审计、硬件缓存集成、边缘优化阵列，以及像素级完美的桌面和移动渲染设计调整。"
}

hi = {
    "work.hero.title.p1": "वैश्विक",
    "work.hero.title.p2": "ब्रांडों के लिए",
    "work.hero.title.p3": "डिजिटल मास्टरपीस की इंजीनियरिंग",
    "work.hero.desc": "सॉफ्टक्रीएटर्स द्वारा इंजीनियर अल्ट्रा-सिक्योर फिनटेक इकोसिस्टम, हाइपर-परफॉर्मेंस हेडलेस सिस्टम और अग्रणी एआई लॉजिक सिस्टम के हमारे क्यूरेटेड पोर्टफोलियो का अन्वेषण करें।",
    "work.hero.btn": "केस स्टडीज का अन्वेषण करें",
    "work.btn.read": "केस स्टडी पढ़ें",
    "work.btn.load_more": "अधिक प्रोजेक्ट लोड करें",
    "work.btn.load_less": "कम प्रोजेक्ट लोड करें",
    "work.cta.title.p1": "क्या आप अपनी खुद की",
    "work.cta.title.p2": "मास्टरपीस बनाने के लिए तैयार हैं?",
    "work.cta.desc": "सॉफ्टक्रीएटर्स के साथ सुरक्षित, उच्च-प्रदर्शन वाले वेब इकोसिस्टम, हेडलेस स्टोरफ्रंट और अग्रणी एआई लॉजिक को डिजाइन और इंजीनियर करने के लिए भागीदार बनें। आइए आपकी सफलता की कहानी बनाएं।",
    "work.cta.btn": "एक परियोजना शुरू करें",
    "work.detail.badge": "बिजनेस केस स्टडी",
    "work.detail.opp.badge": "व्यापार का अवसर",
    "work.detail.opp.title": "अवसर",
    "work.detail.sol.badge": "व्यापार समाधान",
    "work.detail.sol.title": "दृष्टिकोण",
    "work.detail.feat.badge": "उत्पाद विशेषताएं",
    "work.detail.feat.title": "समाधान",
    "work.detail.tech.badge": "इंजीनियरिंग टूलकिट",
    "work.detail.tech.title": "प्रौद्योगिकी स्टैक",
    "work.detail.tech.desc": "हमारे मूल में देवएक्स के साथ निर्मित - स्पष्ट एपीआई, रॉक-सॉलिड एकीकरण, और अत्यधिक सुरक्षित माइक्रो-सेवाएं इंजीनियर की गई हैं ताकि हम विश्वास के साथ तेजी से शिप कर सकें।",
    "work.detail.stage1.badge": "चरण 01 • वास्तुकला",
    "work.detail.stage1.title": "संरचनात्मक खाका",
    "work.detail.stage1.desc": "हम सुरक्षित नेटवर्क लेनदेन पाइपलाइन, कस्टम अनुपालन परतें, और डेटाबेस का मॉडल बनाते हैं जो वेग और डेटा नियामक मेट्रिक्स के साथ पूरी तरह से संरेखित होते हैं।",
    "work.detail.stage2.badge": "चरण 02 • निष्पादन",
    "work.detail.stage2.title": "सामरिक इंजीनियरिंग",
    "work.detail.stage3.badge": "चरण 03 • त्वरण",
    "work.detail.stage3.title": "अनुकूलन और लॉन्च",
    "work.detail.stage3.desc": "एंड-टू-एंड लोड ऑडिट, हार्डवेयर कैशिंग एकीकरण, एज ऑप्टिमाइजेशन एरे, और प्राचीन डेस्कटॉप और मोबाइल रेंडरिंग के लिए पिक्सेल-परफेक्ट डिजाइन अनुकूलन।"
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

with open('app/work/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace('Engineering Digital Masterpieces for <span', '{t("work.hero.title.p1")} <span')
page = page.replace('>Global</span> <span', '>{t("work.hero.title.p2")}</span> <span')
page = page.replace('>Brands</span>', '>{t("work.hero.title.p3")}</span>')
page = page.replace('Explore our curated portfolio of ultra-secure fintech ecosystems, hyper-performance headless systems, and pioneering AI logic systems engineered by Softcr8ors.', '{t("work.hero.desc")}')
page = page.replace('label="Explore Case Studies"', 'label={t("work.hero.btn")}')

page = page.replace('<span>Read Case Study</span>', '<span>{t("work.btn.read")}</span>')
page = page.replace('Load More Projects <ChevronDown', '{t("work.btn.load_more")} <ChevronDown')
page = page.replace('Load Less Projects <ChevronUp', '{t("work.btn.load_less")} <ChevronUp')

page = page.replace('Ready to engineer your own <span', '{t("work.cta.title.p1")} <span')
page = page.replace('>masterpiece</span>?', '>{t("work.cta.title.p2")}</span>')
page = page.replace('Partner with Softcr8ors to design and engineer secure, high-performance web ecosystems, headless storefronts, and pioneering AI logic. Let\'s create your success story.', '{t("work.cta.desc")}')
page = page.replace('Start a Project <ArrowRight', '{t("work.cta.btn")} <ArrowRight')

page = page.replace('text="BUSINESS CASE STUDY"', 'text={t("work.detail.badge")}')
page = page.replace('text="BUSINESS OPPORTUNITY"', 'text={t("work.detail.opp.badge")}')
page = page.replace('OPPORTUNITY\n', '{t("work.detail.opp.title")}\n')
page = page.replace('text="BUSINESS SOLUTION"', 'text={t("work.detail.sol.badge")}')
page = page.replace('APPROACH\n', '{t("work.detail.sol.title")}\n')
page = page.replace('text="PRODUCT FEATURES"', 'text={t("work.detail.feat.badge")}')
page = page.replace('SOLUTION\n', '{t("work.detail.feat.title")}\n')
page = page.replace('ENGINEERING TOOLKITS\n', '{t("work.detail.tech.badge")}\n')
page = page.replace('TECHNOLOGY STACK\n', '{t("work.detail.tech.title")}\n')
page = page.replace('Built with DevEx at our core — clear APIs, rock-solid integrations, and highly secure microservices engineered so we can ship faster with confidence.', '{t("work.detail.tech.desc")}')

page = page.replace('Stage 01 • Architecture\n', '{t("work.detail.stage1.badge")}\n')
page = page.replace('Structural Blueprint\n', '{t("work.detail.stage1.title")}\n')
page = page.replace('We model secure network transaction pipelines, custom compliance layers, and databases aligned perfectly with velocity and data regulatory metrics.', '{t("work.detail.stage1.desc")}')

page = page.replace('Stage 02 • Execution\n', '{t("work.detail.stage2.badge")}\n')
page = page.replace('Tactical Engineering\n', '{t("work.detail.stage2.title")}\n')

page = page.replace('Stage 03 • Acceleration\n', '{t("work.detail.stage3.badge")}\n')
page = page.replace('Optimization & Launch\n', '{t("work.detail.stage3.title")}\n')
page = page.replace('Optimization &amp; Launch\n', '{t("work.detail.stage3.title")}\n')
page = page.replace('End-to-end load audits, hardware caching integrations, edge optimization arrays, and pixel-perfect design adaptations for pristine desktop and mobile rendering.', '{t("work.detail.stage3.desc")}')

with open('app/work/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
