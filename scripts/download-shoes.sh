#!/bin/bash
set -e
DIR="/Volumes/ACASIS CM073 Media/Projects/rudis-kr/public/images/shoes"
mkdir -p "$DIR"

dl() {
  local slug="$1"
  local url="$2"
  local ext="${url##*.}"; ext="${ext%%\?*}"
  [[ "$ext" != "png" && "$ext" != "jpg" && "$ext" != "gif" && "$ext" != "jpeg" ]] && ext="jpg"
  local dest="$DIR/${slug}.${ext}"
  if curl -s -L --max-time 20 -o "$dest" "$url"; then
    local size=$(wc -c < "$dest")
    if [ "$size" -gt 5000 ]; then
      echo "✓ ${slug}.${ext} (${size})"
    else
      echo "✗ ${slug} - 너무 작음 (${size})"; rm -f "$dest"
    fi
  else
    echo "✗ ${slug} - 실패"
  fi
}

echo "=== 신발 이미지 다운로드 ==="

# Journey 훈련화
dl "journey-pink-glow"         "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-PINK-GLOW-A-RUDNC1003-BSL-3C-RUD-061422__Pink-Glow_0001_1946x.jpg?v=1764434699"
dl "journey-tropical-dusk"     "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-TROPICAL-DUSK_A-RUDNC1003-BAA-3C-RUD-061422048__Tropical-Dusk_0001_1946x.jpg?v=1764434720"
dl "journey-predator"          "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-PREDATOR-A-RUDNC1003-BWR-10C-RUD-061422__Predator_0001_1946x.jpg?v=1762198866"
dl "journey-tornado-warning"   "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-TORNADO-WARNING-A-RUDNC1003-BWA-10C-RUD-061422__Tornado-Warning_0001.jpg?v=1762198868"
dl "journey-sirus-white"       "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-SIRIUS-WHITE_A-RUDNC1003-WWS-3C-RUD-061422291-01-RESIZED__Sirus-White_0001_1946x.jpg?v=1762198869"
dl "journey-knit-dream-navy"   "https://www.rudis.com/cdn/shop/files/RUDNC1002-RUDIS-Journey-Knit-Adult-Training-Shoes-FLT__Dream-Navy_0020_1946x.jpg?v=1762285633"
dl "journey-knit-dream-lunar"  "https://www.rudis.com/cdn/shop/files/RUDNC1002-RUDIS-Journey-Knit-Adult-Training-Shoes-FLT__Dream-Lunar_0020_1946x.jpg?v=1762285635"

# Kenny Monday
dl "kenny-monday-black"        "https://www.rudis.com/cdn/shop/files/MONNC1000-Monday-Black__Black_0001_1946x.jpg?v=1762199255"

# KS Infinity Edge
dl "ks-infinity-edge-world-wide"        "https://www.rudis.com/cdn/shop/files/A_RUD-KS-INFINITY-UNITED_KSNC1001-UNI__World-Wide_0001_2406a443-a530-4abc-bcc1-9c0aabcea499_1946x.jpg?v=1762199259"
dl "ks-infinity-edge-ammo"              "https://www.rudis.com/cdn/shop/files/KSNC1000__AMMO_0001_1946x.jpg?v=1762199261"
dl "ks-infinity-edge-controlled-chaos"  "https://www.rudis.com/cdn/shop/files/KSNC1000-KS-Infinity-Controlled-Chaos-FLT__Controlled-Chaos_0020_1946x.jpg?v=1762285482"
dl "ks-infinity-edge-youth-controlled-chaos" "https://www.rudis.com/cdn/shop/files/Y-KSNC1000-KS-Infinity-Controlled-Chaos-FLT__Controlled-Chaos_0021_1946x.jpg?v=1762285483"

# KS Turbine
dl "ks-turbine-midnight-chrome"        "https://www.rudis.com/cdn/shop/files/KS-Turbine_Midnight_A-KST_0037-MC-3-S-RUD-041722-EC__Midnight-Chrome_0001_1946x.jpg?v=1762199261"

