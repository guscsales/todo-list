import {cva} from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans text-gray-400 leading-[140%]", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-6 font-semibold",
      "body-md": "text-base leading-6",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export default function Text({
  as = "span",
  className,
  children,
  variant,
  ...props
}) {
  return React.createElement(
    as,
    {
      className: textVariants({variant, className}),
      ...props,
    },
    children
  );
}
