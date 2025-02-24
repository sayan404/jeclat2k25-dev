import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}

export const Card = ({ children, className = "" }: BaseProps) => (
  <div className={`rounded-xl shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const Avatar = ({ children, className = "" }: BaseProps) => (
  <div
    className={`rounded-full bg-gray-300 flex items-center justify-center ${className}`}
  >
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }: AvatarImageProps) => (
  <img
    src={src}
    alt={alt}
    className="rounded-full w-full h-full object-cover"
  />
);

export const AvatarFallback = ({ children }: { children: ReactNode }) => (
  <span className="text-xl font-bold text-gray-700">{children}</span>
);

export const Button = ({
  children,
  variant = "solid",
  className = "",
  ...props
}: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
      variant === "outline"
        ? "border border-white text-white"
        : "bg-indigo-600 text-white"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);
