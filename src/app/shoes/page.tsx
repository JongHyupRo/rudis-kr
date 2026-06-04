"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { shoes, shoeFilterGroups } from "@/data/shoes";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

function ShoesContent() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(
    searchParams.get("key") ?? null
  );
  const [activeValue, setActiveValue] = useState<string | null>(
    searchParams.get("val") ?? null
  );

  // URL 쿼리로 초기 필터 세팅 (헤더 메가메뉴 링크 처리)
  const paramSub = searchParams.get("sub");
  const paramAge = searchParams.get("age");
  const paramCollection = searchParams.get("collection");
  const paramFilter = searchParams.get("filter");

  const filtered = useMemo(() => {
    // URL 파라미터 우선
    if (paramCollection) return shoes.filter((s) => s.collection?.includes(paramCollection));
    if (paramSub && paramAge) return shoes.filter((s) => s.subcategory === paramSub && (s.age === paramAge || s.age === "공용"));
    if (paramSub) return shoes.filter((s) => s.subcategory === paramSub);
    if (paramAge) return shoes.filter((s) => s.age === paramAge || s.age === "공용");
    if (paramFilter === "베스트셀러") return shoes; // rudis.com과 동일하게 전체 표시
    if (paramFilter === "신상품") return shoes.filter((s) => s.badge === "신상품" || s.badge === "베스트셀러");

    // 사이드 패널 필터
    if (!activeKey || !activeValue) return shoes;
    if (activeKey === "badge" && activeValue === "베스트셀러") return shoes;
    if (activeKey === "badge") return shoes.filter((s) => s.badge === activeValue);
    if (activeKey === "sub") return shoes.filter((s) => s.subcategory === activeValue);
    if (activeKey === "age") return shoes.filter((s) => s.age === activeValue);
    if (activeKey === "collection") return shoes.filter((s) => s.collection === activeValue);
    if (activeKey === "model") return shoes.filter((s) => s.model === activeValue);
    if (activeKey === "sub+age") {
      const [sub, age] = activeValue.split("+");
      return shoes.filter((s) => s.subcategory === sub && (s.age === age || s.age === "공용"));
    }
    return shoes;
  }, [activeKey, activeValue, paramSub, paramAge, paramCollection, paramFilter]);

  const isActive = (key: string | null, value: string | null) =>
    activeKey === key && activeValue === value;

  // 현재 섹션 타이틀
  const pageTitle = paramCollection ?? (paramSub ? `${paramSub} (${paramAge ?? "전체"})` : "전체 신발");

  return (
    <div>
      {/* 페이지 헤더 */}
      <div className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-black uppercase tracking-wide">
          {paramFilter === "베스트셀러" ? "베스트셀러 신발" :
           paramFilter === "신상품" ? "신상품 신발" :
           paramCollection ? paramCollection :
           paramSub ? `${paramSub} - ${paramAge ?? "전체"}` :
           "신발"}
        </h1>
        <p className="text-sm text-gray-400 mt-2">Win more</p>
      </div>

      {/* 제품 수 + 필터 바 */}
      <div className="bg-black text-white flex items-center justify-between px-6 py-3 sticky top-16 z-40">
        <span className="text-sm font-bold">{filtered.length}개 제품</span>
        <button
          className="flex items-center gap-2 text-sm font-bold hover:text-gray-300 transition-colors"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 4h18M7 8h10M11 12h2M9 16h6" />
          </svg>
          필터
        </button>
      </div>

      <div className="flex">
        {/* 필터 패널 (슬라이드) */}
        {filterOpen && (
          <aside className="w-64 flex-shrink-0 border-r border-gray-200 p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold uppercase tracking-widest text-sm">필터</h2>
              <button
                className="text-xs text-gray-400 hover:text-black"
                onClick={() => { setActiveKey(null); setActiveValue(null); }}
              >
                초기화
              </button>
            </div>
            {shoeFilterGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8102e] mb-2 pb-1 border-b border-gray-100">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.filters.map((f) => (
                    <li key={f.label}>
                      <button
                        onClick={() => { setActiveKey(f.key); setActiveValue(f.value); }}
                        className={`text-sm w-full text-left py-1.5 px-2 transition-colors rounded ${
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
        )}

        {/* 제품 그리드 — 4컬럼 (rudis.com 동일) */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} basePath="/shoes" />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-32 text-sm">
              해당 조건에 맞는 제품이 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShoesPage() {
  return (
    <Suspense>
      <ShoesContent />
    </Suspense>
  );
}
