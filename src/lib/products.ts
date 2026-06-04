import { prisma } from "./prisma";
import { Category, Prisma } from "@prisma/client";

const imageSelect = {
  images: {
    orderBy: { position: "asc" as const },
    select: { url: true, alt: true, position: true },
  },
} as const;

export async function getProductsByCategory(category: Category) {
  return prisma.product.findMany({
    where: { category, isActive: true },
    include: imageSelect,
    orderBy: { sortOrder: "asc" },
  });
}

export async function getProductsFiltered(
  category: Category,
  filters: { subcategory?: string; age?: string; collection?: string; badge?: string }
) {
  const where: Prisma.ProductWhereInput = { category, isActive: true };
  if (filters.subcategory) where.subcategory = filters.subcategory;
  if (filters.age) where.age = filters.age;
  if (filters.collection) where.collection = { contains: filters.collection };
  if (filters.badge) where.badge = filters.badge;

  return prisma.product.findMany({ where, include: imageSelect, orderBy: { sortOrder: "asc" } });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({ where: { slug }, include: imageSelect });
}

export async function getRelatedProducts(slug: string, category: Category, subcategory: string, limit = 4) {
  return prisma.product.findMany({
    where: { category, subcategory, slug: { not: slug }, isActive: true },
    include: imageSelect,
    take: limit,
    orderBy: { sortOrder: "asc" },
  });
}

export async function getAllSlugs(category: Category) {
  const rows = await prisma.product.findMany({ where: { category, isActive: true }, select: { slug: true } });
  return rows.map(r => ({ slug: r.slug }));
}
