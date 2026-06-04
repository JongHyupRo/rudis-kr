"use client";

import Link from "next/link";
import { useState } from "react";

type SubItem = { label: string; href: string };
type SubGroup = { title: string; items: SubItem[] };
type NavItem = { label: string; href: string; groups: SubGroup[] };

const navItems: NavItem[] = [
  {
    label: "신발",
    href: "/shoes",
    groups: [
      {
        title: "성인",
        items: [
          { label: "레슬링화", href: "/shoes?sub=레슬링화&age=성인" },
          { label: "훈련화", href: "/shoes?sub=훈련화&age=성인" },
          { label: "라이프스타일", href: "/shoes?sub=라이프스타일&age=성인" },
        ],
      },
      {
        title: "유스",
        items: [
          { label: "레슬링화", href: "/shoes?sub=레슬링화&age=유스" },
          { label: "훈련화", href: "/shoes?sub=훈련화&age=유스" },
          { label: "라이프스타일", href: "/shoes?sub=라이프스타일&age=유스" },
        ],
      },
      {
        title: "선수 컬렉션",
        items: [
          { label: "사라 힐데브란트 컬렉션", href: "/shoes?collection=사라%20힐데브란트%20컬렉션" },
          { label: "조던 배로우스 컬렉션", href: "/shoes?collection=조던%20배로우스%20컬렉션" },
          { label: "카일 스나이더 컬렉션", href: "/shoes?collection=카일%20스나이더%20컬렉션" },
        ],
      },
    ],
  },
  {
    label: "장비",
    href: "/gear",
    groups: [
      {
        title: "가방",
        items: [
          { label: "기어팩", href: "/gear?sub=기어팩" },
          { label: "더플백", href: "/gear?sub=더플백" },
          { label: "전체 가방", href: "/gear?cat=가방" },
        ],
      },
      {
        title: "레슬링 장비",
        items: [
          { label: "헤드기어", href: "/gear?sub=헤드기어" },
          { label: "니패드", href: "/gear?sub=니패드" },
          { label: "슈즈 커버", href: "/gear?sub=슈즈커버" },
          { label: "싱글릿", href: "/gear?sub=싱글릿" },
          { label: "전체 장비", href: "/gear?cat=레슬링장비" },
        ],
      },
      {
        title: "액세서리",
        items: [
          { label: "모자 & 비니", href: "/gear?sub=모자" },
          { label: "물병", href: "/gear?sub=물병" },
          { label: "양말", href: "/gear?sub=양말" },
          { label: "신발끈", href: "/gear?sub=신발끈" },
          { label: "전체 액세서리", href: "/gear?cat=액세서리" },
        ],
      },
    ],
  },
  {
    label: "의류",
    href: "/apparel",
    groups: [
      {
        title: "성인",
        items: [
          { label: "티셔츠", href: "/apparel?sub=티셔츠&age=성인" },
          { label: "후디 & 풀오버", href: "/apparel?sub=후디&age=성인" },
          { label: "반바지 & 팬츠", href: "/apparel?sub=반바지&age=성인" },
          { label: "아우터웨어", href: "/apparel?sub=재킷&age=성인" },
          { label: "스포츠 브라", href: "/apparel?sub=스포츠브라&age=성인" },
          { label: "싱글릿", href: "/apparel?sub=싱글릿&age=성인" },
          { label: "전체 성인 의류", href: "/apparel?age=성인" },
        ],
      },
      {
        title: "유스",
        items: [
          { label: "티셔츠", href: "/apparel?sub=티셔츠&age=유스" },
          { label: "후디 & 풀오버", href: "/apparel?sub=후디&age=유스" },
          { label: "반바지 & 팬츠", href: "/apparel?sub=반바지&age=유스" },
          { label: "아우터웨어", href: "/apparel?sub=재킷&age=유스" },
          { label: "전체 유스 의류", href: "/apparel?age=유스" },
        ],
      },
      {
        title: "컬렉션",
        items: [
          { label: "USA 레슬링 x RUDIS", href: "/apparel?collection=USA%20레슬링" },
          { label: "UWW x RUDIS", href: "/apparel?collection=UWW%20컬렉션" },
          { label: "콜리지에이트", href: "/apparel?collection=콜리지에이트" },
          { label: "페이스 오버 피어", href: "/apparel?collection=페이스%20오버%20피어" },
          { label: "전체 컬렉션", href: "/apparel?filter=컬렉션" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      {/* 상단 배너 */}
      <div className="bg-[#c8102e] text-center py-2 text-sm font-medium tracking-wide">
        10만원 이상 무료 배송 | 팀 주문 할인 문의 환영
      </div>

      {/* 메인 헤더 */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-black tracking-widest hover:text-[#c8102e] transition-colors">
          RUDIS
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-bold tracking-wider uppercase hover:text-[#c8102e] transition-colors py-5 block"
              >
                {item.label}
              </Link>

              {/* 메가 드롭다운 */}
              {activeMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-black border-t-2 border-[#c8102e] shadow-2xl min-w-max">
                  <div className="flex gap-0 py-6 px-2">
                    {item.groups.map((group) => (
                      <div key={group.title} className="px-6 min-w-[160px]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8102e] mb-3 border-b border-gray-800 pb-2">
                          {group.title}
                        </p>
                        <ul className="space-y-1.5">
                          {group.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all block"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
        <div className="md:hidden bg-black border-t border-gray-800 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-800">
              <button
                className="w-full flex justify-between items-center px-4 py-4 font-bold uppercase tracking-wider text-sm hover:text-[#c8102e]"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <span>{mobileExpanded === item.label ? "−" : "+"}</span>
              </button>

              {mobileExpanded === item.label && (
                <div className="pb-4">
                  {item.groups.map((group) => (
                    <div key={group.title} className="px-5 mb-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#c8102e] mb-2 mt-3">
                        {group.title}
                      </p>
                      {group.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block py-1.5 text-sm text-gray-300 hover:text-white pl-2"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
