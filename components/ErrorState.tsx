import Link from "next/link";
import { Container } from "./Container";

interface ErrorStateProps {
  title: string;
  message: string;
}

export function ErrorState({ title, message }: ErrorStateProps) {
  return (
    <div className="py-24">
      <Container className="max-w-2xl">
        <div className="space-y-6 border border-body/10 bg-background/80 px-8 py-10">
          <h1 className="text-sm tracking-[0.3em] text-heading uppercase">
            {title}
          </h1>
          <p className="text-sm text-body/80">{message}</p>
          <div className="flex flex-wrap gap-4 pt-4 text-xs">
            <Link
              href="/products"
              className="inline-flex items-center justify-center border border-heading px-4 py-2 tracking-[0.2em] uppercase text-heading transition-colors duration-300 ease-out hover:bg-heading hover:text-background"
            >
              Back to Collection
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-body/40 px-4 py-2 tracking-[0.2em] uppercase text-body/80 transition-colors duration-300 ease-out hover:border-heading hover:text-heading"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
