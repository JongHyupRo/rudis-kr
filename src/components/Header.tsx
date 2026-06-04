"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "신발",
    href: "/shoes",
    sub: [
      { label: "레슬링화", href: "/shoes?sub=레슬링화" },
      { label: "훈련화", href: "/shoes?sub=훈련화" },
      { label: "선수 컬렉션", href: "/shoes?collection=true" },
    ],
  },
  {
    label: "장비",
    href: "/gear",
    sub: [
      { label: "가방", href: "/gear?sub=가방" },
      { label: "헤드기어", href: "/gear?sub=헤드기어" },
      { label: "니패드", href: "/gear?sub=니패드" },
      { label: "싱글릿", href: "/gear?sub=싱글릿" },
      { label: "액세서리", href: "/gear?sub=액세서리" },
    ],
  },
  {
    label: "의류",
    href: "/apparel",
    sub: [
      { label: "티셔츠", href: "/apparel?sub=티셔츠" },
      { label: "후디", href: "/apparel?sub=후디" },
      { label: "반바지", href: "/apparel?sub=반바지" },
      { label: "재킷", href: "/apparel?sub=재킷" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      {/* 상단 배너 */}
      <div className="bg-[#c8102e] text-center py-2 text-sm font-medium tracking-wide">
        10만원 이상 무료 배송 | 팀 주문 할인 문의 환영
      </div>

      {/* 메인 헤더 */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* 로고 */}
        <Link href="/" className="text-2xl font-black tracking-widest hover:text-[#c8102e] transition-colors">
          RUDIS
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-bold tracking-wider uppercase hover:text-[#c8102e] transition-colors py-5 block"
              >
                {item.label}
              </Link>
              {activeMenu === item.label && (
                <div className="absolute top-full left-0 bg-black border-t-2 border-[#c8102e] min-w-[180px] py-2 shadow-xl">
                  {item.sub.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="block px-5 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#c8102e] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-bold tracking-wider uppercase hover:text-[#c8102e] transition-colors">
            검색
          </button>
          {/* 모바일 메뉴 토글 */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-800">
              <Link
                href={item.href}
                className="block px-4 py-4 font-bold uppercase tracking-wider text-sm hover:text-[#c8102e]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              <div className="pl-6 pb-2">
                {item.sub.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block py-2 text-sm text-gray-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
