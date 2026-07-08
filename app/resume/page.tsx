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
      <motion.section initial="hidden" animate="show" variants={fadeUp} className="mc-block p-8 mb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b-4 border-obsidian pb-6">
          <h1 className="pixel-text text-5xl text-diamond-glow drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            Character Sheet
          </h1>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume Request - ${portfolioData.name}`}
            className="group flex items-center gap-2 bg-stone hover:bg-muted text-ink px-4 py-2 pixel-text text-xl shadow-[inset_-3px_-3px_0_rgba(0,0,0,0.3),inset_3px_3px_0_rgba(255,255,255,0.2)] transition-all active:scale-95"
          >
            Download PDF
            <Download size={18} />
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
            className="mc-block p-6"
          >
            <h2 className="pixel-text text-3xl text-emerald-glow mb-6 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              Training Grounds
            </h2>
            <div className="space-y-6">
              {portfolioData.education.map((item) => (
                <motion.div key={item.institution} variants={fadeUp} className="bg-obsidian p-4 border-2 border-stone">
                  <h3 className="pixel-text text-2xl text-ink">
                    {item.institution}
                  </h3>
                  <p className="mt-2 readable-text text-sm text-ink/80">{item.detail}</p>
                  <p className="mt-3 inline-block bg-stone/50 px-2 py-1 pixel-text text-sm text-diamond-glow">
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
            className="mc-block p-6"
          >
            <h2 className="pixel-text text-3xl text-redstone-glow mb-6 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              Inventory & Skills
            </h2>
            <div className="grid gap-6">
              {Object.entries(portfolioData.skills).map(([category, items]) => (
                <motion.div key={category} variants={fadeUp} className="bg-obsidian p-4 border-2 border-stone">
                  <h3 className="pixel-text text-xl text-muted mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={`${category}-${skill}`}
                        className="inline-flex items-center gap-1.5 bg-deepslate border border-stone px-2 py-1 pixel-text text-sm text-ink"
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
          className="mc-block p-6"
        >
          <h2 className="pixel-text text-3xl text-diamond-glow mb-6 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            Quest History
          </h2>
          <div className="space-y-6">
            {portfolioData.projects.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-obsidian p-5 border-2 border-stone">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-stone pb-3">
                  <h3 className="pixel-text text-2xl text-ink">
                    {item.title}
                  </h3>
                  <span className="bg-stone/50 px-2 py-1 pixel-text text-sm text-emerald-glow">
                    {item.period}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={`${item.title}-${tech}`}
                      className="bg-deepslate border border-stone px-2 py-1 pixel-text text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 readable-text text-sm text-ink/80">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="text-diamond-glow mt-1">♦</span>
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
