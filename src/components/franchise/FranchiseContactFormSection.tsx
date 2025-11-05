"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import CustomDropdown from "@/components/CustomDropdown";

// Form validation schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),

  // Franchise Info
  franchiseInterest: z
    .array(z.string())
    .min(1, "Please select at least one option"),
  interestState: z.string().min(1, "Please select your state of interest"),

  // Consent
  consentNewsletter: z.boolean().refine((val) => val === true, {
    message: "Please consent to receive news updates",
  }),

  hcaptcha: z.string().min(1, "Please complete the security verification"),
});

type FormData = z.infer<typeof formSchema>;

// US States list
const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const FranchiseContactFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [hcaptchaToken, setHcaptchaToken] = useState("");
  const hcaptchaRef = useRef<HCaptcha>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Watch franchise interest for checkbox validation
  const franchiseInterest = watch("franchiseInterest") || [];

  // hCaptcha handlers
  const handleHCaptchaVerify = (token: string) => {
    setHcaptchaToken(token);
    setValue("hcaptcha", token);
  };

  const handleHCaptchaExpire = () => {
    setHcaptchaToken("");
    setValue("hcaptcha", "");
  };

  const handleHCaptchaError = (err: string) => {
    console.error("hCaptcha Error:", err);
    setHcaptchaToken("");
    setValue("hcaptcha", "");
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Verify hCaptcha token is present
      if (!hcaptchaToken) {
        setSubmitMessage("Please complete the security verification.");
        setIsSubmitting(false);
        return;
      }

      // Send to the API route
      const response = await fetch("/api/send-franchise-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          hcaptchaToken,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitMessage(
          result.message ||
            "Thank you for your franchise inquiry! We will get back to you within 24 hours."
        );

        // Reset form and hCaptcha
        reset();
        setHcaptchaToken("");
        hcaptchaRef.current?.resetCaptcha();
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          errorData.error || "Error sending inquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        "Error sending inquiry. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (fieldName: keyof FormData) =>
    `w-full border text-gray-900 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-gray-400 hover:shadow-sm ${
      errors[fieldName] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <section id="contact-us-form" className="w-full py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-4">
            FILL IN INQUIRY FORM
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to join the Cap&apos;t Loui family? Fill out the form below
            and our franchise development team will contact you within 24-48
            hours.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {/* YOUR INFORMATION Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black border-b border-gray-300 pb-2">
                YOUR INFORMATION
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    placeholder="Enter your first name"
                    className={inputStyle("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    placeholder="Enter your last name"
                    className={inputStyle("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email address"
                    className={inputStyle("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="+15551234567"
                    className={inputStyle("phoneNumber")}
                  />
                  <p className="text-xs text-gray-500">
                    Format: +15551234567 or 15551234567
                  </p>
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* FRANCHISE INFO Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black border-b border-gray-300 pb-2">
                FRANCHISE INFO
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    What are you interested in?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      "Single Unit Franchise",
                      "Multi-Unit Franchise (Area Development)",
                      "Multi-Unit Franchise (Master Franchise)",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={franchiseInterest.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setValue("franchiseInterest", [
                                ...franchiseInterest,
                                option,
                              ]);
                            } else {
                              setValue(
                                "franchiseInterest",
                                franchiseInterest.filter(
                                  (item) => item !== option
                                )
                              );
                            }
                          }}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary hover:scale-110 transition-transform duration-200"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.franchiseInterest && (
                    <p className="text-sm text-red-600">
                      {errors.franchiseInterest.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Location of interest <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="interestState"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomDropdown
                        value={value || ""}
                        onChange={onChange}
                        error={!!errors.interestState}
                        options={usStates}
                        placeholder="Select State"
                      />
                    )}
                  />
                  {errors.interestState && (
                    <p className="text-sm text-red-600">
                      {errors.interestState.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register("consentNewsletter")}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary hover:scale-110 transition-transform duration-200 mt-1"
              />
              <label className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200">
                I agree to receive news, updates, and promotional information
                about franchise opportunities.
              </label>
            </div>
            {errors.consentNewsletter && (
              <p className="text-sm text-red-600">
                {errors.consentNewsletter.message}
              </p>
            )}

            {/* hCaptcha */}
            <div className="flex justify-center">
              <HCaptcha
                ref={hcaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
                onVerify={handleHCaptchaVerify}
                onExpire={handleHCaptchaExpire}
                onError={handleHCaptchaError}
              />
            </div>
            {errors.hcaptcha && (
              <p className="text-sm text-red-600 text-center">
                {errors.hcaptcha.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-primary text-white font-medium py-3 px-8 rounded-full text-md border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:border-gray-400 hover:text-white"
                    : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "SUBMIT INQUIRY FORM"}
              </button>
            </div>

            {submitMessage && (
              <div
                className={`text-center p-4 rounded-md ${
                  submitMessage.includes("successfully") ||
                  submitMessage.includes("Thank you")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FranchiseContactFormSection;
