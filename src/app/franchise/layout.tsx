import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Franchise Opportunities | Cap't Loui Seafood Boil Restaurant",
  description: "Own a Cap't Loui seafood boil franchise. $2M+ AUV Cajun seafood boil restaurant. Proven model, full support. Investment from $230K. Join us!",
  alternates: {
    canonical: `https://captloui.com/franchise`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
