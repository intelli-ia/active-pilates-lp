import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Active Pilates | Pilates Clássico em Salvador",
  description:
    "Treine no estúdio com 20 anos de excelência em Pilates Clássico na Bahia. Corpo forte, livre de dores e totalmente saudável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
