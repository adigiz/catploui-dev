import type { Metadata } from "next";
import { Inter, Josefin_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://captloui.com"),
  title: "Cap't Loui - Authentic Cajun Seafood Boil Restaurants | Since 2016",
  description:
    "Cap't Loui seafood boil restaurants - Authentic Cajun seafood boils since 2016. Signature spices, fresh ingredients. Get loud, get messy! Find us nationwide.",
  alternates: {
    canonical: "https://captloui.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="YUQ4S9AvgURC7sineck4dK5jTeK8sEbS5I9qKKSA-Eo"
        />
      </head>
      <body
        className={`${inter.variable} ${josefin.variable} ${bebasNeue.variable} antialiased`}
      >
        <Header />
        <ComingSoonBanner />
        {children}
        <Footer />

        <CookieBanner />

        <ConditionalAnalytics />
      </body>
    </html>
  );
}
