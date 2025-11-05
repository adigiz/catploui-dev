"use client";

import { useState, useCallback, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Search,
  ChevronDown,
  Calendar,
} from "lucide-react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Link from "next/link";
import { getStateFromZip } from "@/utils/location";
import storeData from "@/utils/storeData";
import GeneralNewsletterEmbed from "@/components/GeneralNewsletterEmbed";
import stateMap from "@/utils/stateMap";
import { Store } from "@/types/store";
import { locationsSchema } from "@/utils/jsonLdSchemas";
import ComingSoon from "@/components/ComingSoon";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function LocationPage() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredStores, setFilteredStores] = useState<Store[]>(storeData);
  const [comingSoonStores] = useState<Store[]>(
    storeData.filter((store) => store.isComingSoon)
  );
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [customIcon, setCustomIcon] = useState<google.maps.Icon | null>(null);
  const [iconError, setIconError] = useState(false);

  const getDefaultZoom = useCallback(() => (isMobile ? 3 : 4), [isMobile]);

  const [mapCenter, setMapCenter] = useState({
    lat: 41.4925,
    lng: -99.9018,
  });

  const [mapZoom, setMapZoom] = useState(4); // Will be updated in useEffect

  const openStores = storeData;
  const states = [...new Set(openStores.map((store) => store.state))].sort();

  const mapContainerStyle = {
    width: "100%",
    height: isMobile ? "400px" : "500px",
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  };

  // Handle mobile state and zoom
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Update zoom when mobile state changes
      setMapZoom(mobile ? 3 : 4);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Preload custom marker icon
  useEffect(() => {
    const preloadCustomIcon = () => {
      // First check if the image exists
      const img = new Image();
      img.onload = () => {
        // Create the custom icon after confirming the image loads
        if (window.google?.maps) {
          const icon = {
            url: "/images/marker.png",
            scaledSize: new window.google.maps.Size(32, 52),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(16, 42),
          };
          setCustomIcon(icon);
        }
      };
      img.onerror = () => {
        console.warn(
          "Failed to load custom marker image, using default markers"
        );
        setIconError(true);
      };
      img.src = "/images/marker.png";
    };

    if (isMapLoaded && typeof window !== "undefined" && window.google?.maps) {
      preloadCustomIcon();
    }
  }, [isMapLoaded]);

  // Handle Google Maps load completion
  const onMapLoad = useCallback(() => {
    setIsMapLoaded(true);
  }, []);

  const getStoreViewUrl = (store: Store) => {
    return (
      store.viewStoreUrl ||
      `/${store.state.toLowerCase()}/${store.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")}`
    );
  };

  const getOrderUrl = (store: Store) => {
    return store.orderUrl || `/order/${store.id}`;
  };

  const updateMapView = useCallback(
    (stores: Store[], zoom?: number) => {
      if (stores.length === 0) {
        setMapCenter({ lat: 41.4925, lng: -99.9018 });
        setMapZoom(getDefaultZoom());
        return;
      }

      if (stores.length === 1) {
        setMapCenter({
          lat: stores[0].coordinates[1],
          lng: stores[0].coordinates[0],
        });
        setMapZoom(zoom || (isMobile ? 9 : 11));
      } else {
        const avgLng =
          stores.reduce((sum, store) => sum + store.coordinates[0], 0) /
          stores.length;
        const avgLat =
          stores.reduce((sum, store) => sum + store.coordinates[1], 0) /
          stores.length;

        setMapCenter({ lat: avgLat, lng: avgLng });
        setMapZoom(zoom || (isMobile ? 5 : 7));
      }
    },
    [isMobile, getDefaultZoom]
  );

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) {
      setFilteredStores(openStores);
      updateMapView(openStores);
      return;
    }

    const query = searchQuery.trim().toUpperCase();
    let filtered: Store[] = [];

    if (/^\d{5}$/.test(query)) {
      // First, try to find exact zipcode match
      const exactMatch = openStores.find((store) => store.zipcode === query);

      if (exactMatch) {
        filtered = [exactMatch];
      } else {
        // No exact match, try to find stores in the same state
        try {
          const stateAbbr = await getStateFromZip(query);

          if (stateAbbr) {
            filtered = openStores.filter((store) => store.state === stateAbbr);
          }
        } catch (error) {
          console.error("Error getting state from zipcode:", error);
        }
      }
    } else {
      // Search by state name or abbreviation
      const stateAbbr = stateMap[query] || query;
      filtered = openStores.filter((store) => store.state === stateAbbr);
    }

    setFilteredStores(filtered);
    updateMapView(filtered);
  }, [searchQuery, updateMapView, openStores]);

  const handleStateChange = useCallback(
    (state: string) => {
      setSelectedState(state);
      setSearchQuery("");

      if (state) {
        const filtered = openStores.filter((store) => store.state === state);
        setFilteredStores(filtered);
        updateMapView(filtered);
      } else {
        setFilteredStores(openStores);
        setMapCenter({ lat: 41.4925, lng: -99.9018 });
        setMapZoom(getDefaultZoom());
      }
    },
    [updateMapView, getDefaultZoom, openStores]
  );

  // Get the appropriate icon for markers
  const getMarkerIcon = useCallback(() => {
    if (iconError || !customIcon) {
      return undefined; // Use default Google Maps marker
    }
    return customIcon;
  }, [customIcon, iconError]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationsSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              OUR LOCATIONS
            </h1>
            <h2 className="text-lg sm:text-xl text-primary font-semibold mb-3 sm:mb-4">
              FIND YOUR NEAREST CAP&apos;T LOUI
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              With locations across the country, there&apos;s always a
              Cap&apos;t Loui nearby. Each location offers the same high-quality
              seafood boils and friendly service that we&apos;re known for.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select State
                </label>
                <div className="relative">
                  <select
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className={`w-full appearance-none px-4 py-2 pr-10 border-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                      selectedState
                        ? "text-primary border-primary font-bold"
                        : "text-black border-gray-300"
                    }`}
                  >
                    <option value="">All States</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-200 ${
                      selectedState ? "text-primary" : "text-gray-500"
                    }`}
                    size={20}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by State or Zip Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter state (e.g., TX, Texas) or zip code (e.g., 78613)"
                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black placeholder-gray-500"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md max-h-[400px] sm:max-h-[500px] overflow-y-auto h-full">
                {filteredStores.length === 0 ? (
                  <div className="p-4 sm:p-6 text-center text-gray-500">
                    No stores found in this location.
                  </div>
                ) : (
                  filteredStores.map((store) => (
                    <div
                      key={store.id}
                      className={`p-4 sm:p-6 border-b border-gray-200 last:border-b-0 cursor-pointer hover:bg-gray-50 ${
                        selectedStore?.id === store.id ? "bg-red-50" : ""
                      } ${
                        store.isComingSoon
                          ? "bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary"
                          : ""
                      }`}
                      onClick={() => setSelectedStore(store)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-primary">
                          {store.name}
                        </h3>
                        {store.isComingSoon && (
                          <div className="flex items-center gap-1 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full ml-2 flex-shrink-0">
                            <Calendar className="w-3 h-3" />
                            COMING SOON
                          </div>
                        )}
                      </div>

                      <div className="flex items-start gap-2 mb-2">
                        <MapPin
                          className="text-primary mt-1 flex-shrink-0"
                          size={16}
                        />
                        <p className="text-gray-700 text-sm">{store.address}</p>
                      </div>

                      {store.isComingSoon ? (
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar
                            className="text-primary flex-shrink-0"
                            size={16}
                          />
                          <p className="text-primary font-semibold text-sm">
                            Opening {store.openingDate || "Soon"}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 mb-2">
                            <Phone
                              className="text-primary flex-shrink-0"
                              size={16}
                            />
                            <p className="text-gray-700 text-sm">
                              {store.phone}
                            </p>
                          </div>

                          <div className="flex items-start gap-2 mb-4">
                            <Clock
                              className="text-primary mt-1 flex-shrink-0"
                              size={16}
                            />
                            <p className="text-gray-700 text-sm whitespace-pre-line">
                              {store.hours}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <Link href={getStoreViewUrl(store)} className="flex-1">
                          <button
                            className={`w-full text-white border-2 border-transparent text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                              store.isComingSoon
                                ? "bg-primary/80 hover:bg-primary"
                                : "bg-primary hover:bg-red-900"
                            }`}
                          >
                            {store.isComingSoon ? "Learn More" : "View Store"}
                          </button>
                        </Link>
                        {!store.isComingSoon && (
                          <Link href={getOrderUrl(store)} className="flex-1">
                            <button className="w-full bg-white text-primary border-2 border-primary text-sm font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
                              Order Now
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <LoadScript
                  googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                  onLoad={onMapLoad}
                  loadingElement={
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                      <div className="text-gray-500">Loading map...</div>
                    </div>
                  }
                >
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={mapZoom}
                    options={mapOptions}
                  >
                    {isMapLoaded &&
                      filteredStores.map((store) => (
                        <Marker
                          key={store.id}
                          position={{
                            lat: store.coordinates[1],
                            lng: store.coordinates[0],
                          }}
                          onClick={() => setSelectedStore(store)}
                          icon={getMarkerIcon()}
                        />
                      ))}

                    {selectedStore && (
                      <InfoWindow
                        position={{
                          lat: selectedStore.coordinates[1],
                          lng: selectedStore.coordinates[0],
                        }}
                        onCloseClick={() => setSelectedStore(null)}
                      >
                        <div className="p-3 max-w-xs">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-lg text-primary">
                              {selectedStore.name}
                            </h3>
                            {selectedStore.isComingSoon && (
                              <div className="flex items-center gap-1 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full ml-2 flex-shrink-0">
                                <Calendar className="w-3 h-3" />
                                COMING SOON
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {selectedStore.address}
                          </p>
                          {selectedStore.isComingSoon ? (
                            <div className="flex items-center gap-2 mb-3">
                              <Calendar
                                className="text-primary flex-shrink-0"
                                size={14}
                              />
                              <p className="text-primary font-semibold text-sm">
                                Opening {selectedStore.openingDate || "Soon"}
                              </p>
                            </div>
                          ) : (
                            <>
                              <p className="text-sm text-gray-600 mb-2">
                                {selectedStore.phone}
                              </p>
                              <p className="text-sm text-gray-600 whitespace-pre-line mb-3">
                                {selectedStore.hours}
                              </p>
                            </>
                          )}
                          <div className="flex gap-2">
                            <Link
                              href={getStoreViewUrl(selectedStore)}
                              className="flex-1"
                            >
                              <button
                                className={`w-full text-white border border-transparent text-xs font-medium py-1.5 px-3 rounded transition-colors duration-200 ${
                                  selectedStore.isComingSoon
                                    ? "bg-primary/80 hover:bg-primary"
                                    : "bg-primary hover:bg-red-900"
                                }`}
                              >
                                {selectedStore.isComingSoon
                                  ? "Learn More"
                                  : "View Store"}
                              </button>
                            </Link>
                            {!selectedStore.isComingSoon && (
                              <Link
                                href={getOrderUrl(selectedStore)}
                                className="flex-1"
                              >
                                <button className="w-full bg-white text-primary border border-primary text-xs font-medium py-1.5 px-3 rounded hover:bg-primary hover:text-white transition-colors duration-200">
                                  Order Now
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>

        {comingSoonStores.length > 0 && (
          <div className="mt-12 sm:mt-16 pb-12 sm:pb-16 bg-white py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 uppercase">
                Coming Soon
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Exciting new Cap&apos;t Loui locations opening soon! Be the
                first to experience authentic Cajun seafood boils in these
                cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
              {comingSoonStores.map((store) => (
                <ComingSoon
                  key={store.id}
                  storeName={store.name}
                  location={store.address}
                  openingDate={store.openingDate}
                  variant="card"
                  href={getStoreViewUrl(store)}
                  className="hover:shadow-lg transition-shadow duration-300"
                />
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors"
              >
                Looking to Franchise?
              </Link>
            </div>
          </div>
        )}
      </div>

      <GeneralNewsletterEmbed />
    </>
  );
}
