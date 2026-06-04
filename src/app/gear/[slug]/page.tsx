import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  const rows = await prisma.product.findMany({ where: { category: "gear", isActive: true }, select: { slug: true } });
  return rows.map(r => ({ slug: r.slug }));
}

export default async function GearDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug }, include: { images: { orderBy: { position: "asc" } } } });
  if (!product) notFound();
  const related = await prisma.product.findMany({ where: { category: "gear", subcategory: product.subcategory, slug: { not: product.slug }, isActive: true }, include: { images: { orderBy: { position: "asc" } } }, take: 4, orderBy: { sortOrder: "asc" } });
  const toProps = (p: typeof product) => ({ slug: p.slug, name: p.name, nameKo: p.nameKo, price: p.priceKrw ?? 0, category: p.category, subcategory: p.subcategory, age: p.age, description: p.descriptionKo ?? "", features: p.features, images: p.images.map(i => i.url), badge: p.badge ?? undefined, collection: p.collection ?? undefined });
  return <ProductDetail product={toProps(product)} descriptionEn={product.descriptionEn ?? undefined} sizes={product.sizes} related={related.map(toProps)} basePath="/gear" categoryLabel="장비" />;
}
