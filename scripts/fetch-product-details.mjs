import { writeFileSync } from 'fs';

const slugs = [
  'hildebrandt-girls-wrestling-shoes-all-heart','hildebrandt-girls-wrestling-shoes-clear-sky','hildebrandt-girls-wrestling-shoes-electric-lilac','hildebrandt-girls-wrestling-shoes-metamorphosis-black','hildebrandt-girls-wrestling-shoes-pastel',
  'hildebrandt-womens-adult-wrestling-shoes-clear-sky','hildebrandt-womens-adult-wrestling-shoes-electric-lilac','hildebrandt-womens-adult-wrestling-shoes-metamorphosis-black','hildebrandt-womens-adult-wrestling-shoes-pastel',
  'jb1-adult-wrestling-shoes-black-metal','jb1-adult-wrestling-shoes-blackbird','jb1-adult-wrestling-shoes-make-your-own-luck','jb1-adult-wrestling-shoes-neon-surge','jb1-adult-wrestling-shoes-white','jb1-adult-wrestling-shoes-white-hot',
  'kenny-monday-adult-wrestling-shoes-black',
  'ks-infinity-edge-adult-wrestling-shoes-carbon-black','ks-infinity-edge-adult-wrestling-shoes-winter-warfare',
  'rudis-alpha-2-0-adult-wrestling-shoes-happy-2','rudis-alpha-2-0-adult-wrestling-shoes-pink-power','rudis-alpha-2-0-adult-wrestling-shoes-terrain',
  'rudis-alpha-2-0-youth-wrestling-shoes-happy-2','rudis-alpha-2-0-youth-wrestling-shoes-pink-power',
  'rudis-colt-4-0-adult-wrestling-shoes-black-night','rudis-colt-4-0-adult-wrestling-shoes-ghost-division','rudis-colt-4-0-adult-wrestling-shoes-neon-cereal-milk','rudis-colt-4-0-adult-wrestling-shoes-pastel','rudis-colt-4-0-adult-wrestling-shoes-pink',
  'rudis-colt-4-0-wide-adult-wrestling-shoes-black-night','rudis-colt-4-0-wide-adult-wrestling-shoes-ghost-division',
  'rudis-colt-4-0-youth-wrestling-shoes-neon-cereal-milk','rudis-colt-4-0-youth-wrestling-shoes-ninja-turtle','rudis-colt-4-0-youth-wrestling-shoes-pastel','rudis-colt-4-0-youth-wrestling-shoes-pink',
  'rudis-courage-adult-wrestling-shoes-midnight-smoke','rudis-courage-youth-wrestling-shoes-midnight-smoke',
  'rudis-international-adult-wrestling-shoes-white-black',
  'rudis-jb-ultralite-adult-wrestling-shoes-barely-there',
  'rudis-journey-adult-training-shoes-pink-glow','rudis-journey-adult-training-shoes-predator','rudis-journey-adult-training-shoes-sirus-white','rudis-journey-adult-training-shoes-tornado-warning','rudis-journey-adult-training-shoes-tropical-dusk',
  'rudis-journey-knit-adult-training-shoes-ben-askren-pink','rudis-journey-knit-adult-training-shoes-ben-askren-red',
  'rudis-journey-knit-adult-training-shoes-black','rudis-journey-knit-adult-training-shoes-black-red','rudis-journey-knit-adult-training-shoes-camel',
  'rudis-journey-knit-adult-training-shoes-coastal-blue','rudis-journey-knit-adult-training-shoes-electric-green','rudis-journey-knit-adult-training-shoes-electric-pink',
  'rudis-journey-knit-adult-training-shoes-lavender','rudis-journey-knit-adult-training-shoes-midnight-white','rudis-journey-knit-adult-training-shoes-moonbeam',
  'rudis-journey-knit-adult-training-shoes-morpho-blue','rudis-journey-knit-adult-training-shoes-navy','rudis-journey-knit-adult-training-shoes-neon','rudis-journey-knit-adult-training-shoes-pink',
  'rudis-journey-knit-adult-training-shoes-ranger-green','rudis-journey-knit-adult-training-shoes-red','rudis-journey-knit-adult-training-shoes-sandstorm',
  'rudis-journey-knit-adult-training-shoes-sky-blue','rudis-journey-knit-adult-training-shoes-south-beach','rudis-journey-knit-adult-training-shoes-thermal-surge',
  'rudis-journey-knit-adult-training-shoes-usa','rudis-journey-knit-adult-training-shoes-volt','rudis-journey-knit-adult-training-shoes-white-hot','rudis-journey-knit-adult-training-shoes-white-neon',
  'rudis-journey-knit-youth-training-shoes-ben-askren-pink','rudis-journey-knit-youth-training-shoes-ben-askren-red',
  'rudis-journey-knit-youth-training-shoes-black','rudis-journey-knit-youth-training-shoes-black-red','rudis-journey-knit-youth-training-shoes-camel',
  'rudis-journey-knit-youth-training-shoes-coastal-blue','rudis-journey-knit-youth-training-shoes-electric-green','rudis-journey-knit-youth-training-shoes-electric-pink',
  'rudis-journey-knit-youth-training-shoes-lavender','rudis-journey-knit-youth-training-shoes-midnight-white','rudis-journey-knit-youth-training-shoes-moonbeam',
  'rudis-journey-knit-youth-training-shoes-navy','rudis-journey-knit-youth-training-shoes-pink','rudis-journey-knit-youth-training-shoes-ranger-green',
  'rudis-journey-knit-youth-training-shoes-sandstorm','rudis-journey-knit-youth-training-shoes-sky-blue','rudis-journey-knit-youth-training-shoes-south-beach',
  'rudis-journey-knit-youth-training-shoes-thermal-surge','rudis-journey-knit-youth-training-shoes-usa','rudis-journey-knit-youth-training-shoes-white-hot','rudis-journey-knit-youth-training-shoes-white-neon',
  'rudis-journey-mystery-shoes','rudis-journey-youth-mystery-shoes',
  'rudis-journey-youth-training-shoes-pink-glow','rudis-journey-youth-training-shoes-predator','rudis-journey-youth-training-shoes-sirus-white','rudis-journey-youth-training-shoes-tornado-warning','rudis-journey-youth-training-shoes-tropical-storm',
  'rudis-kolat-adult-wrestling-shoes-inferno','rudis-kolat-adult-wrestling-shoes-legacy','rudis-kolat-adult-wrestling-shoes-light-speed','rudis-kolat-adult-wrestling-shoes-volt-pink','rudis-kolat-youth-wrestling-shoes-volt-pink',
  'rudis-ks-infinity-edge-adult-wrestling-shoes-usa','rudis-ks-infinity-edge-youth-wrestling-shoes-usa',
  'rudis-ks-power-adult-wrestling-shoes-black-red','rudis-ks-power-adult-wrestling-shoes-white-camo','rudis-ks-power-youth-wrestling-shoes-black-red','rudis-ks-power-youth-wrestling-shoes-white-camo',
  'rudis-quest-adult-lifestyle-shoes-ranger-black','rudis-quest-adult-lifestyle-shoes-ranger-white','rudis-quest-adult-lifestyle-shoes-sky',
  'rudis-quest-youth-lifestyle-shoes-ranger-black','rudis-quest-youth-lifestyle-shoes-ranger-white','rudis-quest-youth-lifestyle-shoes-sky',
  'rudis-samurai-speed-adult-wrestling-shoes-a-way-of-life','rudis-samurai-speed-adult-wrestling-shoes-all-in','rudis-samurai-speed-adult-wrestling-shoes-dswc',
  'rudis-samurai-speed-youth-wrestling-shoes-a-way-of-life','rudis-samurai-speed-youth-wrestling-shoes-dswc',
  'rudis-street-adult-lifestyle-shoes-all-heart','rudis-street-adult-lifestyle-shoes-black','rudis-street-adult-lifestyle-shoes-flamingo-pink',
  'rudis-street-adult-lifestyle-shoes-lunar','rudis-street-adult-lifestyle-shoes-metamorphosis','rudis-street-adult-lifestyle-shoes-navy',
  'rudis-street-adult-lifestyle-shoes-ranger-green','rudis-street-adult-lifestyle-shoes-south-beach','rudis-street-adult-lifestyle-shoes-tactical-tan',
  'rudis-street-adult-lifestyle-shoes-thermal-surge','rudis-street-adult-lifestyle-shoes-utility-green','rudis-street-adult-lifestyle-shoes-white',
  'rudis-street-youth-lifestyle-shoes-all-heart','rudis-street-youth-lifestyle-shoes-black','rudis-street-youth-lifestyle-shoes-flamingo-pink',
  'rudis-street-youth-lifestyle-shoes-lunar','rudis-street-youth-lifestyle-shoes-metamorphosis',
  'rudis-street-youth-lifestyle-shoes-ranger-green','rudis-street-youth-lifestyle-shoes-south-beach','rudis-street-youth-lifestyle-shoes-thermal-surge',
  'usa-wrestling-colt-4-0-adult-wrestling-shoes-gray-camo',
  'usa-wrestling-international-adult-wrestling-shoes-usa-black',
  'usa-wrestling-quest-adult-lifestyle-runner-gray-camo','usa-wrestling-quest-adult-lifestyle-runner-usa-white',
  'usa-wrestling-quest-youth-lifestyle-runner-gray-camo','usa-wrestling-quest-youth-lifestyle-runner-usa-white',
  'usa-wrestling-sf-tbilisi-2-0-adult-wrestling-shoes-usa-black','usa-wrestling-sf-tbilisi-2-0-adult-wrestling-shoes-usa-white',
];

