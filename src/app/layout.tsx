import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Jagwan Tour & Travels",
    default: "Jagwan Tour & Travels | Best Tour and Travels in Uttarakhand",
  },
  description: "Jagwan Tour & Travels offers premium Uttarakhand tour packages, Char Dham Yatra, vehicle rentals, and custom itineraries. Your trusted local travel agency.",
  keywords: [
    "Jagwan Tour & Travels",
    "Jagwan tour and travel",
    "Tour and Travels",
    "Uttarakhand Tour and Travels",
    "Best travel agency in Dehradun",
    "Char Dham Yatra packages",
    "Tempo Traveller rental Dehradun",
    "Kedarnath tour package",
  ],
  authors: [{ name: "Birbal Singh Jagwan" }],
  creator: "Jagwan Tour & Travels",
  publisher: "Jagwan Tour & Travels",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.jagwantourandtravels.com"),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: "Jagwan Tour & Travels | Best Tour and Travels in Uttarakhand",
    description: "Book premium Uttarakhand tour packages, Char Dham Yatra, and vehicle rentals with local experts.",
    url: "/",
    siteName: "Jagwan Tour & Travels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagwan Tour & Travels",
    description: "Your trusted partner for Uttarakhand tours and vehicle rentals.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
