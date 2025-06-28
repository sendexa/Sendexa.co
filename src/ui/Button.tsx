import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "destructive" | "ghost";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };

  const baseClasses =
    "inline-flex items-center justify-center font-medium gap-2 rounded-lg transition focus:outline-none";

  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[#094a94] text-white hover:opacity-90 disabled:opacity-50 dark:bg-[#094a94] dark:white-white",
    secondary:
      "bg-[#f8971d] text-white hover:opacity-90 disabled:opacity-50 dark:bg-[#f8971d] dark:text-white",
    outline:
      "border border-[#e6e6e6] text-[#111e4f] hover:bg-[#f5f5f5] hover:text[#111e4f] disabled:opacity-50 dark:border-[#ffffff1a] dark:text-[#111e4f] dark:hover:bg-[#4a4a6a]",
    destructive:
      "bg-[#dc2626] text-white hover:opacity-90 disabled:opacity-50 dark:bg-[#b91c1c] dark:text-white",
    ghost:
      "bg-transparent text-[#2b2b2b] hover:bg-[#f5f5f5] disabled:opacity-50 dark:text-white dark:hover:bg-[#4a4a6a]",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${disabled ? "cursor-not-allowed" : "hover:shadow-sm"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
