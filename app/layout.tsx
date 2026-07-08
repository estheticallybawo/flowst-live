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
  title: "Flowst - Learn it. Say it. Own it.",
  description:
    "Flowst turns any topic into a guided learning path with Miro, Sophia, and Amira so learners can understand it, say it clearly, and prove explanation clarity.",
  keywords: [
    "Flowst",
    "learning path",
    "AI learning agents",
    "active recall",
    "spoken clarity",
    "explanation clarity",
    "guided learning",
    "Miro Sophia Amira",
  ],
  authors: [{ name: "Flowst AI" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Flowst",
    title: "Flowst - Learn it. Say it. Own it.",
    description:
      "Turn a topic into a guided learning path, practice explaining it, and prove clarity with Flowst agents.",
    images: [
      {
        url: "/assets/brand/flowst-hero.png",
        width: 1731,
        height: 909,
        alt: "Flowst guided learning agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowst - Learn it. Say it. Own it.",
    description: "Turn any topic into a guided path you can follow, explain, and prove.",
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

