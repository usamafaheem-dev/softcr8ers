import re
import codecs

with codecs.open('lib/services-translations.ts', 'r', 'utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    match = re.search(r'(\b[a-z]{2}\b)\s*:\s*\{', line)
    if match:
        print(f"Line {idx+1}: {line.strip()} (matches {match.group(1)})")
