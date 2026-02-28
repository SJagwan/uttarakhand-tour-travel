import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Uttarakhand Tour & Travels",
    default: "Uttarakhand Tour & Travels",
  },
  description: "Book premium Uttarakhand tour packages with local experts.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://uttarakhandtourandtravels.co.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
