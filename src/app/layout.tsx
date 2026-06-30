import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gadget Marketz | Refurbished & New Tech, Delivered Across the UK",
    template: "%s | Gadget Marketz",
  },
  description:
    "Gadget Marketz is the UK's trusted reseller of phones, laptops, tablets, audio and gaming tech. Certified refurbished and brand-new gadgets with free next-day delivery and a 12-month warranty.",
  keywords: [
    "refurbished phones UK",
    "second hand laptops",
    "gadget reseller",
    "cheap tech UK",
    "refurbished iPhone",
    "Gadget Marketz",
  ],
  metadataBase: new URL("https://gadgetmarketz.co.uk"),
  openGraph: {
    title: "Gadget Marketz | Refurbished & New Tech",
    description:
      "The UK's trusted reseller of phones, laptops, tablets, audio and gaming tech. Free next-day delivery and a 12-month warranty.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
