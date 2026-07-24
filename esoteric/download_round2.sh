#!/bin/bash

strip_html() {
    python3 strip_html.py "$1" > "$2"
    local size=$(stat -f%z "$2" 2>/dev/null || stat -c%s "$2" 2>/dev/null)
    if [ "$size" -lt 5000 ]; then
        echo "  FAIL after strip: too small (${size} bytes)"
        rm -f "$2"
        return 1
    fi
    echo "  SUCCESS after HTML strip: ${size} bytes"
    return 0
}

download_strip_check() {
    local url="$1"
    local rawfile="$2"
    local outfile="$3"
    
    echo "  Trying: $url"
    curl -sL --max-time 30 -o "$rawfile" "$url" 2>/dev/null
    
    if [ ! -f "$rawfile" ]; then
        echo "  FAIL: file not created"
        return 1
    fi
    
    local size=$(stat -f%z "$rawfile" 2>/dev/null || stat -c%s "$rawfile" 2>/dev/null)
    if [ "$size" -lt 5000 ]; then
        echo "  FAIL: too small (${size} bytes)"
        rm -f "$rawfile"
        return 1
    fi
    
    # Check if it's HTML - if so, strip it
    if head -50 "$rawfile" | grep -iq '<html\|<!DOCTYPE\|<head\|<title'; then
        echo "  HTML detected (${size} bytes), stripping..."
        strip_html "$rawfile" "$outfile"
        rm -f "$rawfile"
        return $?
    else
        # Plain text - move it
        mv "$rawfile" "$outfile"
        echo "  SUCCESS: ${size} bytes"
        return 0
    fi
}

echo "=== 1. Emerald Tablet ==="
download_strip_check "https://www.sacred-texts.com/alc/emerald.htm" "emerald_raw.html" "emerald-tablet.txt"
if [ ! -f emerald-tablet.txt ]; then
    download_strip_check "https://www.sacred-texts.com/alc/emerald2.htm" "emerald_raw2.html" "emerald-tablet.txt"
fi
# Source 3: Wikisource
if [ ! -f emerald-tablet.txt ]; then
    download_strip_check "https://en.wikisource.org/wiki/Emerald_Tablet" "emerald_raw3.html" "emerald-tablet.txt"
fi
# Source 4: hermetics.org
if [ ! -f emerald-tablet.txt ]; then
    download_strip_check "https://www.rexresearch.com/emerald/emerald.htm" "emerald_raw4.html" "emerald-tablet.txt"
fi

echo ""
echo "=== 3. Sefer Yetzirah ==="
download_strip_check "https://www.sacred-texts.com/jud/yetzirah.htm" "sy_raw.html" "sefer-yetzirah.txt"
if [ ! -f sefer-yetzirah.txt ]; then
    download_strip_check "https://en.wikisource.org/wiki/Sefer_Yetzirah" "sy_raw2.html" "sefer-yetzirah.txt"
