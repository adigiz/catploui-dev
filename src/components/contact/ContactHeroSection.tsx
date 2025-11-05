"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Building2 } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import storeData from "@/utils/storeData";
import CustomDropdown from "@/components/CustomDropdown";

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  location: z.string().min(1, "Please select a location"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  hcaptcha: z.string().min(1, "Please complete the security verification"),
});

type FormData = z.infer<typeof formSchema>;

const ContactHeroSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [hcaptchaToken, setHcaptchaToken] = useState("");
  const hcaptchaRef = useRef<HCaptcha>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Watch the subject and location fields to determine email routing
  const selectedSubject = watch("subject");
  const selectedLocation = watch("location");

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

  // Subject dropdown options
  const subjectOptions = [
    {
      value: "General Inquiry",
      label: "General Inquiry",
      subtitle: "Corporate support and general questions",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      value: "Feedback/Suggestion",
      label: "Feedback/Suggestion",
      subtitle: "Share your thoughts and suggestions",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      value: "Others",
      label: "Others",
      subtitle: "Other inquiries not listed above",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  // Location dropdown options
  const locationOptions = [
    {
      value: "hq",
      label: "Cap't Loui HQ",
      subtitle: "Corporate headquarters",
      icon: <Building2 className="w-4 h-4" />,
    },
    ...storeData.map((store) => ({
      value: store.slug,
      label: store.name,
      subtitle: store.address,
      phone: store.phone,
      icon: <MapPin className="w-4 h-4" />,
    })),
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Verify hCaptcha token is present
      if (!hcaptchaToken) {
        setSubmitMessage("Please complete the security verification.");
        setIsSubmitting(false);
        return;
      }

      // Send to Contact API
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          hcaptchaToken,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitMessage(result.message);

        // Reset form and hCaptcha
        reset();
        setHcaptchaToken("");
        hcaptchaRef.current?.resetCaptcha();
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          errorData.error || "Error sending message. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        "Error sending message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (fieldName: keyof FormData) =>
    `w-full border text-gray-900 rounded-md px-4 py-3 text-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
      errors[fieldName] ? "border-red-500" : "border-black"
    }`;

  // Get selected location details for routing info
  const getSelectedLocationDetails = () => {
    if (selectedLocation === "hq") {
      return { name: "Cap't Loui HQ", type: "hq" };
    }
    const store = storeData.find((store) => store.slug === selectedLocation);
    return store ? { name: store.name, type: "store" } : null;
  };

  const locationDetails = getSelectedLocationDetails();

  return (
    <section id="contact-us-form" className="w-full py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl mb-4 text-[#333333]">CONTACT US TODAY</h2>
        <p className="text-gray-600 font-medium">
          Have questions about our menu, catering services, or franchise
          opportunities? <br /> We&apos;re here to help! Reach out to our team
          for any inquiries, feedback, or special requests.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white border-2 border-primary rounded-2xl p-8">
        <h3 className="text-left text-primary text-lg font-bold uppercase mb-6">
          Send Us A Message
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className={inputStyle("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              {...register("phoneNumber")}
              placeholder="+15551234567"
              className={inputStyle("phoneNumber")}
            />
            <p className="mt-1 text-xs text-gray-500">Format: +15551234567</p>
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className={inputStyle("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <Controller
              name="subject"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDropdown
                  value={value || ""}
                  onChange={onChange}
                  error={!!errors.subject}
                  options={subjectOptions}
                  placeholder="Select a subject..."
                  placeholderIcon={<Mail className="w-4 h-4" />}
                  variant="complex"
                />
              )}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDropdown
                  value={value || ""}
                  onChange={onChange}
                  error={!!errors.location}
                  options={locationOptions}
                  placeholder="Select a location..."
                  placeholderIcon={<MapPin className="w-4 h-4" />}
                  variant="complex"
                />
              )}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="Message (10-1000 characters)"
              rows={5}
              className={inputStyle("message")}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {selectedSubject && selectedLocation && locationDetails && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex items-center gap-3">
                {locationDetails.type === "hq" ? (
                  <Building2 className="w-5 h-5 text-blue-600" />
                ) : (
                  <MapPin className="w-5 h-5 text-blue-600" />
                )}
                <div>
                  <p className="text-sm font-medium text-blue-800">
                    Your message will be sent to:
                  </p>
                  <p className="text-sm text-blue-700">
                    {locationDetails.name}
                  </p>
                  {locationDetails.type === "store" && (
                    <p className="text-xs text-blue-600 mt-1">
                      This message will be sent to both the location and
                      Cap&apos;t Loui HQ
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security Verification <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center">
              <HCaptcha
                ref={hcaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                onVerify={handleHCaptchaVerify}
                onExpire={handleHCaptchaExpire}
                onError={handleHCaptchaError}
                theme="light"
              />
            </div>
            {errors.hcaptcha && (
              <p className="mt-2 text-sm text-red-600 text-center">
                {errors.hcaptcha.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-full text-md font-medium transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-primary text-white hover:bg-red-800 hover:cursor-pointer"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>

          {submitMessage && (
            <div
              className={`text-center p-4 rounded-md ${
                submitMessage.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactHeroSection;
