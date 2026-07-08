"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mc-block mb-10 p-8 max-w-4xl mx-auto text-center"
      >
        <h1 className="pixel-text text-5xl text-diamond-glow drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
          Completed Quests
        </h1>
        <p className="mt-4 readable-text text-lg text-ink/90 leading-relaxed">
          A showcase of backend systems, cross-platform applications, and AI integrations.
        </p>
      </motion.section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </section>
    </PageShell>
  );
}
