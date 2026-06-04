import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/shoes";
import ProductCard from "./ProductCard";

interface Props {
  product: Product;
  related: Product[];
  basePath: string;
  categoryLabel: string;
}

export default function ProductDetail({ product, related, basePath, categoryLabel }: Props) {
  const [mainImage, ...thumbImages] = product.images;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-black">홈</Link>
        <span>/</span>
        <Link href={basePath} className="hover:text-black">{categoryLabel}</Link>
        <span>/</span>
        <span className="text-black font-medium">{product.nameKo}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* 이미지 영역 */}
        <div>
          <div className="relative bg-gray-100 aspect-square overflow-hidden">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={product.nameKo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">{product.nameKo}</span>
              </div>
            )}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#c8102e] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide z-10">
                {product.badge}
              </span>
            )}
          </div>
          {/* 썸네일 */}
          {thumbImages.length > 0 && (
            <div className="flex gap-3 mt-3">
              {thumbImages.map((img, i) => (
                <div key={i} className="relative w-20 h-20 bg-gray-100 flex-shrink-0 border-2 border-transparent hover:border-black transition-colors cursor-pointer overflow-hidden">
                  <Image src={img} alt={`${product.nameKo} ${i + 2}`} fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>
          )}
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

          <p className="text-gray-600 mt-6 leading-relaxed">{product.description}</p>

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

          <div className="mt-10 p-5 bg-gray-50 border border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              구매 문의: <strong>rudiskorea@example.com</strong>
            </p>
            <p className="text-xs text-gray-400 text-center mt-1">
              팀 주문 및 대량 구매는 별도 문의 주세요.
            </p>
          </div>

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
              <ProductCard key={p.slug} product={p} basePath={basePath} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
