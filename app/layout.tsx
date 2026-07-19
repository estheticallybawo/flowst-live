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
  title: "Flowst - Learn it. Say it. Prove it.",
  description:
    "Try the Flowst guided learning demo: Miro prepares a focused Flowstate, Sofia teaches, Amira guides voice practice, Kai checks understanding, and proof is saved.",
  keywords: [
    "Flowst",
    "Flowst demo",
    "guided learning",
    "AI learning agents",
    "active recall",
    "spoken clarity",
    "explanation clarity",
    "Miro Sofia Amira Kai",
  ],
  authors: [{ name: "Flowst AI" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Flowst",
    title: "Flowst - Learn it. Say it. Prove it.",
    description:
      "Try a no-account Flowst demo that turns one topic into a guided loop for understanding, voice practice, assessment, and proof.",
    images: [
      {
        url: "/assets/brand/flowst-hero.png",
        width: 1731,
        height: 909,
        alt: "Flowst guided learning demo agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowst - Learn it. Say it. Prove it.",
    description: "Try the public demo: one topic, one Flowstate, one spoken explanation, and proof.",
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