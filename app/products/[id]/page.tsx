import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "../../../components/Container";
import { ProductSpecs } from "../../../components/ProductSpecs";
import { getProductById } from "../../../data/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <Container className="space-y-16">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-accent">
            AURELIA PARFUMS
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-heading">
            {product.name}
          </h1>

          <p className="max-w-2xl text-base text-body/80 leading-relaxed">
            {product.fullDescription}
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-heading/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
              priority
            />
          </div>

          <div className="space-y-12">
            <div className="space-y-6 border-b border-body/10 pb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="tracking-[0.2em] uppercase text-accent">
                  {product.category}
                </span>

                <span className="text-lg text-accent">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>

              <p className="text-sm text-body/80 leading-relaxed">
                Composed for measured projection and long, quiet presence on skin.
              </p>
            </div>

            <ProductSpecs product={product} />
          </div>
        </div>
      </Container>
    </section>
  );
}