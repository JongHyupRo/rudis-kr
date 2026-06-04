import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/shoes";

interface Props {
  product: Product;
  basePath: string;
}

export default function ProductCard({ product, basePath }: Props) {
  const image = product.images[0];

  return (
    <Link href={`${basePath}/${product.slug}`} className="group block">
      <div className="relative bg-gray-100 aspect-square overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={product.nameKo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">{product.nameKo}</span>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#c8102e] text-white text-xs font-bold px-2 py-1 uppercase tracking-wide z-10">
            {product.badge}
          </span>
        )}
        {product.collection && (
          <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 z-10">
            {product.collection}
          </span>
        )}
      </div>
      <div className="mt-3 px-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.subcategory}</p>
        <h3 className="mt-1 font-bold text-sm group-hover:text-[#c8102e] transition-colors">
          {product.nameKo}
        </h3>
        <p className="mt-1 font-bold text-sm">
          ₩{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
