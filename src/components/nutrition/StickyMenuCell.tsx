import React from "react";

interface StickyMenuCellProps {
  children: React.ReactNode;
}

export default function StickyMenuCell({ children }: StickyMenuCellProps) {
  return (
    <td className="sticky left-0 bg-white border-r border-gray-200 px-4 py-4 min-w-[200px] w-[200px]">
      {children}
    </td>
  );
}
