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
        className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] max-w-6xl mx-auto"
      >
        {/* ── Main Bio Block ───────────────────── */}
        <div className="relative">
          <motion.div variants={fadeUp} className="mb-3">
            <span className="readable-text text-xs uppercase tracking-widest text-diamond-glow font-medium bg-diamond-glow/10 px-3 py-1 rounded-full border border-diamond-glow/20">
              Information Technology Undergraduate
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-bold uppercase tracking-wide text-ink sm:text-6xl md:text-7xl pixel-text"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-8 obsidian-glass p-8">
            <p className="readable-text text-xl leading-relaxed text-ink/90 font-medium">
              {portfolioData.tagline}
            </p>
            <p className="mt-4 readable-text text-base leading-relaxed text-muted">
              {portfolioData.bio}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group flex items-center gap-2 bg-white/10 hover:bg-diamond-glow/20 border border-white/10 hover:border-diamond-glow/50 text-ink px-6 py-3 rounded-xl readable-text text-sm font-medium transition-all"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-ink px-6 py-3 rounded-xl readable-text text-sm font-medium transition-all"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Side Blocks ──────────────────────── */}
        <motion.aside variants={fadeUp} className="space-y-6">
          <div className="obsidian-glass p-6">
            <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-emerald-glow mb-5">
              Key Metrics
            </h2>
            <div className="space-y-4">
              {portfolioData.stats.map((stat, i) => {
                const Icon = statIcons[i] || Code2;
                return (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="p-2 bg-emerald-glow/10 rounded-lg">
                      <Icon size={20} className="text-emerald-glow" />
                    </div>
                    <div>
                      <span className="block readable-text text-xl font-bold text-ink leading-none">{stat.value}</span>
                      <span className="block readable-text text-xs text-muted mt-1">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="obsidian-glass p-6">
            <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-5">
              Highlights
            </h2>
            <ul className="space-y-4">
              {portfolioData.achievements.map((ach) => (
                <li key={ach.title} className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="readable-text text-sm font-bold text-ink">{ach.title}</h3>
                  <p className="readable-text text-xs text-muted mt-2 leading-relaxed">{ach.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

      </motion.section>
    </PageShell>
  );
}
