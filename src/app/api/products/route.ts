import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Category, Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") as Category | null;
  const subcategory = searchParams.get("sub") ?? undefined;
  const age = searchParams.get("age") ?? undefined;
  const collection = searchParams.get("collection") ?? undefined;

  const where: Prisma.ProductWhereInput = { isActive: true };
  if (category) where.category = category;
  if (subcategory) where.subcategory = subcategory;
  if (age) where.age = age;
  if (collection) where.collection = { contains: collection };

  const products = await prisma.product.findMany({
    where,
    include: {
      images: { orderBy: { position: "asc" }, select: { url: true, alt: true, position: true } },
    },
    orderBy: { sortOrder: "asc" },
  });

  return NextResponse.json(products);
}
