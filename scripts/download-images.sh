#!/bin/bash
set -e

BASE="/Volumes/ACASIS CM073 Media/Projects/rudis-kr/public/images"

download() {
  local dir="$1"
  local slug="$2"
  local url="$3"
  local ext="${url##*.}"
  ext="${ext%%\?*}"
  # png/jpg/gif 아닌 경우 jpg 기본값
  if [[ "$ext" != "png" && "$ext" != "jpg" && "$ext" != "gif" ]]; then
    ext="jpg"
  fi
  local dest="$BASE/$dir/${slug}.${ext}"
  if curl -s -L --max-time 15 -o "$dest" "$url"; then
    local size=$(wc -c < "$dest")
    if [ "$size" -gt 1000 ]; then
      echo "✓ $dir/$slug.$ext (${size} bytes)"
    else
      echo "✗ $dir/$slug - 파일이 너무 작음 (${size} bytes)"
      rm -f "$dest"
    fi
  else
    echo "✗ $dir/$slug - 다운로드 실패"
  fi
}

echo "=== 신발 이미지 다운로드 ==="
download "shoes" "jb1" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1000-BLKMTL-JB1-Adult-Wrestling-Shoes__Black-Metal-0021-clipped.png?v=1773341949"
download "shoes" "colt-4" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1011-GSTDVS-RUDIS-Colt-4.0-Adult-Wrestling-Shoes__Ghost-Division-0021-clipped.png?v=1773344835"
download "shoes" "kolat" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ATHNC1001-LGC-RUDIS-Kolat-Adult-Wrestling-Shoes__Legacy_0021-clipped.png?v=1773344686"
download "shoes" "hildebrandt" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1008-CLRSKY-Hildebrandt-Womens-Adult-Wrestling-Shoes__Clear-Sky_0021-clipped.png?v=1773344835"
download "shoes" "alpha-2" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ALPNC1000-PNKPWR-RUDIS-Alpha-2.0-Adult-Wrestling-Shoes__Pink-Power-0021-clipped.png?v=1773344835"
download "shoes" "samurai-speed" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/SAMNC1002-AIN-RUDIS-Samurai-Speed-Adult-Wrestling-Shoes__All-In_0021-clipped.png?v=1773344838"
download "shoes" "international" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1005-BLKWHT-RUDIS-International-Adult-Wrestling-Shoes__Black-White-0021-clipped.png?v=1773344835"
download "shoes" "courage" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1007-MDNSMK-RUDIS-Courage-Adult-Wrestling-Shoes_-FLT__Midnight-Smoke_0022-clipped.png?v=1773344835"
download "shoes" "ks-infinity-edge" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/KSNC1000-WTRWRF-KS-Infinity-Edge-Adult-Wrestling-Shoes-FLT__Winter-Warfare_0022-clipped.png?v=1773344835"
download "shoes" "ks-power" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/KSNC1002-IFR-RUDIS-KS-Power-Adult-Wrestling-Shoes__Black-Red_0021-clipped.png?v=1775485013"
download "shoes" "journey-predator" "https://www.rudis.com/cdn/shop/files/JOURNEY-KNIT-PREDATOR-A-RUDNC1003-BWR-10C-RUD-061422__Predator_0001_1946x.jpg?v=1762198866"

echo ""
echo "=== 장비 이미지 다운로드 ==="
download "gear" "genesis-gearpack-iii" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUD-0050-RUDIS-GENESIS-GEARPACK-IV-FLT__BLACK_0001-clipped_test.png?v=1775654371"
download "gear" "duffel-bag" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDDF1000BLK-RUDIS-Genesis-Duffle__Black-0021-clipped.png?v=1775655772"
download "gear" "headgear-pro" "https://www.rudis.com/cdn/shop/files/RUDBP1002USA-RUDIS-Genesis-Gearpack-III__USA_Nav-Feature_v2.jpg?v=1753977037"
download "gear" "singlet-fracture-elite" "https://www.rudis.com/cdn/shop/files/FRACTURE-MENS-RED-FRONT-2__Red_0001_1946x.jpg?v=1762198863"
download "gear" "knee-pads" "https://www.rudis.com/cdn/shop/files/260413_USAW-Colt-_-Quest_Marketing9596-Nav.jpg?v=1777043621"

echo ""
echo "=== 의류 이미지 다운로드 ==="
download "apparel" "usa-wrestling-gray-camo-tee" "https://www.rudis.com/cdn/shop/files/260413_USAW-Colt-_-Quest_Marketing9596-Nav.jpg?v=1777043621"
download "apparel" "pastel-sports-bra" "https://www.rudis.com/cdn/shop/files/260325_Pastel_Marketing_2243-Nav.jpg?v=1776093290"
download "apparel" "sp26-collection-shorts" "https://www.rudis.com/cdn/shop/files/Fynex_Ecomm_Shorts_1x1_ad9c6f58-bc84-407e-a7f3-fbb37b92a106.gif?v=1774296197"
download "apparel" "bts-philly-hoodie" "https://www.rudis.com/cdn/shop/files/260401_Alpha-2.0-Happy-2_Marketing_0554-Nav.jpg?v=1776698358"

echo ""
echo "=== 히어로 이미지 다운로드 ==="
download "hero" "main-hero" "https://www.rudis.com/cdn/shop/files/260428_TMNT-Tunnel_Marketing-0001-Nav.jpg?v=1779121527"
download "hero" "usa-wrestling" "https://www.rudis.com/cdn/shop/files/260413_USAW-Colt-_-Quest_Marketing9596-Nav.jpg?v=1777043621"

echo ""
echo "완료!"
