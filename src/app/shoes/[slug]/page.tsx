import { shoes, getShoeBySlug } from "@/data/shoes";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return shoes.map((s) => ({ slug: s.slug }));
}

export default function ShoeDetailPage({ params }: { params: { slug: string } }) {
  const product = getShoeBySlug(params.slug);
  if (!product) notFound();

  const related = shoes
    .filter((s) => s.slug !== product.slug && s.subcategory === product.subcategory)
    .slice(0, 4);

  return <ProductDetail product={product} related={related} basePath="/shoes" categoryLabel="신발" />;
}
