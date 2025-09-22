
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  // Fixed malformed weight array: corrected to valid numeric string values
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "BADA8 - Vaciado Locales Comerciales Badalona | Presupuesto Gratis",
  description: "Empresa líder en vaciado de locales comerciales, oficinas y naves industriales en Badalona. 15+ años experiencia. Limpieza incluída. ☎️ 609 93 65 90",
  keywords: "vaciado locales comerciales Badalona, vaciado oficinas Barcelona, vaciado naves industriales, limpieza posterior vaciado, gestión residuos Badalona",
  robots: "index, follow",
  openGraph: {
    title: "BADA8 - Vaciado Locales Comerciales Badalona | Presupuesto Gratis",
    description: "Empresa líder en vaciado de locales comerciales, oficinas y naves industriales en Badalona. 15+ años experiencia. Limpieza incluída.",
    url: "https://bada8.com",
    siteName: "BADA8",
    locale: "es_ES",
    type: "website",
    images: [{
      url: "https://bada8.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "BADA8 Vaciado Locales Comerciales Badalona"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BADA8 - Vaciado Locales Comerciales Badalona",
    description: "Empresa líder en vaciado de locales comerciales, oficinas y naves industriales en Badalona. 15+ años experiencia.",
  },
  alternates: {
    canonical: "https://bada8.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BADA8",
              description: "Empresa especializada en vaciado de locales comerciales, oficinas y naves industriales en Badalona con más de 15 años de experiencia",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Badalona",
                addressRegion: "Barcelona",
                addressCountry: "ES",
                postalCode: "08911"
              },
              telephone: "+34609936590",
              email: "info@bada8.com",
              url: "https://bada8.com",
              priceRange: "€€",
              openingHours: [
                "Mo-Fr 08:00-19:00",
                "Sa 09:00-14:00"
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Badalona"
                },
                {
                  "@type": "City", 
                  name: "Barcelona"
                },
                {
                  "@type": "City",
                  name: "Sant Adrià del Besòs"
                },
                {
                  "@type": "City",
                  name: "Santa Coloma de Gramenet"
                }
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Vaciado de locales comerciales",
                  description: "Servicio completo de vaciado de tiendas, restaurantes y locales comerciales"
                },
                {
                  "@type": "Service",
                  name: "Vaciado de oficinas", 
                  description: "Vaciado integral de oficinas con gestión de equipos informáticos y documentación"
                },
                {
                  "@type": "Service",
                  name: "Vaciado de naves industriales",
                  description: "Especialistas en vaciado de naves industriales con maquinaria especializada"
                }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "127"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
