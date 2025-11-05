import type { Metadata } from "next";
import Link from "next/link";
import storeData from "@/utils/storeData";
import { generateStoreSchema } from "@/utils/jsonLdSchemas";
import StoreDetail from "@/components/store/StoreDetail";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function findStoreBySlug(slug: string) {
  return storeData.find((store) => store.slug === slug) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const store = findStoreBySlug(slug);

  // If store doesn't exist, return basic metadata (page will show 404)
  if (!store) {
    return {
      title: "Location Not Found | Cap't Loui",
      description:
        "The requested Cap't Loui location could not be found. Visit our locations page to find a restaurant near you.",
      alternates: {
        canonical: `https://captloui.com/${slug}`,
      },
    };
  }

  return {
    title: `${store.metaTitle} | Cap't Loui Locations`,
    description: store.metaDescription,
    alternates: {
      canonical: `https://captloui.com/${slug}`,
    },
  };
}

export default async function LocationDetailPageServer({ params }: Props) {
  const resolvedParams = await params;
  const store = findStoreBySlug(resolvedParams.slug);

  // If store doesn't exist, show 404
  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Store Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested location could not be found.
          </p>
          <Link
            href="/locations"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  // Generate JSON-LD schema for store detail page
  const storeSchema = generateStoreSchema(store, resolvedParams.slug);

  return <StoreDetail store={store} schema={storeSchema} />;
}
