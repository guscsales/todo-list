import cn from "classnames";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import Skeleton from "./skeleton";

export default function InputCheckbox({
  value,
  checked,
  loading,
  className,
  ...props
}) {
  if (loading) {
    return <Skeleton rounded="sm" className="w-5 h-5" />;
  }

  return (
    <label
      className={cn(
        "inline-flex items-center cursor-pointer relative group",
        className
      )}
    >
      <input
        type="checkbox"
        className={`
          appearance-none peer cursor-pointer
          w-5 h-5 rounded-sm 
          flex items-center justify-center
          border-2 border-solid transition overflow-hidden
          border-green-base hover:border-green-dark hover:bg-green-dark/20
          checked:border-green-base checked:bg-green-base 
          group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
        `}
        value={value}
        checked={checked}
        {...props}
      />

      <Icon
        svg={CheckIcon}
        className={`
          absolute top-1/2 left-1 -translate-y-1/2 w-3 h-3
          hidden peer-checked:block fill-white
        `}
      />
    </label>
  );
}
