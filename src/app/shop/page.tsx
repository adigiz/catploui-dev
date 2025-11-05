import ProductInformationSection from "@/components/shop/ProductInformationSection";
import ShopHeroSection from "@/components/shop/ShopHeroSection";
import { shopSchema } from "@/utils/jsonLdSchemas";

export default function ShopPage() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(shopSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <ShopHeroSection />
        <ProductInformationSection />
      </div>
    </>
  );
}
