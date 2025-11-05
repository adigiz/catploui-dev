import React from "react";

interface SectionBannerProps {
  label: string;
  className?: string;
  size?: "sm" | "lg";
}

export default function SectionBanner({
  label,
  className = "",
  size = "lg",
}: SectionBannerProps) {
  const base = size === "lg" ? "px-4 py-3 text-sm" : "px-3 py-2 text-xs";
  return (
    <div
      className={`${base} bg-red-600 text-white font-bold uppercase tracking-wide ${className} text-left`}
    >
      {label}
    </div>
  );
}
