#!/bin/bash

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

check_file() {
    local outfile="$1"
    local min_size="${2:-5000}"
    if [ ! -f "$outfile" ]; then echo "  FAIL: not created"; return 1; fi
    local size=$(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null)
    if [ "$size" -lt "$min_size" ]; then echo "  FAIL: too small (${size} bytes)"; rm -f "$outfile"; return 1; fi
    if head -50 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|cloudflare\|cf_chl\|Wayback Machine'; then
        python3 strip_html.py "$outfile" > "${outfile}.tmp" 2>/dev/null
        local tsize=$(stat -f%z "${outfile}.tmp" 2>/dev/null || stat -c%s "${outfile}.tmp" 2>/dev/null)
        if [ "$tsize" -gt "$min_size" ]; then mv "${outfile}.tmp" "$outfile"; echo "  SUCCESS after strip: ${tsize} bytes"; return 0
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

# === EMERALD TABLET - The text is short but we need the actual translation ===
echo "=== Emerald Tablet ==="
# Source 1: Try GitHub with actual text content (search code)
try_download "https://raw.githubusercontent.com/nickarora/emerald-tablet/master/emerald_tablet.txt" "emerald-tablet.txt" 2000
# Source 2: Another GitHub
if [ ! -f emerald-tablet.txt ]; then
    try_download "https://raw.githubusercontent.com/dukejuko/emerald-tablet/main/text.txt" "emerald-tablet.txt" 2000
fi
# Source 3: Try sacre-texts via Wayback Machine
if [ ! -f emerald-tablet.txt ]; then
    try_download "https://web.archive.org/web/2024/https://www.sacred-texts.com/alc/emerald.htm" "emerald-tablet.txt" 2000
fi
# Source 4: Try esotericarchives via Wayback
if [ ! -f emerald-tablet.txt ]; then
    try_download "https://web.archive.org/web/2024/https://www.esotericarchives.com/hermes/emerald.htm" "emerald-tablet.txt" 2000
fi
# Source 5: Try Wikisource - it may be short but valid
if [ ! -f emerald-tablet.txt ]; then
    try_download "https://en.wikisource.org/w/index.php?title=The_Smaragdine_Table&action=raw" "emerald-tablet.txt" 2000
fi

# === ZOHAR ===
echo ""
echo "=== Zohar ==="
# Source 1: Sefaria API via curl (not Python)
echo "  Trying Sefaria API for Zohar (Bereshit)..."
curl -sL --max-time 15 -A "$UA" "https://www.sefaria.org/api/texts/Zohar%2C_Vol_1._Bereshit._Section_1?context=0" -o zohar_test.json 2>/dev/null
if [ -f zohar_test.json ]; then
    size=$(stat -f%z zohar_test.json 2>/dev/null || stat -c%s zohar_test.json 2>/dev/null)
    echo "  Got JSON: ${size} bytes"
    if [ "$size" -gt 100 ]; then
        head -3 zohar_test.json
    fi
    rm -f zohar_test.json
fi
# Source 2: Try sacred-texts via Wayback
try_download "https://web.archive.org/web/2023/https://www.sacred-texts.com/jud/zohar.htm" "zohar.txt"
# Source 3: Try esotericarchives via Wayback
if [ ! -f zohar.txt ]; then
    try_download "https://web.archive.org/web/2023/https://www.sacred-texts.com/jud/zdm/zdm01.htm" "zohar.txt"
fi

# === KEY OF SOLOMON ===
echo ""
echo "=== Key of Solomon ==="
# Source 1: Wayback Machine to sacred-texts
try_download "https://web.archive.org/web/2024/https://www.sacred-texts.com/grim/kks/index.htm" "key-of-solomon.txt"
# Source 2: Wayback to esotericarchives
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://web.archive.org/web/2024/https://www.esotericarchives.com/solomon/solomon.htm" "key-of-solomon.txt"
fi

# === BOOK OF ABRAMELIN ===
echo ""
echo "=== Book of Abramelin ==="
# Source 1: Wayback to sacred-texts
try_download "https://web.archive.org/web/2024/https://www.sacred-texts.com/grim/abramelin.htm" "book-of-abramelin.txt"
# Source 2: Wayback to esotericarchives
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://web.archive.org/web/2024/https://www.esotericarchives.com/solomon/abramelin.htm" "book-of-abramelin.txt"
fi

# === PICATRIX ===
echo ""
echo "=== Picatrix ==="
# Source 1: Wayback to sacred-texts
try_download "https://web.archive.org/web/2024/https://www.sacred-texts.com/astro/picatrix.htm" "picatrix.txt"
# Source 2: Wayback to esotericarchives
if [ ! -f picatrix.txt ]; then
    try_download "https://web.archive.org/web/2024/https://www.esotericarchives.com/picatrix/picatrix.htm" "picatrix.txt"
fi

echo ""
echo "=== FINAL RESULTS ==="
for f in emerald-tablet.txt kybalion.txt sefer-yetzirah.txt zohar.txt key-of-solomon.txt ars-goetia.txt book-of-abramelin.txt picatrix.txt sepher-bahir.txt pistis-sophia.txt; do
    if [ -f "$f" ]; then
        size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
        lines=$(wc -l < "$f")
        # Verify first line isn't Wayback/Cloudflare
        firstline=$(head -1 "$f")
        if echo "$firstline" | grep -iq "Wayback\|cloudflare\|Just a moment"; then
            echo "  BAD: $f (contains redirect page, ${size} bytes)"
        else
            echo "  OK: $f (${size} bytes, ${lines} lines)"
        fi
    else
        echo "  MISSING: $f"
    fi
done
