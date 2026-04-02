import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sierra Heavy Duty RV & Truck Center | Sonora, CA",
    template: "%s | Sierra Heavy Duty RV & Truck Center",
  },
  description:
    "Family-owned RV & truck repair, maintenance, parts and accessories in Sonora, CA. Serving the Sierra Nevada foothills since the 1950s. Call (209) 532-7994.",
  keywords: [
    "RV repair Sonora CA",
    "truck service Sonora",
    "RV maintenance",
    "heavy duty truck repair",
    "RV parts and accessories",
    "Sierra Heavy Duty",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sierra Heavy Duty RV & Truck Center",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
