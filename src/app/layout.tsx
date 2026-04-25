import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accompagnement acheteur immobilier — De A à Z",
  description:
    "Vous cherchez à acheter un bien immobilier mais vous ne voulez pas vous tromper. Je vous accompagne concrètement de A à Z : définir un projet solide, sélectionner les biens, négocier et sécuriser votre achat.",
  openGraph: {
    title: "Accompagnement acheteur immobilier — De A à Z",
    description:
      "Premier échange de 30 min offert pour faire le point sur votre projet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
