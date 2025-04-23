import {cva} from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans text-gray-400 leading-[140%]", {
  variants: {
    type: {
      "body-sm-bold": "text-sm leading-6 font-semibold",
      "body-md": "text-base leading-6",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    type: "base",
  },
});

export default function Text({
  as = "span",
  className,
  children,
  type,
  ...props
}) {
  return React.createElement(
    as,
    {
      className: textVariants({type, className}),
      ...props,
    },
    children
  );
}
