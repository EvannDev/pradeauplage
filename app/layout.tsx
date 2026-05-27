import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pradeau Plage — Restaurant de plage · Presqu'île de Giens",
  description:
    "Pradeau Plage — Le Sud, dans votre assiette. Cuisine méditerranéenne, pieds dans le sable, Presqu'île de Giens, Hyères.",
  keywords: [
    "restaurant",
    "plage",
    "Giens",
    "Hyères",
    "méditerranéen",
    "Provence",
    "Côte d'Azur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
