"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-body/10 bg-background">
      <Container className="py-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl md:text-2xl tracking-[0.5em] uppercase text-heading transition-opacity duration-300 ease-out hover:opacity-80"
            onClick={() => setOpen(false)}
          >
            AURELIA
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-12 text-xs tracking-[0.28em] uppercase text-body/80 md:flex">
            <Link
              href="/"
              className="group relative pb-1 transition-colors duration-300 ease-out hover:text-heading"
            >
              <span>Home</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <Link
              href="/products"
              className="group relative pb-1 transition-colors duration-300 ease-out hover:text-heading"
            >
              <span>Collection</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-body/30 text-body/80 transition-colors duration-300 ease-out hover:border-heading hover:text-heading md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ease-out ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity duration-200 ease-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ease-out ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-6 flex flex-col gap-4 text-xs tracking-[0.26em] uppercase text-body/80 md:hidden">
            <Link
              href="/"
              className="group relative py-2 transition-colors duration-300 ease-out hover:text-heading"
              onClick={() => setOpen(false)}
            >
              <span>Home</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
            <Link
              href="/products"
              className="group relative py-2 transition-colors duration-300 ease-out hover:text-heading"
              onClick={() => setOpen(false)}
            >
              <span>Collection</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}