import json
import codecs
import re

en = {
    "process.dev.badge": "How We Work",
    "process.dev.title": "Our Development",
    "process.dev.subtitle": "A transparent, 4-stage agile framework designed to turn your visionary ideas into market-ready realities.",
    "process.dev.step1.title": "Discovery & Plan",
    "process.dev.step1.desc": "We analyze your requirements and formulate a winning strategic roadmap.",
    "process.dev.step2.title": "UI/UX Design",
    "process.dev.step2.desc": "Crafting intuitive user journeys and stunning pixel-perfect interfaces.",
    "process.dev.step3.title": "Development",
    "process.dev.step3.desc": "Writing clean, scalable code with agile sprints and continuous updates.",
    "process.dev.step4.title": "QA & Launch",
    "process.dev.step4.desc": "Rigorous testing followed by seamless deployment to production."
}

ur = {
    "process.dev.badge": "ہم کیسے کام کرتے ہیں",
    "process.dev.title": "ہمارا ترقیاتی",
    "process.dev.subtitle": "ایک شفاف، 4-مرحلوں پر مشتمل ایجائل فریم ورک جو آپ کے خیالات کو مارکیٹ کے لیے تیار حقیقت میں بدلنے کے لیے ڈیزائن کیا گیا ہے۔",
    "process.dev.step1.title": "دریافت اور منصوبہ بندی",
    "process.dev.step1.desc": "ہم آپ کی ضروریات کا تجزیہ کرتے ہیں اور ایک کامیاب اسٹریٹجک روڈ میپ تیار کرتے ہیں۔",
    "process.dev.step2.title": "UI/UX ڈیزائن",
    "process.dev.step2.desc": "بدیہی صارف کے سفر اور شاندار پکسل پرفیکٹ انٹرفیس تیار کرنا۔",
    "process.dev.step3.title": "ڈویلپمنٹ",
    "process.dev.step3.desc": "ایجائل اسپرنٹس اور مسلسل اپ ڈیٹس کے ساتھ صاف، قابل توسیع کوڈ لکھنا۔",
    "process.dev.step4.title": "ٹیسٹنگ اور لانچ",
    "process.dev.step4.desc": "سخت ٹیسٹنگ کے بعد پروڈکشن میں ہموار لانچنگ۔"
}

ar = {
    "process.dev.badge": "كيف نعمل",
    "process.dev.title": "عملية التطوير",
    "process.dev.subtitle": "إطار عمل رشيق وشفاف من ٤ مراحل مصمم لتحويل أفكارك إلى حقائق جاهزة للسوق.",
    "process.dev.step1.title": "الاكتشاف والخطة",
    "process.dev.step1.desc": "نحلل متطلباتك ونصيغ خارطة طريق استراتيجية ناجحة.",
    "process.dev.step2.title": "تصميم UI/UX",
    "process.dev.step2.desc": "صياغة رحلات مستخدم بديهية وواجهات مذهلة ومثالية البكسل.",
    "process.dev.step3.title": "التطوير",
    "process.dev.step3.desc": "كتابة كود نظيف وقابل للتطوير مع سباقات رشيقة وتحديثات مستمرة.",
    "process.dev.step4.title": "ضمان الجودة والإطلاق",
    "process.dev.step4.desc": "اختبار صارم يتبعه نشر سلس في الإنتاج."
}

es = {
    "process.dev.badge": "Cómo Trabajamos",
    "process.dev.title": "Nuestro Desarrollo",
    "process.dev.subtitle": "Un marco ágil y transparente de 4 etapas diseñado para convertir tus ideas visionarias en realidades listas para el mercado.",
    "process.dev.step1.title": "Descubrimiento y Plan",
    "process.dev.step1.desc": "Analizamos tus requisitos y formulamos una hoja de ruta estratégica ganadora.",
    "process.dev.step2.title": "Diseño UI/UX",
    "process.dev.step2.desc": "Creando viajes de usuario intuitivos e interfaces impresionantes y perfectas al píxel.",
    "process.dev.step3.title": "Desarrollo",
    "process.dev.step3.desc": "Escribiendo código limpio y escalable con sprints ágiles y actualizaciones continuas.",
    "process.dev.step4.title": "QA y Lanzamiento",
    "process.dev.step4.desc": "Pruebas rigurosas seguidas de un despliegue perfecto en producción."
}

