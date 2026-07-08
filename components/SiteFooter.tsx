import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="relative bg-paper">
      {/* Gradient divider */}
      <div className="gradient-divider" />

      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 text-sm text-ink/60 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-base font-semibold text-ink/75">
            {portfolioData.name}
          </p>
          <p className="mt-1 text-xs text-ink/45">
            © {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            data-cursor="clickable"
            className="rounded-lg p-2 text-ink/45 transition-colors hover:bg-sand hover:text-coral"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="clickable"
            className="rounded-lg p-2 text-ink/45 transition-colors hover:bg-sand hover:text-coral"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="clickable"
            className="rounded-lg p-2 text-ink/45 transition-colors hover:bg-sand hover:text-coral"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <Link
            href="/resume"
            className="rounded-xl border border-blush bg-sand px-4 py-2 text-xs font-medium text-ink/65 transition-all hover:border-coral hover:text-coral"
            data-cursor="clickable"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
