import {cva} from "class-variance-authority";
import Text from "./text";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 px-4 py-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      handling: false,
    },
  }
);

const iconVariants = cva("fill-gray-100 transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
    handling: {
      true: "animate-spin",
    },
  },
  defaultVariants: {
    variant: "primary",
    handling: false,
  },
});

export default function Button({
  variant,
  size,
  disabled,
  handling,
  className,
  children,
  icon: IconComponent,
  ...props
}) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
        className,
      })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={handling ? SpinnerIcon : IconComponent}
          className={iconVariants({variant, size, handling})}
        />
      )}
      {children && <Text variant="base-bold">{children}</Text>}
    </button>
  );
}
