"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
          data-cursor="clickable"
          onClick={closeMenu}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-xs font-bold text-[#1a1a1a] shadow-lg shadow-coral/20">
            TV
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink transition group-hover:text-coral">
            {portfolioData.shortName}
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-blush bg-sand p-2.5 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-1 rounded-2xl border border-blush bg-sand p-1.5 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-flex rounded-xl px-4 py-2 text-sm text-ink/70 transition hover:text-coral"
                data-cursor="clickable"
                onClick={closeMenu}
              >
                {isActive && (
                  <>
                    <motion.span
                      layoutId="navbar-glow"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                        mass: 0.7,
                      }}
                      className="absolute inset-0 -z-10 rounded-xl bg-coral/25 blur-lg"
                    />
                    <motion.span
                      layoutId="navbar-pill"
                      initial={{ scale: 0.92 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 340,
                        damping: 24,
                        mass: 0.75,
                      }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ffb74d] via-coral to-[#ff8f00]"
                    />
                  </>
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "font-medium text-[#1a1a1a]" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-blush bg-paper px-4 sm:px-6 md:hidden"
          >
            <div className="flex flex-col gap-1.5 py-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-coral font-medium text-[#1a1a1a]"
                        : "bg-sand text-ink/75 hover:text-coral"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
