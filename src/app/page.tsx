import AboutUsSection from "@/components/homes/AboutUsSection";
import DeliciousDishesSection from "@/components/homes/DeliciousDishesSection";
import FranchiseSection from "@/components/homes/FranchiseSection";
import Hero from "@/components/homes/HeroSection";
import LocationSection from "@/components/homes/LocationSection";
import GeneralNewsletterEmbed from "@/components/GeneralNewsletterEmbed";
import { homePageSchema } from "@/utils/jsonLdSchemas";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />

      <main className="min-h-screen">
        <Hero />
        <AboutUsSection />
        <LocationSection />
        <DeliciousDishesSection />
        <FranchiseSection />
        <GeneralNewsletterEmbed />
      </main>
    </>
  );
}
