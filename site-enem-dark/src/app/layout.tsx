import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";
import { ShaderWrapper } from "@/components/ShaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "up.educacao | O Preparatório Definitivo",
  description: "Plataforma modular para aprovação no ENEM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} text-white antialiased min-h-screen bg-transparent`}>
        <ShaderWrapper />
        <div className="relative z-10">
          {children}
        </div>
        <FloatingWhatsApp />
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}