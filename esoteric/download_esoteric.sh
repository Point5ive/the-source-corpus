#!/bin/bash
# Download esoteric texts from multiple sources

download_and_check() {
    local name="$1"
    local url="$2"
    local outfile="$3"
    
    echo "  Trying: $url"
    curl -sL --max-time 30 -o "$outfile" "$url" 2>/dev/null
    
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
    
    # Check if it's HTML
    if head -20 "$outfile" | grep -iq '<html\|<!DOCTYPE\|<head\|<title'; then
        echo "  FAIL: appears to be HTML (${size} bytes)"
        rm -f "$outfile"
        return 1
    fi
    
    echo "  SUCCESS: ${size} bytes"
    return 0
}

echo "=== 1. Emerald Tablet ==="
# Source 1: sacred-texts.com
download_and_check "emerald-tablet" \
    "https://www.sacred-texts.com/alc/emerald.htm" \
    "emerald-tablet.txt"
# Source 2: GitHub raw
if [ ! -f emerald-tablet.txt ]; then
    download_and_check "emerald-tablet" \
        "https://raw.githubusercontent.com/umpolungfish/emerald-tablet-engine/main/README.md" \
        "emerald-tablet.txt"
fi
# Source 3: Try another sacred-texts page
if [ ! -f emerald-tablet.txt ]; then
    download_and_check "emerald-tablet" \
        "https://www.sacred-texts.com/alc/emerald2.htm" \
        "emerald-tablet.txt"
fi

echo ""
echo "=== 2. Kybalion ==="
# Source 1: GitHub
download_and_check "kybalion" \
    "https://raw.githubusercontent.com/hrabanazviking/Kybalion/main/README.md" \
    "kybalion.txt"
# Source 2: Project Gutenberg
if [ ! -f kybalion.txt ]; then
    download_and_check "kybalion" \
        "https://www.gutenberg.org/cache/epub/77425/pg77425.txt" \
        "kybalion.txt"
fi
# Source 3: sacred-texts
if [ ! -f kybalion.txt ]; then
    download_and_check "kybalion" \
        "https://www.sacred-texts.com/eso/kyb/index.htm" \
        "kybalion.txt"
fi

echo ""
echo "=== 3. Sefer Yetzirah ==="
# Source 1: sacred-texts
download_and_check "sefer-yetzirah" \
    "https://www.sacred-texts.com/jud/yetzirah.htm" \
    "sefer-yetzirah.txt"
# Source 2: Wikisource
if [ ! -f sefer-yetzirah.txt ]; then
    download_and_check "sefer-yetzirah" \
        "https://en.wikisource.org/wiki/Sefer_Yetzirah" \
        "sefer-yetzirah.txt"
fi
# Source 3: GitHub
if [ ! -f sefer-yetzirah.txt ]; then
    download_and_check "sefer-yetzirah" \
        "https://raw.githubusercontent.com/jonaltostudio-hub/Sefer_Yetzirah/main/README.md" \
        "sefer-yetzirah.txt"
fi

echo ""
echo "=== 4. Zohar ==="
# Source 1: sacred-texts
download_and_check "zohar" \
    "https://www.sacred-texts.com/jud/zohar.htm" \
    "zohar.txt"
# Source 2: Wikisource
if [ ! -f zohar.txt ]; then
    download_and_check "zohar" \
        "https://en.wikisource.org/wiki/Zohar" \
        "zohar.txt"
fi

echo ""
echo "=== 5. Key of Solomon ==="
# Source 1: sacred-texts
download_and_check "key-of-solomon" \
    "https://www.sacred-texts.com/grim/kks/index.htm" \
    "key-of-solomon.txt"
# Source 2: esoteric archives
if [ ! -f key-of-solomon.txt ]; then
    download_and_check "key-of-solomon" \
        "https://www.esotericarchives.com/solomon/solomon.htm" \
        "key-of-solomon.txt"
fi

echo ""
echo "=== 6. Ars Goetia / Lesser Key ==="
# Source 1: sacred-texts
download_and_check "ars-goetia" \
    "https://www.sacred-texts.com/grim/lks/index.htm" \
    "ars-goetia.txt"
# Source 2: esoteric archives
if [ ! -f ars-goetia.txt ]; then
    download_and_check "ars-goetia" \
        "https://www.esotericarchives.com/solomon/goetia.htm" \
        "ars-goetia.txt"
fi

echo ""
echo "=== 7. Book of Abramelin ==="
# Source 1: sacred-texts
download_and_check "book-of-abramelin" \
    "https://www.sacred-texts.com/grim/abramelin.htm" \
    "book-of-abramelin.txt"
# Source 2: esoteric archives
if [ ! -f book-of-abramelin.txt ]; then
    download_and_check "book-of-abramelin" \
        "https://www.esotericarchives.com/solomon/abramelin.htm" \
        "book-of-abramelin.txt"
fi

echo ""
echo "=== 8. Picatrix ==="
# Source 1: sacred-texts
download_and_check "picatrix" \
    "https://www.sacred-texts.com/astro/picatrix.htm" \
    "picatrix.txt"
# Source 2: esoteric archives
if [ ! -f picatrix.txt ]; then
    download_and_check "picatrix" \
        "https://www.esotericarchives.com/picatrix/picatrix.htm" \
        "picatrix.txt"
fi

echo ""
echo "=== 9. Sepher Bahir ==="
# Source 1: sacred-texts
download_and_check "sepher-bahir" \
    "https://www.sacred-texts.com/jud/bahir.htm" \
    "sepher-bahir.txt"
# Source 2: Wikisource
if [ ! -f sepher-bahir.txt ]; then
    download_and_check "sepher-bahir" \
        "https://en.wikisource.org/wiki/Sefer_Bahir" \
        "sepher-bahir.txt"
fi

echo ""
echo "=== 10. Pistis Sophia ==="
# Source 1: sacred-texts
download_and_check "pistis-sophia" \
    "https://www.sacred-texts.com/ pistis/index.htm" \
    "pistis-sophia.txt"
# Source 2: Project Gutenberg
if [ ! -f pistis-sophia.txt ]; then
    download_and_check "pistis-sophia" \
        "https://www.gutenberg.org/cache/epub/73717/pg73717.txt" \
        "pistis-sophia.txt"
fi
# Source 3: GitHub
if [ ! -f pistis-sophia.txt ]; then
    download_and_check "pistis-sophia" \
        "https://raw.githubusercontent.com/wisdomwater/pistis-sophia/main/README.md" \
        "pistis-sophia.txt"
fi

echo ""
echo "=== RESULTS ==="
for f in emerald-tablet.txt kybalion.txt sefer-yetzirah.txt zohar.txt key-of-solomon.txt ars-goetia.txt book-of-abramelin.txt picatrix.txt sepher-bahir.txt pistis-sophia.txt; do
    if [ -f "$f" ]; then
        size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
        echo "  OK: $f (${size} bytes)"
    else
        echo "  MISSING: $f"
    fi
done
