import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  outline:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-tint",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
