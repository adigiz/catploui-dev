"use client";

import Image from "next/image";
import Link from "next/link";

export default function DeliciousDishesSection() {
  return (
    <section className="w-full py-16 px-6 md:px-0 bg-white">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          <div className="w-full h-full hidden md:block">
            <Image
              src="/images/home/menu-item-1.webp"
              alt="Seafood Boil"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full hidden md:block">
            <Image
              src="/images/home/menu-item-2.webp"
              alt="Po' Boy Sandwich"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full">
            <Image
              src="/images/home/menu-item-3.webp"
              alt="Fried Chicken Basket"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="mt-12 text-2xl md:text-4xl font-bold text-gray-800 text-center uppercase">
          DELICIOUS DISHES <span className="text-primary">FOR EVERYONE</span>
        </h2>

        <div className="mt-6">
          <Link href="/menu">
            <button className="bg-primary text-white font-medium py-3 px-6 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
              EXPLORE OUR MENU
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
