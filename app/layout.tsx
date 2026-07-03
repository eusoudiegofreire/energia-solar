import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Simule sua economia com energia solar em Ji-Paraná/RO. Instalação, homologação e monitoramento com a Fritts Solar — projeto sob medida, sem burocracia.",
  keywords: [
    "energia solar Ji-Paraná",
    "painel solar Rondônia",
    "energia solar residencial",
    "economia na conta de luz",
    "Fritts Solar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Simule sua economia com energia solar em Ji-Paraná/RO e reduza sua conta de luz em até 95%.",
    url: SITE_URL,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Simule sua economia com energia solar em Ji-Paraná/RO e reduza sua conta de luz em até 95%.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${SITE_URL}/assets/logo.jpg`,
    logo: `${SITE_URL}/assets/logo.jpg`,
    description:
      "Empresa de energia solar fotovoltaica em Ji-Paraná/RO — projeto, instalação, homologação e monitoramento.",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -10.8797,
      longitude: -61.9327,
    },
    areaServed: {
      "@type": "City",
      name: "Ji-Paraná",
    },
    sameAs: [site.instagram],
  };

  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
