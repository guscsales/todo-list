import {cva, cx, type VariantProps} from "class-variance-authority";
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
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  size?: "md";
  disabled?: boolean;
}

export default function InputText({
  size,
  className,
  disabled,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({size, disabled}),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
