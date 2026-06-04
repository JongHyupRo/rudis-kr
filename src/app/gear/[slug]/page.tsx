import { gear, getGearBySlug } from "@/data/gear";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return gear.map((g) => ({ slug: g.slug }));
}

export default function GearDetailPage({ params }: { params: { slug: string } }) {
  const product = getGearBySlug(params.slug);
  if (!product) notFound();

  const related = gear
    .filter((g) => g.slug !== product.slug && g.subcategory === product.subcategory)
    .slice(0, 4);

  return <ProductDetail product={product} related={related} basePath="/gear" categoryLabel="장비" />;
}
