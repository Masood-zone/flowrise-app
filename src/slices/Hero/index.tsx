import Bounded from "@/components/bounded";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <PrismicRichText field={slice.primary.body} components={components} />
      <Button field={slice.primary.buttonlink} className="mb-10">
        {slice.primary.buttontext}
      </Button>
      <PrismicNextImage
        field={slice.primary.heroimage}
        className="drop-shadow-xl max-w-sm md:max-w-4xl  rounded-xl"
      />
    </Bounded>
  );
};

export default Hero;
