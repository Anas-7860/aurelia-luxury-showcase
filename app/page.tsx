import Link from "next/link";
import { Container } from "../components/Container";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpeg"
            alt="Aurelia atmospheric composition"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Content */}
        <Container className="relative py-36 md:py-44">
          <div className="mx-auto max-w-4xl space-y-10 text-center text-heading">
            <p className="text-xs tracking-[0.35em] uppercase text-accent">
              AURELIA PARFUMS
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
              For Those who
              <br />
               do not need an introduction
            </h1>

            <div className="pt-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center border border-accent px-8 py-4 text-xs tracking-[0.3em] uppercase text-accent transition-all duration-300 ease-out hover:bg-heading hover:text-background"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* BRAND STATEMENT */}
      <section className="border-t border-body/10 bg-background">
        <Container className="py-24 md:py-32">
          <div className="grid gap-20 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-xs tracking-[0.35em] uppercase text-accent">
                The House
              </h2>

              <p className="text-base text-body/85 leading-relaxed">
                AURELIA was founded for wearers who listen before they speak.
                Our compositions favor architectural structure over decoration,
                constructed with discreet raw materials that unfold slowly.
              </p>

              <p className="text-base text-body/85 leading-relaxed">
                We maintain a permanent, narrow collection. Each scent is
                calibrated to linger just beyond arm’s length — present in
                recollection rather than volume.
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg leading-relaxed text-body/70">
                Bottles remain deliberately minimal. What endures is trace — a
                line of iris, a shadow of smoke, a breath of resin held between
                moments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="border-t border-body/10 bg-background">
        <Container className="py-28 md:py-36">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-6">
              <h2 className="text-xs tracking-[0.35em] uppercase text-accent">
                Featured Compositions
              </h2>

              <p className="max-w-xl text-base text-body/80 leading-relaxed">
                Three signatures articulating the house codes: tensile
                structure, mineral restraint, and projection measured in memory
                rather than volume.
              </p>
            </div>

            <Link
              href="/products"
              className="text-xs tracking-[0.3em] uppercase text-body/70 transition-colors duration-300 ease-out hover:text-heading"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="featured"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}