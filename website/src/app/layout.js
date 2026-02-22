import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

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
    <html lang="id" className={jakarta.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
