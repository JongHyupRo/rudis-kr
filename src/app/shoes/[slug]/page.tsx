import { shoes } from "@/data/shoes";
import { offmatShoes } from "@/data/offmat";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";

const allShoes = [...shoes, ...offmatShoes];

export async function generateStaticParams() {
  return allShoes.map((s) => ({ slug: s.slug }));
}

export default function ShoeDetailPage({ params }: { params: { slug: string } }) {
  const product = allShoes.find((s) => s.slug === params.slug);
  if (!product) notFound();

  const related = allShoes
    .filter((s) => s.slug !== product.slug && s.subcategory === product.subcategory)
    .slice(0, 4);

  return <ProductDetail product={product} related={related} basePath="/shoes" categoryLabel="신발" />;
}
