import type { Metadata, Viewport } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
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

const SITE_URL = "https://flowst.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flowst - Learn it. See it. Prove it.",
  description:
    "Flowst helps learners understand a concept, turn it into a picture, and prove what they remember with Miro, Nyx, and Amira.",
  keywords: [
    "Flowst",
    "learning",
    "retention",
    "AI agents",
    "active recall",
    "concept mapping",
    "visual learning",
    "memory anchors",
  ],
  authors: [{ name: "Flowst AI" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Flowst",
    title: "Flowst - Learn it. See it. Prove it.",
    description:
      "Understand a concept, turn it into a picture, and prove what you remember with Flowst agents.",
    images: [
      {
        url: "/assets/brand/flowst-hero.png",
        width: 1731,
        height: 909,
        alt: "Flowst active learning agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowst - Learn it. See it. Prove it.",
    description: "Understand a concept, turn it into a picture, and prove what you remember.",
    images: ["/assets/brand/flowst-hero.png"],
  },
  icons: {
    icon: "/assets/brand/flowst-mark-black.png",
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
