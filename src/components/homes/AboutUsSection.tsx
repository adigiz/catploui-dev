"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-0 lg:px-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/home/crabs.webp"
            alt="Crabs"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="lg:text-4xl font-bold text-[#333333] text-center text-md uppercase">
            IT’S NOT JUST CAJUN. IT&apos;S CAP&apos;T LOUI
          </h2>
          <p className="text-[#4d4d4d] mt-4 text-center lg:text-md text-[15px] font-medium lg:px-9 px-0 ">
            <span className="font-bold">Since 2016,</span> Cap’t Loui has been
            redefining the seafood boil experience with signature Cajun spice
            blends, premium ingredients, and a whole lot of flavor. From our
            first location in Massachusetts to franchises nationwide, we’re
            proud to bring the spirit of Louisiana to your table.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/menu">
              <button className="bg-primary text-white font-medium py-3 px-6 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
                THE LOUI WAY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
