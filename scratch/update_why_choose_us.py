import re
import codecs

file_path = 'components/WhyChooseUs.tsx'
with codecs.open(file_path, 'r', 'utf-8') as f:
    content = f.read()

# Replace sectionTranslations with getting from context
content = re.sub(
    r'const sectionTranslations.*?};',
    '''const CARDS_KEYS = [
  { id: 1, titleKey: "wcu.card1.title", descKey: "wcu.card1.desc", icon: Award },
  { id: 2, titleKey: "wcu.card2.title", descKey: "wcu.card2.desc", icon: RefreshCw },
  { id: 3, titleKey: "wcu.card3.title", descKey: "wcu.card3.desc", icon: Rocket },
  { id: 4, titleKey: "wcu.card4.title", descKey: "wcu.card4.desc", icon: ShieldCheck },
  { id: 5, titleKey: "wcu.card5.title", descKey: "wcu.card5.desc", icon: Database },
  { id: 6, titleKey: "wcu.card6.title", descKey: "wcu.card6.desc", icon: Zap },
  { id: 7, titleKey: "wcu.card7.title", descKey: "wcu.card7.desc", icon: Headset },
  { id: 8, titleKey: "wcu.card8.title", descKey: "wcu.card8.desc", icon: LineChart },
  { id: 9, titleKey: "wcu.card9.title", descKey: "wcu.card9.desc", icon: Lock },
  { id: 10, titleKey: "wcu.card10.title", descKey: "wcu.card10.desc", icon: Globe2 },
];''',
    content,
    flags=re.DOTALL
)

# Remove the old CARDS array
content = re.sub(r'const CARDS = \[.*?\];', '', content, flags=re.DOTALL)

# Replace usage of sectionTranslations
content = content.replace(
    '''  const { language } = useTranslation();
  const content = sectionTranslations[language] ?? sectionTranslations.en;''',
    '''  const { t } = useTranslation();'''
)

# Replace the text inside JSX
content = content.replace('THE SOFTCR8ORS EDGE', '{t("wcu.badge")}')
content = re.sub(
    r'<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-\[1\.1\] mb-6">\s*\{content\.title\}\s*</h2>',
    '''<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
            {t("wcu.title.p1")} <span className="text-[#a906c9]">{t("wcu.title.p2")}</span> {t("wcu.title.p3")}
          </h2>''',
    content
)

content = content.replace('{content.subtitle}', '{t("wcu.subtitle")}')
content = content.replace('CARDS.map', 'CARDS_KEYS.map')
content = content.replace('{card.title}', '{t(card.titleKey)}')
content = content.replace('{card.description}', '{t(card.descKey)}')

with codecs.open(file_path, 'w', 'utf-8') as f:
    f.write(content)

# Now update lib/translations.ts
with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    trans_content = f.read()

en_additions = """
    "wcu.badge": "THE SOFTCR8ORS EDGE",
    "wcu.title.p1": "Why",
    "wcu.title.p2": "Choose",
    "wcu.title.p3": "Us",
    "wcu.subtitle": "We blend innovation with expertise to deliver solutions that propel your business forward. Here is what sets us apart from the rest.",
    "wcu.card1.title": "Top 1% Global Talent",
    "wcu.card1.desc": "We rigorously vet our engineers, designers, and strategists to ensure you work with absolute industry experts.",
    "wcu.card2.title": "Agile Methodology",
    "wcu.card2.desc": "Full visibility and rapid iterations. We work in sprints to adapt quickly to changes and deliver faster.",
    "wcu.card3.title": "End-to-End Delivery",
    "wcu.card3.desc": "From initial concept and UI/UX design to development and cloud deployment, we handle it all seamlessly.",
    "wcu.card4.title": "Enterprise Security",
    "wcu.card4.desc": "Your digital assets are protected with state-of-the-art encryption and enterprise-grade security protocols.",
    "wcu.card5.title": "Scalable Architecture",
    "wcu.card5.desc": "We build robust backend systems capable of handling millions of users effortlessly as your business grows.",
    "wcu.card6.title": "Lightning Fast Speed",
    "wcu.card6.desc": "Optimized code and powerful CI/CD pipelines ensure we launch your product faster than the industry average.",
    "wcu.card7.title": "24/7 Dedicated Support",
    "wcu.card7.desc": "Our team is always on standby, offering seamless communication, monitoring, and post-launch maintenance.",
    "wcu.card8.title": "SEO & Performance",
    "wcu.card8.desc": "We ensure your web applications rank higher and load instantly for maximum user retention and growth.",
    "wcu.card9.title": "Secure Data Privacy",
    "wcu.card9.desc": "We adhere to the strictest global data privacy laws to keep your users' sensitive information completely safe.",
    "wcu.card10.title": "Global Reach",
    "wcu.card10.desc": "We have empowered businesses across the globe, delivering digital products that resonate with international audiences.",
"""
trans_content = re.sub(r'en:\s*\{', 'en: {' + en_additions, trans_content)

with codecs.open('lib/translations.ts', 'w', 'utf-8') as f:
    f.write(trans_content)
