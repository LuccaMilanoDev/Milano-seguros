import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milano Seguros - Protegendo o que mais importa para você",
  description: "Corretora de seguros com experiência, confiança e inovação. Protegemos o que mais importa para você e sua família.",
  keywords: "seguros, corretora, proteção, Milano Seguros",
  authors: [{ name: "Milano Seguros" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
