"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { gear, gearFilterGroups, gearCatMap } from "@/data/gear";
import ProductCard from "@/components/ProductCard";

function GearContent() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);

  const paramSub = searchParams.get("sub");
  const paramCat = searchParams.get("cat");
  const paramFilter = searchParams.get("filter");

  const filtered = useMemo(() => {
    if (paramSub) return gear.filter((g) => g.subcategory === paramSub);
    if (paramCat) {
      const subs = gearCatMap[paramCat] ?? [];
      return gear.filter((g) => subs.includes(g.subcategory));
    }
    if (paramFilter === "베스트셀러") return gear.filter((g) => g.badge === "베스트셀러");
    if (paramFilter === "신상품") return gear.filter((g) => g.badge === "신상품");

    if (!activeKey || !activeValue) return gear;
    if (activeKey === "badge") return gear.filter((g) => g.badge === activeValue);
    if (activeKey === "sub") return gear.filter((g) => g.subcategory === activeValue);
    if (activeKey === "cat") {
      const subs = gearCatMap[activeValue] ?? [];
      return gear.filter((g) => subs.includes(g.subcategory));
    }
    return gear;
  }, [activeKey, activeValue, paramSub, paramCat, paramFilter]);

  const isActive = (key: string | null, value: string | null) =>
    activeKey === key && activeValue === value;

  return (
    <div>
      <div className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-black uppercase tracking-wide">
          {paramFilter === "베스트셀러" ? "베스트셀러 장비" :
           paramFilter === "신상품" ? "신상품 장비" :
           paramSub ?? (paramCat ? `${paramCat} 장비` : "장비")}
        </h1>
        <p className="text-sm text-gray-400 mt-2">레슬링의 모든 것</p>
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
            {gearFilterGroups.map((group) => (
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
              <ProductCard key={product.slug} product={product} basePath="/gear" />
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

export default function GearPage() {
  return <Suspense><GearContent /></Suspense>;
}
