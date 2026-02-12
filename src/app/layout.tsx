import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { FloatingSocials } from "@/components/layout/FloatingSocials";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Alice Cadore — Estúdio de Beleza Exclusivo",
  description:
    "Especialista em realçar sua beleza natural. Maquiagem, Sobrancelhas e Penteados com o cuidado que você merece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${notoSerif.variable}`} suppressHydrationWarning>
      <body className="bg-[#121212] text-gray-200 antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