# KS Power
dl "ks-power-sky"               "https://www.rudis.com/cdn/shop/files/KSNC1002-KS-Power-Adult-Wrestling-Shoe-FLT__Sky_0020_1946x.jpg?v=1762285486"
dl "ks-power-white-camo"        "https://www.rudis.com/cdn/shop/files/KSNC1002-SBZ-RUDIS-KS-Power-Adult-Wrestling-Shoes__White-Camo_0020_1946x.jpg?v=1775222533"
dl "ks-power-youth-white-camo"  "https://www.rudis.com/cdn/shop/files/Y-KSNC1002-SBZ-RUDIS-KS-Power-Youth-Wrestling-Shoes__White-Camo_0020_1946x.jpg?v=1775222551"
dl "ks-power-black-red"         "https://www.rudis.com/cdn/shop/files/KSNC1002-IFR-RUDIS-KS-Power-Adult-Wrestling-Shoes__Black-Red_0020_1946x.jpg?v=1775222689"
dl "ks-power-youth-black-red"   "https://www.rudis.com/cdn/shop/files/Y-KSNC1002-IFR-RUDIS-KS-Power-Youth-Wrestling-Shoes__Black-Red_0020_1946x.jpg?v=1775222250"

# JB1
dl "jb1-stardust"        "https://www.rudis.com/cdn/shop/files/JBANC1000-JB1-Stardust-FLT__Stardust_0020_1946x.jpg?v=1764003056"
dl "jb1-gum-doubles"     "https://www.rudis.com/cdn/shop/files/JBANC1000-JB1-Gum-Doubles-FLT__Gum-Doubles_0020_1946x.jpg?v=1762285483"
dl "jb1-youth-gum-doubles" "https://www.rudis.com/cdn/shop/files/Y-JBANC1000-JB1-Youth-Gum-Doubles-FLT__Gum-Doubles_0020_1946x.jpg?v=1762285485"

# JB Ultra
dl "jb-ultra-stealth"    "https://www.rudis.com/cdn/shop/files/JBANC1002-JB-Ultra-Adult-Wrestling-Shoe-FLT__Stealth_0001_1946x.jpg?v=1764003108"
dl "jb-ultra-tornado"    "https://www.rudis.com/cdn/shop/files/JBANC1002-JB-Ultra-Adult-Wrestling-Shoe-FLT__Tornado_0001_1946x.jpg?v=1764352549"

# Alpha 2.0
dl "alpha-happy-yellow"       "https://www.rudis.com/cdn/shop/files/ALPNC1000-Alpha-2.0-Happy-Yellow-PUP__Happy-Yellow_0021_df0fdb0f-23d9-4619-8e2f-0b4314b697bf_1946x.jpg?v=1730494925"
dl "alpha-happy-2"            "https://www.rudis.com/cdn/shop/files/ALPNC1000-HPY-RUDIS-Alpha-2.0-Adult-Wrestling-Shoes__Happy-2.0_0020_1946x.jpg?v=1776710067"
dl "alpha-youth-happy-2"      "https://www.rudis.com/cdn/shop/files/Y-ALPNC1000-HPY-RUDIS-Alpha-2.0-Youth-Wrestling-Shoes__Happy-2.0_0020_1946x.jpg?v=1776708882"
dl "alpha-fear-not"           "https://www.rudis.com/cdn/shop/files/ALPNC1000-FERNOT-RUDIS-Alpha-2.0-Adult-Wrestling-Shoes__Fear-Not_0010_1946x.jpg?v=1777900878"
dl "alpha-youth-fear-not"     "https://www.rudis.com/cdn/shop/files/Y-ALPNC1000-FERNOT-RUDIS-Alpha-2.0-Youth-Wrestling-Shoes__Fear-Not_0010_1946x.jpg?v=1777901010"

