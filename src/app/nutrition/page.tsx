import type { Metadata } from "next";
import NutritionPageClient from "@/components/nutrition/NutritionPageClient";

export const metadata: Metadata = {
  title: "Nutrition Information | Cap't Loui",
  description:
    "Complete nutrition information for all Cap't Loui menu items including calories, fat, protein, and nutritional facts for our Cajun seafood dishes.",
  alternates: {
    canonical: "https://captloui.com/nutrition",
  },
};

export default function NutritionPage() {
  return <NutritionPageClient />;
}
