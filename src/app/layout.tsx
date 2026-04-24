import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang-context";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cenit-digital.vercel.app"),
  title: "Cenit Digital — Soluciones que elevan tu negocio",
  description:
    "Automatizamos, construimos y optimizamos la tecnología de tu empresa para que te enfoques en hacer crecer tu negocio.",
  openGraph: {
    title: "Cenit Digital — Websites & AI for Guatemalan Businesses",
    description: "We build websites, chatbots, and automation systems that work 24/7. From Q2,500. Ready in 7-14 days.",
    type: "website",
    locale: "es_GT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
              }
              window.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                  window.location.reload();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
