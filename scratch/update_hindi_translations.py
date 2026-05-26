import codecs

with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    lines = f.readlines()

replacements = {
    3149: '    "contact.page.info.address.val": "अल हफीज हाइट्स, ब्लॉक D1 गुलबर्ग III, लाहौर, 54000",\n',
    3151: '    "contact.page.info.email.val": "info@softcr8ors.com",\n',
    3153: '    "contact.page.info.phone.val": "+92 322 0264662",\n'
}

for line_num, replacement in replacements.items():
    idx = line_num - 1
    lines[idx] = replacement

with codecs.open('lib/translations.ts', 'w', 'utf-8') as f:
    f.write("".join(lines))

print("Successfully updated Hindi translations in lib/translations.ts without printing non-ascii characters")
