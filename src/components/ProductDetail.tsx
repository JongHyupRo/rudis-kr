"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/shoes";
import { getProductDetail } from "@/data/productDetails";
import ProductCard from "./ProductCard";

interface Props {
  product: Product;
  related: Product[];
  basePath: string;
  categoryLabel: string;
}

export default function ProductDetail({ product, related, basePath, categoryLabel }: Props) {
  const detail = getProductDetail(product.slug);
  const images = detail?.images?.length ? detail.images : product.images;
  const sizes = detail?.sizes ?? [];
  const [mainImg, setMainImg] = useState(0);

  return (
    <div>
      {/* 브레드크럼 */}
      <nav className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-xs text-gray-400 flex items-center gap-2">
        <Link href="/" className="hover:text-black">홈</Link>
        <span>/</span>
        <Link href={basePath} className="hover:text-black">{categoryLabel}</Link>
        <span>/</span>
        <span className="text-black font-medium">{product.nameKo}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── 이미지 갤러리 ── */}
          <div className="space-y-3">
            {/* 메인 이미지 */}
            <div className="relative bg-gray-50 aspect-square overflow-hidden">
              {images[mainImg] ? (
                <Image
                  src={images[mainImg]}
                  alt={product.nameKo}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-lg">
                  {product.nameKo}
                </div>
              )}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#c8102e] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide z-10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* 썸네일 */}
            {images.length > 1 && (
              <div className="grid grid-cols-6 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImg(i)}
                    className={`relative aspect-square bg-gray-50 overflow-hidden border-2 transition-colors ${
                      mainImg === i ? "border-black" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.nameKo} ${i + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── 제품 정보 ── */}
          <div className="space-y-6">
            {product.collection && (
              <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest">
                {product.collection}
              </p>
            )}

            <div>
              <h1 className="text-3xl font-black uppercase leading-tight">
                {product.nameKo}
              </h1>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide">
                {product.name}
              </p>
            </div>

            <p className="text-3xl font-black">
              ₩{product.price.toLocaleString()}
              {product.priceUsd && (
                <span className="text-base font-normal text-gray-400 ml-3">
                  (USD ${product.priceUsd})
                </span>
              )}
            </p>

            {/* 사이즈 목록 (참고용) */}
            {sizes.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>사이즈</span>
                  <span className="text-gray-400 font-normal normal-case">참고용 (US 기준)</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1.5 text-xs border border-gray-200 text-gray-600 bg-gray-50"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 제품 설명 */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
              {detail?.description && detail.description !== product.description && (
                <p className="text-xs text-gray-400 mt-3 leading-relaxed italic">
                  {detail.description}
                </p>
              )}
            </div>

            {/* 주요 특징 */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">주요 특징</h3>
              <ul className="space-y-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-[#c8102e] font-bold mt-0.5 flex-shrink-0">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* 구매 문의 */}
            <div className="bg-gray-50 border border-gray-200 p-5 space-y-2">
              <p className="text-sm font-bold text-center">구매 문의</p>
              <p className="text-sm text-gray-500 text-center">rudiskorea@example.com</p>
              <p className="text-xs text-gray-400 text-center">팀 주문 및 대량 구매는 별도 문의</p>
            </div>

            {/* 배송/반품 */}
            <div className="space-y-1.5 text-xs text-gray-400">
              <p>✓ 10만원 이상 무료 배송</p>
              <p>✓ 교환/반품 14일 이내</p>
              <p>✓ 정품 보증</p>
            </div>
          </div>
        </div>

        {/* 연관 제품 */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-black uppercase mb-8">연관 제품</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} basePath={basePath} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
