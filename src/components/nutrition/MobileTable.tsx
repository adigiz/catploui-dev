import React from "react";
import { type Column } from "./DataTable";

interface Section<T> { key: string; label: string; items: T[] }

interface MobileTableProps<T> {
  sections: Section<T>[];
  columns: Column[];
  getName: (item: T) => string;
  getCellValue: (item: T, key: string) => number | boolean | string;
  isCategoryInAnyGroup: (key: string) => boolean;
  getGroupLabelForKey: (key: string) => string | undefined;
  getLunchSubgroups?: (items: T[]) => Array<{ key: string; label: string; items: T[] }>;
}

export default function MobileTable<T>({
  sections,
  columns,
  getName,
  getCellValue,
  isCategoryInAnyGroup,
  getGroupLabelForKey,
  getLunchSubgroups,
}: MobileTableProps<T>) {
  const shown = new Set<string>();

  return (
    <div>
      {sections.map((section) => (
        <div key={`section-mobile-${section.key}`} style={{ minWidth: "100%", width: "max-content" }}>
          {isCategoryInAnyGroup(section.key)
            ? !shown.has(getGroupLabelForKey(section.key)!) &&
              shown.add(getGroupLabelForKey(section.key)!) && (
                <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
                  {getGroupLabelForKey(section.key)}
                </div>
              )
            : (
                <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
                  {section.label}
                </div>
              )}

          {getGroupLabelForKey(section.key) === "The Boiler" && (
            <div className="px-3 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200">
              {section.label}
            </div>
          )}

          {getGroupLabelForKey(section.key) === "Lunch Specials" && getLunchSubgroups
            ? getLunchSubgroups(section.items).map((group) => (
                <div key={`mobile-${group.key}`}>
                  <div className="px-3 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200">
                    {group.label}
                  </div>
                  {group.items.map((item, index) => (
                    <div
                      key={`${section.key}-${getName(item)}`}
                      className={`flex group hover:bg-gray-50 transition-colors duration-150 ${
                        index < group.items.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                      style={{ minWidth: "100%", width: "max-content" }}
                    >
                      {/* Fixed Menu Column */}
                      <div className="sticky left-0 bg-white group-hover:bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] flex items-center z-10 shadow-sm" style={{ position: "sticky", left: 0 }}>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 break-words leading-tight">{getName(item)}</h4>
                        </div>
                      </div>
                      {/* Scrollable Data Columns */}
                      <div className="flex">
                        {columns.map((column) => {
                          const value = getCellValue(item, column.key);
                          const isBoolean = typeof value === "boolean";
                          return (
                            <div
                              key={column.key}
                              className={`bg-white group-hover:bg-gray-50 px-3 py-3 ${column.align === 'center' ? 'text-center' : 'text-left'} border-r last:border-r-0 transition-colors duration-150 whitespace-nowrap`}
                              style={{ minWidth: column.minWidth, width: column.minWidth }}
                            >
                              {isBoolean ? (
                                (value as boolean) ? (
                                  <div className="flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center"><span className="text-xs text-gray-400">—</span></div>
                                )
                              ) : (
                                <span className="text-xs text-gray-900">{`${value}${column.unit ?? ''}`}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : section.items.map((item, index) => (
                <div
                  key={`${section.key}-${getName(item)}`}
                  className={`flex group hover:bg-gray-50 transition-colors duration-150 ${
                    index < section.items.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                  style={{ minWidth: "100%", width: "max-content" }}
                >
                  <div className="sticky left-0 bg-white group-hover:bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] flex items-center z-10 shadow-sm" style={{ position: "sticky", left: 0 }}>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 break-words leading-tight">{getName(item)}</h4>
                    </div>
                  </div>
                  <div className="flex">
                    {columns.map((column) => {
                      const value = getCellValue(item, column.key);
                      const isBoolean = typeof value === "boolean";
                      return (
                        <div
                          key={column.key}
                          className={`bg-white group-hover:bg-gray-50 px-3 py-3 ${column.align === 'center' ? 'text-center' : 'text-left'} border-r last:border-r-0 transition-colors duration-150 whitespace-nowrap`}
                          style={{ minWidth: column.minWidth, width: column.minWidth }}
                        >
                          {isBoolean ? (
                            (value as boolean) ? (
                              <div className="flex items-center justify-center"><svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                            ) : (
                              <div className="flex items-center justify-center"><span className="text-xs text-gray-400">—</span></div>
                            )
                          ) : (
                            <span className="text-xs text-gray-900">{`${value}${column.unit ?? ''}`}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}


