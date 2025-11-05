import AboutHeroSection from "@/components/about/AboutHeroSection";
import RealDealSection from "@/components/about/RealDealSection";
import OurJourneySection from "@/components/about/OurJourneySection";
import BuiltOnFlavorSection from "@/components/about/BuiltOnFlavorSection";
import QualitySection from "@/components/about/QualitySection";
import { aboutUsSchema } from "@/utils/jsonLdSchemas";

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutUsSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <AboutHeroSection />
        <RealDealSection />
        <OurJourneySection />
        <BuiltOnFlavorSection />
        <QualitySection />
      </div>
    </>
  );
}
