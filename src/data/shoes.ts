export interface Product {
  slug: string;
  name: string;
  nameKo: string;
  price: number;
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  images: string[];
  badge?: string;
  collection?: string;
}

export const shoes: Product[] = [
  {
    slug: "jb1",
    name: "JB1",
    nameKo: "JB1 레슬링화",
    price: 145000,
    category: "shoes",
    subcategory: "레슬링화",
    collection: "조던 배로우스 컬렉션",
    badge: "베스트셀러",
    description:
      "올림픽 금메달리스트 조던 배로우스와 함께 설계된 JB1은 매트 위에서의 최고 성능을 위해 탄생했습니다. 탁월한 그립력과 경량 설계로 빠른 움직임을 지원합니다.",
    features: [
      "조던 배로우스 공동 설계",
      "초경량 메쉬 어퍼",
      "고강도 고무 아웃솔로 최강 그립력",
      "발목 지지대 내장",
      "통기성 라이닝",
      "성인 남녀 모든 사이즈 제공",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/JB1-Black-Red.jpg",
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/JB1-detail.jpg",
    ],
  },
  {
    slug: "colt-4",
    name: "Colt 4.0",
    nameKo: "콜트 4.0 레슬링화",
    price: 135000,
    category: "shoes",
    subcategory: "레슬링화",
    badge: "신상품",
    description:
      "콜트 4.0은 RUDIS의 플래그십 레슬링화로, 4세대 업그레이드를 통해 더욱 향상된 안정성과 민첩성을 제공합니다. Ghost Division 컬러웨이를 포함한 다양한 색상으로 출시됩니다.",
    features: [
      "4세대 개선된 아웃솔 패턴",
      "강화된 발목 보호 구조",
      "경량 TPU 섕크 적용",
      "맞춤형 인솔 지원",
      "내구성 향상 소재 사용",
      "Ghost Division, 블랙/화이트 등 다양한 컬러",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Colt4-Ghost.jpg",
    ],
  },
  {
    slug: "hildebrandt",
    name: "Hildebrandt",
    nameKo: "힐데브란트 레슬링화",
    price: 150000,
    category: "shoes",
    subcategory: "레슬링화",
    collection: "사라 힐데브란트 컬렉션",
    description:
      "세계 챔피언 사라 힐데브란트와 함께 개발한 힐데브란트 레슬링화. Clear Sky 컬러웨이로 매트 위에서 당당하게 빛나세요. 남녀 모든 사이즈 제공.",
    features: [
      "사라 힐데브란트 시그니처 디자인",
      "여성 발 구조에 최적화된 핏",
      "고반응성 쿠셔닝 미드솔",
      "슬립 방지 아웃솔",
      "Clear Sky, 블랙 등 컬러 제공",
      "남녀 공용 사이즈",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Hildebrandt-ClearSky.jpg",
    ],
  },
  {
    slug: "ks-infinity-edge",
    name: "KS Infinity Edge",
    nameKo: "KS 인피니티 엣지",
    price: 155000,
    category: "shoes",
    subcategory: "레슬링화",
    collection: "카일 스나이더 컬렉션",
    badge: "한정판",
    description:
      "세계 챔피언 카일 스나이더와 공동 설계한 인피니티 엣지. Winter Warfare 컬러웨이로 매트 위의 지배자가 되세요.",
    features: [
      "카일 스나이더 시그니처 모델",
      "Winter Warfare 특별 컬러웨이",
      "고성능 그립 아웃솔",
      "강화 발등 스트랩",
      "통기성 메쉬 어퍼",
      "한정 수량 출시",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/KS-InfinityEdge-WinterWarfare.jpg",
    ],
  },
  {
    slug: "alpha-2",
    name: "Alpha 2.0",
    nameKo: "알파 2.0 레슬링화",
    price: 125000,
    category: "shoes",
    subcategory: "레슬링화",
    description:
      "알파 2.0은 입문자부터 중급 선수까지 아우르는 다목적 레슬링화입니다. Pink Power를 포함한 다양한 컬러로 나만의 스타일을 표현하세요.",
    features: [
      "다목적 레슬링 & 훈련용",
      "경량 EVA 미드솔",
      "내구성 고무 아웃솔",
      "Pink Power, 블랙/화이트 등 다양한 컬러",
      "편안한 안감 처리",
      "모든 레벨 선수에게 적합",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Alpha2-PinkPower.jpg",
    ],
  },
  {
    slug: "samurai-speed",
    name: "Samurai Speed",
    nameKo: "사무라이 스피드",
    price: 130000,
    category: "shoes",
    subcategory: "레슬링화",
    description:
      "스피드에 초점을 맞춘 사무라이 스피드. 초경량 설계와 날렵한 실루엣으로 상대보다 한 발 앞서 나가세요.",
    features: [
      "스피드 최적화 설계",
      "초경량 어퍼 소재",
      "얇은 아웃솔로 지면 감각 극대화",
      "빠른 착화 레이싱 시스템",
      "남녀 전 사이즈 제공",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Samurai-Speed.jpg",
    ],
  },
  {
    slug: "journey-predator",
    name: "Journey - Predator",
    nameKo: "저니 훈련화 - 프레데터",
    price: 105000,
    category: "shoes",
    subcategory: "훈련화",
    description:
      "RUDIS 저니 훈련화는 매트 안팎에서 모두 활용 가능한 다목적 훈련화입니다. 프레데터 컬러웨이(블랙/레드)로 강렬한 존재감을 드러내세요.",
    features: [
      "매트 내외 겸용 훈련화",
      "중장거리 훈련에 최적화",
      "쿠셔닝 강화 인솔",
      "내구성 높은 아웃솔",
      "통기성 메쉬 어퍼",
      "이름 각인 서비스 가능",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Journey-Predator.jpg",
    ],
  },
  {
    slug: "courage",
    name: "Courage",
    nameKo: "커리지 레슬링화",
    price: 120000,
    category: "shoes",
    subcategory: "레슬링화",
    description:
      "커리지는 과감한 도전을 위한 레슬링화입니다. Midnight Smoke 플랫 디자인으로 시크한 매력을 발산하면서도 고성능을 유지합니다.",
    features: [
      "Midnight Smoke 플랫 디자인",
      "낮은 프로파일로 지면 밀착감 강화",
      "강화 발끝 보호대",
      "미끄럼 방지 특수 아웃솔",
      "모든 매트 표면 적합",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Courage-MidnightSmoke.jpg",
    ],
  },
  {
    slug: "international",
    name: "International",
    nameKo: "인터내셔널 레슬링화",
    price: 115000,
    category: "shoes",
    subcategory: "레슬링화",
    description:
      "국제 무대를 위해 설계된 인터내셔널. 블랙/화이트 클래식 컬러웨이로 어떤 유니폼에도 잘 어울리는 범용성을 자랑합니다.",
    features: [
      "국제 규격 레슬링 대회 적합",
      "클래식 블랙/화이트 컬러웨이",
      "표준 레슬링화 규격 준수",
      "내구성 우선 설계",
      "전 사이즈 재고 보유",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/International-BlackWhite.jpg",
    ],
  },
  {
    slug: "kolat",
    name: "Kolat",
    nameKo: "콜랏 레슬링화",
    price: 140000,
    category: "shoes",
    subcategory: "레슬링화",
    collection: "레거시 컬렉션",
    description:
      "레슬링 레전드 카리 콜랏의 이름을 딴 콜랏 레슬링화. 전통과 혁신이 만나 탄생한 레거시 컬렉션의 대표작.",
    features: [
      "카리 콜랏 레거시 디자인",
      "전통적인 레슬링화 실루엣",
      "현대적 소재 적용",
      "우수한 발목 지지력",
      "클래식 레슬링 팬을 위한 디자인",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0523/7079/6977/files/Kolat-Legacy.jpg",
    ],
  },
];

export function getShoeBySlug(slug: string): Product | undefined {
  return shoes.find((s) => s.slug === slug);
}

export const shoeSubcategories = ["전체", "레슬링화", "훈련화", "라이프스타일"];
