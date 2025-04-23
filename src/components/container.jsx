import React from "react";
import cn from "classnames";

export default function Container({as = "div", children, className, ...props}) {
  return React.createElement(
    as,
    {
      className: cn("max-w-[31.5rem] mx-auto px-2", className),
      ...props,
    },
    children
  );
}
