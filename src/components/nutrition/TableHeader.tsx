import React from "react";

type Column = { key: string; label: string; unit?: string; minWidth?: string; align?: "left" | "center" };

interface TableHeaderProps {
  columns: Column[];
}

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th
          scope="col"
          className="sticky left-0 bg-gray-50 border-r border-gray-200 px-4 py-3 min-w-[200px] w-[200px] text-left text-sm font-semibold text-gray-900"
        >
          Menu Item
        </th>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className={`px-4 py-3 ${column.align === "center" ? "text-center" : "text-left"} border-r border-gray-200 last:border-r-0 whitespace-nowrap text-sm font-semibold text-gray-900`}
            style={{ minWidth: column.minWidth, width: column.minWidth }}
          >
            {column.label}
            {column.unit && (
              <span className="text-xs text-gray-500 ml-1">
                ({column.unit})
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}
