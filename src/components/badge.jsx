import {cva} from "class-variance-authority";
import Text from "./text";

export const badgeVariants = cva("inline-flex py-0.5 px-2 rounded-full", {
  variants: {
    type: {
      primary: "bg-green-light text-green-dark",
      secondary: "bg-pink-light text-pink-dark",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

const badgeTextVariants = cva("mt-px", {
  variants: {
    type: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export default function Badge({type, className, children, ...props}) {
  return (
    <div className={badgeVariants({type, className})} {...props}>
      <Text type="body-sm-bold" className={badgeTextVariants({type})}>
        {children}
      </Text>
    </div>
  );
}
