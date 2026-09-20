import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppDock } from "@/components/layout/WhatsAppDock";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "JP2 Solar Energy provides solar and energy solutions for homes and businesses that need power they can depend on, from consultation and system design through to installation and support.";

export const metadata: Metadata = {
  // Replace with the live domain once it is confirmed. Every canonical and
  // Open Graph URL on the site is derived from this value.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Solar and Energy Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Solar and Energy Solutions`,
    description,
    url: "/",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Solar and Energy Solutions`,
    description,
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
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-paper-50 antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppDock />
      </body>
    </html>
  );
}
