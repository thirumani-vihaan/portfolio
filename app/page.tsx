"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import PageShell from "@/components/PageShell";
import MagneticWrapper from "@/components/MagneticWrapper";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default function HomePage() {
  return (
    <PageShell>
      <motion.section initial="hidden" animate="show" variants={fadeUp} className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-ink/65">Portfolio 2026</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-ink md:text-6xl">{portfolioData.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">{portfolioData.tagline}</p>
          <p className="mt-4 max-w-2xl leading-7 text-ink/70">{portfolioData.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticWrapper className="rounded-full">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-[#1a1a1a]"
                data-cursor="clickable"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper className="rounded-full">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-blush bg-sand px-5 py-2.5 text-sm text-ink hover:border-coral hover:text-coral"
                data-cursor="clickable"
              >
                Resume Snapshot
              </Link>
            </MagneticWrapper>
          </div>
        </div>

        <aside className="rounded-3xl border border-blush bg-sand p-6 shadow-card">
          <h2 className="font-display text-2xl text-ink">Quick Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-ink/75">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-coral" data-cursor="clickable">
              <Mail size={16} />
              {portfolioData.contact.email}
            </a>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-coral" data-cursor="clickable">
              <Github size={16} />
              GitHub
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-coral" data-cursor="clickable">
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-blush bg-paper p-4">
                <p className="font-display text-2xl text-ink">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-16"
      >
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-ink">Highlights</h2>
          <p className="text-sm text-ink/70">Competitive coding and consistent engineering practice.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolioData.achievements.map((achievement) => (
            <article key={achievement.title} className="rounded-2xl border border-blush bg-sand p-5 shadow-card">
              <h3 className="font-display text-xl text-ink">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{achievement.detail}</p>
            </article>
          ))}
        </div>
      </motion.section>
    </PageShell>
  );
}
