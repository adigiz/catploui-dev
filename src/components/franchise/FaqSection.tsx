"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. What are the terms of the Franchise Agreement?",
    answer:
      "10-year term with two optional 5-year renewals. One-time franchise fee of $50,000 and 4.5% royalty on gross sales.",
  },
  {
    question: "2. What does the franchise fee include?",
    answer:
      "Support throughout store setup: site selection, layout, training, operations manuals, brand assets, and the right to use Cap’t Loui branding.",
  },
  {
    question: "3. Do I need restaurant experience?",
    answer:
      "Not required! We provide full training, tools, and ongoing support to help you succeed.",
  },
  {
    question: "4. How long does it take to open?",
    answer:
      "On average, 6–12 months from signing to opening, depending on permits and construction.",
  },
  {
    question: "5. I don’t have a location yet—what should I do?",
    answer:
      "We help assess your market, demographics, and competitors to find the best location for your store.",
  },
  {
    question: "6. Can I use existing restaurant equipment?",
    answer:
      "Yes, if approved by our team and it meets our equipment standards.",
  },
  {
    question: "7. What must I purchase from Cap’t Loui?",
    answer:
      "Branded sauces, uniforms, and a few proprietary items. All others may be sourced locally if approved.",
  },
  {
    question: "8. Do you offer financing?",
    answer:
      "No financing is available directly, so franchisees must secure their own funding.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-20  px-10 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-center mb-12 text-[#333333]">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border ${
                  isOpen ? "border-primary bg-white" : "bg-primary text-white"
                } rounded-sm px-6 py-4 transition-all duration-300 cursor-pointer`}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-md font-medium ${
                      isOpen ? "text-primary" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </p>
                  {!isOpen && <ChevronDown size={20} />}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-md text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="py-8 mt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 font-medium italic">
              The information on our website is not an offer to sell, or a
              solicitation of an offer to buy a CAP&apos;T LOUI® franchise. An
              offer to buy a CAP&apos;T LOUI franchise is made by Franchise
              Disclosure Document only. This offer is not being directed to any
              resident of any State*, Province, Country or Jurisdiction where
              Cap&apos;t Loui, LLC is not currently registered to offer or sell,
              unless otherwise qualified or exempt. Prospective franchisees are
              encouraged to obtain and carefully read the Cap&apos;t Loui, LLC
              Franchise Disclosure Document thoroughly and evaluate any
              franchise offering with an attorney or advisor before deciding to
              sign an agreement or spend any money.
            </p>
            <p className="text-sm text-gray-600 font-medium italic">
              *Pre-sale Registration States: California, Hawaii, Illinois,
              Indiana, Maryland, Michigan, Minnesota, New York, North Dakota,
              Rhode Island, South Dakota, Virginia, Washington and Wisconsin.
            </p>
            <p className="text-sm text-gray-600 font-medium italic">
              Copyright © 2025 Capt Loui, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
