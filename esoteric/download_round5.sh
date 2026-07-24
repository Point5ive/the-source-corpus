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

# === EMERALD TABLET ===
echo "=== 1. Emerald Tablet ==="
# Try multiple variations
try_download "https://www.gutenberg.org/cache/epub/77425/pg77425.txt" "emerald-tablet-test.txt"
if [ -f emerald-tablet-test.txt ]; then
    # Check if it contains emerald tablet content
    if grep -iq "emerald\|smaragdine\|hermes\|trismegist" emerald-tablet-test.txt; then
        mv emerald-tablet-test.txt emerald-tablet.txt
        echo "  (Found emerald content in Gutenberg file)"
    else
        rm -f emerald-tablet-test.txt
    fi
fi
# Try GitHub repos that might have the text
if [ ! -f emerald-tablet.txt ]; then
    # Search GitHub code search API for emerald tablet text
    result=$(curl -sL "https://api.github.com/search/code?q=emerald+tablet+extension:txt" -A "Mozilla/5.0" 2>/dev/null)
    echo "$result" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'items' in data:
        for item in data['items'][:3]:
            print(f\"  GitHub code: {item['html_url']}\")
except: pass
" 2>/dev/null
fi
# Try specific GitHub repos with raw text
if [ ! -f emerald-tablet.txt ]; then
    try_download "https://raw.githubusercontent.com/eternal-bf/esoteric-texts/master/emerald_tablet.txt" "emerald-tablet.txt"
fi
if [ ! -f emerald-tablet.txt ]; then
    # Try alchemy text websites
    try_download "https://www.alchemywebsite.com/emerald_tablet.html" "emerald-tablet.txt"
fi
if [ ! -f emerald-tablet.txt ]; then
    # Try Ian Watson translation
    try_download "https://www.angelfire.comempire/magician/EmeraldTablet.html" "emerald-tablet.txt"
fi
if [ ! -f emerald-tablet.txt ]; then
    # Try Project Gutenberg - The Divine Pymander (contains Emerald Tablet)
    try_download "https://www.gutenberg.org/files/77425/77425-0.txt" "emerald-tablet.txt"
fi

# === BOOK OF ABRAMELIN ===
echo ""
echo "=== 7. Book of Abramelin ==="
# Try various Internet Archive paths
try_download "https://ia802605.us.archive.org/27/items/bookofthemagick00abra/bookofthemagick00abra_djvu.txt" "book-of-abramelin.txt"
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://ia800309.us.archive.org/2/items/bookofabramelin00abra/bookofabramelin00abra_djvu.txt" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    try_download "https://archive.org/download/bookofthemagick00abra/bookofthemagick00abra_text.pdf" "book-of-abramelin.pdf"
    rm -f book-of-abramelin.pdf 2>/dev/null
fi
if [ ! -f book-of-abramelin.txt ]; then
    # Try GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/esoteric-texts/master/book_of_abramelin.txt" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    # Try hermetic.com
    try_download "https://hermetic.com/texts/abramelin" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    # Try esotericarchives direct text
    try_download "https://www.esotericarchives.com/solomon/abra/abra00.htm" "book-of-abramelin.txt"
fi

# === PICATRIX ===
echo ""
echo "=== 8. Picatrix ==="
# Try more Internet Archive paths
try_download "https://ia802808.us.archive.org/30/items/picatrix00geom/picatrix00geom_djvu.txt" "picatrix.txt"
if [ ! -f picatrix.txt ]; then
    # Try different archive identifier
    try_download "https://archive.org/download/picatrix00geom/picatrix00geom_djvu.txt" "picatrix.txt"
fi
if [ ! -f picatrix.txt ]; then
    # Try GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/esoteric-texts/master/picatrix.txt" "picatrix.txt"
fi
if [ ! -f picatrix.txt ]; then
    # Try other sites
    try_download "https://www.rexresearch.com/picatrix/picatrix.htm" "picatrix.txt"
fi
if [ ! -f picatrix.txt ]; then
    try_download "https://en.wikisource.org/wiki/Picatrix_(B%C3%A4mlund)" "picatrix.txt"
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
