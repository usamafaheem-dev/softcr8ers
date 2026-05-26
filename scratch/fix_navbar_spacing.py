with open('components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Reduce padding/gap of nav links
content = content.replace(
    'justify-self-start ml-12 xl:ml-20 gap-2 xl:gap-2.5',
    'justify-self-center lg:ml-4 xl:ml-8 gap-0.5 xl:gap-1'
)
content = content.replace(
    'px-3.5 py-1.5 text-[15.5px] xl:text-[16px]',
    'px-2.5 py-1.5 text-[14px] xl:text-[15px]'
)

# 2. Change LanguageSwitcher to onlyIcon
content = content.replace(
    '<LanguageSwitcher />',
    '<LanguageSwitcher onlyIcon={true} dropdownPosition="bottom" />'
)

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Spacing fixed')
