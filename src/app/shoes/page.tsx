"use client";

import { useState, useMemo } from "react";
import { shoes, shoeFilterGroups } from "@/data/shoes";
import ProductCard from "@/components/ProductCard";

export default function ShoesPage() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeKey || !activeValue) return shoes;
    if (activeKey === "badge") return shoes.filter((s) => s.badge === activeValue);
    if (activeKey === "sub") return shoes.filter((s) => s.subcategory === activeValue);
    if (activeKey === "age") return shoes.filter((s) => s.age === activeValue);
    if (activeKey === "collection") return shoes.filter((s) => s.collection === activeValue);
    if (activeKey === "sub+age") {
      const [sub, age] = activeValue.split("+");
      return shoes.filter((s) => s.subcategory === sub && (s.age === age || s.age === "공용"));
    }
    return shoes;
  }, [activeKey, activeValue]);

  const isActive = (key: string | null, value: string | null) =>
    activeKey === key && activeValue === value;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-2">RUDIS</p>
        <h1 className="text-4xl font-black uppercase">신발</h1>
        <p className="text-gray-500 mt-2">레슬링화부터 훈련화까지 — 최고의 그립력과 안정성</p>
      </div>

      <div className="flex gap-10">
        {/* 사이드바 필터 */}
        <aside className="hidden md:block w-52 flex-shrink-0">
          {shoeFilterGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8102e] mb-2 pb-1 border-b border-gray-200">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.filters.map((f) => (
                  <li key={f.label}>
                    <button
                      onClick={() => {
                        setActiveKey(f.key);
                        setActiveValue(f.value);
                      }}
                      className={`text-sm w-full text-left py-1 px-2 transition-colors ${
                        isActive(f.key, f.value)
                          ? "text-[#c8102e] font-bold bg-red-50"
                          : "text-gray-600 hover:text-black hover:bg-gray-50"
                      }`}
                    >
                      {f.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* 모바일 필터 (가로 스크롤) */}
        <div className="md:hidden w-full mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            <button
              onClick={() => { setActiveKey(null); setActiveValue(null); }}
              className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wide border ${!activeKey ? "bg-black text-white border-black" : "border-gray-300 text-gray-600"}`}
            >
              전체
            </button>
            {shoeFilterGroups.flatMap((g) => g.filters).filter((f) => f.key).map((f) => (
              <button
                key={f.label}
                onClick={() => { setActiveKey(f.key); setActiveValue(f.value); }}
                className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wide border ${isActive(f.key, f.value) ? "bg-black text-white border-black" : "border-gray-300 text-gray-600"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 제품 그리드 */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-6">{filtered.length}개 제품</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} basePath="/shoes" />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20">해당 조건에 제품이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
