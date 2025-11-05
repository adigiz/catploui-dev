"use client";

import Link from "next/link";
import React from "react";

const stats = [
  { value: "20+", label: "LOCATIONS" },
  { value: "10+", label: "STATES" },
  { value: "2016", label: "FOUNDED" },
  { value: "200+", label: "TEAM MEMBERS" },
];

const BuiltOnFlavorSection: React.FC = () => {
  return (
    <section className="bg-primary text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-white text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center mx-auto shadow-lg hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <Link href="/locations">
            <button className="w-full sm:w-auto bg-white text-primary font-bold py-3 px-6 md:py-4 md:px-8 text-sm sm:text-base md:text-lg rounded-full border-2 border-transparent hover:bg-primary hover:border-white hover:text-white hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]">
              FIND YOUR LOUI
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="w-full sm:w-auto bg-white text-primary font-bold py-3 px-6 md:py-4 md:px-8 text-sm sm:text-base md:text-lg rounded-full border-2 border-transparent hover:bg-primary hover:border-white hover:text-white hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]">
              JOIN THE CREW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuiltOnFlavorSection;
