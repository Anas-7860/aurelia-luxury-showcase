import { Container } from "../../../components/Container";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <Container>
        <div className="text-center space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-accent">
            AURELIA PARFUMS
          </p>
          <h1 className="text-3xl md:text-4xl text-heading">
            Composition Not Found
          </h1>
          <p className="max-w-md mx-auto text-body/70">
            The requested perfume is no longer listed in the visible collection.
            You may have followed an outdated reference.
          </p>
        </div>
      </Container>
    </section>
  );
}