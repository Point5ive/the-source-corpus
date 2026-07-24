#!/bin/bash

check_file() {
    local outfile="$1"
    local min_size="${2:-5000}"
    if [ ! -f "$outfile" ]; then
        echo "  FAIL: file not created"
        return 1
    fi
    local size=$(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null)
    if [ "$size" -lt "$min_size" ]; then
        echo "  FAIL: too small (${size} bytes, need ${min_size})"
        rm -f "$outfile"
        return 1
    fi
    # Check if it's HTML/Cloudflare/Wayback
    if head -50 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|cloudflare\|cf_chl\|Wayback Machine'; then
        python3 strip_html.py "$outfile" > "${outfile}.tmp" 2>/dev/null
        local tsize=$(stat -f%z "${outfile}.tmp" 2>/dev/null || stat -c%s "${outfile}.tmp" 2>/dev/null)
        if [ "$tsize" -gt "$min_size" ]; then
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
    local min_size="${3:-5000}"
    echo "  Trying: $url"
    curl -sL --max-time 30 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" -o "$outfile" "$url" 2>/dev/null
    check_file "$outfile" "$min_size"
}

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

echo "=== 1. Kybalion (already have - verify) ==="
if [ -f kybalion.txt ]; then
    size=$(stat -f%z kybalion.txt 2>/dev/null || stat -c%s kybalion.txt 2>/dev/null)
    if grep -q "Chapter\|Principle\|Kybalion\|Hermetic" kybalion.txt; then
        echo "  VERIFIED: kybalion.txt (${size} bytes) - real Kybalion content"
    else
        echo "  Content doesn't match, re-downloading..."
        rm -f kybalion.txt
    fi
fi

echo ""
echo "=== 2. Sefer Yetzirah (already have - verify) ==="
if [ -f sefer-yetzirah.txt ]; then
    size=$(stat -f%z sefer-yetzirah.txt 2>/dev/null || stat -c%s sefer-yetzirah.txt 2>/dev/null)
    if grep -q "SEPHER YETZIRAH\|Sefer Yetzirah\|Yetzirah" sefer-yetzirah.txt; then
        echo "  VERIFIED: sefer-yetzirah.txt (${size} bytes) - real content"
    else
        echo "  Content doesn't match, re-downloading..."
        rm -f sefer-yetzirah.txt
    fi
fi

echo ""
echo "=== 3. Pistis Sophia (Gutenberg #76266) ==="
try_download "https://www.gutenberg.org/cache/epub/76266/pg76266.txt" "pistis-sophia.txt"

echo ""
echo "=== 4. Ars Goetia / Lesser Key (Gutenberg #72679) ==="
try_download "https://www.gutenberg.org/cache/epub/72679/pg72679.txt" "ars-goetia.txt"

echo ""
echo "=== 5. Key of Solomon ==="
# Try Internet Archive - different identifiers
try_download "https://archive.org/stream/claviculassalomonis00salo/claviculassalomonis00salo_djvu.txt" "key-of-solomon.txt"
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://archive.org/stream/keyofsolomon00wier/keyofsolomon00wier_djvu.txt" "key-of-solomon.txt"
fi
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://archive.org/stream/clavicula00keygoog/clavicula00keygoog_djvu.txt" "key-of-solomon.txt"
fi
if [ ! -f key-of-solomon.txt ]; then
    try_download "https://archive.org/stream/thetestofdonaldn00pinkgoog/thetestofdonaldn00pinkgoog_djvu.txt" "key-of-solomon.txt"
fi

echo ""
echo "=== RESULTS SO FAR ==="
for f in emerald-tablet.txt kybalion.txt sefer-yetzirah.txt zohar.txt key-of-solomon.txt ars-goetia.txt book-of-abramelin.txt picatrix.txt sepher-bahir.txt pistis-sophia.txt; do
    if [ -f "$f" ]; then
        size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
        lines=$(wc -l < "$f")
        echo "  OK: $f (${size} bytes, ${lines} lines)"
    else
        echo "  MISSING: $f"
    fi
done
