import json
import codecs
import re

with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    text = f.read()

# I will write a regex to extract the `en` object fully.
# Actually, it's easier to run a Node script to parse it and write it back, but let's just do simple python parsing for known keys.

# Let's extract keys from the 'en' block that start with nav., hero., chat., marquee., about., services., process., testi.
en_block_match = re.search(r'en:\s*\{([^}]*?// Navbar.*?)\n\s*\},?\n\s*ur:', text, re.DOTALL)
if not en_block_match:
    # Try another way
    en_block_match = re.search(r'en:\s*\{([\s\S]*?)\n\s*ur:', text)

if en_block_match:
    en_block = en_block_match.group(1)
    # Extract all string keys
    key_value_pairs = re.findall(r'"([^"]+)":\s*"([^"]+)"', en_block)
    
    # We want to inject these into all other languages if they are missing
    langs = ['ur', 'ar', 'es', 'fr', 'zh', 'hi']
    
    for lang in langs:
        lang_pattern = r'(' + lang + r':\s*\{)'
        match = re.search(lang_pattern, text)
        if match:
            # We will insert missing keys right after `lang: {`
            insert_idx = match.end()
            lang_block_match = re.search(lang_pattern + r'([\s\S]*?)\n\s*(?:ar|es|fr|zh|hi|});', text)
            if lang_block_match:
                lang_block = lang_block_match.group(2)
                
                missing_pairs = []
                for k, v in key_value_pairs:
                    if f'"{k}"' not in lang_block:
                        missing_pairs.append(f'    "{k}": "{v}",')
                
                if missing_pairs:
                    insert_str = "\n" + "\n".join(missing_pairs)
                    text = text[:insert_idx] + insert_str + text[insert_idx:]

    with codecs.open('lib/translations.ts', 'w', 'utf-8') as f:
        f.write(text)
    print("Injected missing keys into all languages.")
else:
    print("Could not find en block.")
