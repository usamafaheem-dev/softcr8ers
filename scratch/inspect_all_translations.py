import re
import codecs

with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    lines = f.readlines()

keys = [
    "contact.page.info.address.val",
    "contact.page.info.email.val",
    "contact.page.info.phone.val"
]

results = []
for idx, line in enumerate(lines):
    for key in keys:
        if f'"{key}"' in line or f"'{key}'" in line:
            results.append(f"Line {idx+1}: {line.strip()}")
            break

with codecs.open('scratch/inspect_results.txt', 'w', 'utf-8') as f:
    f.write("\n".join(results))

print(f"Found {len(results)} occurrences. Written to scratch/inspect_results.txt")
