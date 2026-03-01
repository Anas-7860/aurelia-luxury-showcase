import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-body/10 bg-background py-8">
      <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs tracking-[0.18em] uppercase text-accent">
          AURELIA PARFUMS
        </p>
        <p className="text-xs text-body/60">
          Crafted with restraint in small numbered editions.
        </p>
      </Container>
    </footer>
  );
}
