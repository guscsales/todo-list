import {cva, cx, type VariantProps} from "class-variance-authority";

const skeletonVariants = cva("animate-pulse bg-gray-200", {
  variants: {
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "lg",
  },
});

interface SkeletonProps
  extends VariantProps<typeof skeletonVariants>,
    React.ComponentProps<"div"> {
  rounded?: "sm" | "lg" | "full";
}

export default function Skeleton({
  className,
  rounded,
  ...props
}: SkeletonProps) {
  return (
    <div className={cx(skeletonVariants({rounded, className}))} {...props} />
  );
}
