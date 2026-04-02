"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import { portfolioData } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <PageShell>
      <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="text-xs uppercase tracking-[0.25em] text-ink/65">About</p>
        <h1 className="mt-3 font-display text-5xl text-ink">Who I Am</h1>
        <p className="mt-5 max-w-3xl leading-8 text-ink/75">{portfolioData.bio}</p>
      </motion.section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-blush bg-sand p-6 shadow-card">
          <h2 className="font-display text-2xl text-ink">Strengths</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/75">
            {portfolioData.strengths.map((strength) => (
              <li key={strength} className="rounded-2xl border border-blush bg-paper p-3">
                {strength}
              </li>
            ))}
          </ul>

          <h2 className="mt-7 font-display text-2xl text-ink">Interests</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {portfolioData.interests.map((interest) => (
              <span key={interest} className="rounded-full border border-blush bg-paper px-3 py-1.5 text-xs text-ink/75">
                {interest}
              </span>
            ))}
          </div>
        </article>

        <aside className="rounded-3xl border border-blush bg-sand p-6 shadow-card">
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <div className="mt-4 space-y-3 text-sm text-ink/75">
            <a href={`mailto:${portfolioData.contact.email}`} className="block hover:text-coral" data-cursor="clickable">
              {portfolioData.contact.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <Phone size={15} />
              {portfolioData.contact.mobile}
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin size={15} />
              {portfolioData.contact.location}
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
