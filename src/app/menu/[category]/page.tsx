import type { Metadata } from "next";
import { MENU_DATA } from "@/utils/menuData";
import MenuCategoryPage from "./MenuCategory";
import { generateMenuCategorySchema } from "@/utils/jsonLdSchemas";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categorySlug = (await params).category;
  const currentMenu = MENU_DATA[categorySlug as keyof typeof MENU_DATA];

  if (!currentMenu) {
    return {
      title: "Menu | Cap't Loui",
      description:
        "Cap't Loui seafood boil menu - Fresh crab legs, crawfish, shrimp boils & more.",
      alternates: {
        canonical: `https://captloui.com/menu`,
      },
    };
  }

  return {
    title: `${currentMenu.metaTitle} | Cap't Loui Menu`,
    description: `${currentMenu.metaDescription}`,
    alternates: {
      canonical: `https://captloui.com/menu/${categorySlug}`,
    },
  };
}

export default async function MenuCategoryPageServer({ params }: Props) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const currentMenu = MENU_DATA[categorySlug as keyof typeof MENU_DATA];

  // Generate JSON-LD schema for menu category page
  let menuCategorySchema = null;
  if (currentMenu) {
    menuCategorySchema = generateMenuCategorySchema(currentMenu, categorySlug);
  }

  return (
    <MenuCategoryPage params={resolvedParams} schema={menuCategorySchema} />
  );
}