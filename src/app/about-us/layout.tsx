import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "About Cap't Loui | Our Cajun Seafood Boil Story Since 2016",
  description: "The Cap't Loui seafood boil story - Redefining the seafood boil experience since 2016. From Massachusetts to nationwide. Bold Cajun flavor, fresh daily.",
  alternates: {
    canonical: `https://captloui.com/about-us`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
