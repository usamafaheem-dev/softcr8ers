import json
import codecs
import re

en = {
    "about.hero.title.p1": "Revolutionizing",
    "about.hero.title.p2": "Businesses",
    "about.hero.title.p3": "with",
    "about.hero.title.p4": "Digital",
    "about.hero.title.p5": "Innovations",
    "about.hero.desc": "We transform bold ideas into disruptive digital products and strategies to drive exponential growth for Startups and Enterprises globally.",
    "about.hero.badge.1": "Premium Digital Agency",
    "about.hero.badge.2": "Global Reach",
    "about.hero.badge.3": "Award Winning",
    "about.who.title.p1": "Who",
    "about.who.title.p2": "We",
    "about.who.title.p3": "Are",
    "about.who.desc.1": "Softcr8ors is an innovative global leader in software development and consultancy. With a robust team spread across multiple countries, we establish a powerful presence to serve our clients effectively. Our elite engineering squad has consistently delivered high-performance solutions for companies of all sizes, from Fortune 500 corporations to disruptive unicorn startups.",
    "about.who.desc.2": "Innovation is at the absolute core of our DNA. We constantly push the boundaries of what's possible, harnessing emerging technologies and modern frameworks to provide cutting-edge development.",
    "about.val.badge": "THE FOUNDATION",
    "about.val.title.p1": "Mission, Vision &",
    "about.val.title.p2": "Values",
    "about.val.1.title": "Our Vision",
    "about.val.1.desc": "To become the number one choice for businesses in offering innovative digital solutions globally.",
    "about.val.2.title": "Our Mission",
    "about.val.2.desc": "Accelerate the adoption of new technologies and solve complex issues with digital innovation.",
    "about.val.3.title": "Excellence",
    "about.val.3.desc": "We never compromise on the quality of our code or the perfection of our aesthetics.",
    "about.val.4.title": "Integrity",
    "about.val.4.desc": "Absolute transparency with our clients, building partnerships based on trust and results.",
    "about.stats.1": "The year our company was founded",
    "about.stats.2": "The number of specialists in our company",
    "about.stats.3": "Implemented projects for our clients",
    "about.stats.4": "We give a 5 year guarantee on all our services",
    "about.meth.badge": "THE CR8ORS METHODOLOGY",
    "about.meth.title.p1": "How we shift the",
    "about.meth.title.p2": "paradigm",
    "about.meth.1.title": "Clean Architecture",
    "about.meth.1.desc": "We write modular, scalable code ensuring absolute maintainability.",
    "about.meth.2.title": "Precision Design",
    "about.meth.2.desc": "Every pixel is crafted with an obsession for premium aesthetics.",
    "about.meth.3.title": "High Velocity",
    "about.meth.3.desc": "Rapid prototyping and deployment without compromising quality.",
    "about.meth.4.title": "Direct Alignment",
    "about.meth.4.desc": "You speak directly to the engineers building your platform.",
    "about.meth.5.title": "Performance First",
    "about.meth.5.desc": "Optimizing load times, smooth animations, and robust backend logic.",
    "about.meth.6.title": "Scalable Infrastructure",
    "about.meth.6.desc": "Cloud-native foundations built to handle millions of users.",
    "about.meth.7.title": "Elite Talent",
    "about.meth.7.desc": "Our team consists of top 1% global engineering minds.",
    "about.meth.8.title": "Premium Standard",
    "about.meth.8.desc": "Unwavering commitment to digital excellence in everything we do.",
    "about.journey.badge": "OUR JOURNEY SO FAR",
    "about.journey.title.p1": "The path of",
    "about.journey.title.p2": "craftsmanship",
    "about.journey.1.title": "The Spark",
    "about.journey.1.sub": "Disrupting the Agency Model",
    "about.journey.1.desc": "Softcr8ors was founded under a simple premise: eliminate the middleman and corporate bureaucracy. We hired elite engineers and designers to build a high-performance studio.",
    "about.journey.1.stat": "Initial Projects Built",
    "about.journey.2.title": "Hyper-Growth",
    "about.journey.2.sub": "Scaling Quality Worldwide",
    "about.journey.2.desc": "We expanded our horizons across three continents, proving that our clean-code practices and aesthetic-obsessed designs resonate globally. We refined our tech stack.",
    "about.journey.2.stat": "Global Clients Served",
    "about.journey.3.title": "Next-Gen Tech",
    "about.journey.3.sub": "Pioneering AI & Dynamic UI",
    "about.journey.3.desc": "Integrating modern visual architectures, high-performance animations, and predictive product design. We solidified our name as the premium standard.",
    "about.journey.3.stat": "Products Launched",
    "about.journey.4.title": "The Future Standard",
    "about.journey.4.sub": "Uncompromising Excellence",
    "about.journey.4.desc": "Today, Softcr8ors stands as the gold standard for premium development. We continue to redefine the boundaries of user experience and premium craftsmanship.",
    "about.journey.4.stat": "Retention Rate %",
    "about.cta.title.p1": "Ready to",
    "about.cta.title.p2": "transform",
    "about.cta.title.p3": "your business?",
    "about.cta.desc": "Start building your digital ecosystem with Softcr8ors. Let our elite engineering team bring your vision to life.",
    "about.cta.btn": "Start a Project"
}

