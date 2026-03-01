import type { Product } from "../types/product";

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <section className="space-y-6 border-t border-body/10 pt-8">
      <h2 className="text-sm tracking-[0.3em] text-accent uppercase">
        Composition
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3 text-sm">
          <p className="text-xs tracking-[0.26em] uppercase text-accent">
            Top Notes
          </p>
          <ul className="space-y-1 text-body/90">
            {product.fragranceNotes.top.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs tracking-[0.26em] uppercase text-accent">
            Heart Notes
          </p>
          <ul className="space-y-1 text-body/90">
            {product.fragranceNotes.heart.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs tracking-[0.26em] uppercase text-accent">
            Base Notes
          </p>
          <ul className="space-y-1 text-body/90">
            {product.fragranceNotes.base.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-sm">
          <p className="text-xs tracking-[0.26em] uppercase text-accent">
            Longevity
          </p>
          <p className="text-body/90">{product.longevity}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs tracking-[0.26em] uppercase text-accent">
            Occasion
          </p>
          <p className="text-body/90">{product.occasion}</p>
        </div>
      </div>
    </section>
  );
}
