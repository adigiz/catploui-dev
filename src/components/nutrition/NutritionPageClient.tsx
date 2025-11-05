"use client";

import { useState } from "react";
import NutritionTable from "@/components/nutrition/NutritionTable";
import AllergenTable from "@/components/nutrition/AllergenTable";

export default function NutritionPageClient() {
  const [activeTab, setActiveTab] = useState<"nutrition" | "allergens">(
    "nutrition"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-0 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            CAP&apos;T LOUI NUTRITION
          </h1>
          <h2 className="text-xl font-semibold text-primary mb-4">
            {activeTab === "nutrition"
              ? "COMPLETE NUTRITIONAL INFORMATION"
              : "ALLERGEN INFORMATION"}
          </h2>
          <p className="text-gray-600">
            {activeTab === "nutrition"
              ? "Complete nutritional facts for all our delicious Cajun seafood dishes. Find detailed nutrition information for every item on our menu to help you make informed choices."
              : "Important allergen information for all our menu items. See which dishes contain common allergens like shellfish, milk, eggs, wheat, and more."}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-4 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("nutrition")}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${
                  activeTab === "nutrition"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              Nutrition Information
            </button>
            <button
              onClick={() => setActiveTab("allergens")}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${
                  activeTab === "allergens"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              Allergen Information
            </button>
          </nav>
        </div>

        <NutritionContent activeTab={activeTab} />
      </div>
    </div>
  );
}

function NutritionContent({
  activeTab,
}: {
  activeTab: "nutrition" | "allergens";
}) {
  return (
    <div className="bg-white shadow-md rounded-lg py-8 px-5">
      {activeTab === "nutrition" ? (
        <NutritionTable />
      ) : (
        <AllergenTable />
      )}
    </div>
  );
}



