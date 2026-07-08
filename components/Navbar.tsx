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
      <div className="mx-auto flex max-w-4xl items-center justify-between pointer-events-auto">
        
        {/* Logo Block */}
        <Link
          href="/"
          className="group mc-block px-4 py-2 flex items-center justify-center bg-obsidian"
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
          className="mc-block p-2 text-ink md:hidden bg-obsidian"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Hotbar Navigation (Desktop) */}
        <nav className="hidden items-center p-1 md:flex mc-block bg-obsidian/80">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 pixel-text text-lg transition-colors ${
                  isActive ? "text-diamond-glow" : "text-muted hover:text-ink"
                }`}
                data-cursor="clickable"
                onClick={closeMenu}
              >
                {/* Active Hotbar Slot Selection (Like Minecraft inventory selection) */}
                {isActive && (
                  <motion.div
                    layoutId="hotbar-select"
                    className="absolute inset-0 border-2 border-diamond-glow pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {/* Number hint like hotbar keys */}
                <span className="absolute bottom-0 right-1 text-[8px] text-muted/50">{idx + 1}</span>
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
            className="pointer-events-auto mt-2 mx-auto max-w-4xl overflow-hidden mc-block bg-obsidian md:hidden"
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`p-3 pixel-text text-lg transition-colors ${
                      isActive
                        ? "border-2 border-diamond-glow text-diamond-glow bg-diamond-base/10"
                        : "border-2 border-transparent text-muted hover:text-ink hover:bg-stone/20"
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
