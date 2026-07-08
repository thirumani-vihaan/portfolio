"use client";

import { motion } from "framer-motion";
import { Download, Crosshair } from "lucide-react";
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
      <motion.section initial="hidden" animate="show" variants={fadeUp} className="hud-panel p-6 mb-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-cyan">
              // DIR: ROOT/LOGS/RESUME
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-widest text-ink sm:text-4xl">
              LOG.RESUME
            </h1>
          </div>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume Request - ${portfolioData.name}`}
            className="group relative flex items-center gap-2 border border-cyan bg-cyan/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-cyan transition-colors hover:bg-cyan/20"
            data-cursor="clickable"
          >
            [ EXTRACT_PDF ]
            <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        <div className="mt-6 border-t border-steel/50 pt-4 font-mono text-xs leading-relaxed text-muted">
          {">"} INITIALIZING USER DATA... <br/>
          {">"} {portfolioData.bio}
        </div>
      </motion.section>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-10">
          {/* ── Education ─────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
              <Crosshair size={12} className="text-cyan" />
              <span className="font-mono text-[10px] tracking-widest text-cyan">DAT.TRAINING</span>
            </div>
            <div className="space-y-4">
              {portfolioData.education.map((item) => (
                <motion.div
                  key={item.institution}
                  variants={fadeUp}
                  className="group relative border-l-2 border-steel pl-4 transition-colors hover:border-cyan"
                >
                  <h3 className="font-display text-lg font-bold uppercase text-ink group-hover:text-cyan transition-colors">
                    {item.institution}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-muted">{item.detail}</p>
                  <p className="mt-2 font-mono text-[10px] text-orange-alert">TIME // {item.period}</p>
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
          >
            <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
              <Crosshair size={12} className="text-orange-alert" />
              <span className="font-mono text-[10px] tracking-widest text-orange-alert">SYS.CAPABILITIES</span>
            </div>
            <div className="grid gap-6">
              {Object.entries(portfolioData.skills).map(([category, items]) => (
                <motion.div key={category} variants={fadeUp}>
                  <h3 className="font-mono text-[10px] tracking-widest text-muted">
                    {category.toUpperCase()}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={`${category}-${skill}`}
                        className="inline-flex items-center gap-1.5 border border-steel bg-void px-2 py-1 font-mono text-[10px] uppercase text-muted transition-colors hover:border-cyan hover:text-ink"
                      >
                        <TechIcon label={skill} />
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
        >
          <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
            <Crosshair size={12} className="text-cyan" />
            <span className="font-mono text-[10px] tracking-widest text-cyan">LOG.DEPLOYMENTS</span>
          </div>
          <div className="space-y-8">
            {portfolioData.projects.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative border-l-2 border-steel pl-4 transition-colors hover:border-cyan"
              >
                <div className="flex flex-wrap items-end gap-3">
                  <h3 className="font-display text-lg font-bold uppercase text-ink group-hover:text-cyan transition-colors">
                    {item.title}
                  </h3>
                  <span className="mb-1 font-mono text-[10px] text-orange-alert">
                    TIME // {item.period}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={`${item.title}-${tech}`}
                      className="inline-flex items-center gap-1.5 border border-steel/50 bg-surface px-1.5 py-0.5 font-mono text-[9px] uppercase text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 font-mono text-[11px] leading-relaxed text-muted">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-cyan">{">"}</span>
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
