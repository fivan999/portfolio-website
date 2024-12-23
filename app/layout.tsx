import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Филатов Иван",
  description: "Сайт портфолио Python Backend разработчика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${jetBrains.variable} ${manrope.variable} antialiased overflow-x-hidden`}>
        <div className="w-full max-w-[1065px] text-white px-3 mx-auto">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
