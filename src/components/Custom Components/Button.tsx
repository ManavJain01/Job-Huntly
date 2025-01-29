import { ReactNode, CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  sx?: CSSProperties;
  className?: string;
}

export default function Button({ children, sx, className = "" }: ButtonProps) {
  return (
    <div
      className={`whitespace-nowrap text-sm text-white bg-[#4640DE] ${className}`}
      style={{ padding: "12px 24px", margin: "auto", ...sx }}
    >
      {children}
    </div>
  );
}
