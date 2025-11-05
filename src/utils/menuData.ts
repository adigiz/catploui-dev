const MENU_DATA = {
  "the-boiler": {
    title: "THE BOILER",
    displayName: "THE BOILER",
    metaTitle: "Seafood Boils | Cap't Loui Signature Cajun Boiler Menu",
    metaDescription:
      "Cap't Loui's signature seafood boils - Fresh crab, lobster, crawfish & shrimp. Pick your catch, choose your heat. The messiest seafood boil experience!",
    description:
      "The Cap't Loui classic. Pick your seafood, sauce, and heat — all boils come with corn & potato.",
    image: "/images/menu/boiler-bag.webp",
    hasSpiceLevel: true,
    hasSauce: true,
    items: [
      {
        name: "DUNGNESS CRAB WHOLE",
        image: "/images/menu/boiler-dungness-crab-whole.webp",
      },
      {
        name: "DUNGNESS CRAB CLUSTER",
        image: "/images/menu/boiler-dungness-crab-clusters.webp",
      },
      { name: "LOBSTER", image: "/images/menu/boiler-lobster.webp" },
      { name: "LOBSTER TAIL", image: "/images/menu/boiler-lobster-tail.webp" },
      {
        name: "KING CRAB LEGS",
        image: "/images/menu/boiler-king-crab-legs.webp",
      },
      { name: "SNOW CRAB LEGS", image: "/images/menu/boiler-snowcrab.webp" },
      { name: "CRAWFISH", image: "/images/menu/boiler-crawfish.webp" },
      {
        name: "LIVE CRAWFISH",
        image: "/images/menu/boiler-live-crawfish.webp",
      },
      { name: "CLAMS", image: "/images/menu/boiler-clam.webp" },
      { name: "MUSSLES", image: "/images/menu/boiler-mussles.webp" },
      {
        name: "SHRIMP HEAD ON",
        image: "/images/menu/boiler-shrimp-headon.webp",
      },
      {
        name: "SHRIMP HEAD OFF",
        image: "/images/menu/boiler-shrimp-headoff.webp",
      },
    ],
    sides: [
      { name: "SAUSAGES", image: "/images/menu/sides-sausage.webp" },
      {
        name: "GARLIC NOODLES",
        image: "/images/menu/sides-garlic-noodle.webp",
      },
      { name: "FRIES", image: "/images/menu/sides-fries.webp" },
      { name: "BROCCOLI", image: "/images/menu/sides-broccoli.webp" },
      { name: "GARLIC BREAD", image: "/images/menu/sides-garlic-bread.webp" },
      { name: "CORN ON THE COB", image: "/images/menu/sides-corn.webp" },
      { name: "POTATOES", image: "/images/menu/sides-potatoes.webp" },
      { name: "BOILED EGGS", image: "/images/menu/sides-boiled-eggs.webp" },
      { name: "STEAMED RICE", image: "/images/menu/sides-rice.webp" },
      { name: "EXTRA SAUCE", image: "/images/menu/sides-extra-sauce.webp" },
    ],
  },
  soup: {
    title: "SOUP",
    displayName: "SOUP",
    metaTitle: "Soups | Cap't Loui Jambalaya & Clam Chowder",
    metaDescription:
      "Cap't Loui soups - Hearty jambalaya and New England clam chowder. Warm, comforting bowls with fresh ingredients and bold Cajun flavors. Order your soup today!",
    description:
      "Warm and comforting soups made with fresh ingredients and bold flavors.",
    image: "/images/menu/soup-jambalaya.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      { name: "JAMBALAYA", image: "/images/menu/soup-jambalaya.webp" },
      {
        name: "NEW ENGLAND CLAM CHOWDER",
        image: "/images/menu/soup-chowder.webp",
      },
    ],
    sides: [],
  },
  sandwiches: {
    title: "SANDWICHES",
    displayName: "SANDWICHES",
    description:
      "Delicious sandwiches made with fresh ingredients and signature sauces.",
    metaTitle: "Cajun Seafood Sandwiches | Cap't Loui Po'boys & Lobster Rolls",
    metaDescription:
      "Cap't Loui Cajun seafood sandwiches - Po'boys, lobster rolls & more. Fresh seafood, bold flavor, messy goodness. Order online or visit today!",
    image: "/images/menu/sandwich-with-fries.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      { name: "FISH POBOY", image: "/images/menu/sandwich-fish.jpg" },
      { name: "SHRIMP POBOY", image: "/images/menu/sandwich-shrimp.jpg" },
      {
        name: "SOFTSHELL CRAB POBOY",
        image: "/images/menu/sandwich-softshellcrab.jpg",
      },
      { name: "CALAMARI POBOY", image: "/images/menu/sandwich-calamari.jpg" },
      { name: "CHICKEN POBOY", image: "/images/menu/sandwich-chicken.jpg" },
      { name: "LOBSTER ROLL", image: "/images/menu/sandwich-with-fries.webp" },
    ],
    sides: [],
  },
  sides: {
    title: "SIDES",
    displayName: "SIDES",
    description: "Perfect accompaniments to complete your meal.",
    metaTitle: "Seafood Boil Sides | Cap't Loui Corn, Potatoes, Sausage & More",
    metaDescription:
      "Cap't Loui seafood boil sides - Corn, potatoes, sausage & more. Perfect companions to your Cajun seafood boil. Add flavor to your feast!",
    image: "/images/menu/sides-fries.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      { name: "SAUSAGES", image: "/images/menu/sides-sausage.webp" },
      {
        name: "GARLIC NOODLES",
        image: "/images/menu/sides-garlic-noodle.webp",
      },
      { name: "FRIES", image: "/images/menu/sides-fries.webp" },
      { name: "BROCCOLI", image: "/images/menu/sides-broccoli.webp" },
      { name: "GARLIC BREAD", image: "/images/menu/sides-garlic-bread.webp" },
      { name: "CORN ON THE COB", image: "/images/menu/sides-corn.webp" },
      { name: "POTATOES", image: "/images/menu/sides-potatoes.webp" },
      { name: "BOILED EGGS", image: "/images/menu/sides-boiled-eggs.webp" },
      { name: "STEAMED RICE", image: "/images/menu/sides-rice.webp" },
      { name: "EXTRA SAUCE", image: "/images/menu/sides-extra-sauce.webp" },
    ],
    sides: [],
  },
  "the-fryer": {
    title: "THE FRYER",
    displayName: "THE FRYER",
    description:
      "Crispy and golden fried favorites that pack a flavorful punch.",
    metaTitle: "Fried Seafood Menu | Cap't Loui Crispy Cajun Favorites",
    metaDescription:
      "Cap't Loui fried seafood - Crispy calamari, fried shrimp, fish & chips. Golden, crunchy, Cajun-spiced perfection. Fresh seafood, bold flavor!",
    image: "/images/menu/fryer-fisherman.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      {
        name: "SOFT SHELL CRAB BASKET",
        image: "/images/menu/fryer-soft-crab.webp",
      },
      {
        name: "FISH & CHIPS BASKET",
        image: "/images/menu/fryer-fish-chips.webp",
      },
      {
        name: "FRIED SHRIMP BASKET",
        image: "/images/menu/fryer-fried-shrimp.webp",
      },
      { name: "CALAMARI BASKET", image: "/images/menu/fryer-calamari.webp" },
      {
        name: "CHICKEN TENDERS BASKET",
        image: "/images/menu/fryer-chicken.webp",
      },
      { name: "WINGS BASKET", image: "/images/menu/fryer-wings.webp" },
      {
        name: "FISHERMAN'S PLATTER",
        image: "/images/menu/fryer-fisherman.webp",
      },
    ],
    sides: [],
  },
  "lunch-special": {
    title: "LUNCH SPECIAL",
    displayName: "LUNCH SPECIAL",
    description: "Special lunch combinations at great value.",
    metaTitle: "Lunch Specials | Cap't Loui Quick Cajun Seafood Deals",
    metaDescription:
      "Cap't Loui lunch specials - Quick seafood boils, sandwiches & combos. Fresh Cajun flavor, weekday deals. Get your seafood fix midday!",
    image: "/images/menu/special-pasta.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      {
        name: "SEAFOOD BOILER SPECIAL",
        image: "/images/menu/special-boiler.webp",
      },
      {
        name: "FRIED BASKET SPECIAL",
        image: "/images/menu/special-basket.webp",
      },
      { name: "PO'BOY MEAL", image: "/images/menu/special-poboy.webp" },
      { name: "CAJUN PASTA", image: "/images/menu/special-pasta.webp" },
    ],
    sides: [],
  },
  drinks: {
    title: "DRINKS",
    displayName: "DRINKS",
    description: "Refreshing beverages to complement your meal.",
    metaTitle: "Drinks Menu | Cap't Loui Signature Cap'trisuns",
    metaDescription:
      "Cap't Loui drinks - Signature Cap'trisuns lemonades in classic, strawberry, green apple, mango, raspberry & pina colada. Refresh your seafood boil experience!",
    image: "/images/menu/drinks.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      {
        name: "CAP'TRISUN CLASSIC LEMONADE",
        image: "/images/menu/drinks-classic-lemonade.jpg",
      },
      {
        name: "CAP'TRISUN STRAWBERRY LEMONADE",
        image: "/images/menu/drinks-strawberry-lemonade.jpg",
      },
      {
        name: "CAP'TRISUN MS. GREEN (GREEN APPLE)",
        image: "/images/menu/drinks-msgreen.jpg",
      },
      {
        name: "CAP'TRISUN MR. RICH (PEACH)",
        image: "/images/menu/drinks-mr-rich.webp",
      },
      {
        name: "CAP'TRISUN DR YELLOW (MANGO)",
        image: "/images/menu/drinks-mryellow.jpg",
      },
      {
        name: "CAP'TRISUN MADAM BERRY (RASPBERRY)",
        image: "/images/menu/drinks-strawberry-lemonade.jpg",
      },
      {
        name: "CAP'TRISUN SHIRLEY TEMPLE",
        image: "/images/menu/drinks-madam-berry.jpg",
      },
      {
        name: "CAP'TRISUN PINA COLADA",
        image: "/images/menu/drinks-pina-colada.jpg",
      },
    ],
    sides: [],
  },
  desserts: {
    title: "DESSERTS",
    displayName: "DESSERTS",
    description: "Sweet treats to end your meal on a perfect note.",
    metaTitle: "Desserts | Cap't Loui Sweet Treats",
    metaDescription:
      "Cap't Loui desserts - Sweet treats to finish your seafood boil feast. Beignets, key lime pie & more. End your meal on a sweet note!",
    image: "/images/menu/dessert.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      { name: "BEIGNET", image: "/images/menu/dessert-beignet.jpg" },
      {
        name: "FUNNEL CAKE FRIES",
        image: "/images/menu/dessert-funnel-cake-fries.jpg",
      },
      {
        name: "FUNNEL CAKE FRIES WITH ICE CREAM",
        image: "/images/menu/dessert-funnel-cake-ice.jpg",
      },
    ],
    sides: [],
  },
  kids: {
    title: "KIDS",
    displayName: "KIDS",
    description:
      "Delicious kid-sized meals served with fries, mini corn dog, mac & cheese, and a juice pouch — perfect for little seafood lovers (or picky eaters).",
    metaTitle: "Kids Menu | Cap't Loui Family-Friendly Seafood Options",
    metaDescription:
      "Cap't Loui kids menu - Mini seafood boils, chicken tenders & more. Kid-friendly portions, same fresh quality. Family seafood dining done right!",
    image: "/images/menu/kids-fish.webp",
    hasSpiceLevel: false,
    hasSauce: false,
    items: [
      {
        name: "Little Cap’t Chicken Tenders Combo",
        image: "/images/menu/kids-chicken.webp",
      },
      { name: "Little Cap’t Fish Combo", image: "/images/menu/kids-fish.webp" },
    ],
    sides: [],
  },
};

