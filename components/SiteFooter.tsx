"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-steel bg-surface/50 font-mono text-xs text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-start md:justify-between md:px-10">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan">
            <TerminalSquare size={16} />
            <span className="font-bold tracking-widest">SYSTEM.LOG</span>
          </div>
          <p className="text-[10px] text-steel">
            > USER: {portfolioData.name.toUpperCase()}
            <br />
            > ORG: VNR VJIET_
            <br />
            > UPTIME: {new Date().getFullYear()} CYCLES
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-steel">COMM.LINK</span>
            <div className="flex gap-4 text-muted">
              <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-cyan transition-colors" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold text-steel">ACTIONS</span>
            <div className="flex flex-col items-start gap-1">
              <Link href="/resume" className="hover:text-cyan transition-colors">
                [ EXTRACT_RESUME ]
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative bottom bar */}
      <div className="flex h-1 w-full bg-void">
        <div className="w-1/3 bg-cyan" />
        <div className="w-1/12 bg-orange-alert" />
      </div>
    </footer>
  );
}
