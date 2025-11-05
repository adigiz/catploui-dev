"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ItemCarousel from "@/components/menu/ItemCarousel";
import SpiceLevelCarousel from "@/components/menu/SpiceLevelCarousel";
import {
  MENU_CATEGORIES,
  MENU_DATA,
  sauceOptions,
  spiceLevels,
} from "@/utils/menuData";
import type { JsonLdSchema } from "@/utils/jsonLdSchemas";

type Props = {
  params: { category: string };
  schema: JsonLdSchema | null;
};

export default function MenuCategoryPage({ params, schema }: Props) {
  const router = useRouter();
  const categorySlug = params.category;

  const currentMenu = MENU_DATA[categorySlug as keyof typeof MENU_DATA];

  useEffect(() => {
    if (!currentMenu) {
      router.replace("/menu/the-boiler");
    }
  }, [currentMenu, router]);

  const handleCategoryClick = (categoryKey: string) => {
    router.push(`/menu/${categoryKey}`);
  };

  const MenuButton = ({
    category,
    isActive,
    onClick,
  }: {
    category: string;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-8 py-2 text-md transition-colors hover:cursor-pointer ${
        isActive
          ? "border-l-8 border-primary text-primary font-bold"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {category}
    </button>
  );

  if (!currentMenu) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Menu Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The menu category &quot;{categorySlug}&quot; could not be found.
          </p>
          <Link href="/menu" className="text-primary hover:underline">
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Inject JSON-LD directly for immediate SEO availability */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      <div className="min-h-screen bg-white">
        <style jsx>{`
          @media (min-width: 1024px) and (max-width: 1279px) {
            /* Styles for lg screens (1024px-1279px) like 1366px */
            .menu-item-grid {
              gap: 0.75rem !important;
            }
            .menu-item-card {
              max-width: 200px !important;
            }
            .menu-hero-image {
              width: 180px !important;
              height: 180px !important;
            }
          }
        `}</style>
        {/* Remove the mobile menu from here since it will be in header */}

        <div className="flex">
          {/* Desktop Sidebar */}
          <div
            className="hidden md:hidden lg:block sticky top-10 left-0 transform w-64 z-2 float-left"
            style={{ height: "calc(100vh - 350px)" }}
          >
            <div className="pt-6 pb-6 pr-6">
              <Link href="/menu">
                <h3 className="text-lg font-bold text-primary mb-4 pl-8">
                  MENU
                </h3>
              </Link>
              <ul className="space-y-2">
                {MENU_CATEGORIES.map((category) => (
                  <li key={category.key}>
                    <MenuButton
                      category={category.label}
                      isActive={categorySlug === category.key}
                      onClick={() => handleCategoryClick(category.key)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full mr-0 md:mr-0 lg:mr-45">
            <div className="max-w-6xl w-full md:px-4 lg:px-4 xl:px-4 py-4 sm:py-8 xl:pl-0 justify-center">
              <div>
                {/* Hero Image */}
                <div className="text-center mb-6 sm:mb-8 px-2 sm:px-4">
                  <div className="mb-4 sm:mb-6">
                    <Image
                      src={currentMenu.image}
                      alt={currentMenu.title}
                      width={300}
                      height={300}
                      className="menu-hero-image mx-auto rounded-full w-48 sm:w-60 lg:w-45 xl:w-60 h-48 sm:h-60 lg:h-45 xl:h-60 object-cover border-primary border-4 sm:border-5"
                    />
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {currentMenu.title}
                  </h1>
                  <p className="text-primary font-medium mb-3 sm:mb-4 text-xs sm:text-sm lg:text-sm xl:text-base px-4">
                    MENU ITEMS MAY VARY BY LOCATION AND ARE SUBJECT TO
                    AVAILABILITY
                  </p>
                  <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-base xl:text-lg px-4">
                    {currentMenu.description}
                  </p>
                </div>

                {/* Main Items */}
                <ItemCarousel
                  items={currentMenu.items}
                  title={`${
                    currentMenu.title === "THE BOILER"
                      ? "STEP 1: PICK YOUR PROTEIN"
                      : ""
                  }`}
                />

                {/* Sides (only for boiler) */}
                {currentMenu.sides.length > 0 && (
                  <ItemCarousel
                    items={currentMenu.sides}
                    title="ADD YOUR SIDES"
                  />
                )}

                {/* Sauce Section (only for boiler) */}
                {currentMenu.hasSauce && (
                  <div className="mb-8 sm:mb-12 px-2 sm:px-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8 px-4">
                      STEP 2: SAUCE IT UP
                    </h3>

                    {/* Desktop */}
                    <div className="hidden md:flex justify-center gap-4 max-w-4xl mx-auto">
                      {sauceOptions.map((sauce) => (
                        <div key={sauce.name} className="text-center">
                          <div className="rounded-lg p-6 mb-4 aspect-square w-64">
                            <div className="w-full h-full">
                              <Image
                                src={sauce.image}
                                alt={`${sauce.name} Sauce`}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {sauce.name}
                          </h4>
                        </div>
                      ))}
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden">
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-lg mx-auto">
                        {sauceOptions.map((sauce) => (
                          <div key={sauce.name} className="text-center">
                            <div className="rounded-lg p-2 sm:p-4 mb-2 sm:mb-4 aspect-square w-full">
                              <div className="w-full h-full">
                                <Image
                                  src={sauce.image}
                                  alt={`${sauce.name} Sauce`}
                                  width={150}
                                  height={150}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            </div>
                            <h4 className="text-sm sm:text-lg font-bold text-gray-900">
                              {sauce.name}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Spice Level Section (only for boiler) */}
                {currentMenu.hasSpiceLevel && (
                  <div className="mb-8 sm:mb-12 px-2 sm:px-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8 px-4">
                      STEP 3: CHOOSE SPICE LEVEL
                    </h3>

                    {/* Desktop */}
                    <div className="hidden md:flex justify-center gap-4 flex-wrap max-w-5xl mx-auto mb-12">
                      {spiceLevels.map((level, index) => (
                        <div key={level} className="text-center">
                          <div className="w-32 h-32 rounded-full mb-2 overflow-hidden">
                            <Image
                              src={`/images/menu/spicylevel${index + 1}.jpg`}
                              alt={level}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm">
                            {level}
                          </h4>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                      <SpiceLevelCarousel spiceLevels={spiceLevels} />
                    </div>
                  </div>
                )}

                <div className="py-0 sm:py-6 md:py-8 lg:py-12 max-w-5xl mx-auto px-0 sm:px-4 md:px-4 lg:px-4">
                  {/* Desktop Version */}
                  <div className="flex flex-col justify-between items-center gap-4 pb-8">
                    <h2 className="hidden lg:block text-2xl lg:text-4xl font-bold text-black mb-12">
                      Hungry yet?
                    </h2>
                    <div className="flex gap-5">
                      <Link href="https://direct.chownow.com/order/25448/locations">
                        <button className="border-2 border-transparent hover:cursor-pointer bg-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                          ORDER NOW
                        </button>
                      </Link>
                      <Link href="/locations">
                        <button className="border-2 border-transparent hover:cursor-pointer bg-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                          FIND LOCATION
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}