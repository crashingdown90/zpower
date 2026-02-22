import "./globals.css";

export const metadata = {
  title: "HIPMI Z-POWER | Proposal Kolaborasi HIPMI × Zilenial Jawa Tengah",
  description:
    "Proposal kolaborasi strategis HIPMI Jawa Tengah × Zilenial Jateng untuk mewujudkan transformasi ekonomi inovatif, mandiri, dan berkelanjutan menuju Indonesia Emas 2045.",
  keywords: [
    "HIPMI",
    "Z-POWER",
    "Zilenial",
    "Jawa Tengah",
    "Kolaborasi",
    "Proposal",
    "wirausaha muda",
    "UMKM",
    "Ngopeni Nglakoni",
  ],
  openGraph: {
    title: "HIPMI Z-POWER — Proposal Kolaborasi HIPMI × Zilenial",
    description:
      "Sinergi HIPMI × Zilenial Jateng untuk transformasi ekonomi Jawa Tengah.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
