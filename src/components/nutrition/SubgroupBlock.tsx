import React from "react";
import StickyMenuCell from "./StickyMenuCell";

type Column = { key: string; label: string; unit?: string; minWidth?: string };

interface SubgroupBlockProps {
  label: string;
  items: Array<{
    id: string;
    name: string;
    nutrition: Record<string, number>;
  }>;
  columns: Column[];
}

export default function SubgroupBlock({
  label,
  items,
  columns,
}: SubgroupBlockProps) {
  return (
    <>
      <tr>
        <th
          colSpan={1 + columns.length}
          className="px-4 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200 text-left"
        >
          {label}
        </th>
      </tr>
      {items.map((item) => (
        <tr
          key={item.id}
          className="group hover:bg-gray-50 transition-colors duration-150 border-b border-gray-200"
        >
          <StickyMenuCell>
            <h4 className="text-base font-medium text-gray-900 break-words leading-tight">
              {item.name}
            </h4>
          </StickyMenuCell>
          {columns.map((column) => (
            <td
              key={column.key}
              className="px-4 py-4 text-left border-r last:border-r-0 whitespace-nowrap"
            >
              <span className="text-sm text-gray-900">
                {`${item.nutrition[column.key] ?? 0}${column.unit ?? ""}`}
              </span>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
