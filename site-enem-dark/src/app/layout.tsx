import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" }); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}