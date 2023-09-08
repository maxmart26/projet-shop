import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Boucherie de la Mairie",
  description: `Découvrez notre boucherie en ligne ! 
  Bons petits plats et viandes fraîches de qualité supérieure pour satisfaire tous les amateurs de viandes 🥩🔪`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="../assets/icon/logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