fr = {
    "process.dev.badge": "Comment Nous Travaillons",
    "process.dev.title": "Notre Développement",
    "process.dev.subtitle": "Un cadre agile et transparent en 4 étapes conçu pour transformer vos idées visionnaires en réalités prêtes pour le marché.",
    "process.dev.step1.title": "Découverte et Plan",
    "process.dev.step1.desc": "Nous analysons vos exigences et formulons une feuille de route stratégique gagnante.",
    "process.dev.step2.title": "Design UI/UX",
    "process.dev.step2.desc": "Création de parcours utilisateurs intuitifs et d'interfaces époustouflantes.",
    "process.dev.step3.title": "Développement",
    "process.dev.step3.desc": "Écriture de code propre et évolutif avec des sprints agiles et des mises à jour continues.",
    "process.dev.step4.title": "QA et Lancement",
    "process.dev.step4.desc": "Tests rigoureux suivis d'un déploiement transparent en production."
}

zh = {
    "process.dev.badge": "我们如何工作",
    "process.dev.title": "我们的开发",
    "process.dev.subtitle": "一个透明的、分为4个阶段的敏捷框架，旨在将您的远见卓识的理念转化为适应市场的现实。",
    "process.dev.step1.title": "发现与计划",
    "process.dev.step1.desc": "我们分析您的需求并制定制胜的战略路线图。",
    "process.dev.step2.title": "UI/UX 设计",
    "process.dev.step2.desc": "打造直观的用户旅程和令人惊叹的像素级完美界面。",
    "process.dev.step3.title": "开发",
    "process.dev.step3.desc": "通过敏捷冲刺和持续更新编写干净、可扩展的代码。",
    "process.dev.step4.title": "质量保证与发布",
    "process.dev.step4.desc": "严格的测试，然后无缝部署到生产环境。"
}

hi = {
    "process.dev.badge": "हम कैसे काम करते हैं",
    "process.dev.title": "हमारा विकास",
    "process.dev.subtitle": "आपके दूरदर्शी विचारों को बाजार के लिए तैयार वास्तविकताओं में बदलने के लिए डिज़ाइन किया गया एक पारदर्शी, 4-चरणीय फुर्तीला ढांचा।",
    "process.dev.step1.title": "खोज और योजना",
    "process.dev.step1.desc": "हम आपकी आवश्यकताओं का विश्लेषण करते हैं और एक विजयी रणनीतिक रोडमैप तैयार करते हैं।",
    "process.dev.step2.title": "UI/UX डिज़ाइन",
    "process.dev.step2.desc": "सहज उपयोगकर्ता यात्रा और आश्चर्यजनक पिक्सेल-परफेक्ट इंटरफेस तैयार करना।",
    "process.dev.step3.title": "विकास",
    "process.dev.step3.desc": "फुर्तीली स्प्रिंट और निरंतर अपडेट के साथ स्वच्छ, स्केलेबल कोड लिखना।",
    "process.dev.step4.title": "QA और लॉन्च",
    "process.dev.step4.desc": "कठोर परीक्षण और उसके बाद उत्पादन के लिए निर्बाध तैनाती।"
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

with open('components/DevelopmentProcessSection.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace(
    'import { Search, PenTool, Code2, Rocket } from "lucide-react";',
    'import { Search, PenTool, Code2, Rocket } from "lucide-react";\\nimport { useTranslation } from "@/context/LanguageContext";'
)
page = page.replace(
    'export function DevelopmentProcessSection({ iconColor }: DevelopmentProcessSectionProps) {',
    'export function DevelopmentProcessSection({ iconColor }: DevelopmentProcessSectionProps) {\\n  const { t } = useTranslation();'
)

# Replace Step Content Dynamically via translations inside the UI
# Notice the steps array is outside the component.
# To make it translatable, we should move it inside, or handle it via IDs.
# I will handle it via IDs.
page = page.replace('{step.title}', '{t(`process.dev.step${idx + 1}.title`)}')
page = page.replace('{step.desc}', '{t(`process.dev.step${idx + 1}.desc`)}')

page = page.replace('How We Work', '{t("process.dev.badge")}')
page = page.replace('Our Development <span', '{t("process.dev.title")} <span')
page = page.replace('A transparent, 4-stage agile framework designed to turn your visionary ideas into market-ready realities.', '{t("process.dev.subtitle")}')

with open('components/DevelopmentProcessSection.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
