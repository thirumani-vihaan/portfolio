"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <PageShell>
      <motion.section initial="hidden" animate="show" variants={stagger} className="obsidian-glass p-8 max-w-5xl mx-auto">
        <motion.h1 variants={fadeUp} className="pixel-text text-5xl text-diamond-glow mb-6 border-b border-white/5 pb-6">
          About Me
        </motion.h1>
        <motion.div variants={fadeUp} className="readable-text text-lg text-ink/90 leading-relaxed font-medium">
          {portfolioData.aboutIntro}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] max-w-5xl mx-auto"
      >
        {/* Strengths + Interests */}
        <motion.article variants={fadeUp} className="obsidian-glass p-6">
          <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-emerald-glow mb-4">
            Strengths
          </h2>
          <div className="space-y-3 bg-white/5 p-5 rounded-xl border border-white/5">
            {portfolioData.strengths.map((strength) => (
              <div
                key={strength}
                className="flex items-start gap-3 readable-text text-sm text-ink/80"
              >
                <span className="text-emerald-glow mt-1">•</span>
                {strength}
              </div>
            ))}
          </div>

          <h2 className="mt-8 readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-4">
            Interests
          </h2>
          <div className="flex flex-wrap gap-3 bg-white/5 p-5 rounded-xl border border-white/5">
            {portfolioData.interests.map((interest) => (
              <span
                key={interest}
                className="bg-obsidian border border-white/10 rounded-lg px-4 py-2 readable-text text-sm font-medium text-ink"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Contact card */}
        <motion.aside variants={fadeUp} className="obsidian-glass p-6">
          <h2 className="readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-4">
            Contact Info
          </h2>
          
          <div className="space-y-3 bg-white/5 p-5 rounded-xl border border-white/5">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex w-full items-center gap-3 bg-obsidian p-3 rounded-lg border border-white/5 transition-colors hover:border-diamond-glow/50 hover:bg-diamond-glow/5"
            >
              <Mail size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 break-all readable-text text-sm text-ink">{portfolioData.contact.email}</span>
            </a>
            <div className="flex w-full items-center gap-3 bg-obsidian p-3 rounded-lg border border-white/5">
              <Phone size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 readable-text text-sm text-ink">{portfolioData.contact.mobile}</span>
            </div>
            <div className="flex w-full items-center gap-3 bg-obsidian p-3 rounded-lg border border-white/5">
              <MapPin size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 readable-text text-sm text-ink">{portfolioData.contact.location}</span>
            </div>
          </div>

          <h2 className="mt-8 readable-text text-sm font-medium uppercase tracking-widest text-diamond-glow mb-4">
            Social Links
          </h2>
          <div className="space-y-3 bg-white/5 p-5 rounded-xl border border-white/5">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-obsidian p-3 rounded-lg border border-white/5 transition-colors hover:border-diamond-glow/50 hover:bg-diamond-glow/5 readable-text text-sm font-medium text-ink"
            >
              GitHub
              <ExternalLink size={16} className="text-muted" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-obsidian p-3 rounded-lg border border-white/5 transition-colors hover:border-diamond-glow/50 hover:bg-diamond-glow/5 readable-text text-sm font-medium text-ink"
            >
              LinkedIn
              <ExternalLink size={16} className="text-muted" />
            </a>
          </div>
        </motion.aside>
      </motion.section>
    </PageShell>
  );
}
