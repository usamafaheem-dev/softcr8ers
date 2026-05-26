with open('app/contact/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Import
content = content.replace(
    'import { cn } from "@/lib/utils";',
    'import { cn } from "@/lib/utils";\\nimport { useTranslation } from "@/context/LanguageContext";'
)

# Initialize
content = content.replace(
    '  const heroY = useTransform(scrollY, [0, 600], [0, -100]);',
    '  const heroY = useTransform(scrollY, [0, 600], [0, -100]);\\n  const { t } = useTranslation();'
)

# Hero Title
content = content.replace(
    '''Let's <span className="text-[#f016da]">Build</span> Something <span className="text-[#a906c9]">Extraordinary</span>''',
    '''{t("contact.page.hero.p1")}<span className="text-[#f016da]">{t("contact.page.hero.build")}</span>{t("contact.page.hero.p2")}<span className="text-[#a906c9]">{t("contact.page.hero.extraordinary")}</span>'''
)

# Hero Desc
content = content.replace(
    '''Whether you're looking to launch a secure fintech platform or a headless commerce engine, our team is ready to engineer your vision.''',
    '''{t("contact.page.hero.desc")}'''
)

# Info Title
content = content.replace(
    '''Ready To Get Popular<br />Development Services''',
    '''{t("contact.page.info.title.p1")}<br />{t("contact.page.info.title.p2")}'''
)

# Info Details
content = content.replace(
    '''<h4 className="text-xl font-medium text-[#111827]">Address</h4>''',
    '''<h4 className="text-xl font-medium text-[#111827]">{t("contact.page.info.address")}</h4>'''
)
content = content.replace(
    '''1st Floor, 333-R Main Blvd, Block R Phase 2 Johar<br />Town, Lahore, 54770''',
    '''{t("contact.page.info.address.val")}'''
)

content = content.replace(
    '''<h4 className="text-xl font-medium text-[#111827]">Email Us</h4>''',
    '''<h4 className="text-xl font-medium text-[#111827]">{t("contact.page.info.email")}</h4>'''
)
content = content.replace(
    '''contact@softmindsol.com''',
    '''{t("contact.page.info.email.val")}'''
)

content = content.replace(
    '''<h4 className="text-xl font-medium text-[#111827]">Call Us</h4>''',
    '''<h4 className="text-xl font-medium text-[#111827]">{t("contact.page.info.phone")}</h4>'''
)
content = content.replace(
    '''+92 321 4452588''',
    '''{t("contact.page.info.phone.val")}'''
)

content = content.replace(
    '''Reach Out To Us''',
    '''{t("contact.page.map.title")}'''
)

with open('app/contact/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated app/contact/page.tsx')
