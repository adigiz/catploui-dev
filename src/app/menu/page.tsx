import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import IngredientsCarousel from "@/components/menu/IngredientsCarousel";
import { menuSchema } from "@/utils/jsonLdSchemas";

export const metadata: Metadata = {
  title: "Menu | Cap't Loui Cajun Seafood Boils",
  description:
    "Cap't Loui seafood boil menu - Fresh crab legs, crawfish, shrimp boils & more. Choose your heat level. Order your seafood boil online for pickup or delivery!",
  alternates: {
    canonical: `https://captloui.com/menu`,
  },
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="block md:hidden lg:hidden xl:hidden relative min-h-screen bg-white overflow-hidden">
          <Image
            src="/images/menu/menu-background-new.webp"
            alt="Menu background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0  opacity-20 z-10"></div>

          <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
            <div className="max-w-lg text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">
                OUR MENU
              </h1>
              <p className="text-lg mb-8 text-white font-light">
                What do you want to eat today?
              </p>

              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <a
                  href="https://direct.chownow.com/order/25448/locations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform text-center"
                >
                  ORDER NOW
                </a>
                <Link
                  href="/locations"
                  className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform text-center"
                >
                  FIND A LOCATION
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative min-h-screen md:flex lg:flex items-center">
          <Image
            src="/images/menu/menu-background-new.webp"
            alt="Menu background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-left-center"
          />

          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg text-center lg:text-right">
                <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white">
                  OUR MENU
                </h1>
                <p className="text-lg sm:text-lg lg:text-xl mb-8 lg:mb-12 text-white font-light">
                  What do you want to eat today?
                </p>

                <div className="flex flex-col gap-4 max-w-sm ml-auto items-center lg:items-end">
                  <a
                    href="https://direct.chownow.com/order/25448/locations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform text-center"
                  >
                    ORDER NOW
                  </a>
                  <Link
                    href="/locations"
                    className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform text-center"
                  >
                    FIND A LOCATION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 lg:py-12 bg-[#F6DDDE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <h2 className=" sm:text-xl lg:text-lg font-bold text-primary">
                  Prepared with the best quality ingredients
                </h2>
              </div>

              <div className="lg:w-2/3 flex justify-center lg:justify-end w-full">
                <IngredientsCarousel />

                <div className="hidden lg:block">
                  <div className="grid grid-cols-6 gap-4 max-w-4xl">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="bg-white rounded-2xl transition-shadow duration-300"
                      >
                        <div className="aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={`/images/menu/ingredients-${num}.webp`}
                            alt={`Quality ingredient ${num}`}
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                            quality={75}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="hidden lg:block p-8 lg:p-12">
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                    THE BOILER
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    The Cap&apos;t Loui classic. Pick your seafood, sauce, and
                    heat — all boils come with corn & potato.
                  </p>
                </div>
                <div className="block lg:hidden p-8 lg:p-12 text-center">
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                    OUR MENU
                  </h2>
                  <p className="text-md lg:text-xl text-gray-600 leading-relaxed">
                    What do you want to eat today?
                  </p>
                </div>

                <Link href="/menu/the-boiler" className="block group">
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/2]">
                    <Image
                      src="/images/menu/boiler-bag.webp"
                      alt="THE BOILER - Fresh seafood boil"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                      quality={85}
                      priority
                    />
                  </div>
                </Link>
                <div className="block sm:hidden md:hidden lg:hidden xl:hidden p-6">
                  <h3 className="text-md sm:text-lg lg:text-xl font-bold text-center text-red-700 transition-all duration-300 hover:scale-105">
                    THE BOILER
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/menu/sides" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/sides.jpg"
                      alt="SIDES"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      SIDES
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/menu/soup" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/soups.webp"
                      alt="SOUPS"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      SOUPS
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/menu/the-fryer" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/the-fryer.webp"
                      alt="THE FRYER"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      THE FRYER
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/menu/sandwiches" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/sandwich.webp"
                      alt="SANDWICHES"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      SANDWICHES
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/menu/lunch-special" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/lunch-special.webp"
                      alt="LUNCH SPECIAL"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      LUNCH SPECIAL
                    </h3>
                  </div>
                </div>
              </Link>

              <Link href="/menu/kids" className="block group">
                <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/menu/for-kids.webp"
                      alt="FOR KIDS"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                      FOR KIDS
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <div className="flex justify-center gap-6">
                <Link href="/menu/drinks" className="block group">
                  <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                    <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/menu/drinks-msgreen.jpg"
                        alt="DRINKS"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                        quality={75}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                        DRINKS
                      </h3>
                    </div>
                  </div>
                </Link>

                <Link href="/menu/desserts" className="block group">
                  <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                    <div className="aspect-square sm:p-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/menu/dessert.webp"
                        alt="DESSERTS"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:contrast-105"
                        quality={75}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-md lg:text-xl font-bold text-center text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                        DESSERTS
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <IngredientsCarousel />

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-medium italic">
                  *Before placing your order, please review our allergy
                  information online or contact us with any questions about
                  allergens.
                </p>
                <p className="text-sm text-gray-600 font-medium italic">
                  *Consuming raw or undercooked meats, poultry, seafood,
                  shellfish, or eggs may increase your risk of foodborne
                  illness.
                </p>
              </div>

              {/* Nutrition Information Link */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/nutrition"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-800 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Nutrition Information & Allergens
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
