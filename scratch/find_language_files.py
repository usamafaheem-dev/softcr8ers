import os

for root, dirs, files in os.walk('.'):
    for file in files:
        if 'language' in file.lower() or 'switcher' in file.lower():
            print(os.path.join(root, file))
