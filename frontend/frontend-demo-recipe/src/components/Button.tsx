import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        variant === "primary"
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "text-gray-600 hover:text-gray-900"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
