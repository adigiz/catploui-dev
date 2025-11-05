"use client";

import React, { useState } from "react";

const DownloadBrochureSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState<string>("");

  // Add debug mode for testing
  const isDebugMode = process.env.NODE_ENV === "development";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Log the submission attempt for debugging
      console.log("Download brochure form submission:", {
        email: formData.email,
        firstName: formData.firstName,
        timestamp: new Date().toISOString(),
      });

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("EMAIL", formData.email);
      formDataToSubmit.append("FNAME", formData.firstName);
      formDataToSubmit.append("tags", "9321523");
      formDataToSubmit.append("b_6df9f3125631eaaeac7668f67_164f173886", "");

      // Use a more testable approach - create a proxy endpoint
      const response = await fetch("/api/download-brochure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Brochure download success:", result);
        setDebugInfo(`Success: ${JSON.stringify(result, null, 2)}`);
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Brochure download failed:", errorData);
        setDebugInfo(`Error: ${JSON.stringify(errorData, null, 2)}`);
        setError(
          errorData.error || "Failed to download brochure. Please try again."
        );
      }
    } catch (err: unknown) {
      console.error("Error submitting brochure form:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Thank You!
            </h3>
            <p className="text-green-700">
              Thank you for your interest! Check your email for the franchise
              brochure.
            </p>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            We&apos;ll be in touch soon with more information about our
            franchise opportunity.
          </p>
        </div>
      </section>
    );
  }

  const inputStyle = () =>
    `w-full border text-gray-900 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-gray-400 hover:shadow-sm ${
      error ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-4">
            DOWNLOAD OUR BROCHURE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our 2025 Franchise Brochure to learn more about our
            Franchise opportunity. When you are ready, don&apos;t hesitate to
            get in touch with our team for next steps.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className={inputStyle()}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className={inputStyle()}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className={inputStyle()}
                  />
                </div>
              </div>

              {error && (
                <div className="text-center p-4 rounded-md bg-red-100 text-red-700">
                  {error}
                </div>
              )}

              {/* Debug Information (Development Only) */}
              {isDebugMode && debugInfo && (
                <div className="mt-4 p-4 rounded-md bg-gray-100 border border-gray-300">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Debug Info:
                  </h4>
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {debugInfo}
                  </pre>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !formData.email}
                className={`bg-primary text-white font-medium py-3 px-8 rounded-full text-md border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition ${
                  isSubmitting || !formData.email
                    ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:border-gray-400 hover:text-white"
                    : ""
                }`}
              >
                {isSubmitting ? "Processing..." : "DOWNLOAD BROCHURE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DownloadBrochureSection;
