#!/bin/bash

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

check_file() {
    local outfile="$1"; local min="${2:-5000}"
    if [ ! -f "$outfile" ]; then echo "  FAIL: not created"; return 1; fi
    local size=$(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null)
    if [ "$size" -lt "$min" ]; then echo "  FAIL: too small (${size} bytes)"; rm -f "$outfile"; return 1; fi
    if head -50 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|cloudflare\|cf_chl\|Wayback Machine'; then
        python3 strip_html.py "$outfile" > "${outfile}.tmp" 2>/dev/null
        local tsize=$(stat -f%z "${outfile}.tmp" 2>/dev/null || stat -c%s "${outfile}.tmp" 2>/dev/null)
        if [ "$tsize" -gt "$min" ]; then mv "${outfile}.tmp" "$outfile"; echo "  SUCCESS after strip: ${tsize} bytes"; return 0
        else rm -f "${outfile}.tmp" "$outfile"; echo "  FAIL: HTML strip too small"; return 1; fi
    fi
    echo "  SUCCESS: ${size} bytes"; return 0
}

try_download() {
    local url="$1"; local outfile="$2"; local min="${3:-5000}"
    echo "  Trying: $url"
    curl -sL --max-time 30 -A "$UA" -o "$outfile" "$url" 2>/dev/null
    check_file "$outfile" "$min"
}

# === ZOHAR - Use Sefaria API with correct complex text refs ===
echo "=== Zohar ==="
echo "  Using Sefaria API for Zohar Bereshit sections..."
python3 << 'PYEOF'
import subprocess, json, time, re

all_text = []
# Zohar is a complex text - use specific section refs
# Format: Zohar, Vol 1. Bereshit, Section N
sections = [
    "Zohar, Vol 1. Bereshit, Section 1",
    "Zohar, Vol 1. Bereshit, Section 2", 
    "Zohar, Vol 1. Bereshit, Section 3",
    "Zohar, Vol 1. Bereshit, Section 4",
    "Zohar, Vol 1. Bereshit, Section 5",
    "Zohar, Vol 1. Bereshit, Section 6",
    "Zohar, Vol 1. Bereshit, Section 7",
    "Zohar, Vol 1. Bereshit, Section 8",
    "Zohar, Vol 1. Bereshit, Section 9",
    "Zohar, Vol 1. Bereshit, Section 10",
    "Zohar, Vol 1. Bereshit, Section 11",
    "Zohar, Vol 1. Bereshit, Section 12",
    "Zohar, Vol 1. Bereshit, Section 13",
    "Zohar, Vol 1. Bereshit, Section 14",
    "Zohar, Vol 1. Bereshit, Section 15",
]

for section in sections:
    # URL encode the ref
    ref = section.replace(", ", "%2C_").replace(" ", "_").replace(".", "._")
    url = f"https://www.sefaria.org/api/texts/{ref}?context=0"
    try:
        result = subprocess.run(['curl', '-sL', '--max-time', '15', '-A', 'Mozilla/5.0', url],
                              capture_output=True, text=True, timeout=20)
        data = json.loads(result.stdout)
        if 'text' in data and data['text']:
            text = data['text']
            if isinstance(text, list):
                for para in text:
                    if isinstance(para, str) and len(para) > 30:
                        clean = re.sub(r'<[^>]+>', '', para).strip()
                        if clean:
                            all_text.append(clean)
            elif isinstance(text, str) and len(text) > 30:
                clean = re.sub(r'<[^>]+>', '', text).strip()
                if clean:
                    all_text.append(clean)
            print(f"  {section}: OK")
        else:
            print(f"  {section}: no text")
    except Exception as e:
        print(f"  {section}: {e}")
    time.sleep(0.5)

result = '\n\n'.join(all_text)
if len(result) > 5000:
    with open('zohar.txt', 'w') as f:
        f.write(result)
    print(f"  SUCCESS: {len(result)} chars written to zohar.txt")
else:
    print(f"  FAIL: only {len(result)} chars collected")
PYEOF

# === KEY OF SOLOMON ===
echo ""
echo "=== Key of Solomon ==="
# Source 1: Try Wayback with specific saved dates
try_download "https://web.archive.org/web/20220101000000*/sacred-texts.com/grim/kks/kks00.htm" "key-of-solomon.txt"
# Source 2: Try specific Wayback snapshots
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://web.archive.org/web/20220301000000/https://www.sacred-texts.com/grim/kks/kks00.htm" "key-of-solomon.txt"
fi
# Source 3: Try esotericarchives via Wayback with specific dates
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://www.esotericarchives.com/solomon/solomon.htm" "key-of-solomon.txt"
fi
# Source 4: Try hermetic.com via Wayback
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://hermetic.com/texts/key-of-solomon" "key-of-solomon.txt"
fi
# Source 5: Try the esotericarchives with direct path
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://web.archive.org/web/20220301000000/https://www.esotericarchives.com/solomon/kks01.htm" "key-of-solomon.txt"
fi

# === BOOK OF ABRAMELIN ===
echo ""
echo "=== Book of Abramelin ==="
# Source 1: Wayback sacred-texts
try_download "https://web.archive.org/web/20220101000000/https://www.sacred-texts.com/grim/abra/abra00.htm" "book-of-abramelin.txt"
# Source 2: Wayback esotericarchives
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://www.esotericarchives.com/solomon/abramelin.htm" "book-of-abramelin.txt"
fi
# Source 3: Wayback hermetic.com
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://hermetic.com/texts/abramelin" "book-of-abramelin.txt"
fi

# === PICATRIX ===
echo ""
echo "=== Picatrix ==="
# Source 1: Wayback sacred-texts
try_download "https://web.archive.org/web/20220101000000/https://www.sacred-texts.com/astro/picatrix.htm" "picatrix.txt"
# Source 2: Wayback esotericarchives  
if [ ! -f picatrix.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://www.esotericarchives.com/picatrix/picatrix.htm" "picatrix.txt"
fi
# Source 3: Try hermetic.com via Wayback
if [ ! -f picatrix.txt ]; then
    try_download "https://web.archive.org/web/20220101000000/https://hermetic.com/texts/picatrix" "picatrix.txt"
fi

echo ""
echo "=== FINAL RESULTS ==="
for f in emerald-tablet.txt kybalion.txt sefer-yetzirah.txt zohar.txt key-of-solomon.txt ars-goetia.txt book-of-abramelin.txt picatrix.txt sepher-bahir.txt pistis-sophia.txt; do
    if [ -f "$f" ]; then
        size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
        lines=$(wc -l < "$f")
        firstline=$(head -1 "$f")
        if echo "$firstline" | grep -iq "Wayback\|cloudflare\|Just a moment"; then
            echo "  BAD: $f (${size} bytes)"
        else
            echo "  OK: $f (${size} bytes, ${lines} lines)"
        fi
    else
        echo "  MISSING: $f"
    fi
done
