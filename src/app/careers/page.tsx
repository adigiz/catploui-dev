"use client";

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Briefcase, Building2, Phone } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import storeData from "@/utils/storeData";
import { careersSchema } from "@/utils/jsonLdSchemas";
import CustomDropdown, { DropdownOption } from "@/components/CustomDropdown";

const positions = [
  "Server",
  "Host/Cashier",
  "Kitchen Staff",
  "Manager",
  "Assistant Manager",
  "Other",
];

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
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  preferredLocation: z.string().min(1, "Please select a preferred location"),
  position: z.string().min(1, "Please select a position"),
  resume: z
    .object({
      name: z.string(),
      type: z.string(),
      size: z.number(),
      data: z.string(),
    })
    .optional(),
  availability: z.string().optional(),
  previousExperience: z.string().optional(),
  additionalComments: z.string().optional(),
  hcaptcha: z.string().min(1, "Please complete the security verification"),
});

type FormData = z.infer<typeof formSchema>;

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [hcaptchaToken, setHcaptchaToken] = useState("");
  const hcaptchaRef = useRef<HCaptcha>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Prepare dropdown options
  const locationOptions: DropdownOption[] = storeData.map((store) => ({
    value: store.slug,
    label: store.name,
    subtitle: store.address,
    phone: store.phone,
    icon: <MapPin className="w-4 h-4" />,
    type: "location",
  }));

  const positionOptions: DropdownOption[] = positions.map((position) => ({
    value: position,
    label: position,
    icon: <Briefcase className="w-4 h-4" />,
    type: "position",
  }));

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, or DOCX file");
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      // Convert file to base64 for email attachment
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setValue("resume", {
          name: file.name,
          type: file.type,
          size: file.size,
          data: base64String.split(",")[1], // Remove data:mime;base64, prefix
        });
      };
      reader.readAsDataURL(file);

      setUploadedFileName(file.name);
    }
  };

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

      // Send to Mailgun API
      const response = await fetch("/api/send-job-application", {
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
        setSubmitMessage(
          "Application submitted successfully! We will contact you soon."
        );

        reset();
        setUploadedFileName("");
        setHcaptchaToken("");
        hcaptchaRef.current?.resetCaptcha();

        const fileInput = document.getElementById(
          "resume-upload"
        ) as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          errorData.error || "Error submitting application. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      setSubmitMessage("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careersSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              CAP&apos;T LOUI CAREERS
            </h1>
            <h2 className="text-xl font-semibold text-primary mb-4">
              APPLY FOR A POSITION
            </h2>
            <p className="text-gray-600">
              Join our team at one of our {storeData.length} locations!
              We&apos;re always looking for passionate, hardworking team members
              to join our crew. If you&apos;ve got great energy and a love for
              food and hospitality, we&apos;d love to meet you!
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    className={`w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className={`w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-3 py-2 text-black border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      Phone Number <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="+15551234567"
                    className={`w-full px-3 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Format: +15551234567
                  </p>
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Location <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="preferredLocation"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomDropdown
                      value={value || ""}
                      onChange={onChange}
                      error={!!errors.preferredLocation}
                      options={locationOptions}
                      placeholder="Select a location..."
                      placeholderIcon={<MapPin className="w-4 h-4" />}
                    />
                  )}
                />
                {errors.preferredLocation && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.preferredLocation.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="position"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomDropdown
                      value={value || ""}
                      onChange={onChange}
                      error={!!errors.position}
                      options={positionOptions}
                      placeholder="Select a position..."
                      placeholderIcon={<Building2 className="w-4 h-4" />}
                    />
                  )}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.position.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="cursor-pointer text-primary hover:text-red-800"
                  >
                    Click to upload your resume (PDF, DOC, DOCX)
                  </label>
                  <p className="text-sm text-gray-500 mt-1">
                    Maximum file size: 5MB
                  </p>
                  {uploadedFileName && (
                    <p className="text-sm text-green-600 mt-2">
                      File uploaded: {uploadedFileName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <input
                  type="text"
                  {...register("availability")}
                  placeholder="e.g., Full-time, Part-time, Weekends only"
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Experience
                </label>
                <textarea
                  {...register("previousExperience")}
                  placeholder="Tell us about your relevant work experience..."
                  rows={4}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Comments
                </label>
                <textarea
                  {...register("additionalComments")}
                  placeholder="Any additional information you'd like to share..."
                  rows={4}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

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

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 border-2 border-transparent rounded-md shadow-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
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
        </div>
      </div>
    </>
  );
}
