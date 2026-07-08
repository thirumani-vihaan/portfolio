"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
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
        className="hud-panel mb-8 p-6"
      >
        <p className="font-mono text-[10px] tracking-widest text-cyan">
          // DIR: ROOT/PROJECTS
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-widest text-ink sm:text-4xl">
          DAT.PROJECTS
        </h1>
        <p className="mt-4 font-mono text-xs text-muted max-w-2xl leading-relaxed">
          {">"} SCANNING DIRECTORY... <br/>
          {">"} 3 TARGETS ACQUIRED. <br/>
          {">"} FOCUS: BACKEND_SYSTEMS, CROSS_PLATFORM_APPS, AI_INTEGRATIONS.
        </p>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </section>
    </PageShell>
  );
}
