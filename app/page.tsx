"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Code2, Cpu } from "lucide-react";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const statIcons = [Trophy, Code2, Cpu];

export default function HomePage() {
  return (
    <PageShell>
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] max-w-5xl mx-auto"
      >
        {/* ── Main Bio Block ───────────────────── */}
        <div className="relative">
          <motion.div variants={fadeUp} className="mb-2">
            <span className="pixel-text text-xl text-diamond-glow bg-diamond-base/10 px-3 py-1 rounded-sm">
              Level 2 IT Undergrad
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-bold uppercase tracking-wide text-ink sm:text-6xl md:text-7xl pixel-text drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-8 mc-block p-6">
            <p className="readable-text text-lg leading-relaxed text-ink/90">
              {portfolioData.tagline}
            </p>
            <p className="mt-4 readable-text text-base leading-relaxed text-muted">
              {portfolioData.bio}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group flex items-center gap-2 bg-diamond-base hover:bg-diamond-glow text-obsidian px-6 py-3 pixel-text text-xl shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.2),inset_4px_4px_0_rgba(255,255,255,0.4)] transition-all active:scale-95"
              >
                View Quests
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="flex items-center gap-2 bg-stone hover:bg-muted text-ink px-6 py-3 pixel-text text-xl shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.2),inset_4px_4px_0_rgba(255,255,255,0.2)] transition-all active:scale-95"
              >
                Check Stats
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Side Blocks ──────────────────────── */}
        <motion.aside variants={fadeUp} className="space-y-6">
          <div className="mc-block p-6">
            <h2 className="pixel-text text-2xl text-emerald-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              Player Stats
            </h2>
            <div className="space-y-4">
              {portfolioData.stats.map((stat, i) => {
                const Icon = statIcons[i] || Code2;
                return (
                  <div key={i} className="flex items-center gap-4 bg-obsidian p-3 border-2 border-stone">
                    <Icon size={24} className="text-emerald-glow" />
                    <div>
                      <span className="block pixel-text text-2xl text-ink leading-none">{stat.value}</span>
                      <span className="block readable-text text-sm text-muted mt-1">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mc-block p-6">
            <h2 className="pixel-text text-2xl text-diamond-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              Achievements
            </h2>
            <ul className="space-y-4">
              {portfolioData.achievements.map((ach) => (
                <li key={ach.title} className="bg-obsidian p-3 border-2 border-stone">
                  <h3 className="pixel-text text-xl text-ink">{ach.title}</h3>
                  <p className="readable-text text-sm text-muted mt-2">{ach.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

      </motion.section>
    </PageShell>
  );
}
