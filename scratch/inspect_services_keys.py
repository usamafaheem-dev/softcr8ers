import codecs
import re

with codecs.open('lib/services-translations.ts', 'r', 'utf-8') as f:
    content = f.read()

# Let's find sections for en, ur, ar and see what keys they define
en_match = re.search(r'en:\s*\{', content)
ur_match = re.search(r'ur:\s*\{', content)
ar_match = re.search(r'ar:\s*\{', content)

def get_keys_in_block(start_idx, end_idx):
    block = content[start_idx:end_idx]
    return re.findall(r'"([^"]+)"\s*:\s*\{', block)

en_keys = get_keys_in_block(en_match.start(), ur_match.start())
ur_keys = get_keys_in_block(ur_match.start(), ar_match.start())
ar_keys = get_keys_in_block(ar_match.start(), len(content))

print("en keys:", en_keys)
print("ur keys:", ur_keys)
print("ar keys:", ar_keys)
