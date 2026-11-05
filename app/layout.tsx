import type { Metadata, Viewport } from "next";
import "./globals.css";

const TITLE = "BACA Arquitectura & Diseño | Proyectos a medida";
const DESCRIPTION =
  "Conocé BACA Arquitectura & Diseño. Proyectos pensados para cada forma de vivir, diseño personalizado y acompañamiento de obra en Buenos Aires, Argentina.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Proyectos pensados para cada forma de vivir, diseño personalizado y acompañamiento de obra en Buenos Aires, Argentina.",
    type: "website",
    locale: "es_AR",
    siteName: "BACA Arquitectura & Diseño",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BACA Arquitectura & Diseño — Arquitectura para vivirla a tu manera" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F3F4F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      {/* Extensiones del navegador (p. ej. ColorZilla) inyectan atributos en <body> y disparan un aviso de hidratación solo en desarrollo */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
