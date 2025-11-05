"use client";

import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import MobileTable from "./MobileTable";
import DataTable from "./DataTable";
import SearchAndFilter from "./SearchAndFilter";
import {
  LUNCH_SUBGROUP_DEFS,
  getGroupLabelForCategory,
  isCategoryInAnyGroup,
} from "@/utils/nutritionConfig";
import {
  getAllNutritionItems,
  getCategoriesWithNutrition,
  type NutritionMenuItem,
} from "@/utils/nutritionUtils";

interface ComprehensiveNutritionTableProps {
  className?: string;
}

type FilterType = "all" | string; // "all" or category key

export default function ComprehensiveNutritionTable({
  className = "",
}: ComprehensiveNutritionTableProps) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = getAllNutritionItems();
  const categories = getCategoriesWithNutrition();

  const filteredItems = useMemo(() => {
    let items = allItems;

    // Filter by category
    if (filter !== "all") {
      items = items.filter((item) => item.category === filter);
    }

    // Filter by search term
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

  const nutritionColumns = useMemo(
    () => [
      { key: "calories", label: "Calories", unit: "", minWidth: "90px" },
      { key: "fat", label: "Total Fat", unit: "g", minWidth: "90px" },
      {
        key: "saturatedFat",
        label: "Saturated Fat",
        unit: "g",
        minWidth: "120px",
      },
      { key: "transFat", label: "Trans Fat", unit: "g", minWidth: "90px" },
      {
        key: "cholesterol",
        label: "Cholesterol",
        unit: "mg",
        minWidth: "110px",
      },
      { key: "sodium", label: "Sodium", unit: "mg", minWidth: "80px" },
      {
        key: "carbohydrates",
        label: "Carbohydrates",
        unit: "g",
        minWidth: "130px",
      },
      { key: "fiber", label: "Fiber", unit: "g", minWidth: "70px" },
      { key: "sugars", label: "Total Sugars", unit: "g", minWidth: "120px" },
      { key: "protein", label: "Protein", unit: "g", minWidth: "80px" },
    ],
    []
  );

  // values are accessed via adapters passed to MobileTable/DataTable

  // Build ordered sections grouped by category label
  const sections = useMemo(() => {
    const itemsByCategory: Record<string, NutritionMenuItem[]> = {};
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

  // Data-driven banners and subgroups (from utils)
  const isInGroupedBanner = (key: string) => isCategoryInAnyGroup(key);
  const getBannerLabelForKey = (key: string) => getGroupLabelForCategory(key);

  const getLunchSpecialSubgroups = (items: NutritionMenuItem[]) => {
    return LUNCH_SUBGROUP_DEFS.map((def) => ({
      key: def.key,
      label: def.label,
      items: items.filter((i) => i.id.startsWith(def.prefix)),
    })).filter((g) => g.items.length > 0);
  };

  return (
    <div className={`bg-white ${className}`}>
      <SearchAndFilter
        title="Nutrition Information"
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filter={filter}
        onFilterChange={(value) => setFilter(value as FilterType)}
        categories={categories}
        totalItems={allItems.length}
        filteredItems={filteredItems.length}
        debounceDelay={200}
      />

      {/* Mobile Table Layout */}
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
              {/* Table Header */}
              <div
                className="bg-gray-50 border-b border-gray-200 sticky top-0 z-30"
                style={{ minWidth: "100%", width: "max-content" }}
              >
                <div
                  className="flex"
                  style={{ minWidth: "100%", width: "max-content" }}
                >
                  {/* Fixed Menu Column Header */}
                  <div
                    className="sticky left-0 bg-gray-50 px-3 py-3 min-w-[160px] w-[160px] z-20 shadow-sm"
                    style={{ position: "sticky", left: 0 }}
                  >
                    <h3 className="text-xs font-semibold text-gray-900">
                      Menu Item
                    </h3>
                  </div>

                  {/* Scrollable Headers */}
                  <div className="flex">
                    {nutritionColumns.map((column) => (
                      <div
                        key={column.key}
                        className="bg-gray-50 px-3 py-3 text-left border-r last:border-r-0 whitespace-nowrap"
                        style={{
                          minWidth: column.minWidth,
                          width: column.minWidth,
                        }}
                      >
                        <h3 className="text-xs font-semibold text-gray-900">
                          {column.label}
                        </h3>
                        {column.unit && (
                          <p className="text-xs text-gray-500 mt-1">
                            ({column.unit})
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <MobileTable
                sections={sections}
                columns={nutritionColumns}
                getName={(item) => item.name}
                getCellValue={(item, key) =>
                  item.nutrition[key as keyof typeof item.nutrition]
                }
                isCategoryInAnyGroup={isInGroupedBanner}
                getGroupLabelForKey={getBannerLabelForKey}
                getLunchSubgroups={(items) => getLunchSpecialSubgroups(items)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table Container */}
      <div className="hidden lg:block overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full" aria-label="Nutrition Information">
          <caption className="sr-only">Nutrition facts for menu items</caption>
          <TableHeader columns={nutritionColumns} />
          <DataTable
            columns={nutritionColumns}
            sections={sections}
            getName={(item) => item.name}
            getCellValue={(item, key) =>
              item.nutrition[key as keyof typeof item.nutrition]
            }
            getGroupLabelForKey={getBannerLabelForKey}
            isCategoryInAnyGroup={isInGroupedBanner}
            getLunchSubgroups={(items) => getLunchSpecialSubgroups(items)}
            numericCellClass="px-4 py-4 text-left border-r last:border-r-0 whitespace-nowrap"
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
