"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticWrapper from "@/components/MagneticWrapper";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-blush bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group inline-flex items-center gap-2" data-cursor="clickable">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-coral text-xs font-semibold text-[#1a1a1a]">
            VH
          </span>
          <span className="font-display text-lg text-ink transition group-hover:text-coral">
            {portfolioData.shortName}
          </span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-blush bg-sand p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <MagneticWrapper key={item.href} className="rounded-full">
                <Link
                  href={item.href}
                  className={`inline-flex rounded-full px-4 py-2 text-sm transition ${
                    isActive ? "bg-coral text-[#1a1a1a]" : "text-ink/75 hover:text-coral"
                  }`}
                  data-cursor="clickable"
                >
                  {item.label}
                </Link>
              </MagneticWrapper>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
