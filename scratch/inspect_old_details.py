import re
import codecs

with codecs.open('lib/translations.ts', 'r', 'utf-8') as f:
    lines = f.readlines()

patterns = [
    r'softmindsol\.com',
    r'4452588',
    r'Johar Town',
    r'333-R',
    r'contact@',
    r'softcr8ors@gmail\.com'
]

results = []
for idx, line in enumerate(lines):
    for pattern in patterns:
        if re.search(pattern, line, re.IGNORECASE):
            results.append(f"Line {idx+1}: {line.strip()}")
            break

with codecs.open('scratch/inspect_results.txt', 'w', 'utf-8') as f:
    f.write("\n".join(results))

print(f"Found {len(results)} occurrences. Written to scratch/inspect_results.txt")
