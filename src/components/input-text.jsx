import cn from "classnames";
import {cva} from "class-variance-authority";
import {textVariants} from "./text";

const inputTextVariants = cva(
  `
    border-b border-solid border-pink-base
    bg-transparent outline-none
  `,
  {
    variants: {
      size: {
        md: "px-2 pb-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export default function InputText({size, className, ...props}) {
  return (
    <input
      className={cn(inputTextVariants({size}), textVariants(), className)}
      {...props}
    />
  );
}
