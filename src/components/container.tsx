import React from "react";
import {cx} from "class-variance-authority";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cx("max-w-[31.5rem] mx-auto px-2", className),
      ...props,
    },
    children
  );
}
