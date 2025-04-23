import React from "react";
import cn from "classnames";
import {cva} from "class-variance-authority";

const cardVariants = cva(
  "rounded-lg border border-solid border-gray-200 bg-white shadow-sm",
  {
    variants: {
      size: {
        none: "",
        lg: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);
export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}) {
  return React.createElement(
    as,
    {
      className: cn(cardVariants({size}), className),
      ...props,
    },
    children
  );
}
