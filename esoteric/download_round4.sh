#!/bin/bash

check_file() {
    local outfile="$1"
    if [ ! -f "$outfile" ]; then
        echo "  FAIL: file not created"
        return 1
    fi
    local size=$(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null)
    if [ "$size" -lt 5000 ]; then
        echo "  FAIL: too small (${size} bytes)"
        rm -f "$outfile"
        return 1
    fi
    if head -50 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|cloudflare\|cf_chl'; then
        python3 strip_html.py "$outfile" > "${outfile}.tmp" 2>/dev/null
        local tsize=$(stat -f%z "${outfile}.tmp" 2>/dev/null || stat -c%s "${outfile}.tmp" 2>/dev/null)
        if [ "$tsize" -gt 5000 ]; then
            mv "${outfile}.tmp" "$outfile"
            echo "  SUCCESS after strip: ${tsize} bytes"
            return 0
        else
            rm -f "${outfile}.tmp" "$outfile"
            echo "  FAIL: HTML and strip too small"
            return 1
        fi
    fi
    echo "  SUCCESS: ${size} bytes"
    return 0
}

try_download() {
    local url="$1"
    local outfile="$2"
    echo "  Trying: $url"
    curl -sL --max-time 30 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" -o "$outfile" "$url" 2>/dev/null
    check_file "$outfile"
}

# === ZOHAR - Use Sefaria API to get full text (200 sections) ===
echo "=== 4. Zohar ==="
echo "  Fetching Zohar via Sefaria API..."
python3 << 'PYEOF'
import json, urllib.request, time

all_text = []
for i in range(1, 21):  # Try first 20 sections of Zohar
    url = f"https://www.sefaria.org/api/texts/Zohar.{i}?context=0"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.load(resp)
        if 'text' in data and data['text']:
            if isinstance(data['text'], list):
                for para in data['text']:
                    if isinstance(para, str) and len(para) > 50:
                        all_text.append(f"\n[Zohar {i}]\n")
                        all_text.append(para)
                        all_text.append("\n")
            elif isinstance(data['text'], str) and len(data['text']) > 50:
                all_text.append(f"\n[Zohar {i}]\n")
                all_text.append(data['text'])
                all_text.append("\n")
    except Exception as e:
        print(f"  Section {i}: {e}")
    time.sleep(0.3)

text = '\n'.join(all_text)
if len(text) > 5000:
    with open('zohar.txt', 'w') as f:
        f.write(text)
    print(f"  SUCCESS: {len(text)} chars written to zohar.txt")
else:
    print(f"  FAIL: only {len(text)} chars collected")
PYEOF

# === KEY OF SOLOMON - Try PG #72679 (confirmed on Gutenberg) ===
echo ""
echo "=== 5. Key of Solomon ==="
try_download "https://www.gutenberg.org/cache/epub/72679/pg72679.txt" "key-of-solomon.txt"
# Try Internet Archive - full text stream
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://ia800309.us.archive.org/2/items/keyofsolomon00wier/keyofsolomon00wier_djvu.txt" "key-of-solomon.txt"
fi

# === BOOK OF ABRAMELIN - try Internet Archive ===
echo ""
echo "=== 7. Book of Abramelin ==="
try_download "https://ia802605.us.archive.org/27/items/bookofthemagick00abra/bookofthemagick00abra_djvu.txt" "book-of-abramelin.txt"
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://archive.org/stream/bookofabramelinmagic00abra/bookofabramelinmagic00abra_djvu.txt" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://ia902605.us.archive.org/27/items/bookofthemagick00abra/bookofthemagick00abra_text.txt" "book-of-abramelin.txt"
fi

# === PICATRIX - try Internet Archive ===
echo ""
echo "=== 8. Picatrix ==="
try_download "https://archive.org/stream/picatrix00geom/picatrix00geom_djvu.txt" "picatrix.txt"
if [ ! -f picatrix.txt ]; then
    try_download "https://ia802808.us.archive.org/30/items/picatrix00geom/picatrix00geom_text.txt" "picatrix.txt"
fi

echo ""
echo "=== RESULTS ==="
for f in emerald-tablet.txt kybalion.txt sefer-yetzirah.txt zohar.txt key-of-solomon.txt ars-goetia.txt book-of-abramelin.txt picatrix.txt sepher-bahir.txt pistis-sophia.txt; do
    if [ -f "$f" ]; then
        size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
        lines=$(wc -l < "$f")
        echo "  OK: $f (${size} bytes, ${lines} lines)"
    else
        echo "  MISSING: $f"
    fi
done
