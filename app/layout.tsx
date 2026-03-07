import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Clones — AI Clones, Done For You",
  description:
    "Stop wasting months on tutorials and DIY tools. Easy Clones builds your production-ready AI clone and delivers it in days. You describe it. We build it. You own it.",
  metadataBase: new URL("https://easyclones.pro"),
  openGraph: {
    title: "Easy Clones — AI Clones, Done For You",
    description:
      "Stop wasting months on tutorials and DIY tools. Easy Clones builds your production-ready AI clone and delivers it in days. You describe it. We build it. You own it.",
    url: "https://easyclones.pro",
    siteName: "Easy Clones",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easy Clones — AI Clones, Done For You",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Clones — AI Clones, Done For You",
    description:
      "Stop wasting months on tutorials and DIY tools. Easy Clones builds your production-ready AI clone and delivers it in days.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
