"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crosshair } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { href: "/", label: "SYS.HOME" },
  { href: "/projects", label: "DAT.PROJECTS" },
  { href: "/resume", label: "LOG.RESUME" },
  { href: "/about", label: "USR.ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 glitch-hover"
          data-cursor="clickable"
          onClick={closeMenu}
        >
          <span className="relative flex h-8 w-8 items-center justify-center border border-cyan bg-cyan/10 text-cyan">
            <Crosshair size={16} className="animate-pulse-slow" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-cyan" />
          </span>
          <div className="flex flex-col">
            <span 
              className="font-display text-lg font-bold tracking-widest text-ink transition group-hover:text-cyan glitch-text"
              data-text={portfolioData.shortName.toUpperCase()}
            >
              {portfolioData.shortName.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-cyan">
              LVL.02 // IT_UNDRGRAD
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-steel bg-surface p-2 text-cyan md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex px-4 py-2 text-xs font-mono tracking-wider transition-colors"
                data-cursor="clickable"
                onClick={closeMenu}
              >
                {/* Background panel for active state */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-cyan/10 border-b-2 border-cyan"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover bracket left */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan opacity-0 transition-all group-hover:-translate-x-2 group-hover:opacity-100">
                  [
                </span>
                
                <span className={`relative z-10 ${isActive ? "text-cyan" : "text-muted hover:text-ink"}`}>
                  {item.label}
                </span>

                {/* Hover bracket right */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-cyan opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                  ]
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
            className="overflow-hidden border-t border-steel bg-surface px-4 sm:px-6 md:hidden"
          >
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`border-l-2 px-4 py-2 font-mono text-xs tracking-widest transition-colors ${
                      isActive
                        ? "border-cyan bg-cyan/10 text-cyan"
                        : "border-transparent text-muted hover:border-steel hover:bg-white/[0.02]"
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
