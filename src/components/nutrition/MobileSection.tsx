import React from "react";
import { type NutritionMenuItem } from "@/utils/nutritionUtils";

type Column = { key: string; label: string; unit?: string; minWidth?: string };

interface MobileSectionProps {
  sections: Array<{ key: string; label: string; items: NutritionMenuItem[] }>;
  columns: Column[];
  getNutritionValue: (item: NutritionMenuItem, key: string) => number;
  isInGroupedBanner: (key: string) => boolean;
  getBannerLabelForKey: (key: string) => string | undefined;
  getLunchSpecialSubgroups: (
    items: NutritionMenuItem[]
  ) => Array<{ key: string; label: string; items: NutritionMenuItem[] }>;
}

export default function MobileSection({
  sections,
  columns,
  getNutritionValue,
  isInGroupedBanner,
  getBannerLabelForKey,
  getLunchSpecialSubgroups,
}: MobileSectionProps) {
  const shownGroupLabels = new Set<string>();

  return (
    <div>
      {sections.map((section) => (
        <div
          key={`section-mobile-${section.key}`}
          style={{ minWidth: "100%", width: "max-content" }}
        >
          {/* Section banner */}
          {isInGroupedBanner(section.key) ? (
            !shownGroupLabels.has(getBannerLabelForKey(section.key)!) &&
            shownGroupLabels.add(getBannerLabelForKey(section.key)!) && (
              <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
                {getBannerLabelForKey(section.key)}
              </div>
            )
          ) : (
            <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
              {section.label}
            </div>
          )}

          {getBannerLabelForKey(section.key) === "The Boiler" && (
            <div className="px-3 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200">
              {section.label}
            </div>
          )}

          {getBannerLabelForKey(section.key) === "Lunch Specials"
            ? getLunchSpecialSubgroups(section.items).map((group) => (
                <div key={`mobile-${group.key}`}>
                  <div className="px-3 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200">
                    {group.label}
                  </div>
                  {group.items.map((item, index) => (
                    <div
                      key={`${item.category}-${item.id}`}
                      className={`flex group hover:bg-gray-50 transition-colors duration-150 ${
                        index < group.items.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                      style={{ minWidth: "100%", width: "max-content" }}
                    >
                      {/* Fixed Menu Column */}
                      <div
                        className="sticky left-0 bg-white group-hover:bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] flex items-center z-10 shadow-sm"
                        style={{ position: "sticky", left: 0 }}
                      >
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 break-words leading-tight">
                            {item.name}
                          </h4>
                        </div>
                      </div>

                      {/* Scrollable Data Columns */}
                      <div className="flex">
                        {columns.map((column) => (
                          <div
                            key={column.key}
                            className="bg-white group-hover:bg-gray-50 px-3 py-3 text-left border-r last:border-r-0 transition-colors duration-150 whitespace-nowrap"
                            style={{
                              minWidth: column.minWidth,
                              width: column.minWidth,
                            }}
                          >
                            <span className="text-xs text-gray-900">
                              {`${getNutritionValue(item, column.key)}${
                                column.unit
                              }`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : section.items.map((item, index) => (
                <div
                  key={`${item.category}-${item.id}`}
                  className={`flex group hover:bg-gray-50 transition-colors duration-150 ${
                    index < section.items.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                  style={{ minWidth: "100%", width: "max-content" }}
                >
                  {/* Fixed Menu Column */}
                  <div
                    className="sticky left-0 bg-white group-hover:bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] flex items-center z-10 shadow-sm"
                    style={{ position: "sticky", left: 0 }}
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 break-words leading-tight">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  {/* Scrollable Data Columns */}
                  <div className="flex">
                    {columns.map((column) => (
                      <div
                        key={column.key}
                        className="bg-white group-hover:bg-gray-50 px-3 py-3 text-left border-r last:border-r-0 transition-colors duration-150 whitespace-nowrap"
                        style={{ minWidth: column.minWidth, width: column.minWidth }}
                      >
                        <span className="text-xs text-gray-900">
                          {`${getNutritionValue(item, column.key)}${
                            column.unit
                          }`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      ))}
    </div>
  );
}


