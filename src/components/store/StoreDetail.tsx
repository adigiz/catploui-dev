"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Store } from "@/types/store";
import type { JsonLdSchema } from "@/utils/jsonLdSchemas";
import ComingSoonPlaceholder from "@/components/ComingSoonPlaceholder";
import GeneralNewsletterEmbed from "@/components/GeneralNewsletterEmbed";
import EdisonNewsletterEmbed from "@/components/EdisonNewsletterEmbed";
import {
  MapPin,
  Phone,
  Clock,
  Play,
  ExternalLink,
  Navigation,
  Calendar,
} from "lucide-react";
import Image from "next/image";

interface Props {
  store: Store;
  schema?: JsonLdSchema | null;
}

export default function StoreDetail({ store, schema }: Props) {
  const [showYouTubeModal, setShowYouTubeModal] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeVideoId = store.youtubeUrl
    ? getYouTubeVideoId(store.youtubeUrl)
    : null;

  // Get YouTube thumbnail with fallback
  const getYouTubeThumbnail = (videoId: string) => {
    // Use hqdefault.jpg which is more reliable than maxresdefault.jpg
    // hqdefault.jpg: 480x360, always available
    // maxresdefault.jpg: 1280x720, not always available
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      <div className="min-h-screen bg-white">
        {store.isComingSoon ? (
          <>
            <ComingSoonPlaceholder
              storeName={store.name}
              location={store.address}
              openingDate={store.openingDate}
              className="h-[110vh] sm:h-[110vh] lg:h-[80vh]"
            />

            {/* Now Hiring Section for Coming Soon Stores */}
            <section className="py-16 bg-white from-primary/5 via-white to-primary/10">
              <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      WE&apos;RE HIRING
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Join Our Team
                    </h2>

                    <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                      We&apos;re building an amazing team for our upcoming{" "}
                      <span className="font-semibold text-white">
                        {store.name}
                      </span>{" "}
                      location. Be part of something special from day one!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link
                        href="/careers"
                        className="inline-flex items-center gap-3 bg-white text-primary font-bold py-4 px-8 rounded-full hover:bg-white/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <span>Now Hiring</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>

                      <div className="text-white/80 text-sm">
                        <span className="font-semibold">
                          Multiple positions available
                        </span>
                        <span className="mx-2">•</span>
                        <span>Competitive benefits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {store.name.toLowerCase().includes("edison") ? (
              <EdisonNewsletterEmbed />
            ) : (
              <GeneralNewsletterEmbed />
            )}
          </>
        ) : (
          <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={
                  store.storeImages?.[0] || "/images/about/seafood4-scaled.png"
                }
                alt={`${store.name} interior`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-20">
                <div className="max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {store.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                    {store.tagline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={store.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        ORDER NOW
                      </button>
                    </a>

                    <a
                      href={store.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-primary">
                        <Navigation className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        GET DIRECTIONS
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {!store.isComingSoon && (
          <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      VISIT OUR LOCATION
                    </h2>

                    <div className="space-y-6">
                      {}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Address
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {store.address.split(",")[0]}
                            <br />
                            {store.address.split(",").slice(1).join(",").trim()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Phone
                          </h3>
                          <a
                            href={`tel:${store.phone}`}
                            className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                          >
                            {store.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Hours
                          </h3>
                          <div className="text-gray-600 leading-relaxed">
                            {store.hours.split("\n").map((line, index) => (
                              <div key={index}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {store.openTableUrl && (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Reservations
                            </h3>
                            <a
                              href={store.openTableUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-white font-medium py-3 px-6 rounded-full hover:bg-primary/90 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Make Reservation
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      NEARBY ATTRACTIONS
                    </h3>
                    <p className="text-gray-600">{store.nearbyAttractions}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      FIND US
                    </h3>
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                      {store.googleMapsEmbedUrl ? (
                        <iframe
                          src={store.googleMapsEmbedUrl}
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-[300px] sm:h-[420px]"
                        />
                      ) : (
                        <div className="h-[200px] sm:h-[250px] bg-gray-100 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                              Map not available
                            </p>
                            <a
                              href={store.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
                            >
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                              View on Google Maps
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {youtubeVideoId && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        EXPLORE OUR {store.name.toUpperCase()} LOCATION
                      </h3>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer">
                        <div className="relative">
                          <Image
                            src={getYouTubeThumbnail(youtubeVideoId)}
                            alt={`${store.name} video thumbnail`}
                            width={600}
                            height={338}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                            <button
                              onClick={() => setShowYouTubeModal(true)}
                              className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                            >
                              <Play className="w-6 h-6 text-white ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {store.storeImages && store.storeImages.length > 1 && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Space
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Experience the vibrant atmosphere and welcoming environment at{" "}
                  {store.name}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {store.storeImages.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-lg"
                  >
                    <Image
                      src={image}
                      alt={`${store.name} interior ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {showYouTubeModal && youtubeVideoId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={() => setShowYouTubeModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
