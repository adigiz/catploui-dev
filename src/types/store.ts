export interface Store {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  hours: string;
  state: string;
  zipcode: string;
  coordinates: [number, number];
  slug: string;                    
  viewStoreUrl: string;
  orderUrl: string;
  nearbyAttractions: string;       
  storeImages?: string[];
  tagline: string;
  menuItems?: {
    title: string;
    image: string;
  }[]|[];
  menuStyle?: "A" | "B";
  metaDescription: string;
  metaTitle: string;
  bannerVideo: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  openTableUrl?: string;
  youtubeUrl?: string;
  isComingSoon?: boolean;
  openingDate?: string;
}