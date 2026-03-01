"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "featured";
}

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex flex-col border border-body/10 bg-background/80 transition-transform duration-300 ease-out ${
        isFeatured ? "px-8 py-10" : "px-6 py-8"
      } hover:-translate-y-1 hover:scale-[1.02]`}
    >
      <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden bg-heading/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
          className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-sm tracking-[0.22em] text-heading uppercase">
            {product.name}
          </h3>
          <p className="text-sm text-body/80">
            {product.shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-accent">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center justify-center border border-heading px-4 py-2 text-xs tracking-[0.2em] uppercase text-heading transition-colors duration-300 ease-out hover:bg-heading hover:text-background"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
