"use client";

import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  storeName: string;
  location: string;
  openingDate?: string;
  className?: string;
  variant?: "card" | "banner" | "page";
  href?: string;
}

export default function ComingSoon({
  storeName,
  location,
  openingDate,
  className = "",
  variant = "card",
  href,
}: ComingSoonProps) {
  const renderCard = () => {
    const cardContent = (
      <div
        className={`bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 ${className} ${
          href
            ? "cursor-pointer hover:shadow-lg hover:from-primary/15 hover:to-primary/8 transition-all duration-300"
            : ""
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              COMING SOON
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
            {storeName}
          </h3>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
            <span className="leading-relaxed">{location}</span>
          </div>
          {openingDate && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Opening {openingDate}</span>
            </div>
          )}
        </div>
      </div>
    );

    if (href) {
      return <Link href={href}>{cardContent}</Link>;
    }

    return cardContent;
  };

  const renderBanner = () => (
    <div
      className={`bg-gradient-to-r from-primary to-primary/80 text-white p-4 sm:p-4 md:p-6 rounded-lg sm:rounded-xl ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
              COMING SOON
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
            {storeName}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
            {location}
          </p>
        </div>
        {openingDate && (
          <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Opening {openingDate}</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderPage = () => (
    <div
      className={`min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            COMING SOON
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {storeName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-center">{location}</span>
          </div>
          {openingDate && (
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Opening {openingDate}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
              Prime Location
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
              Strategically located in the heart of {location} for easy access
              and maximum convenience.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
              Authentic Experience
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
              Experience the same authentic Cajun seafood boils that made
              Cap&apos;t Loui famous.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
              Follow us for updates on our opening date and exclusive
              pre-opening offers.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Be the First to Know
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Sign up to receive notifications about our opening date, special
              offers, and exclusive events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-primary text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (variant) {
    case "banner":
      return renderBanner();
    case "page":
      return renderPage();
    default:
      return renderCard();
  }
}
