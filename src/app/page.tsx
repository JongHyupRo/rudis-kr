import Link from "next/link";
import { shoes } from "@/data/shoes";
import { gear } from "@/data/gear";
import { apparel } from "@/data/apparel";
import ProductCard from "@/components/ProductCard";

const heroSlides = [
  {
    title: "SP26 컬렉션",
    subtitle: "시즌 최고의 레슬링화",
    cta: "지금 보기",
    href: "/shoes",
    bg: "from-gray-900 to-black",
    accent: "text-[#c8102e]",
  },
  {
    title: "USA 레슬링",
    subtitle: "공식 라이선스 의류 컬렉션",
    cta: "컬렉션 보기",
    href: "/apparel",
    bg: "from-[#002868] to-[#001a45]",
    accent: "text-[#BF0A30]",
  },
  {
    title: "제네시스 기어팩 III",
    subtitle: "레슬러를 위한 완벽한 가방",
    cta: "장비 보기",
    href: "/gear",
    bg: "from-gray-800 to-gray-900",
    accent: "text-yellow-400",
  },
];

const categories = [
  {
    title: "신발",
    desc: "레슬링화부터 훈련화까지",
    href: "/shoes",
    count: shoes.length,
  },
  {
    title: "장비",
    desc: "헤드기어, 니패드, 가방",
    href: "/gear",
    count: gear.length,
  },
  {
    title: "의류",
    desc: "티셔츠, 후디, 반바지",
    href: "/apparel",
    count: apparel.length,
  },
];

export default function HomePage() {
  const featuredShoes = shoes.filter((s) => s.badge).slice(0, 4);
  const featuredGear = gear.filter((g) => g.badge).slice(0, 4);
  const featuredApparel = apparel.filter((a) => a.badge).slice(0, 4);

  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className={`bg-gradient-to-r ${heroSlides[0].bg} min-h-[600px] flex items-center`}>
          <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
            <p className={`text-sm font-bold uppercase tracking-[0.3em] ${heroSlides[0].accent} mb-4`}>
              2024 신상품
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              {heroSlides[0].title}
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-md">
              {heroSlides[0].subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href={heroSlides[0].href}
                className="bg-[#c8102e] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
              >
                {heroSlides[0].cta}
              </Link>
              <Link
                href="/shoes"
                className="border border-white text-white font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
              >
                전체 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 카테고리 배너 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative bg-gray-900 text-white overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 hover:bg-gray-800 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  {cat.count}개 제품
                </p>
                <h2 className="text-3xl font-black uppercase mb-2 group-hover:text-[#c8102e] transition-colors">
                  {cat.title}
                </h2>
                <p className="text-sm text-gray-300">{cat.desc}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[#c8102e] group-hover:underline">
                  바로가기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 베스트셀러 신발 */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-1">신발</p>
            <h2 className="text-3xl font-black uppercase">베스트셀러</h2>
          </div>
          <Link href="/shoes" className="text-sm font-bold uppercase tracking-wider hover:text-[#c8102e] transition-colors">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredShoes.map((product) => (
            <ProductCard key={product.slug} product={product} basePath="/shoes" />
          ))}
        </div>
      </section>

      {/* 프로모션 배너 */}
      <section className={`bg-gradient-to-r ${heroSlides[1].bg} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-xs font-bold uppercase tracking-[0.3em] ${heroSlides[1].accent} mb-4`}>
            USA 레슬링 공식 라이선스
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            {heroSlides[1].title}
          </h2>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto">
            {heroSlides[1].subtitle}
          </p>
          <Link
            href={heroSlides[1].href}
            className={`inline-block bg-[#BF0A30] text-white font-bold px-10 py-4 uppercase tracking-widest text-sm hover:bg-red-800 transition-colors`}
          >
            {heroSlides[1].cta}
          </Link>
        </div>
      </section>

      {/* 신상품 의류 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-1">의류</p>
            <h2 className="text-3xl font-black uppercase">신상품</h2>
          </div>
          <Link href="/apparel" className="text-sm font-bold uppercase tracking-wider hover:text-[#c8102e] transition-colors">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredApparel.map((product) => (
            <ProductCard key={product.slug} product={product} basePath="/apparel" />
          ))}
        </div>
      </section>

      {/* 장비 섹션 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs text-[#c8102e] font-bold uppercase tracking-widest mb-1">장비</p>
              <h2 className="text-3xl font-black uppercase">레슬링 장비</h2>
            </div>
            <Link href="/gear" className="text-sm font-bold uppercase tracking-wider hover:text-[#c8102e] transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredGear.map((product) => (
              <ProductCard key={product.slug} product={product} basePath="/gear" />
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 스토리 배너 */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
            레슬러를 위해,<br />
            <span className="text-[#c8102e]">레슬러가 만든 브랜드</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            RUDIS는 매트 위의 모든 순간을 위해 설계됩니다. 최고의 그립력, 속도, 안정성 — 세계 챔피언들과 함께 개발한 레슬링 전문 장비.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-4xl font-black text-[#c8102e]">10+</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">선수 컬렉션</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#c8102e]">50+</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">제품 라인</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#c8102e]">1위</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">레슬링 브랜드</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
