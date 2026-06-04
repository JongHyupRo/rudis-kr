export interface Product {
  slug: string;
  name: string;
  nameKo: string;
  price: number;       // KRW
  priceUsd?: number;   // USD 원본
  category: string;
  subcategory: string; // 레슬링화 | 훈련화 | 라이프스타일
  age: string;         // 성인 | 유스 | 공용
  description: string;
  features: string[];
  images: string[];
  badge?: string;
  collection?: string;
  model?: string;      // 같은 모델 묶음: "JB1", "Colt 4.0" 등
}

export const shoes: Product[] = [
  // ─────────────────────────────────────────
  // JB1
  // ─────────────────────────────────────────
  {
    slug: "jb1-adult-wrestling-shoes-stardust",
    name: "JB1 Adult Wrestling Shoes - Stardust",
    nameKo: "JB1 성인 레슬링화 - 스타더스트",
    price: 105000, priceUsd: 72,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "JB1", collection: "조던 배로우스 컬렉션",
    badge: "베스트셀러",
    description: "올림픽 금메달리스트 조던 배로우스와 함께 설계된 JB1. 스타더스트 컬러웨이로 매트 위에서 빛나세요.",
    features: ["조던 배로우스 공동 설계", "초경량 메쉬 어퍼", "고강도 고무 아웃솔", "발목 지지대 내장", "통기성 라이닝"],
    images: ["/images/shoes/jb1-stardust.jpg"],
  },
  {
    slug: "jb1-adult-wrestling-shoes-gum-doubles",
    name: "JB1 Adult Wrestling Shoes - Gum Doubles",
    nameKo: "JB1 성인 레슬링화 - 검 더블스",
    price: 105000, priceUsd: 72,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "JB1", collection: "조던 배로우스 컬렉션",
    description: "JB1 검 더블스 컬러웨이. 투명 검솔로 독특한 스타일을 연출합니다.",
    features: ["조던 배로우스 공동 설계", "검 더블스 특별 컬러웨이", "초경량 메쉬 어퍼", "고강도 고무 아웃솔", "발목 지지대 내장"],
    images: ["/images/shoes/jb1-gum-doubles.jpg"],
  },
  {
    slug: "jb1-youth-wrestling-shoes-gum-doubles",
    name: "JB1 Youth Wrestling Shoes - Gum Doubles",
    nameKo: "JB1 유스 레슬링화 - 검 더블스",
    price: 152000, priceUsd: 105,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "JB1", collection: "조던 배로우스 컬렉션",
    description: "차세대 레슬러를 위한 JB1 유스 버전. 조던 배로우스의 DNA를 그대로 담았습니다.",
    features: ["조던 배로우스 공동 설계", "유스 전용 사이즈", "검 더블스 컬러웨이", "초경량 메쉬 어퍼", "발목 지지대 내장"],
    images: ["/images/shoes/jb1-youth-gum-doubles.jpg"],
  },

  // ─────────────────────────────────────────
  // JB Ultra
  // ─────────────────────────────────────────
  {
    slug: "rudis-jb-ultra-adult-wrestling-shoes-stealth",
    name: "RUDIS JB Ultra Adult Wrestling Shoes - Stealth",
    nameKo: "JB 울트라 성인 레슬링화 - 스텔스",
    price: 162000, priceUsd: 112,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "JB Ultra", collection: "조던 배로우스 컬렉션",
    badge: "신상품",
    description: "JB1의 진화형, JB 울트라. 스텔스 컬러웨이로 매트 위의 조용한 포식자가 되세요.",
    features: ["JB1 업그레이드 모델", "울트라 경량 소재", "향상된 그립 아웃솔", "스텔스 블랙 컬러웨이", "풀 사이즈 제공"],
    images: ["/images/shoes/jb-ultra-stealth.jpg"],
  },
  {
    slug: "rudis-jb-ultra-adult-wrestling-shoes-tornado",
    name: "RUDIS JB Ultra Adult Wrestling Shoes - Tornado",
    nameKo: "JB 울트라 성인 레슬링화 - 토네이도",
    price: 142000, priceUsd: 98,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "JB Ultra", collection: "조던 배로우스 컬렉션",
    description: "JB 울트라 토네이도 컬러웨이. 강렬한 회오리 패턴으로 압도적인 존재감.",
    features: ["JB1 업그레이드 모델", "울트라 경량 소재", "토네이도 그래픽", "향상된 그립 아웃솔", "풀 사이즈 제공"],
    images: ["/images/shoes/jb-ultra-tornado.jpg"],
  },

  // ─────────────────────────────────────────
  // KS Infinity Edge
  // ─────────────────────────────────────────
  {
    slug: "ks-infinity-edge-adult-wrestling-shoes-world-wide",
    name: "KS Infinity Edge Adult Wrestling Shoes - World Wide",
    nameKo: "KS 인피니티 엣지 성인 레슬링화 - 월드와이드",
    price: 239000, priceUsd: 165,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Infinity Edge", collection: "카일 스나이더 컬렉션",
    description: "카일 스나이더 시그니처 KS 인피니티 엣지 월드와이드 에디션. 세계 무대를 향한 야망을 담았습니다.",
    features: ["카일 스나이더 시그니처", "월드와이드 특별 에디션", "고성능 그립 아웃솔", "강화 발등 스트랩", "통기성 메쉬"],
    images: ["/images/shoes/ks-infinity-edge-world-wide.jpg"],
  },
  {
    slug: "ks-infinity-edge-adult-wrestling-shoes-ammo",
    name: "KS Infinity Edge Adult Wrestling Shoes - Ammo",
    nameKo: "KS 인피니티 엣지 성인 레슬링화 - 암모",
    price: 239000, priceUsd: 165,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Infinity Edge", collection: "카일 스나이더 컬렉션",
    description: "폭발적인 퍼포먼스를 위한 KS 인피니티 엣지 암모 에디션.",
    features: ["카일 스나이더 시그니처", "암모 스페셜 컬러웨이", "고성능 그립 아웃솔", "강화 발등 스트랩", "통기성 메쉬"],
    images: ["/images/shoes/ks-infinity-edge-ammo.jpg"],
  },
  {
    slug: "ks-infinity-edge-adult-wrestling-shoes-controlled-chaos",
    name: "KS Infinity Edge Adult Wrestling Shoes - Controlled Chaos",
    nameKo: "KS 인피니티 엣지 성인 레슬링화 - 컨트롤드 카오스",
    price: 119000, priceUsd: 82,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Infinity Edge", collection: "카일 스나이더 컬렉션",
    description: "혼돈 속에서도 통제를 잃지 않는 KS 인피니티 엣지 컨트롤드 카오스.",
    features: ["카일 스나이더 시그니처", "컨트롤드 카오스 패턴", "고성능 그립 아웃솔", "강화 발등 스트랩"],
    images: ["/images/shoes/ks-infinity-edge-controlled-chaos.jpg"],
  },
  {
    slug: "ks-infinity-edge-youth-wrestling-shoes-controlled-chaos",
    name: "KS Infinity Edge Youth Wrestling Shoes - Controlled Chaos",
    nameKo: "KS 인피니티 엣지 유스 레슬링화 - 컨트롤드 카오스",
    price: 224000, priceUsd: 155,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "KS Infinity Edge", collection: "카일 스나이더 컬렉션",
    description: "차세대 레슬러를 위한 KS 인피니티 엣지 유스 버전.",
    features: ["카일 스나이더 시그니처", "유스 전용 사이즈", "컨트롤드 카오스 패턴", "고성능 그립 아웃솔"],
    images: ["/images/shoes/ks-infinity-edge-youth-controlled-chaos.jpg"],
  },

  // ─────────────────────────────────────────
  // KS Turbine
  // ─────────────────────────────────────────
  {
    slug: "ks-turbine-adult-wrestling-shoes-midnight-chrome",
    name: "KS Turbine Adult Wrestling Shoes - Midnight Chrome",
    nameKo: "KS 터빈 성인 레슬링화 - 미드나이트 크롬",
    price: 239000, priceUsd: 165,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Turbine", collection: "카일 스나이더 컬렉션",
    badge: "신상품",
    description: "터빈 엔진처럼 폭발적인 추진력. KS 터빈 미드나이트 크롬 에디션.",
    features: ["카일 스나이더 시그니처", "터빈 구조 아웃솔", "미드나이트 크롬 컬러웨이", "초경량 어퍼", "강화 발목 지지"],
    images: ["/images/shoes/ks-turbine-midnight-chrome.jpg"],
  },

  // ─────────────────────────────────────────
  // KS Power
  // ─────────────────────────────────────────
  {
    slug: "rudis-ks-power-adult-wrestling-shoes-sky",
    name: "RUDIS KS Power Adult Wrestling Shoes - Sky",
    nameKo: "KS 파워 성인 레슬링화 - 스카이",
    price: 203000, priceUsd: 140,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Power", collection: "카일 스나이더 컬렉션",
    description: "하늘을 향한 강력한 퍼포먼스, KS 파워 스카이 에디션.",
    features: ["카일 스나이더 컬렉션", "스카이 블루 컬러웨이", "강화된 발바닥 그립", "미드컷 발목 지지", "내구성 강화 소재"],
    images: ["/images/shoes/ks-power-sky.jpg"],
  },
  {
    slug: "rudis-ks-power-adult-wrestling-shoes-white-camo",
    name: "RUDIS KS Power Adult Wrestling Shoes - White/Camo",
    nameKo: "KS 파워 성인 레슬링화 - 화이트 카모",
    price: 203000, priceUsd: 140,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Power", collection: "카일 스나이더 컬렉션",
    description: "위장 패턴과 화이트의 조합. KS 파워 화이트 카모 에디션.",
    features: ["카일 스나이더 컬렉션", "화이트 카모 패턴", "강화된 발바닥 그립", "미드컷 발목 지지"],
    images: ["/images/shoes/ks-power-white-camo.jpg"],
  },
  {
    slug: "rudis-ks-power-youth-wrestling-shoes-white-camo",
    name: "RUDIS KS Power Youth Wrestling Shoes - White/Camo",
    nameKo: "KS 파워 유스 레슬링화 - 화이트 카모",
    price: 188000, priceUsd: 130,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "KS Power", collection: "카일 스나이더 컬렉션",
    description: "차세대 레슬러를 위한 KS 파워 유스 화이트 카모 에디션.",
    features: ["카일 스나이더 컬렉션", "유스 전용 사이즈", "화이트 카모 패턴", "강화된 발바닥 그립"],
    images: ["/images/shoes/ks-power-youth-white-camo.jpg"],
  },
  {
    slug: "rudis-ks-power-adult-wrestling-shoes-black-red",
    name: "RUDIS KS Power Adult Wrestling Shoes - Black/Red",
    nameKo: "KS 파워 성인 레슬링화 - 블랙/레드",
    price: 203000, priceUsd: 140,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "KS Power", collection: "카일 스나이더 컬렉션",
    description: "강력한 블랙과 레드의 조합. KS 파워의 클래식 시그니처 컬러웨이.",
    features: ["카일 스나이더 컬렉션", "블랙/레드 시그니처 컬러", "강화된 발바닥 그립", "미드컷 발목 지지"],
    images: ["/images/shoes/ks-power-black-red.jpg"],
  },
  {
    slug: "rudis-ks-power-youth-wrestling-shoes-black-red",
    name: "RUDIS KS Power Youth Wrestling Shoes - Black/Red",
    nameKo: "KS 파워 유스 레슬링화 - 블랙/레드",
    price: 188000, priceUsd: 130,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "KS Power", collection: "카일 스나이더 컬렉션",
    description: "차세대 레슬러를 위한 KS 파워 유스 블랙/레드 에디션.",
    features: ["카일 스나이더 컬렉션", "유스 전용 사이즈", "블랙/레드 컬러", "강화된 발바닥 그립"],
    images: ["/images/shoes/ks-power-youth-black-red.jpg"],
  },

  // ─────────────────────────────────────────
  // Alpha 2.0
  // ─────────────────────────────────────────
  {
    slug: "rudis-alpha-2-0-adult-wrestling-shoes-happy-yellow",
    name: "RUDIS Alpha 2.0 Adult Wrestling Shoes - Happy Yellow",
    nameKo: "알파 2.0 성인 레슬링화 - 해피 옐로우",
    price: 181000, priceUsd: 125,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Alpha 2.0",
    description: "밝고 경쾌한 해피 옐로우 컬러웨이. 알파 2.0의 활기찬 에너지.",
    features: ["다목적 레슬링 & 훈련용", "해피 옐로우 컬러웨이", "경량 EVA 미드솔", "내구성 고무 아웃솔", "편안한 안감"],
    images: ["/images/shoes/alpha-happy-yellow.jpg"],
  },
  {
    slug: "rudis-alpha-2-0-adult-wrestling-shoes-happy-2",
    name: "RUDIS Alpha 2.0 Adult Wrestling Shoes - Happy 2.0",
    nameKo: "알파 2.0 성인 레슬링화 - 해피 2.0",
    price: 174000, priceUsd: 120,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Alpha 2.0",
    badge: "신상품",
    description: "기쁨을 두 배로, 알파 2.0 해피 2.0 에디션.",
    features: ["다목적 레슬링 & 훈련용", "해피 2.0 신규 컬러웨이", "경량 EVA 미드솔", "내구성 고무 아웃솔"],
    images: ["/images/shoes/alpha-happy-2.jpg"],
  },
  {
    slug: "rudis-alpha-2-0-youth-wrestling-shoes-happy-2",
    name: "RUDIS Alpha 2.0 Youth Wrestling Shoes - Happy 2.0",
    nameKo: "알파 2.0 유스 레슬링화 - 해피 2.0",
    price: 159000, priceUsd: 110,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Alpha 2.0",
    badge: "신상품",
    description: "유스 레슬러를 위한 알파 2.0 해피 2.0 에디션.",
    features: ["유스 전용 사이즈", "해피 2.0 신규 컬러웨이", "경량 EVA 미드솔", "내구성 고무 아웃솔"],
    images: ["/images/shoes/alpha-youth-happy-2.jpg"],
  },
  {
    slug: "rudis-alpha-2-0-adult-wrestling-shoes-fear-not",
    name: "RUDIS Alpha 2.0 Adult Wrestling Shoes - Fear Not",
    nameKo: "알파 2.0 성인 레슬링화 - 피어 낫",
    price: 174000, priceUsd: 120,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Alpha 2.0", collection: "페이스 오버 피어",
    description: "두려움을 모르는 레슬러를 위한 알파 2.0 피어 낫 에디션.",
    features: ["페이스 오버 피어 컬렉션", "피어 낫 특별 컬러웨이", "경량 EVA 미드솔", "내구성 고무 아웃솔"],
    images: ["/images/shoes/alpha-fear-not.jpg"],
  },
  {
    slug: "rudis-alpha-2-0-youth-wrestling-shoes-fear-not",
    name: "RUDIS Alpha 2.0 Youth Wrestling Shoes - Fear Not",
    nameKo: "알파 2.0 유스 레슬링화 - 피어 낫",
    price: 159000, priceUsd: 110,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Alpha 2.0", collection: "페이스 오버 피어",
    description: "유스 레슬러를 위한 알파 2.0 피어 낫 에디션.",
    features: ["페이스 오버 피어 컬렉션", "유스 전용 사이즈", "피어 낫 컬러웨이", "경량 EVA 미드솔"],
    images: ["/images/shoes/alpha-youth-fear-not.jpg"],
  },

  // ─────────────────────────────────────────
  // Colt 4.0
  // ─────────────────────────────────────────
  {
    slug: "rudis-colt-4-0-adult-wrestling-shoes-pastel",
    name: "RUDIS Colt 4.0 Adult Wrestling Shoes - Pastel",
    nameKo: "콜트 4.0 성인 레슬링화 - 파스텔",
    price: 159000, priceUsd: 110,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Colt 4.0", collection: "파스텔 컬렉션",
    description: "부드러운 파스텔 컬러로 재해석한 콜트 4.0. 스타일과 성능 모두 잡았습니다.",
    features: ["4세대 아웃솔 패턴", "파스텔 컬렉션", "강화된 발목 보호", "경량 TPU 섕크"],
    images: ["/images/shoes/colt-4-pastel.jpg"],
  },
  {
    slug: "rudis-colt-4-0-youth-wrestling-shoes-pastel",
    name: "RUDIS Colt 4.0 Youth Wrestling Shoes - Pastel",
    nameKo: "콜트 4.0 유스 레슬링화 - 파스텔",
    price: 130000, priceUsd: 90,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Colt 4.0", collection: "파스텔 컬렉션",
    description: "유스 레슬러를 위한 콜트 4.0 파스텔 에디션.",
    features: ["4세대 아웃솔 패턴", "파스텔 컬렉션", "유스 전용 사이즈", "강화된 발목 보호"],
    images: ["/images/shoes/colt-4-youth-pastel.jpg"],
  },
  {
    slug: "usa-wrestling-colt-4-0-adult-wrestling-shoes-gray-camo",
    name: "USA Wrestling Colt 4.0 Adult Wrestling Shoes - Gray Camo",
    nameKo: "USA 레슬링 콜트 4.0 성인 레슬링화 - 그레이 카모",
    price: 159000, priceUsd: 110,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Colt 4.0", collection: "USA 레슬링",
    badge: "베스트셀러",
    description: "USA 레슬링과 RUDIS의 콜라보. 그레이 카모 패턴의 콜트 4.0.",
    features: ["USA 레슬링 공식 라이선스", "그레이 카모 패턴", "4세대 아웃솔 패턴", "강화된 발목 보호"],
    images: ["/images/shoes/colt-4-gray-camo.jpg"],
  },
  {
    slug: "usa-wrestling-colt-4-0-youth-wrestling-shoes-gray-camo",
    name: "USA Wrestling Colt 4.0 Youth Wrestling Shoes - Gray Camo",
    nameKo: "USA 레슬링 콜트 4.0 유스 레슬링화 - 그레이 카모",
    price: 143000, priceUsd: 99,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Colt 4.0", collection: "USA 레슬링",
    description: "유스 레슬러를 위한 USA 레슬링 콜트 4.0 그레이 카모.",
    features: ["USA 레슬링 공식 라이선스", "유스 전용 사이즈", "그레이 카모 패턴", "4세대 아웃솔 패턴"],
    images: ["/images/shoes/colt-4-youth-gray-camo.jpg"],
  },
  {
    slug: "tmnt-colt-4-0-adult-wrestling-shoes-shredder",
    name: "TMNT Colt 4.0 Adult Wrestling Shoes - Shredder",
    nameKo: "TMNT 콜트 4.0 성인 레슬링화 - 쉬레더",
    price: 203000, priceUsd: 140,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Colt 4.0",
    badge: "한정판",
    description: "닌자 거북이 콜라보! TMNT 콜트 4.0 쉬레더 에디션. 악당 쉬레더의 카리스마를 담았습니다.",
    features: ["닌자 거북이 공식 콜라보", "쉬레더 스페셜 디자인", "4세대 아웃솔 패턴", "한정 수량 출시"],
    images: ["/images/shoes/tmnt-colt-shredder.jpg"],
  },
  {
    slug: "tmnt-colt-4-0-youth-wrestling-shoes-shredder",
    name: "TMNT Colt 4.0 Youth Wrestling Shoes - Shredder",
    nameKo: "TMNT 콜트 4.0 유스 레슬링화 - 쉬레더",
    price: 188000, priceUsd: 130,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Colt 4.0",
    badge: "한정판",
    description: "유스 레슬러를 위한 TMNT 콜트 4.0 쉬레더 에디션.",
    features: ["닌자 거북이 공식 콜라보", "유스 전용 사이즈", "쉬레더 스페셜 디자인", "4세대 아웃솔 패턴"],
    images: ["/images/shoes/tmnt-colt-youth-shredder.jpg"],
  },
  {
    slug: "tmnt-colt-4-0-adult-wrestling-shoes-dark-turtle",
    name: "TMNT Colt 4.0 Adult Wrestling Shoes - Dark Turtle",
    nameKo: "TMNT 콜트 4.0 성인 레슬링화 - 다크 터틀",
    price: 203000, priceUsd: 140,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Colt 4.0",
    badge: "신상품",
    description: "어두운 매력의 TMNT 콜트 4.0 다크 터틀 에디션. 최신 닌자 거북이 콜라보.",
    features: ["닌자 거북이 공식 콜라보", "다크 터틀 특별 디자인", "4세대 아웃솔 패턴", "최신 출시 한정판"],
    images: ["/images/shoes/tmnt-colt-dark-turtle.jpg"],
  },
  {
    slug: "tmnt-colt-4-0-youth-wrestling-shoes-dark-turtle",
    name: "TMNT Colt 4.0 Youth Wrestling Shoes - Dark Turtle",
    nameKo: "TMNT 콜트 4.0 유스 레슬링화 - 다크 터틀",
    price: 188000, priceUsd: 130,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Colt 4.0",
    badge: "신상품",
    description: "유스 레슬러를 위한 TMNT 콜트 4.0 다크 터틀 에디션.",
    features: ["닌자 거북이 공식 콜라보", "유스 전용 사이즈", "다크 터틀 특별 디자인", "4세대 아웃솔 패턴"],
    images: ["/images/shoes/tmnt-colt-youth-dark-turtle.jpg"],
  },

  // ─────────────────────────────────────────
  // Colt 3.0
  // ─────────────────────────────────────────
  {
    slug: "rudis-colt-3-0-adult-wrestling-shoes-radioactive",
    name: "RUDIS Colt 3.0 Adult Wrestling Shoes - Radioactive",
    nameKo: "콜트 3.0 성인 레슬링화 - 방사성",
    price: 125000, priceUsd: 87,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Colt 3.0",
    description: "강렬한 네온 컬러웨이의 콜트 3.0 방사성 에디션. 아울렛 특가 제공.",
    features: ["콜트 3.0 클래식 모델", "방사성 네온 컬러", "안정적인 발목 지지", "내구성 아웃솔"],
    images: ["/images/shoes/colt-3-radioactive.jpg"],
  },

  // ─────────────────────────────────────────
  // Hildebrandt
  // ─────────────────────────────────────────
  {
    slug: "hildebrandt-womens-adult-wrestling-shoes-pastel",
    name: "Hildebrandt Women's Adult Wrestling Shoes - Pastel",
    nameKo: "힐데브란트 여성 성인 레슬링화 - 파스텔",
    price: 181000, priceUsd: 125,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Hildebrandt", collection: "사라 힐데브란트 컬렉션",
    description: "세계 챔피언 사라 힐데브란트 시그니처 파스텔 컬렉션. 여성 레슬러를 위한 최고의 선택.",
    features: ["사라 힐데브란트 시그니처", "파스텔 컬렉션", "여성 발 구조 최적화 핏", "고반응성 쿠셔닝 미드솔"],
    images: ["/images/shoes/hildebrandt-pastel.jpg"],
  },
  {
    slug: "hildebrandt-girls-wrestling-shoes-pastel",
    name: "Hildebrandt Girl's Wrestling Shoes - Pastel",
    nameKo: "힐데브란트 걸스 레슬링화 - 파스텔",
    price: 166000, priceUsd: 115,
    category: "shoes", subcategory: "레슬링화", age: "유스",
    model: "Hildebrandt", collection: "사라 힐데브란트 컬렉션",
    description: "차세대 여성 레슬러를 위한 힐데브란트 유스 파스텔 에디션.",
    features: ["사라 힐데브란트 시그니처", "파스텔 컬렉션", "유스 전용 사이즈", "고반응성 쿠셔닝 미드솔"],
    images: ["/images/shoes/hildebrandt-girls-pastel.jpg"],
  },

  // ─────────────────────────────────────────
  // SF-Tbilisi
  // ─────────────────────────────────────────
  {
    slug: "rudis-sf-tbilisi-adult-wrestling-shoes-heritage",
    name: "RUDIS SF-Tbilisi Adult Wrestling Shoes - Heritage",
    nameKo: "SF-트빌리시 성인 레슬링화 - 헤리티지",
    price: 217000, priceUsd: 150,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "SF-Tbilisi",
    badge: "신상품",
    description: "조지아 트빌리시에서 영감을 받은 SF-트빌리시 헤리티지 에디션. 전통과 혁신의 만남.",
    features: ["트빌리시 헤리티지 디자인", "프리미엄 가죽 소재", "고급 아웃솔 구조", "시그니처 자수 디테일"],
    images: ["/images/shoes/sf-tbilisi-heritage.jpg"],
  },

  // ─────────────────────────────────────────
  // Kenny Monday 1988
  // ─────────────────────────────────────────
  {
    slug: "kenny-monday-1988-adult-wrestling-shoes-black",
    name: "Kenny Monday 1988 Adult Wrestling Shoes - Black",
    nameKo: "케니 먼데이 1988 성인 레슬링화 - 블랙",
    price: 146000, priceUsd: 101,
    category: "shoes", subcategory: "레슬링화", age: "성인",
    model: "Kenny Monday 1988", collection: "레전드 컬렉션",
    description: "1988 서울 올림픽 금메달리스트 케니 먼데이를 기리는 레전드 컬렉션. 역사적인 디자인을 현대적으로 재해석.",
    features: ["케니 먼데이 레전드 컬렉션", "1988 올림픽 기념 디자인", "클래식 블랙 컬러웨이", "현대적 소재 적용"],
    images: ["/images/shoes/kenny-monday-black.jpg"],
  },

  // ─────────────────────────────────────────
  // Journey 훈련화
  // ─────────────────────────────────────────
  {
    slug: "rudis-journey-adult-training-shoes-pink-glow",
    name: "RUDIS Journey Adult Training Shoes - Pink Glow",
    nameKo: "저니 성인 훈련화 - 핑크 글로우",
    price: 130000, priceUsd: 90,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey",
    description: "매트 안팎에서 모두 활용 가능한 저니 훈련화. 핑크 글로우 컬러로 생동감 넘치는 스타일.",
    features: ["매트 내외 겸용", "핑크 글로우 컬러", "쿠셔닝 강화 인솔", "내구성 높은 아웃솔", "통기성 메쉬 어퍼"],
    images: ["/images/shoes/journey-pink-glow.jpg"],
  },
  {
    slug: "rudis-journey-adult-training-shoes-tropical-dusk",
    name: "RUDIS Journey Adult Training Shoes - Tropical Dusk",
    nameKo: "저니 성인 훈련화 - 트로피컬 더스크",
    price: 152000, priceUsd: 105,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey",
    description: "열대의 황혼을 담은 저니 훈련화 트로피컬 더스크 에디션.",
    features: ["매트 내외 겸용", "트로피컬 더스크 컬러", "쿠셔닝 강화 인솔", "내구성 높은 아웃솔"],
    images: ["/images/shoes/journey-tropical-dusk.jpg"],
  },
  {
    slug: "rudis-journey-adult-training-shoes-predator",
    name: "RUDIS Journey Adult Training Shoes - Predator",
    nameKo: "저니 성인 훈련화 - 프레데터",
    price: 152000, priceUsd: 105,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey",
    badge: "베스트셀러",
    description: "RUDIS 저니 훈련화 프레데터. 블랙/레드 조합으로 강렬한 존재감.",
    features: ["매트 내외 겸용", "프레데터 블랙/레드 컬러", "쿠셔닝 강화 인솔", "내구성 높은 아웃솔", "이름 각인 서비스 가능"],
    images: ["/images/shoes/journey-predator.jpg"],
  },
  {
    slug: "rudis-journey-adult-training-shoes-tornado-warning",
    name: "RUDIS Journey Adult Training Shoes - Tornado Warning",
    nameKo: "저니 성인 훈련화 - 토네이도 워닝",
    price: 166000, priceUsd: 115,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey",
    description: "폭풍 같은 훈련 강도를 위한 저니 토네이도 워닝 에디션.",
    features: ["매트 내외 겸용", "토네이도 워닝 컬러", "쿠셔닝 강화 인솔", "내구성 높은 아웃솔"],
    images: ["/images/shoes/journey-tornado-warning.jpg"],
  },
  {
    slug: "rudis-journey-adult-training-shoes-sirus-white",
    name: "RUDIS Journey Adult Training Shoes - Sirus White",
    nameKo: "저니 성인 훈련화 - 시리우스 화이트",
    price: 152000, priceUsd: 105,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey",
    description: "깔끔한 화이트 컬러웨이의 저니 훈련화. 어떤 스타일에도 잘 어울립니다.",
    features: ["매트 내외 겸용", "시리우스 화이트 클린 컬러", "쿠셔닝 강화 인솔", "내구성 높은 아웃솔"],
    images: ["/images/shoes/journey-sirus-white.jpg"],
  },

  // ─────────────────────────────────────────
  // Journey Knit 훈련화
  // ─────────────────────────────────────────
  {
    slug: "rudis-journey-knit-adult-training-shoes-dream-navy",
    name: "RUDIS Journey Knit Adult Training Shoes - Dream Navy",
    nameKo: "저니 니트 성인 훈련화 - 드림 네이비",
    price: 181000, priceUsd: 125,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey Knit",
    badge: "신상품",
    description: "니트 어퍼로 업그레이드된 저니 니트. 드림 네이비 컬러로 세련된 스타일.",
    features: ["니트 어퍼 업그레이드", "드림 네이비 컬러", "향상된 통기성", "쿠셔닝 강화 인솔", "매트 내외 겸용"],
    images: ["/images/shoes/journey-knit-dream-navy.jpg"],
  },
  {
    slug: "rudis-journey-knit-adult-training-shoes-dream-lunar",
    name: "RUDIS Journey Knit Adult Training Shoes - Dream Lunar",
    nameKo: "저니 니트 성인 훈련화 - 드림 루나",
    price: 181000, priceUsd: 125,
    category: "shoes", subcategory: "훈련화", age: "성인",
    model: "Journey Knit",
    badge: "신상품",
    description: "달빛에서 영감을 받은 저니 니트 드림 루나 에디션.",
    features: ["니트 어퍼 업그레이드", "드림 루나 컬러", "향상된 통기성", "쿠셔닝 강화 인솔", "매트 내외 겸용"],
    images: ["/images/shoes/journey-knit-dream-lunar.jpg"],
  },

  // ─────────────────────────────────────────
  // Street 라이프스타일
  // ─────────────────────────────────────────
  {
    slug: "rudis-street-adult-lifestyle-shoes-white",
    name: "RUDIS Street Adult Lifestyle Shoes - White",
    nameKo: "스트리트 성인 라이프스타일 슈즈 - 화이트",
    price: 111000, priceUsd: 77,
    category: "shoes", subcategory: "라이프스타일", age: "성인",
    model: "Street",
    description: "매트 밖에서도 RUDIS를 신으세요. 스트리트 라이프스타일 슈즈 화이트 에디션.",
    features: ["라이프스타일 일상화", "클린 화이트 디자인", "편안한 쿠셔닝 밑창", "RUDIS 로고 디테일"],
    images: ["/images/shoes/street-white.jpg"],
  },
  {
    slug: "rudis-street-adult-lifestyle-shoes-navy",
    name: "RUDIS Street Adult Lifestyle Shoes - Navy",
    nameKo: "스트리트 성인 라이프스타일 슈즈 - 네이비",
    price: 127000, priceUsd: 88,
    category: "shoes", subcategory: "라이프스타일", age: "성인",
    model: "Street",
    description: "클래식 네이비 컬러의 RUDIS 스트리트 라이프스타일 슈즈.",
    features: ["라이프스타일 일상화", "클래식 네이비 디자인", "편안한 쿠셔닝 밑창", "RUDIS 로고 디테일"],
    images: ["/images/shoes/street-navy.jpg"],
  },

  // ─────────────────────────────────────────
  // Quest 라이프스타일 러너
  // ─────────────────────────────────────────
  {
    slug: "usa-wrestling-quest-adult-lifestyle-runner-gray-camo",
    name: "USA Wrestling Quest Adult Lifestyle Runner - Gray Camo",
    nameKo: "USA 레슬링 퀘스트 성인 라이프스타일 러너 - 그레이 카모",
    price: 159000, priceUsd: 110,
    category: "shoes", subcategory: "라이프스타일", age: "성인",
    model: "Quest", collection: "USA 레슬링",
    description: "USA 레슬링 x RUDIS 퀘스트 라이프스타일 러너. 러닝과 일상을 넘나드는 다목적 슈즈.",
    features: ["USA 레슬링 공식 라이선스", "그레이 카모 패턴", "러닝화 스타일", "쿠셔닝 러닝 밑창"],
    images: ["/images/shoes/quest-gray-camo.jpg"],
  },
  {
    slug: "usa-wrestling-quest-youth-lifestyle-runner-gray-camo",
    name: "USA Wrestling Quest Youth Lifestyle Runner - Gray Camo",
    nameKo: "USA 레슬링 퀘스트 유스 라이프스타일 러너 - 그레이 카모",
    price: 129000, priceUsd: 89,
    category: "shoes", subcategory: "라이프스타일", age: "유스",
    model: "Quest", collection: "USA 레슬링",
    description: "유스 레슬러를 위한 퀘스트 라이프스타일 러너. 일상과 훈련 모두 OK.",
    features: ["USA 레슬링 공식 라이선스", "유스 전용 사이즈", "그레이 카모 패턴", "러닝화 스타일"],
    images: ["/images/shoes/quest-youth-gray-camo.jpg"],
  },
];

