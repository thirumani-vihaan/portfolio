import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-blush bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-ink/70 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {portfolioData.name}</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${portfolioData.contact.email}`} data-cursor="clickable" className="hover:text-coral">
            <Mail size={16} />
          </a>
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" data-cursor="clickable" className="hover:text-coral">
            <Github size={16} />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" data-cursor="clickable" className="hover:text-coral">
            <Linkedin size={16} />
          </a>
          <Link href="/resume" className="rounded-full border border-blush px-4 py-1.5 hover:border-coral hover:text-coral" data-cursor="clickable">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
