"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <PageShell>
      <motion.section initial="hidden" animate="show" variants={stagger}>
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-ink/55 font-medium">
          About
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Who I Am
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-base leading-8 text-ink/65">
          {portfolioData.aboutIntro}
        </motion.p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mt-12 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Strengths + Interests */}
        <motion.article variants={fadeUp} className="glass-card glow-border rounded-3xl p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Strengths</h2>
          <ul className="mt-5 space-y-2.5">
            {portfolioData.strengths.map((strength) => (
              <li
                key={strength}
                className="flex items-start gap-3 rounded-xl border border-blush bg-paper p-3.5 text-sm text-ink/65"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {strength}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink">Interests</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {portfolioData.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-blush bg-paper px-3.5 py-1.5 text-xs font-medium text-ink/65 transition-colors hover:border-coral/25 hover:text-coral"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Contact card */}
        <motion.aside variants={fadeUp} className="glass-card glow-border rounded-3xl p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-ink/65">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              <Mail size={15} className="shrink-0 text-coral/70" />
              <span className="min-w-0 break-all">{portfolioData.contact.email}</span>
            </a>
            <div className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5">
              <Phone size={15} className="shrink-0 text-coral/70" />
              <span className="min-w-0">{portfolioData.contact.mobile}</span>
            </div>
            <div className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5">
              <MapPin size={15} className="shrink-0 text-coral/70" />
              <span className="min-w-0">{portfolioData.contact.location}</span>
            </div>
          </div>

          <div className="gradient-divider my-5" />

          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Links</h3>
          <div className="mt-3 space-y-2">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-ink/65 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              GitHub
              <ExternalLink size={12} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-ink/65 transition hover:bg-paper hover:text-coral"
              data-cursor="clickable"
            >
              LinkedIn
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.aside>
      </motion.section>
    </PageShell>
  );
}
