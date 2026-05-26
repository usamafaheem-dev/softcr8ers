import json
import codecs
import re

en = {
    "join.hero.badge": "Join Our Team",
    "join.hero.title.p1": "Build the Future",
    "join.hero.title.p2": "with",
    "join.hero.desc": "We're looking for passionate individuals who want to build exceptional digital experiences. Come grow with us.",
    "join.roles.title": "Current Openings",
    "join.roles.desc": "Don't see a role that fits? Send us your resume anyway. We're always looking for great talent.",
    "join.roles.btn": "Apply Now",
    "join.form.title": "Send Us Your Resume",
    "join.form.desc": "Can't find the perfect role? Drop your resume and portfolio link below. We will reach out when a suitable position opens up.",
    "join.form.name": "Full Name",
    "join.form.email": "Email Address",
    "join.form.portfolio": "Portfolio / LinkedIn URL",
    "join.form.resume": "Upload Resume (PDF)",
    "join.form.upload": "Click to browse or drag & drop",
    "join.form.submit": "Submit Application"
}

ur = {
    "join.hero.badge": "ہماری ٹیم میں شامل ہوں",
    "join.hero.title.p1": "مستقبل بنائیں",
    "join.hero.title.p2": "ساتھ",
    "join.hero.desc": "ہمیں ایسے پرجوش افراد کی تلاش ہے جو غیر معمولی ڈیجیٹل تجربات بنانا چاہتے ہیں۔ آئیں ہمارے ساتھ ترقی کریں۔",
    "join.roles.title": "موجودہ آسامیاں",
    "join.roles.desc": "کیا آپ کو کوئی مناسب کردار نظر نہیں آ رہا؟ پھر بھی اپنا ریزیومے بھیجیں۔ ہم ہمیشہ بہترین ٹیلنٹ کی تلاش میں رہتے ہیں۔",
    "join.roles.btn": "ابھی اپلائی کریں",
    "join.form.title": "ہمیں اپنا ریزیومے بھیجیں",
    "join.form.desc": "کیا آپ کو کوئی مناسب کردار نظر نہیں آ رہا؟ پھر بھی اپنا ریزیومے اور پورٹ فولیو لنک نیچے بھیجیں۔ جب کوئی مناسب پوزیشن کھلے گی تو ہم آپ سے رابطہ کریں گے۔",
    "join.form.name": "پورا نام",
    "join.form.email": "ای میل ایڈریس",
    "join.form.portfolio": "پورٹ فولیو / لنکڈ ان یو آر ایل",
    "join.form.resume": "ریزیومے اپ لوڈ کریں (PDF)",
    "join.form.upload": "براؤز کرنے کے لیے کلک کریں یا ڈریگ اینڈ ڈراپ کریں",
    "join.form.submit": "درخواست جمع کرائیں"
}

ar = {
    "join.hero.badge": "انضم إلى فريقنا",
    "join.hero.title.p1": "ابنِ المستقبل",
    "join.hero.title.p2": "مع",
    "join.hero.desc": "نحن نبحث عن أفراد شغوفين يرغبون في بناء تجارب رقمية استثنائية. تعال وانمو معنا.",
    "join.roles.title": "الوظائف الحالية",
    "join.roles.desc": "لا ترى دوراً يناسبك؟ أرسل سيرتك الذاتية على أي حال. نحن نبحث دائماً عن مواهب عظيمة.",
    "join.roles.btn": "قدم الآن",
    "join.form.title": "أرسل سيرتك الذاتية",
    "join.form.desc": "لا ترى دوراً يناسبك؟ أرسل سيرتك الذاتية ورابط محفظتك أدناه. سنتواصل معك عندما تفتح وظيفة مناسبة.",
    "join.form.name": "الاسم الكامل",
    "join.form.email": "البريد الإلكتروني",
    "join.form.portfolio": "محفظة / رابط LinkedIn",
    "join.form.resume": "تحميل السيرة الذاتية (PDF)",
    "join.form.upload": "انقر للتصفح أو اسحب وأفلت",
    "join.form.submit": "إرسال الطلب"
}

es = {
    "join.hero.badge": "Únete a Nuestro Equipo",
    "join.hero.title.p1": "Construye el Futuro",
    "join.hero.title.p2": "con",
    "join.hero.desc": "Buscamos personas apasionadas que quieran construir experiencias digitales excepcionales. Ven a crecer con nosotros.",
    "join.roles.title": "Vacantes Actuales",
    "join.roles.desc": "¿No ves un rol que se ajuste? Envía tu currículum de todos modos. Siempre buscamos gran talento.",
    "join.roles.btn": "Aplicar Ahora",
    "join.form.title": "Envíanos tu Currículum",
    "join.form.desc": "¿No puedes encontrar el rol perfecto? Deja tu currículum y enlace de portafolio a continuación. Nos pondremos en contacto cuando se abra una posición adecuada.",
    "join.form.name": "Nombre Completo",
    "join.form.email": "Correo Electrónico",
    "join.form.portfolio": "Portafolio / URL de LinkedIn",
    "join.form.resume": "Subir Currículum (PDF)",
    "join.form.upload": "Haz clic para buscar o arrastra y suelta",
    "join.form.submit": "Enviar Solicitud"
}

