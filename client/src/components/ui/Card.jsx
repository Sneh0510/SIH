import * as React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`shadow-md bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