ur = {
    "about.hero.title.p1": "ڈیجیٹل",
    "about.hero.title.p2": "جدت کے ساتھ",
    "about.hero.title.p3": "کاروبار میں",
    "about.hero.title.p4": "انقلاب",
    "about.hero.title.p5": "لانا",
    "about.hero.desc": "ہم عالمی سطح پر اسٹارٹ اپس اور انٹرپرائزز کے لیے تیزی سے ترقی کے لیے جرات مندانہ خیالات کو ڈیجیٹل مصنوعات اور حکمت عملیوں میں تبدیل کرتے ہیں۔",
    "about.hero.badge.1": "پریمیم ڈیجیٹل ایجنسی",
    "about.hero.badge.2": "عالمی رسائی",
    "about.hero.badge.3": "ایوارڈ یافتہ",
    "about.who.title.p1": "ہم",
    "about.who.title.p2": "کون",
    "about.who.title.p3": "ہیں",
    "about.who.desc.1": "Softcr8ors سافٹ ویئر کی ترقی اور مشاورت میں ایک جدید عالمی رہنما ہے۔ متعدد ممالک میں پھیلی ہوئی ایک مضبوط ٹیم کے ساتھ، ہم اپنے گاہکوں کی مؤثر طریقے سے خدمت کرنے کے لیے ایک طاقتور موجودگی قائم کرتے ہیں۔ ہماری ایلیٹ انجینئرنگ اسکواڈ نے فارچیون 500 کارپوریشنز سے لے کر خلل ڈالنے والے یونیکورن اسٹارٹ اپس تک تمام سائز کی کمپنیوں کے لیے مسلسل اعلیٰ کارکردگی والے حل فراہم کیے ہیں۔",
    "about.who.desc.2": "جدت طرازی ہمارے ڈی این اے کے بالکل مرکز میں ہے۔ ہم مسلسل جدید ٹیکنالوجیز اور جدید فریم ورکس کو بروئے کار لاتے ہوئے ان حدود کو آگے بڑھاتے ہیں جو ممکن ہے۔",
    "about.val.badge": "بنیاد",
    "about.val.title.p1": "مشن، وژن اور",
    "about.val.title.p2": "اقدار",
    "about.val.1.title": "ہمارا وژن",
    "about.val.1.desc": "عالمی سطح پر جدید ڈیجیٹل حل پیش کرنے میں کاروباروں کے لیے نمبر ایک انتخاب بننا۔",
    "about.val.2.title": "ہمارا مشن",
    "about.val.2.desc": "نئی ٹیکنالوجیز کو اپنانے میں تیزی لائیں اور ڈیجیٹل اختراع کے ساتھ پیچیدہ مسائل کو حل کریں۔",
    "about.val.3.title": "عمدگی",
    "about.val.3.desc": "ہم کبھی بھی اپنے کوڈ کے معیار یا جمالیات کے کمال سے سمجھوتہ نہیں کرتے ہیں۔",
    "about.val.4.title": "دیانت داری",
    "about.val.4.desc": "اپنے گاہکوں کے ساتھ مکمل شفافیت، اعتماد اور نتائج پر مبنی شراکت داری کی تعمیر۔",
    "about.stats.1": "سال ہماری کمپنی قائم ہوئی تھی۔",
    "about.stats.2": "ہماری کمپنی میں ماہرین کی تعداد",
    "about.stats.3": "ہمارے گاہکوں کے لیے لاگو منصوبے",
    "about.stats.4": "ہم اپنی تمام خدمات پر 5 سال کی گارنٹی دیتے ہیں۔",
    "about.meth.badge": "میتھڈولوجی",
    "about.meth.title.p1": "ہم کس طرح",
    "about.meth.title.p2": "نمونہ بدلتے ہیں",
    "about.meth.1.title": "صاف فن تعمیر",
    "about.meth.1.desc": "ہم ماڈیولر، قابل توسیع کوڈ لکھتے ہیں جو مکمل دیکھ بھال کو یقینی بناتا ہے۔",
    "about.meth.2.title": "عین مطابق ڈیزائن",
    "about.meth.2.desc": "ہر پکسل کو پریمیم جمالیات کے جنون کے ساتھ تیار کیا گیا ہے۔",
    "about.meth.3.title": "تیز رفتاری",
    "about.meth.3.desc": "معیار پر سمجھوتہ کیے بغیر تیزی سے پروٹو ٹائپنگ اور تعیناتی۔",
    "about.meth.4.title": "براہ راست صف بندی",
    "about.meth.4.desc": "آپ براہ راست ان انجینئرز سے بات کرتے ہیں جو آپ کا پلیٹ فارم بناتے ہیں۔",
    "about.meth.5.title": "کارکردگی سب سے پہلے",
    "about.meth.5.desc": "لوڈ کے اوقات کو بہتر بنانا، ہموار اینیمیشن، اور مضبوط بیک اینڈ منطق۔",
    "about.meth.6.title": "اسکیل ایبل انفراسٹرکچر",
    "about.meth.6.desc": "کلاؤڈ مقامی بنیادیں لاکھوں صارفین کو ہینڈل کرنے کے لیے بنائی گئی ہیں۔",
    "about.meth.7.title": "ایلیٹ ٹیلنٹ",
    "about.meth.7.desc": "ہماری ٹیم عالمی انجینئرنگ کے سرفہرست 1% ذہنوں پر مشتمل ہے۔",
    "about.meth.8.title": "پریمیم سٹینڈرڈ",
    "about.meth.8.desc": "ہم جو بھی کرتے ہیں ڈیجیٹل فضیلت کے لیے غیر متزلزل وابستگی۔",
    "about.journey.badge": "اب تک کا ہمارا سفر",
    "about.journey.title.p1": "کاریگری",
    "about.journey.title.p2": "کا راستہ",
    "about.journey.1.title": "دی اسپارک",
    "about.journey.1.sub": "ایجنسی ماڈل کو درہم برہم کرنا",
    "about.journey.1.desc": "Softcr8ors کی بنیاد ایک سادہ بنیاد کے تحت رکھی گئی تھی: مڈل مین اور کارپوریٹ بیوروکریسی کو ختم کریں۔ ہم نے ایک اعلی کارکردگی والا اسٹوڈیو بنانے کے لیے ایلیٹ انجینئرز اور ڈیزائنرز کی خدمات حاصل کیں۔",
    "about.journey.1.stat": "ابتدائی پروجیکٹس بنائے گئے",
    "about.journey.2.title": "ہائپر گروتھ",
    "about.journey.2.sub": "دنیا بھر میں معیار کو بڑھانا",
    "about.journey.2.desc": "ہم نے تین براعظموں میں اپنے افق کو وسعت دی، یہ ثابت کرتے ہوئے کہ ہمارے صاف ستھرا کوڈ کے طرز عمل اور جمالیاتی جنون میں مبتلا ڈیزائن عالمی سطح پر گونجتے ہیں۔ ہم نے اپنے ٹیک اسٹیک کو بہتر کیا۔",
    "about.journey.2.stat": "گلوبل کلائنٹس پیش کیے گئے",
    "about.journey.3.title": "اگلی نسل کی ٹیکنالوجی",
    "about.journey.3.sub": "آرٹیفیشل انٹیلی جنس اور ڈائنامک یوآئی",
    "about.journey.3.desc": "جدید بصری تعمیرات، اعلی کارکردگی کی اینیمیشن، اور پیش گوئی کرنے والے پروڈکٹ ڈیزائن کو یکجا کرنا۔ ہم نے پریمیم معیار کے طور پر اپنا نام مضبوط کیا۔",
    "about.journey.3.stat": "مصنوعات کا آغاز کیا گیا۔",
    "about.journey.4.title": "مستقبل کا معیار",
    "about.journey.4.sub": "غیر سمجھوتہ کرنے والی فضیلت",
    "about.journey.4.desc": "آج، Softcr8ors پریمیم ڈیولپمنٹ کے لیے گولڈ اسٹینڈرڈ کے طور پر کھڑا ہے۔ ہم صارف کے تجربے اور پریمیم کاریگری کی حدود کو از سر نو متعین کرنا جاری رکھے ہوئے ہیں۔",
    "about.journey.4.stat": "برقرار رکھنے کی شرح %",
    "about.cta.title.p1": "کیا آپ اپنے کاروبار کو",
    "about.cta.title.p2": "تبدیل",
    "about.cta.title.p3": "کرنے کے لیے تیار ہیں؟",
    "about.cta.desc": "Softcr8ors کے ساتھ اپنا ڈیجیٹل ایکو سسٹم بنانا شروع کریں۔ ہماری ایلیٹ انجینئرنگ ٹیم کو آپ کے وژن کو زندہ کرنے دیں۔",
    "about.cta.btn": "پروجیکٹ شروع کریں"
}

