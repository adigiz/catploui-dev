"use client";

import { useState, useMemo } from "react";
import DataTable from "./DataTable";
import SearchAndFilter from "./SearchAndFilter";
import {
  getGroupLabelForCategory,
  isCategoryInAnyGroup,
} from "@/utils/nutritionConfig";
import {
  getAllAllergenItems,
  getCategoriesWithAllergens,
  type AllergenMenuItem,
} from "@/utils/nutritionUtils";

interface ComprehensiveAllergenTableProps {
  className?: string;
}

type FilterType = "all" | string; // "all" or category key

export default function ComprehensiveAllergenTable({
  className = "",
}: ComprehensiveAllergenTableProps) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = getAllAllergenItems();
  const categories = getCategoriesWithAllergens();

  const filteredItems = useMemo(() => {
    let items = allItems;

    if (filter !== "all") {
      items = items.filter((item) => item.category === filter);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.categoryLabel.toLowerCase().includes(term)
      );
    }

    return items;
  }, [allItems, filter, searchTerm]);

  const allergenColumns = useMemo(
    () => [
      { key: "shellfish", label: "Shellfish" },
      { key: "milk", label: "Milk" },
      { key: "egg", label: "Egg" },
      { key: "soybean", label: "Soybean" },
      { key: "wheat", label: "Wheat" },
      { key: "sesame", label: "Sesame" },
      { key: "treeNuts", label: "Tree Nuts" },
      { key: "peanut", label: "Peanut" },
      { key: "fish", label: "Fish" },
    ],
    []
  );

  const allergenDisplayColumns = useMemo(
    () => allergenColumns.map((c) => ({ ...c, minWidth: "115px" })),
    [allergenColumns]
  );

  const getAllergenValue = (item: AllergenMenuItem, key: string) => {
    return item.allergens[key as keyof typeof item.allergens];
  };

  const sections = useMemo(() => {
    const itemsByCategory: Record<string, AllergenMenuItem[]> = {};
    for (const item of filteredItems) {
      if (!itemsByCategory[item.category]) itemsByCategory[item.category] = [];
      itemsByCategory[item.category].push(item);
    }

    const ordered = categories
      .filter((c) => itemsByCategory[c.key]?.length)
      .map((c) => ({
        key: c.key,
        label: c.label,
        items: itemsByCategory[c.key]!,
      }));

    return ordered;
  }, [filteredItems, categories]);

  const isInGroupedBanner = (key: string) => isCategoryInAnyGroup(key);
  const getBannerLabelForKey = (key: string) => getGroupLabelForCategory(key);
  const isBoilerKey = (key: string) =>
    getBannerLabelForKey(key) === "The Boiler";

  return (
    <div className={`bg-white ${className}`}>
      <SearchAndFilter
        title="Allergen Information"
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filter={filter}
        onFilterChange={(value) => setFilter(value as FilterType)}
        categories={categories}
        totalItems={allItems.length}
        filteredItems={filteredItems.length}
      />

      <div className="lg:hidden">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div
            className="overflow-x-auto overflow-y-auto"
            style={{
              overscrollBehaviorX: "contain",
              WebkitOverflowScrolling: "touch",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            <div className="min-w-full">
              <div
                className="bg-gray-50 border-b border-gray-200 sticky top-0 z-30"
                style={{ minWidth: "100%", width: "max-content" }}
              >
                <div
                  className="flex"
                  style={{ minWidth: "100%", width: "max-content" }}
                >
                  <div
                    className="sticky left-0 bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] z-20 shadow-sm"
                    style={{ position: "sticky", left: 0 }}
                  >
                    <h3 className="text-xs font-semibold text-gray-900">
                      Menu Item
                    </h3>
                  </div>

                  <div className="flex">
                    {allergenColumns.map((column) => (
                      <div
                        key={column.key}
                        className="bg-gray-50 px-3 py-3 text-center border-r last:border-r-0 whitespace-nowrap"
                        style={{
                          minWidth: "100px",
                          width: "100px",
                        }}
                      >
                        <h3 className="text-xs font-semibold text-gray-900">
                          {column.label}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table Body grouped by category with dividers */}
              <div>
                {(() => {
                  const shownGroupLabels = new Set<string>();
                  return sections.map((section) => (
                    <div
                      key={`section-mobile-${section.key}`}
                      style={{ minWidth: "100%", width: "max-content" }}
                    >
                      {/* Section banner */}
                      {isInGroupedBanner(section.key) ? (
                        !shownGroupLabels.has(
                          getBannerLabelForKey(section.key)!
                        ) &&
                        shownGroupLabels.add(
                          getBannerLabelForKey(section.key)!
                        ) && (
                          <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
                            {getBannerLabelForKey(section.key)}
                          </div>
                        )
                      ) : (
                        <div className="px-3 py-2 bg-primary text-white font-bold uppercase tracking-wide text-xs text-left">
                          {section.label}
                        </div>
                      )}

                      {/* Category header row only for Boiler sub-groups */}
                      {isBoilerKey(section.key) && (
                        <div className="px-3 py-2 bg-red-50 text-red-700 font-semibold uppercase tracking-wide text-xs border-y border-red-200">
                          {section.label}
                        </div>
                      )}

                      {section.items.map((item, index) => (
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
                            {allergenColumns.map((column) => (
                              <div
                                key={column.key}
                                className="bg-white group-hover:bg-gray-50 px-3 py-3 text-center border-r last:border-r-0 transition-colors duration-150 whitespace-nowrap flex items-center justify-center"
                                style={{
                                  minWidth: "100px",
                                  width: "100px",
                                }}
                              >
                                {getAllergenValue(item, column.key) ? (
                                  <svg
                                    className="w-5 h-5 text-red-600 mx-auto"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : (
                                  <span className="text-xs text-gray-400">
                                    —
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table Container */}
      <div
        className="hidden lg:block overflow-x-auto overflow-y-auto border border-gray-200 rounded-lg"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <table className="min-w-full" aria-label="Allergen Information">
          <caption className="sr-only">
            Allergen information for menu items
          </caption>
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-30">
            <tr>
              <th
                scope="col"
                className="sticky left-0 bg-gray-50 border-r border-gray-200 px-4 py-3 min-w-[200px] w-[200px] text-left text-sm font-semibold text-gray-900 z-20"
              >
                Menu Item
              </th>
              {allergenDisplayColumns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-4 py-3 text-center border-r last:border-r-0 whitespace-nowrap text-sm font-semibold text-gray-900 border-gray-200"
                  style={{ minWidth: column.minWidth, width: column.minWidth }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <DataTable
            columns={allergenDisplayColumns}
            sections={sections}
            getName={(item) => item.name}
            getCellValue={(item, key) =>
              item.allergens[key as keyof typeof item.allergens]
            }
            getGroupLabelForKey={getBannerLabelForKey}
            isCategoryInAnyGroup={isInGroupedBanner}
          />
        </table>
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No menu items found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
