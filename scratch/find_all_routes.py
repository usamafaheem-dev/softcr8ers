import os

for root, dirs, files in os.walk('app'):
    for file in files:
        if 'route.ts' in file:
            full_path = os.path.join(root, file)
            print(f"Path: {full_path}")
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
                print("First 150 chars of content:")
                print(content[:150])
                print("-" * 40)
