import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Contact Cap't Loui | Cajun Seafood Boil Restaurant Inquiries",
  description: "Contact Cap't Loui seafood boil restaurants - Questions about our Cajun seafood boils, catering, or franchising? Get in touch for bold flavor!",
  alternates: {
    canonical: `https://captloui.com/contact-us`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