ar = {
    "about.hero.title.p1": "إحداث ثورة في",
    "about.hero.title.p2": "الأعمال",
    "about.hero.title.p3": "من خلال",
    "about.hero.title.p4": "الابتكارات",
    "about.hero.title.p5": "الرقمية",
    "about.hero.desc": "نحول الأفكار الجريئة إلى منتجات واستراتيجيات رقمية ثورية لدفع النمو المتسارع للشركات الناشئة والمؤسسات على مستوى العالم.",
    "about.hero.badge.1": "وكالة رقمية متميزة",
    "about.hero.badge.2": "وصول عالمي",
    "about.hero.badge.3": "حائز على جوائز",
    "about.who.title.p1": "من",
    "about.who.title.p2": "نحن",
    "about.who.title.p3": "؟",
    "about.who.desc.1": "Softcr8ors هي شركة رائدة عالمية مبتكرة في مجال تطوير البرمجيات والاستشارات. مع فريق قوي منتشر في بلدان متعددة، نؤسس وجودًا قويًا لخدمة عملائنا بشكل فعال. لقد قدم فريق النخبة الهندسي لدينا باستمرار حلولًا عالية الأداء للشركات من جميع الأحجام، بدءًا من شركات Fortune 500 وحتى الشركات الناشئة المدمرة.",
    "about.who.desc.2": "الابتكار هو جوهر الحمض النووي لدينا. نحن ندفع باستمرار حدود الممكن، ونسخر التقنيات الناشئة والأطر الحديثة لتوفير أحدث التطورات.",
    "about.val.badge": "الأساس",
    "about.val.title.p1": "المهمة والرؤية و",
    "about.val.title.p2": "القيم",
    "about.val.1.title": "رؤيتنا",
    "about.val.1.desc": "أن نصبح الخيار الأول للشركات في تقديم حلول رقمية مبتكرة على مستوى العالم.",
    "about.val.2.title": "مهمتنا",
    "about.val.2.desc": "تسريع اعتماد التقنيات الجديدة وحل المشكلات المعقدة بالابتكار الرقمي.",
    "about.val.3.title": "التفوق",
    "about.val.3.desc": "نحن لا نساوم أبداً على جودة كودنا أو كمال جمالياتنا.",
    "about.val.4.title": "النزاهة",
    "about.val.4.desc": "شفافية مطلقة مع عملائنا، وبناء شراكات مبنية على الثقة والنتائج.",
    "about.stats.1": "عام تأسيس شركتنا",
    "about.stats.2": "عدد المتخصصين في شركتنا",
    "about.stats.3": "المشاريع المنفذة لعملائنا",
    "about.stats.4": "نقدم ضمان لمدة 5 سنوات على جميع خدماتنا",
    "about.meth.badge": "منهجية Softcr8ors",
    "about.meth.title.p1": "كيف نغير",
    "about.meth.title.p2": "النموذج",
    "about.meth.1.title": "هندسة نظيفة",
    "about.meth.1.desc": "نكتب أكواد معيارية وقابلة للتطوير تضمن إمكانية صيانة مطلقة.",
    "about.meth.2.title": "تصميم دقيق",
    "about.meth.2.desc": "تم تصميم كل بكسل بهوس بالجماليات المتميزة.",
    "about.meth.3.title": "سرعة عالية",
    "about.meth.3.desc": "النماذج الأولية السريعة والنشر دون المساومة على الجودة.",
    "about.meth.4.title": "محاذاة مباشرة",
    "about.meth.4.desc": "أنت تتحدث مباشرة إلى المهندسين الذين يبنون منصتك.",
    "about.meth.5.title": "الأداء أولاً",
    "about.meth.5.desc": "تحسين أوقات التحميل والرسوم المتحركة السلسة والمنطق الخلفي القوي.",
    "about.meth.6.title": "بنية تحتية قابلة للتطوير",
    "about.meth.6.desc": "أسس سحابية أصلية مصممة للتعامل مع ملايين المستخدمين.",
    "about.meth.7.title": "مواهب النخبة",
    "about.meth.7.desc": "يتكون فريقنا من أفضل 1٪ من العقول الهندسية العالمية.",
    "about.meth.8.title": "معيار متميز",
    "about.meth.8.desc": "التزام لا يتزعزع بالتميز الرقمي في كل ما نقوم به.",
    "about.journey.badge": "رحلتنا حتى الآن",
    "about.journey.title.p1": "مسار",
    "about.journey.title.p2": "الحرفية",
    "about.journey.1.title": "الشرارة",
    "about.journey.1.sub": "تعطيل نموذج الوكالة",
    "about.journey.1.desc": "تأسست Softcr8ors بموجب فرضية بسيطة: القضاء على الوسيط والبيروقراطية المؤسسية. لقد وظفنا نخبة المهندسين والمصممين لبناء استوديو عالي الأداء.",
    "about.journey.1.stat": "المشاريع الأولية المبنية",
    "about.journey.2.title": "النمو المفرط",
    "about.journey.2.sub": "توسيع الجودة على مستوى العالم",
    "about.journey.2.desc": "قمنا بتوسيع آفاقنا عبر ثلاث قارات، وأثبتنا أن ممارسات الكود النظيف والتصميمات المهووسة بالجمال يتردد صداها عالميًا. لقد قمنا بتنقيح مجموعة التكنولوجيا لدينا.",
    "about.journey.2.stat": "العملاء العالميين الذين تم خدمتهم",
    "about.journey.3.title": "تكنولوجيا الجيل القادم",
    "about.journey.3.sub": "الريادة في الذكاء الاصطناعي والواجهة الديناميكية",
    "about.journey.3.desc": "دمج البنى المرئية الحديثة، والرسوم المتحركة عالية الأداء، وتصميم المنتجات التنبؤية. عززنا اسمنا كمعيار متميز.",
    "about.journey.3.stat": "المنتجات المطلقة",
    "about.journey.4.title": "معيار المستقبل",
    "about.journey.4.sub": "تفوق لا هوادة فيه",
    "about.journey.4.desc": "اليوم، تقف Softcr8ors كالمعيار الذهبي للتطوير المتميز. نواصل إعادة تعريف حدود تجربة المستخدم والحرفية المتميزة.",
    "about.journey.4.stat": "معدل الاستبقاء ٪",
    "about.cta.title.p1": "هل أنت مستعد لـ",
    "about.cta.title.p2": "تحويل",
    "about.cta.title.p3": "عملك؟",
    "about.cta.desc": "ابدأ في بناء نظامك البيئي الرقمي مع Softcr8ors. دع فريقنا الهندسي النخبوي يحول رؤيتك إلى حقيقة.",
    "about.cta.btn": "ابدأ مشروعاً"
}

