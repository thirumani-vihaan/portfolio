"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="group inline-flex items-center gap-2" data-cursor="clickable" onClick={closeMenu}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-coral text-xs font-semibold text-[#1a1a1a]">
            VH
          </span>
          <span className="font-display text-lg text-ink transition group-hover:text-coral">
            {portfolioData.shortName}
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-blush bg-sand p-2 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-blush bg-sand p-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-flex rounded-full px-4 py-2 text-sm text-ink/75 transition hover:text-coral"
                data-cursor="clickable"
                onClick={closeMenu}
              >
                {isActive && (
                  <>
                    <motion.span
                      layoutId="navbar-liquid-glow"
                      transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.72 }}
                      className="absolute inset-0 -z-10 rounded-full bg-coral/35 blur-md"
                    />
                    <motion.span
                      layoutId="navbar-liquid-core"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 340, damping: 24, mass: 0.75 }}
                      className="absolute inset-0 rounded-full border border-coral/45 bg-gradient-to-r from-[#ffb74d] via-coral to-[#ff8f00]"
                    />
                  </>
                )}
                <span className={`relative z-10 ${isActive ? "font-medium text-[#1a1a1a]" : ""}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-blush bg-paper px-4 py-3 sm:px-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    isActive ? "bg-coral text-[#1a1a1a]" : "bg-sand text-ink/80 hover:text-coral"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
