"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageShell from "@/components/PageShell";
import TechIcon from "@/components/TechIcon";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ResumePage() {
  return (
    <PageShell>
      {/* ── Header ───────────────────────────── */}
      <motion.section initial="hidden" animate="show" variants={fadeUp} className="obsidian-glass p-8 mb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-6">
          <h1 className="pixel-text text-5xl text-diamond-glow">
            Resume
          </h1>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume Request - ${portfolioData.name}`}
            className="group flex items-center gap-2 bg-white/5 hover:bg-diamond-glow/20 border border-white/10 text-ink px-5 py-2.5 rounded-xl readable-text text-sm font-medium transition-all"
          >
            Request PDF
            <Download size={16} />
          </a>
        </div>
        <p className="mt-6 readable-text text-lg text-ink/90 leading-relaxed">
          {portfolioData.bio}
        </p>
      </motion.section>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] max-w-5xl mx-auto">
        <div className="space-y-10">
          {/* ── Education ─────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="obsidian-glass p-6"
          >
            <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-emerald-glow mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {portfolioData.education.map((item) => (
                <motion.div key={item.institution} variants={fadeUp} className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h3 className="readable-text text-lg font-bold text-ink">
                    {item.institution}
                  </h3>
                  <p className="mt-2 readable-text text-sm text-muted">{item.detail}</p>
                  <p className="mt-3 inline-block bg-emerald-glow/10 px-3 py-1 rounded-md readable-text text-xs font-medium text-emerald-glow">
                    {item.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Skills ────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="obsidian-glass p-6"
          >
            <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-6">
              Skills
            </h2>
            <div className="grid gap-6">
              {Object.entries(portfolioData.skills).map(([category, items]) => (
                <motion.div key={category} variants={fadeUp} className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h3 className="readable-text text-xs uppercase tracking-widest text-muted mb-4 font-medium">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={`${category}-${skill}`}
                        className="inline-flex items-center gap-1.5 bg-obsidian border border-white/10 rounded-lg px-3 py-1.5 readable-text text-xs font-medium text-ink/90"
                      >
                        <TechIcon label={skill} size={14} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ── Projects Timeline ──────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="obsidian-glass p-6"
        >
          <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-6">
            Experience & Projects
          </h2>
          <div className="space-y-6">
            {portfolioData.projects.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white/5 p-5 rounded-xl border border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <h3 className="readable-text text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <span className="bg-white/10 px-3 py-1 rounded-md readable-text text-xs font-medium text-muted">
                    {item.period}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={`${item.title}-${tech}`}
                      className="bg-obsidian border border-white/10 rounded-md px-2 py-1 readable-text text-[11px] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 readable-text text-sm text-ink/80">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="text-diamond-glow/50 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageShell>
  );
}
