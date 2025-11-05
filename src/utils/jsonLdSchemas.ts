export interface Store {
  name: string;
  metaDescription?: string;
  phone: string;
  address: string;
  state: string;
  zipcode: string;
  coordinates: [number, number];
}

export interface MenuItem {
  name: string;
  image: string;
}

export interface MenuCategory {
  metaTitle: string;
  metaDescription?: string;
  items?: MenuItem[];
}

export interface JsonLdSchema {
  "@context": string;
  "@type": string;
  [key: string]: string | number | boolean | object | Array<object> | undefined;
}

export const homePageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cap't Loui - Authentic Cajun Seafood Boil Restaurants | Since 2016",
  description:
    "Cap't Loui seafood boil restaurants - Authentic Cajun seafood boils since 2016. Signature spices, fresh ingredients. Get loud, get messy! Find us nationwide.",
  url: "https://captloui.com",
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    description:
      "Seafood boil restaurant serving fresh crawfish, shrimp, crab, and lobster",
    servesCuisine: "Cajun Seafood",
    priceRange: "$$",
    url: "https://captloui.com",
    foundingDate: "2016",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Seafood Boil Menu",
      description: "Fresh seafood boils with signature Cajun spices",
    },
  },
};

export const aboutUsSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Cap't Loui",
  description:
    "Learn about Cap't Loui's journey, our commitment to quality, and our passion for authentic Cajun seafood",
  url: "https://captloui.com/about-us",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    description: "Authentic Cajun seafood boil restaurant since 2016",
    foundingDate: "2016",
    url: "https://captloui.com",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cajun Seafood Boils",
      description: "Fresh seafood boils with signature spices",
    },
  },
};

export const menuSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Menu - Cap't Loui",
  description: "Explore our delicious Cajun seafood menu",
  url: "https://captloui.com/menu",
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    servesCuisine: "Cajun Seafood",
    menu: "https://captloui.com/menu",
    url: "https://captloui.com",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "The Boiler",
        description:
          "Fresh seafood boils with your choice of sauce and heat level",
      },
      {
        "@type": "MenuSection",
        name: "Sides",
        description: "Delicious sides including corn, potatoes, and more",
      },
      {
        "@type": "MenuSection",
        name: "Soups",
        description: "Hearty Cajun soups and stews",
      },
      {
        "@type": "MenuSection",
        name: "The Fryer",
        description: "Crispy fried seafood and sides",
      },
      {
        "@type": "MenuSection",
        name: "Sandwiches",
        description: "Fresh seafood sandwiches",
      },
      {
        "@type": "MenuSection",
        name: "Lunch Special",
        description: "Special lunch menu items",
      },
      {
        "@type": "MenuSection",
        name: "For Kids",
        description: "Kid-friendly menu options",
      },
      {
        "@type": "MenuSection",
        name: "Drinks",
        description: "Beverages and refreshments",
      },
      {
        "@type": "MenuSection",
        name: "Desserts",
        description: "Sweet treats to end your meal",
      },
    ],
  },
};

export const locationsSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Locations - Cap't Loui",
  description: "Find Cap't Loui seafood restaurant locations near you",
  url: "https://captloui.com/locations",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    url: "https://captloui.com",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restaurant Locations",
      description: "Cap't Loui seafood boil restaurants nationwide",
    },
  },
};

export const shopSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shop - Cap't Loui",
  description: "Buy Cap't Loui Cajun Seasoning and merchandise",
  url: "https://captloui.com/shop",
  mainEntity: {
    "@type": "Product",
    name: "Cap't Loui Cajun Seasoning",
    description:
      "Signature Cajun seasoning blend for seafood, chicken, and pasta",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
    url: "https://captloui.com/shop",
    category: "Seasoning",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "15.99",
      seller: {
        "@type": "Organization",
        name: "Cap't Loui",
      },
    },
  },
};

export const franchiseSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Franchise Opportunities - Cap't Loui",
  description:
    "Own a Cap't Loui seafood boil franchise. Proven model, full support.",
  url: "https://captloui.com/franchise",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    description: "Seafood boil restaurant franchise opportunity",
    url: "https://captloui.com",
    foundingDate: "2016",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Franchise Opportunities",
      description: "Own a Cap't Loui seafood boil franchise",
    },
  },
};

