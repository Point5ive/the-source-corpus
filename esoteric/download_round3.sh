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
    # Check if it's HTML (Cloudflare challenge or actual HTML)
    if head -50 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|cloudflare\|cf_chl'; then
        # Try stripping
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
    curl -sL --max-time 30 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -o "$outfile" "$url" 2>/dev/null
    check_file "$outfile"
}

echo "=== 1. Emerald Tablet ==="
# Source 1: Wikisource raw wikitext export
try_download "https://en.wikisource.org/w/index.php?title=Emerald_Tablet&action=raw" "emerald-tablet.txt"
if [ ! -f emerald-tablet.txt ]; then
    # Source 2: hermetic.com
    try_download "https://hermetic.com/texts/emerald-tablet" "emerald-tablet.txt"
fi
if [ ! -f emerald-tablet.txt ]; then
    # Source 3: alchemy website
    try_download "https://www.levity.com/alchemy/emerald.html" "emerald-tablet.txt"
fi
if [ ! -f emerald-tablet.txt ]; then
    # Source 4: GitHub - search for actual text files
    try_download "https://raw.githubusercontent.com/umpolungfish/emerald-tablet-engine/master/README.md" "emerald-tablet.txt"
fi

echo ""
echo "=== 4. Zohar ==="
# Source 1: Wikisource raw wikitext
try_download "https://en.wikisource.org/w/index.php?title=Zohar&action=raw" "zohar.txt"
if [ ! -f zohar.txt ]; then
    # Source 2: sefaria.org API
    try_download "https://www.sefaria.org/api/texts/Zohar.1.1a" "zohar.txt"
fi
if [ ! -f zohar.txt ]; then
    # Source 3: GitHub search for Zohar text repos
    try_download "https://raw.githubusercontent.com/ovesh/Zohar-English/master/Zohar.txt" "zohar.txt"
fi
if [ ! -f zohar.txt ]; then
    # Source 4: sefaria API - full text
    try_download "https://www.sefaria.org/api/v3/texts/Zohar" "zohar.txt"
fi

echo ""
echo "=== 5. Key of Solomon ==="
# Source 1: hermetic.com
try_download "https://hermetic.com/texts/key-of-solomon" "key-of-solomon.txt"
if [ ! -f key-of-solomon.txt ]; then
    # Source 2: Wikisource
    try_download "https://en.wikisource.org/w/index.php?title=The_Key_of_Solomon&action=raw" "key-of-solomon.txt"
fi
if [ ! -f key-of-solomon.txt ]; then
    # Source 3: GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/key-of-solomon/main/key_of_solomon.txt" "key-of-solomon.txt"
fi
if [ ! -f key-of-solomon.txt ]; then
    # Source 4: Internet Archive
    try_download "https://archive.org/stream/keyofsolomon00wier/keyofsolomon00wier_djvu.txt" "key-of-solomon.txt"
fi

echo ""
echo "=== 6. Ars Goetia (already have 92KB - let's verify) ==="
if [ -f ars-goetia.txt ]; then
    echo "  Already have ars-goetia.txt"
fi

echo ""
echo "=== 7. Book of Abramelin ==="
# Source 1: hermetic.com
try_download "https://hermetic.com/texts/abramelin" "book-of-abramelin.txt"
if [ ! -f book-of-abramelin.txt ]; then
    # Source 2: Wikisource
    try_download "https://en.wikisource.org/w/index.php?title=The_Book_of_Abramelin&action=raw" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    # Source 3: GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/book-of-abramelin/main/abramelin.txt" "book-of-abramelin.txt"
fi
if [ ! -f book-of-abramelin.txt ]; then
    # Source 4: Internet Archive
    try_download "https://archive.org/stream/bookofabramelin00abra/bookofabramelin00abra_djvu.txt" "book-of-abramelin.txt"
fi

echo ""
echo "=== 8. Picatrix ==="
# Source 1: Wikisource raw
try_download "https://en.wikisource.org/w/index.php?title=Picatrix&action=raw" "picatrix.txt"
if [ ! -f picatrix.txt ]; then
    # Source 2: GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/picatrix/main/picatrix.txt" "picatrix.txt"
fi
if [ ! -f picatrix.txt ]; then
    # Source 3: hermetic.com
    try_download "https://hermetic.com/texts/picatrix" "picatrix.txt"
fi
if [ ! -f picatrix.txt ]; then
    # Source 4: Internet Archive
    try_download "https://archive.org/stream/picatrix00geom/picatrix00geom_djvu.txt" "picatrix.txt"
fi

echo ""
echo "=== 9. Sepher Bahir ==="
# Source 1: Wikisource raw
try_download "https://en.wikisource.org/w/index.php?title=Sefer_Bahir&action=raw" "sepher-bahir.txt"
if [ ! -f sepher-bahir.txt ]; then
    # Source 2: sefaria API
    try_download "https://www.sefaria.org/api/texts/Bahir.1" "sepher-bahir.txt"
fi
if [ ! -f sepher-bahir.txt ]; then
    # Source 3: GitHub
    try_download "https://raw.githubusercontent.com/eternal-bf/sepher-bahir/main/bahir.txt" "sepher-bahir.txt"
fi
if [ ! -f sepher-bahir.txt ]; then
    # Source 4: kabbalah website
    try_download "https://www.kabbalah.info/engkab/bahir/bahir.htm" "sepher-bahir.txt"
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
