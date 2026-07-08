"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Trophy, Code2, Cpu } from "lucide-react";
import PageShell from "@/components/PageShell";
import MagneticWrapper from "@/components/MagneticWrapper";
import TypewriterText from "@/components/TypewriterText";
import { portfolioData } from "@/data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const statIcons = [Trophy, Code2, Cpu];

export default function HomePage() {
  return (
    <PageShell>
      {/* ── Hero ────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"
      >
        {/* Dot grid behind hero */}
        <div className="pointer-events-none absolute -left-8 -top-8 h-72 w-72 dot-grid rounded-full opacity-40" aria-hidden="true" />

        <div className="relative">
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-ink/55 font-medium">
            Portfolio 2026
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="text-ink">Hi, I&apos;m </span>
            <span className="gradient-text">{portfolioData.name}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            <TypewriterText
              phrases={[
                portfolioData.tagline,
                "Backend systems, mobile apps, and competitive programming.",
                "Kotlin · Go · C++ · Flutter · Spring Boot",
              ]}
            />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-sm leading-7 text-ink/55">
            {portfolioData.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <MagneticWrapper className="rounded-xl">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-coral px-6 py-3 text-sm font-semibold text-[#1a1a1a] shadow-lg shadow-coral/20 transition-shadow hover:shadow-coral/30"
                data-cursor="clickable"
              >
                View Projects
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper className="rounded-xl">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-blush bg-sand px-6 py-3 text-sm font-medium text-ink/75 transition-all hover:border-coral hover:text-coral"
                data-cursor="clickable"
              >
                Resume Snapshot
              </Link>
            </MagneticWrapper>
          </motion.div>

          {/* Social pills */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="rounded-lg p-2 text-ink/40 transition hover:bg-sand hover:text-coral"
              data-cursor="clickable"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-ink/40 transition hover:bg-sand hover:text-coral"
              data-cursor="clickable"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-ink/40 transition hover:bg-sand hover:text-coral"
              data-cursor="clickable"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>
        </div>

        {/* ── Contact + Stats Card ───────────── */}
        <motion.aside
          variants={fadeUp}
          className="glass-card glow-border rounded-3xl p-6"
        >
          <h2 className="font-display text-xl font-semibold text-ink">Quick Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-ink/65">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex break-all items-center gap-2.5 rounded-lg px-2 py-1.5 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              <Mail size={15} className="shrink-0" />
              {portfolioData.contact.email}
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              <Github size={15} className="shrink-0" />
              GitHub
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              <Linkedin size={15} className="shrink-0" />
              LinkedIn
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3">
            {portfolioData.stats.map((stat, i) => {
              const Icon = statIcons[i] || Code2;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.45 }}
                  className="group flex items-center gap-4 rounded-2xl border border-blush bg-paper p-4 transition-colors hover:border-coral/30"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral/15 text-coral transition-colors group-hover:bg-coral/20">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold text-ink">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-ink/50">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.aside>
      </motion.section>

      {/* ── Highlights ──────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mt-20"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-ink">Highlights</h2>
          <p className="text-sm text-ink/55">Achievements & competitive programming</p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {portfolioData.achievements.map((achievement, i) => (
            <motion.article
              key={achievement.title}
              variants={fadeUp}
              className="glass-card glow-border shimmer-sweep rounded-2xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-coral/10">
                {i === 0 && <Trophy size={18} className="text-coral" />}
                {i === 1 && <Code2 size={18} className="text-coral" />}
                {i === 2 && <Cpu size={18} className="text-coral" />}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{achievement.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/60">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </PageShell>
  );
}
