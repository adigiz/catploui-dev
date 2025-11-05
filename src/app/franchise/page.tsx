import FaqSection from "@/components/franchise/FaqSection";
import FranchiseBenefitsSection from "@/components/franchise/FranchiseBenefitsSection";
import FranchiseContactFormSection from "@/components/franchise/FranchiseContactFormSection";
import FranchiseeTestimonialsSection from "@/components/franchise/FranchiseeTestimonialsSection";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseLocationSection from "@/components/franchise/FranchiseLocationSection";
import FranchiseProcessSection from "@/components/franchise/FranchiseProcessSection";
import DownloadBrochureSection from "@/components/franchise/DownloadBrochureSection";
import InvestmentSupportSection from "@/components/franchise/InvestmentSupportSection";
import WhyCaptLouiSection from "@/components/franchise/WhyCaptLouiSection";
import { franchiseSchema } from "@/utils/jsonLdSchemas";

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(franchiseSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <FranchiseHero />
        <WhyCaptLouiSection />
        <FranchiseBenefitsSection />
        <FranchiseLocationSection />
        <FranchiseContactFormSection />
        <FranchiseeTestimonialsSection />
        <FranchiseProcessSection />
        <DownloadBrochureSection />
        <InvestmentSupportSection />
        <FaqSection />
      </div>
    </>
  );
}
