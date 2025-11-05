"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ComingSoonBanner = () => {
  const pathname = usePathname();

  // Hide banner on franchise page
  if (pathname === "/franchise") {
    return null;
  }

  return (
    <div className="bg-primary text-white text-center py-2">
      <div className="text-sm font-semibold uppercase tracking-wide">
        <span className="block sm:inline">Edison, NJ Coming Soon.</span>{" "}
        <Link
          href="/locations"
          className="underline hover:text-white/90 transition-colors block sm:inline"
        >
          See all coming soon locations
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonBanner;
