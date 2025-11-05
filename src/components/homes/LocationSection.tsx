"use client";

import Image from "next/image";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-0 lg:px-20">
        
        <div className="w-full md:w-1/2 flex justify-center h-full order-1 md:order-2">
          <div className="w-[350px] md:w-[400px] lg:w-[600px]">
            <Image
              src="/images/home/hands_on_lobster.png"
              alt="Crabs"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        
        <div className="w-full md:w-1/2 text-center order-2 md:order-1 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary text-center uppercase">
            Experience Cap&apos;t Loui
          </h2>
          <p className="text-[#4d4d4d] mt-4 text-center text-[15px] md:text-base lg:text-md font-medium px-0 lg:px-9">
            Our secret?{" "}
            <span className="font-bold">
              A love for bold flavor, a passion for real food, and a commitment
              to the freshest seafood.
            </span>{" "}
            Whether you&apos;re a first-timer or a Cap&apos;t Loui regular, every visit
            delivers an authentic boil packed with heat, heart, and heritage.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/locations">
              <button className="bg-primary text-white font-medium py-3 px-6 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
                FIND YOUR LOUI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}