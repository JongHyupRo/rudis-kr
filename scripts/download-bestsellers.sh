#!/bin/bash
DIR="/Volumes/ACASIS CM073 Media/Projects/rudis-kr/public/images/shoes"
mkdir -p "$DIR"

dl() {
  local name="$1" url="$2"
  local dest="$DIR/${name}.jpg"
  if [ -f "$dest" ] && [ $(wc -c < "$dest") -gt 5000 ]; then
    echo "skip $name"
    return
  fi
  if curl -s -L --max-time 20 -o "$dest" "$url" && [ $(wc -c < "$dest") -gt 5000 ]; then
    echo "✓ $name"
  else
    echo "✗ $name"; rm -f "$dest"
  fi
}

# Hildebrandt Girls
dl "hildebrandt-girls-all-heart"           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1008-ALLHRT-Hildebrandt-Girls-Wrestling-Shoes__All-Heart_0020.jpg?v=1773414179"
dl "hildebrandt-girls-clear-sky"           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1008-CLRSKY-Hildebrandt-Girls-Wrestling-Shoes__Clear-Sky_0020.jpg?v=1773413808"
dl "hildebrandt-girls-electric-lilac"      "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1008-ELCLLC-Hildebrandt-Girl_s-Wrestling-Shoes__ELCLLC_0020.jpg?v=1762289259"
dl "hildebrandt-girls-metamorphosis-black" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1008-MMPBLK-Hildebrandt-Women_s-Youth-Wrestling-Shoes__MMPBLK_0019.jpg?v=1763735874"
# Hildebrandt Women's
dl "hildebrandt-womens-electric-lilac"     "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1008-ELCLLC-Hildebrandt-Women_s-Wrestling-Shoes__ELCL5LC-0020.jpg?v=1762289204"
dl "hildebrandt-womens-metamorphosis-black" "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1008-MMPBLK-Hildebrandt-Women_s-Adult-Wrestling-Shoes__MMPBLK-0020.jpg?v=1763735813"
# JB1
dl "jb1-blackbird"                         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1000-BLKBRD-JB1-Adult-Wrestling-Shoes__Black-Bird_0020.jpg?v=1764003022"
dl "jb1-make-your-own-luck"                "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1001-MYOL-JB1-Adult-Wrestling-Shoes__Make-Your-Own-Luck_0020.jpg?v=1775835646"
dl "jb1-neon-surge"                        "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1001-NEOSRG-JB1-Adult-Wrestling-Shoes__Neon-Surge_0020.jpg?v=1773406171"
dl "jb1-white"                             "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1000-WHTFRZ-JB1-Adult-Wrestling-Shoes__White_0020.jpg?v=1764434668"
dl "jb1-white-hot"                         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1000-WHTHOT-JB1-Adult-Wrestling-Shoes__White-Hot_0020.jpg?v=1764003098"
# Kenny Monday (new model)
dl "kenny-monday-black"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/MONNC1001-BLK-Kenny-Monday-Adult-Wrestling-Shoes__Black_0020.jpg?v=1771427774"
# KS Infinity Edge
dl "ks-infinity-edge-carbon-black"         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/KSNC1000-CBNBLK-KS-Infinity-Edge-Adult-Wrestling-Shoes-FLT__Carbon-Black_0001.jpg?v=1764521267"
dl "ks-infinity-edge-winter-warfare"       "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/KSNC1000-WTRWRF-KS-Infinity-Edge-Adult-Wrestling-Shoes-FLT__Winter-Warfare_0021.jpg?v=1762282292"
dl "ks-infinity-edge-usa"                  "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/KSNC1000-USA-KS-INFINITY-EDGE-ADULT-WRESTLING-SHOES__USA-0020.jpg?v=1763056738"
dl "ks-infinity-edge-youth-usa"            "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-KSNC1000-USA-KS-INFINITY-EDGE-YOUTH-WRESTLING-SHOES__USA-0020.jpg?v=1763056760"
# Alpha 2.0
dl "alpha-terrain"                         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ALPNC1000-TRN-RUDIS-Alpha-2.0-Adult-Wrestling-Shoes__Terrain_0020.jpg?v=1764261505"
# Colt 4.0
dl "colt-4-black-night"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1011-BLKNGT-RUDIS-Colt-4.0-Adult-Wrestling-Shoes__Black-Night_0020.jpg?v=1762296461"
dl "colt-4-neon-cereal-milk"               "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1011-NEOCMK-RUDIS-Colt-4.0-Adult-Wrestling-Shoes__Neon-Cereal-Milk-0020.jpg?v=1772047597"
dl "colt-4-pink"                           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1011-PNK-RUDIS-Colt-4.0-Adult-Wrestling-Shoes__Pink-0020.jpg?v=1769785019"
dl "colt-4-wide-black-night"               "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1012-BLKNGT-RUDIS-Colt-4.0-Wide-Adult-Wrestling-Shoes__Black-Night_0020.jpg?v=1760038622"
dl "colt-4-wide-ghost-division"            "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1012-GSTDVS-RUDIS-Colt-4.0-Wide-Adult-Wrestling-Shoes__Ghost-Division_0020.jpg?v=1760038414"
dl "colt-4-youth-neon-cereal-milk"         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1011-NEOCMK-RUDIS-Colt-4.0-Youth-Wrestling-Shoes__Neon-Cereal-Milk-0020.jpg?v=1772047639"
dl "colt-4-youth-ninja-turtle"             "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1011-NINTRL-RUDIS-Colt-4.0-Youth-Wrestling-Shoes__Ninja-Turtle_0020.jpg?v=1772047493"
dl "colt-4-youth-pink"                     "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1011-PNK-RUDIS-Colt-4.0-Youth-Wrestling-Shoes__Pink_0020.jpg?v=1764167093"
# Courage Youth
dl "courage-youth-midnight-smoke"          "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1007-MDNSMK-RUDIS-Courage-Youth-Wrestling-Shoes--FLT__Midnight-Smoke_0021.jpg?v=1762282288"
# International
dl "international-white-black"             "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1005-WHTBLK-RUDIS-International-Adult-Wrestling-Shoes__White-Black_0020.jpg?v=1764434917"
dl "usa-international-usa-black"           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/USANC1001-USABLK-USA-Wrestling-International-Adult-Wrestling-Shoes__USA-Black_0020.jpg?v=1775831371"
# JB UltraLITE
dl "jb-ultralite-barely-there"             "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/JBANC1003-BRETHR-RUDIS-JB-UltraLITE-Adult-Wrestling-Shoes__Barely-There-0020.jpg?v=1764003187"
# Journey Knit
dl "journey-knit-black"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Journey-Knit-RUDNC1002-FLT__Black_0001.jpg?v=1764434712"
dl "journey-knit-midnight-white"           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1002-MDNWHT-RUDIS-Journey-Knit-Training-Shoes__Midnight-White_0020.jpg?v=1764857281"
dl "journey-knit-navy"                     "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1002-NVY-RUDIS-Journey-Knit-Training-Shoes__Navy_0020.jpg?v=1764434898"
dl "journey-knit-white-hot"                "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1002-WHTHOT-RUDIS-Journey-Knit-Adult-Training-Shoes__White-Hot_0020.jpg?v=1760974602"
dl "journey-knit-youth-usa"                "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-RUDNC1002USA-RUDIS-Journey-Knit-Youth-Training-Shoes__USA_0020.jpg?v=1764860960"
# Kolat
dl "kolat-inferno"                         "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ATHNC1001-IFO-RUDIS-Kolat-Adult-Wrestling-Shoes__Inferno_0020.jpg?v=1763057178"
dl "kolat-light-speed"                     "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ATHNC1001-LGTSPD-RUDIS-Kolat-Adult-Wrestling-Shoes__Light-Speed_0020.jpg?v=1769535165"
dl "kolat-volt-pink"                       "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/ATHNC1001-BLKPNK-RUDIS-Kolat-Adult-Wrestling-Shoes__Black-Pink_0020.jpg?v=1773685750"
dl "kolat-youth-volt-pink"                 "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-ATHNC1001-BLKPNK-RUDIS-Kolat-Youth-Wrestling-Shoes__Black-Pink_0020.jpg?v=1773685767"
# Quest
dl "quest-ranger-black"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1013-RGRBLK-RUDIS-Quest-Adult-Lifestyle-Runner__Ranger-Black_0020.jpg?v=1763741788"
dl "quest-ranger-white"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDNC1013-RGRWHT-RUDIS-Quest-Adult-Lifestyle-Runner__Ranger-White_0020.jpg?v=1764370624"
dl "quest-usa-white"                       "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/USANC1000-USAWHT-USA-Wrestling-Quest-Adult-Lifestyle-Runner__USA-White_0020.jpg?v=1774895551"
# Samurai Speed
dl "samurai-a-way-of-life"                 "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/SAMNC1002-AWL-RUDIS-Samurai-Speed-Adult-Wrestling-Shoes__A-Way-of-Life_0020.jpg?v=1771429347"
dl "samurai-all-in"                        "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/SAMNC1002-AIN-RUDIS-Samurai-Speed-Adult-Wrestling-Shoes__All-In_0020.jpg?v=1771429450"
dl "samurai-dswc"                          "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/SAMNC1002-DSW-RUDIS-Samurai-Speed-Adult-Wrestling-Shoes__DSWC_0020.jpg?v=1773669706"
dl "samurai-youth-a-way-of-life"           "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-SAMNC1002-AWL-RUDIS-Samurai-Speed-Youth-Wrestling-Shoes__A-Way-of-Life_0020.jpg?v=1771429336"
dl "samurai-youth-dswc"                    "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/Y-SAMNC1002-DSW-RUDIS-Samurai-Speed-Youth-Wrestling-Shoes__DSWC_0020.jpg?v=1773669957"
# Street
dl "street-black"                          "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDLFS1000-RUDIS-Street-Lifestyle-FLT__BLACK_0001.jpg?v=1762274135"
dl "street-lunar"                          "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDLFS1000-RUDIS-Street-Lifestyle-FLT__LUNAR_0001.jpg?v=1764434855"
dl "street-ranger-green"                   "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/RUDLFS1000-RGRGRN-RUDIS-Street-Adult-Lifestyle-Shoes__Ranger-Green_0020.jpg?v=1764370349"
# USA Wrestling SF-Tbilisi 2.0
dl "sf-tbilisi-2-usa-black"                "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/USWNC1000-USABLK-USA-Wrestling-SF-Tbilisi-2.0-Adult-Wrestling-Shoes__USA-Black_0020.jpg?v=1771362410"
dl "sf-tbilisi-2-usa-white"                "https://cdn.shopify.com/s/files/1/0773/6436/3537/files/USWNC1000-USAWHT-USA-Wrestling-SF-Tbilisi-2.0-Adult-Wrestling-Shoes__USA-White_0020.jpg?v=1771362811"

echo "완료"
ls "$DIR" | wc -l
