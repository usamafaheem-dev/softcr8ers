import json
import codecs
import re

en = {
    "contact.page.hero.p1": "Let's ",
    "contact.page.hero.build": "Build",
    "contact.page.hero.p2": " Something ",
    "contact.page.hero.extraordinary": "Extraordinary",
    "contact.page.hero.desc": "Whether you're looking to launch a secure fintech platform or a headless commerce engine, our team is ready to engineer your vision.",
    "contact.page.info.title.p1": "Ready To Get Popular",
    "contact.page.info.title.p2": "Development Services",
    "contact.page.info.address": "Address",
    "contact.page.info.address.val": "1st Floor, 333-R Main Blvd, Block R Phase 2 Johar Town, Lahore, 54770",
    "contact.page.info.email": "Email Us",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "Call Us",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "Reach Out To Us"
}

ur = {
    "contact.page.hero.p1": "آئیے کچھ ",
    "contact.page.hero.build": "شاندار",
    "contact.page.hero.p2": " ",
    "contact.page.hero.extraordinary": "بنائیں",
    "contact.page.hero.desc": "چاہے آپ ایک محفوظ فنٹیک پلیٹ فارم لانچ کرنا چاہتے ہوں یا ہیڈ لیس کامرس انجن، ہماری ٹیم آپ کے وژن کو حقیقت کا روپ دینے کے لیے تیار ہے۔",
    "contact.page.info.title.p1": "بہترین ڈویلپمنٹ سروسز حاصل کرنے کے لیے",
    "contact.page.info.title.p2": "تیار ہو جائیں",
    "contact.page.info.address": "پتہ",
    "contact.page.info.address.val": "پہلی منزل، 333-R مین بلیوارڈ، بلاک R فیز 2 جوہر ٹاؤن، لاہور، 54770",
    "contact.page.info.email": "ای میل کریں",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "کال کریں",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "ہم سے رابطہ کریں"
}

ar = {
    "contact.page.hero.p1": "دعنا ",
    "contact.page.hero.build": "نبني",
    "contact.page.hero.p2": " شيئاً ",
    "contact.page.hero.extraordinary": "استثنائياً",
    "contact.page.hero.desc": "سواء كنت تتطلع إلى إطلاق منصة تقنية مالية آمنة أو محرك تجارة إلكترونية متطور، فإن فريقنا مستعد لهندسة رؤيتك.",
    "contact.page.info.title.p1": "مستعد للحصول على خدمات",
    "contact.page.info.title.p2": "تطوير رائدة",
    "contact.page.info.address": "العنوان",
    "contact.page.info.address.val": "الطابق الأول، ٣٣٣-R الشارع الرئيسي، بلوك R المرحلة ٢ جوهر تاون، لاهور، ٥٤٧٧٠",
    "contact.page.info.email": "راسلنا",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "اتصل بنا",
    "contact.page.info.phone.val": "+٩٢ ٣٢١ ٤٤٥٢٥٨٨",
    "contact.page.map.title": "تواصل معنا"
}

es = {
    "contact.page.hero.p1": "Vamos a ",
    "contact.page.hero.build": "Construir",
    "contact.page.hero.p2": " Algo ",
    "contact.page.hero.extraordinary": "Extraordinario",
    "contact.page.hero.desc": "Ya sea que busques lanzar una plataforma fintech segura o un motor de comercio headless, nuestro equipo está listo para diseñar tu visión.",
    "contact.page.info.title.p1": "Listo para Obtener Servicios de",
    "contact.page.info.title.p2": "Desarrollo Populares",
    "contact.page.info.address": "Dirección",
    "contact.page.info.address.val": "1er Piso, 333-R Main Blvd, Bloque R Fase 2 Johar Town, Lahore, 54770",
    "contact.page.info.email": "Contáctanos",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "Llámanos",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "Comunícate con Nosotros"
}

fr = {
    "contact.page.hero.p1": "Allons ",
    "contact.page.hero.build": "Construire",
    "contact.page.hero.p2": " Quelque Chose ",
    "contact.page.hero.extraordinary": "d'Extraordinaire",
    "contact.page.hero.desc": "Que vous cherchiez à lancer une plateforme fintech sécurisée ou un moteur de commerce headless, notre équipe est prête à concevoir votre vision.",
    "contact.page.info.title.p1": "Prêt à Obtenir des Services de",
    "contact.page.info.title.p2": "Développement Populaires",
    "contact.page.info.address": "Adresse",
    "contact.page.info.address.val": "1er Étage, 333-R Main Blvd, Bloc R Phase 2 Johar Town, Lahore, 54770",
    "contact.page.info.email": "Écrivez-nous",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "Appelez-nous",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "Contactez-nous"
}

zh = {
    "contact.page.hero.p1": "让我们 ",
    "contact.page.hero.build": "构建",
    "contact.page.hero.p2": " 些 ",
    "contact.page.hero.extraordinary": "非凡的东西",
    "contact.page.hero.desc": "无论您是想启动安全的金融科技平台还是无头商务引擎，我们的团队都已准备好为您实现愿景。",
    "contact.page.info.title.p1": "准备好获取流行的",
    "contact.page.info.title.p2": "开发服务",
    "contact.page.info.address": "地址",
    "contact.page.info.address.val": "1st Floor, 333-R Main Blvd, Block R Phase 2 Johar Town, Lahore, 54770",
    "contact.page.info.email": "发邮件给我们",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "打电话给我们",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "联系我们"
}

hi = {
    "contact.page.hero.p1": "चलो कुछ ",
    "contact.page.hero.build": "शानदार",
    "contact.page.hero.p2": " ",
    "contact.page.hero.extraordinary": "बनाएं",
    "contact.page.hero.desc": "चाहे आप एक सुरक्षित फिनटेक प्लेटफॉर्म लॉन्च करना चाहते हों या हेडलैस कॉमर्स इंजन, हमारी टीम आपके विज़न को इंजीनियर करने के लिए तैयार है।",
    "contact.page.info.title.p1": "सर्वश्रेष्ठ डेवलपमेंट सेवाएं प्राप्त करने के लिए",
    "contact.page.info.title.p2": "तैयार हो जाएं",
    "contact.page.info.address": "पता",
    "contact.page.info.address.val": "पहली मंजिल, 333-R मेन बुलेवार्ड, ब्लॉक R फेज 2 जोहर टाउन, लाहौर, 54770",
    "contact.page.info.email": "हमें ईमेल करें",
    "contact.page.info.email.val": "contact@softmindsol.com",
    "contact.page.info.phone": "हमें कॉल करें",
    "contact.page.info.phone.val": "+92 321 4452588",
    "contact.page.map.title": "हमसे संपर्क करें"
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

print('Updated translations.ts for contact page')
