import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'
import Menu from "./componentes/menu/menu";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Rotas UFPel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""/> 
        
        <img src="./logo2.png" alt="Logotipo do app mobi UFPel" className="Logo"/>

        {children}
        <Menu></Menu>
      </body>
    </html>
  );
}
