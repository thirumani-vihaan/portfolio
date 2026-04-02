import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import CursorProvider from "@/components/CursorProvider";

export const metadata: Metadata = {
  title: "T Varaprasad | Portfolio",
  description:
    "Portfolio of T Varaprasad, IT undergraduate, Flutter developer, and software engineering enthusiast."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-mutedGrey antialiased">
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
