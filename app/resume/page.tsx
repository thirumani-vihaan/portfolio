"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import TechIcon from "@/components/TechIcon";
import { portfolioData } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <PageShell>
      <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/65">Snapshot</p>
            <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Resume</h1>
          </div>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume Request - ${portfolioData.name}`}
            className="inline-flex items-center gap-2 rounded-full border border-blush bg-sand px-5 py-2.5 text-sm text-ink hover:border-coral hover:text-coral"
            data-cursor="clickable"
          >
            <Download size={16} />
            Request PDF
          </a>
        </div>
        <article className="mt-6 rounded-2xl border border-blush bg-sand p-5 text-sm leading-7 text-ink/75">
          {portfolioData.bio}
        </article>
      </motion.section>

      <section className="mt-8">
        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Education</h2>
          <div className="mt-4 space-y-4">
            {portfolioData.education.map((item) => (
              <div key={item.institution} className="rounded-2xl border border-blush bg-paper p-4">
                <h3 className="text-base font-semibold text-ink">{item.institution}</h3>
                <p className="text-sm text-ink/70">{item.detail}</p>
                <p className="text-xs uppercase tracking-wider text-ink/60">{item.period}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6">
        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Projects</h2>
          <div className="mt-4 space-y-4">
            {portfolioData.projects.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blush bg-paper p-4">
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink/60">{item.period}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-ink/70">
                  {item.tech.map((tech) => (
                    <span
                      key={`${item.title}-${tech}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blush bg-sand px-2.5 py-1 text-xs text-ink/75"
                    >
                      <TechIcon label={tech} />
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  {item.highlights.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-coral hover:text-coral/80"
                >
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6">
        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Programming Skills</h2>
          <div className="mt-4 grid gap-4">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-wider text-ink/65">{category}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={`${category}-${skill}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blush bg-paper px-3 py-1 text-xs text-ink/75"
                    >
                      <TechIcon label={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PageShell>
  );
}
