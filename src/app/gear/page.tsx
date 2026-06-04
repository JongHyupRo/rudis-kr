"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { gearFilterGroups, gearCatMap } from "@/data/gear";
import ProductCard from "@/components/ProductCard";

interface DBProduct {
  slug: string; name: string; nameKo: string; price: number;
  category: string; subcategory: string; age: string; description: string;
  features: string[]; sizes: string[]; images: { url: string; alt: string | null; position: number }[];
  badge?: string | null; collection?: string | null; model?: string | null;
}

function toCardProps(p: DBProduct) {
  return {
    slug: p.slug, name: p.name, nameKo: p.nameKo, price: p.price,
    category: p.category, subcategory: p.subcategory, age: p.age,
    description: p.description, features: p.features,
    images: p.images.map(i => i.url),
    badge: p.badge ?? undefined, collection: p.collection ?? undefined,
  };
}

function GearContent() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const paramSub = searchParams.get("sub");
  const paramCat = searchParams.get("cat");

  useEffect(() => {
    fetch("/api/products?category=gear")
      .then(r => r.json())
      .then(data => { setAllProducts(data); setLoading(false); });
  }, []);

  const filtered = useMemo(() => {
    if (!allProducts.length) return [];
    if (paramSub) return allProducts.filter(g => g.subcategory === paramSub);
    if (paramCat) { const subs = gearCatMap[paramCat] ?? []; return allProducts.filter(g => subs.includes(g.subcategory)); }
    if (!activeKey || !activeValue) return allProducts;
    if (activeKey === "badge") return allProducts.filter(g => g.badge === activeValue);
    if (activeKey === "sub") return allProducts.filter(g => g.subcategory === activeValue);
    if (activeKey === "cat") { const subs = gearCatMap[activeValue] ?? []; return allProducts.filter(g => subs.includes(g.subcategory)); }
    return allProducts;
  }, [allProducts, activeKey, activeValue, paramSub, paramCat]);

  const isActive = (key: string | null, value: string | null) => activeKey === key && activeValue === value;

  return (
    <div>
      <div className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-black uppercase tracking-wide">{paramSub ?? "장비"}</h1>
        <p className="text-sm text-gray-400 mt-2">레슬링의 모든 것</p>
      </div>
      <div className="bg-black text-white flex items-center justify-between px-6 py-3 sticky top-16 z-40">
        <span className="text-sm font-bold">{loading ? "로딩 중..." : `${filtered.length}개 제품`}</span>
        <button className="flex items-center gap-2 text-sm font-bold hover:text-gray-300" onClick={() => setFilterOpen(!filterOpen)}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 8h10M11 12h2M9 16h6" /></svg>
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
                    <li key={f.label}><button onClick={() => { setActiveKey(f.key); setActiveValue(f.value); }}
                      className={`text-sm w-full text-left py-1.5 px-2 transition-colors rounded ${isActive(f.key, f.value) ? "text-[#c8102e] font-bold bg-red-50" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>{f.label}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        )}
        <div className="flex-1 p-6">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{Array.from({ length: 8 }).map((_, i) => (<div key={i} className="animate-pulse"><div className="bg-gray-200 aspect-square" /><div className="mt-2 h-4 bg-gray-200 rounded" /></div>))}</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{filtered.map(p => <ProductCard key={p.slug} product={toCardProps(p)} basePath="/gear" />)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GearPage() { return <Suspense><GearContent /></Suspense>; }
