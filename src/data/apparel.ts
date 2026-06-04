import { Product } from "./shoes";

export const apparel: Product[] = [
  // ── 성인: 티셔츠 ──
  {
    slug: "usa-wrestling-gray-camo-tee",
    name: "USA Wrestling Gray Camo Tee",
    nameKo: "USA 레슬링 그레이 카모 티셔츠",
    price: 42000,
    category: "apparel",
    subcategory: "티셔츠",
    age: "성인",
    collection: "USA 레슬링",
    badge: "베스트셀러",
    description:
      "USA 레슬링 공식 라이선스 티셔츠. 그레이 카모 패턴으로 캐주얼한 매력을 더했습니다. 훈련과 일상 모두에서 착용 가능.",
    features: [
      "USA 레슬링 공식 라이선스",
      "그레이 카모 패턴 프린트",
      "수분 배출 원단 (퍼포먼스 핏)",
      "태그리스 넥",
      "S~3XL 사이즈",
      "남녀 공용",
    ],
    images: ["/images/apparel/usa-wrestling-gray-camo-tee.jpg"],
  },
  {
    slug: "faith-over-fear-tee",
    name: "Faith Over Fear Tee",
    nameKo: "페이스 오버 피어 티셔츠",
    price: 38000,
    category: "apparel",
    subcategory: "티셔츠",
    age: "성인",
    collection: "페이스 오버 피어",
    description:
      "두려움보다 믿음을 앞세우는 Faith Over Fear 컬렉션. 격려의 메시지를 담은 그래픽 티셔츠로 매 훈련에 동기부여를 받으세요.",
    features: [
      "Faith Over Fear 그래픽 프린트",
      "소프트 코튼 혼방 소재",
      "릴렉스 핏",
      "화이트, 블랙 컬러",
      "S~2XL 사이즈",
    ],
    images: ["/images/apparel/usa-wrestling-gray-camo-tee.jpg"],
  },
  // ── 성인: 후디 & 풀오버 ──
  {
    slug: "bts-philly-hoodie",
    name: "BTS Philly Sky Line Hoodie",
    nameKo: "BTS 필리 스카이라인 후디",
    price: 72000,
    category: "apparel",
    subcategory: "후디",
    age: "성인",
    badge: "신상품",
    description:
      "필라델피아 스카이라인에서 영감을 받은 BTS 후디. 두꺼운 기모 안감으로 훈련 전후 워밍업에 최적입니다.",
    features: [
      "320g 기모 원단",
      "캥거루 포켓",
      "조절 가능한 후드 끈",
      "RUDIS x BTS 콜라보레이션",
      "남녀 공용 사이즈",
      "블랙, 그레이 컬러",
    ],
    images: ["/images/apparel/bts-philly-hoodie.jpg"],
  },
  {
    slug: "blades-sisters-crop-hoodie",
    name: "Blades Sisters Suplex Crop Hoodie",
    nameKo: "블레이드 시스터즈 크롭 후디",
    price: 68000,
    category: "apparel",
    subcategory: "후디",
    age: "성인",
    description:
      "여성 레슬러를 위한 크롭 후디. 블레이드 시스터즈 디자인으로 강인함과 스타일을 동시에 표현하세요.",
    features: [
      "여성 전용 크롭 핏",
      "기모 안감 보온성",
      "신축성 있는 소재",
      "블레이드 시스터즈 그래픽",
      "XS~XL 사이즈",
    ],
    images: ["/images/apparel/bts-philly-hoodie.jpg"],
  },
  // ── 성인: 반바지 & 팬츠 ──
  {
    slug: "sp26-collection-shorts",
    name: "SP26 Training Shorts",
    nameKo: "SP26 트레이닝 반바지",
    price: 55000,
    category: "apparel",
    subcategory: "반바지",
    age: "성인",
    collection: "SP26 컬렉션",
    badge: "신상품",
    description:
      "SP26 시즌 컬렉션의 트레이닝 반바지. 자유로운 움직임을 위한 최적의 핏과 빠른 건조 기능을 자랑합니다.",
    features: [
      "SP26 시즌 한정 컬렉션",
      "4방향 스트레치 원단",
      "내장 언더 레이어",
      "사이드 포켓 x2",
      "빠른 건조 기능",
      "S~2XL 사이즈",
    ],
    images: ["/images/apparel/sp26-collection-shorts.gif"],
  },
  // ── 성인: 아우터웨어 ──
  {
    slug: "uww-collection-jacket",
    name: "UWW Collection Jacket",
    nameKo: "UWW 컬렉션 재킷",
    price: 110000,
    category: "apparel",
    subcategory: "재킷",
    age: "성인",
    collection: "UWW 컬렉션",
    description:
      "세계 레슬링 연맹(UWW) 공인 컬렉션 재킷. 국제 대회 분위기를 일상에서도 느낄 수 있는 프리미엄 라인.",
    features: [
      "UWW 공식 라이선스",
      "방풍 나일론 외피",
      "메쉬 안감",
      "지퍼 포켓 x3",
      "조절 가능한 밑단",
      "S~XL 사이즈",
    ],
    images: ["/images/apparel/usa-wrestling-gray-camo-tee.jpg"],
  },
  // ── 성인: 스포츠 브라 ──
  {
    slug: "pastel-sports-bra",
    name: "Pastel Collection Sports Bra",
    nameKo: "파스텔 컬렉션 스포츠 브라",
    price: 45000,
    category: "apparel",
    subcategory: "스포츠브라",
    age: "성인",
    collection: "파스텔 컬렉션",
    description:
      "파스텔 컬렉션의 스포츠 브라. 강한 지지력과 세련된 파스텔 컬러로 여성 레슬러의 훈련을 더욱 특별하게.",
    features: [
      "고강도 지지력",
      "소프트 파스텔 컬러",
      "수분 배출 원단",
      "탈착식 패드 포함",
      "XS~XL 사이즈",
      "파스텔 핑크, 라벤더, 민트 컬러",
    ],
    images: ["/images/apparel/pastel-sports-bra.jpg"],
  },
  // ── 성인: 싱글릿 ──
  {
    slug: "collegiate-compression-tights",
    name: "Collegiate Compression Tights",
    nameKo: "콜리지에이트 컴프레션 타이츠",
    price: 62000,
    category: "apparel",
    subcategory: "타이츠",
    age: "성인",
    collection: "콜리지에이트",
    description:
      "대학 레슬링 팀 스타일에서 영감을 받은 컴프레션 타이츠. 근육 지지와 혈액순환 개선으로 훈련 퍼포먼스를 높이세요.",
    features: [
      "컴프레션 피팅",
      "근육 피로 감소",
      "수분 배출 원단",
      "평평한 솔기 봉제",
      "S~XL 사이즈",
      "블랙, 네이비 컬러",
    ],
    images: ["/images/apparel/pastel-sports-bra.jpg"],
  },
  // ── 유스 ──
  {
    slug: "youth-performance-hoodie",
    name: "Youth Performance Hoodie",
    nameKo: "유스 퍼포먼스 후디",
    price: 58000,
    category: "apparel",
    subcategory: "후디",
    age: "유스",
    badge: "신상품",
    description:
      "차세대 레슬러를 위한 유스 퍼포먼스 후디. 성장기 어린이의 활발한 움직임을 방해하지 않는 신축성 소재와 편안한 핏.",
    features: [
      "청소년 전용 설계",
      "신축성 높은 퍼포먼스 원단",
      "수분 배출 기능",
      "YXS~YXL 사이즈",
      "다양한 컬러 옵션",
      "세탁기 세탁 가능",
    ],
    images: ["/images/apparel/bts-philly-hoodie.jpg"],
  },
];

