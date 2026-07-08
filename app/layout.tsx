import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T Vihaan | Portfolio",
  description:
    "Portfolio of T Vihaan — IT undergraduate building backend systems and high-performance mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body className="bg-obsidian text-ink antialiased font-sans overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* RTX Shaders / Glass Background Effects */}
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
            {/* Ambient Diamond Glow */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-diamond-base/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-base/10 blur-[150px]" />
            
            {/* Floating Dust Particles (Nether/Ender style but blue/white) */}
            <div className="particle-container">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 15}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
