import json
import codecs
import re

en = {
    "feature.carousel.badge": "Turn Idea Into Reality",
    "feature.carousel.text": "Experience how our highly specialized capabilities can transform your workflow and elevate your digital presence.",
    "feature.carousel.marquee.1": "HIGH PERFORMANCE",
    "feature.carousel.marquee.2": "SECURE",
    "feature.carousel.marquee.3": "SCALABLE",
    "feature.carousel.marquee.4": "GLOBAL"
}

ur = {
    "feature.carousel.badge": "خیال کو حقیقت میں بدلیں",
    "feature.carousel.text": "تجربہ کریں کہ کس طرح ہماری اعلیٰ مہارت آپ کے ورک فلو کو تبدیل کر سکتی ہے اور آپ کی ڈیجیٹل موجودگی کو بڑھا سکتی ہے۔",
    "feature.carousel.marquee.1": "اعلی کارکردگی",
    "feature.carousel.marquee.2": "محفوظ",
    "feature.carousel.marquee.3": "قابل توسیع",
    "feature.carousel.marquee.4": "عالمی"
}

ar = {
    "feature.carousel.badge": "حوّل الفكرة إلى واقع",
    "feature.carousel.text": "اكتشف كيف يمكن لقدراتنا المتخصصة للغاية أن تحول سير عملك وترتقي بوجودك الرقمي.",
    "feature.carousel.marquee.1": "أداء عالي",
    "feature.carousel.marquee.2": "آمن",
    "feature.carousel.marquee.3": "قابل للتطوير",
    "feature.carousel.marquee.4": "عالمي"
}

es = {
    "feature.carousel.badge": "Convierte Ideas en Realidad",
    "feature.carousel.text": "Experimenta cómo nuestras capacidades altamente especializadas pueden transformar tu flujo de trabajo y elevar tu presencia digital.",
    "feature.carousel.marquee.1": "ALTO RENDIMIENTO",
    "feature.carousel.marquee.2": "SEGURO",
    "feature.carousel.marquee.3": "ESCALABLE",
    "feature.carousel.marquee.4": "GLOBAL"
}

fr = {
    "feature.carousel.badge": "Transformez vos Idées en Réalité",
    "feature.carousel.text": "Découvrez comment nos capacités hautement spécialisées peuvent transformer votre flux de travail et élever votre présence numérique.",
    "feature.carousel.marquee.1": "HAUTE PERFORMANCE",
    "feature.carousel.marquee.2": "SÉCURISÉ",
    "feature.carousel.marquee.3": "ÉVOLUTIF",
    "feature.carousel.marquee.4": "MONDIAL"
}

zh = {
    "feature.carousel.badge": "将想法变为现实",
    "feature.carousel.text": "体验我们高度专业的技能如何改变您的工作流程并提升您的数字影响力。",
    "feature.carousel.marquee.1": "高性能",
    "feature.carousel.marquee.2": "安全",
    "feature.carousel.marquee.3": "可扩展",
    "feature.carousel.marquee.4": "全球化"
}

hi = {
    "feature.carousel.badge": "विचार को वास्तविकता में बदलें",
    "feature.carousel.text": "अनुभव करें कि कैसे हमारी अत्यधिक विशिष्ट क्षमताएं आपके वर्कफ़्लो को बदल सकती हैं और आपकी डिजिटल उपस्थिति को बढ़ा सकती हैं।",
    "feature.carousel.marquee.1": "उच्च प्रदर्शन",
    "feature.carousel.marquee.2": "सुरक्षित",
    "feature.carousel.marquee.3": "स्केलेबल",
    "feature.carousel.marquee.4": "वैश्विक"
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

with open('components/FeatureCarouselSection.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace(
    'import { Sparkles, Layers, Fingerprint, Zap, Globe, Cpu, Code2, Database, Activity, ArrowRight, ShieldCheck } from "lucide-react";',
    'import { Sparkles, Layers, Fingerprint, Zap, Globe, Cpu, Code2, Database, Activity, ArrowRight, ShieldCheck } from "lucide-react";\\nimport { useTranslation } from "@/context/LanguageContext";'
)
page = page.replace(
    'export function FeatureCarouselSection({ title, description, features, iconColor }: FeatureCarouselSectionProps) {',
    'export function FeatureCarouselSection({ title, description, features, iconColor }: FeatureCarouselSectionProps) {\\n  const { t } = useTranslation();'
)

page = page.replace('Turn Idea Into Reality', '{t("feature.carousel.badge")}')
page = page.replace('Experience how our highly specialized capabilities can transform your workflow and elevate your digital presence.', '{t("feature.carousel.text")}')
page = page.replace('HIGH PERFORMANCE', '{t("feature.carousel.marquee.1")}')
page = page.replace('SECURE', '{t("feature.carousel.marquee.2")}')
page = page.replace('SCALABLE', '{t("feature.carousel.marquee.3")}')
page = page.replace('GLOBAL', '{t("feature.carousel.marquee.4")}')


with open('components/FeatureCarouselSection.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
