import json, subprocess, time

all_text = []
for i in range(1, 21):  # First 20 sections of Zohar
    url = f"https://www.sefaria.org/api/texts/Zohar.{i}?context=0"
    try:
        result = subprocess.run(['curl', '-sL', '--max-time', '15', '-A', 'Mozilla/5.0', url], 
                              capture_output=True, text=True, timeout=20)
        data = json.loads(result.stdout)
        if 'text' in data and data['text']:
            if isinstance(data['text'], list):
                for para in data['text']:
                    if isinstance(para, str) and len(para) > 50:
                        all_text.append(f"\n[Zohar Section {i}]\n")
                        all_text.append(para)
                        all_text.append("\n")
            elif isinstance(data['text'], str) and len(data['text']) > 50:
                all_text.append(f"\n[Zohar Section {i}]\n")
                all_text.append(data['text'])
                all_text.append("\n")
            print(f"  Section {i}: OK")
        else:
            print(f"  Section {i}: no text")
    except Exception as e:
        print(f"  Section {i}: {e}")
    time.sleep(0.5)

text = '\n'.join(all_text)
if len(text) > 5000:
    with open('zohar.txt', 'w') as f:
        f.write(text)
    print(f"  SUCCESS: {len(text)} chars written to zohar.txt")
else:
    print(f"  FAIL: only {len(text)} chars collected")