# Colt 4.0
dl "colt-4-pastel"             "https://www.rudis.com/cdn/shop/files/RUDNC1011-PST-RUDIS-Colt-4.0-Adult-Wrestling-Shoes__Pastel_0020_1946x.jpg?v=1776086078"
dl "colt-4-youth-pastel"       "https://www.rudis.com/cdn/shop/files/Y-RUDNC1011-PST-RUDIS-Colt-4.0-Youth-Wrestling-Shoes__Pastel_0020_1946x.jpg?v=1776086289"
dl "colt-4-gray-camo"          "https://www.rudis.com/cdn/shop/files/RUDNC1011-GRYCMO-USA-Wrestling-Colt-4.0-Adult-Wrestling-Shoes__Gray-Camo_0020_1946x.jpg?v=1777043232"
dl "colt-4-youth-gray-camo"    "https://www.rudis.com/cdn/shop/files/Y-RUDNC1011-GRYCMO-USA-Wrestling-Colt-4.0-Youth-Wrestling-Shoes__Gray-Camo_0020_1946x.jpg?v=1777043268"

# Colt 3.0
dl "colt-3-radioactive"        "https://www.rudis.com/cdn/shop/files/RUDNC1006-COLT-3.0-Radioactive-PUP__Radioactive_0001_1946x.jpg?v=1763908300"

# TMNT Colt 4.0
dl "tmnt-colt-shredder"        "https://www.rudis.com/cdn/shop/files/TMTNC1000-SDR-TMNT-Colt-4.0-Adult-Wrestling-Shoes__Shredder_0001_1946x.jpg?v=1774535409"
dl "tmnt-colt-youth-shredder"  "https://www.rudis.com/cdn/shop/files/TMTNC1000-SDR-TMNT-Colt-4.0-Adult-Wrestling-Shoes__Shredder_0001_1946x.jpg?v=1774535409"
dl "tmnt-colt-dark-turtle"     "https://www.rudis.com/cdn/shop/files/TMTNC1000-DRKTRL-TMNT-Colt-4.0-Adult-Wrestling-Shoes__Dark-Turtle_0010_1946x.jpg?v=1779111856"
dl "tmnt-colt-youth-dark-turtle" "https://www.rudis.com/cdn/shop/files/Y-TMTNC1000-DRKTRL-TMNT-Colt-4.0-Youth-Wrestling-Shoes__Dark-Turtle_0010_1946x.jpg?v=1779112042"

# Hildebrandt
dl "hildebrandt-pastel"        "https://www.rudis.com/cdn/shop/files/RUDNC1008-PST-Hildebrandt-Womens-Adult-Wrestling-Shoes__Pastel_0020_1946x.jpg?v=1776085808"
dl "hildebrandt-girls-pastel"  "https://www.rudis.com/cdn/shop/files/Y-RUDNC1008-PST-Hildebrandt-Girls-Wrestling-Shoes__Pastel_0020_1946x.jpg?v=1776086158"

# SF Tbilisi
dl "sf-tbilisi-heritage"       "https://www.rudis.com/cdn/shop/files/DSFNC1002-SF-Tbilisi-Heritage-PUP__Heritage-0001_1946x.jpg?v=1764614039"

# Street 라이프스타일
dl "street-white"              "https://www.rudis.com/cdn/shop/files/RUDLFS1000-RUDIS-Street-FLT__White_0021_1946x.jpg?v=1762285204"
dl "street-navy"               "https://www.rudis.com/cdn/shop/files/RUDLFS1000-RUDIS-Street-FLT__Navy_0021_1946x.jpg?v=1762285204"

# Quest 라이프스타일
dl "quest-gray-camo"           "https://www.rudis.com/cdn/shop/files/USANC1000-GRYCMO-USA-Wrestling-Quest-Adult-Lifestyle-Runner__Gray-Camo_0020_1946x.jpg?v=1777043606"
dl "quest-youth-gray-camo"     "https://www.rudis.com/cdn/shop/files/Y-USANC1000-GRYCMO-USA-Wrestling-Quest-Youth-Lifestyle-Runner__Gray-Camo_0020_1946x.jpg?v=1777043644"

echo ""
echo "완료! 파일 목록:"
ls -la "$DIR" | tail -50
