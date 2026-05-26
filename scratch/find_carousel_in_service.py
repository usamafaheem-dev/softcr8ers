import re
import codecs

with codecs.open('components/ServiceDetailPage.tsx', 'r', 'utf-8') as f:
    content = f.read()

# Let's search for words like carousel, bento, enterprise, slider
matches = []
for line_no, line in enumerate(content.split('\n'), 1):
    if any(w in line.lower() for w in ['carousel', 'bento', 'enterprise', 'slider']):
        matches.append(f"Line {line_no}: {line.strip()}")

with codecs.open('scratch/inspect_results.txt', 'w', 'utf-8') as f:
    f.write("\n".join(matches))

print(f"Found {len(matches)} occurrences. Written to scratch/inspect_results.txt")
