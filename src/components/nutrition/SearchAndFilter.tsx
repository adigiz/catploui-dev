"use client";

import { useEffect, useRef, useState } from "react";

export interface CategoryOption {
  key: string;
  label: string;
  count: number;
}

export interface SearchAndFilterProps {
  title: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filter: string;
  onFilterChange: (value: string) => void;
  categories: CategoryOption[];
  totalItems: number;
  filteredItems: number;
  debounceDelay?: number;
}

export default function SearchAndFilter({
  title,
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
  categories,
  totalItems,
  filteredItems,
  debounceDelay = 0,
}: SearchAndFilterProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (value: string) => {
    setLocalSearchTerm(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (debounceDelay > 0) {
      timeoutRef.current = setTimeout(() => {
        onSearchChange(value);
      }, debounceDelay);
    } else {
      onSearchChange(value);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="mb-8 sticky top-0 z-40 bg-white py-4 lg:py-0 lg:static lg:z-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase">
            {title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                value={localSearchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-500 text-gray-900"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="relative">
              <select
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredItems} of {totalItems} menu items
        </p>
      </div>
    </>
  );
}
