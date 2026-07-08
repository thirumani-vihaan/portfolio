"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import TechIcon from "@/components/TechIcon";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isContain = project.imageMode === "contain";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group targeting-brackets hud-panel flex h-full flex-col p-1"
      data-cursor="clickable"
    >
      {/* Decorative Top Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-steel/50">
        <span className="font-mono text-[10px] text-cyan">OBJ // {index.toString().padStart(2, '0')}</span>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 bg-orange-alert/50" />
          <span className="h-1.5 w-6 bg-cyan/50" />
        </div>
      </div>

      {/* Image Container */}
      <div
        className={`relative h-48 w-full border-b border-steel/50 overflow-hidden ${
          isContain ? "bg-void" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
            isContain ? "object-contain p-6" : "object-cover opacity-60 group-hover:opacity-90"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-cyan-glow/5 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold uppercase tracking-wider text-ink group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[10px] tracking-widest text-orange-alert">
          TIME // {project.period}
        </p>
        
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted font-sans">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={`${project.title}-${item}`}
              className="inline-flex items-center gap-1.5 border border-steel bg-void px-2 py-1 font-mono text-[10px] uppercase text-muted transition-colors group-hover:border-cyan/30"
            >
              <TechIcon label={item} />
              {item}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6 flex items-center justify-between border-t border-steel/50 pt-4">
          <span className="font-mono text-[10px] text-steel group-hover:text-cyan transition-colors">
            STATUS: DEPLOYED
          </span>
          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink transition-colors hover:text-cyan"
            data-cursor="clickable"
            aria-label={project.linkLabel}
          >
            [ LAUNCH ]
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
