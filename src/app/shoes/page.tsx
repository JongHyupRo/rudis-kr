"use client";

import { useState } from "react";
import { shoes, shoeSubcategories } from "@/data/shoes";
import ProductCard from "@/components/ProductCard";

export default function ShoesPage() {
  const [active, setActive] = useState("전체");

  const filtered =
    active === "전체" ? shoes : shoes.filter((s) => s.subcategory === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-2">RUDIS</p>
        <h1 className="text-4xl font-black uppercase">신발</h1>
        <p className="text-gray-500 mt-2">
          레슬링화부터 훈련화까지 — 최고의 그립력과 안정성
        </p>
      </div>

      {/* 서브카테고리 필터 */}
      <div className="flex gap-3 flex-wrap mb-10 border-b border-gray-200 pb-6">
        {shoeSubcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
              active === cat
                ? "bg-black text-white"
                : "bg-white text-gray-600 border border-gray-300 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} basePath="/shoes" />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-20">해당 카테고리에 제품이 없습니다.</p>
      )}
    </div>
  );
}
