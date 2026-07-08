"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import TechIcon from "@/components/TechIcon";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ResumePage() {
  return (
    <PageShell>
      {/* ── Header ───────────────────────────── */}
      <motion.section initial="hidden" animate="show" variants={fadeUp}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/55 font-medium">
              Snapshot
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Resume
            </h1>
          </div>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume Request - ${portfolioData.name}`}
            className="inline-flex items-center gap-2 rounded-xl border border-blush bg-sand px-5 py-2.5 text-sm font-medium text-ink/70 transition-all hover:border-coral hover:text-coral"
            data-cursor="clickable"
          >
            <Download size={15} />
            Request PDF
          </a>
        </div>

        <article className="glass-card mt-7 rounded-2xl p-5 text-sm leading-7 text-ink/65">
          {portfolioData.bio}
        </article>
      </motion.section>

      {/* ── Education ─────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mt-10"
      >
        <article className="glass-card glow-border rounded-3xl p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Education</h2>
          <div className="mt-5 space-y-4">
            {portfolioData.education.map((item) => (
              <motion.div
                key={item.institution}
                variants={fadeUp}
                className="rounded-2xl border border-blush bg-paper p-5"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{item.detail}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-ink/50">
                  {item.period}
                </p>
              </motion.div>
            ))}
          </div>
        </article>
      </motion.section>

      {/* ── Projects ──────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mt-7"
      >
        <article className="glass-card glow-border rounded-3xl p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Projects</h2>
          <div className="mt-5 space-y-5">
            {portfolioData.projects.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-blush bg-paper p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <span className="rounded-lg bg-sand px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink/50">
                    {item.period}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={`${item.title}-${tech}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-blush bg-sand px-2.5 py-1 text-[11px] text-ink/70"
                    >
                      <TechIcon label={tech} />
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/60">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral/60" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-coral/80 transition-colors hover:text-coral"
                >
                  {item.linkLabel} →
                </a>
              </motion.div>
            ))}
          </div>
        </article>
      </motion.section>

      {/* ── Skills ────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mt-7"
      >
        <article className="glass-card glow-border rounded-3xl p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Programming Skills
          </h2>
          <div className="mt-5 grid gap-6">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/55">
                  {category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={`${category}-${skill}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-blush bg-paper px-3 py-1.5 text-xs text-ink/70 transition-colors hover:border-coral/25 hover:text-ink/85"
                    >
                      <TechIcon label={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </article>
      </motion.section>
    </PageShell>
  );
}
