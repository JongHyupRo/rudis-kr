"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { apparel, apparelFilterGroups } from "@/data/apparel";
import ProductCard from "@/components/ProductCard";

function ApparelContent() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);

  const paramSub = searchParams.get("sub");
  const paramAge = searchParams.get("age");
  const paramCollection = searchParams.get("collection");
  const paramFilter = searchParams.get("filter");

  const filtered = useMemo(() => {
    if (paramCollection) return apparel.filter((a) => a.collection?.includes(paramCollection));
    if (paramSub && paramAge) return apparel.filter((a) => a.subcategory === paramSub && a.age === paramAge);
    if (paramSub) return apparel.filter((a) => a.subcategory === paramSub);
    if (paramAge) return apparel.filter((a) => a.age === paramAge);
    if (paramFilter === "베스트셀러") return apparel.filter((a) => a.badge === "베스트셀러");
    if (paramFilter === "신상품") return apparel.filter((a) => a.badge === "신상품");

    if (!activeKey || !activeValue) return apparel;
    if (activeKey === "badge") return apparel.filter((a) => a.badge === activeValue);
    if (activeKey === "sub") return apparel.filter((a) => a.subcategory === activeValue);
    if (activeKey === "age") return apparel.filter((a) => a.age === activeValue);
    if (activeKey === "collection") return apparel.filter((a) => a.collection?.includes(activeValue));
    if (activeKey === "sub+age") {
      const [sub, age] = activeValue.split("+");
      return apparel.filter((a) => a.subcategory === sub && a.age === age);
    }
    return apparel;
  }, [activeKey, activeValue, paramSub, paramAge, paramCollection, paramFilter]);

  const isActive = (key: string | null, value: string | null) =>
    activeKey === key && activeValue === value;

  return (
    <div>
      <div className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-black uppercase tracking-wide">
          {paramFilter === "베스트셀러" ? "베스트셀러 의류" :
           paramFilter === "신상품" ? "신상품 의류" :
           paramCollection ?? (paramSub ? `${paramSub} - ${paramAge ?? "전체"}` : "의류")}
        </h1>
        <p className="text-sm text-gray-400 mt-2">매트 안팎에서 RUDIS와 함께</p>
      </div>

      <div className="bg-black text-white flex items-center justify-between px-6 py-3 sticky top-16 z-40">
        <span className="text-sm font-bold">{filtered.length}개 제품</span>
        <button
          className="flex items-center gap-2 text-sm font-bold hover:text-gray-300 transition-colors"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 8h10M11 12h2M9 16h6" />
          </svg>
          필터
        </button>
      </div>

      <div className="flex">
        {filterOpen && (
          <aside className="w-64 flex-shrink-0 border-r border-gray-200 p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold uppercase tracking-widest text-sm">필터</h2>
              <button className="text-xs text-gray-400 hover:text-black" onClick={() => { setActiveKey(null); setActiveValue(null); }}>초기화</button>
            </div>
            {apparelFilterGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8102e] mb-2 pb-1 border-b border-gray-100">{group.title}</p>
                <ul className="space-y-1">
                  {group.filters.map((f) => (
                    <li key={f.label}>
                      <button
                        onClick={() => { setActiveKey(f.key); setActiveValue(f.value); }}
                        className={`text-sm w-full text-left py-1.5 px-2 transition-colors rounded ${isActive(f.key, f.value) ? "text-[#c8102e] font-bold bg-red-50" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}
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

        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} basePath="/apparel" />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-32 text-sm">해당 조건에 맞는 제품이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApparelPage() {
  return <Suspense><ApparelContent /></Suspense>;
}