es = {
    "about.hero.title.p1": "Revolucionando",
    "about.hero.title.p2": "Negocios",
    "about.hero.title.p3": "con",
    "about.hero.title.p4": "Innovaciones",
    "about.hero.title.p5": "Digitales",
    "about.hero.desc": "Transformamos ideas audaces en productos y estrategias digitales disruptivos para impulsar un crecimiento exponencial en Startups y Empresas a nivel global.",
    "about.hero.badge.1": "Agencia Digital Premium",
    "about.hero.badge.2": "Alcance Global",
    "about.hero.badge.3": "Galardonada",
    "about.who.title.p1": "Quiénes",
    "about.who.title.p2": "Somos",
    "about.who.title.p3": "",
    "about.who.desc.1": "Softcr8ors es un líder mundial innovador en desarrollo de software y consultoría. Con un sólido equipo repartido en varios países, establecemos una poderosa presencia para servir a nuestros clientes de manera efectiva. Nuestro escuadrón de ingeniería de élite ha brindado constantemente soluciones de alto rendimiento para empresas de todos los tamaños, desde corporaciones Fortune 500 hasta nuevas empresas de unicornios disruptivos.",
    "about.who.desc.2": "La innovación está en el núcleo absoluto de nuestro ADN. Constantemente superamos los límites de lo posible, aprovechando las tecnologías emergentes y los marcos modernos para proporcionar un desarrollo de vanguardia.",
    "about.val.badge": "LA FUNDACIÓN",
    "about.val.title.p1": "Misión, Visión y",
    "about.val.title.p2": "Valores",
    "about.val.1.title": "Nuestra Visión",
    "about.val.1.desc": "Convertirnos en la opción número uno para las empresas al ofrecer soluciones digitales innovadoras a nivel mundial.",
    "about.val.2.title": "Nuestra Misión",
    "about.val.2.desc": "Acelerar la adopción de nuevas tecnologías y resolver problemas complejos con innovación digital.",
    "about.val.3.title": "Excelencia",
    "about.val.3.desc": "Nunca comprometemos la calidad de nuestro código ni la perfección de nuestra estética.",
    "about.val.4.title": "Integridad",
    "about.val.4.desc": "Transparencia absoluta con nuestros clientes, construyendo alianzas basadas en la confianza y los resultados.",
    "about.stats.1": "El año en que se fundó nuestra empresa",
    "about.stats.2": "El número de especialistas en nuestra empresa",
    "about.stats.3": "Proyectos implementados para nuestros clientes",
    "about.stats.4": "Damos una garantía de 5 años en todos nuestros servicios",
    "about.meth.badge": "LA METODOLOGÍA",
    "about.meth.title.p1": "Cómo cambiamos el",
    "about.meth.title.p2": "paradigma",
    "about.meth.1.title": "Arquitectura Limpia",
    "about.meth.1.desc": "Escribimos código modular y escalable asegurando una mantenibilidad absoluta.",
    "about.meth.2.title": "Diseño de Precisión",
    "about.meth.2.desc": "Cada píxel está diseñado con una obsesión por la estética premium.",
    "about.meth.3.title": "Alta Velocidad",
    "about.meth.3.desc": "Creación rápida de prototipos e implementación sin comprometer la calidad.",
    "about.meth.4.title": "Alineación Directa",
    "about.meth.4.desc": "Hablas directamente con los ingenieros que construyen tu plataforma.",
    "about.meth.5.title": "Rendimiento Primero",
    "about.meth.5.desc": "Optimización de los tiempos de carga, animaciones suaves y una lógica backend robusta.",
    "about.meth.6.title": "Infraestructura Escalable",
    "about.meth.6.desc": "Fundamentos nativos de la nube construidos para manejar a millones de usuarios.",
    "about.meth.7.title": "Talento de Élite",
    "about.meth.7.desc": "Nuestro equipo está formado por el 1% de las mejores mentes de la ingeniería mundial.",
    "about.meth.8.title": "Estándar Premium",
    "about.meth.8.desc": "Compromiso inquebrantable con la excelencia digital en todo lo que hacemos.",
    "about.journey.badge": "NUESTRO VIAJE HASTA AHORA",
    "about.journey.title.p1": "El camino de la",
    "about.journey.title.p2": "artesanía",
    "about.journey.1.title": "La Chispa",
    "about.journey.1.sub": "Interrumpiendo el Modelo de Agencia",
    "about.journey.1.desc": "Softcr8ors se fundó bajo una premisa simple: eliminar a los intermediarios y la burocracia corporativa. Contratamos a ingenieros y diseñadores de élite para construir un estudio de alto rendimiento.",
    "about.journey.1.stat": "Proyectos Iniciales Construidos",
    "about.journey.2.title": "Hipercrecimiento",
    "about.journey.2.sub": "Escalando la Calidad en Todo el Mundo",
    "about.journey.2.desc": "Ampliamos nuestros horizontes en tres continentes, demostrando que nuestras prácticas de código limpio y diseños obsesionados con la estética resuenan a nivel mundial. Refinamos nuestra pila tecnológica.",
    "about.journey.2.stat": "Clientes Globales Atendidos",
    "about.journey.3.title": "Tecnología de Próxima Generación",
    "about.journey.3.sub": "IA Pionera y UI Dinámica",
    "about.journey.3.desc": "Integrando arquitecturas visuales modernas, animaciones de alto rendimiento y diseño predictivo de productos. Consolidamos nuestro nombre como estándar premium.",
    "about.journey.3.stat": "Productos Lanzados",
    "about.journey.4.title": "El Estándar del Futuro",
    "about.journey.4.sub": "Excelencia sin Concesiones",
    "about.journey.4.desc": "Hoy, Softcr8ors se erige como el estándar de oro para el desarrollo premium. Continuamos redefiniendo los límites de la experiencia del usuario y la artesanía premium.",
    "about.journey.4.stat": "Tasa de Retención %",
    "about.cta.title.p1": "¿Listo para",
    "about.cta.title.p2": "transformar",
    "about.cta.title.p3": "su negocio?",
    "about.cta.desc": "Comience a construir su ecosistema digital con Softcr8ors. Deje que nuestro equipo de ingeniería de élite dé vida a su visión.",
    "about.cta.btn": "Iniciar un Proyecto"
}

