import re

with open('app/careers/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Expire all jobs
content = re.sub(r'deadline: \"2026-\d{2}-\d{2}\"', r'deadline: \"2024-01-01\"', content)

# 2. Remove Life at SoftCr8ors Section
# It starts at {/* ══ LIFE AT SOFTCR8ORS BENTO GRID ══ */}
# Ends before {/* ══ BENEFITS & PERKS ══ */}
pattern = r'\{\/\* ══ LIFE AT SOFTCR8ORS BENTO GRID ══ \*\/.*?\{\/\* ══ BENEFITS & PERKS ══ \*\/'
content = re.sub(pattern, r'{/* ══ BENEFITS & PERKS ══ */', content, flags=re.DOTALL)

# 3. Update fonts
content = content.replace('font-medium', 'font-normal')
content = content.replace('font-extrabold', 'font-medium')
content = content.replace('font-bold', 'font-medium')
content = content.replace('font-semibold', 'font-medium')

with open('app/careers/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated careers page')
