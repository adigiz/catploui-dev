import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface ComingSoonPlaceholderProps {
  storeName: string;
  location: string;
  openingDate?: string;
  className?: string;
}

export default function ComingSoonPlaceholder({
  storeName,
  location,
  openingDate,
  className = "",
}: ComingSoonPlaceholderProps) {
  return (
    <div
      className={`relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/menu-background-new.webp"
          alt="Menu background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <div className="relative z-10 text-center p-6 sm:p-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Calendar className="w-4 h-4" />
          COMING SOON
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {storeName}
        </h1>

        <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
          <MapPin className="w-5 h-5" />
          <span className="text-lg">{location}</span>
        </div>

        {openingDate && (
          <p className="text-xl text-white font-semibold mb-8">
            Opening {openingDate}
          </p>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Ready for Authentic Cajun Seafood!
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We&apos;re bringing the bold, authentic taste of Louisiana to{" "}
            {location}. Get ready for fresh seafood boils, signature Cajun
            seasoning, and that unforgettable Cap&apos;t Loui experience you
            love.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fresh Seafood Boils</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Signature Cajun Seasoning</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Family-Friendly Atmosphere</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Online Ordering Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
