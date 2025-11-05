"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Image
              src="/images/about/nostalgia.avif"
              alt="Cap't Loui seafood platter"
              width={650}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center order-2 lg:order-1 mt-4 lg:mt-0">
          <h2 className="text-4xl font-medium text-[#333333] leading-tight">
            OUR STORY
          </h2>
          <p className="text-[#666666] mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-md lg:text-md font-medium leading-relaxed px-2 sm:px-4 lg:px-0 max-w-2xl mx-auto lg:mx-0">
            Cap&apos;t Loui wasn’t born from a lifelong dream or a perfect plan.
            Like many good things, our story started unexpectedly — by working
            hard in a kitchen, learning the ropes, and discovering joy in the
            craft, in the people, and in the small moments that make this work
            meaningful.
            <br /><br />
            Cap’t Loui was built on a simple belief: work should be more than
            survival — it should be a place where people grow, where care shows
            up in every detail, and where something as simple as a meal can
            leave a lasting impression. We’re not just here to serve seafood.
            <br /> <br /> We’re here to make people feel seen, welcomed, and valued.
            Whether it’s a thoughtful gesture, a perfectly timed smile, or a
            moment of surprise that makes someone say “WOW,” we believe that
            kind of care is what sets us apart — and what keeps people coming
            back. <br /><br /> Our goal isn’t to be the biggest. It’s to be the most
            meaningful. To create space where both guests and team members feel
            safe, inspired, and proud of what they’re part of.
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <Link href="/menu">
              <button className="bg-primary text-white font-medium py-3 px-5 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg">
                CHECK OUR MENU
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
