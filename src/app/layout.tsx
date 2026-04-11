import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buyer Agent — Accompagnement acheteur immobilier",
  description:
    "Vous n'avez pas besoin de plus d'annonces. Vous avez besoin de clarté. Un accompagnement stratégique dédié aux acheteurs immobiliers.",
  openGraph: {
    title: "Buyer Agent — Accompagnement acheteur immobilier",
    description:
      "Clarifiez votre projet, structurez votre démarche, sécurisez votre décision.",
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
