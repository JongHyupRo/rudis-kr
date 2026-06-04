import { shoes, getShoeBySlug } from "@/data/shoes";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return shoes.map((s) => ({ slug: s.slug }));
}

export default function ShoeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getShoeBySlug(params.slug);
  if (!product) notFound();

  const related = shoes
    .filter((s) => s.slug !== product.slug && s.subcategory === product.subcategory)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-black">홈</Link>
        <span>/</span>
        <Link href="/shoes" className="hover:text-black">신발</Link>
        <span>/</span>
        <span className="text-black font-medium">{product.nameKo}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* 이미지 */}
        <div>
          <div className="bg-gray-100 aspect-square flex items-center justify-center relative">
            <span className="text-gray-400 text-lg font-medium">{product.nameKo}</span>
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#c8102e] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                {product.badge}
              </span>
            )}
          </div>
          {/* 썸네일 */}
          <div className="flex gap-3 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 bg-gray-100 flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-black transition-colors" />
            ))}
          </div>
        </div>

        {/* 제품 정보 */}
        <div>
          {product.collection && (
            <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-2">
              {product.collection}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight">
            {product.nameKo}
          </h1>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide">{product.subcategory}</p>

          <p className="text-3xl font-black mt-6">
            ₩{product.price.toLocaleString()}
          </p>

          {/* 제품 설명 */}
          <p className="text-gray-600 mt-6 leading-relaxed">{product.description}</p>

          {/* 주요 특징 */}
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">주요 특징</h3>
            <ul className="space-y-2">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-[#c8102e] font-bold mt-0.5">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* 구매 안내 (장바구니 없음) */}
          <div className="mt-10 p-5 bg-gray-50 border border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              구매 문의: <strong>rudiskorea@example.com</strong>
            </p>
            <p className="text-xs text-gray-400 text-center mt-1">
              팀 주문 및 대량 구매는 별도 문의 주세요.
            </p>
          </div>

          {/* 배송 안내 */}
          <div className="mt-6 space-y-2 text-xs text-gray-400">
            <p>✓ 10만원 이상 무료 배송</p>
            <p>✓ 교환/반품 14일 이내 가능</p>
            <p>✓ 정품 보증</p>
          </div>
        </div>
      </div>

      {/* 연관 제품 */}
      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-black uppercase mb-8">연관 제품</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} basePath="/shoes" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
