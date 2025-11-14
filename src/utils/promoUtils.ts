import promoData from "@/data/promoData.json";
import { Promo, PromoData } from "@/types/promo";

const { storePromos, nationwidePromos }: PromoData = promoData;

export function getStorePromos(storeSlug: string): Promo[] {
  const storeSpecific = storePromos[storeSlug] || [];
  const nationwide = nationwidePromos || [];
  
  return [...nationwide, ...storeSpecific];
}

export function hasPromos(promos: Promo[]): boolean {
  return promos.length > 0;
}

