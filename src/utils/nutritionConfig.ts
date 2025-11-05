export type CategoryGroup = { label: string; categoryKeys: string[] };
export type LunchSubgroupDef = { key: string; label: string; prefix: string };

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    label: "The Boiler",
    categoryKeys: ["the-boiler", "sauce", "spice-level", "sides"],
  },
  { label: "Lunch Specials", categoryKeys: ["lunch-specials"] },
];

export const LUNCH_SUBGROUP_DEFS: LunchSubgroupDef[] = [
  { key: "lunch-seafood", label: "SEAFOOD", prefix: "seafood-boiler-lunch-" },
  { key: "lunch-sauce", label: "SAUCE", prefix: "lunch-specials-sauce-" },
  { key: "lunch-spice", label: "SPICE LEVEL", prefix: "lunch-specials-spice-" },
  { key: "lunch-sides", label: "SIDES", prefix: "lunch-specials-sides-" },
];

export function getGroupLabelForCategory(
  categoryKey: string
): string | undefined {
  return CATEGORY_GROUPS.find((g) => g.categoryKeys.includes(categoryKey))
    ?.label;
}

export function isCategoryInAnyGroup(categoryKey: string): boolean {
  return CATEGORY_GROUPS.some((g) => g.categoryKeys.includes(categoryKey));
}