export function getApparelBySlug(slug: string): Product | undefined {
  return apparel.find((a) => a.slug === slug);
}

// 리스트 페이지 필터 구조 (rudis.com 동일)
export const apparelFilterGroups = [
  {
    title: "성인",
    filters: [
      { label: "티셔츠", key: "sub+age", value: "티셔츠+성인" },
      { label: "후디 & 풀오버", key: "sub+age", value: "후디+성인" },
      { label: "반바지 & 팬츠", key: "sub+age", value: "반바지+성인" },
      { label: "아우터웨어", key: "sub+age", value: "재킷+성인" },
      { label: "스포츠 브라", key: "sub+age", value: "스포츠브라+성인" },
      { label: "전체 성인 의류", key: "age", value: "성인" },
    ],
  },
  {
    title: "유스",
    filters: [
      { label: "후디 & 풀오버", key: "sub+age", value: "후디+유스" },
      { label: "전체 유스 의류", key: "age", value: "유스" },
    ],
  },
  {
    title: "컬렉션",
    filters: [
      { label: "USA 레슬링 x RUDIS", key: "collection", value: "USA 레슬링" },
      { label: "UWW x RUDIS", key: "collection", value: "UWW 컬렉션" },
      { label: "콜리지에이트", key: "collection", value: "콜리지에이트" },
      { label: "페이스 오버 피어", key: "collection", value: "페이스 오버 피어" },
      { label: "파스텔 컬렉션", key: "collection", value: "파스텔 컬렉션" },
    ],
  },
];