async function fetchProduct(slug) {
  try {
    const res = await fetch(`https://www.rudis.com/products/${slug}.json`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const p = data.product;
    if (!p) return null;

    // HTML 태그 제거
    const desc = (p.body_html || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 600);

    // 이미지 URL (최대 7장)
    const images = (p.images || []).slice(0, 7).map(i => i.src);

    // 사이즈 (option1 중복 제거)
    const sizes = [...new Set((p.variants || []).map(v => v.option1).filter(Boolean))];

    return { slug, description: desc, images, sizes };
  } catch {
    return null;
  }
}

// 동시 10개씩 배치 처리
async function fetchBatch(batch) {
  return Promise.all(batch.map(fetchProduct));
}

console.log(`총 ${slugs.length}개 제품 수집 시작...`);
const results = [];
const batchSize = 10;

for (let i = 0; i < slugs.length; i += batchSize) {
  const batch = slugs.slice(i, i + batchSize);
  const batchResults = await fetchBatch(batch);
  const ok = batchResults.filter(Boolean);
  results.push(...ok);
  console.log(`${Math.min(i + batchSize, slugs.length)}/${slugs.length} 완료 (성공: ${ok.length}/${batch.length})`);
}

console.log(`\n✓ 총 ${results.length}개 성공`);

// TypeScript 파일 생성
const entries = results.map(r => {
  const imgs = r.images.map(u => `    "${u}"`).join(',\n');
  const szs = r.sizes.map(s => `"${s}"`).join(', ');
  const desc = r.description.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return `  "${r.slug}": {
    description: "${desc}",
    images: [\n${imgs}\n    ],
    sizes: [${szs}],
  }`;
}).join(',\n');

const output = `// Auto-generated from rudis.com Shopify Product API
// Generated: ${new Date().toISOString()}
export interface ProductDetail {
  description: string;
  images: string[];
  sizes: string[];
}

export const productDetails: Record<string, ProductDetail> = {
${entries}
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
`;

const outPath = '/Volumes/ACASIS CM073 Media/Projects/rudis-kr/src/data/productDetails.ts';
writeFileSync(outPath, output, 'utf-8');
console.log(`\n✓ 파일 생성 완료: ${outPath}`);
console.log(`  총 ${results.length}개 제품 데이터`);
