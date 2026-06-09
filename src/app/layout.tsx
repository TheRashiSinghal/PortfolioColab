import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VisitCounter } from "@/components/visit-counter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-colab-cyan.vercel.app"),
  title: {
    default: "Rashi Singhal — Visual Designer",
    template: "%s — Rashi Singhal",
  },
  description:
    "Rashi Singhal is a visual designer focused on minimal, concept-driven digital aesthetics — brand identity, creative direction, and visual storytelling.",
  keywords: [
    "Rashi Singhal",
    "visual designer",
    "graphic designer",
    "brand identity",
    "creative direction",
    "portfolio",
  ],
  openGraph: {
    title: "Rashi Singhal — Visual Designer",
    description:
      "Minimal, concept-driven design — brand identity, creative direction, and visual storytelling.",
    type: "website",
    siteName: "Rashi Singhal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg text-ink">
        <Providers>
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <main className="min-h-dvh">{children}</main>
            <Footer />
            <VisitCounter />
          </SmoothScroll>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
