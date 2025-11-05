"use client";

import Link from "next/link";
import React from "react";

const InvestmentSupportSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-black mb-6 sm:mb-8 uppercase text-center">
        Investment Requirements
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14 items-start px-2 md:px-20 lg:px-30">
        <div className="w-full bg-[#f9f4f4] rounded-2xl sm:rounded-3xl lg:rounded-2xl border-2 border-primary p-4 sm:p-6 md:p-8 shadow-md">
          <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base text-[#666666]">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>
                Franchise Fee: <strong>$50,000</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>
                Total investment range: <strong>$230,000 – $833,000</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>Restaurant or food service experience preferred</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>Commitment to brand standards and values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>Ability to secure prime retail location</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              <span>Passion for customer service excellence</span>
            </li>
          </ul>

          <div className="mt-6 sm:mt-8 md:mt-10 border border-primary rounded-xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 bg-white">
            <h4 className="text-primary text-lg sm:text-xl md:text-2xl font-normal uppercase mb-4 sm:mb-6">
              Investment Breakdown
            </h4>
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex gap-10">
                <ul className="text-sm text-gray-800 space-y-5">
                  <li>
                    <span className="font-semibold">Franchise Fee:</span>
                  </li>
                  <li>
                    <span className="font-semibold">Equipment & Buildout:</span>
                  </li>
                  <li>
                    <span className="font-semibold">Working capital:</span>
                  </li>
                  <li className="font-semibold text-primary mt-2">
                    Total Investment:
                  </li>
                </ul>
                <ul className="text-sm text-gray-800 space-y-5">
                  <li className="font-bold">$50,000</li>
                  <li className="font-bold">Varies by site</li>
                  <li className="font-bold">Varies</li>
                  <li className="font-semibold text-primary mt-2">
                    $230,000 - $833,000
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden space-y-4">
              <div>
                <p className="font-semibold text-sm text-gray-800 mb-2">
                  Franchise Fee :
                </p>
                <p className="font-bold text-lg text-gray-800">$50,000</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800 mb-2">
                  Buildout & Equipment:
                </p>
                <p className="font-bold text-lg text-gray-800">
                  $200,00-$ 350,000
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800 mb-2">
                  Working capital:
                </p>
                <p className="font-bold text-lg text-gray-800">
                  $55,000-$1550,000
                </p>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <p className="font-semibold text-sm text-primary mb-2">
                  Total Investment: $230,000-$833,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 flex justify-center text-center items-center">
        <Link className="w-full" href="/franchise/#contact-us-form">
          <button className="bg-primary text-white font-medium py-3 px-8 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
            SUBMIT INQUIRY
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InvestmentSupportSection;
