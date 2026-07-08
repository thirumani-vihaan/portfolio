"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, TerminalSquare } from "lucide-react";
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
      <motion.section initial="hidden" animate="show" variants={stagger} className="hud-panel p-6">
        <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-widest text-cyan">
          // DIR: ROOT/USR/ABOUT
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-2 font-display text-3xl font-bold uppercase tracking-widest text-ink sm:text-4xl">
          USR.ABOUT
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-6 border-t border-steel/50 pt-4 font-mono text-xs leading-relaxed text-muted max-w-3xl">
          {">"} INITIATING BIOMETRIC SCAN... OK. <br/>
          {">"} LOADING USER PROFILE... <br/><br/>
          <span className="text-ink">{portfolioData.aboutIntro}</span>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Strengths + Interests */}
        <motion.article variants={fadeUp} className="hud-panel targeting-brackets group p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
            <TerminalSquare size={12} className="text-cyan" />
            <span className="font-mono text-[10px] tracking-widest text-cyan">USR.ATTRIBUTES</span>
          </div>

          <h2 className="mt-6 font-mono text-[10px] tracking-widest text-muted">STRENGTHS // CORE_PASSIVES</h2>
          <ul className="mt-3 space-y-2">
            {portfolioData.strengths.map((strength) => (
              <li
                key={strength}
                className="flex items-start gap-3 border-l-2 border-steel pl-3 font-mono text-[11px] text-muted transition-colors hover:border-cyan hover:text-ink"
              >
                {strength}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-mono text-[10px] tracking-widest text-muted">INTERESTS // ACTIVE_PURSUITS</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {portfolioData.interests.map((interest) => (
              <span
                key={interest}
                className="border border-steel bg-void px-3 py-1 font-mono text-[10px] uppercase text-muted transition-colors hover:border-cyan hover:text-ink"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Contact card */}
        <motion.aside variants={fadeUp} className="hud-panel p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-steel/50 pb-2">
            <TerminalSquare size={12} className="text-orange-alert" />
            <span className="font-mono text-[10px] tracking-widest text-orange-alert">COMM.UPLINKS</span>
          </div>
          
          <div className="mt-6 space-y-3 font-mono text-[11px] text-muted">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="group flex w-full items-center gap-3 border border-transparent p-2 transition hover:border-cyan/30 hover:bg-cyan/5"
              data-cursor="clickable"
            >
              <Mail size={14} className="shrink-0 text-cyan/70 transition-colors group-hover:text-cyan" />
              <span className="min-w-0 break-all">{portfolioData.contact.email}</span>
            </a>
            <div className="flex w-full items-center gap-3 p-2">
              <Phone size={14} className="shrink-0 text-cyan/70" />
              <span className="min-w-0">{portfolioData.contact.mobile}</span>
            </div>
            <div className="flex w-full items-center gap-3 p-2">
              <MapPin size={14} className="shrink-0 text-cyan/70" />
              <span className="min-w-0">{portfolioData.contact.location}</span>
            </div>
          </div>

          <div className="my-6 border-t border-steel/50" />

          <h3 className="font-mono text-[10px] tracking-widest text-muted">EXTERNAL_NETWORKS</h3>
          <div className="mt-3 space-y-2 font-mono text-[11px]">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-steel bg-void p-2 text-muted transition hover:border-cyan hover:text-cyan"
              data-cursor="clickable"
            >
              [ CONNECT: GITHUB ]
              <ExternalLink size={12} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-steel bg-void p-2 text-muted transition hover:border-cyan hover:text-cyan"
              data-cursor="clickable"
            >
              [ CONNECT: LINKEDIN ]
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.aside>
      </motion.section>
    </PageShell>
  );
}