export const careersSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers - Cap't Loui",
  description:
    "Join Cap't Loui seafood boil restaurants! Hiring at locations nationwide.",
  url: "https://captloui.com/careers",
  mainEntity: [
    {
      "@type": "Organization",
      name: "Cap't Loui",
      description: "Seafood boil restaurant chain hiring team members",
      url: "https://captloui.com",
    },
    {
      "@type": "JobPosting",
      title: "Restaurant Team Member",
      description: "Join our team at one of our locations nationwide",
      hiringOrganization: {
        "@type": "Organization",
        name: "Cap't Loui",
        url: "https://captloui.com",
      },
      employmentType: "Full-time, Part-time",
      jobLocation: {
        "@type": "Place",
        name: "Multiple Locations",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
      },
    },
  ],
};

export const contactUsSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact Us - Cap't Loui",
  description:
    "Contact Cap't Loui seafood boil restaurants for questions about our Cajun seafood boils, catering, or franchising.",
  url: "https://captloui.com/contact-us",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    description: "Cajun seafood boil restaurant chain",
    url: "https://captloui.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Seafood Boil Services",
      description: "Fresh seafood boils with signature Cajun spices",
    },
  },
};

export const privacyPolicySchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - Cap't Loui",
  description: "Learn how we protect and handle your personal information",
  url: "https://captloui.com/privacy-policy",
  dateModified: new Date().toISOString(),
  version: "1.0",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    url: "https://captloui.com",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
  },
};

export const termsOfUseSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Use - Cap't Loui",
  description: "Terms and conditions for using our services",
  url: "https://captloui.com/terms-of-use",
  dateModified: new Date().toISOString(),
  version: "1.0",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    url: "https://captloui.com",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
  },
};

export const accessibilitySchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Accessibility Statement - Cap't Loui",
  description:
    "Learn about our commitment to website accessibility for all users",
  url: "https://captloui.com/accessibility",
  dateModified: new Date().toISOString(),
  version: "1.0",
  mainEntity: {
    "@type": "Organization",
    name: "Cap't Loui",
    url: "https://captloui.com",
    brand: {
      "@type": "Brand",
      name: "Cap't Loui",
    },
  },
};

export const organizationSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cap't Loui",
  description: "Authentic Cajun seafood boil restaurant chain since 2016",
  url: "https://captloui.com",
  logo: "https://captloui.com/logo.png",
  foundingDate: "2016",
  brand: {
    "@type": "Brand",
    name: "Cap't Loui",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/captloui",
    "https://www.instagram.com/captloui",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Seafood Boil Menu",
    description: "Fresh seafood boils with signature Cajun spices",
  },
};

// Dynamic schema generators for data-driven pages
export const generateStoreSchema = (
  store: Store,
  slug: string
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  description:
    store.metaDescription ||
    `Visit ${store.name} for authentic Cajun seafood boils.`,
  url: `https://captloui.com/${slug}`,
  telephone: store.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: store.address,
    addressRegion: store.state,
    postalCode: store.zipcode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.coordinates[1],
    longitude: store.coordinates[0],
  },
  servesCuisine: "Cajun Seafood",
  priceRange: "$$",
  brand: {
    "@type": "Brand",
    name: "Cap't Loui",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Cap't Loui",
    url: "https://captloui.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Seafood Boil Menu",
    description: "Fresh seafood boils with signature Cajun spices",
  },
});

export const generateMenuCategorySchema = (
  currentMenu: MenuCategory,
  categorySlug: string
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${currentMenu.metaTitle} - Cap't Loui Menu`,
  description:
    currentMenu.metaDescription ||
    `Explore our delicious ${currentMenu.metaTitle} selection at Cap't Loui.`,
  url: `https://captloui.com/menu/${categorySlug}`,
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    servesCuisine: "Cajun Seafood",
    menu: `https://captloui.com/menu/${categorySlug}`,
    url: "https://captloui.com",
    hasMenuSection: {
      "@type": "MenuSection",
      name: currentMenu.metaTitle,
      description: currentMenu.metaDescription,
      hasMenuItem:
        currentMenu.items?.map((item: MenuItem) => ({
          "@type": "MenuItem",
          name: item.name,
          description: `Delicious ${item.name} from Cap't Loui`,
          image: item.image,
        })) || [],
    },
  },
});

// Helper function to inject JSON-LD script
export const injectJsonLd = (schema: JsonLdSchema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);

  // Return cleanup function
  return () => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  };
};
