import { prisma } from "./prisma";
import { Category, Age } from "@prisma/client";

// 공통 include (이미지 포함)
const productInclude = {
  images: {
    orderBy: { position: "asc" as const },
  },
} as const;

// 카테고리별 전체 목록
export async function getProductsByCategory(category: Category) {
  return prisma.product.findMany({
    where: { category, isActive: true },
    include: productInclude,
    orderBy: { sortOrder: "asc" },
  });
}

// 카테고리 + 서브카테고리 필터
export async function getProductsBySubcategory(
  category: Category,
  subcategory: string,
  age?: Age
) {
  return prisma.product.findMany({
    where: {
      category,
      subcategory,
      age: age ?? undefined,
      isActive: true,
    },
    include: productInclude,
    orderBy: { sortOrder: "asc" },
  });
}

// 컬렉션 필터
export async function getProductsByCollection(collection: string) {
  return prisma.product.findMany({
    where: { collection: { contains: collection }, isActive: true },
    include: productInclude,
    orderBy: { sortOrder: "asc" },
  });
}

// 단일 제품 조회
export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: productInclude,
  });
}

// 연관 제품 (같은 subcategory)
export async function getRelatedProducts(
  slug: string,
  category: Category,
  subcategory: string,
  limit = 4
) {
  return prisma.product.findMany({
    where: {
      category,
      subcategory,
      slug: { not: slug },
      isActive: true,
    },
    include: productInclude,
    take: limit,
    orderBy: { sortOrder: "asc" },
  });
}

// 모든 슬러그 (정적 생성용)
export async function getAllSlugs(category: Category) {
  const products = await prisma.product.findMany({
    where: { category, isActive: true },
    select: { slug: true },
  });
  return products.map((p) => ({ slug: p.slug }));
}

// 전체 신발 슬러그 (shoes + offmat 통합)
export async function getAllShoeSlugs() {
  return getAllSlugs("shoes");
}
