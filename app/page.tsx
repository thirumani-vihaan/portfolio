"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Crosshair, ArrowRight, Activity, Terminal } from "lucide-react";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HomePage() {
  return (
    <PageShell>
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"
      >
        {/* ── Main Panel ───────────────────────── */}
        <div className="relative">
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
            <span className="flex h-2 w-2 items-center justify-center bg-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            <span className="font-mono text-[10px] tracking-widest text-cyan uppercase">
              SYS.STATUS: ONLINE
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-bold uppercase tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            <span className="text-muted">ID: </span>
            <span className="glitch-text glitch-hover text-ink" data-text={portfolioData.name.toUpperCase()}>
              {portfolioData.name.toUpperCase()}
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-8 hud-panel p-6">
            <div className="mb-4 border-b border-steel/50 pb-2">
              <span className="font-mono text-[10px] text-cyan">USR.BIO // EXTRACT</span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-muted">
              {portfolioData.tagline}
              <br /><br />
              <span className="text-ink">PRIMARY_STACK:</span> KOTLIN, GO, C++, FLUTTER.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="group relative flex items-center gap-2 border border-cyan bg-cyan/10 px-6 py-2.5 font-mono text-xs text-cyan transition-colors hover:bg-cyan/20"
              >
                [ INIT_PROJECTS ]
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="flex items-center gap-2 border border-steel bg-surface px-6 py-2.5 font-mono text-xs text-muted transition-colors hover:border-cyan/50 hover:text-ink"
              >
                [ VIEW_LOGS ]
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Sidebar Stats ────────────────────── */}
        <motion.aside variants={fadeUp} className="space-y-6">
          <div className="hud-panel p-5 targeting-brackets group">
            <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
              <Terminal size={12} className="text-cyan" />
              <span className="font-mono text-[10px] text-cyan">SYS.PARAMETERS</span>
            </div>
            <div className="space-y-4">
              {portfolioData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-[10px] text-muted">{stat.label}</span>
                  <span className="font-display text-2xl font-bold text-ink">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hud-panel p-5 targeting-brackets group">
            <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
              <Activity size={12} className="text-orange-alert" />
              <span className="font-mono text-[10px] text-orange-alert">CRITICAL.ALERTS</span>
            </div>
            <ul className="space-y-3 font-mono text-[11px] leading-relaxed text-muted">
              {portfolioData.achievements.map((ach) => (
                <li key={ach.title} className="flex gap-2">
                  <span className="text-cyan">{'>'}</span> 
                  <span><strong className="text-ink">{ach.title}:</strong> {ach.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

      </motion.section>
    </PageShell>
  );
}
