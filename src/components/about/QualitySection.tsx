"use client";

import Image from "next/image";

export default function QualitySection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/images/about/seafood1-scaled.png"
            alt="US Map"
            width={550}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-[27px] font-medium text-gray-800 mb-4 text-center">
            QUALITY STARTS HERE
          </h2>

          <p className="text-[#4d4d4d] mb-6 font-normal text-center">
            At Cap’t Loui, every boil starts with the freshest seafood. We work
            with trusted suppliers and prep everything daily to make sure what
            you get is always flavorful. From sweet crab legs to
            tender shrimp, freshness isn’t a feature — it’s the foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
