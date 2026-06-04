import { PrismaClient } from "@prisma/client";
import { shoes } from "../src/data/shoes";
import { offmatShoes } from "../src/data/offmat";
import { gear } from "../src/data/gear";
import { apparel } from "../src/data/apparel";
import { productDetails } from "../src/data/productDetails";

const prisma = new PrismaClient();

type AgeType = "성인" | "유스" | "공용";

async function main() {
  console.log("🌱 시드 시작...");

  // 기존 데이터 초기화
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  console.log("기존 데이터 삭제 완료");

  const allShoes = [...shoes, ...offmatShoes];
  const allProducts = [
    ...allShoes.map((p) => ({ ...p, category: "shoes" as const })),
    ...gear.map((p) => ({ ...p, category: "gear" as const })),
    ...apparel.map((p) => ({ ...p, category: "apparel" as const })),
  ];

  let created = 0;
  for (const [i, p] of allProducts.entries()) {
    const detail = productDetails[p.slug];

    // 이미지 목록: productDetails의 다중 이미지 우선, 없으면 기존 단일 이미지
    const imageUrls =
      detail?.images?.length ? detail.images : p.images;

    // 설명: 한국어(기존 데이터) + 영문(productDetails)
    const descEn = detail?.description ?? null;

    await prisma.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        nameKo: p.nameKo,
        category: p.category,
        subcategory: p.subcategory,
        age: (p.age as AgeType) ?? "공용",
        model: p.model ?? null,
        collection: p.collection ?? null,
        badge: p.badge ?? null,
        priceKrw: p.price ?? null,
        priceUsd: p.priceUsd ?? null,
        descriptionKo: p.description ?? null,
        descriptionEn: descEn,
        features: p.features ?? [],
        sizes: detail?.sizes ?? [],
        sortOrder: i,
        images: {
          create: imageUrls.map((url, pos) => ({
            url,
            alt: p.nameKo,
            position: pos,
          })),
        },
      },
    });
    created++;
    if (created % 20 === 0) console.log(`  ${created}/${allProducts.length} 완료`);
  }

  console.log(`\n✅ 시드 완료: ${created}개 제품 생성`);

  // 통계
  const stats = await prisma.product.groupBy({
    by: ["category"],
    _count: true,
  });
  console.log("\n카테고리별 수량:");
  stats.forEach((s) => console.log(`  ${s.category}: ${s._count}개`));
}

main()
  .catch((e) => {
    console.error("시드 실패:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
