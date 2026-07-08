"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t-4 border-obsidian bg-deepslate/80 backdrop-blur-md pb-8 pt-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        
        <div className="space-y-2">
          <p className="pixel-text text-2xl text-ink">
            {portfolioData.name}
          </p>
          <p className="readable-text text-sm text-muted">
            Crafting backend systems & high-performance applications.
          </p>
        </div>

        {/* Blocky Social Links */}
        <div className="flex gap-4">
          <a 
            href={`mailto:${portfolioData.contact.email}`} 
            className="mc-block p-3 bg-obsidian text-muted hover:text-diamond-glow transition-colors" 
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noreferrer" 
            className="mc-block p-3 bg-obsidian text-muted hover:text-diamond-glow transition-colors" 
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={portfolioData.socials.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="mc-block p-3 bg-obsidian text-muted hover:text-diamond-glow transition-colors" 
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="mt-4 flex gap-6">
          <Link href="/resume" className="diamond-link pixel-text text-lg">
            View Resume
          </Link>
          <Link href="/projects" className="diamond-link pixel-text text-lg">
            View Projects
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
