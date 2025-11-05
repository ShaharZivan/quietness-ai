import React from "react";
import clsx from "clsx";

export function Label({
  className = "",
  children,
  ...props
}) {
  return (
    <label
      className={clsx(
        "text-sm font-medium text-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
