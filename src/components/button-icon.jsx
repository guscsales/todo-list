import {cva} from "class-variance-authority";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

const buttonIconVariants = cva(
  "flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      type: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-pink-base hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
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
      size: "sm",
      disabled: false,
      handling: false,
    },
  }
);

const iconVariants = cva("transition", {
  variants: {
    type: {
      primary: "fill-white",
      secondary: "fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4",
    },
    handling: {
      true: "animate-spin",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "sm",
    handling: false,
  },
});

export default function ButtonIcon({
  type,
  size,
  disabled,
  handling,
  className,
  icon: IconComponent,
  ...props
}) {
  return (
    <button
      className={buttonIconVariants({
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
          size={4}
          className={iconVariants({type, size, handling})}
        />
      )}
    </button>
  );
}
