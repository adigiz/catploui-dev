import React from "react";
import SectionBanner from "./SectionBanner";
import StickyMenuCell from "./StickyMenuCell";
import SubgroupBlock from "./SubgroupBlock";

export type Column = {
  key: string;
  label: string;
  unit?: string;
  minWidth?: string;
  align?: "left" | "center";
};

type Section<T> = { key: string; label: string; items: T[] };

interface DataTableProps<T> {
  columns: Column[];
  sections: Section<T>[];
  getName: (item: T) => string;
  getCellValue: (item: T, key: string) => number | boolean | string;
  getGroupLabelForKey: (key: string) => string | undefined;
  isCategoryInAnyGroup: (key: string) => boolean;
  getLunchSubgroups?: (
    items: T[]
  ) => Array<{ key: string; label: string; items: T[] }>;
  renderBooleanCell?: (val: boolean) => React.ReactNode;
  numericCellClass?: string; // default px-4 py-4 ...
  booleanCellClass?: string; // default centered cell style
}

export default function DataTable<T>({
  columns,
  sections,
  getName,
  getCellValue,
  getGroupLabelForKey,
  isCategoryInAnyGroup,
  getLunchSubgroups,
  renderBooleanCell,
  numericCellClass = "px-4 py-4 text-left border-r last:border-r-0 whitespace-nowrap",
  booleanCellClass = "px-4 py-4 text-center border-r last:border-r-0 whitespace-nowrap",
}: DataTableProps<T>) {
  const shownGroupLabels = new Set<string>();

  return (
    <tbody>
      {sections.map((section) => (
        <React.Fragment key={`section-${section.key}`}>
          {isCategoryInAnyGroup(section.key) ? (
            !shownGroupLabels.has(getGroupLabelForKey(section.key)!) &&
            shownGroupLabels.add(getGroupLabelForKey(section.key)!) && (
              <tr>
                <th colSpan={1 + columns.length} className="p-0">
                  <SectionBanner label={getGroupLabelForKey(section.key)!} />
                </th>
              </tr>
            )
          ) : (
            <tr>
              <th colSpan={1 + columns.length} className="p-0">
                <SectionBanner label={section.label} />
              </th>
            </tr>
          )}

          {getGroupLabelForKey(section.key) === "The Boiler" && (
            <tr>
              <th
                colSpan={1 + columns.length}
                className="px-4 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200 text-left"
              >
                {section.label}
              </th>
            </tr>
          )}

          {getGroupLabelForKey(section.key) === "Lunch Specials" &&
          getLunchSubgroups
            ? getLunchSubgroups(section.items).map((group) => (
                <SubgroupBlock
                  key={`sub-${group.key}`}
                  label={group.label}
                  items={
                    group.items as unknown as Array<{
                      id: string;
                      name: string;
                      nutrition: Record<string, number>;
                    }>
                  }
                  columns={columns}
                />
              ))
            : section.items.map((item) => (
                <tr
                  key={`${section.key}-${getName(item)}`}
                  className="group hover:bg-gray-50 transition-colors duration-150 border-b border-gray-200"
                >
                  <StickyMenuCell>
                    <h4 className="text-base font-medium text-gray-900 break-words leading-tight">
                      {getName(item)}
                    </h4>
                  </StickyMenuCell>
                  {columns.map((column) => {
                    const value = getCellValue(item, column.key);
                    const isBoolean = typeof value === "boolean";
                    const tdClass = isBoolean
                      ? booleanCellClass
                      : numericCellClass;
                    return (
                      <td
                        key={column.key}
                        className={tdClass}
                        style={{
                          minWidth: column.minWidth,
                          width: column.minWidth,
                        }}
                      >
                        {isBoolean ? (
                          renderBooleanCell ? (
                            renderBooleanCell(value as boolean)
                          ) : (value as boolean) ? (
                            <div className="flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-red-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <span className="text-gray-400">—</span>
                            </div>
                          )
                        ) : (
                          <span className="text-sm text-gray-900">{`${value}${
                            column.unit ?? ""
                          }`}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
        </React.Fragment>
      ))}
    </tbody>
  );
}
