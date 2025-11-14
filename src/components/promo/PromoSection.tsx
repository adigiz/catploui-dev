"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getStorePromos } from "@/utils/promoUtils";
import { Promo } from "@/types/promo";

interface PromoSectionProps {
  storeSlug: string;
}

export default function PromoSection({ storeSlug }: PromoSectionProps) {
  const promos = getStorePromos(storeSlug);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (promos.length === 0) {
    return null;
  }

  const nextPromo = () => {
    setCurrentIndex((prev) => (prev + 1) % promos.length);
  };

  const prevPromo = () => {
    setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const currentPromo: Promo = promos[currentIndex];
  const hasMultiplePromos = promos.length > 1;

  if (promos.length === 1) {
    return (
      <div className="rounded-2xl h-120 lg:h-full flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">PROMOTIONS</h3>
        <div className="relative w-full flex-1 rounded-lg overflow-hidden">
          <Image
            src={currentPromo.image}
            alt="Promotion"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">PROMOTIONS</h3>
      <div className="relative rounded-lg overflow-hidden flex-1">
        <div className="relative w-full h-full">
          <Image
            src={currentPromo.image}
            alt={`Promotion ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />

          {hasMultiplePromos && (
            <>
              <button
                onClick={prevPromo}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Previous promotion"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPromo}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Next promotion"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs">
                {currentIndex + 1} / {promos.length}
              </div>
            </>
          )}
        </div>

        {hasMultiplePromos && (
          <div className="flex justify-center gap-2 mt-3">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
