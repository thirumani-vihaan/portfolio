import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T Vihaan | SYS.PROFILE",
  description:
    "System Profile: T Vihaan — IT undergraduate building backend systems and high-performance mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${jetbrains.variable}`}>
      <body className="bg-void text-ink antialiased font-sans">
        <div className="relative min-h-screen bg-void">
          {/* Blueprint Grid Background */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-hud-grid opacity-30 mix-blend-screen" aria-hidden="true" />
          
          {/* Scanline Overlay */}
          <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03] mix-blend-overlay" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
            <div className="absolute inset-0 h-full w-full animate-scanline bg-gradient-to-b from-transparent via-cyan-glow/10 to-transparent" />
          </div>

          <div className="relative z-10">
            <Navbar />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
