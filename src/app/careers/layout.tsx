import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Careers at Cap't Loui | Join Our Cajun Seafood Restaurant Team",
  description: "Join Cap't Loui seafood boil restaurants! Hiring at 21 seafood boil locations nationwide. Great energy, bold flavor, growing team. Apply today!",
  alternates: {
    canonical: `https://captloui.com/careers`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
