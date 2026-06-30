import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://glowlinemedia.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Glowline Media | Websites & Social Media Marketing South Africa",
  description:
    "Glowline Media helps South African businesses grow online with professional website development, website hosting, social media management, and digital marketing services.",
  keywords: [
    "website design South Africa",
    "website development South Africa",
    "social media management South Africa",
    "digital marketing agency South Africa",
    "small business websites",
    "Meta ads management",
    "business website design",
    "website hosting South Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Glowline Media",
    title: "Glowline Media | Websites & Social Media Marketing South Africa",
    description:
      "Professional websites, social media management, and digital marketing for South African businesses.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Glowline Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowline Media | Helping Businesses Grow Online",
    description: "Websites and social media marketing for South African businesses.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14213D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
