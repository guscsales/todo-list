import {cva} from "class-variance-authority";
import Text from "./text";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      type: {
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
      type: "primary",
      size: "md",
      disabled: false,
      handling: false,
    },
  }
);

const iconVariants = cva("fill-gray-100 transition", {
  variants: {
    type: {
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
    type: "primary",
    handling: false,
  },
});

export default function Button({
  type,
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
        type,
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
          className={iconVariants({type, size, handling})}
        />
      )}
      {children && <Text type="base-bold">{children}</Text>}
    </button>
  );
}
