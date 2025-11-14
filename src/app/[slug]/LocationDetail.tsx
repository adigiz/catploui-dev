"use client";

import Link from "next/link";
import React, { useState } from "react";
import ComingSoonPlaceholder from "@/components/ComingSoonPlaceholder";
import PromoSection from "@/components/promo/PromoSection";
import {
  MapPin,
  Phone,
  Clock,
  // ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import storeData from "@/utils/storeData";
import type { JsonLdSchema } from "@/utils/jsonLdSchemas";

type Props = {
  params: { slug: string };
  schema: JsonLdSchema | null;
};

function findStoreBySlug(slug: string) {
  return storeData.find((store) => store.slug === slug) || null;
}

export default function LocationDetail({ params, schema }: Props) {
  // const [featuresOpen, setFeaturesOpen] = useState(false);
  const [currentStoreImageIndex, setCurrentStoreImageIndex] = useState(0);

  const store = findStoreBySlug(params.slug);

  if (!store) {
    notFound();
  }

  // const features = [
  //   { icon: "✓", label: "DINE-IN" },
  //   { icon: "✓", label: "CATERING" },
  //   { icon: "✓", label: "TAKEOUT" },
  //   { icon: "✓", label: "FAMILY SEATING" },
  //   { icon: "✓", label: "DELIVERY" },
  //   { icon: "✓", label: "PARKING AVAILABLE" },
  // ];

  // Store images handling - support both single image and multiple images
  const storeImages = store.storeImages || [
    "/images/about/seafood4-scaled.png",
  ];
  const hasMultipleStoreImages = storeImages.length > 1;

  const nextStoreImage = () => {
    setCurrentStoreImageIndex((prev) => (prev + 1) % storeImages.length);
  };

  const prevStoreImage = () => {
    setCurrentStoreImageIndex(
      (prev) => (prev - 1 + storeImages.length) % storeImages.length
    );
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      <div>
        {store.isComingSoon ? (
          <ComingSoonPlaceholder
            storeName={store.name}
            location={store.address}
            openingDate={store.openingDate}
            className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-120px)]"
          />
        ) : (
          <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-120px)]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={
                store.bannerVideo && store.bannerVideo.trim() !== ""
                  ? store.bannerVideo
                  : "https://bestrestaurantfranchises.com/wp-content/uploads/2025/07/capt-loui-loation-video-desktop.webm"
              }
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-normal mb-4 leading-tight">
                {store.name}
              </h1>
              <p className="max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2">
                Experience authentic Cajun seafood boils at our{" "}
                {store.name.split(" ").pop()} location. Fresh ingredients, bold
                flavors, and that signature Cap&apos;t Loui experience you love.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap justify-center gap-3">
                <a
                  href={store.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="bg-white text-primary font-medium py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-full hover:shadow-white hover:shadow-all transition hover:cursor-pointer">
                    ORDER NOW
                  </button>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* <section className="bg-primary py-4 sm:py-6 md:py-8 sm:bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center text-white flex flex-col items-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-transparent border border-white rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white text-sm sm:text-lg font-bold">
                    {feature.icon}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium leading-tight text-center">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          <div className="block sm:hidden">
            <div
              className={`border-2 border-primary ${
                featuresOpen ? "bg-gray-50" : "bg-primary"
              } transition-all duration-300 cursor-pointer rounded-lg overflow-hidden`}
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              <div className="flex justify-between items-center px-6 py-4">
                <p
                  className={`font-medium text-base uppercase tracking-wide ${
                    featuresOpen ? "text-gray-700" : "text-white"
                  }`}
                >
                  SERVICES AVAILABLE
                </p>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    featuresOpen ? "bg-gray-400" : "bg-white bg-opacity-20"
                  }`}
                >
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-300 ${
                      featuresOpen ? "rotate-180 text-white" : "text-white"
                    }`}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  featuresOpen ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-6 grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-gray-700 text-lg font-bold">✓</span>
                      <p className="text-gray-700 text-base font-medium">
                        {feature.label.replace("-", " – ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        <section className="bg-white py-4 sm:py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    VISIT US TODAY!
                  </h2>

                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 uppercase">
                          ADDRESS
                        </h3>
                        <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                          <div>{store.address.split(",")[0]}</div>
                          <div>
                            {store.address.split(",").slice(1).join(",").trim()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 uppercase">
                          PHONE
                        </h3>
                        <a
                          href={`tel:${store.phone}`}
                          className="text-gray-600 text-sm sm:text-base md:text-lg hover:text-primary transition-colors"
                        >
                          {store.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 uppercase">
                          HOURS
                        </h3>
                        <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                          {store.hours.split("\n").map((line, index) => (
                            <div key={index}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {store.openTableUrl && (
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              R
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 uppercase">
                            RESERVATIONS
                          </h3>
                          <a
                            href={store.openTableUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <button className="bg-primary text-white font-medium py-2 px-4 rounded-md border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary transition-all duration-200 text-sm cursor-pointer">
                              MAKE RESERVATION
                            </button>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center mt-6 lg:mt-0">
                  <div className="relative rounded-lg overflow-hidden mb-4 sm:mb-6 md:mb-8 w-full">
                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                      <Image
                        src={storeImages[currentStoreImageIndex]}
                        alt={`${store.name} interior ${
                          currentStoreImageIndex + 1
                        }`}
                        width={500}
                        height={350}
                        className="w-full h-full object-cover"
                        quality={100}
                      />

                      {hasMultipleStoreImages && (
                        <>
                          <button
                            onClick={prevStoreImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextStoreImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}

                      {hasMultipleStoreImages && (
                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs">
                          {currentStoreImageIndex + 1} / {storeImages.length}
                        </div>
                      )}
                    </div>

                    {hasMultipleStoreImages && (
                      <div className="flex justify-center gap-2 mt-3">
                        {storeImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStoreImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentStoreImageIndex
                                ? "bg-primary"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-primary font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3">
                      NEARBY ATTRACTIONS:
                    </p>
                    <p className="text-primary text-xs sm:text-sm md:text-base">
                      {store.nearbyAttractions}
                    </p>
                  </div>

                  <div className="w-full mb-4 sm:mb-6">
                    <PromoSection storeSlug={store.slug} />
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                    <a
                      href={store.orderUrl || `/order/${store.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full bg-primary text-white font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition-colors duration-200 text-xs sm:text-sm md:text-base">
                        ORDER NOW
                      </button>
                    </a>

                    <a
                      href={store.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="hover:cursor-pointer w-full bg-white text-primary border-2 border-primary font-medium py-2 sm:py-3 px-4 sm:px-5 md:px-6 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 text-xs sm:text-sm md:text-base">
                        GET DIRECTIONS
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-6 sm:pb-8 md:pb-12 pt-3 sm:pt-4 md:pt-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Image
                src="/icon.png"
                alt="Cap't Loui Logo"
                width={120}
                height={120}
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary mb-3 sm:mb-4 md:mb-6 leading-tight">
              Be part of the experience!
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Don&apos;t miss the opportunity of having moments of joy with us!
            </p>

            <Link href="/locations">
              <button className="bg-primary text-white font-medium py-2 sm:py-3 px-4 sm:px-5 rounded-full text-xs sm:text-sm md:text-base hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                EXPLORE OUR LOCATIONS
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