fr = {
    "about.hero.title.p1": "Révolutionner",
    "about.hero.title.p2": "les Entreprises",
    "about.hero.title.p3": "avec",
    "about.hero.title.p4": "des Innovations",
    "about.hero.title.p5": "Numériques",
    "about.hero.desc": "Nous transformons des idées audacieuses en produits et stratégies numériques disruptifs pour stimuler une croissance exponentielle pour les Startups et les Entreprises à l'échelle mondiale.",
    "about.hero.badge.1": "Agence Numérique Premium",
    "about.hero.badge.2": "Portée Mondiale",
    "about.hero.badge.3": "Primé",
    "about.who.title.p1": "Qui",
    "about.who.title.p2": "Nous",
    "about.who.title.p3": "Sommes",
    "about.who.desc.1": "Softcr8ors est un leader mondial innovant dans le développement de logiciels et le conseil. Avec une équipe solide répartie dans plusieurs pays, nous établissons une présence puissante pour servir efficacement nos clients. Notre équipe d'ingénierie d'élite a toujours fourni des solutions performantes pour des entreprises de toutes tailles, des sociétés Fortune 500 aux startups licornes disruptives.",
    "about.who.desc.2": "L'innovation est au cœur de notre ADN. Nous repoussons constamment les limites du possible, en exploitant les technologies émergentes et les cadres modernes pour fournir un développement de pointe.",
    "about.val.badge": "LA FONDATION",
    "about.val.title.p1": "Mission, Vision &",
    "about.val.title.p2": "Valeurs",
    "about.val.1.title": "Notre Vision",
    "about.val.1.desc": "Devenir le choix numéro un des entreprises en proposant des solutions numériques innovantes à l'échelle mondiale.",
    "about.val.2.title": "Notre Mission",
    "about.val.2.desc": "Accélérer l'adoption de nouvelles technologies et résoudre des problèmes complexes grâce à l'innovation numérique.",
    "about.val.3.title": "Excellence",
    "about.val.3.desc": "Nous ne faisons jamais de compromis sur la qualité de notre code ou la perfection de notre esthétique.",
    "about.val.4.title": "Intégrité",
    "about.val.4.desc": "Transparence absolue avec nos clients, en établissant des partenariats basés sur la confiance et les résultats.",
    "about.stats.1": "L'année de création de notre entreprise",
    "about.stats.2": "Le nombre de spécialistes dans notre entreprise",
    "about.stats.3": "Projets mis en œuvre pour nos clients",
    "about.stats.4": "Nous offrons une garantie de 5 ans sur tous nos services",
    "about.meth.badge": "LA MÉTHODOLOGIE",
    "about.meth.title.p1": "Comment nous changeons le",
    "about.meth.title.p2": "paradigme",
    "about.meth.1.title": "Architecture Propre",
    "about.meth.1.desc": "Nous écrivons un code modulaire et évolutif garantissant une maintenabilité absolue.",
    "about.meth.2.title": "Design de Précision",
    "about.meth.2.desc": "Chaque pixel est conçu avec une obsession pour l'esthétique premium.",
    "about.meth.3.title": "Haute Vitesse",
    "about.meth.3.desc": "Prototypage et déploiement rapides sans compromis sur la qualité.",
    "about.meth.4.title": "Alignement Direct",
    "about.meth.4.desc": "Vous parlez directement aux ingénieurs qui construisent votre plateforme.",
    "about.meth.5.title": "La Performance d'Abord",
    "about.meth.5.desc": "Optimisation des temps de chargement, animations fluides et logique back-end robuste.",
    "about.meth.6.title": "Infrastructure Évolutive",
    "about.meth.6.desc": "Des bases cloud-natives conçues pour gérer des millions d'utilisateurs.",
    "about.meth.7.title": "Talent d'Élite",
    "about.meth.7.desc": "Notre équipe est composée des 1% meilleurs esprits d'ingénierie mondiaux.",
    "about.meth.8.title": "Standard Premium",
    "about.meth.8.desc": "Engagement inébranlable envers l'excellence numérique dans tout ce que nous faisons.",
    "about.journey.badge": "NOTRE PARCOURS JUSQU'À PRÉSENT",
    "about.journey.title.p1": "Le chemin de",
    "about.journey.title.p2": "l'artisanat",
    "about.journey.1.title": "L'Étincelle",
    "about.journey.1.sub": "Perturber le Modèle d'Agence",
    "about.journey.1.desc": "Softcr8ors a été fondé sur un principe simple : éliminer les intermédiaires et la bureaucratie des entreprises. Nous avons embauché des ingénieurs et des concepteurs d'élite pour construire un studio performant.",
    "about.journey.1.stat": "Projets Initiaux Construits",
    "about.journey.2.title": "Hyper-Croissance",
    "about.journey.2.sub": "Mettre la Qualité à l'Échelle dans le Monde Entier",
    "about.journey.2.desc": "Nous avons élargi nos horizons sur trois continents, prouvant que nos pratiques de code propre et nos conceptions obsédées par l'esthétique résonnent à l'échelle mondiale. Nous avons affiné notre pile technologique.",
    "about.journey.2.stat": "Clients Mondiaux Servis",
    "about.journey.3.title": "Technologie Nouvelle Génération",
    "about.journey.3.sub": "Pionnier de l'IA et de l'UI Dynamique",
    "about.journey.3.desc": "Intégration d'architectures visuelles modernes, d'animations haute performance et de conception de produits prédictive. Nous avons consolidé notre nom comme standard premium.",
    "about.journey.3.stat": "Produits Lancés",
    "about.journey.4.title": "Le Standard du Futur",
    "about.journey.4.sub": "L'Excellence sans Compromis",
    "about.journey.4.desc": "Aujourd'hui, Softcr8ors est la référence en matière de développement premium. Nous continuons à redéfinir les limites de l'expérience utilisateur et de l'artisanat de qualité supérieure.",
    "about.journey.4.stat": "Taux de Rétention %",
    "about.cta.title.p1": "Prêt à",
    "about.cta.title.p2": "transformer",
    "about.cta.title.p3": "votre entreprise?",
    "about.cta.desc": "Commencez à construire votre écosystème numérique avec Softcr8ors. Laissez notre équipe d'ingénieurs d'élite donner vie à votre vision.",
    "about.cta.btn": "Démarrer un Projet"
}