export function getShoeBySlug(slug: string): Product | undefined {
  return shoes.find((s) => s.slug === slug);
}

export const shoeFilterGroups = [
  {
    title: "추천",
    filters: [
      { label: "전체 신발", key: null, value: null },
      { label: "베스트셀러", key: "badge", value: "베스트셀러" },
      { label: "신상품", key: "badge", value: "신상품" },
      { label: "한정판", key: "badge", value: "한정판" },
    ],
  },
  {
    title: "성인",
    filters: [
      { label: "레슬링화 (성인)", key: "sub+age", value: "레슬링화+성인" },
      { label: "훈련화 (성인)", key: "sub+age", value: "훈련화+성인" },
      { label: "라이프스타일 (성인)", key: "sub+age", value: "라이프스타일+성인" },
    ],
  },
  {
    title: "유스",
    filters: [
      { label: "레슬링화 (유스)", key: "sub+age", value: "레슬링화+유스" },
      { label: "라이프스타일 (유스)", key: "sub+age", value: "라이프스타일+유스" },
    ],
  },
  {
    title: "선수 컬렉션",
    filters: [
      { label: "사라 힐데브란트", key: "collection", value: "사라 힐데브란트 컬렉션" },
      { label: "조던 배로우스", key: "collection", value: "조던 배로우스 컬렉션" },
      { label: "카일 스나이더", key: "collection", value: "카일 스나이더 컬렉션" },
      { label: "케니 먼데이", key: "collection", value: "레전드 컬렉션" },
    ],
  },
  {
    title: "컬렉션",
    filters: [
      { label: "USA 레슬링", key: "collection", value: "USA 레슬링" },
      { label: "파스텔 컬렉션", key: "collection", value: "파스텔 컬렉션" },
      { label: "TMNT", key: "model", value: "Colt 4.0" },
      { label: "페이스 오버 피어", key: "collection", value: "페이스 오버 피어" },
    ],
  },
];
