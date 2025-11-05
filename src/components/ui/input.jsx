import React from "react";
import clsx from "clsx";

export function Input({
  className = "",
  type = "text",
  ...props
}) {
  return (
    <input
      type={type}
      className={clsx(
        "w-full px-3 py-2 border border-gray-300 rounded-md",
        "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
        "text-sm",
        "disabled:bg-gray-100 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export default Input;
