import cn from "classnames";
import {cva} from "class-variance-authority";

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

export default function Skeleton({className, rounded, ...props}) {
  return (
    <div className={cn(skeletonVariants({rounded, className}))} {...props} />
  );
}
