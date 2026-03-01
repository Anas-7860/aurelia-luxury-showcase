import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  const base = "mx-auto w-full max-w-6xl px-6 md:px-8";
  return <div className={className ? `${base} ${className}` : base}>{children}</div>;
}