zh = {
    "about.hero.title.p1": "用数字创新",
    "about.hero.title.p2": "变革",
    "about.hero.title.p3": "企业",
    "about.hero.title.p4": "",
    "about.hero.title.p5": "",
    "about.hero.desc": "我们将大胆的想法转化为具有破坏性的数字产品和策略，以推动全球初创企业和企业的指数级增长。",
    "about.hero.badge.1": "高级数字代理商",
    "about.hero.badge.2": "全球覆盖",
    "about.hero.badge.3": "屡获殊荣",
    "about.who.title.p1": "我们",
    "about.who.title.p2": "是谁",
    "about.who.title.p3": "",
    "about.who.desc.1": "Softcr8ors 是软件开发和咨询领域的一家创新的全球领导者。我们的强大团队遍布多个国家，建立了强大的影响力，以有效地为客户服务。我们的精英工程团队始终如一地为各种规模的公司提供高性能解决方案，从财富 500 强企业到颠覆性的独角兽初创企业。",
    "about.who.desc.2": "创新是我们 DNA 的核心。我们不断突破可能性的界限，利用新兴技术和现代框架提供前沿的开发。",
    "about.val.badge": "我们的基础",
    "about.val.title.p1": "使命、愿景和",
    "about.val.title.p2": "价值观",
    "about.val.1.title": "我们的愿景",
    "about.val.1.desc": "成为企业在全球范围内提供创新数字解决方案的首选。",
    "about.val.2.title": "我们的使命",
    "about.val.2.desc": "加速新技术的采用，并通过数字创新解决复杂问题。",
    "about.val.3.title": "卓越",
    "about.val.3.desc": "我们从不在代码质量或美学完美上妥协。",
    "about.val.4.title": "诚信",
    "about.val.4.desc": "对客户绝对透明，建立基于信任和结果的合作伙伴关系。",
    "about.stats.1": "我们公司成立的年份",
    "about.stats.2": "我们公司的专家人数",
    "about.stats.3": "为我们的客户实施的项目",
    "about.stats.4": "我们对所有服务提供 5 年保证",
    "about.meth.badge": "方法论",
    "about.meth.title.p1": "我们如何改变",
    "about.meth.title.p2": "范式",
    "about.meth.1.title": "干净的架构",
    "about.meth.1.desc": "我们编写模块化、可扩展的代码，确保绝对的可维护性。",
    "about.meth.2.title": "精准设计",
    "about.meth.2.desc": "每一个像素都倾注了对高级美学的执着追求。",
    "about.meth.3.title": "高速",
    "about.meth.3.desc": "在不影响质量的情况下快速进行原型设计和部署。",
    "about.meth.4.title": "直接对接",
    "about.meth.4.desc": "您可以直接与构建平台的工程师交谈。",
    "about.meth.5.title": "性能至上",
    "about.meth.5.desc": "优化加载时间、流畅的动画和强大的后端逻辑。",
    "about.meth.6.title": "可扩展的基础设施",
    "about.meth.6.desc": "为处理数百万用户而构建的云原生基础。",
    "about.meth.7.title": "精英人才",
    "about.meth.7.desc": "我们的团队由全球前 1% 的工程人才组成。",
    "about.meth.8.title": "高级标准",
    "about.meth.8.desc": "在我们的所有工作中，坚定不移地致力于数字卓越。",
    "about.journey.badge": "我们迄今的旅程",
    "about.journey.title.p1": "工艺",
    "about.journey.title.p2": "之路",
    "about.journey.1.title": "火花",
    "about.journey.1.sub": "颠覆代理模式",
    "about.journey.1.desc": "Softcr8ors 的成立基于一个简单的前提：消除中间商和企业官僚主义。我们聘请了精英工程师和设计师来打造一个高性能的工作室。",
    "about.journey.1.stat": "初始构建项目",
    "about.journey.2.title": "高速增长",
    "about.journey.2.sub": "在全球范围内扩展质量",
    "about.journey.2.desc": "我们将视野扩展到了三大洲，证明了我们清晰的代码实践和痴迷于美学的设计在全球范围内引起了共鸣。我们改进了我们的技术栈。",
    "about.journey.2.stat": "服务的全球客户",
    "about.journey.3.title": "下一代技术",
    "about.journey.3.sub": "开创 AI 和动态 UI",
    "about.journey.3.desc": "集成现代视觉架构、高性能动画和预测性产品设计。我们巩固了作为高级标准的声誉。",
    "about.journey.3.stat": "推出的产品",
    "about.journey.4.title": "未来的标准",
    "about.journey.4.sub": "毫不妥协的卓越",
    "about.journey.4.desc": "今天，Softcr8ors 是高级开发的黄金标准。我们继续重新定义用户体验和高级工艺的界限。",
    "about.journey.4.stat": "留存率 %",
    "about.cta.title.p1": "准备好",
    "about.cta.title.p2": "变革",
    "about.cta.title.p3": "您的业务了吗？",
    "about.cta.desc": "与 Softcr8ors 一起构建您的数字生态系统。让我们精锐的工程团队将您的愿景变为现实。",
    "about.cta.btn": "启动项目"
}

