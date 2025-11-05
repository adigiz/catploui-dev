"use client";

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-75px)] cursor-pointer">
      <video
        src="/videos/home-video.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute bg-black opacity-40 inset-0 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 h-full">
        <h1 className="text-3xl md:text-7xl font-semibold text-white tracking-widest">
          HANDS-ON FLAVOR
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 font-medium">
          Our signature Cajun seafood boils are loud, messy, and unforgettable.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/menu">
            <button className="bg-white text-primary font-medium py-3 px-7 rounded-full hover:shadow-white hover:shadow-all transition hover:cursor-pointer">
              VIEW MENU
            </button>
          </Link>
          <a
            href="https://direct.chownow.com/order/25448/locations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-white font-medium py-3 px-7 rounded-full hover:shadow-white hover:shadow-all transition hover:cursor-pointer">
              ORDER NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
