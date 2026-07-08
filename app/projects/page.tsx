"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import TypewriterText from "@/components/TypewriterText";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-ink/40 font-medium">
          Work
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Projects
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/45">
          <TypewriterText
            phrases={[
              "Production-minded builds combining clean architecture with a product-first mindset.",
              "Backend systems, cross-platform apps, and AI-powered experiences.",
            ]}
          />
        </p>
      </motion.section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Featured Projects
          </h2>
          <p className="text-sm text-ink/35">Selected works</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
