import {cva, cx} from "class-variance-authority";
import type {VariantProps} from "class-variance-authority";
import Text from "./text";
import Skeleton from "./skeleton";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-light text-green-dark",
        secondary: "bg-pink-light text-pink-dark",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface BadgeProps
  extends VariantProps<typeof badgeVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({variant: "none"}),
          badgeSkeletonVariants({size}),
          className
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({variant, size, className})} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>
        {children}
      </Text>
    </div>
  );
}
