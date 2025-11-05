"use client";

import React, { useEffect } from "react";

const FranchiseHeroForm: React.FC = () => {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244083598.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://js-na2.hsforms.net/forms/embed/244083598.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto w-[500px]">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Start Your Franchise Journey
        </h3>
        <p className="text-sm text-gray-600">
          Get information about our franchise opportunities
        </p>
      </div>

      {/* HubSpot Form */}
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="22249030-be0c-42d5-9862-56f0a3342118"
        data-portal-id="244083598"
      ></div>
    </div>
  );
};

export default FranchiseHeroForm;
