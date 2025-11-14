export interface Promo {
  id: string;
  image: string;
  link?: string;
}

export interface PromoData {
  storePromos: Record<string, Promo[]>;
  nationwidePromos: Promo[];
}



