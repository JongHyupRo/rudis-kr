import { apparel, getApparelBySlug } from "@/data/apparel";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return apparel.map((a) => ({ slug: a.slug }));
}

export default function ApparelDetailPage({ params }: { params: { slug: string } }) {
  const product = getApparelBySlug(params.slug);
  if (!product) notFound();

  const related = apparel
    .filter((a) => a.slug !== product.slug && a.subcategory === product.subcategory)
    .slice(0, 4);

  return <ProductDetail product={product} related={related} basePath="/apparel" categoryLabel="의류" />;
}