fr = {
    "join.hero.badge": "Rejoignez Notre Équipe",
    "join.hero.title.p1": "Construisez l'Avenir",
    "join.hero.title.p2": "avec",
    "join.hero.desc": "Nous recherchons des personnes passionnées qui souhaitent créer des expériences numériques exceptionnelles. Venez grandir avec nous.",
    "join.roles.title": "Postes à Pourvoir",
    "join.roles.desc": "Vous ne voyez pas de rôle qui vous convient? Envoyez-nous quand même votre CV. Nous sommes toujours à la recherche de grands talents.",
    "join.roles.btn": "Postuler Maintenant",
    "join.form.title": "Envoyez-nous votre CV",
    "join.form.desc": "Vous ne trouvez pas le rôle parfait? Laissez votre CV et le lien de votre portfolio ci-dessous. Nous vous contacterons dès qu'un poste approprié s'ouvrira.",
    "join.form.name": "Nom Complet",
    "join.form.email": "Adresse E-mail",
    "join.form.portfolio": "Portfolio / URL LinkedIn",
    "join.form.resume": "Télécharger le CV (PDF)",
    "join.form.upload": "Cliquez pour parcourir ou glissez-déposez",
    "join.form.submit": "Soumettre la Candidature"
}

zh = {
    "join.hero.badge": "加入我们的团队",
    "join.hero.title.p1": "共创未来",
    "join.hero.title.p2": "与",
    "join.hero.desc": "我们正在寻找热情的个人，他们希望创造卓越的数字体验。来与我们一起成长吧。",
    "join.roles.title": "当前空缺",
    "join.roles.desc": "没有看到适合的角色？仍然向我们发送您的简历。我们一直在寻找优秀的人才。",
    "join.roles.btn": "立即申请",
    "join.form.title": "将您的简历发送给我们",
    "join.form.desc": "找不到完美的角色？在下面留下您的简历和作品集链接。当有合适的职位空缺时，我们会与您联系。",
    "join.form.name": "全名",
    "join.form.email": "电子邮件地址",
    "join.form.portfolio": "作品集 / 领英链接",
    "join.form.resume": "上传简历 (PDF)",
    "join.form.upload": "点击浏览或拖放",
    "join.form.submit": "提交申请"
}

hi = {
    "join.hero.badge": "हमारी टीम में शामिल हों",
    "join.hero.title.p1": "भविष्य का निर्माण करें",
    "join.hero.title.p2": "के साथ",
    "join.hero.desc": "हम ऐसे उत्साही व्यक्तियों की तलाश कर रहे हैं जो असाधारण डिजिटल अनुभव बनाना चाहते हैं। आएं और हमारे साथ बढ़ें।",
    "join.roles.title": "वर्तमान अवसर",
    "join.roles.desc": "क्या आपको कोई उपयुक्त भूमिका नहीं दिख रही है? फिर भी हमें अपना बायोडाटा भेजें। हम हमेशा महान प्रतिभाओं की तलाश में रहते हैं।",
    "join.roles.btn": "अभी आवेदन करें",
    "join.form.title": "हमें अपना बायोडाटा भेजें",
    "join.form.desc": "कोई उपयुक्त भूमिका नहीं मिल रही है? अपना बायोडाटा और पोर्टफोलियो लिंक नीचे छोड़ें। कोई उपयुक्त पद खुलने पर हम आपसे संपर्क करेंगे।",
    "join.form.name": "पूरा नाम",
    "join.form.email": "ईमेल पता",
    "join.form.portfolio": "पोर्टफोलियो / लिंक्डइन यूआरएल",
    "join.form.resume": "बायोडाटा अपलोड करें (PDF)",
    "join.form.upload": "ब्राउज़ करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें",
    "join.form.submit": "आवेदन जमा करें"
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

with open('app/join/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace(
    'import { ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";',
    'import { ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";\\nimport { useTranslation } from "@/context/LanguageContext";'
)
page = page.replace(
    'export default function JoinPage() {',
    'export default function JoinPage() {\\n  const { t } = useTranslation();'
)

page = page.replace('Join Our Team', '{t("join.hero.badge")}')
page = page.replace('Build the Future <br className="hidden md:block" />', '{t("join.hero.title.p1")} <br className="hidden md:block" />')
page = page.replace('with <span className="text-transparent', '{t("join.hero.title.p2")} <span className="text-transparent')
page = page.replace("We're looking for passionate individuals who want to build exceptional digital experiences. Come grow with us.", '{t("join.hero.desc")}')
page = page.replace("Current Openings", '{t("join.roles.title")}')
page = page.replace("Don't see a role that fits? Send us your resume anyway. We're always looking for great talent.", '{t("join.roles.desc")}')
page = page.replace("Apply Now <ChevronRight", '{t("join.roles.btn")} <ChevronRight')
page = page.replace("Send Us Your Resume", '{t("join.form.title")}')
page = page.replace("Can't find the perfect role? Drop your resume and portfolio link below. We will reach out when a suitable position opens up.", '{t("join.form.desc")}')
page = page.replace("Full Name", '{t("join.form.name")}')
page = page.replace("Email Address", '{t("join.form.email")}')
page = page.replace("Portfolio / LinkedIn URL", '{t("join.form.portfolio")}')
page = page.replace("Upload Resume (PDF)", '{t("join.form.resume")}')
page = page.replace("Click to browse or drag & drop", '{t("join.form.upload")}')
page = page.replace("Submit Application", '{t("join.form.submit")}')

with open('app/join/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