hi = {
    "about.hero.title.p1": "डिजिटल नवाचारों के साथ",
    "about.hero.title.p2": "व्यवसायों",
    "about.hero.title.p3": "में",
    "about.hero.title.p4": "क्रांति",
    "about.hero.title.p5": "लाना",
    "about.hero.desc": "हम विश्व स्तर पर स्टार्टअप्स और उद्यमों के लिए घातीय वृद्धि को चलाने के लिए साहसिक विचारों को विघटनकारी डिजिटल उत्पादों और रणनीतियों में बदलते हैं।",
    "about.hero.badge.1": "प्रीमियम डिजिटल एजेंसी",
    "about.hero.badge.2": "वैश्विक पहुंच",
    "about.hero.badge.3": "पुरस्कार विजेता",
    "about.who.title.p1": "हम",
    "about.who.title.p2": "कौन",
    "about.who.title.p3": "हैं",
    "about.who.desc.1": "सॉफ्टक्रीएटर्स सॉफ्टवेयर विकास और परामर्श में एक अभिनव वैश्विक नेता है। कई देशों में फैली एक मजबूत टीम के साथ, हम अपने ग्राहकों की प्रभावी ढंग से सेवा करने के लिए एक शक्तिशाली उपस्थिति स्थापित करते हैं। हमारे संभ्रांत इंजीनियरिंग दस्ते ने फॉर्च्यून 500 निगमों से लेकर विघटनकारी गेंडा स्टार्टअप्स तक, सभी आकार की कंपनियों के लिए लगातार उच्च प्रदर्शन वाले समाधान प्रदान किए हैं।",
    "about.who.desc.2": "नवाचार हमारे डीएनए के बिल्कुल मूल में है। हम लगातार अत्याधुनिक विकास प्रदान करने के लिए उभरती प्रौद्योगिकियों और आधुनिक ढांचे का दोहन करते हुए, जो संभव है उसकी सीमाओं को आगे बढ़ाते हैं।",
    "about.val.badge": "नींव",
    "about.val.title.p1": "मिशन, दृष्टि और",
    "about.val.title.p2": "मूल्य",
    "about.val.1.title": "हमारा दृष्टिकोण",
    "about.val.1.desc": "विश्व स्तर पर अभिनव डिजिटल समाधान पेश करने में व्यवसायों के लिए नंबर एक विकल्प बनना।",
    "about.val.2.title": "हमारा मिशन",
    "about.val.2.desc": "नई प्रौद्योगिकियों को अपनाने में तेजी लाना और डिजिटल नवाचार के साथ जटिल मुद्दों को हल करना।",
    "about.val.3.title": "उत्कृष्टता",
    "about.val.3.desc": "हम अपने कोड की गुणवत्ता या अपने सौंदर्यशास्त्र की पूर्णता से कभी समझौता नहीं करते हैं।",
    "about.val.4.title": "अखंडता",
    "about.val.4.desc": "अपने ग्राहकों के साथ पूर्ण पारदर्शिता, विश्वास और परिणामों के आधार पर साझेदारी का निर्माण।",
    "about.stats.1": "जिस वर्ष हमारी कंपनी की स्थापना हुई थी",
    "about.stats.2": "हमारी कंपनी में विशेषज्ञों की संख्या",
    "about.stats.3": "हमारे ग्राहकों के लिए लागू परियोजनाएं",
    "about.stats.4": "हम अपनी सभी सेवाओं पर 5 साल की गारंटी देते हैं",
    "about.meth.badge": "कार्यप्रणाली",
    "about.meth.title.p1": "हम प्रतिमान को कैसे",
    "about.meth.title.p2": "बदलते हैं",
    "about.meth.1.title": "स्वच्छ वास्तुकला",
    "about.meth.1.desc": "हम पूर्ण रखरखाव सुनिश्चित करते हुए मॉड्यूलर, स्केलेबल कोड लिखते हैं।",
    "about.meth.2.title": "सटीक डिजाइन",
    "about.meth.2.desc": "हर पिक्सेल प्रीमियम सौंदर्यशास्त्र के जुनून के साथ तैयार किया गया है।",
    "about.meth.3.title": "उच्च वेग",
    "about.meth.3.desc": "गुणवत्ता से समझौता किए बिना तेजी से प्रोटोटाइप और तैनाती।",
    "about.meth.4.title": "प्रत्यक्ष संरेखण",
    "about.meth.4.desc": "आप सीधे अपने प्लेटफ़ॉर्म बनाने वाले इंजीनियरों से बात करते हैं।",
    "about.meth.5.title": "प्रदर्शन पहले",
    "about.meth.5.desc": "लोड समय, चिकनी एनिमेशन और मजबूत बैकएंड तर्क का अनुकूलन।",
    "about.meth.6.title": "स्केलेबल इंफ्रास्ट्रक्चर",
    "about.meth.6.desc": "लाखों उपयोगकर्ताओं को संभालने के लिए निर्मित क्लाउड-देशी नींव।",
    "about.meth.7.title": "एलीट टैलेंट",
    "about.meth.7.desc": "हमारी टीम में शीर्ष 1% वैश्विक इंजीनियरिंग दिमाग शामिल हैं।",
    "about.meth.8.title": "प्रीमियम स्टैंडर्ड",
    "about.meth.8.desc": "हम जो कुछ भी करते हैं उसमें डिजिटल उत्कृष्टता के प्रति अटूट प्रतिबद्धता।",
    "about.journey.badge": "अब तक की हमारी यात्रा",
    "about.journey.title.p1": "शिल्प कौशल का",
    "about.journey.title.p2": "मार्ग",
    "about.journey.1.title": "द स्पार्क",
    "about.journey.1.sub": "एजेंसी मॉडल को बाधित करना",
    "about.journey.1.desc": "सॉफ्टक्रीएटर्स की स्थापना एक सरल आधार के तहत की गई थी: बिचौलिए और कॉर्पोरेट नौकरशाही को खत्म करें। हमने एक उच्च प्रदर्शन वाला स्टूडियो बनाने के लिए कुलीन इंजीनियरों और डिजाइनरों को काम पर रखा।",
    "about.journey.1.stat": "प्रारंभिक परियोजनाएं निर्मित",
    "about.journey.2.title": "हाइपर-ग्रोथ",
    "about.journey.2.sub": "दुनिया भर में गुणवत्ता को मापना",
    "about.journey.2.desc": "हमने तीन महाद्वीपों में अपने क्षितिज का विस्तार किया, यह साबित करते हुए कि हमारी स्वच्छ-कोड प्रथाएं और सौंदर्य-जुनूनी डिजाइन विश्व स्तर पर गूंजते हैं। हमने अपने टेक स्टैक को परिष्कृत किया।",
    "about.journey.2.stat": "वैश्विक ग्राहकों की सेवा की",
    "about.journey.3.title": "नेक्स्ट-जेन टेक",
    "about.journey.3.sub": "पायनियरिंग एआई और डायनेमिक यूआई",
    "about.journey.3.desc": "आधुनिक दृश्य वास्तुकला, उच्च-प्रदर्शन एनिमेशन और पूर्वानुमानित उत्पाद डिजाइन को एकीकृत करना। हमने प्रीमियम मानक के रूप में अपना नाम मजबूत किया।",
    "about.journey.3.stat": "उत्पाद लॉन्च किए गए",
    "about.journey.4.title": "भविष्य का मानक",
    "about.journey.4.sub": "समझौता न करने वाली उत्कृष्टता",
    "about.journey.4.desc": "आज, सॉफ्टक्रीएटर्स प्रीमियम विकास के लिए स्वर्ण मानक के रूप में खड़ा है। हम उपयोगकर्ता अनुभव और प्रीमियम शिल्प कौशल की सीमाओं को फिर से परिभाषित करना जारी रखते हैं।",
    "about.journey.4.stat": "प्रतिधारण दर %",
    "about.cta.title.p1": "क्या आप अपने व्यवसाय को",
    "about.cta.title.p2": "बदलने",
    "about.cta.title.p3": "के लिए तैयार हैं?",
    "about.cta.desc": "सॉफ्टक्रीएटर्स के साथ अपना डिजिटल पारिस्थितिकी तंत्र बनाना शुरू करें। हमारी संभ्रांत इंजीनियरिंग टीम को आपके दृष्टिकोण को जीवन में लाने दें।",
    "about.cta.btn": "एक परियोजना शुरू करें"
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

with open('app/about/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# Timelines
page = page.replace('title: "The Spark"', 'title: t("about.journey.1.title")')
page = page.replace('subtitle: "Disrupting the Agency Model"', 'subtitle: t("about.journey.1.sub")')
page = page.replace('description: "Softcr8ors was founded under a simple premise: eliminate the middleman and corporate bureaucracy. We hired elite engineers and designers to build a high-performance studio."', 'description: t("about.journey.1.desc")')
page = page.replace('label: "Initial Projects Built"', 'label: t("about.journey.1.stat")')

page = page.replace('title: "Hyper-Growth"', 'title: t("about.journey.2.title")')
page = page.replace('subtitle: "Scaling Quality Worldwide"', 'subtitle: t("about.journey.2.sub")')
page = page.replace('description: "We expanded our horizons across three continents, proving that our clean-code practices and aesthetic-obsessed designs resonate globally. We refined our tech stack."', 'description: t("about.journey.2.desc")')
page = page.replace('label: "Global Clients Served"', 'label: t("about.journey.2.stat")')

page = page.replace('title: "Next-Gen Tech"', 'title: t("about.journey.3.title")')
page = page.replace('subtitle: "Pioneering AI & Dynamic UI"', 'subtitle: t("about.journey.3.sub")')
page = page.replace('description: "Integrating modern visual architectures, high-performance animations, and predictive product design. We solidified our name as the premium standard."', 'description: t("about.journey.3.desc")')
page = page.replace('label: "Products Launched"', 'label: t("about.journey.3.stat")')

page = page.replace('title: "The Future Standard"', 'title: t("about.journey.4.title")')
page = page.replace('subtitle: "Uncompromising Excellence"', 'subtitle: t("about.journey.4.sub")')
page = page.replace('description: "Today, Softcr8ors stands as the gold standard for premium development. We continue to redefine the boundaries of user experience and premium craftsmanship."', 'description: t("about.journey.4.desc")')
page = page.replace('label: "Retention Rate %"', 'label: t("about.journey.4.stat")')

# Methodology
page = page.replace('title: "Clean Architecture"', 'title: t("about.meth.1.title")')
page = page.replace('desc: "We write modular, scalable code ensuring absolute maintainability."', 'desc: t("about.meth.1.desc")')
page = page.replace('title: "Precision Design"', 'title: t("about.meth.2.title")')
page = page.replace('desc: "Every pixel is crafted with an obsession for premium aesthetics."', 'desc: t("about.meth.2.desc")')
page = page.replace('title: "High Velocity"', 'title: t("about.meth.3.title")')
page = page.replace('desc: "Rapid prototyping and deployment without compromising quality."', 'desc: t("about.meth.3.desc")')
page = page.replace('title: "Direct Alignment"', 'title: t("about.meth.4.title")')
page = page.replace('desc: "You speak directly to the engineers building your platform."', 'desc: t("about.meth.4.desc")')
page = page.replace('title: "Performance First"', 'title: t("about.meth.5.title")')
page = page.replace('desc: "Optimizing load times, smooth animations, and robust backend logic."', 'desc: t("about.meth.5.desc")')
page = page.replace('title: "Scalable Infrastructure"', 'title: t("about.meth.6.title")')
page = page.replace('desc: "Cloud-native foundations built to handle millions of users."', 'desc: t("about.meth.6.desc")')
page = page.replace('title: "Elite Talent"', 'title: t("about.meth.7.title")')
page = page.replace('desc: "Our team consists of top 1% global engineering minds."', 'desc: t("about.meth.7.desc")')
page = page.replace('title: "Premium Standard"', 'title: t("about.meth.8.title")')
page = page.replace('desc: "Unwavering commitment to digital excellence in everything we do."', 'desc: t("about.meth.8.desc")')

# Values
page = page.replace('title: "Our Vision"', 'title: t("about.val.1.title")')
page = page.replace('desc: "To become the number one choice for businesses in offering innovative digital solutions globally."', 'desc: t("about.val.1.desc")')
page = page.replace('title: "Our Mission"', 'title: t("about.val.2.title")')
page = page.replace('desc: "Accelerate the adoption of new technologies and solve complex issues with digital innovation."', 'desc: t("about.val.2.desc")')
page = page.replace('title: "Excellence"', 'title: t("about.val.3.title")')
page = page.replace('desc: "We never compromise on the quality of our code or the perfection of our aesthetics."', 'desc: t("about.val.3.desc")')
page = page.replace('title: "Integrity"', 'title: t("about.val.4.title")')
page = page.replace('desc: "Absolute transparency with our clients, building partnerships based on trust and results."', 'desc: t("about.val.4.desc")')

# Stats
page = page.replace('label: "The year our company was founded"', 'label: t("about.stats.1")')
page = page.replace('label: "The number of specialists in our company"', 'label: t("about.stats.2")')
page = page.replace('label: "Implemented projects for our clients"', 'label: t("about.stats.3")')
page = page.replace('label: "We give a 5 year guarantee on all our services"', 'label: t("about.stats.4")')

# Text replaces
page = page.replace('Revolutionizing <span', '{t("about.hero.title.p1")} <span')
page = page.replace('>Businesses</span> with <span', '>{t("about.hero.title.p2")}</span> {t("about.hero.title.p3")} <span')
page = page.replace('>Digital</span> Innovations', '>{t("about.hero.title.p4")}</span> {t("about.hero.title.p5")}')
page = page.replace('We transform bold ideas into disruptive digital products and strategies to drive exponential growth for Startups and Enterprises globally.', '{t("about.hero.desc")}')
page = page.replace('Premium Digital Agency', '{t("about.hero.badge.1")}')
page = page.replace('Global Reach', '{t("about.hero.badge.2")}')
page = page.replace('Award Winning', '{t("about.hero.badge.3")}')

page = page.replace('Who <span', '{t("about.who.title.p1")} <span')
page = page.replace('>We</span> Are', '>{t("about.who.title.p2")}</span> {t("about.who.title.p3")}')
page = page.replace('Softcr8ors is an innovative global leader in software development and consultancy. With a robust team spread across multiple countries, we establish a powerful presence to serve our clients effectively. Our elite engineering squad has consistently delivered high-performance solutions for companies of all sizes, from Fortune 500 corporations to disruptive unicorn startups.', '{t("about.who.desc.1")}')
page = page.replace('Innovation is at the absolute core of our DNA. We constantly push the boundaries of what\'s possible, harnessing emerging technologies and modern frameworks to provide cutting-edge development.', '{t("about.who.desc.2")}')

page = page.replace('text="THE FOUNDATION"', 'text={t("about.val.badge")}')
page = page.replace('Mission, Vision &amp; <span', '{t("about.val.title.p1")} <span')
page = page.replace('Mission, Vision & <span', '{t("about.val.title.p1")} <span')
page = page.replace('>Values</span>', '>{t("about.val.title.p2")}</span>')

page = page.replace('text="THE CR8ORS METHODOLOGY"', 'text={t("about.meth.badge")}')
page = page.replace('How we shift the <span', '{t("about.meth.title.p1")} <span')
page = page.replace('>paradigm</span>', '>{t("about.meth.title.p2")}</span>')

page = page.replace('text="OUR JOURNEY SO FAR"', 'text={t("about.journey.badge")}')
page = page.replace('The path of <span', '{t("about.journey.title.p1")} <span')
page = page.replace('>craftsmanship</span>', '>{t("about.journey.title.p2")}</span>')

page = page.replace('Ready to <span', '{t("about.cta.title.p1")} <span')
page = page.replace('>transform</span> your business?', '>{t("about.cta.title.p2")}</span> {t("about.cta.title.p3")}')
page = page.replace('Start building your digital ecosystem with Softcr8ors. Let our elite engineering team bring your vision to life.', '{t("about.cta.desc")}')
page = page.replace('Start a Project <ArrowRight', '{t("about.cta.btn")} <ArrowRight')

with open('app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
