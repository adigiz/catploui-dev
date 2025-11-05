import nutritionData from "@/data/nutritionData.json";
import allergenData from "@/data/allergenData.json";
import { NUTRITION_CATEGORIES } from "./menuData";

interface RawNutritionItem {
  id: string;
  name: string;
  image: string;
  nutrition: {
    calories: number;
    fat: number;
    saturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    carbohydrates: number;
    fiber: number;
    sugars: number;
    protein: number;
  };
}

interface RawAllergenItem {
  id: string;
  name: string;
  allergens: {
    shellfish: boolean;
    milk: boolean;
    egg: boolean;
    soybean: boolean;
    wheat: boolean;
    sesame: boolean;
    treeNuts: boolean;
    peanut: boolean;
    fish: boolean;
  };
}

export interface NutritionMenuItem {
  id: string;
  name: string;
  image: string;
  category: string;
  categoryLabel: string;
  nutrition: {
    calories: number;
    fat: number;
    saturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    carbohydrates: number;
    fiber: number;
    sugars: number;
    protein: number;
  };
}

export interface AllergenMenuItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  allergens: {
    shellfish: boolean;
    milk: boolean;
    egg: boolean;
    soybean: boolean;
    wheat: boolean;
    sesame: boolean;
    treeNuts: boolean;
    peanut: boolean;
    fish: boolean;
  };
}

/**
 * Get all nutrition items from all menu categories
 */
export function getAllNutritionItems(): NutritionMenuItem[] {
  const allItems: NutritionMenuItem[] = [];

  Object.entries(nutritionData.categories).forEach(([categoryKey, items]) => {
    const categoryLabel =
      NUTRITION_CATEGORIES.find((cat) => cat.key === categoryKey)?.label ||
      categoryKey;

    items.forEach((item: RawNutritionItem) => {
      allItems.push({
        ...item,
        category: categoryKey,
        categoryLabel,
      });
    });
  });

  return allItems;
}

/**
 * Get nutrition items filtered by category
 */
export function getNutritionItemsByCategory(
  category: string
): NutritionMenuItem[] {
  const categoryData =
    nutritionData.categories[category as keyof typeof nutritionData.categories];
  if (!categoryData) return [];

  const categoryLabel =
    NUTRITION_CATEGORIES.find((cat) => cat.key === category)?.label || category;

  return categoryData.map((item: RawNutritionItem) => ({
    ...item,
    category,
    categoryLabel,
  }));
}

/**
 * Get nutrition items filtered by search term
 */
export function searchNutritionItems(searchTerm: string): NutritionMenuItem[] {
  const allItems = getAllNutritionItems();
  const term = searchTerm.toLowerCase();

  return allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.categoryLabel.toLowerCase().includes(term)
  );
}

/**
 * Get unique categories that have nutrition data
 */
export function getCategoriesWithNutrition(): Array<{
  key: string;
  label: string;
  count: number;
}> {
  return NUTRITION_CATEGORIES.map((category) => {
    const items =
      nutritionData.categories[
        category.key as keyof typeof nutritionData.categories
      ];
    return {
      key: category.key,
      label: category.label,
      count: items ? items.length : 0,
    };
  }).filter((cat) => cat.count > 0);
}

/**
 * Get all allergen items from all menu categories
 */
export function getAllAllergenItems(): AllergenMenuItem[] {
  const allItems: AllergenMenuItem[] = [];

  Object.entries(allergenData.categories).forEach(([categoryKey, items]) => {
    const categoryLabel =
      NUTRITION_CATEGORIES.find((cat) => cat.key === categoryKey)?.label ||
      categoryKey;

    items.forEach((item: RawAllergenItem) => {
      allItems.push({
        ...item,
        category: categoryKey,
        categoryLabel,
      });
    });
  });

  return allItems;
}

/**
 * Get allergen items filtered by category
 */
export function getAllergenItemsByCategory(
  category: string
): AllergenMenuItem[] {
  const categoryData =
    allergenData.categories[category as keyof typeof allergenData.categories];
  if (!categoryData) return [];

  const categoryLabel =
    NUTRITION_CATEGORIES.find((cat) => cat.key === category)?.label || category;

  return categoryData.map((item: RawAllergenItem) => ({
    ...item,
    category,
    categoryLabel,
  }));
}

/**
 * Get allergen items filtered by search term
 */
export function searchAllergenItems(searchTerm: string): AllergenMenuItem[] {
  const allItems = getAllAllergenItems();
  const term = searchTerm.toLowerCase();

  return allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.categoryLabel.toLowerCase().includes(term)
  );
}

/**
 * Get unique categories that have allergen data
 */
export function getCategoriesWithAllergens(): Array<{
  key: string;
  label: string;
  count: number;
}> {
  return NUTRITION_CATEGORIES.map((category) => {
    const items =
      allergenData.categories[
        category.key as keyof typeof allergenData.categories
      ];
    return {
      key: category.key,
      label: category.label,
      count: items ? items.length : 0,
    };
  }).filter((cat) => cat.count > 0);
}
