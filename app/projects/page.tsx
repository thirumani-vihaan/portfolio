"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import TypewriterText from "@/components/TypewriterText";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <PageShell>
      <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="text-xs uppercase tracking-[0.25em] text-ink/65">Work</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-3xl leading-7 text-ink/70">
          <TypewriterText
            phrases={[
              "A curated set of builds that combine practical engineering with a product-first mindset.",
              "Production-minded projects with clean UX and reliable functionality."
            ]}
          />
        </p>
      </motion.section>

      <section className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl text-ink">Featured Projects</h2>
          <p className="text-sm text-ink/65">Selected works</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