const MENU_CATEGORIES = [
  { key: "the-boiler", label: "THE BOILER" },
  { key: "sides", label: "SIDES" },
  { key: "the-fryer", label: "THE FRYER" },
  { key: "soup", label: "SOUPS" },
  { key: "sandwiches", label: "SANDWICHES" },
  { key: "lunch-special", label: "LUNCH SPECIALS" },
  { key: "desserts", label: "DESSERTS" },
  { key: "kids", label: "KIDS MEAL" },
  { key: "drinks", label: "DRINKS" },
];

const NUTRITION_CATEGORIES = [
  { key: "the-boiler", label: "SEAFOOD" },
  { key: "sauce", label: "SAUCE" },
  { key: "spice-level", label: "SPICE LEVEL" },
  { key: "sides", label: "SIDES" },
  { key: "soups", label: "SOUPS" },
  { key: "raw-bar", label: "RAW BAR" },
  { key: "fried-baskets", label: "FRIED BASKETS" },
  { key: "wings", label: "WINGS" },
  { key: "sandwiches", label: "SANDWICHES" },
  { key: "lunch-specials", label: "LUNCH SPECIALS" },
  { key: "fried-basket-lunch-special", label: "FRIED BASKET LUNCH SPECIAL" },
  { key: "desserts", label: "DESSERTS" },
  { key: "kids-meal", label: "KIDS MEAL" },
  { key: "drinks", label: "DRINKS" },
];

const spiceLevels = ["MILD", "MED", "HOT", "X-HOT", "2X-HOT", "INFERNO"];

const sauceOptions = [
  { name: "CAP'T LOUI", image: "/images/menu/sauce-captloui.jpg" },
  { name: "LEMON PEPPER", image: "/images/menu/sauce-lemon-pepper.jpg" },
];

export {
  MENU_DATA,
  MENU_CATEGORIES,
  spiceLevels,
  sauceOptions,
  NUTRITION_CATEGORIES,
};