fi
# Source 3: GitHub - try to find text content in repos
if [ ! -f sefer-yetzirah.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/yetz/yetzirah.htm" "sy_raw3.html" "sefer-yetzirah.txt"
fi
# Source 4: Try wisdomtexts
if [ ! -f sefer-yetzirah.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/yetz/index.htm" "sy_raw4.html" "sefer-yetzirah.txt"
fi

echo ""
echo "=== 4. Zohar ==="
download_strip_check "https://www.sacred-texts.com/jud/zohar.htm" "zohar_raw.html" "zohar.txt"
if [ ! -f zohar.txt ]; then
    download_strip_check "https://en.wikisource.org/wiki/Zohar" "zohar_raw2.html" "zohar.txt"
fi
# Source 3: sacred-texts zohar sections
if [ ! -f zohar.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/zdm/zdm01.htm" "zohar_raw3.html" "zohar.txt"
fi
# Source 4: Try full text
if [ ! -f zohar.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/tor/br.htm" "zohar_raw4.html" "zohar.txt"
fi

echo ""
echo "=== 5. Key of Solomon ==="
download_strip_check "https://www.sacred-texts.com/grim/kks/index.htm" "kos_raw.html" "key-of-solomon.txt"
if [ ! -f key-of-solomon.txt ]; then
    download_strip_check "https://www.esotericarchives.com/solomon/solomon.htm" "kos_raw2.html" "key-of-solomon.txt"
fi
# Source 3: hermetic
if [ ! -f key-of-solomon.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/kks/kks00.htm" "kos_raw3.html" "key-of-solomon.txt"
fi
# Source 4: GitHub search for raw text
if [ ! -f key-of-solomon.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/kks/kks01.htm" "kos_raw4.html" "key-of-solomon.txt"
fi

echo ""
echo "=== 6. Ars Goetia / Lesser Key ==="
download_strip_check "https://www.sacred-texts.com/grim/lks/index.htm" "ag_raw.html" "ars-goetia.txt"
if [ ! -f ars-goetia.txt ]; then
    download_strip_check "https://www.esotericarchives.com/solomon/goetia.htm" "ag_raw2.html" "ars-goetia.txt"
fi
# Source 3: sacred-texts lks sections
if [ ! -f ars-goetia.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/lks/lks01.htm" "ag_raw3.html" "ars-goetia.txt"
fi
# Source 4
if [ ! -f ars-goetia.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/lks/lks02.htm" "ag_raw4.html" "ars-goetia.txt"
fi

echo ""
echo "=== 7. Book of Abramelin ==="
download_strip_check "https://www.sacred-texts.com/grim/abramelin.htm" "abr_raw.html" "book-of-abramelin.txt"
if [ ! -f book-of-abramelin.txt ]; then
    download_strip_check "https://www.esotericarchives.com/solomon/abramelin.htm" "abr_raw2.html" "book-of-abramelin.txt"
fi
# Source 3: sacred-texts abramelin subsections
if [ ! -f book-of-abramelin.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/abra/abra00.htm" "abr_raw3.html" "book-of-abramelin.txt"
fi
# Source 4
if [ ! -f book-of-abramelin.txt ]; then
    download_strip_check "https://www.sacred-texts.com/grim/abra/abra01.htm" "abr_raw4.html" "book-of-abramelin.txt"
fi

echo ""
echo "=== 8. Picatrix ==="
download_strip_check "https://www.sacred-texts.com/astro/picatrix.htm" "pic_raw.html" "picatrix.txt"
if [ ! -f picatrix.txt ]; then
    download_strip_check "https://www.esotericarchives.com/picatrix/picatrix.htm" "pic_raw2.html" "picatrix.txt"
fi
# Source 3: Wikisource
if [ ! -f picatrix.txt ]; then
    download_strip_check "https://en.wikisource.org/wiki/Picatrix" "pic_raw3.html" "picatrix.txt"
fi
# Source 4: hermetic.com
if [ ! -f picatrix.txt ]; then
    download_strip_check "https://hermetic.com/texts/picatrix" "pic_raw4.html" "picatrix.txt"
fi

echo ""
echo "=== 9. Sepher Bahir ==="
download_strip_check "https://www.sacred-texts.com/jud/bahir.htm" "bah_raw.html" "sepher-bahir.txt"
if [ ! -f sepher-bahir.txt ]; then
    download_strip_check "https://en.wikisource.org/wiki/Sefer_Bahir" "bah_raw2.html" "sepher-bahir.txt"
fi
# Source 3: aish.com or other
if [ ! -f sepher-bahir.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/bah/bahir.htm" "bah_raw3.html" "sepher-bahir.txt"
fi
# Source 4: hermetic
if [ ! -f sepher-bahir.txt ]; then
    download_strip_check "https://www.sacred-texts.com/jud/zlh/zlh00.htm" "bah_raw4.html" "sepher-bahir.txt"
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
