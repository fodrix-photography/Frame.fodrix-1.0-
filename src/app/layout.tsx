import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: {
    default: "Fodrix Frames",
    template: "%s • Fodrix Frames",
  },
  description:
    "Design beautiful custom frames from your photos. Lightweight, multiple sizes and colors, doorstep delivery.",
  keywords: [
    "photo frames",
    "custom frames",
    "wall art",
    "prints",
    "gallery wall",
  ],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Fodrix Frames — Design custom frames",
    description:
      "Create stunning wall art from your favorite moments. Pan-India delivery, multiple sizes and colors.",
    url: "https://example.com",
    siteName: "Fodrix Frames",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fodrix Frames",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
