"use client";

import { useMemo, useState } from "react";
import { Container } from "../../components/Container";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../../data/products";

const sortOptions = [
  { value: "default", label: "Curated order" },
  { value: "price-asc", label: "Price: Low to high" },
  { value: "price-desc", label: "Price: High to low" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortValue>("default");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const visibleProducts = useMemo(() => {
    let filtered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);

    if (sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [activeCategory, sortBy]);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <div className="space-y-6 md:max-w-3xl">
          <h1 className="text-xs tracking-[0.3em] text-accent uppercase">
            The Collection
          </h1>
          <p className="text-sm text-body/80">
            A compact suite of compositions built to be worn, not displayed.
            Each perfume is blended in small runs and kept in the collection as
            long as the materials remain available.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 border-y border-body/10 py-8 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3 text-xs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 tracking-[0.18em] uppercase transition-colors duration-300 ease-out ${
                  activeCategory === category
                    ? "border-heading bg-heading text-background"
                    : "border-body/40 text-body/80 hover:border-heading hover:text-heading"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-body/80">
            <span className="tracking-[0.18em] uppercase">Sort</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortValue)}
              className="border border-body/40 bg-background px-3 py-2 text-xs tracking-[0.12em] uppercase text-body/80 outline-none transition-colors duration-300 ease-out hover:border-heading"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
