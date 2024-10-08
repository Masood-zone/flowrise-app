import clsx from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-700",
        size === "sm" && "text-2xl sm:text-3xl lg:text-4xl",
        size === "md" && "text-3xl sm:text-4xl lg:text-5xl",
        size === "lg" && "text-4xl sm:text-6xl lg:text-7xl",
        size === "xl" && "text-5xl sm:text-7xl lg:text-8xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
