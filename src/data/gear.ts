import { Product } from "./shoes";

export const gear: Product[] = [
  {
    slug: "genesis-gearpack-iii",
    name: "Genesis Gearpack III",
    nameKo: "제네시스 기어팩 III",
    price: 95000,
    category: "gear",
    subcategory: "가방",
    badge: "신상품",
    description:
      "제네시스 기어팩 III는 레슬러를 위해 설계된 고성능 백팩입니다. 신발 전용 수납공간, 대용량 메인 포켓, 레슬링 장비를 위한 다기능 수납 시스템을 갖추고 있습니다.",
    features: [
      "신발 전용 분리 수납 구획",
      "대용량 메인 포켓 (30L)",
      "패딩 처리된 노트북 슬리브",
      "전면 퀵 액세스 포켓",
      "통기성 등판 패드",
      "측면 물병 포켓 x2",
      "RUDIS 로고 자수 장식",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Genesis-GearpackIII.jpg",
    ],
  },
  {
    slug: "duffel-bag",
    name: "RUDIS Duffel Bag",
    nameKo: "RUDIS 더플백",
    price: 75000,
    category: "gear",
    subcategory: "가방",
    description:
      "팀 연습이나 대회 원정에 최적화된 대용량 더플백. 넓은 수납 공간과 견고한 내구성으로 레슬링 장비 전체를 한 번에 담을 수 있습니다.",
    features: [
      "대용량 메인 구획",
      "신발 수납 전용 포켓",
      "어깨 스트랩 & 손잡이 이중 제공",
      "방수 하단 처리",
      "팀 마킹 서비스 가능",
      "4가지 컬러 선택",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Duffel-Bag.jpg",
    ],
  },
  {
    slug: "headgear-pro",
    name: "Pro Headgear",
    nameKo: "프로 헤드기어",
    price: 55000,
    category: "gear",
    subcategory: "헤드기어",
    badge: "베스트셀러",
    description:
      "RUDIS 프로 헤드기어는 최상의 보호와 편안한 착용감을 동시에 제공합니다. NCAA 및 국제 규격 인증, 모든 레벨의 레슬러에게 적합합니다.",
    features: [
      "NCAA 공인 규격",
      "충격 흡수 폼 패딩",
      "조절 가능한 스트랩 시스템",
      "통기성 소재로 장시간 착용 편안",
      "블랙, 레드, 네이비 컬러",
      "성인/청소년 사이즈 구분",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Headgear-Pro.jpg",
    ],
  },
  {
    slug: "knee-pads",
    name: "RUDIS Knee Pads",
    nameKo: "RUDIS 니패드",
    price: 35000,
    category: "gear",
    subcategory: "니패드",
    description:
      "무릎 부상 방지와 자유로운 움직임을 동시에 보장하는 RUDIS 니패드. 압박 핏으로 훈련 중 움직임을 방해하지 않습니다.",
    features: [
      "충격 흡수 EVA 패딩",
      "논슬립 실리콘 그립 밴드",
      "4방향 스트레치 원단",
      "S/M/L/XL 사이즈 제공",
      "세탁기 세탁 가능",
      "1쌍 구성",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Knee-Pads.jpg",
    ],
  },
  {
    slug: "singlet-fracture-elite",
    name: "Fracture Elite Singlet",
    nameKo: "프랙처 엘리트 싱글릿",
    price: 85000,
    category: "gear",
    subcategory: "싱글릿",
    badge: "신상품",
    description:
      "RUDIS 프랙처 엘리트 싱글릿은 대회용으로 설계된 최상급 레슬링 유니폼입니다. 빠른 수분 배출 기술과 신축성 높은 소재로 자유로운 움직임을 지원합니다.",
    features: [
      "고성능 수분 배출 원단",
      "4방향 스트레치 소재",
      "플랫 심 봉제로 자극 최소화",
      "NCAA/NFHS 규격 인증",
      "성인/청소년 사이즈",
      "USA Wrestling 스타일 적용",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Fracture-Elite-Singlet.jpg",
    ],
  },
  {
    slug: "shoe-covers",
    name: "Shoe Covers",
    nameKo: "슈즈 커버",
    price: 18000,
    category: "gear",
    subcategory: "액세서리",
    description:
      "레슬링화 보호를 위한 슈즈 커버. 체육관 밖에서도 신발을 깨끗하게 유지하고, 아웃솔의 수명을 연장시킵니다.",
    features: [
      "내구성 높은 나일론 소재",
      "신축성 있는 편안한 착용",
      "미끄럼 방지 바닥 처리",
      "S/M/L 사이즈",
      "세탁기 세탁 가능",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Shoe-Covers.jpg",
    ],
  },
  {
    slug: "water-bottle",
    name: "RUDIS Water Bottle",
    nameKo: "RUDIS 물병",
    price: 22000,
    category: "gear",
    subcategory: "액세서리",
    description:
      "RUDIS 로고가 새겨진 스테인리스 물병. 24시간 보냉/보온 기능으로 훈련 내내 최적의 수분을 유지하세요.",
    features: [
      "스테인리스 스틸 이중 진공 구조",
      "24시간 보냉/12시간 보온",
      "BPA 프리 소재",
      "750ml 용량",
      "누수 방지 뚜껑",
      "RUDIS 레이저 각인",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Water-Bottle.jpg",
    ],
  },
  {
    slug: "wrestling-socks",
    name: "RUDIS Socks",
    nameKo: "RUDIS 레슬링 양말",
    price: 15000,
    category: "gear",
    subcategory: "액세서리",
    description:
      "레슬링 전용으로 설계된 RUDIS 양말. 아치 지지대와 발뒤꿈치 쿠셔닝으로 장시간 훈련도 편안하게.",
    features: [
      "레슬링 전용 설계",
      "아치 지지 압박 밴드",
      "발뒤꿈치 & 발끝 강화 쿠셔닝",
      "수분 배출 원단",
      "M/L 사이즈 (3팩 구성)",
      "블랙, 화이트, 레드 컬러",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Socks.jpg",
    ],
  },
];

export function getGearBySlug(slug: string): Product | undefined {
  return gear.find((g) => g.slug === slug);
}

export const gearSubcategories = ["전체", "가방", "헤드기어", "니패드", "싱글릿", "액세서리"];
