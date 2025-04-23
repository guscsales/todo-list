import {cva} from "class-variance-authority";
import Icon from "./icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Skeleton from "./skeleton";

const buttonIconVariants = cva(
  "flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        none: "",
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
      variant: "primary",
      size: "sm",
      disabled: false,
      handling: false,
    },
  }
);

const iconVariants = cva("transition", {
  variants: {
    variant: {
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
    variant: "primary",
    size: "sm",
    handling: false,
  },
});

export default function ButtonIcon({
  variant,
  size,
  disabled,
  loading,
  handling,
  className,
  icon: IconComponent,
  ...props
}) {
  if (loading) {
    return (
      <Skeleton
        className={buttonIconVariants({
          variant: "none",
          size,
          className,
        })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({
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
          size={4}
          className={iconVariants({variant, size, handling})}
        />
      )}
    </button>
  );
}
