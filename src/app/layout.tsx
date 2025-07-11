import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Gestão de Pratrimonio",
  description: "Aplicação de Gestão de Patrimônio e Recursos da Empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <h1 className={styles.title}>
            App<span className={styles.title}>-</span>
            <span className={styles.titleSecondWord}>Gestão de Patrimônio</span>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
