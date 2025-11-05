"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import {
  hasAcceptedCookies,
  hasDeclinedCookies,
  setCookie,
  clearAnalyticsData,
} from "@/utils/cookies";

interface CookieBannerProps {
  cookieConsentText?: string;
}

export default function CookieBanner({ cookieConsentText }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Default cookie consent text - can be customized later
  const defaultText =
    'We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. These cookies help us provide you with the best possible service when you visit our website. By clicking "Accept", you consent to our use of cookies. You can learn more about how we use cookies and your data in our Privacy Policy. If you prefer not to accept cookies, you can still browse our website, though some features may not work properly.';

  useEffect(() => {
    // Check if user has already made a cookie choice
    if (!hasAcceptedCookies() && !hasDeclinedCookies()) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted");
    setIsVisible(false);
    // Reload the page to apply analytics scripts
    window.location.reload();
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "declined");
    clearAnalyticsData();
    setIsVisible(false);
    // Reload the page to remove analytics scripts
    window.location.reload();
  };

  const handleClose = () => {
    // Just close the banner, don't save anything
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex-1">
            <div
              className="text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: cookieConsentText || defaultText,
              }}
            />
            <div className="mt-2 text-xs text-gray-500">
              Learn more in our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Accept
            </button>
          </div>

          
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
