import ContactHeroSection from "@/components/contact/ContactHeroSection";
import OurLocationsSection from "@/components/contact/OurLocationSection";
import { contactUsSchema } from "@/utils/jsonLdSchemas";

export default function ContactUsPage() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactUsSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <ContactHeroSection />
        <OurLocationsSection />
      </div>
    </>
  );
}
