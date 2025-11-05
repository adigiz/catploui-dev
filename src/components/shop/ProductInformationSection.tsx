"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const productImages = [
  { file: "information-1", title: "Nutritional Information" },
  { file: "information-2", title: "Ingredients & Usage" },
  { file: "information-3", title: "Product Details" },
];

export default function ShopHeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#333333] mb-8 sm:mb-10 md:mb-12 leading-tight">
        PRODUCT INFORMATION
      </h2>

      
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full">
        {productImages.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={`/images/shop/${item.file}.png`}
              alt={item.title}
              width={450}
              height={450}
              className="object-contain w-full h-auto max-w-md"
            />
          </div>
        ))}
      </div>

      
      <div className="block md:hidden max-w-2xl mx-auto px-10">
        <div
          className={`border ${
            isOpen ? "border-primary bg-white" : "bg-primary text-white"
          } rounded-lg px-4 sm:px-6 py-4 transition-all duration-300 cursor-pointer`}
          onClick={toggle}
        >
          <div className="flex justify-between items-center">
            <p
              className={`text-base sm:text-base font-medium ${
                isOpen ? "text-primary" : "text-white"
              }`}
            >
              PRODUCT INFORMATION
            </p>
            {!isOpen && <ChevronDown size={20} />}
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[2000px] mt-4" : "max-h-0"
            }`}
          >
            <div className="space-y-4">
              {productImages.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={`/images/shop/${item.file}.png`}
                    alt={item.title}
                    width={450}
                    height={450}
                    className="object-contain w-full h-auto max-w-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
