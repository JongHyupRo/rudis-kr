"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { shoeFilterGroups } from "@/data/shoes";
import ProductCard from "@/components/ProductCard";

interface DBProduct {
  slug: string; name: string; nameKo: string; price: number; priceUsd?: number | null;
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
    model: p.model ?? undefined,
  };
}

function ShoesContent() {
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const paramSub = searchParams.get("sub");
  const paramAge = searchParams.get("age");
  const paramCollection = searchParams.get("collection");
  const paramFilter = searchParams.get("filter");

  // DB에서 제품 로드
  useEffect(() => {
    fetch("/api/products?category=shoes")
      .then(r => r.json())
      .then(data => { setAllProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!allProducts.length) return [];
    let list = allProducts;
    if (paramCollection) return list.filter(s => s.collection?.includes(paramCollection));
    if (paramSub && paramAge) return list.filter(s => s.subcategory === paramSub && (s.age === paramAge || s.age === "공용"));
    if (paramSub) return list.filter(s => s.subcategory === paramSub);
    if (paramAge) return list.filter(s => s.age === paramAge || s.age === "공용");
    if (paramFilter === "오프매트") return list.filter(s => s.subcategory === "훈련화" || s.subcategory === "라이프스타일");
    if (!activeKey || !activeValue) return list;
    if (activeKey === "badge") return list.filter(s => s.badge === activeValue);
    if (activeKey === "sub") return list.filter(s => s.subcategory === activeValue);
    if (activeKey === "age") return list.filter(s => s.age === activeValue);
    if (activeKey === "collection") return list.filter(s => s.collection === activeValue);
    if (activeKey === "model") return list.filter(s => s.model === activeValue);
    if (activeKey === "sub+age") {
      const [sub, age] = activeValue.split("+");
      return list.filter(s => s.subcategory === sub && (s.age === age || s.age === "공용"));
    }
    return list;
  }, [allProducts, activeKey, activeValue, paramSub, paramAge, paramCollection, paramFilter]);

  const isActive = (key: string | null, value: string | null) => activeKey === key && activeValue === value;

  return (
    <div>
      <div className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-black uppercase tracking-wide">
          {paramFilter === "오프매트" ? "오프매트 슈즈" : paramCollection ?? (paramSub ? `${paramSub}` : "신발")}
        </h1>
        <p className="text-sm text-gray-400 mt-2">Win more</p>
      </div>

      <div className="bg-black text-white flex items-center justify-between px-6 py-3 sticky top-16 z-40">
        <span className="text-sm font-bold">{loading ? "로딩 중..." : `${filtered.length}개 제품`}</span>
        <button className="flex items-center gap-2 text-sm font-bold hover:text-gray-300 transition-colors" onClick={() => setFilterOpen(!filterOpen)}>
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
            {shoeFilterGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8102e] mb-2 pb-1 border-b border-gray-100">{group.title}</p>
                <ul className="space-y-1">
                  {group.filters.map((f) => (
                    <li key={f.label}>
                      <button onClick={() => { setActiveKey(f.key); setActiveValue(f.value); }}
                        className={`text-sm w-full text-left py-1.5 px-2 transition-colors rounded ${isActive(f.key, f.value) ? "text-[#c8102e] font-bold bg-red-50" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>
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
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse"><div className="bg-gray-200 aspect-square" /><div className="mt-2 h-4 bg-gray-200 rounded" /></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p) => <ProductCard key={p.slug} product={toCardProps(p)} basePath="/shoes" />)}
            </div>
          )}
          {!loading && filtered.length === 0 && <p className="text-center text-gray-400 py-32 text-sm">해당 조건에 맞는 제품이 없습니다.</p>}
        </div>
      </div>
    </div>
  );
}

export default function ShoesPage() {
  return <Suspense><ShoesContent /></Suspense>;
}
