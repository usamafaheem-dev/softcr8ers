import codecs
import re

with codecs.open('lib/services-translations.ts', 'r', 'utf-8') as f:
    content = f.read()

# Let's write a python snippet that extracts the blocks and parses features lengths
# Let's just search for features arrays in the text
blocks = re.findall(r'"([^"]+)":\s*\{\s*title:[^}]+features:\s*\[([^\]]+)\]', content)
print("Found blocks count:", len(blocks))
for slug, feats in blocks[:10]:
    feat_list = re.findall(r'"([^"]+)"', feats)
    print(f"Service: {slug}, features count: {len(feat_list)}")
