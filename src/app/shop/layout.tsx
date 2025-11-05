import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shop | Cap't Loui",
  description: "Buy from us",
  alternates: {
    canonical: `https://captloui.com/shop`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.variable} antialiased`}>{children}</main>;
}
