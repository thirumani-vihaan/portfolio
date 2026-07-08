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
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 md:px-10 pointer-events-none">
      <div className="mx-auto flex max-w-5xl items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className="group obsidian-glass px-5 py-2.5 flex items-center justify-center"
          data-cursor="clickable"
          onClick={closeMenu}
        >
          <span className="pixel-text text-xl font-bold text-ink transition-colors group-hover:text-diamond-glow">
            {portfolioData.shortName}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="obsidian-glass p-2.5 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 p-1.5 md:flex obsidian-glass">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 readable-text text-sm font-medium transition-colors rounded-xl ${
                  isActive ? "text-diamond-glow" : "text-muted hover:text-ink"
                }`}
                data-cursor="clickable"
                onClick={closeMenu}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-diamond-glow/10 rounded-xl pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-3 mx-auto max-w-5xl overflow-hidden obsidian-glass md:hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 readable-text text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? "text-diamond-glow bg-diamond-glow/10"
                        : "text-muted hover:text-ink hover:bg-white/5"
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
