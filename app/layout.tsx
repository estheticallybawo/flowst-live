import type { Metadata, Viewport } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flowst - Learn, think, speak, become.",
  description:
    "Flowst is an Multi agents assisted learning platform designed to help you move beyond consuming information. Every learning journey is built around a simple progression: understand the material, explain it in your own words, and then apply it to real-world scenarios. This approach ensures that you not only retain knowledge but also develop the ability to think critically and communicate effectively.",
  keywords: [
    "Flowst",
    "Multi agents assisted learning",
    "guided learning paths",
    "active learning",
    "learning retention",
    "spoken clarity",
    "career learning",
  ],
  authors: [{ name: "Flowst" }],
  openGraph: {
    type: "website",
    url: "https://useflowst.com",
    siteName: "Flowst",
    title: "Flowst - Learn, think, practice, become.",
    description:
      "Turn pre-exisitng knowledge into a structured learning experience that helps you understand deeply and build real expertise.",
    images: [
      {
        url: "/assets/brand/flowst-hero.png",
        width: 1731,
        height: 1009,
        alt: "Flowst learning experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowst - Learn, think, speak, become.",
    description: "A multi-agents assisted learning platform for building understanding, confidence, and expertise.",
    images: ["/assets/brand/flowst-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7FAFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${albertSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
