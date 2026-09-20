import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_SITE_URL ?? "http://localhost:3000",
  ),
  title: "T'O Forever '26 | Temitope & Oladele",
  description: "Two hearts. One journey. Forever begins.",
  applicationName: "T'O Forever '26",
  keywords: [
    "T'O Forever 26",
    "Temitope and Oladele",
    "Temitope Oladele wedding",
    "Nigeria wedding",
    "Abeokuta wedding",
    "wedding invitation",
  ],
  authors: [{ name: "Temitope & Oladele" }],
  creator: "Temitope & Oladele",
  publisher: "Temitope & Oladele",
  category: "wedding",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "T'O Forever '26",
    title: "T'O Forever '26 | Temitope & Oladele",
    description: "Two hearts. One journey. Forever begins.",
    images: [
      {
        url: "/images/img3.jpeg",
        alt: "Temitope and Oladele's wedding celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T'O Forever '26 | Temitope & Oladele",
    description: "Two hearts. One journey. Forever begins.",
    images: ["/images/img3.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
