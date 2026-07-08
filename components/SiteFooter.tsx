"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-obsidian/40 backdrop-blur-md py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center px-6">
        
        <div className="space-y-3">
          <p className="pixel-text text-2xl text-ink">
            {portfolioData.name}
          </p>
          <p className="readable-text text-sm text-muted max-w-sm mx-auto">
            Crafting backend systems & high-performance mobile applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href={`mailto:${portfolioData.contact.email}`} 
            className="p-3 bg-white/5 border border-white/5 rounded-xl text-muted hover:text-diamond-glow hover:border-diamond-glow/30 transition-all" 
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-white/5 border border-white/5 rounded-xl text-muted hover:text-diamond-glow hover:border-diamond-glow/30 transition-all" 
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href={portfolioData.socials.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-white/5 border border-white/5 rounded-xl text-muted hover:text-diamond-glow hover:border-diamond-glow/30 transition-all" 
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <div className="mt-2 flex gap-8">
          <Link href="/resume" className="readable-text text-sm font-medium text-muted hover:text-diamond-glow transition-colors">
            Resume
          </Link>
          <Link href="/projects" className="readable-text text-sm font-medium text-muted hover:text-diamond-glow transition-colors">
            Projects
          </Link>
          <Link href="/about" className="readable-text text-sm font-medium text-muted hover:text-diamond-glow transition-colors">
            About
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
