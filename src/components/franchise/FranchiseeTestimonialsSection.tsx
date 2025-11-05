"use client";

import React from "react";

const FranchiseeTestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-[#333333] text-center mb-8 md:mb-12">
          FRANCHISEE TESTIMONIALS
        </h2>

        <div className="bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left side - Testimonial text */}
            <div className="space-y-4 md:space-y-6">
              <blockquote className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                &quot;We began this journey hoping to bless everyone we come
                across — through our food, our service, and every experience at
                our restaurant.&quot;
              </blockquote>
              <div className="text-primary font-bold text-sm md:text-base lg:text-lg uppercase">
                HANNA, CAP&apos;T LOUI CARROLLTON
              </div>
            </div>

            {/* Right side - YouTube video embed */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4-CmS_DBUXU"
                  title="Franchisee Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseeTestimonialsSection;
