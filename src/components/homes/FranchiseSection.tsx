"use client";

import Image from "next/image";
import Link from "next/link";

export default function FranchiseSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/images/home/capt-loui-map.png"
            alt="US Map"
            width={550}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center uppercase">
            BE THE CAP&apos;T IN YOUR CITY
          </h2>

          <p className="text-[#4d4d4d] mb-6 font-medium text-center">
            <strong>Cap’t Loui is more than a meal</strong> — it’s a movement.
            With a growing fan base, scalable operations, and a crave-worthy
            menu, our franchise program is built for bold owners ready to bring
            the boil to their city. Let’s build something flavorful together.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/franchise">
              <button className="bg-primary text-white font-medium py-3 px-8 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
                BECOME A CAP&apos;T
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
