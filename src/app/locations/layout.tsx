import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cap't Loui Locations | Find The Best Seafood Boil Restaurants Near You",
  description: "Find Cap't Loui seafood boil restaurants near you. 20+ seafood boil locations across 10 states. Fresh, bold, messy Cajun boils. Find your Loui!",
  alternates: {
    canonical: `https://captloui.com/locations`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
