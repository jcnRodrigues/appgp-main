
import type { Metadata } from "next";
import {Syne} from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "AppGP - Gestão de Pratrimonio",
  description: "Aplicação de Gestão de Patrimônio e Recursos da Empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
