/* eslint-disable @next/next/no-img-element */
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <img src="/Parex.png" alt="AppGP Logo" className={styles.logo} height={'50px'} width={'50px'}/>
          <h1 className={styles.title} >
            <span className={styles.title}>AppGP -</span>
            <span className={styles.titleSecondWord}>Gestão de Patrimônio</span>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
