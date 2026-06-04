import Link from "next/link";

const footerLinks = {
  쇼핑: [
    { label: "신발", href: "/shoes" },
    { label: "장비", href: "/gear" },
    { label: "의류", href: "/apparel" },
  ],
  회사: [
    { label: "브랜드 소개", href: "/about" },
    { label: "선수단", href: "/athletes" },
    { label: "팀 주문", href: "/team-order" },
  ],
  고객지원: [
    { label: "배송 안내", href: "/shipping" },
    { label: "교환/반품", href: "/returns" },
    { label: "자주 묻는 질문", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-widest hover:text-[#c8102e] transition-colors">
              RUDIS
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              레슬러를 위해 만들어진 브랜드. 최고의 그립력, 속도, 안정성을 갖춘 레슬링 전문 장비.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">YouTube</a>
            </div>
          </div>

          {/* 링크들 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 RUDIS Korea. All rights reserved.</p>
          <p className="text-xs text-gray-500">원본: rudis.com | 한국어 번역 버전</p>
        </div>
      </div>
    </footer>
  );
}
