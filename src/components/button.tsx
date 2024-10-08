import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

export default function Button({ className, ...props }: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      {...props}
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200  ease-in-out py-3 px-12 rounded-full text-white font-bold tracking-wide",
        className
      )}
    />
  );
}
