import codecs
import re

with codecs.open('lib/services-translations.ts', 'r', 'utf-8') as f:
    lines = f.readlines()

for idx in range(311, 330):
    if idx < len(lines):
        print(f"{idx+1}: {lines[idx].strip()}")
