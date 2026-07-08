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
      <motion.section initial="hidden" animate="show" variants={stagger} className="mc-block p-8 max-w-5xl mx-auto">
        <motion.h1 variants={fadeUp} className="pixel-text text-5xl text-diamond-glow drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] mb-6 border-b-4 border-obsidian pb-6">
          Player Profile
        </motion.h1>
        <motion.div variants={fadeUp} className="readable-text text-lg text-ink/90 leading-relaxed">
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
        <motion.article variants={fadeUp} className="mc-block p-6">
          <h2 className="pixel-text text-3xl text-emerald-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            Core Passives
          </h2>
          <div className="space-y-3 bg-obsidian p-4 border-2 border-stone">
            {portfolioData.strengths.map((strength) => (
              <div
                key={strength}
                className="flex items-start gap-3 readable-text text-sm text-ink/80"
              >
                <span className="text-emerald-glow mt-1">♦</span>
                {strength}
              </div>
            ))}
          </div>

          <h2 className="mt-8 pixel-text text-3xl text-redstone-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            Active Pursuits
          </h2>
          <div className="flex flex-wrap gap-3 bg-obsidian p-4 border-2 border-stone">
            {portfolioData.interests.map((interest) => (
              <span
                key={interest}
                className="bg-deepslate border border-stone px-3 py-1.5 pixel-text text-lg text-ink"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Contact card */}
        <motion.aside variants={fadeUp} className="mc-block p-6">
          <h2 className="pixel-text text-3xl text-diamond-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            Multiplayer Server
          </h2>
          
          <div className="space-y-4 bg-obsidian p-4 border-2 border-stone">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex w-full items-center gap-3 bg-deepslate p-3 border border-stone transition-colors hover:border-diamond-glow hover:bg-diamond-base/10"
            >
              <Mail size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 break-all readable-text text-sm text-ink">{portfolioData.contact.email}</span>
            </a>
            <div className="flex w-full items-center gap-3 bg-deepslate p-3 border border-stone">
              <Phone size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 readable-text text-sm text-ink">{portfolioData.contact.mobile}</span>
            </div>
            <div className="flex w-full items-center gap-3 bg-deepslate p-3 border border-stone">
              <MapPin size={18} className="shrink-0 text-diamond-glow" />
              <span className="min-w-0 readable-text text-sm text-ink">{portfolioData.contact.location}</span>
            </div>
          </div>

          <h2 className="mt-8 pixel-text text-3xl text-diamond-glow mb-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            External Links
          </h2>
          <div className="space-y-3 bg-obsidian p-4 border-2 border-stone">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-deepslate p-3 border border-stone transition-colors hover:border-diamond-glow hover:bg-diamond-base/10 pixel-text text-xl text-ink"
            >
              GitHub
              <ExternalLink size={16} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-deepslate p-3 border border-stone transition-colors hover:border-diamond-glow hover:bg-diamond-base/10 pixel-text text-xl text-ink"
            >
              LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.aside>
      </motion.section>
    </PageShell>
  );
}
