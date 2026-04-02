"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageShell from "@/components/PageShell";
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
      </motion.section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
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

        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Experience</h2>
          <div className="mt-4 space-y-4">
            {portfolioData.experience.map((item) => (
              <div key={`${item.role}-${item.org}`} className="rounded-2xl border border-blush bg-paper p-4">
                <h3 className="text-base font-semibold text-ink">{item.role}</h3>
                <p className="text-sm text-ink/75">{item.org}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink/60">{item.period}</p>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  {item.highlights.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Skills</h2>
          <div className="mt-4 grid gap-4">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-wider text-ink/65">{category}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={`${category}-${skill}`} className="rounded-full border border-blush bg-paper px-3 py-1 text-xs text-ink/75">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-blush bg-sand p-5 shadow-card sm:p-6">
          <h2 className="font-display text-2xl text-ink">Certifications & Coursework</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/75">
            {portfolioData.certifications.map((item) => (
              <li key={item} className="rounded-2xl border border-blush bg-paper p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </PageShell>
  );
}
