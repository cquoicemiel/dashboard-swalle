import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";


const helvetica = localFont({
  src: './assets/Helvetica.ttf'
})

export const metadata: Metadata = {
  title: "Dashboard Swall-E",
  description: "Dashboard destiné à la visualisation de données scientifiques et de modèles 3D du robot SWALL-E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className} antialiased min-h-dvh`}
      >
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
