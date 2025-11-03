import React from "react";
import clsx from "clsx";

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-900 bg-white hover:bg-gray-50",
    ghost: "text-gray-900 hover:bg-gray-100",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={clsx(
        "rounded-md font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
